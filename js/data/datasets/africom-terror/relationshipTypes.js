/**
 * Relationship type ontology and instances for AFRICOM Threat Analysis dataset
 */

export const relationshipTypes = [
  {
    id: 'reltype-001',
    name: 'Commands',
    description: 'Person holds command authority over an organization or sub-unit',
    directionality: 'directed',
    sourceEntityTypes: ['person'],
    targetEntityTypes: ['organization'],
    color: '#4A90D9',
    lineStyle: 'solid',
    createdAt: '2025-01-10T00:00:00Z',
    updatedAt: '2025-01-10T00:00:00Z'
  },
  {
    id: 'reltype-002',
    name: 'Member Of',
    description: 'Person is a member, fighter, or operative of an organization',
    directionality: 'directed',
    sourceEntityTypes: ['person'],
    targetEntityTypes: ['organization'],
    color: '#7B68EE',
    lineStyle: 'solid',
    createdAt: '2025-01-10T00:00:00Z',
    updatedAt: '2025-01-10T00:00:00Z'
  },
  {
    id: 'reltype-003',
    name: 'Finances',
    description: 'Entity provides financial support or funding to another entity',
    directionality: 'directed',
    sourceEntityTypes: ['person', 'organization'],
    targetEntityTypes: ['person', 'organization'],
    color: '#F5A623',
    lineStyle: 'solid',
    createdAt: '2025-01-10T00:00:00Z',
    updatedAt: '2025-01-10T00:00:00Z'
  },
  {
    id: 'reltype-004',
    name: 'Pledged Allegiance',
    description: 'Organization or person has pledged allegiance to another organization (e.g., local group to ISIS core)',
    directionality: 'directed',
    sourceEntityTypes: ['organization', 'person'],
    targetEntityTypes: ['organization'],
    color: '#9B59B6',
    lineStyle: 'dashed',
    createdAt: '2025-01-10T00:00:00Z',
    updatedAt: '2025-01-10T00:00:00Z'
  },
  {
    id: 'reltype-005',
    name: 'Rivals',
    description: 'Organizations compete for territory, recruits, or influence',
    directionality: 'undirected',
    sourceEntityTypes: ['organization'],
    targetEntityTypes: ['organization'],
    color: '#C0392B',
    lineStyle: 'dashed',
    createdAt: '2025-01-10T00:00:00Z',
    updatedAt: '2025-01-10T00:00:00Z'
  },
  {
    id: 'reltype-006',
    name: 'Operates In',
    description: 'Organization conducts operations or maintains presence in a location',
    directionality: 'directed',
    sourceEntityTypes: ['organization'],
    targetEntityTypes: ['location'],
    color: '#27AE60',
    lineStyle: 'solid',
    createdAt: '2025-01-10T00:00:00Z',
    updatedAt: '2025-01-10T00:00:00Z'
  },
  {
    id: 'reltype-007',
    name: 'Attacked',
    description: 'Organization or person conducted an attack against a target',
    directionality: 'directed',
    sourceEntityTypes: ['organization', 'person'],
    targetEntityTypes: ['organization', 'location'],
    color: '#E74C3C',
    lineStyle: 'solid',
    createdAt: '2025-01-10T00:00:00Z',
    updatedAt: '2025-01-10T00:00:00Z'
  },
  {
    id: 'reltype-008',
    name: 'Supplies',
    description: 'Organization provides weapons, equipment, or logistics to another organization',
    directionality: 'directed',
    sourceEntityTypes: ['organization'],
    targetEntityTypes: ['organization'],
    color: '#E67E22',
    lineStyle: 'dotted',
    createdAt: '2025-01-10T00:00:00Z',
    updatedAt: '2025-01-10T00:00:00Z'
  },
  {
    id: 'reltype-009',
    name: 'Recruits From',
    description: 'Person or organization recruits members from a location or population',
    directionality: 'directed',
    sourceEntityTypes: ['person', 'organization'],
    targetEntityTypes: ['location', 'organization'],
    color: '#8E44AD',
    lineStyle: 'dotted',
    createdAt: '2025-01-10T00:00:00Z',
    updatedAt: '2025-01-10T00:00:00Z'
  },
  {
    id: 'reltype-010',
    name: 'Combats',
    description: 'Organization conducts military operations against another organization',
    directionality: 'directed',
    sourceEntityTypes: ['organization'],
    targetEntityTypes: ['organization'],
    color: '#2C3E50',
    lineStyle: 'solid',
    createdAt: '2025-01-10T00:00:00Z',
    updatedAt: '2025-01-10T00:00:00Z'
  },
  {
    id: 'reltype-011',
    name: 'Partners With',
    description: 'Organizations cooperate or have a partnership (military, diplomatic, or operational)',
    directionality: 'undirected',
    sourceEntityTypes: ['organization'],
    targetEntityTypes: ['organization'],
    color: '#3498DB',
    lineStyle: 'solid',
    createdAt: '2025-01-10T00:00:00Z',
    updatedAt: '2025-01-10T00:00:00Z'
  },
  {
    id: 'reltype-012',
    name: 'Transferred Funds',
    description: 'Person transferred specific funds to another person or entity',
    directionality: 'directed',
    sourceEntityTypes: ['person'],
    targetEntityTypes: ['person', 'organization'],
    color: '#D4AC0D',
    lineStyle: 'dotted',
    createdAt: '2025-01-10T00:00:00Z',
    updatedAt: '2025-01-10T00:00:00Z'
  },
  {
    id: 'reltype-013',
    name: 'Communicated With',
    description: 'Intercepted or observed communication between entities',
    directionality: 'undirected',
    sourceEntityTypes: ['person'],
    targetEntityTypes: ['person'],
    color: '#1ABC9C',
    lineStyle: 'dotted',
    createdAt: '2025-01-10T00:00:00Z',
    updatedAt: '2025-01-10T00:00:00Z'
  },
  {
    id: 'reltype-014',
    name: 'Splinter Of',
    description: 'Organization broke away from or split from a parent organization',
    directionality: 'directed',
    sourceEntityTypes: ['organization'],
    targetEntityTypes: ['organization'],
    color: '#95A5A6',
    lineStyle: 'dashed',
    createdAt: '2025-01-10T00:00:00Z',
    updatedAt: '2025-01-10T00:00:00Z'
  }
];

