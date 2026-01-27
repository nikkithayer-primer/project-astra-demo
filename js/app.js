/**
 * app.js
 * Main application entry point
 */

import { dataStore } from './data/DataStore.js';
import { DataService } from './data/DataService.js';
import { mockData as americanPoliticsData, datasetId as americanPoliticsId, datasetName as americanPoliticsName } from './data/datasets/american-politics/index.js';
import { mockData as chinaSemiconductorData, datasetId as chinaSemiconductorId, datasetName as chinaSemiconductorName } from './data/datasets/china-semiconductor/index.js';
import { mockData as walmartBrandData, datasetId as walmartBrandId, datasetName as walmartBrandName } from './data/datasets/walmart-brand/index.js';
import { Router } from './router.js';

// Dataset registry
const DATASETS = {
  [americanPoliticsId]: { 
    id: americanPoliticsId,
    name: americanPoliticsName, 
    data: americanPoliticsData 
  },
  [chinaSemiconductorId]: { 
    id: chinaSemiconductorId,
    name: chinaSemiconductorName, 
    data: chinaSemiconductorData 
  },
  [walmartBrandId]: { 
    id: walmartBrandId,
    name: walmartBrandName, 
    data: walmartBrandData 
  }
};

class App {
  constructor() {
    this.router = null;
    this.dataStore = dataStore;
    this.chatOpen = false;
  }

  /**
   * Initialize the application
   */
  async init() {
    // Initialize with the currently selected dataset
    this.initializeDataset();

    // Populate mission filter
    this.populateMissionFilter();
    
    // Initialize dataset switcher
    this.initDatasetSwitcher();

    // Initialize router
    this.router = new Router('app');
    this.router.init();

    // Initialize chat
    this.initChat();

    // Initialize dropdown navigation
    this.initDropdowns();

    // Update chat summary on route changes
    window.addEventListener('hashchange', () => this.updatePageSummary());
    
    // Show initial page summary
    setTimeout(() => this.updatePageSummary(), 100);

    // Subscribe to data changes
    this.dataStore.subscribe(() => {
      this.populateMissionFilter();
      // Also refresh time filter when data changes
      if (this.router) {
        this.router.refreshTimeFilter();
      }
    });
  }

  /**
   * Populate mission filter dropdown
   */
  populateMissionFilter() {
    const select = document.getElementById('mission-filter');
    if (!select) return;

    const missions = DataService.getMissions();
    const currentValue = select.value;

    select.innerHTML = `
      <option value="all">All Missions</option>
      ${missions.map(m => `
        <option value="${m.id}" ${currentValue === m.id ? 'selected' : ''}>
          ${m.name}
        </option>
      `).join('')}
    `;
  }

  /**
   * Initialize with the currently selected dataset
   */
  initializeDataset() {
    const currentDatasetId = this.dataStore.getCurrentDataset();
    const dataset = DATASETS[currentDatasetId] || DATASETS['american-politics'];
    
    // Load the dataset
    this.dataStore.data = { ...dataset.data };
    this.dataStore.setCurrentDatasetName(dataset.name);
    this.dataStore.save();
  }

  /**
   * Switch to a different dataset
   * @param {string} datasetId - The dataset identifier to switch to
   */
  switchDataset(datasetId) {
    const dataset = DATASETS[datasetId];
    if (!dataset) {
      console.error(`Unknown dataset: ${datasetId}`);
      return;
    }

    // Switch the dataset in the store (including the name)
    this.dataStore.switchDataset(datasetId, dataset.data, dataset.name);
    
    // Update UI indicators
    this.updateDatasetIndicators(datasetId);
    
    // Repopulate mission filter with new missions
    this.populateMissionFilter();
    
    // Reset the mission filter to 'all'
    const missionFilter = document.getElementById('mission-filter');
    if (missionFilter) {
      missionFilter.value = 'all';
    }
    
    // Reinitialize router to refresh views
    if (this.router) {
      this.router.init();
    }
    
    // Update page summary in chat
    this.updatePageSummary();
    
    // Show success notification
    this.showToast(`Switched to ${dataset.name} dataset`, 'success');
  }

