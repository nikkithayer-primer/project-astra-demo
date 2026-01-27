/**
 * Persons and organizations for Walmart Brand dataset
 */

export const persons = [
  // Walmart Leadership
  {
    id: 'person-001',
    name: 'Doug McMillon',
    type: 'executive',
    affiliatedOrganizationId: 'org-001',
    imageUrl: 'img/entities/walmart/person-001.png',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-001'],
    relatedEventIds: ['event-003'],
    documentIds: ['doc-004', 'doc-011', 'doc-023'],
    factionSentiment: {
      'faction-001': -0.72,
      'faction-002': -0.45,
      'faction-003': -0.68,
      'faction-004': -0.35,
      'faction-005': 0.42,
      'faction-006': -0.25
    }
  },
  {
    id: 'person-002',
    name: 'John Furner',
    type: 'executive',
    affiliatedOrganizationId: 'org-001',
    imageUrl: 'img/entities/walmart/person-002.jpg',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-001'],
    relatedEventIds: ['event-003'],
    documentIds: ['doc-004'],
    factionSentiment: {
      'faction-001': -0.55,
      'faction-002': -0.38,
      'faction-003': -0.52,
      'faction-004': -0.28,
      'faction-005': 0.35,
      'faction-006': -0.18
    }
  },

  // Labor Advocates
  {
    id: 'person-003',
    name: 'Marc Perrone',
    type: 'labor_leader',
    affiliatedOrganizationId: 'org-005',
    imageUrl: 'img/entities/walmart/person-003.jpg',
    affiliatedFactionIds: ['faction-003'],
    relatedLocationIds: ['loc-006'],
    relatedEventIds: ['event-007'],
    documentIds: ['doc-010'],
    factionSentiment: {
      'faction-001': 0.25,
      'faction-002': 0.85,
      'faction-003': 0.92,
      'faction-004': 0.45,
      'faction-005': 0.15,
      'faction-006': 0.10
    }
  },
  {
    id: 'person-004',
    name: 'Bianca Agustin',
    type: 'activist',
    affiliatedOrganizationId: 'org-006',
    imageUrl: 'img/placeholders/avatar-default.svg',
    affiliatedFactionIds: ['faction-003'],
    relatedLocationIds: ['loc-006'],
    relatedEventIds: ['event-007'],
    documentIds: ['doc-010'],
    factionSentiment: {
      'faction-001': 0.35,
      'faction-002': 0.78,
      'faction-003': 0.88,
      'faction-004': 0.55,
      'faction-005': 0.08,
      'faction-006': 0.12
    }
  },
  {
    id: 'person-005',
    name: 'Anonymous Walmart Associate',
    type: 'employee',
    affiliatedOrganizationId: 'org-001',
    imageUrl: 'img/placeholders/avatar-default.svg',
    affiliatedFactionIds: ['faction-002'],
    relatedLocationIds: [],
    relatedEventIds: ['event-006'],
    documentIds: ['doc-008'],
    factionSentiment: {
      'faction-001': 0.55,
      'faction-002': 0.95,
      'faction-003': 0.72,
      'faction-004': 0.35,
      'faction-005': -0.05,
      'faction-006': 0.15
    }
  },

  // Regulators
  {
    id: 'person-006',
    name: 'Robert Califf',
    type: 'government_official',
    affiliatedOrganizationId: 'org-007',
    imageUrl: 'img/entities/walmart/person-006.jpg',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-007'],
    relatedEventIds: ['event-008', 'event-009'],
    documentIds: ['doc-012', 'doc-013'],
    factionSentiment: {
      'faction-001': 0.15,
      'faction-002': 0.10,
      'faction-003': 0.05,
      'faction-004': 0.68,
      'faction-005': 0.25,
      'faction-006': 0.02
    }
  },

  // Consumer Advocates
  {
    id: 'person-007',
    name: 'Marta Tellado',
    type: 'activist',
    affiliatedOrganizationId: 'org-008',
    imageUrl: 'img/entities/walmart/person-007.jpg',
    affiliatedFactionIds: ['faction-004'],
    relatedLocationIds: [],
    relatedEventIds: ['event-010'],
    documentIds: ['doc-014'],
    factionSentiment: {
      'faction-001': 0.72,
      'faction-002': 0.45,
      'faction-003': 0.58,
      'faction-004': 0.95,
      'faction-005': 0.32,
      'faction-006': 0.18
    }
  },
  {
    id: 'person-008',
    name: 'Thomas Merton',
    type: 'legal_professional',
    affiliatedOrganizationId: 'org-002',
    imageUrl: 'img/placeholders/avatar-default.svg',
    affiliatedFactionIds: ['faction-001'],
    relatedLocationIds: ['loc-002', 'loc-003'],
    relatedEventIds: ['event-002'],
    documentIds: ['doc-003'],
    factionSentiment: {
      'faction-001': 0.88,
      'faction-002': 0.35,
      'faction-003': 0.42,
      'faction-004': 0.65,
      'faction-005': 0.22,
      'faction-006': 0.08
    }
  },

  // Corporate/Other
  {
    id: 'person-009',
    name: 'Judith McKenna',
    type: 'executive',
    affiliatedOrganizationId: 'org-001',
    imageUrl: 'img/entities/walmart/person-009.png',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-001'],
    relatedEventIds: [],
    documentIds: [],
    factionSentiment: {
      'faction-001': -0.48,
      'faction-002': -0.32,
      'faction-003': -0.45,
      'faction-004': -0.22,
      'faction-005': 0.38,
      'faction-006': -0.15
    }
  },

  // Analysts
  {
    id: 'person-010',
    name: 'Oliver Chen',
    type: 'analyst',
    affiliatedOrganizationId: 'org-014',
    imageUrl: 'img/placeholders/avatar-default.svg',
    affiliatedFactionIds: ['faction-005'],
    relatedLocationIds: [],
    relatedEventIds: ['event-005'],
    documentIds: ['doc-007'],
    factionSentiment: {
      'faction-001': 0.10,
      'faction-002': 0.08,
      'faction-003': 0.05,
      'faction-004': 0.12,
      'faction-005': 0.85,
      'faction-006': 0.15
    }
  },
  {
    id: 'person-011',
    name: 'William Wallace',
    type: 'activist',
    affiliatedOrganizationId: 'org-008',
    imageUrl: 'img/placeholders/avatar-default.svg',
    affiliatedFactionIds: ['faction-004'],
    relatedLocationIds: [],
    relatedEventIds: ['event-010'],
    documentIds: ['doc-014'],
    factionSentiment: {
      'faction-001': 0.65,
      'faction-002': 0.38,
      'faction-003': 0.48,
      'faction-004': 0.92,
      'faction-005': 0.28,
      'faction-006': 0.12
    }
  },
  {
    id: 'person-012',
    name: 'Sarah Nassauer',
    type: 'journalist',
    affiliatedOrganizationId: null,
    imageUrl: 'img/placeholders/avatar-default.svg',
    affiliatedFactionIds: ['faction-005'],
    relatedLocationIds: [],
    relatedEventIds: ['event-011'],
    documentIds: ['doc-017'],
    factionSentiment: {
      'faction-001': 0.15,
      'faction-002': 0.12,
      'faction-003': 0.08,
      'faction-004': 0.18,
      'faction-005': 0.78,
      'faction-006': 0.10
    }
  },

  // Competitors
  {
    id: 'person-013',
    name: 'Brian Cornell',
    type: 'executive',
    affiliatedOrganizationId: 'org-003',
    imageUrl: 'img/entities/walmart/person-013.jpg',
    affiliatedFactionIds: ['faction-006'],
    relatedLocationIds: [],
    relatedEventIds: ['event-012'],
    documentIds: ['doc-018'],
    factionSentiment: {
      'faction-001': 0.05,
      'faction-002': -0.02,
      'faction-003': 0.02,
      'faction-004': 0.08,
      'faction-005': 0.45,
      'faction-006': 0.82
    }
  },
  {
    id: 'person-014',
    name: 'Andy Jassy',
    type: 'executive',
    affiliatedOrganizationId: 'org-004',
    imageUrl: 'img/entities/walmart/person-014.jpg',
    affiliatedFactionIds: ['faction-006'],
    relatedLocationIds: ['loc-008'],
    relatedEventIds: ['event-013'],
    documentIds: ['doc-019'],
    factionSentiment: {
      'faction-001': 0.08,
      'faction-002': -0.05,
      'faction-003': 0.00,
      'faction-004': 0.05,
      'faction-005': 0.52,
      'faction-006': 0.88
    }
  },
  {
    id: 'person-015',
    name: 'Jason Buechel',
    type: 'executive',
    affiliatedOrganizationId: 'org-012',
    imageUrl: 'img/placeholders/avatar-default.svg',
    affiliatedFactionIds: ['faction-006'],
    relatedLocationIds: [],
    relatedEventIds: [],
    documentIds: [],
    factionSentiment: {
      'faction-001': 0.02,
      'faction-002': 0.00,
      'faction-003': 0.05,
      'faction-004': 0.12,
      'faction-005': 0.38,
      'faction-006': 0.75
    }
  },

  // Rural Community
  {
    id: 'person-016',
    name: 'Mary Johnson',
    type: 'politician',
    affiliatedOrganizationId: 'org-013',
    imageUrl: 'img/placeholders/avatar-default.svg',
    affiliatedFactionIds: ['faction-001'],
    relatedLocationIds: ['loc-009'],
    relatedEventIds: ['event-014'],
    documentIds: ['doc-021', 'doc-023'],
    factionSentiment: {
      'faction-001': 0.78,
      'faction-002': 0.55,
      'faction-003': 0.48,
      'faction-004': 0.42,
      'faction-005': 0.18,
      'faction-006': 0.10
    }
  },
  {
    id: 'person-017',
    name: 'Robert Williams',
    type: 'activist',
    affiliatedOrganizationId: null,
    imageUrl: 'img/placeholders/avatar-default.svg',
    affiliatedFactionIds: ['faction-001'],
    relatedLocationIds: ['loc-009'],
    relatedEventIds: ['event-014'],
    documentIds: ['doc-022'],
    factionSentiment: {
      'faction-001': 0.85,
      'faction-002': 0.42,
      'faction-003': 0.38,
      'faction-004': 0.35,
      'faction-005': 0.12,
      'faction-006': 0.05
    }
  }
];

