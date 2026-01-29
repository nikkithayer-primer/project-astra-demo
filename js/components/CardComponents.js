/**
 * CardComponents.js
 * Higher-level card components that combine CardBuilder with visualization components
 * These handle both HTML generation and component initialization
 */

import { CardBuilder } from '../utils/CardBuilder.js';
import { DragDropManager } from '../utils/DragDropManager.js';
import { DataService } from '../data/DataService.js';
import { dataStore } from '../data/DataStore.js';
import { escapeHtml } from '../utils/htmlUtils.js';
import { NetworkGraph } from './NetworkGraph.js';
import { NarrativeList } from './NarrativeList.js';
import { ThemeList } from './ThemeList.js';
import { TopicList } from './TopicList.js';
import { DocumentTable } from './DocumentTable.js';
import { ColumnFilter } from './ColumnFilter.js';
import { MapView } from './MapView.js';
import { TimelineVolumeComposite } from './TimelineVolumeComposite.js';
import { StackedAreaChart } from './StackedAreaChart.js';
import { SentimentChart } from './SentimentChart.js';
import { VennDiagram } from './VennDiagram.js';

// Standard column configuration for document tables
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

const DOCUMENT_DEFAULT_COLUMNS = ['classification', 'documentType', 'publisherName', 'title', 'publishedDate'];

/**
 * Base class for card components
 */
class BaseCardComponent {
  constructor(view, containerId) {
    this.view = view;
    this.containerId = containerId;
    this.component = null;
  }

  /**
   * Get the card HTML - must be implemented by subclass
   */
  getCardHtml() {
    throw new Error('getCardHtml must be implemented');
  }

  /**
   * Initialize the component - must be implemented by subclass
   */
  initialize() {
    throw new Error('initialize must be implemented');
  }

  /**
   * Destroy the component
   */
  destroy() {
    if (this.component && this.component.destroy) {
      this.component.destroy();
    }
    this.component = null;
  }
}

/**
 * Network Graph Card Component
 */
export class NetworkGraphCard extends BaseCardComponent {
  constructor(view, containerId, options = {}) {
    super(view, containerId);
    this.options = options;
    this.personIds = options.personIds || [];
    this.orgIds = options.orgIds || [];
    this.excludeId = options.excludeId || null;
    this.excludeType = options.excludeType || null;
    this.title = options.title || 'People & Organizations';
    this.height = options.height || 400;
    this.halfWidth = options.halfWidth !== false;
    this.viewMode = options.defaultView || 'graph'; // 'graph' or 'list'
  }

  hasData() {
    return this.personIds.length > 0 || this.orgIds.length > 0;
  }

  getCardHtml() {
    if (!this.hasData()) return '';
    
    // Count entities
    const persons = this.personIds.map(id => DataService.getPerson(id)).filter(Boolean);
    const orgs = this.orgIds.map(id => DataService.getOrganization(id)).filter(Boolean);
    const totalCount = persons.length + orgs.length;
    
    // Build view toggle buttons
    const viewToggleHtml = `
      <div class="view-toggle network-view-toggle" data-container="${this.containerId}">
        <button class="view-toggle-btn ${this.viewMode === 'graph' ? 'active' : ''}" data-view="graph" title="Network Graph">
          <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="8" cy="4" r="2"/>
            <circle cx="4" cy="12" r="2"/>
            <circle cx="12" cy="12" r="2"/>
            <path d="M8 6v2M6 10l-1 1M10 10l1 1"/>
          </svg>
        </button>
        <button class="view-toggle-btn ${this.viewMode === 'list' ? 'active' : ''}" data-view="list" title="List View">
          <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M2 4h12M2 8h12M2 12h12"/>
          </svg>
        </button>
      </div>
    `;
    
    return CardBuilder.create(this.title, this.containerId, {
      halfWidth: this.halfWidth,
      count: totalCount,
      actions: viewToggleHtml
    });
  }

