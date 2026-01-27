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
      'src-tiktok': { volume: 385, sentiment: -0.75 },
      'src-x': { volume: 295, sentiment: -0.68 },
      'src-reddit': { volume: 185, sentiment: -0.72 },
      'src-facebook': { volume: 145, sentiment: -0.65 },
      'src-trustpilot': { volume: 95, sentiment: -0.78 },
      'src-localnews': { volume: 65, sentiment: -0.45 },
      'src-usatoday': { volume: 42, sentiment: -0.38 }
    },
    factionSources: {
      'faction-001': { 'src-tiktok': 285, 'src-x': 175, 'src-reddit': 125, 'src-facebook': 100 },
      'faction-002': { 'src-reddit': 95, 'src-x': 85, 'src-tiktok': 65 },
      'faction-005': { 'src-wsj': 45, 'src-bloomberg': 38, 'src-retaildive': 52, 'src-x': 30 }
    },
    personIds: ['person-001', 'person-002', 'person-008'],
    organizationIds: ['org-001', 'org-002'],
    locationIds: ['loc-002', 'loc-003'],
    eventIds: ['event-001', 'event-002', 'event-003'],
    volumeOverTime: [
      { date: '2026-01-14', factionVolumes: { 'faction-001': 125, 'faction-002': 45, 'faction-005': 28 }, sourceVolumes: { 'src-tiktok': 72, 'src-x': 55, 'src-reddit': 35, 'src-facebook': 28 } },
      { date: '2026-01-15', factionVolumes: { 'faction-001': 195, 'faction-002': 72, 'faction-005': 42 }, sourceVolumes: { 'src-tiktok': 115, 'src-x': 85, 'src-reddit': 55, 'src-facebook': 42 } },
      { date: '2026-01-16', factionVolumes: { 'faction-001': 285, 'faction-002': 105, 'faction-005': 65 }, sourceVolumes: { 'src-tiktok': 165, 'src-x': 125, 'src-reddit': 78, 'src-facebook': 62 } },
      { date: '2026-01-17', factionVolumes: { 'faction-001': 425, 'faction-002': 155, 'faction-005': 95 }, sourceVolumes: { 'src-tiktok': 245, 'src-x': 185, 'src-reddit': 115, 'src-facebook': 92 } },
      { date: '2026-01-18', factionVolumes: { 'faction-001': 545, 'faction-002': 195, 'faction-005': 125 }, sourceVolumes: { 'src-tiktok': 315, 'src-x': 235, 'src-reddit': 148, 'src-facebook': 118 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 625, 'faction-002': 225, 'faction-005': 148 }, sourceVolumes: { 'src-tiktok': 358, 'src-x': 272, 'src-reddit': 168, 'src-facebook': 135 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 685, 'faction-002': 245, 'faction-005': 165 }, sourceVolumes: { 'src-tiktok': 385, 'src-x': 295, 'src-reddit': 185, 'src-facebook': 145 } }
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
      'src-x': { volume: 225, sentiment: -0.62 },
      'src-facebook': { volume: 185, sentiment: -0.68 },
      'src-reddit': { volume: 145, sentiment: -0.58 },
      'src-trustpilot': { volume: 85, sentiment: -0.75 },
      'src-yelp': { volume: 72, sentiment: -0.72 },
      'src-retaildive': { volume: 45, sentiment: -0.28 },
      'src-wsj': { volume: 38, sentiment: -0.22 }
    },
    factionSources: {
      'faction-001': { 'src-x': 165, 'src-facebook': 145, 'src-reddit': 95, 'src-trustpilot': 65 },
      'faction-005': { 'src-retaildive': 42, 'src-wsj': 35, 'src-bloomberg': 48, 'src-x': 60 },
      'faction-006': { 'src-x': 55, 'src-reddit': 48, 'src-tiktok': 42 }
    },
    personIds: ['person-001', 'person-009', 'person-010'],
    organizationIds: ['org-001', 'org-003', 'org-004'],
    locationIds: ['loc-001', 'loc-004', 'loc-005'],
    eventIds: ['event-004', 'event-005'],
    volumeOverTime: [
      { date: '2026-01-15', factionVolumes: { 'faction-001': 145, 'faction-005': 62, 'faction-006': 48 }, sourceVolumes: { 'src-x': 78, 'src-facebook': 62, 'src-reddit': 48 } },
      { date: '2026-01-16', factionVolumes: { 'faction-001': 225, 'faction-005': 95, 'faction-006': 72 }, sourceVolumes: { 'src-x': 118, 'src-facebook': 95, 'src-reddit': 75 } },
      { date: '2026-01-17', factionVolumes: { 'faction-001': 305, 'faction-005': 128, 'faction-006': 98 }, sourceVolumes: { 'src-x': 158, 'src-facebook': 128, 'src-reddit': 102 } },
      { date: '2026-01-18', factionVolumes: { 'faction-001': 365, 'faction-005': 155, 'faction-006': 122 }, sourceVolumes: { 'src-x': 192, 'src-facebook': 155, 'src-reddit': 125 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 425, 'faction-005': 185, 'faction-006': 145 }, sourceVolumes: { 'src-x': 225, 'src-facebook': 185, 'src-reddit': 145 } }
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
      'src-tiktok': { volume: 345, sentiment: -0.72 },
      'src-reddit': { volume: 285, sentiment: -0.75 },
      'src-x': { volume: 195, sentiment: -0.65 },
      'src-facebook': { volume: 125, sentiment: -0.58 },
      'src-bloomberg': { volume: 55, sentiment: -0.35 },
      'src-wsj': { volume: 48, sentiment: -0.28 },
      'src-reuters': { volume: 42, sentiment: -0.22 }
    },
    factionSources: {
      'faction-002': { 'src-tiktok': 225, 'src-reddit': 185, 'src-x': 75 },
      'faction-003': { 'src-reddit': 145, 'src-x': 95, 'src-tiktok': 105 },
      'faction-001': { 'src-facebook': 95, 'src-x': 75, 'src-reddit': 55 },
      'faction-005': { 'src-bloomberg': 48, 'src-wsj': 42, 'src-reuters': 35, 'src-x': 20 }
    },
    personIds: ['person-003', 'person-004', 'person-005'],
    organizationIds: ['org-001', 'org-005', 'org-006'],
    locationIds: ['loc-001', 'loc-006'],
    eventIds: ['event-006', 'event-007'],
    volumeOverTime: [
      { date: '2026-01-13', factionVolumes: { 'faction-002': 125, 'faction-003': 92, 'faction-001': 58, 'faction-005': 38 }, sourceVolumes: { 'src-tiktok': 92, 'src-reddit': 75, 'src-x': 52 } },
      { date: '2026-01-14', factionVolumes: { 'faction-002': 195, 'faction-003': 145, 'faction-001': 92, 'faction-005': 58 }, sourceVolumes: { 'src-tiktok': 145, 'src-reddit': 118, 'src-x': 82 } },
      { date: '2026-01-15', factionVolumes: { 'faction-002': 275, 'faction-003': 205, 'faction-001': 128, 'faction-005': 82 }, sourceVolumes: { 'src-tiktok': 198, 'src-reddit': 165, 'src-x': 115 } },
      { date: '2026-01-16', factionVolumes: { 'faction-002': 345, 'faction-003': 258, 'faction-001': 165, 'faction-005': 105 }, sourceVolumes: { 'src-tiktok': 252, 'src-reddit': 208, 'src-x': 145 } },
      { date: '2026-01-17', factionVolumes: { 'faction-002': 415, 'faction-003': 305, 'faction-001': 195, 'faction-005': 125 }, sourceVolumes: { 'src-tiktok': 302, 'src-reddit': 248, 'src-x': 172 } },
      { date: '2026-01-18', factionVolumes: { 'faction-002': 485, 'faction-003': 345, 'faction-001': 225, 'faction-005': 145 }, sourceVolumes: { 'src-tiktok': 345, 'src-reddit': 285, 'src-x': 195 } }
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
      'src-localnews': { volume: 185, sentiment: -0.68 },
      'src-usatoday': { volume: 125, sentiment: -0.62 },
      'src-reuters': { volume: 98, sentiment: -0.55 },
      'src-ap': { volume: 88, sentiment: -0.52 },
      'src-x': { volume: 165, sentiment: -0.72 },
      'src-facebook': { volume: 145, sentiment: -0.75 },
      'src-consumeraffairs': { volume: 95, sentiment: -0.82 }
    },
    factionSources: {
      'faction-004': { 'src-consumeraffairs': 85, 'src-x': 95, 'src-facebook': 85, 'src-localnews': 75, 'src-usatoday': 45 },
      'faction-001': { 'src-x': 105, 'src-facebook': 95, 'src-localnews': 65, 'src-reddit': 30 },
      'faction-005': { 'src-reuters': 55, 'src-wsj': 42, 'src-bloomberg': 38, 'src-ap': 30 }
    },
    personIds: ['person-006', 'person-007', 'person-011'],
    organizationIds: ['org-001', 'org-007', 'org-008', 'org-009'],
    locationIds: ['loc-001', 'loc-007'],
    eventIds: ['event-008', 'event-009', 'event-010'],
    volumeOverTime: [
      { date: '2026-01-16', factionVolumes: { 'faction-004': 95, 'faction-001': 72, 'faction-005': 42 }, sourceVolumes: { 'src-localnews': 45, 'src-usatoday': 32, 'src-x': 42 } },
      { date: '2026-01-17', factionVolumes: { 'faction-004': 185, 'faction-001': 145, 'faction-005': 85 }, sourceVolumes: { 'src-localnews': 92, 'src-usatoday': 65, 'src-x': 85, 'src-reuters': 48 } },
      { date: '2026-01-18', factionVolumes: { 'faction-004': 285, 'faction-001': 225, 'faction-005': 125 }, sourceVolumes: { 'src-localnews': 142, 'src-usatoday': 98, 'src-x': 128, 'src-reuters': 75 } },
      { date: '2026-01-19', factionVolumes: { 'faction-004': 345, 'faction-001': 265, 'faction-005': 148 }, sourceVolumes: { 'src-localnews': 168, 'src-usatoday': 115, 'src-x': 152, 'src-reuters': 88 } },
      { date: '2026-01-20', factionVolumes: { 'faction-004': 385, 'faction-001': 295, 'faction-005': 165 }, sourceVolumes: { 'src-localnews': 185, 'src-usatoday': 125, 'src-x': 165, 'src-reuters': 98 } }
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
      'src-tiktok': { volume: 225, sentiment: -0.65 },
      'src-x': { volume: 185, sentiment: -0.58 },
      'src-reddit': { volume: 145, sentiment: -0.62 },
      'src-facebook': { volume: 95, sentiment: -0.55 },
      'src-wsj': { volume: 52, sentiment: -0.35 },
      'src-bloomberg': { volume: 45, sentiment: -0.32 },
      'src-retaildive': { volume: 38, sentiment: -0.28 }
    },
    factionSources: {
      'faction-001': { 'src-tiktok': 165, 'src-x': 125, 'src-reddit': 95, 'src-facebook': 72 },
      'faction-005': { 'src-wsj': 48, 'src-bloomberg': 42, 'src-retaildive': 35, 'src-x': 70 },
      'faction-006': { 'src-tiktok': 72, 'src-x': 55, 'src-reddit': 48 }
    },
    personIds: ['person-001', 'person-010', 'person-012'],
    organizationIds: ['org-001', 'org-010', 'org-011'],
    locationIds: ['loc-001'],
    eventIds: ['event-011'],
    volumeOverTime: [
      { date: '2026-01-17', factionVolumes: { 'faction-001': 125, 'faction-005': 65, 'faction-006': 58 }, sourceVolumes: { 'src-tiktok': 75, 'src-x': 62, 'src-reddit': 48 } },
      { date: '2026-01-18', factionVolumes: { 'faction-001': 225, 'faction-005': 125, 'faction-006': 108 }, sourceVolumes: { 'src-tiktok': 138, 'src-x': 115, 'src-reddit': 92 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 305, 'faction-005': 165, 'faction-006': 145 }, sourceVolumes: { 'src-tiktok': 185, 'src-x': 155, 'src-reddit': 122 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 365, 'faction-005': 195, 'faction-006': 175 }, sourceVolumes: { 'src-tiktok': 225, 'src-x': 185, 'src-reddit': 145 } }
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
      'src-retaildive': { volume: 125, sentiment: -0.28 },
      'src-modernretail': { volume: 98, sentiment: -0.32 },
      'src-wsj': { volume: 85, sentiment: -0.25 },
      'src-bloomberg': { volume: 78, sentiment: -0.22 },
      'src-x': { volume: 165, sentiment: -0.45 },
      'src-reddit': { volume: 125, sentiment: 0.38 },
      'src-tiktok': { volume: 95, sentiment: 0.42 }
    },
    factionSources: {
      'faction-006': { 'src-reddit': 115, 'src-x': 95, 'src-tiktok': 85, 'src-retaildive': 65, 'src-modernretail': 55 },
      'faction-005': { 'src-retaildive': 85, 'src-wsj': 72, 'src-bloomberg': 68, 'src-modernretail': 60 },
      'faction-001': { 'src-x': 85, 'src-facebook': 55, 'src-reddit': 45 }
    },
    personIds: ['person-001', 'person-013', 'person-014', 'person-015'],
    organizationIds: ['org-001', 'org-003', 'org-004', 'org-012'],
    locationIds: ['loc-001', 'loc-008'],
    eventIds: ['event-012', 'event-013'],
    volumeOverTime: [
      { date: '2026-01-14', factionVolumes: { 'faction-006': 145, 'faction-005': 95, 'faction-001': 62 }, sourceVolumes: { 'src-retaildive': 42, 'src-x': 55, 'src-reddit': 42 } },
      { date: '2026-01-15', factionVolumes: { 'faction-006': 225, 'faction-005': 148, 'faction-001': 95 }, sourceVolumes: { 'src-retaildive': 68, 'src-x': 85, 'src-reddit': 65 } },
      { date: '2026-01-16', factionVolumes: { 'faction-006': 305, 'faction-005': 198, 'faction-001': 128 }, sourceVolumes: { 'src-retaildive': 92, 'src-x': 115, 'src-reddit': 88 } },
      { date: '2026-01-17', factionVolumes: { 'faction-006': 365, 'faction-005': 242, 'faction-001': 155 }, sourceVolumes: { 'src-retaildive': 112, 'src-x': 142, 'src-reddit': 108 } },
      { date: '2026-01-18', factionVolumes: { 'faction-006': 425, 'faction-005': 285, 'faction-001': 185 }, sourceVolumes: { 'src-retaildive': 125, 'src-x': 165, 'src-reddit': 125 } }
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
      'src-localnews': { volume: 225, sentiment: -0.65 },
      'src-facebook': { volume: 185, sentiment: -0.72 },
      'src-x': { volume: 125, sentiment: -0.58 },
      'src-usatoday': { volume: 65, sentiment: -0.45 },
      'src-wsj': { volume: 42, sentiment: -0.28 },
      'src-ap': { volume: 38, sentiment: -0.32 }
    },
    factionSources: {
      'faction-001': { 'src-facebook': 145, 'src-localnews': 85, 'src-x': 55 },
      'faction-003': { 'src-localnews': 75, 'src-x': 55, 'src-facebook': 35 },
      'faction-005': { 'src-wsj': 38, 'src-usatoday': 35, 'src-ap': 28, 'src-bloomberg': 24 }
    },
    personIds: ['person-001', 'person-016', 'person-017'],
    organizationIds: ['org-001', 'org-013'],
    locationIds: ['loc-009', 'loc-010'],
    eventIds: ['event-014'],
    volumeOverTime: [
      { date: '2026-01-18', factionVolumes: { 'faction-001': 95, 'faction-003': 55, 'faction-005': 42 }, sourceVolumes: { 'src-localnews': 75, 'src-facebook': 62, 'src-x': 42 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 185, 'faction-003': 108, 'faction-005': 82 }, sourceVolumes: { 'src-localnews': 148, 'src-facebook': 122, 'src-x': 82 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 285, 'faction-003': 165, 'faction-005': 125 }, sourceVolumes: { 'src-localnews': 225, 'src-facebook': 185, 'src-x': 125 } }
    ],
    documentIds: ['doc-021', 'doc-022', 'doc-023'],
    createdAt: '2026-01-18T00:00:00Z'
  }
];
