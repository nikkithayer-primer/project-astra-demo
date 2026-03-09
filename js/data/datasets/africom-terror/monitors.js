/**
 * Monitors and alerts for AFRICOM Threat Analysis dataset
 */

export const monitors = [
  {
    id: 'monitor-001',
    name: 'Al-Shabaab Attack Activity',
    description: 'Track Al-Shabaab attacks, operational planning, and leadership activity in East Africa',
    scope: {
      mode: 'simple',
      organizationIds: ['org-001'],
      personIds: ['person-001', 'person-007'],
      locationIds: ['loc-001', 'loc-003'],
      logic: 'OR'
    },
    options: {
      includeSubEvents: true,
      includeThemes: true,
      includeRelatedEvents: true
    },
    triggers: {
      newNarrative: true,
      newEvent: true,
      volumeSpike: { threshold: 300, timeWindow: '24h' },
      stanceShift: { threshold: 0.15, direction: 'any' },
      factionEngagement: null
    },
    enabled: true,
    createdAt: '2025-12-01T00:00:00Z',
    lastTriggered: '2026-02-10T20:00:00Z'
  },
  {
    id: 'monitor-002',
    name: 'Sahel VEO Expansion',
    description: 'Monitor JNIM, ISCGS, and Boko Haram/ISWAP territorial movements and attacks across the Sahel and West Africa',
    scope: {
      mode: 'simple',
      organizationIds: ['org-002', 'org-003', 'org-004', 'org-005'],
      locationIds: ['loc-007', 'loc-008', 'loc-009'],
      keywords: ['JNIM', 'ISWAP', 'Boko Haram', 'ISCGS', 'Liptako-Gourma'],
      logic: 'OR'
    },
    options: {
      includeSubEvents: true,
      includeThemes: true,
      includeRelatedEvents: true
    },
    triggers: {
      newNarrative: true,
      newEvent: true,
      volumeSpike: { threshold: 250, timeWindow: '24h' },
      stanceShift: { threshold: 0.20, direction: 'any' },
      factionEngagement: null
    },
    enabled: true,
    createdAt: '2025-12-01T00:00:00Z',
    lastTriggered: '2026-02-05T18:00:00Z'
  },
  {
    id: 'monitor-003',
    name: 'Terror Financing Networks',
    description: 'Track financing activity including hawala transfers, gold mining revenue, kidnapping ransoms, and sanctions actions',
    scope: {
      mode: 'simple',
      personIds: ['person-006', 'person-007'],
      keywords: ['hawala', 'financing', 'gold mining', 'ransom', 'OFAC', 'sanctions', 'charcoal'],
      logic: 'OR'
    },
    options: {
      includeSubEvents: true,
      includeThemes: true,
      includeRelatedEvents: true
    },
    triggers: {
      newNarrative: true,
      newEvent: true,
      volumeSpike: { threshold: 150, timeWindow: '24h' },
      stanceShift: null,
      factionEngagement: null
    },
    enabled: true,
    createdAt: '2026-01-01T00:00:00Z',
    lastTriggered: '2026-02-20T15:00:00Z'
  },
  {
    id: 'monitor-004',
    name: 'Cabo Delgado Insurgency',
    description: 'Monitor ISIS-Mozambique activity and impact on LNG infrastructure in Cabo Delgado Province',
    scope: {
      mode: 'simple',
      organizationIds: ['org-006', 'org-017', 'org-018'],
      personIds: ['person-004'],
      locationIds: ['loc-010', 'loc-011'],
      logic: 'OR'
    },
    options: {
      includeSubEvents: true,
      includeThemes: true,
      includeRelatedEvents: true
    },
    triggers: {
      newNarrative: true,
      newEvent: true,
      volumeSpike: { threshold: 200, timeWindow: '24h' },
      stanceShift: null,
      factionEngagement: null
    },
    enabled: true,
    createdAt: '2025-12-01T00:00:00Z',
    lastTriggered: '2026-02-12T16:00:00Z'
  },
  {
    id: 'monitor-005',
    name: 'Russian PMC Activity in Africa',
    description: 'Track Wagner/Africa Corps deployments, operations, and geopolitical impact across the Sahel',
    scope: {
      mode: 'simple',
      organizationIds: ['org-016'],
      personIds: ['person-012', 'person-013'],
      keywords: ['Wagner', 'Africa Corps', 'Russian mercenaries', 'PMC'],
      logic: 'OR'
    },
    options: {
      includeSubEvents: true,
      includeThemes: true,
      includeRelatedEvents: true
    },
    triggers: {
      newNarrative: true,
      newEvent: true,
      volumeSpike: { threshold: 200, timeWindow: '24h' },
      stanceShift: { threshold: 0.15, direction: 'any' },
      factionEngagement: null
    },
    enabled: true,
    createdAt: '2026-01-01T00:00:00Z',
    lastTriggered: '2026-02-08T12:00:00Z'
  }
];