  initialize() {
    if (!this.hasData()) return null;

    // Store entities data for both views
    this.persons = this.personIds.map(id => DataService.getPerson(id)).filter(Boolean);
    this.orgs = this.orgIds.map(id => DataService.getOrganization(id)).filter(Boolean);
    this.networkData = DataService.buildNetworkGraph(this.personIds, this.orgIds);

    // Render initial view
    this.renderCurrentView();
    
    // Set up view toggle listeners
    this.setupViewToggleListeners();

    return this.component;
  }

  renderCurrentView() {
    const container = document.getElementById(this.containerId);
    if (!container) return;

    // Destroy existing component
    if (this.component && this.component.destroy) {
      this.component.destroy();
      this.component = null;
    }

    if (this.viewMode === 'graph') {
      this.renderGraphView(container);
    } else {
      this.renderListView(container);
    }
  }

  renderGraphView(container) {
    // Clear container
    container.innerHTML = '';
    
    this.component = new NetworkGraph(this.containerId, {
      height: this.height,
      onNodeClick: (node) => {
        if (this.excludeId && node.id === this.excludeId) return;
        const route = node.type === 'person' ? 'person' : 'organization';
        window.location.hash = `#/${route}/${node.id}`;
      },
      onLinkClick: (link) => {
        if (this.view.showConnectingNarrativesModal) {
          this.view.showConnectingNarrativesModal(link);
        }
      }
    });
    this.component.update(this.networkData);
    
    if (this.options.enableAutoResize !== false) {
      this.component.enableAutoResize();
    }
  }

  renderListView(container) {
    // Create list HTML
    const allEntities = [
      ...this.persons.map(p => ({ ...p, _type: 'person' })),
      ...this.orgs.map(o => ({ ...o, _type: 'organization' }))
    ].sort((a, b) => (a.name || '').localeCompare(b.name || ''));

    const listHtml = `
      <ul class="entity-list network-entity-list">
        ${allEntities.map(entity => this.renderEntityItem(entity)).join('')}
      </ul>
    `;

    container.innerHTML = listHtml;

    // Add click listeners
    container.querySelectorAll('.entity-list-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.dataset.id;
        const type = item.dataset.type;
        if (this.excludeId && id === this.excludeId) return;
        window.location.hash = `#/${type}/${id}`;
      });
    });
  }

  renderEntityItem(entity) {
    const typeLabel = entity._type === 'person' ? 'Person' : 'Organization';
    const subtitle = entity.title || entity.type || typeLabel;
    const isExcluded = this.excludeId && entity.id === this.excludeId;
    
    // Use image if available, otherwise fall back to icon
    let avatarContent;
    if (entity.imageUrl) {
      avatarContent = `<img src="${entity.imageUrl}" alt="${entity.name || ''}" class="entity-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
        <span class="entity-icon-fallback" style="display:none;">${this.getEntityIcon(entity._type)}</span>`;
    } else {
      avatarContent = this.getEntityIcon(entity._type);
    }

    return `
      <li class="entity-list-item ${isExcluded ? 'excluded' : ''}" data-id="${entity.id}" data-type="${entity._type}">
        <div class="entity-avatar ${entity._type} ${entity.imageUrl ? 'has-image' : ''}">
          ${avatarContent}
        </div>
        <div class="entity-info">
          <div class="entity-name">${entity.name || 'Unknown'}</div>
          <div class="entity-type">${subtitle}</div>
        </div>
      </li>
    `;
  }

  /**
   * Get the SVG icon for an entity type
   */
  getEntityIcon(entityType) {
    if (entityType === 'person') {
      return `<svg class="entity-icon" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.25">
          <circle cx="8" cy="4" r="2.5"/>
          <path d="M3 14c0-3 2.2-5 5-5s5 2 5 5"/>
        </svg>`;
    }
    return `<svg class="entity-icon" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 16H9.5C9.59107 16 9.67646 15.9757 9.75 15.9331C9.82354 15.9757 9.90893 16 10 16H15.5C15.7761 16 16 15.7761 16 15.5V4.5C16 4.22386 15.7761 4 15.5 4H10V0.5C10 0.223858 9.77614 0 9.5 0H0.5C0.223858 0 0 0.223858 0 0.5V15.5C0 15.7761 0.223858 16 0.5 16ZM1 15V1H9V15H7V13C7 12.7239 6.77614 12.5 6.5 12.5H3.5C3.22386 12.5 3 12.7239 3 13V15H1ZM6 13.5V15H4V13.5H6ZM10 5V15H15V5H10Z"/>
      </svg>`;
  }

  setupViewToggleListeners() {
    const toggleContainer = document.querySelector(`.network-view-toggle[data-container="${this.containerId}"]`);
    if (!toggleContainer) return;

    toggleContainer.querySelectorAll('.view-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const newView = btn.dataset.view;
        if (newView !== this.viewMode) {
          this.viewMode = newView;
          
          // Update button states
          toggleContainer.querySelectorAll('.view-toggle-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.view === newView);
          });
          
          // Re-render the view
          this.renderCurrentView();
        }
      });
    });
  }

  destroy() {
    if (this.component && this.component.destroy) {
      this.component.destroy();
    }
    this.component = null;
    this.persons = null;
    this.orgs = null;
    this.networkData = null;
  }
}

