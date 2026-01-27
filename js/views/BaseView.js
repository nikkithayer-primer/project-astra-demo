/**
 * BaseView.js
 * Base class for all view components
 * Provides shared functionality and reduces code duplication across views
 */

import {
  getSentimentClass,
  formatSentiment,
  formatNumber,
  formatStatus,
  truncateText
} from '../utils/formatters.js';
import { PageHeader } from '../utils/PageHeader.js';
import { DragDropManager } from '../utils/DragDropManager.js';

export class BaseView {
  /**
   * @param {HTMLElement|string} container - Container element or ID
   * @param {Object} options - View options including missionId and timeRange
   */
  constructor(container, options = {}) {
    this.container = typeof container === 'string'
      ? document.getElementById(container)
      : container;
    
    if (!this.container) {
      console.error(`${this.constructor.name}: Container not found`);
    }
    
    this.options = options || {};
    this.components = {};
    this.missionId = options.missionId || 'all';
    this.timeRange = options.timeRange || null;
  }

  /**
   * Render the view - must be implemented by subclass
   */
  async render() {
    throw new Error('render() must be implemented by subclass');
  }

  /**
   * Clean up components and release resources
   */
  destroy() {
    try {
      // Destroy drag-drop manager if present
      if (this.dragDropManager) {
        this.dragDropManager.destroy();
        this.dragDropManager = null;
      }
      
      Object.values(this.components).forEach(c => {
        try {
          if (c && c.destroy) c.destroy();
        } catch (e) {
          console.error(`${this.constructor.name}: Error destroying component:`, e);
        }
      });
      this.components = {};
    } catch (e) {
      console.error(`${this.constructor.name}: Error during view destruction:`, e);
    }
  }

  /**
   * Initialize drag-and-drop functionality for cards in a content grid
   * @param {string} containerSelector - CSS selector for the content grid (default: '.content-grid')
   */
  initDragDrop(containerSelector = '.content-grid') {
    // Use setTimeout to ensure DOM is ready after rendering
    setTimeout(() => {
      try {
        if (!this.container) return;
        
        const container = this.container.querySelector(containerSelector);
        if (container) {
          this.dragDropManager = new DragDropManager({
            containerSelector: containerSelector,
            onOrderChange: (order) => {
              // Optional callback when card order changes
              if (this.onCardOrderChange) {
                try {
                  this.onCardOrderChange(order);
                } catch (e) {
                  console.error(`${this.constructor.name}: Error in onCardOrderChange callback:`, e);
                }
              }
            }
          });
          this.dragDropManager.init(container);
        }
      } catch (e) {
        console.error(`${this.constructor.name}: Error initializing drag-drop:`, e);
      }
    }, 0);
  }

  /**
   * Get sentiment CSS class
   * @param {number|string} sentiment
   * @returns {string} CSS class suffix
   */
  getSentimentClass(sentiment) {
    return getSentimentClass(sentiment);
  }

  /**
   * Format sentiment for display
   * @param {number|string} sentiment
   * @returns {string} Human-readable sentiment label
   */
  formatSentiment(sentiment) {
    return formatSentiment(sentiment);
  }

  /**
   * Format number with abbreviations
   * @param {number} num
   * @returns {string} Formatted number
   */
  formatNumber(num) {
    return formatNumber(num);
  }

  /**
   * Format status for display
   * @param {string} status
   * @returns {string} Human-readable status label
   */
  formatStatus(status) {
    return formatStatus(status);
  }

  /**
   * Truncate text to max length
   * @param {string} text
   * @param {number} maxLength
   * @returns {string} Truncated text
   */
  truncateText(text, maxLength = 40) {
    return truncateText(text, maxLength);
  }

