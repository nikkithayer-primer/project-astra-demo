/**
 * NarrativeList.js
 * List of narratives with sparklines, status icons, and collapsible subnarratives
 * Extends BaseItemList for common list functionality
 */

import { BaseItemList } from './BaseItemList.js';
import { Sparkline } from './Sparkline.js';
import { getSourceViewer } from './SourceViewerModal.js';
import { formatStatus } from '../utils/formatters.js';
import { DataService } from '../data/DataService.js';

export class NarrativeList extends BaseItemList {
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
  }

  /**
   * Get items from data
   */
  getItems() {
    return this.data?.narratives || [];
  }

  /**
   * Get empty state message
   */
  getEmptyMessage() {
    return 'No narratives found';
  }

  /**
   * Get item CSS class
   */
  getItemClass(item) {
    return 'narrative-item-wrapper';
  }

  /**
   * Get status icon SVG
   */
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

  /**
   * Calculate volume for a subnarrative
   */
  calculateSubNarrativeVolume(subNarrative) {
    return Object.values(subNarrative.factionMentions || {})
      .reduce((sum, f) => sum + (f.volume || 0), 0);
  }

  /**
   * Render a single narrative item's content
   */
  renderItemContent(item, sparklineIndex) {
    const totalVolume = this.calculateVolume(item);
    const status = item.status || 'new';
    
    // Get subnarratives for this narrative
    const subNarratives = this.options.showSubNarratives 
      ? DataService.getSubNarrativesForNarrative(item.id)
      : [];
    const hasSubNarratives = subNarratives.length > 0;
    const isExpanded = this.isExpanded(item.id);

    // Build originated date for display
    const originatedDate = item.createdAt ? this.formatDate(item.createdAt) : '';

    // Track sparkline index for subnarratives
    let subSparklineIndex = sparklineIndex + 1;

    return `
      <div class="narrative-item${hasSubNarratives ? ' has-subnarratives' : ''}${isExpanded ? ' expanded' : ''}" data-id="${item.id}">
        ${this.options.showStatus ? `
          <div class="narrative-status-column" title="${formatStatus(status)}">
            ${this.getStatusIcon(status)}
          </div>
        ` : ''}
        <div class="narrative-content">
          <div class="narrative-title-row">
            <span class="narrative-text">${this.getItemTitle(item)}</span>
          </div>
          ${this.showDescription ? `
            ${originatedDate ? `<p class="narrative-originated">Originated: ${originatedDate}</p>` : ''}
            ${item.description ? `
              <p class="narrative-description">
                ${item.description}
                <a href="#" class="source-link" data-id="${item.id}" data-type="narrative">View source</a>
              </p>
            ` : ''}
          ` : ''}
          ${hasSubNarratives ? `
            <button class="narrative-expand-toggle" data-narrative-id="${item.id}" title="${isExpanded ? 'Collapse' : 'Expand'} themes">
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
          ${subNarratives.slice(0, this.options.maxSubNarratives).map((sub) => {
            const subVolume = this.calculateSubNarrativeVolume(sub);
            const subOriginatedDate = sub.createdAt ? this.formatDate(sub.createdAt) : '';
            const currentSubIndex = subSparklineIndex++;
            
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
                    <div class="sparkline-container" data-sparkline-index="${currentSubIndex}"></div>
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
  }

  /**
   * Get next sparkline index (account for subnarratives)
   */
  getNextSparklineIndex(item, currentIndex) {
    let nextIndex = currentIndex + 1;
    
    // If expanded, add indices for subnarratives
    if (this.options.showSubNarratives && this.isExpanded(item.id)) {
      const subNarratives = DataService.getSubNarrativesForNarrative(item.id);
      nextIndex += Math.min(subNarratives.length, this.options.maxSubNarratives);
    }
    
    return nextIndex;
  }

  /**
   * Get sparkline data including subnarratives
   */
  getSparklineData(items) {
    const data = [];
    
    items.forEach((narrative) => {
      // Add narrative sparkline data
      data.push({
        values: this.getSparklineValues(narrative),
        color: this.getSparklineColor(narrative),
        sentiment: narrative.sentiment
      });
      
      // Add subnarrative sparkline data if expanded
      if (this.options.showSubNarratives && this.isExpanded(narrative.id)) {
        const subNarratives = DataService.getSubNarrativesForNarrative(narrative.id);
        subNarratives.slice(0, this.options.maxSubNarratives).forEach((sub) => {
          data.push({
            values: this.getSparklineValues(sub),
            color: this.getSparklineColor(sub),
            sentiment: sub.sentiment
          });
        });
      }
    });
    
    return data;
  }

  /**
   * Set up additional handlers
   */
  setupAdditionalHandlers(element, item) {
    // Handle expand toggle click
    const expandToggle = element.querySelector('.narrative-expand-toggle');
    if (expandToggle) {
      expandToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.toggleExpanded(item.id);
      });
    }

    // Handle source link click
    const sourceLink = element.querySelector('.source-link');
    if (sourceLink) {
      sourceLink.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        getSourceViewer().open(item, 'narrative');
      });
    }

    // Handle subnarrative clicks
    const subItems = element.querySelectorAll('.subnarrative-nested-item');
    subItems.forEach((subItem) => {
      subItem.addEventListener('click', (e) => {
        e.stopPropagation();
        const subId = subItem.dataset.id;
        window.location.hash = `#/subnarrative/${subId}`;
      });
    });
  }

}

export default NarrativeList;
