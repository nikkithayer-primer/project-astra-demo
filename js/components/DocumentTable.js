/**
 * DocumentTable.js
 * Flexible table view for documents with customizable columns
 * Supports related entities: narratives, events, locations, persons, organizations, factions, topics
 * Supports classification and document type display
 * Supports viewer mode: clicking title shows document content in split view
 */

import { BaseComponent } from './BaseComponent.js';
import { DataService } from '../data/DataService.js';
import { renderClassificationBadge } from './ClassificationBanner.js';
import { DocumentContentRenderer } from './DocumentContentRenderer.js';
import { NarrativeList } from './NarrativeList.js';
import { SubNarrativeList } from './SubNarrativeList.js';
import { MapView } from './MapView.js';
import { Timeline } from './Timeline.js';
import { NetworkGraph } from './NetworkGraph.js';
import { CardBuilder } from '../utils/CardBuilder.js';
import { initAllCardToggles } from '../utils/cardWidthToggle.js';
import { 
  CLASSIFICATION_LEVELS, 
  DOCUMENT_TYPES,
  DOCUMENT_TYPE_INFO,
  PLACEHOLDERS,
  getDocumentTypeInfo,
  isSocialMedia
} from '../utils/classification.js';

// Column configuration
const COLUMN_CONFIG = {
  classification: {
    label: 'Class',
    width: '45px',
    minWidth: '40px',
    sortable: true,
    getValue: (doc) => {
      const level = CLASSIFICATION_LEVELS[doc.classification || 'U'];
      return level ? level.order : 0;
    }
  },
  documentType: {
    label: 'Type',
    width: '100px',
    minWidth: '80px',
    sortable: true,
    getValue: (doc) => doc.documentType || 'news_article'
  },
  publisherName: {
    label: 'Publisher',
    width: '130px',
    minWidth: '100px',
    sortable: true,
    getValue: (doc, self) => self.getPublisherName(self.getDocPublisherId(doc)).toLowerCase()
  },
  publisherType: {
    label: 'Type',
    width: '80px',
    minWidth: '70px',
    sortable: true,
    getValue: (doc, self) => self.getPublisherType(self.getDocPublisherId(doc))
  },
  title: {
    label: 'Title',
    width: 'auto',
    minWidth: '200px',
    sortable: true,
    getValue: (doc) => (doc.title || '').toLowerCase()
  },
  excerpt: {
    label: 'Excerpt',
    width: '400px',
    minWidth: '280px',
    sortable: false,
    getValue: () => ''
  },
  publishedDate: {
    label: 'Published',
    width: '120px',
    minWidth: '110px',
    sortable: true,
    getValue: (doc) => doc.publishedDate ? new Date(doc.publishedDate).getTime() : 0
  },
  narratives: {
    label: 'Narratives',
    width: '180px',
    minWidth: '140px',
    sortable: true,
    idField: 'narrativeIds',
    getValue: (doc) => (doc.narrativeIds || []).length,
    getEntities: (doc) => (doc.narrativeIds || []).map(id => DataService.getNarrative(id)).filter(Boolean),
    route: 'narrative',
    displayField: 'text'
  },
  themes: {
    label: 'Themes',
    width: '180px',
    minWidth: '140px',
    sortable: true,
    idField: 'subNarrativeIds',
    getValue: (doc) => (doc.subNarrativeIds || []).length,
    getEntities: (doc) => (doc.subNarrativeIds || []).map(id => DataService.getSubNarrative(id)).filter(Boolean),
    route: 'subnarrative',
    displayField: 'text'
  },
  events: {
    label: 'Events',
    width: '180px',
    minWidth: '140px',
    sortable: true,
    idField: 'eventIds',
    getValue: (doc) => (doc.eventIds || []).length,
    getEntities: (doc) => (doc.eventIds || []).map(id => DataService.getEvent(id)).filter(Boolean),
    route: 'event',
    displayField: 'text'
  },
  locations: {
    label: 'Locations',
    width: '160px',
    minWidth: '120px',
    sortable: true,
    idField: 'locationIds',
    getValue: (doc) => (doc.locationIds || []).length,
    getEntities: (doc) => (doc.locationIds || []).map(id => DataService.getLocation(id)).filter(Boolean),
    route: 'location',
    displayField: 'name'
  },
  persons: {
    label: 'People',
    width: '160px',
    minWidth: '120px',
    sortable: true,
    idField: 'personIds',
    getValue: (doc) => (doc.personIds || []).length,
    getEntities: (doc) => (doc.personIds || []).map(id => DataService.getPerson(id)).filter(Boolean),
    route: 'person',
    displayField: 'name'
  },
  organizations: {
    label: 'Organizations',
    width: '160px',
    minWidth: '120px',
    sortable: true,
    idField: 'organizationIds',
    getValue: (doc) => (doc.organizationIds || []).length,
    getEntities: (doc) => (doc.organizationIds || []).map(id => DataService.getOrganization(id)).filter(Boolean),
    route: 'organization',
    displayField: 'name'
  },
  factions: {
    label: 'Factions',
    width: '160px',
    minWidth: '120px',
    sortable: true,
    idField: 'factionIds',
    getValue: (doc) => (doc.factionIds || []).length,
    getEntities: (doc) => (doc.factionIds || []).map(id => DataService.getFaction(id)).filter(Boolean),
    route: 'faction',
    displayField: 'name'
  },
  topics: {
    label: 'Topics',
    width: '180px',
    minWidth: '140px',
    sortable: true,
    idField: 'topicIds',
    getValue: (doc) => (doc.topicIds || []).length,
    getEntities: (doc) => {
      // Topics store documentIds, so we need reverse lookup
      const topics = DataService.getTopics() || [];
      return topics.filter(t => (t.documentIds || []).includes(doc.id));
    },
    route: 'topic',
    displayField: 'headline'
  }
};

// Storage key for read documents
const READ_DOCS_STORAGE_KEY = 'primer_read_documents';

