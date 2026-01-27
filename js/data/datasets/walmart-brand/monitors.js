/**
 * Monitors and alerts for Walmart Brand dataset
 */

export const monitors = [
  {
    id: 'monitor-001',
    name: 'Self-Checkout Complaints',
    description: 'Track customer complaints about self-checkout experiences, theft accusations, and detention incidents',
    createdAt: '2026-01-01T00:00:00Z',
    createdBy: 'user-001',
    enabled: true,
    lastTriggered: '2026-01-18T10:30:00Z',
    scope: {
      logic: 'OR',
      narrativeIds: ['narr-001'],
      keywords: ['self-checkout', 'detained', 'theft', 'receipt check', 'loss prevention']
    },
    triggers: {
      volumeSpike: { threshold: 500, timeWindow: '24h' },
      sentimentShift: { threshold: 0.2, direction: 'negative' },
      newNarrative: true
    },
    options: {
      includeThemes: true,
      includeRelatedEvents: true
    }
  },
  {
    id: 'monitor-002',
    name: 'Product Availability Issues',
    description: 'Monitor reports of out-of-stock items and empty shelves',
    createdAt: '2026-01-01T00:00:00Z',
    createdBy: 'user-001',
    enabled: true,
    lastTriggered: '2026-01-15T13:00:00Z',
    scope: {
      logic: 'OR',
      narrativeIds: ['narr-002'],
      keywords: ['empty shelves', 'out of stock', 'can\'t find', 'no inventory', 'bare aisles']
    },
    triggers: {
      volumeSpike: { threshold: 300, timeWindow: '24h' },
      sentimentShift: { threshold: 0.15, direction: 'negative' }
    },
    options: {
      includeThemes: true,
      includeRelatedEvents: true
    }
  },
  {
    id: 'monitor-003',
    name: 'Employee Experience Tracker',
    description: 'Track employee-generated content about working conditions',
    createdAt: '2026-01-01T00:00:00Z',
    createdBy: 'user-003',
    enabled: true,
    lastTriggered: '2026-01-15T12:00:00Z',
    scope: {
      logic: 'OR',
      narrativeIds: ['narr-003'],
      keywords: ['walmart worker', 'walmart employee', 'understaffed', '#walmartlife', 'working conditions']
    },
    triggers: {
      volumeSpike: { threshold: 400, timeWindow: '24h' },
      sentimentShift: { threshold: 0.2, direction: 'negative' },
      factionEngagement: true
    },
    options: {
      includeThemes: true,
      includeRelatedEvents: true
    }
  },
  {
    id: 'monitor-004',
    name: 'Product Safety Alerts',
    description: 'Monitor for product recalls, safety issues, and quality concerns',
    createdAt: '2026-01-01T00:00:00Z',
    createdBy: 'user-004',
    enabled: true,
    lastTriggered: '2026-01-18T14:30:00Z',
    scope: {
      logic: 'OR',
      narrativeIds: ['narr-004'],
      keywords: ['recall', 'contamination', 'FDA', 'safety', 'great value', 'private label']
    },
    triggers: {
      newNarrative: true,
      newEvent: true,
      volumeSpike: { threshold: 200, timeWindow: '12h' }
    },
    options: {
      includeThemes: true,
      includeRelatedEvents: true
    }
  },
  {
    id: 'monitor-005',
    name: 'Pricing Perception Monitor',
    description: 'Track discussions about Walmart pricing compared to competitors',
    createdAt: '2026-01-01T00:00:00Z',
    createdBy: 'user-002',
    enabled: true,
    lastTriggered: '2026-01-17T16:00:00Z',
    scope: {
      logic: 'OR',
      narrativeIds: ['narr-005'],
      keywords: ['walmart prices', 'everyday low prices', 'cheaper at', 'price comparison', 'expensive']
    },
    triggers: {
      volumeSpike: { threshold: 350, timeWindow: '24h' },
      sentimentShift: { threshold: 0.15, direction: 'any' }
    },
    options: {
      includeThemes: true,
      includeRelatedEvents: true
    }
  },
  {
    id: 'monitor-006',
    name: 'Competitor Activity Tracker',
    description: 'Monitor competitor announcements and comparative coverage',
    createdAt: '2026-01-01T00:00:00Z',
    createdBy: 'user-005',
    enabled: true,
    lastTriggered: '2026-01-16T11:00:00Z',
    scope: {
      logic: 'OR',
      narrativeIds: ['narr-006'],
      keywords: ['target', 'amazon', 'costco', 'aldi', 'delivery', 'same-day']
    },
    triggers: {
      newNarrative: true,
      newEvent: true
    },
    options: {
      includeThemes: true,
      includeRelatedEvents: true
    }
  },
  {
    id: 'monitor-007',
    name: 'Store Closure Impact',
    description: 'Track community reactions to store closures',
    createdAt: '2026-01-15T00:00:00Z',
    createdBy: 'user-002',
    enabled: true,
    lastTriggered: '2026-01-18T13:00:00Z',
    scope: {
      logic: 'OR',
      narrativeIds: ['narr-007'],
      keywords: ['store closing', 'walmart closure', 'food desert', 'rural', 'community impact']
    },
    triggers: {
      volumeSpike: { threshold: 250, timeWindow: '24h' },
      sentimentShift: { threshold: 0.2, direction: 'negative' },
      newEvent: true
    },
    options: {
      includeThemes: true,
      includeRelatedEvents: true
    }
  }
];

