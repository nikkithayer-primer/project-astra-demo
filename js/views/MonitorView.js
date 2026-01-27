/**
 * MonitorView.js
 * Detail view for a single monitor showing matched narratives, entities, and visualizations
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { PageHeader } from '../utils/PageHeader.js';
import { CardBuilder } from '../utils/CardBuilder.js';
import { NarrativeList } from '../components/NarrativeList.js';
import { TopicList } from '../components/TopicList.js';
import { SentimentChart } from '../components/SentimentChart.js';
import { MapView } from '../components/MapView.js';
import { TimelineVolumeComposite } from '../components/TimelineVolumeComposite.js';
import { NetworkGraph } from '../components/NetworkGraph.js';
import { DocumentTable } from '../components/DocumentTable.js';
import { ColumnFilter } from '../components/ColumnFilter.js';
import { getMonitorEditor } from '../components/MonitorEditorModal.js';
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

export class MonitorView extends BaseView {
  constructor(container, monitorId, options = {}) {
    super(container, options);
    this.monitorId = monitorId;
    this.networkViewMode = 'graph'; // 'graph' or 'list'
    this.monitorEditor = null;
  }

  async render() {
    const monitor = DataService.getMonitor(this.monitorId);
    if (!monitor) {
      this.renderNotFound('Monitor');
      return;
    }

    // Fetch all data upfront
    const data = this.fetchMonitorData(monitor);
    
    // Determine active tab and build appropriate cards
    const activeTab = this.getCurrentTab();
    const hasDocuments = data.documents.length > 0;
    const cardsHtml = this.isDocumentsTab() 
      ? this.buildDocumentsCard(data)
      : this.buildDashboardCards(monitor, data);

    // Build subtitle with scope info
    const scopeLogic = monitor.scope?.logic || 'OR';
    const scopeLabel = DataService.getMonitorScopeLabel(this.monitorId);
    const matchCount = data.narratives.length;
    
    const subtitleParts = [
      `<span class="logic-badge logic-${scopeLogic.toLowerCase()}">${scopeLogic}</span>`,
      `<span class="match-count">${matchCount} narrative${matchCount !== 1 ? 's' : ''} matched</span>`,
      scopeLabel ? `<span class="text-muted">Scope: ${scopeLabel}</span>` : ''
    ].filter(Boolean).join(' ');

    // Generate tabs config
    const baseHref = `#/monitor/${this.monitorId}`;
    const tabsConfig = hasDocuments ? this.getTabsConfig(baseHref, true) : null;

    // Edit button for header actions
    const editBtnHtml = `
      <button class="btn btn-small btn-secondary" id="monitor-edit-btn">
        <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M11.5 2.5l2 2M2 11l-.5 3.5L5 14l9-9-2-2-10 10z"/>
        </svg>
        Edit Monitor
      </button>
    `;

    const headerHtml = PageHeader.render({
      breadcrumbs: [
        { label: 'Dashboard', href: '#/dashboard' },
        { label: 'Monitors', href: '#/monitors' },
        monitor.name
      ],
      title: monitor.name,
      badge: monitor.enabled 
        ? `<span class="badge badge-status-active">Active</span>` 
        : `<span class="badge badge-status-paused">Paused</span>`,
      subtitle: subtitleParts,
      description: monitor.description,
      actions: editBtnHtml,
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
      initAllCardToggles(contentGrid, `monitor-${this.monitorId}${tabSuffix}`);
    }

    // Store pre-fetched data for component initialization
    this._prefetchedData = { monitor, ...data };

    await this.initializeComponents();

    // Set up edit button handler
    this.setupEditButton(monitor);

    // Set up description toggle for narratives (only on dashboard tab)
    if (this.isDashboardTab()) {
      const descToggle = this.container.querySelector('#narrative-desc-toggle');
      if (descToggle && this.components.narrativeList) {
        descToggle.addEventListener('click', () => {
          const isShowing = this.components.narrativeList.toggleDescription();
          descToggle.classList.toggle('active', isShowing);
        });
      }
    }

    // Initialize drag-and-drop for cards
    this.initDragDrop();
  }

  fetchMonitorData(monitor) {
    // Get matched content using DataService methods
    const narratives = DataService.getNarrativesForMonitor(this.monitorId);
    const events = DataService.getEventsForMonitor(this.monitorId);
    const subEvents = DataService.getSubEventsForMonitor(this.monitorId);
    const allEvents = [...events, ...subEvents];
    const alerts = DataService.getAlertsForMonitor(this.monitorId);
    
    // Get derived entities from matched narratives
    const persons = DataService.getPersonsForMonitor(this.monitorId);
    const organizations = DataService.getOrganizationsForMonitor(this.monitorId);
    const locations = DataService.getLocationsForMonitor(this.monitorId);
    const factions = DataService.getFactionsForMonitor(this.monitorId);
    const documents = DataService.getDocumentsForMonitor(this.monitorId);
    const topics = DataService.getTopicsForMonitor(this.monitorId);
    
    // Get aggregated volume data
    const volumeData = DataService.getAggregateVolumeForMonitor(this.monitorId);
    const hasVolumeData = volumeData.dates.length > 0 && volumeData.factions.length > 0;
    const hasVolumeTimeline = hasVolumeData || allEvents.length > 0;
    
    // Build map locations (deduplicated)
    const locationMap = new Map();
    locations.forEach(l => {
      if (!locationMap.has(l.id)) {
        locationMap.set(l.id, { ...l, isEvent: false });
      }
    });
    allEvents.filter(e => e.locationId).forEach(e => {
      const loc = DataService.getLocation(e.locationId);
      if (loc && !locationMap.has(loc.id)) {
        locationMap.set(loc.id, { ...loc, isEvent: true, eventText: e.text });
      }
    });
    const mapLocations = [...locationMap.values()];
    
    // Network data
    const personIds = persons.map(p => p.id);
    const orgIds = organizations.map(o => o.id);
    const hasNetwork = personIds.length > 0 || orgIds.length > 0;

    return {
      narratives, events, allEvents, alerts,
      persons, organizations, locations, factions, documents, topics,
      volumeData, hasVolumeData, hasVolumeTimeline,
      mapLocations, personIds, orgIds, hasNetwork
    };
  }

  /**
   * Build cards for the Dashboard tab (all cards except documents)
   */
  buildDashboardCards(monitor, data) {
    const cards = [];

    // Narratives list (full width at top)
    if (data.narratives.length > 0) {
      cards.push(CardBuilder.create('Matched Narratives', 'monitor-narratives', {
        count: data.narratives.length,
        fullWidth: true,
        noPadding: true,
        actions: CardBuilder.descriptionToggle('narrative-desc-toggle')
      }));
    }

    // Volume Over Time and Faction Engagement as half-width cards
    if (data.hasVolumeTimeline) {
      cards.push(CardBuilder.create('Volume & Events', 'monitor-volume-events', { halfWidth: true }));
    }

    if (data.factions.length > 0) {
      cards.push(CardBuilder.create('Faction Engagement', 'monitor-faction-sentiment', { halfWidth: true }));
    }

    // People & Organizations
    if (data.hasNetwork) {
      const entityCount = data.personIds.length + data.orgIds.length;
      cards.push(CardBuilder.create('People & Organizations', 'monitor-network', { 
        halfWidth: true,
        count: entityCount,
        actions: this.getNetworkToggleHtml('monitor-network')
      }));
    }

    // Locations
    if (data.mapLocations.length > 0) {
      cards.push(CardBuilder.create('Related Locations', 'monitor-map', {
        halfWidth: true,
        noPadding: true
      }));
    }

    // Topics (if any)
    if (data.topics.length > 0) {
      cards.push(CardBuilder.create('Related Topics', 'monitor-topics', {
        count: data.topics.length,
        halfWidth: true,
        noPadding: true
      }));
    }

    // Recent Alerts
    if (data.alerts.length > 0) {
      cards.push(CardBuilder.create('Recent Alerts', 'monitor-alerts', {
        count: data.alerts.length,
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
    const actionsHtml = `<div class="filter-control" id="monitor-docs-column-filter"></div>`;

    return CardBuilder.create('Source Documents', 'monitor-documents', {
      count: data.documents.length,
      fullWidth: true,
      noPadding: true,
      actions: actionsHtml
    });
  }

  async initializeComponents() {
    const {
      monitor, narratives, allEvents, alerts,
      persons, organizations, factions, documents, topics,
      volumeData, hasVolumeData, mapLocations, personIds, orgIds
    } = this._prefetchedData;

    // Documents Tab: Only initialize document table with column filter
    if (this.isDocumentsTab()) {
      if (documents.length > 0) {
        // Initialize selected columns (start with defaults)
        this._selectedDocColumns = [...DOCUMENT_DEFAULT_COLUMNS];
        
        // Initialize column filter
        const filterContainer = document.getElementById('monitor-docs-column-filter');
        if (filterContainer) {
          this.components.columnFilter = new ColumnFilter('monitor-docs-column-filter', {
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
        this.components.documentTable = new DocumentTable('monitor-documents', {
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

    // Narratives List
    if (narratives.length > 0) {
      this.components.narrativeList = new NarrativeList('monitor-narratives', {
        maxItems: 10,
        showSentiment: true,
        showStatus: true,
        showSparkline: true,
        showVolume: true,
        showSubNarratives: true,
        maxSubNarratives: 3,
        defaultShowDescription: false,
        onItemClick: (n) => {
          window.location.hash = `#/narrative/${n.id}`;
        }
      });
      this.components.narrativeList.update({ narratives });
    }

    // Volume & Events Chart
    if (hasVolumeData || allEvents.length > 0) {
      this.components.volumeEvents = new TimelineVolumeComposite('monitor-volume-events', {
        height: 320,
        volumeHeight: 140,
        timelineHeight: 140,
        showViewToggle: false,
        onEventClick: (e) => {
          window.location.hash = `#/event/${e.id}`;
        },
        onFactionClick: (f) => {
          window.location.hash = `#/faction/${f.id}`;
        }
      });
      this.components.volumeEvents.update({
        volumeData: hasVolumeData ? volumeData : null,
        publisherData: null,
        events: allEvents
      });
      this.components.volumeEvents.enableAutoResize();
    }

    // Faction Sentiment Chart
    if (factions.length > 0) {
      this.components.sentimentChart = new SentimentChart('monitor-faction-sentiment', {
        height: Math.max(150, factions.length * 50),
        onFactionClick: (f) => {
          window.location.hash = `#/faction/${f.id}`;
        }
      });
      this.components.sentimentChart.update({ factions });
      this.components.sentimentChart.enableAutoResize();
    }

    // Network Graph / Entity List
    if (personIds.length > 0 || orgIds.length > 0) {
      this._networkData = {
        personIds,
        orgIds,
        persons,
        orgs: organizations,
        graphData: DataService.buildNetworkGraph(personIds, orgIds)
      };
      
      this.renderNetworkView();
      this.setupNetworkToggle('monitor-network');
    }

    // Map
    if (mapLocations.length > 0) {
      this.components.map = new MapView('monitor-map', {
        height: 350
      });
      this.components.map.update({ locations: mapLocations });
    }

    // Topics List
    if (topics.length > 0) {
      this.components.topicList = new TopicList('monitor-topics', {
        maxItems: 5,
        showSparkline: true,
        showVolume: true,
        showDuration: true,
        showBulletPoints: false,
        onItemClick: (t) => {
          window.location.hash = `#/topic/${t.id}`;
        }
      });
      this.components.topicList.update({ topics });
    }

    // Alerts List
    if (alerts.length > 0) {
      this.renderAlertsList(alerts);
    }
  }

  /**
   * Render the alerts list manually (no dedicated component)
   */
  renderAlertsList(alerts) {
    const container = document.getElementById('monitor-alerts');
    if (!container) return;

    const alertsHtml = alerts.slice(0, 5).map(alert => {
      const typeClass = this.getAlertTypeClass(alert.type);
      const typeLabel = this.getAlertTypeLabel(alert.type);
      const timeAgo = this.formatRelativeTime(alert.triggeredAt);
      
      return `
        <div class="alert-item ${alert.acknowledged ? 'acknowledged' : ''}">
          <div class="alert-item-header">
            <span class="alert-type-badge ${typeClass}">${typeLabel}</span>
            <span class="alert-severity alert-severity-${alert.severity}">${alert.severity}</span>
            <span class="alert-time">${timeAgo}</span>
          </div>
          <div class="alert-item-description">${this.escapeHtml(alert.description)}</div>
        </div>
      `;
    }).join('');

    container.innerHTML = `<div class="alerts-list">${alertsHtml}</div>`;
  }

  /**
   * Get alert type CSS class
   */
  getAlertTypeClass(type) {
    const classes = {
      'volume_spike': 'volume',
      'sentiment_shift': 'sentiment',
      'new_narrative': 'narrative',
      'new_event': 'event',
      'faction_engagement': 'faction'
    };
    return classes[type] || 'default';
  }

  /**
   * Get alert type label
   */
  getAlertTypeLabel(type) {
    const labels = {
      'volume_spike': 'Volume Spike',
      'sentiment_shift': 'Sentiment Shift',
      'new_narrative': 'New Narrative',
      'new_event': 'New Event',
      'faction_engagement': 'Faction Engagement'
    };
    return labels[type] || type;
  }

  /**
   * Format relative time
   */
  formatRelativeTime(isoDate) {
    if (!isoDate) return '';
    const date = new Date(isoDate);
    const now = new Date();
    const diffMs = now - date;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffHours < 1) return 'Just now';
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  }

  /**
   * Setup edit button click handler
   */
  setupEditButton(monitor) {
    const editBtn = this.container.querySelector('#monitor-edit-btn');
    if (editBtn) {
      editBtn.addEventListener('click', () => {
        this.monitorEditor = getMonitorEditor();
        this.monitorEditor.openEdit(monitor, () => {
          // Re-render the view after save
          this.render();
        });
      });
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
    const container = document.getElementById('monitor-network');
    if (!container || !this._networkData) return;

    // Destroy existing component if switching from graph
    if (this.components.network) {
      this.components.network.destroy();
      this.components.network = null;
    }

    if (this.networkViewMode === 'graph') {
      this.components.network = new NetworkGraph('monitor-network', {
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

export default MonitorView;
