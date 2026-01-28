/**
 * MonitorEditorModal.js
 * Modal component for creating and editing monitors
 * Uses ScopeSelector component for entity/keyword selection
 */

import { dataStore } from '../data/DataStore.js';
import { ScopeSelector } from './ScopeSelector.js';

export class MonitorEditorModal {
  constructor() {
    this.modalContainer = document.getElementById('modal-container');
    this.modalContent = this.modalContainer?.querySelector('.modal-content');
    this.backdrop = this.modalContainer?.querySelector('.modal-backdrop');
    
    // Current monitor being edited (null for create mode)
    this.editingMonitor = null;
    
    // Form state (name and logic only - scope managed by ScopeSelector)
    this.formState = {
      name: '',
      logic: 'OR'
    };
    
    // ScopeSelector instance
    this.scopeSelector = null;
    
    // Callback for when save completes
    this.onSaveCallback = null;
    
    // Bind handlers
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  /**
   * Open the modal for creating a new monitor
   * @param {Function} onSave - Callback when monitor is saved
   */
  openCreate(onSave) {
    this.editingMonitor = null;
    this.onSaveCallback = onSave;
    this.formState = {
      name: '',
      logic: 'OR'
    };
    this.render('Create Monitor');
    
    // Initialize ScopeSelector with empty scope
    this.initScopeSelector({});
  }

  /**
   * Open the modal for editing an existing monitor
   * @param {Object} monitor - The monitor to edit
   * @param {Function} onSave - Callback when monitor is saved
   */
  openEdit(monitor, onSave) {
    this.editingMonitor = monitor;
    this.onSaveCallback = onSave;
    
    this.formState = {
      name: monitor.name || '',
      logic: monitor.scope?.logic || 'OR'
    };
    
    this.render('Edit Monitor');
    
    // Initialize ScopeSelector with monitor's scope
    this.initScopeSelector(monitor.scope || {});
  }

  /**
   * Initialize the ScopeSelector component
   */
  initScopeSelector(scope) {
    const container = this.modalContent?.querySelector('#scope-selector-container');
    if (!container) {
      console.error('MonitorEditorModal: Scope selector container not found');
      return;
    }
    
    // Create ScopeSelector instance
    this.scopeSelector = new ScopeSelector(container, {
      showSaveFilter: true,
      showSearchFilters: true,
      onChange: (newScope) => {
        // Scope changes are handled internally by ScopeSelector
        // We just need to get the scope when saving
      }
    });
    
    // Set initial scope and render
    this.scopeSelector.setScope(scope);
  }

  /**
   * Render the modal content
   */
  render(title) {
    if (!this.modalContainer || !this.modalContent) {
      console.error('Modal container not found');
      return;
    }

    this.modalContent.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">${title}</h3>
        <button class="modal-close" aria-label="Close">&times;</button>
      </div>
      <div class="modal-body monitor-editor-body">
        <div class="monitor-editor-form">
          <!-- Monitor Name -->
          <div class="form-group">
            <label class="form-label" for="monitor-name">Monitor Name</label>
            <input 
              type="text" 
              id="monitor-name" 
              class="form-input" 
              placeholder="Enter monitor name..."
              value="${this.escapeHtml(this.formState.name)}"
            />
          </div>
          
          <!-- Scope Logic -->
          <div class="form-group">
            <label class="form-label">Scope Logic</label>
            <div class="scope-logic-toggle">
              <label class="radio-label">
                <input 
                  type="radio" 
                  name="scope-logic" 
                  value="OR" 
                  ${this.formState.logic === 'OR' ? 'checked' : ''}
                />
                <span class="radio-text">
                  <strong>OR</strong>
                  <span class="radio-desc">Match any selected item</span>
                </span>
              </label>
              <label class="radio-label">
                <input 
                  type="radio" 
                  name="scope-logic" 
                  value="AND" 
                  ${this.formState.logic === 'AND' ? 'checked' : ''}
                />
                <span class="radio-text">
                  <strong>AND</strong>
                  <span class="radio-desc">Match all selected items</span>
                </span>
              </label>
            </div>
          </div>
          
          <!-- Scope Selector -->
          <div class="form-group">
            <label class="form-label">Scope</label>
            <p class="form-help-text">Type to filter entities or press Enter to add as keyword</p>
            <div id="scope-selector-container"></div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" id="monitor-cancel">Cancel</button>
        <button class="btn btn-primary" id="monitor-save">Save Monitor</button>
      </div>
    `;

    // Show modal
    this.modalContainer.classList.remove('hidden');
    this.modalContent.classList.add('monitor-editor-modal');

    // Add event listeners
    this.attachEventListeners();
  }

  /**
   * Attach event listeners
   */
  attachEventListeners() {
    // Close button
    const closeBtn = this.modalContent.querySelector('.modal-close');
    closeBtn?.addEventListener('click', () => this.close());
    
    // Cancel button
    const cancelBtn = this.modalContent.querySelector('#monitor-cancel');
    cancelBtn?.addEventListener('click', () => this.close());
    
    // Save button
    const saveBtn = this.modalContent.querySelector('#monitor-save');
    saveBtn?.addEventListener('click', () => this.save());
    
    // Monitor name input
    const nameInput = this.modalContent.querySelector('#monitor-name');
    nameInput?.addEventListener('input', (e) => {
      this.formState.name = e.target.value;
    });
    
    // Scope logic radio buttons
    const logicRadios = this.modalContent.querySelectorAll('input[name="scope-logic"]');
    logicRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.formState.logic = e.target.value;
      });
    });
    
    // Backdrop click
    this.backdrop?.addEventListener('click', this.handleBackdropClick);
    
    // Escape key
    document.addEventListener('keydown', this.handleKeyDown);
  }

  /**
   * Save the monitor
   */
  save() {
    // Validate name
    if (!this.formState.name.trim()) {
      alert('Please enter a monitor name');
      return;
    }
    
    // Get scope from ScopeSelector
    const scope = this.scopeSelector?.getScope() || {};
    
    // Check if at least one entity or keyword is selected
    const hasEntities = Object.keys(scope)
      .some(k => Array.isArray(scope[k]) && scope[k].length > 0);
    
    if (!hasEntities) {
      alert('Please select at least one entity or keyword to monitor');
      return;
    }
    
    // Build the full scope with logic
    const fullScope = {
      ...scope,
      logic: this.formState.logic
    };
    
    if (this.editingMonitor) {
      // Update existing monitor
      dataStore.updateMonitor(this.editingMonitor.id, {
        name: this.formState.name.trim(),
        scope: fullScope
      });
    } else {
      // Create new monitor
      dataStore.createMonitor({
        name: this.formState.name.trim(),
        scope: fullScope
      });
    }
    
    this.close();
    
    if (this.onSaveCallback) {
      this.onSaveCallback();
    }
  }

  /**
   * Close the modal
   */
  close() {
    if (this.modalContainer) {
      this.modalContainer.classList.add('hidden');
    }
    if (this.modalContent) {
      this.modalContent.classList.remove('monitor-editor-modal');
    }
    
    // Clean up ScopeSelector
    if (this.scopeSelector) {
      this.scopeSelector.destroy();
      this.scopeSelector = null;
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

  /**
   * Escape HTML for safe rendering
   */
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Singleton instance
let monitorEditorInstance = null;

/**
 * Get the singleton MonitorEditorModal instance
 * @returns {MonitorEditorModal}
 */
export function getMonitorEditor() {
  if (!monitorEditorInstance) {
    monitorEditorInstance = new MonitorEditorModal();
  }
  return monitorEditorInstance;
}

export default MonitorEditorModal;
