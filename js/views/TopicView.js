/**
 * TopicView.js
 * Detail view for a topic
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { dataStore } from '../data/DataStore.js';
import { PageHeader } from '../utils/PageHeader.js';
import { CardBuilder } from '../utils/CardBuilder.js';
import { StackedAreaChart } from '../components/StackedAreaChart.js';
import { DocumentTable } from '../components/DocumentTable.js';
import { ColumnFilter } from '../components/ColumnFilter.js';
import { initAllCardToggles } from '../utils/cardWidthToggle.js';

// Column configuration for document tables
const DOCUMENT_AVAILABLE_COLUMNS = {
  classification: 'Classification',
  documentType: 'Doc Type',
  publisherName: 'Publisher',
  publisherType: 'Publisher Type',
  title: 'Title',
  excerpt: 'Excerpt',
  publishedDate: 'Published',
  narratives: 'Narratives',
  themes: 'Themes',
  events: 'Events',
  locations: 'Locations',
  persons: 'People',
  organizations: 'Organizations',
  factions: 'Factions'
};

const DOCUMENT_DEFAULT_COLUMNS = ['classification', 'publisherName', 'publisherType', 'title', 'publishedDate'];

export class TopicView extends BaseView {
  constructor(container, topicId, options = {}) {
    super(container, options);
    this.topicId = topicId;
  }

  async render() {
    const topic = DataService.getTopicById(this.topicId);
    if (!topic) {
      this.renderNotFound('Topic');
      return;
    }

    // Fetch all data upfront
    const data = this.fetchTopicData(topic);
    
    // Determine active tab and build appropriate cards
    const activeTab = this.getCurrentTab();
    const hasDocuments = data.documents.length > 0;
    const cardsHtml = this.isDocumentsTab() 
      ? this.buildDocumentsCard(data)
      : this.buildDashboardCards(topic, data);

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

    this.container.innerHTML = `
      ${headerHtml}
      <div class="content-area">
        <div class="content-grid">
          ${cardsHtml}
        </div>
      </div>
    `;

    // Initialize card width toggles
    if (cardsHtml) {
      const contentGrid = this.container.querySelector('.content-grid');
      const tabSuffix = this.isDocumentsTab() ? '-docs' : '';
      initAllCardToggles(contentGrid, `topic-${this.topicId}${tabSuffix}`, { 0: 'half', 1: 'half' });
    }

    // Store pre-fetched data for component initialization
    this._prefetchedData = { topic, ...data };

    await this.initializeComponents();

    // Initialize drag-and-drop for cards
    this.initDragDrop();
  }

  fetchTopicData(topic) {
    const documents = DataService.getDocumentsForTopic(this.topicId);
    const volumeOverTime = DataService.getTopicVolumeOverTime(this.topicId, this.timeRange);
    const totalVolume = DataService.getTopicTotalVolume(this.topicId, this.timeRange);

    return {
      documents,
      volumeOverTime,
      totalVolume
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
   * Build cards for the Dashboard tab
   */
  buildDashboardCards(topic, data) {
    const cards = [];

    // Key Points card (bullet points)
    if (topic.bulletPoints && topic.bulletPoints.length > 0) {
      cards.push(CardBuilder.create('Key Points', 'topic-bullets', { halfWidth: true }));
    }

    // Volume Over Time card
    if (data.volumeOverTime && data.volumeOverTime.length > 0) {
      cards.push(CardBuilder.create('Volume Over Time', 'topic-volume', { 
        halfWidth: true,
        count: data.totalVolume
      }));
    }

    // Summary stats card if we have documents
    if (data.documents.length > 0) {
      cards.push(CardBuilder.create('Summary', 'topic-summary', { halfWidth: true }));
    }

    return cards.join('');
  }

  /**
   * Build card for the Documents tab
   */
  buildDocumentsCard(data) {
    if (data.documents.length === 0) {
      return '<div class="empty-state"><p class="empty-state-text">No documents found</p></div>';
    }

    // Column filter in card header
    const actionsHtml = `<div class="filter-control" id="topic-docs-column-filter"></div>`;

    return CardBuilder.create('Source Documents', 'topic-documents', {
      count: data.documents.length,
      fullWidth: true,
      noPadding: true,
      actions: actionsHtml
    });
  }

  async initializeComponents() {
    const { topic, documents, volumeOverTime, totalVolume } = this._prefetchedData;

    // Documents Tab: Only initialize document table with column filter
    if (this.isDocumentsTab()) {
      if (documents.length > 0) {
        // Check if classification should be shown
        const settings = dataStore.getSettings();
        const showClassification = settings.showClassification;
        
        // Filter available columns based on settings
        const availableColumns = { ...DOCUMENT_AVAILABLE_COLUMNS };
        if (!showClassification) {
          delete availableColumns.classification;
        }
        
        // Filter default columns based on settings
        const defaultColumns = showClassification 
          ? DOCUMENT_DEFAULT_COLUMNS 
          : DOCUMENT_DEFAULT_COLUMNS.filter(col => col !== 'classification');
        
        this._selectedDocColumns = [...defaultColumns];
        
        const filterContainer = document.getElementById('topic-docs-column-filter');
        if (filterContainer) {
          this.components.columnFilter = new ColumnFilter('topic-docs-column-filter', {
            availableColumns: availableColumns,
            defaultColumns: defaultColumns,
            requiredColumns: ['title'],
            onChange: (columns) => {
              this._selectedDocColumns = columns;
              if (this.components.documentTable) {
                this.components.documentTable.setColumns(columns);
              }
            }
          });
          this.components.columnFilter.setSelectedColumns(this._selectedDocColumns);
          this.components.columnFilter.render();
        }
        
        this.components.documentTable = new DocumentTable('topic-documents', {
          columns: this._selectedDocColumns,
          maxItems: 50,
          enableViewerMode: true,
          onDocumentClick: (doc) => {
            window.location.hash = `#/document/${doc.id}`;
          }
        });
        this.components.documentTable.update({ documents });
      }
      return;
    }

    // Dashboard Tab: Initialize all other components

    // Key Points (bullet points)
    const bulletsContainer = document.getElementById('topic-bullets');
    if (bulletsContainer && topic.bulletPoints && topic.bulletPoints.length > 0) {
      bulletsContainer.innerHTML = `
        <ul class="topic-detail-bullets">
          ${topic.bulletPoints.map(bp => `<li class="topic-detail-bullet">${this.escapeHtml(bp)}</li>`).join('')}
        </ul>
      `;
    }

    // Volume Over Time Chart
    if (volumeOverTime && volumeOverTime.length > 0) {
      const chartData = {
        dates: volumeOverTime.map(d => d.date),
        series: [volumeOverTime.map(d => d.volume || 0)],
        factions: [{ id: 'volume', name: 'Volume', color: 'var(--accent-primary)' }]
      };
      
      this.components.volumeChart = new StackedAreaChart('topic-volume', {
        height: 200,
        showLegend: false
      });
      this.components.volumeChart.update(chartData);
      this.components.volumeChart.enableAutoResize();
    }

    // Summary stats
    const summaryContainer = document.getElementById('topic-summary');
    if (summaryContainer && documents.length > 0) {
      // Calculate some basic stats
      const publishers = [...new Set(documents.map(d => d.publisherId))];
      const publisherNames = publishers.map(pId => {
        const pub = DataService.getPublisherById(pId);
        return pub ? pub.name : 'Unknown';
      });
      
      summaryContainer.innerHTML = `
        <div class="topic-summary-stats">
          <div class="topic-stat">
            <span class="topic-stat-value">${documents.length}</span>
            <span class="topic-stat-label">Documents</span>
          </div>
          <div class="topic-stat">
            <span class="topic-stat-value">${publishers.length}</span>
            <span class="topic-stat-label">Publishers</span>
          </div>
          <div class="topic-stat">
            <span class="topic-stat-value">${totalVolume.toLocaleString()}</span>
            <span class="topic-stat-label">Total Volume</span>
          </div>
        </div>
        ${publisherNames.length > 0 ? `
          <div class="topic-publishers">
            <span class="topic-publishers-label">Sources:</span>
            <span class="topic-publishers-list">${publisherNames.slice(0, 5).join(', ')}${publisherNames.length > 5 ? ` +${publisherNames.length - 5} more` : ''}</span>
          </div>
        ` : ''}
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
}

export default TopicView;
