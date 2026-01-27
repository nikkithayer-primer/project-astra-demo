/**
 * Persons and organizations for American Politics dataset
 */

export const persons = [
  {
    id: 'person-001',
    name: 'Joe Biden',
    type: 'politician',
    imageUrl: 'img/entities/main/person-001.jpg',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-001', 'loc-004'],
    relatedEventIds: ['event-001'],
    factionSentiment: {
      'faction-001': -0.82,
      'faction-002': -0.28,
      'faction-003': 0.15
    }
  },
  {
    id: 'person-003',
    name: 'Donald Trump',
    type: 'politician',
    imageUrl: 'img/entities/main/person-003.jpg',
    affiliatedFactionIds: ['faction-001'],
    relatedLocationIds: ['loc-001', 'loc-004', 'loc-006'],
    relatedEventIds: ['event-006', 'event-007', 'event-008'],
    documentIds: ['doc-001', 'doc-002', 'doc-004', 'doc-011'],
    factionSentiment: {
      'faction-001': 0.67,
      'faction-002': -0.78,
      'faction-003': -0.69
    }
  },
  {
    id: 'person-004',
    name: 'Emmanuel Macron',
    type: 'politician',
    imageUrl: 'img/entities/main/person-004.jpg',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-005'],
    relatedEventIds: ['event-006', 'event-007'],
    documentIds: ['doc-001', 'doc-002'],
    factionSentiment: {
      'faction-001': -0.45,
      'faction-002': 0.32
    }
  },
  {
    id: 'person-005',
    name: 'Ursula von der Leyen',
    type: 'politician',
    imageUrl: 'img/entities/main/person-005.jpg',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-005'],
    relatedEventIds: ['event-009'],
    documentIds: ['doc-003'],
    factionSentiment: {
      'faction-001': -0.38,
      'faction-002': 0.25
    }
  },
  {
    id: 'person-006',
    name: 'Múte Bourup Egede',
    type: 'politician',
    imageUrl: 'img/entities/main/person-006.jpg',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-006'],
    relatedEventIds: ['event-008'],
    documentIds: ['doc-004'],
    factionSentiment: {
      'faction-001': -0.22,
      'faction-002': 0.41
    }
  },
  {
    id: 'person-007',
    name: 'Keith Ellison',
    type: 'politician',
    imageUrl: 'img/entities/main/person-007.jpg',
    affiliatedFactionIds: ['faction-002'],
    relatedLocationIds: ['loc-002'],
    relatedEventIds: ['event-010'],
    documentIds: ['doc-005', 'doc-016'],
    factionSentiment: {
      'faction-001': -0.72,
      'faction-002': 0.65,
      'faction-003': 0.58
    }
  },
  {
    id: 'person-008',
    name: 'Renee Good',
    type: 'civilian',
    imageUrl: null,
    affiliatedFactionIds: ['faction-003'],
    relatedLocationIds: ['loc-002'],
    relatedEventIds: ['event-013'],
    documentIds: ['doc-007'],
    factionSentiment: {
      'faction-001': -0.45,
      'faction-002': 0.72,
      'faction-003': 0.85
    }
  },
  {
    id: 'person-009',
    name: 'Steven Meyer',
    type: 'judge',
    imageUrl: null,
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-007'],
    relatedEventIds: ['event-015'],
    documentIds: ['doc-013'],
    factionSentiment: {
      'faction-001': 0.15,
      'faction-002': 0.12,
      'faction-004': 0.45
    }
  },
  {
    id: 'person-010',
    name: 'Kimberly Meyer',
    type: 'civilian',
    imageUrl: null,
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-007'],
    relatedEventIds: ['event-015'],
    documentIds: ['doc-013'],
    factionSentiment: {}
  },
  {
    id: 'person-011',
    name: 'Loretta H. Rush',
    type: 'judge',
    imageUrl: 'img/entities/main/person-011.jpg',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-007'],
    relatedEventIds: ['event-016'],
    documentIds: ['doc-014'],
    factionSentiment: {
      'faction-004': 0.52
    }
  },
  {
    id: 'person-012',
    name: 'Harmeet Dhillon',
    type: 'government_official',
    imageUrl: 'img/entities/main/person-012.jpg',
    affiliatedFactionIds: ['faction-001'],
    relatedLocationIds: ['loc-001', 'loc-008'],
    relatedEventIds: ['event-017', 'event-019'],
    documentIds: ['doc-009', 'doc-010'],
    factionSentiment: {
      'faction-001': 0.72,
      'faction-002': -0.68,
      'faction-003': -0.75
    }
  },
  {
    id: 'person-013',
    name: 'Pam Bondi',
    type: 'government_official',
    imageUrl: 'img/entities/main/person-013.jpg',
    affiliatedFactionIds: ['faction-001'],
    relatedLocationIds: ['loc-001'],
    relatedEventIds: ['event-017'],
    documentIds: ['doc-009'],
    factionSentiment: {
      'faction-001': 0.68,
      'faction-002': -0.72,
      'faction-003': -0.78
    }
  },
  {
    id: 'person-014',
    name: 'David Easterwood',
    type: 'government_official',
    imageUrl: 'img/entities/main/person-014.jpg',
    affiliatedFactionIds: ['faction-004'],
    relatedLocationIds: ['loc-008'],
    relatedEventIds: ['event-017'],
    documentIds: ['doc-008', 'doc-012', 'doc-024'],
    factionSentiment: {
      'faction-001': 0.55,
      'faction-002': -0.82,
      'faction-003': -0.88,
      'faction-004': 0.48
    }
  },
  {
    id: 'person-015',
    name: 'Nekima Levy Armstrong',
    type: 'activist',
    imageUrl: 'img/entities/main/person-015.jpg',
    affiliatedFactionIds: ['faction-003'],
    relatedLocationIds: ['loc-002', 'loc-008'],
    relatedEventIds: ['event-017'],
    documentIds: ['doc-008', 'doc-012'],
    factionSentiment: {
      'faction-001': -0.72,
      'faction-002': 0.58,
      'faction-003': 0.82
    }
  },
  {
    id: 'person-016',
    name: 'Don Lemon',
    type: 'journalist',
    imageUrl: 'img/entities/main/person-016.jpg',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-008'],
    relatedEventIds: ['event-017', 'event-019'],
    documentIds: ['doc-010'],
    factionSentiment: {
      'faction-001': -0.78,
      'faction-002': 0.52,
      'faction-003': 0.48
    }
  },
  {
    id: 'person-017',
    name: 'Katherine Menendez',
    type: 'judge',
    imageUrl: 'img/entities/main/person-017.jpg',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-002'],
    relatedEventIds: ['event-011'],
    documentIds: ['doc-006', 'doc-016'],
    factionSentiment: {
      'faction-001': -0.45,
      'faction-002': 0.38,
      'faction-003': 0.42
    }
  },
  {
    id: 'person-018',
    name: 'Kristi Noem',
    type: 'government_official',
    imageUrl: 'img/entities/main/person-018.jpg',
    affiliatedFactionIds: ['faction-001'],
    relatedLocationIds: ['loc-001', 'loc-002'],
    relatedEventIds: [],
    documentIds: ['doc-017'],
    factionSentiment: {
      'faction-001': 0.75,
      'faction-002': -0.72,
      'faction-003': -0.78
    }
  },
  {
    id: 'person-019',
    name: 'Tim Walz',
    type: 'politician',
    imageUrl: 'img/entities/main/person-019.jpg',
    affiliatedFactionIds: ['faction-002'],
    relatedLocationIds: ['loc-002', 'loc-008'],
    relatedEventIds: [],
    factionSentiment: {
      'faction-001': -0.68,
      'faction-002': 0.62,
      'faction-003': 0.55
    }
  },
  {
    id: 'person-020',
    name: 'Jacob Frey',
    type: 'politician',
    imageUrl: 'img/entities/main/person-020.jpg',
    affiliatedFactionIds: ['faction-002'],
    relatedLocationIds: ['loc-002'],
    relatedEventIds: [],
    factionSentiment: {
      'faction-001': -0.58,
      'faction-002': 0.48,
      'faction-003': 0.52
    }
  },
  {
    id: 'person-021',
    name: 'Ilhan Omar',
    type: 'politician',
    imageUrl: 'img/entities/main/person-021.jpg',
    affiliatedFactionIds: ['faction-002', 'faction-003'],
    relatedLocationIds: ['loc-002', 'loc-009'],
    relatedEventIds: ['event-021'],
    documentIds: ['doc-015'],
    factionSentiment: {
      'faction-001': -0.85,
      'faction-002': 0.72,
      'faction-003': 0.78
    }
  },
  {
    id: 'person-022',
    name: 'Angie Craig',
    type: 'politician',
    imageUrl: 'img/entities/main/person-022.jpg',
    affiliatedFactionIds: ['faction-002'],
    relatedLocationIds: ['loc-002', 'loc-009'],
    relatedEventIds: ['event-021'],
    documentIds: ['doc-015'],
    factionSentiment: {
      'faction-001': -0.52,
      'faction-002': 0.58
    }
  },
  {
    id: 'person-023',
    name: 'Kelly Morrison',
    type: 'politician',
    imageUrl: 'img/entities/main/person-023.jpg',
    affiliatedFactionIds: ['faction-002'],
    relatedLocationIds: ['loc-002', 'loc-009'],
    relatedEventIds: ['event-021'],
    documentIds: ['doc-015'],
    factionSentiment: {
      'faction-001': -0.48,
      'faction-002': 0.55
    }
  },
  {
    id: 'person-024',
    name: 'Joe Neguse',
    type: 'politician',
    imageUrl: 'img/entities/main/person-024.jpg',
    affiliatedFactionIds: ['faction-002'],
    relatedLocationIds: ['loc-009'],
    relatedEventIds: ['event-022'],
    documentIds: ['doc-015'],
    factionSentiment: {
      'faction-001': -0.55,
      'faction-002': 0.62
    }
  },
  {
    id: 'person-025',
    name: 'Jia Cobb',
    type: 'judge',
    imageUrl: 'img/entities/main/person-025.jpg',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-009'],
    relatedEventIds: ['event-022'],
    documentIds: ['doc-015'],
    factionSentiment: {
      'faction-001': -0.35,
      'faction-002': 0.28
    }
  },
  {
    id: 'person-026',
    name: 'Robert F. Kennedy Jr.',
    type: 'government_official',
    imageUrl: 'img/entities/main/person-026.jpg',
    affiliatedFactionIds: ['faction-001', 'faction-005'],
    relatedLocationIds: ['loc-001'],
    relatedEventIds: ['event-026'],
    documentIds: ['doc-018', 'doc-020'],
    factionSentiment: {
      'faction-001': 0.58,
      'faction-002': -0.65,
      'faction-005': 0.42,
      'faction-006': -0.72
    }
  }
];

