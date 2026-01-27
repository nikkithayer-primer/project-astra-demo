/**
 * Events for Walmart Brand dataset
 */

export const events = [
  {
    id: 'event-001',
    text: 'Viral TikTok shows customer detained at self-checkout over misunderstanding',
    date: '2026-01-14T15:30:00Z',
    parentEventId: null,
    subEventIds: ['event-002'],
    locationId: 'loc-002',
    personIds: [],
    organizationIds: ['org-001']
  },
  {
    id: 'event-002',
    text: 'Class-action lawsuit filed against Walmart in Texas federal court',
    date: '2026-01-18T10:00:00Z',
    parentEventId: 'event-001',
    subEventIds: [],
    locationId: 'loc-002',
    personIds: ['person-008'],
    organizationIds: ['org-001', 'org-002']
  },
  {
    id: 'event-003',
    text: 'Walmart announces plan to add staffed checkout lanes in 500 stores',
    date: '2026-01-19T14:00:00Z',
    parentEventId: null,
    subEventIds: [],
    locationId: 'loc-001',
    personIds: ['person-001', 'person-002'],
    organizationIds: ['org-001']
  },
  {
    id: 'event-004',
    text: 'Customer posts photos of empty grocery aisles, goes viral',
    date: '2026-01-15T12:00:00Z',
    parentEventId: null,
    subEventIds: [],
    locationId: 'loc-004',
    personIds: [],
    organizationIds: ['org-001']
  },
  {
    id: 'event-005',
    text: 'Retail Dive publishes analysis of Walmart inventory management issues',
    date: '2026-01-17T09:00:00Z',
    parentEventId: null,
    subEventIds: [],
    locationId: null,
    personIds: ['person-010'],
    organizationIds: ['org-001', 'org-015']
  },
  {
    id: 'event-006',
    text: 'Employee TikTok video showing understaffed store gets 5M views',
    date: '2026-01-13T18:00:00Z',
    parentEventId: null,
    subEventIds: ['event-007'],
    locationId: null,
    personIds: [],
    organizationIds: ['org-001']
  },
  {
    id: 'event-007',
    text: 'UFCW launches #RespectWalmartWorkers campaign',
    date: '2026-01-15T11:00:00Z',
    parentEventId: 'event-006',
    subEventIds: [],
    locationId: 'loc-006',
    personIds: ['person-003', 'person-004'],
    organizationIds: ['org-005']
  },
  {
    id: 'event-008',
    text: 'FDA announces initial recall of Great Value frozen vegetables',
    date: '2026-01-16T10:00:00Z',
    parentEventId: null,
    subEventIds: ['event-009', 'event-010'],
    locationId: 'loc-007',
    personIds: ['person-006'],
    organizationIds: ['org-001', 'org-007']
  },
  {
    id: 'event-009',
    text: 'FDA expands Great Value recall to 15 products',
    date: '2026-01-18T14:00:00Z',
    parentEventId: 'event-008',
    subEventIds: [],
    locationId: 'loc-007',
    personIds: ['person-006'],
    organizationIds: ['org-001', 'org-007']
  },
  {
    id: 'event-010',
    text: 'Consumer Reports calls for stricter private-label quality controls',
    date: '2026-01-19T09:00:00Z',
    parentEventId: 'event-008',
    subEventIds: [],
    locationId: null,
    personIds: ['person-007', 'person-011'],
    organizationIds: ['org-008']
  },
  {
    id: 'event-011',
    text: 'WSJ publishes analysis of Walmart price retention after pandemic',
    date: '2026-01-17T06:00:00Z',
    parentEventId: null,
    subEventIds: [],
    locationId: null,
    personIds: ['person-012'],
    organizationIds: ['org-001']
  },
  {
    id: 'event-012',
    text: 'Target announces 98% on-time delivery achievement',
    date: '2026-01-14T08:00:00Z',
    parentEventId: null,
    subEventIds: [],
    locationId: null,
    personIds: ['person-013'],
    organizationIds: ['org-003']
  },
  {
    id: 'event-013',
    text: 'Amazon expands sub-24-hour delivery coverage to 85% of US',
    date: '2026-01-16T10:00:00Z',
    parentEventId: null,
    subEventIds: [],
    locationId: 'loc-008',
    personIds: ['person-014'],
    organizationIds: ['org-004']
  },
  {
    id: 'event-014',
    text: 'Rural Missouri town holds protest against Walmart store closure',
    date: '2026-01-19T14:00:00Z',
    parentEventId: null,
    subEventIds: [],
    locationId: 'loc-009',
    personIds: ['person-016', 'person-017'],
    organizationIds: ['org-001', 'org-013']
  }
];
