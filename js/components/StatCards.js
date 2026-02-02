/**
 * StatCards.js
 * Reusable stat cards component for displaying counts with icons
 * Used in page headers (Dashboard, Entity details, etc.)
 * 
 * Stat cards can be rendered as:
 * 1. Simple clickable cards (legacy) - navigates to list view
 * 2. Dropdown triggers (new) - shows entity list, click to navigate
 */

import { StatCardDropdown } from './StatCardDropdown.js';

/**
 * SVG icons for each stat type
 */
const STAT_ICONS = {
  narratives: `<svg class="stat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25">
    <path d="M2 2h12v12H2z" rx="1"/>
    <path d="M4 5h8M4 8h8M4 11h5"/>
  </svg>`,
  themes: `<svg class="stat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25">
    <path d="M3 3h10v10H3z" rx="1"/>
    <path d="M5 6h6M5 9h4"/>
  </svg>`,
  topics: `<svg class="stat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25">
    <path d="M2 4h12M2 8h8M2 12h10"/>
    <circle cx="13" cy="8" r="2"/>
  </svg>`,
  factions: `<svg class="stat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25">
    <circle cx="8" cy="5" r="2.5"/>
    <circle cx="4" cy="11" r="2"/>
    <circle cx="12" cy="11" r="2"/>
    <path d="M6 6.5L4.5 9M10 6.5l1.5 2.5"/>
  </svg>`,
  locations: `<svg class="stat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25">
    <path d="M8 1C5.2 1 3 3.2 3 6c0 4 5 9 5 9s5-5 5-9c0-2.8-2.2-5-5-5z"/>
    <circle cx="8" cy="6" r="2"/>
  </svg>`,
  events: `<svg class="stat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25">
    <rect x="2" y="3" width="12" height="11" rx="1"/>
    <path d="M2 6h12M5 1v3M11 1v3"/>
  </svg>`,
  entities: `<svg class="stat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25">
    <circle cx="8" cy="4" r="2.5"/>
    <path d="M3 14c0-3 2.2-5 5-5s5 2 5 5"/>
  </svg>`,
  documents: `<svg class="stat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25">
    <path d="M3 1h7l3 3v11H3V1z"/>
    <path d="M10 1v3h3"/>
    <path d="M5 7h6M5 10h6M5 13h4"/>
  </svg>`,
  persons: `<svg class="stat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25">
    <circle cx="8" cy="4" r="2.5"/>
    <path d="M3 14c0-3 2.2-5 5-5s5 2 5 5"/>
  </svg>`,
  organizations: `<svg class="stat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25">
    <rect x="2" y="4" width="12" height="10" rx="1"/>
    <path d="M5 4V2h6v2"/>
    <path d="M2 8h12"/>
  </svg>`
};

/**
 * Default routes for each stat type
 */
const STAT_ROUTES = {
  narratives: '#/narratives',
  themes: '#/themes',
  topics: '#/topics',
  factions: '#/factions',
  locations: '#/locations',
  events: '#/events',
  entities: '#/entities',
  documents: '#/documents',
  persons: '#/entities',
  organizations: '#/entities'
};

/**
 * Display labels for each stat type
 */
const STAT_LABELS = {
  narratives: 'Narratives',
  themes: 'Themes',
  topics: 'Topics',
  factions: 'Factions',
  locations: 'Locations',
  events: 'Events',
  entities: 'Entities',
  documents: 'Documents',
  persons: 'People',
  organizations: 'Orgs'
};

/**
 * StatCards utility class
 */
