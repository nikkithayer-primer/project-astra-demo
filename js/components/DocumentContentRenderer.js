/**
 * DocumentContentRenderer.js
 * Renders document content based on document type
 * Supports: social_post, tiktok, news_article, internal
 * Includes highlight and comment annotations
 */

import { BaseComponent } from './BaseComponent.js';
import { 
  DOCUMENT_TYPES, 
  PLACEHOLDERS,
  formatPortionMark 
} from '../utils/classification.js';
import { renderPortionMark } from './ClassificationBanner.js';

export class DocumentContentRenderer extends BaseComponent {
  constructor(containerId, options = {}) {
    super(containerId, {
      showPortionMarks: true,
      showAnnotations: true,
      ...options
    });
    this.activeCommentThread = null;
    this._documentClickHandler = null;
  }

  formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  }

  formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  }

  formatRelativeTime(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return 'just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return this.formatDate(dateString);
  }

  render() {
    this.clear();

    if (!this.data || !this.data.document) {
      this.showEmptyState('No document to display');
      return;
    }

    const doc = this.data.document;
    const docType = doc.documentType || 'news_article';
    const highlights = this.data.highlights || [];
    const comments = this.data.comments || [];

    // Render annotations summary if there are any
    const annotationsSummaryHtml = this.options.showAnnotations && (highlights.length > 0 || comments.length > 0)
      ? this.renderAnnotationsSummary(highlights, comments)
      : '';

    switch (docType) {
      case DOCUMENT_TYPES.SOCIAL_POST:
        this.renderSocialPost(doc, highlights, comments);
        break;
      case DOCUMENT_TYPES.TIKTOK:
        this.renderTikTok(doc, highlights, comments);
        break;
      case DOCUMENT_TYPES.NEWS_ARTICLE:
        this.renderNewsArticle(doc, highlights, comments);
        break;
      case DOCUMENT_TYPES.INTERNAL:
        this.renderInternalDocument(doc, highlights, comments);
        break;
      default:
        this.renderNewsArticle(doc, highlights, comments);
    }

    // Prepend annotations summary
    if (annotationsSummaryHtml) {
      this.container.insertAdjacentHTML('afterbegin', annotationsSummaryHtml);
    }

    // Bind event listeners for annotations
    this.bindAnnotationEvents();
  }

  renderAnnotationsSummary(highlights, comments) {
    const totalComments = comments.reduce((sum, c) => sum + 1 + (c.replies || []).length, 0);
    
    return `
      <div class="annotations-summary">
        <div class="annotations-summary-item">
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 2h2.5a1.5 1.5 0 0 1 1.5 1.5v2.5a1.5 1.5 0 0 1-1.5 1.5H7a1.5 1.5 0 0 1-1.5-1.5V3.5z"/>
            <path fill-rule="evenodd" d="M.5 8.5A1.5 1.5 0 0 1 2 7h2.5a1.5 1.5 0 0 1 1.5 1.5v2.5A1.5 1.5 0 0 1 4.5 12.5H2A1.5 1.5 0 0 1 .5 11V8.5zM2 8a.5.5 0 0 0-.5.5V11a.5.5 0 0 0 .5.5h2.5A.5.5 0 0 0 5 11V8.5A.5.5 0 0 0 4.5 8H2z"/>
          </svg>
          <span class="annotations-summary-count">${highlights.length}</span>
          <span>highlight${highlights.length !== 1 ? 's' : ''}</span>
        </div>
        <div class="annotations-summary-item">
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          </svg>
          <span class="annotations-summary-count">${totalComments}</span>
          <span>comment${totalComments !== 1 ? 's' : ''}</span>
        </div>
      </div>
    `;
  }

  bindAnnotationEvents() {
    // Bind highlight hover events
    const highlightElements = this.container.querySelectorAll('.user-highlight');
    highlightElements.forEach(el => {
      el.addEventListener('mouseenter', (e) => this.showHighlightTooltip(e));
      el.addEventListener('mouseleave', (e) => this.hideHighlightTooltip(e));
    });

    // Bind comment marker click events
    const commentMarkers = this.container.querySelectorAll('.comment-marker');
    commentMarkers.forEach(marker => {
      marker.addEventListener('click', (e) => this.toggleCommentThread(e, marker));
    });

    // Remove any existing document click handler before adding a new one
    if (this._documentClickHandler) {
      document.removeEventListener('click', this._documentClickHandler);
    }

    // Close comment thread when clicking outside
    this._documentClickHandler = (e) => {
      if (this.activeCommentThread && 
          !e.target.closest('.comment-thread-popover') && 
          !e.target.closest('.comment-marker')) {
        this.closeCommentThread();
      }
    };
    document.addEventListener('click', this._documentClickHandler);
  }

  /**
   * Clean up event listeners
   */
  destroy() {
    if (this._documentClickHandler) {
      document.removeEventListener('click', this._documentClickHandler);
      this._documentClickHandler = null;
    }
    this.activeCommentThread = null;
    super.destroy();
  }

  showHighlightTooltip(event) {
    // Tooltip is rendered inline, CSS handles visibility
  }

  hideHighlightTooltip(event) {
    // Tooltip is rendered inline, CSS handles visibility
  }

  toggleCommentThread(event, marker) {
    event.stopPropagation();
    const commentId = marker.dataset.commentId;
    const existingPopover = this.container.querySelector('.comment-thread-popover');
    
    if (existingPopover) {
      const isCurrentComment = existingPopover.dataset.commentId === commentId;
      existingPopover.remove();
      this.activeCommentThread = null;
      
      if (isCurrentComment) return; // Close if clicking same marker
    }

    // Find the comment data
    const comments = this.data.comments || [];
    const comment = comments.find(c => c.id === commentId);
    if (!comment) return;

    // Create and show popover
    const popoverHtml = this.renderCommentThreadPopover(comment);
    marker.closest('.content-block-wrapper').insertAdjacentHTML('beforeend', popoverHtml);
    this.activeCommentThread = commentId;

    // Bind close button
    const closeBtn = this.container.querySelector('.comment-thread-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeCommentThread());
    }
  }

  closeCommentThread() {
    const popover = this.container.querySelector('.comment-thread-popover');
    if (popover) {
      popover.remove();
    }
    this.activeCommentThread = null;
  }

  renderCommentThreadPopover(comment) {
    const repliesHtml = (comment.replies || []).map(reply => `
      <div class="comment-item comment-reply">
        <div class="comment-avatar">
          <img src="${reply.user?.avatarUrl || 'img/placeholders/avatar-default.svg'}" alt="${reply.user?.displayName || 'User'}">
        </div>
        <div class="comment-content">
          <div class="comment-header">
            <span class="comment-author ${reply.user?.isCurrentUser ? 'current-user' : ''}">${reply.user?.displayName || 'Unknown'}</span>
            <span class="comment-time">${this.formatRelativeTime(reply.createdAt)}</span>
          </div>
          <div class="comment-text">${this.escapeHtml(reply.content)}</div>
        </div>
      </div>
    `).join('');

    return `
      <div class="comment-thread-popover" data-comment-id="${comment.id}">
        <div class="comment-thread-header">
          <span>Thread</span>
          <button class="comment-thread-close" aria-label="Close">
            <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </div>
        ${comment.anchorText ? `
          <div class="comment-thread-anchor-text">"${this.escapeHtml(comment.anchorText)}"</div>
        ` : ''}
        <div class="comment-thread-body">
          <div class="comment-item">
            <div class="comment-avatar">
              <img src="${comment.user?.avatarUrl || 'img/placeholders/avatar-default.svg'}" alt="${comment.user?.displayName || 'User'}">
            </div>
            <div class="comment-content">
              <div class="comment-header">
                <span class="comment-author ${comment.user?.isCurrentUser ? 'current-user' : ''}">${comment.user?.displayName || 'Unknown'}</span>
                <span class="comment-time">${this.formatRelativeTime(comment.createdAt)}</span>
              </div>
              <div class="comment-text">${this.escapeHtml(comment.content)}</div>
            </div>
          </div>
          ${repliesHtml}
        </div>
        <div class="comment-input-container">
          <textarea class="comment-input" placeholder="Reply..." rows="1"></textarea>
          <div class="comment-submit-row">
            <button class="btn btn-small btn-primary">Reply</button>
          </div>
        </div>
      </div>
    `;
  }

  renderSocialPost(doc, highlights = [], comments = []) {
    const author = doc.author || {};
    const media = doc.media || [];
    const video = doc.video;

    // Handle TikTok-style video (9:16 aspect ratio)
    let videoHtml = '';
    if (video) {
      videoHtml = `
        <div class="tiktok-video-container">
          <div class="tiktok-video-placeholder">
            <img src="${video.thumbnailUrl || PLACEHOLDERS.video}" alt="Video thumbnail">
          </div>
          <div class="tiktok-play-button">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
        </div>
        ${doc.transcription ? `
          <div class="tiktok-transcription">
            <div class="tiktok-transcription-label">Transcription</div>
            <div class="tiktok-transcription-text">${this.escapeHtml(doc.transcription)}</div>
          </div>
        ` : ''}
      `;
    }

    // Handle regular media (images, etc.)
    const mediaHtml = media.length > 0 ? `
      <div class="social-post-media ${media.length === 1 ? 'single-image' : 'multi-image'}">
        ${media.map(m => `
          <div class="social-post-media-item">
            ${m.type === 'video' 
              ? `<img src="${m.url || PLACEHOLDERS.video}" alt="${m.altText || 'Video'}">`
              : `<img src="${m.url || PLACEHOLDERS.image}" alt="${m.altText || 'Image'}">`
            }
          </div>
        `).join('')}
      </div>
    ` : '';

    // Apply highlights to content (for social posts, blockIndex is null)
    const contentWithHighlights = this.applyContentHighlights(
      this.escapeHtml(doc.content || ''), 
      highlights
    );

    const html = `
      <div class="social-post">
        <div class="social-post-header">
          <div class="social-post-avatar">
            <img src="${author.avatarUrl || PLACEHOLDERS.avatar}" alt="${author.displayName || 'User'}">
          </div>
          <div class="social-post-author">
            <span class="social-post-displayname">${author.displayName || 'Unknown'}</span>
            <span class="social-post-username">${author.username || ''}</span>
          </div>
        </div>
        
        ${videoHtml}
        
        <div class="social-post-content">${contentWithHighlights}</div>
        
        ${mediaHtml}
      </div>
    `;

    this.container.innerHTML = html;
  }

  renderTikTok(doc, highlights = [], comments = []) {
    const author = doc.author || {};
    const video = doc.video || {};

    // Apply highlights to content
    const contentWithHighlights = this.applyContentHighlights(
      this.escapeHtml(doc.content || ''), 
      highlights
    );

    const html = `
      <div class="tiktok-post">
        <div class="social-post-header">
          <div class="social-post-avatar">
            <img src="${author.avatarUrl || PLACEHOLDERS.avatar}" alt="${author.displayName || 'User'}">
          </div>
          <div class="social-post-author">
            <span class="social-post-displayname">${author.displayName || 'Unknown'}</span>
            <span class="social-post-username">${author.username || ''}</span>
          </div>
        </div>

        <div class="tiktok-video-container">
          <div class="tiktok-video-placeholder">
            <img src="${video.thumbnailUrl || PLACEHOLDERS.video}" alt="Video thumbnail">
          </div>
          <div class="tiktok-play-button">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
        </div>

        <div class="social-post-content">${contentWithHighlights}</div>

        ${doc.transcription ? `
          <div class="tiktok-transcription">
            <div class="tiktok-transcription-label">Transcription</div>
            <div class="tiktok-transcription-text">${this.escapeHtml(doc.transcription)}</div>
          </div>
        ` : ''}
      </div>
    `;

    this.container.innerHTML = html;
  }

  renderNewsArticle(doc, highlights = [], comments = []) {
    const contentBlocks = doc.contentBlocks || [];
    const headerImage = doc.headerImage;

    const headerImageHtml = headerImage ? `
      <div class="news-article-header-image">
        <img src="${headerImage.url || PLACEHOLDERS.image}" alt="${headerImage.caption || 'Header image'}">
        ${headerImage.caption ? `<div class="news-article-image-caption">${headerImage.caption}</div>` : ''}
      </div>
    ` : '';

    const contentHtml = contentBlocks.length > 0 
      ? this.renderContentBlocks(contentBlocks, this.options.showPortionMarks, highlights, comments)
      : (doc.excerpt ? `<p class="news-article-paragraph">${this.escapeHtml(doc.excerpt)}</p>` : '');

    const html = `
      <div class="news-article">
        ${headerImageHtml}
        
        ${doc.author ? `
          <div class="news-article-byline">
            By <span class="news-article-byline-author">${doc.author}</span>
          </div>
        ` : ''}
        
        <div class="news-article-content document-content-wrapper">
          ${contentHtml}
        </div>
      </div>
    `;

    this.container.innerHTML = html;
  }

  renderInternalDocument(doc, highlights = [], comments = []) {
    const contentBlocks = doc.contentBlocks || [];

    const contentHtml = contentBlocks.length > 0 
      ? this.renderContentBlocks(contentBlocks, true, highlights, comments)
      : (doc.excerpt ? `<p class="internal-document-paragraph">${this.escapeHtml(doc.excerpt)}</p>` : '');

    const html = `
      <div class="internal-document">
        <div class="internal-document-header">
          ${doc.department ? `<div class="internal-document-department">${doc.department}</div>` : ''}
          <div class="internal-document-meta">
            ${doc.author ? `<span>Author: ${doc.author}</span>` : ''}
            ${doc.publishedDate ? `<span>${this.formatDate(doc.publishedDate)}</span>` : ''}
          </div>
        </div>
        
        <div class="internal-document-content document-content-wrapper">
          ${contentHtml}
        </div>
      </div>
    `;

    this.container.innerHTML = html;
  }

  renderContentBlocks(blocks, showPortionMarks = this.options.showPortionMarks, highlights = [], comments = []) {
    return blocks.map((block, blockIndex) => {
      const portionMarkHtml = showPortionMarks && block.portionMark 
        ? renderPortionMark(block.portionMark) + ' '
        : '';

      // Get highlights and comments for this block
      const blockHighlights = highlights.filter(h => h.blockIndex === blockIndex);
      const blockComments = comments.filter(c => c.blockIndex === blockIndex);
      
      // Check if block has annotations
      const hasAnnotations = blockHighlights.length > 0 || blockComments.length > 0;
      
      // Render comment markers
      const commentMarkersHtml = blockComments.length > 0 ? blockComments.map(comment => `
        <div class="comment-marker" data-comment-id="${comment.id}" title="${comment.user?.displayName || 'Unknown'}: ${this.escapeHtml(comment.content.substring(0, 50))}...">
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12z"/>
          </svg>
        </div>
      `).join('') : '';

      switch (block.type) {
        case 'heading':
          return `
            <div class="content-block-wrapper">
              ${commentMarkersHtml}
              <h3 class="news-article-heading">
                ${portionMarkHtml}${this.applyHighlights(this.escapeHtml(block.content), blockHighlights)}
              </h3>
            </div>
          `;
        
        case 'paragraph':
          return `
            <div class="content-block-wrapper">
              ${commentMarkersHtml}
              <p class="content-block-text">${portionMarkHtml}${this.applyHighlights(this.escapeHtml(block.content), blockHighlights)}</p>
            </div>
          `;
        
        case 'image':
          return `
            <div class="news-article-inline-image">
              <img src="${block.imageUrl || PLACEHOLDERS.image}" alt="${block.caption || 'Image'}">
              ${block.caption ? `<div class="news-article-image-caption">${block.caption}</div>` : ''}
            </div>
          `;
        
        case 'quote':
          return `
            <div class="content-block-wrapper">
              ${commentMarkersHtml}
              <blockquote class="news-article-quote">
                ${portionMarkHtml}${this.applyHighlights(this.escapeHtml(block.content), blockHighlights)}
              </blockquote>
            </div>
          `;
        
        case 'list':
          const items = Array.isArray(block.content) ? block.content : block.content.split('\n').filter(item => item.trim());
          return `
            <div class="content-block-wrapper">
              ${commentMarkersHtml}
              <ul class="news-article-list">
                ${items.map(item => `<li>${portionMarkHtml}${this.escapeHtml(item)}</li>`).join('')}
              </ul>
            </div>
          `;
        
        default:
          return `
            <div class="content-block-wrapper">
              ${commentMarkersHtml}
              <p>${portionMarkHtml}${this.applyHighlights(this.escapeHtml(block.content || ''), blockHighlights)}</p>
            </div>
          `;
      }
    }).join('');
  }

  /**
   * Apply highlights to text content
   * @param {string} text - The escaped HTML text
   * @param {Array} highlights - Array of highlight objects for this content
   * @returns {string} HTML with highlight spans applied
   */
  applyHighlights(text, highlights) {
    if (!highlights || highlights.length === 0) return text;
    
    // Sort highlights by start offset (descending) to apply from end to start
    // This prevents offset shifting when inserting HTML
    const sortedHighlights = [...highlights].sort((a, b) => b.startOffset - a.startOffset);
    
    let result = text;
    
    sortedHighlights.forEach(highlight => {
      const { startOffset, endOffset, user, createdAt, id } = highlight;
      
      // Make sure offsets are within bounds
      if (startOffset >= 0 && endOffset <= result.length && startOffset < endOffset) {
        const before = result.substring(0, startOffset);
        const highlighted = result.substring(startOffset, endOffset);
        const after = result.substring(endOffset);
        
        const tooltipHtml = `
          <span class="highlight-tooltip">
            <span class="highlight-tooltip-user">${user?.displayName || 'Unknown'}</span>
            <span class="highlight-tooltip-time">${this.formatRelativeTime(createdAt)}</span>
          </span>
        `;
        
        result = `${before}<span class="user-highlight" data-highlight-id="${id}">${highlighted}${tooltipHtml}</span>${after}`;
      }
    });
    
    return result;
  }

  /**
   * Apply highlights to social post content (single content field, no blockIndex)
   */
  applyContentHighlights(text, highlights) {
    // For social posts, highlights have blockIndex: null
    const contentHighlights = highlights.filter(h => h.blockIndex === null || h.blockIndex === undefined);
    return this.applyHighlights(text, contentHighlights);
  }

  escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

export default DocumentContentRenderer;
