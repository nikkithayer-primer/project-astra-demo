/**
 * Documents for Walmart Brand dataset
 * Includes news articles, social posts, and internal documents
 */

export const documents = [
  // Self-checkout narrative documents
  {
    id: 'doc-001',
    documentType: 'social_post',
    repositoryId: 'repo-osint',
    classification: 'U',
    title: 'TikTok: Customer detained at Walmart self-checkout',
    excerpt: 'Viral TikTok video showing a customer being detained by Walmart loss prevention after an honest self-checkout mistake. Video has over 8 million views.',
    url: 'https://tiktok.com/@shopper12345/video/example',
    publisherId: 'pub-tiktok',
    publishedDate: '2026-01-14T15:30:00Z',
    author: {
      username: '@shopper12345',
      displayName: 'Just Another Shopper',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'I literally had my receipt, I paid for everything, and they still stopped me and made me wait while they checked every item in my bag. This is so humiliating. #walmart #selfcheckout #embarrassing', portionMark: { classification: 'U', handling: '' } }
    ],
    video: {
      thumbnailUrl: 'img/placeholders/video-thumbnail.svg',
      duration: 45
    },
    transcription: 'I literally had my receipt, I paid for everything, and they still stopped me and made me wait while they checked every item in my bag. This is so humiliating. The lady was looking at me like I was a criminal. I shop here every week! I spent $200 today and this is how they treat me?',
    narrativeIds: ['narr-001'],
    themeIds: ['sub-001'],
    personIds: [],
    organizationIds: ['org-001'],
    locationIds: ['loc-002'],
    eventIds: ['event-001'],
    factionIds: ['faction-001', 'faction-004'],
    factionMentions: {
      'faction-001': { sentiment: -0.85,
      'faction-014': { sentiment: -0.65 }
    },
      'faction-004': { sentiment: -0.72 }
    },
    metrics: { views: 8500000, likes: 425000, shares: 185000, comments: 78000, platform: 'tiktok' },
    highlights: [
      {
        id: 'highlight-001',
        userId: 'user-001',
        blockIndex: 0,
        startOffset: 18,
        endOffset: 95,
        highlightedText: 'I literally had my receipt, I paid for everything, and they still stopped me',
        createdAt: '2026-01-14T18:30:00Z'
      }
    ],
    comments: [
      {
        id: 'comment-001',
        userId: 'user-001',
        blockIndex: 0,
        anchorStartOffset: 18,
        anchorEndOffset: 95,
        anchorText: 'I literally had my receipt, I paid for everything, and they still stopped me',
        content: 'This matches the pattern we\'re seeing in other viral posts. The "paid but detained" narrative is resonating strongly.',
        createdAt: '2026-01-14T18:35:00Z',
        replies: [
          {
            id: 'reply-001',
            userId: 'user-002',
            content: 'Yes, and the hashtag usage is consistent with coordinated amplification patterns.',
            createdAt: '2026-01-14T19:00:00Z'
          }
        ]
      }
    ]
  },
  {
    id: 'doc-002',
    documentType: 'social_post',
    repositoryId: 'repo-osint',
    classification: 'U',
    title: 'Reddit thread: Walmart self-checkout experiences',
    excerpt: 'Popular Reddit thread with thousands of comments about negative self-checkout experiences at Walmart.',
    url: 'https://reddit.com/r/walmart/comments/example',
    publisherId: 'pub-reddit',
    publishedDate: '2026-01-15T10:00:00Z',
    author: {
      username: 'u/annoyed_customer_2026',
      displayName: 'annoyed_customer_2026',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
      caption: 'Reddit discussion thread screenshot'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Thread: "Anyone else feel like a criminal using Walmart self-checkout?"', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Top comment: "Got stopped twice last month even though I scanned everything. The receipt checkers treat you like a thief."', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-001'],
    themeIds: ['sub-001'],
    personIds: [],
    organizationIds: ['org-001'],
    locationIds: [],
    eventIds: [],
    factionIds: ['faction-001', 'faction-004'],
    factionMentions: {
      'faction-001': { sentiment: -0.78,
      'faction-014': { sentiment: -0.65 }
    },
      'faction-004': { sentiment: -0.65 }
    },
    metrics: { likes: 15420, comments: 2850, platform: 'reddit' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-003',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Class-Action Lawsuit Filed Against Walmart Over Self-Checkout Detentions',
    excerpt: 'Texas law firm files class-action lawsuit alleging Walmart systematically detains innocent customers at self-checkout.',
    url: 'https://reuters.com/legal/example',
    publisherId: 'pub-reuters',
    publishedDate: '2026-01-18T10:00:00Z',
    author: 'Karen Sloan',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
      caption: 'Walmart self-checkout area'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'A class-action lawsuit was filed Monday in the Southern District of Texas alleging Walmart has engaged in a pattern of false imprisonment and unlawful detention of customers at self-checkout stations.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Lead attorney Thomas Merton of Merton & Associates claims the lawsuit represents over 500 plaintiffs who were stopped, searched, and detained despite having valid receipts for all purchased items.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"Walmart\'s loss prevention policies have created a culture of suspicion toward innocent customers," Merton said in a statement. "Our clients were humiliated and traumatized by these experiences."', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-001'],
    themeIds: ['sub-002'],
    personIds: ['person-008'],
    organizationIds: ['org-001', 'org-002'],
    locationIds: ['loc-002'],
    eventIds: ['event-002'],
    factionIds: ['faction-001', 'faction-004'],
    factionMentions: {
      'faction-001': { sentiment: -0.68,
      'faction-014': { sentiment: -0.65 }
    },
      'faction-004': { sentiment: -0.55 }
    },
    metrics: { shares: 12500 },
    highlights: [
      {
        id: 'highlight-002',
        userId: 'user-002',
        blockIndex: 1,
        startOffset: 0,
        endOffset: 85,
        highlightedText: 'Lead attorney Thomas Merton of Merton & Associates claims the lawsuit represents over 500',
        createdAt: '2026-01-18T12:00:00Z'
      }
    ],
    comments: [
      {
        id: 'comment-002',
        userId: 'user-002',
        blockIndex: 1,
        anchorStartOffset: 0,
        anchorEndOffset: 85,
        anchorText: 'Lead attorney Thomas Merton of Merton & Associates claims the lawsuit represents over 500',
        content: 'This is a significant escalation. Legal action could have material impact on Walmart\'s policies.',
        createdAt: '2026-01-18T12:15:00Z',
        replies: []
      }
    ]
  },
  {
    id: 'doc-004',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Walmart Announces Plan to Add Staffed Checkout Lanes at 500 Stores',
    excerpt: 'In response to customer complaints, Walmart announces plans to increase staffed checkout options.',
    url: 'https://retaildive.com/news/example',
    publisherId: 'pub-retaildive',
    publishedDate: '2026-01-19T14:00:00Z',
    author: 'Ben Unglesbee',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
      caption: 'Walmart checkout lanes'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Walmart announced Friday it will add additional staffed checkout lanes at approximately 500 stores nationwide, responding to months of customer complaints about self-checkout experiences.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'CEO Doug McMillon said in a statement, "We\'ve heard our customers and are committed to providing checkout options that meet their preferences."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The move comes amid increasing social media backlash and a recent class-action lawsuit alleging improper detention of customers at self-checkout stations.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-001'],
    themeIds: ['sub-003'],
    personIds: ['person-001', 'person-002'],
    organizationIds: ['org-001'],
    locationIds: ['loc-001'],
    eventIds: ['event-003'],
    factionIds: ['faction-001', 'faction-004'],
    factionMentions: {
      'faction-001': { sentiment: -0.25,
      'faction-014': { sentiment: -0.65 }
    },
      'faction-004': { sentiment: 0.15 }
    },
    metrics: { shares: 5800 },
    highlights: [],
    comments: []
  },

  // Empty shelves narrative documents
  {
    id: 'doc-005',
    documentType: 'social_post',
    repositoryId: 'repo-osint',
    classification: 'U',
    title: 'X post: Photos of empty Walmart grocery aisles',
    excerpt: 'Viral X post showing photos of completely empty grocery aisles at a Chicago-area Walmart.',
    url: 'https://x.com/frustratedshopper/status/example',
    publisherId: 'pub-x',
    publishedDate: '2026-01-15T12:00:00Z',
    author: {
      username: '@frustratedshopper',
      displayName: 'Frustrated Shopper',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
      caption: 'Empty grocery shelves at Walmart'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Tried to do my weekly shopping at Walmart. This is what I found. No bread, no milk, barely any produce. This is ridiculous. Had to drive to three stores to get what I needed. #walmartfail', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '[4 photos attached showing empty aisles]', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-002'],
    themeIds: ['sub-004'],
    personIds: [],
    organizationIds: ['org-001'],
    locationIds: ['loc-004'],
    eventIds: ['event-004'],
    factionIds: ['faction-001'],
    factionMentions: {
      'faction-001': { sentiment: -0.82,
      'faction-011': { sentiment: -0.72 }
    }
    },
    metrics: { views: 2500000, likes: 45000, shares: 18500, comments: 8200, platform: 'x' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-006',
    documentType: 'social_post',
    repositoryId: 'repo-osint',
    classification: 'U',
    title: 'Facebook group discussion: Walmart inventory problems',
    excerpt: 'Discussion in local community Facebook group about ongoing inventory issues at nearby Walmart.',
    url: 'https://facebook.com/groups/example/posts/12345',
    publisherId: 'pub-facebook',
    publishedDate: '2026-01-16T09:00:00Z',
    author: {
      username: 'concerned.neighbor.42',
      displayName: 'Local Mom',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
      caption: 'Facebook community discussion'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Has anyone else noticed the Walmart on Main St. has been half empty for weeks? I can never find basic stuff anymore. Starting to wonder if we should just switch to Target.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-002'],
    themeIds: ['sub-004'],
    personIds: [],
    organizationIds: ['org-001', 'org-003'],
    locationIds: [],
    eventIds: [],
    factionIds: ['faction-001'],
    factionMentions: {
      'faction-001': { sentiment: -0.68,
      'faction-011': { sentiment: -0.72 }
    }
    },
    metrics: { likes: 458, comments: 127, shares: 35, platform: 'facebook' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-007',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Analysis: Walmart\'s Inventory Management System Shows Cracks',
    excerpt: 'Retail Dive analysis examines why Walmart stores are experiencing persistent out-of-stock issues.',
    url: 'https://retaildive.com/news/walmart-inventory-analysis',
    publisherId: 'pub-retaildive',
    publishedDate: '2026-01-17T09:00:00Z',
    author: 'Daphne Howland',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
      caption: 'Walmart distribution center'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Walmart\'s vaunted inventory management system may need a significant overhaul, according to retail analysts who have been tracking persistent out-of-stock reports across the chain.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Oliver Chen of TD Cowen notes that "Walmart\'s real-time inventory visibility appears to have gaps that competitors have addressed more effectively."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The issues appear to be concentrated in grocery and household essentials—categories where Amazon and Target have made significant logistics investments.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-002'],
    themeIds: ['sub-005'],
    personIds: ['person-010'],
    organizationIds: ['org-001', 'org-014', 'org-015'],
    locationIds: [],
    eventIds: ['event-005'],
    factionIds: ['faction-001', 'faction-005'],
    factionMentions: {
      'faction-001': { sentiment: -0.58,
      'faction-011': { sentiment: -0.72 }
    },
      'faction-005': { sentiment: -0.42 }
    },
    metrics: { shares: 3200 },
    highlights: [
      {
        id: 'highlight-003',
        userId: 'user-003',
        blockIndex: 1,
        startOffset: 0,
        endOffset: 147,
        highlightedText: 'Oliver Chen of TD Cowen notes that "Walmart\'s real-time inventory visibility appears to have gaps that competitors have addressed more effectively."',
        createdAt: '2026-01-17T11:00:00Z'
      }
    ],
    comments: []
  },

  // Worker conditions narrative documents
  {
    id: 'doc-008',
    documentType: 'social_post',
    repositoryId: 'repo-osint',
    classification: 'U',
    title: 'TikTok: Walmart employee shows empty department',
    excerpt: 'Employee TikTok showing them working alone in a department meant for 4+ workers.',
    url: 'https://tiktok.com/@walmartworkerlife/video/example',
    publisherId: 'pub-tiktok',
    publishedDate: '2026-01-13T18:00:00Z',
    author: {
      username: '@walmartworkerlife',
      displayName: 'Walmart Worker Life',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Welcome to my shift! I\'m the only one in electronics, toys, AND sporting goods tonight. There should be four of us. But sure, we\'re "fully staffed." #walmartlife #retailworker #understaffed', portionMark: { classification: 'U', handling: '' } }
    ],
    video: {
      thumbnailUrl: 'img/placeholders/video-thumbnail.svg',
      duration: 62
    },
    transcription: 'Welcome to my shift! I\'m the only one in electronics, toys, AND sporting goods tonight. There should be four of us. But sure, we\'re "fully staffed." Look at this - empty aisles, customers waiting, and I\'m running back and forth trying to help everyone. This is every night now.',
    narrativeIds: ['narr-003'],
    themeIds: ['sub-006'],
    personIds: ['person-005'],
    organizationIds: ['org-001'],
    locationIds: [],
    eventIds: ['event-006'],
    factionIds: ['faction-002', 'faction-003'],
    factionMentions: {
      'faction-002': { sentiment: -0.85,
      'faction-010': { sentiment: -0.25 },
      'faction-011': { sentiment: -0.72 }
    },
      'faction-003': { sentiment: -0.78 }
    },
    metrics: { views: 5200000, likes: 385000, shares: 125000, comments: 42000, platform: 'tiktok' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-009',
    documentType: 'social_post',
    repositoryId: 'repo-osint',
    classification: 'U',
    title: 'Reddit: Current Walmart employees share staffing concerns',
    excerpt: 'Reddit thread where current Walmart employees discuss understaffing challenges.',
    url: 'https://reddit.com/r/walmart/comments/staffing',
    publisherId: 'pub-reddit',
    publishedDate: '2026-01-14T14:00:00Z',
    author: {
      username: 'u/walmart_associate_tired',
      displayName: 'walmart_associate_tired',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
      caption: 'Reddit employee discussion'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Thread: "Is every store this understaffed or just mine?"', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Hundreds of comments confirm similar experiences. Top reply: "We have 6 call-outs every day and management won\'t hire anyone new. Meanwhile they cut hours for the rest of us."', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-003'],
    themeIds: ['sub-006'],
    personIds: [],
    organizationIds: ['org-001'],
    locationIds: [],
    eventIds: [],
    factionIds: ['faction-002', 'faction-003'],
    factionMentions: {
      'faction-002': { sentiment: -0.80,
      'faction-010': { sentiment: -0.25 },
      'faction-011': { sentiment: -0.72 }
    },
      'faction-003': { sentiment: -0.75 }
    },
    metrics: { likes: 8750, comments: 1420, platform: 'reddit' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-010',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'UFCW Launches #RespectWalmartWorkers Campaign',
    excerpt: 'United Food and Commercial Workers union announces new campaign highlighting worker conditions at Walmart.',
    url: 'https://bloomberg.com/news/example',
    publisherId: 'pub-bloomberg',
    publishedDate: '2026-01-15T11:00:00Z',
    author: 'Matthew Boyle',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
      caption: 'UFCW campaign launch event'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'The United Food and Commercial Workers International Union (UFCW) launched a new social media campaign today called #RespectWalmartWorkers, amplifying employee stories about understaffing, scheduling issues, and working conditions.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'UFCW President Marc Perrone stated, "These workers deserve better. They kept this country running during the pandemic and now they\'re being stretched thinner than ever."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The campaign includes video testimonials from current and former employees across multiple states.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-003'],
    themeIds: ['sub-007'],
    personIds: ['person-003', 'person-004'],
    organizationIds: ['org-001', 'org-005', 'org-006'],
    locationIds: ['loc-006'],
    eventIds: ['event-007'],
    factionIds: ['faction-002', 'faction-003'],
    factionMentions: {
      'faction-002': { sentiment: 0.72,
      'faction-010': { sentiment: -0.25 },
      'faction-011': { sentiment: -0.72 }
    },
      'faction-003': { sentiment: 0.68 }
    },
    metrics: { shares: 4500 },
    highlights: [
      {
        id: 'highlight-004',
        userId: 'user-001',
        blockIndex: 1,
        startOffset: 0,
        endOffset: 168,
        highlightedText: 'UFCW President Marc Perrone stated, "These workers deserve better. They kept this country running during the pandemic and now they\'re being stretched thinner than ever."',
        createdAt: '2026-01-15T13:00:00Z'
      }
    ],
    comments: [
      {
        id: 'comment-003',
        userId: 'user-001',
        blockIndex: 1,
        anchorStartOffset: 0,
        anchorEndOffset: 168,
        anchorText: 'UFCW President Marc Perrone stated, "These workers deserve better. They kept this country running during the pandemic and now they\'re being stretched thinner than ever."',
        content: 'Strong messaging from UFCW. This connects current complaints to pandemic-era goodwill effectively.',
        createdAt: '2026-01-15T13:15:00Z',
        replies: []
      }
    ]
  },
  {
    id: 'doc-011',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Walmart Responds to Worker Complaints, Highlights Benefits',
    excerpt: 'Walmart corporate issues statement responding to viral worker complaints.',
    url: 'https://wsj.com/articles/example',
    publisherId: 'pub-wsj',
    publishedDate: '2026-01-17T06:00:00Z',
    author: 'Sarah Nassauer',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
      caption: 'Walmart corporate headquarters'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Walmart pushed back against viral social media posts depicting poor working conditions, issuing a statement highlighting its $14 minimum starting wage, healthcare benefits, and tuition assistance program.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"We employ 1.6 million Americans and are committed to providing good jobs with opportunity for growth," a company spokesperson said.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The company noted that associate satisfaction scores have improved year-over-year, though critics questioned the methodology of internal surveys.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-003'],
    themeIds: ['sub-008'],
    personIds: ['person-001'],
    organizationIds: ['org-001'],
    locationIds: ['loc-001'],
    eventIds: [],
    factionIds: ['faction-002', 'faction-005'],
    factionMentions: {
      'faction-002': { sentiment: 0.35,
      'faction-010': { sentiment: -0.25 },
      'faction-011': { sentiment: -0.72 }
    },
      'faction-005': { sentiment: 0.45 }
    },
    metrics: { shares: 2800 },
    highlights: [],
    comments: []
  },

  // Great Value recall documents
  {
    id: 'doc-012',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'FDA Recalls Walmart Great Value Frozen Vegetables Over Listeria Concerns',
    excerpt: 'FDA announces recall of Great Value frozen vegetables due to potential Listeria contamination.',
    url: 'https://usatoday.com/story/money/example',
    publisherId: 'pub-usatoday',
    publishedDate: '2026-01-16T10:00:00Z',
    author: 'Kelly Tyko',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
      caption: 'FDA recall notice'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'The U.S. Food and Drug Administration has announced a voluntary recall of select Walmart Great Value frozen vegetable products due to potential Listeria monocytogenes contamination.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The initial recall covers five SKUs sold nationwide. Consumers who purchased affected products are advised to return them for a full refund.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'FDA officials said they are working with Walmart to identify the source of contamination and ensure all affected products are removed from shelves.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-004'],
    themeIds: ['sub-009'],
    personIds: ['person-006'],
    organizationIds: ['org-001', 'org-007'],
    locationIds: ['loc-007'],
    eventIds: ['event-008'],
    factionIds: ['faction-001', 'faction-004'],
    factionMentions: {
      'faction-001': { sentiment: -0.75,
      'faction-013': { sentiment: 0.35 }
    },
      'faction-004': { sentiment: -0.62 }
    },
    metrics: { shares: 8500 },
    highlights: [
      {
        id: 'highlight-005',
        userId: 'user-002',
        blockIndex: 0,
        startOffset: 0,
        endOffset: 178,
        highlightedText: 'The U.S. Food and Drug Administration has announced a voluntary recall of select Walmart Great Value frozen vegetable products due to potential Listeria monocytogenes contamination.',
        createdAt: '2026-01-16T12:00:00Z'
      }
    ],
    comments: [
      {
        id: 'comment-004',
        userId: 'user-002',
        blockIndex: 0,
        anchorStartOffset: 0,
        anchorEndOffset: 178,
        anchorText: 'The U.S. Food and Drug Administration has announced a voluntary recall of select Walmart Great Value frozen vegetable products due to potential Listeria monocytogenes contamination.',
        content: 'Initial recall scope seems limited but this could expand. Monitor for additional SKUs.',
        createdAt: '2026-01-16T12:30:00Z',
        replies: [
          {
            id: 'reply-002',
            userId: 'user-003',
            content: 'Agreed. Listeria recalls often expand as investigation progresses.',
            createdAt: '2026-01-16T13:00:00Z'
          }
        ]
      }
    ]
  },
  {
    id: 'doc-013',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Great Value Recall Expands to 15 Products',
    excerpt: 'FDA expands Great Value recall to additional product lines.',
    url: 'https://reuters.com/business/retail/example',
    publisherId: 'pub-reuters',
    publishedDate: '2026-01-18T14:00:00Z',
    author: 'Siddharth Cavale',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
      caption: 'Great Value product recall notice'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'The FDA has expanded its recall of Walmart\'s Great Value brand products to include 15 different SKUs across frozen vegetables and salad mixes.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Three hospitalizations have been linked to the contamination, though no deaths have been reported.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Walmart has pulled all affected products from shelves and is offering full refunds. The company issued a statement expressing concern for affected customers.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-004'],
    themeIds: ['sub-009'],
    personIds: ['person-006'],
    organizationIds: ['org-001', 'org-007'],
    locationIds: ['loc-007'],
    eventIds: ['event-009'],
    factionIds: ['faction-001', 'faction-004'],
    factionMentions: {
      'faction-001': { sentiment: -0.82,
      'faction-013': { sentiment: 0.35 }
    },
      'faction-004': { sentiment: -0.70 }
    },
    metrics: { shares: 12200 },
    highlights: [
      {
        id: 'highlight-006',
        userId: 'user-003',
        blockIndex: 1,
        startOffset: 0,
        endOffset: 96,
        highlightedText: 'Three hospitalizations have been linked to the contamination, though no deaths have been reported.',
        createdAt: '2026-01-18T16:00:00Z'
      }
    ],
    comments: []
  },
  {
    id: 'doc-014',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Consumer Reports Demands Stricter Private-Label Quality Controls',
    excerpt: 'Consumer advocacy group calls for enhanced quality control measures for store-brand products.',
    url: 'https://consumerreports.org/safety/example',
    publisherId: 'pub-consumeraffairs',
    publishedDate: '2026-01-19T09:00:00Z',
    author: 'Consumer Reports Staff',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
      caption: 'Consumer Reports analysis'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Consumer Reports is calling on major retailers including Walmart to implement stricter quality control measures for private-label products following the expanded Great Value recall.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"When consumers trust a store brand, they\'re trusting the retailer\'s commitment to safety," said Marta Tellado, Consumer Reports CEO. "That trust must be earned through rigorous quality standards."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The organization is advocating for mandatory third-party audits of all private-label food suppliers.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-004'],
    themeIds: ['sub-010'],
    personIds: ['person-007', 'person-011'],
    organizationIds: ['org-001', 'org-008'],
    locationIds: [],
    eventIds: ['event-010'],
    factionIds: ['faction-004'],
    factionMentions: {
      'faction-004': { sentiment: -0.58,
      'faction-013': { sentiment: 0.35 }
    }
    },
    metrics: { shares: 5400 },
    highlights: [],
    comments: []
  },

  // Pricing narrative documents
  {
    id: 'doc-015',
    documentType: 'social_post',
    repositoryId: 'repo-osint',
    classification: 'U',
    title: 'TikTok: Walmart vs Aldi price comparison',
    excerpt: 'Viral TikTok showing item-by-item price comparison between Walmart and Aldi.',
    url: 'https://tiktok.com/@frugalmom23/video/example',
    publisherId: 'pub-tiktok',
    publishedDate: '2026-01-17T15:00:00Z',
    author: {
      username: '@frugalmom23',
      displayName: 'Frugal Mom Tips',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Let\'s compare Walmart vs Aldi for a basic grocery list! You won\'t believe the difference. #walmart #aldi #groceryshopping #savemoney #frugalliving', portionMark: { classification: 'U', handling: '' } }
    ],
    video: {
      thumbnailUrl: 'img/placeholders/video-thumbnail.svg',
      duration: 94
    },
    transcription: 'Let\'s compare Walmart vs Aldi for a basic grocery list. Milk: Walmart $3.98, Aldi $2.89. Bread: Walmart $2.48, Aldi $1.29. Eggs: Walmart $4.28, Aldi $2.99. Butter: Walmart $4.47, Aldi $3.29. Cheese: Walmart $3.98, Aldi $2.49. Ground beef: Walmart $5.97, Aldi $4.29. Chicken breast: Walmart $3.48 per pound, Aldi $2.69. Bananas: Walmart 58 cents per pound, Aldi 44 cents. Cereal: Walmart $4.28, Aldi $1.89. Orange juice: Walmart $3.98, Aldi $2.69. Total: Walmart $43.46, Aldi $29.16. That\'s over $14 in savings!',
    narrativeIds: ['narr-005'],
    themeIds: ['sub-011'],
    personIds: [],
    organizationIds: ['org-001', 'org-010'],
    locationIds: [],
    eventIds: [],
    factionIds: ['faction-001', 'faction-006'],
    factionMentions: {
      'faction-001': { sentiment: -0.72,
      'faction-007': { sentiment: -0.58 },
      'faction-016': { sentiment: -0.52 }
    },
      'faction-006': { sentiment: 0.65 }
    },
    metrics: { views: 4800000, likes: 325000, shares: 185000, comments: 52000, platform: 'tiktok' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-016',
    documentType: 'social_post',
    repositoryId: 'repo-osint',
    classification: 'U',
    title: 'X thread: Is Walmart still the low-price leader?',
    excerpt: 'Twitter thread analyzing whether Walmart still offers competitive prices.',
    url: 'https://x.com/retailwatcher/status/example',
    publisherId: 'pub-x',
    publishedDate: '2026-01-18T10:00:00Z',
    author: {
      username: '@retailwatcher',
      displayName: 'Retail Watcher',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
      caption: 'Price analysis thread'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Thread: "Did some research on Walmart\'s \'Everyday Low Prices\' claim. Compared 50 staple items across Walmart, Aldi, Costco, and Amazon."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Results: Walmart was cheapest on only 12 items. What happened to their price leadership?', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '[thread continues with data and charts]', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-005'],
    themeIds: ['sub-011'],
    personIds: [],
    organizationIds: ['org-001', 'org-010', 'org-011', 'org-004'],
    locationIds: [],
    eventIds: [],
    factionIds: ['faction-001', 'faction-006'],
    factionMentions: {
      'faction-001': { sentiment: -0.68,
      'faction-007': { sentiment: -0.58 },
      'faction-016': { sentiment: -0.52 }
    },
      'faction-006': { sentiment: 0.55 }
    },
    metrics: { views: 1850000, likes: 42000, shares: 18500, comments: 5200, platform: 'x' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-017',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Analysis: Walmart Kept Pandemic Price Increases Despite Falling Costs',
    excerpt: 'WSJ analysis shows Walmart retained elevated prices even as wholesale costs declined.',
    url: 'https://wsj.com/articles/walmart-pricing-analysis',
    publisherId: 'pub-wsj',
    publishedDate: '2026-01-17T06:00:00Z',
    author: 'Jaewon Kang',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
      caption: 'Walmart pricing analysis chart'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'A Wall Street Journal analysis of Walmart pricing data shows the retailer has maintained pandemic-era price increases on hundreds of items even as input costs have declined.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'On average, examined products remain 18% higher than 2019 levels, compared to a 12% increase in wholesale costs.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Retail analyst Sarah Nassauer notes this could threaten Walmart\'s core brand promise of everyday low prices.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-005'],
    themeIds: ['sub-012'],
    personIds: ['person-012'],
    organizationIds: ['org-001'],
    locationIds: [],
    eventIds: ['event-011'],
    factionIds: ['faction-001', 'faction-005'],
    factionMentions: {
      'faction-001': { sentiment: -0.65,
      'faction-007': { sentiment: -0.58 },
      'faction-016': { sentiment: -0.52 }
    },
      'faction-005': { sentiment: -0.48 }
    },
    metrics: { shares: 8200 },
    highlights: [
      {
        id: 'highlight-007',
        userId: 'user-001',
        blockIndex: 1,
        startOffset: 0,
        endOffset: 106,
        highlightedText: 'On average, examined products remain 18% higher than 2019 levels, compared to a 12% increase in wholesale costs.',
        createdAt: '2026-01-17T10:00:00Z'
      }
    ],
    comments: [
      {
        id: 'comment-005',
        userId: 'user-001',
        blockIndex: 1,
        anchorStartOffset: 0,
        anchorEndOffset: 106,
        anchorText: 'On average, examined products remain 18% higher than 2019 levels, compared to a 12% increase in wholesale costs.',
        content: 'This 6-point gap between price increases and cost increases is significant. Key data point for the pricing narrative.',
        createdAt: '2026-01-17T10:15:00Z',
        replies: []
      }
    ]
  },

  // Competitor pressure documents
  {
    id: 'doc-018',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Target Achieves 98% On-Time Delivery Rate',
    excerpt: 'Target announces industry-leading delivery performance metrics.',
    url: 'https://modernretail.com/target-delivery',
    publisherId: 'pub-modernretail',
    publishedDate: '2026-01-14T08:00:00Z',
    author: 'Cale Guthrie Weissman',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
      caption: 'Target delivery vehicle'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Target announced today that its same-day delivery service has achieved a 98% on-time delivery rate, leading the retail industry.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'CEO Brian Cornell attributed the success to investments in micro-fulfillment centers and last-mile logistics partnerships.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-006'],
    themeIds: ['sub-013'],
    personIds: ['person-013'],
    organizationIds: ['org-003'],
    locationIds: [],
    eventIds: ['event-012'],
    factionIds: ['faction-005', 'faction-006'],
    factionMentions: {
      'faction-005': { sentiment: 0.25,
      'faction-016': { sentiment: -0.52 }
    },
      'faction-006': { sentiment: 0.78 }
    },
    metrics: { shares: 3800 },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-019',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Amazon Expands Sub-24-Hour Delivery to 85% of US',
    excerpt: 'Amazon announces major expansion of rapid delivery coverage.',
    url: 'https://bloomberg.com/news/amazon-delivery',
    publisherId: 'pub-bloomberg',
    publishedDate: '2026-01-16T10:00:00Z',
    author: 'Spencer Soper',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
      caption: 'Amazon fulfillment center'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Amazon announced a significant expansion of its rapid delivery network, with sub-24-hour delivery now available to 85% of U.S. households.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The expansion includes new distribution centers in previously underserved markets.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Amazon CEO Andy Jassy said the investment underscores the company\'s commitment to customer convenience.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-006'],
    themeIds: ['sub-014'],
    personIds: ['person-014'],
    organizationIds: ['org-004'],
    locationIds: ['loc-008'],
    eventIds: ['event-013'],
    factionIds: ['faction-005', 'faction-006'],
    factionMentions: {
      'faction-005': { sentiment: 0.18,
      'faction-016': { sentiment: -0.52 }
    },
      'faction-006': { sentiment: 0.82 }
    },
    metrics: { shares: 5600 },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-020',
    documentType: 'social_post',
    repositoryId: 'repo-osint',
    classification: 'U',
    title: 'Reddit discussion: Comparing delivery services',
    excerpt: 'Reddit thread comparing Walmart, Amazon, and Target delivery experiences.',
    url: 'https://reddit.com/r/personalfinance/comments/delivery',
    publisherId: 'pub-reddit',
    publishedDate: '2026-01-17T12:00:00Z',
    author: {
      username: 'u/delivery_compare_2026',
      displayName: 'delivery_compare_2026',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
      caption: 'Reddit delivery discussion'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Thread: "Switched from Walmart+ to Amazon Prime after the third time Walmart substituted half my order and delivered late. Amazon hasn\'t missed a delivery yet."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Top reply: "Same experience. Walmart delivery has gone downhill badly."', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-006'],
    themeIds: ['sub-014'],
    personIds: [],
    organizationIds: ['org-001', 'org-004'],
    locationIds: [],
    eventIds: [],
    factionIds: ['faction-001', 'faction-006'],
    factionMentions: {
      'faction-001': { sentiment: -0.75,
      'faction-016': { sentiment: -0.52 }
    },
      'faction-006': { sentiment: 0.62 }
    },
    metrics: { likes: 4280, comments: 892, platform: 'reddit' },
    highlights: [],
    comments: []
  },

  // Rural closure documents
  {
    id: 'doc-021',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Missouri Town Faces "Food Desert" After Walmart Closure Announcement',
    excerpt: 'Small Missouri town will have no grocery stores after Walmart announces closure.',
    url: 'https://usatoday.com/story/news/example',
    publisherId: 'pub-usatoday',
    publishedDate: '2026-01-18T12:00:00Z',
    author: 'Nathan Bomey',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
      caption: 'Rural Walmart store exterior'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Residents of a small town in rural Missouri will need to drive 45 miles to the nearest grocery store after Walmart announced plans to close its local supercenter.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The store, which opened in 2008, had previously displaced several local grocers that have not returned.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Mayor Mary Johnson said the closure will "devastate" the community\'s elderly and low-income residents.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-007'],
    themeIds: ['sub-015'],
    personIds: ['person-016'],
    organizationIds: ['org-001', 'org-013'],
    locationIds: ['loc-009'],
    eventIds: ['event-014'],
    factionIds: ['faction-001'],
    factionMentions: {
      'faction-001': { sentiment: -0.88,
      'faction-007': { sentiment: -0.58 },
      'faction-009': { sentiment: -0.55 },
      'faction-012': { sentiment: -0.45 },
      'faction-015': { sentiment: -0.68 }
    }
    },
    metrics: { shares: 15200 },
    highlights: [
      {
        id: 'highlight-008',
        userId: 'user-002',
        blockIndex: 0,
        startOffset: 0,
        endOffset: 162,
        highlightedText: 'Residents of a small town in rural Missouri will need to drive 45 miles to the nearest grocery store after Walmart announced plans to close its local supercenter.',
        createdAt: '2026-01-18T14:00:00Z'
      }
    ],
    comments: [
      {
        id: 'comment-006',
        userId: 'user-002',
        blockIndex: 0,
        anchorStartOffset: 0,
        anchorEndOffset: 162,
        anchorText: 'Residents of a small town in rural Missouri will need to drive 45 miles to the nearest grocery store after Walmart announced plans to close its local supercenter.',
        content: 'This is the "food desert" narrative that could have significant political resonance in rural areas.',
        createdAt: '2026-01-18T14:30:00Z',
        replies: [
          {
            id: 'reply-003',
            userId: 'user-001',
            content: 'Worth monitoring how local officials respond. This could become a broader policy issue.',
            createdAt: '2026-01-18T15:00:00Z'
          }
        ]
      }
    ]
  },
  {
    id: 'doc-022',
    documentType: 'social_post',
    repositoryId: 'repo-osint',
    classification: 'U',
    title: 'Facebook: Rural community organizes protest',
    excerpt: 'Local Facebook group organizes protest against Walmart store closure.',
    url: 'https://facebook.com/groups/saveourwalmart/posts/example',
    publisherId: 'pub-facebook',
    publishedDate: '2026-01-19T08:00:00Z',
    author: {
      username: 'save.our.walmart.mo',
      displayName: 'Save Our Walmart - Missouri',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
      caption: 'Community protest event page'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Post: "PROTEST THIS SATURDAY: Meet at the Walmart parking lot at 10 AM. We cannot let them abandon our community. They put all our local stores out of business and now they\'re leaving us with nothing. Please share!"', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '[Event shows 2,400 interested]', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-007'],
    themeIds: ['sub-015'],
    personIds: ['person-017'],
    organizationIds: ['org-001'],
    locationIds: ['loc-009'],
    eventIds: ['event-014'],
    factionIds: ['faction-001'],
    factionMentions: {
      'faction-001': { sentiment: -0.92,
      'faction-007': { sentiment: -0.58 },
      'faction-009': { sentiment: -0.55 },
      'faction-012': { sentiment: -0.45 },
      'faction-015': { sentiment: -0.68 }
    }
    },
    metrics: { likes: 3850, comments: 1245, shares: 2180, platform: 'facebook' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-023',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Local Politicians Call for Walmart to Maintain Rural Stores',
    excerpt: 'State legislators urge Walmart to consider community impact of store closures.',
    url: 'https://apnews.com/article/example',
    publisherId: 'pub-ap',
    publishedDate: '2026-01-19T14:00:00Z',
    author: 'Michael Balsamo',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
      caption: 'State legislators press conference'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'A group of state legislators from Missouri and Oklahoma sent a letter to Walmart CEO Doug McMillon urging the company to reconsider planned closures of rural stores.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The letter argues that Walmart has a "moral obligation" to communities it has served, noting that many local competitors closed after Walmart\'s arrival.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"When you become the only grocery option for miles, you take on a responsibility to that community," the letter states.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-007'],
    themeIds: ['sub-016'],
    personIds: ['person-001', 'person-016'],
    organizationIds: ['org-001', 'org-013'],
    locationIds: ['loc-009', 'loc-010'],
    eventIds: [],
    factionIds: ['faction-001'],
    factionMentions: {
      'faction-001': { sentiment: -0.72,
      'faction-007': { sentiment: -0.58 },
      'faction-009': { sentiment: -0.55 },
      'faction-012': { sentiment: -0.45 },
      'faction-015': { sentiment: -0.68 }
    }
    },
    metrics: { shares: 4800 },
    highlights: [
      {
        id: 'highlight-009',
        userId: 'user-003',
        blockIndex: 1,
        startOffset: 0,
        endOffset: 138,
        highlightedText: 'The letter argues that Walmart has a "moral obligation" to communities it has served, noting that many local competitors closed after Walmart\'s arrival.',
        createdAt: '2026-01-19T16:00:00Z'
      }
    ],
    comments: []
  },

  // Historical documents: Supplier Issues, Unionization, Healthcare, Delivery (June 2025 - January 2026)
  {
    id: 'doc-024',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.reuters.com/business/great-value-supplier-violations',
    publishedDate: '2025-06-15T10:00:00Z',
    publisherId: 'pub-reuters',
    title: 'Investigation Reveals Unsafe Conditions at Great Value Supplier',
    author: 'Howard Schneider',
    contentBlocks: [
      { type: 'paragraph', content: 'An investigation has uncovered unsafe working conditions and labor violations at factories producing Walmart\'s Great Value private-label products.' },
      { type: 'paragraph', content: 'Workers described long hours, inadequate safety equipment, and pressure to meet production quotas that put their health at risk.' }
    ],
    excerpt: 'Investigation reveals labor and safety violations at Great Value supplier factories.',
    narrativeIds: ['narr-008'],
    themeIds: ['sub-017'],
    personIds: [],
    organizationIds: ['org-001'],
    locationIds: ['loc-006'],
    eventIds: ['event-015'],
    factionMentions: {
      'faction-003': { sentiment: -0.72,
      'faction-008': { sentiment: -0.62 },
      'faction-011': { sentiment: -0.72 }
    },
      'faction-004': { sentiment: -0.68 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-025',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.wsj.com/business/walmart-supply-chain-transparency',
    publishedDate: '2025-06-22T09:00:00Z',
    publisherId: 'pub-wsj',
    title: 'Walmart Faces Pressure Over Supply Chain Transparency',
    author: 'Sarah Nassauer',
    contentBlocks: [
      { type: 'paragraph', content: 'Walmart is facing growing pressure from consumer advocacy groups to improve transparency in its supply chain following revelations about supplier labor violations.' },
      { type: 'paragraph', content: 'Critics argue that Walmart\'s aggressive price demands create conditions for worker exploitation.' }
    ],
    excerpt: 'Consumer groups demand greater transparency in Walmart supply chain.',
    narrativeIds: ['narr-008'],
    themeIds: ['sub-017', 'sub-018'],
    personIds: [],
    organizationIds: ['org-001'],
    locationIds: ['loc-006'],
    eventIds: [],
    factionMentions: {
      'faction-003': { sentiment: -0.65,
      'faction-008': { sentiment: -0.62 },
      'faction-011': { sentiment: -0.72 }
    },
      'faction-005': { sentiment: -0.42 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-026',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.bloomberg.com/business/ftc-retail-supply-chain-inquiry',
    publishedDate: '2025-07-01T14:00:00Z',
    publisherId: 'pub-bloomberg',
    title: 'FTC Opens Inquiry Into Retail Supply Chain Practices',
    author: 'David McLaughlin',
    contentBlocks: [
      { type: 'paragraph', content: 'The Federal Trade Commission has opened an inquiry into retail supply chain practices, with Walmart among the companies being examined.' },
      { type: 'paragraph', content: 'FTC Chair Lina Khan said the agency is examining whether price pressures contribute to supplier labor violations.' }
    ],
    excerpt: 'FTC opens inquiry into Walmart and other retailers\' supply chain practices.',
    narrativeIds: ['narr-008'],
    themeIds: ['sub-018'],
    personIds: ['person-022'],
    organizationIds: ['org-018', 'org-001'],
    locationIds: ['loc-006'],
    eventIds: ['event-016'],
    factionMentions: {
      'faction-004': { sentiment: 0.55,
      'faction-008': { sentiment: -0.62 },
      'faction-011': { sentiment: -0.72 }
    },
      'faction-005': { sentiment: -0.48 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-027',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://apnews.com/article/walmart-fulfillment-workers-union',
    publishedDate: '2025-07-20T11:00:00Z',
    publisherId: 'pub-ap',
    title: 'Walmart Fulfillment Workers in Texas Seek Union Vote',
    author: 'Anne D\'Innocenzio',
    contentBlocks: [
      { type: 'paragraph', content: 'Workers at a Walmart e-commerce fulfillment center in Dallas have filed for a union election, citing concerns about working conditions and wages.' },
      { type: 'paragraph', content: 'The Retail, Wholesale and Department Store Union is supporting the organizing effort.' }
    ],
    excerpt: 'Walmart fulfillment workers in Texas file for union election.',
    narrativeIds: ['narr-009'],
    themeIds: ['sub-019'],
    personIds: ['person-020'],
    organizationIds: ['org-016', 'org-001'],
    locationIds: ['loc-011'],
    eventIds: ['event-017'],
    factionMentions: {
      'faction-002': { sentiment: 0.72,
      'faction-010': { sentiment: -0.25 },
      'faction-011': { sentiment: -0.72 }
    },
      'faction-003': { sentiment: 0.78 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-028',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.usatoday.com/story/money/warehouse-workers-organizing',
    publishedDate: '2025-07-28T10:00:00Z',
    publisherId: 'pub-usatoday',
    title: 'Why Warehouse Workers Are Organizing in Record Numbers',
    author: 'Charisse Jones',
    contentBlocks: [
      { type: 'paragraph', content: 'Warehouse and fulfillment center workers across the country are organizing at record rates, following the Amazon Labor Union\'s landmark victory.' },
      { type: 'paragraph', content: 'Labor experts say the pandemic highlighted the essential nature of warehouse work while exposing difficult conditions.' }
    ],
    excerpt: 'Analysis: Warehouse workers organize at record rates across the country.',
    narrativeIds: ['narr-009'],
    themeIds: ['sub-019', 'sub-020'],
    personIds: ['person-021'],
    organizationIds: ['org-016', 'org-017'],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-002': { sentiment: 0.68,
      'faction-010': { sentiment: -0.25 },
      'faction-011': { sentiment: -0.72 }
    },
      'faction-003': { sentiment: 0.75 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-029',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.wsj.com/health/walmart-healthcare-rural-expansion',
    publishedDate: '2025-08-05T09:00:00Z',
    publisherId: 'pub-wsj',
    title: 'Walmart Bets Big on Healthcare as Rural Hospitals Struggle',
    author: 'Sharon Terlep',
    contentBlocks: [
      { type: 'paragraph', content: 'Walmart is expanding its healthcare clinic network into rural communities that have lost hospitals, offering primary care, dental, and mental health services.' },
      { type: 'paragraph', content: 'The company says it can provide care at prices 40% below market rates by leveraging its store infrastructure.' }
    ],
    excerpt: 'Walmart expands healthcare clinics into underserved rural communities.',
    narrativeIds: ['narr-010'],
    themeIds: ['sub-021'],
    personIds: ['person-023'],
    organizationIds: ['org-019'],
    locationIds: ['loc-001', 'loc-009'],
    eventIds: ['event-018'],
    factionMentions: {
      'faction-001': { sentiment: 0.45,
      'faction-012': { sentiment: -0.45 },
      'faction-013': { sentiment: 0.35 },
      'faction-015': { sentiment: -0.68 }
    },
      'faction-004': { sentiment: 0.52 },
      'faction-005': { sentiment: 0.58 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-030',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://localnews.example.com/walmart-health-rural-missouri',
    publishedDate: '2025-08-15T11:00:00Z',
    publisherId: 'pub-localnews',
    title: 'Can Walmart Fill the Rural Healthcare Gap?',
    author: 'Jennifer Martinez',
    contentBlocks: [
      { type: 'paragraph', content: 'In rural Missouri, where the nearest hospital is 45 minutes away, residents are welcoming a new Walmart Health clinic.' },
      { type: 'paragraph', content: 'But some healthcare advocates question whether corporate healthcare can adequately serve vulnerable populations.' }
    ],
    excerpt: 'Rural community weighs pros and cons of Walmart healthcare expansion.',
    narrativeIds: ['narr-010'],
    themeIds: ['sub-021', 'sub-022'],
    personIds: [],
    organizationIds: ['org-019'],
    locationIds: ['loc-009'],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: 0.55,
      'faction-012': { sentiment: -0.45 },
      'faction-013': { sentiment: 0.35 },
      'faction-015': { sentiment: -0.68 }
    },
      'faction-004': { sentiment: 0.48 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-031',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://consumeraffairs.com/walmart-healthcare-motives',
    publishedDate: '2025-08-25T10:00:00Z',
    publisherId: 'pub-consumeraffairs',
    title: 'Critics Question Walmart\'s Healthcare Motives',
    author: 'Mark Huffman',
    contentBlocks: [
      { type: 'paragraph', content: 'Consumer advocacy groups are questioning Walmart\'s motives in expanding healthcare services, suggesting profit rather than community service drives the initiative.' },
      { type: 'paragraph', content: 'Critics point to the company\'s history of closing unprofitable stores regardless of community impact.' }
    ],
    excerpt: 'Consumer groups question Walmart\'s healthcare expansion motives.',
    narrativeIds: ['narr-010'],
    themeIds: ['sub-022'],
    personIds: [],
    organizationIds: ['org-019', 'org-021'],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: -0.35,
      'faction-012': { sentiment: -0.45 },
      'faction-013': { sentiment: 0.35 },
      'faction-015': { sentiment: -0.68 }
    },
      'faction-004': { sentiment: 0.42 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-032',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.reuters.com/business/union-vote-fails-walmart-texas',
    publishedDate: '2025-09-15T19:00:00Z',
    publisherId: 'pub-reuters',
    title: 'Union Vote Fails at Texas Walmart Fulfillment Center',
    author: 'Howard Schneider',
    contentBlocks: [
      { type: 'paragraph', content: 'Workers at a Walmart fulfillment center in Dallas voted against union representation in a closely watched election.' },
      { type: 'paragraph', content: 'Union organizers blamed Walmart\'s aggressive anti-union campaign for the defeat but vowed to continue organizing efforts.' }
    ],
    excerpt: 'Walmart fulfillment center workers in Texas vote against union.',
    narrativeIds: ['narr-009'],
    themeIds: ['sub-020'],
    personIds: ['person-020'],
    organizationIds: ['org-016', 'org-001'],
    locationIds: ['loc-011'],
    eventIds: ['event-019'],
    factionMentions: {
      'faction-002': { sentiment: -0.65,
      'faction-010': { sentiment: -0.25 },
      'faction-011': { sentiment: -0.72 }
    },
      'faction-003': { sentiment: -0.72 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-033',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://apnews.com/article/walmart-union-workers-vow-continue',
    publishedDate: '2025-09-18T10:00:00Z',
    publisherId: 'pub-ap',
    title: 'Workers Vow to Continue Organizing Despite Setback',
    author: 'Anne D\'Innocenzio',
    contentBlocks: [
      { type: 'paragraph', content: 'Following their defeat in Dallas, Walmart warehouse workers say they will continue their organizing campaign at other facilities.' },
      { type: 'paragraph', content: 'RWDSU leader Stuart Appelbaum said the close vote shows significant worker support for unionization.' }
    ],
    excerpt: 'Walmart fulfillment workers vow to continue organizing after Texas defeat.',
    narrativeIds: ['narr-009'],
    themeIds: ['sub-019'],
    personIds: ['person-020'],
    organizationIds: ['org-016'],
    locationIds: ['loc-011'],
    eventIds: [],
    factionMentions: {
      'faction-002': { sentiment: 0.58,
      'faction-010': { sentiment: -0.25 },
      'faction-011': { sentiment: -0.72 }
    },
      'faction-003': { sentiment: 0.65 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-034',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.bloomberg.com/business/walmart-anti-union-tactics',
    publishedDate: '2025-09-25T14:00:00Z',
    publisherId: 'pub-bloomberg',
    title: 'Walmart\'s Anti-Union Tactics Come Under Scrutiny',
    author: 'Matthew Boyle',
    contentBlocks: [
      { type: 'paragraph', content: 'Labor advocates are calling for an investigation into Walmart\'s anti-union tactics following the company\'s defeat of an organizing effort in Texas.' },
      { type: 'paragraph', content: 'Workers described mandatory meetings where managers warned about the dangers of unionization.' }
    ],
    excerpt: 'Labor groups call for investigation into Walmart anti-union tactics.',
    narrativeIds: ['narr-009'],
    themeIds: ['sub-020'],
    personIds: [],
    organizationIds: ['org-001', 'org-016'],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-002': { sentiment: -0.72,
      'faction-010': { sentiment: -0.25 },
      'faction-011': { sentiment: -0.72 }
    },
      'faction-003': { sentiment: -0.78 },
      'faction-005': { sentiment: -0.35 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-035',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.usatoday.com/story/money/walmart-second-union-vote',
    publishedDate: '2025-10-01T11:00:00Z',
    publisherId: 'pub-usatoday',
    title: 'Second Walmart Fulfillment Center Files for Union Election',
    author: 'Charisse Jones',
    contentBlocks: [
      { type: 'paragraph', content: 'Workers at a Walmart e-commerce fulfillment center in Atlanta have filed for a union election, the second such effort at the retail giant this year.' },
      { type: 'paragraph', content: 'Organizers say they have learned from the Texas campaign and are better prepared for Walmart\'s opposition.' }
    ],
    excerpt: 'Atlanta Walmart fulfillment center files for union election.',
    narrativeIds: ['narr-009'],
    themeIds: ['sub-019'],
    personIds: ['person-020', 'person-025'],
    organizationIds: ['org-016', 'org-006'],
    locationIds: ['loc-003'],
    eventIds: ['event-020'],
    factionMentions: {
      'faction-002': { sentiment: 0.72,
      'faction-010': { sentiment: -0.25 },
      'faction-011': { sentiment: -0.72 }
    },
      'faction-003': { sentiment: 0.75 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-036',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://localnews.example.com/walmart-health-15-new-clinics',
    publishedDate: '2025-10-15T10:00:00Z',
    publisherId: 'pub-localnews',
    title: 'Walmart Health Opens 15 New Clinics in Underserved Areas',
    author: 'Jennifer Martinez',
    contentBlocks: [
      { type: 'paragraph', content: 'Walmart Health opened 15 new clinics in rural communities across the South and Midwest, bringing healthcare services to areas that have lost local hospitals.' },
      { type: 'paragraph', content: 'The clinics offer primary care, dental services, and mental health counseling at prices significantly below market rates.' }
    ],
    excerpt: 'Walmart Health opens 15 clinics in underserved rural communities.',
    narrativeIds: ['narr-010'],
    themeIds: ['sub-021'],
    personIds: ['person-023'],
    organizationIds: ['org-019'],
    locationIds: ['loc-009', 'loc-010'],
    eventIds: ['event-021'],
    factionMentions: {
      'faction-001': { sentiment: 0.62,
      'faction-012': { sentiment: -0.45 },
      'faction-013': { sentiment: 0.35 },
      'faction-015': { sentiment: -0.68 }
    },
      'faction-004': { sentiment: 0.55 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-037',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://apnews.com/article/rural-communities-walmart-healthcare',
    publishedDate: '2025-10-25T14:00:00Z',
    publisherId: 'pub-ap',
    title: 'Rural Communities Embrace Walmart Healthcare Expansion',
    author: 'Michelle Price',
    contentBlocks: [
      { type: 'paragraph', content: 'Rural residents across the South are embracing Walmart\'s healthcare expansion, with many saying the clinics fill a critical gap left by closed hospitals.' },
      { type: 'paragraph', content: 'Local officials say any healthcare is better than none, even as some question long-term sustainability.' }
    ],
    excerpt: 'Rural communities welcome Walmart healthcare amid hospital closures.',
    narrativeIds: ['narr-010'],
    themeIds: ['sub-021', 'sub-022'],
    personIds: [],
    organizationIds: ['org-019'],
    locationIds: ['loc-009', 'loc-010'],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: 0.68,
      'faction-012': { sentiment: -0.45 },
      'faction-013': { sentiment: 0.35 },
      'faction-015': { sentiment: -0.68 }
    },
      'faction-004': { sentiment: 0.52 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-038',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.wsj.com/business/walmart-black-friday-delivery-chaos',
    publishedDate: '2025-11-29T18:00:00Z',
    publisherId: 'pub-wsj',
    title: 'Black Friday Online Sales Surge Overwhelms Walmart Delivery',
    author: 'Sarah Nassauer',
    contentBlocks: [
      { type: 'paragraph', content: 'Walmart\'s delivery system buckled under record Black Friday online sales, with thousands of customers reporting delayed or missing orders.' },
      { type: 'paragraph', content: 'The company said it was working to resolve issues but could not guarantee delivery times for orders placed over the weekend.' }
    ],
    excerpt: 'Walmart delivery system overwhelmed by Black Friday demand.',
    narrativeIds: ['narr-011'],
    themeIds: ['sub-023'],
    personIds: ['person-018', 'person-019'],
    organizationIds: ['org-001'],
    locationIds: ['loc-001'],
    eventIds: ['event-022'],
    factionMentions: {
      'faction-001': { sentiment: -0.72,
      'faction-014': { sentiment: -0.65 },
      'faction-016': { sentiment: -0.52 }
    },
      'faction-005': { sentiment: -0.65 },
      'faction-006': { sentiment: 0.48 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-039',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://x.com/example/status/walmart-orders-stuck',
    publishedDate: '2025-11-30T10:00:00Z',
    publisherId: 'pub-x',
    title: 'Thousands of Walmart Orders Stuck in Transit [Social Media Thread]',
    author: '@frustrated_shopper',
    contentBlocks: [
      { type: 'paragraph', content: 'Thread: My Walmart Black Friday order has been "in transit" for 4 days with no updates. Hundreds of replies showing same issue. @Walmart customer service unreachable. #WalmartFail' }
    ],
    excerpt: 'Social media thread documents widespread Walmart delivery failures.',
    narrativeIds: ['narr-011'],
    themeIds: ['sub-023'],
    personIds: [],
    organizationIds: ['org-001'],
    locationIds: [],
    eventIds: ['event-022'],
    factionMentions: {
      'faction-001': { sentiment: -0.82,
      'faction-014': { sentiment: -0.65 },
      'faction-016': { sentiment: -0.52 }
    }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-040',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.reuters.com/business/walmart-ceo-apology-delivery',
    publishedDate: '2025-12-05T11:00:00Z',
    publisherId: 'pub-reuters',
    title: 'Walmart CEO Apologizes for Holiday Delivery Failures',
    author: 'Siddharth Cavale',
    contentBlocks: [
      { type: 'paragraph', content: 'Walmart CEO Doug McMillon apologized for widespread delivery failures that left thousands of customers without their holiday orders.' },
      { type: 'paragraph', content: 'The company announced it would provide refunds and gift cards to affected customers, but critics said the response was insufficient.' }
    ],
    excerpt: 'Walmart CEO apologizes for widespread holiday delivery failures.',
    narrativeIds: ['narr-011'],
    themeIds: ['sub-023', 'sub-024'],
    personIds: ['person-001', 'person-018'],
    organizationIds: ['org-001'],
    locationIds: ['loc-001'],
    eventIds: ['event-023'],
    factionMentions: {
      'faction-001': { sentiment: -0.58,
      'faction-014': { sentiment: -0.65 },
      'faction-016': { sentiment: -0.52 }
    },
      'faction-005': { sentiment: -0.42 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-041',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://www.tiktok.com/example/walmart-gift-late',
    publishedDate: '2025-12-10T15:00:00Z',
    publisherId: 'pub-tiktok',
    title: 'Customer Fury Mounts as Walmart Gifts Arrive Late [Viral Video]',
    author: '@holiday_disaster',
    contentBlocks: [
      { type: 'paragraph', content: 'Viral TikTok shows parent opening empty box that was supposed to contain children\'s Christmas presents from Walmart. Video has 2.5M views. Comments filled with similar stories.' }
    ],
    excerpt: 'Viral video shows Walmart delivery failures impacting holiday gifts.',
    narrativeIds: ['narr-011'],
    themeIds: ['sub-023'],
    personIds: [],
    organizationIds: ['org-001'],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: -0.85,
      'faction-014': { sentiment: -0.65 },
      'faction-016': { sentiment: -0.52 }
    }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-042',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://consumeraffairs.com/ftc-complaint-walmart-delivery',
    publishedDate: '2025-12-15T14:00:00Z',
    publisherId: 'pub-consumeraffairs',
    title: 'Consumer Groups File FTC Complaint Over Walmart Delivery',
    author: 'Mark Huffman',
    contentBlocks: [
      { type: 'paragraph', content: 'Consumer advocacy groups have filed an FTC complaint alleging Walmart made delivery promises it couldn\'t keep during the holiday season.' },
      { type: 'paragraph', content: 'The complaint seeks investigation into whether Walmart\'s advertising was deceptive.' }
    ],
    excerpt: 'Consumer groups file FTC complaint over Walmart delivery promises.',
    narrativeIds: ['narr-011'],
    themeIds: ['sub-024'],
    personIds: ['person-007', 'person-022'],
    organizationIds: ['org-008', 'org-018'],
    locationIds: ['loc-006'],
    eventIds: ['event-024'],
    factionMentions: {
      'faction-001': { sentiment: 0.62,
      'faction-014': { sentiment: -0.65 },
      'faction-016': { sentiment: -0.52 }
    },
      'faction-004': { sentiment: 0.72 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-043',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.retaildive.com/walmart-delivery-system-failure',
    publishedDate: '2025-12-20T10:00:00Z',
    publisherId: 'pub-retaildive',
    title: 'How Walmart\'s Delivery System Failed During Peak Season',
    author: 'Ben Unglesbee',
    contentBlocks: [
      { type: 'paragraph', content: 'A Retail Dive analysis examines how Walmart\'s delivery infrastructure collapsed under holiday demand, causing widespread failures.' },
      { type: 'paragraph', content: 'Industry experts say the company underestimated online order volume and overcommitted on delivery promises.' }
    ],
    excerpt: 'Analysis: How Walmart\'s delivery system failed during peak season.',
    narrativeIds: ['narr-011'],
    themeIds: ['sub-023', 'sub-024'],
    personIds: ['person-026'],
    organizationIds: ['org-001', 'org-022'],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-005': { sentiment: -0.52,
      'faction-014': { sentiment: -0.65 },
      'faction-016': { sentiment: -0.52 }
    },
      'faction-006': { sentiment: 0.45 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-044',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.bloomberg.com/walmart-500m-delivery-investment',
    publishedDate: '2025-12-28T09:00:00Z',
    publisherId: 'pub-bloomberg',
    title: 'Walmart Announces $500M Investment in Delivery Infrastructure',
    author: 'Matthew Boyle',
    contentBlocks: [
      { type: 'paragraph', content: 'Walmart announced a $500 million investment to upgrade its delivery infrastructure following widespread holiday season failures.' },
      { type: 'paragraph', content: 'The investment will expand fulfillment capacity and improve logistics technology.' }
    ],
    excerpt: 'Walmart pledges $500M investment to fix delivery infrastructure.',
    narrativeIds: ['narr-011'],
    themeIds: ['sub-024'],
    personIds: ['person-001', 'person-019'],
    organizationIds: ['org-001'],
    locationIds: ['loc-001'],
    eventIds: ['event-025'],
    factionMentions: {
      'faction-001': { sentiment: 0.35,
      'faction-014': { sentiment: -0.65 },
      'faction-016': { sentiment: -0.52 }
    },
      'faction-005': { sentiment: 0.58 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-045',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://x.com/example/status/walmart-still-failing',
    publishedDate: '2026-01-02T14:00:00Z',
    publisherId: 'pub-x',
    title: 'Walmart Delivery Still Struggling as New Year Begins [Social Media]',
    author: '@still_waiting',
    contentBlocks: [
      { type: 'paragraph', content: 'Still waiting for my Dec 15 Walmart order. Customer service says "we\'re working on it." This company has completely lost my trust. Anyone else still stuck? #NeverAgainWalmart' }
    ],
    excerpt: 'Social media shows continued Walmart delivery issues into January.',
    narrativeIds: ['narr-011'],
    themeIds: ['sub-023'],
    personIds: [],
    organizationIds: ['org-001'],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: -0.72,
      'faction-014': { sentiment: -0.65 },
      'faction-016': { sentiment: -0.52 }
    }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-046',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.reuters.com/business/walmart-atlanta-union-victory',
    publishedDate: '2026-01-10T19:00:00Z',
    publisherId: 'pub-reuters',
    title: 'Historic: Atlanta Walmart Fulfillment Center Votes to Unionize',
    author: 'Howard Schneider',
    contentBlocks: [
      { type: 'paragraph', content: 'Workers at a Walmart e-commerce fulfillment center in Atlanta voted to join the RWDSU, marking the first successful union at a Walmart warehouse.' },
      { type: 'paragraph', content: 'Union leaders called the victory "a watershed moment for retail workers across America."' }
    ],
    excerpt: 'Atlanta Walmart fulfillment center becomes first to unionize.',
    narrativeIds: ['narr-009'],
    themeIds: ['sub-019'],
    personIds: ['person-020', 'person-025'],
    organizationIds: ['org-016', 'org-001'],
    locationIds: ['loc-003'],
    eventIds: ['event-026'],
    factionMentions: {
      'faction-002': { sentiment: 0.85,
      'faction-010': { sentiment: -0.25 },
      'faction-011': { sentiment: -0.72 }
    },
      'faction-003': { sentiment: 0.88 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-047',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.wsj.com/business/atlanta-union-vote-retail-impact',
    publishedDate: '2026-01-12T10:00:00Z',
    publisherId: 'pub-wsj',
    title: 'What the Atlanta Union Vote Means for Retail Workers',
    author: 'Sarah Nassauer',
    contentBlocks: [
      { type: 'paragraph', content: 'The successful union vote at Walmart\'s Atlanta fulfillment center could have ripple effects across the retail industry.' },
      { type: 'paragraph', content: 'Labor experts say the victory may inspire organizing efforts at other warehouses and retail facilities.' }
    ],
    excerpt: 'Analysis: Implications of first Walmart warehouse union victory.',
    narrativeIds: ['narr-009'],
    themeIds: ['sub-020'],
    personIds: ['person-020'],
    organizationIds: ['org-016', 'org-001'],
    locationIds: ['loc-003'],
    eventIds: ['event-026'],
    factionMentions: {
      'faction-002': { sentiment: 0.72,
      'faction-010': { sentiment: -0.25 },
      'faction-011': { sentiment: -0.72 }
    },
      'faction-003': { sentiment: 0.78 },
      'faction-005': { sentiment: -0.35 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-048',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.bloomberg.com/walmart-new-worker-benefits',
    publishedDate: '2026-01-15T11:00:00Z',
    publisherId: 'pub-bloomberg',
    title: 'Walmart Responds to Union Victory With New Worker Benefits',
    author: 'Matthew Boyle',
    contentBlocks: [
      { type: 'paragraph', content: 'Following the historic union victory in Atlanta, Walmart announced new worker benefits including higher minimum wages and improved scheduling flexibility.' },
      { type: 'paragraph', content: 'Critics called the move an attempt to discourage further organizing by addressing worker concerns preemptively.' }
    ],
    excerpt: 'Walmart announces new benefits following Atlanta union victory.',
    narrativeIds: ['narr-009', 'narr-003'],
    themeIds: ['sub-008', 'sub-019'],
    personIds: ['person-001'],
    organizationIds: ['org-001', 'org-016'],
    locationIds: ['loc-001'],
    eventIds: [],
    factionMentions: {
      'faction-002': { sentiment: 0.45,
      'faction-010': { sentiment: -0.25 },
      'faction-011': { sentiment: -0.72 }
    },
      'faction-003': { sentiment: 0.52 }
    },
    highlights: [],
    comments: []
  }
];