/**
 * Narrative List Card Component
 */
export class NarrativeListCard extends BaseCardComponent {
  constructor(view, containerId, options = {}) {
    super(view, containerId);
    this.options = options;
    this.narratives = options.narratives || [];
    this.title = options.title || 'Related Narratives';
    this.maxItems = options.maxItems || 8;
    this.showCount = options.showCount !== false;
  }

  hasData() {
    return this.narratives.length > 0;
  }

  getCardHtml() {
    if (!this.hasData()) return '';
    return CardBuilder.create(this.title, this.containerId, {
      count: this.showCount ? this.narratives.length : undefined,
      noPadding: true
    });
  }

  initialize() {
    if (!this.hasData()) return null;

    this.component = new NarrativeList(this.containerId, {
      maxItems: this.maxItems,
      onItemClick: (n) => {
        window.location.hash = `#/narrative/${n.id}`;
      }
    });
    this.component.update({ narratives: this.narratives });

    return this.component;
  }
}

// Document type labels for display
const DOCUMENT_TYPE_LABELS = {
  news_article: 'News Article',
  social_post: 'Social Post',
  tiktok: 'TikTok',
  internal: 'Internal'
};

/**
 * Document Table Card Component
 */
export class DocumentTableCard extends BaseCardComponent {
  constructor(view, containerId, options = {}) {
    super(view, containerId);
    this.options = options;
    this.documents = options.documents || [];
    this.title = options.title || 'Source Documents';
    this.maxItems = options.maxItems || 10;
    this.showCount = options.showCount !== false;
    this.halfWidth = options.halfWidth || false;
    this.fullWidth = options.fullWidth || false;
    this.enableViewerMode = options.enableViewerMode || false;
    this.showColumnFilter = options.showColumnFilter !== false; // Show filter by default
    this.showTypeFilter = options.showTypeFilter !== false; // Show type filter by default
    this.columns = options.columns || [...DOCUMENT_DEFAULT_COLUMNS];
    this.availableColumns = options.availableColumns || DOCUMENT_AVAILABLE_COLUMNS;
    this.columnFilterId = `${containerId}-column-filter`;
    this.typeFilterId = `${containerId}-type-filter`;
    this.columnFilter = null;
    this.documentTypeFilter = 'all';
  }

  hasData() {
    return this.documents.length > 0;
  }

