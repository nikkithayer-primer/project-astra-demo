/**
 * Sub-narratives for China Semiconductor dataset
 */

export const subNarratives = [
  {
    id: 'sub-001',
    text: 'SMIC multi-patterning technique enables advanced nodes without EUV',
    description: 'Industry analysts detail SMIC\'s innovative use of multiple DUV exposures to achieve feature sizes previously thought to require EUV lithography, though at significant cost and yield penalties.',
    parentNarrativeId: 'narr-001',
    sentiment: 0.35,
    factionMentions: {
      'faction-001': { volume: 185, sentiment: 0.82 },
      'faction-003': { volume: 145, sentiment: 0.45 }
    },
    personIds: ['person-001'],
    organizationIds: ['org-001'],
    locationIds: ['loc-001'],
    eventIds: ['event-001'],
    volumeOverTime: [
      { date: '2026-01-17', factionVolumes: { 'faction-001': 65, 'faction-003': 52 } },
      { date: '2026-01-18', factionVolumes: { 'faction-001': 125, 'faction-003': 98 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 155, 'faction-003': 125 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 185, 'faction-003': 145 } }
    ]
  },
  {
    id: 'sub-002',
    text: 'Huawei Mate 70 teardown reveals SMIC 5nm chip inside',
    description: 'Tech reviewers conducting teardowns of Huawei\'s latest flagship smartphone have confirmed it contains a 5nm processor manufactured by SMIC, marking a significant milestone for China\'s semiconductor independence.',
    parentNarrativeId: 'narr-001',
    sentiment: 0.58,
    factionMentions: {
      'faction-001': { volume: 245, sentiment: 0.88 },
      'faction-003': { volume: 125, sentiment: 0.32 }
    },
    personIds: ['person-011'],
    organizationIds: ['org-001', 'org-010'],
    locationIds: ['loc-001'],
    eventIds: ['event-002'],
    volumeOverTime: [
      { date: '2026-01-18', factionVolumes: { 'faction-001': 85, 'faction-003': 42 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 165, 'faction-003': 85 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 245, 'faction-003': 125 } }
    ]
  },
  {
    id: 'sub-003',
    text: 'US analysts debate effectiveness of chip export controls',
    description: 'SMIC\'s breakthrough has sparked debate among US policymakers about whether export controls are achieving their intended goals or merely accelerating Chinese self-sufficiency efforts.',
    parentNarrativeId: 'narr-001',
    sentiment: -0.28,
    factionMentions: {
      'faction-002': { volume: 195, sentiment: -0.52 },
      'faction-003': { volume: 85, sentiment: -0.15 }
    },
    personIds: ['person-005', 'person-006'],
    organizationIds: ['org-005', 'org-006'],
    locationIds: ['loc-004'],
    eventIds: [],
    volumeOverTime: [
      { date: '2026-01-18', factionVolumes: { 'faction-002': 68, 'faction-003': 28 } },
      { date: '2026-01-19', factionVolumes: { 'faction-002': 135, 'faction-003': 58 } },
      { date: '2026-01-20', factionVolumes: { 'faction-002': 195, 'faction-003': 85 } }
    ]
  },
  {
    id: 'sub-004',
    text: 'Dutch government expands ASML export restrictions under US pressure',
    description: 'The Netherlands has agreed to block exports of advanced DUV lithography systems to China, expanding previous restrictions that only covered EUV machines, following months of negotiations with US officials.',
    parentNarrativeId: 'narr-002',
    sentiment: -0.42,
    factionMentions: {
      'faction-001': { volume: 165, sentiment: -0.85 },
      'faction-002': { volume: 195, sentiment: 0.72 }
    },
    personIds: ['person-004', 'person-007'],
    organizationIds: ['org-002', 'org-004'],
    locationIds: ['loc-003', 'loc-004'],
    eventIds: ['event-003'],
    volumeOverTime: [
      { date: '2026-01-14', factionVolumes: { 'faction-001': 55, 'faction-002': 68 } },
      { date: '2026-01-15', factionVolumes: { 'faction-001': 98, 'faction-002': 125 } },
      { date: '2026-01-16', factionVolumes: { 'faction-001': 135, 'faction-002': 165 } },
      { date: '2026-01-17', factionVolumes: { 'faction-001': 165, 'faction-002': 195 } }
    ]
  },
  {
    id: 'sub-005',
    text: 'ASML projects $2.5 billion annual revenue loss from China restrictions',
    description: 'ASML disclosed in its quarterly earnings call that expanded China export restrictions will reduce annual revenue by approximately $2.5 billion, prompting investor concerns about growth prospects.',
    parentNarrativeId: 'narr-002',
    sentiment: -0.55,
    factionMentions: {
      'faction-003': { volume: 145, sentiment: -0.42 },
      'faction-006': { volume: 125, sentiment: -0.58 }
    },
    personIds: ['person-004'],
    organizationIds: ['org-002'],
    locationIds: ['loc-003'],
    eventIds: ['event-004'],
    volumeOverTime: [
      { date: '2026-01-15', factionVolumes: { 'faction-003': 48, 'faction-006': 42 } },
      { date: '2026-01-16', factionVolumes: { 'faction-003': 95, 'faction-006': 85 } },
      { date: '2026-01-17', factionVolumes: { 'faction-003': 145, 'faction-006': 125 } }
    ]
  },
  {
    id: 'sub-006',
    text: 'China accelerates indigenous lithography development in response',
    description: 'Chinese officials have announced increased funding for domestic lithography equipment development, with Shanghai Micro Electronics Equipment (SMEE) receiving priority support to accelerate its roadmap.',
    parentNarrativeId: 'narr-002',
    sentiment: 0.45,
    factionMentions: {
      'faction-001': { volume: 185, sentiment: 0.78 },
      'faction-005': { volume: 95, sentiment: 0.62 }
    },
    personIds: ['person-008'],
    organizationIds: ['org-022'],
    locationIds: ['loc-002'],
    eventIds: ['event-005'],
    volumeOverTime: [
      { date: '2026-01-15', factionVolumes: { 'faction-001': 62, 'faction-005': 32 } },
      { date: '2026-01-16', factionVolumes: { 'faction-001': 125, 'faction-005': 65 } },
      { date: '2026-01-17', factionVolumes: { 'faction-001': 185, 'faction-005': 95 } }
    ]
  },
  {
    id: 'sub-007',
    text: 'Big Fund III targets advanced packaging and chipmaking equipment',
    description: 'The third phase of China\'s National IC Fund will prioritize investment in advanced packaging technologies like chiplets and 2.5D/3D stacking, as well as domestic semiconductor manufacturing equipment.',
    parentNarrativeId: 'narr-003',
    sentiment: 0.65,
    factionMentions: {
      'faction-001': { volume: 215, sentiment: 0.88 },
      'faction-005': { volume: 95, sentiment: 0.72 }
    },
    personIds: ['person-008', 'person-009'],
    organizationIds: ['org-007', 'org-008'],
    locationIds: ['loc-002'],
    eventIds: ['event-006'],
    volumeOverTime: [
      { date: '2026-01-18', factionVolumes: { 'faction-001': 75, 'faction-005': 32 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 145, 'faction-005': 65 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 215, 'faction-005': 95 } }
    ]
  },
  {
    id: 'sub-008',
    text: 'State-owned enterprises contribute majority of Big Fund III capital',
    description: 'Analysis reveals that state-owned enterprises and government-linked investment vehicles are providing the majority of Big Fund III\'s 340 billion yuan, reflecting deepening state involvement in the semiconductor sector.',
    parentNarrativeId: 'narr-003',
    sentiment: 0.42,
    factionMentions: {
      'faction-001': { volume: 165, sentiment: 0.75 },
      'faction-002': { volume: 125, sentiment: -0.45 }
    },
    personIds: ['person-010'],
    organizationIds: ['org-009'],
    locationIds: ['loc-006'],
    eventIds: ['event-007'],
    volumeOverTime: [
      { date: '2026-01-18', factionVolumes: { 'faction-001': 55, 'faction-002': 42 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 115, 'faction-002': 85 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 165, 'faction-002': 125 } }
    ]
  },
  {
    id: 'sub-009',
    text: 'Critics question Big Fund\'s track record and corruption concerns',
    description: 'Western analysts point to Big Fund\'s mixed track record and past corruption scandals, questioning whether massive capital injections can overcome technological gaps without access to cutting-edge equipment.',
    parentNarrativeId: 'narr-003',
    sentiment: -0.35,
    factionMentions: {
      'faction-002': { volume: 145, sentiment: -0.58 },
      'faction-003': { volume: 85, sentiment: -0.22 }
    },
    personIds: [],
    organizationIds: ['org-007'],
    locationIds: [],
    eventIds: [],
    volumeOverTime: [
      { date: '2026-01-18', factionVolumes: { 'faction-002': 48, 'faction-003': 28 } },
      { date: '2026-01-19', factionVolumes: { 'faction-002': 98, 'faction-003': 58 } },
      { date: '2026-01-20', factionVolumes: { 'faction-002': 145, 'faction-003': 85 } }
    ]
  },
  {
    id: 'sub-010',
    text: 'Huawei builds strategic equipment reserves worth billions',
    description: 'Sources reveal Huawei has accumulated semiconductor manufacturing equipment worth an estimated $5-8 billion in warehouses across China, purchased before expanded export restrictions took effect.',
    parentNarrativeId: 'narr-004',
    sentiment: -0.45,
    factionMentions: {
      'faction-001': { volume: 145, sentiment: -0.65 },
      'faction-002': { volume: 195, sentiment: 0.72 }
    },
    personIds: ['person-011', 'person-012'],
    organizationIds: ['org-010'],
    locationIds: ['loc-001'],
    eventIds: ['event-008'],
    volumeOverTime: [
      { date: '2026-01-16', factionVolumes: { 'faction-001': 48, 'faction-002': 65 } },
      { date: '2026-01-17', factionVolumes: { 'faction-001': 95, 'faction-002': 135 } },
      { date: '2026-01-18', factionVolumes: { 'faction-001': 125, 'faction-002': 165 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 145, 'faction-002': 195 } }
    ]
  },
  {
    id: 'sub-011',
    text: 'US investigators probe possible sanctions violations by intermediaries',
    description: 'The US Commerce Department has opened investigations into whether Huawei circumvented export controls by using third-party intermediaries to acquire restricted semiconductor equipment.',
    parentNarrativeId: 'narr-004',
    sentiment: -0.58,
    factionMentions: {
      'faction-002': { volume: 175, sentiment: 0.65 },
      'faction-001': { volume: 95, sentiment: -0.78 }
    },
    personIds: ['person-005'],
    organizationIds: ['org-005', 'org-010'],
    locationIds: ['loc-004'],
    eventIds: ['event-009'],
    volumeOverTime: [
      { date: '2026-01-17', factionVolumes: { 'faction-002': 58, 'faction-001': 32 } },
      { date: '2026-01-18', factionVolumes: { 'faction-002': 115, 'faction-001': 65 } },
      { date: '2026-01-19', factionVolumes: { 'faction-002': 175, 'faction-001': 95 } }
    ]
  },
  {
    id: 'sub-012',
    text: 'YMTC 232-layer NAND found competitive with Samsung offerings',
    description: 'Independent testing shows YMTC\'s 232-layer 3D NAND flash memory achieves performance and density metrics comparable to Samsung\'s latest offerings, validating China\'s memory chip capabilities.',
    parentNarrativeId: 'narr-005',
    sentiment: 0.42,
    factionMentions: {
      'faction-001': { volume: 125, sentiment: 0.72 },
      'faction-003': { volume: 145, sentiment: 0.38 }
    },
    personIds: ['person-013'],
    organizationIds: ['org-013', 'org-014'],
    locationIds: ['loc-007'],
    eventIds: ['event-010'],
    volumeOverTime: [
      { date: '2026-01-17', factionVolumes: { 'faction-001': 42, 'faction-003': 48 } },
      { date: '2026-01-18', factionVolumes: { 'faction-001': 85, 'faction-003': 98 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 125, 'faction-003': 145 } }
    ]
  },
  {
    id: 'sub-013',
    text: 'Supply chain researchers trace YMTC chips in global consumer devices',
    description: 'Researchers have identified YMTC memory chips in smartphones, SSDs, and other consumer electronics from multiple brands, raising questions about Entity List enforcement.',
    parentNarrativeId: 'narr-005',
    sentiment: -0.52,
    factionMentions: {
      'faction-002': { volume: 165, sentiment: -0.72 },
      'faction-006': { volume: 115, sentiment: -0.55 }
    },
    personIds: ['person-014'],
    organizationIds: ['org-013', 'org-015'],
    locationIds: ['loc-004'],
    eventIds: ['event-011'],
    volumeOverTime: [
      { date: '2026-01-17', factionVolumes: { 'faction-002': 55, 'faction-006': 38 } },
      { date: '2026-01-18', factionVolumes: { 'faction-002': 115, 'faction-006': 78 } },
      { date: '2026-01-19', factionVolumes: { 'faction-002': 165, 'faction-006': 115 } }
    ]
  },
  {
    id: 'sub-014',
    text: 'Empyrean and Huada Jiutian lead Chinese EDA development',
    description: 'Empyrean Technology and Huada Jiutian have emerged as leaders in China\'s push to develop indigenous EDA software, with combined government and private funding exceeding $2 billion.',
    parentNarrativeId: 'narr-006',
    sentiment: 0.55,
    factionMentions: {
      'faction-001': { volume: 165, sentiment: 0.85 },
      'faction-005': { volume: 95, sentiment: 0.72 }
    },
    personIds: ['person-015', 'person-016'],
    organizationIds: ['org-016', 'org-017'],
    locationIds: ['loc-002', 'loc-008'],
    eventIds: ['event-012'],
    volumeOverTime: [
      { date: '2026-01-19', factionVolumes: { 'faction-001': 55, 'faction-005': 32 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 165, 'faction-005': 95 } }
    ]
  },
  {
    id: 'sub-015',
    text: 'Chinese EDA tools currently limited to mature process nodes',
    description: 'Industry analysts note that while Chinese EDA tools have made progress, they currently only support designs at 14nm and above, several generations behind leading-edge US software.',
    parentNarrativeId: 'narr-006',
    sentiment: -0.18,
    factionMentions: {
      'faction-002': { volume: 95, sentiment: -0.35 },
      'faction-003': { volume: 125, sentiment: 0.12 }
    },
    personIds: [],
    organizationIds: ['org-018', 'org-019'],
    locationIds: [],
    eventIds: [],
    volumeOverTime: [
      { date: '2026-01-19', factionVolumes: { 'faction-002': 32, 'faction-003': 42 } },
      { date: '2026-01-20', factionVolumes: { 'faction-002': 95, 'faction-003': 125 } }
    ]
  },
  {
    id: 'sub-016',
    text: 'TSMC Arizona construction delays push production to late 2025',
    description: 'TSMC has confirmed that production at its Arizona fab will begin in late 2025, a significant delay from the original 2024 target, citing construction challenges and supply chain issues.',
    parentNarrativeId: 'narr-007',
    sentiment: -0.48,
    factionMentions: {
      'faction-002': { volume: 145, sentiment: -0.42 },
      'faction-006': { volume: 125, sentiment: -0.55 }
    },
    personIds: ['person-017', 'person-018'],
    organizationIds: ['org-020'],
    locationIds: ['loc-009'],
    eventIds: ['event-013'],
    volumeOverTime: [
      { date: '2026-01-15', factionVolumes: { 'faction-002': 48, 'faction-006': 42 } },
      { date: '2026-01-16', factionVolumes: { 'faction-002': 95, 'faction-006': 85 } },
      { date: '2026-01-17', factionVolumes: { 'faction-002': 125, 'faction-006': 108 } },
      { date: '2026-01-18', factionVolumes: { 'faction-002': 145, 'faction-006': 125 } }
    ]
  },
  {
    id: 'sub-017',
    text: 'Labor disputes arise between Taiwanese managers and US workers',
    description: 'Reports of cultural clashes between TSMC\'s Taiwanese management and American workers have surfaced, with unions criticizing work practices and company officials lamenting productivity differences.',
    parentNarrativeId: 'narr-007',
    sentiment: -0.52,
    factionMentions: {
      'faction-001': { volume: 95, sentiment: 0.42 },
      'faction-005': { volume: 115, sentiment: -0.62 }
    },
    personIds: ['person-019'],
    organizationIds: ['org-020', 'org-021'],
    locationIds: ['loc-009'],
    eventIds: ['event-014'],
    volumeOverTime: [
      { date: '2026-01-16', factionVolumes: { 'faction-001': 32, 'faction-005': 38 } },
      { date: '2026-01-17', factionVolumes: { 'faction-001': 65, 'faction-005': 78 } },
      { date: '2026-01-18', factionVolumes: { 'faction-001': 95, 'faction-005': 115 } }
    ]
  }
];
