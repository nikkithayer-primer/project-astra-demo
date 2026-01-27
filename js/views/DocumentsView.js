/**
 * DocumentsView.js
 * List view for all documents with document viewer
 * Uses DocumentTable component with viewer mode enabled
 * Supports column filtering and publisher type filtering
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { DocumentTable } from '../components/DocumentTable.js';
import { ColumnFilter } from '../components/ColumnFilter.js';

// All available columns with labels
const AVAILABLE_COLUMNS = {
  classification: 'Classification',
  documentType: 'Doc Type',
  publisherName: 'Publisher',
  publisherType: 'Publisher Type',
  title: 'Title',
  excerpt: 'Excerpt',
  publishedDate: 'Published',
  narratives: 'Narratives',
  themes: 'Themes',
  events: 'Events',
  locations: 'Locations',
  persons: 'People',
  organizations: 'Organizations',
  factions: 'Factions',
  topics: 'Topics'
};

// Default columns to show
const DEFAULT_COLUMNS = ['classification', 'documentType', 'publisherName', 'title', 'publishedDate', 'narratives', 'persons'];

// Publisher types with labels
const PUBLISHER_TYPES = {
  all: 'All Sources',
  social: 'Social Media',
  national_news: 'National News',
  international_news: 'International News',
  internal: 'Internal'
};

export class DocumentsView extends BaseView {
  constructor(container, options = {}) {
    super(container, options);
    this.documentTable = null;
    this.columnFilter = null;
    
    // Default columns
    this.selectedColumns = [...DEFAULT_COLUMNS];
    
    // Filter state
    this.publisherTypeFilter = 'all';
  }

  async render() {
    let documents = DataService.getDocuments();
    
    // Apply publisher type filter
    if (this.publisherTypeFilter !== 'all') {
      documents = documents.filter(doc => {
        const publisher = DataService.getPublisherForDocument(doc.id);
        return publisher && publisher.type === this.publisherTypeFilter;
      });
    }
    
    // Sort by published date descending by default
    documents.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));

    // Build publisher type options
    const publisherTypeOptionsHtml = Object.entries(PUBLISHER_TYPES).map(([key, label]) => {
      const selected = this.publisherTypeFilter === key ? 'selected' : '';
      return `<option value="${key}" ${selected}>${label}</option>`;
    }).join('');

    this.container.innerHTML = `
      <div class="page-header">
        <div class="breadcrumb">
          <a href="#/dashboard">Dashboard</a>
          <span>/</span>
          Documents
        </div>
        <h1>Documents</h1>
        <p class="subtitle">${documents.length} document${documents.length !== 1 ? 's' : ''}</p>
      </div>

      <div class="content-area">
        <div class="card">
          <div class="card-header">
            <span class="card-title">All Documents</span>
            <div class="card-header-actions">
              <!-- Publisher Type Filter -->
              <div class="filter-control">
                <label class="filter-label">Source Type</label>
                <select id="publisher-type-filter" class="filter-select">
                  ${publisherTypeOptionsHtml}
                </select>
              </div>
              
              <!-- Column Filter -->
              <div class="filter-control" id="column-filter-container"></div>
            </div>
          </div>
          <div class="card-body no-padding" id="documents-table-container"></div>
        </div>
      </div>
    `;

    // Initialize Column Filter component
    this.columnFilter = new ColumnFilter('column-filter-container', {
      availableColumns: AVAILABLE_COLUMNS,
      defaultColumns: DEFAULT_COLUMNS,
      requiredColumns: ['title'],
      onChange: (columns) => {
        this.selectedColumns = columns;
        if (this.documentTable) {
          this.documentTable.setColumns(columns);
        }
      }
    });
    this.columnFilter.setSelectedColumns(this.selectedColumns);
    this.columnFilter.render();

    // Initialize DocumentTable component with viewer mode
    this.documentTable = new DocumentTable('documents-table-container', {
      maxItems: 100,
      columns: this.selectedColumns,
      sortable: true,
      defaultSort: 'publishedDate',
      defaultSortDir: 'desc',
      enableViewerMode: true
    });

    this.documentTable.update({ documents });
    
    // Check for persisted viewer state in URL (e.g., #/documents?doc=doc-123)
    const hashParts = window.location.hash.split('?');
    if (hashParts[1]) {
      const urlParams = new URLSearchParams(hashParts[1]);
      const docId = urlParams.get('doc');
      if (docId) {
        const doc = documents.find(d => d.id === docId);
        if (doc) {
          // Open viewer without updating URL (it's already set)
          this.documentTable.openViewer(doc, false);
        }
      }
    }
    
    // Attach publisher type filter listener
    this.attachFilterListeners();
  }

  attachFilterListeners() {
    // Publisher type filter
    const publisherTypeSelect = document.getElementById('publisher-type-filter');
    if (publisherTypeSelect) {
      publisherTypeSelect.addEventListener('change', (e) => {
        this.publisherTypeFilter = e.target.value;
        this.render();
      });
    }
  }

  destroy() {
    if (this.columnFilter) {
      this.columnFilter.destroy();
      this.columnFilter = null;
    }
    
    if (this.documentTable) {
      this.documentTable.destroy();
      this.documentTable = null;
    }
    super.destroy();
  }
}

export default DocumentsView;
