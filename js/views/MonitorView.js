/**
 * MonitorView.js
 * Detail view for a single monitor using the CardManager pattern
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { PageHeader } from '../utils/PageHeader.js';
import { CardBuilder } from '../utils/CardBuilder.js';
import { initAllCardToggles } from '../utils/cardWidthToggle.js';
import { getMonitorEditor } from '../components/MonitorEditorModal.js';
import {
  CardManager,
  NetworkGraphCard,
  NarrativeListCard,
  TopicListCard,
  SentimentChartCard,
  MapCard,
  TimelineVolumeCompositeCard,
  DocumentTableCard
} from '../components/CardComponents.js';

export class MonitorView extends BaseView {
  constructor(container, monitorId, options = {}) {
    super(container, options);
    this.monitorId = monitorId;
    this.cardManager = new CardManager(this);
    this.monitorEditor = null;
  }

  async render() {
    const monitor = DataService.getMonitor(this.monitorId);
    if (!monitor) {
      this.renderNotFound('Monitor');
      return;
    }

    // Fetch all data upfront
    const data = this.fetchMonitorData(monitor);
    
    // Store data for card setup
    this._monitorData = { monitor, data };
    
    // Determine active tab
    const activeTab = this.getCurrentTab();
    const hasDocuments = data.documents.length > 0;
    
    // Build cards based on active tab
    if (this.isDocumentsTab()) {
      this.setupDocumentsCard(monitor, data);
    } else {
      this.setupDashboardCards(monitor, data);
    }
    
    // Generate tabs config
    const baseHref = `#/monitor/${this.monitorId}`;
    const tabsConfig = hasDocuments ? this.getTabsConfig(baseHref, true) : null;

    // Build subtitle with scope info
    const scopeLogic = monitor.scope?.logic || 'OR';
    const scopeLabel = DataService.getMonitorScopeLabel(this.monitorId);
    const matchCount = data.narratives.length;
    
    const subtitleParts = [
      `<span class="logic-badge logic-${scopeLogic.toLowerCase()}">${scopeLogic}</span>`,
      `<span class="match-count">${matchCount} narrative${matchCount !== 1 ? 's' : ''} matched</span>`,
      scopeLabel ? `<span class="text-muted">Scope: ${scopeLabel}</span>` : ''
    ].filter(Boolean).join(' ');

    // Edit button for header actions
    const editBtnHtml = `
      <button class="btn btn-small btn-secondary" id="monitor-edit-btn">
        <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M11.5 2.5l2 2M2 11l-.5 3.5L5 14l9-9-2-2-10 10z"/>
        </svg>
        Edit Monitor
      </button>
    `;

    const headerHtml = PageHeader.render({
      breadcrumbs: [
        { label: 'Dashboard', href: '#/dashboard' },
        { label: 'Monitors', href: '#/monitors' },
        monitor.name
      ],
      title: monitor.name,
      badge: monitor.enabled 
        ? `<span class="badge badge-status-active">Active</span>` 
        : `<span class="badge badge-status-paused">Paused</span>`,
      subtitle: subtitleParts,
      description: monitor.description,
      actions: editBtnHtml,
      tabs: tabsConfig,
      activeTab: activeTab
    });

    // Render page
    this.container.innerHTML = `
      ${headerHtml}
      <div class="content-area">
        <div class="content-grid">
          ${this.cardManager.getHtml()}
          ${this.isDashboardTab() ? this.getCustomCardsHtml(data) : ''}
        </div>
      </div>
    `;

    // Initialize card width toggles
    const contentGrid = this.container.querySelector('.content-grid');
    if (contentGrid) {
      const tabSuffix = this.isDocumentsTab() ? '-docs' : '';
      initAllCardToggles(contentGrid, `monitor-${this.monitorId}${tabSuffix}`);
    }

    // Initialize all card components
    const components = this.cardManager.initializeAll();
    Object.assign(this.components, components);

    // Set up edit button handler
    this.setupEditButton(monitor);

    // Initialize custom components (alerts)
    if (this.isDashboardTab()) {
      this.initializeCustomComponents(data);
      
      // Set up description toggle for narratives
      const descToggle = this.container.querySelector('#narrative-desc-toggle');
      if (descToggle && this.components['monitor-narratives']) {
        descToggle.addEventListener('click', () => {
          const isShowing = this.components['monitor-narratives'].toggleDescription();
          descToggle.classList.toggle('active', isShowing);
        });
      }
    }
  }

  /**
   * Fetch all data related to the monitor
   */
  fetchMonitorData(monitor) {
    // Get matched content using DataService methods
    const narratives = DataService.getNarrativesForMonitor(this.monitorId);
    const events = DataService.getEventsForMonitor(this.monitorId);
    const subEvents = DataService.getSubEventsForMonitor(this.monitorId);
    const allEvents = [...events, ...subEvents];
    const alerts = DataService.getAlertsForMonitor(this.monitorId);
    
    // Get derived entities from matched narratives
    const persons = DataService.getPersonsForMonitor(this.monitorId);
    const organizations = DataService.getOrganizationsForMonitor(this.monitorId);
    const locations = DataService.getLocationsForMonitor(this.monitorId);
    const factions = DataService.getFactionsForMonitor(this.monitorId);
    const documents = DataService.getDocumentsForMonitor(this.monitorId);
    const topics = DataService.getTopicsForMonitor(this.monitorId);
    
    // Get aggregated volume data
    const volumeData = DataService.getAggregateVolumeForMonitor(this.monitorId);
    const hasVolumeData = volumeData.dates.length > 0 && volumeData.factions.length > 0;
    const hasVolumeTimeline = hasVolumeData || allEvents.length > 0;
    
    // Build map locations (deduplicated)
    const locationMap = new Map();
    locations.forEach(l => {
      if (!locationMap.has(l.id)) {
        locationMap.set(l.id, { ...l, isEvent: false });
      }
    });
    allEvents.filter(e => e.locationId).forEach(e => {
      const loc = DataService.getLocation(e.locationId);
      if (loc && !locationMap.has(loc.id)) {
        locationMap.set(loc.id, { ...loc, isEvent: true, eventText: e.text });
      }
    });
    const mapLocations = [...locationMap.values()];
    
    // Network data
    const personIds = persons.map(p => p.id);
    const orgIds = organizations.map(o => o.id);
    const hasNetwork = personIds.length > 0 || orgIds.length > 0;

    return {
      narratives, events, allEvents, alerts,
      persons, organizations, locations, factions, documents, topics,
      volumeData, hasVolumeData, hasVolumeTimeline,
      mapLocations, personIds, orgIds, hasNetwork
    };
  }

  /**
   * Set up card components for Dashboard tab
   */
  setupDashboardCards(monitor, data) {
    // Reset card manager for fresh setup
    this.cardManager = new CardManager(this);

    // Narratives list (full width at top)
    if (data.narratives.length > 0) {
      this.cardManager.add(new NarrativeListCard(this, 'monitor-narratives', {
        title: 'Matched Narratives',
        narratives: data.narratives,
        showCount: true,
        maxItems: 10,
        fullWidth: true,
        showDescriptionToggle: true
      }));
    }

    // Volume & Events Chart (half-width)
    if (data.hasVolumeTimeline) {
      this.cardManager.add(new TimelineVolumeCompositeCard(this, 'monitor-volume-events', {
        title: 'Volume & Events',
        volumeData: data.hasVolumeData ? data.volumeData : null,
        publisherData: null,
        events: data.allEvents,
        halfWidth: true,
        height: 320,
        volumeHeight: 140,
        timelineHeight: 140,
        showViewToggle: false
      }));
    }

    // Faction Engagement (half-width)
    if (data.factions.length > 0) {
      this.cardManager.add(new SentimentChartCard(this, 'monitor-faction-sentiment', {
        title: 'Faction Engagement',
        factions: data.factions,
        halfWidth: true,
        clickRoute: 'faction'
      }));
    }

    // People & Organizations Network (half-width)
    if (data.hasNetwork) {
      this.cardManager.add(new NetworkGraphCard(this, 'monitor-network', {
        title: 'People & Organizations',
        personIds: data.personIds,
        orgIds: data.orgIds,
        halfWidth: true,
        height: 400
      }));
    }

    // Related Locations Map (half-width)
    if (data.mapLocations.length > 0) {
      this.cardManager.add(new MapCard(this, 'monitor-map', {
        title: 'Related Locations',
        locations: data.mapLocations,
        halfWidth: true,
        height: 350
      }));
    }

    // Related Topics (half-width)
    if (data.topics.length > 0) {
      this.cardManager.add(new TopicListCard(this, 'monitor-topics', {
        title: 'Related Topics',
        topics: data.topics,
        showCount: true,
        maxItems: 5,
        halfWidth: true,
        showSparkline: true,
        showVolume: true,
        showDuration: true,
        showBulletPoints: false
      }));
    }
  }

  /**
   * Get HTML for custom cards (alerts) that aren't managed by CardManager
   */
  getCustomCardsHtml(data) {
    const cards = [];

    // Recent Alerts
    if (data.alerts.length > 0) {
      cards.push(CardBuilder.create('Recent Alerts', 'monitor-alerts', {
        count: data.alerts.length,
        halfWidth: true,
        noPadding: true
      }));
    }

    return cards.join('');
  }

  /**
   * Initialize custom components (alerts)
   */
  initializeCustomComponents(data) {
    // Alerts List
    if (data.alerts.length > 0) {
      this.renderAlertsList(data.alerts);
    }
  }

  /**
   * Render the alerts list manually (no dedicated component)
   */
  renderAlertsList(alerts) {
    const container = document.getElementById('monitor-alerts');
    if (!container) return;

    const alertsHtml = alerts.slice(0, 5).map(alert => {
      const typeClass = this.getAlertTypeClass(alert.type);
      const typeLabel = this.getAlertTypeLabel(alert.type);
      const timeAgo = this.formatRelativeTime(alert.triggeredAt);
      
      return `
        <div class="alert-item ${alert.acknowledged ? 'acknowledged' : ''}">
          <div class="alert-item-header">
            <span class="alert-type-badge ${typeClass}">${typeLabel}</span>
            <span class="alert-severity alert-severity-${alert.severity}">${alert.severity}</span>
            <span class="alert-time">${timeAgo}</span>
          </div>
          <div class="alert-item-description">${this.escapeHtml(alert.description)}</div>
        </div>
      `;
    }).join('');

    container.innerHTML = `<div class="alerts-list">${alertsHtml}</div>`;
  }

  /**
   * Get alert type CSS class
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
   * Get alert type label
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
   * Format relative time
   */
  formatRelativeTime(isoDate) {
    if (!isoDate) return '';
    const date = new Date(isoDate);
    const now = new Date();
    const diffMs = now - date;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffHours < 1) return 'Just now';
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  }

  /**
   * Setup edit button click handler
   */
  setupEditButton(monitor) {
    const editBtn = this.container.querySelector('#monitor-edit-btn');
    if (editBtn) {
      editBtn.addEventListener('click', () => {
        this.monitorEditor = getMonitorEditor();
        this.monitorEditor.openEdit(monitor, () => {
          // Re-render the view after save
          this.render();
        });
      });
    }
  }

  /**
   * Set up card for Documents tab (full-width document table)
   */
  setupDocumentsCard(monitor, data) {
    // Reset card manager for fresh setup
    this.cardManager = new CardManager(this);

    if (data.documents.length > 0) {
      this.cardManager.add(new DocumentTableCard(this, 'monitor-documents', {
        title: 'Source Documents',
        documents: data.documents,
        showCount: true,
        fullWidth: true,
        maxItems: 50,
        enableViewerMode: true
      }));
    }
  }

  destroy() {
    this.cardManager.destroyAll();
    super.destroy();
  }
}

export default MonitorView;
