/**
 * MonitorEditorModal.js
 * Modal component for creating and editing monitors
 */

import { DataService } from '../data/DataService.js';
import { dataStore } from '../data/DataStore.js';

export class MonitorEditorModal {
  constructor() {
    this.modalContainer = document.getElementById('modal-container');
    this.modalContent = this.modalContainer?.querySelector('.modal-content');
    this.backdrop = this.modalContainer?.querySelector('.modal-backdrop');
    
    // Current monitor being edited (null for create mode)
    this.editingMonitor = null;
    
    // Form state
    this.formState = {
      name: '',
      scope: {
        personIds: [],
        organizationIds: [],
        factionIds: [],
        locationIds: [],
        eventIds: [],
        narrativeIds: [],
        themeIds: [],
        logic: 'OR'
      }
    };
    
    // Expanded sections state
    this.expandedSections = new Set(['persons']); // Start with persons expanded
    
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
      scope: {
        personIds: [],
        organizationIds: [],
        factionIds: [],
        locationIds: [],
        eventIds: [],
        narrativeIds: [],
        themeIds: [],
        logic: 'OR'
      }
    };
    this.expandedSections = new Set(['persons']);
    this.render('Create Monitor');
  }

  /**
   * Open the modal for editing an existing monitor
   * @param {Object} monitor - The monitor to edit
   * @param {Function} onSave - Callback when monitor is saved
   */
  openEdit(monitor, onSave) {
    this.editingMonitor = monitor;
    this.onSaveCallback = onSave;
    
    // Deep clone the scope to avoid mutating original
    this.formState = {
      name: monitor.name || '',
      scope: {
        personIds: [...(monitor.scope?.personIds || [])],
        organizationIds: [...(monitor.scope?.organizationIds || [])],
        factionIds: [...(monitor.scope?.factionIds || [])],
        locationIds: [...(monitor.scope?.locationIds || [])],
        eventIds: [...(monitor.scope?.eventIds || [])],
        narrativeIds: [...(monitor.scope?.narrativeIds || [])],
        themeIds: [...(monitor.scope?.themeIds || [])],
        logic: monitor.scope?.logic || 'OR'
      }
    };
    
    // Expand sections that have items
    this.expandedSections = new Set();
    if (this.formState.scope.personIds.length > 0) this.expandedSections.add('persons');
    if (this.formState.scope.organizationIds.length > 0) this.expandedSections.add('organizations');
    if (this.formState.scope.factionIds.length > 0) this.expandedSections.add('factions');
    if (this.formState.scope.locationIds.length > 0) this.expandedSections.add('locations');
    if (this.formState.scope.eventIds.length > 0) this.expandedSections.add('events');
    if (this.formState.scope.narrativeIds.length > 0) this.expandedSections.add('narratives');
    if (this.formState.scope.themeIds.length > 0) this.expandedSections.add('themes');
    
    // If nothing expanded, expand persons by default
    if (this.expandedSections.size === 0) {
      this.expandedSections.add('persons');
    }
    
    this.render('Edit Monitor');
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
                  ${this.formState.scope.logic === 'OR' ? 'checked' : ''}
                />
                <span class="radio-text">
                  <strong>OR</strong>
                  <span class="radio-desc">Match any selected entity</span>
                </span>
              </label>
              <label class="radio-label">
                <input 
                  type="radio" 
                  name="scope-logic" 
                  value="AND" 
                  ${this.formState.scope.logic === 'AND' ? 'checked' : ''}
                />
                <span class="radio-text">
                  <strong>AND</strong>
                  <span class="radio-desc">Match all selected entities</span>
                </span>
              </label>
            </div>
          </div>
          
          <!-- Entity Selector -->
          <div class="form-group">
            <label class="form-label">Scope Entities</label>
            <div class="entity-selector">
              ${this.renderEntitySection('persons', 'Persons', 'personIds', DataService.getPersons())}
              ${this.renderEntitySection('organizations', 'Organizations', 'organizationIds', DataService.getOrganizations())}
              ${this.renderEntitySection('factions', 'Factions', 'factionIds', DataService.getFactions())}
              ${this.renderEntitySection('locations', 'Locations', 'locationIds', DataService.getLocations())}
              ${this.renderEntitySection('events', 'Events', 'eventIds', DataService.getEvents())}
              ${this.renderEntitySection('narratives', 'Narratives', 'narrativeIds', DataService.getNarratives())}
              ${this.renderEntitySection('themes', 'Themes', 'themeIds', DataService.getSubNarratives())}
            </div>
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
   * Render an entity section (collapsible)
   */
  renderEntitySection(sectionId, label, scopeKey, entities) {
    const selectedIds = this.formState.scope[scopeKey] || [];
    const isExpanded = this.expandedSections.has(sectionId);
    const selectedCount = selectedIds.length;
    const totalCount = entities.length;
    
    // Get display text for entities
    const getEntityText = (entity) => {
      return entity.name || entity.text || entity.headline || 'Unnamed';
    };
    
    // Render selected entity chips
    const selectedChips = selectedIds.map(id => {
      const entity = entities.find(e => e.id === id);
      if (!entity) return '';
      return `
        <span class="entity-chip" data-id="${id}" data-scope-key="${scopeKey}">
          ${this.escapeHtml(getEntityText(entity))}
          <button class="chip-remove" aria-label="Remove">&times;</button>
        </span>
      `;
    }).join('');

    return `
      <div class="entity-section ${isExpanded ? 'expanded' : ''}" data-section="${sectionId}">
        <button class="entity-section-header" data-section="${sectionId}">
          <svg class="section-chevron" viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 6l4 4 4-4"/>
          </svg>
          <span class="section-label">${label}</span>
          <span class="section-count-total" title="Total available">(${totalCount})</span>
          <span class="section-count-selected" title="Selected">${selectedCount} selected</span>
        </button>
        <div class="entity-section-content">
          <div class="selected-entities">
            ${selectedChips}
          </div>
          <div class="entity-list-wrapper">
            <input 
              type="text" 
              class="entity-search-input" 
              placeholder="Filter ${label.toLowerCase()}..."
              data-scope-key="${scopeKey}"
              data-section="${sectionId}"
            />
            <div class="entity-list" data-scope-key="${scopeKey}">
              ${this.renderEntityList(entities, selectedIds, scopeKey)}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Render entity list (visible, scrollable)
   */
  renderEntityList(entities, selectedIds, scopeKey, filterText = '') {
    const getEntityText = (entity) => {
      return entity.name || entity.text || entity.headline || 'Unnamed';
    };
    
    // Filter by search text
    const filteredEntities = filterText
      ? entities.filter(e => getEntityText(e).toLowerCase().includes(filterText.toLowerCase()))
      : entities;
    
    // Sort: unselected first, then selected (so users can easily find what to add)
    const sortedEntities = [...filteredEntities].sort((a, b) => {
      const aSelected = selectedIds.includes(a.id);
      const bSelected = selectedIds.includes(b.id);
      if (aSelected && !bSelected) return 1;
      if (!aSelected && bSelected) return -1;
      return getEntityText(a).localeCompare(getEntityText(b));
    });
    
    if (sortedEntities.length === 0) {
      return `<div class="entity-list-empty">No ${filterText ? 'matching ' : ''}items found</div>`;
    }
    
    return sortedEntities.map(entity => {
      const isSelected = selectedIds.includes(entity.id);
      return `
        <button class="entity-list-item ${isSelected ? 'selected' : ''}" 
                data-id="${entity.id}" 
                data-scope-key="${scopeKey}"
                ${isSelected ? 'disabled' : ''}>
          ${isSelected 
            ? '<span class="entity-list-item-check">✓</span>' 
            : '<span class="entity-list-item-add">+</span>'}
          <span class="entity-list-item-name">${this.escapeHtml(getEntityText(entity))}</span>
        </button>
      `;
    }).join('');
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
        this.formState.scope.logic = e.target.value;
      });
    });
    
    // Section headers (collapse/expand)
    const sectionHeaders = this.modalContent.querySelectorAll('.entity-section-header');
    sectionHeaders.forEach(header => {
      header.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = header.dataset.section;
        this.toggleSection(sectionId);
      });
    });
    
    // Entity search inputs - filter the list as user types
    const searchInputs = this.modalContent.querySelectorAll('.entity-search-input');
    searchInputs.forEach(input => {
      input.addEventListener('input', (e) => this.filterEntityList(input, e.target.value));
    });
    
    // Entity list item clicks and chip remove clicks
    this.modalContent.addEventListener('click', (e) => {
      // Handle list item click (add entity)
      const listItem = e.target.closest('.entity-list-item');
      if (listItem && !listItem.disabled) {
        e.preventDefault();
        this.selectEntity(listItem.dataset.id, listItem.dataset.scopeKey);
      }
      
      // Handle chip remove click
      const chipRemove = e.target.closest('.chip-remove');
      if (chipRemove) {
        e.preventDefault();
        const chip = chipRemove.closest('.entity-chip');
        if (chip) {
          this.removeEntity(chip.dataset.id, chip.dataset.scopeKey);
        }
      }
    });
    
    // Backdrop click
    this.backdrop?.addEventListener('click', this.handleBackdropClick);
    
    // Escape key
    document.addEventListener('keydown', this.handleKeyDown);
  }

  /**
   * Toggle section expand/collapse
   */
  toggleSection(sectionId) {
    if (this.expandedSections.has(sectionId)) {
      this.expandedSections.delete(sectionId);
    } else {
      this.expandedSections.add(sectionId);
    }
    
    const section = this.modalContent.querySelector(`.entity-section[data-section="${sectionId}"]`);
    if (section) {
      section.classList.toggle('expanded', this.expandedSections.has(sectionId));
    }
  }

  /**
   * Filter entity list based on search input
   */
  filterEntityList(input, filterText) {
    const scopeKey = input.dataset.scopeKey;
    const listContainer = input.parentElement.querySelector('.entity-list');
    if (!listContainer) return;
    
    // Get entities based on scope key
    const entitiesMap = {
      personIds: DataService.getPersons(),
      organizationIds: DataService.getOrganizations(),
      factionIds: DataService.getFactions(),
      locationIds: DataService.getLocations(),
      eventIds: DataService.getEvents(),
      narrativeIds: DataService.getNarratives(),
      themeIds: DataService.getSubNarratives()
    };
    
    const entities = entitiesMap[scopeKey] || [];
    const selectedIds = this.formState.scope[scopeKey] || [];
    
    listContainer.innerHTML = this.renderEntityList(entities, selectedIds, scopeKey, filterText);
  }

  /**
   * Select an entity
   */
  selectEntity(id, scopeKey) {
    if (!this.formState.scope[scopeKey].includes(id)) {
      this.formState.scope[scopeKey].push(id);
      this.refreshSection(scopeKey);
    }
  }

  /**
   * Remove an entity
   */
  removeEntity(id, scopeKey) {
    this.formState.scope[scopeKey] = this.formState.scope[scopeKey].filter(eid => eid !== id);
    this.refreshSection(scopeKey);
  }

  /**
   * Refresh a section after selection change
   */
  refreshSection(scopeKey) {
    const sectionMap = {
      personIds: 'persons',
      organizationIds: 'organizations',
      factionIds: 'factions',
      locationIds: 'locations',
      eventIds: 'events',
      narrativeIds: 'narratives',
      themeIds: 'themes'
    };
    
    const entitiesMap = {
      personIds: DataService.getPersons(),
      organizationIds: DataService.getOrganizations(),
      factionIds: DataService.getFactions(),
      locationIds: DataService.getLocations(),
      eventIds: DataService.getEvents(),
      narrativeIds: DataService.getNarratives(),
      themeIds: DataService.getSubNarratives()
    };
    
    const sectionId = sectionMap[scopeKey];
    const section = this.modalContent.querySelector(`.entity-section[data-section="${sectionId}"]`);
    if (!section) return;
    
    const entities = entitiesMap[scopeKey];
    const selectedIds = this.formState.scope[scopeKey];
    
    // Update selected count
    const selectedCountEl = section.querySelector('.section-count-selected');
    if (selectedCountEl) {
      selectedCountEl.textContent = `${selectedIds.length} selected`;
    }
    
    // Update chips
    const getEntityText = (entity) => {
      return entity.name || entity.text || entity.headline || 'Unnamed';
    };
    
    const chipsContainer = section.querySelector('.selected-entities');
    if (chipsContainer) {
      chipsContainer.innerHTML = selectedIds.map(id => {
        const entity = entities.find(e => e.id === id);
        if (!entity) return '';
        return `
          <span class="entity-chip" data-id="${id}" data-scope-key="${scopeKey}">
            ${this.escapeHtml(getEntityText(entity))}
            <button class="chip-remove" aria-label="Remove">&times;</button>
          </span>
        `;
      }).join('');
    }
    
    // Update entity list (preserving current filter)
    const searchInput = section.querySelector('.entity-search-input');
    if (searchInput) {
      this.filterEntityList(searchInput, searchInput.value);
    }
  }

  /**
   * Save the monitor
   */
  save() {
    // Validate
    if (!this.formState.name.trim()) {
      alert('Please enter a monitor name');
      return;
    }
    
    // Check if at least one entity is selected
    const hasEntities = Object.keys(this.formState.scope)
      .filter(k => k !== 'logic')
      .some(k => this.formState.scope[k].length > 0);
    
    if (!hasEntities) {
      alert('Please select at least one entity to monitor');
      return;
    }
    
    if (this.editingMonitor) {
      // Update existing monitor
      dataStore.updateMonitor(this.editingMonitor.id, {
        name: this.formState.name.trim(),
        scope: { ...this.formState.scope }
      });
    } else {
      // Create new monitor
      dataStore.createMonitor({
        name: this.formState.name.trim(),
        scope: { ...this.formState.scope }
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
