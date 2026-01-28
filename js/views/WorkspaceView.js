/**
 * WorkspaceView.js
 * Detail view for a single workspace using the CardManager pattern
 */

import { BaseView } from './BaseView.js';
import { DataService } from '../data/DataService.js';
import { dataStore } from '../data/DataStore.js';
import { PageHeader } from '../utils/PageHeader.js';
import { initAllCardToggles } from '../utils/cardWidthToggle.js';
import { getWorkspaceEditor } from '../components/WorkspaceEditorModal.js';
import {
  CardManager,
  NetworkGraphCard,
  NarrativeListCard,
  ThemeListCard,
  SentimentChartCard,
  MapCard,
  TimelineCard,
  DocumentTableCard
} from '../components/CardComponents.js';

export class WorkspaceView extends BaseView {
  constructor(container, workspaceId, options = {}) {
    super(container, options);
    this.workspaceId = workspaceId;
    this.cardManager = new CardManager(this);
  }

  async render() {
    const workspace = DataService.getWorkspace(this.workspaceId);
    if (!workspace) {
      this.renderNotFound('Workspace');
      return;
    }

    // Fetch all data upfront
    const data = this.fetchWorkspaceData(workspace);
    
    // Store data for card setup
    this._workspaceData = { workspace, data };
    
    // Determine active tab
    const activeTab = this.getCurrentTab();
    const hasDocuments = data.documents.length > 0;
    
    // Build cards based on active tab
    if (this.isDocumentsTab()) {
      this.setupDocumentsCard(workspace, data);
    } else {
      this.setupDashboardCards(workspace, data);
    }
    
    // Generate tabs config
    const baseHref = `#/workspace/${this.workspaceId}`;
    const tabsConfig = hasDocuments ? this.getTabsConfig(baseHref, true) : null;

    // Build subtitle with stats
    const docCount = data.documents.length;
    const entityCount = data.persons.length + data.organizations.length;
    const subtitleParts = [
      `<span class="text-muted">Query:</span> "${this.escapeHtml(workspace.query)}"`,
      `<span class="badge">${docCount} document${docCount !== 1 ? 's' : ''}</span>`,
      entityCount > 0 ? `<span class="badge">${entityCount} entit${entityCount !== 1 ? 'ies' : 'y'}</span>` : ''
    ].filter(Boolean).join(' ');

    // Status badge
    const isArchived = workspace.status === 'archived';
    const statusBadge = isArchived
      ? '<span class="badge badge-status-paused">Archived</span>'
      : '<span class="badge badge-status-active">Active</span>';

    // Action buttons for header
    const archiveBtnLabel = isArchived ? 'Restore' : 'Archive';
    const archiveBtnIcon = isArchived
      ? '<path d="M3 10h10l-3-3M3 10l3 3M13 6v8H3V6"/>'  // Restore icon
      : '<path d="M3 5h10M4 5v9h8V5M6 8v3M10 8v3"/>';    // Archive icon
    
    const actionsHtml = `
      <button class="btn btn-small btn-secondary" id="workspace-edit-btn">
        <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M11.5 2.5l2 2M2 11l-.5 3.5L5 14l9-9-2-2-10 10z"/>
        </svg>
        Edit
      </button>
      <button class="btn btn-small btn-secondary" id="workspace-archive-btn">
        <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5">
          ${archiveBtnIcon}
        </svg>
        ${archiveBtnLabel}
      </button>
    `;

    const headerHtml = PageHeader.render({
      breadcrumbs: [
        { label: 'Dashboard', href: '#/dashboard' },
        { label: 'Workspaces', href: '#/workspaces' },
        workspace.name
      ],
      title: workspace.name,
      badge: statusBadge,
      subtitle: subtitleParts,
      description: workspace.description,
      actions: actionsHtml,
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
      initAllCardToggles(contentGrid, `workspace-${this.workspaceId}${tabSuffix}`);
    }

    // Initialize all card components
    const components = this.cardManager.initializeAll();
    Object.assign(this.components, components);

    // Set up action button handlers
    this.setupActionButtons(workspace);
  }

  /**
   * Fetch all data for the workspace
   */
  fetchWorkspaceData(workspace) {
    // Get all documents in the workspace
    const documents = (workspace.documentIds || [])
      .map(id => DataService.getDocument(id))
      .filter(Boolean)
      .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));

    // Aggregate all entity IDs from documents
    const personIds = new Set();
    const organizationIds = new Set();
    const narrativeIds = new Set();
    const themeIds = new Set();
    const locationIds = new Set();
    const eventIds = new Set();
    const factionIds = new Set();

    documents.forEach(doc => {
      (doc.personIds || []).forEach(id => personIds.add(id));
      (doc.organizationIds || []).forEach(id => organizationIds.add(id));
      (doc.narrativeIds || []).forEach(id => narrativeIds.add(id));
      (doc.themeIds || []).forEach(id => themeIds.add(id));
      (doc.locationIds || []).forEach(id => locationIds.add(id));
      (doc.eventIds || []).forEach(id => eventIds.add(id));
    });

