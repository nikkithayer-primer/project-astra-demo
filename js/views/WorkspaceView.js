/**
 * WorkspaceView.js
 * Detail view for a single workspace showing documents and all related entities
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { PageHeader } from '../utils/PageHeader.js';
import { CardBuilder } from '../utils/CardBuilder.js';
import { NarrativeList } from '../components/NarrativeList.js';
import { ThemeList } from '../components/ThemeList.js';
import { SentimentChart } from '../components/SentimentChart.js';
import { MapView } from '../components/MapView.js';
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

export class WorkspaceView extends BaseView {
  constructor(container, workspaceId, options = {}) {
    super(container, options);
    this.workspaceId = workspaceId;
    this.networkViewMode = 'graph'; // 'graph' or 'list'
  }

  async render() {
    const workspace = DataService.getWorkspace(this.workspaceId);
    if (!workspace) {
      this.renderNotFound('Workspace');
      return;
    }

    // Fetch all data upfront
    const data = this.fetchWorkspaceData(workspace);
    
    // Determine active tab and build appropriate cards
    const activeTab = this.getCurrentTab();
    const hasDocuments = data.documents.length > 0;
    const cardsHtml = this.isDocumentsTab() 
      ? this.buildDocumentsCard(data)
      : this.buildDashboardCards(workspace, data);

    // Build subtitle with stats
    const docCount = data.documents.length;
    const entityCount = data.persons.length + data.organizations.length;
    const subtitleParts = [
      `<span class="text-muted">Query:</span> "${this.escapeHtml(workspace.query)}"`,
      `<span class="badge">${docCount} document${docCount !== 1 ? 's' : ''}</span>`,
      entityCount > 0 ? `<span class="badge">${entityCount} entit${entityCount !== 1 ? 'ies' : 'y'}</span>` : ''
    ].filter(Boolean).join(' ');

    // Generate tabs config
    const baseHref = `#/workspace/${this.workspaceId}`;
    const tabsConfig = hasDocuments ? this.getTabsConfig(baseHref, true) : null;

    // Status badge
    const statusBadge = workspace.status === 'archived'
      ? '<span class="badge badge-status-paused">Archived</span>'
      : '<span class="badge badge-status-active">Active</span>';

    const headerHtml = PageHeader.render({
      breadcrumbs: [
        { label: 'Dashboard', href: '#/dashboard' },
        { label: 'Workspaces', href: '#/workspaces' },
        workspace.name
      ],
      title: workspace.name,
      badge: statusBadge,
      subtitle: subtitleParts,
      description: workspace.description,
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
      initAllCardToggles(contentGrid, `workspace-${this.workspaceId}${tabSuffix}`);
    }

    // Store pre-fetched data for component initialization
    this._prefetchedData = { workspace, ...data };

    await this.initializeComponents();

    // Set up description toggles (only on dashboard tab)
    if (this.isDashboardTab()) {
      this.setupDescriptionToggles();
    }

    // Initialize drag-and-drop for cards
    this.initDragDrop();
  }

  /**
   * Fetch all data for the workspace
   */
  fetchWorkspaceData(workspace) {
    // Get all documents in the workspace
    const documents = (workspace.documentIds || [])
      .map(id => DataService.getDocument(id))
      .filter(Boolean)
      .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));

    // Aggregate all entity IDs from documents
    const personIds = new Set();
    const organizationIds = new Set();
    const narrativeIds = new Set();
    const themeIds = new Set();
    const locationIds = new Set();
    const eventIds = new Set();
    const factionIds = new Set();

    documents.forEach(doc => {
      (doc.personIds || []).forEach(id => personIds.add(id));
      (doc.organizationIds || []).forEach(id => organizationIds.add(id));
      (doc.narrativeIds || []).forEach(id => narrativeIds.add(id));
      (doc.themeIds || []).forEach(id => themeIds.add(id));
      (doc.locationIds || []).forEach(id => locationIds.add(id));
      (doc.eventIds || []).forEach(id => eventIds.add(id));
    });

    // Resolve entities from IDs
    const persons = [...personIds].map(id => DataService.getPerson(id)).filter(Boolean);
    const organizations = [...organizationIds].map(id => DataService.getOrganization(id)).filter(Boolean);
    const narratives = [...narrativeIds].map(id => DataService.getNarrative(id)).filter(Boolean);
    const themes = [...themeIds].map(id => DataService.getTheme(id)).filter(Boolean);
    const locations = [...locationIds].map(id => DataService.getLocation(id)).filter(Boolean);
    const events = [...eventIds].map(id => DataService.getEvent(id)).filter(Boolean);

    // Get factions from narratives (via factionMentions)
    narratives.forEach(n => {
      Object.keys(n.factionMentions || {}).forEach(fId => factionIds.add(fId));
    });
    const factions = this.calculateFactionSentiment(narratives, [...factionIds]);

    // Build network graph data
    const hasNetwork = persons.length > 0 || organizations.length > 0;
    const networkData = hasNetwork 
      ? DataService.buildNetworkGraph([...personIds], [...organizationIds])
      : null;

    return {
      documents,
      persons, organizations,
      narratives, themes,
      locations, events, factions,
      personIds: [...personIds],
      orgIds: [...organizationIds],
      networkData, hasNetwork
    };
  }

  /**
   * Calculate aggregated faction sentiment from narratives
   */
  calculateFactionSentiment(narratives, factionIds) {
    const factionStats = new Map();
    
    // Initialize stats for each faction
    factionIds.forEach(fId => {
      factionStats.set(fId, { totalVolume: 0, weightedSentiment: 0 });
    });
    
    // Aggregate volume and sentiment across narratives
    narratives.forEach(n => {
      Object.entries(n.factionMentions || {}).forEach(([factionId, data]) => {
        const stats = factionStats.get(factionId);
        if (stats && data.volume && typeof data.sentiment === 'number') {
          stats.totalVolume += data.volume;
          stats.weightedSentiment += data.sentiment * data.volume;
        }
      });
    });
    
    // Calculate weighted average sentiment and return factions with data
    return factionIds
      .map(fId => {
        const faction = DataService.getFaction(fId);
        if (!faction) return null;
        
        const stats = factionStats.get(fId);
        if (!stats || stats.totalVolume === 0) {
          return { ...faction, sentiment: 0, volume: 0 };
        }
        
        return {
          ...faction,
          sentiment: stats.weightedSentiment / stats.totalVolume,
          volume: stats.totalVolume
        };
      })
      .filter(Boolean)
      .sort((a, b) => b.volume - a.volume);
  }

  /**
   * Build cards for the Dashboard tab
   */
  buildDashboardCards(workspace, data) {
    const cards = [];

    // Narratives (full width at top if many)
    if (data.narratives.length > 0) {
      cards.push(CardBuilder.create('Related Narratives', 'workspace-narratives', {
        count: data.narratives.length,
        fullWidth: data.narratives.length > 3,
        halfWidth: data.narratives.length <= 3,
        noPadding: true,
        actions: CardBuilder.descriptionToggle('narrative-desc-toggle')
      }));
    }

    // Themes
    if (data.themes.length > 0) {
      cards.push(CardBuilder.create('Related Themes', 'workspace-themes', {
        count: data.themes.length,
        halfWidth: true,
        noPadding: true,
        actions: CardBuilder.descriptionToggle('theme-desc-toggle')
      }));
    }

    // People & Organizations Network
    if (data.hasNetwork) {
      const entityCount = data.personIds.length + data.orgIds.length;
      cards.push(CardBuilder.create('People & Organizations', 'workspace-network', {
        count: entityCount,
        halfWidth: true,
        actions: this.getNetworkToggleHtml('workspace-network')
      }));
    }

    // Faction Engagement
    if (data.factions.length > 0) {
      cards.push(CardBuilder.create('Faction Engagement', 'workspace-factions', {
        count: data.factions.length,
        halfWidth: true
      }));
    }

    // Locations Map
    if (data.locations.length > 0) {
      cards.push(CardBuilder.create('Mentioned Locations', 'workspace-map', {
        count: data.locations.length,
        halfWidth: true,
        noPadding: true
      }));
    }

    // Events Timeline
    if (data.events.length > 0) {
      cards.push(CardBuilder.create('Related Events', 'workspace-events', {
        count: data.events.length,
        halfWidth: true
      }));
    }

    // Show empty state if no related data
    if (cards.length === 0) {
      return `
        <div class="card card-full">
          <div class="card-body" style="padding: var(--space-2xl); text-align: center;">
            <p class="text-muted">No related entities found in the workspace documents.</p>
            <p class="text-sm text-muted mt-sm">Switch to the Documents tab to view the source documents.</p>
          </div>
        </div>
      `;
    }

    return cards.join('');
  }

  /**
   * Build card for the Documents tab
   */
  buildDocumentsCard(data) {
    if (data.documents.length === 0) {
      return `
        <div class="card card-full">
          <div class="card-body" style="padding: var(--space-2xl); text-align: center;">
            <p class="text-muted">No documents in this workspace.</p>
          </div>
        </div>
      `;
    }

    const actionsHtml = `<div class="filter-control" id="workspace-docs-column-filter"></div>`;

    return CardBuilder.create('Documents', 'workspace-documents', {
      count: data.documents.length,
      fullWidth: true,
      noPadding: true,
      actions: actionsHtml
    });
  }

  /**
   * Initialize all components based on current tab
   */
  async initializeComponents() {
    const {
      documents, narratives, themes,
      persons, organizations, locations, events, factions,
      personIds, orgIds, networkData, hasNetwork
    } = this._prefetchedData;

    // Documents Tab
    if (this.isDocumentsTab()) {
      if (documents.length > 0) {
        this._selectedDocColumns = [...DOCUMENT_DEFAULT_COLUMNS];
        
        // Column filter
        const filterContainer = document.getElementById('workspace-docs-column-filter');
        if (filterContainer) {
          this.components.columnFilter = new ColumnFilter('workspace-docs-column-filter', {
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
        
        // Document table with viewer mode
        this.components.documentTable = new DocumentTable('workspace-documents', {
          columns: this._selectedDocColumns,
          maxItems: 100,
          enableViewerMode: true,
          onDocumentClick: (doc) => {
            window.location.hash = `#/document/${doc.id}`;
          }
        });
        this.components.documentTable.update({ documents });
      }
      return;
    }

    // Dashboard Tab - Initialize all overview components

    // Narratives List
    if (narratives.length > 0) {
      this.components.narrativeList = new NarrativeList('workspace-narratives', {
        maxItems: 10,
        showSentiment: true,
        showStatus: true,
        showSparkline: true,
        showVolume: true,
        defaultShowDescription: false,
        onItemClick: (n) => {
          window.location.hash = `#/narrative/${n.id}`;
        }
      });
      this.components.narrativeList.update({ narratives });
    }

    // Themes List
    if (themes.length > 0) {
      this.components.themeList = new ThemeList('workspace-themes', {
        maxItems: 10,
        defaultShowDescription: false,
        onItemClick: (t) => {
          window.location.hash = `#/theme/${t.id}`;
        }
      });
      this.components.themeList.update({ themes });
    }

    // Network Graph (People & Orgs)
    if (hasNetwork) {
      this._networkData = {
        personIds, orgIds, persons, orgs: organizations, graphData: networkData
      };
      this.renderNetworkView();
      this.setupNetworkToggle('workspace-network');
    }

    // Faction Sentiment Chart
    if (factions.length > 0) {
      this.components.sentimentChart = new SentimentChart('workspace-factions', {
        height: Math.max(150, factions.length * 50),
        onFactionClick: (f) => {
          window.location.hash = `#/faction/${f.id}`;
        }
      });
      this.components.sentimentChart.update({ factions });
      this.components.sentimentChart.enableAutoResize();
    }

    // Map
    if (locations.length > 0) {
      this.components.map = new MapView('workspace-map', { height: 300 });
      this.components.map.update({ locations });
    }

    // Events Timeline
    if (events.length > 0) {
      this.components.timeline = new Timeline('workspace-events', {
        height: 250,
        onEventClick: (e) => {
          window.location.hash = `#/event/${e.id}`;
        }
      });
      this.components.timeline.update({ events });
    }
  }

  /**
   * Set up description toggle buttons
   */
  setupDescriptionToggles() {
    // Narrative description toggle
    const narrativeToggle = this.container.querySelector('#narrative-desc-toggle');
    if (narrativeToggle && this.components.narrativeList) {
      narrativeToggle.addEventListener('click', () => {
        const isShowing = this.components.narrativeList.toggleDescription();
        narrativeToggle.classList.toggle('active', isShowing);
      });
    }

    // Theme description toggle
    const themeToggle = this.container.querySelector('#theme-desc-toggle');
    if (themeToggle && this.components.themeList) {
      themeToggle.addEventListener('click', () => {
        const isShowing = this.components.themeList.toggleDescription();
        themeToggle.classList.toggle('active', isShowing);
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
    const container = document.getElementById('workspace-network');
    if (!container || !this._networkData) return;

    // Destroy existing component if switching from graph
    if (this.components.network) {
      this.components.network.destroy();
      this.components.network = null;
    }

    if (this.networkViewMode === 'graph') {
      this.components.network = new NetworkGraph('workspace-network', {
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

export default WorkspaceView;
