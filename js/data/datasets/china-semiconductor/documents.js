/**
 * Documents for China Semiconductor dataset
 * Includes news articles, social posts, and internal documents
 */

export const documents = [
  // News Article - SMIC breakthrough
  {
    id: 'doc-001',
    documentType: 'news_article',
    title: 'SMIC confirms 5nm chip mass production using DUV multi-patterning',
    url: 'https://semiengi.com/smic-5nm-duv-breakthrough-2026',
    publishedDate: '2026-01-15T08:30:00Z',
    sourceId: 'src-semiengi',
    author: 'Mark Liu',
    excerpt: 'SMIC has confirmed it is mass producing 5nm chips using advanced multi-patterning techniques with DUV lithography, marking a significant milestone for Chinese semiconductor manufacturing.',
    heroImage: {
      url: 'img/placeholders/image-placeholder.svg',
      caption: 'SMIC semiconductor fabrication facility'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Semiconductor Manufacturing International Corporation (SMIC) has confirmed it has achieved mass production of 5nm chips using deep ultraviolet (DUV) lithography, a significant breakthrough that demonstrates China\'s ability to advance despite export restrictions on EUV equipment.' },
      { type: 'paragraph', content: 'Industry sources indicate SMIC is using an innovative multi-patterning approach that compensates for the lack of extreme ultraviolet lithography systems, though at higher cost and lower yield than competitors using ASML\'s EUV machines.' }
    ],
    narrativeIds: ['narr-001'],
    subNarrativeIds: ['sub-001'],
    personIds: ['person-001', 'person-002'],
    organizationIds: ['org-001'],
    locationIds: ['loc-001'],
    eventIds: ['event-001']
  },
  // News Article - SCMP report
  {
    id: 'doc-002',
    documentType: 'news_article',
    title: 'China\'s SMIC achieves advanced chip production without EUV machines',
    url: 'https://scmp.com/tech/smic-5nm-no-euv-2026',
    publishedDate: '2026-01-16T06:00:00Z',
    sourceId: 'src-scmp',
    author: 'Che Pan',
    excerpt: 'In a major breakthrough, SMIC has demonstrated the ability to produce 5nm chips without access to ASML\'s extreme ultraviolet lithography systems, though at lower yields.',
    narrativeIds: ['narr-001'],
    subNarrativeIds: ['sub-001'],
    personIds: ['person-001'],
    organizationIds: ['org-001'],
    locationIds: ['loc-001'],
    eventIds: ['event-001']
  },
  // News Article - SemiAnalysis
  {
    id: 'doc-003',
    documentType: 'news_article',
    title: 'Analysis: SMIC\'s 5nm achievement and what it means for export controls',
    url: 'https://semianalysis.com/smic-5nm-analysis',
    publishedDate: '2026-01-17T10:00:00Z',
    sourceId: 'src-semiengi',
    author: 'Dylan Patel',
    excerpt: 'SemiAnalysis deep-dive into SMIC\'s technical approach reveals innovative multi-patterning but significant cost and yield penalties compared to EUV-based production.',
    narrativeIds: ['narr-001'],
    subNarrativeIds: ['sub-001', 'sub-003'],
    personIds: ['person-003'],
    organizationIds: ['org-001', 'org-023'],
    locationIds: [],
    eventIds: []
  },
  // News Article - Bloomberg
  {
    id: 'doc-004',
    documentType: 'news_article',
    title: 'SMIC breakthrough raises questions about US chip strategy',
    url: 'https://bloomberg.com/smic-breakthrough-us-strategy',
    publishedDate: '2026-01-18T14:00:00Z',
    sourceId: 'src-bloomberg',
    author: 'Ian King',
    excerpt: 'SMIC\'s unexpected advancement has sparked debate in Washington about the efficacy of semiconductor export controls and whether they are achieving their intended goals.',
    narrativeIds: ['narr-001'],
    subNarrativeIds: ['sub-003'],
    personIds: ['person-003', 'person-005'],
    organizationIds: ['org-001', 'org-005'],
    locationIds: ['loc-004'],
    eventIds: []
  },
  // News Article - Reuters ASML
  {
    id: 'doc-005',
    documentType: 'news_article',
    title: 'Netherlands expands ASML export restrictions to advanced DUV systems',
    url: 'https://reuters.com/netherlands-asml-duv-restrictions',
    publishedDate: '2026-01-12T15:00:00Z',
    sourceId: 'src-reuters',
    author: 'Toby Sterling',
    excerpt: 'The Dutch government has announced expanded export controls blocking ASML from shipping advanced deep ultraviolet lithography systems to China.',
    narrativeIds: ['narr-002'],
    subNarrativeIds: ['sub-004'],
    personIds: ['person-007', 'person-004'],
    organizationIds: ['org-002', 'org-004'],
    locationIds: ['loc-005'],
    eventIds: ['event-003']
  },
  // News Article - FT ASML
  {
    id: 'doc-006',
    documentType: 'news_article',
    title: 'ASML warns China restrictions will cut $2.5B from annual revenue',
    url: 'https://ft.com/asml-china-revenue-warning',
    publishedDate: '2026-01-15T17:00:00Z',
    sourceId: 'src-ft',
    author: 'Peggy Hollinger',
    excerpt: 'ASML CEO Peter Wennink told investors that expanded China export restrictions will reduce the company\'s annual revenue by approximately $2.5 billion.',
    narrativeIds: ['narr-002'],
    subNarrativeIds: ['sub-005'],
    personIds: ['person-004'],
    organizationIds: ['org-002'],
    locationIds: ['loc-003'],
    eventIds: ['event-004']
  },
  // News Article - WSJ Raimondo
  {
    id: 'doc-007',
    documentType: 'news_article',
    title: 'Raimondo defends expanded chip controls as necessary for national security',
    url: 'https://wsj.com/raimondo-chip-controls-defense',
    publishedDate: '2026-01-14T12:00:00Z',
    sourceId: 'src-wsj',
    author: 'Yuka Hayashi',
    excerpt: 'Commerce Secretary Gina Raimondo defended the administration\'s expanded semiconductor export controls, calling them essential to maintaining US technological leadership.',
    narrativeIds: ['narr-002'],
    subNarrativeIds: ['sub-004'],
    personIds: ['person-005', 'person-006'],
    organizationIds: ['org-005'],
    locationIds: ['loc-004'],
    eventIds: []
  },
  // News Article - BIS Entity List
  {
    id: 'doc-008',
    documentType: 'news_article',
    title: 'BIS updates Entity List with new Chinese semiconductor firms',
    url: 'https://commerce.gov/bis-entity-list-update-jan-2026',
    publishedDate: '2026-01-13T10:00:00Z',
    sourceId: 'src-reuters',
    author: 'Reuters Staff',
    excerpt: 'The Bureau of Industry and Security has added 15 new Chinese companies to the Entity List, expanding restrictions on semiconductor technology transfers.',
    narrativeIds: ['narr-002'],
    subNarrativeIds: [],
    personIds: ['person-005'],
    organizationIds: ['org-005', 'org-006'],
    locationIds: ['loc-004'],
    eventIds: []
  },
  // News Article - Big Fund III
  {
    id: 'doc-009',
    documentType: 'news_article',
    title: 'China launches $47 billion semiconductor fund in biggest push yet',
    url: 'https://bloomberg.com/china-big-fund-iii-47-billion',
    publishedDate: '2026-01-17T11:00:00Z',
    sourceId: 'src-bloomberg',
    author: 'Debby Wu',
    excerpt: 'China has unveiled the third phase of its National IC Fund with 340 billion yuan ($47 billion), the largest semiconductor investment tranche in its history.',
    narrativeIds: ['narr-003'],
    subNarrativeIds: ['sub-007', 'sub-008'],
    personIds: ['person-008', 'person-009'],
    organizationIds: ['org-007'],
    locationIds: ['loc-006'],
    eventIds: ['event-006']
  },
  // News Article - Caixin State Council
  {
    id: 'doc-010',
    documentType: 'news_article',
    title: 'State Council approves Big Fund III priorities: packaging, equipment, EDA',
    url: 'https://caixin.com/big-fund-iii-state-council-approval',
    publishedDate: '2026-01-18T16:00:00Z',
    sourceId: 'src-caixin',
    author: 'Caixin Tech',
    excerpt: 'China\'s State Council has approved investment guidelines for the Big Fund III, prioritizing advanced packaging, semiconductor equipment, and EDA software development.',
    narrativeIds: ['narr-003'],
    subNarrativeIds: ['sub-007', 'sub-008'],
    personIds: ['person-010', 'person-008'],
    organizationIds: ['org-007', 'org-008', 'org-009'],
    locationIds: ['loc-006'],
    eventIds: ['event-007']
  },
  // News Article - FT Big Fund analysis
  {
    id: 'doc-011',
    documentType: 'news_article',
    title: 'Analysis: Can China\'s Big Fund III overcome export control barriers?',
    url: 'https://ft.com/china-big-fund-analysis',
    publishedDate: '2026-01-19T09:00:00Z',
    sourceId: 'src-ft',
    author: 'Kathrin Hille',
    excerpt: 'Analysts debate whether China\'s massive new semiconductor investment fund can achieve technological breakthroughs without access to cutting-edge foreign equipment.',
    narrativeIds: ['narr-003'],
    subNarrativeIds: ['sub-009'],
    personIds: [],
    organizationIds: ['org-007'],
    locationIds: [],
    eventIds: []
  },
  // News Article - Huawei stockpile
  {
    id: 'doc-012',
    documentType: 'news_article',
    title: 'Huawei stockpiles billions in chip equipment ahead of sanctions',
    url: 'https://bloomberg.com/huawei-equipment-stockpile-sanctions',
    publishedDate: '2026-01-15T12:30:00Z',
    sourceId: 'src-bloomberg',
    author: 'Debby Wu',
    excerpt: 'Huawei has accumulated billions of dollars worth of semiconductor manufacturing equipment in warehouses across China, anticipating expanded US export restrictions.',
    narrativeIds: ['narr-004'],
    subNarrativeIds: ['sub-010'],
    personIds: ['person-011', 'person-012'],
    organizationIds: ['org-010'],
    locationIds: ['loc-001'],
    eventIds: ['event-008']
  },
  // News Article - WSJ Huawei investigation
  {
    id: 'doc-013',
    documentType: 'news_article',
    title: 'US probes whether Huawei used intermediaries to evade chip controls',
    url: 'https://wsj.com/huawei-intermediaries-investigation',
    publishedDate: '2026-01-17T14:30:00Z',
    sourceId: 'src-wsj',
    author: 'Kate O\'Keeffe',
    excerpt: 'US Commerce Department has opened an investigation into whether Huawei circumvented export controls by acquiring equipment through third-party intermediaries.',
    narrativeIds: ['narr-004'],
    subNarrativeIds: ['sub-010', 'sub-011'],
    personIds: ['person-005', 'person-011'],
    organizationIds: ['org-005', 'org-010', 'org-003', 'org-011'],
    locationIds: ['loc-004', 'loc-001'],
    eventIds: ['event-009']
  },
  // News Article - SCMP Huawei response
  {
    id: 'doc-014',
    documentType: 'news_article',
    title: 'Huawei denies sanctions violations, calls reports "speculation"',
    url: 'https://scmp.com/huawei-denies-sanctions-violations',
    publishedDate: '2026-01-18T08:00:00Z',
    sourceId: 'src-scmp',
    author: 'Iris Deng',
    excerpt: 'Huawei has issued a statement denying any violations of US export controls, dismissing reports of stockpiling as "speculation and conjecture."',
    narrativeIds: ['narr-004'],
    subNarrativeIds: ['sub-011'],
    personIds: ['person-011'],
    organizationIds: ['org-010', 'org-005', 'org-012'],
    locationIds: ['loc-001'],
    eventIds: []
  },
  // News Article - YMTC benchmark
  {
    id: 'doc-015',
    documentType: 'news_article',
    title: 'YMTC 232-layer NAND matches Samsung in performance tests',
    url: 'https://anandtech.com/ymtc-232-layer-nand-benchmark',
    publishedDate: '2026-01-16T11:30:00Z',
    sourceId: 'src-anandtech',
    author: 'Ryan Smith',
    excerpt: 'Independent testing reveals YMTC\'s 232-layer 3D NAND flash memory delivers performance comparable to Samsung\'s latest offerings in key metrics.',
    narrativeIds: ['narr-005'],
    subNarrativeIds: ['sub-012'],
    personIds: ['person-013'],
    organizationIds: ['org-013'],
    locationIds: ['loc-007'],
    eventIds: ['event-010']
  },
  // News Article - TechInsights YMTC
  {
    id: 'doc-016',
    documentType: 'news_article',
    title: 'TechInsights finds YMTC chips in consumer devices despite blacklist',
    url: 'https://techinsights.com/ymtc-chips-consumer-devices',
    publishedDate: '2026-01-18T09:30:00Z',
    sourceId: 'src-semiengi',
    author: 'Dan Hutcheson',
    excerpt: 'Research firm TechInsights has identified YMTC memory chips in consumer electronics from multiple brands, raising questions about Entity List enforcement.',
    narrativeIds: ['narr-005'],
    subNarrativeIds: ['sub-012', 'sub-013'],
    personIds: ['person-013', 'person-014'],
    organizationIds: ['org-013', 'org-014', 'org-015'],
    locationIds: ['loc-007', 'loc-004'],
    eventIds: ['event-010', 'event-011']
  },
  // News Article - YMTC supply chain
  {
    id: 'doc-017',
    documentType: 'news_article',
    title: 'How YMTC chips are reaching global markets despite US sanctions',
    url: 'https://bloomberg.com/ymtc-global-supply-chain-analysis',
    publishedDate: '2026-01-19T13:00:00Z',
    sourceId: 'src-bloomberg',
    author: 'Vlad Savov',
    excerpt: 'Analysis reveals YMTC memory chips are entering global supply chains through complex networks that make end-to-end tracking difficult for regulators.',
    narrativeIds: ['narr-005'],
    subNarrativeIds: ['sub-013'],
    personIds: ['person-014'],
    organizationIds: ['org-013', 'org-015', 'org-024'],
    locationIds: ['loc-004'],
    eventIds: ['event-011']
  },
  // News Article - Xinhua Empyrean
  {
    id: 'doc-018',
    documentType: 'news_article',
    title: 'Empyrean announces EDA tools supporting 14nm chip design',
    url: 'https://xinhua.com/empyrean-eda-14nm-announcement',
    publishedDate: '2026-01-19T10:30:00Z',
    sourceId: 'src-xinhua',
    author: 'Xinhua Staff',
    excerpt: 'Empyrean Technology has announced its EDA software suite now fully supports 14nm chip design, marking significant progress in Chinese design tool development.',
    narrativeIds: ['narr-006'],
    subNarrativeIds: ['sub-014'],
    personIds: ['person-015'],
    organizationIds: ['org-016', 'org-018', 'org-019'],
    locationIds: ['loc-002'],
    eventIds: ['event-012']
  },
  // News Article - Huada Jiutian
  {
    id: 'doc-019',
    documentType: 'news_article',
    title: 'Huada Jiutian targets 7nm EDA capability within two years',
    url: 'https://caixin.com/huada-jiutian-7nm-roadmap',
    publishedDate: '2026-01-20T08:00:00Z',
    sourceId: 'src-caixin',
    author: 'Caixin Tech',
    excerpt: 'Huada Jiutian has outlined an aggressive roadmap to develop EDA tools capable of supporting 7nm chip design within the next two years.',
    narrativeIds: ['narr-006'],
    subNarrativeIds: ['sub-014', 'sub-015'],
    personIds: ['person-016'],
    organizationIds: ['org-017'],
    locationIds: ['loc-008'],
    eventIds: []
  },
  // News Article - TSMC delays
  {
    id: 'doc-020',
    documentType: 'news_article',
    title: 'TSMC Arizona fab delays push production start to late 2025',
    url: 'https://reuters.com/tsmc-arizona-delay-2025',
    publishedDate: '2026-01-14T08:30:00Z',
    sourceId: 'src-reuters',
    author: 'Yimou Lee',
    excerpt: 'TSMC has confirmed its Arizona fabrication facility will not begin production until late 2025, a significant delay from the original 2024 target.',
    narrativeIds: ['narr-007'],
    subNarrativeIds: ['sub-016'],
    personIds: ['person-017', 'person-018'],
    organizationIds: ['org-020'],
    locationIds: ['loc-009'],
    eventIds: ['event-013']
  },
  // News Article - Nikkei TSMC culture
  {
    id: 'doc-021',
    documentType: 'news_article',
    title: 'TSMC CEO addresses Arizona challenges: "Different work culture"',
    url: 'https://nikkei.com/tsmc-arizona-work-culture',
    publishedDate: '2026-01-16T07:00:00Z',
    sourceId: 'src-nikkei',
    author: 'Cheng Ting-Fang',
    excerpt: 'TSMC CEO C.C. Wei acknowledged challenges at the Arizona fab, citing differences in work culture and the need to adapt management approaches.',
    narrativeIds: ['narr-007'],
    subNarrativeIds: ['sub-016', 'sub-017'],
    personIds: ['person-017'],
    organizationIds: ['org-020'],
    locationIds: ['loc-009', 'loc-010'],
    eventIds: ['event-013']
  },
  // News Article - Arizona unions
  {
    id: 'doc-022',
    documentType: 'news_article',
    title: 'Arizona unions file grievances against TSMC management practices',
    url: 'https://bloomberg.com/tsmc-arizona-union-grievances',
    publishedDate: '2026-01-17T11:00:00Z',
    sourceId: 'src-bloomberg',
    author: 'Ian King',
    excerpt: 'The Arizona Building and Construction Trades Council has filed formal grievances against TSMC, citing concerns about management practices and worker treatment.',
    narrativeIds: ['narr-007'],
    subNarrativeIds: ['sub-017'],
    personIds: ['person-019'],
    organizationIds: ['org-020', 'org-021'],
    locationIds: ['loc-009'],
    eventIds: ['event-014']
  },
  // X/Twitter - Tech analyst thread on SMIC
  {
    id: 'doc-023',
    documentType: 'social_post',
    url: 'https://x.com/chipcuriosity/status/1881234567890123',
    publishedDate: '2026-01-16T14:22:00Z',
    sourceId: 'src-x',
    author: {
      username: '@chipcuriosity',
      displayName: 'Chip Curiosity',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    content: 'Thread: Let\'s talk about SMIC\'s 5nm "breakthrough" 🧵\n\n1/ Yes, they achieved 5nm using DUV multi-patterning. But context matters.\n\n2/ Cost per wafer is ~3x higher than TSMC\'s EUV process\n\n3/ Yields appear to be 20-30%, vs 80%+ for TSMC\n\n4/ This is impressive engineering, but it\'s not economically competitive for high-volume production\n\n5/ Export controls haven\'t stopped progress - they\'ve just made it expensive. Is that the goal?',
    engagement: {
      replies: 847,
      likes: 5234,
      reblogs: 1892
    },
    narrativeIds: ['narr-001'],
    subNarrativeIds: ['sub-001', 'sub-003'],
    personIds: [],
    organizationIds: ['org-001'],
    locationIds: [],
    eventIds: []
  },
  // LinkedIn - Industry executive post
  {
    id: 'doc-024',
    documentType: 'social_post',
    url: 'https://linkedin.com/posts/semiconductorexec_smic-china-semiconductor-activity',
    publishedDate: '2026-01-17T09:15:00Z',
    sourceId: 'src-linkedin',
    author: {
      username: 'michael-chen-semiconductor',
      displayName: 'Michael Chen',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    content: '📊 Reflections on SMIC\'s 5nm Achievement\n\nAs someone who has spent 25 years in semiconductor manufacturing, I want to share some thoughts on what SMIC\'s announcement really means for our industry.\n\nThe technical achievement is real. Multi-patterning at this scale requires extraordinary process control and engineering discipline. Their teams deserve recognition.\n\nHowever, we should be clear-eyed about the economics:\n• Cost disadvantage: 2-3x vs EUV-based production\n• Yield challenges: Significantly lower than industry leaders\n• Scalability questions: Multi-patterning complexity increases exponentially at smaller nodes\n\nThe bigger question for policymakers: Are export controls achieving their stated goals, or are they accelerating China\'s push for complete self-sufficiency?\n\nI\'d love to hear perspectives from others in the industry. What are you seeing in your supply chains?\n\n#Semiconductors #Manufacturing #China #Technology #ExportControls',
    engagement: {
      replies: 234,
      likes: 1847,
      reblogs: 312
    },
    narrativeIds: ['narr-001'],
    subNarrativeIds: ['sub-003'],
    personIds: [],
    organizationIds: ['org-001'],
    locationIds: [],
    eventIds: []
  },
  // Weibo - Chinese tech celebration post
  {
    id: 'doc-025',
    documentType: 'social_post',
    url: 'https://weibo.com/u/7234567890/post/12345678',
    publishedDate: '2026-01-15T19:45:00Z',
    sourceId: 'src-weibo',
    author: {
      username: '科技前沿观察',
      displayName: 'Tech Frontier Observer',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    content: '🎉 重磅消息！中芯国际5纳米芯片量产成功！\n\n没有EUV光刻机，我们照样能行！这是中国半导体工程师的智慧和毅力的结晶。\n\n西方封锁只会让我们更强大。自主创新才是出路！\n\n华为Mate 70搭载的芯片就是中芯国际生产的。这才是真正的中国力量！💪🇨🇳\n\n#中芯国际 #半导体 #自主创新 #华为 #中国制造',
    engagement: {
      replies: 28947,
      likes: 184521,
      reblogs: 42156
    },
    narrativeIds: ['narr-001'],
    subNarrativeIds: ['sub-002'],
    personIds: [],
    organizationIds: ['org-001', 'org-010'],
    locationIds: ['loc-001'],
    eventIds: ['event-002']
  },
  // Reddit - Export controls discussion
  {
    id: 'doc-026',
    documentType: 'social_post',
    url: 'https://reddit.com/r/hardware/comments/xyz789/export_controls_backfiring',
    publishedDate: '2026-01-18T22:30:00Z',
    sourceId: 'src-reddit',
    author: {
      username: 'u/silicon_skeptic',
      displayName: 'silicon_skeptic',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    content: '**Are US chip export controls backfiring?**\n\nBetween SMIC\'s 5nm, YMTC\'s 232-layer NAND, and China\'s $47B new investment fund, I\'m starting to wonder if the export controls are doing what they\'re supposed to.\n\nBefore the restrictions:\n- China was heavily dependent on US/Western tech\n- Companies like Huawei bought most components from US suppliers\n- Little incentive for massive domestic investment\n\nAfter the restrictions:\n- $100B+ committed to semiconductor self-sufficiency\n- SMIC achieving nodes previously thought impossible without EUV\n- Huawei reportedly stockpiled billions in equipment\n- YMTC chips appearing in devices globally despite Entity List\n\nThe goal was to slow China\'s progress. Did we instead light a fire under them?\n\nCurious what others think. Not trying to make a political statement, just looking at the data.',
    engagement: {
      replies: 1847,
      likes: 4521,
      reblogs: 234
    },
    narrativeIds: ['narr-001', 'narr-002', 'narr-003'],
    subNarrativeIds: ['sub-003'],
    personIds: [],
    organizationIds: ['org-001', 'org-005'],
    locationIds: [],
    eventIds: []
  },
  // X/Twitter - Policy hawk perspective
  {
    id: 'doc-027',
    documentType: 'social_post',
    url: 'https://x.com/nationalsecuritywatch/status/1881345678901234',
    publishedDate: '2026-01-19T11:42:00Z',
    sourceId: 'src-x',
    author: {
      username: '@nationalsecuritywatch',
      displayName: 'National Security Watch',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    content: 'Don\'t be fooled by headlines about SMIC\'s "5nm breakthrough."\n\nYes, they made a chip. But:\n\n❌ Costs 3x more to produce\n❌ Yields far below competitive levels\n❌ Can\'t scale for high-volume manufacturing\n❌ Years behind on next-gen 3nm/2nm\n\nExport controls are working. The goal was never to completely stop progress—it was to maintain our lead.\n\nChina is burning through resources on brute-force engineering that won\'t be economically viable.\n\nStay the course.',
    engagement: {
      replies: 523,
      likes: 2847,
      reblogs: 892
    },
    narrativeIds: ['narr-001', 'narr-002'],
    subNarrativeIds: ['sub-003'],
    personIds: [],
    organizationIds: ['org-005'],
    locationIds: ['loc-004'],
    eventIds: []
  },
  // LinkedIn - ASML impact discussion
  {
    id: 'doc-028',
    documentType: 'social_post',
    url: 'https://linkedin.com/posts/semiconductor-analyst_asml-china-exportcontrols-activity',
    publishedDate: '2026-01-16T08:30:00Z',
    sourceId: 'src-linkedin',
    author: {
      username: 'jennifer-williams-analyst',
      displayName: 'Jennifer Williams, CFA',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    content: '💰 ASML\'s $2.5B China Problem\n\nASML\'s Q4 guidance update is a wake-up call for investors in the semiconductor equipment space.\n\nKey takeaways:\n\n📉 $2.5B annual revenue hit from expanded China restrictions\n📊 That\'s roughly 10% of total revenue\n📈 Stock down 8% on the news\n\nThe bigger picture:\n\nChina was ASML\'s fastest-growing market. Now it\'s effectively closed.\n\nBut here\'s what\'s not in the headlines: ASML\'s backlog remains at record levels. The question is whether demand from other regions can offset the China loss.\n\nMy take: Short-term pain, but ASML\'s monopoly on EUV gives them pricing power. Watching closely.\n\n#ASML #Semiconductors #InvestmentAnalysis #ExportControls',
    engagement: {
      replies: 156,
      likes: 923,
      reblogs: 187
    },
    narrativeIds: ['narr-002'],
    subNarrativeIds: ['sub-005'],
    personIds: ['person-004'],
    organizationIds: ['org-002'],
    locationIds: ['loc-003'],
    eventIds: ['event-004']
  },
  // X/Twitter - Huawei Mate 70 teardown
  {
    id: 'doc-029',
    documentType: 'social_post',
    url: 'https://x.com/techanalyst_cn/status/1881456789012345',
    publishedDate: '2026-01-18T16:20:00Z',
    sourceId: 'src-x',
    author: {
      username: '@techanalyst_cn',
      displayName: 'CN Tech Analysis',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    content: 'Just finished teardown of Huawei Mate 70. Confirmed: Kirin 9100 chip inside.\n\nDie marking shows SMIC 5nm process. This is real.\n\nKey observations:\n• Performance ~15% below A18 Bionic\n• Power efficiency noticeably worse\n• But it WORKS. And it\'s 100% China-made.\n\nPhotos and full analysis thread below 👇\n\n📸 [image]\n📸 [image]\n📸 [image]',
    media: [
      { type: 'image', url: 'img/placeholders/image-placeholder.svg', altText: 'Mate 70 teardown showing chip' }
    ],
    engagement: {
      replies: 1234,
      likes: 8921,
      reblogs: 3456
    },
    narrativeIds: ['narr-001'],
    subNarrativeIds: ['sub-002'],
    personIds: [],
    organizationIds: ['org-001', 'org-010'],
    locationIds: [],
    eventIds: ['event-002']
  },
  // Reddit - TSMC Arizona worker perspective
  {
    id: 'doc-030',
    documentType: 'social_post',
    url: 'https://reddit.com/r/semiconductors/comments/abc123/tsmc_arizona_worker_ama',
    publishedDate: '2026-01-17T19:00:00Z',
    sourceId: 'src-reddit',
    author: {
      username: 'u/az_chipworker',
      displayName: 'az_chipworker',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    content: '**I work at TSMC Arizona. AMA about what\'s really happening**\n\nSeen a lot of misinformation about the Arizona fab. Thought I\'d offer some perspective as someone actually on the ground.\n\nBackground: Been in semiconductor manufacturing for 12 years. Joined TSMC Arizona 18 months ago.\n\nSome quick context:\n\n1. Yes, there are culture clashes. Taiwan teams work differently than American teams. That\'s real.\n\n2. The delays are mostly about equipment installation and qualification, not "lazy American workers" like some reports suggest.\n\n3. Morale is... complicated. Good pay, interesting work, but lots of frustration with management style.\n\n4. We\'re all learning. First fab of this scale ever built in the US. Growing pains are expected.\n\nHappy to answer what I can without violating my NDA.',
    engagement: {
      replies: 2847,
      likes: 5621,
      reblogs: 456
    },
    narrativeIds: ['narr-007'],
    subNarrativeIds: ['sub-016', 'sub-017'],
    personIds: [],
    organizationIds: ['org-020'],
    locationIds: ['loc-009'],
    eventIds: ['event-013']
  },

  // ============================================
  // INTERNAL DOCUMENTS
  // ============================================

  // Internal Document - SMIC Technical Assessment (SECRET)
  {
    id: 'doc-031',
    documentType: 'internal',
    classification: 'S',
    url: null,
    publishedDate: '2026-01-16T08:00:00Z',
    sourceId: null,
    title: 'Technical Assessment: SMIC 5nm DUV Multi-Patterning Capability',
    author: 'Semiconductor Analysis Division',
    department: 'Technical Intelligence',
    contentBlocks: [
      { type: 'heading', content: 'Executive Summary', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'This assessment evaluates SMIC\'s reported achievement of 5nm chip production using DUV lithography with multi-patterning techniques. Analysis confirms the technical feasibility of the approach while identifying significant economic and scalability limitations.', portionMark: { classification: 'U', handling: 'FOUO' } },
      { type: 'heading', content: 'Technical Findings', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'Imagery analysis of Huawei Mate 70 teardowns confirms SMIC-manufactured Kirin 9100 processors at 5nm node. Die markings and packaging consistent with SMIC Shanghai Fab 18 production. Multi-patterning approach uses quadruple patterning with self-aligned techniques.', portionMark: { classification: 'S', handling: 'NOFORN' } },
      { type: 'paragraph', content: 'Process yields estimated at 20-35%, compared to 80%+ for TSMC\'s EUV-based 5nm. Cost per functional die approximately 2.8-3.2x higher than industry standard. Throughput limited by multi-exposure requirements—estimated 4-6x longer cycle time per wafer.', portionMark: { classification: 'S', handling: 'NOFORN' } },
      { type: 'heading', content: 'Production Capacity Assessment', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'Current SMIC 5nm capacity estimated at 3,000-5,000 wafers per month. Sufficient for Huawei flagship devices but inadequate for broader market supply. Expansion limited by DUV equipment availability—ASML NXT:2050i systems in short supply globally.', portionMark: { classification: 'S', handling: 'NOFORN' } },
      { type: 'heading', content: 'Export Control Implications', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'Achievement demonstrates export controls have not prevented advancement but have imposed significant cost and capability penalties. Recommend monitoring for potential acceleration of indigenous lithography development (SMEE roadmap) as China seeks to reduce DUV dependency.', portionMark: { classification: 'S', handling: 'NOFORN' } }
    ],
    excerpt: 'Technical assessment of SMIC\'s 5nm DUV multi-patterning capability, including yield analysis and export control implications.',
    narrativeIds: ['narr-001'],
    subNarrativeIds: ['sub-001', 'sub-002', 'sub-003'],
    personIds: ['person-001', 'person-002', 'person-003'],
    organizationIds: ['org-001', 'org-002', 'org-010'],
    locationIds: ['loc-001', 'loc-002'],
    eventIds: ['event-001', 'event-002'],
    factionIds: ['faction-001', 'faction-002', 'faction-003'],
    highlights: [
      {
        id: 'highlight-001',
        userId: 'user-001',
        blockIndex: 3,
        startOffset: 0,
        endOffset: 149,
        highlightedText: 'Imagery analysis of Huawei Mate 70 teardowns confirms SMIC-manufactured Kirin 9100 processors at 5nm node. Die markings and packaging consistent with',
        createdAt: '2026-01-16T09:30:00Z'
      },
      {
        id: 'highlight-002',
        userId: 'user-005',
        blockIndex: 4,
        startOffset: 0,
        endOffset: 125,
        highlightedText: 'Process yields estimated at 20-35%, compared to 80%+ for TSMC\'s EUV-based 5nm. Cost per functional die approximately 2.8-3.2x',
        createdAt: '2026-01-16T10:00:00Z'
      },
      {
        id: 'highlight-003',
        userId: 'user-006',
        blockIndex: 8,
        startOffset: 0,
        endOffset: 147,
        highlightedText: 'Achievement demonstrates export controls have not prevented advancement but have imposed significant cost and capability penalties. Recommend monitoring',
        createdAt: '2026-01-16T10:30:00Z'
      }
    ],
    comments: [
      {
        id: 'comment-001',
        userId: 'user-001',
        blockIndex: 4,
        anchorStartOffset: 0,
        anchorEndOffset: 125,
        anchorText: 'Process yields estimated at 20-35%, compared to 80%+ for TSMC\'s EUV-based 5nm. Cost per functional die approximately 2.8-3.2x',
        content: 'The yield gap is significant but narrowing. Six months ago we estimated 15-20%. They\'re improving faster than projected.',
        createdAt: '2026-01-16T10:15:00Z',
        replies: [
          {
            id: 'reply-001',
            userId: 'user-005',
            content: 'Agreed. We should update our projections. The learning curve is steeper than we modeled.',
            createdAt: '2026-01-16T10:45:00Z'
          }
        ]
      },
      {
        id: 'comment-002',
        userId: 'user-006',
        blockIndex: 8,
        anchorStartOffset: 0,
        anchorEndOffset: 147,
        anchorText: 'Achievement demonstrates export controls have not prevented advancement but have imposed significant cost and capability penalties. Recommend monitoring',
        content: 'This is the key takeaway for policymakers. Controls are working but not as a barrier—more as a tax on China\'s progress.',
        createdAt: '2026-01-16T11:00:00Z',
        replies: [
          {
            id: 'reply-002',
            userId: 'user-004',
            content: 'Should we recommend enhanced controls on DUV equipment? That\'s their current workaround.',
            createdAt: '2026-01-16T11:30:00Z'
          },
          {
            id: 'reply-003',
            userId: 'user-006',
            content: 'That\'s being discussed. The policy team is modeling scenarios. ASML revenue impact is a concern.',
            createdAt: '2026-01-16T12:00:00Z'
          }
        ]
      }
    ]
  },

  // Internal Document - Export Controls Effectiveness Review (SECRET)
  {
    id: 'doc-032',
    documentType: 'internal',
    classification: 'S',
    url: null,
    publishedDate: '2026-01-18T14:00:00Z',
    sourceId: null,
    title: 'Export Controls Effectiveness Review: Semiconductor Equipment Restrictions',
    author: 'Policy Analysis Division',
    department: 'Policy Analysis',
    contentBlocks: [
      { type: 'heading', content: 'Assessment Scope', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'This review assesses the effectiveness of US and allied export controls on semiconductor manufacturing equipment to China, focusing on the period following expanded ASML DUV restrictions announced January 12, 2026.', portionMark: { classification: 'U', handling: 'FOUO' } },
      { type: 'heading', content: 'Key Findings', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'Export controls have successfully prevented Chinese access to EUV lithography, maintaining a 2-3 generation gap in leading-edge production capability. However, controls have not prevented advancement through alternative approaches (DUV multi-patterning) nor deterred massive domestic investment ($47B Big Fund III).', portionMark: { classification: 'S', handling: 'NOFORN' } },
      { type: 'heading', content: 'Stockpiling Concerns', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'Intelligence indicates Huawei accumulated $5-8 billion in semiconductor equipment prior to expanded restrictions. Commerce Department investigation ongoing into potential sanctions circumvention through third-party intermediaries. Pattern suggests systematic preparation for prolonged restrictions.', portionMark: { classification: 'S', handling: 'NOFORN' } },
      { type: 'heading', content: 'ASML Impact Analysis', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'ASML projects $2.5B annual revenue loss from China restrictions. Company stock declined 8% following announcement. Dutch government concerns about economic impact may affect long-term compliance. Peter Wennink (person-004) expressed frustration in earnings call.', portionMark: { classification: 'U', handling: 'FOUO' } },
      { type: 'heading', content: 'Recommendations', portionMark: { classification: 'S', handling: '' } },
      { type: 'list', content: ['Expand Entity List enforcement monitoring for YMTC chips in consumer devices', 'Coordinate with allies on closing third-party intermediary loopholes', 'Assess viability of extending controls to mature node equipment', 'Monitor SMEE lithography development for potential future restrictions'], portionMark: { classification: 'S', handling: 'NOFORN' } }
    ],
    excerpt: 'Review of semiconductor export controls effectiveness, including stockpiling concerns and recommendations for enhanced enforcement.',
    narrativeIds: ['narr-002', 'narr-004'],
    subNarrativeIds: ['sub-004', 'sub-005', 'sub-006', 'sub-010', 'sub-011'],
    personIds: ['person-004', 'person-005', 'person-006', 'person-007', 'person-011', 'person-012'],
    organizationIds: ['org-002', 'org-004', 'org-005', 'org-006', 'org-010'],
    locationIds: ['loc-003', 'loc-004', 'loc-005'],
    eventIds: ['event-003', 'event-004', 'event-005', 'event-008', 'event-009'],
    factionIds: ['faction-001', 'faction-002', 'faction-004', 'faction-006'],
    highlights: [
      {
        id: 'highlight-004',
        userId: 'user-004',
        blockIndex: 3,
        startOffset: 0,
        endOffset: 168,
        highlightedText: 'Export controls have successfully prevented Chinese access to EUV lithography, maintaining a 2-3 generation gap in leading-edge production capability. However, controls',
        createdAt: '2026-01-18T15:00:00Z'
      },
      {
        id: 'highlight-005',
        userId: 'user-002',
        blockIndex: 5,
        startOffset: 0,
        endOffset: 143,
        highlightedText: 'Intelligence indicates Huawei accumulated $5-8 billion in semiconductor equipment prior to expanded restrictions. Commerce Department investigation',
        createdAt: '2026-01-18T15:30:00Z'
      },
      {
        id: 'highlight-006',
        userId: 'user-006',
        blockIndex: 7,
        startOffset: 0,
        endOffset: 119,
        highlightedText: 'ASML projects $2.5B annual revenue loss from China restrictions. Company stock declined 8% following announcement. Dutch',
        createdAt: '2026-01-18T16:00:00Z'
      }
    ],
    comments: [
      {
        id: 'comment-003',
        userId: 'user-002',
        blockIndex: 5,
        anchorStartOffset: 0,
        anchorEndOffset: 143,
        anchorText: 'Intelligence indicates Huawei accumulated $5-8 billion in semiconductor equipment prior to expanded restrictions. Commerce Department investigation',
        content: 'The stockpiling strategy was sophisticated. They anticipated the restrictions and prepared accordingly. We need better lead-time indicators.',
        createdAt: '2026-01-18T15:45:00Z',
        replies: [
          {
            id: 'reply-004',
            userId: 'user-003',
            content: 'Supply chain team is building a tracking model for future equipment purchases by Chinese firms. Should have baseline by Q2.',
            createdAt: '2026-01-18T16:15:00Z'
          }
        ]
      },
      {
        id: 'comment-004',
        userId: 'user-004',
        blockIndex: 7,
        anchorStartOffset: 119,
        anchorEndOffset: 216,
        anchorText: 'Dutch government concerns about economic impact may affect long-term compliance. Peter Wennink (person-004) expressed frustration',
        content: 'Allied alignment is fragile. We should flag this for the policy team—Dutch compliance is essential.',
        createdAt: '2026-01-18T16:30:00Z',
        replies: [
          {
            id: 'reply-005',
            userId: 'user-006',
            content: 'State is aware. There\'s a ministerial meeting next month to discuss continued coordination.',
            createdAt: '2026-01-18T17:00:00Z'
          }
        ]
      }
    ]
  },

  // Internal Document - Big Fund III Investment Analysis
  {
    id: 'doc-033',
    documentType: 'internal',
    classification: 'U',
    url: null,
    publishedDate: '2026-01-19T10:00:00Z',
    sourceId: null,
    title: 'Investment Analysis: China National IC Fund Phase III',
    author: 'Economic Analysis Division',
    department: 'Economic Intelligence',
    contentBlocks: [
      { type: 'heading', content: 'Fund Overview', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'China has launched the third phase of its National Integrated Circuit Industry Investment Fund ("Big Fund III") with 340 billion yuan ($47 billion). This exceeds the combined total of Phase I ($21B) and Phase II ($29B), representing a significant escalation of state-directed semiconductor investment.', portionMark: { classification: 'U', handling: 'FOUO' } },
      { type: 'heading', content: 'Investment Priorities', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'State Council guidelines prioritize: (1) Advanced packaging technologies including chiplets and 2.5D/3D stacking, (2) Semiconductor manufacturing equipment with focus on lithography, (3) EDA software development to reduce Cadence/Synopsys dependency. Notably absent: direct investment in leading-edge logic fabs.', portionMark: { classification: 'U', handling: 'FOUO' } },
      { type: 'heading', content: 'Key Recipients', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Expected major beneficiaries include: SMEE (lithography equipment), Empyrean Technology (EDA), Huada Jiutian (EDA), AMEC (etch equipment), Naura (deposition equipment). State-owned enterprises providing majority of capital, signaling deepening government control over sector.', portionMark: { classification: 'U', handling: 'FOUO' } },
      { type: 'heading', content: 'Historical Context', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Big Fund has mixed track record. Phase I investments in YMTC and CXMT showed technology progress but corruption scandals led to arrests of senior officials. Western analysts question whether capital injection can overcome equipment access barriers.', portionMark: { classification: 'U', handling: 'FOUO' } },
      { type: 'heading', content: 'Market Implications', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Fund announcement drove Chinese semiconductor stocks up 8-12%. Global equipment makers (ASML, Applied Materials, Lam Research) showed mixed reaction—Chinese domestic equipment push represents both lost opportunity and potential long-term competitive threat.', portionMark: { classification: 'U', handling: 'FOUO' } }
    ],
    excerpt: 'Analysis of China\'s $47 billion Big Fund III semiconductor investment, including priorities, recipients, and market implications.',
    narrativeIds: ['narr-003'],
    subNarrativeIds: ['sub-007', 'sub-008', 'sub-009'],
    personIds: ['person-008', 'person-009', 'person-010'],
    organizationIds: ['org-007', 'org-008', 'org-009', 'org-016', 'org-017', 'org-022'],
    locationIds: ['loc-002', 'loc-006'],
    eventIds: ['event-006', 'event-007'],
    factionIds: ['faction-001', 'faction-002', 'faction-003', 'faction-005'],
    highlights: [
      {
        id: 'highlight-007',
        userId: 'user-002',
        blockIndex: 1,
        startOffset: 0,
        endOffset: 175,
        highlightedText: 'China has launched the third phase of its National Integrated Circuit Industry Investment Fund ("Big Fund III") with 340 billion yuan ($47 billion). This exceeds the combined',
        createdAt: '2026-01-19T11:00:00Z'
      },
      {
        id: 'highlight-008',
        userId: 'user-001',
        blockIndex: 3,
        startOffset: 0,
        endOffset: 196,
        highlightedText: 'State Council guidelines prioritize: (1) Advanced packaging technologies including chiplets and 2.5D/3D stacking, (2) Semiconductor manufacturing equipment with focus on lithography, (3) EDA software',
        createdAt: '2026-01-19T11:30:00Z'
      },
      {
        id: 'highlight-009',
        userId: 'user-006',
        blockIndex: 7,
        startOffset: 0,
        endOffset: 155,
        highlightedText: 'Big Fund has mixed track record. Phase I investments in YMTC and CXMT showed technology progress but corruption scandals led to arrests of senior officials.',
        createdAt: '2026-01-19T12:00:00Z'
      }
    ],
    comments: [
      {
        id: 'comment-005',
        userId: 'user-002',
        blockIndex: 1,
        anchorStartOffset: 175,
        anchorEndOffset: 292,
        anchorText: 'This exceeds the combined total of Phase I ($21B) and Phase II ($29B), representing a significant escalation of state-directed semiconductor investment.',
        content: 'The scale signals strategic priority at the highest levels. This isn\'t incremental—it\'s a whole-of-government commitment.',
        createdAt: '2026-01-19T11:15:00Z',
        replies: [
          {
            id: 'reply-006',
            userId: 'user-006',
            content: 'Agreed. Include this in the weekly strategic assessment. NSC will want to see the comparison with our CHIPS Act funding.',
            createdAt: '2026-01-19T11:45:00Z'
          }
        ]
      },
      {
        id: 'comment-006',
        userId: 'user-001',
        blockIndex: 3,
        anchorStartOffset: 196,
        anchorEndOffset: 274,
        anchorText: 'Notably absent: direct investment in leading-edge logic fabs.',
        content: 'This is interesting. They may be recognizing that logic fab investment has diminishing returns without EUV access.',
        createdAt: '2026-01-19T12:00:00Z',
        replies: [
          {
            id: 'reply-007',
            userId: 'user-005',
            content: 'Or pivoting to areas where they can achieve self-sufficiency faster. Equipment and EDA are strategic bottlenecks.',
            createdAt: '2026-01-19T12:30:00Z'
          }
        ]
      }
    ]
  },

  // Internal Document - YMTC Supply Chain Analysis (SECRET)
  {
    id: 'doc-034',
    documentType: 'internal',
    classification: 'S',
    url: null,
    publishedDate: '2026-01-19T16:00:00Z',
    sourceId: null,
    title: 'Supply Chain Analysis: YMTC Memory Chips in Global Consumer Electronics',
    author: 'Supply Chain Intelligence Division',
    department: 'Supply Chain Analysis',
    contentBlocks: [
      { type: 'heading', content: 'Investigation Summary', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'This analysis examines the presence of YMTC-manufactured NAND flash memory in consumer electronics despite the company\'s placement on the US Entity List in December 2022.', portionMark: { classification: 'U', handling: 'FOUO' } },
      { type: 'heading', content: 'Product Identification', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'TechInsights teardown analysis has confirmed YMTC 232-layer 3D NAND chips in: smartphones from 3 Chinese brands, SSDs from 2 Taiwanese ODMs, and USB drives from multiple white-label manufacturers. Chip markings indicate YMTC Fab 1 and Fab 2 production in Wuhan.', portionMark: { classification: 'S', handling: 'NOFORN' } },
      { type: 'heading', content: 'Supply Chain Pathways', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'Analysis indicates chips are reaching global markets through: (1) Direct integration by Chinese OEMs not subject to US jurisdiction, (2) Module assembly in Southeast Asia obscuring chip origin, (3) Relabeling through intermediary distributors. End-to-end tracking proves difficult without physical teardowns.', portionMark: { classification: 'S', handling: 'NOFORN' } },
      { type: 'heading', content: 'Technology Assessment', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'YMTC 232-layer NAND demonstrates competitive performance with Samsung and SK Hynix offerings in sequential read/write and random IOPS. Power efficiency approximately 8% lower. Technology gap has narrowed significantly from 2022 baseline despite export restrictions.', portionMark: { classification: 'S', handling: 'NOFORN' } },
      { type: 'heading', content: 'Enforcement Recommendations', portionMark: { classification: 'S', handling: '' } },
      { type: 'list', content: ['Expand Entity List to include known intermediary distributors', 'Require country-of-origin disclosure for memory components in US-bound electronics', 'Coordinate with Taiwanese authorities on ODM compliance', 'Consider secondary sanctions for companies knowingly sourcing YMTC chips'], portionMark: { classification: 'S', handling: 'NOFORN' } }
    ],
    excerpt: 'Analysis of YMTC memory chip presence in global supply chains despite Entity List restrictions, including pathways and enforcement recommendations.',
    narrativeIds: ['narr-005'],
    subNarrativeIds: ['sub-012', 'sub-013'],
    personIds: ['person-013', 'person-014'],
    organizationIds: ['org-013', 'org-014', 'org-015', 'org-005'],
    locationIds: ['loc-007', 'loc-004'],
    eventIds: ['event-010', 'event-011'],
    factionIds: ['faction-001', 'faction-002', 'faction-003', 'faction-006'],
    highlights: [
      {
        id: 'highlight-010',
        userId: 'user-003',
        blockIndex: 3,
        startOffset: 0,
        endOffset: 178,
        highlightedText: 'TechInsights teardown analysis has confirmed YMTC 232-layer 3D NAND chips in: smartphones from 3 Chinese brands, SSDs from 2 Taiwanese ODMs, and USB drives from multiple white-label',
        createdAt: '2026-01-19T17:00:00Z'
      },
      {
        id: 'highlight-011',
        userId: 'user-004',
        blockIndex: 5,
        startOffset: 0,
        endOffset: 199,
        highlightedText: 'Analysis indicates chips are reaching global markets through: (1) Direct integration by Chinese OEMs not subject to US jurisdiction, (2) Module assembly in Southeast Asia obscuring chip origin, (3)',
        createdAt: '2026-01-19T17:30:00Z'
      },
      {
        id: 'highlight-012',
        userId: 'user-001',
        blockIndex: 7,
        startOffset: 0,
        endOffset: 157,
        highlightedText: 'YMTC 232-layer NAND demonstrates competitive performance with Samsung and SK Hynix offerings in sequential read/write and random IOPS. Power efficiency approximately',
        createdAt: '2026-01-19T18:00:00Z'
      }
    ],
    comments: [
      {
        id: 'comment-007',
        userId: 'user-003',
        blockIndex: 5,
        anchorStartOffset: 0,
        anchorEndOffset: 199,
        anchorText: 'Analysis indicates chips are reaching global markets through: (1) Direct integration by Chinese OEMs not subject to US jurisdiction, (2) Module assembly in Southeast Asia obscuring chip origin, (3)',
        content: 'The Southeast Asia module assembly pathway is the hardest to track. We need better visibility into Vietnamese and Malaysian assembly operations.',
        createdAt: '2026-01-19T17:45:00Z',
        replies: [
          {
            id: 'reply-008',
            userId: 'user-006',
            content: 'Commerce is aware but enforcement resources are limited. Prioritize the highest-volume pathways.',
            createdAt: '2026-01-19T18:15:00Z'
          }
        ]
      },
      {
        id: 'comment-008',
        userId: 'user-001',
        blockIndex: 7,
        anchorStartOffset: 0,
        anchorEndOffset: 157,
        anchorText: 'YMTC 232-layer NAND demonstrates competitive performance with Samsung and SK Hynix offerings in sequential read/write and random IOPS. Power efficiency approximately',
        content: 'The technology gap is narrowing faster than expected. Two years ago they were 3 generations behind. Now it\'s less than one.',
        createdAt: '2026-01-19T18:30:00Z',
        replies: [
          {
            id: 'reply-009',
            userId: 'user-005',
            content: 'Memory is a different story than logic. More commoditized and easier to reverse-engineer. But still concerning.',
            createdAt: '2026-01-19T19:00:00Z'
          }
        ]
      }
    ]
  },

  // Internal Document - TSMC Arizona Operations Assessment
  {
    id: 'doc-035',
    documentType: 'internal',
    classification: 'U',
    url: null,
    publishedDate: '2026-01-17T15:00:00Z',
    sourceId: null,
    title: 'Operations Assessment: TSMC Arizona Fab Construction and Workforce Challenges',
    author: 'Industrial Analysis Division',
    department: 'Industrial Intelligence',
    contentBlocks: [
      { type: 'heading', content: 'Project Status', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'TSMC\'s $40 billion Arizona fabrication facility faces significant delays. Original 2024 production target has slipped to late 2025 for 4nm chips. Cost overruns estimated at 15-20% above initial projections. Second fab (3nm) timeline uncertain.', portionMark: { classification: 'U', handling: 'FOUO' } },
      { type: 'heading', content: 'Workforce Dynamics', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Cultural tensions between Taiwanese management and American workforce well-documented. Arizona Building and Construction Trades Council (org-021) filed formal grievances citing management practices. TSMC CEO C.C. Wei acknowledged "different work culture" in public remarks.', portionMark: { classification: 'U', handling: 'FOUO' } },
      { type: 'paragraph', content: 'Key friction points include: expectations around overtime and weekend work, communication styles, decision-making hierarchy, and training approaches. TSMC has brought approximately 500 Taiwanese engineers to Arizona, creating perception of two-tier workforce.', portionMark: { classification: 'U', handling: 'FOUO' } },
      { type: 'heading', content: 'Strategic Implications', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Delays undermine CHIPS Act goal of domestic semiconductor manufacturing. Intel and Samsung facing similar challenges at US facilities. Questions emerging about viability of reshoring advanced chip production without fundamental changes to work culture expectations.', portionMark: { classification: 'U', handling: 'FOUO' } },
      { type: 'heading', content: 'Chinese Media Response', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Chinese Tech Industry Supporters faction (faction-001) amplifying TSMC Arizona difficulties. Narrative framing: US manufacturing decline vs. Chinese industrial capability. Global Times and CGTN coverage emphasizes "American workers can\'t match Asian discipline."', portionMark: { classification: 'U', handling: 'FOUO' } }
    ],
    excerpt: 'Assessment of TSMC Arizona fab challenges including workforce dynamics, delays, and strategic implications for US semiconductor manufacturing.',
    narrativeIds: ['narr-007'],
    subNarrativeIds: ['sub-016', 'sub-017'],
    personIds: ['person-017', 'person-018', 'person-019'],
    organizationIds: ['org-020', 'org-021'],
    locationIds: ['loc-009', 'loc-010'],
    eventIds: ['event-013', 'event-014'],
    factionIds: ['faction-001', 'faction-005', 'faction-006'],
    highlights: [
      {
        id: 'highlight-013',
        userId: 'user-001',
        blockIndex: 1,
        startOffset: 0,
        endOffset: 151,
        highlightedText: 'TSMC\'s $40 billion Arizona fabrication facility faces significant delays. Original 2024 production target has slipped to late 2025 for 4nm chips. Cost',
        createdAt: '2026-01-17T16:00:00Z'
      },
      {
        id: 'highlight-014',
        userId: 'user-004',
        blockIndex: 3,
        startOffset: 0,
        endOffset: 163,
        highlightedText: 'Cultural tensions between Taiwanese management and American workforce well-documented. Arizona Building and Construction Trades Council (org-021) filed formal grievances',
        createdAt: '2026-01-17T16:30:00Z'
      },
      {
        id: 'highlight-015',
        userId: 'user-006',
        blockIndex: 6,
        startOffset: 0,
        endOffset: 144,
        highlightedText: 'Delays undermine CHIPS Act goal of domestic semiconductor manufacturing. Intel and Samsung facing similar challenges at US facilities. Questions',
        createdAt: '2026-01-17T17:00:00Z'
      },
      {
        id: 'highlight-016',
        userId: 'user-002',
        blockIndex: 8,
        startOffset: 0,
        endOffset: 142,
        highlightedText: 'Chinese Tech Industry Supporters faction (faction-001) amplifying TSMC Arizona difficulties. Narrative framing: US manufacturing decline vs.',
        createdAt: '2026-01-17T17:30:00Z'
      }
    ],
    comments: [
      {
        id: 'comment-009',
        userId: 'user-004',
        blockIndex: 4,
        anchorStartOffset: 0,
        anchorEndOffset: 200,
        anchorText: 'Key friction points include: expectations around overtime and weekend work, communication styles, decision-making hierarchy, and training approaches. TSMC has brought approximately 500 Taiwanese engineers',
        content: 'The cultural integration challenges were predictable. We flagged this in the CHIPS Act implementation assessment last year.',
        createdAt: '2026-01-17T16:45:00Z',
        replies: [
          {
            id: 'reply-010',
            userId: 'user-001',
            content: 'True, but the depth of the issues is worse than expected. This affects all reshoring efforts, not just TSMC.',
            createdAt: '2026-01-17T17:15:00Z'
          }
        ]
      },
      {
        id: 'comment-010',
        userId: 'user-006',
        blockIndex: 6,
        anchorStartOffset: 144,
        anchorEndOffset: 285,
        anchorText: 'Questions emerging about viability of reshoring advanced chip production without fundamental changes to work culture expectations.',
        content: 'This is the hard question nobody wants to address. Do we adapt American work culture or accept that leading-edge fabs will always be in Asia?',
        createdAt: '2026-01-17T17:45:00Z',
        replies: [
          {
            id: 'reply-011',
            userId: 'user-002',
            content: 'Worth noting that Intel and GlobalFoundries have operated US fabs successfully. The issue may be specific to leading-edge processes.',
            createdAt: '2026-01-17T18:00:00Z'
          },
          {
            id: 'reply-012',
            userId: 'user-006',
            content: 'Good point. Intel\'s new Ohio fab will be an important test case. Different company, different approach.',
            createdAt: '2026-01-17T18:30:00Z'
          }
        ]
      },
      {
        id: 'comment-011',
        userId: 'user-002',
        blockIndex: 8,
        anchorStartOffset: 142,
        anchorEndOffset: 261,
        anchorText: 'Narrative framing: US manufacturing decline vs. Chinese industrial capability. Global Times and CGTN coverage emphasizes "American workers can\'t match Asian discipline."',
        content: 'This narrative is gaining traction internationally. We should prepare counter-messaging emphasizing different metrics of success.',
        createdAt: '2026-01-17T18:15:00Z',
        replies: []
      }
    ]
  }
];
