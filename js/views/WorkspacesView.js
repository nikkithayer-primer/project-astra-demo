/**
 * WorkspacesView.js
 * Organize your analysis into focused workspaces
 */

import { BaseView } from './BaseView.js';

export class WorkspacesView extends BaseView {
  constructor(container, options = {}) {
    super(container, options);
  }

  async render() {
    this.container.innerHTML = `
      <div class="view-header">
        <div>
          <h1 class="view-title">Workspaces</h1>
          <p class="view-subtitle">Organize your analysis into focused workspaces</p>
        </div>
        <button class="btn btn-primary">+ New Workspace</button>
      </div>
      
      <div class="content-grid">
        <div class="card card-half">
          <div class="card-header">
            <span class="card-title">Election Integrity 2024</span>
            <span class="tag">Active</span>
          </div>
          <div class="card-body">
            <p class="text-sm text-secondary mb-md">Tracking narratives related to election security and voting processes.</p>
            <div class="flex gap-sm">
              <span class="badge">12 Narratives</span>
              <span class="badge">4 Factions</span>
              <span class="badge">8 Monitors</span>
            </div>
            <p class="text-xs text-muted mt-md">Last updated 2 hours ago</p>
          </div>
        </div>
        
        <div class="card card-half">
          <div class="card-header">
            <span class="card-title">Climate Disinformation</span>
            <span class="tag">Active</span>
          </div>
          <div class="card-body">
            <p class="text-sm text-secondary mb-md">Monitoring false claims about climate science and policy.</p>
            <div class="flex gap-sm">
              <span class="badge">8 Narratives</span>
              <span class="badge">6 Factions</span>
              <span class="badge">3 Monitors</span>
            </div>
            <p class="text-xs text-muted mt-md">Last updated 5 hours ago</p>
          </div>
        </div>
        
        <div class="card card-half">
          <div class="card-header">
            <span class="card-title">Health Misinformation</span>
            <span class="tag tag-neutral">Archived</span>
          </div>
          <div class="card-body">
            <p class="text-sm text-secondary mb-md">Historical analysis of health-related false claims.</p>
            <div class="flex gap-sm">
              <span class="badge">24 Narratives</span>
              <span class="badge">9 Factions</span>
              <span class="badge">0 Monitors</span>
            </div>
            <p class="text-xs text-muted mt-md">Archived 3 weeks ago</p>
          </div>
        </div>
        
        <div class="card card-half">
          <div class="card-body" style="display: flex; align-items: center; justify-content: center; min-height: 120px;">
            <div class="empty-state" style="padding: 0;">
              <div class="empty-state-icon">+</div>
              <p class="empty-state-text">Create New Workspace</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export default WorkspacesView;