  /**
   * Get document type options from available documents
   */
  getDocumentTypeOptions() {
    const types = new Set(this.documents.map(d => d.documentType).filter(Boolean));
    const options = { all: 'All Types' };
    for (const type of types) {
      options[type] = DOCUMENT_TYPE_LABELS[type] || type.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    }
    return options;
  }

  /**
   * Get filtered documents based on current type filter
   */
  getFilteredDocuments() {
    if (this.documentTypeFilter === 'all') {
      return this.documents;
    }
    return this.documents.filter(doc => {
      const docType = doc.documentType || 'news_article';
      return docType === this.documentTypeFilter;
    });
  }

  getCardHtml() {
    if (!this.hasData()) return '';
    
    // Build type filter dropdown HTML
    const typeOptions = this.getDocumentTypeOptions();
    const typeOptionsHtml = Object.entries(typeOptions).map(([key, label]) => {
      const selected = this.documentTypeFilter === key ? 'selected' : '';
      return `<option value="${key}" ${selected}>${label}</option>`;
    }).join('');
    
    // Build actions HTML with type filter and column filter
    let actionsHtml = '';
    
    // Only show type filter if there are multiple types
    if (this.showTypeFilter && Object.keys(typeOptions).length > 2) {
      actionsHtml += `
        <div class="filter-control">
          <label class="filter-label">Type</label>
          <select id="${this.typeFilterId}" class="filter-select">
            ${typeOptionsHtml}
          </select>
        </div>
      `;
    }
    
    if (this.showColumnFilter) {
      actionsHtml += `<div class="filter-control" id="${this.columnFilterId}"></div>`;
    }
    
    const filteredDocs = this.getFilteredDocuments();
    
    return CardBuilder.create(this.title, this.containerId, {
      count: this.showCount ? filteredDocs.length : undefined,
      noPadding: true,
      halfWidth: this.halfWidth,
      fullWidth: this.fullWidth,
      actions: actionsHtml
    });
  }

  initialize() {
    if (!this.hasData()) return null;

    // Check if classification should be shown
    const settings = dataStore.getSettings();
    const showClassification = settings.showClassification;
    
    // Filter available columns based on settings
    let availableColumns = { ...this.availableColumns };
    if (!showClassification) {
      delete availableColumns.classification;
    }
    
    // Filter columns based on settings
    let columns = showClassification 
      ? this.columns 
      : this.columns.filter(col => col !== 'classification');

    // Initialize column filter if enabled
    if (this.showColumnFilter) {
      const filterContainer = document.getElementById(this.columnFilterId);
      if (filterContainer) {
        this.columnFilter = new ColumnFilter(this.columnFilterId, {
          availableColumns: availableColumns,
          defaultColumns: columns,
          requiredColumns: ['title'],
          onChange: (cols) => {
            this.columns = cols;
            if (this.component) {
              this.component.setColumns(cols);
            }
          }
        });
        this.columnFilter.setSelectedColumns(columns);
        this.columnFilter.render();
      }
    }

    // Initialize document table with filtered documents
    const filteredDocs = this.getFilteredDocuments();
    this.component = new DocumentTable(this.containerId, {
      columns: columns,
      maxItems: this.maxItems,
      enableViewerMode: this.enableViewerMode,
      onDocumentClick: (doc) => {
        window.location.hash = `#/document/${doc.id}`;
      }
    });
    this.component.update({ documents: filteredDocs });

    // Attach type filter listener
    this.attachTypeFilterListener();

    return this.component;
  }

  /**
   * Attach event listener for type filter dropdown
   */
  attachTypeFilterListener() {
    const typeSelect = document.getElementById(this.typeFilterId);
    if (typeSelect) {
      typeSelect.addEventListener('change', (e) => {
        this.documentTypeFilter = e.target.value;
        const filteredDocs = this.getFilteredDocuments();
        
        // Update document count in card header
        const card = document.getElementById(this.containerId)?.closest('.card');
        if (card) {
          const countEl = card.querySelector('.card-count');
          if (countEl) {
            countEl.textContent = filteredDocs.length;
          }
        }
        
        // Update table with filtered documents
        if (this.component) {
          this.component.update({ documents: filteredDocs });
        }
      });
    }
  }

