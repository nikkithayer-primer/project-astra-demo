/**
 * Narratives for Walmart Brand dataset
 */

export const narratives = [
  {
    id: 'narr-001',
    text: 'Self-checkout frustrations spark viral complaints about theft accusations and customer treatment',
    description: 'A wave of customer complaints has gone viral on social media after multiple incidents where Walmart customers were stopped, searched, or accused of theft at self-checkout stations. Videos show confrontations between customers and loss prevention staff, with many customers claiming they were humiliated despite having receipts. The controversy intensified after a class-action lawsuit was filed in Texas alleging systematic false detention of customers. Walmart has defended its loss prevention practices while announcing plans to add more staffed checkout lanes in select stores.',
    missionId: 'mission-001',
    status: 'in_progress',
    sentiment: -0.68,
    subNarrativeIds: ['sub-001', 'sub-002', 'sub-003'],
    factionMentions: {
      'faction-001': { volume: 685, sentiment: -0.82 },
      'faction-002': { volume: 245, sentiment: -0.72 },
      'faction-005': { volume: 165, sentiment: -0.35 }
    },
    sourceVolumes: {
      'pub-tiktok': { volume: 385, sentiment: -0.75 },
      'pub-x': { volume: 295, sentiment: -0.68 },
      'pub-reddit': { volume: 185, sentiment: -0.72 },
      'pub-facebook': { volume: 145, sentiment: -0.65 },
      'pub-trustpilot': { volume: 95, sentiment: -0.78 },
      'pub-localnews': { volume: 65, sentiment: -0.45 },
      'pub-usatoday': { volume: 42, sentiment: -0.38 }
    },
    factionSources: {
      'faction-001': { 'pub-tiktok': 285, 'pub-x': 175, 'pub-reddit': 125, 'pub-facebook': 100 },
      'faction-002': { 'pub-reddit': 95, 'pub-x': 85, 'pub-tiktok': 65 },
      'faction-005': { 'pub-wsj': 45, 'pub-bloomberg': 38, 'pub-retaildive': 52, 'pub-x': 30 }
    },
    personIds: ['person-001', 'person-002', 'person-008'],
    organizationIds: ['org-001', 'org-002'],
    locationIds: ['loc-002', 'loc-003'],
    eventIds: ['event-001', 'event-002', 'event-003'],
    volumeOverTime: [
      { date: '2026-01-14', factionVolumes: { 'faction-001': 125, 'faction-002': 45, 'faction-005': 28 }, sourceVolumes: { 'pub-tiktok': 72, 'pub-x': 55, 'pub-reddit': 35, 'pub-facebook': 28 } },
      { date: '2026-01-15', factionVolumes: { 'faction-001': 195, 'faction-002': 72, 'faction-005': 42 }, sourceVolumes: { 'pub-tiktok': 115, 'pub-x': 85, 'pub-reddit': 55, 'pub-facebook': 42 } },
      { date: '2026-01-16', factionVolumes: { 'faction-001': 285, 'faction-002': 105, 'faction-005': 65 }, sourceVolumes: { 'pub-tiktok': 165, 'pub-x': 125, 'pub-reddit': 78, 'pub-facebook': 62 } },
      { date: '2026-01-17', factionVolumes: { 'faction-001': 425, 'faction-002': 155, 'faction-005': 95 }, sourceVolumes: { 'pub-tiktok': 245, 'pub-x': 185, 'pub-reddit': 115, 'pub-facebook': 92 } },
      { date: '2026-01-18', factionVolumes: { 'faction-001': 545, 'faction-002': 195, 'faction-005': 125 }, sourceVolumes: { 'pub-tiktok': 315, 'pub-x': 235, 'pub-reddit': 148, 'pub-facebook': 118 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 625, 'faction-002': 225, 'faction-005': 148 }, sourceVolumes: { 'pub-tiktok': 358, 'pub-x': 272, 'pub-reddit': 168, 'pub-facebook': 135 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 685, 'faction-002': 245, 'faction-005': 165 }, sourceVolumes: { 'pub-tiktok': 385, 'pub-x': 295, 'pub-reddit': 185, 'pub-facebook': 145 } }
    ],
    documentIds: ['doc-001', 'doc-002', 'doc-003', 'doc-004'],
    createdAt: '2026-01-14T00:00:00Z'
  },
  {
    id: 'narr-002',
    text: 'Widespread reports of empty shelves and out-of-stock items frustrate Walmart shoppers',
    description: 'Customers across multiple states are reporting persistent empty shelves and out-of-stock items at Walmart stores, particularly in grocery and household essentials. Social media posts show bare aisles, with some customers driving to multiple locations without finding needed products. Walmart has attributed the issues to supply chain disruptions and regional distribution challenges, but retail analysts note the company\'s inventory management system may need significant upgrades. The complaints come as competitors like Target report improved in-stock rates.',
    missionId: 'mission-002',
    status: 'in_progress',
    sentiment: -0.55,
    subNarrativeIds: ['sub-004', 'sub-005'],
    factionMentions: {
      'faction-001': { volume: 425, sentiment: -0.72 },
      'faction-005': { volume: 185, sentiment: -0.42 },
      'faction-006': { volume: 145, sentiment: 0.35 }
    },
    sourceVolumes: {
      'pub-x': { volume: 225, sentiment: -0.62 },
      'pub-facebook': { volume: 185, sentiment: -0.68 },
      'pub-reddit': { volume: 145, sentiment: -0.58 },
      'pub-trustpilot': { volume: 85, sentiment: -0.75 },
      'pub-yelp': { volume: 72, sentiment: -0.72 },
      'pub-retaildive': { volume: 45, sentiment: -0.28 },
      'pub-wsj': { volume: 38, sentiment: -0.22 }
    },
    factionSources: {
      'faction-001': { 'pub-x': 165, 'pub-facebook': 145, 'pub-reddit': 95, 'pub-trustpilot': 65 },
      'faction-005': { 'pub-retaildive': 42, 'pub-wsj': 35, 'pub-bloomberg': 48, 'pub-x': 60 },
      'faction-006': { 'pub-x': 55, 'pub-reddit': 48, 'pub-tiktok': 42 }
    },
    personIds: ['person-001', 'person-009', 'person-010'],
    organizationIds: ['org-001', 'org-003', 'org-004'],
    locationIds: ['loc-001', 'loc-004', 'loc-005'],
    eventIds: ['event-004', 'event-005'],
    volumeOverTime: [
      { date: '2026-01-15', factionVolumes: { 'faction-001': 145, 'faction-005': 62, 'faction-006': 48 }, sourceVolumes: { 'pub-x': 78, 'pub-facebook': 62, 'pub-reddit': 48 } },
      { date: '2026-01-16', factionVolumes: { 'faction-001': 225, 'faction-005': 95, 'faction-006': 72 }, sourceVolumes: { 'pub-x': 118, 'pub-facebook': 95, 'pub-reddit': 75 } },
      { date: '2026-01-17', factionVolumes: { 'faction-001': 305, 'faction-005': 128, 'faction-006': 98 }, sourceVolumes: { 'pub-x': 158, 'pub-facebook': 128, 'pub-reddit': 102 } },
      { date: '2026-01-18', factionVolumes: { 'faction-001': 365, 'faction-005': 155, 'faction-006': 122 }, sourceVolumes: { 'pub-x': 192, 'pub-facebook': 155, 'pub-reddit': 125 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 425, 'faction-005': 185, 'faction-006': 145 }, sourceVolumes: { 'pub-x': 225, 'pub-facebook': 185, 'pub-reddit': 145 } }
    ],
    documentIds: ['doc-005', 'doc-006', 'doc-007'],
    createdAt: '2026-01-15T00:00:00Z'
  },
  {
    id: 'narr-003',
    text: 'Walmart workers share stories of understaffing and poor working conditions on social media',
    description: 'Current and former Walmart employees are sharing videos and posts detailing challenging working conditions, including understaffing, mandatory overtime, and inconsistent scheduling. The hashtag #WalmartWorkers has gained traction on TikTok with over 50 million views. Workers describe being responsible for multiple departments simultaneously while customers complain about lack of assistance. Labor advocates are amplifying these stories, calling for improved wages and working conditions. Walmart has responded by highlighting its $14 minimum wage and associate benefits.',
    missionId: 'mission-001',
    status: 'under_investigation',
    sentiment: -0.62,
    subNarrativeIds: ['sub-006', 'sub-007', 'sub-008'],
    factionMentions: {
      'faction-002': { volume: 485, sentiment: -0.78 },
      'faction-003': { volume: 345, sentiment: -0.82 },
      'faction-001': { volume: 225, sentiment: -0.55 },
      'faction-005': { volume: 145, sentiment: -0.38 }
    },
    sourceVolumes: {
      'pub-tiktok': { volume: 345, sentiment: -0.72 },
      'pub-reddit': { volume: 285, sentiment: -0.75 },
      'pub-x': { volume: 195, sentiment: -0.65 },
      'pub-facebook': { volume: 125, sentiment: -0.58 },
      'pub-bloomberg': { volume: 55, sentiment: -0.35 },
      'pub-wsj': { volume: 48, sentiment: -0.28 },
      'pub-reuters': { volume: 42, sentiment: -0.22 }
    },
    factionSources: {
      'faction-002': { 'pub-tiktok': 225, 'pub-reddit': 185, 'pub-x': 75 },
      'faction-003': { 'pub-reddit': 145, 'pub-x': 95, 'pub-tiktok': 105 },
      'faction-001': { 'pub-facebook': 95, 'pub-x': 75, 'pub-reddit': 55 },
      'faction-005': { 'pub-bloomberg': 48, 'pub-wsj': 42, 'pub-reuters': 35, 'pub-x': 20 }
    },
    personIds: ['person-003', 'person-004', 'person-005'],
    organizationIds: ['org-001', 'org-005', 'org-006'],
    locationIds: ['loc-001', 'loc-006'],
    eventIds: ['event-006', 'event-007'],
    volumeOverTime: [
      { date: '2026-01-13', factionVolumes: { 'faction-002': 125, 'faction-003': 92, 'faction-001': 58, 'faction-005': 38 }, sourceVolumes: { 'pub-tiktok': 92, 'pub-reddit': 75, 'pub-x': 52 } },
      { date: '2026-01-14', factionVolumes: { 'faction-002': 195, 'faction-003': 145, 'faction-001': 92, 'faction-005': 58 }, sourceVolumes: { 'pub-tiktok': 145, 'pub-reddit': 118, 'pub-x': 82 } },
      { date: '2026-01-15', factionVolumes: { 'faction-002': 275, 'faction-003': 205, 'faction-001': 128, 'faction-005': 82 }, sourceVolumes: { 'pub-tiktok': 198, 'pub-reddit': 165, 'pub-x': 115 } },
      { date: '2026-01-16', factionVolumes: { 'faction-002': 345, 'faction-003': 258, 'faction-001': 165, 'faction-005': 105 }, sourceVolumes: { 'pub-tiktok': 252, 'pub-reddit': 208, 'pub-x': 145 } },
      { date: '2026-01-17', factionVolumes: { 'faction-002': 415, 'faction-003': 305, 'faction-001': 195, 'faction-005': 125 }, sourceVolumes: { 'pub-tiktok': 302, 'pub-reddit': 248, 'pub-x': 172 } },
      { date: '2026-01-18', factionVolumes: { 'faction-002': 485, 'faction-003': 345, 'faction-001': 225, 'faction-005': 145 }, sourceVolumes: { 'pub-tiktok': 345, 'pub-reddit': 285, 'pub-x': 195 } }
    ],
    documentIds: ['doc-008', 'doc-009', 'doc-010', 'doc-011'],
    createdAt: '2026-01-13T00:00:00Z'
  },
  {
    id: 'narr-004',
    text: 'Great Value brand recall expands after contamination found in multiple products',
    description: 'The FDA has expanded a recall of Walmart\'s Great Value brand products after discovering potential Listeria contamination in frozen vegetables and salad mixes. The recall now covers 15 product SKUs sold across all 50 states. Three hospitalizations have been linked to the contamination, though no deaths have been reported. Consumer advocacy groups are calling for stricter quality controls on private-label products. Walmart has issued refunds and launched an internal investigation into its supplier network.',
    missionId: 'mission-003',
    status: 'in_progress',
    sentiment: -0.72,
    subNarrativeIds: ['sub-009', 'sub-010'],
    factionMentions: {
      'faction-004': { volume: 385, sentiment: -0.85 },
      'faction-001': { volume: 295, sentiment: -0.78 },
      'faction-005': { volume: 165, sentiment: -0.55 }
    },
    sourceVolumes: {
      'pub-localnews': { volume: 185, sentiment: -0.68 },
      'pub-usatoday': { volume: 125, sentiment: -0.62 },
      'pub-reuters': { volume: 98, sentiment: -0.55 },
      'pub-ap': { volume: 88, sentiment: -0.52 },
      'pub-x': { volume: 165, sentiment: -0.72 },
      'pub-facebook': { volume: 145, sentiment: -0.75 },
      'pub-consumeraffairs': { volume: 95, sentiment: -0.82 }
    },
    factionSources: {
      'faction-004': { 'pub-consumeraffairs': 85, 'pub-x': 95, 'pub-facebook': 85, 'pub-localnews': 75, 'pub-usatoday': 45 },
      'faction-001': { 'pub-x': 105, 'pub-facebook': 95, 'pub-localnews': 65, 'pub-reddit': 30 },
      'faction-005': { 'pub-reuters': 55, 'pub-wsj': 42, 'pub-bloomberg': 38, 'pub-ap': 30 }
    },
    personIds: ['person-006', 'person-007', 'person-011'],
    organizationIds: ['org-001', 'org-007', 'org-008', 'org-009'],
    locationIds: ['loc-001', 'loc-007'],
    eventIds: ['event-008', 'event-009', 'event-010'],
    volumeOverTime: [
      { date: '2026-01-16', factionVolumes: { 'faction-004': 95, 'faction-001': 72, 'faction-005': 42 }, sourceVolumes: { 'pub-localnews': 45, 'pub-usatoday': 32, 'pub-x': 42 } },
      { date: '2026-01-17', factionVolumes: { 'faction-004': 185, 'faction-001': 145, 'faction-005': 85 }, sourceVolumes: { 'pub-localnews': 92, 'pub-usatoday': 65, 'pub-x': 85, 'pub-reuters': 48 } },
      { date: '2026-01-18', factionVolumes: { 'faction-004': 285, 'faction-001': 225, 'faction-005': 125 }, sourceVolumes: { 'pub-localnews': 142, 'pub-usatoday': 98, 'pub-x': 128, 'pub-reuters': 75 } },
      { date: '2026-01-19', factionVolumes: { 'faction-004': 345, 'faction-001': 265, 'faction-005': 148 }, sourceVolumes: { 'pub-localnews': 168, 'pub-usatoday': 115, 'pub-x': 152, 'pub-reuters': 88 } },
      { date: '2026-01-20', factionVolumes: { 'faction-004': 385, 'faction-001': 295, 'faction-005': 165 }, sourceVolumes: { 'pub-localnews': 185, 'pub-usatoday': 125, 'pub-x': 165, 'pub-reuters': 98 } }
    ],
    documentIds: ['doc-012', 'doc-013', 'doc-014'],
    createdAt: '2026-01-16T00:00:00Z'
  },
  {
    id: 'narr-005',
    text: 'Customers complain Walmart prices no longer competitive as inflation pricing sticks',
    description: 'Social media discussions and consumer surveys indicate growing perception that Walmart\'s prices are no longer significantly lower than competitors. Analysis shows Walmart retained pandemic-era price increases on many items even as wholesale costs declined. The narrative has intensified after viral TikTok videos showed price comparisons between Walmart, Aldi, and Amazon showing Walmart losing on several staple items. Retail analysts note this threatens Walmart\'s core brand promise of "Everyday Low Prices."',
    missionId: 'mission-002',
    status: 'new',
    sentiment: -0.58,
    subNarrativeIds: ['sub-011', 'sub-012'],
    factionMentions: {
      'faction-001': { volume: 365, sentiment: -0.72 },
      'faction-005': { volume: 195, sentiment: -0.45 },
      'faction-006': { volume: 175, sentiment: 0.42 }
    },
    sourceVolumes: {
      'pub-tiktok': { volume: 225, sentiment: -0.65 },
      'pub-x': { volume: 185, sentiment: -0.58 },
      'pub-reddit': { volume: 145, sentiment: -0.62 },
      'pub-facebook': { volume: 95, sentiment: -0.55 },
      'pub-wsj': { volume: 52, sentiment: -0.35 },
      'pub-bloomberg': { volume: 45, sentiment: -0.32 },
      'pub-retaildive': { volume: 38, sentiment: -0.28 }
    },
    factionSources: {
      'faction-001': { 'pub-tiktok': 165, 'pub-x': 125, 'pub-reddit': 95, 'pub-facebook': 72 },
      'faction-005': { 'pub-wsj': 48, 'pub-bloomberg': 42, 'pub-retaildive': 35, 'pub-x': 70 },
      'faction-006': { 'pub-tiktok': 72, 'pub-x': 55, 'pub-reddit': 48 }
    },
    personIds: ['person-001', 'person-010', 'person-012'],
    organizationIds: ['org-001', 'org-010', 'org-011'],
    locationIds: ['loc-001'],
    eventIds: ['event-011'],
    volumeOverTime: [
      { date: '2026-01-17', factionVolumes: { 'faction-001': 125, 'faction-005': 65, 'faction-006': 58 }, sourceVolumes: { 'pub-tiktok': 75, 'pub-x': 62, 'pub-reddit': 48 } },
      { date: '2026-01-18', factionVolumes: { 'faction-001': 225, 'faction-005': 125, 'faction-006': 108 }, sourceVolumes: { 'pub-tiktok': 138, 'pub-x': 115, 'pub-reddit': 92 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 305, 'faction-005': 165, 'faction-006': 145 }, sourceVolumes: { 'pub-tiktok': 185, 'pub-x': 155, 'pub-reddit': 122 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 365, 'faction-005': 195, 'faction-006': 175 }, sourceVolumes: { 'pub-tiktok': 225, 'pub-x': 185, 'pub-reddit': 145 } }
    ],
    documentIds: ['doc-015', 'doc-016', 'doc-017'],
    createdAt: '2026-01-17T00:00:00Z'
  },
  {
    id: 'narr-006',
    text: 'Target and Amazon gain ground with faster delivery, putting pressure on Walmart',
    description: 'Retail analysts report Target\'s same-day delivery service has achieved 98% on-time delivery rates, while Amazon continues expanding its sub-24-hour delivery coverage. Walmart\'s delivery service has faced criticism for delays, substitutions, and quality issues with grocery items. Consumer sentiment surveys show a 12-point swing toward competitors for online grocery orders. Walmart has announced a $1.5 billion investment in delivery infrastructure, but analysts question if it\'s enough to close the gap.',
    missionId: 'mission-004',
    status: 'in_progress',
    sentiment: -0.42,
    subNarrativeIds: ['sub-013', 'sub-014'],
    factionMentions: {
      'faction-006': { volume: 425, sentiment: 0.65 },
      'faction-005': { volume: 285, sentiment: -0.35 },
      'faction-001': { volume: 185, sentiment: -0.52 }
    },
    sourceVolumes: {
      'pub-retaildive': { volume: 125, sentiment: -0.28 },
      'pub-modernretail': { volume: 98, sentiment: -0.32 },
      'pub-wsj': { volume: 85, sentiment: -0.25 },
      'pub-bloomberg': { volume: 78, sentiment: -0.22 },
      'pub-x': { volume: 165, sentiment: -0.45 },
      'pub-reddit': { volume: 125, sentiment: 0.38 },
      'pub-tiktok': { volume: 95, sentiment: 0.42 }
    },
    factionSources: {
      'faction-006': { 'pub-reddit': 115, 'pub-x': 95, 'pub-tiktok': 85, 'pub-retaildive': 65, 'pub-modernretail': 55 },
      'faction-005': { 'pub-retaildive': 85, 'pub-wsj': 72, 'pub-bloomberg': 68, 'pub-modernretail': 60 },
      'faction-001': { 'pub-x': 85, 'pub-facebook': 55, 'pub-reddit': 45 }
    },
    personIds: ['person-001', 'person-013', 'person-014', 'person-015'],
    organizationIds: ['org-001', 'org-003', 'org-004', 'org-012'],
    locationIds: ['loc-001', 'loc-008'],
    eventIds: ['event-012', 'event-013'],
    volumeOverTime: [
      { date: '2026-01-14', factionVolumes: { 'faction-006': 145, 'faction-005': 95, 'faction-001': 62 }, sourceVolumes: { 'pub-retaildive': 42, 'pub-x': 55, 'pub-reddit': 42 } },
      { date: '2026-01-15', factionVolumes: { 'faction-006': 225, 'faction-005': 148, 'faction-001': 95 }, sourceVolumes: { 'pub-retaildive': 68, 'pub-x': 85, 'pub-reddit': 65 } },
      { date: '2026-01-16', factionVolumes: { 'faction-006': 305, 'faction-005': 198, 'faction-001': 128 }, sourceVolumes: { 'pub-retaildive': 92, 'pub-x': 115, 'pub-reddit': 88 } },
      { date: '2026-01-17', factionVolumes: { 'faction-006': 365, 'faction-005': 242, 'faction-001': 155 }, sourceVolumes: { 'pub-retaildive': 112, 'pub-x': 142, 'pub-reddit': 108 } },
      { date: '2026-01-18', factionVolumes: { 'faction-006': 425, 'faction-005': 285, 'faction-001': 185 }, sourceVolumes: { 'pub-retaildive': 125, 'pub-x': 165, 'pub-reddit': 125 } }
    ],
    documentIds: ['doc-018', 'doc-019', 'doc-020'],
    createdAt: '2026-01-14T00:00:00Z'
  },
  {
    id: 'narr-007',
    text: 'Rural community protests Walmart store closure, citing economic devastation',
    description: 'Residents of several small towns across the Midwest and South are protesting Walmart\'s decision to close underperforming stores, arguing the closures will devastate local economies. In many of these communities, Walmart had previously driven out local retailers, leaving residents with no nearby shopping options. Local politicians are calling for Walmart to maintain stores as community obligations. The narrative intersects with broader discussions about corporate responsibility to rural America.',
    missionId: 'mission-001',
    status: 'new',
    sentiment: -0.65,
    subNarrativeIds: ['sub-015', 'sub-016'],
    factionMentions: {
      'faction-001': { volume: 285, sentiment: -0.75 },
      'faction-003': { volume: 165, sentiment: -0.68 },
      'faction-005': { volume: 125, sentiment: -0.35 }
    },
    sourceVolumes: {
      'pub-localnews': { volume: 225, sentiment: -0.65 },
      'pub-facebook': { volume: 185, sentiment: -0.72 },
      'pub-x': { volume: 125, sentiment: -0.58 },
      'pub-usatoday': { volume: 65, sentiment: -0.45 },
      'pub-wsj': { volume: 42, sentiment: -0.28 },
      'pub-ap': { volume: 38, sentiment: -0.32 }
    },
    factionSources: {
      'faction-001': { 'pub-facebook': 145, 'pub-localnews': 85, 'pub-x': 55 },
      'faction-003': { 'pub-localnews': 75, 'pub-x': 55, 'pub-facebook': 35 },
      'faction-005': { 'pub-wsj': 38, 'pub-usatoday': 35, 'pub-ap': 28, 'pub-bloomberg': 24 }
    },
    personIds: ['person-001', 'person-016', 'person-017'],
    organizationIds: ['org-001', 'org-013'],
    locationIds: ['loc-009', 'loc-010'],
    eventIds: ['event-014'],
    volumeOverTime: [
      { date: '2026-01-18', factionVolumes: { 'faction-001': 95, 'faction-003': 55, 'faction-005': 42 }, sourceVolumes: { 'pub-localnews': 75, 'pub-facebook': 62, 'pub-x': 42 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 185, 'faction-003': 108, 'faction-005': 82 }, sourceVolumes: { 'pub-localnews': 148, 'pub-facebook': 122, 'pub-x': 82 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 285, 'faction-003': 165, 'faction-005': 125 }, sourceVolumes: { 'pub-localnews': 225, 'pub-facebook': 185, 'pub-x': 125 } }
    ],
    documentIds: ['doc-021', 'doc-022', 'doc-023'],
    createdAt: '2026-01-18T00:00:00Z'
  }
];
