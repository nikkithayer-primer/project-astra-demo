/**
 * NarrativeView.js
 * Detail view for a single narrative
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { PageHeader } from '../utils/PageHeader.js';
import { CardBuilder } from '../utils/CardBuilder.js';
import { SubNarrativeList } from '../components/SubNarrativeList.js';
import { SentimentChart } from '../components/SentimentChart.js';
import { VennDiagram } from '../components/VennDiagram.js';
import { MapView } from '../components/MapView.js';
import { TimelineVolumeComposite } from '../components/TimelineVolumeComposite.js';
import { NetworkGraph } from '../components/NetworkGraph.js';
import { DocumentTable } from '../components/DocumentTable.js';
import { ColumnFilter } from '../components/ColumnFilter.js';
import { getSourceViewer } from '../components/SourceViewerModal.js';
import { initAllCardToggles } from '../utils/cardWidthToggle.js';
import { renderEntityList } from '../utils/entityRenderer.js';

// Column configuration for document tables
const DOCUMENT_AVAILABLE_COLUMNS = {
  classification: 'Classification',
  documentType: 'Doc Type',
  publisherName: 'Publisher',
  publisherType: 'Publisher Type',
  title: 'Title',
  excerpt: 'Excerpt',
  publishedDate: 'Published',
  narratives: 'Narratives',
  themes: 'Themes',
  events: 'Events',
  locations: 'Locations',
  persons: 'People',
  organizations: 'Organizations',
  factions: 'Factions',
  topics: 'Topics'
};

const DOCUMENT_DEFAULT_COLUMNS = ['publisherName', 'publisherType', 'title', 'publishedDate'];

export class NarrativeView extends BaseView {
  constructor(container, narrativeId, options = {}) {
    super(container, options);
    this.narrativeId = narrativeId;
    this.networkViewMode = 'graph'; // 'graph' or 'list'
  }

  async render() {
    const narrative = DataService.getNarrative(this.narrativeId);
    if (!narrative) {
      this.renderNotFound('Narrative');
      return;
    }

    // Fetch all data upfront
    const data = this.fetchNarrativeData(narrative);
    
    // Determine active tab and build appropriate cards
    const activeTab = this.getCurrentTab();
    const hasDocuments = data.documents.length > 0;
    const cardsHtml = this.isDocumentsTab() 
      ? this.buildDocumentsCard(data)
      : this.buildDashboardCards(narrative, data);

    // Build page header with tabs
    const mission = narrative.missionId 
      ? DataService.getMission(narrative.missionId) 
      : null;
    
    const subtitleParts = [
      `<span class="badge badge-${this.getSentimentClass(narrative.sentiment)}">${this.formatSentiment(narrative.sentiment)}</span>`,
      mission ? `<span class="text-muted ml-2">Mission: ${mission.name}</span>` : ''
    ].filter(Boolean).join('');

    // Generate tabs config
    const baseHref = `#/narrative/${this.narrativeId}`;
    const tabsConfig = hasDocuments ? this.getTabsConfig(baseHref, true) : null;

    const headerHtml = PageHeader.render({
      breadcrumbs: [
        { label: 'Dashboard', href: '#/dashboard' },
        { label: 'Narratives', href: '#/narratives' },
        'Detail'
      ],
      title: narrative.text,
      badge: `<span class="badge badge-status-${narrative.status || 'new'}">${this.formatStatus(narrative.status || 'new')}</span>`,
      subtitle: subtitleParts,
      description: narrative.description,
      descriptionLink: narrative.description 
        ? `<a href="#" class="source-link" id="narrative-source-link">View source</a>` 
        : '',
      tabs: tabsConfig,
      activeTab: activeTab
    });

    this.container.innerHTML = `
      ${headerHtml}
      <div class="content-area">
        <div class="content-grid">
          ${cardsHtml}
        </div>
      </div>
    `;

    // Initialize card width toggles
    if (cardsHtml) {
      const contentGrid = this.container.querySelector('.content-grid');
      const tabSuffix = this.isDocumentsTab() ? '-docs' : '';
      initAllCardToggles(contentGrid, `narrative-${this.narrativeId}${tabSuffix}`);
    }

    // Store pre-fetched data for component initialization
    this._prefetchedData = { narrative, ...data };

    await this.initializeComponents();

    // Set up source link handler
    const sourceLink = this.container.querySelector('#narrative-source-link');
    if (sourceLink) {
      sourceLink.addEventListener('click', (e) => {
        e.preventDefault();
        getSourceViewer().open(narrative, 'narrative');
      });
    }

    // Set up description toggle for themes (only on dashboard tab)
    if (this.isDashboardTab()) {
      const descToggle = this.container.querySelector('#subnarrative-desc-toggle');
      if (descToggle && this.components.subNarrativeList) {
        descToggle.addEventListener('click', () => {
          const isShowing = this.components.subNarrativeList.toggleDescription();
          descToggle.classList.toggle('active', isShowing);
        });
      }
    }

    // Initialize drag-and-drop for cards
    this.initDragDrop();
  }

  fetchNarrativeData(narrative) {
    const subNarratives = DataService.getSubNarrativesForNarrative(narrative.id);
    const factionData = DataService.getFactionsForNarrative(narrative.id);
    const factions = factionData.map(f => f.faction).filter(Boolean);
    const factionOverlaps = factions.length > 1 
      ? DataService.getFactionOverlapsFor(factions[0]?.id).filter(o =>
          o.factionIds.every(fid => factions.some(f => f.id === fid))
        )
      : [];

    // Volume/Timeline data
    const events = DataService.getEventsForNarrative(narrative.id);
    const allEvents = events.flatMap(e => [e, ...DataService.getSubEventsForEvent(e.id)]);
    const hasVolumeData = narrative.volumeOverTime && narrative.volumeOverTime.length > 0 && factions.length > 0;
    const publisherVolumeTime = DataService.getPublisherVolumeOverTime(narrative.id);
    const hasPublisherData = publisherVolumeTime.dates.length > 0 && publisherVolumeTime.publishers.length > 0;
    const hasVolumeTimeline = hasVolumeData || hasPublisherData || allEvents.length > 0;

    // Map data
    const locations = DataService.getLocationsForNarrative(narrative.id);
    const mapLocations = [
      ...locations.map(l => ({ ...l, isEvent: false })),
      ...events.filter(e => e.locationId).map(e => {
        const loc = DataService.getLocation(e.locationId);
        return loc ? { ...loc, isEvent: true, eventText: e.text } : null;
      }).filter(Boolean)
    ];

    // Network data
    const personIds = narrative.personIds || [];
    const orgIds = narrative.organizationIds || [];
    const hasNetwork = personIds.length > 0 || orgIds.length > 0;

    // Documents data
    const documents = DataService.getDocumentsForNarrative(narrative.id);

    return {
      subNarratives, factionData, factions, factionOverlaps,
      events, allEvents, hasVolumeData, publisherVolumeTime, hasPublisherData, hasVolumeTimeline,
      locations, mapLocations, personIds, orgIds, hasNetwork, documents
    };
  }

  /**
   * Build cards for the Dashboard tab (all cards except documents)
   */
  buildDashboardCards(narrative, data) {
    const cards = [];

    if (data.subNarratives.length > 0) {
      cards.push(CardBuilder.create('Themes', 'narrative-subnarratives', {
        count: data.subNarratives.length,
        fullWidth: true,
        noPadding: true,
        actions: CardBuilder.descriptionToggle('subnarrative-desc-toggle')
      }));
    }

    // Volume Over Time and Sentiment by Faction as half-width cards (side by side)
    if (data.hasVolumeTimeline) {
      cards.push(CardBuilder.create('Volume & Events', 'narrative-volume-events', { halfWidth: true }));
    }

    if (data.factionData.length > 0) {
      cards.push(CardBuilder.create('Sentiment by Faction', 'narrative-sentiment-chart', { halfWidth: true }));
    }

    if (data.factions.length >= 2) {
      cards.push(CardBuilder.create('Faction Overlaps', 'narrative-venn', { halfWidth: true }));
    }

    if (data.hasNetwork) {
      const entityCount = data.personIds.length + data.orgIds.length;
      cards.push(CardBuilder.create('People & Organizations', 'narrative-network', { 
        halfWidth: true,
        count: entityCount,
        actions: this.getNetworkToggleHtml('narrative-network')
      }));
    }

    if (data.mapLocations.length > 0) {
      cards.push(CardBuilder.create('Related Locations & Events', 'narrative-map', {
        halfWidth: true,
        noPadding: true
      }));
    }

    return cards.join('');
  }

  /**
   * Build card for the Documents tab (full-width document table)
   */
  buildDocumentsCard(data) {
    if (data.documents.length === 0) {
      return '<div class="empty-state"><p class="empty-state-text">No documents found</p></div>';
    }

    // Column filter in card header
    const actionsHtml = `<div class="filter-control" id="narrative-docs-column-filter"></div>`;

    return CardBuilder.create('Source Documents', 'narrative-documents', {
      count: data.documents.length,
      fullWidth: true,
      noPadding: true,
      actions: actionsHtml
    });
  }

  async initializeComponents() {
    const {
      narrative, subNarratives, factionData, factions, factionOverlaps,
      allEvents, hasVolumeData, publisherVolumeTime, hasPublisherData,
      mapLocations, personIds, orgIds, documents
    } = this._prefetchedData;

    // Documents Tab: Only initialize document table with column filter
    if (this.isDocumentsTab()) {
      if (documents.length > 0) {
        // Initialize selected columns (start with defaults)
        this._selectedDocColumns = [...DOCUMENT_DEFAULT_COLUMNS];
        
        // Initialize column filter
        const filterContainer = document.getElementById('narrative-docs-column-filter');
        if (filterContainer) {
          this.components.columnFilter = new ColumnFilter('narrative-docs-column-filter', {
            availableColumns: DOCUMENT_AVAILABLE_COLUMNS,
            defaultColumns: DOCUMENT_DEFAULT_COLUMNS,
            requiredColumns: ['title'],
            onChange: (columns) => {
              this._selectedDocColumns = columns;
              if (this.components.documentTable) {
                this.components.documentTable.setColumns(columns);
              }
            }
          });
          this.components.columnFilter.setSelectedColumns(this._selectedDocColumns);
          this.components.columnFilter.render();
        }
        
        // Initialize document table
        this.components.documentTable = new DocumentTable('narrative-documents', {
          columns: this._selectedDocColumns,
          maxItems: 50, // Larger limit for dedicated documents view
          enableViewerMode: true,
          onDocumentClick: (doc) => {
            window.location.hash = `#/document/${doc.id}`;
          }
        });
        this.components.documentTable.update({ documents });
      }
      return;
    }

    // Dashboard Tab: Initialize all other components

    // Themes List
    if (subNarratives.length > 0) {
      this.components.subNarrativeList = new SubNarrativeList('narrative-subnarratives', {
        onSubNarrativeClick: (s) => {
          window.location.hash = `#/subnarrative/${s.id}`;
        }
      });
      this.components.subNarrativeList.update({ subNarratives });
    }

    // Volume & Events Chart (half-width)
    if (hasVolumeData || hasPublisherData || allEvents.length > 0) {
      let volumeData = null;
      if (hasVolumeData) {
        const dates = narrative.volumeOverTime.map(d => d.date);
        const series = factions.map(f =>
          narrative.volumeOverTime.map(d => (d.factionVolumes || {})[f.id] || 0)
        );
        volumeData = { dates, series, factions };
      }

      const publisherData = hasPublisherData ? publisherVolumeTime : null;

      this.components.volumeEvents = new TimelineVolumeComposite('narrative-volume-events', {
        height: 320,
        volumeHeight: 140,
        timelineHeight: 140,
        showViewToggle: !!(volumeData && publisherData),
        onEventClick: (e) => {
          window.location.hash = `#/event/${e.id}`;
        },
        onFactionClick: (f) => {
          window.location.hash = `#/faction/${f.id}`;
        }
      });
      this.components.volumeEvents.update({
        volumeData,
        publisherData,
        events: allEvents
      });
      this.components.volumeEvents.enableAutoResize();
    }

    // Sentiment Chart
    if (factionData.length > 0) {
      const sentimentFactions = factionData.map(fd => ({
        ...fd.faction,
        sentiment: fd.sentiment
      }));

      this.components.sentimentChart = new SentimentChart('narrative-sentiment-chart', {
        height: Math.max(150, factionData.length * 50),
        onFactionClick: (f) => {
          window.location.hash = `#/faction/${f.id}`;
        }
      });
      this.components.sentimentChart.update({ factions: sentimentFactions });
      this.components.sentimentChart.enableAutoResize();
    }

    // Venn Diagram
    if (factions.length >= 2) {
      this.components.venn = new VennDiagram('narrative-venn', {
        height: 300,
        onFactionClick: (f) => {
          window.location.hash = `#/faction/${f.id}`;
        }
      });
      this.components.venn.update({
        sets: factions.map(f => ({
          id: f.id,
          name: f.name,
          size: f.memberCount || 1000,
          color: f.color
        })),
        overlaps: factionOverlaps
      });
      this.components.venn.enableAutoResize();
    }

    // Map
    if (mapLocations.length > 0) {
      this.components.map = new MapView('narrative-map', {
        height: 350
      });
      this.components.map.update({ locations: mapLocations });
    }

    // Network Graph
    if (personIds.length > 0 || orgIds.length > 0) {
      // Store data for toggling between views
      this._networkData = {
        personIds,
        orgIds,
        persons: personIds.map(id => DataService.getPerson(id)).filter(Boolean),
        orgs: orgIds.map(id => DataService.getOrganization(id)).filter(Boolean),
        graphData: DataService.buildNetworkGraph(personIds, orgIds)
      };
      
      this.renderNetworkView();
      this.setupNetworkToggle('narrative-network');
    }
  }

  /**
   * Get the HTML for the network view toggle buttons
   */
  getNetworkToggleHtml(containerId) {
    return `
      <div class="view-toggle network-view-toggle" data-container="${containerId}">
        <button class="view-toggle-btn ${this.networkViewMode === 'graph' ? 'active' : ''}" data-view="graph" title="Network Graph">
          <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="8" cy="4" r="2"/>
            <circle cx="4" cy="12" r="2"/>
            <circle cx="12" cy="12" r="2"/>
            <path d="M8 6v2M6 10l-1 1M10 10l1 1"/>
          </svg>
        </button>
        <button class="view-toggle-btn ${this.networkViewMode === 'list' ? 'active' : ''}" data-view="list" title="List View">
          <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M2 4h12M2 8h12M2 12h12"/>
          </svg>
        </button>
      </div>
    `;
  }

  /**
   * Render the network view based on current mode
   */
  renderNetworkView() {
    const container = document.getElementById('narrative-network');
    if (!container || !this._networkData) return;

    // Destroy existing component if switching from graph
    if (this.components.network) {
      this.components.network.destroy();
      this.components.network = null;
    }

    if (this.networkViewMode === 'graph') {
      this.components.network = new NetworkGraph('narrative-network', {
        height: 400,
        onNodeClick: (node) => {
          const route = node.type === 'person' ? 'person' : 'organization';
          window.location.hash = `#/${route}/${node.id}`;
        },
        onLinkClick: (link) => {
          this.showConnectingNarrativesModal(link);
        }
      });
      this.components.network.update(this._networkData.graphData);
      this.components.network.enableAutoResize();
    } else {
      this.renderNetworkListView(container);
    }
  }

  /**
   * Render list view for people and organizations
   */
  renderNetworkListView(container) {
    const { persons, orgs } = this._networkData;
    const allEntities = [
      ...persons.map(p => ({ ...p, _type: 'person' })),
      ...orgs.map(o => ({ ...o, _type: 'organization' }))
    ];

    container.innerHTML = renderEntityList(allEntities, { sortByName: true });

    // Add click listeners
    container.querySelectorAll('.entity-list-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.dataset.id;
        const type = item.dataset.type;
        window.location.hash = `#/${type}/${id}`;
      });
    });
  }

  /**
   * Set up network view toggle listeners
   */
  setupNetworkToggle(containerId) {
    const toggleContainer = document.querySelector(`.network-view-toggle[data-container="${containerId}"]`);
    if (!toggleContainer) return;

    toggleContainer.querySelectorAll('.view-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const newView = btn.dataset.view;
        if (newView !== this.networkViewMode) {
          this.networkViewMode = newView;
          
          // Update button states
          toggleContainer.querySelectorAll('.view-toggle-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.view === newView);
          });
          
          // Re-render the view
          this.renderNetworkView();
        }
      });
    });
  }
}

export default NarrativeView;
