/**
 * SchemaValidator.js
 * Lightweight schema validation for dataset entities
 * Based on DATA_SCHEMA.md definitions
 */

// ============================================
// Schema Definitions
// ============================================

const SCHEMAS = {
  // Core Intelligence Model
  missions: {
    idPrefix: 'mission-',
    required: ['id', 'name'],
    optional: ['description', 'color', 'createdAt', 'updatedAt'],
    types: {
      name: 'string',
      description: 'string',
      color: 'string'
    }
  },

  narratives: {
    idPrefix: 'narr-',
    required: ['id', 'text'],
    optional: ['missionId', 'description', 'sentiment', 'tagIds', 'themeIds', 'personIds',
               'organizationIds', 'locationIds', 'eventIds', 'documentIds',
               'createdAt', 'updatedAt'],
    types: {
      text: 'string',
      sentiment: { type: 'number', min: -1, max: 1 }
    },
    references: {
      missionId: 'missions',  // DEPRECATED: Use tagIds with Mission group tags
      themeIds: 'themes',
      personIds: 'persons',
      organizationIds: 'organizations',
      locationIds: 'locations',
      eventIds: 'events',
      documentIds: 'documents',
      tagIds: 'tags'
    }
  },

  themes: {
    idPrefix: 'sub-',
    required: ['id', 'parentNarrativeId', 'text'],
    optional: ['sentiment', 'personIds', 'organizationIds', 'locationIds',
               'eventIds', 'documentIds', 'createdAt', 'updatedAt'],
    types: {
      text: 'string',
      sentiment: { type: 'number', min: -1, max: 1 }
    },
    references: {
      parentNarrativeId: 'narratives',
      personIds: 'persons',
      organizationIds: 'organizations',
      locationIds: 'locations',
      eventIds: 'events',
      documentIds: 'documents'
    }
  },

  factions: {
    idPrefix: 'faction-',
    required: ['id', 'name'],
    optional: ['description', 'color', 'relatedFactionIds', 'memberCount',
               'affiliatedPersonIds', 'affiliatedOrganizationIds', 'documentIds',
               'createdAt', 'updatedAt'],
    types: {
      name: 'string',
      memberCount: 'number'
    },
    references: {
      relatedFactionIds: 'factions',
      affiliatedPersonIds: 'persons',
      affiliatedOrganizationIds: 'organizations',
      documentIds: 'documents'
    }
  },

  locations: {
    idPrefix: 'loc-',
    required: ['id', 'name'],
    optional: ['description', 'type', 'coordinates', 'documentIds', 'tagIds',
               'createdAt', 'updatedAt'],
    types: {
      name: 'string',
      type: ['country', 'region', 'city', 'facility', 'headquarters', 'landmark', 'virtual', 'general']
    },
    references: {
      documentIds: 'documents',
      tagIds: 'tags'
    }
  },

  events: {
    idPrefix: 'event-',
    required: ['id', 'text', 'date'],
    optional: ['description', 'parentEventId', 'subEventIds', 'locationId',
               'personIds', 'organizationIds', 'documentIds', 'tagIds',
               'createdAt', 'updatedAt'],
    types: {
      text: 'string',
      date: 'datetime'
    },
    references: {
      parentEventId: 'events',
      subEventIds: 'events',
      locationId: 'locations',
      personIds: 'persons',
      organizationIds: 'organizations',
      documentIds: 'documents',
      tagIds: 'tags'
    }
  },

  persons: {
    idPrefix: 'person-',
    required: ['id', 'name'],
    optional: ['description', 'type', 'imageUrl', 'affiliatedOrganizationId',
               'affiliatedFactionIds', 'relatedLocationIds', 'relatedEventIds',
               'documentIds', 'factionSentiment', 'tagIds', 'createdAt', 'updatedAt'],
    types: {
      name: 'string',
      type: ['politician', 'executive', 'government_official', 'judge', 'analyst',
             'journalist', 'activist', 'labor_leader', 'civilian', 'employee',
             'legal_professional', 'general'],
      factionSentiment: { type: 'sentimentMap' }
    },
    references: {
      affiliatedOrganizationId: 'organizations',
      affiliatedFactionIds: 'factions',
      relatedLocationIds: 'locations',
      relatedEventIds: 'events',
      documentIds: 'documents',
      tagIds: 'tags'
    }
  },

  organizations: {
    idPrefix: 'org-',
    required: ['id', 'name'],
    optional: ['description', 'type', 'imageUrl', 'affiliatedFactionIds',
               'relatedLocationIds', 'documentIds', 'factionSentiment', 'tagIds',
               'createdAt', 'updatedAt'],
    types: {
      name: 'string',
      type: ['corporation', 'government', 'political', 'judicial', 'nonprofit',
             'union', 'media', 'research', 'religious', 'financial',
             'law_enforcement', 'military', 'general']
    },
    references: {
      affiliatedFactionIds: 'factions',
      relatedLocationIds: 'locations',
      documentIds: 'documents',
      tagIds: 'tags'
    }
  },

  // Document Model
  documents: {
    idPrefix: 'doc-',
    required: ['id', 'documentType', 'repositoryId', 'title', 'publishedDate',
               'publisherId', 'factionMentions'],
    optional: ['classification', 'url', 'author', 'excerpt', 'headerImage',
               'contentBlocks', 'narrativeIds', 'themeIds', 'topicIds',
               'personIds', 'organizationIds', 'locationIds', 'eventIds',
               'metrics', 'highlights', 'comments', 'tagIds', 'createdAt',
               'structuredData'],
    types: {
      title: 'string',
      documentType: ['news_article', 'social_media', 'social_post', 'tiktok', 'internal_report',
                     'intelligence_report', 'memo', 'transcript', 'internal',
                     'corporate_record', 'watchlist_match', 'political_finance', 'event_attendance'],
      classification: ['U', 'CUI', 'C', 'S', 'TS'],
      publishedDate: 'datetime',
      factionMentions: { type: 'factionMentionsMap' },
      structuredData: 'object'
    },
    references: {
      repositoryId: 'repositories',
      publisherId: 'publishers',
      narrativeIds: 'narratives',
      themeIds: 'themes',
      topicIds: 'topics',
      personIds: 'persons',
      organizationIds: 'organizations',
      locationIds: 'locations',
      eventIds: 'events',
      tagIds: 'tags'
    }
  },

  publishers: {
    idPrefix: 'pub-',
    required: ['id', 'name'],
    optional: ['category', 'url', 'description'],
    types: { name: 'string' }
  },

  repositories: {
    idPrefix: 'repo-',
    required: ['id', 'code', 'name'],
    optional: ['description', 'color'],
    types: {
      code: 'string',
      name: 'string'
    }
  },

  topics: {
    idPrefix: 'topic-',
    required: ['id', 'headline'],
    optional: ['description', 'bulletPoints', 'documentIds', 'startDate',
               'endDate', 'volumeOverTime', 'createdAt', 'updatedAt'],
    types: {
      headline: 'string',
      bulletPoints: 'array'
    },
    references: {
      documentIds: 'documents'
    }
  },

  // Monitor & Workspace Model
  monitors: {
    idPrefix: 'monitor-',
    required: ['id', 'name', 'scope', 'enabled'],
    optional: ['description', 'options', 'triggers', 'lastTriggered',
               'includedDocIds', 'excludedDocIds', 'createdAt', 'updatedAt'],
    types: {
      name: 'string',
      enabled: 'boolean',
      scope: 'object'
    },
    references: {
      includedDocIds: 'documents',
      excludedDocIds: 'documents'
    }
  },

  alerts: {
    idPrefix: 'alert-',
    required: ['id', 'monitorId', 'type', 'title', 'triggeredAt'],
    optional: ['description', 'severity', 'acknowledged', 'relatedNarrativeIds',
               'relatedThemeIds', 'relatedEventIds', 'relatedSubEventIds',
               'relatedPersonIds', 'relatedOrganizationIds', 'relatedFactionIds',
               'relatedLocationIds', 'metadata'],
    types: {
      type: ['volume_spike', 'new_event', 'new_narrative',
             'sentiment_shift', 'faction_engagement'],
      triggeredAt: 'datetime'
    },
    references: {
      monitorId: 'monitors'
    }
  },

  workspaces: {
    idPrefix: 'workspace-',
    required: ['id', 'name'],
    optional: ['query', 'description', 'documentIds', 'scope', 'includedDocIds',
               'excludedDocIds', 'filters', 'tagIds', 'status', 'createdAt', 'updatedAt'],
    types: {
      name: 'string',
      status: ['active', 'archived'],
      scope: 'object'
    },
    references: {
      documentIds: 'documents',
      includedDocIds: 'documents',
      excludedDocIds: 'documents',
      tagIds: 'tags'
    }
  },

  projects: {
    idPrefix: 'project-',
    required: ['id', 'name', 'documentIds'],
    optional: ['description', 'status', 'createdAt', 'updatedAt'],
    types: {
      name: 'string',
      status: ['active', 'archived']
    },
    references: {
      documentIds: 'documents'
    }
  },

  searchFilters: {
    idPrefix: 'filter-',
    required: ['id', 'name', 'scope'],
    optional: ['description', 'createdAt', 'updatedAt'],
    types: {
      name: 'string',
      scope: 'object'
    }
  },

  tagGroups: {
    idPrefix: 'tag-group-',
    required: ['id', 'name'],
    optional: ['description', 'exclusive', 'color', 'sortOrder', 'createdAt', 'updatedAt'],
    types: {
      name: 'string',
      description: 'string',
      exclusive: 'boolean',
      color: 'string',
      sortOrder: 'number'
    }
  },

  tags: {
    idPrefix: 'tag-',
    required: ['id', 'name'],
    optional: ['groupId', 'color', 'description', 'sortOrder', 'createdAt', 'updatedAt'],
    types: {
      name: 'string',
      description: 'string',
      color: 'string',
      sortOrder: 'number'
    },
    references: {
      groupId: 'tagGroups'
    }
  },

  users: {
    idPrefix: 'user-',
    required: ['id', 'displayName'],
    optional: ['username', 'name', 'email', 'role', 'department', 'avatarUrl', 'isCurrentUser'],
    types: {
      displayName: 'string',
      username: 'string',
      name: 'string',
      email: 'string'
    }
  },

  // Non-prefixed collections
  factionOverlaps: {
    idPrefix: null,
    required: ['factionIds'],
    optional: ['overlapSize', 'sharedSentiment'],
    types: {
      factionIds: 'array',
      overlapSize: 'number'
    }
  },

  publisherCategories: {
    idPrefix: null,
    required: ['id', 'name'],
    optional: ['color'],
    types: { name: 'string' }
  }
};