export const organizations = [
  {
    id: 'org-001',
    name: 'Democratic Party',
    type: 'political',
    imageUrl: 'img/entities/main/org-001.png',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-001', 'loc-004'],
    factionSentiment: {
      'faction-001': -0.73,
      'faction-002': 0.41
    }
  },
  {
    id: 'org-002',
    name: 'Minnesota National Guard',
    type: 'military',
    imageUrl: 'img/entities/main/org-002.png',
    affiliatedFactionIds: ['faction-004'],
    relatedLocationIds: ['loc-002'],
    factionSentiment: {
      'faction-003': -0.81,
      'faction-004': 0.64
    }
  },
  {
    id: 'org-003',
    name: 'FDA',
    type: 'government',
    imageUrl: 'img/entities/main/org-003.png',
    affiliatedFactionIds: [],
    relatedLocationIds: [],
    documentIds: ['doc-021'],
    factionSentiment: {
      'faction-005': -0.67,
      'faction-006': -0.52
    }
  },
  {
    id: 'org-004',
    name: 'TikTok',
    type: 'platform',
    imageUrl: 'img/entities/main/org-004.svg',
    affiliatedFactionIds: [],
    relatedLocationIds: [],
    documentIds: ['doc-023'],
    factionSentiment: {
      'faction-006': 0.58
    }
  },
  {
    id: 'org-005',
    name: 'Republican Party',
    type: 'political',
    imageUrl: 'img/entities/main/org-005.png',
    affiliatedFactionIds: ['faction-001'],
    relatedLocationIds: ['loc-001', 'loc-004'],
    factionSentiment: {
      'faction-001': 0.74,
      'faction-002': -0.79
    }
  },
  {
    id: 'org-006',
    name: 'DSA',
    type: 'political',
    imageUrl: 'img/entities/main/org-006.jpg',
    affiliatedFactionIds: ['faction-002'],
    relatedLocationIds: [],
    factionSentiment: {
      'faction-002': 0.68,
      'faction-001': -0.61
    }
  },
  {
    id: 'org-008',
    name: 'European Commission',
    type: 'government',
    imageUrl: 'img/entities/main/org-008.png',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-005'],
    documentIds: ['doc-003'],
    factionSentiment: {
      'faction-001': -0.35,
      'faction-002': 0.28
    }
  },
  {
    id: 'org-009',
    name: 'World Economic Forum',
    type: 'organization',
    imageUrl: 'img/entities/main/org-009.svg',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-005'],
    documentIds: ['doc-001'],
    factionSentiment: {
      'faction-001': -0.42,
      'faction-002': 0.15
    }
  },
  {
    id: 'org-010',
    name: 'Department of Justice',
    type: 'government',
    imageUrl: 'img/entities/main/org-010.jpg',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-001', 'loc-002'],
    documentIds: ['doc-005', 'doc-006', 'doc-009', 'doc-010', 'doc-016'],
    factionSentiment: {
      'faction-001': 0.58,
      'faction-002': -0.65,
      'faction-003': -0.72
    }
  },
  {
    id: 'org-011',
    name: 'Immigration and Customs Enforcement',
    type: 'government',
    imageUrl: 'img/entities/main/org-011.jpg',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-002'],
    documentIds: ['doc-006', 'doc-007', 'doc-008', 'doc-024', 'doc-025'],
    factionSentiment: {
      'faction-001': 0.68,
      'faction-002': -0.78,
      'faction-003': -0.82
    }
  },
  {
    id: 'org-012',
    name: 'FBI',
    type: 'government',
    imageUrl: 'img/entities/main/org-012.png',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-001', 'loc-002'],
    documentIds: ['doc-007'],
    factionSentiment: {
      'faction-001': 0.25,
      'faction-002': -0.35,
      'faction-003': -0.42
    }
  },
  {
    id: 'org-013',
    name: 'Tippecanoe Superior Court',
    type: 'judicial',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-007'],
    documentIds: ['doc-013'],
    factionSentiment: {
      'faction-004': 0.48
    }
  },
  {
    id: 'org-014',
    name: 'Indiana Supreme Court',
    type: 'judicial',
    imageUrl: 'img/entities/main/org-014.jpg',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-007'],
    documentIds: ['doc-014'],
    factionSentiment: {
      'faction-004': 0.55
    }
  },
  {
    id: 'org-015',
    name: 'Lafayette Police Department',
    type: 'law_enforcement',
    affiliatedFactionIds: ['faction-004'],
    relatedLocationIds: ['loc-007'],
    documentIds: ['doc-013'],
    factionSentiment: {
      'faction-004': 0.62
    }
  },
  {
    id: 'org-016',
    name: 'Cities Church',
    type: 'religious',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-008'],
    documentIds: ['doc-008', 'doc-012', 'doc-024'],
    factionSentiment: {
      'faction-001': 0.45,
      'faction-002': -0.25,
      'faction-003': -0.35
    }
  },
  {
    id: 'org-017',
    name: 'Department of Homeland Security',
    type: 'government',
    imageUrl: 'img/entities/main/org-017.jpg',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-001', 'loc-002', 'loc-008'],
    documentIds: ['doc-015', 'doc-017'],
    factionSentiment: {
      'faction-001': 0.72,
      'faction-002': -0.68,
      'faction-003': -0.75
    }
  },
  {
    id: 'org-018',
    name: 'Minneapolis NAACP',
    type: 'advocacy',
    affiliatedFactionIds: ['faction-003'],
    relatedLocationIds: ['loc-002'],
    documentIds: ['doc-012'],
    factionSentiment: {
      'faction-001': -0.55,
      'faction-002': 0.62,
      'faction-003': 0.78
    }
  },
  {
    id: 'org-019',
    name: 'Minnesota-Wisconsin Baptist Convention',
    type: 'religious',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-002', 'loc-008'],
    factionSentiment: {
      'faction-001': 0.35,
      'faction-004': 0.42
    }
  },
  {
    id: 'org-020',
    name: 'US Congress',
    type: 'government',
    imageUrl: 'img/entities/main/org-020.png',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-009', 'loc-004'],
    documentIds: ['doc-015'],
    factionSentiment: {
      'faction-001': 0.15,
      'faction-002': 0.18
    }
  },
  {
    id: 'org-021',
    name: 'Eighth Circuit Court of Appeals',
    type: 'judicial',
    imageUrl: 'img/entities/main/org-021.png',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-002'],
    factionSentiment: {}
  },
  {
    id: 'org-022',
    name: 'Department of Health and Human Services',
    type: 'government',
    imageUrl: 'img/entities/main/org-022.jpg',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-001'],
    documentIds: ['doc-018', 'doc-020'],
    factionSentiment: {
      'faction-001': 0.52,
      'faction-005': 0.35,
      'faction-006': -0.48
    }
  },
  {
    id: 'org-023',
    name: 'World Resources Institute',
    type: 'research',
    affiliatedFactionIds: ['faction-005'],
    relatedLocationIds: [],
    documentIds: ['doc-019'],
    factionSentiment: {
      'faction-001': -0.42,
      'faction-005': 0.68,
      'faction-006': 0.55
    }
  }
];