export class DocumentTable extends BaseComponent {
  constructor(containerId, options = {}) {
    super(containerId, {
      maxItems: 50,
      // Define which columns to show (in order)
      columns: ['publisherName', 'publisherType', 'title', 'excerpt', 'publishedDate', 'narratives'],
      sortable: true,
      defaultSort: 'publishedDate',
      defaultSortDir: 'desc',
      // Max items to show per entity cell before "+X more"
      maxEntitiesPerCell: 2,
      // Truncate length for entity display text
      truncateLength: 40,
      // Click handlers
      onDocumentClick: null,
      onEntityClick: null, // Generic handler for any entity click
      // Enable viewer mode (click title to view document content)
      enableViewerMode: true,
      // Show read/unread indicator
      showReadIndicator: true,
      ...options
    });
    
    this.sortColumn = this.options.defaultSort;
    this.sortDirection = this.options.defaultSortDir;
    
    // Viewer mode state
    this.viewerMode = false;
    this.selectedDocument = null;
    this.contentRenderer = null;
    this.viewerTab = 'content'; // 'content' or 'details'
    this._keydownHandler = null;
  }

  /**
   * Check if a document has been read
   * @param {string} docId - Document ID
   * @returns {boolean}
   */
  static isDocumentRead(docId) {
    try {
      const readDocs = JSON.parse(localStorage.getItem(READ_DOCS_STORAGE_KEY) || '[]');
      return readDocs.includes(docId);
    } catch (e) {
      return false;
    }
  }

  /**
   * Mark a document as read
   * @param {string} docId - Document ID
   */
  static markDocumentAsRead(docId) {
    try {
      const readDocs = JSON.parse(localStorage.getItem(READ_DOCS_STORAGE_KEY) || '[]');
      if (!readDocs.includes(docId)) {
        readDocs.push(docId);
        localStorage.setItem(READ_DOCS_STORAGE_KEY, JSON.stringify(readDocs));
      }
    } catch (e) {
      console.warn('Could not save read state to localStorage:', e);
    }
  }

  /**
   * Mark a document as unread
   * @param {string} docId - Document ID
   */
  static markDocumentAsUnread(docId) {
    try {
      const readDocs = JSON.parse(localStorage.getItem(READ_DOCS_STORAGE_KEY) || '[]');
      const index = readDocs.indexOf(docId);
      if (index > -1) {
        readDocs.splice(index, 1);
        localStorage.setItem(READ_DOCS_STORAGE_KEY, JSON.stringify(readDocs));
      }
    } catch (e) {
      console.warn('Could not save read state to localStorage:', e);
    }
  }

  /**
   * Get the unread indicator HTML
   * @param {string} docId - Document ID
   * @returns {string} HTML string for unread indicator or empty string
   */
  getUnreadIndicator(docId) {
    if (!this.options.showReadIndicator) return '';
    if (DocumentTable.isDocumentRead(docId)) return '';
    return '<span class="doc-unread-indicator" title="Unread"></span>';
  }

