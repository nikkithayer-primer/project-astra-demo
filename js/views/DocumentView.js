/**
 * DocumentView.js
 * Detail view for a single document
 * Supports multiple document types: social_post, tiktok, news_article, internal
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { PageHeader } from '../utils/PageHeader.js';
import { CardBuilder } from '../utils/CardBuilder.js';
import { NarrativeList } from '../components/NarrativeList.js';
import { SubNarrativeList } from '../components/SubNarrativeList.js';
import { MapView } from '../components/MapView.js';
import { Timeline } from '../components/Timeline.js';
import { NetworkGraph } from '../components/NetworkGraph.js';
import { ClassificationBanner, renderClassificationBadge } from '../components/ClassificationBanner.js';
import { DocumentContentRenderer } from '../components/DocumentContentRenderer.js';
import { initAllCardToggles } from '../utils/cardWidthToggle.js';
import { renderEntityList } from '../utils/entityRenderer.js';
import { 
  DOCUMENT_TYPES, 
  isSocialMedia, 
  hasTitle,
  getDocumentTypeInfo,
  getClassificationLevel
} from '../utils/classification.js';

export class DocumentView extends BaseView {
  constructor(container, documentId, options = {}) {
    super(container, options);
    this.documentId = documentId;
    this._keydownHandler = null;
    this.networkViewMode = 'graph'; // 'graph' or 'list'
  }

  formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  }

  async render() {
    const doc = DataService.getDocument(this.documentId);
    if (!doc) {
      this.renderNotFound('Document');
      return;
    }

    // Fetch all related data
    const data = this.fetchDocumentData(doc);
    
    // Build cards HTML
    const cardsHtml = this.buildCardsHtml(doc, data);

    // Build custom header (documents have a unique header format)
    const headerHtml = this.renderDocumentHeader(doc, data.publisher);

    // Build classification banner HTML
    const classificationBannerHtml = this.renderClassificationBanner(doc);

    this.container.innerHTML = `
      ${classificationBannerHtml}
      ${headerHtml}
      <div class="content-area">
        <div class="content-grid">
          ${cardsHtml}
        </div>
      </div>
    `;

    // Initialize card width toggles
    if (cardsHtml) {
      const contentGrid = this.container.querySelector('.content-grid');
      initAllCardToggles(contentGrid, `doc-${this.documentId}`);
    }

    // Store pre-fetched data for component initialization
    this._prefetchedData = { doc, ...data };

    await this.initializeComponents();
    
    // Set up keyboard navigation
    this.setupKeyboardNavigation();

    // Initialize drag-and-drop for cards
    this.initDragDrop();
  }

  /**
   * Set up keyboard navigation for document reader
   * Spacebar: next document, Delete/Backspace: previous document
   */
  setupKeyboardNavigation() {
    // Remove any existing handler
    if (this._keydownHandler) {
      document.removeEventListener('keydown', this._keydownHandler);
    }
    
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
      }
    };
    
    document.addEventListener('keydown', this._keydownHandler);
  }

  /**
   * Get ordered list of document IDs
   */
  getDocumentIds() {
    const documents = DataService.getDocuments();
    // Sort by publishedDate descending (newest first)
    return documents
      .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
      .map(d => d.id);
  }

  /**
   * Navigate to the next document in the list
   */
  navigateToNextDocument() {
    const documentIds = this.getDocumentIds();
    const currentIndex = documentIds.indexOf(this.documentId);
    
    if (currentIndex === -1) return;
    
    // Get next index, wrap around to beginning if at end
    const nextIndex = (currentIndex + 1) % documentIds.length;
    const nextDocId = documentIds[nextIndex];
    
    window.location.hash = `#/document/${nextDocId}`;
  }

  /**
   * Navigate to the previous document in the list
   */
  navigateToPreviousDocument() {
    const documentIds = this.getDocumentIds();
    const currentIndex = documentIds.indexOf(this.documentId);
    
    if (currentIndex === -1) return;
    
    // Get previous index, wrap around to end if at beginning
    const prevIndex = (currentIndex - 1 + documentIds.length) % documentIds.length;
    const prevDocId = documentIds[prevIndex];
    
    window.location.hash = `#/document/${prevDocId}`;
  }

  /**
   * Clean up keyboard listener and components
   */
  destroy() {
    if (this._keydownHandler) {
      document.removeEventListener('keydown', this._keydownHandler);
      this._keydownHandler = null;
    }
    super.destroy();
  }

  fetchDocumentData(doc) {
    const publisher = DataService.getPublisherForDocument(this.documentId);
    const narratives = DataService.getNarrativesForDocument(this.documentId);
    const subNarratives = DataService.getSubNarrativesForDocument(this.documentId);
    const persons = DataService.getPersonsForDocument(this.documentId);
    const organizations = DataService.getOrganizationsForDocument(this.documentId);
    const locations = DataService.getLocationsForDocument(this.documentId);
    const events = DataService.getEventsForDocument(this.documentId);
    const hasNetwork = persons.length > 0 || organizations.length > 0;
    
    // Fetch highlights and comments for annotations
    const highlights = DataService.getHighlightsForDocument(this.documentId);
    const comments = DataService.getCommentsForDocument(this.documentId);

    return {
      publisher, narratives, subNarratives, persons, organizations, locations, events, hasNetwork,
      highlights, comments
    };
  }

  buildCardsHtml(doc, data) {
    const cards = [];
    const docType = doc.documentType || 'news_article';

    // Document Content card (for documents with content blocks or social content)
    const hasContent = doc.contentBlocks?.length > 0 || 
                       doc.content || 
                       doc.transcription ||
                       isSocialMedia(docType);
    
    if (hasContent) {
      const typeInfo = getDocumentTypeInfo(docType);
      cards.push(CardBuilder.create('Document Content', 'doc-content', {
        subtitle: typeInfo.label
      }));
    }

    if (data.narratives.length > 0) {
      cards.push(CardBuilder.create('Related Narratives', 'doc-narratives', {
        count: data.narratives.length,
        noPadding: true
      }));
    }

    if (data.subNarratives.length > 0) {
      cards.push(CardBuilder.create('Related Themes', 'doc-subnarratives', {
        count: data.subNarratives.length,
        noPadding: true
      }));
    }

    if (data.hasNetwork) {
      const entityCount = data.persons.length + data.organizations.length;
      cards.push(CardBuilder.create('Mentioned People & Organizations', 'doc-network', {
        count: entityCount,
        actions: this.getNetworkToggleHtml('doc-network')
      }));
    }

    if (data.locations.length > 0) {
      cards.push(CardBuilder.create('Mentioned Locations', 'doc-map', { noPadding: true }));
    }

    if (data.events.length > 0) {
      cards.push(CardBuilder.create('Related Events', 'doc-timeline', {
        count: data.events.length
      }));
    }

    return cards.join('');
  }

  renderClassificationBanner(doc) {
    const classification = doc.classification || 'U';
    
    // Only show banner for classified documents (not U)
    if (classification === 'U') {
      return '';
    }

    const level = getClassificationLevel(classification);
    if (!level) return '';

    return `
      <div class="classification-banner classification-banner-${classification.toLowerCase()}">
        ${level.fullName}
      </div>
    `;
  }

  renderDocumentHeader(doc, publisher) {
    const breadcrumbsHtml = PageHeader.renderBreadcrumbs([
      { label: 'Dashboard', href: '#/dashboard' },
      'Document'
    ]);

    const docType = doc.documentType || 'news_article';
    const typeInfo = getDocumentTypeInfo(docType);
    const showTitle = hasTitle(docType);
    const isSocial = isSocialMedia(docType);

    // Publisher badge with color (or neutral for internal)
    const publisherHtml = publisher ? `
      <div class="document-publisher-badge" ${publisher.color ? `style="background: ${publisher.color}20; border-color: ${publisher.color}40; color: ${publisher.color}"` : ''}>
        ${publisher.name}
      </div>
    ` : '';

    // Document type badge
    const typeBadgeHtml = `
      <span class="doc-type-badge doc-type-badge-${docType.replace('_', '-')}">
        ${typeInfo.label}
      </span>
    `;

    // Classification badge (small, in header)
    const classification = doc.classification || 'U';
    const classificationBadgeHtml = renderClassificationBadge(classification);

    // For social posts: show author info instead of title
    const socialHeaderHtml = isSocial && doc.author ? `
      <div class="document-social-author">
        <span class="social-author-name">${doc.author.displayName || 'Unknown'}</span>
        <span class="social-author-username">${doc.author.username || ''}</span>
      </div>
    ` : '';

    // Action button - different for internal docs (no URL)
    const actionButtonHtml = doc.url ? `
      <div class="document-actions">
        <a href="${doc.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2h8v8M14 2L6 10"/>
          </svg>
          View Original Source
        </a>
      </div>
    ` : '';

    return `
      <div class="page-header">
        ${breadcrumbsHtml}
        <div class="document-detail-header">
          ${publisherHtml}
          ${typeBadgeHtml}
          ${classificationBadgeHtml}
          <span class="document-date-detail">${this.formatDate(doc.publishedDate)}</span>
        </div>
        ${showTitle && doc.title ? `<h1>${doc.title}</h1>` : socialHeaderHtml}
        ${showTitle && doc.excerpt ? `
          <p class="document-excerpt-detail">${doc.excerpt}</p>
        ` : ''}
        ${actionButtonHtml}
      </div>
    `;
  }

  async initializeComponents() {
    const {
      doc, narratives, subNarratives, persons, organizations, locations, events,
      highlights, comments
    } = this._prefetchedData;

    // Document Content Renderer
    const contentContainer = document.getElementById('doc-content');
    if (contentContainer) {
      this.components.contentRenderer = new DocumentContentRenderer('doc-content', {
        showPortionMarks: true,
        showAnnotations: true
      });
      this.components.contentRenderer.update({ 
        document: doc,
        highlights: highlights || [],
        comments: comments || []
      });
    }

    // Narratives List
    if (narratives.length > 0) {
      this.components.narrativeList = new NarrativeList('doc-narratives', {
        maxItems: 10,
        onNarrativeClick: (n) => {
          window.location.hash = `#/narrative/${n.id}`;
        }
      });
      this.components.narrativeList.update({ narratives });
    }

    // Themes List
    if (subNarratives.length > 0) {
      this.components.subNarrativeList = new SubNarrativeList('doc-subnarratives', {
        maxItems: 10,
        onSubNarrativeClick: (s) => {
          window.location.hash = `#/subnarrative/${s.id}`;
        }
      });
      this.components.subNarrativeList.update({ subNarratives });
    }

    // Network Graph
    if (persons.length > 0 || organizations.length > 0) {
      const personIds = persons.map(p => p.id);
      const orgIds = organizations.map(o => o.id);
      
      this._networkData = {
        personIds,
        orgIds,
        persons,
        orgs: organizations,
        graphData: DataService.buildNetworkGraph(personIds, orgIds)
      };
      
      this.renderNetworkView();
      this.setupNetworkToggle('doc-network');
    }

    // Map
    if (locations.length > 0) {
      this.components.map = new MapView('doc-map', {
        height: 300
      });
      this.components.map.update({ locations });
    }

    // Events Timeline
    if (events.length > 0) {
      this.components.timeline = new Timeline('doc-timeline', {
        height: 200,
        onEventClick: (e) => {
          window.location.hash = `#/event/${e.id}`;
        }
      });
      this.components.timeline.update({ events });
    }
  }

  /**
   * Get the HTML for the network view toggle buttons
   */
  getNetworkToggleHtml(containerId) {
    return `
      <div class="view-toggle network-view-toggle" data-container="${containerId}">
        <button class="view-toggle-btn ${this.networkViewMode === 'graph' ? 'active' : ''}" data-view="graph" title="Network Graph">
          <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="8" cy="4" r="2"/>
            <circle cx="4" cy="12" r="2"/>
            <circle cx="12" cy="12" r="2"/>
            <path d="M8 6v2M6 10l-1 1M10 10l1 1"/>
          </svg>
        </button>
        <button class="view-toggle-btn ${this.networkViewMode === 'list' ? 'active' : ''}" data-view="list" title="List View">
          <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M2 4h12M2 8h12M2 12h12"/>
          </svg>
        </button>
      </div>
    `;
  }

  /**
   * Render the network view based on current mode
   */
  renderNetworkView() {
    const container = document.getElementById('doc-network');
    if (!container || !this._networkData) return;

    if (this.components.network) {
      this.components.network.destroy();
      this.components.network = null;
    }

    if (this.networkViewMode === 'graph') {
      this.components.network = new NetworkGraph('doc-network', {
        height: 350,
        onNodeClick: (node) => {
          const route = node.type === 'person' ? 'person' : 'organization';
          window.location.hash = `#/${route}/${node.id}`;
        },
        onLinkClick: (link) => {
          this.showConnectingNarrativesModal(link);
        }
      });
      this.components.network.update(this._networkData.graphData);
    } else {
      this.renderNetworkListView(container);
    }
  }

  /**
   * Render list view for people and organizations
   */
  renderNetworkListView(container) {
    const { persons, orgs } = this._networkData;
    const allEntities = [
      ...persons.map(p => ({ ...p, _type: 'person' })),
      ...orgs.map(o => ({ ...o, _type: 'organization' }))
    ];

    container.innerHTML = renderEntityList(allEntities, { sortByName: true });

    container.querySelectorAll('.entity-list-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.dataset.id;
        const type = item.dataset.type;
        window.location.hash = `#/${type}/${id}`;
      });
    });
  }

  /**
   * Set up network view toggle listeners
   */
  setupNetworkToggle(containerId) {
    const toggleContainer = document.querySelector(`.network-view-toggle[data-container="${containerId}"]`);
    if (!toggleContainer) return;

    toggleContainer.querySelectorAll('.view-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const newView = btn.dataset.view;
        if (newView !== this.networkViewMode) {
          this.networkViewMode = newView;
          toggleContainer.querySelectorAll('.view-toggle-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.view === newView);
          });
          this.renderNetworkView();
        }
      });
    });
  }
}

export default DocumentView;