  destroy() {
    if (this.columnFilter) {
      this.columnFilter.destroy();
      this.columnFilter = null;
    }
    super.destroy();
  }
}

/**
 * Map Card Component
 */
export class MapCard extends BaseCardComponent {
  constructor(view, containerId, options = {}) {
    super(view, containerId);
    this.options = options;
    this.locations = options.locations || [];
    this.events = options.events || [];
    this.title = options.title || 'Locations';
    this.height = options.height || 350;
    this.halfWidth = options.halfWidth || false;
    this.fullWidth = options.fullWidth || false;
    this.defaultZoom = options.defaultZoom || null;
    this.centerOn = options.centerOn || null;
    this.showLocations = options.showLocations || false; // Show locations without events (checkbox)
  }

  hasData() {
    return this.locations.length > 0 || this.events.length > 0;
  }

  getCardHtml() {
    if (!this.hasData()) return '';
    return CardBuilder.create(this.title, this.containerId, {
      noPadding: true,
      halfWidth: this.halfWidth,
      fullWidth: this.fullWidth
    });
  }

  initialize() {
    if (!this.hasData()) return null;

    const mapOptions = { 
      height: this.height,
      showLocations: this.showLocations
    };
    if (this.defaultZoom) mapOptions.defaultZoom = this.defaultZoom;

    this.component = new MapView(this.containerId, mapOptions);
    this.component.update({ 
      locations: this.locations,
      events: this.events
    });

    if (this.centerOn) {
      setTimeout(() => {
        this.component.centerOn(this.centerOn.lat, this.centerOn.lng, this.centerOn.zoom || 12);
      }, 200);
    }

    return this.component;
  }
}

/**
 * Sentiment Chart Card Component
 */
export class SentimentChartCard extends BaseCardComponent {
  constructor(view, containerId, options = {}) {
    super(view, containerId);
    this.options = options;
    this.factions = options.factions || [];
    this.title = options.title || 'Sentiment';
    this.halfWidth = options.halfWidth || false;
    this.clickRoute = options.clickRoute || 'faction';
  }

  hasData() {
    return this.factions.length > 0;
  }

  getCardHtml() {
    if (!this.hasData()) return '';
    return CardBuilder.create(this.title, this.containerId, {
      halfWidth: this.halfWidth
    });
  }

  initialize() {
    if (!this.hasData()) return null;

    this.component = new SentimentChart(this.containerId, {
      height: Math.max(150, this.factions.length * 50),
      onFactionClick: (f) => {
        window.location.hash = `#/${this.clickRoute}/${f.id}`;
      }
    });
    this.component.update({ factions: this.factions });
    
    if (this.options.enableAutoResize !== false) {
      this.component.enableAutoResize();
    }

    return this.component;
  }
}

/**
 * Venn Diagram Card Component
 */
export class VennDiagramCard extends BaseCardComponent {
  constructor(view, containerId, options = {}) {
    super(view, containerId);
    this.options = options;
    this.factions = options.factions || [];
    this.overlaps = options.overlaps || [];
    this.title = options.title || 'Faction Overlaps';
    this.height = options.height || 300;
    this.halfWidth = options.halfWidth || false;
    this.excludeId = options.excludeId || null;
  }

  hasData() {
    // Ensure we have at least one valid faction with id and name
    return this.factions.some(f => f && f.id && f.name);
  }

  getCardHtml() {
    if (!this.hasData()) return '';
    return CardBuilder.create(this.title, this.containerId, {
      halfWidth: this.halfWidth
    });
  }

