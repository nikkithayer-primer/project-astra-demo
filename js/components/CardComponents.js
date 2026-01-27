/**
 * CardComponents.js
 * Higher-level card components that combine CardBuilder with visualization components
 * These handle both HTML generation and component initialization
 */

import { CardBuilder } from '../utils/CardBuilder.js';
import { DragDropManager } from '../utils/DragDropManager.js';
import { DataService } from '../data/DataService.js';
import { NetworkGraph } from './NetworkGraph.js';
import { NarrativeList } from './NarrativeList.js';
import { DocumentTable } from './DocumentTable.js';
import { ColumnFilter } from './ColumnFilter.js';
import { MapView } from './MapView.js';
import { Timeline } from './Timeline.js';
import { SentimentChart } from './SentimentChart.js';
import { FactionCards } from './FactionCards.js';
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

const DOCUMENT_DEFAULT_COLUMNS = ['publisherName', 'publisherType', 'title', 'publishedDate'];

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
      onNarrativeClick: (n) => {
        window.location.hash = `#/narrative/${n.id}`;
      }
    });
    this.component.update({ narratives: this.narratives });

    return this.component;
  }
}

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
    this.columns = options.columns || [...DOCUMENT_DEFAULT_COLUMNS];
    this.availableColumns = options.availableColumns || DOCUMENT_AVAILABLE_COLUMNS;
    this.columnFilterId = `${containerId}-column-filter`;
    this.columnFilter = null;
  }

  hasData() {
    return this.documents.length > 0;
  }

  getCardHtml() {
    if (!this.hasData()) return '';
    
    // Build actions HTML with column filter placeholder
    const actionsHtml = this.showColumnFilter 
      ? `<div class="filter-control" id="${this.columnFilterId}"></div>`
      : '';
    
    return CardBuilder.create(this.title, this.containerId, {
      count: this.showCount ? this.documents.length : undefined,
      noPadding: true,
      halfWidth: this.halfWidth,
      fullWidth: this.fullWidth,
      actions: actionsHtml
    });
  }

  initialize() {
    if (!this.hasData()) return null;

    // Initialize column filter if enabled
    if (this.showColumnFilter) {
      const filterContainer = document.getElementById(this.columnFilterId);
      if (filterContainer) {
        this.columnFilter = new ColumnFilter(this.columnFilterId, {
          availableColumns: this.availableColumns,
          defaultColumns: this.columns,
          requiredColumns: ['title'],
          onChange: (columns) => {
            this.columns = columns;
            if (this.component) {
              this.component.setColumns(columns);
            }
          }
        });
        this.columnFilter.setSelectedColumns(this.columns);
        this.columnFilter.render();
      }
    }

    // Initialize document table
    this.component = new DocumentTable(this.containerId, {
      columns: this.columns,
      maxItems: this.maxItems,
      enableViewerMode: this.enableViewerMode,
      onDocumentClick: (doc) => {
        window.location.hash = `#/document/${doc.id}`;
      }
    });
    this.component.update({ documents: this.documents });

    return this.component;
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
    this.title = options.title || 'Locations';
    this.height = options.height || 350;
    this.halfWidth = options.halfWidth || false;
    this.defaultZoom = options.defaultZoom || null;
    this.centerOn = options.centerOn || null;
  }

  hasData() {
    return this.locations.length > 0;
  }

  getCardHtml() {
    if (!this.hasData()) return '';
    return CardBuilder.create(this.title, this.containerId, {
      noPadding: true,
      halfWidth: this.halfWidth
    });
  }

  initialize() {
    if (!this.hasData()) return null;

    const mapOptions = { height: this.height };
    if (this.defaultZoom) mapOptions.defaultZoom = this.defaultZoom;

    this.component = new MapView(this.containerId, mapOptions);
    this.component.update({ locations: this.locations });

    if (this.centerOn) {
      setTimeout(() => {
        this.component.centerOn(this.centerOn.lat, this.centerOn.lng, this.centerOn.zoom || 12);
      }, 200);
    }

    return this.component;
  }
}

/**
 * Timeline Card Component
 */
export class TimelineCard extends BaseCardComponent {
  constructor(view, containerId, options = {}) {
    super(view, containerId);
    this.options = options;
    this.events = options.events || [];
    this.title = options.title || 'Events';
    this.height = options.height || 250;
    this.showCount = options.showCount !== false;
    this.excludeId = options.excludeId || null;
  }

  hasData() {
    return this.events.length > 0;
  }

  getCardHtml() {
    if (!this.hasData()) return '';
    return CardBuilder.create(this.title, this.containerId, {
      count: this.showCount ? this.events.length : undefined
    });
  }

  initialize() {
    if (!this.hasData()) return null;

    this.component = new Timeline(this.containerId, {
      height: this.height,
      onEventClick: (e) => {
        if (this.excludeId && e.id === this.excludeId) return;
        window.location.hash = `#/event/${e.id}`;
      }
    });
    this.component.update({ events: this.events });

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
 * Faction Cards Card Component
 */
export class FactionCardsCard extends BaseCardComponent {
  constructor(view, containerId, options = {}) {
    super(view, containerId);
    this.options = options;
    this.factions = options.factions || [];
    this.title = options.title || 'Affiliated Factions';
    this.halfWidth = options.halfWidth || false;
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

    this.component = new FactionCards(this.containerId, {
      onFactionClick: (f) => {
        window.location.hash = `#/faction/${f.id}`;
      }
    });
    this.component.update({ factions: this.factions });

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
    return this.factions.length >= 1;
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
    this.component.update({
      sets: this.factions.map(f => ({
        id: f.id,
        name: f.name,
        size: f.memberCount || 1000,
        color: f.color
      })),
      overlaps: this.overlaps
    });
    
    if (this.options.enableAutoResize !== false) {
      this.component.enableAutoResize();
    }

    return this.component;
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
  DocumentTableCard,
  MapCard,
  TimelineCard,
  SentimentChartCard,
  FactionCardsCard,
  VennDiagramCard,
  CardManager
};
