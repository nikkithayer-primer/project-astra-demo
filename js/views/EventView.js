/**
 * EventView.js
 * Detail view for an event using the CardManager pattern
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { PageHeader } from '../utils/PageHeader.js';
import { initAllCardToggles } from '../utils/cardWidthToggle.js';
import {
  CardManager,
  NetworkGraphCard,
  NarrativeListCard,
  MapCard,
  TimelineCard,
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
      initAllCardToggles(contentGrid, `event-${this.eventId}${tabSuffix}`, { 1: 'half', 2: 'half' });
    }

    // Initialize all card components
    const components = this.cardManager.initializeAll();
    Object.assign(this.components, components);
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

    return { 
      parentEvent, subEvents, location, persons, organizations, 
      narratives, documents, hasNetwork, personIds, orgIds, allEvents 
    };
  }

  /**
   * Set up card components for Dashboard tab
   */
  setupDashboardCards(event, data) {
    // Reset card manager for fresh setup
    this.cardManager = new CardManager(this);

    // Event Timeline (full width)
    const timelineTitle = data.subEvents.length > 0 
      ? `Event Timeline (${data.subEvents.length} sub-events)` 
      : 'Event Timeline';
    this.cardManager.add(new TimelineCard(this, 'event-timeline', {
      title: timelineTitle,
      events: data.allEvents,
      height: 280,
      excludeId: null // Don't exclude any - show all including main event
    }));

    // Location Map (half-width)
    if (data.location) {
      this.cardManager.add(new MapCard(this, 'event-map', {
        title: 'Location',
        locations: [{ ...data.location, isEvent: true, eventText: event.text }],
        halfWidth: true,
        height: 350,
        defaultZoom: 12
      }));
    }

    // People & Organizations Network (half-width)
    if (data.hasNetwork) {
      this.cardManager.add(new NetworkGraphCard(this, 'event-network', {
        title: 'People & Organizations Involved',
        personIds: data.personIds,
        orgIds: data.orgIds,
        halfWidth: true,
        height: 350
      }));
    }

    // Related Narratives (full-width)
    if (data.narratives.length > 0) {
      this.cardManager.add(new NarrativeListCard(this, 'event-narratives', {
        title: 'Related Narratives',
        narratives: data.narratives,
        showCount: true,
        maxItems: 8
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
