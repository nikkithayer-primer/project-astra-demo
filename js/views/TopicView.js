/**
 * TopicView.js
 * Detail view for a topic using the CardManager pattern
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { PageHeader } from '../utils/PageHeader.js';
import { initAllCardToggles } from '../utils/cardWidthToggle.js';
import {
  CardManager,
  StackedAreaChartCard,
  BulletPointsCard,
  SummaryStatsCard,
  DocumentTableCard
} from '../components/CardComponents.js';

export class TopicView extends BaseView {
  constructor(container, topicId, options = {}) {
    super(container, options);
    this.topicId = topicId;
    this.cardManager = new CardManager(this);
  }

  async render() {
    const topic = DataService.getTopicById(this.topicId);
    if (!topic) {
      this.renderNotFound('Topic');
      return;
    }

    // Fetch all data upfront
    const data = this.fetchTopicData(topic);
    
    // Store data for card setup
    this._topicData = { topic, data };
    
    // Determine active tab
    const activeTab = this.getCurrentTab();
    const hasDocuments = data.documents.length > 0;
    
    // Build cards based on active tab
    if (this.isDocumentsTab()) {
      this.setupDocumentsCard(topic, data);
    } else {
      this.setupDashboardCards(topic, data);
    }
    
    // Generate tabs config
    const baseHref = `#/topic/${this.topicId}`;
    const tabsConfig = hasDocuments ? this.getTabsConfig(baseHref, true) : null;

    // Format date range for subtitle
    const dateRange = this.formatDateRange(topic.startDate, topic.endDate);
    const duration = this.formatDuration(topic.startDate, topic.endDate);
    const isActive = !topic.endDate || new Date(topic.endDate) >= new Date();
    const statusBadge = isActive 
      ? '<span class="status-badge status-active">Active</span>'
      : '<span class="status-badge status-ended">Ended</span>';

    // Build page header with tabs
    const headerHtml = PageHeader.render({
      breadcrumbs: [
        { label: 'Dashboard', href: '#/dashboard' },
        { label: 'Topics', href: '#/topics' },
        topic.headline
      ],
      title: topic.headline,
      subtitle: `${dateRange} · ${duration} ${statusBadge}`,
      tabs: tabsConfig,
      activeTab: activeTab
    });

    // Render page
    this.container.innerHTML = `
      ${headerHtml}
      <div class="content-area">
        <div class="content-grid">
          ${this.cardManager.getHtml()}
        </div>
      </div>
    `;

    // Initialize card width toggles
    const contentGrid = this.container.querySelector('.content-grid');
    if (contentGrid) {
      const tabSuffix = this.isDocumentsTab() ? '-docs' : '';
      initAllCardToggles(contentGrid, `topic-${this.topicId}${tabSuffix}`, { 0: 'half', 1: 'half' });
    }

    // Initialize all card components
    const components = this.cardManager.initializeAll();
    Object.assign(this.components, components);
  }

  /**
   * Fetch all data related to the topic
   */
  fetchTopicData(topic) {
    const documents = DataService.getDocumentsForTopic(this.topicId);
    const volumeOverTime = DataService.getTopicVolumeOverTime(this.topicId, this.timeRange);
    const totalVolume = DataService.getTopicTotalVolume(this.topicId, this.timeRange);

    // Prepare volume chart data
    let volumeChartData = null;
    if (volumeOverTime && volumeOverTime.length > 0) {
      volumeChartData = {
        dates: volumeOverTime.map(d => d.date),
        series: [volumeOverTime.map(d => d.volume || 0)],
        factions: [{ id: 'volume', name: 'Volume', color: 'var(--accent-primary)' }]
      };
    }

    // Calculate publisher stats for summary
    const publishers = [...new Set(documents.map(d => d.publisherId))];
    const publisherNames = publishers.map(pId => {
      const pub = DataService.getPublisherById(pId);
      return pub ? pub.name : 'Unknown';
    });

    // Build summary stats
    const summaryStats = [
      { value: documents.length, label: 'Documents' },
      { value: publishers.length, label: 'Publishers' },
      { value: totalVolume.toLocaleString(), label: 'Total Volume' }
    ];

    // Build publisher footer text
    let publisherFooter = null;
    if (publisherNames.length > 0) {
      const displayNames = publisherNames.slice(0, 5).join(', ');
      const moreCount = publisherNames.length > 5 ? ` +${publisherNames.length - 5} more` : '';
      publisherFooter = `<span class="summary-footer-label">Sources:</span> <span class="summary-footer-text">${displayNames}${moreCount}</span>`;
    }

    return {
      documents,
      volumeOverTime,
      volumeChartData,
      totalVolume,
      summaryStats,
      publisherFooter
    };
  }

  /**
   * Format duration from start to end date
   */
  formatDuration(startDate, endDate) {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return '1 day';
    if (diffDays < 7) return `${diffDays} days`;
    if (diffDays < 14) return '1 week';
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks`;
    return `${Math.floor(diffDays / 30)} months`;
  }

  /**
   * Format date range for display
   */
  formatDateRange(startDate, endDate) {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const start = new Date(startDate).toLocaleDateString('en-US', options);
    if (!endDate) {
      return `Since ${start}`;
    }
    const end = new Date(endDate).toLocaleDateString('en-US', options);
    return `${start} – ${end}`;
  }

  /**
   * Set up card components for Dashboard tab
   */
  setupDashboardCards(topic, data) {
    // Reset card manager for fresh setup
    this.cardManager = new CardManager(this);

    // Key Points (bullet points) - half-width
    if (topic.bulletPoints && topic.bulletPoints.length > 0) {
      this.cardManager.add(new BulletPointsCard(this, 'topic-bullets', {
        title: 'Key Points',
        bulletPoints: topic.bulletPoints,
        halfWidth: true
      }));
    }

    // Volume Over Time Chart - half-width
    if (data.volumeChartData) {
      this.cardManager.add(new StackedAreaChartCard(this, 'topic-volume', {
        title: 'Volume Over Time',
        chartData: data.volumeChartData,
        halfWidth: true,
        height: 200,
        showLegend: false,
        showCount: true,
        count: data.totalVolume
      }));
    }

    // Summary stats - half-width
    if (data.documents.length > 0) {
      this.cardManager.add(new SummaryStatsCard(this, 'topic-summary', {
        title: 'Summary',
        stats: data.summaryStats,
        footer: data.publisherFooter,
        halfWidth: true
      }));
    }
  }

  /**
   * Set up card for Documents tab (full-width document table)
   */
  setupDocumentsCard(topic, data) {
    // Reset card manager for fresh setup
    this.cardManager = new CardManager(this);

    if (data.documents.length > 0) {
      this.cardManager.add(new DocumentTableCard(this, 'topic-documents', {
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

export default TopicView;
