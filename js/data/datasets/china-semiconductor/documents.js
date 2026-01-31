/**
 * Documents for China Semiconductor dataset
 * Includes news articles, social posts, and internal documents
 */

export const documents = [
  // News Article - SMIC breakthrough
  {
    id: 'doc-001',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'SMIC confirms 5nm chip mass production using DUV multi-patterning',
    url: 'https://semiengi.com/smic-5nm-duv-breakthrough-2026',
    publishedDate: '2026-01-15T08:30:00Z',
    publisherId: 'pub-semiengi',
    author: 'Mark Liu',
    excerpt: 'SMIC has confirmed it is mass producing 5nm chips using advanced multi-patterning techniques with DUV lithography, marking a significant milestone for Chinese semiconductor manufacturing.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'SMIC semiconductor fabrication facility'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Semiconductor Manufacturing International Corporation (SMIC) has confirmed it has achieved mass production of 5nm chips using deep ultraviolet (DUV) lithography, a significant breakthrough that demonstrates China\'s ability to advance despite export restrictions on EUV equipment.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Industry sources indicate SMIC is using an innovative multi-patterning approach that compensates for the lack of extreme ultraviolet lithography systems, though at higher cost and lower yield than competitors using ASML\'s EUV machines.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-001'],
    themeIds: ['sub-001'],
    topicIds: ['topic-001'],
    personIds: ['person-001', 'person-002'],
    organizationIds: ['org-001'],
    locationIds: ['loc-001'],
    eventIds: ['event-001'],
    factionMentions: {
      'faction-001': { sentiment: 0.75,
      'faction-011': { sentiment: 0.85 }
    },
      'faction-002': { sentiment: -0.58 },
      'faction-003': { sentiment: 0.12 }
    },
    tagIds: ['tag-002'],
    highlights: [
      {
        id: 'highlight-101',
        userId: 'user-001',
        blockIndex: 0,
        startOffset: 0,
        endOffset: 142,
        highlightedText: 'Semiconductor Manufacturing International Corporation (SMIC) has confirmed it has achieved mass production of 5nm chips using deep ultraviolet (DUV)',
        createdAt: '2026-01-15T10:00:00Z'
      }
    ],
    comments: [
      {
        id: 'comment-101',
        userId: 'user-001',
        blockIndex: 0,
        anchorStartOffset: 0,
        anchorEndOffset: 142,
        anchorText: 'Semiconductor Manufacturing International Corporation (SMIC) has confirmed it has achieved mass production of 5nm chips using deep ultraviolet (DUV)',
        content: 'Key development. This confirms the rumors we\'ve been tracking for months.',
        createdAt: '2026-01-15T10:15:00Z',
        replies: [
          {
            id: 'reply-101',
            userId: 'user-002',
            content: 'Agreed. Need to validate with our technical sources.',
            createdAt: '2026-01-15T10:45:00Z'
          }
        ]
      }
    ]
  },
  // News Article - SCMP report
  {
    id: 'doc-002',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'China\'s SMIC achieves advanced chip production without EUV machines',
    url: 'https://scmp.com/tech/smic-5nm-no-euv-2026',
    publishedDate: '2026-01-16T06:00:00Z',
    publisherId: 'pub-scmp',
    author: 'Che Pan',
    excerpt: 'In a major breakthrough, SMIC has demonstrated the ability to produce 5nm chips without access to ASML\'s extreme ultraviolet lithography systems, though at lower yields.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'SMIC chip production line'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'In a major breakthrough, SMIC has demonstrated the ability to produce 5nm chips without access to ASML\'s extreme ultraviolet lithography systems, though at lower yields.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-001'],
    themeIds: ['sub-001'],
    topicIds: ['topic-001'],
    personIds: ['person-001'],
    organizationIds: ['org-001'],
    locationIds: ['loc-001'],
    eventIds: ['event-001'],
    factionMentions: {
      'faction-001': { sentiment: 0.72,
      'faction-011': { sentiment: 0.85 }
    },
      'faction-002': { sentiment: -0.55 },
      'faction-003': { sentiment: 0.18 }
    },
    tagIds: ['tag-003'],
    highlights: [],
    comments: []
  },
  // News Article - SemiAnalysis
  {
    id: 'doc-003',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Analysis: SMIC\'s 5nm achievement and what it means for export controls',
    url: 'https://semianalysis.com/smic-5nm-analysis',
    publishedDate: '2026-01-17T10:00:00Z',
    publisherId: 'pub-semiengi',
    author: 'Dylan Patel',
    excerpt: 'SemiAnalysis deep-dive into SMIC\'s technical approach reveals innovative multi-patterning but significant cost and yield penalties compared to EUV-based production.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'Semiconductor wafer analysis'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'SemiAnalysis deep-dive into SMIC\'s technical approach reveals innovative multi-patterning but significant cost and yield penalties compared to EUV-based production.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-001'],
    themeIds: ['sub-001', 'sub-003'],
    topicIds: ['topic-001'],
    personIds: ['person-003'],
    organizationIds: ['org-001', 'org-023'],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: 0.77,
      'faction-011': { sentiment: 0.85 }
    },
      'faction-002': { sentiment: -0.62 },
      'faction-003': { sentiment: 0.15 }
    },
    tagIds: ['tag-001'],
    highlights: [
      {
        id: 'highlight-102',
        userId: 'user-003',
        blockIndex: 0,
        startOffset: 0,
        endOffset: 85,
        highlightedText: 'SemiAnalysis deep-dive into SMIC\'s technical approach reveals innovative multi-patterning',
        createdAt: '2026-01-17T12:00:00Z'
      }
    ],
    comments: []
  },
  // News Article - Bloomberg
  {
    id: 'doc-004',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'SMIC breakthrough raises questions about US chip strategy',
    url: 'https://bloomberg.com/smic-breakthrough-us-strategy',
    publishedDate: '2026-01-18T14:00:00Z',
    publisherId: 'pub-bloomberg',
    author: 'Ian King',
    excerpt: 'SMIC\'s unexpected advancement has sparked debate in Washington about the efficacy of semiconductor export controls and whether they are achieving their intended goals.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'US Capitol building'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'SMIC\'s unexpected advancement has sparked debate in Washington about the efficacy of semiconductor export controls and whether they are achieving their intended goals.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-001'],
    themeIds: ['sub-003'],
    topicIds: ['topic-001'],
    personIds: ['person-003', 'person-005'],
    organizationIds: ['org-001', 'org-005'],
    locationIds: ['loc-004'],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: 0.74,
      'faction-011': { sentiment: 0.85 }
    },
      'faction-002': { sentiment: -0.59 },
      'faction-003': { sentiment: 0.16 }
    },
    tagIds: ['tag-002'],
    highlights: [],
    comments: []
  },
  // News Article - Reuters ASML
  {
    id: 'doc-005',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Netherlands expands ASML export restrictions to advanced DUV systems',
    url: 'https://reuters.com/netherlands-asml-duv-restrictions',
    publishedDate: '2026-01-12T15:00:00Z',
    publisherId: 'pub-reuters',
    author: 'Toby Sterling',
    excerpt: 'The Dutch government has announced expanded export controls blocking ASML from shipping advanced deep ultraviolet lithography systems to China.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'ASML headquarters in Veldhoven, Netherlands'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'The Dutch government has announced expanded export controls blocking ASML from shipping advanced deep ultraviolet lithography systems to China.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-002'],
    themeIds: ['sub-004'],
    topicIds: ['topic-002'],
    personIds: ['person-007', 'person-004'],
    organizationIds: ['org-002', 'org-004'],
    locationIds: ['loc-005'],
    eventIds: ['event-003'],
    factionMentions: {
      'faction-001': { sentiment: -0.82,
      'faction-007': { sentiment: -0.52 },
      'faction-013': { sentiment: -0.68 }
    },
      'faction-002': { sentiment: 0.71 },
      'faction-004': { sentiment: -0.68 },
      'faction-006': { sentiment: -0.45 }
    },
    tagIds: ['tag-003'],
    highlights: [
      {
        id: 'highlight-103',
        userId: 'user-002',
        blockIndex: 0,
        startOffset: 0,
        endOffset: 138,
        highlightedText: 'The Dutch government has announced expanded export controls blocking ASML from shipping advanced deep ultraviolet lithography systems to China.',
        createdAt: '2026-01-12T17:00:00Z'
      }
    ],
    comments: [
      {
        id: 'comment-102',
        userId: 'user-002',
        blockIndex: 0,
        anchorStartOffset: 0,
        anchorEndOffset: 138,
        anchorText: 'The Dutch government has announced expanded export controls blocking ASML from shipping advanced deep ultraviolet lithography systems to China.',
        content: 'This expands restrictions beyond EUV to include advanced DUV. Significant escalation.',
        createdAt: '2026-01-12T17:30:00Z',
        replies: []
      }
    ]
  },
  // News Article - FT ASML
  {
    id: 'doc-006',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'ASML warns China restrictions will cut $2.5B from annual revenue',
    url: 'https://ft.com/asml-china-revenue-warning',
    publishedDate: '2026-01-15T17:00:00Z',
    publisherId: 'pub-ft',
    author: 'Peggy Hollinger',
    excerpt: 'ASML CEO Peter Wennink told investors that expanded China export restrictions will reduce the company\'s annual revenue by approximately $2.5 billion.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'ASML CEO Peter Wennink at investor meeting'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'ASML CEO Peter Wennink told investors that expanded China export restrictions will reduce the company\'s annual revenue by approximately $2.5 billion.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-002'],
    themeIds: ['sub-005'],
    topicIds: ['topic-002'],
    personIds: ['person-004'],
    organizationIds: ['org-002'],
    locationIds: ['loc-003'],
    eventIds: ['event-004'],
    factionMentions: {
      'faction-001': { sentiment: -0.79,
      'faction-007': { sentiment: -0.52 },
      'faction-013': { sentiment: -0.68 }
    },
      'faction-002': { sentiment: 0.73 },
      'faction-004': { sentiment: -0.65 },
      'faction-006': { sentiment: -0.44 }
    },
    tagIds: ['tag-001'],
    highlights: [],
    comments: []
  },
  // News Article - WSJ Raimondo
  {
    id: 'doc-007',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Raimondo defends expanded chip controls as necessary for national security',
    url: 'https://wsj.com/raimondo-chip-controls-defense',
    publishedDate: '2026-01-14T12:00:00Z',
    publisherId: 'pub-wsj',
    author: 'Yuka Hayashi',
    excerpt: 'Commerce Secretary Gina Raimondo defended the administration\'s expanded semiconductor export controls, calling them essential to maintaining US technological leadership.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'Commerce Secretary Gina Raimondo at press briefing'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Commerce Secretary Gina Raimondo defended the administration\'s expanded semiconductor export controls, calling them essential to maintaining US technological leadership.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-002'],
    themeIds: ['sub-004'],
    topicIds: ['topic-002'],
    personIds: ['person-005', 'person-006'],
    organizationIds: ['org-005'],
    locationIds: ['loc-004'],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: -0.84,
      'faction-007': { sentiment: -0.52 },
      'faction-013': { sentiment: -0.68 }
    },
      'faction-002': { sentiment: 0.69 },
      'faction-004': { sentiment: -0.71 },
      'faction-006': { sentiment: -0.47 }
    },
    tagIds: ['tag-002'],
    highlights: [],
    comments: []
  },
  // News Article - BIS Entity List
  {
    id: 'doc-008',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'BIS updates Entity List with new Chinese semiconductor firms',
    url: 'https://commerce.gov/bis-entity-list-update-jan-2026',
    publishedDate: '2026-01-13T10:00:00Z',
    publisherId: 'pub-reuters',
    author: 'Reuters Staff',
    excerpt: 'The Bureau of Industry and Security has added 15 new Chinese companies to the Entity List, expanding restrictions on semiconductor technology transfers.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'US Department of Commerce building'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'The Bureau of Industry and Security has added 15 new Chinese companies to the Entity List, expanding restrictions on semiconductor technology transfers.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-002'],
    themeIds: [],
    topicIds: ['topic-002'],
    personIds: ['person-005'],
    organizationIds: ['org-005', 'org-006'],
    locationIds: ['loc-004'],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: -0.81,
      'faction-007': { sentiment: -0.52 },
      'faction-013': { sentiment: -0.68 }
    },
      'faction-002': { sentiment: 0.74 },
      'faction-004': { sentiment: -0.66 },
      'faction-006': { sentiment: -0.43 }
    },
    tagIds: ['tag-003'],
    highlights: [],
    comments: []
  },
  // News Article - Big Fund III
  {
    id: 'doc-009',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'China launches $47 billion semiconductor fund in biggest push yet',
    url: 'https://bloomberg.com/china-big-fund-iii-47-billion',
    publishedDate: '2026-01-17T11:00:00Z',
    publisherId: 'pub-bloomberg',
    author: 'Debby Wu',
    excerpt: 'China has unveiled the third phase of its National IC Fund with 340 billion yuan ($47 billion), the largest semiconductor investment tranche in its history.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'China semiconductor investment announcement'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'China has unveiled the third phase of its National IC Fund with 340 billion yuan ($47 billion), the largest semiconductor investment tranche in its history.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-003'],
    themeIds: ['sub-007', 'sub-008'],
    topicIds: ['topic-003'],
    personIds: ['person-008', 'person-009'],
    organizationIds: ['org-007'],
    locationIds: ['loc-006'],
    eventIds: ['event-006'],
    factionMentions: {
      'faction-001': { sentiment: 0.76,
      'faction-011': { sentiment: 0.82 }
    },
      'faction-002': { sentiment: -0.48 },
      'faction-003': { sentiment: 0.25 },
      'faction-005': { sentiment: 0.68 }
    },
    highlights: [
      {
        id: 'highlight-104',
        userId: 'user-001',
        blockIndex: 0,
        startOffset: 0,
        endOffset: 155,
        highlightedText: 'China has unveiled the third phase of its National IC Fund with 340 billion yuan ($47 billion), the largest semiconductor investment tranche in its history.',
        createdAt: '2026-01-17T13:00:00Z'
      }
    ],
    comments: [
      {
        id: 'comment-103',
        userId: 'user-001',
        blockIndex: 0,
        anchorStartOffset: 0,
        anchorEndOffset: 155,
        anchorText: 'China has unveiled the third phase of its National IC Fund with 340 billion yuan ($47 billion), the largest semiconductor investment tranche in its history.',
        content: 'This dwarfs our CHIPS Act funding. Scale of commitment is notable.',
        createdAt: '2026-01-17T13:30:00Z',
        replies: []
      }
    ]
  },
  // News Article - Caixin State Council
  {
    id: 'doc-010',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'State Council approves Big Fund III priorities: packaging, equipment, EDA',
    url: 'https://caixin.com/big-fund-iii-state-council-approval',
    publishedDate: '2026-01-18T16:00:00Z',
    publisherId: 'pub-caixin',
    author: 'Caixin Tech',
    excerpt: 'China\'s State Council has approved investment guidelines for the Big Fund III, prioritizing advanced packaging, semiconductor equipment, and EDA software development.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'China State Council meeting hall'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'China\'s State Council has approved investment guidelines for the Big Fund III, prioritizing advanced packaging, semiconductor equipment, and EDA software development.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-003'],
    themeIds: ['sub-007', 'sub-008'],
    topicIds: ['topic-003'],
    personIds: ['person-010', 'person-008'],
    organizationIds: ['org-007', 'org-008', 'org-009'],
    locationIds: ['loc-006'],
    eventIds: ['event-007'],
    factionMentions: {
      'faction-001': { sentiment: 0.73,
      'faction-011': { sentiment: 0.82 }
    },
      'faction-002': { sentiment: -0.51 },
      'faction-003': { sentiment: 0.24 },
      'faction-005': { sentiment: 0.70 }
    },
    tagIds: ['tag-001'],
    highlights: [],
    comments: []
  },
  // News Article - FT Big Fund analysis
  {
    id: 'doc-011',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Analysis: Can China\'s Big Fund III overcome export control barriers?',
    url: 'https://ft.com/china-big-fund-analysis',
    publishedDate: '2026-01-19T09:00:00Z',
    publisherId: 'pub-ft',
    author: 'Kathrin Hille',
    excerpt: 'Analysts debate whether China\'s massive new semiconductor investment fund can achieve technological breakthroughs without access to cutting-edge foreign equipment.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'China semiconductor manufacturing facility'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Analysts debate whether China\'s massive new semiconductor investment fund can achieve technological breakthroughs without access to cutting-edge foreign equipment.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-003'],
    themeIds: ['sub-009'],
    topicIds: ['topic-003'],
    personIds: [],
    organizationIds: ['org-007'],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: 0.78,
      'faction-011': { sentiment: 0.82 }
    },
      'faction-002': { sentiment: -0.46 },
      'faction-003': { sentiment: 0.27 },
      'faction-005': { sentiment: 0.66 }
    },
    tagIds: ['tag-002'],
    highlights: [],
    comments: []
  },
  // News Article - Huawei stockpile
  {
    id: 'doc-012',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Huawei stockpiles billions in chip equipment ahead of sanctions',
    url: 'https://bloomberg.com/huawei-equipment-stockpile-sanctions',
    publishedDate: '2026-01-15T12:30:00Z',
    publisherId: 'pub-bloomberg',
    author: 'Debby Wu',
    excerpt: 'Huawei has accumulated billions of dollars worth of semiconductor manufacturing equipment in warehouses across China, anticipating expanded US export restrictions.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'Huawei corporate headquarters'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Huawei has accumulated billions of dollars worth of semiconductor manufacturing equipment in warehouses across China, anticipating expanded US export restrictions.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-004'],
    themeIds: ['sub-010'],
    topicIds: ['topic-004'],
    personIds: ['person-011', 'person-012'],
    organizationIds: ['org-010'],
    locationIds: ['loc-001'],
    eventIds: ['event-008'],
    factionMentions: {
      'faction-001': { sentiment: -0.68,
      'faction-011': { sentiment: 0.75 },
      'faction-013': { sentiment: -0.68 }
    },
      'faction-002': { sentiment: 0.75 },
      'faction-003': { sentiment: -0.18 },
      'faction-006': { sentiment: -0.55 }
    },
    tagIds: ['tag-003'],
    highlights: [
      {
        id: 'highlight-105',
        userId: 'user-002',
        blockIndex: 0,
        startOffset: 0,
        endOffset: 162,
        highlightedText: 'Huawei has accumulated billions of dollars worth of semiconductor manufacturing equipment in warehouses across China, anticipating expanded US export restrictions.',
        createdAt: '2026-01-15T14:00:00Z'
      }
    ],
    comments: []
  },
  // News Article - WSJ Huawei investigation
  {
    id: 'doc-013',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'US probes whether Huawei used intermediaries to evade chip controls',
    url: 'https://wsj.com/huawei-intermediaries-investigation',
    publishedDate: '2026-01-17T14:30:00Z',
    publisherId: 'pub-wsj',
    author: 'Kate O\'Keeffe',
    excerpt: 'US Commerce Department has opened an investigation into whether Huawei circumvented export controls by acquiring equipment through third-party intermediaries.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'Commerce Department investigation files'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'US Commerce Department has opened an investigation into whether Huawei circumvented export controls by acquiring equipment through third-party intermediaries.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-004'],
    themeIds: ['sub-010', 'sub-011'],
    topicIds: ['topic-004'],
    personIds: ['person-005', 'person-011'],
    organizationIds: ['org-005', 'org-010', 'org-003', 'org-011'],
    locationIds: ['loc-004', 'loc-001'],
    eventIds: ['event-009'],
    factionMentions: {
      'faction-001': { sentiment: -0.71,
      'faction-011': { sentiment: 0.75 },
      'faction-013': { sentiment: -0.68 }
    },
      'faction-002': { sentiment: 0.73 },
      'faction-003': { sentiment: -0.21 },
      'faction-006': { sentiment: -0.53 }
    },
    tagIds: ['tag-001'],
    highlights: [],
    comments: []
  },
  // News Article - SCMP Huawei response
  {
    id: 'doc-014',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Huawei denies sanctions violations, calls reports "speculation"',
    url: 'https://scmp.com/huawei-denies-sanctions-violations',
    publishedDate: '2026-01-18T08:00:00Z',
    publisherId: 'pub-scmp',
    author: 'Iris Deng',
    excerpt: 'Huawei has issued a statement denying any violations of US export controls, dismissing reports of stockpiling as "speculation and conjecture."',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'Huawei press release statement'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Huawei has issued a statement denying any violations of US export controls, dismissing reports of stockpiling as "speculation and conjecture."', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-004'],
    themeIds: ['sub-011'],
    topicIds: ['topic-004'],
    personIds: ['person-011'],
    organizationIds: ['org-010', 'org-005', 'org-012'],
    locationIds: ['loc-001'],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: -0.66,
      'faction-011': { sentiment: 0.75 },
      'faction-013': { sentiment: -0.68 }
    },
      'faction-002': { sentiment: 0.77 },
      'faction-003': { sentiment: -0.16 },
      'faction-006': { sentiment: -0.57 }
    },
    tagIds: ['tag-002'],
    highlights: [],
    comments: []
  },
  // News Article - YMTC benchmark
  {
    id: 'doc-015',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'YMTC 232-layer NAND matches Samsung in performance tests',
    url: 'https://anandtech.com/ymtc-232-layer-nand-benchmark',
    publishedDate: '2026-01-16T11:30:00Z',
    publisherId: 'pub-anandtech',
    author: 'Ryan Smith',
    excerpt: 'Independent testing reveals YMTC\'s 232-layer 3D NAND flash memory delivers performance comparable to Samsung\'s latest offerings in key metrics.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'YMTC 3D NAND chip close-up'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Independent testing reveals YMTC\'s 232-layer 3D NAND flash memory delivers performance comparable to Samsung\'s latest offerings in key metrics.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-005'],
    themeIds: ['sub-012'],
    topicIds: ['topic-005'],
    personIds: ['person-013'],
    organizationIds: ['org-013'],
    locationIds: ['loc-007'],
    eventIds: ['event-010'],
    factionMentions: {
      'faction-001': { sentiment: -0.75,
      'faction-013': { sentiment: -0.68 }
    },
      'faction-002': { sentiment: 0.71 },
      'faction-003': { sentiment: -0.22 },
      'faction-006': { sentiment: -0.48 }
    },
    tagIds: ['tag-003'],
    highlights: [],
    comments: []
  },
  // News Article - TechInsights YMTC
  {
    id: 'doc-016',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'TechInsights finds YMTC chips in consumer devices despite blacklist',
    url: 'https://techinsights.com/ymtc-chips-consumer-devices',
    publishedDate: '2026-01-18T09:30:00Z',
    publisherId: 'pub-semiengi',
    author: 'Dan Hutcheson',
    excerpt: 'Research firm TechInsights has identified YMTC memory chips in consumer electronics from multiple brands, raising questions about Entity List enforcement.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'TechInsights chip analysis lab'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Research firm TechInsights has identified YMTC memory chips in consumer electronics from multiple brands, raising questions about Entity List enforcement.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-005'],
    themeIds: ['sub-012', 'sub-013'],
    topicIds: ['topic-005'],
    personIds: ['person-013', 'person-014'],
    organizationIds: ['org-013', 'org-014', 'org-015'],
    locationIds: ['loc-007', 'loc-004'],
    eventIds: ['event-010', 'event-011'],
    factionMentions: {
      'faction-001': { sentiment: -0.77,
      'faction-013': { sentiment: -0.68 }
    },
      'faction-002': { sentiment: 0.69 },
      'faction-003': { sentiment: -0.24 },
      'faction-006': { sentiment: -0.51 }
    },
    highlights: [
      {
        id: 'highlight-106',
        userId: 'user-003',
        blockIndex: 0,
        startOffset: 0,
        endOffset: 166,
        highlightedText: 'Research firm TechInsights has identified YMTC memory chips in consumer electronics from multiple brands, raising questions about Entity List enforcement.',
        createdAt: '2026-01-18T11:00:00Z'
      }
    ],
    comments: [
      {
        id: 'comment-104',
        userId: 'user-003',
        blockIndex: 0,
        anchorStartOffset: 0,
        anchorEndOffset: 166,
        anchorText: 'Research firm TechInsights has identified YMTC memory chips in consumer electronics from multiple brands, raising questions about Entity List enforcement.',
        content: 'This highlights enforcement gaps. YMTC chips are reaching global markets despite restrictions.',
        createdAt: '2026-01-18T11:30:00Z',
        replies: []
      }
    ]
  },
  // News Article - YMTC supply chain
  {
    id: 'doc-017',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'How YMTC chips are reaching global markets despite US sanctions',
    url: 'https://bloomberg.com/ymtc-global-supply-chain-analysis',
    publishedDate: '2026-01-19T13:00:00Z',
    publisherId: 'pub-bloomberg',
    author: 'Vlad Savov',
    excerpt: 'Analysis reveals YMTC memory chips are entering global supply chains through complex networks that make end-to-end tracking difficult for regulators.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'Global semiconductor supply chain map'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Analysis reveals YMTC memory chips are entering global supply chains through complex networks that make end-to-end tracking difficult for regulators.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-005'],
    themeIds: ['sub-013'],
    topicIds: ['topic-005'],
    personIds: ['person-014'],
    organizationIds: ['org-013', 'org-015', 'org-024'],
    locationIds: ['loc-004'],
    eventIds: ['event-011'],
    factionMentions: {
      'faction-001': { sentiment: -0.73,
      'faction-013': { sentiment: -0.68 }
    },
      'faction-002': { sentiment: 0.74 },
      'faction-003': { sentiment: -0.19 },
      'faction-006': { sentiment: -0.46 }
    },
    highlights: [],
    comments: []
  },
  // News Article - Xinhua Empyrean
  {
    id: 'doc-018',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Empyrean announces EDA tools supporting 14nm chip design',
    url: 'https://xinhua.com/empyrean-eda-14nm-announcement',
    publishedDate: '2026-01-19T10:30:00Z',
    publisherId: 'pub-xinhua',
    author: 'Xinhua Staff',
    excerpt: 'Empyrean Technology has announced its EDA software suite now fully supports 14nm chip design, marking significant progress in Chinese design tool development.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'Empyrean Technology EDA software interface'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Empyrean Technology has announced its EDA software suite now fully supports 14nm chip design, marking significant progress in Chinese design tool development.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-006'],
    themeIds: ['sub-014'],
    topicIds: ['topic-006'],
    personIds: ['person-015'],
    organizationIds: ['org-016', 'org-018', 'org-019'],
    locationIds: ['loc-002'],
    eventIds: ['event-012'],
    factionMentions: {
      'faction-001': { sentiment: 0.78,
      'faction-008': { sentiment: 0.15 },
      'faction-011': { sentiment: 0.75 }
    },
      'faction-002': { sentiment: -0.68 },
      'faction-005': { sentiment: 0.62 }
    },
    highlights: [],
    comments: []
  },
  // News Article - Huada Jiutian
  {
    id: 'doc-019',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Huada Jiutian targets 7nm EDA capability within two years',
    url: 'https://caixin.com/huada-jiutian-7nm-roadmap',
    publishedDate: '2026-01-20T08:00:00Z',
    publisherId: 'pub-caixin',
    author: 'Caixin Tech',
    excerpt: 'Huada Jiutian has outlined an aggressive roadmap to develop EDA tools capable of supporting 7nm chip design within the next two years.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'Huada Jiutian corporate campus'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Huada Jiutian has outlined an aggressive roadmap to develop EDA tools capable of supporting 7nm chip design within the next two years.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-006'],
    themeIds: ['sub-014', 'sub-015'],
    topicIds: ['topic-006'],
    personIds: ['person-016'],
    organizationIds: ['org-017'],
    locationIds: ['loc-008'],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: 0.81,
      'faction-008': { sentiment: 0.15 },
      'faction-011': { sentiment: 0.75 }
    },
      'faction-002': { sentiment: -0.66 },
      'faction-005': { sentiment: 0.59 }
    },
    highlights: [],
    comments: []
  },
  // News Article - TSMC delays
  {
    id: 'doc-020',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'TSMC Arizona fab delays push production start to late 2025',
    url: 'https://reuters.com/tsmc-arizona-delay-2025',
    publishedDate: '2026-01-14T08:30:00Z',
    publisherId: 'pub-reuters',
    author: 'Yimou Lee',
    excerpt: 'TSMC has confirmed its Arizona fabrication facility will not begin production until late 2025, a significant delay from the original 2024 target.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'TSMC Arizona fab construction site'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'TSMC has confirmed its Arizona fabrication facility will not begin production until late 2025, a significant delay from the original 2024 target.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-007'],
    themeIds: ['sub-016'],
    topicIds: ['topic-007'],
    personIds: ['person-017', 'person-018'],
    organizationIds: ['org-020'],
    locationIds: ['loc-009'],
    eventIds: ['event-013'],
    factionMentions: {
      'faction-001': { sentiment: -0.45,
      'faction-007': { sentiment: -0.52 },
      'faction-009': { sentiment: 0.22 }
    },
      'faction-005': { sentiment: 0.58 },
      'faction-006': { sentiment: -0.38 }
    },
    highlights: [
      {
        id: 'highlight-107',
        userId: 'user-004',
        blockIndex: 0,
        startOffset: 0,
        endOffset: 147,
        highlightedText: 'TSMC has confirmed its Arizona fabrication facility will not begin production until late 2025, a significant delay from the original 2024 target.',
        createdAt: '2026-01-14T10:00:00Z'
      }
    ],
    comments: []
  },
  // News Article - Nikkei TSMC culture
  {
    id: 'doc-021',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'TSMC CEO addresses Arizona challenges: "Different work culture"',
    url: 'https://nikkei.com/tsmc-arizona-work-culture',
    publishedDate: '2026-01-16T07:00:00Z',
    publisherId: 'pub-nikkei',
    author: 'Cheng Ting-Fang',
    excerpt: 'TSMC CEO C.C. Wei acknowledged challenges at the Arizona fab, citing differences in work culture and the need to adapt management approaches.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'TSMC CEO C.C. Wei at investor conference'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'TSMC CEO C.C. Wei acknowledged challenges at the Arizona fab, citing differences in work culture and the need to adapt management approaches.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-007'],
    themeIds: ['sub-016', 'sub-017'],
    topicIds: ['topic-007'],
    personIds: ['person-017'],
    organizationIds: ['org-020'],
    locationIds: ['loc-009', 'loc-010'],
    eventIds: ['event-013'],
    factionMentions: {
      'faction-001': { sentiment: -0.43,
      'faction-007': { sentiment: -0.52 },
      'faction-009': { sentiment: 0.22 }
    },
      'faction-005': { sentiment: 0.61 },
      'faction-006': { sentiment: -0.36 }
    },
    highlights: [],
    comments: []
  },
  // News Article - Arizona unions
  {
    id: 'doc-022',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Arizona unions file grievances against TSMC management practices',
    url: 'https://bloomberg.com/tsmc-arizona-union-grievances',
    publishedDate: '2026-01-17T11:00:00Z',
    publisherId: 'pub-bloomberg',
    author: 'Ian King',
    excerpt: 'The Arizona Building and Construction Trades Council has filed formal grievances against TSMC, citing concerns about management practices and worker treatment.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'Arizona construction workers at TSMC site'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'The Arizona Building and Construction Trades Council has filed formal grievances against TSMC, citing concerns about management practices and worker treatment.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-007'],
    themeIds: ['sub-017'],
    topicIds: ['topic-007'],
    personIds: ['person-019'],
    organizationIds: ['org-020', 'org-021'],
    locationIds: ['loc-009'],
    eventIds: ['event-014'],
    factionMentions: {
      'faction-001': { sentiment: -0.47,
      'faction-007': { sentiment: -0.52 },
      'faction-009': { sentiment: 0.22 }
    },
      'faction-005': { sentiment: 0.56 },
      'faction-006': { sentiment: -0.41 }
    },
    highlights: [],
    comments: []
  },
  // X/Twitter - Tech analyst thread on SMIC
  {
    id: 'doc-023',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    title: 'X thread: Tech analyst breaks down SMIC 5nm achievement',
    excerpt: 'Thread analyzing SMIC\'s 5nm breakthrough, noting impressive engineering but questioning economic viability vs TSMC\'s EUV process.',
    url: 'https://x.com/chipcuriosity/status/1881234567890123',
    publishedDate: '2026-01-16T14:22:00Z',
    publisherId: 'pub-x',
    author: {
      username: '@chipcuriosity',
      displayName: 'Chip Curiosity',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Thread: Let\'s talk about SMIC\'s 5nm "breakthrough" 🧵\n\n1/ Yes, they achieved 5nm using DUV multi-patterning. But context matters.\n\n2/ Cost per wafer is ~3x higher than TSMC\'s EUV process\n\n3/ Yields appear to be 20-30%, vs 80%+ for TSMC\n\n4/ This is impressive engineering, but it\'s not economically competitive for high-volume production\n\n5/ Export controls haven\'t stopped progress - they\'ve just made it expensive. Is that the goal?', portionMark: { classification: 'U', handling: '' } }
    ],
    metrics: {
      comments: 847,
      likes: 5234,
      shares: 1892,
      platform: 'x'
    },
    narrativeIds: ['narr-001'],
    themeIds: ['sub-001', 'sub-003'],
    topicIds: ['topic-001'],
    personIds: [],
    organizationIds: ['org-001'],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: 0.73,
      'faction-011': { sentiment: 0.85 }
    },
      'faction-002': { sentiment: -0.61 },
      'faction-003': { sentiment: 0.14 }
    },
    highlights: [],
    comments: []
  },
  // LinkedIn - Industry executive post
  {
    id: 'doc-024',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    title: 'LinkedIn post: Industry executive reflects on SMIC achievement',
    excerpt: 'Semiconductor executive shares balanced perspective on SMIC\'s 5nm announcement, recognizing technical achievement while questioning economics and policy effectiveness.',
    url: 'https://linkedin.com/posts/semiconductorexec_smic-china-semiconductor-activity',
    publishedDate: '2026-01-17T09:15:00Z',
    publisherId: 'pub-linkedin',
    author: {
      username: 'michael-chen-semiconductor',
      displayName: 'Michael Chen',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: '📊 Reflections on SMIC\'s 5nm Achievement\n\nAs someone who has spent 25 years in semiconductor manufacturing, I want to share some thoughts on what SMIC\'s announcement really means for our industry.\n\nThe technical achievement is real. Multi-patterning at this scale requires extraordinary process control and engineering discipline. Their teams deserve recognition.\n\nHowever, we should be clear-eyed about the economics:\n• Cost disadvantage: 2-3x vs EUV-based production\n• Yield challenges: Significantly lower than industry leaders\n• Scalability questions: Multi-patterning complexity increases exponentially at smaller nodes\n\nThe bigger question for policymakers: Are export controls achieving their stated goals, or are they accelerating China\'s push for complete self-sufficiency?\n\nI\'d love to hear perspectives from others in the industry. What are you seeing in your supply chains?\n\n#Semiconductors #Manufacturing #China #Technology #ExportControls', portionMark: { classification: 'U', handling: '' } }
    ],
    metrics: {
      comments: 234,
      likes: 1847,
      shares: 312,
      platform: 'linkedin'
    },
    narrativeIds: ['narr-001'],
    themeIds: ['sub-003'],
    topicIds: ['topic-001'],
    personIds: [],
    organizationIds: ['org-001'],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: 0.76,
      'faction-011': { sentiment: 0.85 }
    },
      'faction-002': { sentiment: -0.57 },
      'faction-003': { sentiment: 0.17 }
    },
    highlights: [],
    comments: []
  },
  // Weibo - Chinese tech celebration post
  {
    id: 'doc-025',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    title: 'Weibo post: Chinese tech blogger celebrates SMIC 5nm success',
    excerpt: 'Viral Weibo post celebrating SMIC\'s 5nm achievement as proof of Chinese technological self-reliance in face of Western restrictions.',
    url: 'https://weibo.com/u/7234567890/post/12345678',
    publishedDate: '2026-01-15T19:45:00Z',
    publisherId: 'pub-weibo',
    author: {
      username: '科技前沿观察',
      displayName: 'Tech Frontier Observer',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: '🎉 重磅消息！中芯国际5纳米芯片量产成功！\n\n没有EUV光刻机，我们照样能行！这是中国半导体工程师的智慧和毅力的结晶。\n\n西方封锁只会让我们更强大。自主创新才是出路！\n\n华为Mate 70搭载的芯片就是中芯国际生产的。这才是真正的中国力量！💪🇨🇳\n\n#中芯国际 #半导体 #自主创新 #华为 #中国制造', portionMark: { classification: 'U', handling: '' } }
    ],
    metrics: {
      comments: 28947,
      likes: 184521,
      shares: 42156,
      platform: 'weibo'
    },
    narrativeIds: ['narr-001'],
    themeIds: ['sub-002'],
    topicIds: ['topic-001'],
    personIds: [],
    organizationIds: ['org-001', 'org-010'],
    locationIds: ['loc-001'],
    eventIds: ['event-002'],
    factionMentions: {
      'faction-001': { sentiment: 0.78,
      'faction-011': { sentiment: 0.85 }
    },
      'faction-002': { sentiment: -0.56 },
      'faction-003': { sentiment: 0.13 }
    },
    highlights: [],
    comments: []
  },
  // Reddit - Export controls discussion
  {
    id: 'doc-026',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    title: 'Reddit discussion: Are US chip export controls backfiring?',
    excerpt: 'Reddit thread questioning effectiveness of US export controls, citing SMIC, YMTC, and massive Chinese investment as potential evidence of unintended acceleration.',
    url: 'https://reddit.com/r/hardware/comments/xyz789/export_controls_backfiring',
    publishedDate: '2026-01-18T22:30:00Z',
    publisherId: 'pub-reddit',
    author: {
      username: 'u/silicon_skeptic',
      displayName: 'silicon_skeptic',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: '**Are US chip export controls backfiring?**\n\nBetween SMIC\'s 5nm, YMTC\'s 232-layer NAND, and China\'s $47B new investment fund, I\'m starting to wonder if the export controls are doing what they\'re supposed to.\n\nBefore the restrictions:\n- China was heavily dependent on US/Western tech\n- Companies like Huawei bought most components from US suppliers\n- Little incentive for massive domestic investment\n\nAfter the restrictions:\n- $100B+ committed to semiconductor self-sufficiency\n- SMIC achieving nodes previously thought impossible without EUV\n- Huawei reportedly stockpiled billions in equipment\n- YMTC chips appearing in devices globally despite Entity List\n\nThe goal was to slow China\'s progress. Did we instead light a fire under them?\n\nCurious what others think. Not trying to make a political statement, just looking at the data.', portionMark: { classification: 'U', handling: '' } }
    ],
    metrics: {
      comments: 1847,
      likes: 4521,
      shares: 234,
      platform: 'reddit'
    },
    narrativeIds: ['narr-001', 'narr-002', 'narr-003'],
    themeIds: ['sub-003'],
    topicIds: ['topic-002'],
    personIds: [],
    organizationIds: ['org-001', 'org-005'],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: 0.24,
      'faction-011': { sentiment: 0.85 },
      'faction-007': { sentiment: -0.52 },
      'faction-013': { sentiment: -0.68 }
    },
      'faction-002': { sentiment: -0.12 },
      'faction-003': { sentiment: 0.21 },
      'faction-004': { sentiment: -0.65 },
      'faction-005': { sentiment: 0.67 },
      'faction-006': { sentiment: -0.44 }
    },
    highlights: [],
    comments: []
  },
  // X/Twitter - Policy hawk perspective
  {
    id: 'doc-027',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    title: 'X post: National security analyst defends export controls',
    excerpt: 'Policy hawk argues SMIC\'s 5nm achievement doesn\'t undermine export controls, citing cost and yield disadvantages that make Chinese chips uncompetitive.',
    url: 'https://x.com/nationalsecuritywatch/status/1881345678901234',
    publishedDate: '2026-01-19T11:42:00Z',
    publisherId: 'pub-x',
    author: {
      username: '@nationalsecuritywatch',
      displayName: 'National Security Watch',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Don\'t be fooled by headlines about SMIC\'s "5nm breakthrough."\n\nYes, they made a chip. But:\n\n❌ Costs 3x more to produce\n❌ Yields far below competitive levels\n❌ Can\'t scale for high-volume manufacturing\n❌ Years behind on next-gen 3nm/2nm\n\nExport controls are working. The goal was never to completely stop progress—it was to maintain our lead.\n\nChina is burning through resources on brute-force engineering that won\'t be economically viable.\n\nStay the course.', portionMark: { classification: 'U', handling: '' } }
    ],
    metrics: {
      comments: 523,
      likes: 2847,
      shares: 892,
      platform: 'x'
    },
    narrativeIds: ['narr-001', 'narr-002'],
    themeIds: ['sub-003'],
    topicIds: ['topic-002'],
    personIds: [],
    organizationIds: ['org-005'],
    locationIds: ['loc-004'],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: -0.02,
      'faction-011': { sentiment: 0.85 },
      'faction-007': { sentiment: -0.52 },
      'faction-013': { sentiment: -0.68 }
    },
      'faction-002': { sentiment: 0.06 },
      'faction-003': { sentiment: 0.14 },
      'faction-004': { sentiment: -0.68 },
      'faction-006': { sentiment: -0.46 }
    },
    highlights: [],
    comments: []
  },
  // LinkedIn - ASML impact discussion
  {
    id: 'doc-028',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    title: 'LinkedIn post: ASML\'s $2.5B China revenue hit analyzed',
    excerpt: 'Financial analyst breaks down ASML\'s Q4 guidance update and the impact of expanded China export restrictions on semiconductor equipment market.',
    url: 'https://linkedin.com/posts/semiconductor-analyst_asml-china-exportcontrols-activity',
    publishedDate: '2026-01-16T08:30:00Z',
    publisherId: 'pub-linkedin',
    author: {
      username: 'jennifer-williams-analyst',
      displayName: 'Jennifer Williams, CFA',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: '💰 ASML\'s $2.5B China Problem\n\nASML\'s Q4 guidance update is a wake-up call for investors in the semiconductor equipment space.\n\nKey takeaways:\n\n📉 $2.5B annual revenue hit from expanded China restrictions\n📊 That\'s roughly 10% of total revenue\n📈 Stock down 8% on the news\n\nThe bigger picture:\n\nChina was ASML\'s fastest-growing market. Now it\'s effectively closed.\n\nBut here\'s what\'s not in the headlines: ASML\'s backlog remains at record levels. The question is whether demand from other regions can offset the China loss.\n\nMy take: Short-term pain, but ASML\'s monopoly on EUV gives them pricing power. Watching closely.\n\n#ASML #Semiconductors #InvestmentAnalysis #ExportControls', portionMark: { classification: 'U', handling: '' } }
    ],
    metrics: {
      comments: 156,
      likes: 923,
      shares: 187,
      platform: 'linkedin'
    },
    narrativeIds: ['narr-002'],
    themeIds: ['sub-005'],
    topicIds: ['topic-002'],
    personIds: ['person-004'],
    organizationIds: ['org-002'],
    locationIds: ['loc-003'],
    eventIds: ['event-004'],
    factionMentions: {
      'faction-001': { sentiment: -0.83,
      'faction-007': { sentiment: -0.52 },
      'faction-013': { sentiment: -0.68 }
    },
      'faction-002': { sentiment: 0.72 },
      'faction-004': { sentiment: -0.69 },
      'faction-006': { sentiment: -0.46 }
    },
    highlights: [],
    comments: []
  },
  // X/Twitter - Huawei Mate 70 teardown
  {
    id: 'doc-029',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    title: 'X post: Huawei Mate 70 teardown confirms SMIC 5nm chip',
    excerpt: 'Tech analyst shares teardown photos confirming Kirin 9100 chip manufactured by SMIC using 5nm process inside Huawei\'s latest flagship.',
    url: 'https://x.com/techanalyst_cn/status/1881456789012345',
    publishedDate: '2026-01-18T16:20:00Z',
    publisherId: 'pub-x',
    author: {
      username: '@techanalyst_cn',
      displayName: 'CN Tech Analysis',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Just finished teardown of Huawei Mate 70. Confirmed: Kirin 9100 chip inside.\n\nDie marking shows SMIC 5nm process. This is real.\n\nKey observations:\n• Performance ~15% below A18 Bionic\n• Power efficiency noticeably worse\n• But it WORKS. And it\'s 100% China-made.\n\nPhotos and full analysis thread below 👇\n\n📸 [image]\n📸 [image]\n📸 [image]', portionMark: { classification: 'U', handling: '' } }
    ],
    metrics: {
      comments: 1234,
      likes: 8921,
      shares: 3456,
      platform: 'x'
    },
    narrativeIds: ['narr-001'],
    themeIds: ['sub-002'],
    topicIds: ['topic-001'],
    personIds: [],
    organizationIds: ['org-001', 'org-010'],
    locationIds: [],
    eventIds: ['event-002'],
    factionMentions: {
      'faction-001': { sentiment: 0.75,
      'faction-011': { sentiment: 0.85 }
    },
      'faction-002': { sentiment: -0.63 },
      'faction-003': { sentiment: 0.16 }
    },
    highlights: [],
    comments: []
  },
  // Reddit - TSMC Arizona worker perspective
  {
    id: 'doc-030',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    title: 'Reddit AMA: TSMC Arizona worker shares insider perspective',
    excerpt: 'TSMC Arizona employee offers candid view of fab construction challenges, cultural clashes, and morale in Reddit AMA.',
    url: 'https://reddit.com/r/semiconductors/comments/abc123/tsmc_arizona_worker_ama',
    publishedDate: '2026-01-17T19:00:00Z',
    publisherId: 'pub-reddit',
    author: {
      username: 'u/az_chipworker',
      displayName: 'az_chipworker',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: '**I work at TSMC Arizona. AMA about what\'s really happening**\n\nSeen a lot of misinformation about the Arizona fab. Thought I\'d offer some perspective as someone actually on the ground.\n\nBackground: Been in semiconductor manufacturing for 12 years. Joined TSMC Arizona 18 months ago.\n\nSome quick context:\n\n1. Yes, there are culture clashes. Taiwan teams work differently than American teams. That\'s real.\n\n2. The delays are mostly about equipment installation and qualification, not "lazy American workers" like some reports suggest.\n\n3. Morale is... complicated. Good pay, interesting work, but lots of frustration with management style.\n\n4. We\'re all learning. First fab of this scale ever built in the US. Growing pains are expected.\n\nHappy to answer what I can without violating my NDA.', portionMark: { classification: 'U', handling: '' } }
    ],
    metrics: {
      comments: 2847,
      likes: 5621,
      shares: 456,
      platform: 'reddit'
    },
    narrativeIds: ['narr-007'],
    themeIds: ['sub-016', 'sub-017'],
    topicIds: ['topic-007'],
    personIds: [],
    organizationIds: ['org-020'],
    locationIds: ['loc-009'],
    eventIds: ['event-013'],
    factionMentions: {
      'faction-001': { sentiment: -0.44,
      'faction-007': { sentiment: -0.52 },
      'faction-009': { sentiment: 0.22 }
    },
      'faction-005': { sentiment: 0.59 },
      'faction-006': { sentiment: -0.39 }
    },
    highlights: [],
    comments: []
  },

  // ============================================
  // INTERNAL DOCUMENTS
  // ============================================

  // Internal Document - SMIC Technical Assessment (SECRET)
  {
    id: 'doc-031',
    documentType: 'internal_report',
    repositoryId: 'repo-edl',
    classification: 'S',
    url: null,
    publishedDate: '2026-01-16T08:00:00Z',
    publisherId: 'pub-dept-intel',
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
    themeIds: ['sub-001', 'sub-002', 'sub-003'],
    topicIds: ['topic-001'],
    personIds: ['person-001', 'person-002', 'person-003'],
    organizationIds: ['org-001', 'org-002', 'org-010'],
    locationIds: ['loc-001', 'loc-002'],
    eventIds: ['event-001', 'event-002'],
    factionMentions: {
      'faction-001': { sentiment: 0.08,
      'faction-011': { sentiment: 0.85 }
    },
      'faction-002': { sentiment: -0.12 },
      'faction-003': { sentiment: 0.05 }
    },
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
    documentType: 'internal_report',
    repositoryId: 'repo-edl',
    classification: 'S',
    url: null,
    publishedDate: '2026-01-18T14:00:00Z',
    publisherId: 'pub-dept-intel',
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
    themeIds: ['sub-004', 'sub-005', 'sub-006', 'sub-010', 'sub-011'],
    topicIds: ['topic-002', 'topic-004'],
    personIds: ['person-004', 'person-005', 'person-006', 'person-007', 'person-011', 'person-012'],
    organizationIds: ['org-002', 'org-004', 'org-005', 'org-006', 'org-010'],
    locationIds: ['loc-003', 'loc-004', 'loc-005'],
    eventIds: ['event-003', 'event-004', 'event-005', 'event-008', 'event-009'],
    factionMentions: {
      'faction-001': { sentiment: -0.14,
      'faction-007': { sentiment: -0.52 },
      'faction-013': { sentiment: -0.68 },
      'faction-011': { sentiment: 0.75 }
    },
      'faction-002': { sentiment: 0.11 },
      'faction-004': { sentiment: -0.08 },
      'faction-006': { sentiment: -0.06 }
    },
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
    documentType: 'internal_report',
    repositoryId: 'repo-edl',
    classification: 'U',
    url: null,
    publishedDate: '2026-01-19T10:00:00Z',
    publisherId: 'pub-dept-econ',
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
    themeIds: ['sub-007', 'sub-008', 'sub-009'],
    topicIds: ['topic-003', 'topic-006'],
    personIds: ['person-008', 'person-009', 'person-010'],
    organizationIds: ['org-007', 'org-008', 'org-009', 'org-016', 'org-017', 'org-022'],
    locationIds: ['loc-002', 'loc-006'],
    eventIds: ['event-006', 'event-007'],
    factionMentions: {
      'faction-001': { sentiment: 0.12,
      'faction-011': { sentiment: 0.82 }
    },
      'faction-002': { sentiment: -0.09 },
      'faction-003': { sentiment: 0.06 },
      'faction-005': { sentiment: 0.14 }
    },
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
    documentType: 'internal_report',
    repositoryId: 'repo-edl',
    classification: 'S',
    url: null,
    publishedDate: '2026-01-19T16:00:00Z',
    publisherId: 'pub-dept-intel',
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
    themeIds: ['sub-012', 'sub-013'],
    topicIds: ['topic-005'],
    personIds: ['person-013', 'person-014'],
    organizationIds: ['org-013', 'org-014', 'org-015', 'org-005'],
    locationIds: ['loc-007', 'loc-004'],
    eventIds: ['event-010', 'event-011'],
    factionMentions: {
      'faction-001': { sentiment: -0.11,
      'faction-013': { sentiment: -0.68 }
    },
      'faction-002': { sentiment: 0.08 },
      'faction-003': { sentiment: -0.05 },
      'faction-006': { sentiment: -0.13 }
    },
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
    documentType: 'internal_report',
    repositoryId: 'repo-edl',
    classification: 'U',
    url: null,
    publishedDate: '2026-01-17T15:00:00Z',
    publisherId: 'pub-dept-ops',
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
    themeIds: ['sub-016', 'sub-017'],
    topicIds: ['topic-007'],
    personIds: ['person-017', 'person-018', 'person-019'],
    organizationIds: ['org-020', 'org-021'],
    locationIds: ['loc-009', 'loc-010'],
    eventIds: ['event-013', 'event-014'],
    factionMentions: {
      'faction-001': { sentiment: -0.07,
      'faction-007': { sentiment: -0.52 },
      'faction-009': { sentiment: 0.22 }
    },
      'faction-005': { sentiment: 0.10 },
      'faction-006': { sentiment: -0.04 }
    },
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
  },

  // Historical documents: Intel Struggles & Rare Earth Controls (June 2025 - January 2026)
  {
    id: 'doc-036',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.bloomberg.com/news/articles/intel-announces-15000-layoffs',
    publishedDate: '2025-06-20T09:00:00Z',
    publisherId: 'pub-bloomberg',
    title: 'Intel Announces 15,000 Layoffs in Major Restructuring',
    author: 'Ian King',
    contentBlocks: [
      { type: 'paragraph', content: 'Intel Corporation announced Monday it will cut 15,000 jobs as part of a major restructuring effort to stem losses in its foundry business.' },
      { type: 'paragraph', content: 'CEO Pat Gelsinger called the cuts "painful but necessary" as the company struggles to compete with TSMC and Samsung in the contract chip manufacturing market.' }
    ],
    excerpt: 'Intel announces 15,000 layoffs amid struggles to compete in foundry business.',
    narrativeIds: ['narr-008'],
    themeIds: ['sub-018'],
    topicIds: ['topic-008'],
    personIds: ['person-020'],
    organizationIds: ['org-027'],
    locationIds: ['loc-012'],
    eventIds: ['event-015'],
    factionMentions: {
      'faction-002': { sentiment: -0.55,
      'faction-008': { sentiment: 0.15 },
      'faction-009': { sentiment: 0.22 }
    },
      'faction-005': { sentiment: -0.72 },
      'faction-006': { sentiment: 0.35 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-037',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.semiengineering.com/intel-foundry-survival',
    publishedDate: '2025-06-25T10:00:00Z',
    publisherId: 'pub-semiengi',
    title: 'Can Intel Survive the Foundry Wars?',
    author: 'Mark Lapedus',
    contentBlocks: [
      { type: 'paragraph', content: 'Intel\'s foundry ambitions face their toughest test yet. With TSMC commanding over 50% of the global foundry market and Samsung investing heavily, Intel must execute flawlessly to remain relevant.' },
      { type: 'paragraph', content: 'Industry analysts are divided on whether Intel can close the technology gap.' }
    ],
    excerpt: 'Analysis: Intel\'s foundry business faces existential challenges.',
    narrativeIds: ['narr-008'],
    themeIds: ['sub-018', 'sub-019'],
    topicIds: ['topic-008'],
    personIds: ['person-020'],
    organizationIds: ['org-027'],
    locationIds: ['loc-012'],
    eventIds: ['event-015'],
    factionMentions: {
      'faction-003': { sentiment: -0.42,
      'faction-008': { sentiment: 0.15 },
      'faction-009': { sentiment: 0.22 }
    },
      'faction-005': { sentiment: -0.65 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-038',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.reuters.com/technology/samsung-17-billion-chip-investment',
    publishedDate: '2025-07-05T08:00:00Z',
    publisherId: 'pub-reuters',
    title: 'Samsung Pledges $17 Billion Chip Investment in Korea',
    author: 'Heekyong Yang',
    contentBlocks: [
      { type: 'paragraph', content: 'Samsung Electronics announced a $17 billion investment in new semiconductor facilities in South Korea, backed by government subsidies.' },
      { type: 'paragraph', content: 'The investment will expand production of advanced memory chips and establish new logic chip manufacturing lines.' }
    ],
    excerpt: 'Samsung announces $17 billion chip investment with Korean government support.',
    narrativeIds: ['narr-009'],
    themeIds: ['sub-020'],
    personIds: ['person-022'],
    organizationIds: ['org-014', 'org-032'],
    locationIds: ['loc-011'],
    eventIds: ['event-016'],
    factionMentions: {
      'faction-006': { sentiment: 0.72,
      'faction-010': { sentiment: -0.35 },
      'faction-012': { sentiment: -0.42 },
      'faction-016': { sentiment: 0.32 }
    }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-039',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.wsj.com/business/us-concerns-korean-semiconductor-subsidies',
    publishedDate: '2025-07-25T14:00:00Z',
    publisherId: 'pub-wsj',
    title: 'US Raises Concerns Over Korean Semiconductor Subsidies',
    author: 'Jiyoung Sohn',
    contentBlocks: [
      { type: 'paragraph', content: 'The United States has raised concerns at the World Trade Organization over South Korea\'s semiconductor subsidies, arguing they distort global competition.' },
      { type: 'paragraph', content: 'The move strains the technology alliance between the countries at a sensitive time for chip supply chain efforts.' }
    ],
    excerpt: 'US objects to Korean chip subsidies at WTO, straining alliance.',
    narrativeIds: ['narr-009'],
    themeIds: ['sub-020', 'sub-021'],
    personIds: [],
    organizationIds: ['org-005', 'org-032'],
    locationIds: ['loc-004', 'loc-011'],
    eventIds: ['event-017'],
    factionMentions: {
      'faction-002': { sentiment: 0.58,
      'faction-010': { sentiment: -0.35 },
      'faction-012': { sentiment: -0.42 },
      'faction-016': { sentiment: 0.32 }
    },
      'faction-006': { sentiment: -0.45 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-040',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.scmp.com/tech/china-rare-earth-export-quotas',
    publishedDate: '2025-08-10T11:00:00Z',
    publisherId: 'pub-scmp',
    title: 'China Imposes Rare Earth Export Quotas in Escalation of Tech Tensions',
    author: 'Che Pan',
    contentBlocks: [
      { type: 'paragraph', content: 'China announced new export quotas on rare earth materials essential for semiconductor manufacturing, in what analysts see as retaliation for Western chip export controls.' },
      { type: 'paragraph', content: 'The Ministry of Commerce cited resource conservation and environmental protection as reasons for the restrictions.' }
    ],
    excerpt: 'China imposes rare earth export quotas amid escalating tech tensions.',
    narrativeIds: ['narr-010'],
    themeIds: ['sub-022'],
    topicIds: ['topic-009'],
    personIds: ['person-025'],
    organizationIds: ['org-030'],
    locationIds: ['loc-006'],
    eventIds: ['event-018'],
    factionMentions: {
      'faction-001': { sentiment: 0.75,
      'faction-015': { sentiment: -0.48 }
    },
      'faction-002': { sentiment: -0.78 },
      'faction-004': { sentiment: 0.82 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-041',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.bloomberg.com/chip-industry-rare-earth-alarm',
    publishedDate: '2025-08-25T09:00:00Z',
    publisherId: 'pub-bloomberg',
    title: 'Chip Industry Sounds Alarm on Rare Earth Restrictions',
    author: 'Debby Wu',
    contentBlocks: [
      { type: 'paragraph', content: 'The semiconductor industry is warning that China\'s new rare earth export controls could disrupt production of advanced chips.' },
      { type: 'paragraph', content: 'Industry executives are calling for emergency stockpiling and development of alternative sources.' }
    ],
    excerpt: 'Chip industry warns of disruptions from China rare earth restrictions.',
    narrativeIds: ['narr-010'],
    themeIds: ['sub-022', 'sub-023'],
    topicIds: ['topic-009'],
    personIds: ['person-024'],
    organizationIds: ['org-005', 'org-006'],
    locationIds: ['loc-004'],
    eventIds: ['event-019'],
    factionMentions: {
      'faction-002': { sentiment: -0.65,
      'faction-015': { sentiment: -0.48 }
    },
      'faction-005': { sentiment: -0.58 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-042',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.eetimes.com/china-rare-earth-supply-chain-analysis',
    publishedDate: '2025-08-30T10:00:00Z',
    publisherId: 'pub-eetimes',
    title: 'Analysis: How China\'s Rare Earth Controls Reshape Chip Supply Chains',
    author: 'Ann Steffora Mutschler',
    contentBlocks: [
      { type: 'paragraph', content: 'China\'s rare earth export controls are forcing semiconductor companies to rethink their supply chains. Materials critical for chip production have limited alternative sources.' },
      { type: 'paragraph', content: 'Companies are exploring recycling programs and investments in non-Chinese mining operations.' }
    ],
    excerpt: 'Analysis of how China\'s rare earth controls are reshaping chip supply chains.',
    narrativeIds: ['narr-010'],
    themeIds: ['sub-023'],
    topicIds: ['topic-009'],
    personIds: [],
    organizationIds: [],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-003': { sentiment: -0.35,
      'faction-015': { sentiment: -0.48 }
    }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-043',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.reuters.com/technology/intel-quarterly-loss',
    publishedDate: '2025-09-15T17:00:00Z',
    publisherId: 'pub-reuters',
    title: 'Intel Reports $1.6B Quarterly Loss, Stock Plunges',
    author: 'Jane Lee',
    contentBlocks: [
      { type: 'paragraph', content: 'Intel reported a $1.6 billion quarterly loss as its foundry business continues to struggle, sending shares down over 15% in after-hours trading.' },
      { type: 'paragraph', content: 'CEO Pat Gelsinger defended the company\'s turnaround strategy but acknowledged the path to profitability will take longer than expected.' }
    ],
    excerpt: 'Intel reports $1.6B quarterly loss, stock plunges 15%.',
    narrativeIds: ['narr-008'],
    themeIds: ['sub-018'],
    topicIds: ['topic-008'],
    personIds: ['person-020'],
    organizationIds: ['org-027'],
    locationIds: ['loc-012'],
    eventIds: ['event-020'],
    factionMentions: {
      'faction-005': { sentiment: -0.68,
      'faction-008': { sentiment: 0.15 },
      'faction-009': { sentiment: 0.22 }
    },
      'faction-006': { sentiment: 0.42 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-044',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.bloomberg.com/nvidia-earnings-ai-demand',
    publishedDate: '2025-09-20T16:00:00Z',
    publisherId: 'pub-bloomberg',
    title: 'Nvidia Crushes Earnings Expectations on AI Chip Demand',
    author: 'Ian King',
    contentBlocks: [
      { type: 'paragraph', content: 'Nvidia reported record quarterly revenue driven by insatiable demand for its AI chips, beating analyst expectations by a wide margin.' },
      { type: 'paragraph', content: 'CEO Jensen Huang said customers are waiting months for deliveries as AI applications continue to expand across industries.' }
    ],
    excerpt: 'Nvidia reports record revenue driven by AI chip demand.',
    narrativeIds: ['narr-011'],
    themeIds: ['sub-024'],
    topicIds: ['topic-010'],
    personIds: ['person-021'],
    organizationIds: ['org-028'],
    locationIds: ['loc-012'],
    eventIds: ['event-021'],
    factionMentions: {
      'faction-005': { sentiment: 0.85,
      'faction-014': { sentiment: 0.55 },
      'faction-009': { sentiment: 0.22 }
    },
      'faction-006': { sentiment: 0.72 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-045',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.wsj.com/tech/ai-chip-shortage-getting-worse',
    publishedDate: '2025-09-25T10:00:00Z',
    publisherId: 'pub-wsj',
    title: 'The AI Chip Shortage Is Getting Worse',
    author: 'Asa Fitch',
    contentBlocks: [
      { type: 'paragraph', content: 'The global shortage of AI chips is intensifying as demand from tech companies and enterprises far outpaces production capacity.' },
      { type: 'paragraph', content: 'Nvidia\'s H100 chips remain in short supply, with lead times exceeding six months for most customers.' }
    ],
    excerpt: 'AI chip shortage intensifies as demand outpaces production.',
    narrativeIds: ['narr-011'],
    themeIds: ['sub-024', 'sub-025'],
    topicIds: ['topic-010'],
    personIds: [],
    organizationIds: ['org-028'],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-003': { sentiment: -0.38,
      'faction-014': { sentiment: 0.55 },
      'faction-009': { sentiment: 0.22 }
    },
      'faction-005': { sentiment: 0.55 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-046',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.semiengineering.com/sk-hynix-hbm-expansion',
    publishedDate: '2025-10-01T09:00:00Z',
    publisherId: 'pub-semiengi',
    title: 'SK Hynix Ramps HBM Production to Meet AI Demand',
    author: 'Ed Sperling',
    contentBlocks: [
      { type: 'paragraph', content: 'SK Hynix announced a major expansion of its High Bandwidth Memory production to meet surging demand from AI chip manufacturers.' },
      { type: 'paragraph', content: 'The company is investing $5 billion in new production lines to keep pace with Nvidia and AMD requirements.' }
    ],
    excerpt: 'SK Hynix expands HBM production for AI chip demand.',
    narrativeIds: ['narr-011'],
    themeIds: ['sub-024'],
    topicIds: ['topic-010'],
    personIds: ['person-023'],
    organizationIds: ['org-029'],
    locationIds: ['loc-011'],
    eventIds: ['event-022'],
    factionMentions: {
      'faction-006': { sentiment: 0.78,
      'faction-014': { sentiment: 0.55 },
      'faction-009': { sentiment: 0.22 }
    }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-047',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'http://www.xinhuanet.com/english/china-gallium-germanium-controls',
    publishedDate: '2025-10-15T08:00:00Z',
    publisherId: 'pub-xinhua',
    title: 'China Further Restricts Gallium and Germanium Exports',
    author: 'Xinhua Staff',
    contentBlocks: [
      { type: 'paragraph', content: 'China announced tighter export controls on gallium and germanium, critical materials for semiconductor production, effective immediately.' },
      { type: 'paragraph', content: 'The Ministry of Commerce said the measures are necessary to protect strategic resources and promote sustainable development.' }
    ],
    excerpt: 'China tightens gallium and germanium export controls.',
    narrativeIds: ['narr-010'],
    themeIds: ['sub-022'],
    topicIds: ['topic-009'],
    personIds: ['person-025'],
    organizationIds: ['org-030', 'org-009'],
    locationIds: ['loc-006'],
    eventIds: ['event-023'],
    factionMentions: {
      'faction-001': { sentiment: 0.82,
      'faction-015': { sentiment: -0.48 }
    },
      'faction-004': { sentiment: 0.85 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-048',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.bloomberg.com/us-firms-rare-earth-alternatives',
    publishedDate: '2025-10-20T11:00:00Z',
    publisherId: 'pub-bloomberg',
    title: 'US Firms Scramble for Rare Earth Alternatives',
    author: 'Eddie Spence',
    contentBlocks: [
      { type: 'paragraph', content: 'American semiconductor companies are scrambling to secure alternative sources of rare earth materials following China\'s export restrictions.' },
      { type: 'paragraph', content: 'Companies are exploring partnerships with Australian and Canadian mining operations and investing in recycling technology.' }
    ],
    excerpt: 'US chip firms seek rare earth alternatives amid China restrictions.',
    narrativeIds: ['narr-010'],
    themeIds: ['sub-023'],
    topicIds: ['topic-009'],
    personIds: [],
    organizationIds: [],
    locationIds: ['loc-004'],
    eventIds: [],
    factionMentions: {
      'faction-002': { sentiment: -0.52,
      'faction-015': { sentiment: -0.48 }
    },
      'faction-005': { sentiment: -0.48 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-049',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.ft.com/korea-us-chip-subsidy-tensions',
    publishedDate: '2025-10-25T14:00:00Z',
    publisherId: 'pub-ft',
    title: 'Korea-US Tensions Rise Over Chip Subsidies',
    author: 'Song Jung-a',
    contentBlocks: [
      { type: 'paragraph', content: 'Tensions between South Korea and the United States over semiconductor subsidies have reached a new high, complicating efforts to coordinate against China.' },
      { type: 'paragraph', content: 'Korean officials argue US objections undermine the alliance\'s stated goal of securing chip supply chains.' }
    ],
    excerpt: 'US-Korea chip subsidy dispute strains technology alliance.',
    narrativeIds: ['narr-009'],
    themeIds: ['sub-021'],
    personIds: [],
    organizationIds: ['org-005', 'org-032'],
    locationIds: ['loc-004', 'loc-011'],
    eventIds: [],
    factionMentions: {
      'faction-002': { sentiment: -0.42,
      'faction-010': { sentiment: -0.35 },
      'faction-012': { sentiment: -0.42 },
      'faction-016': { sentiment: 0.32 }
    },
      'faction-006': { sentiment: -0.55 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-050',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.reuters.com/technology/asml-ceo-china-restrictions',
    publishedDate: '2025-11-05T10:00:00Z',
    publisherId: 'pub-reuters',
    title: 'ASML CEO: China Restrictions Will Persist for Years',
    author: 'Toby Sterling',
    contentBlocks: [
      { type: 'paragraph', content: 'ASML CEO Christophe Fouquet warned that restrictions on selling advanced chip-making equipment to China will likely persist for years.' },
      { type: 'paragraph', content: 'The Dutch company has seen its China sales decline significantly since export controls were expanded.' }
    ],
    excerpt: 'ASML CEO warns China chip equipment restrictions will last years.',
    narrativeIds: ['narr-002'],
    themeIds: ['sub-006'],
    personIds: ['person-028'],
    organizationIds: ['org-002'],
    locationIds: ['loc-003'],
    eventIds: ['event-024'],
    factionMentions: {
      'faction-001': { sentiment: -0.62,
      'faction-007': { sentiment: -0.52 },
      'faction-013': { sentiment: -0.68 }
    },
      'faction-006': { sentiment: -0.48 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-051',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.eetimes.com/amd-ai-chip-nvidia-challenge',
    publishedDate: '2025-11-20T10:00:00Z',
    publisherId: 'pub-eetimes',
    title: 'AMD Launches New AI Chip to Challenge Nvidia Dominance',
    author: 'Rick Merritt',
    contentBlocks: [
      { type: 'paragraph', content: 'AMD unveiled its latest AI accelerator chip, positioning it as a cost-effective alternative to Nvidia\'s dominant H100 and upcoming B200.' },
      { type: 'paragraph', content: 'CEO Lisa Su said the new chip offers competitive performance at a lower price point, appealing to cost-conscious enterprise customers.' }
    ],
    excerpt: 'AMD unveils new AI chip to challenge Nvidia\'s market dominance.',
    narrativeIds: ['narr-011'],
    themeIds: ['sub-025'],
    topicIds: ['topic-010'],
    personIds: ['person-026'],
    organizationIds: ['org-031'],
    locationIds: ['loc-012'],
    eventIds: ['event-025'],
    factionMentions: {
      'faction-003': { sentiment: 0.55,
      'faction-014': { sentiment: 0.55 },
      'faction-009': { sentiment: 0.22 }
    },
      'faction-005': { sentiment: 0.62 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-052',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.semiengineering.com/can-anyone-catch-nvidia',
    publishedDate: '2025-11-25T09:00:00Z',
    publisherId: 'pub-semiengi',
    title: 'Analysis: Can Anyone Catch Nvidia in AI Chips?',
    author: 'Ann Steffora Mutschler',
    contentBlocks: [
      { type: 'paragraph', content: 'With AMD, Intel, and a host of startups racing to challenge Nvidia\'s dominance in AI chips, analysts are debating whether any competitor can meaningfully close the gap.' },
      { type: 'paragraph', content: 'Nvidia\'s CUDA software ecosystem presents a formidable barrier to entry that hardware performance alone cannot overcome.' }
    ],
    excerpt: 'Analysis: Challenges facing Nvidia competitors in AI chip market.',
    narrativeIds: ['narr-011'],
    themeIds: ['sub-024', 'sub-025'],
    topicIds: ['topic-010'],
    personIds: [],
    organizationIds: ['org-028', 'org-031', 'org-027'],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-003': { sentiment: 0.42,
      'faction-014': { sentiment: 0.55 },
      'faction-009': { sentiment: 0.22 }
    }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-053',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.wsj.com/tech/intel-chips-act-funding',
    publishedDate: '2025-12-10T10:00:00Z',
    publisherId: 'pub-wsj',
    title: 'Intel Secures $8.5B in CHIPS Act Funding',
    author: 'Asa Fitch',
    contentBlocks: [
      { type: 'paragraph', content: 'Intel has secured $8.5 billion in CHIPS Act funding, providing a lifeline for its struggling US manufacturing ambitions.' },
      { type: 'paragraph', content: 'The funding will support construction of new fabs in Ohio and Arizona and research into next-generation chip technology.' }
    ],
    excerpt: 'Intel receives $8.5B CHIPS Act funding for US manufacturing.',
    narrativeIds: ['narr-008'],
    themeIds: ['sub-019'],
    topicIds: ['topic-008'],
    personIds: ['person-020'],
    organizationIds: ['org-027', 'org-005'],
    locationIds: ['loc-004'],
    eventIds: ['event-026'],
    factionMentions: {
      'faction-002': { sentiment: 0.65,
      'faction-008': { sentiment: 0.15 },
      'faction-009': { sentiment: 0.22 }
    },
      'faction-005': { sentiment: 0.72 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-054',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.scmp.com/tech/china-semiconductor-progress-2025',
    publishedDate: '2025-12-20T09:00:00Z',
    publisherId: 'pub-scmp',
    title: 'Year in Review: China Semiconductor Progress Exceeds Expectations',
    author: 'Che Pan',
    contentBlocks: [
      { type: 'paragraph', content: 'China\'s domestic semiconductor industry made significant progress in 2025 despite expanded Western export controls, with SMIC and other firms advancing their technology.' },
      { type: 'paragraph', content: 'Industry watchers note that China has defied predictions of stagnation, though still lags behind leading-edge Western technology.' }
    ],
    excerpt: 'China semiconductor industry defies expectations in 2025.',
    narrativeIds: ['narr-001'],
    themeIds: ['sub-002'],
    personIds: [],
    organizationIds: ['org-001'],
    locationIds: ['loc-001', 'loc-006'],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: 0.78,
      'faction-011': { sentiment: 0.85 }
    },
      'faction-003': { sentiment: 0.45 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-055',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.reuters.com/technology/us-korea-chip-wto',
    publishedDate: '2025-12-28T14:00:00Z',
    publisherId: 'pub-reuters',
    title: 'US-Korea Chip Subsidy Dispute Heads to WTO',
    author: 'David Lawder',
    contentBlocks: [
      { type: 'paragraph', content: 'The United States formally escalated its dispute with South Korea over semiconductor subsidies to a WTO panel.' },
      { type: 'paragraph', content: 'The move marks a significant escalation that could take years to resolve and further strains the technology alliance.' }
    ],
    excerpt: 'US escalates Korea chip subsidy dispute to WTO panel.',
    narrativeIds: ['narr-009'],
    themeIds: ['sub-021'],
    personIds: [],
    organizationIds: ['org-005', 'org-032'],
    locationIds: ['loc-004'],
    eventIds: [],
    factionMentions: {
      'faction-002': { sentiment: -0.35,
      'faction-010': { sentiment: -0.35 },
      'faction-012': { sentiment: -0.42 },
      'faction-016': { sentiment: 0.32 }
    },
      'faction-006': { sentiment: -0.42 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-056',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.bloomberg.com/nvidia-ces-next-gen-ai-chip',
    publishedDate: '2026-01-05T09:00:00Z',
    publisherId: 'pub-bloomberg',
    title: 'Nvidia Announces Next-Gen AI Chip at CES',
    author: 'Ian King',
    contentBlocks: [
      { type: 'paragraph', content: 'Nvidia CEO Jensen Huang unveiled the company\'s next-generation AI chip at CES, promising significant performance improvements over current offerings.' },
      { type: 'paragraph', content: 'The announcement reinforced Nvidia\'s dominant position in the AI chip market as competitors struggle to catch up.' }
    ],
    excerpt: 'Nvidia unveils next-gen AI chip at CES, extending market lead.',
    narrativeIds: ['narr-011'],
    themeIds: ['sub-024'],
    topicIds: ['topic-010'],
    personIds: ['person-021'],
    organizationIds: ['org-028'],
    locationIds: ['loc-012'],
    eventIds: [],
    factionMentions: {
      'faction-005': { sentiment: 0.82,
      'faction-014': { sentiment: 0.55 },
      'faction-009': { sentiment: 0.22 }
    },
      'faction-006': { sentiment: 0.68 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-057',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.eetimes.com/intel-ceo-ces-turnaround',
    publishedDate: '2026-01-06T11:00:00Z',
    publisherId: 'pub-eetimes',
    title: 'Intel CEO Outlines Turnaround Strategy at CES',
    author: 'Rick Merritt',
    contentBlocks: [
      { type: 'paragraph', content: 'Intel CEO Pat Gelsinger outlined an updated turnaround strategy at CES, emphasizing the company\'s progress on process technology and new customer wins.' },
      { type: 'paragraph', content: 'Analysts remain skeptical, noting the company still faces significant execution challenges.' }
    ],
    excerpt: 'Intel CEO presents updated turnaround strategy at CES.',
    narrativeIds: ['narr-008'],
    themeIds: ['sub-019'],
    topicIds: ['topic-008'],
    personIds: ['person-020'],
    organizationIds: ['org-027'],
    locationIds: ['loc-012'],
    eventIds: [],
    factionMentions: {
      'faction-005': { sentiment: 0.45,
      'faction-008': { sentiment: 0.15 },
      'faction-009': { sentiment: 0.22 }
    }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-058',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.ft.com/china-rare-earth-limited-impact',
    publishedDate: '2026-01-08T10:00:00Z',
    publisherId: 'pub-ft',
    title: 'China Rare Earth Restrictions Show Limited Impact So Far',
    author: 'Demetri Sevastopulo',
    contentBlocks: [
      { type: 'paragraph', content: 'China\'s rare earth export restrictions have had limited impact on global semiconductor production so far, as companies have drawn on stockpiles and alternative sources.' },
      { type: 'paragraph', content: 'However, analysts warn that longer-term effects could be more severe if restrictions persist.' }
    ],
    excerpt: 'China rare earth restrictions show limited impact to date.',
    narrativeIds: ['narr-010'],
    themeIds: ['sub-023'],
    topicIds: ['topic-009'],
    personIds: [],
    organizationIds: [],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: -0.35,
      'faction-015': { sentiment: -0.48 }
    },
      'faction-002': { sentiment: 0.42 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-059',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.reuters.com/technology/tsmc-q4-ai-demand',
    publishedDate: '2026-01-10T08:00:00Z',
    publisherId: 'pub-reuters',
    title: 'TSMC Reports Strong Q4 Driven by AI Chip Demand',
    author: 'Yimou Lee',
    contentBlocks: [
      { type: 'paragraph', content: 'TSMC reported strong fourth-quarter results driven by surging demand for AI chips, with revenue exceeding analyst expectations.' },
      { type: 'paragraph', content: 'The company raised its 2026 capital expenditure guidance to meet expected demand growth.' }
    ],
    excerpt: 'TSMC reports strong Q4 on AI chip demand, raises capex guidance.',
    narrativeIds: ['narr-007', 'narr-011'],
    themeIds: ['sub-016', 'sub-024'],
    topicIds: ['topic-010'],
    personIds: [],
    organizationIds: ['org-020'],
    locationIds: ['loc-010'],
    eventIds: [],
    factionMentions: {
      'faction-005': { sentiment: 0.72,
      'faction-007': { sentiment: -0.52 },
      'faction-009': { sentiment: 0.22 },
      'faction-014': { sentiment: 0.55 }
    },
      'faction-006': { sentiment: 0.65 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-060',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.semiengineering.com/samsung-sk-hynix-hbm-alliance',
    publishedDate: '2026-01-12T10:00:00Z',
    publisherId: 'pub-semiengi',
    title: 'Samsung and SK Hynix Announce HBM Production Alliance',
    author: 'Ed Sperling',
    contentBlocks: [
      { type: 'paragraph', content: 'Samsung and SK Hynix announced a surprising alliance to coordinate HBM production, aiming to better meet surging AI chip demand.' },
      { type: 'paragraph', content: 'The agreement allows the Korean rivals to share capacity information and coordinate supply to major customers.' }
    ],
    excerpt: 'Korean rivals Samsung and SK Hynix form HBM production alliance.',
    narrativeIds: ['narr-009'],
    themeIds: ['sub-020'],
    topicIds: ['topic-010'],
    personIds: ['person-022', 'person-023'],
    organizationIds: ['org-014', 'org-029'],
    locationIds: ['loc-011'],
    eventIds: [],
    factionMentions: {
      'faction-006': { sentiment: 0.75,
      'faction-010': { sentiment: -0.35 },
      'faction-012': { sentiment: -0.42 },
      'faction-016': { sentiment: 0.32 }
    }
    },
    highlights: [],
    comments: []
  },
  // New social media documents (doc-061 to doc-070)
  {
    id: 'doc-061',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://reddit.com/r/hardware/comments/smic_analysis',
    publishedDate: '2025-07-08T15:00:00Z',
    publisherId: 'pub-reddit',
    title: 'Reddit: Technical analysis of SMIC 5nm yield rates',
    author: {
      username: 'u/semiconductor_eng',
      displayName: 'semiconductor_eng',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: '**Deep dive: SMIC 5nm yield analysis based on publicly available data**\n\nI\'ve been crunching numbers on SMIC\'s likely yield rates. Based on their quarterly reports and industry estimates:\n\n- DUV multi-patterning at 5nm likely yields 20-30%\n- Compare to TSMC EUV at 80%+\n- Cost per wafer is 3x higher\n\nThis is impressive engineering but not economically viable for high-volume production. Thoughts?' }
    ],
    excerpt: 'Reddit technical analysis of SMIC 5nm chip yield rates and economics.',
    narrativeIds: ['narr-001'],
    themeIds: ['sub-001', 'sub-002'],
    personIds: ['person-001'],
    organizationIds: ['org-001'],
    locationIds: ['loc-001'],
    eventIds: [],
    factionMentions: {
      'faction-003': { sentiment: 0.45 },
      'faction-006': { sentiment: 0.35 }
    },
    metrics: { likes: 4850, comments: 892, platform: 'reddit' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-062',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://x.com/chip_industry/status/asml_restrictions',
    publishedDate: '2025-08-15T10:30:00Z',
    publisherId: 'pub-x',
    title: 'X thread: Impact of expanded ASML restrictions',
    author: {
      username: '@chip_industry',
      displayName: 'Semiconductor Industry Watch',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'BREAKING: Netherlands confirms expanded ASML export controls 🧵\n\n1/ Not just EUV anymore - advanced DUV systems also restricted\n2/ ASML estimates $2.5B annual revenue impact\n3/ China\'s domestic lithography efforts will accelerate\n4/ This could backfire spectacularly\n\nThe semiconductor cold war just escalated.' }
    ],
    excerpt: 'X thread analyzing expanded ASML lithography export restrictions to China.',
    narrativeIds: ['narr-002'],
    themeIds: ['sub-004', 'sub-005'],
    personIds: [],
    organizationIds: ['org-003', 'org-004'],
    locationIds: ['loc-003'],
    eventIds: [],
    factionMentions: {
      'faction-002': { sentiment: 0.55 },
      'faction-001': { sentiment: -0.62 }
    },
    metrics: { likes: 8920, comments: 1450, shares: 3200, platform: 'x' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-063',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://weibo.com/techwatch/bigfund_announcement',
    publishedDate: '2025-09-10T08:00:00Z',
    publisherId: 'pub-weibo',
    title: 'Weibo: Reaction to Big Fund III announcement',
    author: {
      username: '@科技观察者',
      displayName: 'Tech Observer China',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: '大基金三期340亿美元！这是国家对半导体产业最强有力的支持。西方封锁只会让我们更强大。自主创新是唯一出路。🇨🇳\n\n[Translation: Big Fund III $34B! This is the strongest national support for semiconductor industry. Western blockade will only make us stronger. Independent innovation is the only way forward.]' }
    ],
    excerpt: 'Weibo post celebrating Big Fund III semiconductor investment announcement.',
    narrativeIds: ['narr-003'],
    themeIds: ['sub-006', 'sub-007'],
    personIds: [],
    organizationIds: ['org-001', 'org-010'],
    locationIds: ['loc-001'],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: 0.85 },
      'faction-004': { sentiment: 0.78 }
    },
    metrics: { likes: 125000, comments: 8500, shares: 32000, platform: 'weibo' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-064',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://tiktok.com/@tech_explained/video/chips_act',
    publishedDate: '2025-10-05T14:00:00Z',
    publisherId: 'pub-tiktok',
    title: 'TikTok: Explainer on CHIPS Act progress',
    author: {
      username: '@tech_explained',
      displayName: 'Tech Explained Simply',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'So the US gave $52 billion to build chip factories here... but where are they? 🤔 Let\'s look at what\'s actually happening with the CHIPS Act money and why it\'s taking so long. Spoiler: building fabs is HARD. #chips #technology #manufacturing #usa' }
    ],
    video: {
      thumbnailUrl: 'img/placeholders/video-thumbnail.svg',
      duration: 89
    },
    excerpt: 'TikTok explainer on CHIPS Act implementation progress and challenges.',
    narrativeIds: ['narr-007'],
    themeIds: ['sub-013', 'sub-014'],
    personIds: [],
    organizationIds: ['org-005', 'org-006'],
    locationIds: ['loc-012'],
    eventIds: [],
    factionMentions: {
      'faction-006': { sentiment: 0.45 },
      'faction-003': { sentiment: 0.32 }
    },
    metrics: { views: 2800000, likes: 185000, shares: 72000, comments: 24000, platform: 'tiktok' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-065',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://reddit.com/r/stocks/comments/intel_struggles',
    publishedDate: '2025-10-20T18:00:00Z',
    publisherId: 'pub-reddit',
    title: 'Reddit: Discussion on Intel restructuring and layoffs',
    author: {
      username: 'u/chip_investor',
      displayName: 'chip_investor',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: '**Intel announces 15,000 layoffs - what does this mean for US chip manufacturing?**\n\nIntel stock is down 25% this week after the restructuring announcement. As someone who\'s been long INTC for years, this is painful.\n\nBut the bigger question: can the US actually compete in advanced manufacturing without Intel? TSMC Arizona is struggling. Samsung Taylor is delayed.\n\nAre we putting all our eggs in a basket that might not work?' }
    ],
    excerpt: 'Reddit discussion on Intel layoffs and US semiconductor manufacturing viability.',
    narrativeIds: ['narr-008'],
    themeIds: ['sub-015', 'sub-016'],
    personIds: ['person-009'],
    organizationIds: ['org-006'],
    locationIds: ['loc-012'],
    eventIds: [],
    factionMentions: {
      'faction-006': { sentiment: -0.55 },
      'faction-003': { sentiment: 0.25 }
    },
    metrics: { likes: 6720, comments: 1850, platform: 'reddit' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-066',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://x.com/supply_chain_analyst/status/huawei_stockpile',
    publishedDate: '2025-11-12T09:00:00Z',
    publisherId: 'pub-x',
    title: 'X thread: Investigation into Huawei equipment stockpiling',
    author: {
      username: '@supply_chain_analyst',
      displayName: 'Supply Chain Intelligence',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'THREAD: Sources say Huawei has stockpiled billions in semiconductor equipment in Shenzhen warehouses 🧵\n\n1/ Equipment from ASML, Applied Materials, Lam Research\n2/ Purchased before restrictions took effect\n3/ US investigating potential sanctions circumvention\n4/ Huawei denies wrongdoing\n\nThis is the shadow supply chain everyone suspected.' }
    ],
    excerpt: 'X thread investigating reports of Huawei semiconductor equipment stockpiling.',
    narrativeIds: ['narr-004'],
    themeIds: ['sub-008', 'sub-009'],
    personIds: ['person-004'],
    organizationIds: ['org-002'],
    locationIds: ['loc-002'],
    eventIds: [],
    factionMentions: {
      'faction-002': { sentiment: 0.65 },
      'faction-001': { sentiment: -0.72 }
    },
    metrics: { likes: 12400, comments: 2850, shares: 5600, platform: 'x' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-067',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://weibo.com/huawei_fan/mate70_launch',
    publishedDate: '2025-12-08T12:00:00Z',
    publisherId: 'pub-weibo',
    title: 'Weibo: Consumer excitement over Huawei Mate 70 with domestic chip',
    author: {
      username: '@华为粉丝圈',
      displayName: 'Huawei Fan Community',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: '华为Mate 70发布！麒麟9100芯片，完全国产5nm工艺！西方说我们做不到，我们做到了！预购量已突破500万！这就是中国科技的力量！💪🇨🇳\n\n[Translation: Huawei Mate 70 released! Kirin 9100 chip, fully domestic 5nm process! The West said we couldn\'t do it, we did it! Pre-orders exceed 5 million! This is the power of Chinese technology!]' }
    ],
    excerpt: 'Weibo post celebrating Huawei Mate 70 launch with domestic 5nm chip.',
    narrativeIds: ['narr-001', 'narr-004'],
    themeIds: ['sub-001', 'sub-008'],
    personIds: [],
    organizationIds: ['org-002', 'org-001'],
    locationIds: ['loc-002'],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: 0.92 },
      'faction-004': { sentiment: 0.85 }
    },
    metrics: { likes: 285000, comments: 42000, shares: 95000, platform: 'weibo' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-068',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://tiktok.com/@nvidia_stan/video/gpu_shortage',
    publishedDate: '2025-12-22T16:00:00Z',
    publisherId: 'pub-tiktok',
    title: 'TikTok: AI developer frustration with Nvidia GPU shortage',
    author: {
      username: '@nvidia_stan',
      displayName: 'AI Dev Life',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Me waiting 6 months for my H100 GPUs to arrive 🤡 Meanwhile my competitors got theirs last year. Nvidia please I\'m begging. The shortage is killing startups. #ai #nvidia #gpu #startuplife #h100' }
    ],
    video: {
      thumbnailUrl: 'img/placeholders/video-thumbnail.svg',
      duration: 45
    },
    excerpt: 'TikTok expressing AI developer frustration with Nvidia GPU shortages.',
    narrativeIds: ['narr-011'],
    themeIds: ['sub-022', 'sub-023'],
    personIds: [],
    organizationIds: ['org-020'],
    locationIds: ['loc-012'],
    eventIds: [],
    factionMentions: {
      'faction-006': { sentiment: -0.45 },
      'faction-003': { sentiment: 0.35 }
    },
    metrics: { views: 3200000, likes: 245000, shares: 85000, comments: 32000, platform: 'tiktok' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-069',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://reddit.com/r/semiconductors/comments/ymtc_found',
    publishedDate: '2026-01-02T20:00:00Z',
    publisherId: 'pub-reddit',
    title: 'Reddit: Discussion of YMTC chips found in consumer devices',
    author: {
      username: 'u/teardown_specialist',
      displayName: 'teardown_specialist',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: '**Found YMTC NAND in my new SSD despite Entity List status**\n\nDid a teardown of a new consumer SSD from a major brand. Found YMTC 232-layer NAND inside.\n\nHow is this possible when YMTC is on the Entity List? Supply chain laundering? Third-party intermediaries?\n\nPhotos in comments. This is a significant sanctions compliance issue.' }
    ],
    excerpt: 'Reddit post documenting YMTC chips found in consumer devices despite sanctions.',
    narrativeIds: ['narr-005'],
    themeIds: ['sub-010', 'sub-011'],
    personIds: [],
    organizationIds: ['org-011'],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-002': { sentiment: 0.72 },
      'faction-003': { sentiment: 0.45 }
    },
    metrics: { likes: 8450, comments: 2120, platform: 'reddit' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-070',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://x.com/korea_chip_news/status/subsidy_dispute',
    publishedDate: '2026-01-08T11:00:00Z',
    publisherId: 'pub-x',
    title: 'X post: Breaking news on US-Korea semiconductor subsidy dispute',
    author: {
      username: '@korea_chip_news',
      displayName: 'Korea Semiconductor News',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'BREAKING: US files WTO complaint against Korea\'s $17B semiconductor subsidies 🇺🇸🇰🇷\n\nThis is awkward timing given:\n- US just gave billions in CHIPS Act subsidies\n- Korea is a key ally against China\n- Samsung/SK Hynix supply critical chips to US\n\nThe semiconductor alliance is showing cracks.' }
    ],
    excerpt: 'X post reporting US WTO complaint against Korean semiconductor subsidies.',
    narrativeIds: ['narr-009'],
    themeIds: ['sub-019', 'sub-020'],
    personIds: [],
    organizationIds: ['org-014', 'org-029'],
    locationIds: ['loc-011'],
    eventIds: [],
    factionMentions: {
      'faction-006': { sentiment: -0.55 },
      'faction-002': { sentiment: 0.35 }
    },
    metrics: { likes: 7850, comments: 1650, shares: 3200, platform: 'x' },
    highlights: [],
    comments: []
  }
];