  initialize() {
    if (!this.hasData()) return null;

    this.component = new VennDiagram(this.containerId, {
      height: this.height,
      onFactionClick: (f) => {
        if (this.excludeId && f.id === this.excludeId) return;
        window.location.hash = `#/faction/${f.id}`;
      }
    });
    
    // Filter out any undefined/null factions and ensure valid data
    const validFactions = this.factions.filter(f => f && f.id && f.name);
    const validFactionIds = new Set(validFactions.map(f => f.id));
    
    // Only include overlaps where all faction IDs exist in our valid factions
    const validOverlaps = (this.overlaps || []).filter(o => 
      o && o.factionIds && o.factionIds.every(fid => validFactionIds.has(fid))
    );
    
    this.component.update({
      sets: validFactions.map(f => ({
        id: f.id,
        name: f.name,
        size: f.memberCount || 1000,
        color: f.color
      })),
      overlaps: validOverlaps
    });
    
    if (this.options.enableAutoResize !== false) {
      this.component.enableAutoResize();
    }

    return this.component;
  }
}

/**
 * Theme List Card Component
 */
export class ThemeListCard extends BaseCardComponent {
  constructor(view, containerId, options = {}) {
    super(view, containerId);
    this.options = options;
    this.themes = options.themes || [];
    this.title = options.title || 'Themes';
    this.maxItems = options.maxItems || 10;
    this.showCount = options.showCount !== false;
    this.showDescriptionToggle = options.showDescriptionToggle || false;
    this.defaultShowDescription = options.defaultShowDescription || false;
  }

  hasData() {
    return this.themes.length > 0;
  }

  getCardHtml() {
    if (!this.hasData()) return '';
    
    const actionsHtml = this.showDescriptionToggle 
      ? CardBuilder.descriptionToggle(`${this.containerId}-desc-toggle`)
      : '';
    
    return CardBuilder.create(this.title, this.containerId, {
      count: this.showCount ? this.themes.length : undefined,
      noPadding: true,
      fullWidth: this.options.fullWidth || false,
      halfWidth: this.options.halfWidth || false,
      actions: actionsHtml
    });
  }

  initialize() {
    if (!this.hasData()) return null;

    this.component = new ThemeList(this.containerId, {
      maxItems: this.maxItems,
      defaultShowDescription: this.defaultShowDescription,
      onItemClick: (t) => {
        window.location.hash = `#/theme/${t.id}`;
      }
    });
    this.component.update({ themes: this.themes });

    // Set up description toggle if enabled
    if (this.showDescriptionToggle) {
      const toggle = document.getElementById(`${this.containerId}-desc-toggle`);
      if (toggle) {
        toggle.addEventListener('click', () => {
          const isShowing = this.component.toggleDescription();
          toggle.classList.toggle('active', isShowing);
        });
      }
    }

    return this.component;
  }
}

/**
 * Topic List Card Component
 */
export class TopicListCard extends BaseCardComponent {
  constructor(view, containerId, options = {}) {
    super(view, containerId);
    this.options = options;
    this.topics = options.topics || [];
    this.title = options.title || 'Topics';
    this.maxItems = options.maxItems || 5;
    this.showCount = options.showCount !== false;
    this.showSparkline = options.showSparkline !== false;
    this.showVolume = options.showVolume !== false;
    this.showDuration = options.showDuration !== false;
    this.showBulletPoints = options.showBulletPoints || false;
  }

  hasData() {
    return this.topics.length > 0;
  }

  getCardHtml() {
    if (!this.hasData()) return '';
    return CardBuilder.create(this.title, this.containerId, {
      count: this.showCount ? this.topics.length : undefined,
      noPadding: true,
      fullWidth: this.options.fullWidth || false,
      halfWidth: this.options.halfWidth || false
    });
  }

  initialize() {
    if (!this.hasData()) return null;

    this.component = new TopicList(this.containerId, {
      maxItems: this.maxItems,
      showSparkline: this.showSparkline,
      showVolume: this.showVolume,
      showDuration: this.showDuration,
      showBulletPoints: this.showBulletPoints,
      onItemClick: (t) => {
        window.location.hash = `#/topic/${t.id}`;
      }
    });
    this.component.update({ topics: this.topics });

    return this.component;
  }
}