// ============================================
// Validation Result Class
// ============================================

class ValidationResult {
  constructor() {
    this.errors = [];
    this.warnings = [];
  }

  addError(message, context = {}) {
    this.errors.push({ message, ...context });
  }

  addWarning(message, context = {}) {
    this.warnings.push({ message, ...context });
  }

  get isValid() {
    return this.errors.length === 0;
  }

  get hasWarnings() {
    return this.warnings.length > 0;
  }

  merge(other) {
    this.errors.push(...other.errors);
    this.warnings.push(...other.warnings);
    return this;
  }
}

// ============================================
// Schema Validator Class
// ============================================

export class SchemaValidator {
  constructor(options = {}) {
    this.options = {
      strictMode: false,           // Treat warnings as errors
      checkReferences: true,       // Validate FK references exist
      checkUnknownFields: false,   // Warn about fields not in schema (noisy)
      logToConsole: true,          // Log issues to console
      ...options
    };
  }

  /**
   * Validate a single entity
   * @param {string} collection - Collection name (e.g., 'documents')
   * @param {Object} entity - The entity to validate
   * @param {Object} allData - Full dataset for reference checking (optional)
   * @returns {ValidationResult}
   */
  validateEntity(collection, entity, allData = null) {
    const result = new ValidationResult();
    const schema = SCHEMAS[collection];

    if (!schema) {
      result.addWarning(`No schema defined for collection: ${collection}`);
      return result;
    }

    if (!entity || typeof entity !== 'object') {
      result.addError('Entity is null or not an object');
      return result;
    }

    const entityId = entity.id || '(no id)';

    // 1. Check ID prefix
    if (schema.idPrefix && entity.id) {
      if (!entity.id.startsWith(schema.idPrefix)) {
        result.addError(
          `ID '${entity.id}' must start with '${schema.idPrefix}'`,
          { field: 'id', entity: entityId }
        );
      }
    }

    // 2. Check required fields
    for (const field of schema.required) {
      if (entity[field] === undefined || entity[field] === null) {
        result.addError(
          `Missing required field: ${field}`,
          { field, entity: entityId }
        );
      }
    }

    // 3. Check field types
    for (const [field, typeSpec] of Object.entries(schema.types || {})) {
      if (entity[field] !== undefined && entity[field] !== null) {
        const typeResult = this.validateFieldType(field, entity[field], typeSpec, entityId);
        result.merge(typeResult);
      }
    }

    // 4. Check for unknown fields (optional, can be noisy)
    if (this.options.checkUnknownFields) {
      const knownFields = new Set([
        ...schema.required,
        ...schema.optional
      ]);

      for (const field of Object.keys(entity)) {
        if (!knownFields.has(field)) {
          result.addWarning(
            `Unknown field: ${field}`,
            { field, entity: entityId, collection }
          );
        }
      }
    }

    // 5. Check references (if allData provided)
    if (this.options.checkReferences && allData && schema.references) {
      const refResult = this.validateReferences(entity, schema.references, allData, entityId);
      result.merge(refResult);
    }

    return result;
  }

