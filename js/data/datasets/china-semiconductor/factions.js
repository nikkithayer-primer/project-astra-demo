/**
 * Factions and faction overlaps for China Semiconductor dataset
 */

export const factions = [
  {
    id: 'faction-001',
    name: 'Chinese Tech Industry Supporters',
    color: '#E15759',
    relatedFactionIds: ['faction-004', 'faction-005'],
    memberCount: 25000000,
    affiliatedPersonIds: ['person-001', 'person-008', 'person-011'],
    affiliatedOrganizationIds: ['org-001', 'org-010', 'org-007']
  },
  {
    id: 'faction-002',
    name: 'US Policy Hawks',
    color: '#4E79A7',
    relatedFactionIds: [],
    memberCount: 8000000,
    affiliatedPersonIds: ['person-005', 'person-006'],
    affiliatedOrganizationIds: ['org-005', 'org-006']
  },
  {
    id: 'faction-003',
    name: 'Global Semiconductor Analysts',
    color: '#76B7B2',
    relatedFactionIds: ['faction-006'],
    memberCount: 500000,
    affiliatedPersonIds: ['person-003', 'person-014'],
    affiliatedOrganizationIds: ['org-023', 'org-024']
  },
  {
    id: 'faction-004',
    name: 'Chinese State Media',
    color: '#F28E2B',
    relatedFactionIds: ['faction-001'],
    memberCount: 15000000,
    affiliatedPersonIds: [],
    affiliatedOrganizationIds: ['org-025', 'org-026']
  },
  {
    id: 'faction-005',
    name: 'US Tech Industry',
    color: '#B07AA1',
    relatedFactionIds: ['faction-006'],
    memberCount: 12000000,
    affiliatedPersonIds: ['person-017'],
    affiliatedOrganizationIds: ['org-018', 'org-019', 'org-020']
  },
  {
    id: 'faction-006',
    name: 'Supply Chain Watchers',
    color: '#59A14F',
    relatedFactionIds: ['faction-003', 'faction-005'],
    memberCount: 2000000,
    affiliatedPersonIds: ['person-014'],
    affiliatedOrganizationIds: ['org-024']
  }
];

export const factionOverlaps = [
  {
    factionIds: ['faction-001', 'faction-004'],
    overlapSize: 8000000,
    sharedSentiment: { 'narr-001': 0.72, 'narr-002': -0.78 }
  },
  {
    factionIds: ['faction-003', 'faction-006'],
    overlapSize: 350000,
    sharedSentiment: { 'narr-005': 0.15 }
  },
  {
    factionIds: ['faction-005', 'faction-006'],
    overlapSize: 1500000,
    sharedSentiment: { 'narr-007': -0.52 }
  }
];