/**
 * Timeline Volume Composite Card Component
 * Combines volume chart with timeline events
 */
export class TimelineVolumeCompositeCard extends BaseCardComponent {
  constructor(view, containerId, options = {}) {
    super(view, containerId);
    this.options = options;
    this.volumeData = options.volumeData || null;
    this.publisherData = options.publisherData || null;
    this.events = options.events || [];
    this.title = options.title || 'Volume & Events';
    this.height = options.height || 320;
    this.volumeHeight = options.volumeHeight || 140;
    this.timelineHeight = options.timelineHeight || 140;
    this.showViewToggle = options.showViewToggle || false;
  }

  hasData() {
    const hasVolumeData = this.volumeData && this.volumeData.dates && this.volumeData.dates.length > 0;
    const hasPublisherData = this.publisherData && this.publisherData.dates && this.publisherData.dates.length > 0;
    return hasVolumeData || hasPublisherData || this.events.length > 0;
  }

  getCardHtml() {
    if (!this.hasData()) return '';
    return CardBuilder.create(this.title, this.containerId, {
      fullWidth: this.options.fullWidth || false,
      halfWidth: this.options.halfWidth || false
    });
  }

  initialize() {
    if (!this.hasData()) return null;

    this.component = new TimelineVolumeComposite(this.containerId, {
      height: this.height,
      volumeHeight: this.volumeHeight,
      timelineHeight: this.timelineHeight,
      showViewToggle: this.showViewToggle,
      onEventClick: (e) => {
        window.location.hash = `#/event/${e.id}`;
      },
      onFactionClick: (f) => {
        window.location.hash = `#/faction/${f.id}`;
      }
    });
    this.component.update({
      volumeData: this.volumeData,
      publisherData: this.publisherData,
      events: this.events
    });
    
    if (this.options.enableAutoResize !== false) {
      this.component.enableAutoResize();
    }

    return this.component;
  }
}

/**
 * Stacked Area Chart Card Component
 * For volume over time visualization
 */
export class StackedAreaChartCard extends BaseCardComponent {
  constructor(view, containerId, options = {}) {
    super(view, containerId);
    this.options = options;
    this.chartData = options.chartData || null; // { dates, series, factions }
    this.title = options.title || 'Volume Over Time';
    this.height = options.height || 250;
    this.showLegend = options.showLegend !== false;
    this.showCount = options.showCount || false;
    this.count = options.count || null;
  }

  hasData() {
    return this.chartData && 
           this.chartData.dates && 
           this.chartData.dates.length > 0 &&
           this.chartData.series &&
           this.chartData.series.length > 0;
  }

  getCardHtml() {
    if (!this.hasData()) return '';
    return CardBuilder.create(this.title, this.containerId, {
      count: this.showCount ? this.count : undefined,
      fullWidth: this.options.fullWidth || false,
      halfWidth: this.options.halfWidth || false
    });
  }

  initialize() {
    if (!this.hasData()) return null;

    this.component = new StackedAreaChart(this.containerId, {
      height: this.height,
      showLegend: this.showLegend,
      onFactionClick: (f) => {
        window.location.hash = `#/faction/${f.id}`;
      }
    });
    this.component.update(this.chartData);
    
    if (this.options.enableAutoResize !== false) {
      this.component.enableAutoResize();
    }

    return this.component;
  }
}

/**
 * Bullet Points Card Component
 * Displays a list of key points or bullet items
 */
export class BulletPointsCard extends BaseCardComponent {
  constructor(view, containerId, options = {}) {
    super(view, containerId);
    this.options = options;
    this.bulletPoints = options.bulletPoints || [];
    this.title = options.title || 'Key Points';
    this.sourceType = options.sourceType || null;
    this.sourceId = options.sourceId || null;
  }

