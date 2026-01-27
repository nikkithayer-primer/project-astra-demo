/**
 * Persons and organizations for Walmart Brand dataset
 */

export const persons = [
  // Walmart Leadership
  {
    id: 'person-001',
    name: 'Doug McMillon',
    title: 'President and CEO',
    type: 'corporate_leader',
    affiliatedOrganizationId: 'org-001',
    image: 'img/entities/walmart/person-001.png'
  },
  {
    id: 'person-002',
    name: 'John Furner',
    title: 'President and CEO, Walmart U.S.',
    type: 'corporate_leader',
    affiliatedOrganizationId: 'org-001',
    image: 'img/entities/walmart/person-002.jpg'
  },

  // Labor Advocates
  {
    id: 'person-003',
    name: 'Marc Perrone',
    title: 'President, UFCW International',
    type: 'union_leader',
    affiliatedOrganizationId: 'org-005',
    image: 'img/entities/walmart/person-003.jpg'
  },
  {
    id: 'person-004',
    name: 'Bianca Agustin',
    title: 'Corporate Accountability Director, United for Respect',
    type: 'activist',
    affiliatedOrganizationId: 'org-006',
    image: 'img/placeholders/avatar-default.svg'
  },
  {
    id: 'person-005',
    name: 'Anonymous Walmart Associate',
    title: 'Walmart Employee (TikTok: @walmartworkerlife)',
    type: 'employee',
    affiliatedOrganizationId: 'org-001',
    image: 'img/placeholders/avatar-default.svg'
  },

  // Regulators
  {
    id: 'person-006',
    name: 'Robert Califf',
    title: 'Commissioner, FDA',
    type: 'regulator',
    affiliatedOrganizationId: 'org-007',
    image: 'img/entities/walmart/person-006.jpg'
  },

  // Consumer Advocates
  {
    id: 'person-007',
    name: 'Marta Tellado',
    title: 'President and CEO, Consumer Reports',
    type: 'consumer_advocate',
    affiliatedOrganizationId: 'org-008',
    image: 'img/entities/walmart/person-007.jpg'
  },
  {
    id: 'person-008',
    name: 'Thomas Merton',
    title: 'Lead Attorney, Merton & Associates (Class-Action)',
    type: 'legal',
    affiliatedOrganizationId: 'org-002',
    image: 'img/placeholders/avatar-default.svg'
  },

  // Corporate/Other
  {
    id: 'person-009',
    name: 'Judith McKenna',
    title: 'President and CEO, Walmart International',
    type: 'corporate_leader',
    affiliatedOrganizationId: 'org-001',
    image: 'img/entities/walmart/person-009.png'
  },

  // Analysts
  {
    id: 'person-010',
    name: 'Oliver Chen',
    title: 'Managing Director & Senior Equity Analyst, TD Cowen',
    type: 'analyst',
    affiliatedOrganizationId: 'org-014',
    image: 'img/placeholders/avatar-default.svg'
  },
  {
    id: 'person-011',
    name: 'William Wallace',
    title: 'Manager, Safety Policy, Consumer Reports',
    type: 'consumer_advocate',
    affiliatedOrganizationId: 'org-008',
    image: 'img/placeholders/avatar-default.svg'
  },
  {
    id: 'person-012',
    name: 'Sarah Nassauer',
    title: 'Reporter, Wall Street Journal (Retail)',
    type: 'journalist',
    affiliatedOrganizationId: null,
    image: 'img/placeholders/avatar-default.svg'
  },

  // Competitors
  {
    id: 'person-013',
    name: 'Brian Cornell',
    title: 'Chairman and CEO, Target',
    type: 'competitor_leader',
    affiliatedOrganizationId: 'org-003',
    image: 'img/entities/walmart/person-013.jpg'
  },
  {
    id: 'person-014',
    name: 'Andy Jassy',
    title: 'President and CEO, Amazon',
    type: 'competitor_leader',
    affiliatedOrganizationId: 'org-004',
    image: 'img/entities/walmart/person-014.jpg'
  },
  {
    id: 'person-015',
    name: 'Jason Buechel',
    title: 'CEO, Whole Foods Market',
    type: 'competitor_leader',
    affiliatedOrganizationId: 'org-012',
    image: 'img/placeholders/avatar-default.svg'
  },

  // Rural Community
  {
    id: 'person-016',
    name: 'Mary Johnson',
    title: 'Mayor, Rural Missouri Town',
    type: 'local_official',
    affiliatedOrganizationId: 'org-013',
    image: 'img/placeholders/avatar-default.svg'
  },
  {
    id: 'person-017',
    name: 'Robert Williams',
    title: 'Community Organizer',
    type: 'activist',
    affiliatedOrganizationId: null,
    image: 'img/placeholders/avatar-default.svg'
  }
];

