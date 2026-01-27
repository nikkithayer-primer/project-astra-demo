/**
 * Factions and faction overlaps for Walmart Brand dataset
 */

export const factions = [
  {
    id: 'faction-001',
    name: 'Disgruntled Customers',
    color: '#E15759',
    relatedFactionIds: ['faction-004'],
    memberCount: 15000000,
    affiliatedPersonIds: [],
    affiliatedOrganizationIds: []
  },
  {
    id: 'faction-002',
    name: 'Walmart Employees',
    color: '#4E79A7',
    relatedFactionIds: ['faction-003'],
    memberCount: 2300000,
    affiliatedPersonIds: [],
    affiliatedOrganizationIds: ['org-005']
  },
  {
    id: 'faction-003',
    name: 'Labor Rights Advocates',
    color: '#B07AA1',
    relatedFactionIds: ['faction-002'],
    memberCount: 5000000,
    affiliatedPersonIds: ['person-003', 'person-004'],
    affiliatedOrganizationIds: ['org-005', 'org-006']
  },
  {
    id: 'faction-004',
    name: 'Consumer Safety Advocates',
    color: '#F28E2B',
    relatedFactionIds: ['faction-001'],
    memberCount: 3000000,
    affiliatedPersonIds: ['person-007', 'person-011'],
    affiliatedOrganizationIds: ['org-008', 'org-009']
  },
  {
    id: 'faction-005',
    name: 'Retail Industry Analysts',
    color: '#76B7B2',
    relatedFactionIds: [],
    memberCount: 50000,
    affiliatedPersonIds: ['person-010', 'person-012'],
    affiliatedOrganizationIds: ['org-014', 'org-015']
  },
  {
    id: 'faction-006',
    name: 'Competitor Supporters',
    color: '#59A14F',
    relatedFactionIds: [],
    memberCount: 25000000,
    affiliatedPersonIds: [],
    affiliatedOrganizationIds: ['org-003', 'org-004']
  }
];

export const factionOverlaps = [
  {
    factionIds: ['faction-001', 'faction-004'],
    overlapSize: 2500000,
    sharedSentiment: { 'narr-004': -0.78 }
  },
  {
    factionIds: ['faction-002', 'faction-003'],
    overlapSize: 500000,
    sharedSentiment: { 'narr-003': -0.75 }
  },
  {
    factionIds: ['faction-001', 'faction-006'],
    overlapSize: 8000000,
    sharedSentiment: { 'narr-005': -0.55 }
  }
];
