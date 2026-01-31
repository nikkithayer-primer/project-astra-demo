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
   * @param {string} [options.subtitle] - Optional subtitle text (e.g., "Triggered 6 days ago")
   * @param {string} [options.content] - Optional HTML content to insert into card body
   * @param {boolean} [options.noFullscreen] - Disable fullscreen toggle button
   * @returns {string} Card HTML string
   */
  create(title, containerId, options = {}) {
    const countLabel = options.count !== undefined ? ` (${options.count})` : '';
    
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
    
    const subtitleHtml = options.subtitle ? `<span class="card-subtitle">${options.subtitle}</span>` : '';
    const bodyContent = options.content || '';
    
    // Build actions: custom actions + fullscreen toggle (unless disabled)
    const fullscreenToggleHtml = options.noFullscreen ? '' : this.fullscreenToggle(containerId);
    const allActions = (options.actions || '') + fullscreenToggleHtml;
    
    return `
      <div class="${cardClasses}" data-card-id="${containerId}">
        <div class="card-header">
          <h2 class="card-title">${title}${countLabel}</h2>
          ${subtitleHtml}
          <div class="card-header-actions">${allActions}</div>
        </div>
        <div class="${bodyClasses}" id="${containerId}">${bodyContent}</div>
      </div>
    `;
  },

  /**
   * Create description toggle button HTML
   * @param {string} id - Button ID
   * @returns {string} Button HTML
   */
  descriptionToggle(id) {
    return `
      <button class="btn-icon card-action-btn description-toggle" title="Toggle descriptions" id="${id}">
        <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M3 4h10M3 8h10M3 12h6"/>
        </svg>
      </button>
    `;
  },

  /**
   * Create fullscreen toggle button HTML
   * @param {string} containerId - Container ID for the card
   * @returns {string} Button HTML
   */
  fullscreenToggle(containerId) {
    return `
      <button class="btn-icon card-action-btn fullscreen-toggle" 
              title="Toggle fullscreen" 
              data-card-container="${containerId}">
        <svg class="fullscreen-expand-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M2 6V2h4M14 6V2h-4M2 10v4h4M14 10v4h-4"/>
        </svg>
        <svg class="fullscreen-collapse-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 2v4H2M10 2v4h4M6 14v-4H2M10 14v-4h4"/>
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
