/**
 * ProjectView.js
 * Stub for project detail (feature removed for smaller demo)
 */

import { BaseView } from './BaseView.js';
import { PageHeader } from '../utils/PageHeader.js';

export class ProjectView extends BaseView {
  constructor(container, projectId, options = {}) {
    super(container, options);
    this.projectId = projectId;
  }

  async render() {
    const headerHtml = PageHeader.render({
      breadcrumbs: [
        { label: 'AI Briefings', href: '#/monitors' },
        { label: 'Projects', href: '#/projects' },
        'Project'
      ],
      title: 'Project',
      subtitle: null,
      description: 'Project detail is not available in this demo.'
    });

    this.container.innerHTML = `
      ${headerHtml}
      <div class="content-area">
        <div class="card">
          <div class="card-body">
            <p class="text-secondary">This page is a placeholder. Project detail has been removed from this prototype.</p>
            <a href="#/projects" class="btn btn-secondary">Back to Projects</a>
          </div>
        </div>
      </div>
    `;
  }
}

export default ProjectView;