  hasData() {
    return this.bulletPoints && this.bulletPoints.length > 0;
  }

  getCardHtml() {
    if (!this.hasData()) return '';
    return CardBuilder.create(this.title, this.containerId, {
      fullWidth: this.options.fullWidth || false,
      halfWidth: this.options.halfWidth || false
    });
  }

  initialize() {
    if (!this.hasData()) return null;

    const container = document.getElementById(this.containerId);
    if (!container) return null;

    // Note: Using imported escapeHtml from htmlUtils.js

    // Build source link HTML if sourceType and sourceId are provided
    const sourceLinkHtml = (this.sourceType && this.sourceId) 
      ? `<a href="#" class="btn btn-small btn-secondary source-link bullet-source-link" data-source-type="${this.sourceType}" data-source-id="${this.sourceId}">View source</a>`
      : '';

    container.innerHTML = `
      <ul class="bullet-points-list">
        ${this.bulletPoints.map(bp => `<li class="bullet-point-item">${escapeHtml(bp)} ${sourceLinkHtml}</li>`).join('')}
      </ul>
    `;

    return null; // No component to return, just rendered HTML
  }
}

/**
 * Card Manager - helps manage multiple card components
 */
export class CardManager {
  constructor(view, options = {}) {
    this.view = view;
    this.cards = [];
    this.dragDropManager = null;
    this.enableDragDrop = options.enableDragDrop !== false;
    this.containerSelector = options.containerSelector || '.content-grid';
  }

  /**
   * Add a card component
   * @param {BaseCardComponent} card - Card component instance
   */
  add(card) {
    this.cards.push(card);
    return this;
  }

  /**
   * Get combined HTML for all cards that have data
   * @returns {string} Combined card HTML
   */
  getHtml() {
    return this.cards
      .filter(card => card.hasData())
      .map(card => card.getCardHtml())
      .join('');
  }

  /**
   * Initialize all card components
   * @returns {Object} Map of containerId to component
   */
  initializeAll() {
    const components = {};
    for (const card of this.cards) {
      if (card.hasData()) {
        const component = card.initialize();
        if (component) {
          components[card.containerId] = component;
        }
      }
    }
    
    // Initialize drag-and-drop after cards are rendered
    if (this.enableDragDrop) {
      this.initDragDrop();
    }
    
    return components;
  }

  /**
   * Initialize drag-and-drop functionality
   */
  initDragDrop() {
    // Use setTimeout to ensure DOM is ready
    setTimeout(() => {
      const container = document.querySelector(this.containerSelector);
      if (container) {
        this.dragDropManager = new DragDropManager({
          containerSelector: this.containerSelector,
          onOrderChange: (order) => {
            // Optional: callback when card order changes
            if (this.view && this.view.onCardOrderChange) {
              this.view.onCardOrderChange(order);
            }
          }
        });
        this.dragDropManager.init(container);
      }
    }, 0);
  }

  /**
   * Reset card order for current view
   */
  resetCardOrder() {
    if (this.dragDropManager) {
      this.dragDropManager.resetOrder();
      // Reload the page to restore default order
      window.location.reload();
    }
  }

  /**
   * Destroy all card components
   */
  destroyAll() {
    // Destroy drag-drop manager
    if (this.dragDropManager) {
      this.dragDropManager.destroy();
      this.dragDropManager = null;
    }
    
    // Destroy card components
    for (const card of this.cards) {
      card.destroy();
    }
    this.cards = [];
  }
}

export default {
  NetworkGraphCard,
  NarrativeListCard,
  ThemeListCard,
  TopicListCard,
  DocumentTableCard,
  MapCard,
  TimelineVolumeCompositeCard,
  StackedAreaChartCard,
  SentimentChartCard,
  VennDiagramCard,
  BulletPointsCard,
  CardManager
};
