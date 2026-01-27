/**
 * MonitorsView.js
 * Track entities and narratives with custom alert thresholds
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { NarrativeList } from '../components/NarrativeList.js';
import { CardBuilder } from '../utils/CardBuilder.js';
import { initAllCardToggles } from '../utils/cardWidthToggle.js';
import { getMonitorEditor } from '../components/MonitorEditorModal.js';

export class MonitorsView extends BaseView {
  constructor(container, options = {}) {
    super(container, options);
    this.narrativeListComponents = [];
    this.descriptionToggles = new Map(); // Map of containerId -> NarrativeList
    this.monitorEditor = null;
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

  async render() {
    // Load monitors from DataService
    const monitors = DataService.getMonitors();
    
    // Build enriched monitor data with computed fields
    const enrichedMonitors = monitors.map(monitor => {
      const scopeType = DataService.getMonitorScopeType(monitor.id);
      const scopeLabel = DataService.getMonitorScopeLabel(monitor.id);
      const triggerLabels = DataService.getMonitorTriggerLabels(monitor.id);
      const matchedNarratives = DataService.getNarrativesForMonitor(monitor.id);
      const alerts = DataService.getAlertsForMonitor(monitor.id);
      const containerId = `monitor-narratives-${monitor.id}`;
      const scopeLogic = monitor.scope?.logic || 'OR';
      
      return {
        ...monitor,
        scopeType,
        scopeLabel,
        scopeIcon: this.getScopeIcon(scopeType),
        triggerLabels,
        matchedNarratives,
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
      
      // Build actions HTML with edit button and description toggle
      const descToggleId = `desc-toggle-${monitor.id}`;
      const editBtnHtml = `
        <button class="monitor-edit-btn" data-monitor-id="${monitor.id}" title="Edit monitor">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M11.5 2.5l2 2M2 11l-.5 3.5L5 14l9-9-2-2-10 10z"/>
          </svg>
        </button>
      `;
      const actionsHtml = editBtnHtml + CardBuilder.descriptionToggle(descToggleId);
      
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
        <div class="monitor-narratives-container" id="${monitor.containerId}"></div>
      `;
      
      // Use CardBuilder to create the card
      const cardHtml = CardBuilder.create(monitor.name, `monitor-body-${monitor.id}`, {
        noPadding: true,
        halfWidth: true,
        subtitle: subtitle,
        actions: actionsHtml
      });
      
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
    
    // Initialize card width toggles for all monitor cards
    const monitorsGrid = this.container.querySelector('.monitors-grid');
    initAllCardToggles(monitorsGrid, 'monitors');
    
    // Initialize NarrativeList components for each monitor
    enrichedMonitors.forEach(monitor => {
      if (monitor.matchedNarratives && monitor.matchedNarratives.length > 0) {
        const narrativeList = new NarrativeList(monitor.containerId, {
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
        this.narrativeListComponents.push(narrativeList);
        
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
        // Show empty state for monitors with no matching narratives
        const container = document.getElementById(monitor.containerId);
        if (container) {
          container.innerHTML = `
            <div class="empty-state" style="padding: 24px;">
              <div class="empty-state-icon">📋</div>
              <p class="empty-state-text">No matching narratives</p>
            </div>
          `;
        }
      }
    });
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
    // Clean up narrative list components
    this.narrativeListComponents.forEach(c => c.destroy && c.destroy());
    this.narrativeListComponents = [];
    
    // Clear description toggles map
    this.descriptionToggles.clear();
    
    // Remove document click handler
    if (this.documentClickHandler) {
      document.removeEventListener('click', this.documentClickHandler);
      this.documentClickHandler = null;
    }
    
    super.destroy();
  }
}

export default MonitorsView;
