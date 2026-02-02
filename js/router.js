/**
 * router.js
 * Hash-based routing for single-page navigation
 * Supports context-scoped navigation (workspace/monitor/dashboard)
 * Manages global filter state (mission + time range)
 * 
 * Route Pattern: #/{context}[/{contextId}][/{entityType}[/{entityId}][/documents]]
 * See docs/ROUTING.md for full specification
 */

import { DashboardView } from './views/DashboardView.js';
import { NarrativeView } from './views/NarrativeView.js';
import { escapeHtml } from './utils/htmlUtils.js';
import { ThemeView } from './views/ThemeView.js';
import { FactionView } from './views/FactionView.js';
import { LocationView } from './views/LocationView.js';
import { EventView } from './views/EventView.js';
import { PersonView } from './views/PersonView.js';
import { OrganizationView } from './views/OrganizationView.js';
import { DocumentView } from './views/DocumentView.js';
import { DocumentsView } from './views/DocumentsView.js';
import { ListView } from './views/ListView.js';
import { MonitorsView } from './views/MonitorsView.js';
import { MonitorView } from './views/MonitorView.js';
import { WorkspacesView } from './views/WorkspacesView.js';
import { WorkspaceView } from './views/WorkspaceView.js';
import { SearchView } from './views/SearchView.js';
import { ProjectsView } from './views/ProjectsView.js';
import { ProjectView } from './views/ProjectView.js';
import { TopicView } from './views/TopicView.js';
import { TagsView } from './views/TagsView.js';
import { TagDetailView } from './views/TagDetailView.js';
import { ActivityFeedView } from './views/ActivityFeedView.js';
import { initStickyHeader, destroyStickyHeader } from './utils/stickyHeader.js';
import { TimeRangeFilter } from './components/TimeRangeFilter.js';
import { DataService } from './data/DataService.js';
import { dataStore } from './data/DataStore.js';
import { formatDate } from './utils/formatters.js';

// Context types for scoped routing
const CONTEXT_TYPES = ['workspace', 'monitor', 'dashboard', 'project'];