export const alerts = [
  {
    id: 'alert-001',
    monitorId: 'monitor-001',
    type: 'volume_spike',
    triggeredAt: '2026-01-14T16:00:00Z',
    severity: 'high',
    description: 'Viral TikTok shows customer detained at self-checkout - 8M+ views with negative sentiment',
    documentIds: ['doc-001'],
    narrativeIds: ['narr-001'],
    acknowledged: true,
    acknowledgedBy: 'user-001',
    acknowledgedAt: '2026-01-14T17:30:00Z'
  },
  {
    id: 'alert-002',
    monitorId: 'monitor-001',
    type: 'new_event',
    triggeredAt: '2026-01-18T10:30:00Z',
    severity: 'critical',
    description: 'Class-action lawsuit filed: 500+ plaintiffs alleging systematic false detention at self-checkout',
    documentIds: ['doc-003'],
    narrativeIds: ['narr-001'],
    acknowledged: true,
    acknowledgedBy: 'user-006',
    acknowledgedAt: '2026-01-18T11:00:00Z'
  },
  {
    id: 'alert-003',
    monitorId: 'monitor-002',
    type: 'volume_spike',
    triggeredAt: '2026-01-15T13:00:00Z',
    severity: 'medium',
    description: 'Viral X post showing empty grocery aisles in Chicago-area stores - 2.5M views',
    documentIds: ['doc-005'],
    narrativeIds: ['narr-002'],
    acknowledged: true,
    acknowledgedBy: 'user-001',
    acknowledgedAt: '2026-01-15T14:00:00Z'
  },
  {
    id: 'alert-004',
    monitorId: 'monitor-003',
    type: 'volume_spike',
    triggeredAt: '2026-01-13T19:30:00Z',
    severity: 'high',
    description: 'Employee TikTok about working alone in 3 departments goes viral - 5.2M views',
    documentIds: ['doc-008'],
    narrativeIds: ['narr-003'],
    acknowledged: true,
    acknowledgedBy: 'user-003',
    acknowledgedAt: '2026-01-13T20:00:00Z'
  },
  {
    id: 'alert-005',
    monitorId: 'monitor-003',
    type: 'faction_engagement',
    triggeredAt: '2026-01-15T12:00:00Z',
    severity: 'high',
    description: 'UFCW launches #RespectWalmartWorkers campaign amplifying employee stories',
    documentIds: ['doc-010'],
    narrativeIds: ['narr-003'],
    acknowledged: true,
    acknowledgedBy: 'user-002',
    acknowledgedAt: '2026-01-15T13:00:00Z'
  },
  {
    id: 'alert-006',
    monitorId: 'monitor-004',
    type: 'new_event',
    triggeredAt: '2026-01-16T10:30:00Z',
    severity: 'critical',
    description: 'FDA announces Great Value frozen vegetables recall due to Listeria contamination',
    documentIds: ['doc-012'],
    narrativeIds: ['narr-004'],
    acknowledged: true,
    acknowledgedBy: 'user-004',
    acknowledgedAt: '2026-01-16T11:00:00Z'
  },
  {
    id: 'alert-007',
    monitorId: 'monitor-004',
    type: 'volume_spike',
    triggeredAt: '2026-01-18T14:30:00Z',
    severity: 'critical',
    description: 'Great Value recall expanded to 15 products - 3 hospitalizations reported',
    documentIds: ['doc-013'],
    narrativeIds: ['narr-004'],
    acknowledged: true,
    acknowledgedBy: 'user-004',
    acknowledgedAt: '2026-01-18T15:00:00Z'
  },
  {
    id: 'alert-008',
    monitorId: 'monitor-005',
    type: 'sentiment_shift',
    triggeredAt: '2026-01-17T16:00:00Z',
    severity: 'high',
    description: 'Viral price comparison TikTok shows Walmart losing to Aldi on most items - 4.8M views',
    documentIds: ['doc-015'],
    narrativeIds: ['narr-005'],
    acknowledged: true,
    acknowledgedBy: 'user-002',
    acknowledgedAt: '2026-01-17T17:00:00Z'
  },
  {
    id: 'alert-009',
    monitorId: 'monitor-006',
    type: 'new_event',
    triggeredAt: '2026-01-14T09:00:00Z',
    severity: 'medium',
    description: 'Target announces industry-leading 98% on-time delivery rates for same-day service',
    documentIds: ['doc-018'],
    narrativeIds: ['narr-006'],
    acknowledged: true,
    acknowledgedBy: 'user-005',
    acknowledgedAt: '2026-01-14T10:00:00Z'
  },
  {
    id: 'alert-010',
    monitorId: 'monitor-006',
    type: 'new_event',
    triggeredAt: '2026-01-16T11:00:00Z',
    severity: 'medium',
    description: 'Amazon announces sub-24-hour delivery now available to 85% of US households',
    documentIds: ['doc-019'],
    narrativeIds: ['narr-006'],
    acknowledged: true,
    acknowledgedBy: 'user-005',
    acknowledgedAt: '2026-01-16T12:00:00Z'
  },
  {
    id: 'alert-011',
    monitorId: 'monitor-007',
    type: 'new_narrative',
    triggeredAt: '2026-01-18T13:00:00Z',
    severity: 'high',
    description: 'Missouri town faces food desert after Walmart closure - community protests emerging',
    documentIds: ['doc-021', 'doc-022'],
    narrativeIds: ['narr-007'],
    acknowledged: false,
    acknowledgedBy: null,
    acknowledgedAt: null
  }
];
