/**
 * DocumentList.js
 * List of documents with publication info and external links
 * Supports multiple document types: social_post, tiktok, news_article, internal
 */

import { BaseComponent } from './BaseComponent.js';
import { DataService } from '../data/DataService.js';
import { renderClassificationBadge } from './ClassificationBanner.js';
import { 
  DOCUMENT_TYPES, 
  isSocialMedia, 
  getDocumentTypeInfo 
} from '../utils/classification.js';

export class DocumentList extends BaseComponent {
  constructor(containerId, options = {}) {
    super(containerId, {
      maxItems: 10,
      showExcerpt: true,
      showPublisher: true,
      showDate: true,
      showType: false,
      showClassification: true,
      onDocumentClick: null,
      ...options
    });
  }

  formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }

  formatTime(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit'
    });
  }

  /**
   * Get the publisher/source ID from a document
   * Handles both 'publisherId' and 'sourceId' field names
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

  getPublisherIcon(publisherId) {
    if (!publisherId) return '';
    const publisher = DataService.getPublisher(publisherId);
    if (!publisher) return '';

    // Return appropriate icon based on publisher type
    if (publisher.type === 'social') {
      return `<svg class="document-publisher-icon" viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
      </svg>`;
    }

    // Internal document icon
    if (publisher.type === 'internal') {
      return `<svg class="document-publisher-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M14 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
        <path d="M4 6h8M4 9h6"/>
      </svg>`;
    }
    
    // News icon for news publishers
    return `<svg class="document-publisher-icon" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="1" y="2" width="14" height="12" rx="1"/>
      <line x1="4" y1="5" x2="12" y2="5"/>
      <line x1="4" y1="8" x2="12" y2="8"/>
      <line x1="4" y1="11" x2="9" y2="11"/>
    </svg>`;
  }

  getDisplayTitle(doc) {
    const docType = doc.documentType;
    
    // For social posts, show username if no title
    if (isSocialMedia(docType) && !doc.title && doc.author) {
      const username = doc.author.username || doc.author.displayName || 'Unknown';
      const contentPreview = doc.content 
        ? doc.content.substring(0, 80) + (doc.content.length > 80 ? '...' : '')
        : '';
      return `${username}: "${contentPreview}"`;
    }
    
    return doc.title || 'Untitled Document';
  }

  getDisplayExcerpt(doc) {
    // For social posts, use content as excerpt if no excerpt
    if (isSocialMedia(doc.documentType) && !doc.excerpt && doc.content) {
      return doc.content.substring(0, 200) + (doc.content.length > 200 ? '...' : '');
    }
    return doc.excerpt || '';
  }

  renderTypeBadge(docType) {
    if (!docType) return '';
    const typeInfo = getDocumentTypeInfo(docType);
    return `<span class="doc-type-badge doc-type-badge-${docType.replace('_', '-')}">${typeInfo.label}</span>`;
  }

  render() {
    this.clear();

    if (!this.data || !this.data.documents || !this.data.documents.length) {
      this.showEmptyState('No documents found');
      return;
    }

    const list = document.createElement('ul');
    list.className = 'document-list';

    const items = this.data.documents.slice(0, this.options.maxItems);

    items.forEach((doc) => {
      const item = document.createElement('li');
      item.className = 'document-item';
      item.dataset.id = doc.id;

      const publisherName = this.getPublisherName(this.getDocPublisherId(doc));
      const displayTitle = this.getDisplayTitle(doc);
      const displayExcerpt = this.getDisplayExcerpt(doc);
      const docType = doc.documentType || 'news_article';
      const classification = doc.classification || 'U';

      // Build badges row
      const badgesHtml = `
        <div class="document-badges">
          ${this.options.showClassification && classification !== 'U' ? renderClassificationBadge(classification) : ''}
          ${this.options.showType ? this.renderTypeBadge(docType) : ''}
        </div>
      `;

      // For internal documents with no URL, don't show external link
      const hasExternalLink = !!doc.url;
      const titleHtml = hasExternalLink 
        ? `<a href="${doc.url}" target="_blank" rel="noopener noreferrer" class="document-title">
            ${displayTitle}
            <svg class="document-external-icon" viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M6 2h8v8M14 2L6 10"/>
            </svg>
          </a>`
        : `<span class="document-title document-title-internal">${displayTitle}</span>`;

      item.innerHTML = `
        <div class="document-item-content">
          <div class="document-header">
            ${this.options.showPublisher && publisherName ? `
              <span class="document-publisher">
                <span class="document-publisher-name">${publisherName}</span>
              </span>
            ` : ''}
            ${this.options.showDate && doc.publishedDate ? `
              <span class="document-date">${this.formatDate(doc.publishedDate)}</span>
            ` : ''}
            ${badgesHtml}
          </div>
          ${titleHtml}
          ${this.options.showExcerpt && displayExcerpt ? `
            <p class="document-excerpt">${displayExcerpt}</p>
          ` : ''}
        </div>
      `;

      // Handle click to navigate to document detail (if handler provided)
      if (this.options.onDocumentClick) {
        item.addEventListener('click', (e) => {
          // Don't intercept clicks on the external link
          if (e.target.closest('.document-title') && hasExternalLink) {
            return;
          }
          e.preventDefault();
          this.options.onDocumentClick(doc);
        });
        item.classList.add('clickable');
      }

      list.appendChild(item);
    });

    this.container.appendChild(list);

    // Show "more" indicator if there are more items
    if (this.data.documents.length > this.options.maxItems) {
      const moreIndicator = document.createElement('div');
      moreIndicator.className = 'document-list-more';
      moreIndicator.textContent = `+${this.data.documents.length - this.options.maxItems} more documents`;
      this.container.appendChild(moreIndicator);
    }
  }
}

export default DocumentList;
