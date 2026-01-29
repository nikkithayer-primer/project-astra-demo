/**
 * DashboardView.js
 * Aggregate overview of all narratives, filtered by mission and time range
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { NarrativeList } from '../components/NarrativeList.js';
import { TopicList } from '../components/TopicList.js';
import { MapView } from '../components/MapView.js';
import { TimelineVolumeComposite } from '../components/TimelineVolumeComposite.js';
import { Timeline } from '../components/Timeline.js';
import { SentimentChart } from '../components/SentimentChart.js';
import { initAllCardToggles } from '../utils/cardWidthToggle.js';
import { formatDateWithYear } from '../utils/formatters.js';
import { CardBuilder } from '../utils/CardBuilder.js';
import { renderVerticalTimeline } from '../utils/verticalTimeline.js';

export class DashboardView extends BaseView {
  constructor(container, options = {}) {
    super(container, options);
    // Events view mode: 'vertical' or 'horizontal' timeline
    this.eventsViewMode = 'vertical';
    // Tag filter: Set of selected tag IDs
    this.selectedTags = new Set();
    // Tag dropdown open state
    this.tagDropdownOpen = false;
  }

  async render() {
    const tagFilter = this.getSelectedTagIds();
    const stats = DataService.getDashboardStats(this.missionId, this.timeRange, tagFilter.length > 0 ? tagFilter : null);
    const topics = DataService.getTopicsInRange(this.timeRange, tagFilter.length > 0 ? tagFilter : null);
    const mission = this.missionId !== 'all' 
      ? DataService.getMission(this.missionId)
      : null;

    // Get the dataset name for the title
    const datasetName = DataService.getCurrentDatasetName();

    // Build subtitle with filter info
    let subtitle = mission ? `Mission: ${mission.name}` : 'All missions overview';
    if (this.timeRange) {
      subtitle += ` | ${formatDateWithYear(this.timeRange.start)} - ${formatDateWithYear(this.timeRange.end)}`;
    }

    this.container.innerHTML = `
      <div class="page-header page-header-with-tabs">
        <div class="page-header-top-row">
          <div class="page-header-content">
            <h1>${datasetName}</h1>
            <p class="subtitle">${subtitle}</p>
          </div>
          <div class="stats-grid">
          <div class="stat-card clickable" data-href="#/narratives">
            <svg class="stat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25">
              <path d="M2 2h12v12H2z" rx="1"/>
              <path d="M4 5h8M4 8h8M4 11h5"/>
            </svg>
            <div class="stat-value">${stats.totalNarratives}</div>
            <div class="stat-label">Narratives</div>
          </div>
          <div class="stat-card clickable" data-href="#/themes">
            <svg class="stat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25">
              <path d="M3 3h10v10H3z" rx="1"/>
              <path d="M5 6h6M5 9h4"/>
            </svg>
            <div class="stat-value">${stats.totalThemes}</div>
            <div class="stat-label">Themes</div>
          </div>
          <div class="stat-card clickable" data-href="#/topics">
            <svg class="stat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25">
              <path d="M2 4h12M2 8h8M2 12h10"/>
              <circle cx="13" cy="8" r="2"/>
            </svg>
            <div class="stat-value">${topics.length}</div>
            <div class="stat-label">Topics</div>
          </div>
          <div class="stat-card clickable" data-href="#/factions">
            <svg class="stat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25">
              <circle cx="8" cy="5" r="2.5"/>
              <circle cx="4" cy="11" r="2"/>
              <circle cx="12" cy="11" r="2"/>
              <path d="M6 6.5L4.5 9M10 6.5l1.5 2.5"/>
            </svg>
            <div class="stat-value">${stats.totalFactions}</div>
            <div class="stat-label">Factions</div>
          </div>
          <div class="stat-card clickable" data-href="#/locations">
            <svg class="stat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25">
              <path d="M8 1C5.2 1 3 3.2 3 6c0 4 5 9 5 9s5-5 5-9c0-2.8-2.2-5-5-5z"/>
              <circle cx="8" cy="6" r="2"/>
            </svg>
            <div class="stat-value">${stats.totalLocations}</div>
            <div class="stat-label">Locations</div>
          </div>
          <div class="stat-card clickable" data-href="#/events">
            <svg class="stat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25">
              <rect x="2" y="3" width="12" height="11" rx="1"/>
              <path d="M2 6h12M5 1v3M11 1v3"/>
            </svg>
            <div class="stat-value">${stats.totalEvents}</div>
            <div class="stat-label">Events</div>
          </div>
          <div class="stat-card clickable" data-href="#/entities">
            <svg class="stat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25">
              <circle cx="8" cy="4" r="2.5"/>
              <path d="M3 14c0-3 2.2-5 5-5s5 2 5 5"/>
            </svg>
            <div class="stat-value">${stats.totalPersons + stats.totalOrganizations}</div>
            <div class="stat-label">Entities</div>
          </div>
        </div>
        </div>
        <div class="page-header-tabs page-header-filters">
          <div class="filter-group mission-filter-group">
            <label for="mission-filter">Mission</label>
            <select id="mission-filter">
              <option value="all">All Missions</option>
            </select>
          </div>
          <div class="filter-group tag-filter-group">
            <label>Tags</label>
            ${this.renderTagFilterDropdown()}
          </div>
          <div class="filter-group time-filter-group">
            <label>Time Range</label>
            <div class="time-filter-wrapper">
              <div id="time-range-filter"></div>
              <span id="time-range-label" class="time-range-label">All Time</span>
              <button id="clear-time-filter" class="btn-icon clear-filter-btn" title="Clear time filter">
                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4l8 8M12 4l-8 8"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="content-area">
        <div class="content-grid">
          ${CardBuilder.create('Volume Over Time & Events', 'dashboard-volume-timeline', { fullWidth: true })}
          ${CardBuilder.create('Top Narratives by Volume', 'dashboard-narrative-list', { 
            noPadding: true, 
            bodyClass: 'card-body-scrollable',
            actions: CardBuilder.descriptionToggle('description-toggle')
          })}
          ${CardBuilder.create('Sentiment by Faction', 'dashboard-sentiment-chart', {})}
          ${CardBuilder.create('Trending Topics', 'dashboard-topic-list', { 
            noPadding: true, 
            bodyClass: 'card-body-scrollable',
            actions: `
              <button class="btn-icon card-action-btn topic-bullets-toggle" title="Toggle bullet points" data-target="dashboard-topic-list">
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M5 4h9M5 8h9M5 12h9"/>
                  <circle cx="2" cy="4" r="1" fill="currentColor"/>
                  <circle cx="2" cy="8" r="1" fill="currentColor"/>
                  <circle cx="2" cy="12" r="1" fill="currentColor"/>
                </svg>
              </button>
            `
          })}
          ${CardBuilder.create('Recent Events', 'dashboard-events', { 
            noPadding: true, 
            bodyClass: 'card-body-scrollable',
            actions: `
              <div class="view-toggle" id="events-view-toggle">
                <button class="view-toggle-btn active" data-view="vertical" title="Vertical Timeline">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M4 2v12"/>
                    <circle cx="4" cy="4" r="2"/>
                    <circle cx="4" cy="9" r="2"/>
                    <circle cx="4" cy="14" r="1.5"/>
                    <path d="M8 4h6M8 9h6M8 14h4"/>
                  </svg>
                </button>
                <button class="view-toggle-btn" data-view="horizontal" title="Horizontal Timeline">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M2 8h12"/>
                    <circle cx="4" cy="8" r="2"/>
                    <circle cx="8" cy="8" r="2"/>
                    <circle cx="12" cy="8" r="2"/>
                  </svg>
                </button>
              </div>
            `
          })}
          ${CardBuilder.create('Activity Locations', 'dashboard-map', { fullWidth: true, noPadding: true })}
        </div>
      </div>
    `;

    // Initialize card width toggles
    const contentGrid = this.container.querySelector('.content-grid');
    initAllCardToggles(contentGrid, 'dashboard', {
      0: 'full', // Volume & Timeline Composite - full width
      1: 'half', // Top Narratives - half width
      2: 'half', // Sentiment by Faction - half width
      3: 'half', // Trending Topics - half width
      4: 'half', // Recent Events - half width
      5: 'full'  // Map - full width
    });

    // Add click handlers for stat cards (navigate to list views)
    this.container.querySelectorAll('.stat-card.clickable').forEach(card => {
      this.addListener(card, 'click', () => {
        const href = card.dataset.href;
        if (href) {
          window.location.hash = href;
        }
      });
    });

    await this.initializeComponents(stats, topics);

    // Set up tag filter handlers
    this.setupTagFilterHandlers();

    // Add click handler for description toggle
    const descToggle = this.container.querySelector('.description-toggle');
    if (descToggle && this.components.narrativeList) {
      this.addListener(descToggle, 'click', () => {
        const isShowing = this.components.narrativeList.toggleDescription();
        descToggle.classList.toggle('active', isShowing);
      });
    }

    // Add click handler for topic bullets toggle
    const bulletsToggle = this.container.querySelector('.topic-bullets-toggle');
    if (bulletsToggle && this.components.topicList) {
      this.addListener(bulletsToggle, 'click', () => {
        const isShowing = this.components.topicList.toggleBulletPoints();
        bulletsToggle.classList.toggle('active', isShowing);
      });
    }

    // Initialize drag-and-drop for cards
    this.initDragDrop();
  }

  async initializeComponents(stats, topics) {
    // Top Narratives List
    this.components.narrativeList = new NarrativeList('dashboard-narrative-list', {
      maxItems: 8,
      onItemClick: (n) => {
        window.location.hash = `#/narrative/${n.id}`;
      }
    });
    this.components.narrativeList.update({ narratives: stats.topNarratives });

    // Trending Topics List
    if (topics && topics.length > 0) {
      // Sort topics by total volume (descending)
      const sortedTopics = [...topics].sort((a, b) => {
        const volA = (a.volumeOverTime || []).reduce((sum, e) => sum + (e.volume || 0), 0);
        const volB = (b.volumeOverTime || []).reduce((sum, e) => sum + (e.volume || 0), 0);
        return volB - volA;
      });

      this.components.topicList = new TopicList('dashboard-topic-list', {
        maxItems: 6,
        showBulletPoints: false,
        onItemClick: (t) => {
          window.location.hash = `#/topic/${t.id}`;
        }
      });
      this.components.topicList.update({ topics: sortedTopics });
    }

    // Volume Over Time & Events Combined (with time range filtering)
    const volumeData = DataService.getAggregateVolumeOverTime(this.missionId, this.timeRange);
    const publisherData = DataService.getAggregatePublisherVolumeOverTime(this.missionId, this.timeRange);
    // Pass all events with volume scores - component will filter based on zoom level
    const recentEvents = DataService.getRecentEvents(null, this.timeRange);

    const hasVolumeData = volumeData.dates.length > 0 && volumeData.factions.length > 0;
    const hasPublisherData = publisherData.dates.length > 0 && publisherData.publishers.length > 0;
    const hasEvents = recentEvents.length > 0;

    if (hasVolumeData || hasPublisherData || hasEvents) {
      this.components.volumeTimeline = new TimelineVolumeComposite('dashboard-volume-timeline', {
        height: 450,
        volumeHeight: 180,
        timelineHeight: 180,
        showViewToggle: hasVolumeData && hasPublisherData,
        onEventClick: (e) => {
          window.location.hash = `#/event/${e.id}`;
        },
        onFactionClick: (f) => {
          window.location.hash = `#/faction/${f.id}`;
        }
      });
      this.components.volumeTimeline.update({
        volumeData: hasVolumeData ? volumeData : null,
        publisherData: hasPublisherData ? publisherData : null,
        events: recentEvents
      });
      this.components.volumeTimeline.enableAutoResize();
    }

    // Sentiment by Faction (aggregated across all narratives)
    const factionSentiments = DataService.getAggregateFactionSentiments(this.missionId, this.timeRange);
    if (factionSentiments.length > 0) {
      this.components.sentimentChart = new SentimentChart('dashboard-sentiment-chart', {
        height: Math.max(200, factionSentiments.length * 40),
        onFactionClick: (f) => {
          window.location.hash = `#/faction/${f.id}`;
        }
      });
      this.components.sentimentChart.update({ factions: factionSentiments });
      this.components.sentimentChart.enableAutoResize();
    }

    // Recent Events (vertical timeline)
    this.renderEventsCard(recentEvents);

    // Map with all locations (filtered by time range)
    const locations = DataService.getAllLocationsWithCounts(this.timeRange);
    if (locations.length > 0) {
      this.components.map = new MapView('dashboard-map', {
        height: 350
      });
      this.components.map.update({ locations });
    }
  }

  /**
   * Render the events card with vertical or horizontal timeline
   */
  renderEventsCard(events) {
    // Store events for re-rendering on toggle
    this._dashboardEvents = events;
    
    const container = document.getElementById('dashboard-events');
    if (!container) return;

    if (!events || events.length === 0) {
      container.innerHTML = `
        <div class="vertical-timeline-empty">
          <div class="vertical-timeline-empty-icon">📅</div>
          <p class="vertical-timeline-empty-text">No recent events</p>
        </div>
      `;
      return;
    }

    // Sort events by date (newest first) and limit to 25
    const sortedEvents = [...events]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 25);

    if (this.eventsViewMode === 'horizontal') {
      container.innerHTML = '<div id="dashboard-events-timeline" style="min-height: 350px;"></div>';
      this.initializeHorizontalTimeline(sortedEvents);
    } else {
      container.innerHTML = this.renderEventsVerticalTimeline(sortedEvents);
      this.attachVerticalTimelineListeners(container);
    }
    
    // Set up toggle listener
    this.setupEventsViewToggle();
  }

  /**
   * Initialize horizontal timeline component
   */
  initializeHorizontalTimeline(events) {
    // Destroy existing timeline if any
    if (this.components.eventsTimeline) {
      this.components.eventsTimeline.destroy();
      this.components.eventsTimeline = null;
    }

    const timelineContainer = document.getElementById('dashboard-events-timeline');
    if (!timelineContainer || events.length === 0) return;

    this.components.eventsTimeline = new Timeline('dashboard-events-timeline', {
      height: Math.max(300, Math.min(events.length * 70, 450)),
      onEventClick: (event) => {
        window.location.hash = `#/event/${event.id}`;
      }
    });
    this.components.eventsTimeline.update({ events });
  }

  /**
   * Render vertical timeline view for events
   */
  renderEventsVerticalTimeline(events) {
    return renderVerticalTimeline(events, { 
      sortNewestFirst: true,
      emptyText: 'No recent events'
    });
  }

  /**
   * Attach click listeners for vertical timeline items
   */
  attachVerticalTimelineListeners(container) {
    container.querySelectorAll('.vertical-timeline-item').forEach(item => {
      this.addListener(item, 'click', () => {
        const eventId = item.dataset.eventId;
        window.location.hash = `#/event/${eventId}`;
      });
    });
  }

  /**
   * Set up the events view toggle listener
   */
  setupEventsViewToggle() {
    const toggle = document.getElementById('events-view-toggle');
    if (!toggle) return;

    toggle.querySelectorAll('.view-toggle-btn').forEach(btn => {
      this.addListener(btn, 'click', () => {
        const newMode = btn.dataset.view;
        if (newMode !== this.eventsViewMode) {
          this.eventsViewMode = newMode;
          
          // Update button states
          toggle.querySelectorAll('.view-toggle-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.view === newMode);
          });
          
          // Re-render events card
          if (this._dashboardEvents) {
            this.renderEventsCard(this._dashboardEvents);
          }
        }
      });
    });
  }

  setMission(missionId) {
    this.missionId = missionId;
    this.render();
  }

  setTimeRange(timeRange) {
    this.timeRange = timeRange;
    this.render();
  }

  /**
   * Render the tag filter dropdown
   */
  renderTagFilterDropdown() {
    const tags = DataService.getTags();
    const selectedCount = this.selectedTags.size;
    const buttonLabel = selectedCount === 0 
      ? 'All Tags' 
      : selectedCount === 1 
        ? `1 Tag` 
        : `${selectedCount} Tags`;

    return `
      <div class="tag-filter-dropdown ${this.tagDropdownOpen ? 'open' : ''}" id="tag-filter-dropdown">
        <button class="tag-filter-btn" id="tag-filter-btn" type="button">
          <span class="tag-filter-label">${buttonLabel}</span>
          <svg class="tag-filter-chevron" viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M4 6l4 4 4-4"/>
          </svg>
        </button>
        <div class="tag-filter-menu" id="tag-filter-menu">
          ${tags.length === 0 ? `
            <div class="tag-filter-empty">No tags defined</div>
          ` : `
            <div class="tag-filter-options">
              ${tags.map(tag => `
                <label class="tag-filter-option" data-tag-id="${tag.id}">
                  <input type="checkbox" ${this.selectedTags.has(tag.id) ? 'checked' : ''} />
                  <span class="tag-filter-color" style="background-color: ${tag.color || '#6b7280'}"></span>
                  <span class="tag-filter-name">${this.escapeHtml(tag.name)}</span>
                </label>
              `).join('')}
            </div>
            ${selectedCount > 0 ? `
              <div class="tag-filter-footer">
                <button class="tag-filter-clear" id="tag-filter-clear">Clear all</button>
              </div>
            ` : ''}
          `}
        </div>
      </div>
    `;
  }

  /**
   * Set up tag filter event handlers
   */
  setupTagFilterHandlers() {
    const dropdown = this.container.querySelector('#tag-filter-dropdown');
    const btn = this.container.querySelector('#tag-filter-btn');
    const menu = this.container.querySelector('#tag-filter-menu');

    if (!dropdown || !btn) return;

    // Toggle dropdown
    this.addListener(btn, 'click', (e) => {
      e.stopPropagation();
      this.tagDropdownOpen = !this.tagDropdownOpen;
      dropdown.classList.toggle('open', this.tagDropdownOpen);
    });

    // Close on outside click
    this.addListener(document, 'click', (e) => {
      if (this.tagDropdownOpen && !dropdown.contains(e.target)) {
        this.tagDropdownOpen = false;
        dropdown.classList.remove('open');
      }
    });

    // Handle checkbox changes
    const checkboxes = menu?.querySelectorAll('input[type="checkbox"]');
    checkboxes?.forEach(checkbox => {
      this.addListener(checkbox, 'change', (e) => {
        const tagId = e.target.closest('.tag-filter-option').dataset.tagId;
        if (e.target.checked) {
          this.selectedTags.add(tagId);
        } else {
          this.selectedTags.delete(tagId);
        }
        this.applyTagFilter();
      });
    });

    // Clear all button
    const clearBtn = this.container.querySelector('#tag-filter-clear');
    if (clearBtn) {
      this.addListener(clearBtn, 'click', (e) => {
        e.stopPropagation();
        this.selectedTags.clear();
        this.tagDropdownOpen = false;
        this.applyTagFilter();
      });
    }
  }

  /**
   * Apply tag filter and re-render dashboard
   */
  applyTagFilter() {
    // Re-render to apply the filter
    this.render();
  }

  /**
   * Get the selected tag IDs as an array
   */
  getSelectedTagIds() {
    return Array.from(this.selectedTags);
  }

  /**
   * Escape HTML for safe rendering
   */
  escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

export default DashboardView;