  /**
   * Validate field type
   */
  validateFieldType(field, value, typeSpec, entityId) {
    const result = new ValidationResult();

    // Handle enum arrays (e.g., ['news_article', 'social_media'])
    if (Array.isArray(typeSpec)) {
      if (!typeSpec.includes(value)) {
        result.addError(
          `Invalid value for ${field}: '${value}'. Allowed: ${typeSpec.join(', ')}`,
          { field, entity: entityId, value }
        );
      }
      return result;
    }

    // Handle simple type strings
    if (typeof typeSpec === 'string') {
      switch (typeSpec) {
        case 'string':
          if (typeof value !== 'string') {
            result.addError(`${field} must be a string`, { field, entity: entityId });
          }
          break;
        case 'number':
          if (typeof value !== 'number' || isNaN(value)) {
            result.addError(`${field} must be a number`, { field, entity: entityId });
          }
          break;
        case 'boolean':
          if (typeof value !== 'boolean') {
            result.addError(`${field} must be a boolean`, { field, entity: entityId });
          }
          break;
        case 'array':
          if (!Array.isArray(value)) {
            result.addError(`${field} must be an array`, { field, entity: entityId });
          }
          break;
        case 'object':
          if (typeof value !== 'object' || value === null || Array.isArray(value)) {
            result.addError(`${field} must be an object`, { field, entity: entityId });
          }
          break;
        case 'datetime':
          if (!this.isValidDateTime(value)) {
            result.addWarning(
              `${field} should be ISO 8601 datetime: '${value}'`,
              { field, entity: entityId }
            );
          }
          break;
      }
      return result;
    }

    // Handle complex type objects
    if (typeof typeSpec === 'object') {
      // Number with range
      if (typeSpec.type === 'number') {
        if (typeof value !== 'number' || isNaN(value)) {
          result.addError(`${field} must be a number`, { field, entity: entityId });
        } else {
          if (typeSpec.min !== undefined && value < typeSpec.min) {
            result.addError(
              `${field} must be >= ${typeSpec.min}, got ${value}`,
              { field, entity: entityId }
            );
          }
          if (typeSpec.max !== undefined && value > typeSpec.max) {
            result.addError(
              `${field} must be <= ${typeSpec.max}, got ${value}`,
              { field, entity: entityId }
            );
          }
        }
      }

      // factionMentions map: { [factionId]: { sentiment: number } }
      if (typeSpec.type === 'factionMentionsMap') {
        if (typeof value !== 'object' || value === null) {
          result.addError(`${field} must be an object`, { field, entity: entityId });
        } else {
          for (const [factionId, data] of Object.entries(value)) {
            if (!factionId.startsWith('faction-')) {
              result.addWarning(
                `${field} key '${factionId}' should start with 'faction-'`,
                { field, entity: entityId }
              );
            }
            if (typeof data !== 'object' || data === null) {
              result.addError(
                `${field}['${factionId}'] must be an object with sentiment`,
                { field, entity: entityId }
              );
            } else if (typeof data.sentiment !== 'number') {
              result.addError(
                `${field}['${factionId}'].sentiment must be a number`,
                { field, entity: entityId }
              );
            } else if (data.sentiment < -1 || data.sentiment > 1) {
              result.addError(
                `${field}['${factionId}'].sentiment must be between -1 and 1`,
                { field, entity: entityId }
              );
            }
          }
        }
      }

      // factionSentiment map: { [factionId]: number }
      if (typeSpec.type === 'sentimentMap') {
        if (typeof value !== 'object' || value === null) {
          result.addError(`${field} must be an object`, { field, entity: entityId });
        } else {
          for (const [factionId, sentiment] of Object.entries(value)) {
            if (!factionId.startsWith('faction-')) {
              result.addWarning(
                `${field} key '${factionId}' should start with 'faction-'`,
                { field, entity: entityId }
              );
            }
            if (typeof sentiment !== 'number' || sentiment < -1 || sentiment > 1) {
              result.addError(
                `${field}['${factionId}'] must be a number between -1 and 1`,
                { field, entity: entityId }
              );
            }
          }
        }
      }
    }

    return result;
  }

