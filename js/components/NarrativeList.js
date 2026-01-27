/**
 * NarrativeList.js
 * List of narratives with sparklines and collapsible subnarratives
 */

import { BaseComponent } from './BaseComponent.js';
import { Sparkline } from './Sparkline.js';
import { getSourceViewer } from './SourceViewerModal.js';
import { formatStatus } from '../utils/formatters.js';
import { DataService } from '../data/DataService.js';

export class NarrativeList extends BaseComponent {
  constructor(containerId, options = {}) {
    super(containerId, {
      maxItems: 10,
      showSentiment: true,
      showStatus: true,
      showSparkline: true,
      showVolume: true,
      showSubNarratives: true,
      maxSubNarratives: 5,
      defaultShowDescription: false,
      ...options
    });
    this.sparklines = [];
    this.showDescription = this.options.defaultShowDescription;
    this.expandedNarratives = new Set();
  }

  toggleExpanded(narrativeId) {
    if (this.expandedNarratives.has(narrativeId)) {
      this.expandedNarratives.delete(narrativeId);
    } else {
      this.expandedNarratives.add(narrativeId);
    }
    this.render();
  }

  formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }

  formatSentiment(sentiment) {
    const value = typeof sentiment === 'number' ? sentiment : 0;
    if (value <= -0.6) return 'Very Negative';
    if (value <= -0.2) return 'Negative';
    if (value < 0.2) return 'Neutral';
    if (value < 0.6) return 'Positive';
    return 'Very Positive';
  }

  toggleDescription() {
    this.showDescription = !this.showDescription;
    this.render();
    return this.showDescription;
  }

  setShowDescription(show) {
    this.showDescription = show;
    this.render();
  }

  getStatusIcon(status) {
    const icons = {
      new: `<svg class="status-icon status-icon-new" viewBox="0 0 16 16" fill="currentColor" stroke="none">
              <circle cx="8" cy="8" r="4"/>
            </svg>`,
      in_progress: `<svg class="status-icon status-icon-in_progress" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25">
              <circle cx="8" cy="8" r="5"/>
              <path d="M8 5v3l2 2"/>
            </svg>`,
      under_investigation: `<svg class="status-icon status-icon-under_investigation" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25">
              <circle cx="7" cy="7" r="4"/>
              <path d="M10 10l4 4"/>
            </svg>`,
      resolved: `<svg class="status-icon status-icon-resolved" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25">
              <circle cx="8" cy="8" r="5"/>
              <path d="M5 8l2 2 4-4"/>
            </svg>`
    };
    return icons[status] || icons.new;
  }

  render() {
    this.clear();
    this.sparklines.forEach(s => s.destroy());
    this.sparklines = [];

    if (!this.data || !this.data.narratives || !this.data.narratives.length) {
      this.showEmptyState('No narratives found');
      return;
    }

    const list = document.createElement('ul');
    list.className = 'narrative-list';

    const items = this.data.narratives.slice(0, this.options.maxItems);

    // Track sparkline indices for both narratives and subnarratives
    let sparklineIndex = 0;

    items.forEach((narrative, i) => {
      const totalVolume = this.calculateTotalVolume(narrative);
      const status = narrative.status || 'new';
      
      // Get subnarratives for this narrative
      const subNarratives = this.options.showSubNarratives 
        ? DataService.getSubNarrativesForNarrative(narrative.id)
        : [];
      const hasSubNarratives = subNarratives.length > 0;
      const isExpanded = this.expandedNarratives.has(narrative.id);

      const item = document.createElement('li');
      item.className = 'narrative-item-wrapper';
      item.dataset.id = narrative.id;

      // Build originated date for display
      const originatedDate = narrative.createdAt ? this.formatDate(narrative.createdAt) : '';

      item.innerHTML = `
        <div class="narrative-item${hasSubNarratives ? ' has-subnarratives' : ''}${isExpanded ? ' expanded' : ''}">
          ${this.options.showStatus ? `
            <div class="narrative-status-column" title="${formatStatus(status)}">
              ${this.getStatusIcon(status)}
            </div>
          ` : ''}
          <div class="narrative-content">
            <div class="narrative-title-row">
              <span class="narrative-text">${narrative.text}</span>
            </div>
            ${this.showDescription ? `
              ${originatedDate ? `<p class="narrative-originated">Originated: ${originatedDate}</p>` : ''}
              ${narrative.description ? `
                <p class="narrative-description">
                  ${narrative.description}
                  <a href="#" class="source-link" data-id="${narrative.id}" data-type="narrative">View source</a>
                </p>
              ` : ''}
            ` : ''}
            ${hasSubNarratives ? `
              <button class="narrative-expand-toggle" data-narrative-id="${narrative.id}" title="${isExpanded ? 'Collapse' : 'Expand'} themes">
                <svg class="tree-icon" viewBox="0 0 16 16" width="14" height="14" fill="currentColor" stroke="currentColor" stroke-width="1">
                  <circle cx="4" cy="8" r="2"/>
                  <circle cx="12" cy="4" r="1.5"/>
                  <circle cx="12" cy="12" r="1.5"/>
                  <path d="M6 8h3M9 4v8" fill="none"/>
                </svg>
                <span class="subnarrative-count">${subNarratives.length}</span>
                <svg class="chevron-icon" viewBox="0 0 16 16" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 4l4 4-4 4"/>
                </svg>
              </button>
            ` : ''}
          </div>
          <div class="narrative-meta">
            ${this.options.showVolume ? `
              <span class="narrative-volume">${this.formatNumber(totalVolume)}</span>
            ` : ''}
            ${this.options.showSparkline ? `
              <div class="sparkline-container" data-sparkline-index="${sparklineIndex}"></div>
            ` : ''}
          </div>
        </div>
        ${hasSubNarratives && isExpanded ? `
          <ul class="subnarrative-nested-list">
            ${subNarratives.slice(0, this.options.maxSubNarratives).map((sub, si) => {
              const subVolume = this.calculateSubNarrativeVolume(sub);
              sparklineIndex++;
              
              // Build originated date for subnarrative
              const subOriginatedDate = sub.createdAt ? this.formatDate(sub.createdAt) : '';
              
              return `
                <li class="subnarrative-nested-item" data-id="${sub.id}">
                  <div class="subnarrative-indent">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.25">
                      <path d="M4 0v12h8"/>
                    </svg>
                  </div>
                  <div class="subnarrative-content">
                    <span class="subnarrative-text">${sub.text}</span>
                    <span class="badge badge-${this.getSentimentClass(sub.sentiment)}">${this.formatSentiment(sub.sentiment)}</span>
                    ${this.showDescription ? `
                      ${subOriginatedDate ? `<p class="narrative-originated">Originated: ${subOriginatedDate}</p>` : ''}
                      ${sub.description ? `<p class="narrative-description">${sub.description}</p>` : ''}
                    ` : ''}
                  </div>
                  <div class="subnarrative-meta">
                    <span class="subnarrative-volume">${this.formatNumber(subVolume)}</span>
                    ${this.options.showSparkline ? `
                      <div class="sparkline-container" data-sparkline-index="${sparklineIndex}"></div>
                    ` : ''}
                  </div>
                </li>
              `;
            }).join('')}
            ${subNarratives.length > this.options.maxSubNarratives ? `
              <li class="subnarrative-more">
                +${subNarratives.length - this.options.maxSubNarratives} more themes
              </li>
            ` : ''}
          </ul>
        ` : ''}
      `;

      sparklineIndex++;

      // Handle narrative item click (navigate to detail)
      const narrativeItem = item.querySelector('.narrative-item');
      narrativeItem.addEventListener('click', (e) => {
        // Don't navigate if clicking the source link or expand toggle
        if (e.target.classList.contains('source-link') || 
            e.target.closest('.narrative-expand-toggle')) {
          return;
        }
        if (this.options.onNarrativeClick) {
          this.options.onNarrativeClick(narrative);
        }
      });

      // Handle expand toggle click
      const expandToggle = item.querySelector('.narrative-expand-toggle');
      if (expandToggle) {
        expandToggle.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.toggleExpanded(narrative.id);
        });
      }

      // Handle source link click
      const sourceLink = item.querySelector('.source-link');
      if (sourceLink) {
        sourceLink.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          getSourceViewer().open(narrative, 'narrative');
        });
      }

      // Handle subnarrative clicks
      const subItems = item.querySelectorAll('.subnarrative-nested-item');
      subItems.forEach((subItem) => {
        subItem.addEventListener('click', (e) => {
          e.stopPropagation();
          const subId = subItem.dataset.id;
          window.location.hash = `#/subnarrative/${subId}`;
        });
      });

      list.appendChild(item);
    });

    this.container.appendChild(list);

    // Render sparklines after DOM update
    if (this.options.showSparkline) {
      requestAnimationFrame(() => {
        const containers = this.container.querySelectorAll('.sparkline-container');
        
        // Build a flat list of all items with sparklines (narratives + expanded subnarratives)
        const sparklineData = [];
        items.forEach((narrative) => {
          sparklineData.push({
            volumeOverTime: narrative.volumeOverTime,
            sentiment: narrative.sentiment
          });
          
          if (this.options.showSubNarratives && this.expandedNarratives.has(narrative.id)) {
            const subNarratives = DataService.getSubNarrativesForNarrative(narrative.id);
            subNarratives.slice(0, this.options.maxSubNarratives).forEach((sub) => {
              sparklineData.push({
                volumeOverTime: sub.volumeOverTime,
                sentiment: sub.sentiment
              });
            });
          }
        });

        containers.forEach((container, idx) => {
          const data = sparklineData[idx];
          if (data && data.volumeOverTime && data.volumeOverTime.length) {
            const sparkline = new Sparkline(container, {
              width: 80,
              height: 24,
              color: this.getSentimentColor(data.sentiment),
              sentiment: data.sentiment
            });
            const values = data.volumeOverTime.map(d =>
              Object.values(d.factionVolumes || {}).reduce((a, b) => a + b, 0)
            );
            sparkline.update(values);
            this.sparklines.push(sparkline);
          }
        });
      });
    }
  }

  calculateSubNarrativeVolume(subNarrative) {
    return Object.values(subNarrative.factionMentions || {})
      .reduce((sum, f) => sum + (f.volume || 0), 0);
  }

  calculateTotalVolume(narrative) {
    return Object.values(narrative.factionMentions || {})
      .reduce((sum, f) => sum + (f.volume || 0), 0);
  }

  destroy() {
    this.sparklines.forEach(s => s.destroy());
    this.sparklines = [];
    super.destroy();
  }
}

export default NarrativeList;
