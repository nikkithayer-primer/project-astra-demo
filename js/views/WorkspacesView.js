/**
 * WorkspacesView.js
 * List view for saved workspaces with search results and document collections
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { PageHeader } from '../utils/PageHeader.js';
import { getWorkspaceEditor } from '../components/WorkspaceEditorModal.js';

export class WorkspacesView extends BaseView {
  constructor(container, options = {}) {
    super(container, options);
  }

  async render() {
    const workspaces = DataService.getWorkspaces();
    const activeWorkspaces = workspaces.filter(w => w.status === 'active');
    const archivedWorkspaces = workspaces.filter(w => w.status === 'archived');

    // Build workspace cards
    const activeCardsHtml = activeWorkspaces.map(w => this.renderWorkspaceCard(w)).join('');
    const archivedCardsHtml = archivedWorkspaces.map(w => this.renderWorkspaceCard(w)).join('');

    // Build content based on whether we have workspaces
    let contentHtml;
    if (workspaces.length === 0) {
      contentHtml = this.renderEmptyState();
    } else {
      contentHtml = `
        <div class="content-grid">
          ${activeCardsHtml}
          ${archivedCardsHtml}
        </div>
      `;
    }

    const headerHtml = PageHeader.render({
      breadcrumbs: [
        { label: 'Dashboard', href: '#/dashboard' },
        'Workspaces'
      ],
      title: 'Workspaces',
      subtitle: `${workspaces.length} workspace${workspaces.length !== 1 ? 's' : ''}`,
      description: 'Saved search results with document collections',
      actions: '<button class="btn btn-small btn-primary" id="create-workspace-btn">+ New Workspace</button>'
    });

    this.container.innerHTML = `
      ${headerHtml}
      
      <div class="content-area">
        ${contentHtml}
      </div>
    `;

    // Set up click handlers
    this.setupEventHandlers();
  }

  /**
   * Render a single workspace card
   * @param {Object} workspace - The workspace object
   * @returns {string} HTML string
   */
  renderWorkspaceCard(workspace) {
    const docCount = workspace.documentIds?.length || 0;
    const isArchived = workspace.status === 'archived';
    const updatedAt = this.formatRelativeTime(workspace.updatedAt);
    const statusTag = isArchived 
      ? '<span class="tag tag-neutral">Archived</span>'
      : '<span class="tag">Active</span>';

    return `
      <div class="card card-half workspace-card" data-workspace-id="${workspace.id}">
        <div class="card-header">
          <span class="card-title">${this.escapeHtml(workspace.name)}</span>
          ${statusTag}
        </div>
        <div class="card-body">
          <p class="text-sm text-secondary mb-md">Search: "${this.escapeHtml(workspace.query)}"</p>
          ${workspace.description ? `<p class="text-xs text-muted mb-md">${this.escapeHtml(workspace.description)}</p>` : ''}
          <div class="flex gap-sm">
            <span class="badge">${docCount} Document${docCount !== 1 ? 's' : ''}</span>
          </div>
          <p class="text-xs text-muted mt-md">Last updated ${updatedAt}</p>
        </div>
      </div>
    `;
  }

  /**
   * Render empty state when no workspaces exist
   * @returns {string} HTML string
   */
  renderEmptyState() {
    return `
      <div class="card">
        <div class="card-body" style="padding: var(--space-2xl);">
          <div style="max-width: 400px; margin: 0 auto; text-align: center;">
            <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="var(--text-muted)" stroke-width="1.5" style="margin-bottom: var(--space-md);">
              <rect x="2" y="3" width="20" height="18" rx="2"/>
              <path d="M8 7h8M8 11h8M8 15h4"/>
            </svg>
            <h2 style="font-size: var(--text-lg); font-weight: 500; color: var(--text-primary); margin-bottom: var(--space-sm);">No Workspaces Yet</h2>
            <p class="text-secondary text-sm mb-lg">Workspaces help you organize search results and track documents related to specific topics.</p>
            <button class="btn btn-primary" id="empty-create-btn">Create Your First Workspace</button>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Set up click handlers for cards and buttons
   */
  setupEventHandlers() {
    // Workspace card clicks - navigate to detail view
    const workspaceCards = this.container.querySelectorAll('.workspace-card');
    workspaceCards.forEach(card => {
      card.style.cursor = 'pointer';
      this.addListener(card, 'click', () => {
        const workspaceId = card.dataset.workspaceId;
        window.location.hash = `#/${workspaceId}/`;
      });
    });

    // Create workspace button in header
    const createBtn = this.container.querySelector('#create-workspace-btn');
    if (createBtn) {
      this.addListener(createBtn, 'click', () => {
        this.handleCreateWorkspace();
      });
    }

    // Empty state create button
    const emptyCreateBtn = this.container.querySelector('#empty-create-btn');
    if (emptyCreateBtn) {
      this.addListener(emptyCreateBtn, 'click', () => {
        this.handleCreateWorkspace();
      });
    }
  }

  /**
   * Handle create workspace action
   */
  handleCreateWorkspace() {
    const editor = getWorkspaceEditor();
    editor.openCreate((newWorkspace) => {
      // Navigate to the new workspace
      window.location.hash = `#/${newWorkspace.id}/`;
    });
  }

  /**
   * Format a date as relative time (e.g., "2 hours ago")
   * @param {string} isoDate - ISO date string
   * @returns {string} Formatted relative time
   */
  formatRelativeTime(isoDate) {
    if (!isoDate) return 'unknown';
    
    const date = new Date(isoDate);
    const now = new Date();
    const diffMs = now - date;
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diffDays / 7);
    
    if (diffMinutes < 1) return 'just now';
    if (diffMinutes < 60) return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    if (diffDays === 1) return 'yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffWeeks === 1) return '1 week ago';
    if (diffWeeks < 4) return `${diffWeeks} weeks ago`;
    
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
  }

}

export default WorkspacesView;
