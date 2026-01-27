/**
 * Sub-narratives for Walmart Brand dataset
 */

export const subNarratives = [
  // Self-checkout narrative sub-narratives
  {
    id: 'sub-001',
    text: 'TikTok videos show customers detained and searched after honest self-checkout mistakes',
    parentNarrativeId: 'narr-001',
    status: 'in_progress',
    sentiment: -0.82,
    documentIds: ['doc-001', 'doc-002'],
    createdAt: '2026-01-14T00:00:00Z'
  },
  {
    id: 'sub-002',
    text: 'Class-action lawsuit filed alleging systematic false detention of customers',
    parentNarrativeId: 'narr-001',
    status: 'in_progress',
    sentiment: -0.75,
    documentIds: ['doc-003'],
    createdAt: '2026-01-18T00:00:00Z'
  },
  {
    id: 'sub-003',
    text: 'Walmart announces plan to increase staffed checkout lanes in response to complaints',
    parentNarrativeId: 'narr-001',
    status: 'in_progress',
    sentiment: 0.35,
    documentIds: ['doc-004'],
    createdAt: '2026-01-19T00:00:00Z'
  },

  // Empty shelves narrative sub-narratives
  {
    id: 'sub-004',
    text: 'Viral photos show barren grocery aisles, especially in household essentials',
    parentNarrativeId: 'narr-002',
    status: 'in_progress',
    sentiment: -0.72,
    documentIds: ['doc-005', 'doc-006'],
    createdAt: '2026-01-15T00:00:00Z'
  },
  {
    id: 'sub-005',
    text: 'Retail analysts question Walmart\'s inventory management technology',
    parentNarrativeId: 'narr-002',
    status: 'under_investigation',
    sentiment: -0.45,
    documentIds: ['doc-007'],
    createdAt: '2026-01-17T00:00:00Z'
  },

  // Worker conditions narrative sub-narratives
  {
    id: 'sub-006',
    text: 'Employees share videos of being alone in departments meant for multiple workers',
    parentNarrativeId: 'narr-003',
    status: 'in_progress',
    sentiment: -0.78,
    documentIds: ['doc-008', 'doc-009'],
    createdAt: '2026-01-13T00:00:00Z'
  },
  {
    id: 'sub-007',
    text: 'UFCW launches #RespectWalmartWorkers campaign amplifying employee stories',
    parentNarrativeId: 'narr-003',
    status: 'in_progress',
    sentiment: -0.72,
    documentIds: ['doc-010'],
    createdAt: '2026-01-15T00:00:00Z'
  },
  {
    id: 'sub-008',
    text: 'Walmart responds highlighting $14 minimum wage and associate benefits',
    parentNarrativeId: 'narr-003',
    status: 'in_progress',
    sentiment: 0.25,
    documentIds: ['doc-011'],
    createdAt: '2026-01-17T00:00:00Z'
  },

  // Great Value recall sub-narratives
  {
    id: 'sub-009',
    text: 'FDA expands Great Value recall to 15 products across multiple categories',
    parentNarrativeId: 'narr-004',
    status: 'in_progress',
    sentiment: -0.85,
    documentIds: ['doc-012', 'doc-013'],
    createdAt: '2026-01-18T00:00:00Z'
  },
  {
    id: 'sub-010',
    text: 'Consumer Reports demands stricter quality controls on private-label products',
    parentNarrativeId: 'narr-004',
    status: 'in_progress',
    sentiment: -0.68,
    documentIds: ['doc-014'],
    createdAt: '2026-01-19T00:00:00Z'
  },

  // Pricing narrative sub-narratives
  {
    id: 'sub-011',
    text: 'TikTok price comparison videos show Walmart losing to Aldi on staples',
    parentNarrativeId: 'narr-005',
    status: 'new',
    sentiment: -0.65,
    documentIds: ['doc-015', 'doc-016'],
    createdAt: '2026-01-17T00:00:00Z'
  },
  {
    id: 'sub-012',
    text: 'WSJ analysis shows Walmart retained pandemic-era price increases',
    parentNarrativeId: 'narr-005',
    status: 'new',
    sentiment: -0.55,
    documentIds: ['doc-017'],
    createdAt: '2026-01-17T00:00:00Z'
  },

  // Competitor pressure sub-narratives
  {
    id: 'sub-013',
    text: 'Target achieves 98% on-time delivery rate, leading industry metrics',
    parentNarrativeId: 'narr-006',
    status: 'in_progress',
    sentiment: 0.45,
    documentIds: ['doc-018'],
    createdAt: '2026-01-14T00:00:00Z'
  },
  {
    id: 'sub-014',
    text: 'Amazon expands sub-24-hour delivery to 85% of US households',
    parentNarrativeId: 'narr-006',
    status: 'in_progress',
    sentiment: 0.52,
    documentIds: ['doc-019', 'doc-020'],
    createdAt: '2026-01-16T00:00:00Z'
  },

  // Rural closure sub-narratives
  {
    id: 'sub-015',
    text: 'Missouri town faces "food desert" designation after Walmart closure announcement',
    parentNarrativeId: 'narr-007',
    status: 'new',
    sentiment: -0.78,
    documentIds: ['doc-021', 'doc-022'],
    createdAt: '2026-01-18T00:00:00Z'
  },
  {
    id: 'sub-016',
    text: 'Local politicians call on Walmart to maintain stores as community obligation',
    parentNarrativeId: 'narr-007',
    status: 'new',
    sentiment: -0.58,
    documentIds: ['doc-023'],
    createdAt: '2026-01-19T00:00:00Z'
  }
];
