/**
 * ProjectView.js
 * Detail view for a single project using the CardManager pattern
 */

import { DetailViewBase } from './DetailViewBase.js';
import { DataService } from '../data/DataService.js';
import { PageHeader } from '../utils/PageHeader.js';
import { StatCards } from '../components/StatCards.js';
import {
  CardManager,
  NetworkGraphCard,
  NarrativeListCard,
  TopicListCard,
  SentimentChartCard,
  VennDiagramCard,
  MapCard,
  TimelineVolumeCompositeCard
} from '../components/CardComponents.js';

export class ProjectView extends DetailViewBase {
  constructor(container, projectId, options = {}) {
    super(container, options);
    this.projectId = projectId;
    this.cardManager = new CardManager(this);
  }

  async render() {
    const project = DataService.getProject(this.projectId);
    if (!project) {
      this.renderNotFound('Project');
      return;
    }

    // Fetch all data upfront
    const data = this.fetchProjectData(project);
    
    // Store data for card setup
    this._projectData = { project, data };
    
    // Determine active tab
    const activeTab = this.getCurrentTab();
    const hasDocuments = data.documents.length > 0;
    
    // Build cards based on active tab
    if (this.isDocumentsTab()) {
      super.setupDocumentsCard(project, data, 'project');
    } else {
      this.setupDashboardCards(project, data);
    }
    
    // Generate tabs config
    const baseHref = `#/${this.projectId}/`;
    const tabsConfig = hasDocuments ? this.getTabsConfig(baseHref, true) : null;

    // Build subtitle with stats
    const docCount = data.documents.length;
    const entityCount = data.persons.length + data.organizations.length;
    const subtitleParts = [
      `<span class="badge">${docCount} document${docCount !== 1 ? 's' : ''}</span>`,
      entityCount > 0 ? `<span class="badge">${entityCount} entit${entityCount !== 1 ? 'ies' : 'y'}</span>` : ''
    ].filter(Boolean).join(' ');

    // Status badge
    const isArchived = project.status === 'archived';
    const statusBadge = isArchived
      ? '<span class="badge badge-status-paused">Archived</span>'
      : '<span class="badge badge-status-active">Active</span>';

    // Build stats for the header with dropdown support
    const contextId = this.projectId;
    const statsData = StatCards.buildEntityStatsWithItems(data, contextId);

    const headerHtml = PageHeader.render({
      breadcrumbs: [
        { label: 'Dashboard', href: '#/dashboard' },
        { label: 'Projects', href: '#/projects' },
        project.name
      ],
      title: project.name,
      badge: statusBadge,
      subtitle: subtitleParts,
      description: project.description,
      stats: statsData,
      statsMode: 'dropdowns',
      statsContextId: contextId,
      tagsContainerId: 'project-tags-container',
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
    this.initCardWidthToggles('project', this.projectId);

    // Initialize all card components
    const components = this.cardManager.initializeAll();
    Object.assign(this.components, components);

    // Initialize stat card dropdowns
    this.initStatDropdowns(contextId);

    // Initialize tag chips
    this.initTagChips(project, 'project');
  }

  /**
   * Fetch all data for the project
   */
  fetchProjectData(project) {
    // Get all documents in the project
    const documents = DataService.getDocumentsForProject(this.projectId);

    // Get derived entities
    const entities = DataService.getEntitiesForProject(this.projectId);

    // Calculate factions with sentiment
    const factionIds = [...new Set(documents.flatMap(doc => 
      Object.keys(doc.factionMentions || {})
    ))];
    const factions = this.calculateFactionSentiment(entities.narratives, factionIds);

    // Get faction overlaps for Venn diagram
    const factionOverlaps = DataService.getFactionOverlaps();

    // Build network graph data
    const hasNetwork = entities.persons.length > 0 || entities.organizations.length > 0;

    // Get volume data for timeline (from project documents)
    const scopeDocIds = documents.map(d => d.id);
    const volumeResult = DataService.getVolumeDataForDocuments(scopeDocIds);
    const volumeData = volumeResult.byFaction;
    
    // Get narrative durations for duration view toggle (scoped to project documents)
    const narrativeDurations = DataService.getNarrativeDurations(null, null, null, scopeDocIds);

    // Combine persons and orgs as entities for stat cards (named 'combinedEntities' to avoid shadowing)
    const combinedEntities = [...entities.persons, ...entities.organizations];

    // Get activity (comments and highlights) for this project's documents
    const activityDocIds = new Set(documents.map(d => d.id));
    const allActivity = DataService.getAllActivity();
    const activity = allActivity.filter(item => activityDocIds.has(item.documentId));

    return {
      documents,
      persons: entities.persons,
      organizations: entities.organizations,
      narratives: entities.narratives,
      themes: entities.themes,
      topics: entities.topics,
      locations: entities.locations,
      events: entities.events,
      factions,
      factionOverlaps,
      personIds: entities.persons.map(p => p.id),
      orgIds: entities.organizations.map(o => o.id),
      hasNetwork,
      volumeData,
      narrativeDurations,
      entities: combinedEntities,
      activity
    };
  }

  /**
   * Calculate aggregated faction sentiment from narratives using document-based aggregation
   */
  calculateFactionSentiment(narratives, factionIds) {
    const factionStats = new Map();
    
    // Initialize stats for each faction
    factionIds.forEach(fId => {
      factionStats.set(fId, { totalVolume: 0, weightedSentiment: 0 });
    });
    
    // Aggregate volume and sentiment across narratives using document data
    narratives.forEach(n => {
      const factionMentions = DataService.getAggregateFactionMentionsForNarrative(n.id);
      Object.entries(factionMentions).forEach(([factionId, data]) => {
        const stats = factionStats.get(factionId);
        if (stats && data.volume && typeof data.sentiment === 'number') {
          stats.totalVolume += data.volume;
          stats.weightedSentiment += data.sentiment * data.volume;
        }
      });
    });
    
    // Calculate weighted average sentiment and return factions with data
    return factionIds
      .map(fId => {
        const faction = DataService.getFaction(fId);
        if (!faction) return null;
        
        const stats = factionStats.get(fId);
        if (!stats || stats.totalVolume === 0) {
          return { ...faction, sentiment: 0, volume: 0 };
        }
        
        return {
          ...faction,
          sentiment: stats.weightedSentiment / stats.totalVolume,
          volume: stats.totalVolume
        };
      })
      .filter(Boolean)
      .sort((a, b) => b.volume - a.volume);
  }

  /**
   * Set up card components for Dashboard tab
   */
  setupDashboardCards(project, data) {
    // Reset card manager for fresh setup
    this.cardManager = new CardManager(this);

    // Show empty state if no related data
    if (data.narratives.length === 0 && data.topics.length === 0 && 
        !data.hasNetwork && data.factions.length === 0 && 
        data.locations.length === 0 && data.events.length === 0) {
      return; // CardManager will have no cards, view will show empty
    }

    // 1. Volume Over Time x Events (full width)
    const hasVolumeData = data.volumeData?.dates?.length > 0;
    const hasDurationData = data.narrativeDurations?.length > 0;
    if (hasVolumeData || data.events.length > 0 || hasDurationData) {
      this.cardManager.add(new TimelineVolumeCompositeCard(this, 'project-volume-timeline', {
        title: 'Volume Over Time & Events',
        volumeData: hasVolumeData ? data.volumeData : null,
        events: data.events,
        narrativeDurations: hasDurationData ? data.narrativeDurations : null,
        fullWidth: true,
        height: 400,
        volumeHeight: 160,
        timelineHeight: 160
      }));
    }

    // 2. People & Organizations Network (half-width)
    if (data.hasNetwork) {
      this.cardManager.add(new NetworkGraphCard(this, 'project-network', {
        title: 'People & Organizations',
        personIds: data.personIds,
        orgIds: data.orgIds,
        halfWidth: true,
        height: 350
      }));
    }

    // 3. Narratives (half-width)
    if (data.narratives.length > 0) {
      this.cardManager.add(new NarrativeListCard(this, 'project-narratives', {
        title: 'Narratives',
        narratives: data.narratives,
        showCount: true,
        maxItems: 8,
        halfWidth: true,
        showDescriptionToggle: true
      }));
    }

    // 4. Topics (half-width)
    if (data.topics.length > 0) {
      this.cardManager.add(new TopicListCard(this, 'project-topics', {
        title: 'Topics',
        topics: data.topics,
        showCount: true,
        maxItems: 6,
        halfWidth: true,
        showBulletsToggle: true
      }));
    }

    // 5. Map with Events & Locations (half-width)
    if (data.locations.length > 0 || data.events.length > 0) {
      this.cardManager.add(new MapCard(this, 'project-map', {
        title: 'Events & Locations',
        locations: data.locations,
        events: data.events,
        halfWidth: true,
        height: 300,
        showViewToggle: true
      }));
    }

    // 6. Faction Sentiment (half-width)
    if (data.factions.length > 0) {
      this.cardManager.add(new SentimentChartCard(this, 'project-factions', {
        title: 'Faction Sentiment',
        factions: data.factions,
        halfWidth: true,
        clickRoute: 'faction'
      }));
    }

    // 7. Faction Overlaps (half-width)
    if (data.factions.length > 1 && data.factionOverlaps) {
      this.cardManager.add(new VennDiagramCard(this, 'project-faction-overlaps', {
        title: 'Faction Overlaps',
        factions: data.factions,
        overlaps: data.factionOverlaps,
        halfWidth: true,
        height: 280
      }));
    }
  }

}

export default ProjectView;
