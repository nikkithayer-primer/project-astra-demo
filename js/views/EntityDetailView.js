/**
 * EntityDetailView.js
 * Unified detail view for both Person and Organization entities
 * Consolidates the nearly identical PersonView and OrganizationView
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { PageHeader } from '../utils/PageHeader.js';
import { initAllCardToggles } from '../utils/cardWidthToggle.js';
import {
  CardManager,
  NetworkGraphCard,
  NarrativeListCard,
  DocumentTableCard,
  MapCard,
  TimelineCard,
  SentimentChartCard,
  FactionCardsCard
} from '../components/CardComponents.js';

export class EntityDetailView extends BaseView {
  /**
   * @param {HTMLElement|string} container - Container element or ID
   * @param {string} entityId - ID of the entity
   * @param {string} entityType - 'person' or 'organization'
   * @param {Object} options - View options
   */
  constructor(container, entityId, entityType, options = {}) {
    super(container, options);
    this.entityId = entityId;
    this.entityType = entityType;
    this.isPerson = entityType === 'person';
    this.cardManager = new CardManager(this);
  }

  async render() {
    // Get entity using appropriate service method
    const entity = this.isPerson
      ? DataService.getPerson(this.entityId)
      : DataService.getOrganization(this.entityId);

    if (!entity) {
      this.container.innerHTML = PageHeader.notFound(this.isPerson ? 'Person' : 'Organization');
      return;
    }

    // Fetch all related data
    const data = this.fetchEntityData(entity);
    
    // Store data for card setup
    this._entityData = { entity, data };
    
    // Determine active tab
    const activeTab = this.getCurrentTab();
    const hasDocuments = data.documents.length > 0;
    
    // Build cards based on active tab
    if (this.isDocumentsTab()) {
      this.setupDocumentsCard(entity, data);
    } else {
      this.setupDashboardCards(entity, data);
    }
    
    // Generate tabs config
    const baseHref = `#/${this.entityType}/${this.entityId}`;
    const tabsConfig = hasDocuments ? this.getTabsConfig(baseHref, true) : null;
    
    // Render page
    this.container.innerHTML = `
      ${this.renderHeader(entity, tabsConfig, activeTab)}
      <div class="content-area">
        <div class="content-grid">
          ${this.cardManager.getHtml()}
        </div>
      </div>
    `;

    // Initialize card width toggles
    const contentGrid = this.container.querySelector('.content-grid');
    if (contentGrid) {
      const tabSuffix = this.isDocumentsTab() ? '-docs' : '';
      // First 4 cards default to half-width for entity views (dashboard only)
      const defaults = this.isDocumentsTab() ? {} : { 0: 'half', 1: 'half', 2: 'half', 3: 'half' };
      initAllCardToggles(contentGrid, `${this.entityType}-${this.entityId}${tabSuffix}`, defaults);
    }

    // Initialize all card components
    const components = this.cardManager.initializeAll();
    Object.assign(this.components, components);
  }

  /**
   * Fetch all data related to the entity
   */
  fetchEntityData(entity) {
    const data = {};

    if (this.isPerson) {
      data.relatedPersons = DataService.getRelatedPersons(this.entityId);
      data.relatedOrgs = DataService.getRelatedOrganizationsForPerson(this.entityId);
      data.affiliatedFactions = DataService.getAffiliatedFactionsForPerson(this.entityId);
      data.locations = DataService.getLocationsForPerson(this.entityId);
      data.events = DataService.getEventsForPerson(this.entityId);
      data.narratives = DataService.getNarrativesForPerson(this.entityId);
      data.documents = DataService.getDocumentsForPerson(this.entityId);
    } else {
      data.relatedPersons = DataService.getRelatedPersonsForOrganization(this.entityId);
      data.relatedOrgs = DataService.getRelatedOrganizations(this.entityId);
      data.affiliatedFactions = DataService.getAffiliatedFactionsForOrganization(this.entityId);
      data.locations = DataService.getLocationsForOrganization(this.entityId);
      data.events = []; // Organizations don't have events directly
      data.narratives = DataService.getNarrativesForOrganization(this.entityId);
      data.documents = DataService.getDocumentsForOrganization(this.entityId);
    }

    // Build sentiment data - how factions feel about this entity
    data.factionSentimentData = Object.entries(entity.factionSentiment || {})
      .map(([factionId, sentiment]) => {
        const faction = DataService.getFaction(factionId);
        return faction ? { ...faction, sentiment } : null;
      })
      .filter(Boolean);

    // Build person IDs for network graph
    if (this.isPerson) {
      data.networkPersonIds = [this.entityId, ...data.relatedPersons.map(p => p.id)];
      data.networkOrgIds = data.relatedOrgs.map(o => o.id);
    } else {
      data.networkPersonIds = data.relatedPersons.map(p => p.id);
      data.networkOrgIds = [this.entityId, ...data.relatedOrgs.map(o => o.id)];
    }

    return data;
  }

  /**
   * Set up card components for Dashboard tab (all cards except documents)
   */
  setupDashboardCards(entity, data) {
    // Reset card manager for fresh setup
    this.cardManager = new CardManager(this);
    
    const prefix = this.isPerson ? 'person' : 'org';
    const hasNetwork = data.relatedPersons.length > 0 || data.relatedOrgs.length > 0;

    // Row 1: Network Graph + Sentiment (both half-width)
    if (hasNetwork) {
      this.cardManager.add(new NetworkGraphCard(this, `${prefix}-network`, {
        title: 'Related People & Organizations',
        personIds: data.networkPersonIds,
        orgIds: data.networkOrgIds,
        excludeId: this.entityId,
        excludeType: this.entityType,
        halfWidth: true
      }));
    }

    if (data.factionSentimentData.length > 0) {
      this.cardManager.add(new SentimentChartCard(this, `${prefix}-sentiment`, {
        title: `Faction Sentiment Toward ${entity.name}`,
        factions: data.factionSentimentData,
        halfWidth: true,
        clickRoute: 'faction'
      }));
    }

    // Row 2: Affiliated Factions + Map (both half-width)
    if (data.affiliatedFactions.length > 0) {
      this.cardManager.add(new FactionCardsCard(this, `${prefix}-factions`, {
        title: 'Affiliated Factions',
        factions: data.affiliatedFactions,
        halfWidth: true
      }));
    }

    if (data.locations.length > 0) {
      this.cardManager.add(new MapCard(this, `${prefix}-map`, {
        title: 'Associated Locations',
        locations: data.locations,
        halfWidth: true
      }));
    }

    // Events (Person only)
    if (this.isPerson && data.events.length > 0) {
      this.cardManager.add(new TimelineCard(this, `${prefix}-timeline`, {
        title: 'Related Events',
        events: data.events,
        showCount: true
      }));
    }

    // Narratives
    if (data.narratives.length > 0) {
      this.cardManager.add(new NarrativeListCard(this, `${prefix}-narratives`, {
        title: 'Related Narratives',
        narratives: data.narratives,
        showCount: true
      }));
    }
  }

  /**
   * Set up card for Documents tab (full-width document table)
   */
  setupDocumentsCard(entity, data) {
    // Reset card manager for fresh setup
    this.cardManager = new CardManager(this);
    
    const prefix = this.isPerson ? 'person' : 'org';

    if (data.documents.length > 0) {
      this.cardManager.add(new DocumentTableCard(this, `${prefix}-documents`, {
        title: 'Source Documents',
        documents: data.documents,
        showCount: true,
        fullWidth: true,
        maxItems: 50,
        enableViewerMode: true
      }));
    }
  }

  /**
   * Render the page header
   * @param {Object} entity - The entity object
   * @param {Array} tabsConfig - Tabs configuration for PageHeader
   * @param {string} activeTab - The currently active tab
   */
  renderHeader(entity, tabsConfig = null, activeTab = 'dashboard') {
    const personIcon = `<svg viewBox="0 0 16 16" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.25">
      <circle cx="8" cy="4" r="2.5"/>
      <path d="M3 14c0-3 2.2-5 5-5s5 2 5 5"/>
    </svg>`;
    const orgIcon = `<svg viewBox="0 0 16 16" width="24" height="24" fill="currentColor">
      <path d="M2.75 2.5C2.61193 2.5 2.5 2.61193 2.5 2.75V3.25C2.5 3.38807 2.61193 3.5 2.75 3.5H3.25C3.38807 3.5 3.5 3.38807 3.5 3.25V2.75C3.5 2.61193 3.38807 2.5 3.25 2.5H2.75Z"/>
      <path d="M4.5 2.75C4.5 2.61193 4.61193 2.5 4.75 2.5H5.25C5.38807 2.5 5.5 2.61193 5.5 2.75V3.25C5.5 3.38807 5.38807 3.5 5.25 3.5H4.75C4.61193 3.5 4.5 3.38807 4.5 3.25V2.75Z"/>
      <path d="M2.75 4.5C2.61193 4.5 2.5 4.61193 2.5 4.75V5.25C2.5 5.38807 2.61193 5.5 2.75 5.5H3.25C3.38807 5.5 3.5 5.38807 3.5 5.25V4.75C3.5 4.61193 3.38807 4.5 3.25 4.5H2.75Z"/>
      <path d="M2.5 6.75C2.5 6.61193 2.61193 6.5 2.75 6.5H3.25C3.38807 6.5 3.5 6.61193 3.5 6.75V7.25C3.5 7.38807 3.38807 7.5 3.25 7.5H2.75C2.61193 7.5 2.5 7.38807 2.5 7.25V6.75Z"/>
      <path d="M2.75 8.5C2.61193 8.5 2.5 8.61193 2.5 8.75V9.25C2.5 9.38807 2.61193 9.5 2.75 9.5H3.25C3.38807 9.5 3.5 9.38807 3.5 9.25V8.75C3.5 8.61193 3.38807 8.5 3.25 8.5H2.75Z"/>
      <path d="M2.5 10.75C2.5 10.6119 2.61193 10.5 2.75 10.5H3.25C3.38807 10.5 3.5 10.6119 3.5 10.75V11.25C3.5 11.3881 3.38807 11.5 3.25 11.5H2.75C2.61193 11.5 2.5 11.3881 2.5 11.25V10.75Z"/>
      <path d="M4.75 4.5C4.61193 4.5 4.5 4.61193 4.5 4.75V5.25C4.5 5.38807 4.61193 5.5 4.75 5.5H5.25C5.38807 5.5 5.5 5.38807 5.5 5.25V4.75C5.5 4.61193 5.38807 4.5 5.25 4.5H4.75Z"/>
      <path d="M4.5 6.75C4.5 6.61193 4.61193 6.5 4.75 6.5H5.25C5.38807 6.5 5.5 6.61193 5.5 6.75V7.25C5.5 7.38807 5.38807 7.5 5.25 7.5H4.75C4.61193 7.5 4.5 7.38807 4.5 7.25V6.75Z"/>
      <path d="M4.75 8.5C4.61193 8.5 4.5 8.61193 4.5 8.75V9.25C4.5 9.38807 4.61193 9.5 4.75 9.5H5.25C5.38807 9.5 5.5 9.38807 5.5 9.25V8.75C5.5 8.61193 5.38807 8.5 5.25 8.5H4.75Z"/>
      <path d="M4.5 10.75C4.5 10.6119 4.61193 10.5 4.75 10.5H5.25C5.38807 10.5 5.5 10.6119 5.5 10.75V11.25C5.5 11.3881 5.38807 11.5 5.25 11.5H4.75C4.61193 11.5 4.5 11.3881 4.5 11.25V10.75Z"/>
      <path d="M6.75 2.5C6.61193 2.5 6.5 2.61193 6.5 2.75V3.25C6.5 3.38807 6.61193 3.5 6.75 3.5H7.25C7.38807 3.5 7.5 3.38807 7.5 3.25V2.75C7.5 2.61193 7.38807 2.5 7.25 2.5H6.75Z"/>
      <path d="M6.5 4.75C6.5 4.61193 6.61193 4.5 6.75 4.5H7.25C7.38807 4.5 7.5 4.61193 7.5 4.75V5.25C7.5 5.38807 7.38807 5.5 7.25 5.5H6.75C6.61193 5.5 6.5 5.38807 6.5 5.25V4.75Z"/>
      <path d="M6.75 6.5C6.61193 6.5 6.5 6.61193 6.5 6.75V7.25C6.5 7.38807 6.61193 7.5 6.75 7.5H7.25C7.38807 7.5 7.5 7.38807 7.5 7.25V6.75C7.5 6.61193 7.38807 6.5 7.25 6.5H6.75Z"/>
      <path d="M6.5 8.75C6.5 8.61193 6.61193 8.5 6.75 8.5H7.25C7.38807 8.5 7.5 8.61193 7.5 8.75V9.25C7.5 9.38807 7.38807 9.5 7.25 9.5H6.75C6.61193 9.5 6.5 9.38807 6.5 9.25V8.75Z"/>
      <path d="M6.75 10.5C6.61193 10.5 6.5 10.6119 6.5 10.75V11.25C6.5 11.3881 6.61193 11.5 6.75 11.5H7.25C7.38807 11.5 7.5 11.3881 7.5 11.25V10.75C7.5 10.6119 7.38807 10.5 7.25 10.5H6.75Z"/>
      <path d="M11.25 6.5C11.1119 6.5 11 6.61193 11 6.75V7.25C11 7.38807 11.1119 7.5 11.25 7.5H11.75C11.8881 7.5 12 7.38807 12 7.25V6.75C12 6.61193 11.8881 6.5 11.75 6.5H11.25Z"/>
      <path d="M11 8.75C11 8.61193 11.1119 8.5 11.25 8.5H11.75C11.8881 8.5 12 8.61193 12 8.75V9.25C12 9.38807 11.8881 9.5 11.75 9.5H11.25C11.1119 9.5 11 9.38807 11 9.25V8.75Z"/>
      <path d="M11.25 10.5C11.1119 10.5 11 10.6119 11 10.75V11.25C11 11.3881 11.1119 11.5 11.25 11.5H11.75C11.8881 11.5 12 11.3881 12 11.25V10.75C12 10.6119 11.8881 10.5 11.75 10.5H11.25Z"/>
      <path d="M11 12.75C11 12.6119 11.1119 12.5 11.25 12.5H11.75C11.8881 12.5 12 12.6119 12 12.75V13.25C12 13.3881 11.8881 13.5 11.75 13.5H11.25C11.1119 13.5 11 13.3881 11 13.25V12.75Z"/>
      <path d="M13.25 6.5C13.1119 6.5 13 6.61193 13 6.75V7.25C13 7.38807 13.1119 7.5 13.25 7.5H13.75C13.8881 7.5 14 7.38807 14 7.25V6.75C14 6.61193 13.8881 6.5 13.75 6.5H13.25Z"/>
      <path d="M13 8.75C13 8.61193 13.1119 8.5 13.25 8.5H13.75C13.8881 8.5 14 8.61193 14 8.75V9.25C14 9.38807 13.8881 9.5 13.75 9.5H13.25C13.1119 9.5 13 9.38807 13 9.25V8.75Z"/>
      <path d="M13.25 10.5C13.1119 10.5 13 10.6119 13 10.75V11.25C13 11.3881 13.1119 11.5 13.25 11.5H13.75C13.8881 11.5 14 11.3881 14 11.25V10.75C14 10.6119 13.8881 10.5 13.75 10.5H13.25Z"/>
      <path d="M13 12.75C13 12.6119 13.1119 12.5 13.25 12.5H13.75C13.8881 12.5 14 12.6119 14 12.75V13.25C14 13.3881 13.8881 13.5 13.75 13.5H13.25C13.1119 13.5 13 13.3881 13 13.25V12.75Z"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 16H9.5C9.59107 16 9.67646 15.9757 9.75 15.9331C9.82354 15.9757 9.90893 16 10 16H15.5C15.7761 16 16 15.7761 16 15.5V4.5C16 4.22386 15.7761 4 15.5 4H10V0.5C10 0.223858 9.77614 0 9.5 0H0.5C0.223858 0 0 0.223858 0 0.5V15.5C0 15.7761 0.223858 16 0.5 16ZM1 15V1H9V15H7V13C7 12.7239 6.77614 12.5 6.5 12.5H3.5C3.22386 12.5 3 12.7239 3 13V15H1ZM6 13.5V15H4V13.5H6ZM10 5V15H15V5H10Z"/>
    </svg>`;
    const icon = this.isPerson ? personIcon : orgIcon;
    const typeLabel = entity.type 
      ? `Type: ${entity.type}` 
      : (this.isPerson ? 'Person' : 'Organization');

    return PageHeader.render({
      breadcrumbs: [
        { label: 'Dashboard', href: '#/dashboard' },
        { label: 'People & Orgs', href: '#/entities' },
        entity.name
      ],
      title: entity.name,
      icon: icon,
      imageUrl: entity.imageUrl || null,
      imageAlt: entity.name,
      subtitle: typeLabel,
      tabs: tabsConfig,
      activeTab: activeTab
    });
  }

  destroy() {
    this.cardManager.destroyAll();
    super.destroy();
  }
}

export default EntityDetailView;
