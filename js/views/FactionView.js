/**
 * FactionView.js
 * Detail view for a faction
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { PageHeader } from '../utils/PageHeader.js';
import { CardBuilder } from '../utils/CardBuilder.js';
import { VennDiagram } from '../components/VennDiagram.js';
import { NetworkGraph } from '../components/NetworkGraph.js';
import { NarrativeList } from '../components/NarrativeList.js';
import { SentimentChart } from '../components/SentimentChart.js';
import { DocumentTable } from '../components/DocumentTable.js';
import { ColumnFilter } from '../components/ColumnFilter.js';
import { initAllCardToggles } from '../utils/cardWidthToggle.js';
import { renderEntityList } from '../utils/entityRenderer.js';

// Column configuration for document tables
const DOCUMENT_AVAILABLE_COLUMNS = {
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

const DOCUMENT_DEFAULT_COLUMNS = ['publisherName', 'publisherType', 'title', 'publishedDate'];

export class FactionView extends BaseView {
  constructor(container, factionId, options = {}) {
    super(container, options);
    this.factionId = factionId;
    this.networkViewMode = 'graph'; // 'graph' or 'list'
  }

  async render() {
    const faction = DataService.getFaction(this.factionId);
    if (!faction) {
      this.renderNotFound('Faction');
      return;
    }

    // Fetch all data upfront
    const data = this.fetchFactionData(faction);
    
    // Determine active tab and build appropriate cards
    const activeTab = this.getCurrentTab();
    const hasDocuments = data.documents.length > 0;
    const cardsHtml = this.isDocumentsTab() 
      ? this.buildDocumentsCard(data)
      : this.buildDashboardCards(faction, data);

    // Generate tabs config
    const baseHref = `#/faction/${this.factionId}`;
    const tabsConfig = hasDocuments ? this.getTabsConfig(baseHref, true) : null;

    // Build page header with tabs
    const headerHtml = PageHeader.render({
      breadcrumbs: [
        { label: 'Dashboard', href: '#/dashboard' },
        { label: 'Factions', href: '#/factions' },
        faction.name
      ],
      title: faction.name,
      iconColor: faction.color,
      subtitle: faction.memberCount ? `${this.formatNumber(faction.memberCount)} members` : '',
      tabs: tabsConfig,
      activeTab: activeTab
    });

    this.container.innerHTML = `
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
      const tabSuffix = this.isDocumentsTab() ? '-docs' : '';
      initAllCardToggles(contentGrid, `faction-${this.factionId}${tabSuffix}`, { 0: 'half', 1: 'half' });
    }

    // Store pre-fetched data for component initialization
    this._prefetchedData = { faction, ...data };

    await this.initializeComponents();

    // Initialize drag-and-drop for cards
    this.initDragDrop();
  }

  fetchFactionData(faction) {
    const relatedFactions = DataService.getRelatedFactions(this.factionId);
    const factionOverlaps = DataService.getFactionOverlapsFor(this.factionId);
    const narratives = DataService.getNarrativesForFaction(this.factionId);
    const affiliatedPersons = DataService.getAffiliatedPersonsForFaction(this.factionId);
    const affiliatedOrgs = DataService.getAffiliatedOrganizationsForFaction(this.factionId);

    // Build sentiment data for persons/orgs this faction has sentiment toward
    const personsWithSentiment = DataService.getPersons()
      .filter(p => p.factionSentiment && p.factionSentiment[this.factionId])
      .map(p => ({
        ...p,
        sentiment: p.factionSentiment[this.factionId],
        color: faction.color
      }));

    const orgsWithSentiment = DataService.getOrganizations()
      .filter(o => o.factionSentiment && o.factionSentiment[this.factionId])
      .map(o => ({
        ...o,
        sentiment: o.factionSentiment[this.factionId],
        color: faction.color
      }));

    const documents = DataService.getDocumentsForFaction(this.factionId);
    const hasNetwork = affiliatedPersons.length > 0 || affiliatedOrgs.length > 0;
    const allFactions = [faction, ...relatedFactions];

    return {
      relatedFactions, factionOverlaps, narratives, documents,
      affiliatedPersons, affiliatedOrgs, personsWithSentiment,
      orgsWithSentiment, hasNetwork, allFactions
    };
  }

  /**
   * Build cards for the Dashboard tab (all cards except documents)
   */
  buildDashboardCards(faction, data) {
    const cards = [];

    if (data.allFactions.length >= 1) {
      cards.push(CardBuilder.create('Related Factions', 'faction-venn', { halfWidth: true }));
    }

    if (data.hasNetwork) {
      const entityCount = data.affiliatedPersons.length + data.affiliatedOrgs.length;
      cards.push(CardBuilder.create('Affiliated Entities', 'faction-network', { 
        halfWidth: true,
        count: entityCount,
        actions: this.getNetworkToggleHtml('faction-network')
      }));
    }

    if (data.narratives.length > 0) {
      cards.push(CardBuilder.create('Narratives', 'faction-narratives', {
        count: data.narratives.length,
        noPadding: true
      }));
    }

    if (data.personsWithSentiment.length > 0) {
      cards.push(CardBuilder.create('Sentiment Toward People', 'faction-person-sentiment', { halfWidth: true }));
    }

    if (data.orgsWithSentiment.length > 0) {
      cards.push(CardBuilder.create('Sentiment Toward Organizations', 'faction-org-sentiment', { halfWidth: true }));
    }

    return cards.join('');
  }

  /**
   * Build card for the Documents tab (full-width document table)
   */
  buildDocumentsCard(data) {
    if (data.documents.length === 0) {
      return '<div class="empty-state"><p class="empty-state-text">No documents found</p></div>';
    }

    // Column filter in card header
    const actionsHtml = `<div class="filter-control" id="faction-docs-column-filter"></div>`;

    return CardBuilder.create('Source Documents', 'faction-documents', {
      count: data.documents.length,
      fullWidth: true,
      noPadding: true,
      actions: actionsHtml
    });
  }

  async initializeComponents() {
    const {
      faction, factionOverlaps, narratives, documents,
      affiliatedPersons, affiliatedOrgs, personsWithSentiment, orgsWithSentiment, allFactions
    } = this._prefetchedData;

    // Documents Tab: Only initialize document table with column filter
    if (this.isDocumentsTab()) {
      if (documents.length > 0) {
        // Initialize selected columns (start with defaults)
        this._selectedDocColumns = [...DOCUMENT_DEFAULT_COLUMNS];
        
        // Initialize column filter
        const filterContainer = document.getElementById('faction-docs-column-filter');
        if (filterContainer) {
          this.components.columnFilter = new ColumnFilter('faction-docs-column-filter', {
            availableColumns: DOCUMENT_AVAILABLE_COLUMNS,
            defaultColumns: DOCUMENT_DEFAULT_COLUMNS,
            requiredColumns: ['title'],
            onChange: (columns) => {
              this._selectedDocColumns = columns;
              if (this.components.documentTable) {
                this.components.documentTable.setColumns(columns);
              }
            }
          });
          this.components.columnFilter.setSelectedColumns(this._selectedDocColumns);
          this.components.columnFilter.render();
        }
        
        // Initialize document table
        this.components.documentTable = new DocumentTable('faction-documents', {
          columns: this._selectedDocColumns,
          maxItems: 50,
          enableViewerMode: true,
          onDocumentClick: (doc) => {
            window.location.hash = `#/document/${doc.id}`;
          }
        });
        this.components.documentTable.update({ documents });
      }
      return;
    }

    // Dashboard Tab: Initialize all other components

    // Venn Diagram
    if (allFactions.length >= 1) {
      this.components.venn = new VennDiagram('faction-venn', {
        height: 300,
        onFactionClick: (f) => {
          if (f.id !== this.factionId) {
            window.location.hash = `#/faction/${f.id}`;
          }
        }
      });
      this.components.venn.update({
        sets: allFactions.map(f => ({
          id: f.id,
          name: f.name,
          size: f.memberCount || 1000,
          color: f.color
        })),
        overlaps: factionOverlaps
      });
      this.components.venn.enableAutoResize();
    }

    // Network Graph of affiliated entities
    if (affiliatedPersons.length > 0 || affiliatedOrgs.length > 0) {
      const personIds = affiliatedPersons.map(p => p.id);
      const orgIds = affiliatedOrgs.map(o => o.id);
      
      this._networkData = {
        personIds,
        orgIds,
        persons: affiliatedPersons,
        orgs: affiliatedOrgs,
        graphData: DataService.buildNetworkGraph(personIds, orgIds)
      };
      
      this.renderNetworkView();
      this.setupNetworkToggle('faction-network');
    }

    // Narratives List
    if (narratives.length > 0) {
      this.components.narrativeList = new NarrativeList('faction-narratives', {
        maxItems: 8,
        onNarrativeClick: (n) => {
          window.location.hash = `#/narrative/${n.id}`;
        }
      });
      this.components.narrativeList.update({ narratives });
    }

    // Person Sentiment Chart
    if (personsWithSentiment.length > 0) {
      this.components.personSentiment = new SentimentChart('faction-person-sentiment', {
        height: Math.max(150, personsWithSentiment.length * 50),
        onFactionClick: (p) => {
          window.location.hash = `#/person/${p.id}`;
        }
      });
      this.components.personSentiment.update({ factions: personsWithSentiment });
      this.components.personSentiment.enableAutoResize();
    }

    // Org Sentiment Chart
    if (orgsWithSentiment.length > 0) {
      this.components.orgSentiment = new SentimentChart('faction-org-sentiment', {
        height: Math.max(150, orgsWithSentiment.length * 50),
        onFactionClick: (o) => {
          window.location.hash = `#/organization/${o.id}`;
        }
      });
      this.components.orgSentiment.update({ factions: orgsWithSentiment });
      this.components.orgSentiment.enableAutoResize();
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
    const container = document.getElementById('faction-network');
    if (!container || !this._networkData) return;

    if (this.components.network) {
      this.components.network.destroy();
      this.components.network = null;
    }

    if (this.networkViewMode === 'graph') {
      this.components.network = new NetworkGraph('faction-network', {
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
      this.components.network.enableAutoResize();
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

export default FactionView;
