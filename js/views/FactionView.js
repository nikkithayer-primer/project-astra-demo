/**
 * FactionView.js
 * Detail view for a faction using the CardManager pattern
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { PageHeader } from '../utils/PageHeader.js';
import { initAllCardToggles } from '../utils/cardWidthToggle.js';
import { TagChips } from '../components/TagChips.js';
import { getTagPicker } from '../components/TagPickerModal.js';
import {
  CardManager,
  NetworkGraphCard,
  NarrativeListCard,
  SentimentChartCard,
  VennDiagramCard,
  TimelineVolumeCompositeCard,
  TopicListCard,
  MapCard,
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
    
    // Generate tabs config - use context-aware routing
    const baseHref = this.buildContextRoute('faction', this.factionId);
    const tabsConfig = hasDocuments ? this.getTabsConfig(baseHref, true) : null;

    // Build context-aware breadcrumbs
    const breadcrumbs = this.buildBreadcrumbs([
      { label: 'Factions', route: 'factions' },
      faction.name
    ]);

    // Build page header with tabs
    const headerHtml = PageHeader.render({
      breadcrumbs,
      title: faction.name,
      iconColor: faction.color,
      subtitle: faction.memberCount ? `${this.formatNumber(faction.memberCount)} members` : '',
      description: faction.description,
      descriptionLink: faction.description 
        ? `<a href="#" class="btn btn-small btn-secondary source-link" data-source-type="faction" data-source-id="${faction.id}">View source</a>` 
        : '',
      tagsContainerId: 'faction-tags-container',
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
      initAllCardToggles(contentGrid, `faction-${this.factionId}${tabSuffix}`);
    }

    // Initialize all card components
    const components = this.cardManager.initializeAll();
    Object.assign(this.components, components);

    // Initialize tag chips
    this.initTagChips(faction);
  }

  /**
   * Initialize tag chips component
   */
  initTagChips(faction) {
    const tagsContainer = this.container.querySelector('#faction-tags-container');
    if (tagsContainer) {
      this.tagChips = new TagChips({
        entityType: 'faction',
        entityId: faction.id,
        editable: true,
        onAddClick: () => {
          const picker = getTagPicker();
          picker.open('faction', faction.id, () => {
            this.tagChips.refresh();
          });
        }
      });
      this.tagChips.render(tagsContainer);
    }
  }

  /**
   * Fetch all data related to the faction
   * Uses document scope from context if available
   */
  fetchFactionData(faction) {
    // Get document scope for context-aware data fetching
    const scopeDocIds = this.getDocumentScope();
    
    const relatedFactions = DataService.getRelatedFactions(this.factionId);
    const factionOverlaps = DataService.getFactionOverlapsFor(this.factionId);
    const narratives = DataService.getNarrativesForFaction(this.factionId);
    const affiliatedPersons = DataService.getAffiliatedPersonsForFaction(this.factionId);
    const affiliatedOrgs = DataService.getAffiliatedOrganizationsForFaction(this.factionId);

    // Build sentiment data for persons/orgs this faction has sentiment toward (scoped)
    const personsWithSentiment = DataService.getPersons(scopeDocIds)
      .filter(p => p.factionSentiment && p.factionSentiment[this.factionId])
      .map(p => ({
        ...p,
        sentiment: p.factionSentiment[this.factionId],
        color: faction.color
      }));

    const orgsWithSentiment = DataService.getOrganizations(scopeDocIds)
      .filter(o => o.factionSentiment && o.factionSentiment[this.factionId])
      .map(o => ({
        ...o,
        sentiment: o.factionSentiment[this.factionId],
        color: faction.color
      }));

    // Get documents (scoped)
    const documents = DataService.getDocumentsForFaction(this.factionId, scopeDocIds);
    const hasNetwork = affiliatedPersons.length > 0 || affiliatedOrgs.length > 0;
    const allFactions = [faction, ...relatedFactions];

    // Get person/org IDs for network graph
    const personIds = affiliatedPersons.map(p => p.id);
    const orgIds = affiliatedOrgs.map(o => o.id);

    // Prepare volume data for the composite chart (scoped to faction's documents)
    const docIds = documents.map(d => d.id);
    const volumeResult = DataService.getVolumeDataForDocuments(docIds);
    const publisherData = volumeResult.byPublisher;
    const hasPublisherData = publisherData && publisherData.dates.length > 0;

    // Get events from narratives related to this faction
    const allEvents = narratives.flatMap(n => {
      const eventIds = n.eventIds || [];
      return eventIds.map(eid => DataService.getEvent(eid)).filter(Boolean)
        .flatMap(e => [e, ...DataService.getSubEventsForEvent(e.id)]);
    });

    const hasVolumeTimeline = hasPublisherData || allEvents.length > 0;

    // Get topics related to this faction (topics that share documents) (scoped)
    const factionDocIds = new Set(documents.map(d => d.id));
    const allTopics = DataService.getTopics ? DataService.getTopics(scopeDocIds) : [];
    const topics = allTopics.filter(topic =>
      (topic.documentIds || []).some(dId => factionDocIds.has(dId))
    );

    // Get locations from documents and narratives
    const locationIds = new Set();
    documents.forEach(doc => {
      (doc.locationIds || []).forEach(lid => locationIds.add(lid));
    });
    narratives.forEach(n => {
      (n.locationIds || []).forEach(lid => locationIds.add(lid));
    });
    const locations = [...locationIds].map(lid => DataService.getLocation(lid)).filter(Boolean);

    // Build map locations including events
    const mapLocations = [
      ...locations.map(l => ({ ...l, isEvent: false })),
      ...allEvents.filter(e => e.locationId).map(e => {
        const loc = DataService.getLocation(e.locationId);
        return loc ? { ...loc, isEvent: true, eventText: e.text } : null;
      }).filter(Boolean)
    ];

    // Narrative durations for volume/duration toggle (scoped)
    const narrativeDurations = DataService.getNarrativeDurations(null, null, null, scopeDocIds);

    return {
      relatedFactions, factionOverlaps, narratives, documents,
      affiliatedPersons, affiliatedOrgs, personsWithSentiment,
      orgsWithSentiment, hasNetwork, allFactions, personIds, orgIds,
      publisherData, hasPublisherData, allEvents, hasVolumeTimeline,
      topics, locations, mapLocations, narrativeDurations
    };
  }

  /**
   * Set up card components for Dashboard tab
   */
  setupDashboardCards(faction, data) {
    // Reset card manager for fresh setup
    this.cardManager = new CardManager(this);

    // 1. Volume & Events Chart (full-width)
    const hasDurationData = data.narrativeDurations?.length > 0;
    if (data.hasVolumeTimeline || hasDurationData) {
      this.cardManager.add(new TimelineVolumeCompositeCard(this, 'faction-volume-events', {
        title: 'Volume & Events',
        publisherData: data.publisherData,
        events: data.allEvents,
        narrativeDurations: hasDurationData ? data.narrativeDurations : null,
        fullWidth: true,
        height: 450,
        volumeHeight: 180,
        timelineHeight: 180,
        showViewToggle: false
      }));
    }

    // 2. Sentiment Toward People (half-width)
    if (data.personsWithSentiment.length > 0) {
      this.cardManager.add(new SentimentChartCard(this, 'faction-person-sentiment', {
        title: 'Faction Sentiment for People',
        factions: data.personsWithSentiment,
        halfWidth: true,
        clickRoute: 'person'
      }));
    }

    // 3. Sentiment Toward Organizations (half-width)
    if (data.orgsWithSentiment.length > 0) {
      this.cardManager.add(new SentimentChartCard(this, 'faction-org-sentiment', {
        title: 'Faction Sentiment for Orgs',
        factions: data.orgsWithSentiment,
        halfWidth: true,
        clickRoute: 'organization'
      }));
    }

    // 4. Narratives List (full-width)
    if (data.narratives.length > 0) {
      this.cardManager.add(new NarrativeListCard(this, 'faction-narratives', {
        title: 'Narratives',
        narratives: data.narratives,
        showCount: true,
        fullWidth: true,
        maxItems: 8,
        showDescriptionToggle: true
      }));
    }

    // 5. Related People & Orgs Network (half-width)
    if (data.hasNetwork) {
      this.cardManager.add(new NetworkGraphCard(this, 'faction-network', {
        title: 'Related People & Orgs',
        personIds: data.personIds,
        orgIds: data.orgIds,
        halfWidth: true,
        height: 350
      }));
    }

    // 6. Related Factions Venn Diagram (half-width)
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

    // 7. Topics (half-width)
    if (data.topics.length > 0) {
      this.cardManager.add(new TopicListCard(this, 'faction-topics', {
        title: 'Topics',
        topics: data.topics,
        halfWidth: true,
        showCount: true,
        showBulletsToggle: true
      }));
    }

    // 8. Locations & Events Map (half-width)
    if (data.locations.length > 0 || data.allEvents.length > 0) {
      this.cardManager.add(new MapCard(this, 'faction-map', {
        title: 'Locations & Events',
        locations: data.locations,
        events: data.allEvents,
        halfWidth: true,
        height: 350,
        showViewToggle: true
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
