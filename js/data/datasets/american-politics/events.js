/**
 * Events for American Politics dataset
 */

export const events = [
  {
    id: 'event-001',
    text: 'Biden press conference gaffe',
    date: '2024-01-05T14:00:00Z',
    parentEventId: null,
    subEventIds: [],
    locationId: 'loc-001',
    personIds: ['person-001'],
    organizationIds: []
  },
  {
    id: 'event-006',
    text: 'Macron criticizes Trump foreign policy at Davos',
    date: '2026-01-20T10:00:00Z',
    parentEventId: null,
    subEventIds: [],
    locationId: 'loc-005',
    personIds: ['person-004', 'person-003'],
    organizationIds: ['org-009']
  },
  {
    id: 'event-007',
    text: 'Trump shares private diplomatic messages on social media',
    date: '2026-01-20T11:30:00Z',
    parentEventId: null,
    subEventIds: [],
    locationId: 'loc-001',
    personIds: ['person-003', 'person-004'],
    organizationIds: []
  },
  {
    id: 'event-008',
    text: 'Greenland PM calls for respect of world order',
    date: '2026-01-20T12:00:00Z',
    parentEventId: null,
    subEventIds: [],
    locationId: 'loc-006',
    personIds: ['person-006'],
    organizationIds: []
  },
  {
    id: 'event-009',
    text: 'Von der Leyen calls for European independence',
    date: '2026-01-20T13:00:00Z',
    parentEventId: null,
    subEventIds: [],
    locationId: 'loc-005',
    personIds: ['person-005'],
    organizationIds: ['org-008']
  },
  {
    id: 'event-010',
    text: 'DOJ plans subpoenas for Minnesota officials',
    date: '2026-01-20T12:00:00Z',
    parentEventId: null,
    subEventIds: [],
    locationId: 'loc-002',
    personIds: ['person-007'],
    organizationIds: ['org-010']
  },
  {
    id: 'event-011',
    text: 'DOJ appeals ruling restricting federal agents in Minnesota',
    date: '2026-01-20T10:00:00Z',
    parentEventId: null,
    subEventIds: [],
    locationId: 'loc-002',
    personIds: [],
    organizationIds: ['org-010', 'org-011']
  },
  {
    id: 'event-012',
    text: 'DOJ investigates church protest interruption',
    date: '2026-01-19T11:00:00Z',
    parentEventId: null,
    subEventIds: [],
    locationId: 'loc-002',
    personIds: [],
    organizationIds: ['org-010', 'org-011']
  },
  {
    id: 'event-013',
    text: 'Protester Renee Good fatally shot by ICE agent',
    date: '2026-01-15T00:00:00Z',
    parentEventId: null,
    subEventIds: ['event-014'],
    locationId: 'loc-002',
    personIds: ['person-008'],
    organizationIds: ['org-011']
  },
  {
    id: 'event-014',
    text: 'FBI investigation pivots from agent to victim and her widow',
    date: '2026-01-18T00:00:00Z',
    parentEventId: 'event-013',
    subEventIds: [],
    locationId: 'loc-002',
    personIds: ['person-008'],
    organizationIds: ['org-012']
  },
  {
    id: 'event-015',
    text: 'Indiana Judge Steven Meyer and wife shot at home',
    date: '2026-01-19T15:00:00Z',
    parentEventId: null,
    subEventIds: ['event-016'],
    locationId: 'loc-007',
    personIds: ['person-009', 'person-010'],
    organizationIds: ['org-013', 'org-015']
  },
  {
    id: 'event-016',
    text: 'Indiana Supreme Court Chief Justice urges judges to remain vigilant',
    date: '2026-01-20T10:00:00Z',
    parentEventId: 'event-015',
    subEventIds: [],
    locationId: 'loc-007',
    personIds: ['person-011'],
    organizationIds: ['org-014']
  },
  {
    id: 'event-017',
    text: 'Protesters disrupt Cities Church service targeting ICE official pastor',
    date: '2026-01-19T10:00:00Z',
    parentEventId: null,
    subEventIds: ['event-018', 'event-019', 'event-020'],
    locationId: 'loc-008',
    personIds: ['person-014', 'person-015', 'person-016'],
    organizationIds: ['org-016', 'org-011']
  },
  {
    id: 'event-018',
    text: 'DOJ announces FACE Act investigation into church protest',
    date: '2026-01-19T18:00:00Z',
    parentEventId: 'event-017',
    subEventIds: [],
    locationId: 'loc-001',
    personIds: ['person-012', 'person-013'],
    organizationIds: ['org-010']
  },
  {
    id: 'event-019',
    text: 'DOJ threatens charges against journalist Don Lemon',
    date: '2026-01-20T12:00:00Z',
    parentEventId: 'event-017',
    subEventIds: [],
    locationId: 'loc-001',
    personIds: ['person-012', 'person-016'],
    organizationIds: ['org-010']
  },
  {
    id: 'event-020',
    text: 'Trump calls protesters agitators and insurrectionists',
    date: '2026-01-21T06:00:00Z',
    parentEventId: 'event-017',
    subEventIds: [],
    locationId: 'loc-001',
    personIds: ['person-003'],
    organizationIds: []
  },
  {
    id: 'event-021',
    text: 'DHS blocks Minnesota lawmakers from ICE detention facility inspection',
    date: '2026-01-10T14:00:00Z',
    parentEventId: null,
    subEventIds: ['event-022'],
    locationId: 'loc-002',
    personIds: ['person-021', 'person-022', 'person-023'],
    organizationIds: ['org-017', 'org-011', 'org-020']
  },
  {
    id: 'event-022',
    text: 'Judge Cobb allows DHS to require week notice for facility inspections',
    date: '2026-01-20T12:00:00Z',
    parentEventId: 'event-021',
    subEventIds: [],
    locationId: 'loc-009',
    personIds: ['person-025', 'person-024'],
    organizationIds: ['org-017']
  },
  {
    id: 'event-023',
    text: 'DOJ calls Minnesota lawsuit an absurdity',
    date: '2026-01-20T15:00:00Z',
    parentEventId: null,
    subEventIds: [],
    locationId: 'loc-002',
    personIds: ['person-007', 'person-017'],
    organizationIds: ['org-010']
  },
  {
    id: 'event-024',
    text: 'DOJ appeals Menendez injunction to Eighth Circuit',
    date: '2026-01-20T16:00:00Z',
    parentEventId: null,
    subEventIds: [],
    locationId: 'loc-002',
    personIds: ['person-017'],
    organizationIds: ['org-010', 'org-021']
  },
  {
    id: 'event-025',
    text: 'Noem backtracks on pepper spray denial',
    date: '2026-01-19T18:00:00Z',
    parentEventId: null,
    subEventIds: [],
    locationId: 'loc-001',
    personIds: ['person-018'],
    organizationIds: ['org-017']
  },
  {
    id: 'event-026',
    text: 'RFK Jr releases meat-heavy dietary guidelines',
    date: '2026-01-18T00:00:00Z',
    parentEventId: null,
    subEventIds: [],
    locationId: 'loc-001',
    personIds: ['person-026'],
    organizationIds: ['org-022']
  }
];
