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
