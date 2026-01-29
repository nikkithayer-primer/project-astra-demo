/**
 * Factions and faction overlaps for Walmart Brand dataset
 */

export const factions = [
  {
    id: 'faction-001',
    name: 'Disgruntled Customers',
    description: 'A growing segment of Walmart shoppers frustrated with self-checkout policies, out-of-stock items, delivery failures, and perceived declining customer service. This faction has been vocal on social media and has driven viral content criticizing the retailer\'s practices.',
    color: '#E15759',
    relatedFactionIds: ['faction-004', 'faction-014', 'faction-016'],
    tagIds: ['tag-002'],
    memberCount: 15000000,
    affiliatedPersonIds: [],
    affiliatedOrganizationIds: [],
    documentIds: ['doc-001', 'doc-002', 'doc-003', 'doc-004', 'doc-005', 'doc-006', 'doc-007', 'doc-012', 'doc-013', 'doc-015', 'doc-016', 'doc-017', 'doc-020', 'doc-021', 'doc-022', 'doc-023', 'doc-029', 'doc-030', 'doc-031', 'doc-036', 'doc-037', 'doc-038', 'doc-039', 'doc-040', 'doc-041', 'doc-042', 'doc-044', 'doc-045']
  },
  {
    id: 'faction-002',
    name: 'Walmart Employees',
    color: '#4E79A7',
    relatedFactionIds: ['faction-003', 'faction-011'],
    tagIds: ['tag-002'],
    memberCount: 2300000,
    affiliatedPersonIds: [],
    affiliatedOrganizationIds: ['org-005'],
    documentIds: ['doc-008', 'doc-009', 'doc-010', 'doc-011', 'doc-027', 'doc-028', 'doc-032', 'doc-033', 'doc-034', 'doc-035', 'doc-046', 'doc-047', 'doc-048']
  },
  {
    id: 'faction-003',
    name: 'Labor Rights Advocates',
    description: 'A coalition of unions, worker advocacy groups, and activists pushing for improved labor conditions at Walmart. This faction has achieved a historic victory with the unionization of an Atlanta fulfillment center and continues to campaign for higher wages and better working conditions.',
    color: '#B07AA1',
    relatedFactionIds: ['faction-002', 'faction-008', 'faction-009', 'faction-011'],
    tagIds: ['tag-001'],
    memberCount: 5000000,
    affiliatedPersonIds: ['person-003', 'person-004'],
    affiliatedOrganizationIds: ['org-005', 'org-006'],
    documentIds: ['doc-008', 'doc-009', 'doc-010', 'doc-024', 'doc-025', 'doc-027', 'doc-028', 'doc-032', 'doc-033', 'doc-034', 'doc-035', 'doc-046', 'doc-047', 'doc-048']
  },
  {
    id: 'faction-004',
    name: 'Consumer Safety Advocates',
    color: '#F28E2B',
    relatedFactionIds: ['faction-001', 'faction-013', 'faction-014'],
    tagIds: ['tag-002'],
    memberCount: 3000000,
    affiliatedPersonIds: ['person-007', 'person-011'],
    affiliatedOrganizationIds: ['org-008', 'org-009'],
    documentIds: ['doc-001', 'doc-002', 'doc-003', 'doc-004', 'doc-012', 'doc-013', 'doc-014', 'doc-024', 'doc-026', 'doc-029', 'doc-030', 'doc-031', 'doc-036', 'doc-037', 'doc-042']
  },
  {
    id: 'faction-005',
    name: 'Retail Industry Analysts',
    color: '#76B7B2',
    relatedFactionIds: ['faction-010'],
    memberCount: 50000,
    affiliatedPersonIds: ['person-010', 'person-012'],
    affiliatedOrganizationIds: ['org-014', 'org-015'],
    documentIds: ['doc-007', 'doc-011', 'doc-017', 'doc-018', 'doc-019', 'doc-025', 'doc-026', 'doc-029', 'doc-034', 'doc-038', 'doc-040', 'doc-043', 'doc-044', 'doc-047']
  },
  {
    id: 'faction-006',
    name: 'Competitor Supporters',
    color: '#59A14F',
    relatedFactionIds: ['faction-007', 'faction-016'],
    tagIds: ['tag-003'],
    memberCount: 25000000,
    affiliatedPersonIds: [],
    affiliatedOrganizationIds: ['org-003', 'org-004'],
    documentIds: ['doc-015', 'doc-016', 'doc-018', 'doc-019', 'doc-020', 'doc-038', 'doc-043']
  },
  {
    id: 'faction-007',
    name: 'Small Business Advocates',
    color: '#EDC948',
    relatedFactionIds: ['faction-006', 'faction-009', 'faction-015'],
    memberCount: 8000000,
    affiliatedPersonIds: ['person-018'],
    affiliatedOrganizationIds: ['org-016'],
    documentIds: []
  },
  {
    id: 'faction-008',
    name: 'Environmental Activists',
    color: '#AF7AA1',
    relatedFactionIds: ['faction-003'],
    memberCount: 6000000,
    affiliatedPersonIds: ['person-019'],
    affiliatedOrganizationIds: ['org-017'],
    documentIds: []
  },
  {
    id: 'faction-009',
    name: 'Community Organizers',
    color: '#FF9DA7',
    relatedFactionIds: ['faction-003', 'faction-007', 'faction-012', 'faction-015'],
    memberCount: 4000000,
    affiliatedPersonIds: ['person-020'],
    affiliatedOrganizationIds: ['org-018'],
    documentIds: []
  },
  {
    id: 'faction-010',
    name: 'Shareholder Activists',
    color: '#9C755F',
    relatedFactionIds: ['faction-005'],
    memberCount: 500000,
    affiliatedPersonIds: ['person-021'],
    affiliatedOrganizationIds: ['org-019'],
    documentIds: []
  },
  {
    id: 'faction-011',
    name: 'Supply Chain Workers',
    color: '#BAB0AC',
    relatedFactionIds: ['faction-002', 'faction-003'],
    memberCount: 3000000,
    affiliatedPersonIds: ['person-019', 'person-027'],
    affiliatedOrganizationIds: ['org-020'],
    documentIds: []
  },
  {
    id: 'faction-012',
    name: 'Local Government Officials',
    color: '#86BCB6',
    relatedFactionIds: ['faction-009'],
    memberCount: 100000,
    affiliatedPersonIds: ['person-022'],
    affiliatedOrganizationIds: ['org-021'],
    documentIds: []
  },
  {
    id: 'faction-013',
    name: 'Healthcare Advocates',
    color: '#D4A6C8',
    relatedFactionIds: ['faction-004'],
    memberCount: 2000000,
    affiliatedPersonIds: ['person-023'],
    affiliatedOrganizationIds: ['org-022'],
    documentIds: []
  },
  {
    id: 'faction-014',
    name: 'Tech Privacy Critics',
    color: '#D37295',
    relatedFactionIds: ['faction-001', 'faction-004'],
    memberCount: 5000000,
    affiliatedPersonIds: ['person-024'],
    affiliatedOrganizationIds: ['org-023'],
    documentIds: []
  },
  {
    id: 'faction-015',
    name: 'Rural Community Representatives',
    color: '#8CD17D',
    relatedFactionIds: ['faction-007', 'faction-009'],
    tagIds: ['tag-001'],
    memberCount: 10000000,
    affiliatedPersonIds: ['person-020', 'person-025'],
    affiliatedOrganizationIds: ['org-018'],
    documentIds: []
  },
  {
    id: 'faction-016',
    name: 'Budget-Conscious Consumers',
    color: '#499894',
    relatedFactionIds: ['faction-001', 'faction-006'],
    memberCount: 30000000,
    affiliatedPersonIds: ['person-026'],
    affiliatedOrganizationIds: ['org-023'],
    documentIds: []
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
  },
  {
    factionIds: ['faction-011', 'faction-002'],
    overlapSize: 800000,
    sharedSentiment: { 'narr-003': -0.68, 'narr-009': -0.72 }
  },
  {
    factionIds: ['faction-009', 'faction-015'],
    overlapSize: 500000,
    sharedSentiment: { 'narr-007': -0.82, 'narr-010': 0.45 }
  },
  {
    factionIds: ['faction-016', 'faction-001'],
    overlapSize: 5000000,
    sharedSentiment: { 'narr-005': -0.65, 'narr-006': -0.58 }
  }
];
