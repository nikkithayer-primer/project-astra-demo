/**
 * TextSelectionPopover.js
 * Shows a floating menu when text is selected within snippetable content areas,
 * allowing users to add the selected text to a project as a snippet.
 */

import { getAddSnippetToProjectModal } from './AddSnippetToProjectModal.js';
import { escapeHtml } from '../utils/htmlUtils.js';

/**
 * Source resolvers for different content types.
 * Each resolver has a CSS selector and a function to extract source info.
 * Order matters - first match wins.
 */
const SOURCE_RESOLVERS = [
  {
    // Document viewer content (highest priority)
    selector: '[data-document-id]',
    resolve: (el) => ({
      type: 'document',
      documentId: el.dataset.documentId,
      sourceId: el.dataset.documentId,
      label: null // Will be resolved from document title
    })
  },
  {
    // Document table rows - get doc ID from the row
    selector: '.document-row',
    resolve: (el) => ({
      type: 'table',
      documentId: el.dataset.id,
      sourceId: el.dataset.id,
      label: null // Will be resolved from document title
    })
  },
  {
    // Activity feed items
    selector: '.activity-item',
    resolve: (el) => ({
      type: 'activity',
      documentId: el.dataset.documentId || null,
      sourceId: el.dataset.documentId,
      label: 'Activity feed'
    })
  },
  {
    // Chat assistant messages
    selector: '.chat-message.assistant',
    resolve: (el) => ({
      type: 'chat',
      documentId: null,
      sourceId: null,
      label: 'Chat response'
    })
  },
  {
    // Narrative items in lists
    selector: '.narrative-item',
    resolve: (el) => ({
      type: 'narrative',
      documentId: null,
      sourceId: el.dataset.id,
      label: `Narrative: ${el.querySelector('.narrative-text')?.textContent?.trim() || 'Unknown'}`
    })
  },
  {
    // Page header descriptions (entity summaries, narrative descriptions, etc.)
    selector: '.header-description',
    resolve: (el) => {
      // Try to get the entity title from the page header
      const header = el.closest('.page-header');
      const title = header?.querySelector('.page-title')?.textContent?.trim() || 'Page';
      return {
        type: 'summary',
        documentId: null,
        sourceId: null,
        label: `Summary: ${title}`
      };
    }
  },
  {
    // Card descriptions and summaries
    selector: '.card-description, .entity-description, .narrative-description',
    resolve: (el) => {
      // Try to get card or item title
      const card = el.closest('.card, .narrative-item, .entity-card');
      const title = card?.querySelector('.card-title, .narrative-text, .entity-name')?.textContent?.trim() || 'Item';
      return {
        type: 'summary',
        documentId: null,
        sourceId: null,
        label: `Summary: ${title}`
      };
    }
  }
];

class TextSelectionPopover {
  constructor() {
    this.popover = null;
    this.selectedText = '';
    this.sourceInfo = null; // { type, documentId, sourceId, label }
    this._boundHandlers = {
      mouseup: null,
      mousedown: null,
      scroll: null,
      keydown: null
    };
  }

  /**
   * Initialize the popover system
   */
  init() {
    this._createPopoverElement();
    this._attachGlobalListeners();
  }

  /**
   * Create the main popover element
   */
  _createPopoverElement() {
    this.popover = document.createElement('div');
    this.popover.className = 'text-selection-popover';
    this.popover.innerHTML = `
      <button class="popover-action" data-action="add-to-project">
        <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
          <path fill-rule="evenodd" d="M2 1C1.44771 1 1 1.44772 1 2V14C1 14.5523 1.44771 15 2 15H14C14.5523 15 15 14.5523 15 14V3.5C15 2.94772 14.5523 2.5 14 2.5H8.26759L7.56446 1.4453C7.37899 1.1671 7.06676 1 6.73241 1H2ZM2 2H6.73241L7.43554 3.0547C7.62101 3.3329 7.93324 3.5 8.26759 3.5H14V4.5H2V2ZM2 5.5V14H14V5.5H2Z"/>
        </svg>
        <span>Add to Project</span>
      </button>
      <button class="popover-action" data-action="send-to-ngt">
        <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
        <span>Send to NGT</span>
      </button>
    `;
    this.popover.style.display = 'none';
    document.body.appendChild(this.popover);

    // Handle action clicks
    this.popover.addEventListener('click', (e) => this._handlePopoverAction(e));
  }

