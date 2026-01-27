/**
 * CardBuilder.js
 * Utility for generating consistent card HTML across all views
 */

export const CardBuilder = {
  /**
   * Create a card HTML string
   * @param {string} title - Card title
   * @param {string} containerId - ID for the card body container
   * @param {Object} options - Configuration options
   * @param {number} [options.count] - Optional count to display in title
   * @param {boolean} [options.noPadding] - Remove padding from card body
   * @param {boolean} [options.halfWidth] - Make card half-width
   * @param {boolean} [options.fullWidth] - Make card full-width
   * @param {string} [options.actions] - HTML for card header actions
   * @param {string} [options.bodyClass] - Additional classes for card body
   * @param {boolean} [options.draggable] - Enable drag handle (default: true)
   * @param {string} [options.subtitle] - Optional subtitle text (e.g., "Triggered 6 days ago")
   * @param {string} [options.content] - Optional HTML content to insert into card body
   * @returns {string} Card HTML string
   */
  create(title, containerId, options = {}) {
    const countLabel = options.count !== undefined ? ` (${options.count})` : '';
    const showDragHandle = options.draggable !== false;
    
    const bodyClasses = [
      'card-body',
      options.noPadding ? 'no-padding' : '',
      options.bodyClass || ''
    ].filter(Boolean).join(' ');
    
    const cardClasses = [
      'card',
      options.halfWidth ? 'card-half-width' : '',
      options.fullWidth ? 'card-full-width' : ''
    ].filter(Boolean).join(' ');
    
    const dragHandle = showDragHandle ? this.dragHandle() : '';
    const subtitleHtml = options.subtitle ? `<span class="card-subtitle">${options.subtitle}</span>` : '';
    const bodyContent = options.content || '';
    
    return `
      <div class="${cardClasses}" data-card-id="${containerId}">
        <div class="card-header">
          ${dragHandle}
          <h2 class="card-title">${title}${countLabel}</h2>
          ${subtitleHtml}
          <div class="card-header-actions">${options.actions || ''}</div>
        </div>
        <div class="${bodyClasses}" id="${containerId}">${bodyContent}</div>
      </div>
    `;
  },

  /**
   * Create drag handle HTML
   * @returns {string} Drag handle HTML
   */
  dragHandle() {
    return `
      <button class="card-drag-handle" title="Drag to reorder" aria-label="Drag to reorder card">
        <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
          <circle cx="5" cy="3" r="1.5"/>
          <circle cx="11" cy="3" r="1.5"/>
          <circle cx="5" cy="8" r="1.5"/>
          <circle cx="11" cy="8" r="1.5"/>
          <circle cx="5" cy="13" r="1.5"/>
          <circle cx="11" cy="13" r="1.5"/>
        </svg>
      </button>
    `;
  },

  /**
   * Create description toggle button HTML
   * @param {string} id - Button ID
   * @returns {string} Button HTML
   */
  descriptionToggle(id) {
    return `
      <button class="card-action-btn description-toggle" title="Toggle descriptions" id="${id}">
        <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M3 4h10M3 8h10M3 12h6"/>
        </svg>
      </button>
    `;
  },

  /**
   * Create multiple cards from a configuration array
   * @param {Array} configs - Array of card configurations
   * @returns {string} Combined card HTML
   */
  createMultiple(configs) {
    return configs
      .filter(config => config.condition !== false)
      .map(config => {
        const options = { ...config.options };
        if (config.content) {
          options.content = config.content;
        }
        return this.create(config.title, config.id, options);
      })
      .join('');
  }
};

export default CardBuilder;
