/**
 * Search filters for AFRICOM Threat Analysis dataset
 */

export const searchFilters = [
  {
    id: 'filter-001',
    name: 'Al-Shabaab Network',
    description: 'Al-Shabaab leadership, operatives, and affiliated entities',
    scope: {
      mode: 'simple',
      personIds: ['person-001', 'person-007', 'person-008'],
      organizationIds: ['org-001'],
      factionIds: [],
      locationIds: ['loc-001', 'loc-002', 'loc-003'],
      eventIds: [],
      keywords: []
    },
    createdAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'filter-002',
    name: 'Sahel VEOs',
    description: 'JNIM, ISCGS, and related organizations in the Sahel region',
    scope: {
      mode: 'simple',
      personIds: ['person-003', 'person-006'],
      organizationIds: ['org-003', 'org-005', 'org-007'],
      factionIds: [],
      locationIds: ['loc-007', 'loc-008', 'loc-009'],
      eventIds: [],
      keywords: []
    },
    createdAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'filter-003',
    name: 'Terror Financing',
    description: 'Financial networks, facilitators, and sanctions actions',
    scope: {
      mode: 'simple',
      personIds: ['person-006', 'person-007'],
      organizationIds: [],
      factionIds: [],
      locationIds: [],
      eventIds: [],
      keywords: ['hawala', 'financing', 'gold mining', 'ransom', 'OFAC', 'sanctions', 'charcoal']
    },
    createdAt: '2026-01-20T14:00:00Z'
  },
  {
    id: 'filter-004',
    name: 'African VEO Keywords',
    description: 'Comprehensive boolean filter for Africa-focused violent extremist organizations',
    scope: {
      mode: 'advanced',
      booleanExpression: '("Al-Shabaab" OR "Ash-Shabaab" OR "Hizbul Shabaab" OR "Harakat al-Shabaab" OR "Ahmad Umar" OR "Abu Ubaidah") OR ("Boko Haram" OR "ISWAP" OR "Islamic State West Africa" OR "Abu Musab al-Barnawi" OR "Jama\'atu Ahlis Sunna") OR ("JNIM" OR "Jama\'at Nusrat al-Islam" OR "Iyad ag Ghali" OR "Ansar Dine" OR "Macina Liberation Front" OR "al-Mourabitoun") OR ("ISCGS" OR "Islamic State in the Greater Sahara") OR ("AQIM" OR "al-Qaeda in the Islamic Maghreb") OR ("ISIS-Mozambique" OR "Ahlu Sunnah Wa-Jama" OR "Ansar al-Sunna" AND "Mozambique")',
      entityMap: {},
      personIds: [],
      organizationIds: [],
      factionIds: [],
      locationIds: [],
      eventIds: [],
      keywords: []
    },
    createdAt: '2026-01-20T14:30:00Z'
  }
];
