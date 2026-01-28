/**
 * Factions and faction overlaps for China Semiconductor dataset
 */

export const factions = [
  {
    id: 'faction-001',
    name: 'Chinese Tech Industry Supporters',
    description: 'A coalition of voices supportive of China\'s semiconductor self-sufficiency efforts, including domestic industry leaders, nationalist commentators, and government-aligned media. This faction emphasizes China\'s technical achievements and frames export controls as unjust attempts to contain China\'s rise.',
    color: '#E15759',
    relatedFactionIds: ['faction-004', 'faction-005', 'faction-011'],
    memberCount: 25000000,
    affiliatedPersonIds: ['person-001', 'person-008', 'person-011'],
    affiliatedOrganizationIds: ['org-001', 'org-010', 'org-007'],
    documentIds: ['doc-001', 'doc-002', 'doc-003', 'doc-004', 'doc-005', 'doc-006', 'doc-007', 'doc-008', 'doc-009', 'doc-010', 'doc-011', 'doc-012', 'doc-013', 'doc-014', 'doc-015', 'doc-016', 'doc-017', 'doc-018', 'doc-019', 'doc-020', 'doc-021', 'doc-022', 'doc-023', 'doc-024', 'doc-025', 'doc-026', 'doc-027', 'doc-028', 'doc-029', 'doc-030', 'doc-031', 'doc-032', 'doc-033', 'doc-034', 'doc-035', 'doc-040', 'doc-047', 'doc-050', 'doc-054', 'doc-058']
  },
  {
    id: 'faction-002',
    name: 'US Policy Hawks',
    description: 'Policymakers and commentators who advocate for aggressive technology restrictions against China, viewing semiconductor controls as essential to national security. This faction supports expanding export controls and coordinating with allies to limit China\'s access to advanced chip technology.',
    color: '#4E79A7',
    relatedFactionIds: ['faction-013'],
    memberCount: 8000000,
    affiliatedPersonIds: ['person-005', 'person-006'],
    affiliatedOrganizationIds: ['org-005', 'org-006'],
    documentIds: ['doc-001', 'doc-002', 'doc-003', 'doc-004', 'doc-005', 'doc-006', 'doc-007', 'doc-008', 'doc-009', 'doc-010', 'doc-011', 'doc-012', 'doc-013', 'doc-014', 'doc-015', 'doc-016', 'doc-017', 'doc-018', 'doc-019', 'doc-023', 'doc-024', 'doc-025', 'doc-026', 'doc-027', 'doc-028', 'doc-029', 'doc-031', 'doc-032', 'doc-033', 'doc-034', 'doc-036', 'doc-039', 'doc-040', 'doc-041', 'doc-048', 'doc-049', 'doc-053', 'doc-055', 'doc-058']
  },
  {
    id: 'faction-003',
    name: 'Global Semiconductor Analysts',
    color: '#76B7B2',
    relatedFactionIds: ['faction-006', 'faction-008', 'faction-010', 'faction-012'],
    memberCount: 500000,
    affiliatedPersonIds: ['person-003', 'person-014'],
    affiliatedOrganizationIds: ['org-023', 'org-024'],
    documentIds: ['doc-001', 'doc-002', 'doc-003', 'doc-004', 'doc-009', 'doc-010', 'doc-011', 'doc-012', 'doc-013', 'doc-014', 'doc-015', 'doc-016', 'doc-017', 'doc-023', 'doc-024', 'doc-025', 'doc-026', 'doc-027', 'doc-029', 'doc-031', 'doc-033', 'doc-034', 'doc-037', 'doc-042', 'doc-045', 'doc-051', 'doc-052', 'doc-054']
  },
  {
    id: 'faction-004',
    name: 'Chinese State Media',
    color: '#F28E2B',
    relatedFactionIds: ['faction-001', 'faction-011'],
    memberCount: 15000000,
    affiliatedPersonIds: [],
    affiliatedOrganizationIds: ['org-025', 'org-026'],
    documentIds: ['doc-005', 'doc-006', 'doc-007', 'doc-008', 'doc-026', 'doc-027', 'doc-028', 'doc-032', 'doc-040', 'doc-047']
  },
  {
    id: 'faction-005',
    name: 'US Tech Industry',
    color: '#B07AA1',
    relatedFactionIds: ['faction-006', 'faction-007', 'faction-014', 'faction-016'],
    memberCount: 12000000,
    affiliatedPersonIds: ['person-017'],
    affiliatedOrganizationIds: ['org-018', 'org-019', 'org-020'],
    documentIds: ['doc-009', 'doc-010', 'doc-011', 'doc-018', 'doc-019', 'doc-020', 'doc-021', 'doc-022', 'doc-026', 'doc-030', 'doc-033', 'doc-035', 'doc-036', 'doc-037', 'doc-041', 'doc-043', 'doc-044', 'doc-045', 'doc-048', 'doc-051', 'doc-053', 'doc-056', 'doc-057', 'doc-059']
  },
  {
    id: 'faction-006',
    name: 'Supply Chain Watchers',
    color: '#59A14F',
    relatedFactionIds: ['faction-003', 'faction-005', 'faction-009', 'faction-015'],
    memberCount: 2000000,
    affiliatedPersonIds: ['person-014'],
    affiliatedOrganizationIds: ['org-024'],
    documentIds: ['doc-005', 'doc-006', 'doc-007', 'doc-008', 'doc-012', 'doc-013', 'doc-014', 'doc-015', 'doc-016', 'doc-017', 'doc-020', 'doc-021', 'doc-022', 'doc-026', 'doc-027', 'doc-028', 'doc-030', 'doc-032', 'doc-034', 'doc-035', 'doc-036', 'doc-038', 'doc-039', 'doc-043', 'doc-044', 'doc-046', 'doc-049', 'doc-050', 'doc-055', 'doc-056', 'doc-059', 'doc-060']
  },
  {
    id: 'faction-007',
    name: 'Taiwan Tech Defenders',
    color: '#EDC948',
    relatedFactionIds: ['faction-005'],
    memberCount: 8000000,
    affiliatedPersonIds: ['person-021'],
    affiliatedOrganizationIds: ['org-027'],
    documentIds: []
  },
  {
    id: 'faction-008',
    name: 'Academic Researchers',
    color: '#AF7AA1',
    relatedFactionIds: ['faction-003'],
    memberCount: 2000000,
    affiliatedPersonIds: ['person-022', 'person-028'],
    affiliatedOrganizationIds: ['org-030'],
    documentIds: []
  },
  {
    id: 'faction-009',
    name: 'Investor Community',
    color: '#FF9DA7',
    relatedFactionIds: ['faction-005', 'faction-006', 'faction-014'],
    memberCount: 5000000,
    affiliatedPersonIds: ['person-024'],
    affiliatedOrganizationIds: ['org-031'],
    documentIds: []
  },
  {
    id: 'faction-010',
    name: 'European Chip Industry',
    color: '#9C755F',
    relatedFactionIds: ['faction-003', 'faction-012', 'faction-016'],
    memberCount: 3000000,
    affiliatedPersonIds: ['person-025'],
    affiliatedOrganizationIds: ['org-029'],
    documentIds: []
  },
  {
    id: 'faction-011',
    name: 'Chinese Nationalists',
    color: '#BAB0AC',
    relatedFactionIds: ['faction-001', 'faction-004'],
    memberCount: 50000000,
    affiliatedPersonIds: ['person-020', 'person-029'],
    affiliatedOrganizationIds: ['org-028'],
    documentIds: []
  },
  {
    id: 'faction-012',
    name: 'Free Trade Advocates',
    color: '#86BCB6',
    relatedFactionIds: ['faction-003', 'faction-010'],
    memberCount: 4000000,
    affiliatedPersonIds: ['person-026'],
    affiliatedOrganizationIds: ['org-033'],
    documentIds: []
  },
  {
    id: 'faction-013',
    name: 'National Security Hawks',
    color: '#D4A6C8',
    relatedFactionIds: ['faction-002'],
    memberCount: 6000000,
    affiliatedPersonIds: ['person-023'],
    affiliatedOrganizationIds: ['org-032'],
    documentIds: []
  },
  {
    id: 'faction-014',
    name: 'AI Industry Leaders',
    color: '#D37295',
    relatedFactionIds: ['faction-005', 'faction-009'],
    memberCount: 1000000,
    affiliatedPersonIds: ['person-024'],
    affiliatedOrganizationIds: ['org-031'],
    documentIds: []
  },
  {
    id: 'faction-015',
    name: 'Environmental Tech Critics',
    color: '#8CD17D',
    relatedFactionIds: ['faction-006'],
    memberCount: 3000000,
    affiliatedPersonIds: ['person-027'],
    affiliatedOrganizationIds: ['org-034'],
    documentIds: []
  },
  {
    id: 'faction-016',
    name: 'Japanese Tech Industry',
    color: '#499894',
    relatedFactionIds: ['faction-005', 'faction-010'],
    memberCount: 4000000,
    affiliatedPersonIds: ['person-025'],
    affiliatedOrganizationIds: ['org-029'],
    documentIds: []
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
  },
  {
    factionIds: ['faction-011', 'faction-004'],
    overlapSize: 10000000,
    sharedSentiment: { 'narr-001': 0.85, 'narr-003': 0.78 }
  },
  {
    factionIds: ['faction-007', 'faction-005'],
    overlapSize: 500000,
    sharedSentiment: { 'narr-002': -0.65, 'narr-007': -0.45 }
  },
  {
    factionIds: ['faction-014', 'faction-009'],
    overlapSize: 100000,
    sharedSentiment: { 'narr-011': 0.72 }
  }
];