export const organizations = [
  // Walmart
  {
    id: 'org-001',
    name: 'Walmart Inc.',
    type: 'corporation',
    imageUrl: 'img/entities/walmart/org-001.svg',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-001', 'loc-002', 'loc-003', 'loc-004', 'loc-005'],
    documentIds: ['doc-001', 'doc-002', 'doc-003', 'doc-004', 'doc-005', 'doc-006', 'doc-008', 'doc-011', 'doc-012', 'doc-015', 'doc-017', 'doc-021'],
    factionSentiment: {
      'faction-001': -0.75,
      'faction-002': -0.68,
      'faction-003': -0.72,
      'faction-004': -0.58,
      'faction-005': 0.35,
      'faction-006': -0.42
    }
  },

  // Legal
  {
    id: 'org-002',
    name: 'Merton & Associates',
    type: 'corporation',
    imageUrl: 'img/placeholders/avatar-default.svg',
    affiliatedFactionIds: ['faction-001'],
    relatedLocationIds: ['loc-002', 'loc-003'],
    documentIds: ['doc-003'],
    factionSentiment: {
      'faction-001': 0.65,
      'faction-004': 0.48
    }
  },

  // Competitors
  {
    id: 'org-003',
    name: 'Target Corporation',
    type: 'corporation',
    imageUrl: 'img/entities/walmart/org-003.png',
    affiliatedFactionIds: ['faction-006'],
    relatedLocationIds: [],
    documentIds: ['doc-018'],
    factionSentiment: {
      'faction-001': 0.15,
      'faction-005': 0.52,
      'faction-006': 0.68
    }
  },
  {
    id: 'org-004',
    name: 'Amazon.com Inc.',
    type: 'corporation',
    imageUrl: 'img/entities/walmart/org-004.png',
    affiliatedFactionIds: ['faction-006'],
    relatedLocationIds: ['loc-008'],
    documentIds: ['doc-019', 'doc-020'],
    factionSentiment: {
      'faction-001': 0.12,
      'faction-005': 0.48,
      'faction-006': 0.72
    }
  },

  // Labor
  {
    id: 'org-005',
    name: 'United Food and Commercial Workers International Union (UFCW)',
    type: 'union',
    imageUrl: 'img/entities/walmart/org-005.svg',
    affiliatedFactionIds: ['faction-002', 'faction-003'],
    relatedLocationIds: ['loc-006'],
    documentIds: ['doc-009', 'doc-010'],
    factionSentiment: {
      'faction-001': 0.25,
      'faction-002': 0.82,
      'faction-003': 0.88,
      'faction-004': 0.35
    }
  },
  {
    id: 'org-006',
    name: 'United for Respect',
    type: 'nonprofit',
    imageUrl: 'img/entities/walmart/org-006.png',
    affiliatedFactionIds: ['faction-003'],
    relatedLocationIds: ['loc-006'],
    documentIds: ['doc-010'],
    factionSentiment: {
      'faction-002': 0.75,
      'faction-003': 0.85,
      'faction-004': 0.42
    }
  },

  // Regulators
  {
    id: 'org-007',
    name: 'U.S. Food and Drug Administration (FDA)',
    type: 'government',
    imageUrl: 'img/placeholders/avatar-default.svg',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-007'],
    documentIds: ['doc-012', 'doc-013'],
    factionSentiment: {
      'faction-001': -0.15,
      'faction-004': 0.55
    }
  },

  // Consumer Advocacy
  {
    id: 'org-008',
    name: 'Consumer Reports',
    type: 'nonprofit',
    imageUrl: 'img/entities/walmart/org-008.png',
    affiliatedFactionIds: ['faction-004'],
    relatedLocationIds: [],
    documentIds: ['doc-014'],
    factionSentiment: {
      'faction-001': 0.55,
      'faction-004': 0.85,
      'faction-005': 0.42
    }
  },
  {
    id: 'org-009',
    name: 'Center for Science in the Public Interest',
    type: 'nonprofit',
    imageUrl: 'img/entities/walmart/org-009.svg',
    affiliatedFactionIds: ['faction-004'],
    relatedLocationIds: [],
    documentIds: [],
    factionSentiment: {
      'faction-001': 0.48,
      'faction-004': 0.78
    }
  },

  // Competitors (additional)
  {
    id: 'org-010',
    name: 'Aldi US',
    type: 'corporation',
    imageUrl: 'img/entities/walmart/org-010.png',
    affiliatedFactionIds: ['faction-006'],
    relatedLocationIds: ['loc-009'],
    documentIds: ['doc-015', 'doc-016'],
    factionSentiment: {
      'faction-001': 0.22,
      'faction-006': 0.62
    }
  },
  {
    id: 'org-011',
    name: 'Costco Wholesale',
    type: 'corporation',
    imageUrl: 'img/entities/walmart/org-011.png',
    affiliatedFactionIds: ['faction-006'],
    relatedLocationIds: [],
    documentIds: [],
    factionSentiment: {
      'faction-001': 0.18,
      'faction-006': 0.58
    }
  },
  {
    id: 'org-012',
    name: 'Whole Foods Market',
    type: 'corporation',
    imageUrl: 'img/placeholders/avatar-default.svg',
    affiliatedFactionIds: ['faction-006'],
    relatedLocationIds: [],
    documentIds: [],
    factionSentiment: {
      'faction-006': 0.52
    }
  },

  // Local Government
  {
    id: 'org-013',
    name: 'Rural Missouri Municipal Government',
    type: 'government',
    imageUrl: 'img/placeholders/avatar-default.svg',
    affiliatedFactionIds: [],
    relatedLocationIds: ['loc-010'],
    documentIds: ['doc-021', 'doc-022', 'doc-023'],
    factionSentiment: {
      'faction-001': 0.35,
      'faction-004': 0.42
    }
  },

  // Financial/Analysis
  {
    id: 'org-014',
    name: 'TD Cowen',
    type: 'corporation',
    imageUrl: 'img/placeholders/avatar-default.svg',
    affiliatedFactionIds: ['faction-005'],
    relatedLocationIds: [],
    documentIds: [],
    factionSentiment: {
      'faction-005': 0.65
    }
  },
  {
    id: 'org-015',
    name: 'Retail Dive',
    type: 'media',
    imageUrl: 'img/placeholders/avatar-default.svg',
    affiliatedFactionIds: ['faction-005'],
    relatedLocationIds: [],
    documentIds: ['doc-007'],
    factionSentiment: {
      'faction-005': 0.58
    }
  }
];
