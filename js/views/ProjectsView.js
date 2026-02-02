/**
 * ProjectsView.js
 * List view for manually curated document collections
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { dataStore } from '../data/DataStore.js';
import { PageHeader } from '../utils/PageHeader.js';
import { CardBuilder } from '../utils/CardBuilder.js';

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

    // Build content based on whether we have projects
    let contentHtml;
    if (projects.length === 0) {
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
    const statusTag = isArchived 
      ? '<span class="tag tag-neutral">Archived</span>'
      : '<span class="tag">Active</span>';

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
          ${statusTag}
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
            <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="var(--text-muted)" stroke-width="1.5" style="margin-bottom: var(--space-md);">
              <path d="M3 7h7l2 2h9v11H3V7z"/>
              <path d="M3 7V5a2 2 0 012-2h5l2 2"/>
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
    const actionMenus = this.container.querySelectorAll('.card-action-menu');
    
    actionMenus.forEach(menu => {
      const trigger = menu.querySelector('.card-action-menu-trigger');
      const projectId = menu.dataset.projectId;
      
      if (trigger) {
        this.addListener(trigger, 'click', (e) => {
          e.stopPropagation();
          
          // Close other open menus
          actionMenus.forEach(otherMenu => {
            if (otherMenu !== menu) {
              otherMenu.classList.remove('open');
            }
          });
          
          // Toggle this menu
          menu.classList.toggle('open');
        });
      }
      
      // Handle edit button click (currently disabled)
      const editBtn = menu.querySelector('.project-edit-btn');
      if (editBtn && !editBtn.disabled) {
        this.addListener(editBtn, 'click', (e) => {
          e.stopPropagation();
          menu.classList.remove('open');
          // TODO: Open edit modal when implemented
          console.log('Edit project - coming soon');
        });
      }
      
      // Handle archive button click
      const archiveBtn = menu.querySelector('.project-archive-btn');
      if (archiveBtn) {
        this.addListener(archiveBtn, 'click', (e) => {
          e.stopPropagation();
          menu.classList.remove('open');
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
        });
      }
    });
    
    // Close menus when clicking outside
    this.addListener(document, 'click', () => {
      actionMenus.forEach(menu => menu.classList.remove('open'));
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