  /**
   * Validate foreign key references
   */
  validateReferences(entity, references, allData, entityId) {
    const result = new ValidationResult();

    for (const [field, targetCollection] of Object.entries(references)) {
      const value = entity[field];
      if (value === undefined || value === null) continue;

      const targetData = allData[targetCollection];
      if (!targetData) {
        // Skip validation if target collection doesn't exist
        continue;
      }

      // Handle array of IDs
      if (Array.isArray(value)) {
        for (const refId of value) {
          if (refId && !targetData.some(item => item.id === refId)) {
            result.addWarning(
              `${field} references non-existent ${targetCollection} ID: '${refId}'`,
              { field, entity: entityId, referencedId: refId }
            );
          }
        }
      }
      // Handle single ID
      else if (typeof value === 'string') {
        if (!targetData.some(item => item.id === value)) {
          result.addWarning(
            `${field} references non-existent ${targetCollection} ID: '${value}'`,
            { field, entity: entityId, referencedId: value }
          );
        }
      }
    }

    return result;
  }

  /**
   * Validate ISO 8601 datetime string
   */
  isValidDateTime(value) {
    if (typeof value !== 'string') return false;
    const date = new Date(value);
    return !isNaN(date.getTime());
  }

  /**
   * Validate an entire dataset
   * @param {Object} mockData - The full dataset object
   * @returns {Object} Validation results with summary and details
   */
  validateDataset(mockData) {
    const results = {
      summary: { errors: 0, warnings: 0, collections: {} },
      details: {}
    };

    for (const [collection, entities] of Object.entries(mockData)) {
      if (!Array.isArray(entities)) continue;

      const collectionResults = [];

      for (let i = 0; i < entities.length; i++) {
        const entity = entities[i];
        const result = this.validateEntity(collection, entity, mockData);

        if (!result.isValid || result.hasWarnings) {
          collectionResults.push({
            index: i,
            id: entity?.id || `(index ${i})`,
            errors: result.errors,
            warnings: result.warnings
          });
          results.summary.errors += result.errors.length;
          results.summary.warnings += result.warnings.length;
        }
      }

      if (collectionResults.length > 0) {
        results.details[collection] = collectionResults;
        results.summary.collections[collection] = {
          total: entities.length,
          invalid: collectionResults.length,
          errors: collectionResults.reduce((sum, r) => sum + r.errors.length, 0),
          warnings: collectionResults.reduce((sum, r) => sum + r.warnings.length, 0)
        };
      }
    }

    if (this.options.logToConsole) {
      this.logResults(results);
    }

    return results;
  }