  formatDate(dateString) {
    if (!dateString) return { date: '', time: '' };
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      time: date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit'
      })
    };
  }

  /**
   * Get the publisher/source ID from a document
   * Handles both 'publisherId' and 'sourceId' field names
   * @param {Object} doc - The document object
   * @returns {string|null} The publisher or source ID
   */
  getDocPublisherId(doc) {
    return doc?.publisherId || doc?.sourceId || null;
  }

  getPublisherName(publisherId) {
    if (!publisherId) return '';
    const publisher = DataService.getPublisher(publisherId);
    return publisher ? publisher.name : '';
  }

  getPublisherColor(publisherId) {
    if (!publisherId) return null;
    const publisher = DataService.getPublisher(publisherId);
    return publisher ? publisher.color : null;
  }

  getPublisherType(publisherId) {
    if (!publisherId) return '';
    const publisher = DataService.getPublisher(publisherId);
    return publisher ? publisher.type : '';
  }

  getPublisherTypeLabel(type) {
    const labels = {
      'social': 'Social',
      'national_news': 'National',
      'international_news': 'Int\'l',
      'internal': 'Internal'
    };
    return labels[type] || type;
  }

  sortDocuments(documents) {
    const sorted = [...documents];
    const dir = this.sortDirection === 'asc' ? 1 : -1;
    const config = COLUMN_CONFIG[this.sortColumn];

    if (!config) return sorted;

    sorted.sort((a, b) => {
      const valA = config.getValue(a, this);
      const valB = config.getValue(b, this);

      if (typeof valA === 'string') {
        return dir * valA.localeCompare(valB);
      }
      return dir * (valA - valB);
    });

    return sorted;
  }

  toggleSort(column) {
    const config = COLUMN_CONFIG[column];
    if (!config || !config.sortable) return;

    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      // Default to desc for dates and counts, asc for text
      this.sortDirection = (column === 'publishedDate' || config.idField) ? 'desc' : 'asc';
    }
    this.render();
  }

  getSortIcon(column) {
    const config = COLUMN_CONFIG[column];
    if (!config || !config.sortable) return '';

    if (this.sortColumn !== column) {
      return `<svg class="sort-icon sort-icon-inactive" viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
        <path d="M8 4l4 4H4l4-4zM8 12l-4-4h8l-4 4z"/>
      </svg>`;
    }
    
    if (this.sortDirection === 'asc') {
      return `<svg class="sort-icon sort-icon-active" viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
        <path d="M8 4l4 4H4l4-4z"/>
      </svg>`;
    }
    
    return `<svg class="sort-icon sort-icon-active" viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
      <path d="M8 12l-4-4h8l-4 4z"/>
    </svg>`;
  }

  truncateText(text, maxLength) {
    if (!text || text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '…';
  }

  renderHeaderCell(column) {
    const config = COLUMN_CONFIG[column];
    if (!config) return '';

    const sortable = this.options.sortable && config.sortable;
    return `
      <th class="doc-col-${column} ${sortable ? 'sortable' : ''}" data-column="${column}">
        <span class="th-content">
          ${config.label}
          ${sortable ? this.getSortIcon(column) : ''}
        </span>
      </th>
    `;
  }

  renderPublisherNameCell(doc) {
    const publisherName = this.getPublisherName(this.getDocPublisherId(doc));

    return `
      <td class="doc-col-publisherName">
        <span class="doc-publisher-name">${publisherName}</span>
      </td>
    `;
  }

  renderPublisherTypeCell(doc) {
    const publisherType = this.getPublisherType(this.getDocPublisherId(doc));
    const label = this.getPublisherTypeLabel(publisherType);

    return `
      <td class="doc-col-publisherType">
        <span class="doc-publisher-type-badge doc-publisher-type-${publisherType.replace('_', '-')}">${label}</span>
      </td>
    `;
  }

  renderTitleCell(doc) {
    // For social posts, show username if no title
    let displayTitle = doc.title;
    if (isSocialMedia(doc.documentType) && !doc.title && doc.author) {
      const username = doc.author.username || doc.author.displayName || 'Unknown';
      const contentPreview = doc.content 
        ? doc.content.substring(0, 60) + (doc.content.length > 60 ? '...' : '')
        : '';
      displayTitle = `${username}: "${contentPreview}"`;
    }
    displayTitle = displayTitle || 'Untitled';
    
    // Get unread indicator
    const unreadIndicator = this.getUnreadIndicator(doc.id);

    // When viewer mode is enabled, make title clickable to open viewer
    if (this.options.enableViewerMode) {
      return `
        <td class="doc-col-title">
          ${unreadIndicator}
          <button class="doc-title-btn" data-doc-id="${doc.id}">
            ${displayTitle}
          </button>
        </td>
      `;
    }

    // Internal documents may not have URLs
    if (!doc.url) {
      return `
        <td class="doc-col-title">
          ${unreadIndicator}
          <span class="doc-title-internal">${displayTitle}</span>
        </td>
      `;
    }

    return `
      <td class="doc-col-title">
        ${unreadIndicator}
        <a href="${doc.url}" target="_blank" rel="noopener noreferrer" class="doc-title-link">
          ${displayTitle}
          <svg class="doc-external-icon" viewBox="0 0 16 16" width="10" height="10" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2h8v8M14 2L6 10"/>
          </svg>
        </a>
      </td>
    `;
  }

  renderExcerptCell(doc) {
    return `
      <td class="doc-col-excerpt">
        ${doc.excerpt ? `<span class="doc-excerpt-text">${this.truncateText(doc.excerpt, 150)}</span>` : '<span class="doc-empty-cell">—</span>'}
      </td>
    `;
  }

  renderClassificationCell(doc) {
    const classification = doc.classification || 'U';
    return `
      <td class="doc-col-classification">
        ${renderClassificationBadge(classification)}
      </td>
    `;
  }

  renderDocumentTypeCell(doc) {
    const docType = doc.documentType || 'news_article';
    const typeInfo = getDocumentTypeInfo(docType);
    return `
      <td class="doc-col-documentType">
        <span class="doc-type-badge doc-type-badge-${docType.replace('_', '-')}">${typeInfo.label}</span>
      </td>
    `;
  }

  renderDateCell(doc) {
    const formatted = this.formatDate(doc.publishedDate);
    return `
      <td class="doc-col-publishedDate">
        <span class="doc-date">${formatted.date}</span>
        <span class="doc-time">${formatted.time}</span>
      </td>
    `;
  }

  renderEntityCell(doc, column) {
    const config = COLUMN_CONFIG[column];
    if (!config || !config.getEntities) return '<td>—</td>';

    const entities = config.getEntities(doc);
    const maxItems = this.options.maxEntitiesPerCell;
    const truncateLen = this.options.truncateLength;

    if (entities.length === 0) {
      return `<td class="doc-col-${column}"><span class="doc-empty-cell">—</span></td>`;
    }

    const displayEntities = entities.slice(0, maxItems);
    const remaining = entities.length - maxItems;

    const links = displayEntities.map(entity => {
      const displayText = entity[config.displayField] || entity.name || entity.text || entity.id;
      return `
        <a href="#/${config.route}/${entity.id}" 
           class="doc-entity-link" 
           data-entity-type="${column}" 
           data-entity-id="${entity.id}" 
           title="${displayText}">
          ${this.truncateText(displayText, truncateLen)}
        </a>
      `;
    }).join('');

    return `
      <td class="doc-col-${column}">
        <div class="doc-entity-list">
          ${links}
          ${remaining > 0 ? `<span class="doc-entity-more">+${remaining} more</span>` : ''}
        </div>
      </td>
    `;
  }

  renderCell(doc, column) {
    switch (column) {
      case 'classification':
        return this.renderClassificationCell(doc);
      case 'documentType':
        return this.renderDocumentTypeCell(doc);
      case 'publisherName':
        return this.renderPublisherNameCell(doc);
      case 'publisherType':
        return this.renderPublisherTypeCell(doc);
      case 'title':
        return this.renderTitleCell(doc);
      case 'excerpt':
        return this.renderExcerptCell(doc);
      case 'publishedDate':
        return this.renderDateCell(doc);
      default:
        // Entity columns (narratives, events, locations, persons, organizations, factions, topics, themes)
        return this.renderEntityCell(doc, column);
    }
  }

  render() {
    this.clear();

    if (!this.data || !this.data.documents || !this.data.documents.length) {
      this.showEmptyState('No documents found');
      return;
    }

    // Check if we're in viewer mode
    if (this.viewerMode && this.selectedDocument) {
      this.renderViewerMode();
      return;
    }

    const columns = this.options.columns.filter(col => COLUMN_CONFIG[col]);

    // Sort and limit documents
    const sortedDocs = this.sortDocuments(this.data.documents);
    const documents = sortedDocs.slice(0, this.options.maxItems);

    // Create table container
    const tableContainer = document.createElement('div');
    tableContainer.className = 'table-container document-table-container';

    // Create table
    const table = document.createElement('table');
    table.className = 'table document-table';

    // Build header
    const thead = document.createElement('thead');
    thead.innerHTML = `<tr>${columns.map(col => this.renderHeaderCell(col)).join('')}</tr>`;
    table.appendChild(thead);

    // Build body
    const tbody = document.createElement('tbody');

    documents.forEach((doc) => {
      const row = document.createElement('tr');
      row.className = 'document-row';
      row.dataset.id = doc.id;
      row.innerHTML = columns.map(col => this.renderCell(doc, col)).join('');

      // Handle row click for document detail
      if (this.options.onDocumentClick) {
        row.classList.add('clickable');
        row.addEventListener('click', (e) => {
          if (e.target.closest('a') || e.target.closest('.doc-title-btn')) return;
          this.options.onDocumentClick(doc);
        });
      }

      // Handle title button clicks for viewer mode
      if (this.options.enableViewerMode) {
        const titleBtn = row.querySelector('.doc-title-btn');
        if (titleBtn) {
          titleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.openViewer(doc);
          });
        }
      }

      // Handle entity link clicks
      const entityLinks = row.querySelectorAll('.doc-entity-link');
      entityLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const entityType = link.dataset.entityType;
          const entityId = link.dataset.entityId;
          
          if (this.options.onEntityClick) {
            this.options.onEntityClick(entityType, entityId);
          } else {
            const config = COLUMN_CONFIG[entityType];
            if (config && config.route) {
              window.location.hash = `#/${config.route}/${entityId}`;
            }
          }
        });
      });

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
    this.container.appendChild(tableContainer);

    // Add sort click handlers
    if (this.options.sortable) {
      const sortableHeaders = thead.querySelectorAll('.sortable');
      sortableHeaders.forEach(th => {
        th.addEventListener('click', () => {
          this.toggleSort(th.dataset.column);
        });
      });
    }

    // Show count indicator
    if (this.data.documents.length > this.options.maxItems) {
      const countIndicator = document.createElement('div');
      countIndicator.className = 'document-table-count';
      countIndicator.textContent = `Showing ${documents.length} of ${this.data.documents.length} documents`;
      this.container.appendChild(countIndicator);
    }
  }

  /**
   * Open viewer mode with the specified document
   * @param {Object} doc - The document to display
   * @param {boolean} updateUrl - Whether to update the URL (default: true)
   */
  openViewer(doc, updateUrl = true) {
    // Mark document as read
    DocumentTable.markDocumentAsRead(doc.id);
    
    this.viewerMode = true;
    this.selectedDocument = doc;
    
    // Update URL with doc ID for persistence across page refresh
    if (updateUrl) {
      const currentHash = window.location.hash.split('?')[0];
      window.history.replaceState(null, '', `${currentHash}?doc=${doc.id}`);
    }
    
    this.render();
    this.setupKeyboardNavigation();
  }

  /**
   * Close viewer mode and return to table view
   */
  closeViewer() {
    this.removeKeyboardNavigation();
    this.viewerMode = false;
    this.selectedDocument = null;
    
    // Remove doc ID from URL
    const currentHash = window.location.hash.split('?')[0];
    window.history.replaceState(null, '', currentHash);
    
    this.render();
  }

  /**
   * Set up keyboard navigation for document viewer
   * Spacebar: next document, Delete/Backspace: previous document
   */
  setupKeyboardNavigation() {
    // Remove any existing handler first
    this.removeKeyboardNavigation();
    
    this._keydownHandler = (e) => {
      // Don't navigate if user is typing in an input field
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) {
        return;
      }
      
      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        this.navigateToNextDocument();
      } else if (e.key === 'Backspace' || e.key === 'Delete') {
        e.preventDefault();
        this.navigateToPreviousDocument();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        this.closeViewer();
      }
    };
    
    document.addEventListener('keydown', this._keydownHandler);
  }

  /**
   * Remove keyboard navigation listener
   */
  removeKeyboardNavigation() {
    if (this._keydownHandler) {
      document.removeEventListener('keydown', this._keydownHandler);
      this._keydownHandler = null;
    }
  }

  /**
   * Get the sorted list of documents
   * @returns {Array} Sorted documents array
   */
  getSortedDocuments() {
    if (!this.data || !this.data.documents) return [];
    return this.sortDocuments(this.data.documents).slice(0, this.options.maxItems);
  }

  /**
   * Navigate to the next document in the list
   */
  navigateToNextDocument() {
    const documents = this.getSortedDocuments();
    if (documents.length === 0 || !this.selectedDocument) return;
    
    const currentIndex = documents.findIndex(d => d.id === this.selectedDocument.id);
    if (currentIndex === -1) return;
    
    // Get next index, wrap around to beginning if at end
    const nextIndex = (currentIndex + 1) % documents.length;
    const nextDoc = documents[nextIndex];
    
    // Mark as read and update selection
    DocumentTable.markDocumentAsRead(nextDoc.id);
    this.selectedDocument = nextDoc;
    
    // Update URL with new doc ID
    const currentHash = window.location.hash.split('?')[0];
    window.history.replaceState(null, '', `${currentHash}?doc=${nextDoc.id}`);
    
    this.render();
    this.setupKeyboardNavigation(); // Re-attach after render
  }

  /**
   * Navigate to the previous document in the list
   */
  navigateToPreviousDocument() {
    const documents = this.getSortedDocuments();
    if (documents.length === 0 || !this.selectedDocument) return;
    
    const currentIndex = documents.findIndex(d => d.id === this.selectedDocument.id);
    if (currentIndex === -1) return;
    
    // Get previous index, wrap around to end if at beginning
    const prevIndex = (currentIndex - 1 + documents.length) % documents.length;
    const prevDoc = documents[prevIndex];
    
    // Mark as read and update selection
    DocumentTable.markDocumentAsRead(prevDoc.id);
    this.selectedDocument = prevDoc;
    
    // Update URL with new doc ID
    const currentHash = window.location.hash.split('?')[0];
    window.history.replaceState(null, '', `${currentHash}?doc=${prevDoc.id}`);
    
    this.render();
    this.setupKeyboardNavigation(); // Re-attach after render
  }

  /**
   * Filter documents in the viewer sidebar
   * @param {HTMLElement} docList - The document list element
   * @param {Array} documents - All documents
   * @param {string} query - Search query
   */
  filterViewerDocuments(docList, documents, query) {
    const items = docList.querySelectorAll('.document-viewer-list-item');
    let visibleCount = 0;
    
    items.forEach((item, index) => {
      const doc = documents[index];
      if (!doc) return;
      
      // Search in title, publisher name, and content
      const title = (doc.title || '').toLowerCase();
      const publisherName = this.getPublisherName(this.getDocPublisherId(doc)).toLowerCase();
      const content = (doc.content || '').toLowerCase();
      
      const matches = !query || 
        title.includes(query) || 
        publisherName.includes(query) ||
        content.includes(query);
      
      item.style.display = matches ? '' : 'none';
      if (matches) visibleCount++;
    });

    // Update count in sidebar header
    const titleEl = this.container.querySelector('.document-viewer-sidebar-title');
    if (titleEl) {
      titleEl.textContent = query 
        ? `Documents (${visibleCount} of ${documents.length})`
        : `Documents (${documents.length})`;
    }
  }

  /**
   * Render the viewer mode layout with sidebar and content area
   */
  renderViewerMode() {
    const sortedDocs = this.sortDocuments(this.data.documents);
    const documents = sortedDocs.slice(0, this.options.maxItems);

    // Create viewer container
    const viewerContainer = document.createElement('div');
    viewerContainer.className = 'document-viewer-container';

    // Create sidebar with document list
    const sidebar = document.createElement('div');
    sidebar.className = 'document-viewer-sidebar';

    // Sidebar header with close button
    const sidebarHeader = document.createElement('div');
    sidebarHeader.className = 'document-viewer-sidebar-header';
    sidebarHeader.innerHTML = `
      <span class="document-viewer-sidebar-title">Documents (${documents.length})</span>
      <button class="document-viewer-close-btn" title="Close viewer">
        <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 4l8 8M12 4l-8 8"/>
        </svg>
      </button>
    `;
    sidebar.appendChild(sidebarHeader);

    // Sidebar filter bar
    const filterBar = document.createElement('div');
    filterBar.className = 'document-viewer-sidebar-filters';
    filterBar.innerHTML = `
      <input type="text" 
             class="document-viewer-search" 
             placeholder="Search documents..." 
             id="viewer-doc-search">
    `;
    sidebar.appendChild(filterBar);

    // Document list
    const docList = document.createElement('ul');
    docList.className = 'document-viewer-list';

    documents.forEach((doc) => {
      const listItem = document.createElement('li');
      listItem.className = 'document-viewer-list-item';
      if (doc.id === this.selectedDocument.id) {
        listItem.classList.add('active');
      }
      listItem.dataset.docId = doc.id;

      const publisherName = this.getPublisherName(this.getDocPublisherId(doc));
      const formatted = this.formatDate(doc.publishedDate);
      const docType = doc.documentType || 'news_article';
      const typeInfo = getDocumentTypeInfo(docType);
      
      // Get display title
      let displayTitle = doc.title;
      if (isSocialMedia(doc.documentType) && !doc.title && doc.author) {
        const username = doc.author.username || doc.author.displayName || 'Unknown';
        const contentPreview = doc.content 
          ? doc.content.substring(0, 40) + (doc.content.length > 40 ? '...' : '')
          : '';
        displayTitle = `${username}: "${contentPreview}"`;
      }
      displayTitle = displayTitle || 'Untitled';

      // Get unread indicator for sidebar
      const unreadIndicator = this.getUnreadIndicator(doc.id);
      
      listItem.innerHTML = `
        <div class="document-viewer-list-item-header">
          ${unreadIndicator}
          <div class="document-viewer-list-item-title">${this.truncateText(displayTitle, 55)}</div>
        </div>
        <div class="document-viewer-list-item-meta">
          <span class="document-viewer-list-item-publisher">
            ${publisherName}
          </span>
          <span class="document-viewer-list-item-date">${formatted.date}</span>
        </div>
      `;

      listItem.addEventListener('click', () => {
        // Mark document as read when clicked in sidebar
        DocumentTable.markDocumentAsRead(doc.id);
        this.selectedDocument = doc;
        
        // Update URL with new doc ID
        const currentHash = window.location.hash.split('?')[0];
        window.history.replaceState(null, '', `${currentHash}?doc=${doc.id}`);
        
        this.render();
      });

      docList.appendChild(listItem);
    });

    sidebar.appendChild(docList);

    // Show count if truncated
    if (this.data.documents.length > this.options.maxItems) {
      const countIndicator = document.createElement('div');
      countIndicator.className = 'document-viewer-list-count';
      countIndicator.textContent = `Showing ${documents.length} of ${this.data.documents.length}`;
      sidebar.appendChild(countIndicator);
    }

    viewerContainer.appendChild(sidebar);

    // Get document type for styling
    const docType = this.selectedDocument.documentType || 'news_article';
    const docTypeClass = `document-viewer-type-${docType.replace('_', '-')}`;

    // Create main content wrapper
    const mainContent = document.createElement('div');
    mainContent.className = 'document-viewer-main';

    // Create tab header
    const tabHeader = document.createElement('div');
    tabHeader.className = 'document-viewer-tab-header';
    tabHeader.innerHTML = `
      <div class="document-viewer-tabs">
        <button class="document-viewer-tab ${this.viewerTab === 'content' ? 'active' : ''}" data-tab="content">
          <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="2" y="1" width="12" height="14" rx="1"/>
            <path d="M5 4h6M5 7h6M5 10h4"/>
          </svg>
          Document
        </button>
        <button class="document-viewer-tab ${this.viewerTab === 'details' ? 'active' : ''}" data-tab="details">
          <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="8" cy="8" r="6"/>
            <path d="M8 5v3M8 10v1"/>
          </svg>
          Details
        </button>
      </div>
      <div class="document-viewer-tab-title">
        ${this.truncateText(this.selectedDocument.title || 'Untitled', 60)}
      </div>
    `;
    mainContent.appendChild(tabHeader);

    // Create content area with type-specific class
    const contentArea = document.createElement('div');
    contentArea.className = `document-viewer-content ${docTypeClass} ${this.viewerTab === 'details' ? 'document-viewer-content-fullwidth' : ''}`;
    contentArea.tabIndex = 0; // Make focusable for keyboard navigation (Page Up/Down)

    if (this.viewerTab === 'content') {
      // Document header - type-specific
      const docHeader = document.createElement('div');
      docHeader.className = 'document-viewer-content-header';
      docHeader.innerHTML = this.renderViewerHeader(this.selectedDocument);
      contentArea.appendChild(docHeader);

      // Document body (rendered content)
      const docBody = document.createElement('div');
      docBody.className = 'document-viewer-content-body';
      docBody.id = 'document-viewer-content-body';
      contentArea.appendChild(docBody);
    } else {
      // Details view - show related entities
      contentArea.innerHTML = this.renderDetailsView(this.selectedDocument);
    }

    mainContent.appendChild(contentArea);
    viewerContainer.appendChild(mainContent);
    this.container.appendChild(viewerContainer);

    // Initialize components based on active tab
    if (this.viewerTab === 'content') {
      // Render document content using DocumentContentRenderer
      // Fetch highlights and comments with resolved user data
      const highlights = DataService.getHighlightsForDocument(this.selectedDocument.id);
      const comments = DataService.getCommentsForDocument(this.selectedDocument.id);
      
      this.contentRenderer = new DocumentContentRenderer('document-viewer-content-body');
      this.contentRenderer.update({ 
        document: this.selectedDocument,
        highlights: highlights || [],
        comments: comments || []
      });
    } else {
      // Initialize details view components
      this.initializeDetailsComponents(this.selectedDocument);
    }

    // Add close button handler
    const closeBtn = sidebarHeader.querySelector('.document-viewer-close-btn');
    closeBtn.addEventListener('click', () => this.closeViewer());

    // Add search filter handler
    const searchInput = filterBar.querySelector('#viewer-doc-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        this.filterViewerDocuments(docList, documents, query);
      });
    }

    // Add tab click handlers
    const tabs = tabHeader.querySelectorAll('.document-viewer-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabName = tab.dataset.tab;
        if (tabName !== this.viewerTab) {
          this.viewerTab = tabName;
          this.render();
        }
      });
    });

    // Focus content area for keyboard navigation (Page Up/Down)
    contentArea.focus();
  }

  /**
   * Render a linked list of entities for the details view
   * @param {Array} entities - Array of entity objects
   * @param {string} route - Route prefix (e.g., 'person', 'organization')
   * @param {string} displayField - Field to display (e.g., 'name')
   * @returns {string} HTML string for the list
   */
  renderEntityListHtml(entities, route, displayField) {
    if (!entities || entities.length === 0) return '';
    
    const items = entities.map(entity => {
      const displayText = entity[displayField] || entity.name || entity.id;
      return `
        <li class="details-entity-item">
          <a href="#/${route}/${entity.id}" class="details-entity-link">
            ${displayText}
            <svg class="details-entity-arrow" viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 4l4 4-4 4"/>
            </svg>
          </a>
        </li>
      `;
    }).join('');
    
    return `<ul class="details-entity-list">${items}</ul>`;
  }

  /**
   * Render the details view showing related entities
   * @param {Object} doc - The document
   * @returns {string} HTML string
   */
  renderDetailsView(doc) {
    const narratives = DataService.getNarrativesForDocument(doc.id);
    const subNarratives = DataService.getSubNarrativesForDocument(doc.id);
    const persons = DataService.getPersonsForDocument(doc.id);
    const organizations = DataService.getOrganizationsForDocument(doc.id);
    const locations = DataService.getLocationsForDocument(doc.id);
    const events = DataService.getEventsForDocument(doc.id);

    // Build cards using CardBuilder with standard layout (half/full width)
    const cards = CardBuilder.createMultiple([
      {
        condition: narratives.length > 0,
        title: 'Related Narratives',
        id: 'doc-details-narratives',
        options: { 
          count: narratives.length, 
          halfWidth: true, 
          noPadding: true,
          actions: CardBuilder.descriptionToggle('doc-narrative-desc-toggle')
        }
      },
      {
        condition: subNarratives.length > 0,
        title: 'Related Themes',
        id: 'doc-details-themes',
        options: { 
          count: subNarratives.length, 
          halfWidth: true, 
          noPadding: true,
          actions: CardBuilder.descriptionToggle('doc-theme-desc-toggle')
        }
      },
      {
        condition: persons.length > 0,
        title: 'Mentioned People',
        id: 'doc-details-persons',
        content: this.renderEntityListHtml(persons, 'person', 'name'),
        options: { count: persons.length, halfWidth: true, noPadding: true }
      },
      {
        condition: organizations.length > 0,
        title: 'Mentioned Organizations',
        id: 'doc-details-organizations',
        content: this.renderEntityListHtml(organizations, 'organization', 'name'),
        options: { count: organizations.length, halfWidth: true, noPadding: true }
      },
      {
        condition: locations.length > 0,
        title: 'Mentioned Locations',
        id: 'doc-details-map',
        options: { count: locations.length, halfWidth: true, noPadding: true }
      },
      {
        condition: events.length > 0,
        title: 'Related Events',
        id: 'doc-details-events',
        options: { count: events.length, halfWidth: true }
      }
    ]);

    // If no related data, show empty state
    if (!cards) {
      return `
        <div class="content-area">
          <div class="document-details-empty">
            <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="var(--text-muted)" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 8v4M12 16v1"/>
            </svg>
            <p>No related entities found for this document.</p>
          </div>
        </div>
      `;
    }

    return `<div class="content-area"><div class="content-grid">${cards}</div></div>`;
  }

  /**
   * Initialize components for the details view
   * @param {Object} doc - The document
   */
  initializeDetailsComponents(doc) {
    const narratives = DataService.getNarrativesForDocument(doc.id);
    const subNarratives = DataService.getSubNarrativesForDocument(doc.id);
    const persons = DataService.getPersonsForDocument(doc.id);
    const organizations = DataService.getOrganizationsForDocument(doc.id);
    const locations = DataService.getLocationsForDocument(doc.id);
    const events = DataService.getEventsForDocument(doc.id);

    // Initialize Narrative List
    if (narratives.length > 0 && document.getElementById('doc-details-narratives')) {
      this.detailsNarrativeList = new NarrativeList('doc-details-narratives', {
        maxItems: 10,
        showSparkline: false,
        showVolume: false,
        onNarrativeClick: (n) => {
          window.location.hash = `#/narrative/${n.id}`;
        }
      });
      this.detailsNarrativeList.update({ narratives });
    }

    // Initialize Theme List
    if (subNarratives.length > 0 && document.getElementById('doc-details-themes')) {
      this.detailsThemeList = new SubNarrativeList('doc-details-themes', {
        maxItems: 10,
        onSubNarrativeClick: (s) => {
          window.location.hash = `#/subnarrative/${s.id}`;
        }
      });
      this.detailsThemeList.update({ subNarratives });
    }

    // Initialize Map
    if (locations.length > 0 && document.getElementById('doc-details-map')) {
      this.detailsMap = new MapView('doc-details-map', {
        height: 250
      });
      this.detailsMap.update({ locations });
    }

    // Initialize Timeline
    if (events.length > 0 && document.getElementById('doc-details-events')) {
      this.detailsTimeline = new Timeline('doc-details-events', {
        height: 200,
        onEventClick: (e) => {
          window.location.hash = `#/event/${e.id}`;
        }
      });
      this.detailsTimeline.update({ events });
    }

    // Initialize card width toggles (resize buttons)
    const contentGrid = this.container.querySelector('.content-grid');
    if (contentGrid) {
      initAllCardToggles(contentGrid, `doc-details-${doc.id}`);
    }

    // Initialize description toggle for narratives
    const narrativeDescToggle = document.getElementById('doc-narrative-desc-toggle');
    if (narrativeDescToggle && this.detailsNarrativeList) {
      narrativeDescToggle.addEventListener('click', () => {
        const isShowing = this.detailsNarrativeList.toggleDescription();
        narrativeDescToggle.classList.toggle('active', isShowing);
      });
    }

    // Initialize description toggle for themes
    const themeDescToggle = document.getElementById('doc-theme-desc-toggle');
    if (themeDescToggle && this.detailsThemeList) {
      themeDescToggle.addEventListener('click', () => {
        const isShowing = this.detailsThemeList.toggleDescription();
        themeDescToggle.classList.toggle('active', isShowing);
      });
    }
  }

  /**
   * Render type-specific header for the viewer
   * @param {Object} doc - The document to render header for
   * @returns {string} HTML string for the header
   */
  renderViewerHeader(doc) {
    const docType = doc.documentType || 'news_article';
    
    switch (docType) {
      case DOCUMENT_TYPES.SOCIAL_POST:
        return this.renderSocialHeader(doc);
      case DOCUMENT_TYPES.TIKTOK:
        return this.renderTikTokHeader(doc);
      case DOCUMENT_TYPES.NEWS_ARTICLE:
        return this.renderNewsHeader(doc);
      case DOCUMENT_TYPES.INTERNAL:
        return this.renderInternalHeader(doc);
      default:
        return this.renderNewsHeader(doc);
    }
  }

  /**
   * Render header for social media posts (X, Facebook, Instagram, Reddit)
   */
  renderSocialHeader(doc) {
    const author = doc.author || {};
    const engagement = doc.engagement || {};
    const publisherName = this.getPublisherName(this.getDocPublisherId(doc));
    const formatted = this.formatDate(doc.publishedDate);
    const classification = doc.classification || 'U';

    return `
      <div class="document-viewer-header-social">
        <div class="viewer-social-author">
          <div class="viewer-social-avatar">
            <img src="${author.avatarUrl || PLACEHOLDERS.avatar}" alt="${author.displayName || 'User'}">
          </div>
          <div class="viewer-social-author-info">
            <span class="viewer-social-displayname">${author.displayName || 'Unknown'}</span>
            <span class="viewer-social-username">${author.username || ''}</span>
          </div>
        </div>
        
        <div class="viewer-social-meta">
          <span class="viewer-social-publisher">
            ${publisherName}
          </span>
          <span class="viewer-social-date">${formatted.date} ${formatted.time}</span>
          ${classification !== 'U' ? renderClassificationBadge(classification) : ''}
        </div>

        <div class="viewer-social-engagement">
          <div class="viewer-social-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
            <span>${this.formatEngagement(engagement.replies || 0)}</span>
          </div>
          <div class="viewer-social-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span>${this.formatEngagement(engagement.likes || 0)}</span>
          </div>
          <div class="viewer-social-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/>
              <path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
            </svg>
            <span>${this.formatEngagement(engagement.reblogs || 0)}</span>
          </div>
        </div>

        ${doc.url ? `
          <a href="${doc.url}" target="_blank" rel="noopener noreferrer" class="document-viewer-source-link">
            View on ${publisherName}
            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M6 2h8v8M14 2L6 10"/>
            </svg>
          </a>
        ` : ''}
      </div>
    `;
  }

  /**
   * Render header for TikTok posts
   */
  renderTikTokHeader(doc) {
    const author = doc.author || {};
    const video = doc.video || {};
    const engagement = doc.engagement || {};
    const formatted = this.formatDate(doc.publishedDate);
    const classification = doc.classification || 'U';

    // Format video duration
    const duration = video.duration || 0;
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    const durationStr = minutes > 0 ? `${minutes}:${seconds.toString().padStart(2, '0')}` : `0:${seconds.toString().padStart(2, '0')}`;

    return `
      <div class="document-viewer-header-tiktok">
        <div class="viewer-tiktok-author">
          <div class="viewer-social-avatar">
            <img src="${author.avatarUrl || PLACEHOLDERS.avatar}" alt="${author.displayName || 'User'}">
          </div>
          <div class="viewer-social-author-info">
            <span class="viewer-social-displayname">${author.displayName || 'Unknown'}</span>
            <span class="viewer-social-username">${author.username || ''}</span>
          </div>
          <div class="viewer-tiktok-badge">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
            </svg>
            TikTok
          </div>
        </div>

        <div class="viewer-tiktok-meta">
          <span class="viewer-tiktok-duration">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            ${durationStr}
          </span>
          <span class="viewer-social-date">${formatted.date} ${formatted.time}</span>
          ${classification !== 'U' ? renderClassificationBadge(classification) : ''}
        </div>

        <div class="viewer-social-engagement">
          <div class="viewer-social-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
            <span>${this.formatEngagement(engagement.replies || 0)}</span>
          </div>
          <div class="viewer-social-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span>${this.formatEngagement(engagement.likes || 0)}</span>
          </div>
          <div class="viewer-social-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/>
              <path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
            </svg>
            <span>${this.formatEngagement(engagement.reblogs || 0)}</span>
          </div>
        </div>

        ${doc.url ? `
          <a href="${doc.url}" target="_blank" rel="noopener noreferrer" class="document-viewer-source-link">
            View on TikTok
            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M6 2h8v8M14 2L6 10"/>
            </svg>
          </a>
        ` : ''}
      </div>
    `;
  }

  /**
   * Render header for news articles
   */
  renderNewsHeader(doc) {
    const publisherName = this.getPublisherName(this.getDocPublisherId(doc));
    const formatted = this.formatDate(doc.publishedDate);
    const classification = doc.classification || 'U';
    const title = doc.title || 'Untitled Article';

    return `
      <div class="document-viewer-header-news">
        <div class="viewer-news-masthead">
          <span class="viewer-news-publisher">
            ${publisherName}
          </span>
          ${classification !== 'U' ? renderClassificationBadge(classification) : ''}
        </div>

        <h2 class="viewer-news-title">${title}</h2>

        <div class="viewer-news-byline">
          ${doc.author ? `<span class="viewer-news-author">By ${doc.author}</span>` : ''}
          <span class="viewer-news-date">${formatted.date} ${formatted.time}</span>
        </div>

        ${doc.url ? `
          <a href="${doc.url}" target="_blank" rel="noopener noreferrer" class="document-viewer-source-link">
            View original article
            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M6 2h8v8M14 2L6 10"/>
            </svg>
          </a>
        ` : ''}
      </div>
    `;
  }

  /**
   * Render header for internal documents
   */
  renderInternalHeader(doc) {
    const publisherName = this.getPublisherName(this.getDocPublisherId(doc));
    const formatted = this.formatDate(doc.publishedDate);
    const classification = doc.classification || 'U';
    const title = doc.title || 'Untitled Document';

    return `
      <div class="document-viewer-header-internal">
        <div class="viewer-internal-classification-banner classification-banner classification-banner-${classification.toLowerCase()}">
          ${CLASSIFICATION_LEVELS[classification]?.fullName || classification}
        </div>

        ${doc.department ? `
          <div class="viewer-internal-department">${doc.department}</div>
        ` : ''}

        <h2 class="viewer-internal-title">${title}</h2>

        <div class="viewer-internal-meta">
          <span class="viewer-internal-publisher">${publisherName}</span>
          ${doc.author ? `<span class="viewer-internal-author">Author: ${doc.author}</span>` : ''}
          <span class="viewer-internal-date">${formatted.date} ${formatted.time}</span>
        </div>
      </div>
    `;
  }

  /**
   * Format engagement numbers (1000 -> 1K, 1000000 -> 1M)
   */
  formatEngagement(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  }

  /**
   * Get icon SVG for document type
   */
  getTypeIcon(docType) {
    switch (docType) {
      case DOCUMENT_TYPES.SOCIAL_POST:
        return `<svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>`;
      case DOCUMENT_TYPES.TIKTOK:
        return `<svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
          <path d="M13.06 4.46a3.22 3.22 0 01-2.51-2.83V1.33h-2.3v9.11a1.93 1.93 0 11-1.93 1.16 1.93 1.93 0 011.54-3.09c.2 0 .4.03.59.09V5.27a4.56 4.56 0 00-.67-.03 4.22 4.22 0 00-2.91 7.27 4.23 4.23 0 007.24-2.95V5.33a5.44 5.44 0 003.18 1.01V4.07c-.23.25-.47.34-.67.39z"/>
        </svg>`;
      case DOCUMENT_TYPES.NEWS_ARTICLE:
        return `<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="2" y="1" width="12" height="14" rx="1"/>
          <path d="M5 4h6M5 7h6M5 10h4"/>
        </svg>`;
      case DOCUMENT_TYPES.INTERNAL:
        return `<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="2" y="1" width="12" height="14" rx="1"/>
          <path d="M5 4h6M5 7h6M5 10h6M5 13h3"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>`;
      default:
        return `<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="2" y="1" width="12" height="14" rx="1"/>
          <path d="M5 4h6M5 7h6M5 10h4"/>
        </svg>`;
    }
  }

  /**
   * Update columns dynamically
   * @param {string[]} columns - Array of column names to display
   */
  setColumns(columns) {
    this.options.columns = columns;
    if (this.data) {
      this.render();
    }
  }

  /**
   * Get available column names
   * @returns {string[]}
   */
  static getAvailableColumns() {
    return Object.keys(COLUMN_CONFIG);
  }

  /**
   * Clean up and destroy the component
   */
  destroy() {
    this.removeKeyboardNavigation();
    if (this.contentRenderer) {
      this.contentRenderer.destroy?.();
      this.contentRenderer = null;
    }
    super.destroy();
  }
}

export default DocumentTable;
