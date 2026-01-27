/**
 * Documents for Walmart Brand dataset
 * Includes news articles, social posts, and internal documents
 */

export const documents = [
  // Self-checkout narrative documents
  {
    id: 'doc-001',
    documentType: 'social_post',
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
    metrics: { likes: 15420, comments: 2850, platform: 'reddit' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-003',
    documentType: 'news_article',
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
    metrics: { shares: 5800 },
    highlights: [],
    comments: []
  },

  // Empty shelves narrative documents
  {
    id: 'doc-005',
    documentType: 'social_post',
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
    metrics: { views: 2500000, likes: 45000, shares: 18500, comments: 8200, platform: 'x' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-006',
    documentType: 'social_post',
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
    metrics: { likes: 458, comments: 127, shares: 35, platform: 'facebook' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-007',
    documentType: 'news_article',
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
    metrics: { views: 5200000, likes: 385000, shares: 125000, comments: 42000, platform: 'tiktok' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-009',
    documentType: 'social_post',
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
    metrics: { likes: 8750, comments: 1420, platform: 'reddit' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-010',
    documentType: 'news_article',
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
    metrics: { shares: 2800 },
    highlights: [],
    comments: []
  },

  // Great Value recall documents
  {
    id: 'doc-012',
    documentType: 'news_article',
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
    metrics: { shares: 5400 },
    highlights: [],
    comments: []
  },

  // Pricing narrative documents
  {
    id: 'doc-015',
    documentType: 'social_post',
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
    metrics: { views: 4800000, likes: 325000, shares: 185000, comments: 52000, platform: 'tiktok' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-016',
    documentType: 'social_post',
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
    metrics: { views: 1850000, likes: 42000, shares: 18500, comments: 5200, platform: 'x' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-017',
    documentType: 'news_article',
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
    metrics: { shares: 3800 },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-019',
    documentType: 'news_article',
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
    metrics: { shares: 5600 },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-020',
    documentType: 'social_post',
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
    metrics: { likes: 4280, comments: 892, platform: 'reddit' },
    highlights: [],
    comments: []
  },

  // Rural closure documents
  {
    id: 'doc-021',
    documentType: 'news_article',
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
    metrics: { likes: 3850, comments: 1245, shares: 2180, platform: 'facebook' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-023',
    documentType: 'news_article',
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
  }
];
