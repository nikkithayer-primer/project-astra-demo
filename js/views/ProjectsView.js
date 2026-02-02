/**
 * ProjectsView.js
 * List view for manually curated document collections
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { dataStore } from '../data/DataStore.js';
import { PageHeader } from '../utils/PageHeader.js';
import { CardBuilder } from '../utils/CardBuilder.js';
import { Dropdown } from '../components/Dropdown.js';

export class ProjectsView extends BaseView {
  constructor(container, options = {}) {
    super(container, options);
  }

  async render() {
    const projects = DataService.getProjects();
    const activeProjects = projects.filter(p => p.status !== 'archived');
    const archivedProjects = projects.filter(p => p.status === 'archived');

    // Build project cards
    const activeCardsHtml = activeProjects.map(p => this.renderProjectCard(p)).join('');
    const archivedCardsHtml = archivedProjects.map(p => this.renderProjectCard(p)).join('');

    // Build archived section if there are any
    const archivedSectionHtml = archivedProjects.length > 0 ? `
      <div class="content-section">
        <h3 class="section-title text-muted">Archived</h3>
        <div class="content-grid">
          ${archivedCardsHtml}
        </div>
      </div>
    ` : '';

    // Build content based on whether we have projects
    let contentHtml;
    if (projects.length === 0) {
      contentHtml = this.renderEmptyState();
    } else {
      contentHtml = `
        <div class="content-grid">
          ${activeCardsHtml}
        </div>
        ${archivedSectionHtml}
      `;
    }

    const headerHtml = PageHeader.render({
      breadcrumbs: [
        { label: 'Dashboard', href: '#/dashboard' },
        'Projects'
      ],
      title: 'Projects',
      subtitle: `${projects.length} project${projects.length !== 1 ? 's' : ''}`,
      description: 'Curated document collections for research and reporting',
      actions: '<button class="btn btn-small btn-primary" id="create-project-btn" disabled title="Coming soon">+ New Project</button>'
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
   * Render a single project card
   * @param {Object} project - The project object
   * @returns {string} HTML string
   */
  renderProjectCard(project) {
    const docCount = project.documentIds?.length || 0;
    const isArchived = project.status === 'archived';
    const updatedAt = this.formatRelativeTime(project.updatedAt);

    // Build actions HTML using CardBuilder
    const actionsHtml = CardBuilder.actionMenu('project', project.id, { 
      isArchived, 
      editDisabled: true, 
      editTitle: 'Edit (coming soon)' 
    });

    return `
      <div class="card card-half-width project-card" data-project-id="${project.id}">
        <div class="card-header">
          <h2 class="card-title">${this.escapeHtml(project.name)}</h2>
          <div class="card-header-actions">${actionsHtml}</div>
        </div>
        <div class="card-body">
          ${project.description ? `<p class="text-sm text-secondary mb-md">${this.escapeHtml(project.description)}</p>` : ''}
          <div class="flex gap-sm">
            <span class="badge">${docCount} Document${docCount !== 1 ? 's' : ''}</span>
          </div>
          <p class="text-xs text-muted mt-md">Last updated ${updatedAt}</p>
        </div>
      </div>
    `;
  }

  /**
   * Render empty state when no projects exist
   * @returns {string} HTML string
   */
  renderEmptyState() {
    return `
      <div class="card">
        <div class="card-body" style="padding: var(--space-2xl);">
          <div style="max-width: 400px; margin: 0 auto; text-align: center;">
            <svg viewBox="0 0 16 16" width="48" height="48" fill="var(--text-muted)" style="margin-bottom: var(--space-md);">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2 1C1.44771 1 1 1.44772 1 2V14C1 14.5523 1.44771 15 2 15H14C14.5523 15 15 14.5523 15 14V3.5C15 2.94772 14.5523 2.5 14 2.5H8.26759L7.56446 1.4453C7.37899 1.1671 7.06676 1 6.73241 1H2ZM2 2H6.73241L7.43554 3.0547C7.62101 3.3329 7.93324 3.5 8.26759 3.5H14V4.5H2V2ZM2 5.5V14H14V5.5H2Z"/>
            </svg>
            <h2 style="font-size: var(--text-lg); font-weight: 500; color: var(--text-primary); margin-bottom: var(--space-sm);">No Projects Yet</h2>
            <p class="text-secondary text-sm mb-lg">Projects help you organize curated collections of documents for research and reporting.</p>
            <button class="btn btn-primary" id="empty-create-btn" disabled title="Coming soon">Create Your First Project</button>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Set up click handlers for cards and buttons
   */
  setupEventHandlers() {
    // Setup action menu dropdowns
    this.setupActionMenus();

    // Project card clicks - navigate to detail view
    const projectCards = this.container.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.style.cursor = 'pointer';
      this.addListener(card, 'click', () => {
        const projectId = card.dataset.projectId;
        window.location.hash = `#/${projectId}/`;
      });
    });

    // Create button clicks (disabled for now, but ready for future)
    const createBtns = this.container.querySelectorAll('#create-project-btn, #empty-create-btn');
    createBtns.forEach(btn => {
      this.addListener(btn, 'click', () => {
        // TODO: Open create project modal when implemented
        console.log('Create project - coming soon');
      });
    });
  }

  /**
   * Setup action menu dropdown handlers
   */
  setupActionMenus() {
    // Initialize all dropdowns using the Dropdown component
    this._actionDropdowns = Dropdown.initAll(this.container);
    
    // Listen for dropdown select events using event delegation
    this.addListener(this.container, 'dropdown:select', (e) => {
      const { item } = e.detail;
      const action = item.dataset.action;
      const projectId = item.dataset.projectId;
      
      if (action === 'edit' && !item.disabled) {
        // TODO: Open edit modal when implemented
        console.log('Edit project - coming soon');
      } else if (action === 'archive') {
        const project = DataService.getProject(projectId);
        if (project) {
          const newStatus = project.status === 'archived' ? 'active' : 'archived';
          // Update project status
          const projects = dataStore.data.projects || [];
          const projectIndex = projects.findIndex(p => p.id === projectId);
          if (projectIndex !== -1) {
            projects[projectIndex] = { 
              ...projects[projectIndex], 
              status: newStatus,
              updatedAt: new Date().toISOString()
            };
            dataStore.save();
          }
          this.render();
        }
      }
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

export default ProjectsView;
