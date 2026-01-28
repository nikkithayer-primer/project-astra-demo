/**
 * Search filters for American Politics dataset
 */

export const searchFilters = [
  {
    id: 'filter-001',
    name: 'Key Politicians',
    description: 'Major political figures in current coverage',
    scope: {
      personIds: ['person-001', 'person-003', 'person-019', 'person-021'],
      organizationIds: [],
      factionIds: [],
      locationIds: [],
      eventIds: [],
      keywords: []
    },
    createdAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'filter-002',
    name: 'Federal Agencies',
    description: 'Key federal government agencies',
    scope: {
      personIds: [],
      organizationIds: ['org-010', 'org-011', 'org-012', 'org-017'],
      factionIds: [],
      locationIds: [],
      eventIds: [],
      keywords: []
    },
    createdAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'filter-003',
    name: 'Minnesota Focus',
    description: 'Minnesota-based entities and officials',
    scope: {
      personIds: ['person-007', 'person-019', 'person-020'],
      organizationIds: ['org-002', 'org-018'],
      factionIds: [],
      locationIds: ['loc-002'],
      eventIds: [],
      keywords: []
    },
    createdAt: '2026-01-15T10:00:00Z'
  }
];
