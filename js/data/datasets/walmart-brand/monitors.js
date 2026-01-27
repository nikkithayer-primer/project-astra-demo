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
    isActive: true,
    criteria: {
      keywords: ['self-checkout', 'detained', 'theft', 'receipt check', 'loss prevention'],
      sources: ['src-tiktok', 'src-x', 'src-reddit', 'src-facebook', 'src-trustpilot'],
      sentimentThreshold: -0.5
    },
    linkedNarrativeIds: ['narr-001'],
    linkedMissionIds: ['mission-001']
  },
  {
    id: 'monitor-002',
    name: 'Product Availability Issues',
    description: 'Monitor reports of out-of-stock items and empty shelves',
    createdAt: '2026-01-01T00:00:00Z',
    createdBy: 'user-001',
    isActive: true,
    criteria: {
      keywords: ['empty shelves', 'out of stock', 'can\'t find', 'no inventory', 'bare aisles'],
      sources: ['src-x', 'src-facebook', 'src-reddit', 'src-trustpilot', 'src-yelp'],
      sentimentThreshold: -0.4
    },
    linkedNarrativeIds: ['narr-002'],
    linkedMissionIds: ['mission-002']
  },
  {
    id: 'monitor-003',
    name: 'Employee Experience Tracker',
    description: 'Track employee-generated content about working conditions',
    createdAt: '2026-01-01T00:00:00Z',
    createdBy: 'user-003',
    isActive: true,
    criteria: {
      keywords: ['walmart worker', 'walmart employee', 'understaffed', '#walmartlife', 'working conditions'],
      sources: ['src-tiktok', 'src-reddit', 'src-x'],
      sentimentThreshold: -0.5
    },
    linkedNarrativeIds: ['narr-003'],
    linkedMissionIds: ['mission-001']
  },
  {
    id: 'monitor-004',
    name: 'Product Safety Alerts',
    description: 'Monitor for product recalls, safety issues, and quality concerns',
    createdAt: '2026-01-01T00:00:00Z',
    createdBy: 'user-004',
    isActive: true,
    criteria: {
      keywords: ['recall', 'contamination', 'FDA', 'safety', 'great value', 'private label'],
      sources: ['src-reuters', 'src-ap', 'src-usatoday', 'src-localnews', 'src-consumeraffairs'],
      sentimentThreshold: -0.6
    },
    linkedNarrativeIds: ['narr-004'],
    linkedMissionIds: ['mission-003']
  },
  {
    id: 'monitor-005',
    name: 'Pricing Perception Monitor',
    description: 'Track discussions about Walmart pricing compared to competitors',
    createdAt: '2026-01-01T00:00:00Z',
    createdBy: 'user-002',
    isActive: true,
    criteria: {
      keywords: ['walmart prices', 'everyday low prices', 'cheaper at', 'price comparison', 'expensive'],
      sources: ['src-tiktok', 'src-x', 'src-reddit', 'src-wsj', 'src-bloomberg'],
      sentimentThreshold: -0.4
    },
    linkedNarrativeIds: ['narr-005'],
    linkedMissionIds: ['mission-002']
  },
  {
    id: 'monitor-006',
    name: 'Competitor Activity Tracker',
    description: 'Monitor competitor announcements and comparative coverage',
    createdAt: '2026-01-01T00:00:00Z',
    createdBy: 'user-005',
    isActive: true,
    criteria: {
      keywords: ['target', 'amazon', 'costco', 'aldi', 'delivery', 'same-day'],
      sources: ['src-retaildive', 'src-modernretail', 'src-wsj', 'src-bloomberg', 'src-x'],
      sentimentThreshold: null
    },
    linkedNarrativeIds: ['narr-006'],
    linkedMissionIds: ['mission-004']
  },
  {
    id: 'monitor-007',
    name: 'Store Closure Impact',
    description: 'Track community reactions to store closures',
    createdAt: '2026-01-15T00:00:00Z',
    createdBy: 'user-002',
    isActive: true,
    criteria: {
      keywords: ['store closing', 'walmart closure', 'food desert', 'rural', 'community impact'],
      sources: ['src-localnews', 'src-facebook', 'src-x', 'src-usatoday', 'src-ap'],
      sentimentThreshold: -0.5
    },
    linkedNarrativeIds: ['narr-007'],
    linkedMissionIds: ['mission-001']
  }
];

