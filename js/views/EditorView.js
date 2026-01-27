/**
 * EditorView.js
 * CRUD editor for all entity types
 */

import { dataStore } from '../data/DataStore.js';
import { DataService } from '../data/DataService.js';
import { llmParser } from '../utils/llmParser.js';
import { NarrativeList } from '../components/NarrativeList.js';

export class EditorView {
  constructor(container, options = {}) {
    this.container = typeof container === 'string'
      ? document.getElementById(container)
      : container;
    this.options = options;
    this.currentTab = 'narratives';
    this.editingId = null;
    this.extractedEntities = null;
    this.narrativeList = null;
  }

  getEntityIcon(type, size = 14) {
    const icons = {
      missions: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
        <path d="M3 2v12M3 2l7 3-7 3"/>
      </svg>`,
      narratives: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
        <path d="M2 2h12v12H2z" rx="1"/>
        <path d="M4 5h8M4 8h8M4 11h5"/>
      </svg>`,
      factions: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
        <circle cx="8" cy="5" r="2.5"/>
        <circle cx="4" cy="11" r="2"/>
        <circle cx="12" cy="11" r="2"/>
        <path d="M6 6.5L4.5 9M10 6.5l1.5 2.5"/>
      </svg>`,
      locations: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
        <path d="M8 1C5.2 1 3 3.2 3 6c0 4 5 9 5 9s5-5 5-9c0-2.8-2.2-5-5-5z"/>
        <circle cx="8" cy="6" r="2"/>
      </svg>`,
      events: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
        <rect x="2" y="3" width="12" height="11" rx="1"/>
        <path d="M2 6h12M5 1v3M11 1v3"/>
      </svg>`,
      persons: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
        <circle cx="8" cy="4" r="2.5"/>
        <path d="M3 14c0-3 2.2-5 5-5s5 2 5 5"/>
      </svg>`,
      organizations: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
        <rect x="3" y="6" width="10" height="8" rx="1"/>
        <path d="M5 6V4a3 3 0 0 1 6 0v2"/>
        <rect x="5" y="9" width="2" height="2"/>
        <rect x="9" y="9" width="2" height="2"/>
      </svg>`
    };
    return icons[type] || icons.narratives;
  }

  async render() {
    const tabs = [
      { id: 'missions', label: 'Missions', count: DataService.getMissions().length },
      { id: 'narratives', label: 'Narratives', count: DataService.getNarratives().length },
      { id: 'factions', label: 'Factions', count: DataService.getFactions().length },
      { id: 'locations', label: 'Locations', count: DataService.getLocations().length },
      { id: 'events', label: 'Events', count: DataService.getEvents().length },
      { id: 'persons', label: 'People', count: DataService.getPersons().length },
      { id: 'organizations', label: 'Organizations', count: DataService.getOrganizations().length }
    ];

    this.container.innerHTML = `
      <div class="page-header">
        <div class="breadcrumb">
          <a href="#/dashboard">Dashboard</a>
          <span>/</span>
          Data Editor
        </div>
        <h1>Data Editor</h1>
        <p class="subtitle">Create, edit, and manage all entities</p>
      </div>

      <div class="content-area">
        <div class="editor-layout">
          <!-- Sidebar with entity type tabs -->
          <div class="editor-sidebar card">
            <div class="card-header">
              <h2 class="card-title">Entity Types</h2>
            </div>
            <div class="card-body no-padding">
              <div class="editor-tabs">
                ${tabs.map(tab => `
                  <div class="editor-tab ${tab.id === this.currentTab ? 'active' : ''}" data-tab="${tab.id}">
                    <span class="editor-tab-icon">${this.getEntityIcon(tab.id)}</span>
                    <span class="editor-tab-label">${tab.label}</span>
                    <span class="badge">${tab.count}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- API Key Section -->
            <div class="card-body api-key-section">
              <div class="api-key-header">
                <span class="icon">🤖</span>
                <span class="api-key-title">OpenAI API Key</span>
              </div>
              <div class="api-key-input-wrapper">
                <input 
                  type="password" 
                  class="form-input" 
                  id="api-key-input" 
                  placeholder="sk-..."
                  value="${llmParser.getApiKey() || ''}"
                />
                <button class="btn btn-primary btn-small" id="save-api-key">Save</button>
              </div>
              <div class="api-key-status ${llmParser.hasApiKey() ? 'valid' : ''}" id="api-key-status">
                ${llmParser.hasApiKey() ? '✓ API key saved' : 'No API key - using fallback extraction'}
              </div>
            </div>

            <!-- Data Import/Export Section -->
            <div class="card-body data-transfer-section">
              <div class="api-key-header">
                <span class="icon">📦</span>
                <span class="api-key-title">Data Transfer</span>
              </div>
              <div class="data-transfer-buttons">
                <button class="btn btn-secondary" id="export-data">
                  <span class="btn-icon">↑</span> Export Data
                </button>
                <button class="btn btn-secondary" id="import-data">
                  <span class="btn-icon">↓</span> Import Data
                </button>
                <input type="file" id="import-file" accept=".json" style="display: none;">
              </div>
              <p class="data-transfer-hint">Export or import all data as JSON</p>
            </div>
          </div>

          <!-- Main content area -->
          <div class="editor-main" id="editor-content">
            ${this.renderTabContent()}
          </div>
        </div>
      </div>
    `;

    this.attachEventListeners();
  }

  renderTabContent() {
    switch (this.currentTab) {
      case 'missions':
        return this.renderMissionsTab();
      case 'narratives':
        return this.renderNarrativesTab();
      case 'factions':
        return this.renderFactionsTab();
      case 'locations':
        return this.renderLocationsTab();
      case 'events':
        return this.renderEventsTab();
      case 'persons':
        return this.renderPersonsTab();
      case 'organizations':
        return this.renderOrganizationsTab();
      default:
        return '';
    }
  }

  // ============================================
  // Tab Renderers
  // ============================================

  renderMissionsTab() {
    const missions = DataService.getMissions();
    return `
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Missions</h2>
          <div class="card-header-actions">
            <button class="btn btn-primary" id="create-mission">+ New Mission</button>
          </div>
        </div>
        <div class="card-body no-padding">
          ${missions.length === 0 ? `<div class="empty-state"><div class="empty-state-icon">${this.getEntityIcon('missions', 32)}</div><p class="empty-state-text">No missions yet. Create one to get started.</p></div>` : ''}
          <ul class="entity-list">
            ${missions.map(m => `
              <li class="entity-list-item editor-list-item" data-id="${m.id}">
                <div class="entity-avatar" style="background: ${m.color}20; border: 1px solid ${m.color}; color: ${m.color};">
                  ${this.getEntityIcon('missions', 16)}
                </div>
                <div class="entity-info">
                  <div class="entity-name">${m.name}</div>
                  <div class="entity-type">${m.description || 'No description'}</div>
                </div>
                <div class="editor-list-item-actions">
                  <button class="btn-small edit-btn" data-id="${m.id}" title="Edit">✎</button>
                  <button class="btn-small delete-btn" data-id="${m.id}" title="Delete">×</button>
                </div>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  renderNarrativesTab() {
    const narratives = DataService.getNarratives();
    
    return `
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Narratives</h2>
          <div class="card-header-actions">
            <button class="btn btn-primary" id="create-narrative">+ New Narrative</button>
          </div>
        </div>
        <div class="card-body no-padding" id="narratives-list-container">
          ${narratives.length === 0 ? `<div class="empty-state"><div class="empty-state-icon">${this.getEntityIcon('narratives', 32)}</div><p class="empty-state-text">No narratives yet. Create one to get started.</p></div>` : ''}
        </div>
      </div>
    `;
  }

  initNarrativeList() {
    const narratives = DataService.getNarratives();
    if (narratives.length === 0) return;

    // Destroy existing narrative list if present
    if (this.narrativeList) {
      this.narrativeList.destroy();
    }

    const container = document.getElementById('narratives-list-container');
    if (!container) return;

    this.narrativeList = new NarrativeList(container, {
      maxItems: 100,
      showStatus: true,
      showSparkline: true,
      showVolume: true,
      showSentiment: false,
      onNarrativeClick: (narrative) => {
        this.showNarrativeActions(narrative);
      }
    });

    this.narrativeList.update({ narratives });
  }

  showNarrativeActions(narrative) {
    window.app.showModal(`
      <div class="modal-header">
        <div class="modal-title-row">
          <span class="modal-icon">${this.getEntityIcon('narratives', 20)}</span>
          <h2 class="modal-title">Narrative Actions</h2>
        </div>
        <button class="modal-close" onclick="window.app.closeModal()">×</button>
      </div>
      <div class="modal-body">
        <p class="narrative-action-text">${narrative.text}</p>
        <div class="narrative-action-buttons">
          <button class="btn btn-primary" id="action-edit">
            <span class="btn-icon">✎</span> Edit Narrative
          </button>
          <button class="btn btn-secondary" id="action-view">
            <span class="btn-icon">→</span> View Details
          </button>
          <button class="btn btn-danger" id="action-delete">
            <span class="btn-icon">×</span> Delete
          </button>
        </div>
      </div>
    `);

    document.getElementById('action-edit')?.addEventListener('click', () => {
      window.app.closeModal();
      this.showEditModal('narrative', narrative.id);
    });

    document.getElementById('action-view')?.addEventListener('click', () => {
      window.app.closeModal();
      window.location.hash = `#/narrative/${narrative.id}`;
    });

    document.getElementById('action-delete')?.addEventListener('click', async () => {
      const confirmed = await window.app.confirm('Are you sure you want to delete this narrative?');
      if (confirmed) {
        window.app.closeModal();
        this.deleteItem('narrative', narrative.id);
      }
    });
  }

  renderFactionsTab() {
    const factions = DataService.getFactions();
    return `
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Factions</h2>
          <div class="card-header-actions">
            <button class="btn btn-primary" id="create-faction">+ New Faction</button>
          </div>
        </div>
        <div class="card-body no-padding">
          ${factions.length === 0 ? `<div class="empty-state"><div class="empty-state-icon">${this.getEntityIcon('factions', 32)}</div><p class="empty-state-text">No factions yet. Create one to get started.</p></div>` : ''}
          <ul class="faction-list">
            ${factions.map(f => `
              <li class="faction-item editor-list-item" data-id="${f.id}">
                <div class="faction-color" style="background: ${f.color};"></div>
                <div class="entity-info">
                  <div class="entity-name">${f.name}</div>
                  <div class="entity-type">${f.memberCount ? f.memberCount.toLocaleString() + ' members' : 'No member count'}</div>
                </div>
                <div class="editor-list-item-actions">
                  <button class="btn-small edit-btn" data-id="${f.id}" title="Edit">✎</button>
                  <button class="btn-small delete-btn" data-id="${f.id}" title="Delete">×</button>
                </div>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  renderLocationsTab() {
    const locations = DataService.getLocations();
    return `
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Locations</h2>
          <div class="card-header-actions">
            <button class="btn btn-primary" id="create-location">+ New Location</button>
          </div>
        </div>
        <div class="card-body no-padding">
          ${locations.length === 0 ? `<div class="empty-state"><div class="empty-state-icon">${this.getEntityIcon('locations', 32)}</div><p class="empty-state-text">No locations yet. Create one to get started.</p></div>` : ''}
          <ul class="location-list">
            ${locations.map(l => `
              <li class="location-item editor-list-item" data-id="${l.id}">
                <div class="entity-avatar">${this.getEntityIcon('locations', 16)}</div>
                <div class="entity-info">
                  <div class="entity-name">${l.name}</div>
                  <div class="entity-type">
                    ${l.type || 'Location'}
                    ${l.coordinates ? ` • ${l.coordinates.lat.toFixed(2)}, ${l.coordinates.lng.toFixed(2)}` : ''}
                  </div>
                </div>
                <div class="editor-list-item-actions">
                  <button class="btn-small edit-btn" data-id="${l.id}" title="Edit">✎</button>
                  <button class="btn-small delete-btn" data-id="${l.id}" title="Delete">×</button>
                </div>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  renderEventsTab() {
    const events = DataService.getEvents();
    return `
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Events</h2>
          <div class="card-header-actions">
            <button class="btn btn-primary" id="create-event">+ New Event</button>
          </div>
        </div>
        <div class="card-body no-padding">
          ${events.length === 0 ? `<div class="empty-state"><div class="empty-state-icon">${this.getEntityIcon('events', 32)}</div><p class="empty-state-text">No events yet. Create one to get started.</p></div>` : ''}
          <ul class="event-list">
            ${events.map(e => {
              const date = new Date(e.date);
              return `
                <li class="event-item editor-list-item" data-id="${e.id}">
                  <div class="event-date">${date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                  <div class="entity-info">
                    <div class="entity-name">${e.text}</div>
                    ${e.parentEventId ? '<div class="entity-type">Sub-event</div>' : ''}
                  </div>
                  <div class="editor-list-item-actions">
                    <button class="btn-small edit-btn" data-id="${e.id}" title="Edit">✎</button>
                    <button class="btn-small delete-btn" data-id="${e.id}" title="Delete">×</button>
                  </div>
                </li>
              `;
            }).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  renderPersonsTab() {
    const persons = DataService.getPersons();
    return `
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">People</h2>
          <div class="card-header-actions">
            <button class="btn btn-primary" id="create-person">+ New Person</button>
          </div>
        </div>
        <div class="card-body no-padding">
          ${persons.length === 0 ? `<div class="empty-state"><div class="empty-state-icon">${this.getEntityIcon('persons', 32)}</div><p class="empty-state-text">No people yet. Create one to get started.</p></div>` : ''}
          <ul class="entity-list">
            ${persons.map(p => `
              <li class="entity-list-item editor-list-item" data-id="${p.id}">
                <div class="entity-avatar person">${this.getEntityIcon('persons', 16)}</div>
                <div class="entity-info">
                  <div class="entity-name">${p.name}</div>
                  <div class="entity-type">${p.type || 'Person'}</div>
                </div>
                <div class="editor-list-item-actions">
                  <button class="btn-small edit-btn" data-id="${p.id}" title="Edit">✎</button>
                  <button class="btn-small delete-btn" data-id="${p.id}" title="Delete">×</button>
                </div>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  renderOrganizationsTab() {
    const orgs = DataService.getOrganizations();
    return `
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Organizations</h2>
          <div class="card-header-actions">
            <button class="btn btn-primary" id="create-organization">+ New Organization</button>
          </div>
        </div>
        <div class="card-body no-padding">
          ${orgs.length === 0 ? `<div class="empty-state"><div class="empty-state-icon">${this.getEntityIcon('organizations', 32)}</div><p class="empty-state-text">No organizations yet. Create one to get started.</p></div>` : ''}
          <ul class="entity-list">
            ${orgs.map(o => `
              <li class="entity-list-item editor-list-item" data-id="${o.id}">
                <div class="entity-avatar organization">${this.getEntityIcon('organizations', 16)}</div>
                <div class="entity-info">
                  <div class="entity-name">${o.name}</div>
                  <div class="entity-type">${o.type || 'Organization'}</div>
                </div>
                <div class="editor-list-item-actions">
                  <button class="btn-small edit-btn" data-id="${o.id}" title="Edit">✎</button>
                  <button class="btn-small delete-btn" data-id="${o.id}" title="Delete">×</button>
                </div>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  // ============================================
  // Event Handlers
  // ============================================

  attachEventListeners() {
    // Initialize NarrativeList if on narratives tab
    if (this.currentTab === 'narratives') {
      this.initNarrativeList();
    }

    // Tab switching
    this.container.querySelectorAll('.editor-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this.currentTab = tab.dataset.tab;
        this.render();
      });
    });

    // API key save
    const saveApiKeyBtn = document.getElementById('save-api-key');
    if (saveApiKeyBtn) {
      saveApiKeyBtn.addEventListener('click', async () => {
        const input = document.getElementById('api-key-input');
        const key = input.value.trim();
        
        if (key) {
          const isValid = await llmParser.validateApiKey(key);
          if (isValid) {
            llmParser.setApiKey(key);
            document.getElementById('api-key-status').textContent = '✓ API key saved and validated';
            document.getElementById('api-key-status').className = 'api-key-status valid';
            window.app.showToast('API key saved', 'success');
          } else {
            window.app.showToast('Invalid API key', 'error');
          }
        } else {
          llmParser.setApiKey(null);
          document.getElementById('api-key-status').textContent = 'No API key - using fallback extraction';
          document.getElementById('api-key-status').className = 'api-key-status';
        }
      });
    }

    // Create buttons
    this.container.querySelectorAll('[id^="create-"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.id.replace('create-', '');
        this.showCreateModal(type);
      });
    });

    // Edit buttons
    this.container.querySelectorAll('.edit-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        this.showEditModal(this.currentTab.replace(/s$/, ''), id);
      });
    });

    // Delete buttons
    this.container.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const confirmed = await window.app.confirm('Are you sure you want to delete this item?');
        if (confirmed) {
          this.deleteItem(this.currentTab.replace(/s$/, ''), id);
        }
      });
    });

    // Export data button
    const exportBtn = document.getElementById('export-data');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const data = dataStore.export();
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `narrativeos-data-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        window.app.showToast('Data exported successfully', 'success');
      });
    }

    // Import data button
    const importBtn = document.getElementById('import-data');
    const importFile = document.getElementById('import-file');
    if (importBtn && importFile) {
      importBtn.addEventListener('click', () => {
        importFile.click();
      });

      importFile.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
          const success = dataStore.import(event.target.result);
          if (success) {
            window.app.showToast('Data imported successfully', 'success');
            this.render(); // Refresh the editor view
          } else {
            window.app.showToast('Failed to import data', 'error');
          }
        };
        reader.readAsText(file);
        importFile.value = '';
      });
    }
  }

  // ============================================
  // Modal Forms
  // ============================================

  showCreateModal(type) {
    this.editingId = null;
    this.extractedEntities = null;
    
    const formHtml = this.getFormHtml(type, null);
    const icon = this.getTypeIcon(type);
    
    window.app.showModal(`
      <div class="modal-header">
        <div class="modal-title-row">
          <span class="modal-icon">${icon}</span>
          <h2 class="modal-title">Create ${this.getTypeLabel(type)}</h2>
        </div>
        <button class="modal-close" onclick="window.app.closeModal()">×</button>
      </div>
      <div class="modal-body">
        ${formHtml}
      </div>
      <div class="modal-footer">
        <button class="btn" onclick="window.app.closeModal()">Cancel</button>
        <button class="btn btn-primary" id="save-entity">Create</button>
      </div>
    `);

    this.attachFormListeners(type);
  }

  showEditModal(type, id) {
    this.editingId = id;
    const item = this.getItem(type, id);
    if (!item) return;

    const formHtml = this.getFormHtml(type, item);
    const icon = this.getTypeIcon(type);

    window.app.showModal(`
      <div class="modal-header">
        <div class="modal-title-row">
          <span class="modal-icon">${icon}</span>
          <h2 class="modal-title">Edit ${this.getTypeLabel(type)}</h2>
        </div>
        <button class="modal-close" onclick="window.app.closeModal()">×</button>
      </div>
      <div class="modal-body">
        ${formHtml}
      </div>
      <div class="modal-footer">
        <button class="btn" onclick="window.app.closeModal()">Cancel</button>
        <button class="btn btn-primary" id="save-entity">Save Changes</button>
      </div>
    `);

    this.attachFormListeners(type);
  }

  getFormHtml(type, item) {
    switch (type) {
      case 'mission':
        return this.getMissionForm(item);
      case 'narrative':
        return this.getNarrativeForm(item);
      case 'faction':
        return this.getFactionForm(item);
      case 'location':
        return this.getLocationForm(item);
      case 'event':
        return this.getEventForm(item);
      case 'person':
        return this.getPersonForm(item);
      case 'organization':
        return this.getOrganizationForm(item);
      default:
        return '';
    }
  }

  getMissionForm(item) {
    return `
      <div class="form-group">
        <label class="form-label required">Name</label>
        <input type="text" class="form-input" id="form-name" value="${item?.name || ''}" placeholder="Mission name">
      </div>
      <div class="form-group">
        <label class="form-label">Description</label>
        <textarea class="form-input form-textarea" id="form-description" placeholder="Mission description">${item?.description || ''}</textarea>
      </div>
      <div class="form-group">
        <label class="form-label">Color</label>
        <div class="color-picker">
          <div class="color-picker-swatch" id="color-swatch" style="background: ${item?.color || '#1E88E5'}"></div>
          <input type="text" class="form-input color-picker-input" id="form-color" value="${item?.color || '#1E88E5'}">
        </div>
        <div class="color-presets">
          ${['#E53935', '#D81B60', '#8E24AA', '#5E35B1', '#3949AB', '#1E88E5', '#039BE5', '#00ACC1', '#00897B', '#43A047'].map(c => `
            <div class="color-preset ${item?.color === c ? 'selected' : ''}" data-color="${c}" style="background: ${c}"></div>
          `).join('')}
        </div>
      </div>
    `;
  }

  getNarrativeForm(item) {
    const missions = DataService.getMissions();
    const factions = DataService.getFactions();

    return `
      <div class="form-group">
        <label class="form-label required">Narrative Text</label>
        <textarea class="form-input form-textarea" id="form-text" placeholder="Enter the narrative statement...">${item?.text || ''}</textarea>
      </div>

      <!-- LLM Extraction Section -->
      <div class="llm-extraction">
        <div class="llm-extraction-header">
          <div class="llm-extraction-title">
            <span class="icon">🤖</span>
            AI Entity Extraction
          </div>
        </div>
        <p class="llm-extraction-description">
          Automatically extract people, organizations, locations, and events from the narrative text.
        </p>
        <div class="llm-extraction-actions">
          <button class="btn btn-secondary" id="extract-entities">
            ${llmParser.hasApiKey() ? '✨ Extract with AI' : '🔍 Extract (Fallback)'}
          </button>
        </div>
        <div id="extraction-results"></div>
      </div>

      <div class="form-group">
        <label class="form-label">Mission</label>
        <select class="form-input form-select" id="form-mission">
          <option value="">No mission</option>
          ${missions.map(m => `
            <option value="${m.id}" ${item?.missionId === m.id ? 'selected' : ''}>${m.name}</option>
          `).join('')}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Status</label>
        <div class="status-selector">
          <div class="status-option ${(!item?.status || item?.status === 'new') ? 'selected new' : ''}" data-status="new">
            <div class="status-option-icon">✦</div>
            <div class="status-option-label">New</div>
          </div>
          <div class="status-option ${item?.status === 'in_progress' ? 'selected in_progress' : ''}" data-status="in_progress">
            <div class="status-option-icon">◐</div>
            <div class="status-option-label">In Progress</div>
          </div>
          <div class="status-option ${item?.status === 'under_investigation' ? 'selected under_investigation' : ''}" data-status="under_investigation">
            <div class="status-option-icon">🔍</div>
            <div class="status-option-label">Investigating</div>
          </div>
          <div class="status-option ${item?.status === 'resolved' ? 'selected resolved' : ''}" data-status="resolved">
            <div class="status-option-icon">✓</div>
            <div class="status-option-label">Resolved</div>
          </div>
        </div>
        <input type="hidden" id="form-status" value="${item?.status || 'new'}">
      </div>

      <div class="form-group">
        <label class="form-label">Overall Sentiment</label>
        <div class="sentiment-slider-container">
          <div class="sentiment-slider-labels">
            <span class="sentiment-label-negative">Negative</span>
            <span class="sentiment-label-neutral">Neutral</span>
            <span class="sentiment-label-positive">Positive</span>
          </div>
          <input type="range" 
                 id="form-sentiment" 
                 class="sentiment-slider" 
                 min="-1" 
                 max="1" 
                 step="0.1" 
                 value="${this.normalizeSentimentValue(item?.sentiment)}">
          <div class="sentiment-slider-value">
            <span class="sentiment-value-display" id="sentiment-value-display">${this.formatSentimentDisplay(item?.sentiment)}</span>
          </div>
        </div>
      </div>

      <div class="relationship-section">
        <div class="relationship-header">
          <span class="relationship-title">Faction Mentions</span>
          <button class="btn btn-ghost" id="add-faction-mention">+ Add</button>
        </div>
        <div class="relationship-content" id="faction-mentions">
          ${Object.entries(item?.factionMentions || {}).map(([factionId, data]) => {
            const faction = factions.find(f => f.id === factionId);
            if (!faction) return '';
            return `
              <div class="faction-mention" data-faction-id="${factionId}">
                <div class="faction-mention-color" style="background: ${faction.color}"></div>
                <span class="faction-mention-name">${faction.name}</span>
                <div class="faction-mention-fields">
                  <div class="faction-mention-field">
                    <label>Vol</label>
                    <input type="number" class="faction-volume" value="${data.volume || 0}">
                  </div>
                  <div class="faction-mention-field faction-sentiment-field">
                    <label>Sent</label>
                    <input type="range" 
                           class="faction-sentiment faction-sentiment-slider" 
                           min="-1" 
                           max="1" 
                           step="0.1" 
                           value="${this.normalizeSentimentValue(data.sentiment)}">
                    <span class="faction-sentiment-value">${this.formatSentimentShort(data.sentiment)}</span>
                  </div>
                </div>
                <button class="faction-mention-remove">×</button>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <div class="relationship-section">
        <div class="relationship-header">
          <span class="relationship-title">Related People</span>
        </div>
        <div class="relationship-content">
          <div class="form-checkbox-group" id="person-checkboxes">
            ${DataService.getPersons().map(p => `
              <label class="form-checkbox">
                <input type="checkbox" name="persons" value="${p.id}" ${item?.personIds?.includes(p.id) ? 'checked' : ''}>
                <span class="form-checkbox-label">${p.name}</span>
              </label>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="relationship-section">
        <div class="relationship-header">
          <span class="relationship-title">Related Organizations</span>
        </div>
        <div class="relationship-content">
          <div class="form-checkbox-group" id="org-checkboxes">
            ${DataService.getOrganizations().map(o => `
              <label class="form-checkbox">
                <input type="checkbox" name="organizations" value="${o.id}" ${item?.organizationIds?.includes(o.id) ? 'checked' : ''}>
                <span class="form-checkbox-label">${o.name}</span>
              </label>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="relationship-section">
        <div class="relationship-header">
          <span class="relationship-title">Related Locations</span>
        </div>
        <div class="relationship-content">
          <div class="form-checkbox-group" id="location-checkboxes">
            ${DataService.getLocations().map(l => `
              <label class="form-checkbox">
                <input type="checkbox" name="locations" value="${l.id}" ${item?.locationIds?.includes(l.id) ? 'checked' : ''}>
                <span class="form-checkbox-label">${l.name}</span>
              </label>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="relationship-section">
        <div class="relationship-header">
          <span class="relationship-title">Related Events</span>
        </div>
        <div class="relationship-content">
          <div class="form-checkbox-group" id="event-checkboxes">
            ${DataService.getEvents().filter(e => !e.parentEventId).map(e => `
              <label class="form-checkbox">
                <input type="checkbox" name="events" value="${e.id}" ${item?.eventIds?.includes(e.id) ? 'checked' : ''}>
                <span class="form-checkbox-label">${e.text.slice(0, 50)}${e.text.length > 50 ? '...' : ''}</span>
              </label>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  getFactionForm(item) {
    return `
      <div class="form-group">
        <label class="form-label required">Name</label>
        <input type="text" class="form-input" id="form-name" value="${item?.name || ''}" placeholder="Faction name">
      </div>
      <div class="form-group">
        <label class="form-label">Member Count</label>
        <input type="number" class="form-input" id="form-memberCount" value="${item?.memberCount || ''}" placeholder="Estimated members">
      </div>
      <div class="form-group">
        <label class="form-label">Color</label>
        <div class="color-picker">
          <div class="color-picker-swatch" id="color-swatch" style="background: ${item?.color || '#1E88E5'}"></div>
          <input type="text" class="form-input color-picker-input" id="form-color" value="${item?.color || '#1E88E5'}">
        </div>
        <div class="color-presets">
          ${['#E53935', '#D81B60', '#8E24AA', '#5E35B1', '#3949AB', '#1E88E5', '#039BE5', '#00ACC1', '#00897B', '#43A047'].map(c => `
            <div class="color-preset ${item?.color === c ? 'selected' : ''}" data-color="${c}" style="background: ${c}"></div>
          `).join('')}
        </div>
      </div>
    `;
  }

  getLocationForm(item) {
    return `
      <div class="form-group">
        <label class="form-label required">Name</label>
        <input type="text" class="form-input" id="form-name" value="${item?.name || ''}" placeholder="Location name">
      </div>
      <div class="form-group">
        <label class="form-label">Type</label>
        <select class="form-input form-select" id="form-type">
          <option value="general" ${item?.type === 'general' ? 'selected' : ''}>General</option>
          <option value="city" ${item?.type === 'city' ? 'selected' : ''}>City</option>
          <option value="landmark" ${item?.type === 'landmark' ? 'selected' : ''}>Landmark</option>
          <option value="intersection" ${item?.type === 'intersection' ? 'selected' : ''}>Intersection</option>
          <option value="country" ${item?.type === 'country' ? 'selected' : ''}>Country</option>
          <option value="region" ${item?.type === 'region' ? 'selected' : ''}>Region</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Coordinates</label>
        <div class="coordinates-input">
          <div class="coordinates-field">
            <span class="coordinates-label">Latitude</span>
            <input type="number" step="0.0001" class="form-input" id="form-lat" value="${item?.coordinates?.lat || ''}" placeholder="0.0000">
          </div>
          <div class="coordinates-field">
            <span class="coordinates-label">Longitude</span>
            <input type="number" step="0.0001" class="form-input" id="form-lng" value="${item?.coordinates?.lng || ''}" placeholder="0.0000">
          </div>
        </div>
      </div>
    `;
  }

  getEventForm(item) {
    const locations = DataService.getLocations();
    const events = DataService.getEvents().filter(e => e.id !== item?.id && !e.parentEventId);

    return `
      <div class="form-group">
        <label class="form-label required">Event Description</label>
        <textarea class="form-input form-textarea" id="form-text" placeholder="Describe the event...">${item?.text || ''}</textarea>
      </div>
      <div class="form-group">
        <label class="form-label">Date & Time</label>
        <input type="datetime-local" class="form-input" id="form-date" value="${item?.date ? new Date(item.date).toISOString().slice(0, 16) : ''}">
      </div>
      <div class="form-group">
        <label class="form-label">Location</label>
        <select class="form-input form-select" id="form-location">
          <option value="">No location</option>
          ${locations.map(l => `
            <option value="${l.id}" ${item?.locationId === l.id ? 'selected' : ''}>${l.name}</option>
          `).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Parent Event (if sub-event)</label>
        <select class="form-input form-select" id="form-parentEvent">
          <option value="">Not a sub-event</option>
          ${events.map(e => `
            <option value="${e.id}" ${item?.parentEventId === e.id ? 'selected' : ''}>${e.text.slice(0, 50)}...</option>
          `).join('')}
        </select>
      </div>
    `;
  }

  getPersonForm(item) {
    return `
      <div class="form-group">
        <label class="form-label required">Name</label>
        <input type="text" class="form-input" id="form-name" value="${item?.name || ''}" placeholder="Full name">
      </div>
      <div class="form-group">
        <label class="form-label">Type</label>
        <select class="form-input form-select" id="form-type">
          <option value="person" ${item?.type === 'person' ? 'selected' : ''}>General</option>
          <option value="politician" ${item?.type === 'politician' ? 'selected' : ''}>Politician</option>
          <option value="military" ${item?.type === 'military' ? 'selected' : ''}>Military</option>
          <option value="civilian" ${item?.type === 'civilian' ? 'selected' : ''}>Civilian</option>
          <option value="journalist" ${item?.type === 'journalist' ? 'selected' : ''}>Journalist</option>
          <option value="activist" ${item?.type === 'activist' ? 'selected' : ''}>Activist</option>
          <option value="executive" ${item?.type === 'executive' ? 'selected' : ''}>Executive</option>
        </select>
      </div>
      <div class="relationship-section">
        <div class="relationship-header">
          <span class="relationship-title">Affiliated Factions</span>
        </div>
        <div class="relationship-content">
          <div class="form-checkbox-group">
            ${DataService.getFactions().map(f => `
              <label class="form-checkbox">
                <input type="checkbox" name="factions" value="${f.id}" ${item?.affiliatedFactionIds?.includes(f.id) ? 'checked' : ''}>
                <span class="form-checkbox-label" style="display: flex; align-items: center; gap: 8px;">
                  <span style="width: 10px; height: 10px; background: ${f.color}; border-radius: 2px;"></span>
                  ${f.name}
                </span>
              </label>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  getOrganizationForm(item) {
    return `
      <div class="form-group">
        <label class="form-label required">Name</label>
        <input type="text" class="form-input" id="form-name" value="${item?.name || ''}" placeholder="Organization name">
      </div>
      <div class="form-group">
        <label class="form-label">Type</label>
        <select class="form-input form-select" id="form-type">
          <option value="general" ${item?.type === 'general' ? 'selected' : ''}>General</option>
          <option value="political" ${item?.type === 'political' ? 'selected' : ''}>Political</option>
          <option value="military" ${item?.type === 'military' ? 'selected' : ''}>Military</option>
          <option value="government" ${item?.type === 'government' ? 'selected' : ''}>Government</option>
          <option value="platform" ${item?.type === 'platform' ? 'selected' : ''}>Platform</option>
          <option value="company" ${item?.type === 'company' ? 'selected' : ''}>Company</option>
          <option value="media" ${item?.type === 'media' ? 'selected' : ''}>Media</option>
          <option value="international" ${item?.type === 'international' ? 'selected' : ''}>International</option>
        </select>
      </div>
      <div class="relationship-section">
        <div class="relationship-header">
          <span class="relationship-title">Affiliated Factions</span>
        </div>
        <div class="relationship-content">
          <div class="form-checkbox-group">
            ${DataService.getFactions().map(f => `
              <label class="form-checkbox">
                <input type="checkbox" name="factions" value="${f.id}" ${item?.affiliatedFactionIds?.includes(f.id) ? 'checked' : ''}>
                <span class="form-checkbox-label" style="display: flex; align-items: center; gap: 8px;">
                  <span style="width: 10px; height: 10px; background: ${f.color}; border-radius: 2px;"></span>
                  ${f.name}
                </span>
              </label>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  attachFormListeners(type) {
    // Save button
    document.getElementById('save-entity')?.addEventListener('click', () => {
      this.saveEntity(type);
    });

    // Color preset clicks
    document.querySelectorAll('.color-preset').forEach(preset => {
      preset.addEventListener('click', () => {
        const color = preset.dataset.color;
        document.getElementById('form-color').value = color;
        document.getElementById('color-swatch').style.background = color;
        document.querySelectorAll('.color-preset').forEach(p => p.classList.remove('selected'));
        preset.classList.add('selected');
      });
    });

    // Color input change
    document.getElementById('form-color')?.addEventListener('input', (e) => {
      document.getElementById('color-swatch').style.background = e.target.value;
    });

    // Sentiment slider
    const sentimentSlider = document.getElementById('form-sentiment');
    const sentimentDisplay = document.getElementById('sentiment-value-display');
    if (sentimentSlider && sentimentDisplay) {
      sentimentSlider.addEventListener('input', (e) => {
        const value = parseFloat(e.target.value);
        sentimentDisplay.textContent = this.formatSentimentDisplay(value);
        // Update slider track color based on value
        this.updateSliderColor(sentimentSlider, value);
      });
      // Initialize slider color
      this.updateSliderColor(sentimentSlider, parseFloat(sentimentSlider.value));
    }

    // Faction sentiment sliders
    document.querySelectorAll('.faction-sentiment-slider').forEach(slider => {
      const valueDisplay = slider.nextElementSibling;
      slider.addEventListener('input', (e) => {
        const value = parseFloat(e.target.value);
        if (valueDisplay) {
          valueDisplay.textContent = this.formatSentimentShort(value);
        }
        this.updateSliderColor(slider, value);
      });
      // Initialize slider color
      this.updateSliderColor(slider, parseFloat(slider.value));
    });

    // Status selector
    document.querySelectorAll('.status-option').forEach(opt => {
      opt.addEventListener('click', () => {
        document.querySelectorAll('.status-option').forEach(o => {
          o.classList.remove('selected', 'new', 'in_progress', 'under_investigation', 'resolved');
        });
        const status = opt.dataset.status;
        opt.classList.add('selected', status);
        document.getElementById('form-status').value = status;
      });
    });

    // LLM extraction
    document.getElementById('extract-entities')?.addEventListener('click', async () => {
      const text = document.getElementById('form-text').value;
      if (!text.trim()) {
        window.app.showToast('Please enter narrative text first', 'error');
        return;
      }

      const resultsDiv = document.getElementById('extraction-results');
      resultsDiv.innerHTML = `
        <div class="llm-extraction-loading">
          <div class="loader"></div>
          <span>Extracting entities...</span>
        </div>
      `;

      try {
        this.extractedEntities = await llmParser.parseNarrativeText(text);
        this.displayExtractionResults(resultsDiv);
      } catch (error) {
        resultsDiv.innerHTML = `
          <p class="text-danger">Extraction failed: ${error.message}</p>
          <p class="text-muted text-sm">Trying fallback extraction...</p>
        `;
        this.extractedEntities = llmParser.fallbackExtraction(text);
        this.displayExtractionResults(resultsDiv);
      }
    });

    // Faction mention removal
    document.querySelectorAll('.faction-mention-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.closest('.faction-mention').remove();
      });
    });
  }

  displayExtractionResults(container) {
    const results = this.extractedEntities;
    if (!results) return;

    container.innerHTML = `
      <div class="llm-extraction-results">
        <h4 class="text-sm font-semibold mb-2">Extracted Entities</h4>
        
        ${results.persons?.length ? `
          <div class="mb-3">
            <span class="text-muted text-xs">People:</span>
            <div class="entity-tags-list mt-1">
              ${results.persons.map(p => `
                <span class="entity-tag person">${p.name} <span class="text-muted">(${p.type})</span></span>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${results.organizations?.length ? `
          <div class="mb-3">
            <span class="text-muted text-xs">Organizations:</span>
            <div class="entity-tags-list mt-1">
              ${results.organizations.map(o => `
                <span class="entity-tag organization">${o.name} <span class="text-muted">(${o.type})</span></span>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${results.locations?.length ? `
          <div class="mb-3">
            <span class="text-muted text-xs">Locations:</span>
            <div class="entity-tags-list mt-1">
              ${results.locations.map(l => `
                <span class="entity-tag location">${l.name}</span>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${results.events?.length ? `
          <div class="mb-3">
            <span class="text-muted text-xs">Events:</span>
            <div class="entity-tags-list mt-1">
              ${results.events.map(e => `
                <span class="entity-tag event">${e.text.slice(0, 40)}...</span>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${results.suggestedFactions?.length ? `
          <div class="mb-3">
            <span class="text-muted text-xs">Suggested Factions:</span>
            <div class="entity-tags-list mt-1">
              ${results.suggestedFactions.map(f => `
                <span class="entity-tag">${f.name} <span class="badge badge-${this.getSentimentClassForValue(f.sentiment)}">${this.formatSentimentShort(f.sentiment)}</span></span>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <button class="btn btn-secondary mt-3" id="apply-extraction">Apply to Form</button>
      </div>
    `;

    // Apply extraction button
    document.getElementById('apply-extraction')?.addEventListener('click', () => {
      this.applyExtractionToForm();
    });
  }

  applyExtractionToForm() {
    if (!this.extractedEntities) return;

    // Create new entities if they don't exist
    const results = this.extractedEntities;

    // Persons
    results.persons?.forEach(p => {
      const existing = DataService.getPersons().find(ep => 
        ep.name.toLowerCase() === p.name.toLowerCase()
      );
      if (!existing) {
        const id = dataStore.createPerson({ name: p.name, type: p.type });
        // Check the checkbox if form is visible
        const checkbox = document.querySelector(`input[name="persons"][value="${id}"]`);
        if (checkbox) checkbox.checked = true;
      } else {
        const checkbox = document.querySelector(`input[name="persons"][value="${existing.id}"]`);
        if (checkbox) checkbox.checked = true;
      }
    });

    // Organizations
    results.organizations?.forEach(o => {
      const existing = DataService.getOrganizations().find(eo => 
        eo.name.toLowerCase() === o.name.toLowerCase()
      );
      if (!existing) {
        const id = dataStore.createOrganization({ name: o.name, type: o.type });
        const checkbox = document.querySelector(`input[name="organizations"][value="${id}"]`);
        if (checkbox) checkbox.checked = true;
      } else {
        const checkbox = document.querySelector(`input[name="organizations"][value="${existing.id}"]`);
        if (checkbox) checkbox.checked = true;
      }
    });

    // Locations
    results.locations?.forEach(l => {
      const existing = DataService.getLocations().find(el => 
        el.name.toLowerCase() === l.name.toLowerCase()
      );
      if (!existing) {
        const id = dataStore.createLocation({ 
          name: l.name, 
          coordinates: l.coordinates 
        });
        const checkbox = document.querySelector(`input[name="locations"][value="${id}"]`);
        if (checkbox) checkbox.checked = true;
      } else {
        const checkbox = document.querySelector(`input[name="locations"][value="${existing.id}"]`);
        if (checkbox) checkbox.checked = true;
      }
    });

    // Re-render form to show new checkboxes
    window.app.showToast('Entities applied to form', 'success');
  }

  // ============================================
  // CRUD Operations
  // ============================================

  saveEntity(type) {
    const data = this.collectFormData(type);
    
    if (!this.validateFormData(type, data)) {
      return;
    }

    try {
      if (this.editingId) {
        // Update existing
        this.updateItem(type, this.editingId, data);
        window.app.showToast(`${this.getTypeLabel(type)} updated`, 'success');
      } else {
        // Create new
        this.createItem(type, data);
        window.app.showToast(`${this.getTypeLabel(type)} created`, 'success');
      }

      window.app.closeModal();
      this.render();
    } catch (error) {
      window.app.showToast(`Error: ${error.message}`, 'error');
    }
  }

  collectFormData(type) {
    const data = {};

    switch (type) {
      case 'mission':
        data.name = document.getElementById('form-name').value;
        data.description = document.getElementById('form-description')?.value || '';
        data.color = document.getElementById('form-color')?.value || '#1E88E5';
        break;

      case 'narrative':
        data.text = document.getElementById('form-text').value;
        data.missionId = document.getElementById('form-mission').value || null;
        data.status = document.getElementById('form-status').value || 'new';
        data.sentiment = parseFloat(document.getElementById('form-sentiment').value) || 0;
        
        // Collect faction mentions
        data.factionMentions = {};
        document.querySelectorAll('.faction-mention').forEach(el => {
          const factionId = el.dataset.factionId;
          const volume = parseInt(el.querySelector('.faction-volume').value) || 0;
          const sentiment = parseFloat(el.querySelector('.faction-sentiment').value) || 0;
          data.factionMentions[factionId] = { volume, sentiment };
        });

        // Collect related entities
        data.personIds = Array.from(document.querySelectorAll('input[name="persons"]:checked'))
          .map(cb => cb.value);
        data.organizationIds = Array.from(document.querySelectorAll('input[name="organizations"]:checked'))
          .map(cb => cb.value);
        data.locationIds = Array.from(document.querySelectorAll('input[name="locations"]:checked'))
          .map(cb => cb.value);
        data.eventIds = Array.from(document.querySelectorAll('input[name="events"]:checked'))
          .map(cb => cb.value);
        break;

      case 'faction':
        data.name = document.getElementById('form-name').value;
        data.memberCount = parseInt(document.getElementById('form-memberCount')?.value) || 0;
        data.color = document.getElementById('form-color')?.value || '#1E88E5';
        break;

      case 'location':
        data.name = document.getElementById('form-name').value;
        data.type = document.getElementById('form-type')?.value || 'general';
        const lat = parseFloat(document.getElementById('form-lat')?.value);
        const lng = parseFloat(document.getElementById('form-lng')?.value);
        data.coordinates = (!isNaN(lat) && !isNaN(lng)) ? { lat, lng } : null;
        break;

      case 'event':
        data.text = document.getElementById('form-text').value;
        data.date = document.getElementById('form-date')?.value || new Date().toISOString();
        data.locationId = document.getElementById('form-location')?.value || null;
        data.parentEventId = document.getElementById('form-parentEvent')?.value || null;
        break;

      case 'person':
        data.name = document.getElementById('form-name').value;
        data.type = document.getElementById('form-type')?.value || 'person';
        data.affiliatedFactionIds = Array.from(document.querySelectorAll('input[name="factions"]:checked'))
          .map(cb => cb.value);
        break;

      case 'organization':
        data.name = document.getElementById('form-name').value;
        data.type = document.getElementById('form-type')?.value || 'general';
        data.affiliatedFactionIds = Array.from(document.querySelectorAll('input[name="factions"]:checked'))
          .map(cb => cb.value);
        break;
    }

    return data;
  }

  validateFormData(type, data) {
    if (type === 'narrative' && !data.text?.trim()) {
      window.app.showToast('Narrative text is required', 'error');
      return false;
    }

    if (['mission', 'faction', 'location', 'person', 'organization'].includes(type) && !data.name?.trim()) {
      window.app.showToast('Name is required', 'error');
      return false;
    }

    if (type === 'event' && !data.text?.trim()) {
      window.app.showToast('Event description is required', 'error');
      return false;
    }

    return true;
  }

  getItem(type, id) {
    switch (type) {
      case 'mission': return DataService.getMission(id);
      case 'narrative': return DataService.getNarrative(id);
      case 'faction': return DataService.getFaction(id);
      case 'location': return DataService.getLocation(id);
      case 'event': return DataService.getEvent(id);
      case 'person': return DataService.getPerson(id);
      case 'organization': return DataService.getOrganization(id);
      default: return null;
    }
  }

  createItem(type, data) {
    switch (type) {
      case 'mission': return dataStore.createMission(data);
      case 'narrative': return dataStore.createNarrative(data);
      case 'faction': return dataStore.createFaction(data);
      case 'location': return dataStore.createLocation(data);
      case 'event': return dataStore.createEvent(data);
      case 'person': return dataStore.createPerson(data);
      case 'organization': return dataStore.createOrganization(data);
    }
  }

  updateItem(type, id, data) {
    switch (type) {
      case 'mission': return dataStore.updateMission(id, data);
      case 'narrative': return dataStore.updateNarrative(id, data);
      case 'faction': return dataStore.updateFaction(id, data);
      case 'location': return dataStore.updateLocation(id, data);
      case 'event': return dataStore.updateEvent(id, data);
      case 'person': return dataStore.updatePerson(id, data);
      case 'organization': return dataStore.updateOrganization(id, data);
    }
  }

  deleteItem(type, id) {
    switch (type) {
      case 'mission': dataStore.deleteMission(id); break;
      case 'narrative': dataStore.deleteNarrative(id); break;
      case 'faction': dataStore.deleteFaction(id); break;
      case 'location': dataStore.deleteLocation(id); break;
      case 'event': dataStore.deleteEvent(id); break;
      case 'person': dataStore.deletePerson(id); break;
      case 'organization': dataStore.deleteOrganization(id); break;
    }
    window.app.showToast('Item deleted', 'success');
    this.render();
  }

  getTypeLabel(type) {
    const labels = {
      mission: 'Mission',
      narrative: 'Narrative',
      faction: 'Faction',
      location: 'Location',
      event: 'Event',
      person: 'Person',
      organization: 'Organization'
    };
    return labels[type] || type;
  }

  getTypeIcon(type) {
    // Map singular to plural for entity icon lookup
    const pluralMap = {
      mission: 'missions',
      narrative: 'narratives',
      faction: 'factions',
      location: 'locations',
      event: 'events',
      person: 'persons',
      organization: 'organizations'
    };
    return this.getEntityIcon(pluralMap[type] || 'narratives', 20);
  }

  /**
   * Get sentiment class for badge display
   */
  getSentimentClassForValue(sentiment) {
    const value = this.normalizeSentimentValue(sentiment);
    if (value < -0.2) return 'negative';
    if (value > 0.2) return 'positive';
    return 'neutral';
  }

  /**
   * Format sentiment label for badge display
   */
  formatSentimentLabelForValue(sentiment) {
    const value = this.normalizeSentimentValue(sentiment);
    if (value <= -0.6) return 'Very Negative';
    if (value <= -0.2) return 'Negative';
    if (value < 0.2) return 'Neutral';
    if (value < 0.6) return 'Positive';
    return 'Very Positive';
  }

  /**
   * Normalize sentiment value to numeric (-1 to 1)
   */
  normalizeSentimentValue(sentiment) {
    if (typeof sentiment !== 'number' || isNaN(sentiment)) {
      return 0;
    }
    return Math.max(-1, Math.min(1, sentiment));
  }

  /**
   * Format sentiment for display (e.g., "+0.50 Positive")
   */
  formatSentimentDisplay(sentiment) {
    const value = this.normalizeSentimentValue(sentiment);
    const sign = value > 0 ? '+' : '';
    const label = this.getSentimentLabel(value);
    return `${sign}${value.toFixed(1)} (${label})`;
  }

  /**
   * Format sentiment as short label for compact display
   */
  formatSentimentShort(sentiment) {
    const value = this.normalizeSentimentValue(sentiment);
    const sign = value > 0 ? '+' : '';
    return `${sign}${value.toFixed(1)}`;
  }

  /**
   * Get sentiment label based on value
   */
  getSentimentLabel(value) {
    if (value <= -0.6) return 'Very Negative';
    if (value <= -0.2) return 'Negative';
    if (value < 0.2) return 'Neutral';
    if (value < 0.6) return 'Positive';
    return 'Very Positive';
  }

  /**
   * Update slider track color based on sentiment value
   */
  updateSliderColor(slider, value) {
    // Interpolate color based on value
    const negativeColor = { r: 200, g: 80, b: 80 };
    const neutralColor = { r: 156, g: 163, b: 175 };
    const positiveColor = { r: 80, g: 180, b: 100 };

    let r, g, b;
    if (value < 0) {
      const t = (value + 1);
      r = Math.round(negativeColor.r + (neutralColor.r - negativeColor.r) * t);
      g = Math.round(negativeColor.g + (neutralColor.g - negativeColor.g) * t);
      b = Math.round(negativeColor.b + (neutralColor.b - negativeColor.b) * t);
    } else {
      const t = value;
      r = Math.round(neutralColor.r + (positiveColor.r - neutralColor.r) * t);
      g = Math.round(neutralColor.g + (positiveColor.g - neutralColor.g) * t);
      b = Math.round(neutralColor.b + (positiveColor.b - neutralColor.b) * t);
    }

    const color = `rgb(${r}, ${g}, ${b})`;
    slider.style.setProperty('--slider-color', color);
  }

  destroy() {
    if (this.narrativeList) {
      this.narrativeList.destroy();
      this.narrativeList = null;
    }
  }
}

export default EditorView;
