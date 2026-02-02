/**
 * Themes (sub-narratives) for Singapore MCO dataset
 */

export const themes = [
  // Themes for narr-001: NS duration and policies unfair
  {
    id: 'sub-001',
    parentNarrativeId: 'narr-001',
    text: 'Two-year NS duration excessive compared to Taiwan and Korea',
    sentiment: -0.58,
    personIds: [],
    organizationIds: ['org-015'],
    locationIds: ['loc-001'],
    eventIds: ['event-003'],
    documentIds: ['doc-004', 'doc-005']
  },
  {
    id: 'sub-002',
    parentNarrativeId: 'narr-001',
    text: 'New citizens and PRs face different NS obligations creating inequity',
    sentiment: -0.62,
    personIds: ['person-003'],
    organizationIds: ['org-015'],
    locationIds: ['loc-001'],
    eventIds: ['event-016'],
    documentIds: ['doc-029']
  },
  {
    id: 'sub-003',
    parentNarrativeId: 'narr-001',
    text: 'NS reservist obligations disrupt careers and family life',
    sentiment: -0.48,
    personIds: [],
    organizationIds: ['org-014', 'org-015'],
    locationIds: ['loc-001'],
    eventIds: ['event-009'],
    documentIds: ['doc-016', 'doc-017']
  },
  // Themes for narr-002: SAF training standards questioned
  {
    id: 'sub-004',
    parentNarrativeId: 'narr-002',
    text: 'Training incidents reveal systemic safety failures',
    sentiment: -0.72,
    personIds: ['person-001', 'person-002'],
    organizationIds: ['org-001', 'org-002', 'org-003'],
    locationIds: ['loc-003'],
    eventIds: ['event-001'],
    documentIds: ['doc-001', 'doc-002']
  },
  {
    id: 'sub-005',
    parentNarrativeId: 'narr-002',
    text: 'Military culture prioritizes mission over safety',
    sentiment: -0.65,
    personIds: [],
    organizationIds: ['org-002'],
    locationIds: ['loc-003'],
    eventIds: ['event-001', 'event-002'],
    documentIds: ['doc-002', 'doc-003']
  },
  // Themes for narr-003: Singapore as US proxy
  {
    id: 'sub-006',
    parentNarrativeId: 'narr-003',
    text: 'Singapore defence agreements with US undermine neutrality',
    sentiment: -0.55,
    personIds: ['person-005'],
    organizationIds: ['org-008', 'org-024'],
    locationIds: ['loc-001'],
    eventIds: ['event-007'],
    documentIds: ['doc-013', 'doc-014']
  },
  {
    id: 'sub-007',
    parentNarrativeId: 'narr-003',
    text: 'Singapore media coverage biased against China',
    sentiment: -0.68,
    personIds: ['person-012'],
    organizationIds: ['org-018', 'org-025', 'org-026'],
    locationIds: ['loc-001', 'loc-006'],
    eventIds: ['event-018', 'event-019'],
    documentIds: ['doc-032', 'doc-033', 'doc-034']
  },
  // Themes for narr-004: Foreign talent disadvantages Singaporeans
  {
    id: 'sub-008',
    parentNarrativeId: 'narr-004',
    text: 'CECA allows unrestricted Indian professionals entry',
    sentiment: -0.72,
    personIds: ['person-010', 'person-003'],
    organizationIds: ['org-010'],
    locationIds: ['loc-001'],
    eventIds: ['event-011'],
    documentIds: ['doc-020', 'doc-021']
  },
  {
    id: 'sub-009',
    parentNarrativeId: 'narr-004',
    text: 'Singaporean PMETs losing jobs to foreigners',
    sentiment: -0.65,
    personIds: ['person-015', 'person-020'],
    organizationIds: ['org-010'],
    locationIds: ['loc-001'],
    eventIds: ['event-011', 'event-012'],
    documentIds: ['doc-020', 'doc-022']
  },
  // Themes for narr-005: Malaysia water agreements unfair
  {
    id: 'sub-010',
    parentNarrativeId: 'narr-005',
    text: '1962 Water Agreement exploits Johor resources',
    sentiment: -0.58,
    personIds: ['person-004', 'person-014'],
    organizationIds: [],
    locationIds: ['loc-005'],
    eventIds: ['event-015'],
    documentIds: ['doc-027', 'doc-028']
  },
  {
    id: 'sub-011',
    parentNarrativeId: 'narr-005',
    text: 'Singapore should pay market rate for Malaysian water',
    sentiment: -0.52,
    personIds: ['person-004'],
    organizationIds: [],
    locationIds: ['loc-004', 'loc-005'],
    eventIds: ['event-015', 'event-020'],
    documentIds: ['doc-035', 'doc-036']
  },
  // Themes for narr-006: South China Sea tensions
  {
    id: 'sub-012',
    parentNarrativeId: 'narr-006',
    text: 'PLA Navy presence threatens Singapore sea lanes',
    sentiment: -0.48,
    personIds: ['person-018'],
    organizationIds: ['org-004', 'org-022'],
    locationIds: ['loc-007', 'loc-008'],
    eventIds: ['event-014'],
    documentIds: ['doc-025']
  },
  {
    id: 'sub-013',
    parentNarrativeId: 'narr-006',
    text: 'ASEAN unity weakened by Chinese pressure',
    sentiment: -0.42,
    personIds: [],
    organizationIds: ['org-023'],
    locationIds: ['loc-007'],
    eventIds: [],
    documentIds: ['doc-026']
  },
  // Themes for narr-007: Racial and religious tensions
  {
    id: 'sub-014',
    parentNarrativeId: 'narr-007',
    text: 'Religious provocations at public spaces',
    sentiment: -0.72,
    personIds: [],
    organizationIds: ['org-007'],
    locationIds: ['loc-001'],
    eventIds: ['event-013'],
    documentIds: ['doc-023']
  },
  {
    id: 'sub-015',
    parentNarrativeId: 'narr-007',
    text: 'Online accounts stoking ethnic tensions',
    sentiment: -0.78,
    personIds: [],
    organizationIds: [],
    locationIds: ['loc-001'],
    eventIds: [],
    documentIds: ['doc-024']
  },
  // Themes for narr-008: Coordinated campaign undermines NS
  {
    id: 'sub-016',
    parentNarrativeId: 'narr-008',
    text: 'Network of accounts pushing anti-NS content identified',
    sentiment: -0.68,
    personIds: [],
    organizationIds: ['org-016'],
    locationIds: ['loc-001'],
    eventIds: ['event-006'],
    documentIds: ['doc-011']
  },
  {
    id: 'sub-017',
    parentNarrativeId: 'narr-008',
    text: 'Foreign influence suspected in coordinated anti-NS messaging',
    sentiment: -0.75,
    personIds: [],
    organizationIds: ['org-006'],
    locationIds: ['loc-001'],
    eventIds: ['event-006'],
    documentIds: ['doc-012']
  },
  // Themes for narr-009: Total Defence as propaganda
  {
    id: 'sub-018',
    parentNarrativeId: 'narr-009',
    text: 'Civil defence exercises dismissed as theatrical',
    sentiment: -0.52,
    personIds: [],
    organizationIds: ['org-007'],
    locationIds: ['loc-001'],
    eventIds: [],
    documentIds: ['doc-018']
  },
  {
    id: 'sub-019',
    parentNarrativeId: 'narr-009',
    text: 'Psychological defence equated with government propaganda',
    sentiment: -0.58,
    personIds: ['person-017'],
    organizationIds: ['org-006'],
    locationIds: ['loc-001'],
    eventIds: ['event-010'],
    documentIds: ['doc-019']
  },
  // Themes for narr-010: SAF modernization positive
  {
    id: 'sub-020',
    parentNarrativeId: 'narr-010',
    text: 'Next-generation equipment enhances SAF capabilities',
    sentiment: 0.72,
    personIds: ['person-001', 'person-024'],
    organizationIds: ['org-001', 'org-003'],
    locationIds: ['loc-001'],
    eventIds: ['event-017'],
    documentIds: ['doc-030']
  },
  {
    id: 'sub-021',
    parentNarrativeId: 'narr-010',
    text: 'Local defence technology development showcases innovation',
    sentiment: 0.68,
    personIds: ['person-002'],
    organizationIds: ['org-002'],
    locationIds: ['loc-001'],
    eventIds: ['event-017'],
    documentIds: ['doc-031']
  }
];