  /**
   * Show modal with narratives connecting two entities
   * Used by views that display network graphs
   * @param {Object} link - Link object with source, target, and narratives
   */
  showConnectingNarrativesModal(link) {
    if (!link) {
      console.error(`${this.constructor.name}: showConnectingNarrativesModal requires a link object`);
      return;
    }

    try {
      const sourceNode = typeof link.source === 'object' ? link.source : { id: link.source };
      const targetNode = typeof link.target === 'object' ? link.target : { id: link.target };
      
      const sourceLabel = this.escapeHtml(sourceNode.label || sourceNode.id || 'Unknown');
      const targetLabel = this.escapeHtml(targetNode.label || targetNode.id || 'Unknown');
      
      const narratives = Array.isArray(link.narratives) ? link.narratives : [];
      const narrativesList = narratives.map(n => {
        if (!n) return '';
        return `
          <li class="narrative-link-item" data-id="${this.escapeHtml(n.id || '')}">
            <div class="narrative-link-text">${this.escapeHtml(n.text || 'Untitled narrative')}</div>
            <div class="narrative-link-meta">
              <span class="badge badge-${this.getSentimentClass(n.sentiment)}">${this.formatSentiment(n.sentiment)}</span>
            </div>
          </li>
        `;
      }).join('');

      if (window.app && window.app.showModal) {
        window.app.showModal(`
          <div class="modal-header">
            <div class="modal-title-row">
              <span class="modal-icon">🔗</span>
              <h2 class="modal-title">Connecting Narratives</h2>
            </div>
            <button class="modal-close" onclick="window.app.closeModal()">×</button>
          </div>
          <div class="modal-body">
            <p class="connection-description">
              <strong>${sourceLabel}</strong> and <strong>${targetLabel}</strong> 
              appear together in ${narratives.length} narrative${narratives.length !== 1 ? 's' : ''}:
            </p>
            <ul class="connecting-narratives-list">
              ${narrativesList}
            </ul>
          </div>
        `);

        // Add click handlers for narrative items
        document.querySelectorAll('.narrative-link-item').forEach(item => {
          item.addEventListener('click', () => {
            const narrativeId = item.dataset.id;
            if (window.app && window.app.closeModal) {
              window.app.closeModal();
            }
            window.location.hash = `#/narrative/${narrativeId}`;
          });
        });
      } else {
        console.error(`${this.constructor.name}: window.app.showModal not available`);
      }
    } catch (e) {
      console.error(`${this.constructor.name}: Error showing connecting narratives modal:`, e);
    }
  }

  /**
   * Escape HTML to prevent XSS
   */
  escapeHtml(text) {
    if (!text) return '';
    if (typeof text !== 'string') text = String(text);
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Render a "not found" page using PageHeader utility
   * @param {string} entityType - Type of entity (e.g., "Narrative", "Person")
   */
  renderNotFound(entityType) {
    if (!this.container) {
      console.error(`${this.constructor.name}: Cannot render not found - container not available`);
      return;
    }
    try {
      this.container.innerHTML = PageHeader.notFound(entityType || 'Item');
    } catch (e) {
      console.error(`${this.constructor.name}: Error rendering not found page:`, e);
      this.container.innerHTML = `<div class="empty-state"><p>${entityType || 'Item'} not found</p></div>`;
    }
  }

  /**
   * Create a page header using PageHeader utility
   * @param {Object} config - Header configuration
   * @returns {string} Header HTML
   */
  createPageHeader(config) {
    return PageHeader.render(config);
  }

  // ============================================
  // Tab Navigation Helpers
  // ============================================

  /**
   * Get the current active tab from options
   * @returns {string} Current tab ID (defaults to 'dashboard')
   */
  getCurrentTab() {
    return this.options.tab || 'dashboard';
  }

  /**
   * Set the current tab by updating the URL
   * @param {string} tabName - Tab ID to switch to
   */
  setTab(tabName) {
    const hash = window.location.hash;
    const baseHash = hash.split('?')[0];
    
    // Build new URL with tab parameter
    if (tabName === 'dashboard') {
      // Default tab - no need to include in URL
      window.location.hash = baseHash;
    } else {
      window.location.hash = `${baseHash}?tab=${encodeURIComponent(tabName)}`;
    }
  }

  /**
   * Generate tabs configuration for PageHeader
   * @param {string} baseHref - Base href for the tabs (e.g., '#/narrative/123')
   * @param {boolean} hasDocuments - Whether this view has documents to show
   * @returns {Array|null} Tabs configuration or null if no tabs needed
   */
  getTabsConfig(baseHref, hasDocuments = true) {
    if (!hasDocuments) return null;
    
    return [
      { id: 'dashboard', label: 'Dashboard', href: baseHref },
      { id: 'documents', label: 'Documents', href: `${baseHref}?tab=documents` }
    ];
  }

  /**
   * Check if we should show the documents tab content
   * @returns {boolean}
   */
  isDocumentsTab() {
    return this.getCurrentTab() === 'documents';
  }

  /**
   * Check if we should show the dashboard tab content
   * @returns {boolean}
   */
  isDashboardTab() {
    return this.getCurrentTab() === 'dashboard';
  }
}

export default BaseView;
