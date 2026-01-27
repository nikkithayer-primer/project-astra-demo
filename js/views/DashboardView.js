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
import { SentimentChart } from '../components/SentimentChart.js';
import { initAllCardToggles } from '../utils/cardWidthToggle.js';
import { formatDateWithYear, STATUS_LABELS } from '../utils/formatters.js';
import { CardBuilder } from '../utils/CardBuilder.js';

export class DashboardView extends BaseView {
  constructor(container, options = {}) {
    super(container, options);
    // Status filter state: Set of selected statuses (empty = no filter)
    this.statusFilters = new Set();
  }

  async render() {
    // Convert Set to array for DataService calls
    const statusFilterArray = this.statusFilters.size > 0 ? [...this.statusFilters] : null;
    const stats = DataService.getDashboardStats(this.missionId, this.timeRange, statusFilterArray);
    const statusCounts = DataService.getNarrativeStatusCounts(this.timeRange);
    const topics = DataService.getTopicsInRange(this.timeRange);
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
    if (this.statusFilters.size > 0) {
      const statusNames = [...this.statusFilters].map(s => STATUS_LABELS[s] || s).join(', ');
      subtitle += ` | Filtered by: ${statusNames}`;
    }

    this.container.innerHTML = `
      <div class="page-header page-header-with-stats">
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
          <div class="stat-card clickable" data-href="#/subnarratives">
            <svg class="stat-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25">
              <path d="M3 3h10v10H3z" rx="1"/>
              <path d="M5 6h6M5 9h4"/>
            </svg>
            <div class="stat-value">${stats.totalSubNarratives}</div>
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

      <div class="content-area">
        <!-- Status Overview -->
        <div class="status-overview">
          ${this.statusFilters.size > 0 ? `
          <button class="status-filter-clear" title="Clear status filter">
            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4l8 8M12 4l-8 8"/>
            </svg>
            Clear
          </button>
          ` : ''}
          <div class="status-card status-new clickable ${this.statusFilters.has('new') ? 'active' : ''}" data-status="new">
            <svg class="status-icon" viewBox="0 0 16 16" fill="currentColor" stroke="none">
              <circle cx="8" cy="8" r="4"/>
            </svg>
            <div class="status-count">${statusCounts.new}</div>
            <div class="status-name">New</div>
          </div>
          <div class="status-card status-in-progress clickable ${this.statusFilters.has('in_progress') ? 'active' : ''}" data-status="in_progress">
            <svg class="status-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25">
              <circle cx="8" cy="8" r="5"/>
              <path d="M8 5v3l2 2"/>
            </svg>
            <div class="status-count">${statusCounts.in_progress}</div>
            <div class="status-name">In Progress</div>
          </div>
          <div class="status-card status-investigating clickable ${this.statusFilters.has('under_investigation') ? 'active' : ''}" data-status="under_investigation">
            <svg class="status-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25">
              <circle cx="7" cy="7" r="4"/>
              <path d="M10 10l4 4"/>
            </svg>
            <div class="status-count">${statusCounts.under_investigation}</div>
            <div class="status-name">Investigating</div>
          </div>
          <div class="status-card status-resolved clickable ${this.statusFilters.has('resolved') ? 'active' : ''}" data-status="resolved">
            <svg class="status-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25">
              <circle cx="8" cy="8" r="5"/>
              <path d="M5 8l2 2 4-4"/>
            </svg>
            <div class="status-count">${statusCounts.resolved}</div>
            <div class="status-name">Resolved</div>
          </div>
        </div>

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
              <button class="card-action-btn topic-bullets-toggle" title="Toggle bullet points" data-target="dashboard-topic-list">
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M5 4h9M5 8h9M5 12h9"/>
                  <circle cx="2" cy="4" r="1" fill="currentColor"/>
                  <circle cx="2" cy="8" r="1" fill="currentColor"/>
                  <circle cx="2" cy="12" r="1" fill="currentColor"/>
                </svg>
              </button>
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
      4: 'full'  // Map - full width
    });

    // Add click handlers for stat cards (navigate to list views)
    this.container.querySelectorAll('.stat-card.clickable').forEach(card => {
      card.addEventListener('click', () => {
        const href = card.dataset.href;
        if (href) {
          window.location.hash = href;
        }
      });
    });

    // Add click handlers for status cards (toggle filter - multi-select)
    this.container.querySelectorAll('.status-card.clickable').forEach(card => {
      card.addEventListener('click', () => {
        const status = card.dataset.status;
        // Toggle: add if not present, remove if already selected
        if (this.statusFilters.has(status)) {
          this.statusFilters.delete(status);
        } else {
          this.statusFilters.add(status);
        }
        this.render();
      });
    });

    // Add click handler for clear filter button
    const clearBtn = this.container.querySelector('.status-filter-clear');
    if (clearBtn) {
      clearBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.statusFilters.clear();
        this.render();
      });
    }

    await this.initializeComponents(stats, statusFilterArray, topics);

    // Add click handler for description toggle
    const descToggle = this.container.querySelector('.description-toggle');
    if (descToggle && this.components.narrativeList) {
      descToggle.addEventListener('click', () => {
        const isShowing = this.components.narrativeList.toggleDescription();
        descToggle.classList.toggle('active', isShowing);
      });
    }

    // Add click handler for topic bullets toggle
    const bulletsToggle = this.container.querySelector('.topic-bullets-toggle');
    if (bulletsToggle && this.components.topicList) {
      bulletsToggle.addEventListener('click', () => {
        const isShowing = this.components.topicList.toggleBulletPoints();
        bulletsToggle.classList.toggle('active', isShowing);
      });
    }

    // Initialize drag-and-drop for cards
    this.initDragDrop();
  }

  async initializeComponents(stats, statusFilterArray, topics) {
    // Top Narratives List
    this.components.narrativeList = new NarrativeList('dashboard-narrative-list', {
      maxItems: 8,
      onNarrativeClick: (n) => {
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
        onTopicClick: (t) => {
          window.location.hash = `#/topic/${t.id}`;
        }
      });
      this.components.topicList.update({ topics: sortedTopics });
    }

    // Volume Over Time & Events Combined (with time range and status filtering)
    const volumeData = DataService.getAggregateVolumeOverTime(this.missionId, this.timeRange, statusFilterArray);
    const publisherData = DataService.getAggregatePublisherVolumeOverTime(this.missionId, this.timeRange, statusFilterArray);
    const recentEvents = DataService.getRecentEvents(15, this.timeRange, statusFilterArray);

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
    const factionSentiments = DataService.getAggregateFactionSentiments(this.missionId, this.timeRange, statusFilterArray);
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

    // Map with all locations (filtered by time range and status)
    const locations = DataService.getAllLocationsWithCounts(this.timeRange, this.statusFilter);
    if (locations.length > 0) {
      this.components.map = new MapView('dashboard-map', {
        height: 350
      });
      this.components.map.update({ locations });
    }
  }

  setMission(missionId) {
    this.missionId = missionId;
    this.render();
  }

  setTimeRange(timeRange) {
    this.timeRange = timeRange;
    this.render();
  }
}

export default DashboardView;
