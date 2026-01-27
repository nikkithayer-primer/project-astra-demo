/**
 * LocationView.js
 * Detail view for a location
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { PageHeader } from '../utils/PageHeader.js';
import { CardBuilder } from '../utils/CardBuilder.js';
import { MapView } from '../components/MapView.js';
import { NarrativeList } from '../components/NarrativeList.js';
import { Timeline } from '../components/Timeline.js';
import { NetworkGraph } from '../components/NetworkGraph.js';
import { DocumentTable } from '../components/DocumentTable.js';
import { ColumnFilter } from '../components/ColumnFilter.js';
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

export class LocationView extends BaseView {
  constructor(container, locationId, options = {}) {
    super(container, options);
    this.locationId = locationId;
    this.networkViewMode = 'graph'; // 'graph' or 'list'
  }

  async render() {
    const location = DataService.getLocation(this.locationId);
    if (!location) {
      this.renderNotFound('Location');
      return;
    }

    // Fetch all data upfront
    const data = this.fetchLocationData(location);
    
    // Determine active tab and build appropriate cards
    const activeTab = this.getCurrentTab();
    const hasDocuments = data.documents.length > 0;
    const cardsHtml = this.isDocumentsTab() 
      ? this.buildDocumentsCard(data)
      : this.buildDashboardCards(location, data);

    // Build subtitle
    const subtitleParts = [
      location.type ? `Type: ${location.type}` : '',
      location.coordinates ? `Coordinates: ${location.coordinates.lat.toFixed(4)}, ${location.coordinates.lng.toFixed(4)}` : ''
    ].filter(Boolean).join(' • ');

    // Generate tabs config
    const baseHref = `#/location/${this.locationId}`;
    const tabsConfig = hasDocuments ? this.getTabsConfig(baseHref, true) : null;

    // Build page header with tabs
    const headerHtml = PageHeader.render({
      breadcrumbs: [
        { label: 'Dashboard', href: '#/dashboard' },
        { label: 'Locations', href: '#/locations' },
        location.name
      ],
      title: location.name,
      subtitle: subtitleParts,
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
      initAllCardToggles(contentGrid, `location-${this.locationId}${tabSuffix}`, { 2: 'half', 3: 'half' });
    }

    // Store pre-fetched data for component initialization
    this._prefetchedData = { location, ...data };

    await this.initializeComponents();

    // Initialize drag-and-drop for cards
    this.initDragDrop();
  }

  fetchLocationData(location) {
    const narratives = DataService.getNarrativesForLocation(this.locationId);
    const events = DataService.getEventsForLocation(this.locationId);
    const persons = DataService.getPersonsForLocation(this.locationId);
    const organizations = DataService.getOrganizationsForLocation(this.locationId);
    const documents = DataService.getDocumentsForLocation(this.locationId);
    const hasNetwork = persons.length > 0 || organizations.length > 0;

    return { narratives, events, persons, organizations, documents, hasNetwork };
  }

  /**
   * Build cards for the Dashboard tab (all cards except documents)
   */
  buildDashboardCards(location, data) {
    const cards = [];

    // 1. Map (full width)
    if (location.coordinates) {
      cards.push(CardBuilder.create('Location Map', 'location-map', { noPadding: true }));
    }

    // 2. Events (full width, under map)
    if (data.events.length > 0) {
      cards.push(CardBuilder.create('Events at this Location', 'location-timeline', {
        count: data.events.length
      }));
    }

    // 3. Narratives (half width)
    if (data.narratives.length > 0) {
      cards.push(CardBuilder.create('Related Narratives', 'location-narratives', {
        count: data.narratives.length,
        halfWidth: true,
        noPadding: true
      }));
    }

    // 4. Network (half width, next to narratives)
    if (data.hasNetwork) {
      const entityCount = data.persons.length + data.organizations.length;
      cards.push(CardBuilder.create('Associated People & Organizations', 'location-network', { 
        halfWidth: true,
        count: entityCount,
        actions: this.getNetworkToggleHtml('location-network')
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
    const actionsHtml = `<div class="filter-control" id="location-docs-column-filter"></div>`;

    return CardBuilder.create('Source Documents', 'location-documents', {
      count: data.documents.length,
      fullWidth: true,
      noPadding: true,
      actions: actionsHtml
    });
  }

  async initializeComponents() {
    const { location, narratives, events, persons, organizations, documents } = this._prefetchedData;

    // Documents Tab: Only initialize document table with column filter
    if (this.isDocumentsTab()) {
      if (documents.length > 0) {
        // Initialize selected columns (start with defaults)
        this._selectedDocColumns = [...DOCUMENT_DEFAULT_COLUMNS];
        
        // Initialize column filter
        const filterContainer = document.getElementById('location-docs-column-filter');
        if (filterContainer) {
          this.components.columnFilter = new ColumnFilter('location-docs-column-filter', {
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
        this.components.documentTable = new DocumentTable('location-documents', {
          columns: this._selectedDocColumns,
          maxItems: 50,
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

    // Map centered on this location
    if (location.coordinates) {
      this.components.map = new MapView('location-map', {
        height: 400,
        defaultZoom: 12
      });
      this.components.map.update({
        locations: [location]
      });
      
      // Center on this specific location
      setTimeout(() => {
        this.components.map.centerOn(location.coordinates.lat, location.coordinates.lng, 12);
      }, 200);
    }

    // Narratives List
    if (narratives.length > 0) {
      this.components.narrativeList = new NarrativeList('location-narratives', {
        maxItems: 8,
        onNarrativeClick: (n) => {
          window.location.hash = `#/narrative/${n.id}`;
        }
      });
      this.components.narrativeList.update({ narratives });
    }

    // Events Timeline
    if (events.length > 0) {
      // Include sub-events
      const allEvents = events.flatMap(e => [
        e,
        ...DataService.getSubEventsForEvent(e.id)
      ]);

      this.components.timeline = new Timeline('location-timeline', {
        height: 280,
        onEventClick: (e) => {
          window.location.hash = `#/event/${e.id}`;
        }
      });
      this.components.timeline.update({ events: allEvents });
    }

    // Network Graph
    if (persons.length > 0 || organizations.length > 0) {
      const personIds = persons.map(p => p.id);
      const orgIds = organizations.map(o => o.id);
      
      this._networkData = {
        personIds,
        orgIds,
        persons,
        orgs: organizations,
        graphData: DataService.buildNetworkGraph(personIds, orgIds)
      };
      
      this.renderNetworkView();
      this.setupNetworkToggle('location-network');
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
    const container = document.getElementById('location-network');
    if (!container || !this._networkData) return;

    if (this.components.network) {
      this.components.network.destroy();
      this.components.network = null;
    }

    if (this.networkViewMode === 'graph') {
      this.components.network = new NetworkGraph('location-network', {
        height: 350,
        onNodeClick: (node) => {
          const route = node.type === 'person' ? 'person' : 'organization';
          window.location.hash = `#/${route}/${node.id}`;
        },
        onLinkClick: (link) => {
          this.showConnectingNarrativesModal(link);
        }
      });
      this.components.network.update(this._networkData.graphData);
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
          toggleContainer.querySelectorAll('.view-toggle-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.view === newView);
          });
          this.renderNetworkView();
        }
      });
    });
  }
}

export default LocationView;
