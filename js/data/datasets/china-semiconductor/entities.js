/**
 * Persons and organizations for China Semiconductor dataset
 */

export const persons = [
  {
    id: 'person-001',
    name: 'Zhao Haijun',
    description: 'Co-CEO of Semiconductor Manufacturing International Corporation (SMIC), China\'s largest chip foundry. Zhao has led SMIC\'s efforts to develop advanced semiconductor manufacturing capabilities despite US export controls, achieving notable progress in producing chips at 5nm process nodes without EUV lithography.',
    type: 'executive',
    affiliatedOrganizationId: 'org-001',
    imageUrl: null,
    affiliatedFactionIds: ['faction-001'],
    relatedLocationIds: ['loc-001', 'loc-002'],
    relatedEventIds: ['event-001'],
    documentIds: ['doc-001', 'doc-002'],
    factionSentiment: {
      'faction-001': 0.82,
      'faction-002': -0.55,
      'faction-003': 0.25
    }
  },
  {
    id: 'person-002',
    name: 'Liang Mong Song',
    type: 'executive',
    affiliatedOrganizationId: 'org-001',
    imageUrl: null,
    affiliatedFactionIds: ['faction-001'],
    relatedLocationIds: ['loc-001'],
    relatedEventIds: ['event-001'],
    documentIds: ['doc-001', 'doc-003'],
    factionSentiment: {
      'faction-001': 0.78,
      'faction-002': -0.62,
      'faction-003': 0.35
    }
  },
  {
    id: 'person-003',
    name: 'Dylan Patel',
    type: 'analyst',
    affiliatedOrganizationId: 'org-023',
    imageUrl: null,
    affiliatedFactionIds: ['faction-003'],
    relatedLocationIds: ['loc-004'],
    relatedEventIds: [],
    documentIds: ['doc-003', 'doc-004'],
    factionSentiment: {
      'faction-001': 0.15,
      'faction-002': 0.12,
      'faction-003': 0.72
    }
  },
  {
    id: 'person-004',
    name: 'Peter Wennink',
    type: 'executive',
    affiliatedOrganizationId: 'org-002',
    imageUrl: null,
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-003'],
    relatedEventIds: ['event-003', 'event-004'],
    documentIds: ['doc-005', 'doc-006'],
    factionSentiment: {
      'faction-003': 0.55,
      'faction-006': 0.48
    }
  },
  {
    id: 'person-005',
    name: 'Gina Raimondo',
    description: 'U.S. Secretary of Commerce who has been instrumental in implementing and expanding export controls on semiconductor technology to China. Raimondo has coordinated with allies including the Netherlands and Japan to create a unified approach to restricting China\'s access to advanced chip-making equipment.',
    type: 'government_official',
    affiliatedOrganizationId: 'org-005',
    imageUrl: 'img/entities/china/person-005.jpg',
    affiliatedFactionIds: ['faction-002'],
    relatedLocationIds: ['loc-004'],
    relatedEventIds: ['event-009'],
    documentIds: ['doc-007', 'doc-008'],
    factionSentiment: {
      'faction-001': -0.75,
      'faction-002': 0.72,
      'faction-005': 0.35
    }
  },
  {
    id: 'person-006',
    name: 'Jake Sullivan',
    type: 'government_official',
    affiliatedOrganizationId: null,
    imageUrl: 'img/entities/china/person-006.png',
    affiliatedFactionIds: ['faction-002'],
    relatedLocationIds: ['loc-004'],
    relatedEventIds: [],
    documentIds: ['doc-007'],
    factionSentiment: {
      'faction-001': -0.78,
      'faction-002': 0.68
    }
  },
  {
    id: 'person-007',
    name: 'Liesje Schreinemacher',
    type: 'government_official',
    affiliatedOrganizationId: 'org-004',
    imageUrl: 'img/entities/china/person-007.jpg',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-005'],
    relatedEventIds: ['event-003'],
    documentIds: ['doc-005'],
    factionSentiment: {
      'faction-001': -0.42,
      'faction-002': 0.55
    }
  },
  {
    id: 'person-008',
    name: 'Liu He',
    type: 'government_official',
    affiliatedOrganizationId: 'org-009',
    imageUrl: 'img/entities/china/person-008.jpg',
    affiliatedFactionIds: ['faction-001'],
    relatedLocationIds: ['loc-006'],
    relatedEventIds: ['event-005', 'event-006'],
    documentIds: ['doc-009', 'doc-010'],
    factionSentiment: {
      'faction-001': 0.85,
      'faction-002': -0.65
    }
  },
  {
    id: 'person-009',
    name: 'Ding Wenwu',
    type: 'executive',
    affiliatedOrganizationId: 'org-007',
    imageUrl: null,
    affiliatedFactionIds: ['faction-001', 'faction-005'],
    relatedLocationIds: ['loc-006'],
    relatedEventIds: ['event-006'],
    documentIds: ['doc-009'],
    factionSentiment: {
      'faction-001': 0.78,
      'faction-005': 0.65
    }
  },
  {
    id: 'person-010',
    name: 'He Lifeng',
    type: 'government_official',
    affiliatedOrganizationId: 'org-009',
    imageUrl: 'img/entities/china/person-010.jpg',
    affiliatedFactionIds: ['faction-001'],
    relatedLocationIds: ['loc-006'],
    relatedEventIds: ['event-007'],
    documentIds: ['doc-010'],
    factionSentiment: {
      'faction-001': 0.82
    }
  },
  {
    id: 'person-011',
    name: 'Ren Zhengfei',
    type: 'executive',
    affiliatedOrganizationId: 'org-010',
    imageUrl: 'img/entities/china/person-011.jpg',
    affiliatedFactionIds: ['faction-001'],
    relatedLocationIds: ['loc-001'],
    relatedEventIds: ['event-002', 'event-008'],
    documentIds: ['doc-012', 'doc-013'],
    factionSentiment: {
      'faction-001': 0.88,
      'faction-002': -0.78,
      'faction-004': 0.72
    }
  },
  {
    id: 'person-012',
    name: 'Meng Wanzhou',
    type: 'executive',
    affiliatedOrganizationId: 'org-010',
    imageUrl: 'img/entities/china/person-012.jpg',
    affiliatedFactionIds: ['faction-001'],
    relatedLocationIds: ['loc-001'],
    relatedEventIds: ['event-008'],
    documentIds: ['doc-012'],
    factionSentiment: {
      'faction-001': 0.82,
      'faction-002': -0.72
    }
  },
  {
    id: 'person-013',
    name: 'Chen Nanxiang',
    type: 'executive',
    affiliatedOrganizationId: 'org-013',
    imageUrl: null,
    affiliatedFactionIds: ['faction-001'],
    relatedLocationIds: ['loc-007'],
    relatedEventIds: ['event-010'],
    documentIds: ['doc-015', 'doc-016'],
    factionSentiment: {
      'faction-001': 0.75,
      'faction-003': 0.42
    }
  },
  {
    id: 'person-014',
    name: 'Dan Hutcheson',
    type: 'analyst',
    affiliatedOrganizationId: 'org-024',
    imageUrl: null,
    affiliatedFactionIds: ['faction-003', 'faction-006'],
    relatedLocationIds: ['loc-004'],
    relatedEventIds: ['event-011'],
    documentIds: ['doc-016', 'doc-017'],
    factionSentiment: {
      'faction-003': 0.68,
      'faction-006': 0.62
    }
  },
  {
    id: 'person-015',
    name: 'Dai Weimin',
    type: 'executive',
    affiliatedOrganizationId: 'org-016',
    imageUrl: null,
    affiliatedFactionIds: ['faction-001', 'faction-005'],
    relatedLocationIds: ['loc-002'],
    relatedEventIds: ['event-012'],
    documentIds: ['doc-018'],
    factionSentiment: {
      'faction-001': 0.82,
      'faction-005': 0.72
    }
  },
  {
    id: 'person-016',
    name: 'Liu Zhiyong',
    type: 'executive',
    affiliatedOrganizationId: 'org-017',
    imageUrl: null,
    affiliatedFactionIds: ['faction-001'],
    relatedLocationIds: ['loc-008'],
    relatedEventIds: [],
    documentIds: ['doc-019'],
    factionSentiment: {
      'faction-001': 0.78
    }
  },
  {
    id: 'person-017',
    name: 'C.C. Wei',
    type: 'executive',
    affiliatedOrganizationId: 'org-020',
    imageUrl: null,
    affiliatedFactionIds: ['faction-005'],
    relatedLocationIds: ['loc-010', 'loc-009'],
    relatedEventIds: ['event-013'],
    documentIds: ['doc-020', 'doc-021'],
    factionSentiment: {
      'faction-005': 0.72,
      'faction-006': 0.55
    }
  },
  {
    id: 'person-018',
    name: 'Mark Liu',
    type: 'executive',
    affiliatedOrganizationId: 'org-020',
    imageUrl: 'img/entities/china/person-018.jpg',
    affiliatedFactionIds: ['faction-005'],
    relatedLocationIds: ['loc-010'],
    relatedEventIds: ['event-013'],
    documentIds: ['doc-020'],
    factionSentiment: {
      'faction-005': 0.68
    }
  },
  {
    id: 'person-019',
    name: 'Rick Bloomingdale',
    type: 'labor_leader',
    affiliatedOrganizationId: 'org-021',
    imageUrl: null,
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-009'],
    relatedEventIds: ['event-014'],
    documentIds: ['doc-022'],
    factionSentiment: {
      'faction-005': -0.42
    }
  },
  {
    id: 'person-020',
    name: 'Pat Gelsinger',
    type: 'executive',
    affiliatedOrganizationId: 'org-027',
    imageUrl: null,
    affiliatedFactionIds: ['faction-005', 'faction-011'],
    relatedLocationIds: ['loc-012'],
    relatedEventIds: ['event-015', 'event-020', 'event-026'],
    documentIds: ['doc-036', 'doc-037', 'doc-043', 'doc-053', 'doc-057'],
    factionSentiment: {
      'faction-002': 0.35,
      'faction-005': 0.58,
      'faction-006': 0.42
    }
  },
  {
    id: 'person-021',
    name: 'Jensen Huang',
    type: 'executive',
    affiliatedOrganizationId: 'org-028',
    imageUrl: null,
    affiliatedFactionIds: ['faction-005', 'faction-007'],
    relatedLocationIds: ['loc-012'],
    relatedEventIds: ['event-021'],
    documentIds: ['doc-044', 'doc-045', 'doc-056'],
    factionSentiment: {
      'faction-005': 0.85,
      'faction-006': 0.72
    }
  },
  {
    id: 'person-022',
    name: 'Lee Jae-yong',
    type: 'executive',
    affiliatedOrganizationId: 'org-014',
    imageUrl: null,
    affiliatedFactionIds: ['faction-006', 'faction-008'],
    relatedLocationIds: ['loc-011'],
    relatedEventIds: ['event-016'],
    documentIds: ['doc-038', 'doc-060'],
    factionSentiment: {
      'faction-006': 0.78
    }
  },
  {
    id: 'person-023',
    name: 'Kwon Young-soo',
    type: 'executive',
    affiliatedOrganizationId: 'org-029',
    imageUrl: null,
    affiliatedFactionIds: ['faction-006', 'faction-013'],
    relatedLocationIds: ['loc-011'],
    relatedEventIds: ['event-022'],
    documentIds: ['doc-046', 'doc-060'],
    factionSentiment: {
      'faction-006': 0.75
    }
  },
  {
    id: 'person-024',
    name: 'Alan Estevez',
    type: 'government_official',
    affiliatedOrganizationId: 'org-006',
    imageUrl: null,
    affiliatedFactionIds: ['faction-002', 'faction-009', 'faction-014'],
    relatedLocationIds: ['loc-004'],
    relatedEventIds: ['event-019'],
    documentIds: ['doc-041', 'doc-048'],
    factionSentiment: {
      'faction-001': -0.72,
      'faction-002': 0.75
    }
  },
  {
    id: 'person-025',
    name: 'Wang Wentao',
    type: 'government_official',
    affiliatedOrganizationId: 'org-030',
    imageUrl: null,
    affiliatedFactionIds: ['faction-001', 'faction-004', 'faction-010', 'faction-016'],
    relatedLocationIds: ['loc-006'],
    relatedEventIds: ['event-018', 'event-023'],
    documentIds: ['doc-040', 'doc-047'],
    factionSentiment: {
      'faction-001': 0.82,
      'faction-002': -0.78,
      'faction-004': 0.85
    }
  },
  {
    id: 'person-026',
    name: 'Lisa Su',
    type: 'executive',
    affiliatedOrganizationId: 'org-031',
    imageUrl: null,
    affiliatedFactionIds: ['faction-005', 'faction-012'],
    relatedLocationIds: ['loc-012'],
    relatedEventIds: ['event-025'],
    documentIds: ['doc-051', 'doc-052'],
    factionSentiment: {
      'faction-005': 0.78,
      'faction-006': 0.65
    }
  },
  {
    id: 'person-027',
    name: 'Lip-Bu Tan',
    type: 'executive',
    affiliatedOrganizationId: 'org-019',
    imageUrl: null,
    affiliatedFactionIds: ['faction-005', 'faction-015'],
    relatedLocationIds: ['loc-012'],
    relatedEventIds: [],
    documentIds: [],
    factionSentiment: {
      'faction-005': 0.72
    }
  },
  {
    id: 'person-028',
    name: 'Christophe Fouquet',
    type: 'executive',
    affiliatedOrganizationId: 'org-002',
    imageUrl: null,
    affiliatedFactionIds: ['faction-006', 'faction-008'],
    relatedLocationIds: ['loc-003'],
    relatedEventIds: ['event-024'],
    documentIds: ['doc-050'],
    factionSentiment: {
      'faction-001': -0.55,
      'faction-006': 0.68
    }
  },
  {
    id: 'person-029',
    name: 'Gary Dickerson',
    type: 'executive',
    affiliatedOrganizationId: 'org-003',
    imageUrl: null,
    affiliatedFactionIds: ['faction-005', 'faction-011'],
    relatedLocationIds: ['loc-012'],
    relatedEventIds: [],
    documentIds: [],
    factionSentiment: {
      'faction-002': 0.42,
      'faction-005': 0.68
    }
  }
];