export const alerts = [
  {
    id: 'alert-001',
    monitorId: 'monitor-001',
    triggeredAt: '2026-01-14T16:00:00Z',
    severity: 'high',
    title: 'Viral TikTok shows customer detained at self-checkout',
    description: 'A TikTok video showing a customer being detained at self-checkout has gone viral with over 8 million views. Video shows customer claiming they had receipt for all items.',
    documentIds: ['doc-001'],
    narrativeIds: ['narr-001'],
    status: 'acknowledged',
    acknowledgedBy: 'user-001',
    acknowledgedAt: '2026-01-14T17:30:00Z'
  },
  {
    id: 'alert-002',
    monitorId: 'monitor-001',
    triggeredAt: '2026-01-18T10:30:00Z',
    severity: 'critical',
    title: 'Class-action lawsuit filed over self-checkout detentions',
    description: 'A class-action lawsuit representing 500+ plaintiffs has been filed in Texas federal court alleging systematic false detention at self-checkout.',
    documentIds: ['doc-003'],
    narrativeIds: ['narr-001'],
    status: 'acknowledged',
    acknowledgedBy: 'user-006',
    acknowledgedAt: '2026-01-18T11:00:00Z'
  },
  {
    id: 'alert-003',
    monitorId: 'monitor-002',
    triggeredAt: '2026-01-15T13:00:00Z',
    severity: 'medium',
    title: 'Viral post shows empty grocery aisles',
    description: 'A viral X post showing empty grocery aisles at Chicago-area Walmart has 2.5 million views and significant negative engagement.',
    documentIds: ['doc-005'],
    narrativeIds: ['narr-002'],
    status: 'acknowledged',
    acknowledgedBy: 'user-001',
    acknowledgedAt: '2026-01-15T14:00:00Z'
  },
  {
    id: 'alert-004',
    monitorId: 'monitor-003',
    triggeredAt: '2026-01-13T19:30:00Z',
    severity: 'high',
    title: 'Employee TikTok about understaffing goes viral',
    description: 'A Walmart employee\'s TikTok showing them working alone in three departments has received 5.2 million views.',
    documentIds: ['doc-008'],
    narrativeIds: ['narr-003'],
    status: 'acknowledged',
    acknowledgedBy: 'user-003',
    acknowledgedAt: '2026-01-13T20:00:00Z'
  },
  {
    id: 'alert-005',
    monitorId: 'monitor-003',
    triggeredAt: '2026-01-15T12:00:00Z',
    severity: 'high',
    title: 'UFCW launches worker conditions campaign',
    description: 'The UFCW has launched a social media campaign #RespectWalmartWorkers amplifying employee stories about working conditions.',
    documentIds: ['doc-010'],
    narrativeIds: ['narr-003'],
    status: 'acknowledged',
    acknowledgedBy: 'user-002',
    acknowledgedAt: '2026-01-15T13:00:00Z'
  },
  {
    id: 'alert-006',
    monitorId: 'monitor-004',
    triggeredAt: '2026-01-16T10:30:00Z',
    severity: 'critical',
    title: 'FDA announces Great Value product recall',
    description: 'FDA has announced a recall of Great Value frozen vegetables due to potential Listeria contamination.',
    documentIds: ['doc-012'],
    narrativeIds: ['narr-004'],
    status: 'acknowledged',
    acknowledgedBy: 'user-004',
    acknowledgedAt: '2026-01-16T11:00:00Z'
  },
  {
    id: 'alert-007',
    monitorId: 'monitor-004',
    triggeredAt: '2026-01-18T14:30:00Z',
    severity: 'critical',
    title: 'Great Value recall expanded to 15 products',
    description: 'FDA has expanded the Great Value recall to 15 products. Three hospitalizations reported.',
    documentIds: ['doc-013'],
    narrativeIds: ['narr-004'],
    status: 'acknowledged',
    acknowledgedBy: 'user-004',
    acknowledgedAt: '2026-01-18T15:00:00Z'
  },
  {
    id: 'alert-008',
    monitorId: 'monitor-005',
    triggeredAt: '2026-01-17T16:00:00Z',
    severity: 'high',
    title: 'Viral price comparison TikTok shows Walmart losing to Aldi',
    description: 'A TikTok video comparing Walmart and Aldi prices has 4.8 million views, showing Aldi cheaper on most items.',
    documentIds: ['doc-015'],
    narrativeIds: ['narr-005'],
    status: 'acknowledged',
    acknowledgedBy: 'user-002',
    acknowledgedAt: '2026-01-17T17:00:00Z'
  },
  {
    id: 'alert-009',
    monitorId: 'monitor-006',
    triggeredAt: '2026-01-14T09:00:00Z',
    severity: 'medium',
    title: 'Target announces 98% on-time delivery achievement',
    description: 'Target has announced industry-leading 98% on-time delivery rates for same-day service.',
    documentIds: ['doc-018'],
    narrativeIds: ['narr-006'],
    status: 'acknowledged',
    acknowledgedBy: 'user-005',
    acknowledgedAt: '2026-01-14T10:00:00Z'
  },
  {
    id: 'alert-010',
    monitorId: 'monitor-006',
    triggeredAt: '2026-01-16T11:00:00Z',
    severity: 'medium',
    title: 'Amazon expands rapid delivery coverage',
    description: 'Amazon announces sub-24-hour delivery now available to 85% of US households.',
    documentIds: ['doc-019'],
    narrativeIds: ['narr-006'],
    status: 'acknowledged',
    acknowledgedBy: 'user-005',
    acknowledgedAt: '2026-01-16T12:00:00Z'
  },
  {
    id: 'alert-011',
    monitorId: 'monitor-007',
    triggeredAt: '2026-01-18T13:00:00Z',
    severity: 'high',
    title: 'Missouri town faces food desert after closure announcement',
    description: 'Media coverage of small Missouri town that will have no grocery stores after Walmart closure, sparking community protests.',
    documentIds: ['doc-021', 'doc-022'],
    narrativeIds: ['narr-007'],
    status: 'new',
    acknowledgedBy: null,
    acknowledgedAt: null
  }
];
