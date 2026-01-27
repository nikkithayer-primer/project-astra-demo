/**
 * SourceViewerModal.js
 * Modal for viewing the aggregated sources that contribute to a narrative/theme
 */

export class SourceViewerModal {
  constructor() {
    this.modalContainer = document.getElementById('modal-container');
    this.modalContent = this.modalContainer?.querySelector('.modal-content');
    this.backdrop = this.modalContainer?.querySelector('.modal-backdrop');
    
    // Bind close handlers
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  /**
   * Open the source viewer modal for a narrative or theme
   * @param {Object} item - The narrative or theme object
   * @param {string} type - 'narrative' or 'subnarrative'
   */
  open(item, type = 'narrative') {
    if (!this.modalContainer || !this.modalContent) {
      console.error('Modal container not found');
      return;
    }

    const typeLabel = type === 'subnarrative' ? 'Theme' : 'Narrative';

    this.modalContent.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">Source Viewer</h3>
        <button class="modal-close" aria-label="Close">&times;</button>
      </div>
      <div class="modal-body">
        <div class="source-viewer-content">
          <div class="source-viewer-item-info">
            <span class="source-viewer-type">${typeLabel}</span>
            <h4 class="source-viewer-title">${item.text || 'Untitled'}</h4>
          </div>
          <div class="source-viewer-placeholder">
            <div class="source-viewer-icon">📄</div>
            <p class="source-viewer-message">Source documents will be displayed here.</p>
            <p class="source-viewer-hint">This view aggregates the original documents, articles, and posts that contributed to this ${typeLabel.toLowerCase()}.</p>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn" id="source-viewer-close">Close</button>
      </div>
    `;

    // Show modal
    this.modalContainer.classList.remove('hidden');

    // Add event listeners
    this.backdrop?.addEventListener('click', this.handleBackdropClick);
    document.addEventListener('keydown', this.handleKeyDown);
    
    const closeBtn = this.modalContent.querySelector('.modal-close');
    const footerCloseBtn = this.modalContent.querySelector('#source-viewer-close');
    
    closeBtn?.addEventListener('click', () => this.close());
    footerCloseBtn?.addEventListener('click', () => this.close());
  }

  /**
   * Close the modal
   */
  close() {
    if (this.modalContainer) {
      this.modalContainer.classList.add('hidden');
    }

    // Remove event listeners
    this.backdrop?.removeEventListener('click', this.handleBackdropClick);
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleBackdropClick(e) {
    if (e.target === this.backdrop) {
      this.close();
    }
  }

  handleKeyDown(e) {
    if (e.key === 'Escape') {
      this.close();
    }
  }
}

// Singleton instance
let sourceViewerInstance = null;

/**
 * Get the singleton SourceViewerModal instance
 * @returns {SourceViewerModal}
 */
export function getSourceViewer() {
  if (!sourceViewerInstance) {
    sourceViewerInstance = new SourceViewerModal();
  }
  return sourceViewerInstance;
}

export default SourceViewerModal;
