/**
 * FactionView.js
 * Detail view for a faction using the CardManager pattern
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { PageHeader } from '../utils/PageHeader.js';
import { initAllCardToggles } from '../utils/cardWidthToggle.js';
import {
  CardManager,
  NetworkGraphCard,
  NarrativeListCard,
  SentimentChartCard,
  VennDiagramCard,
  DocumentTableCard
} from '../components/CardComponents.js';

export class FactionView extends BaseView {
  constructor(container, factionId, options = {}) {
    super(container, options);
    this.factionId = factionId;
    this.cardManager = new CardManager(this);
  }

  async render() {
    const faction = DataService.getFaction(this.factionId);
    if (!faction) {
      this.renderNotFound('Faction');
      return;
    }

    // Fetch all data upfront
    const data = this.fetchFactionData(faction);
    
    // Store data for card setup
    this._factionData = { faction, data };
    
    // Determine active tab
    const activeTab = this.getCurrentTab();
    const hasDocuments = data.documents.length > 0;
    
    // Build cards based on active tab
    if (this.isDocumentsTab()) {
      this.setupDocumentsCard(faction, data);
    } else {
      this.setupDashboardCards(faction, data);
    }
    
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

    // Render page
    this.container.innerHTML = `
      ${headerHtml}
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
      initAllCardToggles(contentGrid, `faction-${this.factionId}${tabSuffix}`, { 0: 'half', 1: 'half' });
    }

    // Initialize all card components
    const components = this.cardManager.initializeAll();
    Object.assign(this.components, components);
  }

  /**
   * Fetch all data related to the faction
   */
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

    // Get person/org IDs for network graph
    const personIds = affiliatedPersons.map(p => p.id);
    const orgIds = affiliatedOrgs.map(o => o.id);

    return {
      relatedFactions, factionOverlaps, narratives, documents,
      affiliatedPersons, affiliatedOrgs, personsWithSentiment,
      orgsWithSentiment, hasNetwork, allFactions, personIds, orgIds
    };
  }

  /**
   * Set up card components for Dashboard tab
   */
  setupDashboardCards(faction, data) {
    // Reset card manager for fresh setup
    this.cardManager = new CardManager(this);

    // Related Factions Venn Diagram (half-width)
    if (data.allFactions.length >= 1) {
      this.cardManager.add(new VennDiagramCard(this, 'faction-venn', {
        title: 'Related Factions',
        factions: data.allFactions,
        overlaps: data.factionOverlaps,
        halfWidth: true,
        height: 300,
        excludeId: this.factionId
      }));
    }

    // Affiliated Entities Network (half-width)
    if (data.hasNetwork) {
      this.cardManager.add(new NetworkGraphCard(this, 'faction-network', {
        title: 'Affiliated Entities',
        personIds: data.personIds,
        orgIds: data.orgIds,
        halfWidth: true,
        height: 350
      }));
    }

    // Narratives List (full-width)
    if (data.narratives.length > 0) {
      this.cardManager.add(new NarrativeListCard(this, 'faction-narratives', {
        title: 'Narratives',
        narratives: data.narratives,
        showCount: true,
        maxItems: 8
      }));
    }

    // Sentiment Toward People (half-width)
    if (data.personsWithSentiment.length > 0) {
      this.cardManager.add(new SentimentChartCard(this, 'faction-person-sentiment', {
        title: 'Sentiment Toward People',
        factions: data.personsWithSentiment,
        halfWidth: true,
        clickRoute: 'person'
      }));
    }

    // Sentiment Toward Organizations (half-width)
    if (data.orgsWithSentiment.length > 0) {
      this.cardManager.add(new SentimentChartCard(this, 'faction-org-sentiment', {
        title: 'Sentiment Toward Organizations',
        factions: data.orgsWithSentiment,
        halfWidth: true,
        clickRoute: 'organization'
      }));
    }
  }

  /**
   * Set up card for Documents tab (full-width document table)
   */
  setupDocumentsCard(faction, data) {
    // Reset card manager for fresh setup
    this.cardManager = new CardManager(this);

    if (data.documents.length > 0) {
      this.cardManager.add(new DocumentTableCard(this, 'faction-documents', {
        title: 'Source Documents',
        documents: data.documents,
        showCount: true,
        fullWidth: true,
        maxItems: 50,
        enableViewerMode: true
      }));
    }
  }

  destroy() {
    this.cardManager.destroyAll();
    super.destroy();
  }
}

export default FactionView;
