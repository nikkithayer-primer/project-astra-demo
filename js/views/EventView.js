/**
 * EventView.js
 * Detail view for an event using the CardManager pattern
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { PageHeader } from '../utils/PageHeader.js';
import { initAllCardToggles } from '../utils/cardWidthToggle.js';
import { aggregatePublisherVolumeData, aggregateFactionSentiment } from '../utils/volumeDataUtils.js';
import { TagChips } from '../components/TagChips.js';
import { getTagPicker } from '../components/TagPickerModal.js';
import {
  CardManager,
  NetworkGraphCard,
  NarrativeListCard,
  MapCard,
  TimelineVolumeCompositeCard,
  TopicListCard,
  SentimentChartCard,
  VennDiagramCard,
  DocumentTableCard
} from '../components/CardComponents.js';

export class EventView extends BaseView {
  constructor(container, eventId, options = {}) {
    super(container, options);
    this.eventId = eventId;
    this.cardManager = new CardManager(this);
  }

  async render() {
    const event = DataService.getEvent(this.eventId);
    if (!event) {
      this.renderNotFound('Event');
      return;
    }

    // Fetch all data upfront
    const data = this.fetchEventData(event);
    
    // Store data for card setup
    this._eventData = { event, data };
    
    // Determine active tab
    const activeTab = this.getCurrentTab();
    const hasDocuments = data.documents.length > 0;
    
    // Build cards based on active tab
    if (this.isDocumentsTab()) {
      this.setupDocumentsCard(event, data);
    } else {
      this.setupDashboardCards(event, data);
    }
    
    // Generate tabs config
    const baseHref = `#/event/${this.eventId}`;
    const tabsConfig = hasDocuments ? this.getTabsConfig(baseHref, true) : null;

    // Format date for subtitle
    const eventDate = new Date(event.date);
    const formattedDate = eventDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const subtitleParts = [
      formattedDate,
      data.location ? data.location.name : ''
    ].filter(Boolean).join(' • ');

    // Build breadcrumbs with optional parent event
    const breadcrumbs = [
      { label: 'Dashboard', href: '#/dashboard' },
      { label: 'Events', href: '#/events' }
    ];
    if (data.parentEvent) {
      breadcrumbs.push({ label: this.truncateText(data.parentEvent.text, 30), href: `#/event/${data.parentEvent.id}` });
    }
    breadcrumbs.push(this.truncateText(event.text, 40));

    // Build page header with tabs
    const headerHtml = PageHeader.render({
      breadcrumbs: breadcrumbs,
      title: event.text,
      subtitle: subtitleParts,
      description: event.description,
      descriptionLink: event.description 
        ? `<a href="#" class="btn btn-small btn-secondary source-link" data-source-type="event" data-source-id="${event.id}">View source</a>` 
        : '',
      tagsContainerId: 'event-tags-container',
      tabs: tabsConfig,
      activeTab: activeTab
    });

    // Build parent link HTML if applicable (only on dashboard tab)
    const parentLinkHtml = data.parentEvent && this.isDashboardTab() ? `
      <div class="parent-link" onclick="window.location.hash='#/event/${data.parentEvent.id}'">
        <span class="parent-link-icon">↑</span>
        <span class="parent-link-text">${data.parentEvent.text}</span>
      </div>
    ` : '';

    // Render page
    this.container.innerHTML = `
      ${headerHtml}
      <div class="content-area">
        ${parentLinkHtml}
        <div class="content-grid">
          ${this.cardManager.getHtml()}
        </div>
      </div>
    `;

    // Initialize card width toggles
    const contentGrid = this.container.querySelector('.content-grid');
    if (contentGrid) {
      const tabSuffix = this.isDocumentsTab() ? '-docs' : '';
      initAllCardToggles(contentGrid, `event-${this.eventId}${tabSuffix}`);
    }

    // Initialize all card components
    const components = this.cardManager.initializeAll();
    Object.assign(this.components, components);

    // Initialize tag chips
    this.initTagChips(event);
  }

  /**
   * Initialize tag chips component
   */
  initTagChips(event) {
    const tagsContainer = this.container.querySelector('#event-tags-container');
    if (tagsContainer) {
      this.tagChips = new TagChips({
        entityType: 'event',
        entityId: event.id,
        editable: true,
        onAddClick: () => {
          const picker = getTagPicker();
          picker.open('event', event.id, () => {
            this.tagChips.refresh();
          });
        }
      });
      this.tagChips.render(tagsContainer);
    }
  }

  /**
   * Fetch all data related to the event
   */
  fetchEventData(event) {
    const parentEvent = DataService.getParentEvent(this.eventId);
    const subEvents = DataService.getSubEventsForEvent(this.eventId);
    const location = DataService.getLocationForEvent(this.eventId);
    const persons = DataService.getPersonsForEvent(this.eventId);
    const organizations = DataService.getOrganizationsForEvent(this.eventId);
    const narratives = DataService.getNarrativesForEvent(this.eventId);
    const documents = DataService.getDocumentsForEvent(this.eventId);
    const hasNetwork = persons.length > 0 || organizations.length > 0;

    // Get person/org IDs for network graph
    const personIds = persons.map(p => p.id);
    const orgIds = organizations.map(o => o.id);

    // All events including this one and sub-events for timeline
    const allEvents = [event, ...subEvents];

    // Prepare publisher volume data for the composite chart (by source)
    const publisherData = aggregatePublisherVolumeData(documents);
    const hasPublisherData = publisherData && publisherData.dates.length > 0;
    const hasVolumeTimeline = hasPublisherData || allEvents.length > 0;

    // Get topics related to this event (topics that share documents)
    const eventDocIds = new Set(documents.map(d => d.id));
    const allTopics = DataService.getTopics ? DataService.getTopics() : [];
    const topics = allTopics.filter(topic =>
      (topic.documentIds || []).some(dId => eventDocIds.has(dId))
    );

    // Get factions from documents and compute sentiment
    const sentimentFactions = aggregateFactionSentiment(documents);
    const factions = sentimentFactions.map(sf => DataService.getFaction(sf.id)).filter(Boolean);

    // Get faction overlaps
    const factionOverlaps = factions.length > 1
      ? DataService.getFactionOverlapsFor(factions[0]?.id).filter(o =>
          o.factionIds.every(fid => factions.some(f => f.id === fid))
        )
      : [];

    // Build map locations
    const mapLocations = location ? [{ ...location, isEvent: true, eventText: event.text }] : [];

    return { 
      parentEvent, subEvents, location, persons, organizations, 
      narratives, documents, hasNetwork, personIds, orgIds, allEvents,
      publisherData, hasPublisherData, hasVolumeTimeline, topics,
      factions, sentimentFactions, factionOverlaps, mapLocations
    };
  }

  /**
   * Set up card components for Dashboard tab
   */
  setupDashboardCards(event, data) {
    // Reset card manager for fresh setup
    this.cardManager = new CardManager(this);

    // 1. Volume & Events Chart (full-width)
    if (data.hasVolumeTimeline) {
      this.cardManager.add(new TimelineVolumeCompositeCard(this, 'event-volume-events', {
        title: 'Volume & Events',
        publisherData: data.publisherData,
        events: data.allEvents,
        fullWidth: true,
        height: 450,
        volumeHeight: 180,
        timelineHeight: 180,
        showViewToggle: false
      }));
    }

    // 2. Related Narratives (half-width)
    if (data.narratives.length > 0) {
      this.cardManager.add(new NarrativeListCard(this, 'event-narratives', {
        title: 'Narratives',
        narratives: data.narratives,
        halfWidth: true,
        showCount: true,
        maxItems: 8
      }));
    }

    // 3. Topics (half-width)
    if (data.topics.length > 0) {
      this.cardManager.add(new TopicListCard(this, 'event-topics', {
        title: 'Topics',
        topics: data.topics,
        halfWidth: true,
        showCount: true
      }));
    }

    // 4. People & Organizations Network (half-width)
    if (data.hasNetwork) {
      this.cardManager.add(new NetworkGraphCard(this, 'event-network', {
        title: 'People & Orgs',
        personIds: data.personIds,
        orgIds: data.orgIds,
        halfWidth: true,
        height: 350
      }));
    }

    // 5. Faction Sentiment (half-width)
    if (data.sentimentFactions.length > 0) {
      this.cardManager.add(new SentimentChartCard(this, 'event-sentiment', {
        title: 'Faction Sentiment',
        factions: data.sentimentFactions,
        halfWidth: true,
        clickRoute: 'faction'
      }));
    }

    // 6. Faction Overlaps Venn Diagram (half-width)
    if (data.factions.length >= 2) {
      this.cardManager.add(new VennDiagramCard(this, 'event-venn', {
        title: 'Faction Overlaps',
        factions: data.factions,
        overlaps: data.factionOverlaps,
        halfWidth: true,
        height: 300
      }));
    }

    // 7. Location Map (half-width)
    if (data.mapLocations.length > 0) {
      this.cardManager.add(new MapCard(this, 'event-map', {
        title: 'Locations',
        locations: data.mapLocations,
        halfWidth: true,
        height: 350,
        defaultZoom: 12
      }));
    }
  }

  /**
   * Set up card for Documents tab (full-width document table)
   */
  setupDocumentsCard(event, data) {
    // Reset card manager for fresh setup
    this.cardManager = new CardManager(this);

    if (data.documents.length > 0) {
      this.cardManager.add(new DocumentTableCard(this, 'event-documents', {
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

export default EventView;
