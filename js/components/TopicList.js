/**
 * TopicList.js
 * List of topics with sparklines and bullet point summaries
 */

import { BaseComponent } from './BaseComponent.js';
import { Sparkline } from './Sparkline.js';
import { DataService } from '../data/DataService.js';

export class TopicList extends BaseComponent {
  constructor(containerId, options = {}) {
    super(containerId, {
      maxItems: 10,
      showSparkline: true,
      showVolume: true,
      showDuration: true,
      showBulletPoints: false,
      maxBulletPoints: 3,
      ...options
    });
    this.sparklines = [];
    this.showBullets = this.options.showBulletPoints;
    this.expandedTopics = new Set();
  }

  toggleExpanded(topicId) {
    if (this.expandedTopics.has(topicId)) {
      this.expandedTopics.delete(topicId);
    } else {
      this.expandedTopics.add(topicId);
    }
    this.render();
  }

  toggleBulletPoints() {
    this.showBullets = !this.showBullets;
    this.render();
    return this.showBullets;
  }

  setShowBulletPoints(show) {
    this.showBullets = show;
    this.render();
  }

  formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  }

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

  calculateTotalVolume(topic) {
    if (!topic.volumeOverTime || !topic.volumeOverTime.length) return 0;
    return topic.volumeOverTime.reduce((sum, entry) => sum + (entry.volume || 0), 0);
  }

  getStatusIndicator(topic) {
    const isActive = !topic.endDate || new Date(topic.endDate) >= new Date();
    if (isActive) {
      return `<span class="topic-status topic-status-active" title="Active topic">
        <svg viewBox="0 0 16 16" width="8" height="8" fill="currentColor">
          <circle cx="8" cy="8" r="4"/>
        </svg>
      </span>`;
    }
    return `<span class="topic-status topic-status-ended" title="Topic ended">
      <svg viewBox="0 0 16 16" width="10" height="10" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="8" cy="8" r="5"/>
        <path d="M5 8l2 2 4-4"/>
      </svg>
    </span>`;
  }

  render() {
    this.clear();
    this.sparklines.forEach(s => s.destroy());
    this.sparklines = [];

    if (!this.data || !this.data.topics || !this.data.topics.length) {
      this.showEmptyState('No topics found');
      return;
    }

    const list = document.createElement('ul');
    list.className = 'topic-list';

    const items = this.data.topics.slice(0, this.options.maxItems);

    items.forEach((topic, i) => {
      const totalVolume = this.calculateTotalVolume(topic);
      const hasBulletPoints = topic.bulletPoints && topic.bulletPoints.length > 0;
      const isExpanded = this.expandedTopics.has(topic.id);
      const duration = this.formatDuration(topic.startDate, topic.endDate);
      const dateRange = topic.endDate 
        ? `${this.formatDate(topic.startDate)} - ${this.formatDate(topic.endDate)}`
        : `Since ${this.formatDate(topic.startDate)}`;

      const item = document.createElement('li');
      item.className = 'topic-item-wrapper';
      item.dataset.id = topic.id;

      item.innerHTML = `
        <div class="topic-item${hasBulletPoints && this.showBullets ? ' has-bullets' : ''}${isExpanded ? ' expanded' : ''}">
          <div class="topic-status-column">
            ${this.getStatusIndicator(topic)}
          </div>
          <div class="topic-content">
            <div class="topic-headline">${topic.headline}</div>
            ${this.options.showDuration ? `
              <div class="topic-duration">
                <span class="topic-date-range">${dateRange}</span>
                <span class="topic-duration-badge">${duration}</span>
              </div>
            ` : ''}
            ${hasBulletPoints && this.showBullets ? `
              <ul class="topic-bullets${isExpanded ? ' expanded' : ''}">
                ${topic.bulletPoints.slice(0, isExpanded ? undefined : this.options.maxBulletPoints).map(bp => `
                  <li class="topic-bullet">${bp}</li>
                `).join('')}
              </ul>
              ${topic.bulletPoints.length > this.options.maxBulletPoints && !isExpanded ? `
                <button class="topic-expand-toggle" data-topic-id="${topic.id}">
                  +${topic.bulletPoints.length - this.options.maxBulletPoints} more
                </button>
              ` : ''}
              ${isExpanded && topic.bulletPoints.length > this.options.maxBulletPoints ? `
                <button class="topic-expand-toggle" data-topic-id="${topic.id}">
                  Show less
                </button>
              ` : ''}
            ` : ''}
          </div>
          <div class="topic-meta">
            ${this.options.showVolume ? `
              <span class="topic-volume">${this.formatNumber(totalVolume)}</span>
            ` : ''}
            ${this.options.showSparkline ? `
              <div class="sparkline-container" data-sparkline-index="${i}"></div>
            ` : ''}
          </div>
        </div>
      `;

      // Handle topic item click (navigate to detail if handler provided)
      const topicItem = item.querySelector('.topic-item');
      topicItem.addEventListener('click', (e) => {
        // Don't navigate if clicking the expand toggle
        if (e.target.closest('.topic-expand-toggle')) {
          return;
        }
        if (this.options.onTopicClick) {
          this.options.onTopicClick(topic);
        }
      });

      // Handle expand toggle click
      const expandToggle = item.querySelector('.topic-expand-toggle');
      if (expandToggle) {
        expandToggle.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.toggleExpanded(topic.id);
        });
      }

      list.appendChild(item);
    });

    this.container.appendChild(list);

    // Render sparklines after DOM update
    if (this.options.showSparkline) {
      requestAnimationFrame(() => {
        const containers = this.container.querySelectorAll('.sparkline-container');
        
        containers.forEach((container, idx) => {
          const topic = items[idx];
          if (topic && topic.volumeOverTime && topic.volumeOverTime.length) {
            const sparkline = new Sparkline(container, {
              width: 80,
              height: 24,
              color: 'var(--accent-primary)'
            });
            const values = topic.volumeOverTime.map(d => d.volume || 0);
            sparkline.update(values);
            this.sparklines.push(sparkline);
          }
        });
      });
    }
  }

  destroy() {
    this.sparklines.forEach(s => s.destroy());
    this.sparklines = [];
    super.destroy();
  }
}

export default TopicList;
