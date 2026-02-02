/**
 * idUtils.js
 * Utilities for ID-based routing and entity type resolution
 * 
 * Entity IDs use prefixes to indicate their type, enabling cleaner URLs
 * like #/monitor-001/person-003/ instead of #/monitor/monitor-001/person/person-003
 */

/**
 * Map of ID prefixes to entity types
 */
export const ID_PREFIXES = {
  // Context types (can be first segment in route)
  'monitor-': 'monitor',
  'workspace-': 'workspace',
  'project-': 'project',
  
  // Entity types
  'mission-': 'mission',
  'narr-': 'narrative',
  'sub-': 'theme',
  'faction-': 'faction',
  'loc-': 'location',
  'event-': 'event',
  'person-': 'person',
  'org-': 'organization',
  'topic-': 'topic',
  'doc-': 'document',
  'repo-': 'repository',
  'filter-': 'searchFilter',
  'pub-': 'publisher',
  'alert-': 'alert',
  'user-': 'user',
  'tag-': 'tag'
};

/**
 * Prefixes that indicate a context scope (document filtering)
 */
export const CONTEXT_PREFIXES = ['monitor-', 'workspace-', 'project-'];

/**
 * Entity types that have detail views
 */
export const VIEWABLE_ENTITY_TYPES = [
  'narrative', 'theme', 'faction', 'location', 'event',
  'person', 'organization', 'topic', 'document', 'tag'
];

/**
 * Get the entity type from an ID based on its prefix
 * @param {string} id - The entity ID (e.g., 'person-003', 'monitor-001')
 * @returns {string|null} The entity type or null if unknown
 */
export function getEntityTypeFromId(id) {
  if (!id || typeof id !== 'string') return null;
  
  for (const [prefix, type] of Object.entries(ID_PREFIXES)) {
    if (id.startsWith(prefix)) {
      return type;
    }
  }
  
  return null;
}

/**
 * Check if an ID represents a context (monitor, workspace, project)
 * @param {string} id - The ID to check
 * @returns {boolean} True if the ID is a context type
 */
export function isContextId(id) {
  if (!id || typeof id !== 'string') return false;
  
  return CONTEXT_PREFIXES.some(prefix => id.startsWith(prefix));
}

/**
 * Check if an ID represents a viewable entity (has a detail view)
 * @param {string} id - The ID to check
 * @returns {boolean} True if the entity has a detail view
 */
export function isViewableEntityId(id) {
  const type = getEntityTypeFromId(id);
  return type !== null && VIEWABLE_ENTITY_TYPES.includes(type);
}

/**
 * Build an ID-based route URL
 * @param {string|null} contextId - Optional context ID (monitor-001, workspace-001, etc.)
 * @param {...string} entityIds - Entity IDs to include in the route
 * @returns {string} The hash route URL
 */
export function buildIdRoute(contextId, ...entityIds) {
  const parts = [];
  
  if (contextId) {
    parts.push(contextId);
  }
  
  parts.push(...entityIds.filter(Boolean));
  
  if (parts.length === 0) {
    return '#/cop/';
  }
  
  return `#/${parts.join('/')}/`;
}

/**
 * Parse an ID-based route into its components
 * @param {string} hash - The hash route (without #/)
 * @returns {Object} Parsed route info
 */
export function parseIdRoute(hash) {
  const segments = hash.split('/').filter(Boolean);
  
  const result = {
    contextId: null,
    contextType: null,
    entityIds: [],
    primaryEntityId: null,
    primaryEntityType: null,
    isCopHome: false,
    isContextHome: false
  };
  
  if (segments.length === 0 || segments[0] === 'cop') {
    result.isCopHome = segments.length <= 1;
    result.contextType = 'cop';
    result.entityIds = segments.slice(1);
  } else if (isContextId(segments[0])) {
    result.contextId = segments[0];
    result.contextType = getEntityTypeFromId(segments[0]);
    result.isContextHome = segments.length === 1;
    result.entityIds = segments.slice(1);
  } else {
    // No context prefix - treat as COP-scoped
    result.contextType = 'cop';
    result.entityIds = segments;
  }
  
  // Set primary entity (last entity in the chain)
  if (result.entityIds.length > 0) {
    result.primaryEntityId = result.entityIds[result.entityIds.length - 1];
    result.primaryEntityType = getEntityTypeFromId(result.primaryEntityId);
  }
  
  return result;
}

/**
 * Get a display name for an entity type
 * @param {string} type - The entity type
 * @returns {string} Human-readable name
 */
export function getEntityTypeDisplayName(type) {
  const displayNames = {
    'monitor': 'Monitor',
    'workspace': 'Workspace',
    'project': 'Project',
    'mission': 'Mission',
    'narrative': 'Narrative',
    'theme': 'Theme',
    'faction': 'Faction',
    'location': 'Location',
    'event': 'Event',
    'person': 'Person',
    'organization': 'Organization',
    'topic': 'Topic',
    'document': 'Document',
    'repository': 'Repository',
    'searchFilter': 'Search Filter',
    'publisher': 'Publisher',
    'alert': 'Alert',
    'user': 'User',
    'tag': 'Tag',
    'cop': 'Common Operating Picture'
  };
  
  return displayNames[type] || type;
}

/**
 * Get the plural form of an entity type for list views
 * @param {string} type - The entity type
 * @returns {string} Plural form
 */
export function getEntityTypePlural(type) {
  const plurals = {
    'narrative': 'narratives',
    'theme': 'themes',
    'faction': 'factions',
    'location': 'locations',
    'event': 'events',
    'person': 'entities',
    'organization': 'entities',
    'topic': 'topics',
    'document': 'documents',
    'tag': 'tags'
  };
  
  return plurals[type] || `${type}s`;
}

export default {
  ID_PREFIXES,
  CONTEXT_PREFIXES,
  VIEWABLE_ENTITY_TYPES,
  getEntityTypeFromId,
  isContextId,
  isViewableEntityId,
  buildIdRoute,
  parseIdRoute,
  getEntityTypeDisplayName,
  getEntityTypePlural
};
