/**
 * Events for China Semiconductor dataset
 */

export const events = [
  {
    id: 'event-001',
    text: 'SMIC announces mass production of 5nm chips',
    date: '2026-01-15T08:00:00Z',
    parentEventId: null,
    subEventIds: ['event-002'],
    locationId: 'loc-001',
    personIds: ['person-001', 'person-002'],
    organizationIds: ['org-001']
  },
  {
    id: 'event-002',
    text: 'Huawei Mate 70 launch confirms SMIC 5nm chip',
    date: '2026-01-18T10:00:00Z',
    parentEventId: 'event-001',
    subEventIds: [],
    locationId: 'loc-001',
    personIds: ['person-011'],
    organizationIds: ['org-001', 'org-010']
  },
  {
    id: 'event-003',
    text: 'Netherlands announces expanded ASML export restrictions',
    date: '2026-01-12T14:00:00Z',
    parentEventId: null,
    subEventIds: ['event-004', 'event-005'],
    locationId: 'loc-005',
    personIds: ['person-007'],
    organizationIds: ['org-002', 'org-004']
  },
  {
    id: 'event-004',
    text: 'ASML Q4 earnings call addresses China revenue impact',
    date: '2026-01-15T16:00:00Z',
    parentEventId: 'event-003',
    subEventIds: [],
    locationId: 'loc-003',
    personIds: ['person-004'],
    organizationIds: ['org-002']
  },
  {
    id: 'event-005',
    text: 'China announces increased funding for SMEE lithography development',
    date: '2026-01-16T09:00:00Z',
    parentEventId: 'event-003',
    subEventIds: [],
    locationId: 'loc-002',
    personIds: ['person-008'],
    organizationIds: ['org-022']
  },
  {
    id: 'event-006',
    text: 'China unveils Big Fund III with 340 billion yuan',
    date: '2026-01-17T10:00:00Z',
    parentEventId: null,
    subEventIds: ['event-007'],
    locationId: 'loc-006',
    personIds: ['person-008', 'person-009'],
    organizationIds: ['org-007']
  },
  {
    id: 'event-007',
    text: 'State Council approves Big Fund III investment guidelines',
    date: '2026-01-18T15:00:00Z',
    parentEventId: 'event-006',
    subEventIds: [],
    locationId: 'loc-006',
    personIds: ['person-010'],
    organizationIds: ['org-009']
  },
  {
    id: 'event-008',
    text: 'Bloomberg reports Huawei equipment stockpile',
    date: '2026-01-15T12:00:00Z',
    parentEventId: null,
    subEventIds: ['event-009'],
    locationId: 'loc-001',
    personIds: ['person-011', 'person-012'],
    organizationIds: ['org-010']
  },
  {
    id: 'event-009',
    text: 'US Commerce Department opens investigation into Huawei equipment purchases',
    date: '2026-01-17T14:00:00Z',
    parentEventId: 'event-008',
    subEventIds: [],
    locationId: 'loc-004',
    personIds: ['person-005'],
    organizationIds: ['org-005', 'org-010']
  },
  {
    id: 'event-010',
    text: 'TechInsights publishes YMTC 232-layer NAND analysis',
    date: '2026-01-16T11:00:00Z',
    parentEventId: null,
    subEventIds: ['event-011'],
    locationId: 'loc-007',
    personIds: ['person-013'],
    organizationIds: ['org-013']
  },
  {
    id: 'event-011',
    text: 'Researchers find YMTC chips in consumer devices',
    date: '2026-01-18T09:00:00Z',
    parentEventId: 'event-010',
    subEventIds: [],
    locationId: 'loc-004',
    personIds: ['person-014'],
    organizationIds: ['org-013', 'org-015']
  },
  {
    id: 'event-012',
    text: 'Empyrean announces EDA tool supporting 14nm designs',
    date: '2026-01-19T10:00:00Z',
    parentEventId: null,
    subEventIds: [],
    locationId: 'loc-002',
    personIds: ['person-015'],
    organizationIds: ['org-016']
  },
  {
    id: 'event-013',
    text: 'TSMC announces Arizona fab production delay',
    date: '2026-01-14T08:00:00Z',
    parentEventId: null,
    subEventIds: ['event-014'],
    locationId: 'loc-009',
    personIds: ['person-017', 'person-018'],
    organizationIds: ['org-020']
  },
  {
    id: 'event-014',
    text: 'Arizona union files grievance against TSMC management practices',
    date: '2026-01-16T14:00:00Z',
    parentEventId: 'event-013',
    subEventIds: [],
    locationId: 'loc-009',
    personIds: ['person-019'],
    organizationIds: ['org-020', 'org-021']
  }
];
