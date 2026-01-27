/**
 * ProjectsView.js
 * Manage and track your analysis projects
 */

import { BaseView } from './BaseView.js';

export class ProjectsView extends BaseView {
  constructor(container, options = {}) {
    super(container, options);
  }

  async render() {
    this.container.innerHTML = `
      <div class="view-header">
        <div>
          <h1 class="view-title">Projects</h1>
          <p class="view-subtitle">Manage and track your analysis projects</p>
        </div>
        <button class="btn btn-primary">+ New Project</button>
      </div>
      
      <div class="content-area">
        <div class="card">
          <div class="card-body" style="padding: var(--space-2xl);">
            <div style="max-width: 600px; margin: 0 auto; text-align: center;">
              <div style="margin-bottom: var(--space-xl);">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="var(--text-muted)" stroke-width="1.5" style="margin-bottom: var(--space-md);">
                  <path d="M3 7h7l2 2h9v11H3V7z"/>
                  <path d="M3 7V5a2 2 0 012-2h5l2 2"/>
                </svg>
                <h2 style="font-size: var(--text-lg); font-weight: 500; color: var(--text-primary); margin-bottom: var(--space-sm);">Projects</h2>
                <p class="text-secondary text-sm">Projects feature coming soon. This will allow you to organize your analysis work into discrete projects with dedicated resources and collaborators.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export default ProjectsView;
