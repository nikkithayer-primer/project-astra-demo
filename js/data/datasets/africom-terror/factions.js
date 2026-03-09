/**
 * Factions and faction overlaps for AFRICOM Threat Analysis dataset
 */

export const factions = [
  {
    id: 'faction-001',
    name: 'Al-Qaeda Affiliates',
    description: 'Al-Qaeda-aligned violent extremist organizations in Africa including Al-Shabaab in East Africa, JNIM in the Sahel, and AQIM remnants in North Africa. These groups share ideological alignment with AQ core, coordinate loosely on strategy, and generate revenue through extortion, kidnapping, and resource exploitation.',
    color: '#E15759',
    relatedFactionIds: ['faction-002'],
    memberCount: 18000,
    affiliatedPersonIds: ['person-001', 'person-003', 'person-005', 'person-006', 'person-007', 'person-008'],
    affiliatedOrganizationIds: ['org-001', 'org-003', 'org-007'],
    documentIds: ['doc-001', 'doc-003', 'doc-004', 'doc-005', 'doc-007', 'doc-010', 'doc-011', 'doc-012', 'doc-015', 'doc-017', 'doc-019', 'doc-020', 'doc-025', 'doc-027', 'doc-029', 'doc-030'],
    tagIds: ['tag-004']
  },
  {
    id: 'faction-002',
    name: 'ISIS Affiliates',
    description: 'Islamic State-aligned organizations in Africa including ISWAP in the Lake Chad Basin, ISCGS in the Greater Sahara, and ISIS-Mozambique in Cabo Delgado. These groups have pledged allegiance to ISIS core leadership and adopt ISIS governance and media strategies, though they operate with significant local autonomy.',
    color: '#2C2C2C',
    relatedFactionIds: ['faction-001'],
    memberCount: 8000,
    affiliatedPersonIds: ['person-002', 'person-004'],
    affiliatedOrganizationIds: ['org-002', 'org-004', 'org-005', 'org-006'],
    documentIds: ['doc-002', 'doc-006', 'doc-008', 'doc-009', 'doc-016', 'doc-018', 'doc-026', 'doc-028'],
    tagIds: ['tag-004']
  },
  {
    id: 'faction-003',
    name: 'Western CT Coalition',
    description: 'US and allied military, diplomatic, and intelligence organizations conducting counterterrorism operations across Africa. Includes AFRICOM, ATMIS, MNJTF, SADC forces, and partner nation militaries cooperating with Western security frameworks. Pursues a strategy combining precision strikes, partner force training, and governance support.',
    color: '#4E79A7',
    relatedFactionIds: ['faction-005'],
    memberCount: 35000,
    affiliatedPersonIds: ['person-009', 'person-010', 'person-011', 'person-014'],
    affiliatedOrganizationIds: ['org-008', 'org-009', 'org-010', 'org-011', 'org-014', 'org-015', 'org-017'],
    documentIds: ['doc-001', 'doc-002', 'doc-003', 'doc-005', 'doc-006', 'doc-008', 'doc-013', 'doc-014', 'doc-015', 'doc-021', 'doc-025', 'doc-028'],
    tagIds: ['tag-005']
  },
  {
    id: 'faction-004',
    name: 'Sahel Junta Alliance',
    description: 'Military governments of Mali, Burkina Faso, and Niger that have formed the Alliance of Sahel States, expelled French and UN forces, and partnered with Russian private military contractors. This faction frames its actions as sovereignty assertion against neocolonialism while pursuing authoritarian governance domestically.',
    color: '#F28E2B',
    relatedFactionIds: ['faction-005'],
    memberCount: 45000,
    affiliatedPersonIds: ['person-012', 'person-013'],
    affiliatedOrganizationIds: ['org-012', 'org-013'],
    documentIds: ['doc-004', 'doc-007', 'doc-022', 'doc-023', 'doc-024'],
    tagIds: ['tag-004']
  },
  {
    id: 'faction-005',
    name: 'Russian PMC / Africa Corps',
    description: 'Russian private military forces operating under the Africa Corps banner (successor to Wagner Group) in partnership with Sahel junta governments. Provides military support in exchange for mining concessions and geopolitical influence. Documented human rights abuses against civilians have fueled VEO recruitment.',
    color: '#9C27B0',
    relatedFactionIds: ['faction-004'],
    memberCount: 3000,
    affiliatedPersonIds: ['person-015'],
    affiliatedOrganizationIds: ['org-016'],
    documentIds: ['doc-007', 'doc-022', 'doc-023'],
    tagIds: ['tag-004']
  }
];

export const factionOverlaps = [
  {
    factionIds: ['faction-001', 'faction-002'],
    overlapSize: 2000,
    sharedStance: { 'narr-003': -0.65, 'narr-004': -0.60 }
  },
  {
    factionIds: ['faction-004', 'faction-005'],
    overlapSize: 1500,
    sharedStance: { 'narr-007': -0.55 }
  },
  {
    factionIds: ['faction-003', 'faction-004'],
    overlapSize: 500,
    sharedStance: { 'narr-003': -0.40 }
  },
  {
    factionIds: ['faction-001', 'faction-003'],
    overlapSize: 0,
    sharedStance: { 'narr-001': -0.70 }
  }
];
