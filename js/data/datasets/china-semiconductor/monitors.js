/**
 * Monitors and alerts for China Semiconductor dataset
 */

export const monitors = [
  {
    id: 'monitor-001',
    name: 'SMIC Technology Progress',
    description: 'Track breakthroughs and developments at SMIC, China\'s leading chip manufacturer',
    scope: {
      organizationIds: ['org-001'], // SMIC
      personIds: ['person-001', 'person-002', 'person-003'], // SMIC leadership
      narrativeIds: ['narr-001'], // SMIC 5nm breakthrough
      logic: 'OR' // Match narratives containing ANY of the above entities
    },
    options: {
      includeSubEvents: true,
      includeSubNarratives: true,
      includeRelatedEvents: true
    },
    triggers: {
      newNarrative: true,
      newEvent: true,
      volumeSpike: { threshold: 400, timeWindow: '24h' },
      sentimentShift: { threshold: 0.20, direction: 'any' },
      factionEngagement: { factionIds: ['faction-001', 'faction-002'], threshold: 200 }
    },
    enabled: true,
    createdAt: '2026-01-01T00:00:00Z',
    lastTriggered: '2026-01-20T09:30:00Z'
  },
  {
    id: 'monitor-002',
    name: 'Export Controls Impact',
    description: 'Monitor narratives around US/Dutch export controls and their effects on Chinese chip industry',
    scope: {
      organizationIds: ['org-002', 'org-004', 'org-005'], // ASML, US Commerce Dept, Dutch Govt
      personIds: ['person-004', 'person-005', 'person-006'], // Policy figures
      narrativeIds: ['narr-002'] // ASML restrictions narrative
    },
    options: {
      includeSubEvents: true,
      includeSubNarratives: true,
      includeRelatedEvents: true
    },
    triggers: {
      newNarrative: true,
      newEvent: true,
      volumeSpike: { threshold: 500, timeWindow: '24h' },
      sentimentShift: { threshold: 0.15, direction: 'negative' },
      factionEngagement: null
    },
    enabled: true,
    createdAt: '2026-01-01T00:00:00Z',
    lastTriggered: '2026-01-17T14:00:00Z'
  },
  {
    id: 'monitor-003',
    name: 'Chinese Investment Watch',
    description: 'Track government funding, Big Fund allocations, and investment trends in Chinese semiconductors',
    scope: {
      organizationIds: ['org-007', 'org-008', 'org-009'], // Big Fund, Ministry of Finance, MIIT
      personIds: ['person-008', 'person-009', 'person-010'], // Investment figures
      narrativeIds: ['narr-003'] // Big Fund narrative
    },
    options: {
      includeSubEvents: true,
      includeSubNarratives: true,
      includeRelatedEvents: true
    },
    triggers: {
      newNarrative: true,
      newEvent: false,
      volumeSpike: { threshold: 300, timeWindow: '24h' },
      sentimentShift: null,
      factionEngagement: { factionIds: ['faction-001', 'faction-005'], threshold: 150 }
    },
    enabled: true,
    createdAt: '2026-01-15T00:00:00Z',
    lastTriggered: '2026-01-20T11:00:00Z'
  },
  {
    id: 'monitor-004',
    name: 'Huawei Sanctions Monitoring',
    description: 'Track Huawei\'s efforts to circumvent sanctions and develop indigenous chip capabilities',
    scope: {
      organizationIds: ['org-010'], // Huawei
      personIds: ['person-011', 'person-012'], // Huawei leadership
      narrativeIds: ['narr-004'] // Huawei stockpiling narrative
    },
    options: {
      includeSubEvents: true,
      includeSubNarratives: true,
      includeRelatedEvents: true
    },
    triggers: {
      newNarrative: true,
      newEvent: true,
      volumeSpike: { threshold: 350, timeWindow: '24h' },
      sentimentShift: { threshold: 0.20, direction: 'any' },
      factionEngagement: null
    },
    enabled: true,
    createdAt: '2026-01-01T00:00:00Z',
    lastTriggered: '2026-01-19T16:30:00Z'
  },
  {
    id: 'monitor-005',
    name: 'Supply Chain & Manufacturing',
    description: 'Monitor TSMC Arizona, YMTC, and global semiconductor supply chain developments',
    scope: {
      organizationIds: ['org-013', 'org-020'], // YMTC, TSMC
      locationIds: ['loc-009', 'loc-010'], // Arizona locations
      narrativeIds: ['narr-005', 'narr-007'] // YMTC and TSMC Arizona narratives
    },
    options: {
      includeSubEvents: true,
      includeSubNarratives: true,
      includeRelatedEvents: true
    },
    triggers: {
      newNarrative: true,
      newEvent: true,
      volumeSpike: { threshold: 400, timeWindow: '24h' },
      sentimentShift: { threshold: 0.15, direction: 'negative' },
      factionEngagement: null
    },
    enabled: false, // Paused
    createdAt: '2026-01-10T00:00:00Z',
    lastTriggered: '2026-01-18T10:00:00Z'
  }
];

