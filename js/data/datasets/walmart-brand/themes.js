/**
 * Themes for Walmart Brand dataset
 */

export const themes = [
  // Self-checkout narrative sub-narratives
  {
    id: 'sub-001',
    text: 'TikTok videos show customers detained and searched after honest self-checkout mistakes',
    description: 'Viral TikTok content showing Walmart customers being stopped, questioned, and searched by loss prevention staff after self-checkout, even when they have receipts. Videos depict humiliating confrontations that have sparked widespread outrage.',
    parentNarrativeId: 'narr-001',
    sentiment: -0.82,
    factionMentions: {
      'faction-001': { volume: 385, sentiment: -0.85 },
      'faction-002': { volume: 145, sentiment: -0.78 }
    },
    personIds: ['person-001', 'person-002'],
    organizationIds: ['org-001'],
    locationIds: ['loc-002'],
    eventIds: ['event-001'],
    volumeOverTime: [
      { date: '2026-01-14', factionVolumes: { 'faction-001': 85, 'faction-002': 32 } },
      { date: '2026-01-15', factionVolumes: { 'faction-001': 125, 'faction-002': 48 } },
      { date: '2026-01-16', factionVolumes: { 'faction-001': 185, 'faction-002': 72 } },
      { date: '2026-01-17', factionVolumes: { 'faction-001': 265, 'faction-002': 98 } },
      { date: '2026-01-18', factionVolumes: { 'faction-001': 325, 'faction-002': 125 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 365, 'faction-002': 138 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 385, 'faction-002': 145 } }
    ]
  },
  {
    id: 'sub-002',
    text: 'Class-action lawsuit filed alleging systematic false detention of customers',
    description: 'A Texas law firm has filed a class-action lawsuit against Walmart alleging a pattern of falsely detaining customers at self-checkout stations. The suit claims Walmart employees are incentivized to make stops regardless of evidence.',
    parentNarrativeId: 'narr-001',
    sentiment: -0.75,
    factionMentions: {
      'faction-001': { volume: 185, sentiment: -0.78 },
      'faction-002': { volume: 65, sentiment: -0.72 },
      'faction-005': { volume: 95, sentiment: -0.42 }
    },
    personIds: ['person-008'],
    organizationIds: ['org-002'],
    locationIds: ['loc-003'],
    eventIds: ['event-002'],
    volumeOverTime: [
      { date: '2026-01-18', factionVolumes: { 'faction-001': 95, 'faction-002': 35, 'faction-005': 48 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 145, 'faction-002': 52, 'faction-005': 72 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 185, 'faction-002': 65, 'faction-005': 95 } }
    ]
  },
  {
    id: 'sub-003',
    text: 'Walmart announces plan to increase staffed checkout lanes in response to complaints',
    description: 'In response to mounting criticism, Walmart announced plans to add staffed checkout lanes in 500 stores. The company framed this as a customer service improvement, though critics note it follows pressure from viral complaints.',
    parentNarrativeId: 'narr-001',
    sentiment: 0.35,
    factionMentions: {
      'faction-001': { volume: 115, sentiment: 0.28 },
      'faction-005': { volume: 70, sentiment: 0.45 }
    },
    personIds: ['person-001'],
    organizationIds: ['org-001'],
    locationIds: ['loc-002'],
    eventIds: ['event-003'],
    volumeOverTime: [
      { date: '2026-01-19', factionVolumes: { 'faction-001': 55, 'faction-005': 32 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 115, 'faction-005': 70 } }
    ]
  },

  // Empty shelves narrative sub-narratives
  {
    id: 'sub-004',
    text: 'Viral photos show barren grocery aisles, especially in household essentials',
    description: 'Social media users are sharing photos of empty Walmart shelves across multiple states, particularly in grocery and household essentials sections. Some customers report driving to multiple stores without finding needed items.',
    parentNarrativeId: 'narr-002',
    sentiment: -0.72,
    factionMentions: {
      'faction-001': { volume: 285, sentiment: -0.75 },
      'faction-005': { volume: 95, sentiment: -0.48 }
    },
    personIds: ['person-009'],
    organizationIds: ['org-001', 'org-003'],
    locationIds: ['loc-001', 'loc-004'],
    eventIds: ['event-004'],
    volumeOverTime: [
      { date: '2026-01-15', factionVolumes: { 'faction-001': 85, 'faction-005': 28 } },
      { date: '2026-01-16', factionVolumes: { 'faction-001': 145, 'faction-005': 48 } },
      { date: '2026-01-17', factionVolumes: { 'faction-001': 215, 'faction-005': 72 } },
      { date: '2026-01-18', factionVolumes: { 'faction-001': 255, 'faction-005': 85 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 275, 'faction-005': 92 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 285, 'faction-005': 95 } }
    ]
  },
  {
    id: 'sub-005',
    text: 'Retail analysts question Walmart\'s inventory management technology',
    description: 'Industry analysts are questioning whether Walmart\'s inventory management systems need significant upgrades. Reports suggest the company\'s technology stack may be struggling to handle current supply chain complexity.',
    parentNarrativeId: 'narr-002',
    sentiment: -0.45,
    factionMentions: {
      'faction-005': { volume: 90, sentiment: -0.38 },
      'faction-006': { volume: 145, sentiment: 0.35 }
    },
    personIds: ['person-010'],
    organizationIds: ['org-004'],
    locationIds: ['loc-005'],
    eventIds: ['event-005'],
    volumeOverTime: [
      { date: '2026-01-17', factionVolumes: { 'faction-005': 35, 'faction-006': 55 } },
      { date: '2026-01-18', factionVolumes: { 'faction-005': 58, 'faction-006': 92 } },
      { date: '2026-01-19', factionVolumes: { 'faction-005': 78, 'faction-006': 125 } },
      { date: '2026-01-20', factionVolumes: { 'faction-005': 90, 'faction-006': 145 } }
    ]
  },

  // Worker conditions narrative sub-narratives
  {
    id: 'sub-006',
    text: 'Employees share videos of being alone in departments meant for multiple workers',
    description: 'Current Walmart employees are posting TikTok videos showing them working alone in departments typically staffed by multiple people. Videos often show long lines of waiting customers while single workers struggle to keep up.',
    parentNarrativeId: 'narr-003',
    sentiment: -0.78,
    factionMentions: {
      'faction-003': { volume: 245, sentiment: -0.82 },
      'faction-001': { volume: 125, sentiment: -0.68 }
    },
    personIds: ['person-003', 'person-004'],
    organizationIds: ['org-001'],
    locationIds: ['loc-001', 'loc-006'],
    eventIds: ['event-006'],
    volumeOverTime: [
      { date: '2026-01-13', factionVolumes: { 'faction-003': 65, 'faction-001': 32 } },
      { date: '2026-01-14', factionVolumes: { 'faction-003': 105, 'faction-001': 52 } },
      { date: '2026-01-15', factionVolumes: { 'faction-003': 155, 'faction-001': 78 } },
      { date: '2026-01-16', factionVolumes: { 'faction-003': 195, 'faction-001': 98 } },
      { date: '2026-01-17', factionVolumes: { 'faction-003': 225, 'faction-001': 115 } },
      { date: '2026-01-18', factionVolumes: { 'faction-003': 238, 'faction-001': 122 } },
      { date: '2026-01-19', factionVolumes: { 'faction-003': 242, 'faction-001': 124 } },
      { date: '2026-01-20', factionVolumes: { 'faction-003': 245, 'faction-001': 125 } }
    ]
  },
  {
    id: 'sub-007',
    text: 'UFCW launches #RespectWalmartWorkers campaign amplifying employee stories',
    description: 'The United Food and Commercial Workers union has launched a coordinated campaign amplifying worker stories under the hashtag #RespectWalmartWorkers. The campaign is gaining traction as it connects with broader labor movement messaging.',
    parentNarrativeId: 'narr-003',
    sentiment: -0.72,
    factionMentions: {
      'faction-003': { volume: 185, sentiment: -0.75 },
      'faction-004': { volume: 95, sentiment: -0.62 }
    },
    personIds: ['person-005'],
    organizationIds: ['org-005', 'org-006'],
    locationIds: ['loc-007'],
    eventIds: ['event-007'],
    volumeOverTime: [
      { date: '2026-01-15', factionVolumes: { 'faction-003': 48, 'faction-004': 25 } },
      { date: '2026-01-16', factionVolumes: { 'faction-003': 85, 'faction-004': 42 } },
      { date: '2026-01-17', factionVolumes: { 'faction-003': 125, 'faction-004': 65 } },
      { date: '2026-01-18', factionVolumes: { 'faction-003': 155, 'faction-004': 82 } },
      { date: '2026-01-19', factionVolumes: { 'faction-003': 175, 'faction-004': 90 } },
      { date: '2026-01-20', factionVolumes: { 'faction-003': 185, 'faction-004': 95 } }
    ]
  },
  {
    id: 'sub-008',
    text: 'Walmart responds highlighting $14 minimum wage and associate benefits',
    description: 'Walmart corporate communications has responded to worker complaints by highlighting its $14 minimum wage, associate stock purchase program, and healthcare benefits. Industry analysts view this as a defensive PR move.',
    parentNarrativeId: 'narr-003',
    sentiment: 0.25,
    factionMentions: {
      'faction-005': { volume: 85, sentiment: 0.38 },
      'faction-006': { volume: 65, sentiment: 0.52 }
    },
    personIds: ['person-001'],
    organizationIds: ['org-001'],
    locationIds: [],
    eventIds: ['event-008'],
    volumeOverTime: [
      { date: '2026-01-17', factionVolumes: { 'faction-005': 28, 'faction-006': 22 } },
      { date: '2026-01-18', factionVolumes: { 'faction-005': 52, 'faction-006': 42 } },
      { date: '2026-01-19', factionVolumes: { 'faction-005': 72, 'faction-006': 55 } },
      { date: '2026-01-20', factionVolumes: { 'faction-005': 85, 'faction-006': 65 } }
    ]
  },

  // Great Value recall sub-narratives
  {
    id: 'sub-009',
    text: 'FDA expands Great Value recall to 15 products across multiple categories',
    description: 'The FDA has expanded its recall of Walmart\'s Great Value brand products to include 15 items across frozen vegetables, canned goods, and dairy. Testing revealed potential bacterial contamination at a supplier facility.',
    parentNarrativeId: 'narr-004',
    sentiment: -0.85,
    factionMentions: {
      'faction-001': { volume: 195, sentiment: -0.88 },
      'faction-004': { volume: 125, sentiment: -0.72 }
    },
    personIds: ['person-006', 'person-007'],
    organizationIds: ['org-001', 'org-007'],
    locationIds: ['loc-008'],
    eventIds: ['event-009'],
    volumeOverTime: [
      { date: '2026-01-18', factionVolumes: { 'faction-001': 85, 'faction-004': 52 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 145, 'faction-004': 92 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 195, 'faction-004': 125 } }
    ]
  },
  {
    id: 'sub-010',
    text: 'Consumer Reports demands stricter quality controls on private-label products',
    description: 'Consumer Reports has published an editorial demanding stricter quality controls on private-label store brands, citing the Great Value recall as evidence of systemic issues in cost-cutting measures by major retailers.',
    parentNarrativeId: 'narr-004',
    sentiment: -0.68,
    factionMentions: {
      'faction-004': { volume: 75, sentiment: -0.65 },
      'faction-005': { volume: 55, sentiment: -0.52 }
    },
    personIds: [],
    organizationIds: ['org-008'],
    locationIds: [],
    eventIds: ['event-010'],
    volumeOverTime: [
      { date: '2026-01-19', factionVolumes: { 'faction-004': 35, 'faction-005': 25 } },
      { date: '2026-01-20', factionVolumes: { 'faction-004': 75, 'faction-005': 55 } }
    ]
  },

  // Pricing narrative sub-narratives
  {
    id: 'sub-011',
    text: 'TikTok price comparison videos show Walmart losing to Aldi on staples',
    description: 'A trend of TikTok price comparison videos shows Walmart losing to discount competitors like Aldi on everyday staples. Creators document item-by-item comparisons showing 15-25% price differences on common groceries.',
    parentNarrativeId: 'narr-005',
    sentiment: -0.65,
    factionMentions: {
      'faction-001': { volume: 165, sentiment: -0.68 },
      'faction-002': { volume: 85, sentiment: -0.58 }
    },
    personIds: ['person-011'],
    organizationIds: ['org-001', 'org-009'],
    locationIds: ['loc-009'],
    eventIds: [],
    volumeOverTime: [
      { date: '2026-01-17', factionVolumes: { 'faction-001': 55, 'faction-002': 28 } },
      { date: '2026-01-18', factionVolumes: { 'faction-001': 98, 'faction-002': 52 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 135, 'faction-002': 72 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 165, 'faction-002': 85 } }
    ]
  },
  {
    id: 'sub-012',
    text: 'WSJ analysis shows Walmart retained pandemic-era price increases',
    description: 'A Wall Street Journal analysis found Walmart has retained many pandemic-era price increases despite supply chain normalization and declining wholesale costs. The report suggests margins have expanded while consumer prices remain elevated.',
    parentNarrativeId: 'narr-005',
    sentiment: -0.55,
    factionMentions: {
      'faction-005': { volume: 95, sentiment: -0.48 },
      'faction-001': { volume: 72, sentiment: -0.62 }
    },
    personIds: [],
    organizationIds: ['org-001', 'org-010'],
    locationIds: [],
    eventIds: [],
    volumeOverTime: [
      { date: '2026-01-17', factionVolumes: { 'faction-005': 32, 'faction-001': 25 } },
      { date: '2026-01-18', factionVolumes: { 'faction-005': 58, 'faction-001': 45 } },
      { date: '2026-01-19', factionVolumes: { 'faction-005': 78, 'faction-001': 62 } },
      { date: '2026-01-20', factionVolumes: { 'faction-005': 95, 'faction-001': 72 } }
    ]
  },

  // Competitor pressure sub-narratives
  {
    id: 'sub-013',
    text: 'Target achieves 98% on-time delivery rate, leading industry metrics',
    description: 'Target reported achieving a 98% on-time delivery rate for online orders, significantly outperforming Walmart\'s reported 89% rate. Analysts credit Target\'s investments in local fulfillment infrastructure.',
    parentNarrativeId: 'narr-006',
    sentiment: 0.45,
    factionMentions: {
      'faction-005': { volume: 85, sentiment: 0.52 },
      'faction-006': { volume: 115, sentiment: 0.68 }
    },
    personIds: ['person-012'],
    organizationIds: ['org-003'],
    locationIds: [],
    eventIds: ['event-011'],
    volumeOverTime: [
      { date: '2026-01-14', factionVolumes: { 'faction-005': 22, 'faction-006': 28 } },
      { date: '2026-01-15', factionVolumes: { 'faction-005': 38, 'faction-006': 52 } },
      { date: '2026-01-16', factionVolumes: { 'faction-005': 55, 'faction-006': 75 } },
      { date: '2026-01-17', factionVolumes: { 'faction-005': 68, 'faction-006': 92 } },
      { date: '2026-01-18', factionVolumes: { 'faction-005': 78, 'faction-006': 105 } },
      { date: '2026-01-19', factionVolumes: { 'faction-005': 82, 'faction-006': 112 } },
      { date: '2026-01-20', factionVolumes: { 'faction-005': 85, 'faction-006': 115 } }
    ]
  },
  {
    id: 'sub-014',
    text: 'Amazon expands sub-24-hour delivery to 85% of US households',
    description: 'Amazon announced expansion of its sub-24-hour delivery service to cover 85% of US households, putting pressure on Walmart\'s same-day delivery capabilities. The expansion leverages Amazon\'s growing network of regional fulfillment centers.',
    parentNarrativeId: 'narr-006',
    sentiment: 0.52,
    factionMentions: {
      'faction-005': { volume: 92, sentiment: 0.48 },
      'faction-006': { volume: 135, sentiment: 0.72 }
    },
    personIds: ['person-013'],
    organizationIds: ['org-004'],
    locationIds: [],
    eventIds: ['event-012'],
    volumeOverTime: [
      { date: '2026-01-16', factionVolumes: { 'faction-005': 28, 'faction-006': 42 } },
      { date: '2026-01-17', factionVolumes: { 'faction-005': 52, 'faction-006': 78 } },
      { date: '2026-01-18', factionVolumes: { 'faction-005': 72, 'faction-006': 105 } },
      { date: '2026-01-19', factionVolumes: { 'faction-005': 85, 'faction-006': 122 } },
      { date: '2026-01-20', factionVolumes: { 'faction-005': 92, 'faction-006': 135 } }
    ]
  },

  // Rural closure sub-narratives
  {
    id: 'sub-015',
    text: 'Missouri town faces "food desert" designation after Walmart closure announcement',
    description: 'A rural Missouri town faces potential USDA "food desert" designation following Walmart\'s announcement to close its only store within 25 miles. Local officials warn residents will need to travel over an hour for fresh groceries.',
    parentNarrativeId: 'narr-007',
    sentiment: -0.78,
    factionMentions: {
      'faction-001': { volume: 145, sentiment: -0.82 },
      'faction-004': { volume: 85, sentiment: -0.68 }
    },
    personIds: ['person-014'],
    organizationIds: ['org-001'],
    locationIds: ['loc-010'],
    eventIds: ['event-013'],
    volumeOverTime: [
      { date: '2026-01-18', factionVolumes: { 'faction-001': 52, 'faction-004': 28 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 105, 'faction-004': 62 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 145, 'faction-004': 85 } }
    ]
  },
  {
    id: 'sub-016',
    text: 'Local politicians call on Walmart to maintain stores as community obligation',
    description: 'Local and state politicians are calling on Walmart to maintain rural stores as a "community obligation," arguing the company benefited from tax incentives and drove out competitors when opening these locations.',
    parentNarrativeId: 'narr-007',
    sentiment: -0.58,
    factionMentions: {
      'faction-004': { volume: 65, sentiment: -0.55 },
      'faction-001': { volume: 48, sentiment: -0.62 }
    },
    personIds: ['person-014'],
    organizationIds: ['org-011'],
    locationIds: ['loc-010', 'loc-011'],
    eventIds: ['event-014'],
    volumeOverTime: [
      { date: '2026-01-19', factionVolumes: { 'faction-004': 28, 'faction-001': 18 } },
      { date: '2026-01-20', factionVolumes: { 'faction-004': 65, 'faction-001': 48 } }
    ]
  }
];
