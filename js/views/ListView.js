/**
 * ListView.js
 * Generic list view for browsing all entities of a type
 * Supports entity type filtering for people/organizations
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { NarrativeList } from '../components/NarrativeList.js';
import { Timeline } from '../components/Timeline.js';
import { STATUS_LABELS } from '../utils/formatters.js';

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
    this.eventsViewMode = 'list'; // 'list' or 'timeline'
    
    // Filter state for entities view (matches DocumentsView pattern)
    this.entityTypeFilter = 'all';
  }

  /**
   * Get SVG icon for entity type
   */
  getEntityIcon(type, size = 16) {
    const icons = {
      narratives: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
        <path d="M2 2h12v12H2z" rx="1"/>
        <path d="M4 5h8M4 8h8M4 11h5"/>
      </svg>`,
      factions: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
        <circle cx="8" cy="5" r="2.5"/>
        <circle cx="4" cy="11" r="2"/>
        <circle cx="12" cy="11" r="2"/>
        <path d="M6 6.5L4.5 9M10 6.5l1.5 2.5"/>
      </svg>`,
      locations: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
        <path d="M8 1C5.2 1 3 3.2 3 6c0 4 5 9 5 9s5-5 5-9c0-2.8-2.2-5-5-5z"/>
        <circle cx="8" cy="6" r="2"/>
      </svg>`,
      events: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
        <rect x="2" y="3" width="12" height="11" rx="1"/>
        <path d="M2 6h12M5 1v3M11 1v3"/>
      </svg>`,
      entities: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
        <circle cx="8" cy="4" r="2.5"/>
        <path d="M3 14c0-3 2.2-5 5-5s5 2 5 5"/>
      </svg>`,
      person: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
        <circle cx="8" cy="4" r="2.5"/>
        <path d="M3 14c0-3 2.2-5 5-5s5 2 5 5"/>
      </svg>`,
      organization: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="currentColor">
        <path d="M2.75 2.5C2.61193 2.5 2.5 2.61193 2.5 2.75V3.25C2.5 3.38807 2.61193 3.5 2.75 3.5H3.25C3.38807 3.5 3.5 3.38807 3.5 3.25V2.75C3.5 2.61193 3.38807 2.5 3.25 2.5H2.75Z"/>
        <path d="M4.5 2.75C4.5 2.61193 4.61193 2.5 4.75 2.5H5.25C5.38807 2.5 5.5 2.61193 5.5 2.75V3.25C5.5 3.38807 5.38807 3.5 5.25 3.5H4.75C4.61193 3.5 4.5 3.38807 4.5 3.25V2.75Z"/>
        <path d="M2.75 4.5C2.61193 4.5 2.5 4.61193 2.5 4.75V5.25C2.5 5.38807 2.61193 5.5 2.75 5.5H3.25C3.38807 5.5 3.5 5.38807 3.5 5.25V4.75C3.5 4.61193 3.38807 4.5 3.25 4.5H2.75Z"/>
        <path d="M2.5 6.75C2.5 6.61193 2.61193 6.5 2.75 6.5H3.25C3.38807 6.5 3.5 6.61193 3.5 6.75V7.25C3.5 7.38807 3.38807 7.5 3.25 7.5H2.75C2.61193 7.5 2.5 7.38807 2.5 7.25V6.75Z"/>
        <path d="M2.75 8.5C2.61193 8.5 2.5 8.61193 2.5 8.75V9.25C2.5 9.38807 2.61193 9.5 2.75 9.5H3.25C3.38807 9.5 3.5 9.38807 3.5 9.25V8.75C3.5 8.61193 3.38807 8.5 3.25 8.5H2.75Z"/>
        <path d="M2.5 10.75C2.5 10.6119 2.61193 10.5 2.75 10.5H3.25C3.38807 10.5 3.5 10.6119 3.5 10.75V11.25C3.5 11.3881 3.38807 11.5 3.25 11.5H2.75C2.61193 11.5 2.5 11.3881 2.5 11.25V10.75Z"/>
        <path d="M4.75 4.5C4.61193 4.5 4.5 4.61193 4.5 4.75V5.25C4.5 5.38807 4.61193 5.5 4.75 5.5H5.25C5.38807 5.5 5.5 5.38807 5.5 5.25V4.75C5.5 4.61193 5.38807 4.5 5.25 4.5H4.75Z"/>
        <path d="M4.5 6.75C4.5 6.61193 4.61193 6.5 4.75 6.5H5.25C5.38807 6.5 5.5 6.61193 5.5 6.75V7.25C5.5 7.38807 5.38807 7.5 5.25 7.5H4.75C4.61193 7.5 4.5 7.38807 4.5 7.25V6.75Z"/>
        <path d="M4.75 8.5C4.61193 8.5 4.5 8.61193 4.5 8.75V9.25C4.5 9.38807 4.61193 9.5 4.75 9.5H5.25C5.38807 9.5 5.5 9.38807 5.5 9.25V8.75C5.5 8.61193 5.38807 8.5 5.25 8.5H4.75Z"/>
        <path d="M4.5 10.75C4.5 10.6119 4.61193 10.5 4.75 10.5H5.25C5.38807 10.5 5.5 10.6119 5.5 10.75V11.25C5.5 11.3881 5.38807 11.5 5.25 11.5H4.75C4.61193 11.5 4.5 11.3881 4.5 11.25V10.75Z"/>
        <path d="M6.75 2.5C6.61193 2.5 6.5 2.61193 6.5 2.75V3.25C6.5 3.38807 6.61193 3.5 6.75 3.5H7.25C7.38807 3.5 7.5 3.38807 7.5 3.25V2.75C7.5 2.61193 7.38807 2.5 7.25 2.5H6.75Z"/>
        <path d="M6.5 4.75C6.5 4.61193 6.61193 4.5 6.75 4.5H7.25C7.38807 4.5 7.5 4.61193 7.5 4.75V5.25C7.5 5.38807 7.38807 5.5 7.25 5.5H6.75C6.61193 5.5 6.5 5.38807 6.5 5.25V4.75Z"/>
        <path d="M6.75 6.5C6.61193 6.5 6.5 6.61193 6.5 6.75V7.25C6.5 7.38807 6.61193 7.5 6.75 7.5H7.25C7.38807 7.5 7.5 7.38807 7.5 7.25V6.75C7.5 6.61193 7.38807 6.5 7.25 6.5H6.75Z"/>
        <path d="M6.5 8.75C6.5 8.61193 6.61193 8.5 6.75 8.5H7.25C7.38807 8.5 7.5 8.61193 7.5 8.75V9.25C7.5 9.38807 7.38807 9.5 7.25 9.5H6.75C6.61193 9.5 6.5 9.38807 6.5 9.25V8.75Z"/>
        <path d="M6.75 10.5C6.61193 10.5 6.5 10.6119 6.5 10.75V11.25C6.5 11.3881 6.61193 11.5 6.75 11.5H7.25C7.38807 11.5 7.5 11.3881 7.5 11.25V10.75C7.5 10.6119 7.38807 10.5 7.25 10.5H6.75Z"/>
        <path d="M11.25 6.5C11.1119 6.5 11 6.61193 11 6.75V7.25C11 7.38807 11.1119 7.5 11.25 7.5H11.75C11.8881 7.5 12 7.38807 12 7.25V6.75C12 6.61193 11.8881 6.5 11.75 6.5H11.25Z"/>
        <path d="M11 8.75C11 8.61193 11.1119 8.5 11.25 8.5H11.75C11.8881 8.5 12 8.61193 12 8.75V9.25C12 9.38807 11.8881 9.5 11.75 9.5H11.25C11.1119 9.5 11 9.38807 11 9.25V8.75Z"/>
        <path d="M11.25 10.5C11.1119 10.5 11 10.6119 11 10.75V11.25C11 11.3881 11.1119 11.5 11.25 11.5H11.75C11.8881 11.5 12 11.3881 12 11.25V10.75C12 10.6119 11.8881 10.5 11.75 10.5H11.25Z"/>
        <path d="M11 12.75C11 12.6119 11.1119 12.5 11.25 12.5H11.75C11.8881 12.5 12 12.6119 12 12.75V13.25C12 13.3881 11.8881 13.5 11.75 13.5H11.25C11.1119 13.5 11 13.3881 11 13.25V12.75Z"/>
        <path d="M13.25 6.5C13.1119 6.5 13 6.61193 13 6.75V7.25C13 7.38807 13.1119 7.5 13.25 7.5H13.75C13.8881 7.5 14 7.38807 14 7.25V6.75C14 6.61193 13.8881 6.5 13.75 6.5H13.25Z"/>
        <path d="M13 8.75C13 8.61193 13.1119 8.5 13.25 8.5H13.75C13.8881 8.5 14 8.61193 14 8.75V9.25C14 9.38807 13.8881 9.5 13.75 9.5H13.25C13.1119 9.5 13 9.38807 13 9.25V8.75Z"/>
        <path d="M13.25 10.5C13.1119 10.5 13 10.6119 13 10.75V11.25C13 11.3881 13.1119 11.5 13.25 11.5H13.75C13.8881 11.5 14 11.3881 14 11.25V10.75C14 10.6119 13.8881 10.5 13.75 10.5H13.25Z"/>
        <path d="M13 12.75C13 12.6119 13.1119 12.5 13.25 12.5H13.75C13.8881 12.5 14 12.6119 14 12.75V13.25C14 13.3881 13.8881 13.5 13.75 13.5H13.25C13.1119 13.5 13 13.3881 13 13.25V12.75Z"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 16H9.5C9.59107 16 9.67646 15.9757 9.75 15.9331C9.82354 15.9757 9.90893 16 10 16H15.5C15.7761 16 16 15.7761 16 15.5V4.5C16 4.22386 15.7761 4 15.5 4H10V0.5C10 0.223858 9.77614 0 9.5 0H0.5C0.223858 0 0 0.223858 0 0.5V15.5C0 15.7761 0.223858 16 0.5 16ZM1 15V1H9V15H7V13C7 12.7239 6.77614 12.5 6.5 12.5H3.5C3.22386 12.5 3 12.7239 3 13V15H1ZM6 13.5V15H4V13.5H6ZM10 5V15H15V5H10Z"/>
      </svg>`,
      search: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
        <circle cx="7" cy="7" r="4"/>
        <path d="M10 10l4 4"/>
      </svg>`
    };
    return icons[type] || icons.narratives;
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
                <span class="search-icon">${this.getEntityIcon('search', 14)}</span>
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
        onNarrativeClick: (narrative) => {
          window.location.hash = `#/narrative/${narrative.id}`;
        }
      });
      this.narrativeList.update({ narratives: filteredItems });

      // Attach search listener
      const searchInput = document.getElementById('list-search');
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          this.searchQuery = e.target.value;
          this.updateFilteredList();
        });
      }
      return;
    }

    // Special handling for events with timeline/list toggle
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
                <span class="search-icon">${this.getEntityIcon('search', 14)}</span>
                <input 
                  type="text" 
                  class="search-input" 
                  placeholder="Search ${config.itemName}s..." 
                  id="list-search"
                  value="${this.searchQuery}"
                />
              </div>
              <div class="view-toggle">
                <button class="view-toggle-btn ${this.eventsViewMode === 'list' ? 'active' : ''}" data-view="list" title="List View">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M2 4h12M2 8h12M2 12h12"/>
                  </svg>
                </button>
                <button class="view-toggle-btn ${this.eventsViewMode === 'timeline' ? 'active' : ''}" data-view="timeline" title="Timeline View">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M2 8h12"/>
                    <circle cx="4" cy="8" r="2"/>
                    <circle cx="8" cy="8" r="2"/>
                    <circle cx="12" cy="8" r="2"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="card-body ${this.eventsViewMode === 'list' ? 'no-padding' : ''}" id="events-content">
              ${this.eventsViewMode === 'list' ? `
                <ul class="entity-list" id="entity-list">
                  ${filteredItems.map(item => this.renderItem(item, config)).join('')}
                </ul>
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

      // Initialize timeline if in timeline mode
      if (this.eventsViewMode === 'timeline') {
        this.initializeEventsTimeline(filteredItems);
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
              <span class="search-icon">${this.getEntityIcon('search', 14)}</span>
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
        title: this.options.statusFilter 
          ? `${STATUS_LABELS[this.options.statusFilter] || this.options.statusFilter} Narratives`
          : 'Narratives',
        itemName: 'narrative',
        iconType: 'narratives',
        route: 'narrative',
        getSubtitle: (item) => {
          const volume = Object.values(item.factionMentions || {})
            .reduce((sum, f) => sum + (f.volume || 0), 0);
          return `${volume.toLocaleString()} mentions`;
        },
        getStatus: (item) => ({
          key: item.status || 'new',
          label: STATUS_LABELS[item.status] || 'New'
        })
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
    } else if (this.entityType === 'events' && this.eventsViewMode === 'timeline') {
      this.initializeEventsTimeline(filteredItems);
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
   * Attach click listeners to entity list items
   */
  attachItemClickListeners(config) {
    const items = document.querySelectorAll('.entity-list-item');
    items.forEach(item => {
      item.addEventListener('click', () => {
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
    const icon = this.getEntityIcon(iconType, 16);

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
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.updateFilteredList();
      });
    }

    // Entity type filter (mirrors DocumentsView publisherTypeFilter pattern)
    const entityTypeSelect = document.getElementById('entity-type-filter');
    if (entityTypeSelect) {
      entityTypeSelect.addEventListener('change', (e) => {
        this.entityTypeFilter = e.target.value;
        this.render();
      });
    }

    // Item clicks
    this.attachItemClickListeners(config);
  }

  /**
   * Attach view toggle listeners for events
   */
  attachViewToggleListeners(items, config) {
    const toggleBtns = this.container.querySelectorAll('.view-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
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
   * Initialize the timeline component for events
   */
  initializeEventsTimeline(events) {
    if (this.timeline) {
      this.timeline.destroy();
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
