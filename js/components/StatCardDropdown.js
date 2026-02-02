/**
 * StatCardDropdown.js
 * Dropdown component for stat cards that displays a list of related entities
 * Click on an entity name navigates to its detail view using ID-based routing
 */

import { BaseComponent } from './BaseComponent.js';

export class StatCardDropdown extends BaseComponent {
  constructor(containerId, options = {}) {
    super(containerId, {
      // Type of stat (narratives, events, etc.)
      type: 'entities',
      // Count to display
      count: 0,
      // Items to show in dropdown [{id, name}]
      items: [],
      // SVG icon HTML
      icon: '',
      // Label for the stat
      label: 'Entities',
      // Optional context ID for building routes
      contextId: null,
      // Callback when navigating (receives entity ID)
      onNavigate: null,
      // Max items to show in dropdown
      maxItems: 10,
      ...options
    });

    this._boundCloseHandler = null;
    this._isOpen = false;
  }

  /**
   * Build the route for an entity
   * @param {string} entityId - Entity ID
   * @returns {string} Hash route
   */
  buildRoute(entityId) {
    if (this.options.contextId) {
      return `#/${this.options.contextId}/${entityId}/`;
    }
    return `#/${entityId}/`;
  }

  render() {
    this.clear();

    const { type, count, items, icon, label, maxItems } = this.options;
    const hasItems = items && items.length > 0;
    
    // Don't render anything if there are no items
    if (!hasItems) {
      return;
    }
    
    // Build dropdown items
    const displayItems = items.slice(0, maxItems);
    let dropdownItemsHtml = displayItems.map(item => {
      const href = this.buildRoute(item.id);
      const title = item.name || item.text || item.headline || item.id;
      const description = item.description ? `<span class="stat-dropdown-item-desc">${this.escapeHtml(item.description)}</span>` : '';
      return `
        <a class="stat-dropdown-item" href="${href}" data-entity-id="${item.id}">
          <span class="stat-dropdown-item-title">${this.escapeHtml(title)}</span>
          ${description}
        </a>
      `;
    }).join('');

    // Show "more" indicator if truncated
    if (items.length > maxItems) {
      dropdownItemsHtml += `
        <div class="stat-dropdown-more">
          +${items.length - maxItems} more
        </div>
      `;
    }

    // Build the dropdown HTML
    const dropdownHtml = `
      <div class="stat-card-dropdown" data-type="${type}">
        <button class="stat-card-trigger" type="button">
          ${icon}
          <div class="stat-value">${count}</div>
          <div class="stat-label">${label}</div>
          <svg class="stat-dropdown-arrow" viewBox="0 0 16 16" width="10" height="10" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M4 6l4 4 4-4"/>
          </svg>
        </button>
        <div class="stat-dropdown-menu">
          ${dropdownItemsHtml}
        </div>
      </div>
    `;

    this.container.innerHTML = dropdownHtml;
    this.attachEventListeners();
  }

  attachEventListeners() {
    const dropdown = this.container.querySelector('.stat-card-dropdown');
    const trigger = this.container.querySelector('.stat-card-trigger');

    if (!dropdown || !trigger || trigger.disabled) return;

    // Toggle dropdown on trigger click
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.toggleDropdown();
    });

    // Handle item clicks
    const items = this.container.querySelectorAll('.stat-dropdown-item');
    items.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const entityId = item.dataset.entityId;
        const href = item.getAttribute('href');
        
        this.closeDropdown();
        
        if (this.options.onNavigate) {
          this.options.onNavigate(entityId);
        } else {
          window.location.hash = href;
        }
      });
    });
  }

  toggleDropdown() {
    if (this._isOpen) {
      this.closeDropdown();
    } else {
      this.openDropdown();
    }
  }

  openDropdown() {
    const dropdown = this.container.querySelector('.stat-card-dropdown');
    if (!dropdown) return;

    dropdown.classList.add('is-open');
    this._isOpen = true;

    // Close when clicking outside
    this._boundCloseHandler = (e) => {
      if (!dropdown.contains(e.target)) {
        this.closeDropdown();
      }
    };
    
    // Delay to avoid immediate trigger
    setTimeout(() => {
      document.addEventListener('click', this._boundCloseHandler);
    }, 0);
  }

  closeDropdown() {
    const dropdown = this.container.querySelector('.stat-card-dropdown');
    if (dropdown) {
      dropdown.classList.remove('is-open');
    }
    this._isOpen = false;

    if (this._boundCloseHandler) {
      document.removeEventListener('click', this._boundCloseHandler);
      this._boundCloseHandler = null;
    }
  }

  /**
   * Escape HTML to prevent XSS
   * @param {string} str - String to escape
   * @returns {string} Escaped string
   */
  escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  destroy() {
    this.closeDropdown();
    super.destroy();
  }
}

export default StatCardDropdown;
