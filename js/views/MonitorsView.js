/**
 * MonitorsView.js
 * Track entities and narratives with custom alert thresholds
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { NarrativeList } from '../components/NarrativeList.js';
import { TopicList } from '../components/TopicList.js';
import { Timeline } from '../components/Timeline.js';
import { StackedAreaChart } from '../components/StackedAreaChart.js';
import { TimelineVolumeComposite } from '../components/TimelineVolumeComposite.js';
import { VennDiagram } from '../components/VennDiagram.js';
import { SentimentChart } from '../components/SentimentChart.js';
import { NetworkGraph } from '../components/NetworkGraph.js';
import { DocumentList } from '../components/DocumentList.js';
import { MapView } from '../components/MapView.js';
import { CardBuilder } from '../utils/CardBuilder.js';
import { initAllCardToggles } from '../utils/cardWidthToggle.js';
import { getMonitorEditor } from '../components/MonitorEditorModal.js';

// Available visualization types for monitors
const VISUALIZATION_TYPES = [
  { id: 'narratives', label: 'Narratives' },
  { id: 'events', label: 'Events' },
  { id: 'volume', label: 'Narrative volume over time' },
  { id: 'volume_events', label: 'Volume over time with events' },
  { id: 'topics', label: 'Topics' },
  { id: 'locations', label: 'Locations' },
  { id: 'faction_overlaps', label: 'Faction overlaps' },
  { id: 'faction_sentiment', label: 'Faction sentiment' },
  { id: 'network_graph', label: 'People & orgs network graph' },
  { id: 'documents', label: 'Documents' }
];

// Default visualization type for each monitor (by name)
const DEFAULT_MONITOR_VISUALIZATIONS = {
  'Immigration Enforcement Activity': 'volume_events',
  'Public Health Policy': 'narratives',
  'Trump Administration Actions': 'faction_sentiment',
  'Judicial Safety Watch': 'topics',
  'US-European Orgs': 'network_graph',
  'SMIC Technology Progress': 'faction_overlaps',
  'Chinese Investment Watch': 'volume_events',
  'Export Controls Impact': 'faction_sentiment',
  'Huawei Sanctions Monitoring': 'narratives',
  'Supply Chain and Manufacturing': 'topics',
  'Store Closure Impact': 'locations',
  'Pricing Perception Monitor': 'faction_sentiment',
  'Employee Experience Tracker': 'documents',
  'Self Checkout Complaints': 'volume',
  'Product Availability Issues': 'topics',
  'Product Safety Alerts': 'narratives',
  'Competitor Activity Tracker': 'topics'
};

export class MonitorsView extends BaseView {
  constructor(container, options = {}) {
    super(container, options);
    this.visualizationComponents = []; // Store all active visualization components
    this.descriptionToggles = new Map(); // Map of containerId -> NarrativeList
    this.monitorEditor = null;
    this.monitorVisualizationTypes = new Map(); // Map of monitorId -> selected visualization type
  }

  /**
   * Helper to get scope icon based on scope type
   */
  getScopeIcon(scopeType) {
    const icons = {
      narrative: `<svg class="scope-entity-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.25">
        <path d="M2 2h12v12H2z" rx="1"/>
        <path d="M4 5h8M4 8h8M4 11h5"/>
      </svg>`,
      theme: `<svg class="scope-entity-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.25">
        <path d="M2 2h12v12H2z" rx="1"/>
        <path d="M4 5h8M4 8h6M4 11h4"/>
      </svg>`,
      faction: `<svg class="scope-entity-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.25">
        <circle cx="8" cy="5" r="2.5"/>
        <circle cx="4" cy="11" r="2"/>
        <circle cx="12" cy="11" r="2"/>
        <path d="M6 6.5L4.5 9M10 6.5l1.5 2.5"/>
      </svg>`,
      person: `<svg class="scope-entity-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.25">
        <circle cx="8" cy="4" r="2.5"/>
        <path d="M3 14c0-3 2.2-5 5-5s5 2 5 5"/>
      </svg>`,
      organization: `<svg class="scope-entity-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.25">
        <rect x="3" y="6" width="10" height="8" rx="1"/>
        <path d="M5 6V4a3 3 0 0 1 6 0v2"/>
        <rect x="5" y="9" width="2" height="2"/>
        <rect x="9" y="9" width="2" height="2"/>
      </svg>`,
      location: `<svg class="scope-entity-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.25">
        <path d="M8 1C5.2 1 3 3.2 3 6c0 4 5 9 5 9s5-5 5-9c0-2.8-2.2-5-5-5z"/>
        <circle cx="8" cy="6" r="2"/>
      </svg>`,
      event: `<svg class="scope-entity-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.25">
        <rect x="2" y="3" width="12" height="11" rx="1"/>
        <path d="M2 6h12M5 1v3M11 1v3"/>
      </svg>`,
      custom: `<svg class="scope-entity-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.25">
        <circle cx="8" cy="8" r="6"/>
        <path d="M8 5v6M5 8h6"/>
      </svg>`
    };
    return icons[scopeType] || icons.custom;
  }

  /**
   * Helper to format relative time
   */
  formatRelativeTime(isoDate) {
    if (!isoDate) return null;
    const date = new Date(isoDate);
    const now = new Date();
    const diffMs = now - date;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffHours < 1) return 'Just now';
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  }

  /**
   * Helper to get alert type label
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
   * Helper to get alert type CSS class
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
   * Build the visualization type dropdown HTML
   */
  buildVisualizationDropdown(monitorId) {
    const currentType = this.monitorVisualizationTypes.get(monitorId) || 'narratives';
    const currentLabel = VISUALIZATION_TYPES.find(v => v.id === currentType)?.label || 'Narratives';
    
    const optionsHtml = VISUALIZATION_TYPES.map(v => `
      <div class="viz-dropdown-option${v.id === currentType ? ' active' : ''}" data-viz-type="${v.id}">
        ${v.label}
      </div>
    `).join('');
    
    return `
      <div class="monitor-viz-dropdown" data-monitor-id="${monitorId}">
        <button class="monitor-viz-dropdown-trigger">
          <span class="viz-dropdown-label">${currentLabel}</span>
          <svg class="viz-dropdown-arrow" viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M4 6l4 4 4-4"/>
          </svg>
        </button>
        <div class="monitor-viz-dropdown-menu">
          ${optionsHtml}
        </div>
      </div>
    `;
  }

  async render() {
    // Load monitors from DataService
    const monitors = DataService.getMonitors();
    
    // Initialize default visualization types for monitors (only if not already set)
    monitors.forEach(monitor => {
      if (!this.monitorVisualizationTypes.has(monitor.id)) {
        const defaultViz = DEFAULT_MONITOR_VISUALIZATIONS[monitor.name] || 'narratives';
        this.monitorVisualizationTypes.set(monitor.id, defaultViz);
      }
    });
    
    // Build enriched monitor data with computed fields
    const enrichedMonitors = monitors.map(monitor => {
      const scopeType = DataService.getMonitorScopeType(monitor.id);
      const scopeLabel = DataService.getMonitorScopeLabel(monitor.id);
      const triggerLabels = DataService.getMonitorTriggerLabels(monitor.id);
      const matchedNarratives = DataService.getNarrativesForMonitor(monitor.id);
      const matchedEvents = DataService.getEventsForMonitor(monitor.id);
      const alerts = DataService.getAlertsForMonitor(monitor.id);
      const containerId = `monitor-viz-${monitor.id}`;
      const scopeLogic = monitor.scope?.logic || 'OR';
      
      return {
        ...monitor,
        scopeType,
        scopeLabel,
        scopeIcon: this.getScopeIcon(scopeType),
        triggerLabels,
        matchedNarratives,
        matchedEvents,
        alerts,
        containerId,
        scopeLogic,
        lastTriggeredFormatted: this.formatRelativeTime(monitor.lastTriggered)
      };
    });
    
    // Build monitor cards HTML using CardBuilder
    const monitorCardsHtml = enrichedMonitors.map(monitor => {
      // Build alerts HTML
      const alertsHtml = monitor.alerts && monitor.alerts.length > 0 
        ? monitor.alerts.slice(0, 3).map(alert => `
            <div class="monitor-alert-item">
              <span class="alert-type-badge ${this.getAlertTypeClass(alert.type)}">${this.getAlertTypeLabel(alert.type)}</span>
              <span class="alert-description">${alert.description}</span>
              <span class="alert-time">${this.formatRelativeTime(alert.triggeredAt)}</span>
            </div>
          `).join('')
        : '<div class="monitor-no-alerts">No recent alerts</div>';
      
      // Build subtitle with trigger info and paused status
      let subtitle = monitor.enabled && monitor.lastTriggeredFormatted
        ? `Triggered ${monitor.lastTriggeredFormatted}`
        : !monitor.enabled ? 'Paused' : '';
      
      // Add logic badge and match count to subtitle
      const logicBadge = `<span class="logic-badge logic-${monitor.scopeLogic.toLowerCase()}">${monitor.scopeLogic}</span>`;
      const matchCount = `<span class="match-count">${monitor.matchedNarratives.length} match${monitor.matchedNarratives.length !== 1 ? 'es' : ''}</span>`;
      subtitle = `${logicBadge}${matchCount}${subtitle ? ' • ' + subtitle : ''}`;
      
      // Build actions HTML with visualization dropdown, edit button, and description toggle
      const descToggleId = `desc-toggle-${monitor.id}`;
      const editBtnHtml = `
        <button class="monitor-edit-btn" data-monitor-id="${monitor.id}" title="Edit monitor">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M11.5 2.5l2 2M2 11l-.5 3.5L5 14l9-9-2-2-10 10z"/>
          </svg>
        </button>
      `;
      const actionsHtml = this.buildVisualizationDropdown(monitor.id) + editBtnHtml + CardBuilder.descriptionToggle(descToggleId);
      
      // Content for the card body
      const cardBodyContent = `
        <div class="monitor-alerts-section">
          <div class="monitor-section-header">
            <span class="monitor-section-title">Recent Alerts</span>
            ${monitor.alerts && monitor.alerts.length > 0 ? `<span class="alert-count">${monitor.alerts.length}</span>` : ''}
          </div>
          <div class="monitor-alerts-list">
            ${alertsHtml}
          </div>
        </div>
        <div class="monitor-viz-container" id="${monitor.containerId}"></div>
      `;
      
      // Use CardBuilder to create the card
      let cardHtml = CardBuilder.create(monitor.name, `monitor-body-${monitor.id}`, {
        noPadding: true,
        halfWidth: true,
        subtitle: subtitle,
        actions: actionsHtml
      });
      
      // Make the title clickable - wrap in anchor tag
      cardHtml = cardHtml.replace(
        `<h2 class="card-title">${monitor.name}</h2>`,
        `<h2 class="card-title"><a href="#/monitor/${monitor.id}" class="card-title-link">${monitor.name}</a></h2>`
      );
      
      // Insert the card body content into the generated card
      // We need to replace the empty body with our content
      return cardHtml.replace(
        `id="monitor-body-${monitor.id}"></div>`,
        `id="monitor-body-${monitor.id}">${cardBodyContent}</div>`
      );
    }).join('');
    
    // Calculate today's alerts count
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const allAlerts = DataService.getAlerts();
    const todayAlerts = allAlerts.filter(a => new Date(a.triggeredAt) >= today);
    
    this.container.innerHTML = `
      <div class="view-header">
        <div>
          <h1 class="view-title">Monitors</h1>
          <p class="view-subtitle">Track entities and narratives with custom alert thresholds</p>
        </div>
        <div class="view-header-actions">
          <div class="nav-dropdown monitor-dropdown">
            <button class="nav-dropdown-trigger">
              <span>Trigger Types</span>
              <svg class="dropdown-arrow" viewBox="0 0 16 16" fill="none" stroke="var(--text-secondary)" stroke-width="1">
                <path d="M4 6l4 4 4-4"/>
              </svg>
            </button>
            <div class="nav-dropdown-menu monitor-dropdown-menu">
              <div class="dropdown-item-row">
                <span class="data-label">Volume Spike</span>
                <span class="text-muted">Threshold-based</span>
              </div>
              <div class="dropdown-item-row">
                <span class="data-label">Sentiment Shift</span>
                <span class="text-muted">Trend analysis</span>
              </div>
              <div class="dropdown-item-row">
                <span class="data-label">New Narrative</span>
                <span class="text-muted">Pattern matching</span>
              </div>
              <div class="dropdown-item-row">
                <span class="data-label">New Event</span>
                <span class="text-muted">Entity tracking</span>
              </div>
              <div class="dropdown-item-row">
                <span class="data-label">Faction Engagement</span>
                <span class="text-muted">Activity monitoring</span>
              </div>
            </div>
          </div>
          
          <div class="nav-dropdown monitor-dropdown">
            <button class="nav-dropdown-trigger">
              <span>Scope Types</span>
              <svg class="dropdown-arrow" viewBox="0 0 16 16" fill="none" stroke="var(--text-secondary)" stroke-width="1">
                <path d="M4 6l4 4 4-4"/>
              </svg>
            </button>
            <div class="nav-dropdown-menu monitor-dropdown-menu">
              <div class="dropdown-item-row">
                <span class="scope-type-item">
                  <svg class="scope-type-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.25">
                    <path d="M2 2h12v12H2z" rx="1"/>
                    <path d="M4 5h8M4 8h8M4 11h5"/>
                  </svg>
                  <span class="scope-type-label">Narrative</span>
                </span>
                <span class="text-xs text-muted">Watch existing narratives</span>
              </div>
              <div class="dropdown-item-row">
                <span class="scope-type-item">
                  <svg class="scope-type-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.25">
                    <path d="M2 2h12v12H2z" rx="1"/>
                    <path d="M4 5h8M4 8h6M4 11h4"/>
                  </svg>
                  <span class="scope-type-label">Theme</span>
                </span>
                <span class="text-xs text-muted">Watch specific themes</span>
              </div>
              <div class="dropdown-item-row">
                <span class="scope-type-item">
                  <svg class="scope-type-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.25">
                    <path d="M6 1v14M10 1v14M1 6h14M1 10h14"/>
                  </svg>
                  <span class="scope-type-label">Topic</span>
                </span>
                <span class="text-xs text-muted">Watch topic keywords</span>
              </div>
              <div class="dropdown-item-row">
                <span class="scope-type-item">
                  <svg class="scope-type-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.25">
                    <circle cx="8" cy="5" r="2.5"/>
                    <circle cx="4" cy="11" r="2"/>
                    <circle cx="12" cy="11" r="2"/>
                    <path d="M6 6.5L4.5 9M10 6.5l1.5 2.5"/>
                  </svg>
                  <span class="scope-type-label">Faction</span>
                </span>
                <span class="text-xs text-muted">Watch faction activity</span>
              </div>
              <div class="dropdown-item-row">
                <span class="scope-type-item">
                  <svg class="scope-type-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.25">
                    <circle cx="8" cy="4" r="2.5"/>
                    <path d="M3 14c0-3 2.2-5 5-5s5 2 5 5"/>
                  </svg>
                  <span class="scope-type-label">Person</span>
                </span>
                <span class="text-xs text-muted">Watch individuals</span>
              </div>
              <div class="dropdown-item-row">
                <span class="scope-type-item">
                  <svg class="scope-type-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.25">
                    <rect x="3" y="6" width="10" height="8" rx="1"/>
                    <path d="M5 6V4a3 3 0 0 1 6 0v2"/>
                    <rect x="5" y="9" width="2" height="2"/>
                    <rect x="9" y="9" width="2" height="2"/>
                  </svg>
                  <span class="scope-type-label">Organization</span>
                </span>
                <span class="text-xs text-muted">Watch organizations</span>
              </div>
              <div class="dropdown-item-row">
                <span class="scope-type-item">
                  <svg class="scope-type-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.25">
                    <path d="M8 1C5.2 1 3 3.2 3 6c0 4 5 9 5 9s5-5 5-9c0-2.8-2.2-5-5-5z"/>
                    <circle cx="8" cy="6" r="2"/>
                  </svg>
                  <span class="scope-type-label">Location</span>
                </span>
                <span class="text-xs text-muted">Watch geographic areas</span>
              </div>
              <div class="dropdown-item-row">
                <span class="scope-type-item">
                  <svg class="scope-type-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.25">
                    <rect x="2" y="3" width="12" height="11" rx="1"/>
                    <path d="M2 6h12M5 1v3M11 1v3"/>
                  </svg>
                  <span class="scope-type-label">Event</span>
                </span>
                <span class="text-xs text-muted">Watch specific events</span>
              </div>
            </div>
          </div>
          
          <div class="view-header-stats">
            <span class="badge badge-status-active">${enrichedMonitors.filter(m => m.enabled).length} Active Monitors</span>
            <span class="badge badge-status-high">${todayAlerts.length} Alert${todayAlerts.length !== 1 ? 's' : ''} Today</span>
          </div>
        </div>
      </div>
      
      <div class="monitors-section">
        <div class="monitors-section-header">
          <h2 class="section-title">Active Monitors</h2>
          <button class="btn btn-small btn-primary">+ New Monitor</button>
        </div>
        <div class="content-grid monitors-grid">
          ${monitorCardsHtml}
        </div>
      </div>
      
    `;
    
    // Setup popover toggle handlers
    this.setupHeaderPopovers();
    
    // Setup create/edit monitor handlers
    this.setupMonitorEditorHandlers(enrichedMonitors);
    
    // Setup visualization dropdown handlers
    this.setupVisualizationDropdowns(enrichedMonitors);
    
    // Initialize card width toggles for all monitor cards
    const monitorsGrid = this.container.querySelector('.monitors-grid');
    initAllCardToggles(monitorsGrid, 'monitors');
    
    // Store enriched monitors for later use
    this.enrichedMonitors = enrichedMonitors;
    
    // Initialize visualizations for each monitor
    enrichedMonitors.forEach(monitor => {
      this.renderMonitorVisualization(monitor);
    });
  }

  /**
   * Render the visualization for a specific monitor based on selected type
   */
  renderMonitorVisualization(monitor) {
    const vizType = this.monitorVisualizationTypes.get(monitor.id) || 'narratives';
    const container = document.getElementById(monitor.containerId);
    
    if (!container) return;
    
    // Clear existing content and destroy old component
    container.innerHTML = '';
    this.destroyMonitorVisualization(monitor.id);
    
    switch (vizType) {
      case 'narratives':
        this.renderNarrativesVisualization(monitor, container);
        break;
      case 'events':
        this.renderEventsVisualization(monitor, container);
        break;
      case 'volume':
        this.renderVolumeVisualization(monitor, container);
        break;
      case 'volume_events':
        this.renderVolumeEventsVisualization(monitor, container);
        break;
      case 'topics':
        this.renderTopicsVisualization(monitor, container);
        break;
      case 'locations':
        this.renderLocationsVisualization(monitor, container);
        break;
      case 'faction_overlaps':
        this.renderFactionOverlapsVisualization(monitor, container);
        break;
      case 'faction_sentiment':
        this.renderFactionSentimentVisualization(monitor, container);
        break;
      case 'network_graph':
        this.renderNetworkGraphVisualization(monitor, container);
        break;
      case 'documents':
        this.renderDocumentsVisualization(monitor, container);
        break;
      default:
        this.renderNarrativesVisualization(monitor, container);
    }
  }

  /**
   * Render Narratives visualization (default)
   */
  renderNarrativesVisualization(monitor, container) {
    if (monitor.matchedNarratives && monitor.matchedNarratives.length > 0) {
      const narrativeList = new NarrativeList(container, {
        maxItems: 5,
        showSentiment: true,
        showStatus: true,
        showSparkline: true,
        showVolume: true,
        showSubNarratives: true,
        maxSubNarratives: 3,
        defaultShowDescription: false,
        onNarrativeClick: (n) => {
          window.location.hash = `#/narrative/${n.id}`;
        }
      });
      narrativeList.update({ narratives: monitor.matchedNarratives });
      this.visualizationComponents.push({ monitorId: monitor.id, component: narrativeList, type: 'narratives' });
      
      // Store reference for description toggle
      this.descriptionToggles.set(monitor.id, narrativeList);
      
      // Set up description toggle handler
      const descToggle = document.getElementById(`desc-toggle-${monitor.id}`);
      if (descToggle) {
        descToggle.addEventListener('click', () => {
          const isShowing = narrativeList.toggleDescription();
          descToggle.classList.toggle('active', isShowing);
        });
      }
    } else {
      this.showEmptyVisualization(container, 'No matching narratives');
    }
  }

  /**
   * Render Events visualization
   */
  renderEventsVisualization(monitor, container) {
    const events = monitor.matchedEvents || DataService.getEventsForMonitor(monitor.id);
    
    if (events && events.length > 0) {
      const timeline = new Timeline(container, {
        height: 280,
        onEventClick: (e) => {
          window.location.hash = `#/event/${e.id}`;
        }
      });
      timeline.update({ events });
      this.visualizationComponents.push({ monitorId: monitor.id, component: timeline, type: 'events' });
    } else {
      this.showEmptyVisualization(container, 'No matching events');
    }
  }

  /**
   * Render Narrative Volume Over Time visualization
   */
  renderVolumeVisualization(monitor, container) {
    const narratives = monitor.matchedNarratives;
    
    if (narratives && narratives.length > 0) {
      // Aggregate volume data from matched narratives
      const volumeData = this.aggregateVolumeData(narratives);
      
      if (volumeData.dates.length > 0) {
        const chart = new StackedAreaChart(container, {
          height: 280,
          onFactionClick: (f) => {
            window.location.hash = `#/faction/${f.id}`;
          }
        });
        chart.update(volumeData);
        this.visualizationComponents.push({ monitorId: monitor.id, component: chart, type: 'volume' });
      } else {
        this.showEmptyVisualization(container, 'No volume data available');
      }
    } else {
      this.showEmptyVisualization(container, 'No narrative data for volume chart');
    }
  }

  /**
   * Render Volume Over Time with Events visualization
   */
  renderVolumeEventsVisualization(monitor, container) {
    const narratives = monitor.matchedNarratives;
    const events = monitor.matchedEvents || DataService.getEventsForMonitor(monitor.id);
    
    if ((narratives && narratives.length > 0) || (events && events.length > 0)) {
      const volumeData = this.aggregateVolumeData(narratives || []);
      
      const composite = new TimelineVolumeComposite(container, {
        height: 400,
        showViewToggle: false,
        onEventClick: (e) => {
          window.location.hash = `#/event/${e.id}`;
        },
        onFactionClick: (f) => {
          window.location.hash = `#/faction/${f.id}`;
        }
      });
      composite.update({ volumeData, events: events || [] });
      this.visualizationComponents.push({ monitorId: monitor.id, component: composite, type: 'volume_events' });
    } else {
      this.showEmptyVisualization(container, 'No data for volume/events chart');
    }
  }

  /**
   * Render Topics visualization
   */
  renderTopicsVisualization(monitor, container) {
    // Get topics related to matched narratives
    const topics = DataService.getTopics();
    
    if (topics && topics.length > 0) {
      const topicList = new TopicList(container, {
        maxItems: 8,
        showSparkline: true,
        showVolume: true,
        showDuration: true,
        onTopicClick: (t) => {
          // Topics might not have their own detail page, so we can show documents
          console.log('Topic clicked:', t);
        }
      });
      topicList.update({ topics });
      this.visualizationComponents.push({ monitorId: monitor.id, component: topicList, type: 'topics' });
    } else {
      this.showEmptyVisualization(container, 'No topics found');
    }
  }

  /**
   * Render Locations visualization (map)
   */
  renderLocationsVisualization(monitor, container) {
    const narratives = monitor.matchedNarratives;
    
    // Collect all locations from matched narratives
    const locationIds = new Set();
    narratives.forEach(n => {
      (n.locationIds || []).forEach(id => locationIds.add(id));
    });
    
    // Get location objects with their related data
    const locations = [...locationIds]
      .map(id => {
        const location = DataService.getLocation(id);
        if (!location) return null;
        
        // Get narratives and events for this location
        const relatedNarratives = DataService.getNarrativesForLocation(id);
        const relatedEvents = DataService.getEventsForLocation(id);
        
        return {
          ...location,
          narratives: relatedNarratives,
          events: relatedEvents
        };
      })
      .filter(loc => loc && loc.coordinates);
    
    if (locations.length > 0) {
      const mapView = new MapView(container, {
        height: 350,
        onMarkerClick: (loc) => {
          // Optional: handle marker click
        }
      });
      mapView.update({ locations });
      this.visualizationComponents.push({ monitorId: monitor.id, component: mapView, type: 'locations' });
    } else {
      this.showEmptyVisualization(container, 'No locations with coordinates found');
    }
  }

  /**
   * Render Faction Overlaps visualization
   */
  renderFactionOverlapsVisualization(monitor, container) {
    const narratives = monitor.matchedNarratives;
    
    // Get factions involved in the matched narratives
    const factionIds = new Set();
    narratives.forEach(n => {
      if (n.factionMentions) {
        Object.keys(n.factionMentions).forEach(fId => factionIds.add(fId));
      }
    });
    
    const factions = [...factionIds].map(id => DataService.getFaction(id)).filter(Boolean);
    // Only include overlaps where ALL factions are present in our set
    // (venn.js requires all sets in an overlap to be defined)
    const overlaps = DataService.getFactionOverlaps().filter(o => 
      o.factionIds.every(fId => factionIds.has(fId))
    );
    
    if (factions.length >= 2) {
      const venn = new VennDiagram(container, {
        height: 300,
        onFactionClick: (f) => {
          window.location.hash = `#/faction/${f.id}`;
        }
      });
      venn.update({ sets: factions, overlaps });
      this.visualizationComponents.push({ monitorId: monitor.id, component: venn, type: 'faction_overlaps' });
    } else {
      this.showEmptyVisualization(container, 'Need at least 2 factions for overlap visualization');
    }
  }

  /**
   * Render Faction Sentiment visualization
   */
  renderFactionSentimentVisualization(monitor, container) {
    const narratives = monitor.matchedNarratives;
    
    // Aggregate faction sentiments from matched narratives
    const factionStats = new Map();
    narratives.forEach(n => {
      if (n.factionMentions) {
        Object.entries(n.factionMentions).forEach(([factionId, data]) => {
          if (!factionStats.has(factionId)) {
            factionStats.set(factionId, { totalVolume: 0, weightedSentiment: 0 });
          }
          const stats = factionStats.get(factionId);
          if (data.volume && typeof data.sentiment === 'number') {
            stats.totalVolume += data.volume;
            stats.weightedSentiment += data.sentiment * data.volume;
          }
        });
      }
    });
    
    const factions = [...factionStats.entries()]
      .map(([factionId, stats]) => {
        const faction = DataService.getFaction(factionId);
        if (!faction || stats.totalVolume === 0) return null;
        return {
          ...faction,
          sentiment: stats.weightedSentiment / stats.totalVolume,
          volume: stats.totalVolume
        };
      })
      .filter(Boolean)
      .sort((a, b) => b.volume - a.volume);
    
    if (factions.length > 0) {
      const chart = new SentimentChart(container, {
        height: Math.max(200, factions.length * 40 + 60),
        onFactionClick: (f) => {
          window.location.hash = `#/faction/${f.id}`;
        }
      });
      chart.update({ factions });
      this.visualizationComponents.push({ monitorId: monitor.id, component: chart, type: 'faction_sentiment' });
    } else {
      this.showEmptyVisualization(container, 'No faction sentiment data available');
    }
  }

  /**
   * Render Network Graph visualization
   */
  renderNetworkGraphVisualization(monitor, container) {
    const narratives = monitor.matchedNarratives;
    
    // Collect all persons and organizations from matched narratives
    const personIds = new Set();
    const orgIds = new Set();
    
    narratives.forEach(n => {
      (n.personIds || []).forEach(id => personIds.add(id));
      (n.organizationIds || []).forEach(id => orgIds.add(id));
    });
    
    if (personIds.size + orgIds.size >= 2) {
      const graphData = DataService.buildNetworkGraph([...personIds], [...orgIds]);
      
      if (graphData.nodes.length >= 2) {
        const graph = new NetworkGraph(container, {
          height: 350,
          onNodeClick: (node) => {
            if (node.type === 'person') {
              window.location.hash = `#/person/${node.id}`;
            } else {
              window.location.hash = `#/organization/${node.id}`;
            }
          }
        });
        graph.update(graphData);
        this.visualizationComponents.push({ monitorId: monitor.id, component: graph, type: 'network_graph' });
      } else {
        this.showEmptyVisualization(container, 'Not enough connections for network graph');
      }
    } else {
      this.showEmptyVisualization(container, 'Need at least 2 people/organizations');
    }
  }

  /**
   * Render Documents visualization
   */
  renderDocumentsVisualization(monitor, container) {
    const narratives = monitor.matchedNarratives;
    
    // Collect documents from matched narratives
    const documentIds = new Set();
    narratives.forEach(n => {
      (n.documentIds || []).forEach(id => documentIds.add(id));
    });
    
    const documents = [...documentIds]
      .map(id => DataService.getDocument(id))
      .filter(Boolean)
      .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
    
    if (documents.length > 0) {
      const docList = new DocumentList(container, {
        maxItems: 8,
        showExcerpt: true,
        showPublisher: true,
        showDate: true,
        onDocumentClick: (doc) => {
          window.location.hash = `#/document/${doc.id}`;
        }
      });
      docList.update({ documents });
      this.visualizationComponents.push({ monitorId: monitor.id, component: docList, type: 'documents' });
    } else {
      this.showEmptyVisualization(container, 'No documents found');
    }
  }

  /**
   * Show empty state in visualization container
   */
  showEmptyVisualization(container, message) {
    container.innerHTML = `
      <div class="empty-state" style="padding: 24px;">
        <div class="empty-state-icon">📋</div>
        <p class="empty-state-text">${message}</p>
      </div>
    `;
  }

  /**
   * Aggregate volume data from multiple narratives
   */
  aggregateVolumeData(narratives) {
    const factions = DataService.getFactions();
    const dateMap = new Map();
    
    narratives.forEach(n => {
      (n.volumeOverTime || []).forEach(entry => {
        if (!dateMap.has(entry.date)) {
          dateMap.set(entry.date, {});
        }
        const dayData = dateMap.get(entry.date);
        Object.entries(entry.factionVolumes || {}).forEach(([fId, vol]) => {
          dayData[fId] = (dayData[fId] || 0) + vol;
        });
      });
    });
    
    const dates = [...dateMap.keys()].sort();
    const series = factions.map(f =>
      dates.map(date => (dateMap.get(date) || {})[f.id] || 0)
    );
    
    return { dates, series, factions };
  }

  /**
   * Destroy visualization component for a specific monitor
   */
  destroyMonitorVisualization(monitorId) {
    const index = this.visualizationComponents.findIndex(c => c.monitorId === monitorId);
    if (index !== -1) {
      const { component } = this.visualizationComponents[index];
      if (component && typeof component.destroy === 'function') {
        component.destroy();
      }
      this.visualizationComponents.splice(index, 1);
    }
    this.descriptionToggles.delete(monitorId);
  }

  /**
   * Setup visualization dropdown handlers
   */
  setupVisualizationDropdowns(enrichedMonitors) {
    const dropdowns = this.container.querySelectorAll('.monitor-viz-dropdown');
    
    dropdowns.forEach(dropdown => {
      const trigger = dropdown.querySelector('.monitor-viz-dropdown-trigger');
      const menu = dropdown.querySelector('.monitor-viz-dropdown-menu');
      const monitorId = dropdown.dataset.monitorId;
      
      if (trigger && menu) {
        trigger.addEventListener('click', (e) => {
          e.stopPropagation();
          
          // Close other open dropdowns
          dropdowns.forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
              otherDropdown.classList.remove('open');
            }
          });
          
          // Toggle this dropdown
          dropdown.classList.toggle('open');
        });
        
        // Handle option selection
        menu.querySelectorAll('.viz-dropdown-option').forEach(option => {
          option.addEventListener('click', (e) => {
            e.stopPropagation();
            const vizType = option.dataset.vizType;
            
            // Update selection
            this.monitorVisualizationTypes.set(monitorId, vizType);
            
            // Update dropdown label
            const label = VISUALIZATION_TYPES.find(v => v.id === vizType)?.label;
            trigger.querySelector('.viz-dropdown-label').textContent = label;
            
            // Update active state
            menu.querySelectorAll('.viz-dropdown-option').forEach(opt => {
              opt.classList.toggle('active', opt.dataset.vizType === vizType);
            });
            
            // Close dropdown
            dropdown.classList.remove('open');
            
            // Re-render visualization
            const monitor = enrichedMonitors.find(m => m.id === monitorId);
            if (monitor) {
              this.renderMonitorVisualization(monitor);
            }
          });
        });
      }
    });
    
    // Close dropdowns when clicking outside
    this.vizDropdownClickHandler = (e) => {
      if (!e.target.closest('.monitor-viz-dropdown')) {
        dropdowns.forEach(dropdown => dropdown.classList.remove('open'));
      }
    };
    document.addEventListener('click', this.vizDropdownClickHandler);
  }

  /**
   * Setup dropdown toggle handlers for Monitors view
   * Uses the same pattern as the header nav-dropdowns
   */
  setupHeaderPopovers() {
    const dropdowns = this.container.querySelectorAll('.nav-dropdown.monitor-dropdown');
    
    dropdowns.forEach(dropdown => {
      const trigger = dropdown.querySelector('.nav-dropdown-trigger');
      
      if (trigger) {
        trigger.addEventListener('click', (e) => {
          e.stopPropagation();
          
          // Close other open dropdowns
          dropdowns.forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
              otherDropdown.classList.remove('open');
            }
          });
          
          // Toggle this dropdown
          dropdown.classList.toggle('open');
        });
      }
    });
    
    // Close dropdowns when clicking outside
    this.documentClickHandler = (e) => {
      if (!e.target.closest('.nav-dropdown.monitor-dropdown')) {
        dropdowns.forEach(dropdown => dropdown.classList.remove('open'));
      }
    };
    document.addEventListener('click', this.documentClickHandler);
  }

  /**
   * Setup handlers for creating and editing monitors
   */
  setupMonitorEditorHandlers(enrichedMonitors) {
    // Get the monitor editor instance
    this.monitorEditor = getMonitorEditor();
    
    // Handle "New Monitor" button click
    const newMonitorBtn = this.container.querySelector('.btn-primary');
    if (newMonitorBtn) {
      newMonitorBtn.addEventListener('click', () => {
        this.monitorEditor.openCreate(() => {
          // Re-render the view after save
          this.render();
        });
      });
    }
    
    // Handle edit button clicks
    const editBtns = this.container.querySelectorAll('.monitor-edit-btn');
    editBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const monitorId = btn.dataset.monitorId;
        const monitor = enrichedMonitors.find(m => m.id === monitorId);
        if (monitor) {
          this.monitorEditor.openEdit(monitor, () => {
            // Re-render the view after save
            this.render();
          });
        }
      });
    });
  }

  destroy() {
    // Clean up visualization components
    this.visualizationComponents.forEach(c => {
      if (c.component && typeof c.component.destroy === 'function') {
        c.component.destroy();
      }
    });
    this.visualizationComponents = [];
    
    // Clear description toggles map
    this.descriptionToggles.clear();
    
    // Clear visualization types map
    this.monitorVisualizationTypes.clear();
    
    // Remove document click handler
    if (this.documentClickHandler) {
      document.removeEventListener('click', this.documentClickHandler);
      this.documentClickHandler = null;
    }
    
    // Remove viz dropdown click handler
    if (this.vizDropdownClickHandler) {
      document.removeEventListener('click', this.vizDropdownClickHandler);
      this.vizDropdownClickHandler = null;
    }
    
    super.destroy();
  }
}

export default MonitorsView;
