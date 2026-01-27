/**
 * router.js
 * Hash-based routing for single-page navigation
 * Manages global filter state (mission + time range)
 */

import { DashboardView } from './views/DashboardView.js';
import { NarrativeView } from './views/NarrativeView.js';
import { SubNarrativeView } from './views/SubNarrativeView.js';
import { FactionView } from './views/FactionView.js';
import { LocationView } from './views/LocationView.js';
import { EventView } from './views/EventView.js';
import { PersonView } from './views/PersonView.js';
import { OrganizationView } from './views/OrganizationView.js';
import { DocumentView } from './views/DocumentView.js';
import { DocumentsView } from './views/DocumentsView.js';
import { ListView } from './views/ListView.js';
import { EditorView } from './views/EditorView.js';
import { MonitorsView } from './views/MonitorsView.js';
import { WorkspacesView } from './views/WorkspacesView.js';
import { SearchView } from './views/SearchView.js';
import { ProjectsView } from './views/ProjectsView.js';
import { initStickyHeader, destroyStickyHeader } from './utils/stickyHeader.js';
import { TimeRangeFilter } from './components/TimeRangeFilter.js';
import { DataService } from './data/DataService.js';
import { formatDate } from './utils/formatters.js';

export class Router {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error(`Router: Container element '${containerId}' not found`);
    }
    
    this.currentView = null;
    this.timeRangeFilter = null;
    
    // Global filter state
    this.filters = {
      missionId: 'all',
      timeRange: null // { start: Date, end: Date } or null for all time
    };

    // Bind hash change handler with error handling
    window.addEventListener('hashchange', () => {
      try {
        this.handleRoute();
      } catch (e) {
        console.error('Router: Error handling route change:', e);
        this.showErrorPage('Navigation Error', 'An error occurred while loading this page.');
      }
    });
  }

  /**
   * Show an error page when something goes wrong
   */
  showErrorPage(title = 'Error', message = 'An unexpected error occurred.') {
    if (this.container) {
      this.container.innerHTML = `
        <div class="view-header">
          <div>
            <h1 class="view-title">${this.escapeHtml(title)}</h1>
            <p class="view-subtitle">${this.escapeHtml(message)}</p>
          </div>
        </div>
        <div class="content-area">
          <div class="card">
            <div class="card-body" style="padding: var(--space-2xl); text-align: center;">
              <p>Try <a href="#/dashboard">returning to the dashboard</a> or refreshing the page.</p>
            </div>
          </div>
        </div>
      `;
    }
  }

  /**
   * Escape HTML to prevent XSS
   */
  escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Initialize router and navigate to current hash
   */
  init() {
    try {
      // Set up mission filter listener
      this.initMissionFilter();
      
      // Set up time range filter
      this.initTimeRangeFilter();
      
      // Set up clear time filter button
      this.initClearTimeFilterButton();

      // Navigate to current hash or default to dashboard
      if (!window.location.hash || window.location.hash === '#/') {
        window.location.hash = '#/dashboard';
      } else {
        this.handleRoute();
      }
    } catch (e) {
      console.error('Router: Error during initialization:', e);
      // Try to at least show the dashboard
      window.location.hash = '#/dashboard';
    }
  }

  /**
   * Initialize mission filter dropdown
   */
  initMissionFilter() {
    try {
      const missionSelect = document.getElementById('mission-filter');
      if (missionSelect) {
        missionSelect.addEventListener('change', (e) => {
          this.filters.missionId = e.target.value || 'all';
          this.onFiltersChanged();
        });
      }
    } catch (e) {
      console.error('Router: Error initializing mission filter:', e);
    }
  }

  /**
   * Initialize time range filter component
   */
  initTimeRangeFilter() {
    try {
      const container = document.getElementById('time-range-filter');
      if (!container) return;

      // Get aggregate volume data for the histogram
      const volumeData = this.getTimeFilterData();
      
      if (!volumeData || !volumeData.dates || !volumeData.dates.length) {
        container.innerHTML = '<div class="empty-state text-xs">No time data</div>';
        return;
      }

      // Create time range filter component
      this.timeRangeFilter = new TimeRangeFilter('time-range-filter', {
        height: 44,
        onChange: (range) => this.onTimeRangeChanged(range)
      });

      // Update with data
      this.timeRangeFilter.update(volumeData);
    } catch (e) {
      console.error('Router: Error initializing time range filter:', e);
      const container = document.getElementById('time-range-filter');
      if (container) {
        container.innerHTML = '<div class="empty-state text-xs">Filter unavailable</div>';
      }
    }
  }

  /**
   * Get aggregated volume data for the time filter histogram
   */
  getTimeFilterData() {
    try {
      // Get volume data aggregated across all missions (for consistent histogram)
      const volumeData = DataService.getAggregateVolumeOverTime('all');
      
      if (!volumeData || !volumeData.dates || !volumeData.dates.length) {
        return null;
      }

      // Ensure series is an array
      const series = Array.isArray(volumeData.series) ? volumeData.series : [];

      // Calculate total volume per date (sum all factions)
      const volumes = volumeData.dates.map((date, i) => {
        return series.reduce((sum, s) => {
          const val = Array.isArray(s) ? (s[i] || 0) : 0;
          return sum + val;
        }, 0);
      });

      return {
        dates: volumeData.dates,
        volumes
      };
    } catch (e) {
      console.error('Router: Error getting time filter data:', e);
      return null;
    }
  }

  /**
   * Initialize clear time filter button
   */
  initClearTimeFilterButton() {
    const clearBtn = document.getElementById('clear-time-filter');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (this.timeRangeFilter) {
          this.timeRangeFilter.clearSelection();
        }
        this.filters.timeRange = null;
        this.updateTimeRangeLabel(null);
        this.onFiltersChanged();
      });
    }
  }

  /**
   * Handle time range filter change
   */
  onTimeRangeChanged(range) {
    this.filters.timeRange = range;
    this.updateTimeRangeLabel(range);
    this.onFiltersChanged();
  }

  /**
   * Update the time range label display
   */
  updateTimeRangeLabel(range) {
    const label = document.getElementById('time-range-label');
    if (!label) return;

    if (!range || !range.start || !range.end) {
      label.textContent = 'All Time';
      return;
    }

    label.textContent = `${formatDate(range.start)} - ${formatDate(range.end)}`;
  }

  /**
   * Called when any filter changes - re-render current view
   */
  onFiltersChanged() {
    // Re-render the current view with new filters
    this.handleRoute();
  }

  /**
   * Get current filters
   */
  getFilters() {
    return { ...this.filters };
  }

  /**
   * Parse query parameters from a hash string
   * @param {string} hash - The hash string (without #/)
   * @returns {Object} Query parameters as key-value pairs
   */
  parseQueryParams(hash) {
    const queryIndex = hash.indexOf('?');
    if (queryIndex === -1) return {};
    
    const queryString = hash.slice(queryIndex + 1);
    const params = {};
    
    queryString.split('&').forEach(pair => {
      const [key, value] = pair.split('=');
      if (key) {
        params[decodeURIComponent(key)] = value ? decodeURIComponent(value) : '';
      }
    });
    
    return params;
  }

  /**
   * Parse current hash and route to appropriate view
   */
  handleRoute() {
    const fullHash = window.location.hash.slice(2) || 'dashboard'; // Remove #/
    
    // Separate path from query string
    const queryIndex = fullHash.indexOf('?');
    const hash = queryIndex === -1 ? fullHash : fullHash.slice(0, queryIndex);
    const queryParams = this.parseQueryParams(fullHash);
    
    const [route, id] = hash.split('/');

    this.currentRoute = route;

    // Destroy current view and clean up sticky header
    try {
      destroyStickyHeader();
    } catch (e) {
      console.error('Router: Error destroying sticky header:', e);
    }
    
    if (this.currentView && this.currentView.destroy) {
      try {
        this.currentView.destroy();
      } catch (e) {
        console.error('Router: Error destroying previous view:', e);
      }
    }
    this.currentView = null;

    // Update active nav link
    try {
      this.updateNavLinks(route);
    } catch (e) {
      console.error('Router: Error updating nav links:', e);
    }

    // Common options with filters
    const filterOptions = {
      missionId: this.filters.missionId || 'all',
      timeRange: this.filters.timeRange,
      tab: queryParams.tab || 'dashboard' // Default to dashboard tab
    };

    // Route to appropriate view
    switch (route) {
      case 'dashboard':
        this.currentView = new DashboardView(this.container, filterOptions);
        break;

      case 'narrative':
        if (id) {
          this.currentView = new NarrativeView(this.container, id, filterOptions);
        } else {
          this.currentView = new ListView(this.container, 'narratives', filterOptions);
        }
        break;

      case 'narratives':
        this.currentView = new ListView(this.container, 'narratives', filterOptions);
        break;

      case 'subnarrative':
        if (id) {
          this.currentView = new SubNarrativeView(this.container, id, filterOptions);
        } else {
          window.location.hash = '#/narratives';
          return;
        }
        break;

      case 'faction':
        if (id) {
          this.currentView = new FactionView(this.container, id, filterOptions);
        } else {
          this.currentView = new ListView(this.container, 'factions', filterOptions);
        }
        break;

      case 'factions':
        this.currentView = new ListView(this.container, 'factions', filterOptions);
        break;

      case 'location':
        if (id) {
          this.currentView = new LocationView(this.container, id, filterOptions);
        } else {
          this.currentView = new ListView(this.container, 'locations', filterOptions);
        }
        break;

      case 'locations':
        this.currentView = new ListView(this.container, 'locations', filterOptions);
        break;

      case 'event':
        if (id) {
          this.currentView = new EventView(this.container, id, filterOptions);
        } else {
          this.currentView = new ListView(this.container, 'events', filterOptions);
        }
        break;

      case 'events':
        this.currentView = new ListView(this.container, 'events', filterOptions);
        break;

      case 'person':
        if (id) {
          this.currentView = new PersonView(this.container, id, filterOptions);
        } else {
          this.currentView = new ListView(this.container, 'entities', filterOptions);
        }
        break;

      case 'organization':
        if (id) {
          this.currentView = new OrganizationView(this.container, id, filterOptions);
        } else {
          this.currentView = new ListView(this.container, 'entities', filterOptions);
        }
        break;

      case 'document':
        if (id) {
          this.currentView = new DocumentView(this.container, id, filterOptions);
        } else {
          window.location.hash = '#/documents';
          return;
        }
        break;

      case 'documents':
        this.currentView = new DocumentsView(this.container, filterOptions);
        break;

      case 'entities':
        this.currentView = new ListView(this.container, 'entities', filterOptions);
        break;

      case 'editor':
        this.currentView = new EditorView(this.container);
        break;

      case 'data-model':
        // Navigate to standalone data model page
        window.location.href = 'data-model.html';
        return;

      case 'component-demos':
        // Navigate to standalone component demos page
        window.location.href = 'component-demos.html';
        return;

      case 'status':
        // Status pages have been removed - redirect to dashboard
        // The dashboard now handles status filtering inline
        window.location.hash = '#/dashboard';
        return;

      case 'monitors':
        this.currentView = new MonitorsView(this.container, filterOptions);
        break;

      case 'workspaces':
        this.currentView = new WorkspacesView(this.container, filterOptions);
        break;

      case 'search':
        this.currentView = new SearchView(this.container, filterOptions);
        break;

      case 'projects':
        this.currentView = new ProjectsView(this.container, filterOptions);
        break;

      default:
        // Default to dashboard
        window.location.hash = '#/dashboard';
        return;
    }

    // Render the view
    if (this.currentView && this.currentView.render) {
      try {
        this.currentView.render();
      } catch (e) {
        console.error(`Router: Error rendering view for route '${route}':`, e);
        this.showErrorPage('Page Error', `An error occurred while loading ${route || 'this page'}.`);
        return;
      }
    }

    // Initialize sticky header behavior
    try {
      initStickyHeader();
    } catch (e) {
      console.error('Router: Error initializing sticky header:', e);
    }

    // Scroll to top
    try {
      window.scrollTo(0, 0);
    } catch (e) {
      // Scroll errors are non-critical
    }
  }

  /**
   * Update active state on navigation links
   */
  updateNavLinks(route) {
    const hash = window.location.hash.slice(2) || 'dashboard';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
      const linkRoute = link.getAttribute('href')?.replace('#/', '') || '';
      
      // Check if this link matches the current route
      if (linkRoute === route || 
          linkRoute === hash ||
          (linkRoute === 'narratives' && route === 'narrative') ||
          (linkRoute === 'factions' && route === 'faction') ||
          (linkRoute === 'locations' && route === 'location') ||
          (linkRoute === 'events' && route === 'event') ||
          (linkRoute === 'entities' && (route === 'person' || route === 'organization')) ||
          (linkRoute === 'documents' && route === 'document')) {
        link.classList.add('active');
      }
    });
  }

  /**
   * Navigate programmatically
   */
  navigate(route, id = null) {
    if (id) {
      window.location.hash = `#/${route}/${id}`;
    } else {
      window.location.hash = `#/${route}`;
    }
  }

  /**
   * Get current route info
   */
  getCurrentRoute() {
    const fullHash = window.location.hash.slice(2) || 'dashboard';
    const queryIndex = fullHash.indexOf('?');
    const hash = queryIndex === -1 ? fullHash : fullHash.slice(0, queryIndex);
    const [route, id] = hash.split('/');
    const queryParams = this.parseQueryParams(fullHash);
    return { route, id, queryParams };
  }

  /**
   * Build a URL with the current route and updated query params
   * @param {Object} params - Query params to set/update
   * @returns {string} The full hash URL
   */
  buildUrl(params = {}) {
    const { route, id } = this.getCurrentRoute();
    const basePath = id ? `#/${route}/${id}` : `#/${route}`;
    
    const queryString = Object.entries(params)
      .filter(([_, value]) => value !== undefined && value !== null && value !== '')
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    
    return queryString ? `${basePath}?${queryString}` : basePath;
  }

  /**
   * Refresh the time filter data (e.g., after data import)
   */
  refreshTimeFilter() {
    try {
      if (this.timeRangeFilter && this.timeRangeFilter.updateData) {
        const volumeData = this.getTimeFilterData();
        if (volumeData) {
          this.timeRangeFilter.updateData(volumeData);
        }
      }
    } catch (e) {
      console.error('Router: Error refreshing time filter:', e);
    }
  }
}

export default Router;
