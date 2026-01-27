/**
 * Factions and faction overlaps for American Politics dataset
 */

export const factions = [
  {
    id: 'faction-001',
    name: 'American Right Wing',
    color: '#E15759',
    relatedFactionIds: ['faction-004'],
    memberCount: 15000000,
    affiliatedPersonIds: ['person-003'],
    affiliatedOrganizationIds: ['org-005']
  },
  {
    id: 'faction-002',
    name: 'Democratic Socialists of America',
    color: '#4E79A7',
    relatedFactionIds: ['faction-003'],
    memberCount: 500000,
    affiliatedPersonIds: [],
    affiliatedOrganizationIds: ['org-006']
  },
  {
    id: 'faction-003',
    name: 'BLM Supporters',
    color: '#B07AA1',
    relatedFactionIds: ['faction-002'],
    memberCount: 8000000,
    affiliatedPersonIds: [],
    affiliatedOrganizationIds: []
  },
  {
    id: 'faction-004',
    name: 'Law Enforcement Supporters',
    color: '#59A14F',
    relatedFactionIds: ['faction-001'],
    memberCount: 12000000,
    affiliatedPersonIds: [],
    affiliatedOrganizationIds: ['org-002']
  },
  {
    id: 'faction-005',
    name: 'Health Activists',
    color: '#76B7B2',
    relatedFactionIds: ['faction-006'],
    memberCount: 5000000,
    affiliatedPersonIds: [],
    affiliatedOrganizationIds: []
  },
  {
    id: 'faction-006',
    name: 'Vegans',
    color: '#F28E2B',
    relatedFactionIds: ['faction-005'],
    memberCount: 8000000,
    affiliatedPersonIds: [],
    affiliatedOrganizationIds: ['org-004']
  }
];

export const factionOverlaps = [
  {
    factionIds: ['faction-005', 'faction-006'],
    overlapSize: 3000000,
    sharedSentiment: { 'narr-003': -0.48 }
  }
];