export const organizations = [
  // Walmart
  {
    id: 'org-001',
    name: 'Walmart Inc.',
    type: 'corporation',
    industry: 'Retail',
    image: 'img/entities/walmart/org-001.svg'
  },

  // Legal
  {
    id: 'org-002',
    name: 'Merton & Associates',
    type: 'law_firm',
    industry: 'Legal',
    image: 'img/placeholders/avatar-default.svg'
  },

  // Competitors
  {
    id: 'org-003',
    name: 'Target Corporation',
    type: 'corporation',
    industry: 'Retail',
    image: 'img/entities/walmart/org-003.png'
  },
  {
    id: 'org-004',
    name: 'Amazon.com Inc.',
    type: 'corporation',
    industry: 'Retail/Technology',
    image: 'img/entities/walmart/org-004.png'
  },

  // Labor
  {
    id: 'org-005',
    name: 'United Food and Commercial Workers International Union (UFCW)',
    type: 'union',
    industry: 'Labor',
    image: 'img/entities/walmart/org-005.svg'
  },
  {
    id: 'org-006',
    name: 'United for Respect',
    type: 'nonprofit',
    industry: 'Labor Advocacy',
    image: 'img/entities/walmart/org-006.png'
  },

  // Regulators
  {
    id: 'org-007',
    name: 'U.S. Food and Drug Administration (FDA)',
    type: 'government',
    industry: 'Regulatory',
    image: 'img/placeholders/avatar-default.svg'
  },

  // Consumer Advocacy
  {
    id: 'org-008',
    name: 'Consumer Reports',
    type: 'nonprofit',
    industry: 'Consumer Advocacy',
    image: 'img/entities/walmart/org-008.png'
  },
  {
    id: 'org-009',
    name: 'Center for Science in the Public Interest',
    type: 'nonprofit',
    industry: 'Consumer Advocacy',
    image: 'img/entities/walmart/org-009.svg'
  },

  // Competitors (additional)
  {
    id: 'org-010',
    name: 'Aldi US',
    type: 'corporation',
    industry: 'Retail',
    image: 'img/entities/walmart/org-010.png'
  },
  {
    id: 'org-011',
    name: 'Costco Wholesale',
    type: 'corporation',
    industry: 'Retail',
    image: 'img/entities/walmart/org-011.png'
  },
  {
    id: 'org-012',
    name: 'Whole Foods Market',
    type: 'corporation',
    industry: 'Retail',
    image: 'img/placeholders/avatar-default.svg'
  },

  // Local Government
  {
    id: 'org-013',
    name: 'Rural Missouri Municipal Government',
    type: 'government',
    industry: 'Local Government',
    image: 'img/placeholders/avatar-default.svg'
  },

  // Financial/Analysis
  {
    id: 'org-014',
    name: 'TD Cowen',
    type: 'corporation',
    industry: 'Financial Services',
    image: 'img/placeholders/avatar-default.svg'
  },
  {
    id: 'org-015',
    name: 'Retail Dive',
    type: 'media',
    industry: 'Trade Media',
    image: 'img/placeholders/avatar-default.svg'
  }
];