  /**
   * Attach global event listeners for text selection
   */
  _attachGlobalListeners() {
    // Handle mouseup to detect selection completion
    this._boundHandlers.mouseup = (e) => {
      // Delay slightly to let selection finalize
      setTimeout(() => this._checkSelection(e), 10);
    };
    document.addEventListener('mouseup', this._boundHandlers.mouseup);

    // Hide on mousedown outside popover
    this._boundHandlers.mousedown = (e) => {
      if (!this.popover.contains(e.target)) {
        this.hide();
      }
    };
    document.addEventListener('mousedown', this._boundHandlers.mousedown);

    // Hide on scroll
    this._boundHandlers.scroll = () => {
      this.hide();
    };
    document.addEventListener('scroll', this._boundHandlers.scroll, true);

    // Hide on escape
    this._boundHandlers.keydown = (e) => {
      if (e.key === 'Escape') {
        this.hide();
      }
    };
    document.addEventListener('keydown', this._boundHandlers.keydown);
  }

  /**
   * Check if there's a valid text selection within a snippetable area
   */
  _checkSelection(e) {
    const selection = window.getSelection();
    const text = selection.toString().trim();

    if (text.length === 0) {
      return; // No text selected
    }

    // Check if selection is within a snippetable content area
    const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
    if (!range) return;

    // Get the element where selection starts
    const startContainer = range.startContainer.nodeType === Node.TEXT_NODE 
      ? range.startContainer.parentElement 
      : range.startContainer;
    
    // Try to resolve the source using our allow-list
    const sourceInfo = this._resolveSource(startContainer);
    
    if (!sourceInfo) {
      return; // Not within a snippetable content area
    }

    // Store selection info
    this.selectedText = text;
    this.sourceInfo = sourceInfo;

    // Position popover near the cursor (mouseup position)
    this._showAt(e.clientX, e.clientY);
  }

  /**
   * Resolve the source of selected text using the allow-list of selectors
   * @param {Element} element - The element where selection starts
   * @returns {Object|null} Source info or null if not in a snippetable area
   */
  _resolveSource(element) {
    for (const { selector, resolve } of SOURCE_RESOLVERS) {
      const container = element.closest(selector);
      if (container) {
        return resolve(container);
      }
    }
    return null;
  }

  /**
   * Show the popover at the specified position (near cursor)
   */
  _showAt(x, y) {
    // Show popover to measure it
    this.popover.style.display = 'flex';
    this.popover.style.visibility = 'hidden';
    
    // Get dimensions after rendering
    const popoverRect = this.popover.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    
    // Position slightly above and centered on cursor
    let left = x - (popoverRect.width / 2);
    let top = y - popoverRect.height - 12;

    // Adjust if too far right
    if (left + popoverRect.width > viewportWidth - 16) {
      left = viewportWidth - popoverRect.width - 16;
    }
    
    // Adjust if too far left
    if (left < 16) {
      left = 16;
    }

    // If no room above cursor, show below
    if (top < 16) {
      top = y + 16;
    }

    this.popover.style.left = `${left}px`;
    this.popover.style.top = `${top}px`;
    this.popover.style.visibility = 'visible';
  }

  /**
   * Hide the popover
   */
  hide() {
    this.popover.style.display = 'none';
    this.selectedText = '';
    this.sourceInfo = null;
  }

