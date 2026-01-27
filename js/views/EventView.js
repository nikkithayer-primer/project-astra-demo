/**
 * EventView.js
 * Detail view for an event
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { PageHeader } from '../utils/PageHeader.js';
import { CardBuilder } from '../utils/CardBuilder.js';
import { Timeline } from '../components/Timeline.js';
import { MapView } from '../components/MapView.js';
import { NetworkGraph } from '../components/NetworkGraph.js';
import { NarrativeList } from '../components/NarrativeList.js';
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

export class EventView extends BaseView {
  constructor(container, eventId, options = {}) {
    super(container, options);
    this.eventId = eventId;
    this.networkViewMode = 'graph'; // 'graph' or 'list'
  }

  async render() {
    const event = DataService.getEvent(this.eventId);
    if (!event) {
      this.renderNotFound('Event');
      return;
    }

    // Fetch all data upfront
    const data = this.fetchEventData(event);
    
    // Determine active tab and build appropriate cards
    const activeTab = this.getCurrentTab();
    const hasDocuments = data.documents.length > 0;
    const cardsHtml = this.isDocumentsTab() 
      ? this.buildDocumentsCard(data)
      : this.buildDashboardCards(event, data);

    // Format date for subtitle
    const eventDate = new Date(event.date);
    const formattedDate = eventDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const subtitleParts = [
      formattedDate,
      data.location ? data.location.name : ''
    ].filter(Boolean).join(' • ');

    // Build breadcrumbs with optional parent event
    const breadcrumbs = [
      { label: 'Dashboard', href: '#/dashboard' },
      { label: 'Events', href: '#/events' }
    ];
    if (data.parentEvent) {
      breadcrumbs.push({ label: this.truncateText(data.parentEvent.text, 30), href: `#/event/${data.parentEvent.id}` });
    }
    breadcrumbs.push(this.truncateText(event.text, 40));

    // Generate tabs config
    const baseHref = `#/event/${this.eventId}`;
    const tabsConfig = hasDocuments ? this.getTabsConfig(baseHref, true) : null;

    // Build page header with tabs
    const headerHtml = PageHeader.render({
      breadcrumbs: breadcrumbs,
      title: event.text,
      subtitle: subtitleParts,
      tabs: tabsConfig,
      activeTab: activeTab
    });

    // Build parent link HTML if applicable (only on dashboard tab)
    const parentLinkHtml = data.parentEvent && this.isDashboardTab() ? `
      <div class="parent-link" onclick="window.location.hash='#/event/${data.parentEvent.id}'">
        <span class="parent-link-icon">↑</span>
        <span class="parent-link-text">${data.parentEvent.text}</span>
      </div>
    ` : '';

    this.container.innerHTML = `
      ${headerHtml}
      <div class="content-area">
        ${parentLinkHtml}
        <div class="content-grid">
          ${cardsHtml}
        </div>
      </div>
    `;

    // Initialize card width toggles
    if (cardsHtml) {
      const contentGrid = this.container.querySelector('.content-grid');
      const tabSuffix = this.isDocumentsTab() ? '-docs' : '';
      initAllCardToggles(contentGrid, `event-${this.eventId}${tabSuffix}`, { 1: 'half', 2: 'half' });
    }

    // Store pre-fetched data for component initialization
    this._prefetchedData = { event, ...data };

    await this.initializeComponents();

    // Initialize drag-and-drop for cards
    this.initDragDrop();
  }

  fetchEventData(event) {
    const parentEvent = DataService.getParentEvent(this.eventId);
    const subEvents = DataService.getSubEventsForEvent(this.eventId);
    const location = DataService.getLocationForEvent(this.eventId);
    const persons = DataService.getPersonsForEvent(this.eventId);
    const organizations = DataService.getOrganizationsForEvent(this.eventId);
    const narratives = DataService.getNarrativesForEvent(this.eventId);
    const documents = DataService.getDocumentsForEvent(this.eventId);
    const hasNetwork = persons.length > 0 || organizations.length > 0;

    return { parentEvent, subEvents, location, persons, organizations, narratives, documents, hasNetwork };
  }

  /**
   * Build cards for the Dashboard tab (all cards except documents)
   */
  buildDashboardCards(event, data) {
    const cards = [];

    // Timeline always shows (includes main event)
    const timelineTitle = data.subEvents.length > 0 
      ? `Event Timeline (${data.subEvents.length} sub-events)` 
      : 'Event Timeline';
    cards.push(CardBuilder.create(timelineTitle, 'event-timeline'));

    if (data.location) {
      cards.push(CardBuilder.create('Location', 'event-map', { halfWidth: true, noPadding: true }));
    }

    if (data.hasNetwork) {
      const entityCount = data.persons.length + data.organizations.length;
      cards.push(CardBuilder.create('People & Organizations Involved', 'event-network', { 
        halfWidth: true,
        count: entityCount,
        actions: this.getNetworkToggleHtml('event-network')
      }));
    }

    if (data.narratives.length > 0) {
      cards.push(CardBuilder.create('Related Narratives', 'event-narratives', {
        count: data.narratives.length,
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
    const actionsHtml = `<div class="filter-control" id="event-docs-column-filter"></div>`;

    return CardBuilder.create('Source Documents', 'event-documents', {
      count: data.documents.length,
      fullWidth: true,
      noPadding: true,
      actions: actionsHtml
    });
  }

  async initializeComponents() {
    const { event, subEvents, location, persons, organizations, narratives, documents } = this._prefetchedData;

    // Documents Tab: Only initialize document table with column filter
    if (this.isDocumentsTab()) {
      if (documents.length > 0) {
        // Initialize selected columns (start with defaults)
        this._selectedDocColumns = [...DOCUMENT_DEFAULT_COLUMNS];
        
        // Initialize column filter
        const filterContainer = document.getElementById('event-docs-column-filter');
        if (filterContainer) {
          this.components.columnFilter = new ColumnFilter('event-docs-column-filter', {
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
        this.components.documentTable = new DocumentTable('event-documents', {
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

    // Timeline with this event and its sub-events
    const allEvents = [event, ...subEvents];
    
    this.components.timeline = new Timeline('event-timeline', {
      height: 280,
      onEventClick: (e) => {
        if (e.id !== this.eventId) {
          window.location.hash = `#/event/${e.id}`;
        }
      }
    });
    this.components.timeline.update({ events: allEvents });

    // Map
    if (location) {
      this.components.map = new MapView('event-map', {
        height: 350,
        defaultZoom: 12
      });
      this.components.map.update({
        locations: [{ ...location, isEvent: true, eventText: event.text }]
      });
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
      this.setupNetworkToggle('event-network');
    }

    // Narratives List
    if (narratives.length > 0) {
      this.components.narrativeList = new NarrativeList('event-narratives', {
        maxItems: 8,
        onNarrativeClick: (n) => {
          window.location.hash = `#/narrative/${n.id}`;
        }
      });
      this.components.narrativeList.update({ narratives });
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
    const container = document.getElementById('event-network');
    if (!container || !this._networkData) return;

    if (this.components.network) {
      this.components.network.destroy();
      this.components.network = null;
    }

    if (this.networkViewMode === 'graph') {
      this.components.network = new NetworkGraph('event-network', {
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

export default EventView;
