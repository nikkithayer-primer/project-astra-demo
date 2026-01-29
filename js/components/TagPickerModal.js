/**
 * TagPickerModal.js
 * Modal for selecting tags to apply to an entity
 * Supports multi-select and inline tag creation
 */

import { DataService } from '../data/DataService.js';
import { dataStore } from '../data/DataStore.js';

export class TagPickerModal {
  constructor() {
    this.modalContainer = document.getElementById('modal-container');
    this.modalContent = this.modalContainer?.querySelector('.modal-content');
    this.backdrop = this.modalContainer?.querySelector('.modal-backdrop');
    
    // Current entity being edited
    this.entityType = null;
    this.entityId = null;
    
    // Selected tag IDs (working copy)
    this.selectedTagIds = new Set();
    
    // Search filter
    this.searchQuery = '';
    
    // Callbacks
    this.onSaveCallback = null;
    
    // Bind handlers
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  /**
   * Open the tag picker for an entity
   * @param {string} entityType - Entity type ('narrative', 'person', etc.)
   * @param {string} entityId - Entity ID
   * @param {Function} onSave - Callback when tags are saved
   */
  open(entityType, entityId, onSave) {
    this.entityType = entityType;
    this.entityId = entityId;
    this.onSaveCallback = onSave;
    this.searchQuery = '';
    
    // Get current tags for the entity
    const currentTags = DataService.getTagsForEntity(entityType, entityId);
    this.selectedTagIds = new Set(currentTags.map(t => t.id));
    
    this.render();
    this.attachEventListeners();
  }

  /**
   * Render the modal
   */
  render() {
    if (!this.modalContainer || !this.modalContent) {
      console.error('TagPickerModal: Modal container not found');
      return;
    }

    const allTags = DataService.getTags();
    const filteredTags = this.searchQuery
      ? allTags.filter(t => t.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
      : allTags;

    this.modalContent.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">Manage Tags</h3>
        <button class="modal-close" aria-label="Close">&times;</button>
      </div>
      <div class="modal-body tag-picker-body">
        <div class="tag-picker-search">
          <input 
            type="text" 
            class="form-input" 
            id="tag-search" 
            placeholder="Search tags or type to create..."
            value="${this.escapeHtml(this.searchQuery)}"
          />
        </div>
        
        <div class="tag-picker-list">
          ${filteredTags.length === 0 && !this.searchQuery ? `
            <div class="tag-picker-empty">
              <p>No tags exist yet.</p>
              <p class="text-muted">Type a name above and press Enter to create one.</p>
            </div>
          ` : filteredTags.length === 0 ? `
            <div class="tag-picker-empty">
              <p>No tags match "${this.escapeHtml(this.searchQuery)}"</p>
              <button class="btn btn-small btn-primary" id="create-tag-btn">
                Create "${this.escapeHtml(this.searchQuery)}"
              </button>
            </div>
          ` : `
            ${filteredTags.map(tag => this.renderTagRow(tag)).join('')}
          `}
        </div>
        
        ${this.searchQuery && filteredTags.length > 0 && !filteredTags.some(t => t.name.toLowerCase() === this.searchQuery.toLowerCase()) ? `
          <div class="tag-picker-create">
            <button class="btn btn-small btn-secondary" id="create-tag-btn">
              Create new tag "${this.escapeHtml(this.searchQuery)}"
            </button>
          </div>
        ` : ''}
      </div>
      <div class="modal-footer">
        <button class="btn" id="tag-picker-cancel">Cancel</button>
        <button class="btn btn-primary" id="tag-picker-save">Apply Tags</button>
      </div>
    `;

    // Show modal
    this.modalContainer.classList.remove('hidden');
    
    // Focus search input
    setTimeout(() => {
      const searchInput = this.modalContent.querySelector('#tag-search');
      searchInput?.focus();
    }, 100);
  }

  /**
   * Render a single tag row with checkbox
   */
  renderTagRow(tag) {
    const isSelected = this.selectedTagIds.has(tag.id);
    const counts = DataService.getTagCountsByEntityType(tag.id);
    const totalCount = Object.values(counts).reduce((sum, c) => sum + c, 0);
    
    return `
      <label class="tag-picker-row ${isSelected ? 'selected' : ''}" data-tag-id="${tag.id}">
        <input 
          type="checkbox" 
          class="tag-picker-checkbox" 
          ${isSelected ? 'checked' : ''}
          data-tag-id="${tag.id}"
        />
        <span class="tag-picker-color" style="background-color: ${tag.color || '#6b7280'}"></span>
        <span class="tag-picker-name">${this.escapeHtml(tag.name)}</span>
        <span class="tag-picker-count">${totalCount}</span>
      </label>
    `;
  }

  /**
   * Attach event listeners
   */
  attachEventListeners() {
    // Close handlers
    this.backdrop?.addEventListener('click', this.handleBackdropClick);
    document.addEventListener('keydown', this.handleKeyDown);
    
    const closeBtn = this.modalContent.querySelector('.modal-close');
    const cancelBtn = this.modalContent.querySelector('#tag-picker-cancel');
    const saveBtn = this.modalContent.querySelector('#tag-picker-save');
    
    closeBtn?.addEventListener('click', () => this.close());
    cancelBtn?.addEventListener('click', () => this.close());
    saveBtn?.addEventListener('click', () => this.save());
    
    // Search input
    const searchInput = this.modalContent.querySelector('#tag-search');
    searchInput?.addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      this.updateList();
    });
    
    searchInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && this.searchQuery.trim()) {
        e.preventDefault();
        this.createTag(this.searchQuery.trim());
      }
    });
    
    // Create tag button
    const createBtn = this.modalContent.querySelector('#create-tag-btn');
    createBtn?.addEventListener('click', () => {
      if (this.searchQuery.trim()) {
        this.createTag(this.searchQuery.trim());
      }
    });
    
    // Checkbox changes
    this.modalContent.addEventListener('change', (e) => {
      if (e.target.classList.contains('tag-picker-checkbox')) {
        const tagId = e.target.dataset.tagId;
        if (e.target.checked) {
          this.selectedTagIds.add(tagId);
        } else {
          this.selectedTagIds.delete(tagId);
        }
        // Update row visual state
        const row = e.target.closest('.tag-picker-row');
        row?.classList.toggle('selected', e.target.checked);
      }
    });
  }

  /**
   * Update the tag list (preserving selections)
   */
  updateList() {
    const listContainer = this.modalContent.querySelector('.tag-picker-list');
    const createContainer = this.modalContent.querySelector('.tag-picker-create');
    
    const allTags = DataService.getTags();
    const filteredTags = this.searchQuery
      ? allTags.filter(t => t.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
      : allTags;

    if (listContainer) {
      if (filteredTags.length === 0 && !this.searchQuery) {
        listContainer.innerHTML = `
          <div class="tag-picker-empty">
            <p>No tags exist yet.</p>
            <p class="text-muted">Type a name above and press Enter to create one.</p>
          </div>
        `;
      } else if (filteredTags.length === 0) {
        listContainer.innerHTML = `
          <div class="tag-picker-empty">
            <p>No tags match "${this.escapeHtml(this.searchQuery)}"</p>
            <button class="btn btn-small btn-primary" id="create-tag-btn">
              Create "${this.escapeHtml(this.searchQuery)}"
            </button>
          </div>
        `;
        // Re-attach create button listener
        const createBtn = listContainer.querySelector('#create-tag-btn');
        createBtn?.addEventListener('click', () => {
          if (this.searchQuery.trim()) {
            this.createTag(this.searchQuery.trim());
          }
        });
      } else {
        listContainer.innerHTML = filteredTags.map(tag => this.renderTagRow(tag)).join('');
      }
    }

    // Update or add create section
    if (createContainer) {
      if (this.searchQuery && filteredTags.length > 0 && !filteredTags.some(t => t.name.toLowerCase() === this.searchQuery.toLowerCase())) {
        createContainer.innerHTML = `
          <button class="btn btn-small btn-secondary" id="create-tag-btn">
            Create new tag "${this.escapeHtml(this.searchQuery)}"
          </button>
        `;
        const createBtn = createContainer.querySelector('#create-tag-btn');
        createBtn?.addEventListener('click', () => {
          if (this.searchQuery.trim()) {
            this.createTag(this.searchQuery.trim());
          }
        });
      } else {
        createContainer.innerHTML = '';
      }
    }
  }

  /**
   * Create a new tag and select it
   */
  createTag(name) {
    const tagId = DataService.createTag({ name });
    if (tagId) {
      this.selectedTagIds.add(tagId);
      this.searchQuery = '';
      const searchInput = this.modalContent.querySelector('#tag-search');
      if (searchInput) searchInput.value = '';
      this.updateList();
    }
  }

  /**
   * Save the tag selections
   */
  save() {
    const tagIds = Array.from(this.selectedTagIds);
    const success = DataService.setEntityTags(this.entityType, this.entityId, tagIds);
    
    if (success && this.onSaveCallback) {
      this.onSaveCallback(tagIds);
    }
    
    this.close();
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
    
    // Reset state
    this.entityType = null;
    this.entityId = null;
    this.selectedTagIds.clear();
    this.searchQuery = '';
    this.onSaveCallback = null;
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
   * Escape HTML to prevent XSS
   */
  escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Singleton instance
let tagPickerInstance = null;

/**
 * Get the singleton TagPickerModal instance
 * @returns {TagPickerModal}
 */
export function getTagPicker() {
  if (!tagPickerInstance) {
    tagPickerInstance = new TagPickerModal();
  }
  return tagPickerInstance;
}

export default TagPickerModal;
