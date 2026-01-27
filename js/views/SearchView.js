/**
 * SearchView.js
 * Search across all narratives, factions, events, and entities
 */

import { BaseView } from './BaseView.js';

export class SearchView extends BaseView {
  constructor(container, options = {}) {
    super(container, options);
  }

  async render() {
    this.container.innerHTML = `
      <div class="page-header">
        <h1>Search</h1>
        <p class="header-description text-secondary">Search across all narratives, factions, events, and entities</p>
      </div>
      
      <div class="content-area">
        <div class="card">
          <div class="card-body" style="padding: var(--space-2xl);">
            <div style="max-width: 600px; margin: 0 auto; text-align: center;">
              <div style="margin-bottom: var(--space-xl);">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="var(--text-muted)" stroke-width="1.5" style="margin-bottom: var(--space-md);">
                  <circle cx="11" cy="11" r="7"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
                <h2 style="font-size: var(--text-lg); font-weight: 500; color: var(--text-primary); margin-bottom: var(--space-sm);">Global Search</h2>
                <p class="text-secondary text-sm">Search functionality coming soon. This will allow you to search across all narratives, themes, factions, events, people, and organizations.</p>
              </div>
              
              <div style="position: relative; max-width: 400px; margin: 0 auto;">
                <input 
                  type="text" 
                  class="search-input" 
                  placeholder="Search narratives, factions, events..." 
                  style="width: 100%; padding: var(--space-md) var(--space-lg); padding-left: 44px; font-size: var(--text-base);"
                  disabled
                />
                <svg viewBox="0 0 16 16" width="18" height="18" fill="none" stroke="var(--text-muted)" stroke-width="1.5" style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%);">
                  <circle cx="7" cy="7" r="4.5"/>
                  <path d="M10.5 10.5L14 14"/>
                </svg>
              </div>
              
              <div style="margin-top: var(--space-2xl); display: flex; gap: var(--space-md); justify-content: center; flex-wrap: wrap;">
                <span class="badge">Narratives</span>
                <span class="badge">Themes</span>
                <span class="badge">Factions</span>
                <span class="badge">Events</span>
                <span class="badge">People</span>
                <span class="badge">Organizations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export default SearchView;