  /**
   * Log validation results to console
   */
  logResults(results) {
    const { summary, details } = results;

    if (summary.errors === 0 && summary.warnings === 0) {
      console.log('%c✓ Dataset validation passed', 'color: #4CAF50; font-weight: bold');
      return;
    }

    console.group('%c🔍 Dataset Validation Results', 'color: #2196F3; font-weight: bold');
    console.log(`Errors: ${summary.errors}, Warnings: ${summary.warnings}`);

    for (const [collection, items] of Object.entries(details)) {
      const stats = summary.collections[collection];
      console.group(`📁 ${collection} (${stats.errors} errors, ${stats.warnings} warnings)`);

      for (const item of items.slice(0, 10)) { // Limit to first 10 per collection
        if (item.errors.length > 0) {
          console.group(`%c✗ ${item.id}`, 'color: #f44336');
          item.errors.forEach(e => console.error(`  ${e.message}`));
          console.groupEnd();
        }
        if (item.warnings.length > 0) {
          console.group(`%c⚠ ${item.id}`, 'color: #ff9800');
          item.warnings.forEach(w => console.warn(`  ${w.message}`));
          console.groupEnd();
        }
      }

      if (items.length > 10) {
        console.log(`... and ${items.length - 10} more items with issues`);
      }

      console.groupEnd();
    }

    console.groupEnd();
  }
}

// ============================================
// Exports
// ============================================

// Singleton validator instance
export const validator = new SchemaValidator();

// Convenience function for dataset validation
export function validateDataset(mockData, options = {}) {
  const v = new SchemaValidator(options);
  return v.validateDataset(mockData);
}

// Export schemas for external use if needed
export { SCHEMAS };

export default SchemaValidator;
