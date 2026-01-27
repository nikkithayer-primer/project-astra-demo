/**
 * SubNarrativeList.js
 * List of themes with indicators
 */

import { BaseComponent } from './BaseComponent.js';
import { Sparkline } from './Sparkline.js';
import { getSourceViewer } from './SourceViewerModal.js';

export class SubNarrativeList extends BaseComponent {
  constructor(containerId, options = {}) {
    super(containerId, {
      maxItems: 10,
      showSparkline: true,
      defaultShowDescription: false,
      ...options
    });
    this.sparklines = [];
    this.showDescription = this.options.defaultShowDescription;
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

  render() {
    this.clear();
    this.sparklines.forEach(s => s.destroy());
    this.sparklines = [];

    if (!this.data || !this.data.subNarratives || !this.data.subNarratives.length) {
      this.showEmptyState('No themes found');
      return;
    }

    const list = document.createElement('ul');
    list.className = 'narrative-list';

    const items = this.data.subNarratives.slice(0, this.options.maxItems);

    items.forEach((subNarrative, i) => {
      const totalVolume = this.calculateTotalVolume(subNarrative);
      const sparklineId = `sparkline-${this.containerId || 'sublist'}-${i}-${Date.now()}`;

      const item = document.createElement('li');
      item.className = 'narrative-item';
      item.dataset.id = subNarrative.id;

      item.innerHTML = `
        <div class="narrative-content">
          <div class="narrative-title-row">
            <span class="narrative-text">${subNarrative.text}</span>
            <span class="badge badge-${this.getSentimentClass(subNarrative.sentiment)}">${this.formatSentiment(subNarrative.sentiment)}</span>
          </div>
          ${subNarrative.description && this.showDescription ? `
            <p class="narrative-description">
              ${subNarrative.description}
              <a href="#" class="source-link" data-id="${subNarrative.id}" data-type="subnarrative">View source</a>
            </p>
          ` : ''}
        </div>
        <div class="narrative-meta">
          <span class="narrative-volume">${this.formatNumber(totalVolume)}</span>
          ${this.options.showSparkline ? `
            <div class="sparkline-container" id="${sparklineId}"></div>
          ` : ''}
        </div>
      `;

      item.addEventListener('click', (e) => {
        // Don't navigate if clicking the source link
        if (e.target.classList.contains('source-link')) {
          return;
        }
        if (this.options.onSubNarrativeClick) {
          this.options.onSubNarrativeClick(subNarrative);
        }
      });

      // Handle source link click
      const sourceLink = item.querySelector('.source-link');
      if (sourceLink) {
        sourceLink.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          getSourceViewer().open(subNarrative, 'subnarrative');
        });
      }

      list.appendChild(item);
    });

    this.container.appendChild(list);

    // Render sparklines after DOM update
    if (this.options.showSparkline) {
      requestAnimationFrame(() => {
        items.forEach((subNarrative, i) => {
          // Find the sparkline container that was just created
          const containers = this.container.querySelectorAll('.sparkline-container');
          const container = containers[i];
          
          if (container && subNarrative.volumeOverTime && subNarrative.volumeOverTime.length) {
            const sparkline = new Sparkline(container, {
              width: 80,
              height: 24,
              color: this.getSentimentColor(subNarrative.sentiment),
              sentiment: subNarrative.sentiment
            });
            const values = subNarrative.volumeOverTime.map(d =>
              Object.values(d.factionVolumes || {}).reduce((a, b) => a + b, 0)
            );
            sparkline.update(values);
            this.sparklines.push(sparkline);
          }
        });
      });
    }
  }

  calculateTotalVolume(subNarrative) {
    return Object.values(subNarrative.factionMentions || {})
      .reduce((sum, f) => sum + (f.volume || 0), 0);
  }

  formatSentiment(sentiment) {
    const value = typeof sentiment === 'number' ? sentiment : 0;
    if (value <= -0.6) return 'Very Negative';
    if (value <= -0.2) return 'Negative';
    if (value < 0.2) return 'Neutral';
    if (value < 0.6) return 'Positive';
    return 'Very Positive';
  }

  destroy() {
    this.sparklines.forEach(s => s.destroy());
    this.sparklines = [];
    super.destroy();
  }
}

export default SubNarrativeList;
