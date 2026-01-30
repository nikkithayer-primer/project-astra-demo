/**
 * Documents for American Politics dataset
 * Includes news articles, social posts, and internal documents
 */

export const documents = [
  // Greenland/Trump narrative documents (narr-005)
  {
    id: 'doc-001',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Macron warns of world where "international law is trampled" in Davos speech',
    url: 'https://reuters.com/world/macron-davos-trump-greenland-2026',
    publishedDate: '2026-01-20T10:30:00Z',
    publisherId: 'pub-int-reuters',
    author: 'Jean-Baptiste Vey',
    excerpt: 'French President Emmanuel Macron delivered a thinly veiled critique of President Trump\'s foreign policy at the World Economic Forum, warning of dangerous precedents being set.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'French President Emmanuel Macron addresses the World Economic Forum in Davos, Switzerland. Photo: Reuters/Denis Balibouse'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'French President Emmanuel Macron delivered a thinly veiled critique of President Trump\'s foreign policy at the World Economic Forum on Monday, warning of a world where "international law is trampled under foot" and urging European leaders to resist the pressure.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"We cannot accept a world where the law of the strongest prevails," Macron said during his keynote address in Davos, Switzerland. "When leaders start questioning the territorial integrity of sovereign nations, we are on a dangerous path."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The remarks come amid escalating tensions over President Trump\'s renewed interest in acquiring Greenland, a semi-autonomous Danish territory. Trump has made several public statements suggesting the United States should have control over the strategically located island.', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'A Coordinated European Response', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Macron\'s speech appeared to be part of a coordinated European response to the Greenland situation. European Commission President Ursula von der Leyen, who spoke at the same forum, echoed similar themes about defending "rules-based international order."', portionMark: { classification: 'U', handling: '' } },
      { type: 'quote', content: '"Europe must be prepared to defend its interests and its values, even when—perhaps especially when—they are challenged by our closest allies."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The French president also emphasized the need for European nations to develop greater strategic autonomy, particularly in defense and energy. "We have relied too long on others for our security," Macron said. "The events of recent weeks should be a wake-up call."', portionMark: { classification: 'U', handling: '' } },
      { type: 'image', imageUrl: 'http://static.photos/cityscape/640x360/142', caption: 'World leaders gathered at the Congress Centre in Davos for the annual World Economic Forum.' },
      { type: 'heading', content: 'Washington Dismisses Criticism', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The White House did not immediately respond to Macron\'s remarks. However, sources close to the administration told Reuters that President Trump views European criticism as "predictable posturing" that will not affect his policy decisions.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Republican lawmakers largely rallied behind the president. Senator Tom Cotton of Arkansas called Macron\'s speech "the usual European hand-wringing" and said the U.S. has legitimate security interests in the Arctic region.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Democratic leaders, however, expressed concern about the administration\'s approach. Senate Minority Leader Chuck Schumer called the Greenland situation "an unnecessary crisis that damages our relationships with our oldest allies."', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-005'],
    themeIds: ['sub-009'],
    personIds: ['person-003', 'person-004'],
    organizationIds: ['org-009'],
    locationIds: ['loc-005'],
    eventIds: ['event-006'],
    tagIds: ['tag-003'],
    factionMentions: {
      'faction-001': { sentiment: -0.35,
      'faction-009': { sentiment: 0.82 },
      'faction-010': { sentiment: 0.35 }
    },
      'faction-002': { sentiment: 0.55 }
    },
    metrics: { shares: 45200 },
    highlights: [
      {
        id: 'highlight-001',
        userId: 'user-002',
        blockIndex: 0,
        startOffset: 167,
        endOffset: 223,
        highlightedText: '"international law is trampled under foot"',
        createdAt: '2026-01-20T14:30:00Z'
      },
      {
        id: 'highlight-002',
        userId: 'user-003',
        blockIndex: 4,
        startOffset: 0,
        endOffset: 142,
        highlightedText: 'Macron\'s speech appeared to be part of a coordinated European response to the Greenland situation.',
        createdAt: '2026-01-20T15:45:00Z'
      },
      {
        id: 'highlight-003',
        userId: 'user-004',
        blockIndex: 9,
        startOffset: 56,
        endOffset: 150,
        highlightedText: 'President Trump views European criticism as "predictable posturing"',
        createdAt: '2026-01-20T16:12:00Z'
      }
    ],
    comments: [
      {
        id: 'comment-001',
        userId: 'user-002',
        blockIndex: 4,
        anchorStartOffset: 0,
        anchorEndOffset: 98,
        anchorText: 'Macron\'s speech appeared to be part of a coordinated European response to the Greenland situation.',
        content: 'This matches what we\'re seeing in the SIGINT reports from yesterday. The coordination appears to have started at least 48 hours before Davos.',
        createdAt: '2026-01-20T15:50:00Z',
        replies: [
          {
            id: 'reply-001',
            userId: 'user-001',
            content: 'Good catch. Can you pull those reports for the briefing tomorrow?',
            createdAt: '2026-01-20T16:05:00Z'
          },
          {
            id: 'reply-002',
            userId: 'user-002',
            content: 'Already on it. I\'ll have a summary ready by EOD.',
            createdAt: '2026-01-20T16:12:00Z'
          }
        ]
      },
      {
        id: 'comment-002',
        userId: 'user-006',
        blockIndex: 10,
        anchorStartOffset: 0,
        anchorEndOffset: 87,
        anchorText: 'Republican lawmakers largely rallied behind the president. Senator Tom Cotton of Arkansas',
        content: 'We should track which senators are taking which positions. This could be useful for the congressional liaison team.',
        createdAt: '2026-01-20T17:30:00Z',
        replies: []
      }
    ]
  },
  {
    id: 'doc-002',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Trump posts private Macron message on social media: "I do not understand what you are doing"',
    url: 'https://cnn.com/politics/trump-macron-greenland-message',
    publishedDate: '2026-01-20T12:15:00Z',
    publisherId: 'pub-nat-cnn',
    author: 'Kevin Liptak and Betsy Klein',
    excerpt: 'President Trump shared what appeared to be a private diplomatic message from French President Macron questioning his Greenland acquisition strategy.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'President Trump\'s Truth Social post displaying what appears to be a private message from President Macron.'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'President Donald Trump on Monday shared what appeared to be a private diplomatic message from French President Emmanuel Macron, in an extraordinary breach of protocol that has sent shockwaves through diplomatic circles.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The message, posted on Trump\'s Truth Social account, showed Macron writing: "Donald, I do not understand what you are doing with this Greenland business. This is not how allies treat each other. Please call me so we can discuss."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Trump captioned the post: "Can you believe this guy? France is a mess, Paris is burning, and he wants to lecture ME about how to do deals? Maybe focus on your own problems, Emmanuel!"', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Unprecedented Diplomatic Breach', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Former diplomats expressed alarm at the disclosure. "This is simply unprecedented," said Richard Haass, former president of the Council on Foreign Relations. "No world leader will trust private communications with the United States after this."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The Élysée Palace declined to comment on the authenticity of the message but issued a terse statement saying France "remains committed to the transatlantic relationship and will continue to engage through appropriate diplomatic channels."', portionMark: { classification: 'U', handling: '' } },
      { type: 'quote', content: '"What world leader would now send a candid message to the White House knowing it could end up on social media? This fundamentally damages our ability to conduct diplomacy." — Former Ambassador to NATO', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'White House Response', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'White House Press Secretary Karoline Leavitt defended the president\'s action, saying Trump "believes in transparency with the American people" and that Macron\'s message demonstrated European leaders\' "hysterical" reaction to legitimate American interests.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"The president is not going to be lectured by foreign leaders about what\'s best for America," Leavitt said during the daily briefing. "If President Macron wants to have a private conversation, perhaps he should be more respectful."', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-005'],
    themeIds: ['sub-010'],
    personIds: ['person-003', 'person-004'],
    organizationIds: [],
    locationIds: ['loc-001'],
    eventIds: ['event-007'],
    tagIds: ['tag-002'],
    factionMentions: {
      'faction-001': { sentiment: -0.48,
      'faction-009': { sentiment: 0.82 },
      'faction-010': { sentiment: 0.35 }
    },
      'faction-002': { sentiment: 0.62 }
    },
    metrics: { shares: 128500 },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-003',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Von der Leyen calls for "new form of European independence" amid Trump tensions',
    url: 'https://bbc.com/news/world-europe-von-der-leyen-independence',
    publishedDate: '2026-01-20T14:00:00Z',
    publisherId: 'pub-int-bbc',
    author: 'Katya Adler',
    excerpt: 'European Commission President Ursula von der Leyen said the EU must develop greater autonomy in response to "geopolitical shocks" from across the Atlantic.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'European Commission President Ursula von der Leyen delivers her address at the World Economic Forum.'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'European Commission President Ursula von der Leyen called for a "new form of European independence" on Monday, as tensions between the European Union and the United States reach their highest point in decades.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Speaking at the World Economic Forum in Davos just hours after French President Macron\'s pointed remarks, von der Leyen said Europe must reduce its dependence on American security guarantees and develop its own capabilities.', portionMark: { classification: 'U', handling: '' } },
      { type: 'quote', content: '"For too long, we have assumed that the post-war order would remain stable. Recent events have shown us that assumption was naive. Europe must now chart its own course."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The Commission President outlined a series of proposals aimed at strengthening European autonomy, including increased defense spending, accelerated energy transition, and closer coordination on foreign policy.', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Defense and Security', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Von der Leyen announced plans to present a new European Defense Initiative at next month\'s EU summit. The proposal would include a 500 billion euro fund for joint military procurement and the creation of a rapid reaction force independent of NATO structures.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"We are not abandoning NATO," she emphasized. "But we must be prepared for scenarios where we need to act on our own. The Greenland situation has made that abundantly clear."', portionMark: { classification: 'U', handling: '' } },
      { type: 'image', imageUrl: 'http://static.photos/cityscape/640x360/142', caption: 'EU and member state flags fly outside the European Commission headquarters in Brussels.' },
      { type: 'heading', content: 'Mixed Reactions', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The proposals received a mixed reception from EU member states. France and Germany expressed strong support, while Poland and the Baltic states warned against undermining the transatlantic alliance.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Polish Foreign Minister Radosław Sikorski cautioned that "Europe cannot defend itself without the United States, and we should not pretend otherwise. Our focus should be on repairing the relationship, not replacing it."', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-005'],
    themeIds: ['sub-011'],
    personIds: ['person-005'],
    organizationIds: ['org-008'],
    locationIds: ['loc-005'],
    eventIds: ['event-009'],
    tagIds: ['tag-001'],
    factionMentions: {
      'faction-001': { sentiment: -0.42,
      'faction-009': { sentiment: 0.82 },
      'faction-010': { sentiment: 0.35 }
    },
      'faction-002': { sentiment: 0.58 }
    },
    metrics: { shares: 38700 },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-004',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Greenland PM: "We demand respect for the world order"',
    url: 'https://guardian.com/world/greenland-pm-trump-response',
    publishedDate: '2026-01-20T13:30:00Z',
    publisherId: 'pub-int-guardian',
    author: 'Jon Henley',
    excerpt: 'Greenland\'s Prime Minister Múte Bourup Egede responded forcefully to Trump\'s acquisition threats, calling for respect of international norms.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'Greenland\'s Prime Minister Múte Bourup Egede addresses reporters in Nuuk. Photo: Ritzau Scanpix'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Greenland\'s Prime Minister Múte Bourup Egede delivered a defiant response to President Trump\'s renewed push to acquire the autonomous Danish territory, declaring that Greenlanders "are not for sale" and demanding respect for international law.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Speaking at a press conference in Nuuk, Egede said Trump\'s statements were "deeply disrespectful" to Greenland\'s 57,000 residents and represented a dangerous precedent for small nations everywhere.', portionMark: { classification: 'U', handling: '' } },
      { type: 'quote', content: '"We are a people with our own identity, our own culture, our own aspirations. We are not a piece of real estate to be bought and sold. We demand respect for the world order that protects the sovereignty of all nations, large and small."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The prime minister\'s remarks came after Trump posted on social media that the United States "needs Greenland for national security purposes" and that "one way or another, we will get it."', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Independence Movement Gains Momentum', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Ironically, Trump\'s pressure appears to be accelerating Greenland\'s long-term goal of independence from Denmark. Egede, who leads the pro-independence Inuit Ataqatigiit party, said recent events had "strengthened our resolve."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"We will decide our own future," he said. "Not Washington, not Copenhagen. Greenlanders will determine the path of Greenland."', portionMark: { classification: 'U', handling: '' } },
      { type: 'image', imageUrl: 'http://static.photos/cityscape/640x360/142', caption: 'Protesters in Nuuk hold signs opposing American acquisition of Greenland.' },
      { type: 'heading', content: 'Danish Support', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Danish Prime Minister Mette Frederiksen reaffirmed Denmark\'s support for Greenland\'s self-determination. "Greenland belongs to the Greenlandic people," she said in a statement. "Denmark will always support their right to decide their own future."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The Danish government has recalled its ambassador to Washington for "consultations" and summoned the U.S. ambassador to Copenhagen to explain the administration\'s position.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Meanwhile, the Arctic Council, of which both the U.S. and Denmark are members, announced an emergency session to discuss "recent statements that threaten regional stability."', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-005'],
    themeIds: ['sub-011'],
    personIds: ['person-006', 'person-003'],
    organizationIds: [],
    locationIds: ['loc-006'],
    eventIds: ['event-008'],
    factionMentions: {
      'faction-001': { sentiment: -0.52,
      'faction-009': { sentiment: 0.82 },
      'faction-010': { sentiment: 0.35 }
    },
      'faction-002': { sentiment: 0.48 }
    },
    metrics: { shares: 52300 },
    highlights: [],
    comments: []
  },

  // Minnesota immigration documents (narr-006)
  {
    id: 'doc-005',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    tagIds: ['tag-001'],
    title: 'DOJ plans subpoenas for Minnesota AG, governor over ICE protest "obstruction"',
    url: 'https://nytimes.com/2026/01/20/us/politics/doj-minnesota-subpoenas',
    publishedDate: '2026-01-20T11:00:00Z',
    publisherId: 'pub-nat-nyt',
    author: 'Charlie Savage and Miriam Jordan',
    excerpt: 'The Department of Justice announced plans to subpoena Minnesota\'s top officials in an escalating confrontation over immigration enforcement.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'Minnesota Attorney General Keith Ellison speaks at a press conference about federal immigration enforcement. Photo: Star Tribune'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'The Department of Justice announced Monday that it plans to issue subpoenas to Minnesota Attorney General Keith Ellison and Governor Tim Walz, accusing them of obstructing federal immigration enforcement in Minneapolis.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The announcement marks a dramatic escalation in the standoff between the Trump administration and state officials who have resisted aggressive Immigration and Customs Enforcement operations in their jurisdictions.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"State officials who interfere with federal law enforcement will be held accountable," Attorney General Pam Bondi said in a statement. "We will not tolerate sanctuary policies that endanger American communities."', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'State Officials Vow to Fight', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Attorney General Ellison responded defiantly, calling the subpoenas "a politically motivated attack on the people of Minnesota" and vowing to challenge them in court.', portionMark: { classification: 'U', handling: '' } },
      { type: 'quote', content: '"We will not be intimidated by federal overreach. Minnesota will continue to protect the constitutional rights of all our residents, regardless of immigration status."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Governor Walz, speaking at an unrelated event in St. Paul, said the state would "vigorously defend" its policies. "We are a nation of laws, and that includes the Constitution, which protects due process for everyone," he said.', portionMark: { classification: 'U', handling: '' } },
      { type: 'image', imageUrl: 'http://static.photos/cityscape/640x360/142', caption: 'Protesters gather outside the federal building in Minneapolis to oppose ICE operations.' },
      { type: 'heading', content: 'Legal Experts Divided', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Constitutional law experts are divided on the legality of the DOJ\'s actions. Some argue that state officials have a legitimate role in setting local law enforcement priorities, while others contend that immigration enforcement is an exclusively federal function.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"This is uncharted territory," said Ilya Shapiro, a constitutional scholar at the Manhattan Institute. "The courts will ultimately have to decide where state sovereignty ends and federal supremacy begins."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The confrontation has drawn comparisons to the civil rights era, when the federal government clashed with state officials over desegregation. However, in this case, the federal government is seeking to compel state cooperation rather than override discriminatory state policies.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-006'],
    themeIds: ['sub-012'],
    personIds: ['person-007'],
    organizationIds: ['org-010'],
    locationIds: ['loc-002'],
    eventIds: ['event-010'],
    factionMentions: {
      'faction-001': { sentiment: 0.68,
      'faction-008': { sentiment: -0.72 },
      'faction-013': { sentiment: -0.58 }
    },
      'faction-002': { sentiment: -0.75 },
      'faction-003': { sentiment: -0.82 },
      'faction-004': { sentiment: 0.58 }
    },
    metrics: { shares: 67800 },
    highlights: [
      {
        id: 'highlight-004',
        userId: 'user-006',
        blockIndex: 2,
        startOffset: 1,
        endOffset: 115,
        highlightedText: '"State officials who interfere with federal law enforcement will be held accountable," Attorney General Pam Bondi said',
        createdAt: '2026-01-20T13:00:00Z'
      },
      {
        id: 'highlight-005',
        userId: 'user-002',
        blockIndex: 5,
        startOffset: 1,
        endOffset: 155,
        highlightedText: '"We will not be intimidated by federal overreach. Minnesota will continue to protect the constitutional rights of all our residents, regardless of immigration status."',
        createdAt: '2026-01-20T14:22:00Z'
      }
    ],
    comments: [
      {
        id: 'comment-003',
        userId: 'user-004',
        blockIndex: 9,
        anchorStartOffset: 1,
        anchorEndOffset: 50,
        anchorText: '"This is uncharted territory," said Ilya Shapiro',
        content: 'We should add Shapiro to our expert tracker. He\'s been quoted in several pieces on this topic and could be a useful source.',
        createdAt: '2026-01-20T14:45:00Z',
        replies: [
          {
            id: 'reply-003',
            userId: 'user-005',
            content: 'He testified before Congress on federalism issues last year. I can pull that transcript if helpful.',
            createdAt: '2026-01-20T15:00:00Z'
          },
          {
            id: 'reply-004',
            userId: 'user-004',
            content: 'Yes please. Also interested in any prior writings on state-federal conflicts.',
            createdAt: '2026-01-20T15:08:00Z'
          },
          {
            id: 'reply-005',
            userId: 'user-001',
            content: 'I\'ve added him to the entity list with a note about his expertise. @agarcia can you flag relevant prior writings?',
            createdAt: '2026-01-20T15:30:00Z'
          }
        ]
      },
      {
        id: 'comment-004',
        userId: 'user-003',
        blockIndex: 11,
        anchorStartOffset: 0,
        anchorEndOffset: 90,
        anchorText: 'The confrontation has drawn comparisons to the civil rights era, when the federal government',
        content: 'Interesting framing but the analogy is imperfect. Worth noting in our analysis that the federal role is reversed here.',
        createdAt: '2026-01-20T16:20:00Z',
        replies: []
      }
    ]
  },
  {
    id: 'doc-006',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    tagIds: ['tag-002'],
    title: 'Federal judge rules protesters cannot be arrested without cause, DOJ appeals',
    url: 'https://washingtonpost.com/national/minnesota-ice-ruling-appeal',
    publishedDate: '2026-01-20T09:45:00Z',
    publisherId: 'pub-nat-wapo',
    author: 'Devlin Barrett and Maria Sacchetti',
    excerpt: 'A federal judge issued an injunction protecting peaceful protesters from arrest by federal agents, but the DOJ immediately filed an appeal.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'Protesters gather outside the Minneapolis Federal Building following the court ruling. Photo: Washington Post'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'A federal judge in Minnesota issued an emergency injunction Monday barring federal agents from arresting peaceful protesters without probable cause, delivering a sharp rebuke to the Trump administration\'s aggressive immigration enforcement tactics.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'U.S. District Judge Wilhelmina Wright ruled that the government had not demonstrated a compelling interest in detaining individuals engaged in lawful First Amendment activity, even during immigration enforcement operations.', portionMark: { classification: 'U', handling: '' } },
      { type: 'quote', content: '"The Constitution does not cease to apply because the government invokes immigration enforcement. Peaceful protest is protected speech, and agents cannot arrest citizens simply for being present at a demonstration."', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'DOJ Files Immediate Appeal', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The Department of Justice filed an emergency appeal within hours of the ruling, arguing that the injunction would "severely hamper" federal law enforcement operations and create "dangerous precedent" for limiting executive authority.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'In their filing, government lawyers argued that federal agents must have broad discretion to maintain order during enforcement operations, and that distinguishing between "protesters" and potential threats in real-time is impractical.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The Eighth Circuit Court of Appeals has scheduled an expedited hearing for Wednesday, with both sides expecting a ruling by the end of the week.', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Civil Liberties Groups Celebrate', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The ACLU of Minnesota, which brought the lawsuit on behalf of several arrested protesters, called the ruling "a victory for the Constitution and the right of all Americans to peacefully assemble."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"This administration has treated peaceful protesters as enemy combatants," said ACLU attorney Teresa Nelson. "Today\'s ruling reminds them that they cannot suspend the Bill of Rights simply by declaring an immigration emergency."', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-006', 'narr-009'],
    themeIds: ['sub-013'],
    personIds: ['person-017'],
    organizationIds: ['org-010', 'org-011'],
    locationIds: ['loc-002'],
    eventIds: ['event-011'],
    factionMentions: {
      'faction-001': { sentiment: 0.72,
      'faction-008': { sentiment: -0.72 },
      'faction-013': { sentiment: -0.58 },
      'faction-009': { sentiment: 0.65 }
    },
      'faction-002': { sentiment: -0.78 },
      'faction-003': { sentiment: -0.85 },
      'faction-004': { sentiment: 0.62 }
    },
    metrics: { shares: 54200 },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-007',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    tagIds: ['tag-001'],
    title: 'FBI pivots civil rights probe from ICE agent to slain protester Renee Good',
    url: 'https://msnbc.com/news/fbi-renee-good-investigation-pivot',
    publishedDate: '2026-01-18T16:00:00Z',
    publisherId: 'pub-nat-msnbc',
    author: 'Julia Ainsley',
    excerpt: 'Critics are outraged after learning the FBI\'s investigation into the fatal shooting has shifted focus from the agent to the victim and her widow.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'A memorial for Renee Good at the site where she was killed during a protest in Minneapolis.'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'The FBI has shifted the focus of its civil rights investigation into the fatal shooting of protester Renee Good, pivoting from examining the actions of the ICE agent who killed her to investigating the victim and her widow, according to three people familiar with the matter.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The move has sparked outrage among civil rights advocates and Democratic lawmakers, who say the Justice Department is using the investigation to intimidate protesters rather than ensure accountability for law enforcement.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Good, 34, was shot and killed on January 17 during a protest against ICE operations in Minneapolis. Video footage from multiple angles shows she was unarmed and had her hands raised when the agent opened fire.', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Investigation Takes Unexpected Turn', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Sources familiar with the investigation say FBI agents have been interviewing Good\'s colleagues, friends, and family members—not to gather information about the shooting, but to build a profile of her political activities and associations.', portionMark: { classification: 'U', handling: '' } },
      { type: 'quote', content: '"They asked me about her social media posts, what protests she had attended, whether she had ever advocated violence. They\'re trying to make her the criminal when she was the victim." — Friend of Renee Good', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Good\'s widow, Sarah Good, has also been contacted by FBI agents seeking information about her wife\'s "known associations" with activist groups. Through her attorney, Sarah Good declined to be interviewed.', portionMark: { classification: 'U', handling: '' } },
      { type: 'image', imageUrl: 'http://static.photos/cityscape/640x360/142', caption: 'Community members hold a vigil for Renee Good outside the Minneapolis Federal Building.' },
      { type: 'heading', content: 'DOJ Defends Investigation', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'A Justice Department spokesperson defended the investigation\'s scope, saying it would be "inappropriate to comment on specific investigative steps" but that all relevant facts were being examined.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"A thorough investigation requires examining all circumstances surrounding the incident," the spokesperson said. "We will follow the evidence wherever it leads."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The ICE agent who shot Good has been placed on administrative leave pending the outcome of the investigation. His identity has not been publicly released.', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Civil Rights Groups Respond', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The ACLU of Minnesota called the investigation\'s new direction "a perversion of justice" and announced plans to file a lawsuit on behalf of the Good family.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"When the government investigates murder victims instead of killers, we have lost our way as a nation," said ACLU-MN Executive Director John Gordon. "Renee Good was exercising her First Amendment rights when she was killed by a federal agent. That agent should be the focus of any investigation."', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-006'],
    themeIds: ['sub-015'],
    personIds: ['person-008'],
    organizationIds: ['org-011', 'org-012'],
    locationIds: ['loc-002'],
    eventIds: ['event-013', 'event-014'],
    factionMentions: {
      'faction-001': { sentiment: 0.65,
      'faction-008': { sentiment: -0.72 },
      'faction-013': { sentiment: -0.58 }
    },
      'faction-002': { sentiment: -0.82 },
      'faction-003': { sentiment: -0.88 },
      'faction-004': { sentiment: 0.55 }
    },
    metrics: { shares: 89400 },
    highlights: [],
    comments: []
  },

  // Church protest documents (narr-008)
  {
    id: 'doc-008',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    tagIds: ['tag-002'],
    title: 'Protesters disrupt service at church where ICE official serves as pastor',
    url: 'https://cnn.com/us/minnesota-church-ice-protest',
    publishedDate: '2026-01-19T14:30:00Z',
    publisherId: 'pub-nat-cnn',
    author: 'Omar Jimenez and Ashley Killough',
    excerpt: 'Anti-ICE demonstrators interrupted Sunday worship at Cities Church in St. Paul, targeting David Easterwood who serves dual roles as ICE official and pastor.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'Protesters hold signs outside Cities Church in St. Paul during Sunday services. Photo: CNN'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Anti-ICE protesters disrupted Sunday worship services at Cities Church in St. Paul, Minnesota, confronting congregants and demanding accountability from David Easterwood, a senior ICE official who also serves as an associate pastor at the church.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The demonstration, organized by local immigrant rights groups, saw approximately 50 protesters enter the church sanctuary during the morning service, chanting "No worship for deporters" and displaying photos of families separated at the border.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Video footage from the incident shows Easterwood attempting to continue the service as protesters surrounded the pulpit. The demonstration lasted approximately 15 minutes before church security and local police escorted the protesters outside.', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Easterwood\'s Dual Role Under Scrutiny', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Easterwood has served as an associate pastor at Cities Church for eight years while simultaneously working as a Deputy Director of ICE\'s Enforcement and Removal Operations. His dual roles have drawn criticism from immigrant advocacy groups who question how someone can preach Christian values while overseeing deportation operations.', portionMark: { classification: 'U', handling: '' } },
      { type: 'quote', content: '"How can you stand at that pulpit on Sunday and talk about loving your neighbor, and then on Monday send agents to tear families apart? There is no reconciling those two things." — Protest organizer Maria Santos', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Cities Church released a statement calling the protest "a violation of our sacred space" and defending Easterwood as "a man of deep faith who serves his community and his country with integrity."', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Federal Response Swift', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The Department of Justice announced within hours that it was opening an investigation into whether the protest violated the Freedom of Access to Clinic Entrances (FACE) Act, which also protects houses of worship from obstruction.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Attorney General Pam Bondi condemned the protest in a statement, saying the administration would "use the full force of federal law to protect Christians from intimidation and harassment."', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-008'],
    themeIds: ['sub-021'],
    personIds: ['person-014', 'person-015'],
    organizationIds: ['org-016', 'org-011'],
    locationIds: ['loc-008'],
    eventIds: ['event-017'],
    factionMentions: {
      'faction-001': { sentiment: 0.72,
      'faction-008': { sentiment: -0.68 },
      'faction-013': { sentiment: -0.58 },
      'faction-014': { sentiment: 0.38 }
    },
      'faction-002': { sentiment: -0.68 },
      'faction-003': { sentiment: -0.75 },
      'faction-004': { sentiment: 0.65 }
    },
    metrics: { shares: 73500 },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-009',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    tagIds: ['tag-003'],
    title: 'AG Bondi announces FACE Act investigation: "Full force of federal law"',
    url: 'https://foxnews.com/politics/bondi-face-act-church-protest',
    publishedDate: '2026-01-19T19:00:00Z',
    publisherId: 'pub-nat-fox',
    author: 'Bill Melugin',
    excerpt: 'Attorney General Pam Bondi declared that attacks against law enforcement and intimidation of Christians will be prosecuted to the fullest extent.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'Attorney General Pam Bondi speaks at a press conference at the Department of Justice. Photo: Fox News'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Attorney General Pam Bondi announced Sunday evening that the Department of Justice is opening a federal investigation into protesters who disrupted church services in St. Paul, Minnesota, warning that "attacks on Christians and law enforcement will not be tolerated."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Speaking at an impromptu press conference at DOJ headquarters, Bondi said the protest at Cities Church may have violated the Freedom of Access to Clinic Entrances (FACE) Act, which makes it a federal crime to obstruct access to places of religious worship.', portionMark: { classification: 'U', handling: '' } },
      { type: 'quote', content: '"Let me be clear: this administration will use the full force of federal law to protect religious freedom and to defend the men and women who keep our communities safe. These agitators crossed a line today, and they will be held accountable."', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'FACE Act Charges Carry Serious Penalties', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The FACE Act, originally passed in 1994 to protect abortion clinics from violent protesters, was amended in 2021 to include enhanced protections for houses of worship. Violations can carry penalties of up to one year in prison for first offenses, and up to three years for repeat offenders or if bodily injury occurs.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Bondi indicated that federal prosecutors are reviewing video footage from the protest to identify participants who may face charges. She declined to specify how many individuals are being investigated.', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Critics Question Selective Enforcement', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Civil liberties groups accused the administration of selectively applying the FACE Act to target political opponents while ignoring violations against other communities.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"The FACE Act was designed to protect all houses of worship equally," said ACLU National Legal Director David Cole. "But this administration has shown no interest in applying it when mosques or synagogues are targeted. This is political prosecution dressed up as religious freedom."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Bondi dismissed the criticism as "desperate deflection" and said the DOJ would "prosecute all violations of federal law, regardless of the victim\'s faith."', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-008'],
    themeIds: ['sub-018'],
    personIds: ['person-013', 'person-012'],
    organizationIds: ['org-010'],
    locationIds: ['loc-001'],
    eventIds: ['event-018'],
    factionMentions: {
      'faction-001': { sentiment: 0.75,
      'faction-008': { sentiment: -0.68 },
      'faction-013': { sentiment: -0.58 },
      'faction-014': { sentiment: 0.38 }
    },
      'faction-002': { sentiment: -0.72 },
      'faction-003': { sentiment: -0.78 },
      'faction-004': { sentiment: 0.68 }
    },
    metrics: { shares: 42100 },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-010',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    tagIds: ['tag-001'],
    title: 'DOJ threatens charges against journalist Don Lemon for covering protest',
    url: 'https://guardian.com/media/don-lemon-doj-threat-minnesota',
    publishedDate: '2026-01-20T13:00:00Z',
    publisherId: 'pub-int-guardian',
    author: 'Ed Pilkington',
    excerpt: 'Assistant AG Harmeet Dhillon said Lemon is "on notice" and cannot use journalism as a shield, prompting press freedom concerns.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'CNN anchor Don Lemon reports from outside Cities Church during the protest. Photo: Guardian/Getty'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'The Department of Justice threatened Monday to bring charges against CNN anchor Don Lemon for his presence at a church protest in Minnesota, with Assistant Attorney General Harmeet Dhillon warning that journalists "cannot use press credentials as a shield" from federal prosecution.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Lemon was reporting live from Cities Church in St. Paul on Sunday when protesters disrupted services targeting an ICE official who serves as pastor. Video shows Lemon standing outside the church interviewing protesters, not entering the building.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'In an interview with Fox News, Dhillon said Lemon is "on notice" that his activities are being reviewed by federal prosecutors. "Being a journalist doesn\'t give you immunity to participate in criminal activity," she said. "If you\'re aiding and abetting, you can be charged."', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Press Freedom Organizations Sound Alarm', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The Committee to Protect Journalists called the threat "an alarming escalation in this administration\'s war on the press" and demanded that the DOJ immediately clarify that reporting on protests is protected First Amendment activity.', portionMark: { classification: 'U', handling: '' } },
      { type: 'quote', content: '"Threatening to prosecute a journalist for covering a news event is authoritarianism, plain and simple. This is the kind of thing we see in Russia and China, not the United States." — CPJ Executive Director Jodie Ginsberg', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'CNN issued a strongly worded statement defending Lemon, saying he "was doing his job as a journalist, reporting on a newsworthy event" and that the network would "vigorously defend" him against any charges.', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Lemon Responds', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Lemon addressed the threats during his Monday evening broadcast, saying he would not be intimidated. "I was standing on a public sidewalk doing my job. If that\'s now a crime in America, then we have much bigger problems than anything I reported on yesterday."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'He noted that multiple other journalists were present at the protest without facing similar threats, suggesting the administration was targeting him specifically due to his critical coverage of immigration enforcement.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-008'],
    themeIds: ['sub-019'],
    personIds: ['person-012', 'person-016'],
    organizationIds: ['org-010'],
    locationIds: ['loc-008'],
    eventIds: ['event-019'],
    factionMentions: {
      'faction-001': { sentiment: 0.58,
      'faction-008': { sentiment: -0.68 },
      'faction-013': { sentiment: -0.58 },
      'faction-014': { sentiment: 0.38 }
    },
      'faction-002': { sentiment: -0.75 },
      'faction-003': { sentiment: -0.82 },
      'faction-004': { sentiment: 0.52 }
    },
    metrics: { shares: 156800 },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-011',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    tagIds: ['tag-003'],
    title: 'Truth Social post: Trump responds to Minnesota church protest',
    excerpt: 'Former President Trump calls church protesters "professional troublemakers" and demands "LAW AND ORDER" in response to Minnesota demonstration.',
    url: 'https://truthsocial.com/@realDonaldTrump/posts/123456789',
    publishedDate: '2026-01-21T06:30:00Z',
    publisherId: 'pub-x',
    author: {
      username: '@realDonaldTrump',
      displayName: 'Donald J. Trump',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'The agitators and insurrectionists who disrupted a Church Service in Minnesota are highly trained, and should be thrown in jail, or thrown out of the Country. They are not "protesters," they are professional troublemakers who are destroying our Country. LAW AND ORDER!', portionMark: { classification: 'U', handling: '' } }
    ],
    metrics: {
      comments: 45821,
      likes: 187432,
      shares: 52847,
      platform: 'x'
    },
    narrativeIds: ['narr-008'],
    themeIds: ['sub-020'],
    personIds: ['person-003'],
    organizationIds: [],
    locationIds: ['loc-001'],
    eventIds: ['event-020'],
    factionMentions: {
      'faction-001': { sentiment: 0.82,
      'faction-008': { sentiment: -0.68 },
      'faction-013': { sentiment: -0.58 },
      'faction-014': { sentiment: 0.38 }
    },
      'faction-002': { sentiment: -0.65 },
      'faction-003': { sentiment: -0.72 },
      'faction-004': { sentiment: 0.75 }
    },
    metrics: { views: 8500000, shares: 52847 },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-012',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    tagIds: ['tag-002'],
    title: 'Former NAACP president: "How can anyone who claims to be Christian condone this?"',
    url: 'https://cnn.com/us/nekima-levy-armstrong-ice-pastor-interview',
    publishedDate: '2026-01-20T10:00:00Z',
    publisherId: 'pub-nat-cnn',
    author: 'Sara Sidner',
    excerpt: 'Nekima Levy Armstrong questioned the moral standing of an ICE official serving as a pastor while overseeing immigration enforcement.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'Nekima Levy Armstrong speaks at a press conference following the church protest. Photo: CNN'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Nekima Levy Armstrong, former president of the Minneapolis NAACP and one of the organizers of Sunday\'s church protest, defended the demonstration in an exclusive interview with CNN, questioning how David Easterwood reconciles his faith with his work overseeing deportations.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"How can anyone who claims to be Christian condone the separation of families? How can you preach about loving your neighbor while sending agents to drag people from their homes in the middle of the night?" Levy Armstrong asked.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The civil rights attorney and activist said the protest was intended to highlight what she called the "moral contradiction" of Easterwood\'s dual roles as ICE official and pastor at Cities Church.', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'A Question of Moral Authority', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Levy Armstrong, who holds a law degree from the University of Illinois and previously worked as a civil rights attorney, said the protest was peaceful and that demonstrators deliberately chose not to physically disrupt the service beyond their presence.', portionMark: { classification: 'U', handling: '' } },
      { type: 'quote', content: '"We walked in, we stood there, we held our signs, and we asked a simple question: How do you justify this? That\'s not violence. That\'s not intimidation. That\'s accountability."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'She dismissed the DOJ\'s FACE Act investigation as "political theater" designed to intimidate protesters and said she was prepared to face any charges.', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Easterwood\'s Record Under Examination', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'According to documents obtained by immigrant advocacy groups, Easterwood has overseen enforcement operations that resulted in the deportation of more than 15,000 individuals during his tenure, including parents of U.S. citizen children.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"This isn\'t abstract policy," Levy Armstrong said. "These are real families being destroyed by someone who then stands at a pulpit and talks about Christian love. The hypocrisy is staggering."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Cities Church has not responded to requests for comment on Easterwood\'s specific role in deportation operations.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-008'],
    themeIds: ['sub-021'],
    personIds: ['person-015', 'person-014'],
    organizationIds: ['org-018', 'org-016'],
    locationIds: ['loc-008'],
    eventIds: ['event-017'],
    factionMentions: {
      'faction-001': { sentiment: -0.45,
      'faction-008': { sentiment: -0.68 },
      'faction-013': { sentiment: -0.58 },
      'faction-014': { sentiment: 0.38 }
    },
      'faction-002': { sentiment: 0.68 },
      'faction-003': { sentiment: 0.72 },
      'faction-004': { sentiment: -0.38 }
    },
    metrics: { shares: 38900 },
    highlights: [],
    comments: []
  },

  // Indiana judge shooting documents (narr-007)
  {
    id: 'doc-013',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    tagIds: ['tag-001'],
    title: 'Indiana judge and wife shot at home; suspect at large',
    url: 'https://cnn.com/us/indiana-judge-steven-meyer-shooting',
    publishedDate: '2026-01-19T18:00:00Z',
    publisherId: 'pub-nat-cnn',
    author: 'Eric Levenson and Ray Sanchez',
    excerpt: 'Tippecanoe Superior Court Judge Steven Meyer and his wife Kimberly were shot Sunday afternoon. Both are in stable condition as agencies search for the suspect.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'Law enforcement vehicles line the street outside Judge Steven Meyer\'s residence in Lafayette, Indiana. Photo: CNN affiliate WLFI'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Tippecanoe Superior Court Judge Steven Meyer and his wife Kimberly were shot Sunday afternoon at their home in Lafayette, Indiana, in what authorities are calling a targeted attack. Both victims are in stable condition at a local hospital.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The shooter fled the scene and remains at large, prompting a massive manhunt involving multiple law enforcement agencies, including the FBI and U.S. Marshals Service. Authorities have issued a shelter-in-place advisory for nearby residents.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The Tippecanoe County Sheriff\'s Office said the shooting occurred around 2:30 p.m. when a suspect approached the Meyer residence and opened fire. Neighbors reported hearing multiple gunshots before seeing a figure flee on foot.', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Judge\'s Recent Cases Under Review', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Investigators are examining Judge Meyer\'s recent cases for potential motives. Meyer has presided over several high-profile criminal cases in recent months, including drug trafficking and violent crime cases that resulted in significant prison sentences.', portionMark: { classification: 'U', handling: '' } },
      { type: 'quote', content: '"At this time, we are treating this as a targeted attack on a sitting judge. We are reviewing all recent cases and known threats, and we urge anyone with information to contact law enforcement immediately." — Tippecanoe County Sheriff Bob Goldsmith', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Meyer, 58, has served on the Tippecanoe Superior Court for 12 years and is known for his strict sentencing in violent crime cases.', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Increased Security for Indiana Judges', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'In the wake of the shooting, the Indiana State Police announced they would provide additional security for judges across the state. Indiana Supreme Court Chief Justice Loretta Rush is expected to address the incident in a statement Monday.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The attack comes amid growing concerns about violence against judicial officials nationwide. According to the U.S. Marshals Service, threats against federal judges have increased more than 400% over the past five years.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-007'],
    themeIds: ['sub-016'],
    personIds: ['person-009', 'person-010'],
    organizationIds: ['org-013', 'org-015'],
    locationIds: ['loc-007'],
    eventIds: ['event-015'],
    factionMentions: {
      'faction-001': { sentiment: -0.32,
      'faction-010': { sentiment: 0.35 },
      'faction-012': { sentiment: 0.42 }
    },
      'faction-002': { sentiment: -0.65 },
      'faction-004': { sentiment: -0.55 }
    },
    metrics: { shares: 95200 },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-014',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    tagIds: ['tag-002'],
    title: 'Indiana Chief Justice to judges: "Please remain vigilant in your own security"',
    url: 'https://indystar.com/news/indiana-chief-justice-judges-security-warning',
    publishedDate: '2026-01-20T11:30:00Z',
    publisherId: 'pub-nat-nyt',
    author: 'Kaitlin Lange',
    excerpt: 'Chief Justice Loretta H. Rush sent an urgent letter to all state judges expressing concern about violence targeting the judiciary.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'Indiana Supreme Court Chief Justice Loretta H. Rush. Photo: Indianapolis Star file'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Indiana Supreme Court Chief Justice Loretta H. Rush sent an urgent letter Monday to all state judges warning them to "remain vigilant" about their personal security in the wake of Sunday\'s shooting of Tippecanoe Superior Court Judge Steven Meyer.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The letter, obtained by the Indianapolis Star, expressed "deep concern" about the attack and announced immediate steps to enhance security for Indiana\'s roughly 400 state court judges.', portionMark: { classification: 'U', handling: '' } },
      { type: 'quote', content: '"The attack on Judge Meyer and his wife is a stark reminder that those who serve on the bench face real dangers. I urge all of you to please remain vigilant in your own security, both at work and at home. Do not take any threat lightly."', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'New Security Measures Announced', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Rush announced that the Indiana Office of Court Services would immediately begin conducting security assessments for judges who request them, including evaluations of their homes and vehicles.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The state will also expedite the installation of security cameras and panic buttons in courthouses that lack them, and will provide personal safety training for judges and their families.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"We cannot allow those who would use violence to intimidate the judiciary to succeed," Rush wrote. "Our courts must continue to function, and justice must be served."', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'National Pattern of Threats', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The attack on Meyer follows a troubling pattern of violence and threats against judicial officials across the country. In 2020, a gunman shot and killed the son of New Jersey federal judge Esther Salas at her home in what authorities said was a targeted attack.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Rush noted that Indiana judges have reported a significant increase in threats over the past year, particularly in cases involving custody disputes and criminal sentencing.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"Judges make difficult decisions that affect people\'s lives," Rush wrote. "While most accept these decisions, some respond with anger and, increasingly, with threats. We must be prepared."', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-007'],
    themeIds: ['sub-017'],
    personIds: ['person-011'],
    organizationIds: ['org-014'],
    locationIds: ['loc-007'],
    eventIds: ['event-016'],
    factionMentions: {
      'faction-001': { sentiment: -0.38,
      'faction-010': { sentiment: 0.35 },
      'faction-012': { sentiment: 0.42 }
    },
      'faction-002': { sentiment: -0.72 },
      'faction-004': { sentiment: -0.62 }
    },
    metrics: { shares: 28700 },
    highlights: [],
    comments: []
  },

  // Legal battles documents (narr-009)
  {
    id: 'doc-015',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    tagIds: ['tag-003'],
    title: 'Judge allows DHS to require week notice for congressional facility inspections',
    url: 'https://politico.com/news/dhs-congressional-inspection-notice-ruling',
    publishedDate: '2026-01-20T14:30:00Z',
    publisherId: 'pub-nat-nyt',
    author: 'Josh Gerstein',
    excerpt: 'Federal judge Jia Cobb ruled DHS can continue blocking no-notice inspections despite blocking a similar policy last month.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'The U.S. District Court for the District of Columbia. Photo: Politico'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'A federal judge ruled Monday that the Department of Homeland Security can require congressional members to provide one week\'s notice before inspecting immigration detention facilities, a decision that critics say will allow the agency to hide conditions from oversight.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'U.S. District Judge Jia Cobb rejected a lawsuit filed by Democratic members of Congress who argued the notice requirement violated their constitutional authority to conduct oversight of executive branch agencies.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The ruling marks a significant victory for the Trump administration, which has sought to limit congressional access to detention facilities amid reports of overcrowding and inadequate medical care.', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Judge Cites Security Concerns', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'In her ruling, Judge Cobb said DHS had demonstrated legitimate security concerns that justified the notice requirement. "Detention facilities present unique security challenges," she wrote. "Unannounced visits by large delegations could disrupt operations and potentially compromise safety."', portionMark: { classification: 'U', handling: '' } },
      { type: 'quote', content: '"While Congress has broad oversight authority, that authority is not unlimited. The executive branch retains reasonable discretion to manage access to sensitive facilities."', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Democrats Vow Appeal', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Representative Alexandria Ocasio-Cortez, one of the plaintiffs, said the ruling would be appealed and accused the judge of enabling the administration\'s "cover-up" of conditions at detention facilities.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"When they have a week to prepare for our visits, they can clean up the facilities, move detainees, and hide evidence of abuse," Ocasio-Cortez said. "This ruling makes meaningful oversight impossible."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'DHS Secretary Kristi Noem welcomed the ruling, saying it would allow facilities to maintain "appropriate security protocols" while still permitting congressional oversight.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-009'],
    themeIds: ['sub-022'],
    personIds: ['person-025', 'person-021', 'person-022', 'person-023'],
    organizationIds: ['org-017', 'org-020'],
    locationIds: ['loc-009'],
    eventIds: ['event-021', 'event-022'],
    factionMentions: {
      'faction-001': { sentiment: 0.75,
      'faction-009': { sentiment: 0.78 },
      'faction-013': { sentiment: -0.58 }
    },
      'faction-002': { sentiment: -0.82 },
      'faction-003': { sentiment: -0.78 },
      'faction-004': { sentiment: 0.62 }
    },
    metrics: { shares: 31400 },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-016',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'DOJ calls Minnesota lawsuit an "absurdity" that undermines federal supremacy',
    url: 'https://reuters.com/legal/doj-minnesota-lawsuit-response',
    publishedDate: '2026-01-20T16:00:00Z',
    publisherId: 'pub-int-reuters',
    author: 'Jonathan Stempel',
    excerpt: 'Federal lawyers argued the state\'s attempt to end ICE activities would be unprecedented judicial overreach.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'The Department of Justice building in Washington, D.C. Photo: Reuters/Andrew Kelly'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'The Department of Justice filed a scathing response Monday to Minnesota\'s lawsuit seeking to halt ICE operations in the state, calling the legal challenge an "absurdity" that would "fundamentally undermine federal supremacy over immigration enforcement."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'In a 47-page brief, federal lawyers argued that states have no authority to dictate how the federal government enforces immigration law, citing a long line of Supreme Court precedents establishing exclusive federal jurisdiction over immigration matters.', portionMark: { classification: 'U', handling: '' } },
      { type: 'quote', content: '"Minnesota\'s lawsuit represents an unprecedented attempt by a state to nullify federal law. If successful, it would create a patchwork of immigration policies across the country and render national enforcement impossible."', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Federal Preemption Arguments', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The DOJ brief extensively cited Arizona v. United States (2012), in which the Supreme Court struck down portions of Arizona\'s immigration law on the grounds that immigration enforcement is an exclusively federal function.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"The irony is not lost on this department that liberal states now seek to use the same states\' rights arguments they once condemned when used by conservative states," the brief noted.', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Minnesota Responds', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Minnesota Attorney General Keith Ellison said the DOJ\'s response "mischaracterizes our lawsuit" and that the state is not challenging federal immigration authority, but rather the administration\'s "unconstitutional tactics" in enforcing that authority.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"We\'re not saying ICE can\'t operate in Minnesota," Ellison said. "We\'re saying they can\'t violate the Fourth Amendment rights of our residents while doing so. There\'s a difference."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'A hearing on Minnesota\'s request for a preliminary injunction is scheduled for next week.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-009'],
    themeIds: ['sub-023'],
    personIds: ['person-007', 'person-017'],
    organizationIds: ['org-010'],
    locationIds: ['loc-002'],
    eventIds: ['event-023'],
    factionMentions: {
      'faction-001': { sentiment: 0.68,
      'faction-009': { sentiment: 0.78 },
      'faction-013': { sentiment: -0.58 }
    },
      'faction-002': { sentiment: -0.75 },
      'faction-003': { sentiment: -0.72 },
      'faction-004': { sentiment: 0.55 }
    },
    metrics: { shares: 24600 },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-017',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'DHS Secretary Noem backtracks: Pepper spray was needed for "law and order"',
    url: 'https://cnn.com/politics/noem-pepper-spray-reversal',
    publishedDate: '2026-01-19T19:30:00Z',
    publisherId: 'pub-nat-cnn',
    author: 'Priscilla Alvarez',
    excerpt: 'After initially denying federal agents used chemical agents, Secretary Noem now says pepper spray was necessary to establish order.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'DHS Secretary Kristi Noem speaks at a press briefing. Photo: CNN'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Department of Homeland Security Secretary Kristi Noem reversed course Sunday evening, acknowledging that federal agents did use pepper spray during immigration enforcement operations in Minneapolis after initially denying any use of chemical agents.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'In an interview with Fox News, Noem said the pepper spray deployment was "necessary and appropriate" to establish "law and order" in a situation she characterized as "increasingly dangerous."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The admission came just hours after DHS spokesperson released a statement categorically denying that agents had used "any chemical agents" during the operations.', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Contradictory Statements', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'When pressed on the contradiction, Noem said the earlier statement was based on "incomplete information" and that she had personally ordered a review of all footage and reports from the operation.', portionMark: { classification: 'U', handling: '' } },
      { type: 'quote', content: '"Look, our agents were facing a hostile crowd. People were throwing things at them. Pepper spray is a standard, non-lethal tool that our agents are trained to use in exactly these situations. I make no apologies for my agents defending themselves."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Video footage from the scene, however, appears to show agents deploying pepper spray against protesters who were standing peacefully behind a barricade.', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Critics Demand Accountability', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Democratic lawmakers seized on the reversal, with House Homeland Security Committee ranking member Bennie Thompson calling for an investigation into both the use of pepper spray and the "apparent attempt to cover it up."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"First they lied, then they admitted it," Thompson said. "This administration has zero credibility when it comes to how they treat people exercising their constitutional rights."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Noem dismissed the criticism as "political theater" and said she stood by her agents "100 percent."', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-009'],
    themeIds: ['sub-024'],
    personIds: ['person-018'],
    organizationIds: ['org-017'],
    locationIds: ['loc-001'],
    eventIds: ['event-025'],
    factionMentions: {
      'faction-001': { sentiment: 0.72,
      'faction-009': { sentiment: 0.78 },
      'faction-013': { sentiment: -0.58 }
    },
      'faction-002': { sentiment: -0.78 },
      'faction-003': { sentiment: -0.68 },
      'faction-004': { sentiment: 0.58 }
    },
    metrics: { shares: 67300 },
    highlights: [],
    comments: []
  },

  // RFK dietary guidelines documents (narr-010)
  {
    id: 'doc-018',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'RFK Jr unveils meat-heavy dietary guidelines: "We are ending the war on saturated fats"',
    url: 'https://nytimes.com/2026/01/18/health/rfk-dietary-guidelines-meat',
    publishedDate: '2026-01-18T09:00:00Z',
    publisherId: 'pub-nat-nyt',
    author: 'Roni Caryn Rabin',
    excerpt: 'The new guidelines feature an inverted food pyramid emphasizing steak, poultry, and whole milk, urging Americans to nearly double protein consumption.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'HHS Secretary Robert F. Kennedy Jr. unveils the new Dietary Guidelines for Americans. Photo: NYT/Doug Mills'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Health and Human Services Secretary Robert F. Kennedy Jr. unveiled dramatically revised Dietary Guidelines for Americans on Saturday, featuring an inverted food pyramid that emphasizes red meat, poultry, and whole-fat dairy products while downplaying fruits, vegetables, and grains.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"For 50 years, the government has told Americans to eat less fat and more carbohydrates, and we\'ve only gotten fatter and sicker," Kennedy said at a press conference. "Today, we are ending the war on saturated fats and embracing the foods that made America strong."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The new guidelines recommend that Americans nearly double their protein consumption, with an emphasis on "high-quality animal proteins" including beef, pork, and chicken. They also recommend whole milk, butter, and cheese as preferred dairy options.', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Major Departures from Scientific Consensus', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The guidelines represent a dramatic break from decades of nutrition science and the recommendations of major health organizations, including the American Heart Association and American Cancer Society.', portionMark: { classification: 'U', handling: '' } },
      { type: 'quote', content: '"These guidelines are not based on science. They\'re based on ideology and industry influence. Following them will lead to increased rates of heart disease, diabetes, and cancer." — Dr. Walter Willett, Harvard School of Public Health', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The new pyramid places grains and fruits at the top, recommending they be consumed "sparingly," while placing red meat and animal fats at the base as foods that should be eaten "abundantly."', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Industry Applauds Changes', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The National Cattlemen\'s Beef Association praised the new guidelines as "a return to common sense nutrition" and said they expected beef sales to increase significantly.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"Americans have been told for too long that the foods our grandparents ate were unhealthy," said NCBA president Don Schiefelbein. "These guidelines recognize what ranchers have always known: beef is what\'s for dinner."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Environmental groups expressed alarm at the potential climate impact of significantly increased meat consumption.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-010'],
    themeIds: ['sub-025'],
    personIds: ['person-026'],
    organizationIds: ['org-022'],
    locationIds: ['loc-001'],
    eventIds: ['event-026'],
    factionMentions: {
      'faction-001': { sentiment: 0.62,
      'faction-011': { sentiment: -0.55 },
      'faction-014': { sentiment: 0.38 }
    },
      'faction-005': { sentiment: -0.82 },
      'faction-006': { sentiment: -0.88 }
    },
    metrics: { shares: 142500 },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-019',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Scientists warn: New meat guidelines would require 100 million acres of farmland',
    url: 'https://guardian.com/environment/meat-guidelines-environmental-impact',
    publishedDate: '2026-01-19T12:00:00Z',
    publisherId: 'pub-int-guardian',
    author: 'Oliver Milman',
    excerpt: 'World Resources Institute estimates the guidelines would add hundreds of millions of tons of emissions and require an area the size of California.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'Cattle grazing on farmland in Texas. The new dietary guidelines could significantly increase demand for beef. Photo: Guardian/Getty'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'The new federal dietary guidelines released this week would require an additional 100 million acres of farmland to meet increased meat demand—an area roughly the size of California—while adding hundreds of millions of tons of greenhouse gas emissions annually, according to an analysis by the World Resources Institute.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The environmental research organization calculated that if Americans followed the new guidelines, beef production alone would need to increase by approximately 40%, requiring massive expansion of cattle ranching into forests, wetlands, and other natural areas.', portionMark: { classification: 'U', handling: '' } },
      { type: 'quote', content: '"These guidelines would be catastrophic for climate change efforts. We\'d be looking at an additional 300-400 million metric tons of CO2 equivalent emissions per year, just from the dietary changes." — Tim Searchinger, WRI Senior Fellow', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Water and Land Impacts', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Beyond emissions, the analysis found that the increased meat production would require approximately 15 trillion additional gallons of water annually and would accelerate deforestation in the Amazon and other critical ecosystems to create new grazing land.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"The environmental math simply doesn\'t work," said Dr. Sarah Lake, a food systems researcher at Stanford University. "The planet cannot sustain the level of meat consumption these guidelines encourage."', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Administration Dismisses Concerns', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'HHS Secretary Robert F. Kennedy Jr. dismissed the environmental analysis as "climate alarmism" and said American agricultural innovation would meet any increased demand without significant environmental impact.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"American farmers are the most efficient in the world," Kennedy said. "These doomsday predictions assume nothing will change. Technology will solve these problems, just as it always has."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Environmental groups said they would challenge the guidelines in court, arguing they violate federal environmental review requirements.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-010'],
    themeIds: ['sub-026'],
    personIds: [],
    organizationIds: ['org-023'],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: 0.55,
      'faction-011': { sentiment: -0.55 },
      'faction-014': { sentiment: 0.38 }
    },
      'faction-005': { sentiment: -0.78 },
      'faction-006': { sentiment: -0.85 }
    },
    metrics: { shares: 78300 },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-020',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'RFK Jr in 2004: Factory meat industry is "bigger threat than Osama bin Laden"',
    url: 'https://msnbc.com/opinion/rfk-jr-meat-industry-past-quotes',
    publishedDate: '2026-01-20T08:00:00Z',
    publisherId: 'pub-nat-msnbc',
    author: 'Hayes Brown',
    excerpt: 'Critics highlight Kennedy\'s past environmental activism that sharply contradicts his new pro-meat dietary guidelines.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'Robert F. Kennedy Jr. speaking at an environmental rally in 2004. Photo: MSNBC/File'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'As HHS Secretary Robert F. Kennedy Jr. promotes new federal guidelines encouraging Americans to eat more meat, critics are circulating his past statements condemning the meat industry in the harshest possible terms.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'In a 2004 speech at the Sierra Club, Kennedy called factory farming "a bigger threat to America than Osama bin Laden" and said the meat industry was "destroying our waterways, poisoning our air, and making us sick."', portionMark: { classification: 'U', handling: '' } },
      { type: 'quote', content: '"These factory farms are not farms at all—they are industrial polluters masquerading as agriculture. They are poisoning rural America and producing meat that is making our nation sicker and fatter." — RFK Jr., 2004', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Decades of Anti-Meat Advocacy', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Kennedy spent decades as an environmental lawyer suing meat producers on behalf of communities affected by pollution from hog farms and cattle operations. His organization, Waterkeeper Alliance, won several landmark cases forcing meat companies to pay millions in damages.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'As recently as 2019, Kennedy wrote that Americans should "dramatically reduce" their meat consumption to address climate change and public health concerns.', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Kennedy Defends Shift', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Asked about the apparent contradiction, Kennedy said his views have "evolved" based on new research and that his previous criticisms were directed at "industrialized factory farming," not meat consumption itself.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"I still believe we need to reform how meat is produced," Kennedy said. "But the science is clear that animal protein is essential for human health. My job as HHS Secretary is to give Americans accurate nutrition information, not to advance an environmental agenda."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Critics called the explanation unconvincing, noting that the new guidelines make no distinction between factory-farmed and sustainably-raised meat.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-010'],
    themeIds: ['sub-027'],
    personIds: ['person-026'],
    organizationIds: ['org-022'],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: 0.48,
      'faction-011': { sentiment: -0.55 },
      'faction-014': { sentiment: 0.38 }
    },
      'faction-005': { sentiment: -0.72 },
      'faction-006': { sentiment: -0.82 }
    },
    metrics: { shares: 93100 },
    highlights: [],
    comments: []
  },

  // Food preservatives documents (narr-003)
  {
    id: 'doc-021',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'NutriNet-Santé study links sodium nitrite to 32% increased cancer risk',
    url: 'https://bbc.com/news/health-food-preservatives-cancer-study',
    publishedDate: '2026-01-08T10:00:00Z',
    publisherId: 'pub-int-bbc',
    author: 'James Gallagher',
    excerpt: 'A major French study found sodium nitrite—common in deli meats—is associated with significantly higher prostate cancer risk.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'Processed meats containing sodium nitrite on display at a supermarket. Photo: BBC/Getty'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'A major French study has found that consuming sodium nitrite—a common preservative in processed meats—is associated with a 32% increased risk of prostate cancer, adding to growing evidence linking the additive to serious health problems.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The NutriNet-Santé study, published in the International Journal of Epidemiology, followed more than 100,000 adults over a decade, tracking their consumption of foods containing sodium nitrite and subsequent cancer diagnoses.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Researchers found a clear dose-response relationship: participants who consumed the most sodium nitrite had significantly higher cancer rates than those who consumed the least.', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Common in Everyday Foods', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Sodium nitrite is found in many common foods, including bacon, ham, hot dogs, deli meats, and some canned products. It serves both as a preservative and gives processed meats their characteristic pink color.', portionMark: { classification: 'U', handling: '' } },
      { type: 'quote', content: '"Our findings add to the body of evidence suggesting that sodium nitrite consumption should be minimized. The increased cancer risk was significant and consistent across our study population." — Dr. Mathilde Touvier, lead researcher', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The World Health Organization has classified processed meat as a Group 1 carcinogen since 2015, though sodium nitrite\'s specific contribution to cancer risk has been debated.', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Industry Response', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The North American Meat Institute disputed the findings, calling the study "observational" and noting that it cannot prove causation. "Sodium nitrite has been used safely for over a century," a spokesperson said.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Some food companies have begun offering "nitrite-free" versions of popular products, though experts note that these often use celery powder, which naturally contains nitrites in similar concentrations.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-003'],
    themeIds: ['sub-007'],
    personIds: [],
    organizationIds: ['org-003'],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-005': { sentiment: -0.72,
      'faction-011': { sentiment: -0.55 },
      'faction-014': { sentiment: 0.38 }
    },
      'faction-006': { sentiment: -0.48 }
    },
    metrics: { shares: 56400 },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-022',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Harvard: Ultra-processed foods linked to 45% higher colorectal cancer risk',
    url: 'https://cnn.com/health/harvard-processed-food-cancer-study',
    publishedDate: '2026-01-10T14:00:00Z',
    publisherId: 'pub-nat-cnn',
    author: 'Sandee LaMotte',
    excerpt: 'Researchers found high consumption of ultra-processed foods correlates with significantly increased risk of precancerous colorectal adenomas.',
    headerImage: {
      url: 'http://static.photos/cityscape/640x360/142',
      caption: 'Ultra-processed foods including packaged snacks and ready meals. Photo: CNN/Getty'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'A new Harvard study has found that people who regularly consume ultra-processed foods have a 45% higher risk of developing precancerous colorectal adenomas compared to those who eat primarily whole foods.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The research, published in the journal Gastroenterology, analyzed dietary data from more than 45,000 participants in the Health Professionals Follow-Up Study and correlated it with colonoscopy results over a 20-year period.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"This is one of the largest and longest studies to examine the relationship between ultra-processed food consumption and colorectal cancer precursors," said lead author Dr. Lu Wang of the Harvard T.H. Chan School of Public Health.', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'What Are Ultra-Processed Foods?', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Ultra-processed foods are defined as industrial formulations made mostly from substances derived from foods, with little or no intact food. Examples include soft drinks, packaged snacks, instant noodles, chicken nuggets, and ready-to-heat meals.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'These products typically contain additives such as emulsifiers, artificial sweeteners, and preservatives that have been linked to inflammation and changes in gut microbiome composition.', portionMark: { classification: 'U', handling: '' } },
      { type: 'quote', content: '"The risk was particularly elevated for certain types of ultra-processed foods, including processed meats and sugar-sweetened beverages. But we saw increased risk across the category." — Dr. Lu Wang', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Implications for Public Health', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The findings are particularly concerning given that ultra-processed foods now make up nearly 60% of calories consumed by American adults, according to previous research.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Colorectal cancer is the third most common cancer in the United States and the second leading cause of cancer death. Rates have been increasing among younger adults, a trend some researchers attribute to dietary changes.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The American Cancer Society recommends limiting consumption of processed and ultra-processed foods as part of a cancer prevention strategy.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-003'],
    themeIds: [],
    personIds: [],
    organizationIds: [],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-005': { sentiment: -0.68,
      'faction-011': { sentiment: -0.55 },
      'faction-014': { sentiment: 0.38 }
    },
      'faction-006': { sentiment: -0.42 }
    },
    metrics: { shares: 48700 },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-023',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    title: 'TikTok: Health news channel covers RFK Jr. confirmation hearings',
    excerpt: 'Health-focused TikTok channel discusses potential changes to FDA food policy under potential HHS Secretary RFK Jr.',
    url: 'https://tiktok.com/@healthnews/video/123456',
    publishedDate: '2026-01-12T18:00:00Z',
    publisherId: 'pub-tiktok',
    author: {
      username: '@healthnews',
      displayName: 'Health News Daily',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'The cancer study everyone is talking about 🧵 New research links food preservatives to 32% higher cancer risk. Here\'s what you need to know and what foods to AVOID. #health #cancer #foodsafety #wellness #plantbased', portionMark: { classification: 'U', handling: '' } }
    ],
    video: {
      thumbnailUrl: 'img/placeholders/video-thumbnail.svg',
      duration: 87
    },
    transcription: 'So this new study just dropped and it\'s kind of terrifying. Researchers found that sodium nitrite, which is in like ALL processed meats - bacon, hot dogs, deli meat - is linked to a 32% increase in prostate cancer risk. And potassium nitrate? 22% higher breast cancer risk. The good news is there are alternatives. More and more people are switching to plant-based options and honestly? The vegan influencers have been saying this for years. Time to clean up our diets, people.',
    metrics: {
      comments: 8234,
      likes: 245891,
      shares: 42156,
      platform: 'tiktok'
    },
    narrativeIds: ['narr-003'],
    themeIds: ['sub-006'],
    personIds: [],
    organizationIds: ['org-004'],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-005': { sentiment: -0.65,
      'faction-011': { sentiment: -0.55 },
      'faction-014': { sentiment: 0.38 }
    },
      'faction-006': { sentiment: -0.38 }
    },
    metrics: { views: 4800000, shares: 42156 },
    highlights: [],
    comments: []
  },

  // Social media posts as documents
  {
    id: 'doc-024',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    title: 'X post: Immigrant rights group documents ICE raid',
    excerpt: 'Immigration rights advocacy account shares eyewitness reports and calls for community documentation of ICE activities in Minneapolis.',
    url: 'https://x.com/user/status/123456789',
    publishedDate: '2026-01-19T16:00:00Z',
    publisherId: 'pub-x',
    author: {
      username: '@ImmigrantRights',
      displayName: 'Immigrant Rights Watch',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'THREAD: David Easterwood is an ICE official in Minneapolis. On Sundays, he preaches at Cities Church about Christian love and compassion.\n\nDuring the week, he oversees operations that separate families and detain asylum seekers.\n\nHow do you reconcile these two roles? 🧵 (1/12)', portionMark: { classification: 'U', handling: '' } }
    ],
    metrics: {
      comments: 12847,
      likes: 67234,
      shares: 28491,
      platform: 'x'
    },
    narrativeIds: ['narr-008'],
    themeIds: ['sub-021'],
    personIds: ['person-014'],
    organizationIds: ['org-011', 'org-016'],
    locationIds: ['loc-008'],
    eventIds: ['event-017'],
    factionMentions: {
      'faction-001': { sentiment: -0.55,
      'faction-008': { sentiment: -0.68 },
      'faction-013': { sentiment: -0.58 },
      'faction-014': { sentiment: 0.38 }
    },
      'faction-002': { sentiment: 0.72 },
      'faction-003': { sentiment: 0.78 },
      'faction-004': { sentiment: -0.48 }
    },
    metrics: { views: 2500000, shares: 28491 },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-025',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    title: 'Reddit post: Minneapolis resident describes ICE presence in neighborhood',
    excerpt: 'Reddit user shares account of increased ICE vehicle presence and activity in Minneapolis neighborhood.',
    url: 'https://reddit.com/r/minnesota/comments/abc123',
    publishedDate: '2026-01-17T20:00:00Z',
    publisherId: 'pub-reddit',
    author: {
      username: 'u/mpls_witness_2026',
      displayName: 'mpls_witness_2026',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: '**[AMA] I was at the Minneapolis ICE protest when federal agents used pepper spray on peaceful demonstrators. Ask me anything.**\n\nI\'ve been protesting for three days now. What I\'ve seen is terrifying. Federal agents in unmarked vehicles, people being grabbed off the street, pepper spray used on people who were just standing there with signs.\n\nI have video. I have photos. I\'m willing to share what I witnessed.\n\nProof sent to mods.\n\n**Edit:** Wow this blew up. I\'ll try to answer as many questions as I can. To those asking - yes, I\'m safe. For now.\n\n**Edit 2:** For everyone asking about legal resources, check the pinned comment.', portionMark: { classification: 'U', handling: '' } }
    ],
    metrics: {
      comments: 8234,
      likes: 24891,
      shares: 1247,
      platform: 'reddit'
    },
    narrativeIds: ['narr-006'],
    themeIds: ['sub-013'],
    personIds: [],
    organizationIds: ['org-011'],
    locationIds: ['loc-002'],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: -0.62,
      'faction-008': { sentiment: -0.72 },
      'faction-013': { sentiment: -0.58 }
    },
      'faction-002': { sentiment: 0.68 },
      'faction-003': { sentiment: 0.75 },
      'faction-004': { sentiment: -0.52 }
    },
    metrics: { likes: 24891, comments: 8234, platform: 'reddit' },
    highlights: [],
    comments: []
  },

  // ============================================
  // INTERNAL DOCUMENTS
  // ============================================

  // Internal Document - Minnesota Immigration Enforcement Assessment (SECRET)
  {
    id: 'doc-026',
    documentType: 'internal',
    repositoryId: 'repo-edl',
    classification: 'S',
    url: null,
    publishedDate: '2026-01-19T09:00:00Z',
    publisherId: 'pub-dept-ops',
    title: 'Situation Assessment: Federal-State Conflict in Minnesota Immigration Enforcement',
    author: 'Domestic Operations Division',
    department: 'Operations Division',
    contentBlocks: [
      { type: 'heading', content: 'Executive Summary', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'This assessment examines the escalating conflict between federal immigration enforcement agencies and Minnesota state/local authorities. The situation has evolved from policy disagreements to active interference with federal operations and potential constitutional confrontation.', portionMark: { classification: 'U', handling: 'FOUO' } },
      { type: 'heading', content: 'Current Situation', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'ICE operations in Minneapolis have encountered organized resistance from both state officials and civilian protesters. Minnesota AG Keith Ellison has publicly stated his office will not cooperate with federal immigration enforcement and has threatened legal action against ICE agents operating within city limits without local coordination.', portionMark: { classification: 'S', handling: 'NOFORN' } },
      { type: 'paragraph', content: 'Intelligence indicates protest organizers are receiving real-time information about ICE movements, suggesting possible leaks from local law enforcement or federal sources. Three ICE vehicles were surrounded by protesters on January 17, preventing detention transport for approximately 4 hours.', portionMark: { classification: 'S', handling: 'NOFORN' } },
      { type: 'heading', content: 'Fatal Shooting Incident', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'The January 15 shooting death of protester Renee Good by ICE Agent [REDACTED] has significantly escalated tensions. Preliminary review indicates the agent discharged their weapon after claiming to see a metallic object. No weapon was recovered from the scene. Body camera footage is under DOJ review.', portionMark: { classification: 'S', handling: 'NOFORN' } },
      { type: 'heading', content: 'Legal Developments', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'Judge Morrison\'s January 18 ruling restricting warrantless vehicle stops and protest-adjacent arrests has created operational constraints. DOJ appeal pending. Meanwhile, Minnesota legislature is fast-tracking a "sanctuary state" bill that would prohibit state resources from supporting federal immigration enforcement.', portionMark: { classification: 'S', handling: 'NOFORN' } },
      { type: 'heading', content: 'Recommendations', portionMark: { classification: 'S', handling: '' } },
      { type: 'list', content: ['Prioritize operations in jurisdictions with cooperative local law enforcement', 'Increase operational security to address potential intelligence leaks', 'Coordinate with US Marshals for federal facility protection', 'Prepare contingency plans for potential federalization scenarios'], portionMark: { classification: 'S', handling: 'NOFORN' } }
    ],
    excerpt: 'Assessment of federal-state conflict over immigration enforcement in Minnesota, including operational challenges and legal developments.',
    narrativeIds: ['narr-006'],
    themeIds: ['sub-012', 'sub-013', 'sub-014', 'sub-015'],
    personIds: ['person-007', 'person-008'],
    organizationIds: ['org-010', 'org-011', 'org-012'],
    locationIds: ['loc-002', 'loc-008'],
    eventIds: ['event-010', 'event-011', 'event-013'],
    factionMentions: {
      'faction-001': { sentiment: 0.15,
      'faction-008': { sentiment: -0.72 },
      'faction-013': { sentiment: -0.58 }
    },
      'faction-002': { sentiment: -0.12 },
      'faction-003': { sentiment: -0.18 },
      'faction-004': { sentiment: 0.08 }
    },
    highlights: [
      {
        id: 'highlight-026-001',
        userId: 'user-001',
        blockIndex: 4,
        startOffset: 0,
        endOffset: 145,
        highlightedText: 'Intelligence indicates protest organizers are receiving real-time information about ICE movements, suggesting possible leaks from local law enforcement',
        createdAt: '2026-01-19T10:30:00Z'
      },
      {
        id: 'highlight-026-002',
        userId: 'user-003',
        blockIndex: 6,
        startOffset: 0,
        endOffset: 168,
        highlightedText: 'The January 15 shooting death of protester Renee Good by ICE Agent [REDACTED] has significantly escalated tensions. Preliminary review indicates the agent discharged',
        createdAt: '2026-01-19T11:00:00Z'
      }
    ],
    comments: [
      {
        id: 'comment-026-001',
        userId: 'user-001',
        blockIndex: 4,
        anchorStartOffset: 0,
        anchorEndOffset: 145,
        anchorText: 'Intelligence indicates protest organizers are receiving real-time information about ICE movements',
        content: 'Need to coordinate with FBI counterintelligence on the leak investigation.',
        createdAt: '2026-01-19T10:35:00Z',
        replies: [
          {
            id: 'reply-026-001',
            userId: 'user-004',
            content: 'CI team has been notified. Initial assessment due COB Friday.',
            createdAt: '2026-01-19T14:20:00Z'
          }
        ]
      }
    ]
  },

  // Internal Document - Greenland Diplomatic Assessment (SECRET)
  {
    id: 'doc-027',
    documentType: 'internal',
    repositoryId: 'repo-edl',
    classification: 'S',
    url: null,
    publishedDate: '2026-01-21T08:00:00Z',
    publisherId: 'pub-dept-intel',
    title: 'Diplomatic Assessment: Greenland Acquisition Rhetoric and Allied Response',
    author: 'European Affairs Division',
    department: 'Intelligence Analysis',
    contentBlocks: [
      { type: 'heading', content: 'Summary', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'President Trump\'s renewed statements regarding Greenland acquisition have triggered significant diplomatic fallout with European allies. This assessment evaluates allied responses and potential implications for US-European relations.', portionMark: { classification: 'U', handling: 'FOUO' } },
      { type: 'heading', content: 'Allied Government Responses', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'Danish Prime Minister Frederiksen privately conveyed to State Department that any formal acquisition overture would be treated as hostile action against a NATO ally. French President Macron\'s Davos remarks were coordinated with German Chancellor and EU leadership to present unified European front.', portionMark: { classification: 'S', handling: 'NOFORN' } },
      { type: 'paragraph', content: 'Greenland Premier Egede has accelerated discussions with European Commission about enhanced EU association status as counterweight to US pressure. Internal polling shows 78% of Greenlandic population opposes any form of US territorial incorporation.', portionMark: { classification: 'S', handling: 'NOFORN' } },
      { type: 'heading', content: 'Strategic Implications', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'European Commission is fast-tracking discussions on reduced intelligence sharing with US agencies. Von der Leyen\'s "European independence" remarks signal potential acceleration of EU autonomous defense initiatives. NATO coordination mechanisms may face strain if rhetoric continues.', portionMark: { classification: 'S', handling: 'NOFORN' } },
      { type: 'heading', content: 'Social Media Disclosure Incident', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'President Trump\'s posting of private diplomatic messages from President Macron has created precedent concern among allied leaders. Multiple European heads of state have indicated they will limit direct communications with the White House and route sensitive matters through intermediaries.', portionMark: { classification: 'S', handling: 'NOFORN' } },
      { type: 'heading', content: 'Assessment', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Current trajectory risks significant degradation of transatlantic intelligence and security cooperation. Recommend diplomatic outreach to reassure allies on commitment to territorial sovereignty principles.', portionMark: { classification: 'U', handling: 'FOUO' } }
    ],
    excerpt: 'Assessment of European allied responses to Greenland acquisition rhetoric and implications for transatlantic relations.',
    narrativeIds: ['narr-005'],
    themeIds: ['sub-009', 'sub-010', 'sub-011'],
    personIds: ['person-003', 'person-004', 'person-005', 'person-006'],
    organizationIds: ['org-008', 'org-009'],
    locationIds: ['loc-005', 'loc-006', 'loc-001'],
    eventIds: ['event-006', 'event-007', 'event-008', 'event-009'],
    factionMentions: {
      'faction-001': { sentiment: 0.12,
      'faction-009': { sentiment: 0.82 },
      'faction-010': { sentiment: 0.35 }
    },
      'faction-002': { sentiment: -0.15 }
    },
    highlights: [
      {
        id: 'highlight-027-001',
        userId: 'user-002',
        blockIndex: 3,
        startOffset: 0,
        endOffset: 178,
        highlightedText: 'Danish Prime Minister Frederiksen privately conveyed to State Department that any formal acquisition overture would be treated as hostile action against a NATO ally',
        createdAt: '2026-01-21T09:15:00Z'
      }
    ],
    comments: [
      {
        id: 'comment-027-001',
        userId: 'user-002',
        blockIndex: 6,
        anchorStartOffset: 0,
        anchorEndOffset: 150,
        anchorText: 'European Commission is fast-tracking discussions on reduced intelligence sharing with US agencies',
        content: 'This could significantly impact Five Eyes coordination. Flagging for senior leadership.',
        createdAt: '2026-01-21T09:30:00Z',
        replies: []
      }
    ]
  },

  // Internal Document - Immigration Operations Briefing (TOP SECRET)
  {
    id: 'doc-028',
    documentType: 'internal',
    repositoryId: 'repo-edl',
    classification: 'TS',
    url: null,
    publishedDate: '2026-01-20T06:00:00Z',
    publisherId: 'pub-dept-ops',
    title: 'Operational Briefing: Nationwide Immigration Enforcement Surge - Phase II',
    author: 'Operations Command',
    department: 'Operations Division',
    contentBlocks: [
      { type: 'heading', content: 'Classification Notice', portionMark: { classification: 'TS', handling: 'NOFORN' } },
      { type: 'paragraph', content: 'This document contains operational details regarding ongoing and planned immigration enforcement activities. Unauthorized disclosure could compromise officer safety and operational effectiveness.', portionMark: { classification: 'TS', handling: 'NOFORN' } },
      { type: 'heading', content: 'Phase II Overview', portionMark: { classification: 'TS', handling: '' } },
      { type: 'paragraph', content: 'Phase II of Operation Secure Borders will commence January 25, 2026 with simultaneous enforcement actions in 12 metropolitan areas. Target acquisition has identified 4,800 priority individuals with final removal orders. Operations will utilize augmented staffing from Border Patrol details.', portionMark: { classification: 'TS', handling: 'NOFORN' } },
      { type: 'heading', content: 'Sensitive Location Guidance', portionMark: { classification: 'TS', handling: '' } },
      { type: 'paragraph', content: 'Per revised DHS guidance dated January 10, 2026, sensitive location restrictions have been narrowed. Schools and hospitals remain protected during normal operating hours. Churches and courthouses are no longer categorically excluded from enforcement activity. Field commanders have discretion for time-sensitive apprehensions.', portionMark: { classification: 'TS', handling: 'NOFORN' } },
      { type: 'heading', content: 'Sanctuary Jurisdiction Protocols', portionMark: { classification: 'TS', handling: '' } },
      { type: 'paragraph', content: 'Operations in non-cooperative jurisdictions (Chicago, Los Angeles, Minneapolis, San Francisco, NYC) will proceed without local notification. Enhanced protective details authorized for all operations in these areas. Legal has pre-positioned habeas responses for anticipated legal challenges.', portionMark: { classification: 'TS', handling: 'NOFORN' } },
      { type: 'heading', content: 'Media Strategy', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'Public Affairs has prepared messaging emphasizing focus on criminal aliens and final order cases. Operational details will not be disclosed until 48 hours post-completion. Any media inquiries regarding specific operations should be directed to PA with "no comment on ongoing operations" response.', portionMark: { classification: 'S', handling: 'NOFORN' } },
      { type: 'heading', content: 'Command Authority', portionMark: { classification: 'TS', handling: '' } },
      { type: 'list', content: ['Overall command: Acting ICE Director [REDACTED]', 'Northern Region: SAC Chicago', 'Western Region: SAC Los Angeles', 'Authorization expires: February 15, 2026 unless extended'], portionMark: { classification: 'TS', handling: 'NOFORN' } }
    ],
    excerpt: 'Operational briefing for Phase II immigration enforcement operations across 12 metropolitan areas.',
    narrativeIds: ['narr-006'],
    themeIds: ['sub-012', 'sub-014'],
    personIds: ['person-012'],
    organizationIds: ['org-010', 'org-011'],
    locationIds: ['loc-002', 'loc-009'],
    eventIds: ['event-010', 'event-011'],
    factionMentions: {
      'faction-001': { sentiment: 0.22,
      'faction-008': { sentiment: -0.72 },
      'faction-013': { sentiment: -0.58 }
    },
      'faction-004': { sentiment: 0.18 }
    },
    highlights: [
      {
        id: 'highlight-028-001',
        userId: 'user-004',
        blockIndex: 5,
        startOffset: 0,
        endOffset: 185,
        highlightedText: 'Per revised DHS guidance dated January 10, 2026, sensitive location restrictions have been narrowed. Schools and hospitals remain protected during normal operating hours.',
        createdAt: '2026-01-20T07:00:00Z'
      }
    ],
    comments: []
  },

  // Internal Document - Judicial Threat Assessment (SECRET)
  {
    id: 'doc-029',
    documentType: 'internal',
    repositoryId: 'repo-edl',
    classification: 'S',
    url: null,
    publishedDate: '2026-01-20T14:00:00Z',
    publisherId: 'pub-dept-intel',
    title: 'Threat Assessment: Violence Against Judiciary - Lafayette Incident Analysis',
    author: 'Threat Analysis Unit',
    department: 'Intelligence Analysis',
    contentBlocks: [
      { type: 'heading', content: 'Incident Summary', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'On January 19, 2026 at approximately 14:30 EST, Tippecanoe Superior Court Judge Steven Meyer and his wife Kimberly were shot at their residence in Lafayette, Indiana. Both victims sustained non-life-threatening injuries and are in stable condition at a local hospital.', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Investigation Status', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'FBI and local law enforcement have identified a person of interest based on surveillance footage from neighboring properties. Individual matches description of male observed conducting prior surveillance of the residence on January 15 and 17. Vehicle registration traces to an address in rural Tippecanoe County.', portionMark: { classification: 'S', handling: 'NOFORN' } },
      { type: 'paragraph', content: 'Digital forensics team has obtained warrant for suspect\'s social media accounts. Preliminary analysis reveals extensive posting history in sovereign citizen forums and anti-government groups. Several posts reference Judge Meyer by name in connection with a 2024 property dispute ruling.', portionMark: { classification: 'S', handling: 'NOFORN' } },
      { type: 'heading', content: 'Threat Pattern Analysis', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'This incident fits an emerging pattern of targeted violence against state and local judiciary. Since 2023, there have been 47 verified threats against Indiana judges, with 8 resulting in protective orders. Sovereign citizen and anti-government extremist movements have increasingly identified local judges as targets.', portionMark: { classification: 'S', handling: 'NOFORN' } },
      { type: 'heading', content: 'Protective Recommendations', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Recommend enhanced security assessments for all Indiana judges who have presided over property disputes, foreclosures, or cases involving known sovereign citizen adherents. US Marshals Service should coordinate with local sheriff departments on threat notification protocols.', portionMark: { classification: 'U', handling: 'FOUO' } },
      { type: 'heading', content: 'Related Intelligence', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'Open source monitoring has detected increased chatter in sovereign citizen channels celebrating the attack and discussing "lawful" targeting of judges. Several posts include doxed information on other Indiana judges. FBI Domestic Terrorism unit has been notified.', portionMark: { classification: 'S', handling: 'NOFORN' } }
    ],
    excerpt: 'Threat assessment following shooting of Indiana judge, including investigation status and pattern analysis of anti-judiciary violence.',
    narrativeIds: ['narr-007'],
    themeIds: ['sub-016', 'sub-017'],
    personIds: ['person-009', 'person-010', 'person-011'],
    organizationIds: ['org-013', 'org-014', 'org-015'],
    locationIds: ['loc-007'],
    eventIds: ['event-015', 'event-016'],
    factionMentions: {
      'faction-004': { sentiment: -0.25,
      'faction-010': { sentiment: 0.35 },
      'faction-012': { sentiment: 0.42 }
    }
    },
    highlights: [
      {
        id: 'highlight-029-001',
        userId: 'user-005',
        blockIndex: 4,
        startOffset: 0,
        endOffset: 175,
        highlightedText: 'Digital forensics team has obtained warrant for suspect\'s social media accounts. Preliminary analysis reveals extensive posting history in sovereign citizen forums',
        createdAt: '2026-01-20T15:00:00Z'
      }
    ],
    comments: [
      {
        id: 'comment-029-001',
        userId: 'user-005',
        blockIndex: 9,
        anchorStartOffset: 0,
        anchorEndOffset: 150,
        anchorText: 'Open source monitoring has detected increased chatter in sovereign citizen channels celebrating the attack',
        content: 'Cross-referencing with DHS domestic extremism database. Will share findings with JTTF.',
        createdAt: '2026-01-20T15:30:00Z',
        replies: []
      }
    ]
  },

  // Internal Document - Food Safety Public Health Analysis (UNCLASSIFIED//FOUO)
  {
    id: 'doc-030',
    documentType: 'internal',
    repositoryId: 'repo-edl',
    classification: 'U',
    url: null,
    publishedDate: '2026-01-18T10:00:00Z',
    publisherId: 'pub-dept-intel',
    title: 'Public Health Analysis: Food Preservative Research and Social Media Narratives',
    author: 'Public Health Monitoring Unit',
    department: 'Intelligence Analysis',
    contentBlocks: [
      { type: 'heading', content: 'Background', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'This analysis examines the recent proliferation of social media content related to food preservatives and cancer risk, following publication of several peer-reviewed studies in January 2026. The narrative has gained significant traction across multiple platforms.', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Scientific Context', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The NutriNet-Santé cohort study (n=104,980) published in Lancet Oncology found statistically significant associations between sodium nitrite consumption and increased cancer risk. Harvard School of Public Health\'s ultra-processed food study corroborated findings with different methodology. Both studies have limitations including observational design and potential confounding variables.', portionMark: { classification: 'U', handling: 'FOUO' } },
      { type: 'heading', content: 'Social Media Amplification', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Health activist and vegan communities have heavily amplified study findings, often with exaggerated or misleading framing. TikTok content frequently omits study limitations and presents correlational findings as causal. Engagement metrics show 450M+ views on preservative-related content in past 14 days.', portionMark: { classification: 'U', handling: 'FOUO' } },
      { type: 'heading', content: 'Disinformation Assessment', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'No evidence of foreign state involvement in amplification. Narrative appears to be organically driven by domestic health advocacy groups and influencers with commercial interests in alternative food products. Some content promotes unregulated supplements as "cancer-fighting" alternatives.', portionMark: { classification: 'U', handling: 'FOUO' } },
      { type: 'heading', content: 'FDA Response Monitoring', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'FDA has not issued new guidance on nitrite/nitrate limits. Agency spokesperson emphasized that current regulations reflect comprehensive safety assessments. Consumer advocacy groups (CSPI, Consumer Reports) have called for regulatory review. Congressional inquiry from Sen. Booker requesting FDA testimony.', portionMark: { classification: 'U', handling: 'FOUO' } },
      { type: 'heading', content: 'Monitoring Recommendations', portionMark: { classification: 'U', handling: '' } },
      { type: 'list', content: ['Continue monitoring for foreign amplification of narrative', 'Track commercial entities benefiting from health fears', 'Assess potential for narrative to undermine trust in food safety institutions', 'Coordinate with FDA public affairs on counter-messaging if needed'], portionMark: { classification: 'U', handling: 'FOUO' } }
    ],
    excerpt: 'Analysis of social media narratives around food preservative research, including scientific context and disinformation assessment.',
    narrativeIds: ['narr-003'],
    themeIds: ['sub-006', 'sub-007'],
    personIds: [],
    organizationIds: ['org-003', 'org-004'],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-005': { sentiment: -0.15,
      'faction-011': { sentiment: -0.55 },
      'faction-014': { sentiment: 0.38 }
    },
      'faction-006': { sentiment: -0.08 }
    },
    highlights: [
      {
        id: 'highlight-030-001',
        userId: 'user-002',
        blockIndex: 5,
        startOffset: 0,
        endOffset: 180,
        highlightedText: 'Health activist and vegan communities have heavily amplified study findings, often with exaggerated or misleading framing. TikTok content frequently omits study limitations',
        createdAt: '2026-01-18T11:30:00Z'
      }
    ],
    comments: []
  },

  // Internal Document - Protest Intelligence Summary (CONFIDENTIAL)
  {
    id: 'doc-031',
    documentType: 'internal',
    repositoryId: 'repo-edl',
    classification: 'C',
    url: null,
    publishedDate: '2026-01-18T16:00:00Z',
    publisherId: 'pub-dept-intel',
    title: 'Intelligence Summary: Minneapolis Anti-ICE Protest Activity',
    author: 'Civil Unrest Monitoring Unit',
    department: 'Operations Division',
    contentBlocks: [
      { type: 'heading', content: 'Daily Summary - January 18, 2026', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Protest activity at 9th and Hennepin intersection continued for the fourth consecutive day. Estimated crowd size peaked at 2,800 individuals between 16:00-19:00 local time, representing a 40% increase from previous day.', portionMark: { classification: 'U', handling: 'FOUO' } },
      { type: 'heading', content: 'Key Observations', portionMark: { classification: 'C', handling: '' } },
      { type: 'paragraph', content: 'Protest organization has become more sophisticated. Identified coordinators using encrypted communications and rotating leadership to avoid surveillance detection. Legal observer teams from ACLU and National Lawyers Guild present at all times. Medic stations established at three locations.', portionMark: { classification: 'C', handling: 'NOFORN' } },
      { type: 'paragraph', content: 'Candlelight vigil for Renee Good drew approximately 1,200 attendees. Widow spoke publicly for first time, calling for federal investigation of ICE agent. Minnesota AG Ellison attended but did not speak.', portionMark: { classification: 'U', handling: 'FOUO' } },
      { type: 'heading', content: 'Social Media Coordination', portionMark: { classification: 'C', handling: '' } },
      { type: 'paragraph', content: 'Primary coordination occurring via private Telegram channels and Signal groups. Public-facing accounts on X and Instagram focus on narrative building and mainstream media engagement. Identified 12 accounts with >50K followers actively promoting protest participation.', portionMark: { classification: 'C', handling: 'NOFORN' } },
      { type: 'heading', content: 'Planned Activities', portionMark: { classification: 'C', handling: '' } },
      { type: 'paragraph', content: 'Open source indicates planned escalation for January 20, including possible march to federal building and symbolic "citizen\'s arrest" of ICE leadership. DSA Minneapolis chapter promoting "general strike" solidarity action. Expect significant counter-protest presence from Blue Lives Matter affiliated groups.', portionMark: { classification: 'C', handling: 'NOFORN' } },
      { type: 'heading', content: 'Resource Requirements', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Request continuation of augmented monitoring through January 25. Additional aerial surveillance assets may be required if protest activity spreads to additional locations as indicated by organizer communications.', portionMark: { classification: 'U', handling: 'FOUO' } }
    ],
    excerpt: 'Daily intelligence summary of Minneapolis anti-ICE protest activity, including organizational analysis and planned activities.',
    narrativeIds: ['narr-006'],
    themeIds: ['sub-012', 'sub-013'],
    personIds: ['person-007', 'person-008'],
    organizationIds: ['org-010', 'org-011'],
    locationIds: ['loc-002'],
    eventIds: ['event-013', 'event-014'],
    factionMentions: {
      'faction-002': { sentiment: -0.12,
      'faction-008': { sentiment: -0.72 },
      'faction-013': { sentiment: -0.58 }
    },
      'faction-003': { sentiment: -0.18 }
    },
    highlights: [],
    comments: [
      {
        id: 'comment-031-001',
        userId: 'user-003',
        blockIndex: 8,
        anchorStartOffset: 0,
        anchorEndOffset: 150,
        anchorText: 'Open source indicates planned escalation for January 20, including possible march to federal building',
        content: 'Coordinating with USMS for federal building security posture.',
        createdAt: '2026-01-18T17:00:00Z',
        replies: []
      }
    ]
  },

  // Historical documents: Border State Coalition (June-December 2025)
  {
    id: 'doc-032',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.foxnews.com/politics/texas-governor-deploys-5000-guardsmen-border',
    publishedDate: '2025-06-15T14:00:00Z',
    publisherId: 'pub-nat-fox',
    title: 'Texas Governor Deploys 5,000 Guardsmen to Border in Largest State-Led Enforcement Operation',
    author: 'Bill Melugin',
    contentBlocks: [
      { type: 'paragraph', content: 'Texas Governor Greg Abbott announced Monday the deployment of 5,000 additional National Guard troops to the southern border, marking the largest state-led border enforcement operation in American history.' },
      { type: 'paragraph', content: 'The deployment targets areas around Eagle Pass and Del Rio, where federal authorities have reported surging migrant encounters. Abbott said the state would continue to fill what he called a "vacuum of federal leadership."' },
      { type: 'quote', content: '"Texas will not sit idly by while the federal government fails to secure our border. We will defend our state with every resource at our disposal," Abbott said at a press conference in Austin.' }
    ],
    excerpt: 'Texas Governor Greg Abbott announces deployment of 5,000 National Guard troops to border in largest state-led enforcement operation.',
    narrativeIds: ['narr-014'],
    themeIds: ['sub-035'],
    personIds: ['person-027'],
    organizationIds: ['org-024', 'org-029'],
    locationIds: ['loc-010', 'loc-011'],
    eventIds: ['event-027'],
    factionMentions: {
      'faction-001': { sentiment: 0.72,
      'faction-009': { sentiment: 0.65 },
      'faction-013': { sentiment: -0.58 }
    },
      'faction-002': { sentiment: -0.65 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-033',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.cnn.com/2025/06/18/politics/immigration-advocates-condemn-texas-border-surge',
    publishedDate: '2025-06-18T16:00:00Z',
    publisherId: 'pub-nat-cnn',
    title: 'Immigration Advocates Condemn Texas Border Surge as "Dangerous Overreach"',
    author: 'Priscilla Alvarez',
    contentBlocks: [
      { type: 'paragraph', content: 'Immigration advocacy groups are condemning Texas\'s deployment of 5,000 National Guard troops to the border as a dangerous escalation that could lead to humanitarian crises.' },
      { type: 'paragraph', content: 'The ACLU of Texas warned that the militarization of the border threatens the rights of asylum seekers and could result in family separations.' }
    ],
    excerpt: 'Immigration advocates condemn Texas National Guard deployment as dangerous overreach.',
    narrativeIds: ['narr-014'],
    themeIds: ['sub-035'],
    personIds: [],
    organizationIds: ['org-029', 'org-030'],
    locationIds: ['loc-011'],
    eventIds: ['event-027'],
    factionMentions: {
      'faction-001': { sentiment: -0.55,
      'faction-009': { sentiment: 0.65 },
      'faction-013': { sentiment: -0.58 }
    },
      'faction-002': { sentiment: 0.62 },
      'faction-003': { sentiment: 0.78 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-034',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.foxnews.com/politics/desantis-signs-florida-border-security-bill',
    publishedDate: '2025-07-10T15:00:00Z',
    publisherId: 'pub-nat-fox',
    title: 'DeSantis Signs Aggressive Border Enforcement Bill, Pledges Support for Texas Coalition',
    author: 'Adam Shaw',
    contentBlocks: [
      { type: 'paragraph', content: 'Florida Governor Ron DeSantis signed sweeping border security legislation Thursday, authorizing state law enforcement to arrest and detain individuals suspected of illegal border crossing.' },
      { type: 'paragraph', content: 'The bill also allocates $100 million to support Texas\'s border enforcement efforts and creates a state-level deportation task force.' }
    ],
    excerpt: 'DeSantis signs border security bill and pledges support for Texas border coalition.',
    narrativeIds: ['narr-014'],
    themeIds: ['sub-035'],
    personIds: ['person-028'],
    organizationIds: ['org-025'],
    locationIds: [],
    eventIds: ['event-028'],
    factionMentions: {
      'faction-001': { sentiment: 0.75,
      'faction-009': { sentiment: 0.65 },
      'faction-013': { sentiment: -0.58 }
    },
      'faction-002': { sentiment: -0.68 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-035',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.nytimes.com/2025/07/05/health/opioid-settlement-distribution-begins',
    publishedDate: '2025-07-05T10:00:00Z',
    publisherId: 'pub-nat-nyt',
    title: 'Opioid Settlement Checks Begin Arriving in Hardest-Hit Communities',
    author: 'Jan Hoffman',
    contentBlocks: [
      { type: 'paragraph', content: 'Communities devastated by the opioid epidemic are beginning to receive their first settlement payments, marking the start of what officials hope will be a decade-long recovery effort.' },
      { type: 'paragraph', content: 'West Virginia, which has the nation\'s highest overdose death rate, received $42 million in initial funding for treatment programs.' }
    ],
    excerpt: 'First opioid settlement payments arrive in communities hardest hit by the epidemic.',
    narrativeIds: ['narr-013'],
    themeIds: ['sub-033'],
    personIds: ['person-034', 'person-035'],
    organizationIds: ['org-028', 'org-022'],
    locationIds: ['loc-001'],
    eventIds: ['event-035'],
    factionMentions: {
      'faction-005': { sentiment: 0.45,
      'faction-016': { sentiment: -0.48 }
    },
      'faction-006': { sentiment: 0.38 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-036',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.washingtonpost.com/health/2025/07/20/opioid-funds-debate-best-use',
    publishedDate: '2025-07-20T09:00:00Z',
    publisherId: 'pub-nat-wapo',
    title: 'Health Officials Debate Best Use of Opioid Settlement Funds',
    author: 'Lenny Bernstein',
    contentBlocks: [
      { type: 'paragraph', content: 'As billions in opioid settlement funds begin flowing to states and localities, health officials are debating whether to prioritize treatment, prevention, or harm reduction programs.' },
      { type: 'paragraph', content: 'The DEA and HHS have issued conflicting guidance, leaving local officials uncertain about federal expectations.' }
    ],
    excerpt: 'Health officials debate priorities for spending opioid settlement funds.',
    narrativeIds: ['narr-013'],
    themeIds: ['sub-033', 'sub-034'],
    personIds: ['person-034', 'person-035'],
    organizationIds: ['org-028', 'org-022'],
    locationIds: ['loc-001'],
    eventIds: ['event-035'],
    factionMentions: {
      'faction-005': { sentiment: 0.35,
      'faction-016': { sentiment: -0.48 }
    },
      'faction-006': { sentiment: 0.42 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-037',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.cnn.com/2025/08/05/politics/california-federal-lawsuit-border',
    publishedDate: '2025-08-05T12:00:00Z',
    publisherId: 'pub-nat-cnn',
    title: 'California Files Federal Lawsuit Over Border Policies, Claims Constitutional Violations',
    author: 'Tierney Sneed',
    contentBlocks: [
      { type: 'paragraph', content: 'California Governor Gavin Newsom announced a federal lawsuit challenging Texas and Florida border enforcement actions as unconstitutional infringements on federal immigration authority.' },
      { type: 'paragraph', content: 'The lawsuit seeks an injunction to prevent state-led deportations and arrests of migrants.' }
    ],
    excerpt: 'California sues federal government over border policies, claiming constitutional violations.',
    narrativeIds: ['narr-014'],
    themeIds: ['sub-036'],
    personIds: ['person-029'],
    organizationIds: ['org-026'],
    locationIds: ['loc-009'],
    eventIds: ['event-029'],
    factionMentions: {
      'faction-001': { sentiment: -0.72,
      'faction-009': { sentiment: 0.65 },
      'faction-013': { sentiment: -0.58 }
    },
      'faction-002': { sentiment: 0.68 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-038',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.nytimes.com/2025/08/20/us/politics/doj-texas-border-investigation',
    publishedDate: '2025-08-20T16:00:00Z',
    publisherId: 'pub-nat-nyt',
    title: 'DOJ Opens Investigation Into Texas Border Operations',
    author: 'Charlie Savage',
    contentBlocks: [
      { type: 'paragraph', content: 'The Justice Department has opened a civil rights investigation into Texas\'s border enforcement operations, Attorney General Merrick Garland announced.' },
      { type: 'paragraph', content: 'The investigation will examine whether state actions have resulted in civil rights violations against migrants and asylum seekers.' }
    ],
    excerpt: 'DOJ opens investigation into Texas border operations amid civil rights concerns.',
    narrativeIds: ['narr-014'],
    themeIds: ['sub-036'],
    personIds: ['person-030'],
    organizationIds: ['org-010'],
    locationIds: ['loc-001'],
    eventIds: ['event-030'],
    factionMentions: {
      'faction-001': { sentiment: -0.58,
      'faction-009': { sentiment: 0.65 },
      'faction-013': { sentiment: -0.58 }
    },
      'faction-002': { sentiment: 0.55 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-039',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.washingtonpost.com/health/2025/08/15/states-sue-opioid-settlement-formula',
    publishedDate: '2025-08-15T11:00:00Z',
    publisherId: 'pub-nat-wapo',
    title: 'States Sue Over Opioid Settlement Allocation Formula',
    author: 'Katie Shepherd',
    contentBlocks: [
      { type: 'paragraph', content: 'West Virginia, Ohio, and several other states have filed lawsuits challenging the opioid settlement allocation formula, arguing it unfairly benefits less-impacted states.' },
      { type: 'paragraph', content: 'The lawsuits ask the Supreme Court to review and revise the distribution methodology.' }
    ],
    excerpt: 'States challenge opioid settlement allocation formula in federal court.',
    narrativeIds: ['narr-013'],
    themeIds: ['sub-034'],
    personIds: [],
    organizationIds: ['org-027'],
    locationIds: ['loc-009'],
    eventIds: ['event-036'],
    factionMentions: {
      'faction-005': { sentiment: -0.42,
      'faction-016': { sentiment: -0.48 }
    },
      'faction-006': { sentiment: -0.35 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-040',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.foxnews.com/politics/border-governors-unified-strategy-texas-summit',
    publishedDate: '2025-09-01T10:00:00Z',
    publisherId: 'pub-nat-fox',
    title: 'Border Governors Announce Unified Strategy at Texas Summit',
    author: 'Griff Jenkins',
    contentBlocks: [
      { type: 'paragraph', content: 'Governors from Texas, Florida, and six other states announced a unified border enforcement strategy at a summit in Austin, pledging mutual aid and shared resources.' },
      { type: 'paragraph', content: 'The coalition represents the most significant state-level challenge to federal immigration authority in decades.' }
    ],
    excerpt: 'Border governors announce unified enforcement strategy at Texas summit.',
    narrativeIds: ['narr-014'],
    themeIds: ['sub-035', 'sub-037'],
    personIds: ['person-027', 'person-028'],
    organizationIds: ['org-024', 'org-025'],
    locationIds: ['loc-010'],
    eventIds: ['event-031'],
    factionMentions: {
      'faction-001': { sentiment: 0.78,
      'faction-009': { sentiment: 0.65 },
      'faction-013': { sentiment: -0.58 }
    },
      'faction-002': { sentiment: -0.72 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-041',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.reuters.com/world/us/house-narrowly-passes-border-security-funding',
    publishedDate: '2025-09-15T17:00:00Z',
    publisherId: 'pub-int-reuters',
    title: 'House Narrowly Passes Border Security Funding Bill',
    author: 'Richard Cowan',
    contentBlocks: [
      { type: 'paragraph', content: 'The House of Representatives narrowly passed a $14 billion border security funding bill on a party-line vote, setting up a showdown with the Senate.' },
      { type: 'paragraph', content: 'Speaker Mike Johnson called the bill essential for national security, while Democrats criticized it as a poison pill designed to shut down the government.' }
    ],
    excerpt: 'House passes border security funding bill, Senate showdown looms.',
    narrativeIds: ['narr-012', 'narr-014'],
    themeIds: ['sub-031'],
    personIds: ['person-032'],
    organizationIds: ['org-020'],
    locationIds: ['loc-004'],
    eventIds: ['event-032'],
    factionMentions: {
      'faction-001': { sentiment: 0.62,
      'faction-007': { sentiment: 0.15 },
      'faction-010': { sentiment: 0.35 },
      'faction-016': { sentiment: -0.48 },
      'faction-009': { sentiment: 0.65 },
      'faction-013': { sentiment: -0.58 }
    },
      'faction-002': { sentiment: -0.45 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-042',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.cnn.com/2025/09/22/politics/senate-blocks-border-bill-shutdown',
    publishedDate: '2025-09-22T15:00:00Z',
    publisherId: 'pub-nat-cnn',
    title: 'Senate Democrats Block Border Bill, Government Shutdown Looms',
    author: 'Manu Raju',
    contentBlocks: [
      { type: 'paragraph', content: 'Senate Democrats blocked the House-passed border security bill, with Majority Leader Chuck Schumer calling it "ransom demand" that holds government funding hostage.' },
      { type: 'paragraph', content: 'With no compromise in sight, a government shutdown appears increasingly likely by October 1.' }
    ],
    excerpt: 'Senate blocks border bill, government shutdown appears imminent.',
    narrativeIds: ['narr-012'],
    themeIds: ['sub-031', 'sub-032'],
    personIds: ['person-033'],
    organizationIds: ['org-020'],
    locationIds: ['loc-004'],
    eventIds: ['event-033'],
    factionMentions: {
      'faction-001': { sentiment: -0.68,
      'faction-007': { sentiment: 0.15 },
      'faction-010': { sentiment: 0.35 },
      'faction-016': { sentiment: -0.48 }
    },
      'faction-002': { sentiment: 0.52 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-043',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.nytimes.com/2025/09/28/us/politics/budget-negotiations-collapse',
    publishedDate: '2025-09-28T18:00:00Z',
    publisherId: 'pub-nat-nyt',
    title: 'Budget Negotiations Collapse as Shutdown Deadline Approaches',
    author: 'Carl Hulse',
    contentBlocks: [
      { type: 'paragraph', content: 'Last-ditch budget negotiations collapsed Saturday night, making a government shutdown all but certain when the fiscal year ends Monday.' },
      { type: 'paragraph', content: 'Both parties blamed each other for the impasse, with each side accusing the other of putting politics above the needs of federal workers and the public.' }
    ],
    excerpt: 'Budget negotiations collapse, shutdown appears certain.',
    narrativeIds: ['narr-012'],
    themeIds: ['sub-031'],
    personIds: ['person-032', 'person-033'],
    organizationIds: ['org-020'],
    locationIds: ['loc-004'],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: -0.35,
      'faction-007': { sentiment: 0.15 },
      'faction-010': { sentiment: 0.35 },
      'faction-016': { sentiment: -0.48 }
    },
      'faction-002': { sentiment: -0.42 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-044',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.washingtonpost.com/politics/2025/10/01/government-shutdown-begins',
    publishedDate: '2025-10-01T00:30:00Z',
    publisherId: 'pub-nat-wapo',
    title: 'Government Shutdown Begins as Congress Fails to Reach Deal',
    author: 'Marianna Sotomayor',
    contentBlocks: [
      { type: 'paragraph', content: 'The federal government shut down at midnight after Congress failed to pass a funding bill, furloughing hundreds of thousands of federal workers.' },
      { type: 'paragraph', content: 'National parks closed and passport processing halted as essential services were reduced to skeleton crews.' }
    ],
    excerpt: 'Government shutdown begins, hundreds of thousands furloughed.',
    narrativeIds: ['narr-012'],
    themeIds: ['sub-032'],
    personIds: ['person-032', 'person-033'],
    organizationIds: ['org-020'],
    locationIds: ['loc-001'],
    eventIds: ['event-034'],
    factionMentions: {
      'faction-001': { sentiment: -0.52,
      'faction-007': { sentiment: 0.15 },
      'faction-010': { sentiment: 0.35 },
      'faction-016': { sentiment: -0.48 }
    },
      'faction-002': { sentiment: -0.55 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-045',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.cnn.com/2025/10/08/politics/shutdown-federal-workers-hardship',
    publishedDate: '2025-10-08T11:00:00Z',
    publisherId: 'pub-nat-cnn',
    title: 'Federal Workers Furloughed as Shutdown Enters Second Week',
    author: 'Devan Cole',
    contentBlocks: [
      { type: 'paragraph', content: 'The government shutdown entered its second week with no end in sight, leaving federal workers facing mounting financial hardship and uncertainty.' },
      { type: 'paragraph', content: 'Worker unions are calling for emergency legislation to end the impasse.' }
    ],
    excerpt: 'Federal workers face hardship as shutdown enters second week.',
    narrativeIds: ['narr-012'],
    themeIds: ['sub-032'],
    personIds: [],
    organizationIds: ['org-020'],
    locationIds: ['loc-001'],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: -0.48,
      'faction-007': { sentiment: 0.15 },
      'faction-010': { sentiment: 0.35 },
      'faction-016': { sentiment: -0.48 }
    },
      'faction-002': { sentiment: -0.45 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-046',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.reuters.com/world/us/shutdown-ends-compromise-reached',
    publishedDate: '2025-10-19T03:00:00Z',
    publisherId: 'pub-int-reuters',
    title: 'Government Reopens After 18-Day Shutdown, Compromise Reached',
    author: 'David Morgan',
    contentBlocks: [
      { type: 'paragraph', content: 'The government reopened early Sunday after an 18-day shutdown, following a compromise that neither party celebrated.' },
      { type: 'paragraph', content: 'The deal includes modest border security funding increases but falls far short of Republican demands.' }
    ],
    excerpt: 'Government reopens after 18-day shutdown with modest compromise.',
    narrativeIds: ['narr-012'],
    themeIds: ['sub-031', 'sub-032'],
    personIds: ['person-032', 'person-033'],
    organizationIds: ['org-020'],
    locationIds: ['loc-001'],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: 0.25,
      'faction-007': { sentiment: 0.15 },
      'faction-010': { sentiment: 0.35 },
      'faction-016': { sentiment: -0.48 }
    },
      'faction-002': { sentiment: 0.28 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-047',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.nytimes.com/2025/11/15/us/politics/supreme-court-election-cases',
    publishedDate: '2025-11-15T11:00:00Z',
    publisherId: 'pub-nat-nyt',
    title: 'Supreme Court Agrees to Expedite Election Certification Cases',
    author: 'Adam Liptak',
    contentBlocks: [
      { type: 'paragraph', content: 'The Supreme Court announced it will expedite consideration of multiple cases related to the January electoral certification, setting arguments for early December.' },
      { type: 'paragraph', content: 'Chief Justice John Roberts cited the "extraordinary importance" of resolving legal questions before the certification deadline.' }
    ],
    excerpt: 'Supreme Court expedites election certification cases ahead of January deadline.',
    narrativeIds: ['narr-011'],
    themeIds: ['sub-028'],
    personIds: ['person-031'],
    organizationIds: ['org-027'],
    locationIds: ['loc-009'],
    eventIds: ['event-037'],
    factionMentions: {
      'faction-001': { sentiment: 0.55,
      'faction-009': { sentiment: 0.65 },
      'faction-010': { sentiment: 0.35 },
      'faction-015': { sentiment: 0.25 }
    },
      'faction-002': { sentiment: -0.62 },
      'faction-004': { sentiment: 0.48 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-048',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.washingtonpost.com/politics/2025/11/20/capitol-security-january-certification',
    publishedDate: '2025-11-20T14:00:00Z',
    publisherId: 'pub-nat-wapo',
    title: 'Security Preparations Ramp Up Ahead of January Certification',
    author: 'Dan Lamothe',
    contentBlocks: [
      { type: 'paragraph', content: 'Capitol Police are implementing enhanced security measures ahead of the January electoral certification, including expanded perimeters and increased coordination with federal agencies.' },
      { type: 'paragraph', content: 'Officials say they have learned from the events of January 6, 2021 and are prepared for any contingency.' }
    ],
    excerpt: 'Capitol Police expand security preparations for January certification.',
    narrativeIds: ['narr-011'],
    themeIds: ['sub-029'],
    personIds: [],
    organizationIds: [],
    locationIds: ['loc-004'],
    eventIds: [],
    factionMentions: {
      'faction-004': { sentiment: 0.65,
      'faction-009': { sentiment: 0.65 },
      'faction-010': { sentiment: 0.35 },
      'faction-015': { sentiment: 0.25 }
    }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-049',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.cnn.com/2025/11/25/politics/aclu-election-law-challenges',
    publishedDate: '2025-11-25T13:00:00Z',
    publisherId: 'pub-nat-cnn',
    title: 'ACLU Announces Legal Challenges to State Election Laws',
    author: 'Ariane de Vogue',
    contentBlocks: [
      { type: 'paragraph', content: 'The ACLU announced a coordinated legal challenge to election laws in six states, arguing restrictions on mail-in voting and ID requirements violate constitutional protections.' },
      { type: 'paragraph', content: 'The cases target laws passed since 2021 that civil rights groups say disproportionately impact minority voters.' }
    ],
    excerpt: 'ACLU launches coordinated challenge to state election laws.',
    narrativeIds: ['narr-011'],
    themeIds: ['sub-030'],
    personIds: [],
    organizationIds: ['org-030'],
    locationIds: ['loc-009'],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: -0.72,
      'faction-009': { sentiment: 0.65 },
      'faction-010': { sentiment: 0.35 },
      'faction-015': { sentiment: 0.25 }
    },
      'faction-002': { sentiment: 0.68 },
      'faction-003': { sentiment: 0.55 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-050',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.foxnews.com/politics/fbi-leadership-transition',
    publishedDate: '2025-12-01T15:00:00Z',
    publisherId: 'pub-nat-fox',
    title: 'FBI Leadership Shake-Up Announced Amid Political Transition',
    author: 'Jake Gibson',
    contentBlocks: [
      { type: 'paragraph', content: 'Kash Patel has been announced as the incoming FBI Director, marking a significant shift in the bureau\'s leadership as the new administration takes shape.' },
      { type: 'paragraph', content: 'Patel, a former deputy to the Director of National Intelligence, has pledged to reform the FBI\'s approach to political investigations.' }
    ],
    excerpt: 'Kash Patel announced as incoming FBI Director.',
    narrativeIds: ['narr-011'],
    themeIds: ['sub-028'],
    personIds: ['person-036'],
    organizationIds: ['org-012'],
    locationIds: ['loc-001'],
    eventIds: ['event-038'],
    factionMentions: {
      'faction-001': { sentiment: 0.72,
      'faction-009': { sentiment: 0.65 },
      'faction-010': { sentiment: 0.35 },
      'faction-015': { sentiment: 0.25 }
    },
      'faction-002': { sentiment: -0.78 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-051',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.washingtonpost.com/politics/2025/12/10/capitol-police-security-perimeter',
    publishedDate: '2025-12-10T10:00:00Z',
    publisherId: 'pub-nat-wapo',
    title: 'Capitol Police Expand Security Perimeter for Certification',
    author: 'Paul Kane',
    contentBlocks: [
      { type: 'paragraph', content: 'Capitol Police have expanded the security perimeter around the Capitol complex, with barriers extending several blocks in all directions ahead of the January certification.' },
      { type: 'paragraph', content: 'The measures represent the most extensive security preparations since the January 6, 2021 attack.' }
    ],
    excerpt: 'Capitol Police implement most extensive security measures since January 6.',
    narrativeIds: ['narr-011'],
    themeIds: ['sub-029'],
    personIds: [],
    organizationIds: [],
    locationIds: ['loc-004'],
    eventIds: [],
    factionMentions: {
      'faction-004': { sentiment: 0.58,
      'faction-009': { sentiment: 0.65 },
      'faction-010': { sentiment: 0.35 },
      'faction-015': { sentiment: 0.25 }
    }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-052',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.foxnews.com/politics/heritage-foundation-transition-recommendations',
    publishedDate: '2025-12-15T12:00:00Z',
    publisherId: 'pub-nat-fox',
    title: 'Heritage Foundation Releases Transition Policy Recommendations',
    author: 'Chad Pergram',
    contentBlocks: [
      { type: 'paragraph', content: 'The Heritage Foundation released its comprehensive policy recommendations for the incoming administration, covering everything from border security to federal workforce reform.' },
      { type: 'paragraph', content: 'The document builds on the controversial Project 2025 framework, providing detailed implementation guidance.' }
    ],
    excerpt: 'Heritage Foundation releases comprehensive transition policy recommendations.',
    narrativeIds: ['narr-011', 'narr-012'],
    themeIds: ['sub-028', 'sub-031'],
    personIds: [],
    organizationIds: ['org-031'],
    locationIds: ['loc-009'],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: 0.82,
      'faction-009': { sentiment: 0.65 },
      'faction-010': { sentiment: 0.35 },
      'faction-015': { sentiment: 0.25 },
      'faction-007': { sentiment: 0.15 },
      'faction-016': { sentiment: -0.48 }
    },
      'faction-002': { sentiment: -0.75 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-053',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.nytimes.com/2025/12/20/health/opioid-funding-disputes',
    publishedDate: '2025-12-20T09:00:00Z',
    publisherId: 'pub-nat-nyt',
    title: 'Opioid Funding Disputes Continue as Year Ends',
    author: 'Jan Hoffman',
    contentBlocks: [
      { type: 'paragraph', content: 'Legal disputes over opioid settlement allocation continue as the year ends, with the Supreme Court yet to rule on state challenges to the distribution formula.' },
      { type: 'paragraph', content: 'Communities awaiting funds express frustration at the delays while the opioid crisis claims over 100,000 lives annually.' }
    ],
    excerpt: 'Opioid settlement disputes continue, delaying funds to affected communities.',
    narrativeIds: ['narr-013'],
    themeIds: ['sub-034'],
    personIds: ['person-035'],
    organizationIds: ['org-022', 'org-027'],
    locationIds: ['loc-001'],
    eventIds: [],
    factionMentions: {
      'faction-005': { sentiment: -0.38,
      'faction-016': { sentiment: -0.48 }
    },
      'faction-006': { sentiment: -0.32 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-054',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.reuters.com/world/us/border-crossings-five-year-low',
    publishedDate: '2025-12-28T14:00:00Z',
    publisherId: 'pub-int-reuters',
    title: 'Border Crossings Reach Five-Year Low, Debate Over Credit Continues',
    author: 'Ted Hesson',
    contentBlocks: [
      { type: 'paragraph', content: 'Border crossings have fallen to a five-year low, but debate continues over whether state enforcement efforts or broader economic and international factors deserve credit.' },
      { type: 'paragraph', content: 'Republican governors claim their enforcement coalition has deterred illegal crossings, while critics point to improved conditions in source countries.' }
    ],
    excerpt: 'Border crossings at five-year low, debate over causes continues.',
    narrativeIds: ['narr-014'],
    themeIds: ['sub-037'],
    personIds: [],
    organizationIds: [],
    locationIds: ['loc-011'],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: 0.65,
      'faction-009': { sentiment: 0.65 },
      'faction-013': { sentiment: -0.58 }
    },
      'faction-002': { sentiment: -0.42 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-055',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.nytimes.com/2026/01/02/us/politics/election-certification-smooth',
    publishedDate: '2026-01-02T10:00:00Z',
    publisherId: 'pub-nat-nyt',
    title: 'Election Certification Expected to Proceed Smoothly',
    author: 'Jonathan Weisman',
    contentBlocks: [
      { type: 'paragraph', content: 'With the Supreme Court having resolved key legal challenges, officials express confidence that the January electoral certification will proceed without disruption.' },
      { type: 'paragraph', content: 'Security preparations are in place and both parties have signaled acceptance of the process.' }
    ],
    excerpt: 'Officials confident election certification will proceed smoothly.',
    narrativeIds: ['narr-011'],
    themeIds: ['sub-028', 'sub-029'],
    personIds: [],
    organizationIds: ['org-027'],
    locationIds: ['loc-004'],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: 0.45,
      'faction-009': { sentiment: 0.65 },
      'faction-010': { sentiment: 0.35 },
      'faction-015': { sentiment: 0.25 }
    },
      'faction-002': { sentiment: 0.38 },
      'faction-004': { sentiment: 0.52 }
    },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-056',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    url: 'https://www.cnn.com/2026/01/03/politics/new-congress-sworn-in',
    publishedDate: '2026-01-03T14:00:00Z',
    publisherId: 'pub-nat-cnn',
    title: 'New Congress Sworn In Amid Partisan Tensions',
    author: 'Annie Grayer',
    contentBlocks: [
      { type: 'paragraph', content: 'The new Congress was sworn in Friday amid continued partisan tensions, with Speaker Mike Johnson and Majority Leader Chuck Schumer offering dueling visions for the year ahead.' },
      { type: 'paragraph', content: 'The October shutdown remains a sore point, with both parties accusing the other of political brinkmanship.' }
    ],
    excerpt: 'New Congress sworn in amid continued partisan tensions.',
    narrativeIds: ['narr-011', 'narr-012'],
    themeIds: ['sub-028', 'sub-031'],
    personIds: ['person-032', 'person-033'],
    organizationIds: ['org-020'],
    locationIds: ['loc-004'],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: 0.35,
      'faction-009': { sentiment: 0.65 },
      'faction-010': { sentiment: 0.35 },
      'faction-015': { sentiment: 0.25 },
      'faction-007': { sentiment: 0.15 },
      'faction-016': { sentiment: -0.48 }
    },
      'faction-002': { sentiment: 0.32 }
    },
    highlights: [],
    comments: []
  },
  // New social media documents (doc-057 to doc-070)
  {
    id: 'doc-057',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://reddit.com/r/politics/comments/greenland_megathread',
    publishedDate: '2025-07-15T14:00:00Z',
    publisherId: 'pub-reddit',
    title: 'Reddit megathread: European leaders respond to Greenland comments',
    author: {
      username: 'u/politics_watcher_2025',
      displayName: 'politics_watcher_2025',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: '**Megathread: European leaders respond to Trump\'s Greenland acquisition comments**\n\nThis thread is for discussing the ongoing diplomatic fallout from recent Greenland statements. Please keep discussion civil.\n\nKey developments:\n- Macron calls emergency EU meeting\n- Danish PM rejects any discussion of sale\n- Greenland Premier says "not for sale at any price"' }
    ],
    excerpt: 'Reddit megathread discussing European response to Greenland acquisition comments.',
    narrativeIds: ['narr-005'],
    themeIds: ['sub-009', 'sub-010'],
    personIds: ['person-003', 'person-004'],
    organizationIds: ['org-009'],
    locationIds: ['loc-005'],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: 0.45 },
      'faction-002': { sentiment: -0.65 }
    },
    metrics: { likes: 15420, comments: 3850, platform: 'reddit' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-058',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://x.com/political_analyst/status/immigration_thread',
    publishedDate: '2025-08-10T16:30:00Z',
    publisherId: 'pub-x',
    title: 'X thread: Analysis of DOJ immigration enforcement strategy',
    author: {
      username: '@political_analyst',
      displayName: 'Political Analysis Daily',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'THREAD: Let\'s break down DOJ\'s new immigration enforcement strategy 🧵\n\n1/ The subpoena threats against state officials are unprecedented\n2/ Legal experts say this could set dangerous precedents for federalism\n3/ Minnesota is unlikely to comply without court orders\n4/ This is heading to SCOTUS eventually' }
    ],
    excerpt: 'X thread analyzing DOJ immigration enforcement strategy and legal implications.',
    narrativeIds: ['narr-006', 'narr-009'],
    themeIds: ['sub-012', 'sub-013'],
    personIds: ['person-007'],
    organizationIds: ['org-010', 'org-011'],
    locationIds: ['loc-002'],
    eventIds: [],
    factionMentions: {
      'faction-001': { sentiment: 0.35 },
      'faction-002': { sentiment: -0.55 },
      'faction-004': { sentiment: -0.42 }
    },
    metrics: { likes: 8750, comments: 1420, shares: 2850, platform: 'x' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-059',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://tiktok.com/@nutrition_facts/video/preservatives',
    publishedDate: '2025-09-05T12:00:00Z',
    publisherId: 'pub-tiktok',
    title: 'TikTok: Nutritionist explains food preservative risks',
    author: {
      username: '@nutrition_facts',
      displayName: 'Dr. Sarah Nutrition',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'POV: You just learned what sodium nitrite does to your body 😱 The new study linking it to 32% higher cancer risk is WILD. Here\'s what I\'m removing from my diet immediately... #health #nutrition #cancerprevention #foodsafety' }
    ],
    video: {
      thumbnailUrl: 'img/placeholders/video-thumbnail.svg',
      duration: 95
    },
    excerpt: 'TikTok explaining food preservative cancer risk study findings.',
    narrativeIds: ['narr-003'],
    themeIds: ['sub-007', 'sub-008'],
    personIds: [],
    organizationIds: [],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-006': { sentiment: 0.72 }
    },
    metrics: { views: 3500000, likes: 285000, shares: 125000, comments: 42000, platform: 'tiktok' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-060',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://facebook.com/groups/minnesota_community/posts/ice_discussion',
    publishedDate: '2025-10-12T09:00:00Z',
    publisherId: 'pub-facebook',
    title: 'Facebook: Minnesota community group discusses ICE presence',
    author: {
      username: 'minnesota.neighbor',
      displayName: 'Minnesota Community Watch',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Has anyone else noticed increased federal vehicle presence in the Uptown area? Our neighborhood watch wants to make sure everyone knows their rights. Sharing resources in comments. Please be safe and look out for each other. 🙏' }
    ],
    excerpt: 'Facebook community group discussing ICE presence in Minneapolis neighborhoods.',
    narrativeIds: ['narr-006'],
    themeIds: ['sub-013'],
    personIds: [],
    organizationIds: ['org-011'],
    locationIds: ['loc-002'],
    eventIds: [],
    factionMentions: {
      'faction-002': { sentiment: 0.55 },
      'faction-003': { sentiment: 0.62 }
    },
    metrics: { likes: 2840, comments: 892, shares: 1250, platform: 'facebook' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-061',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://linkedin.com/posts/policy-expert_dietary-guidelines',
    publishedDate: '2025-11-08T11:00:00Z',
    publisherId: 'pub-linkedin',
    title: 'LinkedIn: Policy expert critiques new dietary guidelines',
    author: {
      username: 'jennifer.policy.expert',
      displayName: 'Jennifer Morrison, PhD - Health Policy',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'The new USDA dietary guidelines represent a significant departure from scientific consensus. As someone who has worked in nutrition policy for 20 years, I\'m deeply concerned about the environmental and public health implications of recommending near-doubled meat consumption. My full analysis: [link]\n\n#HealthPolicy #Nutrition #PublicHealth' }
    ],
    excerpt: 'LinkedIn post from health policy expert critiquing new dietary guidelines.',
    narrativeIds: ['narr-010'],
    themeIds: ['sub-027'],
    personIds: [],
    organizationIds: [],
    locationIds: ['loc-001'],
    eventIds: [],
    factionMentions: {
      'faction-006': { sentiment: 0.48 }
    },
    metrics: { likes: 4250, comments: 328, shares: 892, platform: 'linkedin' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-062',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://reddit.com/r/news/comments/judge_shooting',
    publishedDate: '2025-11-18T20:00:00Z',
    publisherId: 'pub-reddit',
    title: 'Reddit: Discussion on Indiana judge shooting and judicial safety',
    author: {
      username: 'u/indiana_local_news',
      displayName: 'indiana_local_news',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: '**Indiana judge and wife shot at home - suspect at large**\n\nJudge Steven Meyer and his wife Kimberly were shot at their Lafayette home. Both in stable condition. This is terrifying for our community.\n\nAnyone else concerned about the rise in threats against judges? The Indiana Supreme Court Chief Justice just urged all judges to "remain vigilant."' }
    ],
    excerpt: 'Reddit discussion on Indiana judge shooting and concerns about judicial safety.',
    narrativeIds: ['narr-007'],
    themeIds: ['sub-014', 'sub-015'],
    personIds: [],
    organizationIds: [],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-004': { sentiment: -0.75 }
    },
    metrics: { likes: 8920, comments: 2150, platform: 'reddit' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-063',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://x.com/border_reporter/status/texas_guard',
    publishedDate: '2025-12-05T15:00:00Z',
    publisherId: 'pub-x',
    title: 'X post: Reporter documents Texas National Guard border deployment',
    author: {
      username: '@border_reporter',
      displayName: 'Border Coverage Network',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Just witnessed another convoy of Texas National Guard vehicles heading to Eagle Pass. Governor Abbott\'s deployment now exceeds 5,000 troops. This is the largest state border operation in modern history. Federal officials are not happy. 📸 [photos attached]' }
    ],
    excerpt: 'X post documenting Texas National Guard border deployment.',
    narrativeIds: ['narr-014'],
    themeIds: ['sub-035', 'sub-036'],
    personIds: ['person-027', 'person-028'],
    organizationIds: ['org-024', 'org-025'],
    locationIds: ['loc-010', 'loc-011'],
    eventIds: ['event-027'],
    factionMentions: {
      'faction-001': { sentiment: 0.68 },
      'faction-002': { sentiment: -0.52 }
    },
    metrics: { likes: 12500, comments: 3420, shares: 5800, platform: 'x' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-064',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://tiktok.com/@govt_worker/video/shutdown_diary',
    publishedDate: '2025-10-08T18:00:00Z',
    publisherId: 'pub-tiktok',
    title: 'TikTok: Federal worker documents shutdown impact',
    author: {
      username: '@govt_worker',
      displayName: 'Fed Life Stories',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Day 5 of the shutdown. Still no idea when we\'ll get paid. My rent is due next week. This is the reality for 800,000 federal workers right now. We\'re not political pawns, we\'re people. #shutdown #federalworkers #governmentshutdown' }
    ],
    video: {
      thumbnailUrl: 'img/placeholders/video-thumbnail.svg',
      duration: 78
    },
    excerpt: 'TikTok documenting federal worker experience during government shutdown.',
    narrativeIds: ['narr-012'],
    themeIds: ['sub-031', 'sub-032'],
    personIds: [],
    organizationIds: ['org-020'],
    locationIds: ['loc-001'],
    eventIds: [],
    factionMentions: {
      'faction-002': { sentiment: 0.45 }
    },
    metrics: { views: 2800000, likes: 195000, shares: 85000, comments: 28000, platform: 'tiktok' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-065',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://facebook.com/groups/church_community/posts/protest_response',
    publishedDate: '2026-01-19T22:00:00Z',
    publisherId: 'pub-facebook',
    title: 'Facebook: Church members respond to protest disruption',
    author: {
      username: 'cities.church.member',
      displayName: 'Cities Church Community',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Our church family was deeply shaken by Sunday\'s events. Whatever your views on politics, disrupting worship is not the answer. We are praying for peace and understanding in our community. Pastor David has asked us to respond with grace. Please join us in prayer. 🙏✝️' }
    ],
    excerpt: 'Facebook post from church community responding to protest disruption.',
    narrativeIds: ['narr-008'],
    themeIds: ['sub-016', 'sub-017'],
    personIds: [],
    organizationIds: [],
    locationIds: ['loc-002'],
    eventIds: ['event-021'],
    factionMentions: {
      'faction-001': { sentiment: 0.55 },
      'faction-005': { sentiment: 0.72 }
    },
    metrics: { likes: 1850, comments: 425, shares: 320, platform: 'facebook' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-066',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://linkedin.com/posts/legal-analyst_face-act',
    publishedDate: '2026-01-20T10:00:00Z',
    publisherId: 'pub-linkedin',
    title: 'LinkedIn: Legal analyst explains FACE Act implications',
    author: {
      username: 'michael.legal.analysis',
      displayName: 'Michael Chen, JD - Constitutional Law',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'The DOJ\'s invocation of the FACE Act for the Minnesota church protest raises significant legal questions. Originally designed to protect abortion clinics, its 2021 expansion to houses of worship creates novel enforcement scenarios. Key considerations for legal professionals:\n\n1. Intent requirements under the statute\n2. First Amendment assembly protections\n3. Selective prosecution concerns\n\nFull analysis on my blog. #Law #ConstitutionalLaw #FirstAmendment' }
    ],
    excerpt: 'LinkedIn legal analysis of FACE Act application to church protest.',
    narrativeIds: ['narr-008', 'narr-009'],
    themeIds: ['sub-016', 'sub-018'],
    personIds: [],
    organizationIds: ['org-010'],
    locationIds: ['loc-001'],
    eventIds: [],
    factionMentions: {
      'faction-004': { sentiment: -0.35 }
    },
    metrics: { likes: 3280, comments: 245, shares: 620, platform: 'linkedin' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-067',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://reddit.com/r/opioidcrisis/comments/settlement_funds',
    publishedDate: '2025-09-22T14:00:00Z',
    publisherId: 'pub-reddit',
    title: 'Reddit: Community discusses opioid settlement distribution',
    author: {
      username: 'u/recovery_advocate',
      displayName: 'recovery_advocate',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: '**Where is the opioid settlement money going?**\n\nMy county was devastated by the opioid crisis. We lost so many people. Now that the settlement funds are being distributed, I\'m trying to track where the money is actually going.\n\nHas anyone seen actual treatment programs funded in their area? Or is it all going to general budgets?\n\nThis matters. People are still dying.' }
    ],
    excerpt: 'Reddit discussion on opioid settlement fund distribution and accountability.',
    narrativeIds: ['narr-013'],
    themeIds: ['sub-033', 'sub-034'],
    personIds: [],
    organizationIds: [],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-002': { sentiment: 0.35 },
      'faction-003': { sentiment: 0.42 }
    },
    metrics: { likes: 4520, comments: 1280, platform: 'reddit' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-068',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://x.com/capitol_watch/status/certification_prep',
    publishedDate: '2025-12-20T11:00:00Z',
    publisherId: 'pub-x',
    title: 'X post: Security preparations for election certification',
    author: {
      username: '@capitol_watch',
      displayName: 'Capitol Security Monitor',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'NEW: Capitol Police expanding security perimeter ahead of January certification. Sources say they\'re preparing for potential challenges. National Guard on standby. Very different posture than 2020. The lessons of J6 are being applied. 🏛️' }
    ],
    excerpt: 'X post reporting on Capitol security preparations for election certification.',
    narrativeIds: ['narr-011'],
    themeIds: ['sub-028', 'sub-029'],
    personIds: ['person-031'],
    organizationIds: ['org-020', 'org-030'],
    locationIds: ['loc-004'],
    eventIds: ['event-037'],
    factionMentions: {
      'faction-001': { sentiment: 0.25 },
      'faction-002': { sentiment: 0.32 },
      'faction-004': { sentiment: -0.45 }
    },
    metrics: { likes: 9850, comments: 2840, shares: 4200, platform: 'x' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-069',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://tiktok.com/@plantbased_living/video/rfk_guidelines',
    publishedDate: '2025-12-28T16:00:00Z',
    publisherId: 'pub-tiktok',
    title: 'TikTok: Vegan influencer responds to new dietary guidelines',
    author: {
      username: '@plantbased_living',
      displayName: 'Plant Based Sarah',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'The government wants you to eat MORE meat?? In 2025?? With everything we know about climate change and cancer risk?? Make it make sense 😭 Here\'s why I\'m ignoring these guidelines and you should too #vegan #plantbased #dietaryguidelines #healthyeating' }
    ],
    video: {
      thumbnailUrl: 'img/placeholders/video-thumbnail.svg',
      duration: 112
    },
    excerpt: 'TikTok response to new dietary guidelines from vegan influencer perspective.',
    narrativeIds: ['narr-010', 'narr-003'],
    themeIds: ['sub-007', 'sub-027'],
    personIds: [],
    organizationIds: [],
    locationIds: [],
    eventIds: [],
    factionMentions: {
      'faction-006': { sentiment: 0.85 }
    },
    metrics: { views: 4200000, likes: 320000, shares: 145000, comments: 52000, platform: 'tiktok' },
    highlights: [],
    comments: []
  },
  {
    id: 'doc-070',
    documentType: 'social_media',
    repositoryId: 'repo-osint',
    classification: 'U',
    url: 'https://facebook.com/groups/california_politics/posts/newsom_lawsuit',
    publishedDate: '2026-01-05T13:00:00Z',
    publisherId: 'pub-facebook',
    title: 'Facebook: Discussion of California lawsuit against border coalition',
    author: {
      username: 'ca.politics.discussion',
      displayName: 'California Political Discussion',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    contentBlocks: [
      { type: 'paragraph', content: 'Governor Newsom just filed the federal lawsuit against Texas and Florida\'s border operations. This is going to be a landmark federalism case. What do you all think - does California have standing here? Is this about principles or politics?\n\nPlease keep discussion respectful. 🗳️' }
    ],
    excerpt: 'Facebook group discussing California federal lawsuit against border state coalition.',
    narrativeIds: ['narr-014'],
    themeIds: ['sub-035', 'sub-037'],
    personIds: ['person-029', 'person-030'],
    organizationIds: ['org-026'],
    locationIds: ['loc-009'],
    eventIds: ['event-030'],
    factionMentions: {
      'faction-001': { sentiment: -0.48 },
      'faction-002': { sentiment: 0.62 }
    },
    metrics: { likes: 3420, comments: 1850, shares: 920, platform: 'facebook' },
    highlights: [],
    comments: []
  }
];
