/**
 * Persons and organizations for Walmart Brand dataset
 */

export const persons = [
  // Walmart Leadership
  {
    id: 'person-001',
    name: 'Doug McMillon',
    type: 'corporate_leader',
    affiliatedOrganizationId: 'org-001',
    imageUrl: 'img/entities/walmart/person-001.png',
    affiliatedFactionIds: [],
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
    type: 'corporate_leader',
    affiliatedOrganizationId: 'org-001',
    imageUrl: 'img/entities/walmart/person-002.jpg',
    affiliatedFactionIds: [],
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
    type: 'union_leader',
    affiliatedOrganizationId: 'org-005',
    imageUrl: 'img/entities/walmart/person-003.jpg',
    affiliatedFactionIds: ['faction-003'],
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
    type: 'regulator',
    affiliatedOrganizationId: 'org-007',
    imageUrl: 'img/entities/walmart/person-006.jpg',
    affiliatedFactionIds: [],
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
    type: 'consumer_advocate',
    affiliatedOrganizationId: 'org-008',
    imageUrl: 'img/entities/walmart/person-007.jpg',
    affiliatedFactionIds: ['faction-004'],
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
    type: 'legal',
    affiliatedOrganizationId: 'org-002',
    imageUrl: 'img/placeholders/avatar-default.svg',
    affiliatedFactionIds: ['faction-001'],
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
    type: 'corporate_leader',
    affiliatedOrganizationId: 'org-001',
    imageUrl: 'img/entities/walmart/person-009.png',
    affiliatedFactionIds: [],
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
    type: 'consumer_advocate',
    affiliatedOrganizationId: 'org-008',
    imageUrl: 'img/placeholders/avatar-default.svg',
    affiliatedFactionIds: ['faction-004'],
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
    type: 'competitor_leader',
    affiliatedOrganizationId: 'org-003',
    imageUrl: 'img/entities/walmart/person-013.jpg',
    affiliatedFactionIds: ['faction-006'],
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
    type: 'competitor_leader',
    affiliatedOrganizationId: 'org-004',
    imageUrl: 'img/entities/walmart/person-014.jpg',
    affiliatedFactionIds: ['faction-006'],
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
    type: 'competitor_leader',
    affiliatedOrganizationId: 'org-012',
    imageUrl: 'img/placeholders/avatar-default.svg',
    affiliatedFactionIds: ['faction-006'],
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
    type: 'local_official',
    affiliatedOrganizationId: 'org-013',
    imageUrl: 'img/placeholders/avatar-default.svg',
    affiliatedFactionIds: ['faction-001'],
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
    imageUrl: 'img/entities/walmart/org-001.svg'
  },

  // Legal
  {
    id: 'org-002',
    name: 'Merton & Associates',
    type: 'law_firm',
    imageUrl: 'img/placeholders/avatar-default.svg'
  },

  // Competitors
  {
    id: 'org-003',
    name: 'Target Corporation',
    type: 'corporation',
    imageUrl: 'img/entities/walmart/org-003.png'
  },
  {
    id: 'org-004',
    name: 'Amazon.com Inc.',
    type: 'corporation',
    imageUrl: 'img/entities/walmart/org-004.png'
  },

  // Labor
  {
    id: 'org-005',
    name: 'United Food and Commercial Workers International Union (UFCW)',
    type: 'union',
    imageUrl: 'img/entities/walmart/org-005.svg'
  },
  {
    id: 'org-006',
    name: 'United for Respect',
    type: 'nonprofit',
    imageUrl: 'img/entities/walmart/org-006.png'
  },

  // Regulators
  {
    id: 'org-007',
    name: 'U.S. Food and Drug Administration (FDA)',
    type: 'government',
    imageUrl: 'img/placeholders/avatar-default.svg'
  },

  // Consumer Advocacy
  {
    id: 'org-008',
    name: 'Consumer Reports',
    type: 'nonprofit',
    imageUrl: 'img/entities/walmart/org-008.png'
  },
  {
    id: 'org-009',
    name: 'Center for Science in the Public Interest',
    type: 'nonprofit',
    imageUrl: 'img/entities/walmart/org-009.svg'
  },

  // Competitors (additional)
  {
    id: 'org-010',
    name: 'Aldi US',
    type: 'corporation',
    imageUrl: 'img/entities/walmart/org-010.png'
  },
  {
    id: 'org-011',
    name: 'Costco Wholesale',
    type: 'corporation',
    imageUrl: 'img/entities/walmart/org-011.png'
  },
  {
    id: 'org-012',
    name: 'Whole Foods Market',
    type: 'corporation',
    imageUrl: 'img/placeholders/avatar-default.svg'
  },

  // Local Government
  {
    id: 'org-013',
    name: 'Rural Missouri Municipal Government',
    type: 'government',
    imageUrl: 'img/placeholders/avatar-default.svg'
  },

  // Financial/Analysis
  {
    id: 'org-014',
    name: 'TD Cowen',
    type: 'corporation',
    imageUrl: 'img/placeholders/avatar-default.svg'
  },
  {
    id: 'org-015',
    name: 'Retail Dive',
    type: 'media',
    imageUrl: 'img/placeholders/avatar-default.svg'
  }
];