  /**
   * Initialize dataset switcher UI and event handlers
   */
  initDatasetSwitcher() {
    const datasetOptions = document.querySelectorAll('.dataset-option');
    
    datasetOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        const datasetId = option.dataset.dataset;
        if (datasetId && datasetId !== this.dataStore.getCurrentDataset()) {
          this.switchDataset(datasetId);
        }
        
        // Close the dropdown
        const dropdown = option.closest('.nav-dropdown');
        if (dropdown) {
          dropdown.classList.remove('open');
        }
      });
    });
    
    // Set initial active state
    this.updateDatasetIndicators(this.dataStore.getCurrentDataset());
  }

  /**
   * Update dataset indicator UI elements
   * @param {string} activeDatasetId - The currently active dataset ID
   */
  updateDatasetIndicators(activeDatasetId) {
    const datasetOptions = document.querySelectorAll('.dataset-option');
    
    datasetOptions.forEach(option => {
      const isActive = option.dataset.dataset === activeDatasetId;
      option.classList.toggle('active', isActive);
    });
  }

  /**
   * Get available datasets
   * @returns {Array} Array of dataset objects
   */
  getDatasets() {
    return Object.values(DATASETS);
  }

  /**
   * Show toast notification
   */
  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span>${type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'}</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  /**
   * Show modal dialog
   */
  showModal(content, options = {}) {
    const container = document.getElementById('modal-container');
    const modalContent = container.querySelector('.modal-content');
    
    modalContent.innerHTML = content;
    container.classList.remove('hidden');

    // Close on backdrop click
    container.querySelector('.modal-backdrop').onclick = () => {
      if (!options.preventClose) {
        this.closeModal();
      }
    };

    // Close on escape key
    const escHandler = (e) => {
      if (e.key === 'Escape' && !options.preventClose) {
        this.closeModal();
        document.removeEventListener('keydown', escHandler);
      }
    };
    document.addEventListener('keydown', escHandler);
  }

  /**
   * Close modal dialog
   */
  closeModal() {
    const container = document.getElementById('modal-container');
    container.classList.add('hidden');
  }

  /**
   * Confirm dialog
   */
  confirm(message, title = 'Confirm') {
    return new Promise((resolve) => {
      this.showModal(`
        <div class="confirm-dialog">
          <div class="confirm-dialog-icon">⚠</div>
          <h3 class="confirm-dialog-title">${title}</h3>
          <p class="confirm-dialog-message">${message}</p>
          <div class="confirm-dialog-actions">
            <button class="btn btn-secondary" id="confirm-cancel">Cancel</button>
            <button class="btn btn-danger" id="confirm-ok">Confirm</button>
          </div>
        </div>
      `);

      document.getElementById('confirm-cancel').onclick = () => {
        this.closeModal();
        resolve(false);
      };

      document.getElementById('confirm-ok').onclick = () => {
        this.closeModal();
        resolve(true);
      };
    });
  }

  /**
   * Initialize chat functionality
   */
  initChat() {
    const chatToggle = document.getElementById('chat-toggle');
    const chatClose = document.getElementById('chat-close');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');

    if (chatToggle) {
      chatToggle.addEventListener('click', () => this.toggleChat());
    }

    if (chatClose) {
      chatClose.addEventListener('click', () => this.toggleChat(false));
    }

    if (chatInput) {
      // Auto-resize textarea
      chatInput.addEventListener('input', () => {
        chatInput.style.height = 'auto';
        chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + 'px';
      });

      // Send on Enter (without Shift)
      chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.sendChatMessage();
        }
      });
    }

    if (chatSend) {
      chatSend.addEventListener('click', () => this.sendChatMessage());
    }

  }

  /**
   * Initialize dropdown navigation menus
   */
  initDropdowns() {
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    
    dropdowns.forEach((dropdown) => {
      const trigger = dropdown.querySelector('.nav-dropdown-trigger, .avatar-trigger');
      
      if (trigger) {
        // Toggle on click
        trigger.addEventListener('click', (e) => {
          e.stopPropagation();
          
          // Close other dropdowns
          dropdowns.forEach(other => {
            if (other !== dropdown) {
              other.classList.remove('open');
            }
          });
          
          // Toggle this dropdown
          dropdown.classList.toggle('open');
        });
      }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-dropdown')) {
        dropdowns.forEach(dropdown => {
          dropdown.classList.remove('open');
        });
      }
    });
    
    // Close dropdowns when pressing Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdowns.forEach(dropdown => {
          dropdown.classList.remove('open');
        });
      }
    });
    
    // Close dropdown when a link inside is clicked
    dropdowns.forEach(dropdown => {
      const links = dropdown.querySelectorAll('.nav-dropdown-menu .nav-link');
      links.forEach(link => {
        link.addEventListener('click', () => {
          dropdown.classList.remove('open');
        });
      });
    });
  }

  /**
   * Toggle chat panel open/closed
   */
  toggleChat(forceState) {
    const chatPanel = document.getElementById('chat-panel');
    const chatToggle = document.getElementById('chat-toggle');
    
    this.chatOpen = forceState !== undefined ? forceState : !this.chatOpen;

    if (this.chatOpen) {
      chatPanel?.classList.add('open');
      chatToggle?.classList.add('active');
      document.body.classList.add('chat-open');
      
      // Focus input when opening
      setTimeout(() => {
        document.getElementById('chat-input')?.focus();
      }, 250);
    } else {
      chatPanel?.classList.remove('open');
      chatToggle?.classList.remove('active');
      document.body.classList.remove('chat-open');
    }
  }

  /**
   * Update the welcome message with a summary of the current page
   */
  updatePageSummary() {
    if (!this.router) return;
    
    const { route, id } = this.router.getCurrentRoute();
    const summary = this.generatePageSummary(route, id);
    
    const welcomeElement = document.getElementById('chat-welcome');
    if (welcomeElement && summary) {
      const contentElement = welcomeElement.querySelector('.chat-message-content');
      if (contentElement) {
        contentElement.innerHTML = summary;
        // Render sparklines after DOM update
        requestAnimationFrame(() => this.renderChatSparklines(contentElement));
      }
    }
  }

  /**
   * Render sparklines in the chat summary
   */
  renderChatSparklines(container) {
    const sparklineElements = container.querySelectorAll('.chat-sparkline');
    sparklineElements.forEach(el => {
      const valuesStr = el.dataset.values;
      const sentiment = parseFloat(el.dataset.sentiment) || 0;
      
      if (!valuesStr) return;
      
      const values = valuesStr.split(',').map(Number);
      if (values.length < 2 || values.every(v => v === 0)) return;
      
      const width = 50;
      const height = 16;
      const padding = 1;
      
      const max = Math.max(...values);
      const min = Math.min(...values);
      const range = max - min || 1;
      
      // Generate points for the polyline
      const points = values.map((v, i) => {
        const x = padding + (i / (values.length - 1)) * (width - padding * 2);
        const y = height - padding - ((v - min) / range) * (height - padding * 2);
        return `${x},${y}`;
      }).join(' ');
      
      // Color based on sentiment
      let color = '#888';
      if (sentiment > 0.2) color = 'var(--sentiment-positive, #66BB6A)';
      else if (sentiment < -0.2) color = 'var(--sentiment-negative, #E57373)';
      
      el.innerHTML = `<svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
        <polyline points="${points}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
    });
  }

  /**
   * Generate a contextual summary based on the current route
   */
  generatePageSummary(route, id) {
    switch (route) {
      case 'dashboard':
        return this.getDashboardSummary();
      case 'narrative':
        return id ? this.getNarrativeSummary(id) : this.getNarrativeListSummary();
      case 'narratives':
        return this.getNarrativeListSummary();
      case 'subnarrative':
        return id ? this.getSubNarrativeSummary(id) : null;
      case 'faction':
        return id ? this.getFactionSummary(id) : this.getFactionListSummary();
      case 'factions':
        return this.getFactionListSummary();
      case 'location':
        return id ? this.getLocationSummary(id) : this.getLocationListSummary();
      case 'locations':
        return this.getLocationListSummary();
      case 'event':
        return id ? this.getEventSummary(id) : this.getEventListSummary();
      case 'events':
        return this.getEventListSummary();
      case 'person':
        return id ? this.getPersonSummary(id) : this.getEntityListSummary();
      case 'organization':
        return id ? this.getOrganizationSummary(id) : this.getEntityListSummary();
      case 'entities':
        return this.getEntityListSummary();
      case 'document':
        return id ? this.getDocumentSummary(id) : null;
      default:
        return `<strong>${route.charAt(0).toUpperCase() + route.slice(1)}</strong> page. Ask questions about this data to get started.`;
    }
  }

  /**
   * Generate dashboard summary
   */
  getDashboardSummary() {
    const narratives = DataService.getNarratives();
    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    
    // Filter narratives with activity in the last 24 hours
    const recentNarratives = narratives.filter(n => {
      // Check volumeOverTime for recent dates
      if (n.volumeOverTime && n.volumeOverTime.length > 0) {
        return n.volumeOverTime.some(entry => {
          const entryDate = new Date(entry.date);
          return entryDate >= oneDayAgo;
        });
      }
      // Fallback to createdAt
      if (n.createdAt) {
        return new Date(n.createdAt) >= oneDayAgo;
      }
      return false;
    });
    
    // Calculate total volume for each recent narrative
    const narrativesWithVolume = recentNarratives.map(n => {
      const totalVolume = Object.values(n.factionMentions || {})
        .reduce((sum, f) => sum + (f.volume || 0), 0);
      const themes = DataService.getSubNarrativesForNarrative(n.id);
      return { ...n, totalVolume, themes };
    });
    
    // Sort by volume (highest first)
    narrativesWithVolume.sort((a, b) => b.totalVolume - a.totalVolume);
    
    if (narrativesWithVolume.length === 0) {
      return `<strong>Activity in the last 24 hours:</strong><br><br>` +
        `No narrative activity detected.<br><br>` +
        `Try asking clarifying information about a narrative, related narratives, or trends over time.`;
    }
    
    // Build the narrative list HTML
    let listHtml = `<strong>Activity in the last 24 hours:</strong>`;
    listHtml += `<div class="chat-narrative-list">`;
    
    narrativesWithVolume.forEach((n, index) => {
      const title = this.escapeHtml(n.title || n.text?.substring(0, 80) + '...');
      const volumeDisplay = n.totalVolume.toLocaleString();
      const sparklineData = this.getSparklineData(n.volumeOverTime);
      const isTopNarrative = index === 0;
      
      // Narrative item container
      listHtml += `<div class="chat-narrative-item${isTopNarrative ? ' top-narrative' : ''}">`;
      
      // Narrative title as link
      listHtml += `<a href="#/narrative/${n.id}" class="chat-narrative-title">${title}</a>`;
      
      // Volume and sparkline row
      listHtml += `<div class="chat-narrative-meta">`;
      listHtml += `<span class="chat-narrative-volume">${volumeDisplay} mentions</span>`;
      if (sparklineData.length > 1) {
        listHtml += `<span class="chat-sparkline" data-values="${sparklineData.join(',')}" data-sentiment="${n.sentiment || 0}"></span>`;
      }
      listHtml += `</div>`;
      
      // Themes if any
      if (n.themes && n.themes.length > 0) {
        listHtml += `<div class="chat-themes-list">`;
        n.themes.slice(0, 3).forEach(theme => {
          const themeTitle = this.escapeHtml(theme.title || theme.text?.substring(0, 50) + '...');
          listHtml += `<a href="#/subnarrative/${theme.id}" class="chat-theme-link">`;
          listHtml += `<svg viewBox="0 0 16 16" width="10" height="10" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 0v12h8"/></svg>`;
          listHtml += `<span>${themeTitle}</span>`;
          listHtml += `</a>`;
        });
        if (n.themes.length > 3) {
          listHtml += `<span class="chat-themes-more">+${n.themes.length - 3} more</span>`;
        }
        listHtml += `</div>`;
      }
      
      listHtml += `</div>`;
    });
    
    listHtml += `</div>`;
    listHtml += `<div class="chat-summary-footer">Try asking clarifying information about a narrative, related narratives, or trends over time.</div>`;
    
    return listHtml;
  }

  /**
   * Extract sparkline data values from volumeOverTime
   */
  getSparklineData(volumeOverTime) {
    if (!volumeOverTime || volumeOverTime.length === 0) {
      return [];
    }
    return volumeOverTime.map(d =>
      Object.values(d.factionVolumes || {}).reduce((a, b) => a + b, 0)
    );
  }

  /**
   * Generate narrative detail summary
   */
  getNarrativeSummary(id) {
    const narrative = DataService.getNarrativeById(id);
    if (!narrative) return null;
    
    const subNarratives = DataService.getSubNarrativesForNarrative(id);
    const factions = DataService.getFactionsForNarrative(id);
    const sentiment = narrative.sentiment || 0;
    const sentimentLabel = sentiment > 0.2 ? 'positive' : sentiment < -0.2 ? 'negative' : 'neutral';
    
    return `<strong>Narrative: ${this.escapeHtml(narrative.title || narrative.text?.substring(0, 50) + '...')}</strong><br><br>` +
      `<strong>Status:</strong> ${narrative.status || 'unknown'}<br>` +
      `<strong>Sentiment:</strong> ${sentimentLabel} (${(sentiment * 100).toFixed(0)}%)<br>` +
      `<strong>Themes:</strong> ${subNarratives.length}<br>` +
      `<strong>Factions involved:</strong> ${factions.length}<br><br>` +
      `Ask about factions pushing this narrative, sentiment trends, or related events.`;
  }

  /**
   * Generate narrative list summary
   */
  getNarrativeListSummary() {
    const narratives = DataService.getNarratives();
    const newCount = narratives.filter(n => n.status === 'new').length;
    
    return `<strong>Narratives List</strong><br><br>` +
      `Viewing <strong>${narratives.length} narratives</strong> total.<br>` +
      `${newCount > 0 ? `<strong>${newCount} new narratives</strong> require attention.<br><br>` : '<br>'}` +
      `Ask about emerging patterns or high-priority narratives.`;
  }

  /**
   * Generate theme summary
   */
  getSubNarrativeSummary(id) {
    const subNarrative = DataService.getSubNarrativeById(id);
    if (!subNarrative) return null;
    
    const parentNarrative = DataService.getNarrativeById(subNarrative.narrativeId);
    
    return `<strong>Theme: ${this.escapeHtml(subNarrative.title || subNarrative.text?.substring(0, 50) + '...')}</strong><br><br>` +
      (parentNarrative ? `<strong>Parent narrative:</strong> ${this.escapeHtml(parentNarrative.title || 'Untitled')}<br><br>` : '') +
      `Ask about how this theme relates to the broader narrative or faction involvement.`;
  }

  /**
   * Generate faction detail summary
   */
  getFactionSummary(id) {
    const faction = DataService.getFactionById(id);
    if (!faction) return null;
    
    const narratives = DataService.getNarrativesForFaction(id);
    
    return `<strong>Faction: ${this.escapeHtml(faction.name)}</strong><br><br>` +
      (faction.description ? `${this.escapeHtml(faction.description.substring(0, 150))}...<br><br>` : '') +
      `<strong>Associated narratives:</strong> ${narratives.length}<br><br>` +
      `Ask about this faction's narrative patterns, activity trends, or coordinated behavior.`;
  }

  /**
   * Generate faction list summary
   */
  getFactionListSummary() {
    const factions = DataService.getFactions();
    
    return `<strong>Factions List</strong><br><br>` +
      `Tracking <strong>${factions.length} factions</strong>.<br><br>` +
      `Ask to compare faction activities or identify coordination patterns.`;
  }

  /**
   * Generate location detail summary
   */
  getLocationSummary(id) {
    const location = DataService.getLocationById(id);
    if (!location) return null;
    
    const narratives = DataService.getNarrativesForLocation(id);
    
    return `<strong>Location: ${this.escapeHtml(location.name)}</strong><br><br>` +
      `<strong>Narratives mentioning this location:</strong> ${narratives.length}<br><br>` +
      `Ask about regional narrative patterns or activity trends for this area.`;
  }

  /**
   * Generate location list summary
   */
  getLocationListSummary() {
    const locations = DataService.getLocations();
    
    return `<strong>Locations List</strong><br><br>` +
      `Tracking narratives across <strong>${locations.length} locations</strong>.<br><br>` +
      `Ask to identify geographic hotspots or regional patterns.`;
  }

  /**
   * Generate event detail summary
   */
  getEventSummary(id) {
    const event = DataService.getEventById(id);
    if (!event) return null;
    
    const narratives = DataService.getNarrativesForEvent(id);
    
    return `<strong>Event: ${this.escapeHtml(event.title || event.name)}</strong><br><br>` +
      (event.date ? `<strong>Date:</strong> ${new Date(event.date).toLocaleDateString()}<br>` : '') +
      `<strong>Related narratives:</strong> ${narratives.length}<br><br>` +
      `Ask about narrative activity around this event or related developments.`;
  }

  /**
   * Generate event list summary
   */
  getEventListSummary() {
    const events = DataService.getEvents();
    
    return `<strong>Events Timeline</strong><br><br>` +
      `Tracking <strong>${events.length} events</strong>.<br><br>` +
      `Ask about correlations between events and narrative spikes.`;
  }

  /**
   * Generate person summary
   */
  getPersonSummary(id) {
    const person = DataService.getPersonById(id);
    if (!person) return null;
    
    const narratives = DataService.getNarrativesForPerson(id);
    
    return `<strong>Person: ${this.escapeHtml(person.name)}</strong><br><br>` +
      (person.role ? `<strong>Role:</strong> ${this.escapeHtml(person.role)}<br>` : '') +
      `<strong>Mentioned in:</strong> ${narratives.length} narratives<br><br>` +
      `Ask about narratives involving this person or sentiment trends.`;
  }

  /**
   * Generate organization summary
   */
  getOrganizationSummary(id) {
    const org = DataService.getOrganizationById(id);
    if (!org) return null;
    
    const narratives = DataService.getNarrativesForOrganization(id);
    
    return `<strong>Organization: ${this.escapeHtml(org.name)}</strong><br><br>` +
      (org.type ? `<strong>Type:</strong> ${this.escapeHtml(org.type)}<br>` : '') +
      `<strong>Mentioned in:</strong> ${narratives.length} narratives<br><br>` +
      `Ask about narratives involving this organization or related entities.`;
  }

  /**
   * Generate entity list summary
   */
  getEntityListSummary() {
    const persons = DataService.getPersons();
    const orgs = DataService.getOrganizations();
    
    return `<strong>Entities List</strong><br><br>` +
      `Tracking <strong>${persons.length} people</strong> and <strong>${orgs.length} organizations</strong>.<br><br>` +
      `Ask about entity relationships or key actors in specific narratives.`;
  }

  /**
   * Generate document summary
   */
  getDocumentSummary(id) {
    const doc = DataService.getDocumentById(id);
    if (!doc) return null;
    
    return `<strong>Document: ${this.escapeHtml(doc.title || 'Untitled')}</strong><br><br>` +
      (doc.source ? `<strong>Source:</strong> ${this.escapeHtml(doc.source)}<br>` : '') +
      (doc.date ? `<strong>Date:</strong> ${new Date(doc.date).toLocaleDateString()}<br><br>` : '<br>') +
      `Ask about key claims in this document or related narratives.`;
  }

  /**
   * Send a chat message
   */
  sendChatMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    
    if (!chatInput || !chatMessages) return;

    const message = chatInput.value.trim();
    if (!message) return;

    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message user';
    userMsg.innerHTML = `<div class="chat-message-content">${this.escapeHtml(message)}</div>`;
    chatMessages.appendChild(userMsg);

    // Clear input
    chatInput.value = '';
    chatInput.style.height = 'auto';

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Show typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'chat-message assistant';
    typingIndicator.innerHTML = `
      <div class="chat-typing">
        <span class="chat-typing-dot"></span>
        <span class="chat-typing-dot"></span>
        <span class="chat-typing-dot"></span>
      </div>
    `;
    chatMessages.appendChild(typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Simulate response delay
    setTimeout(() => {
      typingIndicator.remove();
      this.addAssistantMessage(this.getPlaceholderResponse(message));
    }, 1000 + Math.random() * 1000);
  }

  /**
   * Add an assistant message to the chat
   */
  addAssistantMessage(text) {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;

    const assistantMsg = document.createElement('div');
    assistantMsg.className = 'chat-message assistant';
    assistantMsg.innerHTML = `<div class="chat-message-content">${text}</div>`;
    chatMessages.appendChild(assistantMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  /**
   * Get a placeholder response based on the user's message
   */
  getPlaceholderResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Context-aware placeholder responses
    if (lowerMessage.includes('narrative') || lowerMessage.includes('story')) {
      return "Several narratives match this query. A full implementation would analyze the narrative database and provide insights on themes, sentiment trends, and faction involvement. Explore narratives using the sidebar navigation.";
    }
    
    if (lowerMessage.includes('faction') || lowerMessage.includes('group')) {
      return "Faction analysis is a key feature of Primer. This would typically include breakdowns of faction activities, associated narratives, and sentiment patterns. Check the Factions view for detailed faction information.";
    }
    
    if (lowerMessage.includes('event') || lowerMessage.includes('timeline')) {
      return "Events are tracked chronologically in the system. This feature can help identify patterns, correlations between events and narrative spikes, or flag significant developments. The Events view shows the full timeline.";
    }
    
    if (lowerMessage.includes('location') || lowerMessage.includes('where') || lowerMessage.includes('map')) {
      return "Geographic analysis helps identify regional narrative patterns. Location-based data reveals hotspots and regional trends. Explore the Locations view for map-based insights.";
    }
    
    if (lowerMessage.includes('help') || lowerMessage.includes('what can you')) {
      return "This chat can help analyze disinformation narratives, track faction activities, identify trends, and explore connections in the data. Ask about specific narratives, factions, events, or locations. Note: This is a mockup with placeholder responses.";
    }
    
    if (lowerMessage.includes('trend') || lowerMessage.includes('pattern')) {
      return "Trend analysis shows how narratives evolve over time, identifies emerging themes, and detects coordinated amplification patterns. The dashboard charts provide visual trend information.";
    }

    // Default responses
    const defaultResponses = [
      "Query received: \"" + message.substring(0, 50) + (message.length > 50 ? "..." : "") + "\". In a production environment, this would query the narrative database and provide detailed analysis. Explore the dashboard to find relevant information.",
      "Interesting question. While this is showing placeholder responses, a full implementation would provide AI-powered insights based on the narrative data. Browse the available views for more information.",
      "Query noted. The complete system would analyze patterns across narratives, factions, and events to provide actionable intelligence. The sidebar navigation helps explore different data categories.",
      "Thanks for the question. This mockup demonstrates the chat interface. A production version would integrate with AI models to provide real-time analysis of disinformation narratives and faction activities."
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  }

  /**
   * Escape HTML to prevent XSS
   */
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Create and initialize app
const app = new App();

// Make app globally accessible
window.app = app;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});

export default app;
