/**
 * ProjectsView.js
 * Stub page for Projects (feature removed for smaller demo)
 */

import { BaseView } from './BaseView.js';
import { PageHeader } from '../utils/PageHeader.js';

export class ProjectsView extends BaseView {
  constructor(container, options = {}) {
    super(container, options);
  }

  async render() {
    const headerHtml = PageHeader.render({
      breadcrumbs: [
        { label: 'AI Briefings', href: '#/monitors' },
        'Projects'
      ],
      title: 'Projects',
      subtitle: null,
      description: 'Projects are not available in this demo.'
    });

    this.container.innerHTML = `
      ${headerHtml}
      <div class="content-area">
        <div class="card">
          <div class="card-body">
            <p class="text-secondary">This page is a placeholder. Project management has been removed from this prototype.</p>
          </div>
        </div>
      </div>
    `;
  }
}

export default ProjectsView;
