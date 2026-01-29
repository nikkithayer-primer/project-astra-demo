/**
 * ListView.js
 * Generic list view for browsing all entities of a type
 * Supports entity type filtering for people/organizations
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { NarrativeList } from '../components/NarrativeList.js';
import { Timeline } from '../components/Timeline.js';
import { renderVerticalTimeline } from '../utils/verticalTimeline.js';
import { getEntityIcon } from '../utils/entityIcons.js';

// Entity types with labels (used for people/orgs filter - mirrors DocumentsView pattern)
const ENTITY_TYPES = {
  all: 'All Entities',
  person: 'People Only',
  organization: 'Organizations Only'
};

export class ListView extends BaseView {
  constructor(container, entityType, options = {}) {
    super(container, options);
    this.entityType = entityType;
    this.searchQuery = '';
    this.narrativeList = null;
    this.timeline = null;
    this.eventsViewMode = 'vertical'; // 'vertical' or 'horizontal' timeline
    
    // Filter state for entities view (matches DocumentsView pattern)
    this.entityTypeFilter = 'all';
  }

  async render() {
    const config = this.getConfig();
    const items = this.getItems();
    const filteredItems = this.filterItems(items);

    // Build breadcrumb based on whether this is a status-filtered view
    const breadcrumbHtml = this.options.statusFilter
      ? `<a href="#/dashboard">Dashboard</a>
         <span>/</span>
         <a href="#/narratives">Narratives</a>
         <span>/</span>
         ${config.title}`
      : `<a href="#/dashboard">Dashboard</a>
         <span>/</span>
         ${config.title}`;

    // Use NarrativeList component for narratives
    if (this.entityType === 'narratives') {
      this.container.innerHTML = `
        <div class="page-header">
          <div class="breadcrumb">
            ${breadcrumbHtml}
          </div>
          <h1>${config.title}</h1>
          <p class="subtitle">${filteredItems.length} ${config.itemName}${filteredItems.length !== 1 ? 's' : ''}</p>
        </div>

        <div class="content-area">
          <div class="card">
            <div class="card-header">
              <div class="search-input-wrapper" style="max-width: 300px;">
                <span class="search-icon">${getEntityIcon('search', 14)}</span>
                <input 
                  type="text" 
                  class="search-input" 
                  placeholder="Search ${config.itemName}s..." 
                  id="list-search"
                  value="${this.searchQuery}"
                />
              </div>
            </div>
            <div class="card-body no-padding" id="narrative-list-container"></div>
          </div>
        </div>
      `;

      // Initialize NarrativeList component
      this.narrativeList = new NarrativeList('narrative-list-container', {
        maxItems: 100,
        showStatus: true,
        showSparkline: true,
        showVolume: true,
        onItemClick: (narrative) => {
          window.location.hash = `#/narrative/${narrative.id}`;
        }
      });
      this.narrativeList.update({ narratives: filteredItems });

      // Attach search listener
      const searchInput = document.getElementById('list-search');
      if (searchInput) {
        this.addListener(searchInput, 'input', (e) => {
          this.searchQuery = e.target.value;
          this.updateFilteredList();
        });
      }
      return;
    }

    // Special handling for events with horizontal/vertical timeline toggle
    if (this.entityType === 'events') {
      this.container.innerHTML = `
        <div class="page-header">
          <div class="breadcrumb">
            ${breadcrumbHtml}
          </div>
          <h1>${config.title}</h1>
          <p class="subtitle">${filteredItems.length} ${config.itemName}${filteredItems.length !== 1 ? 's' : ''}</p>
        </div>

        <div class="content-area">
          <div class="card">
            <div class="card-header">
              <div class="search-input-wrapper" style="max-width: 300px;">
                <span class="search-icon">${getEntityIcon('search', 14)}</span>
                <input 
                  type="text" 
                  class="search-input" 
                  placeholder="Search ${config.itemName}s..." 
                  id="list-search"
                  value="${this.searchQuery}"
                />
              </div>
              <div class="view-toggle">
                <button class="view-toggle-btn ${this.eventsViewMode === 'vertical' ? 'active' : ''}" data-view="vertical" title="Vertical Timeline">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M4 2v12"/>
                    <circle cx="4" cy="4" r="2"/>
                    <circle cx="4" cy="9" r="2"/>
                    <circle cx="4" cy="14" r="1.5"/>
                    <path d="M8 4h6M8 9h6M8 14h4"/>
                  </svg>
                </button>
                <button class="view-toggle-btn ${this.eventsViewMode === 'horizontal' ? 'active' : ''}" data-view="horizontal" title="Horizontal Timeline">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M2 8h12"/>
                    <circle cx="4" cy="8" r="2"/>
                    <circle cx="8" cy="8" r="2"/>
                    <circle cx="12" cy="8" r="2"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="card-body ${this.eventsViewMode === 'vertical' ? 'no-padding' : ''}" id="events-content">
              ${this.eventsViewMode === 'vertical' ? `
                ${this.renderVerticalTimeline(filteredItems)}
              ` : `
                <div id="events-timeline" style="min-height: 350px;"></div>
              `}
            </div>
          </div>
        </div>
      `;

      // Attach event listeners
      this.attachEventListeners(config);
      this.attachViewToggleListeners(filteredItems, config);

      // Initialize horizontal timeline if in that mode
      if (this.eventsViewMode === 'horizontal') {
        this.initializeHorizontalTimeline(filteredItems);
      }
      return;
    }

    // Build entity type filter options (mirrors DocumentsView publisherTypeFilter pattern)
    const entityTypeFilterHtml = this.entityType === 'entities' 
      ? `<div class="filter-control">
          <label class="filter-label">Type</label>
          <select id="entity-type-filter" class="filter-select">
            ${Object.entries(ENTITY_TYPES).map(([key, label]) => {
              const selected = this.entityTypeFilter === key ? 'selected' : '';
              return `<option value="${key}" ${selected}>${label}</option>`;
            }).join('')}
          </select>
        </div>`
      : '';

    // Default rendering for other entity types
    this.container.innerHTML = `
      <div class="page-header">
        <div class="breadcrumb">
          ${breadcrumbHtml}
        </div>
        <h1>${config.title}</h1>
        <p class="subtitle">${filteredItems.length} ${filteredItems.length !== 1 ? (config.itemNamePlural || config.itemName + 's') : config.itemName}</p>
      </div>

      <div class="content-area">
        <div class="card">
          <div class="card-header">
            <div class="search-input-wrapper" style="max-width: 300px;">
              <span class="search-icon">${getEntityIcon('search', 14)}</span>
              <input 
                type="text" 
                class="search-input" 
                placeholder="Search ${config.itemNamePlural || config.itemName + 's'}..." 
                id="list-search"
                value="${this.searchQuery}"
              />
            </div>
            ${entityTypeFilterHtml ? `<div class="card-header-actions">${entityTypeFilterHtml}</div>` : ''}
          </div>
          <div class="card-body no-padding">
            <ul class="entity-list" id="entity-list">
              ${filteredItems.map(item => this.renderItem(item, config)).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;

    this.attachEventListeners(config);
  }

  getConfig() {
    const configs = {
      narratives: {
        title: 'Narratives',
        itemName: 'narrative',
        iconType: 'narratives',
        route: 'narrative',
        getSubtitle: (item) => {
          const factionMentions = DataService.getAggregateFactionMentionsForNarrative(item.id);
          const volume = Object.values(factionMentions)
            .reduce((sum, f) => sum + (f.volume || 0), 0);
          return `${volume.toLocaleString()} mentions`;
        },
        getStatus: null
      },
      factions: {
        title: 'Factions',
        itemName: 'faction',
        iconType: 'factions',
        route: 'faction',
        getSubtitle: (item) => `${item.memberCount ? item.memberCount.toLocaleString() + ' members' : 'No member data'}`,
        getColor: (item) => item.color
      },
      locations: {
        title: 'Locations',
        itemName: 'location',
        iconType: 'locations',
        route: 'location',
        getSubtitle: (item) => item.type || 'Location'
      },
      events: {
        title: 'Events',
        itemName: 'event',
        iconType: 'events',
        route: 'event',
        getSubtitle: (item) => {
          const date = new Date(item.date);
          return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
          });
        }
      },
      entities: {
        // Dynamic title/names based on entity type filter
        title: this.entityTypeFilter === 'person' 
          ? 'People' 
          : this.entityTypeFilter === 'organization' 
            ? 'Organizations' 
            : 'People & Organizations',
        itemName: this.entityTypeFilter === 'person' 
          ? 'person' 
          : this.entityTypeFilter === 'organization' 
            ? 'organization' 
            : 'entit',
        itemNamePlural: this.entityTypeFilter === 'person' 
          ? 'people' 
          : this.entityTypeFilter === 'organization' 
            ? 'organizations' 
            : 'entities',
        iconType: 'entities',
        route: null, // Special handling
        getSubtitle: (item) => item.type || (item._entityType === 'person' ? 'Person' : 'Organization')
      },
      topics: {
        title: 'Topics',
        itemName: 'topic',
        iconType: 'narratives', // Reuse narratives icon for topics
        route: 'topic',
        getSubtitle: (item) => {
          // Show date range and volume
          const startDate = item.startDate ? new Date(item.startDate).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric' 
          }) : '';
          const totalVolume = (item.volumeOverTime || []).reduce((sum, v) => sum + (v.volume || 0), 0);
          const parts = [];
          if (startDate) parts.push(`Started ${startDate}`);
          if (totalVolume > 0) parts.push(`${totalVolume.toLocaleString()} mentions`);
          return parts.join(' · ') || 'Topic';
        }
      }
    };

    return configs[this.entityType] || configs.narratives;
  }

  getItems() {
    let items;
    switch (this.entityType) {
      case 'narratives':
        // Apply mission and time range filters
        items = DataService.getNarratives(this.missionId, this.timeRange);
        // Apply status filter if provided
        if (this.options.statusFilter) {
          items = items.filter(n => (n.status || 'new') === this.options.statusFilter);
        }
        return items;
      case 'factions':
        return DataService.getFactions();
      case 'locations':
        return DataService.getLocations();
      case 'events':
        let events = DataService.getEvents().filter(e => !e.parentEventId); // Only top-level events
        // Apply time range filter to events
        if (this.timeRange) {
          events = events.filter(e => DataService.isDateInRange(e.date, this.timeRange));
        }
        return events;
      case 'entities':
        // Apply entity type filter (mirrors DocumentsView publisherTypeFilter pattern)
        if (this.entityTypeFilter === 'person') {
          return DataService.getPersons().map(p => ({ ...p, _entityType: 'person' }));
        } else if (this.entityTypeFilter === 'organization') {
          return DataService.getOrganizations().map(o => ({ ...o, _entityType: 'organization' }));
        }
        // Default: return all entities
        return [
          ...DataService.getPersons().map(p => ({ ...p, _entityType: 'person' })),
          ...DataService.getOrganizations().map(o => ({ ...o, _entityType: 'organization' }))
        ];
      case 'topics':
        let topics = DataService.getTopics();
        // Apply time range filter to topics
        if (this.timeRange) {
          topics = DataService.getTopicsInRange(this.timeRange);
        }
        // Map headline to text for consistent display
        return topics.map(t => ({ ...t, text: t.headline }));
      default:
        return [];
    }
  }

  filterItems(items) {
    if (!this.searchQuery) return items;
    const query = this.searchQuery.toLowerCase();
    return items.filter(item => {
      const searchText = (item.text || item.name || '').toLowerCase();
      return searchText.includes(query);
    });
  }

  /**
   * Update only the filtered list content without re-rendering the whole page
   * This prevents the search input from losing focus
   */
  updateFilteredList() {
    const config = this.getConfig();
    const items = this.getItems();
    const filteredItems = this.filterItems(items);

    // Update subtitle count (use itemNamePlural for correct pluralization)
    const subtitle = this.container.querySelector('.subtitle');
    if (subtitle) {
      subtitle.textContent = `${filteredItems.length} ${filteredItems.length !== 1 ? (config.itemNamePlural || config.itemName + 's') : config.itemName}`;
    }

    // Update content based on entity type
    if (this.entityType === 'narratives' && this.narrativeList) {
      this.narrativeList.update({ narratives: filteredItems });
    } else if (this.entityType === 'events') {
      if (this.eventsViewMode === 'vertical') {
        // Update vertical timeline
        const eventsContent = document.getElementById('events-content');
        if (eventsContent) {
          eventsContent.innerHTML = this.renderVerticalTimeline(filteredItems);
          this.attachVerticalTimelineListeners();
        }
      } else {
        // Update horizontal timeline
        this.initializeHorizontalTimeline(filteredItems);
      }
    } else {
      // Update the entity list for events (list view) and other entity types
      const entityList = document.getElementById('entity-list');
      if (entityList) {
        entityList.innerHTML = filteredItems.map(item => this.renderItem(item, config)).join('');
        // Re-attach click listeners for the new items
        this.attachItemClickListeners(config);
      }
    }
  }

  /**
   * Render vertical timeline for events
   */
  renderVerticalTimeline(events) {
    return renderVerticalTimeline(events, { sortNewestFirst: true });
  }

  /**
   * Attach click listeners for vertical timeline items
   */
  attachVerticalTimelineListeners() {
    const items = this.container.querySelectorAll('.vertical-timeline-item');
    items.forEach(item => {
      this.addListener(item, 'click', () => {
        const eventId = item.dataset.eventId;
        window.location.hash = `#/event/${eventId}`;
      });
    });
  }

  /**
   * Attach click listeners to entity list items
   */
  attachItemClickListeners(config) {
    const items = document.querySelectorAll('.entity-list-item');
    items.forEach(item => {
      this.addListener(item, 'click', () => {
        const id = item.dataset.id;
        const type = item.dataset.type;
        
        if (this.entityType === 'entities') {
          window.location.hash = `#/${type}/${id}`;
        } else {
          window.location.hash = `#/${config.route}/${id}`;
        }
      });
    });
  }

  renderItem(item, config) {
    const title = item.text || item.name;
    const subtitle = config.getSubtitle ? config.getSubtitle(item) : '';
    const color = config.getColor ? config.getColor(item) : null;
    const status = config.getStatus ? config.getStatus(item) : null;
    const iconType = item._entityType || config.iconType;
    const icon = getEntityIcon(iconType, 16);

    return `
      <li class="entity-list-item" data-id="${item.id}" data-type="${item._entityType || this.entityType}">
        <div class="entity-avatar ${item._entityType || ''}" ${color ? `style="background: ${color}20; color: ${color};"` : ''}>
          ${icon}
        </div>
        <div class="entity-info">
          <div class="entity-name">${title.length > 60 ? title.slice(0, 58) + '...' : title}</div>
          <div class="entity-meta">
            ${subtitle ? `<span class="entity-subtitle">${subtitle}</span>` : ''}
            ${status ? `<span class="badge badge-status-${status.key}">${status.label}</span>` : ''}
          </div>
        </div>
      </li>
    `;
  }

  attachEventListeners(config) {
    // Search input
    const searchInput = document.getElementById('list-search');
    if (searchInput) {
      this.addListener(searchInput, 'input', (e) => {
        this.searchQuery = e.target.value;
        this.updateFilteredList();
      });
    }

    // Entity type filter (mirrors DocumentsView publisherTypeFilter pattern)
    const entityTypeSelect = document.getElementById('entity-type-filter');
    if (entityTypeSelect) {
      this.addListener(entityTypeSelect, 'change', (e) => {
        this.entityTypeFilter = e.target.value;
        this.render();
      });
    }

    // Item clicks (list view)
    this.attachItemClickListeners(config);

    // Vertical timeline clicks (if in vertical view mode)
    if (this.entityType === 'events' && this.eventsViewMode === 'vertical') {
      this.attachVerticalTimelineListeners();
    }
  }

  /**
   * Attach view toggle listeners for events
   */
  attachViewToggleListeners(items, config) {
    const toggleBtns = this.container.querySelectorAll('.view-toggle-btn');
    toggleBtns.forEach(btn => {
      this.addListener(btn, 'click', (e) => {
        const newMode = btn.dataset.view;
        if (newMode !== this.eventsViewMode) {
          this.eventsViewMode = newMode;
          // Re-render with new view mode
          this.render();
        }
      });
    });
  }

  /**
   * Initialize the horizontal timeline component for events
   */
  initializeHorizontalTimeline(events) {
    if (this.timeline) {
      this.timeline.destroy();
      this.timeline = null;
    }

    const timelineContainer = document.getElementById('events-timeline');
    if (!timelineContainer || events.length === 0) {
      if (timelineContainer && events.length === 0) {
        timelineContainer.innerHTML = `
          <div class="empty-state">
            <div class="empty-state-icon">📅</div>
            <p class="empty-state-text">No events to display</p>
          </div>
        `;
      }
      return;
    }

    this.timeline = new Timeline('events-timeline', {
      height: Math.max(350, Math.min(events.length * 80, 600)),
      onEventClick: (event) => {
        window.location.hash = `#/event/${event.id}`;
      }
    });
    this.timeline.update({ events });
  }

  destroy() {
    if (this.narrativeList) {
      this.narrativeList.destroy();
      this.narrativeList = null;
    }
    if (this.timeline) {
      this.timeline.destroy();
      this.timeline = null;
    }
    super.destroy();
  }
}

export default ListView;