export const StatCards = {
  /**
   * Get the icon for a stat type
   * @param {string} type - Stat type (narratives, themes, etc.)
   * @returns {string} SVG icon HTML
   */
  getIcon(type) {
    return STAT_ICONS[type] || STAT_ICONS.entities;
  },

  /**
   * Get the default route for a stat type
   * @param {string} type - Stat type
   * @returns {string} Hash route
   */
  getRoute(type) {
    return STAT_ROUTES[type] || '#/dashboard';
  },

  /**
   * Get the label for a stat type
   * @param {string} type - Stat type
   * @returns {string} Display label
   */
  getLabel(type) {
    return STAT_LABELS[type] || type;
  },

  /**
   * Render a single stat card
   * @param {string} type - Stat type (narratives, themes, etc.)
   * @param {number} value - The stat value
   * @param {Object} options - Options
   * @param {boolean} options.clickable - Whether card is clickable (default: true)
   * @param {string} options.href - Custom href (defaults to type's route)
   * @param {string} options.label - Custom label (defaults to type's label)
   * @returns {string} HTML string
   */
  renderCard(type, value, options = {}) {
    const { clickable = true, href, label } = options;
    const icon = this.getIcon(type);
    const route = href || this.getRoute(type);
    const displayLabel = label || this.getLabel(type);
    const clickableClass = clickable ? ' clickable' : '';
    const dataHref = clickable ? ` data-href="${route}"` : '';

    return `
      <div class="stat-card${clickableClass}"${dataHref}>
        ${icon}
        <div class="stat-value">${value}</div>
        <div class="stat-label">${displayLabel}</div>
      </div>
    `;
  },

  /**
   * Render multiple stat cards
   * @param {Array} stats - Array of stat configs [{type, value, href?, label?}]
   * @param {Object} options - Options applied to all cards
   * @param {boolean} options.clickable - Whether cards are clickable (default: true)
   * @returns {string} HTML string wrapped in stats-grid
   */
  render(stats, options = {}) {
    if (!stats || stats.length === 0) return '';

    const { clickable = true, wrapInGrid = true } = options;
    
    const cardsHtml = stats
      .map(stat => this.renderCard(stat.type, stat.value, { 
        clickable, 
        href: stat.href, 
        label: stat.label 
      }))
      .join('');

    return wrapInGrid ? `<div class="stats-grid">${cardsHtml}</div>` : cardsHtml;
  },

  /**
   * Attach click handlers to stat cards within a container
   * @param {HTMLElement} container - Container element
   * @param {Function} onClick - Optional custom click handler (receives href)
   */
  attachClickHandlers(container, onClick) {
    container.querySelectorAll('.stat-card.clickable').forEach(card => {
      card.addEventListener('click', () => {
        const href = card.dataset.href;
        if (href) {
          if (onClick) {
            onClick(href);
          } else {
            window.location.hash = href;
          }
        }
      });
    });
  },

  /**
   * Build dashboard stats array from DataService stats object
   * @param {Object} stats - Stats from DataService.getDashboardStats()
   * @param {number} topicsCount - Number of topics
   * @returns {Array} Stats array for render()
   */
  buildDashboardStats(stats, topicsCount) {
    return [
      { type: 'narratives', value: stats.totalNarratives },
      { type: 'themes', value: stats.totalThemes },
      { type: 'topics', value: topicsCount },
      { type: 'factions', value: stats.totalFactions },
      { type: 'locations', value: stats.totalLocations },
      { type: 'events', value: stats.totalEvents },
      { type: 'entities', value: stats.totalPersons + stats.totalOrganizations }
    ];
  },

  /**
   * Build entity stats array for entity detail views
   * @param {Object} data - Entity data from fetchEntityData()
   * @param {Function} routeBuilder - Optional function(entityType) => href for context-aware routing
   * @returns {Array} Stats array for render()
   */
  buildEntityStats(data, routeBuilder = null) {
    const stats = [];
    
    // Helper to build href - uses routeBuilder if provided, otherwise falls back to default
    const buildHref = (type) => {
      if (routeBuilder) {
        // Map stat type to route entity type (plurals to singular for some)
        const routeType = type === 'entities' ? 'entities' : type;
        return routeBuilder(routeType);
      }
      return this.getRoute(type);
    };
    
    if (data.narratives?.length > 0) {
      stats.push({ type: 'narratives', value: data.narratives.length, href: buildHref('narratives') });
    }
    if (data.topics?.length > 0) {
      stats.push({ type: 'topics', value: data.topics.length, href: buildHref('topics') });
    }
    if (data.documents?.length > 0) {
      stats.push({ type: 'documents', value: data.documents.length, href: buildHref('documents') });
    }
    if (data.locations?.length > 0) {
      stats.push({ type: 'locations', value: data.locations.length, href: buildHref('locations') });
    }
    if (data.allEvents?.length > 0 || data.events?.length > 0) {
      stats.push({ type: 'events', value: (data.allEvents || data.events).length, href: buildHref('events') });
    }
    
    return stats;
  },

  /**
   * Build entity stats with items for dropdown rendering
   * @param {Object} data - Entity data from fetchEntityData()
   * @param {string} contextId - Optional context ID for building routes
   * @returns {Array} Stats array with items for renderDropdowns()
   */
  buildEntityStatsWithItems(data, contextId = null) {
    const stats = [];
    
    if (data.narratives?.length > 0) {
      stats.push({ 
        type: 'narratives', 
        value: data.narratives.length, 
        items: data.narratives.map(n => ({ id: n.id, name: n.text }))
      });
    }
    if (data.topics?.length > 0) {
      stats.push({ 
        type: 'topics', 
        value: data.topics.length,
        items: data.topics.map(t => ({ id: t.id, name: t.headline }))
      });
    }
    if (data.documents?.length > 0) {
      stats.push({ 
        type: 'documents', 
        value: data.documents.length,
        items: data.documents.map(d => ({ id: d.id, name: d.title }))
      });
    }
    if (data.locations?.length > 0) {
      stats.push({ 
        type: 'locations', 
        value: data.locations.length,
        items: data.locations.map(l => ({ id: l.id, name: l.name }))
      });
    }
    if (data.allEvents?.length > 0 || data.events?.length > 0) {
      const events = data.allEvents || data.events;
      stats.push({ 
        type: 'events', 
        value: events.length,
        items: events.map(e => ({ id: e.id, name: e.headline || e.name }))
      });
    }
    
    return stats;
  },

  /**
   * Render stat cards as dropdowns with entity lists
   * @param {Array} stats - Array of stat configs [{type, value, items}]
   * @param {Object} options - Options
   * @param {string} options.contextId - Context ID for building routes
   * @param {Function} options.onNavigate - Callback when navigating
   * @returns {string} HTML string for dropdown containers (requires initDropdowns after DOM insertion)
   */
  renderDropdowns(stats, options = {}) {
    if (!stats || stats.length === 0) return '';

    const dropdownsHtml = stats.map((stat, index) => {
      const containerId = `stat-dropdown-${stat.type}-${index}`;
      return `<div id="${containerId}" class="stat-dropdown-container" 
        data-type="${stat.type}" 
        data-count="${stat.value}"
        data-items='${JSON.stringify(stat.items || [])}'
        data-context-id="${options.contextId || ''}"></div>`;
    }).join('');

    return `<div class="stats-grid stats-grid-dropdowns">${dropdownsHtml}</div>`;
  },

  /**
   * Initialize stat card dropdowns after DOM insertion
   * @param {HTMLElement} container - Parent container
   * @param {Object} options - Options passed to each dropdown
   * @returns {Array} Array of StatCardDropdown instances
   */
  initDropdowns(container, options = {}) {
    const dropdownContainers = container.querySelectorAll('.stat-dropdown-container');
    const dropdowns = [];

    dropdownContainers.forEach((el) => {
      const type = el.dataset.type;
      const count = parseInt(el.dataset.count, 10) || 0;
      let items = [];
      try {
        items = JSON.parse(el.dataset.items || '[]');
      } catch (e) {
        console.warn('StatCards: Failed to parse items for', type);
      }
      const contextId = el.dataset.contextId || options.contextId || null;

      const dropdown = new StatCardDropdown(el.id, {
        type,
        count,
        items,
        icon: this.getIcon(type),
        label: this.getLabel(type),
        contextId,
        onNavigate: options.onNavigate,
        maxItems: options.maxItems || 10
      });

      dropdown.render();
      dropdowns.push(dropdown);
    });

    return dropdowns;
  }
};

export default StatCards;