export const relationships = [
  // --- Command relationships ---
  { id: 'rel-001', relationshipTypeId: 'reltype-001', sourceEntityId: 'person-001', targetEntityId: 'org-001', confidence: 'high', documentIds: ['doc-001', 'doc-015'] },
  { id: 'rel-002', relationshipTypeId: 'reltype-001', sourceEntityId: 'person-002', targetEntityId: 'org-002', confidence: 'high', documentIds: ['doc-002', 'doc-016'] },
  { id: 'rel-003', relationshipTypeId: 'reltype-001', sourceEntityId: 'person-003', targetEntityId: 'org-003', confidence: 'high', documentIds: ['doc-004', 'doc-017'] },
  { id: 'rel-004', relationshipTypeId: 'reltype-001', sourceEntityId: 'person-004', targetEntityId: 'org-006', confidence: 'moderate', documentIds: ['doc-008', 'doc-018'] },
  { id: 'rel-005', relationshipTypeId: 'reltype-001', sourceEntityId: 'person-009', targetEntityId: 'org-008', confidence: 'high', documentIds: ['doc-013', 'doc-021'] },

  // --- Membership ---
  { id: 'rel-006', relationshipTypeId: 'reltype-002', sourceEntityId: 'person-007', targetEntityId: 'org-001', confidence: 'high', documentIds: ['doc-003', 'doc-020'] },
  { id: 'rel-007', relationshipTypeId: 'reltype-002', sourceEntityId: 'person-008', targetEntityId: 'org-001', confidence: 'high', documentIds: ['doc-012', 'doc-030'] },
  { id: 'rel-008', relationshipTypeId: 'reltype-002', sourceEntityId: 'person-006', targetEntityId: 'org-003', confidence: 'high', documentIds: ['doc-010', 'doc-029'] },
  { id: 'rel-009', relationshipTypeId: 'reltype-002', sourceEntityId: 'person-011', targetEntityId: 'org-010', confidence: 'high', documentIds: ['doc-001', 'doc-015'] },

  // --- Financial relationships ---
  { id: 'rel-010', relationshipTypeId: 'reltype-003', sourceEntityId: 'person-006', targetEntityId: 'org-003', confidence: 'high', documentIds: ['doc-010', 'doc-019', 'doc-029'] },
  { id: 'rel-011', relationshipTypeId: 'reltype-003', sourceEntityId: 'person-007', targetEntityId: 'org-001', confidence: 'high', documentIds: ['doc-011', 'doc-020'] },

  // --- Pledged allegiance ---
  { id: 'rel-012', relationshipTypeId: 'reltype-004', sourceEntityId: 'org-002', targetEntityId: 'org-002', confidence: 'high', documentIds: ['doc-002'], notes: 'ISWAP pledged allegiance to ISIS core' },
  { id: 'rel-013', relationshipTypeId: 'reltype-004', sourceEntityId: 'org-006', targetEntityId: 'org-002', confidence: 'moderate', documentIds: ['doc-008'], notes: 'ISIS-Mozambique pledged allegiance to ISIS core' },
  { id: 'rel-014', relationshipTypeId: 'reltype-004', sourceEntityId: 'org-003', targetEntityId: 'org-007', confidence: 'high', documentIds: ['doc-017'], notes: 'JNIM operates as Al-Qaeda affiliate in Sahel' },

  // --- Rivalry ---
  { id: 'rel-015', relationshipTypeId: 'reltype-005', sourceEntityId: 'org-003', targetEntityId: 'org-005', confidence: 'moderate', documentIds: ['doc-004', 'doc-017'], notes: 'JNIM and ISCGS compete for territory in Liptako-Gourma' },
  { id: 'rel-016', relationshipTypeId: 'reltype-005', sourceEntityId: 'org-002', targetEntityId: 'org-004', confidence: 'high', documentIds: ['doc-002', 'doc-026'], notes: 'ISWAP-Boko Haram split, with ISWAP absorbing BH fighters' },

  // --- Operates in ---
  { id: 'rel-017', relationshipTypeId: 'reltype-006', sourceEntityId: 'org-001', targetEntityId: 'loc-001', confidence: 'high', documentIds: ['doc-001', 'doc-003'] },
  { id: 'rel-018', relationshipTypeId: 'reltype-006', sourceEntityId: 'org-001', targetEntityId: 'loc-003', confidence: 'high', documentIds: ['doc-001', 'doc-005'] },
  { id: 'rel-019', relationshipTypeId: 'reltype-006', sourceEntityId: 'org-002', targetEntityId: 'loc-006', confidence: 'high', documentIds: ['doc-002', 'doc-006'] },
  { id: 'rel-020', relationshipTypeId: 'reltype-006', sourceEntityId: 'org-003', targetEntityId: 'loc-008', confidence: 'high', documentIds: ['doc-004', 'doc-017'] },
  { id: 'rel-021', relationshipTypeId: 'reltype-006', sourceEntityId: 'org-006', targetEntityId: 'loc-010', confidence: 'high', documentIds: ['doc-008', 'doc-018'] },
  { id: 'rel-022', relationshipTypeId: 'reltype-006', sourceEntityId: 'org-016', targetEntityId: 'loc-007', confidence: 'high', documentIds: ['doc-007', 'doc-022'] },

  // --- Combat relationships ---
  { id: 'rel-023', relationshipTypeId: 'reltype-010', sourceEntityId: 'org-008', targetEntityId: 'org-001', confidence: 'high', documentIds: ['doc-005', 'doc-013'] },
  { id: 'rel-024', relationshipTypeId: 'reltype-010', sourceEntityId: 'org-010', targetEntityId: 'org-001', confidence: 'high', documentIds: ['doc-001', 'doc-015'] },
  { id: 'rel-025', relationshipTypeId: 'reltype-010', sourceEntityId: 'org-011', targetEntityId: 'org-002', confidence: 'high', documentIds: ['doc-002', 'doc-006'] },
  { id: 'rel-026', relationshipTypeId: 'reltype-010', sourceEntityId: 'org-012', targetEntityId: 'org-003', confidence: 'high', documentIds: ['doc-004', 'doc-007'] },
  { id: 'rel-027', relationshipTypeId: 'reltype-010', sourceEntityId: 'org-017', targetEntityId: 'org-006', confidence: 'high', documentIds: ['doc-008', 'doc-028'] },

  // --- Partnerships ---
  { id: 'rel-028', relationshipTypeId: 'reltype-011', sourceEntityId: 'org-012', targetEntityId: 'org-016', confidence: 'high', documentIds: ['doc-007', 'doc-022'], notes: 'Mali-Wagner military partnership' },
  { id: 'rel-029', relationshipTypeId: 'reltype-011', sourceEntityId: 'org-013', targetEntityId: 'org-016', confidence: 'high', documentIds: ['doc-022', 'doc-023'], notes: 'Burkina Faso-Wagner military partnership' },
  { id: 'rel-030', relationshipTypeId: 'reltype-011', sourceEntityId: 'org-008', targetEntityId: 'org-010', confidence: 'high', documentIds: ['doc-001', 'doc-013'], notes: 'AFRICOM-SNA CT cooperation' },
  { id: 'rel-031', relationshipTypeId: 'reltype-011', sourceEntityId: 'org-008', targetEntityId: 'org-009', confidence: 'high', documentIds: ['doc-013', 'doc-015'], notes: 'AFRICOM-ATMIS coordination' },

  // --- Recruitment ---
  { id: 'rel-032', relationshipTypeId: 'reltype-009', sourceEntityId: 'person-008', targetEntityId: 'loc-002', confidence: 'high', documentIds: ['doc-012', 'doc-030'], notes: 'Abu Zinira recruits from Nairobi Eastleigh' },
  { id: 'rel-033', relationshipTypeId: 'reltype-009', sourceEntityId: 'person-008', targetEntityId: 'loc-004', confidence: 'moderate', documentIds: ['doc-030'], notes: 'Recruitment from Dadaab refugee camps' },

  // --- Splinter relationships ---
  { id: 'rel-034', relationshipTypeId: 'reltype-014', sourceEntityId: 'org-002', targetEntityId: 'org-004', confidence: 'high', documentIds: ['doc-002', 'doc-026'], notes: 'ISWAP split from Boko Haram in 2016' },

  // --- Fund transfers ---
  { id: 'rel-035', relationshipTypeId: 'reltype-012', sourceEntityId: 'person-006', targetEntityId: 'person-003', confidence: 'moderate', documentIds: ['doc-029'], notes: 'Hawala transfers from ag Hitta to JNIM command' }
];
