/**
 * cardWidthToggle.js
 * Utility for managing card half/full width toggle with localStorage persistence
 */

const STORAGE_KEY = 'narrativeos-card-widths';

// SVG icons for the toggle button
const ICONS = {
  // Arrow pointing outward (expand to full)
  expand: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor">
    <path d="M10 2h4v4M6 14H2v-4M14 2L9 7M2 14l5-5"/>
  </svg>`,
  // Arrow pointing inward (collapse to half)
  collapse: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor">
    <path d="M6 2H2v4M10 14h4v-4M2 2l5 5M14 14l-5-5"/>
  </svg>`
};

/**
 * Get stored card width preferences
 */
function getStoredWidths() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (e) {
    return {};
  }
}

/**
 * Store card width preference
 */
function storeWidth(cardId, isHalf) {
  try {
    const widths = getStoredWidths();
    widths[cardId] = isHalf ? 'half' : 'full';
    localStorage.setItem(STORAGE_KEY, JSON.stringify(widths));
  } catch (e) {
    // localStorage not available
  }
}

/**
 * Get initial width for a card (from storage or default)
 * @param {string} cardId - Unique identifier for the card
 * @param {string} defaultWidth - 'half' or 'full'
 */
function getInitialWidth(cardId, defaultWidth = 'full') {
  const stored = getStoredWidths();
  return stored[cardId] || defaultWidth;
}

/**
 * Create a toggle button element
 * @param {boolean} isHalf - Current state (true = half width)
 */
function createToggleButton(isHalf) {
  const button = document.createElement('button');
  button.className = 'card-width-toggle';
  button.type = 'button';
  button.title = isHalf ? 'Expand to full width' : 'Collapse to half width';
  button.innerHTML = isHalf ? ICONS.expand : ICONS.collapse;
  return button;
}

/**
 * Toggle card width and update UI
 * @param {HTMLElement} card - The card element
 * @param {HTMLElement} button - The toggle button
 * @param {string} cardId - Unique identifier for storage
 */
function toggleCardWidth(card, button, cardId) {
  const isCurrentlyHalf = card.classList.contains('card-half') || card.classList.contains('card-half-width');
  
  // Remove all width classes to prevent conflicts
  card.classList.remove('card-half', 'card-half-width', 'card-full', 'card-full-width');
  
  if (isCurrentlyHalf) {
    // Expand to full
    card.classList.add('card-full');
    button.innerHTML = ICONS.collapse;
    button.title = 'Collapse to half width';
    storeWidth(cardId, false);
  } else {
    // Collapse to half
    card.classList.add('card-half');
    button.innerHTML = ICONS.expand;
    button.title = 'Expand to full width';
    storeWidth(cardId, true);
  }
  
  // Dispatch resize event for components that need to re-render
  window.dispatchEvent(new Event('resize'));
}

/**
 * Initialize a card with width toggle functionality
 * @param {HTMLElement} card - The card element
 * @param {string} cardId - Unique identifier for the card (for storage)
 * @param {string} defaultWidth - Default width: 'half' or 'full'
 */
export function initCardWidthToggle(card, cardId, defaultWidth = 'full') {
  if (!card) return;
  
  const header = card.querySelector('.card-header');
  if (!header) return;
  
  // Check if card has a pre-set width class (e.g., card-half-width from HTML)
  const hasPresetHalf = card.classList.contains('card-half-width');
  const hasPresetFull = card.classList.contains('card-full-width');
  
  // Determine the actual default based on preset classes or provided default
  let actualDefault = defaultWidth;
  if (hasPresetHalf) actualDefault = 'half';
  else if (hasPresetFull) actualDefault = 'full';
  
  // Get initial width preference (stored preference takes precedence)
  const initialWidth = getInitialWidth(cardId, actualDefault);
  const isHalf = initialWidth === 'half';
  
  // Remove all width classes to prevent conflicts
  card.classList.remove('card-half', 'card-half-width', 'card-full', 'card-full-width');
  card.classList.add(isHalf ? 'card-half' : 'card-full');
  
  // Create toggle button
  const button = createToggleButton(isHalf);
  
  // Check if there's already an actions container, or create one
  let actionsContainer = header.querySelector('.card-header-actions');
  if (!actionsContainer) {
    actionsContainer = document.createElement('div');
    actionsContainer.className = 'card-header-actions';
    header.appendChild(actionsContainer);
  }
  
  // Append toggle button to end of actions (so it's on the right)
  actionsContainer.appendChild(button);
  
  // Add click handler
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleCardWidth(card, button, cardId);
  });
  
  return button;
}

/**
 * Initialize all cards within a container
 * @param {HTMLElement} container - The container element (e.g., .content-grid)
 * @param {string} viewPrefix - Prefix for card IDs (e.g., 'dashboard')
 * @param {Object} defaultWidths - Map of card index to default width
 */
export function initAllCardToggles(container, viewPrefix, defaultWidths = {}) {
  if (!container) return;
  
  const cards = container.querySelectorAll('.card');
  cards.forEach((card, index) => {
    const cardId = `${viewPrefix}-card-${index}`;
    const defaultWidth = defaultWidths[index] || 'full';
    initCardWidthToggle(card, cardId, defaultWidth);
  });
}

/**
 * Create a card HTML string with the toggle-ready structure
 * @param {string} title - Card title
 * @param {string} bodyId - ID for the card body element
 * @param {Object} options - Additional options
 */
export function createCardHTML(title, bodyId, options = {}) {
  const { noBodyPadding = false, extraHeaderContent = '' } = options;
  const bodyClass = noBodyPadding ? 'card-body no-padding' : 'card-body';
  
  return `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">${title}</h2>
        <div class="card-header-actions">${extraHeaderContent}</div>
      </div>
      <div class="${bodyClass}" id="${bodyId}"></div>
    </div>
  `;
}

export default {
  initCardWidthToggle,
  initAllCardToggles,
  createCardHTML
};
