/**
 * entityIcons.js
 * Shared SVG icons for all entity types
 */

/**
 * Get SVG icon for an entity type
 * @param {string} type - Entity type (narratives, factions, locations, events, etc.)
 * @param {number} size - Icon size in pixels (default 16)
 * @returns {string} SVG HTML string
 */
export function getEntityIcon(type, size = 16) {
  const icons = {
    narratives: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
      <path d="M2 2h12v12H2z" rx="1"/>
      <path d="M4 5h8M4 8h8M4 11h5"/>
    </svg>`,
    narrative: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
      <path d="M2 2h12v12H2z" rx="1"/>
      <path d="M4 5h8M4 8h8M4 11h5"/>
    </svg>`,
    themes: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
      <path d="M3 3h10v10H3z" rx="1"/>
      <path d="M5 6h6M5 9h4"/>
    </svg>`,
    theme: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
      <path d="M3 3h10v10H3z" rx="1"/>
      <path d="M5 6h6M5 9h4"/>
    </svg>`,
    factions: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
      <circle cx="8" cy="5" r="2.5"/>
      <circle cx="4" cy="11" r="2"/>
      <circle cx="12" cy="11" r="2"/>
      <path d="M6 6.5L4.5 9M10 6.5l1.5 2.5"/>
    </svg>`,
    faction: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
      <circle cx="8" cy="5" r="2.5"/>
      <circle cx="4" cy="11" r="2"/>
      <circle cx="12" cy="11" r="2"/>
      <path d="M6 6.5L4.5 9M10 6.5l1.5 2.5"/>
    </svg>`,
    locations: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
      <path d="M8 1C5.2 1 3 3.2 3 6c0 4 5 9 5 9s5-5 5-9c0-2.8-2.2-5-5-5z"/>
      <circle cx="8" cy="6" r="2"/>
    </svg>`,
    location: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
      <path d="M8 1C5.2 1 3 3.2 3 6c0 4 5 9 5 9s5-5 5-9c0-2.8-2.2-5-5-5z"/>
      <circle cx="8" cy="6" r="2"/>
    </svg>`,
    events: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
      <rect x="2" y="3" width="12" height="11" rx="1"/>
      <path d="M2 6h12M5 1v3M11 1v3"/>
    </svg>`,
    event: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
      <rect x="2" y="3" width="12" height="11" rx="1"/>
      <path d="M2 6h12M5 1v3M11 1v3"/>
    </svg>`,
    entities: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
      <circle cx="8" cy="4" r="2.5"/>
      <path d="M3 14c0-3 2.2-5 5-5s5 2 5 5"/>
    </svg>`,
    person: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
      <circle cx="8" cy="4" r="2.5"/>
      <path d="M3 14c0-3 2.2-5 5-5s5 2 5 5"/>
    </svg>`,
    persons: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
      <circle cx="8" cy="4" r="2.5"/>
      <path d="M3 14c0-3 2.2-5 5-5s5 2 5 5"/>
    </svg>`,
    organization: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="currentColor">
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
    </svg>`,
    organizations: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="currentColor">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 16H9.5C9.59107 16 9.67646 15.9757 9.75 15.9331C9.82354 15.9757 9.90893 16 10 16H15.5C15.7761 16 16 15.7761 16 15.5V4.5C16 4.22386 15.7761 4 15.5 4H10V0.5C10 0.223858 9.77614 0 9.5 0H0.5C0.223858 0 0 0.223858 0 0.5V15.5C0 15.7761 0.223858 16 0.5 16ZM1 15V1H9V15H7V13C7 12.7239 6.77614 12.5 6.5 12.5H3.5C3.22386 12.5 3 12.7239 3 13V15H1ZM6 13.5V15H4V13.5H6ZM10 5V15H15V5H10Z"/>
    </svg>`,
    documents: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
      <rect x="2" y="1" width="12" height="14" rx="1"/>
      <path d="M5 4h6M5 7h6M5 10h4"/>
    </svg>`,
    document: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
      <rect x="2" y="1" width="12" height="14" rx="1"/>
      <path d="M5 4h6M5 7h6M5 10h4"/>
    </svg>`,
    topics: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
      <path d="M6 1v14M10 1v14M1 6h14M1 10h14"/>
    </svg>`,
    topic: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
      <path d="M6 1v14M10 1v14M1 6h14M1 10h14"/>
    </svg>`,
    monitors: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
      <rect x="1" y="2" width="14" height="10" rx="1"/>
      <path d="M5 14h6M8 12v2"/>
    </svg>`,
    monitor: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
      <rect x="1" y="2" width="14" height="10" rx="1"/>
      <path d="M5 14h6M8 12v2"/>
    </svg>`,
    search: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
      <circle cx="7" cy="7" r="4"/>
      <path d="M10 10l4 4"/>
    </svg>`,
    tags: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
      <path d="M14 8.5l-5.5 5.5a2 2 0 01-2.8 0L2 10.3V2h8.3L14 5.7a2 2 0 010 2.8z"/>
      <circle cx="5.5" cy="5.5" r="1.5"/>
    </svg>`,
    tag: `<svg class="entity-icon" viewBox="0 0 16 16" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.25">
      <path d="M14 8.5l-5.5 5.5a2 2 0 01-2.8 0L2 10.3V2h8.3L14 5.7a2 2 0 010 2.8z"/>
      <circle cx="5.5" cy="5.5" r="1.5"/>
    </svg>`
  };
  return icons[type] || icons.narratives;
}

/**
 * Entity type configurations for consistent rendering
 * Maps entity type to display properties
 */
export const ENTITY_TYPE_CONFIG = {
  narratives: { label: 'Narratives', singular: 'Narrative', route: 'narrative', titleField: 'text' },
  narrative: { label: 'Narratives', singular: 'Narrative', route: 'narrative', titleField: 'text' },
  themes: { label: 'Themes', singular: 'Theme', route: 'theme', titleField: 'text' },
  theme: { label: 'Themes', singular: 'Theme', route: 'theme', titleField: 'text' },
  factions: { label: 'Factions', singular: 'Faction', route: 'faction', titleField: 'name' },
  faction: { label: 'Factions', singular: 'Faction', route: 'faction', titleField: 'name' },
  locations: { label: 'Locations', singular: 'Location', route: 'location', titleField: 'name' },
  location: { label: 'Locations', singular: 'Location', route: 'location', titleField: 'name' },
  events: { label: 'Events', singular: 'Event', route: 'event', titleField: 'text' },
  event: { label: 'Events', singular: 'Event', route: 'event', titleField: 'text' },
  persons: { label: 'People', singular: 'Person', route: 'person', titleField: 'name' },
  person: { label: 'People', singular: 'Person', route: 'person', titleField: 'name' },
  organizations: { label: 'Organizations', singular: 'Organization', route: 'organization', titleField: 'name' },
  organization: { label: 'Organizations', singular: 'Organization', route: 'organization', titleField: 'name' },
  documents: { label: 'Documents', singular: 'Document', route: 'document', titleField: 'title' },
  document: { label: 'Documents', singular: 'Document', route: 'document', titleField: 'title' },
  topics: { label: 'Topics', singular: 'Topic', route: 'topic', titleField: 'headline' },
  topic: { label: 'Topics', singular: 'Topic', route: 'topic', titleField: 'headline' },
  monitors: { label: 'Monitors', singular: 'Monitor', route: 'monitor', titleField: 'name' },
  monitor: { label: 'Monitors', singular: 'Monitor', route: 'monitor', titleField: 'name' }
};

/**
 * Get the title/name for an entity based on its type
 * @param {Object} entity - The entity object
 * @param {string} entityType - The entity type
 * @returns {string} The display title
 */
export function getEntityTitle(entity, entityType) {
  const config = ENTITY_TYPE_CONFIG[entityType];
  if (!config) return entity.name || entity.text || entity.title || 'Unknown';
  return entity[config.titleField] || entity.name || entity.text || entity.title || 'Unknown';
}

/**
 * Get the route for an entity
 * @param {Object} entity - The entity object  
 * @param {string} entityType - The entity type
 * @returns {string} The hash route (e.g., '#/narrative/narr-123')
 */
export function getEntityRoute(entity, entityType) {
  const config = ENTITY_TYPE_CONFIG[entityType];
  if (!config) return `#/${entityType}/${entity.id}`;
  return `#/${config.route}/${entity.id}`;
}

export default {
  getEntityIcon,
  ENTITY_TYPE_CONFIG,
  getEntityTitle,
  getEntityRoute
};
