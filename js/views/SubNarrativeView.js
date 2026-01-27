/**
 * SubNarrativeView.js
 * Detail view for a theme (similar to NarrativeView but with parent link)
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { PageHeader } from '../utils/PageHeader.js';
import { CardBuilder } from '../utils/CardBuilder.js';
import { StackedAreaChart } from '../components/StackedAreaChart.js';
import { SentimentChart } from '../components/SentimentChart.js';
import { VennDiagram } from '../components/VennDiagram.js';
import { MapView } from '../components/MapView.js';
import { Timeline } from '../components/Timeline.js';
import { NetworkGraph } from '../components/NetworkGraph.js';
import { getSourceViewer } from '../components/SourceViewerModal.js';
import { initAllCardToggles } from '../utils/cardWidthToggle.js';
import { renderEntityList } from '../utils/entityRenderer.js';

export class SubNarrativeView extends BaseView {
  constructor(container, subNarrativeId, options = {}) {
    super(container, options);
    this.subNarrativeId = subNarrativeId;
    this.networkViewMode = 'graph'; // 'graph' or 'list'
  }

  async render() {
    const subNarrative = DataService.getSubNarrative(this.subNarrativeId);
    if (!subNarrative) {
      this.renderNotFound('Theme');
      return;
    }

    // Fetch all data upfront
    const data = this.fetchSubNarrativeData(subNarrative);
    
    // Build cards HTML
    const cardsHtml = this.buildCardsHtml(subNarrative, data);

    // Build breadcrumbs with optional parent narrative
    const breadcrumbs = [
      { label: 'Dashboard', href: '#/dashboard' },
      { label: 'Narratives', href: '#/narratives' }
    ];
    if (data.parentNarrative) {
      breadcrumbs.push({ label: 'Parent', href: `#/narrative/${data.parentNarrative.id}` });
    }
    breadcrumbs.push('Theme');

    // Build page header
    const headerHtml = PageHeader.render({
      breadcrumbs: breadcrumbs,
      title: subNarrative.text,
      subtitle: `<span class="badge badge-${this.getSentimentClass(subNarrative.sentiment)}">${this.formatSentiment(subNarrative.sentiment)}</span>`,
      description: subNarrative.description,
      descriptionLink: subNarrative.description 
        ? `<a href="#" class="source-link" id="subnarrative-source-link">View source</a>` 
        : ''
    });

    // Build parent link HTML if applicable
    const parentLinkHtml = data.parentNarrative ? `
      <div class="parent-link" onclick="window.location.hash='#/narrative/${data.parentNarrative.id}'">
        <span class="parent-link-icon">↑</span>
        <span class="parent-link-text">${data.parentNarrative.text}</span>
      </div>
    ` : '';

    this.container.innerHTML = `
      ${headerHtml}
      <div class="content-area">
        ${parentLinkHtml}
        <div class="content-grid">
          ${cardsHtml}
        </div>
      </div>
    `;

    // Initialize card width toggles
    if (cardsHtml) {
      const contentGrid = this.container.querySelector('.content-grid');
      initAllCardToggles(contentGrid, `subnarrative-${this.subNarrativeId}`);
    }

    // Store pre-fetched data for component initialization
    this._prefetchedData = { subNarrative, ...data };

    await this.initializeComponents();

    // Set up source link handler
    const sourceLink = this.container.querySelector('#subnarrative-source-link');
    if (sourceLink) {
      sourceLink.addEventListener('click', (e) => {
        e.preventDefault();
        getSourceViewer().open(subNarrative, 'subnarrative');
      });
    }

    // Initialize drag-and-drop for cards
    this.initDragDrop();
  }

  fetchSubNarrativeData(subNarrative) {
    const parentNarrative = DataService.getParentNarrative(this.subNarrativeId);
    const factionData = DataService.getFactionsForSubNarrative(subNarrative.id);
    const factions = factionData.map(f => f.faction).filter(Boolean);
    const factionOverlaps = factions.length > 1
      ? DataService.getFactionOverlapsFor(factions[0]?.id).filter(o =>
          o.factionIds.every(fid => factions.some(f => f.id === fid))
        )
      : [];

    // Check data availability for each section
    const hasVolumeData = subNarrative.volumeOverTime && subNarrative.volumeOverTime.length > 0 && factions.length > 0;
    const locations = (subNarrative.locationIds || []).map(lid => DataService.getLocation(lid)).filter(Boolean);
    const events = (subNarrative.eventIds || []).map(eid => DataService.getEvent(eid)).filter(Boolean);
    const personIds = subNarrative.personIds || [];
    const orgIds = subNarrative.organizationIds || [];
    const hasNetwork = personIds.length > 0 || orgIds.length > 0;

    return {
      parentNarrative, factionData, factions, factionOverlaps,
      hasVolumeData, locations, events, personIds, orgIds, hasNetwork
    };
  }

  buildCardsHtml(subNarrative, data) {
    const cards = [];

    if (data.hasVolumeData) {
      cards.push(CardBuilder.create('Volume by Faction Over Time', 'sub-volume-chart'));
    }

    if (data.factionData.length > 0) {
      cards.push(CardBuilder.create('Sentiment by Faction', 'sub-sentiment-chart'));
    }

    if (data.factions.length >= 2) {
      cards.push(CardBuilder.create('Faction Overlaps', 'sub-venn'));
    }

    if (data.locations.length > 0) {
      cards.push(CardBuilder.create('Related Locations', 'sub-map', { noPadding: true }));
    }

    if (data.events.length > 0) {
      cards.push(CardBuilder.create('Related Events', 'sub-timeline'));
    }

    if (data.hasNetwork) {
      const entityCount = data.personIds.length + data.orgIds.length;
      cards.push(CardBuilder.create('People & Organizations', 'sub-network', {
        count: entityCount,
        actions: this.getNetworkToggleHtml('sub-network')
      }));
    }

    return cards.join('');
  }

  async initializeComponents() {
    const {
      subNarrative, factionData, factions, factionOverlaps,
      hasVolumeData, locations, events, personIds, orgIds
    } = this._prefetchedData;

    // Volume Over Time Chart
    if (hasVolumeData) {
      const dates = subNarrative.volumeOverTime.map(d => d.date);
      const series = factions.map(f =>
        subNarrative.volumeOverTime.map(d => (d.factionVolumes || {})[f.id] || 0)
      );

      this.components.volumeChart = new StackedAreaChart('sub-volume-chart', {
        height: 250,
        onFactionClick: (f) => {
          window.location.hash = `#/faction/${f.id}`;
        }
      });
      this.components.volumeChart.update({ dates, series, factions });
      this.components.volumeChart.enableAutoResize();
    }

    // Sentiment Chart
    if (factionData.length > 0) {
      const sentimentFactions = factionData.map(fd => ({
        ...fd.faction,
        sentiment: fd.sentiment
      }));

      this.components.sentimentChart = new SentimentChart('sub-sentiment-chart', {
        height: Math.max(150, factionData.length * 50),
        onFactionClick: (f) => {
          window.location.hash = `#/faction/${f.id}`;
        }
      });
      this.components.sentimentChart.update({ factions: sentimentFactions });
      this.components.sentimentChart.enableAutoResize();
    }

    // Venn Diagram
    if (factions.length >= 2) {
      this.components.venn = new VennDiagram('sub-venn', {
        height: 300,
        onFactionClick: (f) => {
          window.location.hash = `#/faction/${f.id}`;
        }
      });
      this.components.venn.update({
        sets: factions.map(f => ({
          id: f.id,
          name: f.name,
          size: f.memberCount || 1000,
          color: f.color
        })),
        overlaps: factionOverlaps
      });
      this.components.venn.enableAutoResize();
    }

    // Map
    if (locations.length > 0) {
      this.components.map = new MapView('sub-map', {
        height: 350
      });
      this.components.map.update({ locations });
    }

    // Timeline
    if (events.length > 0) {
      this.components.timeline = new Timeline('sub-timeline', {
        height: 250,
        onEventClick: (e) => {
          window.location.hash = `#/event/${e.id}`;
        }
      });
      this.components.timeline.update({ events });
    }

    // Network Graph
    if (personIds.length > 0 || orgIds.length > 0) {
      const persons = personIds.map(id => DataService.getPerson(id)).filter(Boolean);
      const orgs = orgIds.map(id => DataService.getOrganization(id)).filter(Boolean);
      
      this._networkData = {
        personIds,
        orgIds,
        persons,
        orgs,
        graphData: DataService.buildNetworkGraph(personIds, orgIds)
      };
      
      this.renderNetworkView();
      this.setupNetworkToggle('sub-network');
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
    const container = document.getElementById('sub-network');
    if (!container || !this._networkData) return;

    if (this.components.network) {
      this.components.network.destroy();
      this.components.network = null;
    }

    if (this.networkViewMode === 'graph') {
      this.components.network = new NetworkGraph('sub-network', {
        height: 400,
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

export default SubNarrativeView;