    // Resolve entities from IDs
    const persons = [...personIds].map(id => DataService.getPerson(id)).filter(Boolean);
    const organizations = [...organizationIds].map(id => DataService.getOrganization(id)).filter(Boolean);
    const narratives = [...narrativeIds].map(id => DataService.getNarrative(id)).filter(Boolean);
    const themes = [...themeIds].map(id => DataService.getTheme(id)).filter(Boolean);
    const locations = [...locationIds].map(id => DataService.getLocation(id)).filter(Boolean);
    const events = [...eventIds].map(id => DataService.getEvent(id)).filter(Boolean);

    // Get factions from narratives using document-based aggregation
    narratives.forEach(n => {
      const factionMentions = DataService.getAggregateFactionMentionsForNarrative(n.id);
      Object.keys(factionMentions).forEach(fId => factionIds.add(fId));
    });
    const factions = this.calculateFactionSentiment(narratives, [...factionIds]);

    // Build network graph data
    const hasNetwork = persons.length > 0 || organizations.length > 0;

    return {
      documents,
      persons, organizations,
      narratives, themes,
      locations, events, factions,
      personIds: [...personIds],
      orgIds: [...organizationIds],
      hasNetwork
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
  setupDashboardCards(workspace, data) {
    // Reset card manager for fresh setup
    this.cardManager = new CardManager(this);

    // Show empty state if no related data
    if (data.narratives.length === 0 && data.themes.length === 0 && 
        !data.hasNetwork && data.factions.length === 0 && 
        data.locations.length === 0 && data.events.length === 0) {
      return; // CardManager will have no cards, view will show empty
    }

    // Narratives (full width if many, half if few)
    if (data.narratives.length > 0) {
      this.cardManager.add(new NarrativeListCard(this, 'workspace-narratives', {
        title: 'Related Narratives',
        narratives: data.narratives,
        showCount: true,
        maxItems: 10,
        fullWidth: data.narratives.length > 3,
        halfWidth: data.narratives.length <= 3,
        showDescriptionToggle: true
      }));
    }

    // Themes (half-width)
    if (data.themes.length > 0) {
      this.cardManager.add(new ThemeListCard(this, 'workspace-themes', {
        title: 'Related Themes',
        themes: data.themes,
        showCount: true,
        maxItems: 10,
        halfWidth: true,
        showDescriptionToggle: true
      }));
    }

    // People & Organizations Network (half-width)
    if (data.hasNetwork) {
      this.cardManager.add(new NetworkGraphCard(this, 'workspace-network', {
        title: 'People & Organizations',
        personIds: data.personIds,
        orgIds: data.orgIds,
        halfWidth: true,
        height: 400
      }));
    }

    // Faction Engagement (half-width)
    if (data.factions.length > 0) {
      this.cardManager.add(new SentimentChartCard(this, 'workspace-factions', {
        title: 'Faction Engagement',
        factions: data.factions,
        halfWidth: true,
        clickRoute: 'faction'
      }));
    }

    // Mentioned Locations Map (half-width)
    if (data.locations.length > 0) {
      this.cardManager.add(new MapCard(this, 'workspace-map', {
        title: 'Mentioned Locations',
        locations: data.locations,
        halfWidth: true,
        height: 300
      }));
    }

    // Related Events Timeline (half-width)
    if (data.events.length > 0) {
      this.cardManager.add(new TimelineCard(this, 'workspace-events', {
        title: 'Related Events',
        events: data.events,
        showCount: true,
        halfWidth: true,
        height: 250
      }));
    }
  }

  /**
   * Set up card for Documents tab (full-width document table)
   */
  setupDocumentsCard(workspace, data) {
    // Reset card manager for fresh setup
    this.cardManager = new CardManager(this);

    if (data.documents.length > 0) {
      this.cardManager.add(new DocumentTableCard(this, 'workspace-documents', {
        title: 'Documents',
        documents: data.documents,
        showCount: true,
        fullWidth: true,
        maxItems: 100,
        enableViewerMode: true
      }));
    }
  }

  /**
   * Set up action button handlers (Edit, Archive)
   */
  setupActionButtons(workspace) {
    // Edit button
    const editBtn = this.container.querySelector('#workspace-edit-btn');
    if (editBtn) {
      editBtn.addEventListener('click', () => {
        const editor = getWorkspaceEditor();
        editor.openEdit(workspace, (updatedWorkspace) => {
          // Re-render the view with updated data
          this.render();
        });
      });
    }

    // Archive/Restore button
    const archiveBtn = this.container.querySelector('#workspace-archive-btn');
    if (archiveBtn) {
      archiveBtn.addEventListener('click', () => {
        const isArchived = workspace.status === 'archived';
        const newStatus = isArchived ? 'active' : 'archived';
        
        // Update workspace status (auto-save)
        dataStore.updateWorkspace(workspace.id, { status: newStatus });
        
        // Re-render to reflect the change
        this.render();
      });
    }
  }

  destroy() {
    this.cardManager.destroyAll();
    super.destroy();
  }
}

export default WorkspaceView;