// Entity types that can be nested under contexts
const ENTITY_TYPES = {
  // Singular (detail views)
  'narrative': { view: NarrativeView, listType: 'narratives' },
  'theme': { view: ThemeView, listType: 'narratives' },
  'faction': { view: FactionView, listType: 'factions' },
  'location': { view: LocationView, listType: 'locations' },
  'event': { view: EventView, listType: 'events' },
  'person': { view: PersonView, listType: 'entities' },
  'organization': { view: OrganizationView, listType: 'entities' },
  'document': { view: DocumentView, listType: 'documents' },
  'topic': { view: TopicView, listType: 'topics' },
  'tag': { view: TagDetailView, listType: 'tags' },
  // Plural (list views)
  'narratives': { view: ListView, listType: 'narratives' },
  'themes': { view: ListView, listType: 'narratives' },
  'factions': { view: ListView, listType: 'factions' },
  'locations': { view: ListView, listType: 'locations' },
  'events': { view: ListView, listType: 'events' },
  'entities': { view: ListView, listType: 'entities' },
  'documents': { view: DocumentsView, listType: 'documents' },
  'topics': { view: ListView, listType: 'topics' },
  'tags': { view: TagsView, listType: 'tags' }
};

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
    
    // Track dashboard filter listeners for cleanup
    this._dashboardListeners = [];

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
   * Add a dashboard filter listener with tracking for cleanup
   */
  _addDashboardListener(element, event, handler) {
    if (!element) return;
    element.addEventListener(event, handler);
    this._dashboardListeners.push({ element, event, handler });
  }
  
  /**
   * Remove all tracked dashboard filter listeners
   */
  _removeDashboardListeners() {
    this._dashboardListeners.forEach(({ element, event, handler }) => {
      try {
        element.removeEventListener(event, handler);
      } catch (e) {
        // Element may have been removed from DOM
      }
    });
    this._dashboardListeners = [];
  }
  
  /**
   * Clean up dashboard-specific resources when navigating away
   */
  cleanupDashboardFilters() {
    this._removeDashboardListeners();
    
    if (this.timeRangeFilter && this.timeRangeFilter.destroy) {
      try {
        this.timeRangeFilter.destroy();
      } catch (e) {
        console.error('Router: Error destroying time range filter:', e);
      }
      this.timeRangeFilter = null;
    }
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
    return escapeHtml(text);
  }

  /**
   * Initialize router and navigate to current hash
   */
  init() {
    try {
      // Get default page from settings
      const settings = dataStore.getSettings();
      let defaultPage = settings.defaultStartPage || 'monitors';
      
      // If dashboard is disabled and was set as start page, fall back to monitors
      if (!settings.dashboardEnabled && defaultPage === 'dashboard') {
        defaultPage = 'monitors';
      }
      
      // Navigate to current hash or default based on settings
      if (!window.location.hash || window.location.hash === '#/') {
        window.location.hash = `#/${defaultPage}`;
      } else {
        this.handleRoute();
      }
    } catch (e) {
      console.error('Router: Error during initialization:', e);
      // Try to at least show monitors as fallback
      window.location.hash = '#/monitors';
    }
  }

  /**
   * Initialize dashboard filters (called after dashboard renders)
   */
  initDashboardFilters() {
    // Set up mission filter listener
    this.initMissionFilter();
    
    // Populate mission filter options
    this.populateMissionFilter();
    
    // Set up time range filter
    this.initTimeRangeFilter();
    
    // Set up clear time filter button
    this.initClearTimeFilterButton();
    
    // Update time range label based on current state
    this.updateTimeRangeLabel(this.filters.timeRange);
  }

  /**
   * Populate mission filter dropdown with available missions
   */
  populateMissionFilter() {
    const select = document.getElementById('mission-filter');
    if (!select) return;

    const missions = DataService.getMissions();
    const currentValue = this.filters.missionId || 'all';

    select.innerHTML = `
      <option value="all">All Missions</option>
      ${missions.map(m => `
        <option value="${m.id}" ${currentValue === m.id ? 'selected' : ''}>
          ${m.name}
        </option>
      `).join('')}
    `;
  }

  /**
   * Initialize mission filter dropdown
   */
  initMissionFilter() {
    try {
      const missionSelect = document.getElementById('mission-filter');
      if (missionSelect) {
        this._addDashboardListener(missionSelect, 'change', (e) => {
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
      this._addDashboardListener(clearBtn, 'click', () => {
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
   * Parse nested routes into structured components
   * Handles patterns like:
   *   - #/workspaces (top-level list)
   *   - #/workspace/{id} (context home)
   *   - #/workspace/{id}/faction/{factionId} (scoped entity)
   *   - #/workspace/{id}/faction/{factionId}/documents (scoped entity tab)
   *   - #/dashboard/narratives (global list)
   *   - #/faction/{id} (legacy global - redirected to dashboard)
   * 
   * @param {string} hash - The hash path without #/ and query string
   * @returns {Object} Parsed route info
   */
  parseNestedRoute(hash) {
    const segments = hash.split('/').filter(s => s);
    
    // Default result structure
    const result = {
      context: null,           // 'workspace' | 'monitor' | 'dashboard' | null
      contextId: null,         // ID of workspace/monitor (null for dashboard)
      entityType: null,        // 'narrative', 'narratives', 'faction', etc.
      entityId: null,          // ID of specific entity
      subRoute: null,          // 'documents' for documents tab
      isListView: false,       // true if entityType is plural
      isContextHome: false,    // true if viewing context dashboard (no entity)
      isLegacyRoute: false,    // true if old global route (needs redirect)
      topLevelRoute: null      // For non-context routes like 'workspaces', 'search'
    };

    if (segments.length === 0) {
      return result;
    }

    const firstSegment = segments[0];

    // Check for top-level non-context routes
    const topLevelRoutes = ['workspaces', 'monitors', 'search', 'projects', 'activity', 'settings', 'data-model', 'component-demos', 'status'];
    if (topLevelRoutes.includes(firstSegment)) {
      result.topLevelRoute = firstSegment;
      return result;
    }

    // Check if first segment is a context
    if (CONTEXT_TYPES.includes(firstSegment)) {
      result.context = firstSegment;
      
      if (firstSegment === 'dashboard') {
        // Dashboard context: #/dashboard or #/dashboard/entityType/entityId
        if (segments.length === 1) {
          result.isContextHome = true;
        } else {
          // Parse entity from remaining segments
          this._parseEntitySegments(segments.slice(1), result);
        }
      } else {
        // Workspace or Monitor context: need contextId
        if (segments.length >= 2) {
          result.contextId = segments[1];
          
          if (segments.length === 2) {
            result.isContextHome = true;
          } else {
            // Parse entity from remaining segments
            this._parseEntitySegments(segments.slice(2), result);
          }
        }
      }
    } else if (ENTITY_TYPES[firstSegment]) {
      // Legacy global entity route: #/faction/123 → redirect to #/dashboard/faction/123
      result.isLegacyRoute = true;
      result.context = 'dashboard';
      this._parseEntitySegments(segments, result);
    } else {
      // Unknown route - treat as top-level
      result.topLevelRoute = firstSegment;
    }

    return result;
  }

  /**
   * Helper to parse entity segments from a route
   * @param {string[]} segments - Array of path segments starting with entityType
   * @param {Object} result - Result object to populate
   */
  _parseEntitySegments(segments, result) {
    if (segments.length === 0) return;
    
    const entityType = segments[0];
    result.entityType = entityType;
    result.isListView = entityType.endsWith('s') && entityType !== 'status';
    
    if (segments.length >= 2 && segments[1] !== 'documents') {
      result.entityId = segments[1];
      result.isListView = false;
    }
    
    // Check for /documents sub-route
    const lastSegment = segments[segments.length - 1];
    if (lastSegment === 'documents' && segments.length > 1) {
      result.subRoute = 'documents';
    }
  }

  /**
   * Resolve context to a scope object with document IDs
   * @param {string} context - Context type ('workspace', 'monitor', 'dashboard')
   * @param {string} contextId - ID of the context (null for dashboard)
   * @returns {Object} Scope object with type, id, and documentIds
   */
  resolveContextScope(context, contextId) {
    if (!context || context === 'dashboard') {
      return { 
        type: 'dashboard', 
        id: null, 
        documentIds: null,
        getName: () => 'Dashboard'
      };
    }
    
    if (context === 'workspace') {
      const workspace = DataService.getWorkspace(contextId);
      if (!workspace) {
        console.warn(`Router: Workspace ${contextId} not found`);
        return null;
      }
      return { 
        type: 'workspace', 
        id: contextId, 
        documentIds: workspace.documentIds || [],
        getName: () => workspace.name || 'Workspace'
      };
    }
    
    if (context === 'monitor') {
      const monitor = DataService.getMonitor(contextId);
      if (!monitor) {
        console.warn(`Router: Monitor ${contextId} not found`);
        return null;
      }
      // Resolve monitor's search filters to document IDs
      const docs = DataService.getDocumentsForMonitor(contextId);
      return { 
        type: 'monitor', 
        id: contextId, 
        documentIds: docs.map(d => d.id),
        getName: () => monitor.name || 'Monitor'
      };
    }
    
    if (context === 'project') {
      const project = DataService.getProject(contextId);
      if (!project) {
        console.warn(`Router: Project ${contextId} not found`);
        return null;
      }
      return { 
        type: 'project', 
        id: contextId, 
        documentIds: project.documentIds || [],
        getName: () => project.name || 'Project'
      };
    }

    return null;
  }

  /**
   * Build a context-aware route URL
   * @param {string} entityType - Entity type (e.g., 'faction', 'narrative')
   * @param {string} entityId - Entity ID (optional for list views)
   * @param {Object} context - Context object from resolveContextScope
   * @param {string} subRoute - Optional sub-route (e.g., 'documents')
   * @returns {string} Full hash URL
   */
  buildContextRoute(entityType, entityId = null, context = null, subRoute = null) {
    let path;
    
    if (!context || context.type === 'dashboard') {
      path = `#/dashboard/${entityType}`;
    } else {
      path = `#/${context.type}/${context.id}/${entityType}`;
    }
    
    if (entityId) {
      path += `/${entityId}`;
    }
    
    if (subRoute) {
      path += `/${subRoute}`;
    }
    
    return path;
  }

  /**
   * Parse current hash and route to appropriate view
   * Supports both legacy flat routes and new nested context routes
   */
  handleRoute() {
    const fullHash = window.location.hash.slice(2) || 'dashboard'; // Remove #/
    
    // Separate path from query string
    const queryIndex = fullHash.indexOf('?');
    const hash = queryIndex === -1 ? fullHash : fullHash.slice(0, queryIndex);
    const queryParams = this.parseQueryParams(fullHash);
    
    // Parse the route using new nested route parser
    const parsed = this.parseNestedRoute(hash);

    // Handle legacy routes by redirecting to dashboard context
    if (parsed.isLegacyRoute) {
      let newRoute = `#/dashboard/${parsed.entityType}`;
      if (parsed.entityId) newRoute += `/${parsed.entityId}`;
      if (parsed.subRoute) newRoute += `/${parsed.subRoute}`;
      window.location.hash = newRoute;
      return;
    }

    // Determine the primary route for nav link highlighting
    this.currentRoute = parsed.topLevelRoute || parsed.context || 'dashboard';
    this.currentContext = parsed.context ? this.resolveContextScope(parsed.context, parsed.contextId) : null;

    // Destroy current view and clean up sticky header
    try {
      destroyStickyHeader();
    } catch (e) {
      console.error('Router: Error destroying sticky header:', e);
    }
    
    // Clean up dashboard filters if navigating away from dashboard
    this.cleanupDashboardFilters();
    
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
      this.updateNavLinks(this.currentRoute);
    } catch (e) {
      console.error('Router: Error updating nav links:', e);
    }

    // Get settings for default tab
    const settings = dataStore.getSettings();
    
    // Determine tab based on sub-route or query params
    let tab = 'dashboard';
    if (parsed.subRoute === 'documents') {
      tab = 'documents';
    } else if (queryParams.tab) {
      tab = queryParams.tab;
    } else if (settings.defaultViewTab) {
      tab = settings.defaultViewTab;
    }
    
    // Common options with filters and context
    const filterOptions = {
      missionId: this.filters.missionId || 'all',
      timeRange: this.filters.timeRange,
      tab: tab,
      context: this.currentContext // Pass context scope to views
    };

    // Track if this is the dashboard home for filter initialization
    let isDashboardHome = false;

    // Route based on parsed structure
    if (parsed.topLevelRoute) {
      // Handle top-level routes (workspaces, monitors, search, etc.)
      this._handleTopLevelRoute(parsed.topLevelRoute, filterOptions, settings);
    } else if (parsed.context) {
      // Handle context-scoped routes
      this._handleContextRoute(parsed, filterOptions, settings);
      isDashboardHome = parsed.context === 'dashboard' && parsed.isContextHome;
    } else {
      // No recognized route - redirect to default
      let defaultPage = settings.defaultStartPage || 'monitors';
      if (!settings.dashboardEnabled && defaultPage === 'dashboard') {
        defaultPage = 'monitors';
      }
      window.location.hash = `#/${defaultPage}`;
      return;
    }

    // Render the view
    if (this.currentView && this.currentView.render) {
      try {
        this.currentView.render();
        
        // Initialize dashboard filters after render (only for dashboard home)
        if (isDashboardHome) {
          this.initDashboardFilters();
        }
      } catch (e) {
        console.error(`Router: Error rendering view:`, e);
        this.showErrorPage('Page Error', `An error occurred while loading this page.`);
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
   * Handle top-level routes (not scoped to a context)
   */
  _handleTopLevelRoute(route, filterOptions, settings) {
    switch (route) {
      case 'workspaces':
        this.currentView = new WorkspacesView(this.container, filterOptions);
        break;
        
      case 'monitors':
        this.currentView = new MonitorsView(this.container, filterOptions);
        break;
        
      case 'search':
        this.currentView = new SearchView(this.container, filterOptions);
        break;
        
      case 'projects':
        this.currentView = new ProjectsView(this.container, filterOptions);
        break;
        
      case 'activity':
        this.currentView = new ActivityFeedView(this.container, filterOptions);
        break;
        
      case 'data-model':
        window.location.href = 'data-model.html';
        return;
        
      case 'component-demos':
        window.location.href = 'component-demos.html';
        return;
        
      case 'status':
        // Redirect to dashboard
        window.location.hash = '#/dashboard';
        return;
        
      default:
        // Unknown top-level route - redirect to default
        let defaultPage = settings.defaultStartPage || 'monitors';
        if (!settings.dashboardEnabled && defaultPage === 'dashboard') {
          defaultPage = 'monitors';
        }
        window.location.hash = `#/${defaultPage}`;
    }
  }

  /**
   * Handle context-scoped routes (workspace/monitor/dashboard with optional entity)
   */
  _handleContextRoute(parsed, filterOptions, settings) {
    const { context, contextId, entityType, entityId, isContextHome, isListView } = parsed;
    
    // Dashboard context home
    if (context === 'dashboard' && isContextHome) {
      if (!settings.dashboardEnabled) {
        window.location.hash = '#/monitors';
        return;
      }
      this.currentView = new DashboardView(this.container, filterOptions);
      return;
    }
    
    // Workspace context home
    if (context === 'workspace' && isContextHome) {
      this.currentView = new WorkspaceView(this.container, contextId, filterOptions);
      return;
    }
    
    // Monitor context home
    if (context === 'monitor' && isContextHome) {
      this.currentView = new MonitorView(this.container, contextId, filterOptions);
      return;
    }
    
    // Project context home
    if (context === 'project' && isContextHome) {
      this.currentView = new ProjectView(this.container, contextId, filterOptions);
      return;
    }
    
    // Entity view within context
    if (entityType) {
      this._handleEntityView(entityType, entityId, isListView, filterOptions);
    }
  }

  /**
   * Handle entity views (both list and detail)
   */
  _handleEntityView(entityType, entityId, isListView, filterOptions) {
    const entityConfig = ENTITY_TYPES[entityType];
    
    if (!entityConfig) {
      console.warn(`Router: Unknown entity type '${entityType}'`);
      this.showErrorPage('Not Found', `Unknown entity type: ${entityType}`);
      return;
    }
    
    const ViewClass = entityConfig.view;
    
    if (isListView) {
      // List views: ListView or specialized list view (DocumentsView, TagsView)
      if (ViewClass === ListView) {
        this.currentView = new ListView(this.container, entityConfig.listType, filterOptions);
      } else if (ViewClass === DocumentsView) {
        this.currentView = new DocumentsView(this.container, filterOptions);
      } else if (ViewClass === TagsView) {
        this.currentView = new TagsView(this.container, filterOptions);
      } else {
        // Fallback to ListView
        this.currentView = new ListView(this.container, entityConfig.listType, filterOptions);
      }
    } else {
      // Detail view
      if (entityId) {
        // Special case: themes redirect to narratives list if no ID
        if (entityType === 'theme' && !entityId) {
          const ctx = filterOptions.context;
          const basePath = ctx && ctx.type !== 'dashboard' ? `#/${ctx.type}/${ctx.id}` : '#/dashboard';
          window.location.hash = `${basePath}/narratives`;
          return;
        }
        
        this.currentView = new ViewClass(this.container, entityId, filterOptions);
      } else {
        // No ID provided for detail view - show list instead
        if (entityConfig.listType) {
          this.currentView = new ListView(this.container, entityConfig.listType, filterOptions);
        }
      }
    }
  }

  /**
   * Update active state on navigation links
   * Handles both top-level routes and context-scoped routes
   */
  updateNavLinks(route) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
      const linkRoute = link.getAttribute('href')?.replace('#/', '') || '';
      
      // Check if this link matches the current route/context
      const matches = 
        linkRoute === route ||
        linkRoute === 'dashboard' && route === 'dashboard' ||
        linkRoute === 'monitors' && (route === 'monitors' || route === 'monitor') ||
        linkRoute === 'workspaces' && (route === 'workspaces' || route === 'workspace') ||
        linkRoute === 'projects' && (route === 'projects' || route === 'project');
      
      if (matches) {
        link.classList.add('active');
      }
    });
  }

  /**
   * Navigate programmatically
   * @param {string} route - Route path or entity type
   * @param {string} id - Optional entity ID
   * @param {Object} context - Optional context object (if navigating within a context)
   */
  navigate(route, id = null, context = null) {
    let hash;
    
    if (context && context.type && context.type !== 'dashboard') {
      // Context-scoped navigation
      hash = `#/${context.type}/${context.id}/${route}`;
      if (id) hash += `/${id}`;
    } else if (context && context.type === 'dashboard') {
      // Dashboard context
      hash = `#/dashboard/${route}`;
      if (id) hash += `/${id}`;
    } else {
      // Top-level or legacy navigation
      hash = `#/${route}`;
      if (id) hash += `/${id}`;
    }
    
    window.location.hash = hash;
  }

  /**
   * Get current route info (parsed structure)
   * @returns {Object} Parsed route with context, entityType, entityId, etc.
   */
  getCurrentRoute() {
    const fullHash = window.location.hash.slice(2) || 'dashboard';
    const queryIndex = fullHash.indexOf('?');
    const hash = queryIndex === -1 ? fullHash : fullHash.slice(0, queryIndex);
    const queryParams = this.parseQueryParams(fullHash);
    const parsed = this.parseNestedRoute(hash);
    
    return {
      ...parsed,
      queryParams,
      // Legacy compatibility
      route: parsed.topLevelRoute || parsed.context || parsed.entityType,
      id: parsed.contextId || parsed.entityId
    };
  }

  /**
   * Get the current context scope (if any)
   * @returns {Object|null} Current context scope with documentIds
   */
  getContext() {
    return this.currentContext || null;
  }

  /**
   * Build a URL with the current route and updated query params
   * @param {Object} params - Query params to set/update
   * @returns {string} The full hash URL
   */
  buildUrl(params = {}) {
    const fullHash = window.location.hash.slice(2) || 'dashboard';
    const queryIndex = fullHash.indexOf('?');
    const basePath = queryIndex === -1 ? `#/${fullHash}` : `#/${fullHash.slice(0, queryIndex)}`;
    
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
