/**
 * Narratives for China Semiconductor dataset
 */

export const narratives = [
  {
    id: 'narr-001',
    text: 'SMIC achieves 5nm chip production using DUV lithography workaround',
    description: 'Semiconductor Manufacturing International Corporation (SMIC) has reportedly achieved 5nm chip production despite lacking access to ASML\'s extreme ultraviolet (EUV) lithography machines. Industry analysts confirm SMIC is using multi-patterning techniques with older deep ultraviolet (DUV) equipment, though at significantly lower yields and higher costs than competitors. The breakthrough raises questions about the effectiveness of export controls and demonstrates Chinese determination to achieve semiconductor self-sufficiency.',
    missionId: 'mission-003',
    status: 'in_progress',
    sentiment: 0.42,
    subNarrativeIds: ['sub-001', 'sub-002', 'sub-003'],
    factionMentions: {
      'faction-001': { volume: 520, sentiment: 0.78 },
      'faction-002': { volume: 380, sentiment: -0.65 },
      'faction-003': { volume: 290, sentiment: 0.15 }
    },
    sourceVolumes: {
      'src-semiengi': { volume: 85, sentiment: 0.12 },
      'src-eetimes': { volume: 72, sentiment: 0.08 },
      'src-scmp': { volume: 145, sentiment: 0.55 },
      'src-xinhua': { volume: 120, sentiment: 0.82 },
      'src-bloomberg': { volume: 95, sentiment: -0.15 },
      'src-reuters': { volume: 88, sentiment: -0.08 },
      'src-x': { volume: 185, sentiment: 0.25 },
      'src-linkedin': { volume: 65, sentiment: 0.18 }
    },
    factionSources: {
      'faction-001': { 'src-xinhua': 110, 'src-scmp': 95, 'src-cgtn': 85, 'src-weibo': 120, 'src-x': 75, 'src-globaltimes': 35 },
      'faction-002': { 'src-wsj': 65, 'src-bloomberg': 80, 'src-x': 95, 'src-reuters': 55, 'src-ft': 45, 'src-linkedin': 40 },
      'faction-003': { 'src-semiengi': 75, 'src-eetimes': 68, 'src-anandtech': 52, 'src-bloomberg': 45, 'src-linkedin': 50 }
    },
    personIds: ['person-001', 'person-002', 'person-003'],
    organizationIds: ['org-001', 'org-002', 'org-003'],
    locationIds: ['loc-001', 'loc-002'],
    eventIds: ['event-001', 'event-002'],
    volumeOverTime: [
      { date: '2026-01-14', factionVolumes: { 'faction-001': 85, 'faction-002': 62, 'faction-003': 48 }, sourceVolumes: { 'src-xinhua': 25, 'src-scmp': 28, 'src-bloomberg': 18, 'src-x': 35, 'src-semiengi': 15 } },
      { date: '2026-01-15', factionVolumes: { 'faction-001': 120, 'faction-002': 95, 'faction-003': 72 }, sourceVolumes: { 'src-xinhua': 35, 'src-scmp': 42, 'src-bloomberg': 28, 'src-x': 55, 'src-semiengi': 22 } },
      { date: '2026-01-16', factionVolumes: { 'faction-001': 185, 'faction-002': 145, 'faction-003': 98 }, sourceVolumes: { 'src-xinhua': 52, 'src-scmp': 58, 'src-bloomberg': 42, 'src-x': 82, 'src-semiengi': 35 } },
      { date: '2026-01-17', factionVolumes: { 'faction-001': 265, 'faction-002': 198, 'faction-003': 135 }, sourceVolumes: { 'src-xinhua': 72, 'src-scmp': 78, 'src-bloomberg': 55, 'src-x': 105, 'src-semiengi': 48 } },
      { date: '2026-01-18', factionVolumes: { 'faction-001': 345, 'faction-002': 265, 'faction-003': 185 }, sourceVolumes: { 'src-xinhua': 88, 'src-scmp': 98, 'src-bloomberg': 68, 'src-x': 135, 'src-semiengi': 62 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 425, 'faction-002': 315, 'faction-003': 235 }, sourceVolumes: { 'src-xinhua': 102, 'src-scmp': 118, 'src-bloomberg': 78, 'src-x': 158, 'src-semiengi': 72 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 520, 'faction-002': 380, 'faction-003': 290 }, sourceVolumes: { 'src-xinhua': 120, 'src-scmp': 145, 'src-bloomberg': 95, 'src-x': 185, 'src-semiengi': 85 } }
    ],
    documentIds: ['doc-001', 'doc-002', 'doc-003', 'doc-004'],
    createdAt: '2026-01-14T00:00:00Z'
  },
  {
    id: 'narr-002',
    text: 'US tightens ASML export restrictions, blocking all advanced lithography to China',
    description: 'The Biden administration has pressured the Netherlands to expand export controls on ASML, now blocking shipments of not just EUV but also advanced DUV lithography systems to China. ASML reported the restrictions will reduce their China revenue by $2.5 billion annually. The Dutch government acquiesced after months of negotiations, with Chinese officials condemning the move as "technological hegemony." Industry analysts warn the restrictions may accelerate Chinese efforts to develop indigenous lithography equipment.',
    missionId: 'mission-002',
    status: 'in_progress',
    sentiment: -0.48,
    subNarrativeIds: ['sub-004', 'sub-005', 'sub-006'],
    factionMentions: {
      'faction-001': { volume: 385, sentiment: -0.82 },
      'faction-002': { volume: 445, sentiment: 0.72 },
      'faction-004': { volume: 220, sentiment: -0.68 },
      'faction-006': { volume: 165, sentiment: -0.45 }
    },
    sourceVolumes: {
      'src-bloomberg': { volume: 125, sentiment: -0.22 },
      'src-reuters': { volume: 115, sentiment: -0.18 },
      'src-wsj': { volume: 98, sentiment: 0.35 },
      'src-ft': { volume: 88, sentiment: -0.12 },
      'src-xinhua': { volume: 165, sentiment: -0.85 },
      'src-globaltimes': { volume: 142, sentiment: -0.92 },
      'src-x': { volume: 245, sentiment: -0.35 },
      'src-linkedin': { volume: 78, sentiment: -0.25 }
    },
    factionSources: {
      'faction-001': { 'src-xinhua': 145, 'src-globaltimes': 125, 'src-cgtn': 85, 'src-weibo': 95, 'src-x': 65 },
      'faction-002': { 'src-wsj': 85, 'src-bloomberg': 75, 'src-x': 125, 'src-reuters': 65, 'src-ft': 55 },
      'faction-004': { 'src-xinhua': 45, 'src-cgtn': 38, 'src-globaltimes': 52, 'src-scmp': 48, 'src-x': 37 },
      'faction-006': { 'src-bloomberg': 55, 'src-reuters': 48, 'src-nikkei': 35, 'src-ft': 27 }
    },
    personIds: ['person-004', 'person-005', 'person-006', 'person-007'],
    organizationIds: ['org-002', 'org-004', 'org-005', 'org-006'],
    locationIds: ['loc-003', 'loc-004', 'loc-005'],
    eventIds: ['event-003', 'event-004', 'event-005'],
    volumeOverTime: [
      { date: '2026-01-12', factionVolumes: { 'faction-001': 95, 'faction-002': 125, 'faction-004': 55, 'faction-006': 42 }, sourceVolumes: { 'src-bloomberg': 32, 'src-reuters': 28, 'src-xinhua': 42, 'src-x': 62 } },
      { date: '2026-01-13', factionVolumes: { 'faction-001': 145, 'faction-002': 185, 'faction-004': 85, 'faction-006': 68 }, sourceVolumes: { 'src-bloomberg': 48, 'src-reuters': 42, 'src-xinhua': 65, 'src-x': 95 } },
      { date: '2026-01-14', factionVolumes: { 'faction-001': 215, 'faction-002': 265, 'faction-004': 125, 'faction-006': 98 }, sourceVolumes: { 'src-bloomberg': 68, 'src-reuters': 62, 'src-xinhua': 95, 'src-x': 138 } },
      { date: '2026-01-15', factionVolumes: { 'faction-001': 285, 'faction-002': 345, 'faction-004': 165, 'faction-006': 128 }, sourceVolumes: { 'src-bloomberg': 88, 'src-reuters': 82, 'src-xinhua': 125, 'src-x': 178 } },
      { date: '2026-01-16', factionVolumes: { 'faction-001': 345, 'faction-002': 405, 'faction-004': 195, 'faction-006': 148 }, sourceVolumes: { 'src-bloomberg': 108, 'src-reuters': 98, 'src-xinhua': 148, 'src-x': 218 } },
      { date: '2026-01-17', factionVolumes: { 'faction-001': 385, 'faction-002': 445, 'faction-004': 220, 'faction-006': 165 }, sourceVolumes: { 'src-bloomberg': 125, 'src-reuters': 115, 'src-xinhua': 165, 'src-x': 245 } }
    ],
    documentIds: ['doc-005', 'doc-006', 'doc-007', 'doc-008'],
    createdAt: '2026-01-12T00:00:00Z'
  },
  {
    id: 'narr-003',
    text: 'China announces $47 billion semiconductor investment fund, third phase of "Big Fund"',
    description: 'China has launched the third phase of its National Integrated Circuit Industry Investment Fund, commonly known as the "Big Fund," with 340 billion yuan ($47 billion) in new capital. This is the largest tranche yet, exceeding the combined total of the first two phases. The fund will prioritize advanced packaging, chipmaking equipment, and EDA software development. Major state-owned enterprises and regional governments are contributing, signaling intensified commitment to semiconductor self-sufficiency amid US export controls.',
    missionId: 'mission-001',
    status: 'new',
    sentiment: 0.35,
    subNarrativeIds: ['sub-007', 'sub-008', 'sub-009'],
    factionMentions: {
      'faction-001': { volume: 425, sentiment: 0.85 },
      'faction-002': { volume: 285, sentiment: -0.55 },
      'faction-003': { volume: 195, sentiment: 0.22 },
      'faction-005': { volume: 145, sentiment: 0.65 }
    },
    sourceVolumes: {
      'src-xinhua': { volume: 185, sentiment: 0.92 },
      'src-caixin': { volume: 145, sentiment: 0.75 },
      'src-scmp': { volume: 125, sentiment: 0.58 },
      'src-bloomberg': { volume: 115, sentiment: -0.25 },
      'src-reuters': { volume: 98, sentiment: -0.18 },
      'src-ft': { volume: 85, sentiment: -0.22 },
      'src-x': { volume: 165, sentiment: 0.28 },
      'src-weibo': { volume: 142, sentiment: 0.82 }
    },
    factionSources: {
      'faction-001': { 'src-xinhua': 165, 'src-caixin': 125, 'src-cgtn': 95, 'src-weibo': 135, 'src-scmp': 85 },
      'faction-002': { 'src-wsj': 72, 'src-bloomberg': 85, 'src-x': 78, 'src-reuters': 50 },
      'faction-003': { 'src-semiengi': 52, 'src-eetimes': 45, 'src-bloomberg': 48, 'src-ft': 50 },
      'faction-005': { 'src-caixin': 55, 'src-scmp': 48, 'src-bloomberg': 42 }
    },
    personIds: ['person-008', 'person-009', 'person-010'],
    organizationIds: ['org-007', 'org-008', 'org-009'],
    locationIds: ['loc-002', 'loc-006'],
    eventIds: ['event-006', 'event-007'],
    volumeOverTime: [
      { date: '2026-01-17', factionVolumes: { 'faction-001': 145, 'faction-002': 98, 'faction-003': 65, 'faction-005': 48 }, sourceVolumes: { 'src-xinhua': 62, 'src-caixin': 48, 'src-bloomberg': 38, 'src-x': 55 } },
      { date: '2026-01-18', factionVolumes: { 'faction-001': 265, 'faction-002': 175, 'faction-003': 125, 'faction-005': 92 }, sourceVolumes: { 'src-xinhua': 115, 'src-caixin': 92, 'src-bloomberg': 72, 'src-x': 105 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 345, 'faction-002': 235, 'faction-003': 165, 'faction-005': 125 }, sourceVolumes: { 'src-xinhua': 152, 'src-caixin': 125, 'src-bloomberg': 95, 'src-x': 138 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 425, 'faction-002': 285, 'faction-003': 195, 'faction-005': 145 }, sourceVolumes: { 'src-xinhua': 185, 'src-caixin': 145, 'src-bloomberg': 115, 'src-x': 165 } }
    ],
    documentIds: ['doc-009', 'doc-010', 'doc-011'],
    createdAt: '2026-01-17T00:00:00Z'
  },
  {
    id: 'narr-004',
    text: 'Huawei stockpiles semiconductor equipment ahead of expanded US sanctions',
    description: 'Multiple reports indicate Huawei has been aggressively stockpiling semiconductor manufacturing equipment and components in anticipation of expanded US export controls. Sources cite warehouses in Shenzhen containing billions of dollars worth of equipment from ASML, Applied Materials, and Lam Research purchased before restrictions took effect. US officials are investigating whether sanctions were circumvented through third-party intermediaries. Huawei denies any improper conduct.',
    missionId: 'mission-002',
    status: 'under_investigation',
    sentiment: -0.52,
    subNarrativeIds: ['sub-010', 'sub-011'],
    factionMentions: {
      'faction-001': { volume: 285, sentiment: -0.72 },
      'faction-002': { volume: 365, sentiment: 0.68 },
      'faction-003': { volume: 165, sentiment: -0.15 },
      'faction-006': { volume: 125, sentiment: -0.48 }
    },
    sourceVolumes: {
      'src-bloomberg': { volume: 145, sentiment: -0.35 },
      'src-wsj': { volume: 132, sentiment: 0.42 },
      'src-reuters': { volume: 115, sentiment: -0.22 },
      'src-xinhua': { volume: 95, sentiment: -0.78 },
      'src-scmp': { volume: 88, sentiment: -0.45 },
      'src-x': { volume: 178, sentiment: -0.38 },
      'src-linkedin': { volume: 65, sentiment: -0.28 }
    },
    factionSources: {
      'faction-001': { 'src-xinhua': 85, 'src-scmp': 72, 'src-cgtn': 58, 'src-weibo': 70 },
      'faction-002': { 'src-wsj': 115, 'src-bloomberg': 95, 'src-x': 105, 'src-reuters': 50 },
      'faction-003': { 'src-semiengi': 48, 'src-eetimes': 42, 'src-bloomberg': 45, 'src-linkedin': 30 },
      'faction-006': { 'src-bloomberg': 42, 'src-reuters': 38, 'src-nikkei': 28, 'src-ft': 17 }
    },
    personIds: ['person-011', 'person-012', 'person-005'],
    organizationIds: ['org-010', 'org-002', 'org-011', 'org-012'],
    locationIds: ['loc-001', 'loc-004'],
    eventIds: ['event-008', 'event-009'],
    volumeOverTime: [
      { date: '2026-01-15', factionVolumes: { 'faction-001': 95, 'faction-002': 125, 'faction-003': 55, 'faction-006': 42 }, sourceVolumes: { 'src-bloomberg': 48, 'src-wsj': 45, 'src-xinhua': 32, 'src-x': 58 } },
      { date: '2026-01-16', factionVolumes: { 'faction-001': 145, 'faction-002': 195, 'faction-003': 85, 'faction-006': 65 }, sourceVolumes: { 'src-bloomberg': 75, 'src-wsj': 72, 'src-xinhua': 48, 'src-x': 92 } },
      { date: '2026-01-17', factionVolumes: { 'faction-001': 195, 'faction-002': 265, 'faction-003': 115, 'faction-006': 88 }, sourceVolumes: { 'src-bloomberg': 105, 'src-wsj': 98, 'src-xinhua': 68, 'src-x': 128 } },
      { date: '2026-01-18', factionVolumes: { 'faction-001': 245, 'faction-002': 325, 'faction-003': 145, 'faction-006': 108 }, sourceVolumes: { 'src-bloomberg': 128, 'src-wsj': 118, 'src-xinhua': 82, 'src-x': 158 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 285, 'faction-002': 365, 'faction-003': 165, 'faction-006': 125 }, sourceVolumes: { 'src-bloomberg': 145, 'src-wsj': 132, 'src-xinhua': 95, 'src-x': 178 } }
    ],
    documentIds: ['doc-012', 'doc-013', 'doc-014'],
    createdAt: '2026-01-15T00:00:00Z'
  },
  {
    id: 'narr-005',
    text: 'YMTC flash memory chips found in consumer devices despite US blacklist',
    description: 'Researchers have discovered flash memory chips manufactured by Yangtze Memory Technologies Co. (YMTC) in consumer electronics sold globally, despite the company being placed on the US Entity List in late 2022. The chips were found in products from multiple brands through supply chain analysis. YMTC\'s 232-layer NAND technology has proven competitive with Samsung and SK Hynix offerings. The discovery has reignited debates about the enforcement and effectiveness of semiconductor export controls.',
    missionId: 'mission-003',
    status: 'in_progress',
    sentiment: -0.38,
    subNarrativeIds: ['sub-012', 'sub-013'],
    factionMentions: {
      'faction-001': { volume: 195, sentiment: 0.55 },
      'faction-002': { volume: 275, sentiment: -0.72 },
      'faction-003': { volume: 185, sentiment: 0.25 },
      'faction-006': { volume: 145, sentiment: -0.55 }
    },
    sourceVolumes: {
      'src-semiengi': { volume: 95, sentiment: 0.18 },
      'src-eetimes': { volume: 85, sentiment: 0.12 },
      'src-bloomberg': { volume: 115, sentiment: -0.45 },
      'src-wsj': { volume: 98, sentiment: -0.52 },
      'src-scmp': { volume: 78, sentiment: 0.35 },
      'src-x': { volume: 165, sentiment: -0.28 },
      'src-reddit': { volume: 88, sentiment: 0.22 }
    },
    factionSources: {
      'faction-001': { 'src-scmp': 65, 'src-xinhua': 55, 'src-weibo': 75 },
      'faction-002': { 'src-wsj': 85, 'src-bloomberg': 78, 'src-x': 82, 'src-reuters': 30 },
      'faction-003': { 'src-semiengi': 82, 'src-eetimes': 72, 'src-anandtech': 31 },
      'faction-006': { 'src-bloomberg': 52, 'src-nikkei': 45, 'src-reuters': 48 }
    },
    personIds: ['person-013', 'person-014'],
    organizationIds: ['org-013', 'org-014', 'org-015'],
    locationIds: ['loc-007', 'loc-004'],
    eventIds: ['event-010', 'event-011'],
    volumeOverTime: [
      { date: '2026-01-16', factionVolumes: { 'faction-001': 65, 'faction-002': 92, 'faction-003': 62, 'faction-006': 48 }, sourceVolumes: { 'src-semiengi': 32, 'src-bloomberg': 38, 'src-x': 55 } },
      { date: '2026-01-17', factionVolumes: { 'faction-001': 115, 'faction-002': 165, 'faction-003': 115, 'faction-006': 88 }, sourceVolumes: { 'src-semiengi': 58, 'src-bloomberg': 72, 'src-x': 98 } },
      { date: '2026-01-18', factionVolumes: { 'faction-001': 155, 'faction-002': 225, 'faction-003': 152, 'faction-006': 118 }, sourceVolumes: { 'src-semiengi': 78, 'src-bloomberg': 95, 'src-x': 135 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 195, 'faction-002': 275, 'faction-003': 185, 'faction-006': 145 }, sourceVolumes: { 'src-semiengi': 95, 'src-bloomberg': 115, 'src-x': 165 } }
    ],
    documentIds: ['doc-015', 'doc-016', 'doc-017'],
    createdAt: '2026-01-16T00:00:00Z'
  },
  {
    id: 'narr-006',
    text: 'Chinese companies develop alternatives to US EDA software tools',
    description: 'A consortium of Chinese technology companies has announced significant progress in developing indigenous electronic design automation (EDA) software to replace tools from US firms Cadence, Synopsys, and Mentor Graphics. Empyrean Technology and Huada Jiutian are leading the effort with government backing. While current tools lag behind US offerings, the companies claim their software can now handle designs up to 14nm, with 7nm capability expected within two years.',
    missionId: 'mission-003',
    status: 'new',
    sentiment: 0.28,
    subNarrativeIds: ['sub-014', 'sub-015'],
    factionMentions: {
      'faction-001': { volume: 245, sentiment: 0.82 },
      'faction-002': { volume: 165, sentiment: -0.48 },
      'faction-003': { volume: 215, sentiment: 0.35 },
      'faction-005': { volume: 125, sentiment: 0.72 }
    },
    sourceVolumes: {
      'src-semiengi': { volume: 115, sentiment: 0.28 },
      'src-eetimes': { volume: 98, sentiment: 0.22 },
      'src-xinhua': { volume: 135, sentiment: 0.85 },
      'src-caixin': { volume: 95, sentiment: 0.68 },
      'src-scmp': { volume: 78, sentiment: 0.52 },
      'src-x': { volume: 145, sentiment: 0.32 },
      'src-linkedin': { volume: 72, sentiment: 0.42 }
    },
    factionSources: {
      'faction-001': { 'src-xinhua': 115, 'src-caixin': 82, 'src-scmp': 65, 'src-weibo': 85 },
      'faction-002': { 'src-wsj': 55, 'src-bloomberg': 48, 'src-x': 62 },
      'faction-003': { 'src-semiengi': 95, 'src-eetimes': 82, 'src-linkedin': 38 },
      'faction-005': { 'src-caixin': 45, 'src-scmp': 38, 'src-xinhua': 42 }
    },
    personIds: ['person-015', 'person-016'],
    organizationIds: ['org-016', 'org-017', 'org-018', 'org-019'],
    locationIds: ['loc-002', 'loc-008'],
    eventIds: ['event-012'],
    volumeOverTime: [
      { date: '2026-01-18', factionVolumes: { 'faction-001': 85, 'faction-002': 58, 'faction-003': 75, 'faction-005': 42 }, sourceVolumes: { 'src-semiengi': 38, 'src-xinhua': 45, 'src-x': 48 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 165, 'faction-002': 115, 'faction-003': 148, 'faction-005': 85 }, sourceVolumes: { 'src-semiengi': 78, 'src-xinhua': 92, 'src-x': 98 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 245, 'faction-002': 165, 'faction-003': 215, 'faction-005': 125 }, sourceVolumes: { 'src-semiengi': 115, 'src-xinhua': 135, 'src-x': 145 } }
    ],
    documentIds: ['doc-018', 'doc-019'],
    createdAt: '2026-01-18T00:00:00Z'
  },
  {
    id: 'narr-007',
    text: 'TSMC Arizona fab faces delays and cost overruns amid worker disputes',
    description: 'Taiwan Semiconductor Manufacturing Company\'s $40 billion Arizona fabrication facility faces mounting challenges including construction delays, cost overruns, and conflicts between Taiwanese and American workers. Local unions have criticized TSMC\'s management practices, while company officials have expressed frustration with US worker productivity. The plant, initially planned to begin production in 2024, is now targeting late 2025 for 4nm chips. The setbacks raise questions about the feasibility of reshoring advanced semiconductor manufacturing to the US.',
    missionId: 'mission-002',
    status: 'in_progress',
    sentiment: -0.42,
    subNarrativeIds: ['sub-016', 'sub-017'],
    factionMentions: {
      'faction-001': { volume: 145, sentiment: 0.45 },
      'faction-002': { volume: 225, sentiment: -0.35 },
      'faction-005': { volume: 185, sentiment: -0.58 },
      'faction-006': { volume: 165, sentiment: -0.48 }
    },
    sourceVolumes: {
      'src-bloomberg': { volume: 135, sentiment: -0.38 },
      'src-reuters': { volume: 118, sentiment: -0.32 },
      'src-wsj': { volume: 105, sentiment: -0.28 },
      'src-ft': { volume: 88, sentiment: -0.35 },
      'src-nikkei': { volume: 95, sentiment: -0.42 },
      'src-scmp': { volume: 72, sentiment: 0.38 },
      'src-x': { volume: 185, sentiment: -0.45 },
      'src-linkedin': { volume: 78, sentiment: -0.32 }
    },
    factionSources: {
      'faction-001': { 'src-scmp': 65, 'src-globaltimes': 48, 'src-x': 32 },
      'faction-002': { 'src-wsj': 75, 'src-bloomberg': 82, 'src-x': 68 },
      'faction-005': { 'src-bloomberg': 62, 'src-nikkei': 78, 'src-ft': 45 },
      'faction-006': { 'src-bloomberg': 55, 'src-reuters': 62, 'src-nikkei': 48 }
    },
    personIds: ['person-017', 'person-018', 'person-019'],
    organizationIds: ['org-020', 'org-021'],
    locationIds: ['loc-009', 'loc-010'],
    eventIds: ['event-013', 'event-014'],
    volumeOverTime: [
      { date: '2026-01-14', factionVolumes: { 'faction-001': 48, 'faction-002': 75, 'faction-005': 62, 'faction-006': 55 }, sourceVolumes: { 'src-bloomberg': 45, 'src-wsj': 35, 'src-x': 62 } },
      { date: '2026-01-15', factionVolumes: { 'faction-001': 72, 'faction-002': 115, 'faction-005': 95, 'faction-006': 85 }, sourceVolumes: { 'src-bloomberg': 68, 'src-wsj': 55, 'src-x': 95 } },
      { date: '2026-01-16', factionVolumes: { 'faction-001': 98, 'faction-002': 155, 'faction-005': 128, 'faction-006': 115 }, sourceVolumes: { 'src-bloomberg': 92, 'src-wsj': 72, 'src-x': 128 } },
      { date: '2026-01-17', factionVolumes: { 'faction-001': 125, 'faction-002': 192, 'faction-005': 158, 'faction-006': 142 }, sourceVolumes: { 'src-bloomberg': 115, 'src-wsj': 88, 'src-x': 158 } },
      { date: '2026-01-18', factionVolumes: { 'faction-001': 145, 'faction-002': 225, 'faction-005': 185, 'faction-006': 165 }, sourceVolumes: { 'src-bloomberg': 135, 'src-wsj': 105, 'src-x': 185 } }
    ],
    documentIds: ['doc-020', 'doc-021', 'doc-022'],
    createdAt: '2026-01-14T00:00:00Z'
  }
];
