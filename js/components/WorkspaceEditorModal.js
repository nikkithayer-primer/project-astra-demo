/**
 * WorkspaceEditorModal.js
 * Modal component for creating and editing workspaces
 */

import { dataStore } from '../data/DataStore.js';

export class WorkspaceEditorModal {
  constructor() {
    this.modalContainer = document.getElementById('modal-container');
    this.modalContent = this.modalContainer?.querySelector('.modal-content');
    this.backdrop = this.modalContainer?.querySelector('.modal-backdrop');
    
    // Current workspace being edited (null for create mode)
    this.editingWorkspace = null;
    
    // Form state
    this.formState = {
      name: '',
      query: '',
      description: '',
      documentIds: []
    };
    
    // Callback for when save completes
    this.onSaveCallback = null;
    
    // Bind handlers
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  /**
   * Open the modal for creating a new workspace
   * @param {Function} onSave - Callback when workspace is saved
   * @param {Object} initialData - Optional initial data (e.g., from search)
   */
  openCreate(onSave, initialData = {}) {
    this.editingWorkspace = null;
    this.onSaveCallback = onSave;
    this.formState = {
      name: initialData.name || '',
      query: initialData.query || '',
      description: initialData.description || '',
      documentIds: initialData.documentIds || []
    };
    this.render('Create Workspace');
  }

  /**
   * Open the modal for editing an existing workspace
   * @param {Object} workspace - The workspace to edit
   * @param {Function} onSave - Callback when workspace is saved
   */
  openEdit(workspace, onSave) {
    this.editingWorkspace = workspace;
    this.onSaveCallback = onSave;
    
    this.formState = {
      name: workspace.name || '',
      query: workspace.query || '',
      description: workspace.description || '',
      documentIds: [...(workspace.documentIds || [])]
    };
    
    this.render('Edit Workspace');
  }

  /**
   * Render the modal content
   */
  render(title) {
    if (!this.modalContainer || !this.modalContent) {
      console.error('Modal container not found');
      return;
    }

    const docCount = this.formState.documentIds.length;
    const docCountText = docCount > 0 
      ? `<span class="badge">${docCount} document${docCount !== 1 ? 's' : ''} selected</span>`
      : '';
    const isEditMode = !!this.editingWorkspace;

    // Search Query field only shown in create mode
    const queryFieldHtml = !isEditMode ? `
      <div class="form-group">
        <label class="form-label" for="workspace-query">Search Query</label>
        <input 
          type="text" 
          id="workspace-query" 
          class="form-input" 
          placeholder="e.g., pricing controversy customer complaints"
          value="${this.escapeHtml(this.formState.query)}"
        />
        <p class="form-hint">Keywords used to find relevant documents</p>
      </div>
    ` : '';

    this.modalContent.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">${title}</h3>
        <button class="modal-close" aria-label="Close">&times;</button>
      </div>
      <div class="modal-body workspace-editor-body">
        <div class="workspace-editor-form">
          <!-- Workspace Name -->
          <div class="form-group">
            <label class="form-label" for="workspace-name">Workspace Name <span class="text-danger">*</span></label>
            <input 
              type="text" 
              id="workspace-name" 
              class="form-input" 
              placeholder="e.g., Q1 Campaign Analysis"
              value="${this.escapeHtml(this.formState.name)}"
            />
          </div>
          
          ${queryFieldHtml}
          
          <!-- Description -->
          <div class="form-group">
            <label class="form-label" for="workspace-description">Description</label>
            <textarea 
              id="workspace-description" 
              class="form-input form-textarea" 
              placeholder="What is this workspace for?"
              rows="3"
            >${this.escapeHtml(this.formState.description)}</textarea>
          </div>
          
          ${docCountText ? `
            <div class="form-group">
              <label class="form-label">Documents</label>
              ${docCountText}
            </div>
          ` : ''}
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" id="workspace-cancel-btn">Cancel</button>
        <button class="btn btn-primary" id="workspace-save-btn">
          ${this.editingWorkspace ? 'Save Changes' : 'Create Workspace'}
        </button>
      </div>
    `;

    // Blur any currently focused element to prevent autofocus conflicts
    if (document.activeElement) {
      document.activeElement.blur();
    }

    // Show modal
    this.modalContainer.classList.remove('hidden');
    this.modalContent.classList.add('workspace-editor-modal');
    document.body.style.overflow = 'hidden';

    // Set up event listeners
    this.setupEventListeners();

    // Focus the name input after a short delay
    setTimeout(() => {
      const nameInput = document.getElementById('workspace-name');
      if (nameInput) nameInput.focus();
    }, 50);
  }

  /**
   * Set up event listeners for the modal
   */
  setupEventListeners() {
    // Close button
    const closeBtn = this.modalContent.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    // Cancel button
    const cancelBtn = document.getElementById('workspace-cancel-btn');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => this.close());
    }

    // Save button
    const saveBtn = document.getElementById('workspace-save-btn');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => this.save());
    }

    // Form inputs - update state on change
    const nameInput = document.getElementById('workspace-name');
    const queryInput = document.getElementById('workspace-query');
    const descInput = document.getElementById('workspace-description');

    if (nameInput) {
      nameInput.addEventListener('input', (e) => {
        this.formState.name = e.target.value;
      });
    }

    if (queryInput) {
      queryInput.addEventListener('input', (e) => {
        this.formState.query = e.target.value;
      });
    }

    if (descInput) {
      descInput.addEventListener('input', (e) => {
        this.formState.description = e.target.value;
      });
    }

    // Enter key to submit (in single-line inputs)
    if (nameInput) {
      nameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.save();
        }
      });
    }

    if (queryInput) {
      queryInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.save();
        }
      });
    }

    // Backdrop click to close
    if (this.backdrop) {
      this.backdrop.addEventListener('click', this.handleBackdropClick);
    }

    // Escape key to close
    document.addEventListener('keydown', this.handleKeyDown);
  }

  /**
   * Handle backdrop click
   */
  handleBackdropClick(e) {
    if (e.target === this.backdrop) {
      this.close();
    }
  }

  /**
   * Handle keydown events
   */
  handleKeyDown(e) {
    if (e.key === 'Escape') {
      this.close();
    }
  }

  /**
   * Validate and save the workspace
   */
  save() {
    // Validate required fields
    const name = this.formState.name.trim();
    if (!name) {
      this.showError('Please enter a workspace name');
      const nameInput = document.getElementById('workspace-name');
      if (nameInput) nameInput.focus();
      return;
    }

    try {
      let workspaceId;
      
      if (this.editingWorkspace) {
        // Update existing workspace
        dataStore.updateWorkspace(this.editingWorkspace.id, {
          name: name,
          query: this.formState.query.trim(),
          description: this.formState.description.trim(),
          documentIds: this.formState.documentIds
        });
        workspaceId = this.editingWorkspace.id;
      } else {
        // Create new workspace - returns the ID
        workspaceId = dataStore.createWorkspace({
          name: name,
          query: this.formState.query.trim(),
          description: this.formState.description.trim(),
          documentIds: this.formState.documentIds,
          status: 'active'
        });
      }

      // Close modal
      this.close();

      // Call success callback with workspace object
      if (this.onSaveCallback && workspaceId) {
        // Fetch the full workspace to pass to callback
        const workspace = (dataStore.data.workspaces || []).find(w => w.id === workspaceId);
        this.onSaveCallback(workspace || { id: workspaceId });
      }
    } catch (error) {
      console.error('Error saving workspace:', error);
      this.showError('Failed to save workspace. Please try again.');
    }
  }

  /**
   * Show an error message in the modal
   */
  showError(message) {
    // Remove existing error
    const existingError = this.modalContent.querySelector('.form-error-message');
    if (existingError) existingError.remove();

    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error-message';
    errorDiv.innerHTML = `
      <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
        <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 10.5a.75.75 0 110-1.5.75.75 0 010 1.5zm.75-3a.75.75 0 01-1.5 0V5a.75.75 0 011.5 0v3.5z"/>
      </svg>
      ${this.escapeHtml(message)}
    `;
    
    const modalBody = this.modalContent.querySelector('.modal-body');
    if (modalBody) {
      modalBody.insertBefore(errorDiv, modalBody.firstChild);
    }

    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (errorDiv.parentNode) errorDiv.remove();
    }, 5000);
  }

  /**
   * Close the modal
   */
  close() {
    // Clean up event listeners
    if (this.backdrop) {
      this.backdrop.removeEventListener('click', this.handleBackdropClick);
    }
    document.removeEventListener('keydown', this.handleKeyDown);

    // Hide modal
    if (this.modalContainer) {
      this.modalContainer.classList.add('hidden');
    }
    document.body.style.overflow = '';

    // Reset state
    this.editingWorkspace = null;
    this.onSaveCallback = null;
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
}

// Singleton instance
let workspaceEditorInstance = null;

/**
 * Get the singleton workspace editor instance
 * @returns {WorkspaceEditorModal}
 */
export function getWorkspaceEditor() {
  if (!workspaceEditorInstance) {
    workspaceEditorInstance = new WorkspaceEditorModal();
  }
  return workspaceEditorInstance;
}