export const organizations = [
  {
    id: 'org-001',
    name: 'SMIC',
    type: 'corporation',
    imageUrl: 'img/entities/china/org-001.png',
    affiliatedFactionIds: ['faction-001'],
    relatedLocationIds: ['loc-001', 'loc-002'],
    documentIds: ['doc-001', 'doc-002', 'doc-003'],
    factionSentiment: {
      'faction-001': 0.85,
      'faction-002': -0.68,
      'faction-003': 0.32
    }
  },
  {
    id: 'org-002',
    name: 'ASML',
    type: 'corporation',
    imageUrl: 'img/entities/china/org-002.png',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-003'],
    documentIds: ['doc-005', 'doc-006'],
    factionSentiment: {
      'faction-001': -0.55,
      'faction-003': 0.58,
      'faction-006': 0.52
    }
  },
  {
    id: 'org-003',
    name: 'Applied Materials',
    type: 'corporation',
    imageUrl: 'img/entities/china/org-003.png',
    affiliatedFactionIds: ['faction-005'],
    relatedLocationIds: ['loc-004'],
    documentIds: ['doc-013'],
    factionSentiment: {
      'faction-002': 0.45,
      'faction-005': 0.62
    }
  },
  {
    id: 'org-004',
    name: 'Dutch Government',
    type: 'government',
    imageUrl: 'img/entities/china/org-004.png',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-005'],
    documentIds: ['doc-005'],
    factionSentiment: {
      'faction-001': -0.52,
      'faction-002': 0.65
    }
  },
  {
    id: 'org-005',
    name: 'US Commerce Department',
    type: 'government',
    imageUrl: 'img/entities/china/org-005.jpg',
    affiliatedFactionIds: ['faction-002'],
    relatedLocationIds: ['loc-004'],
    documentIds: ['doc-007', 'doc-008', 'doc-014'],
    factionSentiment: {
      'faction-001': -0.78,
      'faction-002': 0.75
    }
  },
  {
    id: 'org-006',
    name: 'Bureau of Industry and Security',
    type: 'government',
    imageUrl: 'img/entities/china/org-006.png',
    affiliatedFactionIds: ['faction-002'],
    relatedLocationIds: ['loc-004'],
    documentIds: ['doc-008'],
    factionSentiment: {
      'faction-001': -0.82,
      'faction-002': 0.72
    }
  },
  {
    id: 'org-007',
    name: 'China National IC Fund',
    type: 'financial',
    affiliatedFactionIds: ['faction-001'],
    relatedLocationIds: ['loc-006'],
    documentIds: ['doc-009', 'doc-010', 'doc-011'],
    factionSentiment: {
      'faction-001': 0.88,
      'faction-002': -0.58
    }
  },
  {
    id: 'org-008',
    name: 'China Development Bank',
    type: 'financial',
    imageUrl: 'img/entities/china/org-008.svg',
    affiliatedFactionIds: ['faction-001'],
    relatedLocationIds: ['loc-006'],
    documentIds: ['doc-010'],
    factionSentiment: {
      'faction-001': 0.72
    }
  },
  {
    id: 'org-009',
    name: 'State Council of China',
    type: 'government',
    imageUrl: 'img/entities/china/org-009.jpg',
    affiliatedFactionIds: ['faction-001', 'faction-004'],
    relatedLocationIds: ['loc-006'],
    documentIds: ['doc-010'],
    factionSentiment: {
      'faction-001': 0.85,
      'faction-004': 0.82
    }
  },
  {
    id: 'org-010',
    name: 'Huawei',
    type: 'corporation',
    imageUrl: 'img/entities/china/org-010.png',
    affiliatedFactionIds: ['faction-001'],
    relatedLocationIds: ['loc-001'],
    documentIds: ['doc-012', 'doc-013', 'doc-014'],
    factionSentiment: {
      'faction-001': 0.88,
      'faction-002': -0.82,
      'faction-004': 0.78
    }
  },
  {
    id: 'org-011',
    name: 'Lam Research',
    type: 'corporation',
    imageUrl: 'img/entities/china/org-011.svg',
    affiliatedFactionIds: ['faction-005'],
    relatedLocationIds: ['loc-004'],
    documentIds: ['doc-013'],
    factionSentiment: {
      'faction-002': 0.48,
      'faction-005': 0.58
    }
  },
  {
    id: 'org-012',
    name: 'KLA Corporation',
    type: 'corporation',
    imageUrl: 'img/entities/china/org-012.png',
    affiliatedFactionIds: ['faction-005'],
    relatedLocationIds: ['loc-004'],
    documentIds: ['doc-014'],
    factionSentiment: {
      'faction-002': 0.45,
      'faction-005': 0.55
    }
  },
  {
    id: 'org-013',
    name: 'YMTC',
    type: 'corporation',
    imageUrl: 'img/entities/china/org-013.jpg',
    affiliatedFactionIds: ['faction-001'],
    relatedLocationIds: ['loc-007'],
    documentIds: ['doc-015', 'doc-016', 'doc-017'],
    factionSentiment: {
      'faction-001': 0.78,
      'faction-002': -0.72,
      'faction-003': 0.35
    }
  },
  {
    id: 'org-014',
    name: 'Samsung Electronics',
    type: 'corporation',
    imageUrl: 'img/entities/china/org-014.png',
    affiliatedFactionIds: [],
    relatedLocationIds: [],
    documentIds: ['doc-016'],
    factionSentiment: {
      'faction-003': 0.52,
      'faction-006': 0.48
    }
  },
  {
    id: 'org-015',
    name: 'TechInsights',
    type: 'research',
    affiliatedFactionIds: ['faction-003'],
    relatedLocationIds: ['loc-004'],
    documentIds: ['doc-016', 'doc-017'],
    factionSentiment: {
      'faction-003': 0.72,
      'faction-006': 0.68
    }
  },
  {
    id: 'org-016',
    name: 'Empyrean Technology',
    type: 'corporation',
    imageUrl: 'img/entities/china/org-016.png',
    affiliatedFactionIds: ['faction-001', 'faction-005'],
    relatedLocationIds: ['loc-002'],
    documentIds: ['doc-018'],
    factionSentiment: {
      'faction-001': 0.82,
      'faction-005': 0.72
    }
  },
  {
    id: 'org-017',
    name: 'Huada Jiutian',
    type: 'corporation',
    affiliatedFactionIds: ['faction-001'],
    relatedLocationIds: ['loc-008'],
    documentIds: ['doc-019'],
    factionSentiment: {
      'faction-001': 0.78
    }
  },
  {
    id: 'org-018',
    name: 'Cadence Design Systems',
    type: 'corporation',
    imageUrl: 'img/entities/china/org-018.svg',
    affiliatedFactionIds: ['faction-005'],
    relatedLocationIds: ['loc-004'],
    documentIds: ['doc-018'],
    factionSentiment: {
      'faction-002': 0.52,
      'faction-005': 0.75
    }
  },
  {
    id: 'org-019',
    name: 'Synopsys',
    type: 'corporation',
    imageUrl: 'img/entities/china/org-019.png',
    affiliatedFactionIds: ['faction-005'],
    relatedLocationIds: ['loc-004'],
    documentIds: ['doc-018'],
    factionSentiment: {
      'faction-002': 0.48,
      'faction-005': 0.72
    }
  },
  {
    id: 'org-020',
    name: 'TSMC',
    type: 'corporation',
    imageUrl: 'img/entities/china/org-020.png',
    affiliatedFactionIds: ['faction-005', 'faction-006'],
    relatedLocationIds: ['loc-010', 'loc-009'],
    documentIds: ['doc-020', 'doc-021', 'doc-022'],
    factionSentiment: {
      'faction-005': 0.68,
      'faction-006': 0.62
    }
  },
  {
    id: 'org-021',
    name: 'Arizona Building and Construction Trades Council',
    type: 'union',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-009'],
    documentIds: ['doc-022'],
    factionSentiment: {
      'faction-005': -0.38
    }
  },
  {
    id: 'org-022',
    name: 'SMEE',
    type: 'corporation',
    imageUrl: 'img/entities/china/org-022.png',
    affiliatedFactionIds: ['faction-001'],
    relatedLocationIds: ['loc-002'],
    documentIds: [],
    factionSentiment: {
      'faction-001': 0.75
    }
  },
  {
    id: 'org-023',
    name: 'SemiAnalysis',
    type: 'research',
    affiliatedFactionIds: ['faction-003'],
    relatedLocationIds: ['loc-004'],
    documentIds: ['doc-003', 'doc-004'],
    factionSentiment: {
      'faction-003': 0.75
    }
  },
  {
    id: 'org-024',
    name: 'VLSI Research',
    type: 'research',
    affiliatedFactionIds: ['faction-003', 'faction-006'],
    relatedLocationIds: ['loc-004'],
    documentIds: ['doc-017'],
    factionSentiment: {
      'faction-003': 0.72,
      'faction-006': 0.68
    }
  },
  {
    id: 'org-025',
    name: 'Xinhua News Agency',
    type: 'media',
    imageUrl: 'img/entities/china/org-025.png',
    affiliatedFactionIds: ['faction-004'],
    relatedLocationIds: ['loc-006'],
    documentIds: [],
    factionSentiment: {
      'faction-001': 0.85,
      'faction-004': 0.92
    }
  },
  {
    id: 'org-026',
    name: 'CGTN',
    type: 'media',
    imageUrl: 'img/entities/china/org-026.png',
    affiliatedFactionIds: ['faction-004'],
    relatedLocationIds: ['loc-006'],
    documentIds: [],
    factionSentiment: {
      'faction-001': 0.82,
      'faction-004': 0.88
    }
  },
  {
    id: 'org-027',
    name: 'Intel Corporation',
    type: 'corporation',
    imageUrl: null,
    affiliatedFactionIds: ['faction-005', 'faction-007'],
    relatedLocationIds: ['loc-012'],
    documentIds: ['doc-036', 'doc-037', 'doc-043', 'doc-053', 'doc-057'],
    factionSentiment: {
      'faction-002': 0.42,
      'faction-005': 0.55,
      'faction-006': 0.35
    }
  },
  {
    id: 'org-028',
    name: 'Nvidia Corporation',
    type: 'corporation',
    imageUrl: null,
    affiliatedFactionIds: ['faction-005', 'faction-011'],
    relatedLocationIds: ['loc-012'],
    documentIds: ['doc-044', 'doc-045', 'doc-046', 'doc-051', 'doc-052', 'doc-056'],
    factionSentiment: {
      'faction-005': 0.85,
      'faction-006': 0.78
    }
  },
  {
    id: 'org-029',
    name: 'SK Hynix',
    type: 'corporation',
    imageUrl: null,
    affiliatedFactionIds: ['faction-006', 'faction-010', 'faction-016'],
    relatedLocationIds: ['loc-011'],
    documentIds: ['doc-046', 'doc-060'],
    factionSentiment: {
      'faction-006': 0.75
    }
  },
  {
    id: 'org-030',
    name: 'Ministry of Commerce of China (MOFCOM)',
    type: 'government',
    imageUrl: null,
    affiliatedFactionIds: ['faction-001', 'faction-004', 'faction-008'],
    relatedLocationIds: ['loc-006'],
    documentIds: ['doc-040', 'doc-047'],
    factionSentiment: {
      'faction-001': 0.85,
      'faction-002': -0.78,
      'faction-004': 0.88
    }
  },
  {
    id: 'org-031',
    name: 'Advanced Micro Devices (AMD)',
    type: 'corporation',
    imageUrl: null,
    affiliatedFactionIds: ['faction-005', 'faction-009', 'faction-014'],
    relatedLocationIds: ['loc-012'],
    documentIds: ['doc-051', 'doc-052'],
    factionSentiment: {
      'faction-005': 0.72,
      'faction-006': 0.62
    }
  },
  {
    id: 'org-032',
    name: 'Korea Ministry of Trade',
    type: 'government',
    imageUrl: null,
    affiliatedFactionIds: ['faction-006', 'faction-013'],
    relatedLocationIds: ['loc-011'],
    documentIds: ['doc-039', 'doc-049', 'doc-055'],
    factionSentiment: {
      'faction-002': -0.35,
      'faction-006': 0.72
    }
  },
  {
    id: 'org-033',
    name: 'Taiwan Ministry of Economic Affairs',
    type: 'government',
    imageUrl: null,
    affiliatedFactionIds: ['faction-005', 'faction-012'],
    relatedLocationIds: ['loc-010'],
    documentIds: ['doc-059'],
    factionSentiment: {
      'faction-005': 0.68
    }
  },
  {
    id: 'org-034',
    name: 'Arm Holdings',
    type: 'corporation',
    imageUrl: null,
    affiliatedFactionIds: ['faction-005', 'faction-006', 'faction-015'],
    relatedLocationIds: [],
    documentIds: [],
    factionSentiment: {
      'faction-005': 0.62,
      'faction-006': 0.58
    }
  }
];
