/**
 * SearchView.js
 * Search documents and create a workspace with matching results
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { dataStore } from '../data/DataStore.js';

export class SearchView extends BaseView {
  constructor(container, options = {}) {
    super(container, options);
    this.searchQuery = '';
    this.matchCount = 0;
    this.debounceTimer = null;
  }

  async render() {
    this.container.innerHTML = `
      <div class="page-header">
        <h1>Search</h1>
        <p class="header-description text-secondary">Search documents to create a workspace</p>
      </div>
      
      <div class="content-area">
        <div class="search-page-container">
          <div class="search-bar-row">
            <div class="search-input-wrapper search-input-large">
              <svg viewBox="0 0 16 16" width="18" height="18" fill="none" stroke="var(--text-muted)" stroke-width="1.5" class="search-icon">
                <circle cx="7" cy="7" r="4.5"/>
                <path d="M10.5 10.5L14 14"/>
              </svg>
              <input 
                type="text" 
                id="search-input"
                class="search-input" 
                placeholder="Search documents..." 
                value="${this.escapeHtml(this.searchQuery)}"
              />
              <button class="search-clear-btn ${this.searchQuery ? '' : 'hidden'}" id="search-clear">
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M4 4l8 8M12 4l-8 8"/>
                </svg>
              </button>
            </div>
            <div class="search-match-count ${this.searchQuery.trim().length >= 2 ? '' : 'hidden'}" id="match-count">
              ${this.renderMatchCount()}
            </div>
          </div>
          
          <div class="search-hint">
            <p class="text-secondary text-sm">Type a query and press <kbd>Enter</kbd> to create a workspace with matching documents.</p>
          </div>
        </div>
      </div>
    `;

    this.setupEventHandlers();
    
    // Focus the search input
    const input = document.getElementById('search-input');
    if (input) input.focus();
  }

  /**
   * Render the match count display
   */
  renderMatchCount() {
    if (this.matchCount === 0) {
      return `<span class="match-count-zero">No matches</span>`;
    }
    return `<span class="match-count-number">${this.matchCount}</span> document${this.matchCount !== 1 ? 's' : ''}`;
  }

  /**
   * Set up event handlers
   */
  setupEventHandlers() {
    const input = document.getElementById('search-input');
    const clearBtn = document.getElementById('search-clear');

    if (input) {
      input.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.updateClearButton();
        this.debounceSearch();
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.clearSearch();
        } else if (e.key === 'Enter') {
          // Immediately create workspace and navigate
          if (this.debounceTimer) {
            clearTimeout(this.debounceTimer);
          }
          this.createWorkspaceFromSearch();
        }
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.clearSearch();
      });
    }
  }

  /**
   * Debounce search for updating match count
   */
  debounceSearch() {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    this.debounceTimer = setTimeout(() => {
      this.updateMatchCount();
    }, 150);
  }

  /**
   * Update the match count display
   */
  updateMatchCount() {
    const query = this.searchQuery.trim();
    const countContainer = document.getElementById('match-count');
    
    if (query.length < 2) {
      this.matchCount = 0;
      if (countContainer) {
        countContainer.classList.add('hidden');
      }
      return;
    }

    const results = DataService.search(query);
    this.matchCount = results.documents.length;
    
    if (countContainer) {
      countContainer.classList.remove('hidden');
      countContainer.innerHTML = this.renderMatchCount();
    }
  }

  /**
   * Create a workspace from the current search and navigate to it
   */
  createWorkspaceFromSearch() {
    const query = this.searchQuery.trim();
    if (query.length < 2) return;

    const results = DataService.search(query);
    const documentIds = results.documents.map(d => d.id);

    // Create the workspace (even if no documents match)
    const workspaceId = dataStore.createWorkspace({
      name: query,
      query: query,
      description: `Search results for "${query}"`,
      documentIds: documentIds,
      status: 'active'
    });

    // Navigate to the new workspace
    window.location.hash = `#/workspace/${workspaceId}`;
  }

  /**
   * Clear the search
   */
  clearSearch() {
    this.searchQuery = '';
    this.matchCount = 0;
    
    const input = document.getElementById('search-input');
    if (input) {
      input.value = '';
      input.focus();
    }
    
    this.updateClearButton();
    
    const countContainer = document.getElementById('match-count');
    if (countContainer) {
      countContainer.classList.add('hidden');
    }
  }

  /**
   * Update clear button visibility
   */
  updateClearButton() {
    const clearBtn = document.getElementById('search-clear');
    if (clearBtn) {
      clearBtn.classList.toggle('hidden', !this.searchQuery);
    }
  }
}

export default SearchView;