export const alerts = [
  {
    id: 'alert-001',
    monitorId: 'monitor-001',
    type: 'new_event',
    title: 'Al-Shabaab hotel siege in Mogadishu – 22 killed',
    description: 'Al-Shabaab launched a complex attack on a hotel in Hamarweyne district with VBIED and armed assault. Siege lasted 12 hours.',
    severity: 'critical',
    triggeredAt: '2026-02-10T20:00:00Z',
    acknowledged: true,
    relatedNarrativeIds: ['narr-001'],
    relatedThemeIds: ['sub-003'],
    relatedEventIds: ['event-005'],
    relatedSubEventIds: [],
    metadata: {
      eventId: 'event-005',
      eventText: 'Al-Shabaab complex attack on Mogadishu hotel'
    }
  },
  {
    id: 'alert-002',
    monitorId: 'monitor-001',
    type: 'volume_spike',
    title: 'Volume spike: Al-Shabaab activity following Mogadishu hotel siege',
    description: '420 mentions in 24 hours following the hotel attack, exceeding threshold of 300',
    severity: 'high',
    triggeredAt: '2026-02-11T08:00:00Z',
    acknowledged: false,
    relatedNarrativeIds: ['narr-001'],
    relatedThemeIds: ['sub-001', 'sub-003'],
    relatedEventIds: ['event-005'],
    relatedSubEventIds: [],
    metadata: {
      actualValue: 420,
      threshold: 300,
      timeWindow: '24h',
      percentOver: 40.0
    }
  },
  {
    id: 'alert-003',
    monitorId: 'monitor-002',
    type: 'new_event',
    title: 'JNIM ambushes FAMa convoy in Liptako-Gourma, 11 KIA',
    description: 'Complex IED-and-small-arms ambush on military logistics convoy between Gao and Ménaka',
    severity: 'high',
    triggeredAt: '2026-02-05T18:00:00Z',
    acknowledged: true,
    relatedNarrativeIds: ['narr-003'],
    relatedThemeIds: ['sub-007'],
    relatedEventIds: ['event-004'],
    relatedSubEventIds: [],
    metadata: {
      eventId: 'event-004',
      eventText: 'JNIM ambush of FAMa convoy in Liptako-Gourma'
    }
  },
  {
    id: 'alert-004',
    monitorId: 'monitor-003',
    type: 'new_narrative',
    title: 'New intelligence thread: VEO financing networks mapped',
    description: 'UN Panel of Experts and CIA FININT reports document extensive JNIM and Al-Shabaab financing networks',
    severity: 'high',
    triggeredAt: '2026-02-18T10:00:00Z',
    acknowledged: false,
    relatedNarrativeIds: ['narr-004'],
    relatedThemeIds: ['sub-009', 'sub-010'],
    relatedEventIds: ['event-010', 'event-011'],
    relatedSubEventIds: [],
    metadata: {
      narrativeId: 'narr-004',
      narrativeText: 'Terror financing networks exploiting artisanal gold mining and hawala systems across Sahel'
    }
  },
  {
    id: 'alert-005',
    monitorId: 'monitor-004',
    type: 'new_event',
    title: 'ISIS-Mozambique raids three villages in Macomia district',
    description: 'Coordinated dawn raids on Litamanda, Chai, and Naunde villages. 9 civilians killed. SADC response delayed 4 hours.',
    severity: 'high',
    triggeredAt: '2026-02-12T16:00:00Z',
    acknowledged: true,
    relatedNarrativeIds: ['narr-005'],
    relatedThemeIds: ['sub-011'],
    relatedEventIds: ['event-008'],
    relatedSubEventIds: [],
    metadata: {
      eventId: 'event-008',
      eventText: 'ISIS-Mozambique raids villages in Macomia district'
    }
  },
  {
    id: 'alert-006',
    monitorId: 'monitor-005',
    type: 'new_event',
    title: 'Wagner/Africa Corps deploys to Ménaka region, northeastern Mali',
    description: 'SIGINT and satellite imagery confirm ~150 Russian PMC personnel with T-72 tanks and BTR-80 APCs deploying to Ménaka area',
    severity: 'medium',
    triggeredAt: '2026-02-08T12:00:00Z',
    acknowledged: true,
    relatedNarrativeIds: ['narr-007'],
    relatedThemeIds: ['sub-015'],
    relatedEventIds: ['event-007'],
    relatedSubEventIds: [],
    metadata: {
      eventId: 'event-007',
      eventText: 'Wagner/Africa Corps troops deployed to Ménaka region'
    }
  }
];