  /**
   * Handle clicks on popover actions
   */
  _handlePopoverAction(e) {
    const actionBtn = e.target.closest('[data-action]');
    if (!actionBtn) return;

    const action = actionBtn.dataset.action;
    e.stopPropagation();
    
    if (action === 'add-to-project') {
      this._openAddToProjectModal();
    } else if (action === 'send-to-ngt') {
      this._sendToNGT();
    }
  }

  /**
   * Open the Add to Project modal
   */
  _openAddToProjectModal() {
    if (!this.selectedText || !this.sourceInfo) {
      console.error('TextSelectionPopover: No text or source info');
      return;
    }

    // Save values before hiding (hide() clears them)
    const text = this.selectedText;
    const sourceInfo = { ...this.sourceInfo };

    // Hide popover before showing modal
    this.hide();

    // Open the modal with full source info
    const modal = getAddSnippetToProjectModal();
    modal.open(
      {
        text: text,
        sourceType: sourceInfo.type,
        sourceDocumentId: sourceInfo.documentId,
        sourceId: sourceInfo.sourceId,
        sourceLabel: sourceInfo.label
      },
      (result) => {
        if (result.success) {
          this._showSuccessToast(result.projectId, result.projectName, result.isNew);
        }
        // Clear the selection
        window.getSelection().removeAllRanges();
      }
    );
  }

  /**
   * Send selected text to NGT
   */
  _sendToNGT() {
    if (!this.selectedText) {
      console.error('TextSelectionPopover: No text selected');
      return;
    }

    // TODO: Implement NGT integration
    console.log('Send to NGT:', this.selectedText);
    
    // Show confirmation toast
    this._showNGTToast();
    this.hide();
    
    // Clear the selection
    window.getSelection().removeAllRanges();
  }

  /**
   * Show a toast notification for NGT
   */
  _showNGTToast() {
    const toast = document.createElement('div');
    toast.className = 'snippet-toast';
    toast.innerHTML = `
      <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
        <path fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm3.78-9.72a.75.75 0 0 0-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l4.5-4.5z"/>
      </svg>
      <span>Sent to <strong>NGT</strong></span>
    `;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('visible');
    });

    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.remove(), 200);
    }, 3000);
  }

  /**
   * Show a success toast notification
   */
  _showSuccessToast(projectId, projectName, isNew) {
    const actionText = isNew ? 'created and added to' : 'added to';
    
    const toast = document.createElement('div');
    toast.className = 'snippet-toast';
    toast.innerHTML = `
      <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
        <path fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm3.78-9.72a.75.75 0 0 0-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l4.5-4.5z"/>
      </svg>
      <span>Snippet ${actionText} <strong>${escapeHtml(projectName)}</strong></span>
      <a href="#/${projectId}?tab=snippets" class="toast-link">View</a>
    `;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('visible');
    });

    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.remove(), 200);
    }, 3000);
  }

  /**
   * Clean up event listeners
   */
  destroy() {
    if (this._boundHandlers.mouseup) {
      document.removeEventListener('mouseup', this._boundHandlers.mouseup);
    }
    if (this._boundHandlers.mousedown) {
      document.removeEventListener('mousedown', this._boundHandlers.mousedown);
    }
    if (this._boundHandlers.scroll) {
      document.removeEventListener('scroll', this._boundHandlers.scroll, true);
    }
    if (this._boundHandlers.keydown) {
      document.removeEventListener('keydown', this._boundHandlers.keydown);
    }
    
    this.popover?.remove();
  }
}

// Singleton instance
let textSelectionPopoverInstance = null;

/**
 * Get the singleton TextSelectionPopover instance
 * Initializes on first call
 * @returns {TextSelectionPopover}
 */
export function getTextSelectionPopover() {
  if (!textSelectionPopoverInstance) {
    textSelectionPopoverInstance = new TextSelectionPopover();
    textSelectionPopoverInstance.init();
  }
  return textSelectionPopoverInstance;
}

export default TextSelectionPopover;