export const alerts = [
  {
    id: 'alert-001',
    monitorId: 'monitor-001',
    type: 'volume_spike',
    title: 'Volume spike: SMIC 5nm breakthrough coverage',
    description: '520 mentions from Chinese state media in 24 hours, exceeding threshold of 400',
    severity: 'high',
    triggeredAt: '2026-01-20T09:30:00Z',
    acknowledged: false,
    relatedNarrativeIds: ['narr-001'],
    relatedSubNarrativeIds: ['sub-001', 'sub-002'],
    relatedEventIds: ['event-001', 'event-002'],
    relatedSubEventIds: [],
    metadata: {
      actualValue: 520,
      threshold: 400,
      timeWindow: '24h',
      percentOver: 30
    }
  },
  {
    id: 'alert-002',
    monitorId: 'monitor-001',
    type: 'faction_engagement',
    title: 'High faction engagement: SMIC narrative',
    description: 'Chinese Nationalists (520) and US Hawks (380) showing significant engagement',
    severity: 'medium',
    triggeredAt: '2026-01-19T14:00:00Z',
    acknowledged: true,
    relatedNarrativeIds: ['narr-001'],
    relatedSubNarrativeIds: ['sub-001', 'sub-003'],
    relatedEventIds: ['event-001'],
    relatedSubEventIds: [],
    metadata: {
      factionEngagement: {
        'faction-001': 520,
        'faction-002': 380
      },
      threshold: 200,
      totalVolume: 900
    }
  },
  {
    id: 'alert-003',
    monitorId: 'monitor-002',
    type: 'sentiment_shift',
    title: 'Sentiment shift: Export controls narrative',
    description: '-18% sentiment change following expanded ASML restrictions announcement',
    severity: 'high',
    triggeredAt: '2026-01-17T14:00:00Z',
    acknowledged: false,
    relatedNarrativeIds: ['narr-002'],
    relatedSubNarrativeIds: ['sub-004', 'sub-005'],
    relatedEventIds: ['event-003', 'event-004'],
    relatedSubEventIds: [],
    metadata: {
      previousSentiment: -0.30,
      currentSentiment: -0.48,
      delta: -0.18,
      direction: 'negative'
    }
  },
  {
    id: 'alert-004',
    monitorId: 'monitor-002',
    type: 'new_event',
    title: 'New event: Netherlands expands ASML export ban',
    description: 'Dutch government announces expanded restrictions on DUV lithography exports to China',
    severity: 'high',
    triggeredAt: '2026-01-14T10:00:00Z',
    acknowledged: true,
    relatedNarrativeIds: ['narr-002'],
    relatedSubNarrativeIds: ['sub-004'],
    relatedEventIds: ['event-003'],
    relatedSubEventIds: ['event-004', 'event-005'],
    metadata: {
      eventId: 'event-003',
      eventText: 'Netherlands expands ASML export restrictions to China'
    }
  },
  {
    id: 'alert-005',
    monitorId: 'monitor-003',
    type: 'new_narrative',
    title: 'New narrative: Big Fund Phase III announced',
    description: 'China launches $47 billion semiconductor investment fund, largest tranche yet',
    severity: 'high',
    triggeredAt: '2026-01-17T08:00:00Z',
    acknowledged: true,
    relatedNarrativeIds: ['narr-003'],
    relatedSubNarrativeIds: ['sub-007', 'sub-008', 'sub-009'],
    relatedEventIds: ['event-006', 'event-007'],
    relatedSubEventIds: [],
    metadata: {
      narrativeId: 'narr-003',
      narrativeText: 'China announces $47 billion semiconductor investment fund, third phase of "Big Fund"'
    }
  },
  {
    id: 'alert-006',
    monitorId: 'monitor-003',
    type: 'volume_spike',
    title: 'Volume spike: Big Fund coverage',
    description: '425 mentions in 24 hours as markets react to funding announcement',
    severity: 'medium',
    triggeredAt: '2026-01-20T11:00:00Z',
    acknowledged: false,
    relatedNarrativeIds: ['narr-003'],
    relatedSubNarrativeIds: ['sub-007', 'sub-009'],
    relatedEventIds: ['event-006'],
    relatedSubEventIds: [],
    metadata: {
      actualValue: 425,
      threshold: 300,
      timeWindow: '24h',
      percentOver: 41.7
    }
  },
  {
    id: 'alert-007',
    monitorId: 'monitor-004',
    type: 'new_narrative',
    title: 'New narrative: Huawei equipment stockpiling investigation',
    description: 'Reports emerge of Huawei stockpiling semiconductor equipment ahead of sanctions',
    severity: 'high',
    triggeredAt: '2026-01-15T12:00:00Z',
    acknowledged: true,
    relatedNarrativeIds: ['narr-004'],
    relatedSubNarrativeIds: ['sub-010', 'sub-011'],
    relatedEventIds: ['event-008', 'event-009'],
    relatedSubEventIds: [],
    metadata: {
      narrativeId: 'narr-004',
      narrativeText: 'Huawei stockpiles semiconductor equipment ahead of expanded US sanctions'
    }
  },
  {
    id: 'alert-008',
    monitorId: 'monitor-004',
    type: 'volume_spike',
    title: 'Volume spike: Huawei sanctions coverage',
    description: '365 mentions from US national security voices in 24 hours',
    severity: 'medium',
    triggeredAt: '2026-01-19T16:30:00Z',
    acknowledged: false,
    relatedNarrativeIds: ['narr-004'],
    relatedSubNarrativeIds: ['sub-010'],
    relatedEventIds: ['event-009'],
    relatedSubEventIds: [],
    metadata: {
      actualValue: 365,
      threshold: 350,
      timeWindow: '24h',
      percentOver: 4.3
    }
  }
];
