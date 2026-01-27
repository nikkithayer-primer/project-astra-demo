/**
 * Documents for American Politics dataset
 * Includes news articles, social posts, and internal documents
 */

export const documents = [
  // Greenland/Trump narrative documents (narr-005)
  {
    id: 'doc-001',
    documentType: 'news_article',
    classification: 'U',
    title: 'Macron warns of world where "international law is trampled" in Davos speech',
    url: 'https://reuters.com/world/macron-davos-trump-greenland-2026',
    publishedDate: '2026-01-20T10:30:00Z',
    publisherId: 'pub-int-reuters',
    author: 'Jean-Baptiste Vey',
    excerpt: 'French President Emmanuel Macron delivered a thinly veiled critique of President Trump\'s foreign policy at the World Economic Forum, warning of dangerous precedents being set.',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
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
      { type: 'image', imageUrl: 'img/placeholders/image-placeholder.svg', caption: 'World leaders gathered at the Congress Centre in Davos for the annual World Economic Forum.' },
      { type: 'heading', content: 'Washington Dismisses Criticism', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The White House did not immediately respond to Macron\'s remarks. However, sources close to the administration told Reuters that President Trump views European criticism as "predictable posturing" that will not affect his policy decisions.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Republican lawmakers largely rallied behind the president. Senator Tom Cotton of Arkansas called Macron\'s speech "the usual European hand-wringing" and said the U.S. has legitimate security interests in the Arctic region.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Democratic leaders, however, expressed concern about the administration\'s approach. Senate Minority Leader Chuck Schumer called the Greenland situation "an unnecessary crisis that damages our relationships with our oldest allies."', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-005'],
    subNarrativeIds: ['sub-009'],
    personIds: ['person-003', 'person-004'],
    organizationIds: ['org-009'],
    locationIds: ['loc-005'],
    eventIds: ['event-006'],
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
    classification: 'U',
    title: 'Trump posts private Macron message on social media: "I do not understand what you are doing"',
    url: 'https://cnn.com/politics/trump-macron-greenland-message',
    publishedDate: '2026-01-20T12:15:00Z',
    publisherId: 'pub-nat-cnn',
    author: 'Kevin Liptak and Betsy Klein',
    excerpt: 'President Trump shared what appeared to be a private diplomatic message from French President Macron questioning his Greenland acquisition strategy.',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
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
    subNarrativeIds: ['sub-010'],
    personIds: ['person-003', 'person-004'],
    organizationIds: [],
    locationIds: ['loc-001'],
    eventIds: ['event-007']
  },
  {
    id: 'doc-003',
    documentType: 'news_article',
    classification: 'U',
    title: 'Von der Leyen calls for "new form of European independence" amid Trump tensions',
    url: 'https://bbc.com/news/world-europe-von-der-leyen-independence',
    publishedDate: '2026-01-20T14:00:00Z',
    publisherId: 'pub-int-bbc',
    author: 'Katya Adler',
    excerpt: 'European Commission President Ursula von der Leyen said the EU must develop greater autonomy in response to "geopolitical shocks" from across the Atlantic.',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
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
      { type: 'image', imageUrl: 'img/placeholders/image-placeholder.svg', caption: 'EU and member state flags fly outside the European Commission headquarters in Brussels.' },
      { type: 'heading', content: 'Mixed Reactions', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The proposals received a mixed reception from EU member states. France and Germany expressed strong support, while Poland and the Baltic states warned against undermining the transatlantic alliance.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Polish Foreign Minister Radosław Sikorski cautioned that "Europe cannot defend itself without the United States, and we should not pretend otherwise. Our focus should be on repairing the relationship, not replacing it."', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-005'],
    subNarrativeIds: ['sub-011'],
    personIds: ['person-005'],
    organizationIds: ['org-008'],
    locationIds: ['loc-005'],
    eventIds: ['event-009']
  },
  {
    id: 'doc-004',
    documentType: 'news_article',
    classification: 'U',
    title: 'Greenland PM: "We demand respect for the world order"',
    url: 'https://guardian.com/world/greenland-pm-trump-response',
    publishedDate: '2026-01-20T13:30:00Z',
    publisherId: 'pub-int-guardian',
    author: 'Jon Henley',
    excerpt: 'Greenland\'s Prime Minister Múte Bourup Egede responded forcefully to Trump\'s acquisition threats, calling for respect of international norms.',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
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
      { type: 'image', imageUrl: 'img/placeholders/image-placeholder.svg', caption: 'Protesters in Nuuk hold signs opposing American acquisition of Greenland.' },
      { type: 'heading', content: 'Danish Support', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Danish Prime Minister Mette Frederiksen reaffirmed Denmark\'s support for Greenland\'s self-determination. "Greenland belongs to the Greenlandic people," she said in a statement. "Denmark will always support their right to decide their own future."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The Danish government has recalled its ambassador to Washington for "consultations" and summoned the U.S. ambassador to Copenhagen to explain the administration\'s position.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Meanwhile, the Arctic Council, of which both the U.S. and Denmark are members, announced an emergency session to discuss "recent statements that threaten regional stability."', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-005'],
    subNarrativeIds: ['sub-011'],
    personIds: ['person-006', 'person-003'],
    organizationIds: [],
    locationIds: ['loc-006'],
    eventIds: ['event-008']
  },

  // Minnesota immigration documents (narr-006)
  {
    id: 'doc-005',
    documentType: 'news_article',
    classification: 'U',
    title: 'DOJ plans subpoenas for Minnesota AG, governor over ICE protest "obstruction"',
    url: 'https://nytimes.com/2026/01/20/us/politics/doj-minnesota-subpoenas',
    publishedDate: '2026-01-20T11:00:00Z',
    publisherId: 'pub-nat-nyt',
    author: 'Charlie Savage and Miriam Jordan',
    excerpt: 'The Department of Justice announced plans to subpoena Minnesota\'s top officials in an escalating confrontation over immigration enforcement.',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
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
      { type: 'image', imageUrl: 'img/placeholders/image-placeholder.svg', caption: 'Protesters gather outside the federal building in Minneapolis to oppose ICE operations.' },
      { type: 'heading', content: 'Legal Experts Divided', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Constitutional law experts are divided on the legality of the DOJ\'s actions. Some argue that state officials have a legitimate role in setting local law enforcement priorities, while others contend that immigration enforcement is an exclusively federal function.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"This is uncharted territory," said Ilya Shapiro, a constitutional scholar at the Manhattan Institute. "The courts will ultimately have to decide where state sovereignty ends and federal supremacy begins."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The confrontation has drawn comparisons to the civil rights era, when the federal government clashed with state officials over desegregation. However, in this case, the federal government is seeking to compel state cooperation rather than override discriminatory state policies.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-006'],
    subNarrativeIds: ['sub-012'],
    personIds: ['person-007'],
    organizationIds: ['org-010'],
    locationIds: ['loc-002'],
    eventIds: ['event-010'],
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
    classification: 'U',
    title: 'Federal judge rules protesters cannot be arrested without cause, DOJ appeals',
    url: 'https://washingtonpost.com/national/minnesota-ice-ruling-appeal',
    publishedDate: '2026-01-20T09:45:00Z',
    publisherId: 'pub-nat-wapo',
    author: 'Devlin Barrett and Maria Sacchetti',
    excerpt: 'A federal judge issued an injunction protecting peaceful protesters from arrest by federal agents, but the DOJ immediately filed an appeal.',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
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
    subNarrativeIds: ['sub-013'],
    personIds: ['person-017'],
    organizationIds: ['org-010', 'org-011'],
    locationIds: ['loc-002'],
    eventIds: ['event-011']
  },
  {
    id: 'doc-007',
    documentType: 'news_article',
    classification: 'U',
    title: 'FBI pivots civil rights probe from ICE agent to slain protester Renee Good',
    url: 'https://msnbc.com/news/fbi-renee-good-investigation-pivot',
    publishedDate: '2026-01-18T16:00:00Z',
    publisherId: 'pub-nat-msnbc',
    author: 'Julia Ainsley',
    excerpt: 'Critics are outraged after learning the FBI\'s investigation into the fatal shooting has shifted focus from the agent to the victim and her widow.',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
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
      { type: 'image', imageUrl: 'img/placeholders/image-placeholder.svg', caption: 'Community members hold a vigil for Renee Good outside the Minneapolis Federal Building.' },
      { type: 'heading', content: 'DOJ Defends Investigation', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'A Justice Department spokesperson defended the investigation\'s scope, saying it would be "inappropriate to comment on specific investigative steps" but that all relevant facts were being examined.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"A thorough investigation requires examining all circumstances surrounding the incident," the spokesperson said. "We will follow the evidence wherever it leads."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The ICE agent who shot Good has been placed on administrative leave pending the outcome of the investigation. His identity has not been publicly released.', portionMark: { classification: 'U', handling: '' } },
      { type: 'heading', content: 'Civil Rights Groups Respond', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The ACLU of Minnesota called the investigation\'s new direction "a perversion of justice" and announced plans to file a lawsuit on behalf of the Good family.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"When the government investigates murder victims instead of killers, we have lost our way as a nation," said ACLU-MN Executive Director John Gordon. "Renee Good was exercising her First Amendment rights when she was killed by a federal agent. That agent should be the focus of any investigation."', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-006'],
    subNarrativeIds: ['sub-015'],
    personIds: ['person-008'],
    organizationIds: ['org-011', 'org-012'],
    locationIds: ['loc-002'],
    eventIds: ['event-013', 'event-014']
  },

  // Church protest documents (narr-008)
  {
    id: 'doc-008',
    documentType: 'news_article',
    classification: 'U',
    title: 'Protesters disrupt service at church where ICE official serves as pastor',
    url: 'https://cnn.com/us/minnesota-church-ice-protest',
    publishedDate: '2026-01-19T14:30:00Z',
    publisherId: 'pub-nat-cnn',
    author: 'Omar Jimenez and Ashley Killough',
    excerpt: 'Anti-ICE demonstrators interrupted Sunday worship at Cities Church in St. Paul, targeting David Easterwood who serves dual roles as ICE official and pastor.',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
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
    subNarrativeIds: ['sub-021'],
    personIds: ['person-014', 'person-015'],
    organizationIds: ['org-016', 'org-011'],
    locationIds: ['loc-008'],
    eventIds: ['event-017']
  },
  {
    id: 'doc-009',
    documentType: 'news_article',
    classification: 'U',
    title: 'AG Bondi announces FACE Act investigation: "Full force of federal law"',
    url: 'https://foxnews.com/politics/bondi-face-act-church-protest',
    publishedDate: '2026-01-19T19:00:00Z',
    publisherId: 'pub-nat-fox',
    author: 'Bill Melugin',
    excerpt: 'Attorney General Pam Bondi declared that attacks against law enforcement and intimidation of Christians will be prosecuted to the fullest extent.',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
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
    subNarrativeIds: ['sub-018'],
    personIds: ['person-013', 'person-012'],
    organizationIds: ['org-010'],
    locationIds: ['loc-001'],
    eventIds: ['event-018']
  },
  {
    id: 'doc-010',
    documentType: 'news_article',
    classification: 'U',
    title: 'DOJ threatens charges against journalist Don Lemon for covering protest',
    url: 'https://guardian.com/media/don-lemon-doj-threat-minnesota',
    publishedDate: '2026-01-20T13:00:00Z',
    publisherId: 'pub-int-guardian',
    author: 'Ed Pilkington',
    excerpt: 'Assistant AG Harmeet Dhillon said Lemon is "on notice" and cannot use journalism as a shield, prompting press freedom concerns.',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
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
    subNarrativeIds: ['sub-019'],
    personIds: ['person-012', 'person-016'],
    organizationIds: ['org-010'],
    locationIds: ['loc-008'],
    eventIds: ['event-019']
  },
  {
    id: 'doc-011',
    documentType: 'social_post',
    url: 'https://truthsocial.com/@realDonaldTrump/posts/123456789',
    publishedDate: '2026-01-21T06:30:00Z',
    publisherId: 'pub-x',
    author: {
      username: '@realDonaldTrump',
      displayName: 'Donald J. Trump',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    content: 'The agitators and insurrectionists who disrupted a Church Service in Minnesota are highly trained, and should be thrown in jail, or thrown out of the Country. They are not "protesters," they are professional troublemakers who are destroying our Country. LAW AND ORDER!',
    engagement: {
      replies: 45821,
      likes: 187432,
      reblogs: 52847
    },
    narrativeIds: ['narr-008'],
    subNarrativeIds: ['sub-020'],
    personIds: ['person-003'],
    organizationIds: [],
    locationIds: ['loc-001'],
    eventIds: ['event-020']
  },
  {
    id: 'doc-012',
    documentType: 'news_article',
    classification: 'U',
    title: 'Former NAACP president: "How can anyone who claims to be Christian condone this?"',
    url: 'https://cnn.com/us/nekima-levy-armstrong-ice-pastor-interview',
    publishedDate: '2026-01-20T10:00:00Z',
    publisherId: 'pub-nat-cnn',
    author: 'Sara Sidner',
    excerpt: 'Nekima Levy Armstrong questioned the moral standing of an ICE official serving as a pastor while overseeing immigration enforcement.',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
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
    subNarrativeIds: ['sub-021'],
    personIds: ['person-015', 'person-014'],
    organizationIds: ['org-018', 'org-016'],
    locationIds: ['loc-008'],
    eventIds: ['event-017']
  },

  // Indiana judge shooting documents (narr-007)
  {
    id: 'doc-013',
    documentType: 'news_article',
    classification: 'U',
    title: 'Indiana judge and wife shot at home; suspect at large',
    url: 'https://cnn.com/us/indiana-judge-steven-meyer-shooting',
    publishedDate: '2026-01-19T18:00:00Z',
    publisherId: 'pub-nat-cnn',
    author: 'Eric Levenson and Ray Sanchez',
    excerpt: 'Tippecanoe Superior Court Judge Steven Meyer and his wife Kimberly were shot Sunday afternoon. Both are in stable condition as agencies search for the suspect.',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
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
    subNarrativeIds: ['sub-016'],
    personIds: ['person-009', 'person-010'],
    organizationIds: ['org-013', 'org-015'],
    locationIds: ['loc-007'],
    eventIds: ['event-015']
  },
  {
    id: 'doc-014',
    documentType: 'news_article',
    classification: 'U',
    title: 'Indiana Chief Justice to judges: "Please remain vigilant in your own security"',
    url: 'https://indystar.com/news/indiana-chief-justice-judges-security-warning',
    publishedDate: '2026-01-20T11:30:00Z',
    publisherId: 'pub-nat-nyt',
    author: 'Kaitlin Lange',
    excerpt: 'Chief Justice Loretta H. Rush sent an urgent letter to all state judges expressing concern about violence targeting the judiciary.',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
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
    subNarrativeIds: ['sub-017'],
    personIds: ['person-011'],
    organizationIds: ['org-014'],
    locationIds: ['loc-007'],
    eventIds: ['event-016']
  },

  // Legal battles documents (narr-009)
  {
    id: 'doc-015',
    documentType: 'news_article',
    classification: 'U',
    title: 'Judge allows DHS to require week notice for congressional facility inspections',
    url: 'https://politico.com/news/dhs-congressional-inspection-notice-ruling',
    publishedDate: '2026-01-20T14:30:00Z',
    publisherId: 'pub-nat-nyt',
    author: 'Josh Gerstein',
    excerpt: 'Federal judge Jia Cobb ruled DHS can continue blocking no-notice inspections despite blocking a similar policy last month.',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
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
    subNarrativeIds: ['sub-022'],
    personIds: ['person-025', 'person-021', 'person-022', 'person-023'],
    organizationIds: ['org-017', 'org-020'],
    locationIds: ['loc-009'],
    eventIds: ['event-021', 'event-022']
  },
  {
    id: 'doc-016',
    documentType: 'news_article',
    classification: 'U',
    title: 'DOJ calls Minnesota lawsuit an "absurdity" that undermines federal supremacy',
    url: 'https://reuters.com/legal/doj-minnesota-lawsuit-response',
    publishedDate: '2026-01-20T16:00:00Z',
    publisherId: 'pub-int-reuters',
    author: 'Jonathan Stempel',
    excerpt: 'Federal lawyers argued the state\'s attempt to end ICE activities would be unprecedented judicial overreach.',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
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
    subNarrativeIds: ['sub-023'],
    personIds: ['person-007', 'person-017'],
    organizationIds: ['org-010'],
    locationIds: ['loc-002'],
    eventIds: ['event-023']
  },
  {
    id: 'doc-017',
    documentType: 'news_article',
    classification: 'U',
    title: 'DHS Secretary Noem backtracks: Pepper spray was needed for "law and order"',
    url: 'https://cnn.com/politics/noem-pepper-spray-reversal',
    publishedDate: '2026-01-19T19:30:00Z',
    publisherId: 'pub-nat-cnn',
    author: 'Priscilla Alvarez',
    excerpt: 'After initially denying federal agents used chemical agents, Secretary Noem now says pepper spray was necessary to establish order.',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
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
    subNarrativeIds: ['sub-024'],
    personIds: ['person-018'],
    organizationIds: ['org-017'],
    locationIds: ['loc-001'],
    eventIds: ['event-025']
  },

  // RFK dietary guidelines documents (narr-010)
  {
    id: 'doc-018',
    documentType: 'news_article',
    classification: 'U',
    title: 'RFK Jr unveils meat-heavy dietary guidelines: "We are ending the war on saturated fats"',
    url: 'https://nytimes.com/2026/01/18/health/rfk-dietary-guidelines-meat',
    publishedDate: '2026-01-18T09:00:00Z',
    publisherId: 'pub-nat-nyt',
    author: 'Roni Caryn Rabin',
    excerpt: 'The new guidelines feature an inverted food pyramid emphasizing steak, poultry, and whole milk, urging Americans to nearly double protein consumption.',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
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
    subNarrativeIds: ['sub-025'],
    personIds: ['person-026'],
    organizationIds: ['org-022'],
    locationIds: ['loc-001'],
    eventIds: ['event-026']
  },
  {
    id: 'doc-019',
    documentType: 'news_article',
    classification: 'U',
    title: 'Scientists warn: New meat guidelines would require 100 million acres of farmland',
    url: 'https://guardian.com/environment/meat-guidelines-environmental-impact',
    publishedDate: '2026-01-19T12:00:00Z',
    publisherId: 'pub-int-guardian',
    author: 'Oliver Milman',
    excerpt: 'World Resources Institute estimates the guidelines would add hundreds of millions of tons of emissions and require an area the size of California.',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
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
    subNarrativeIds: ['sub-026'],
    personIds: [],
    organizationIds: ['org-023'],
    locationIds: [],
    eventIds: []
  },
  {
    id: 'doc-020',
    documentType: 'news_article',
    classification: 'U',
    title: 'RFK Jr in 2004: Factory meat industry is "bigger threat than Osama bin Laden"',
    url: 'https://msnbc.com/opinion/rfk-jr-meat-industry-past-quotes',
    publishedDate: '2026-01-20T08:00:00Z',
    publisherId: 'pub-nat-msnbc',
    author: 'Hayes Brown',
    excerpt: 'Critics highlight Kennedy\'s past environmental activism that sharply contradicts his new pro-meat dietary guidelines.',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
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
    subNarrativeIds: ['sub-027'],
    personIds: ['person-026'],
    organizationIds: ['org-022'],
    locationIds: [],
    eventIds: []
  },

  // Food preservatives documents (narr-003)
  {
    id: 'doc-021',
    documentType: 'news_article',
    classification: 'U',
    title: 'NutriNet-Santé study links sodium nitrite to 32% increased cancer risk',
    url: 'https://bbc.com/news/health-food-preservatives-cancer-study',
    publishedDate: '2026-01-08T10:00:00Z',
    publisherId: 'pub-int-bbc',
    author: 'James Gallagher',
    excerpt: 'A major French study found sodium nitrite—common in deli meats—is associated with significantly higher prostate cancer risk.',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
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
    subNarrativeIds: ['sub-007'],
    personIds: [],
    organizationIds: ['org-003'],
    locationIds: [],
    eventIds: []
  },
  {
    id: 'doc-022',
    documentType: 'news_article',
    classification: 'U',
    title: 'Harvard: Ultra-processed foods linked to 45% higher colorectal cancer risk',
    url: 'https://cnn.com/health/harvard-processed-food-cancer-study',
    publishedDate: '2026-01-10T14:00:00Z',
    publisherId: 'pub-nat-cnn',
    author: 'Sandee LaMotte',
    excerpt: 'Researchers found high consumption of ultra-processed foods correlates with significantly increased risk of precancerous colorectal adenomas.',
    headerImage: {
      url: 'img/placeholders/image-placeholder.svg',
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
    subNarrativeIds: [],
    personIds: [],
    organizationIds: [],
    locationIds: [],
    eventIds: []
  },
  {
    id: 'doc-023',
    documentType: 'social_post',
    url: 'https://tiktok.com/@healthnews/video/123456',
    publishedDate: '2026-01-12T18:00:00Z',
    publisherId: 'pub-tiktok',
    author: {
      username: '@healthnews',
      displayName: 'Health News Daily',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    content: 'The cancer study everyone is talking about 🧵 New research links food preservatives to 32% higher cancer risk. Here\'s what you need to know and what foods to AVOID. #health #cancer #foodsafety #wellness #plantbased',
    video: {
      thumbnailUrl: 'img/placeholders/video-thumbnail.svg',
      duration: 87
    },
    transcription: 'So this new study just dropped and it\'s kind of terrifying. Researchers found that sodium nitrite, which is in like ALL processed meats - bacon, hot dogs, deli meat - is linked to a 32% increase in prostate cancer risk. And potassium nitrate? 22% higher breast cancer risk. The good news is there are alternatives. More and more people are switching to plant-based options and honestly? The vegan influencers have been saying this for years. Time to clean up our diets, people.',
    engagement: {
      replies: 8234,
      likes: 245891,
      reblogs: 42156
    },
    narrativeIds: ['narr-003'],
    subNarrativeIds: ['sub-006'],
    personIds: [],
    organizationIds: ['org-004'],
    locationIds: [],
    eventIds: []
  },

  // Social media posts as documents
  {
    id: 'doc-024',
    documentType: 'social_post',
    url: 'https://x.com/user/status/123456789',
    publishedDate: '2026-01-19T16:00:00Z',
    publisherId: 'pub-x',
    author: {
      username: '@ImmigrantRights',
      displayName: 'Immigrant Rights Watch',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    content: 'THREAD: David Easterwood is an ICE official in Minneapolis. On Sundays, he preaches at Cities Church about Christian love and compassion.\n\nDuring the week, he oversees operations that separate families and detain asylum seekers.\n\nHow do you reconcile these two roles? 🧵 (1/12)',
    engagement: {
      replies: 12847,
      likes: 67234,
      reblogs: 28491
    },
    narrativeIds: ['narr-008'],
    subNarrativeIds: ['sub-021'],
    personIds: ['person-014'],
    organizationIds: ['org-011', 'org-016'],
    locationIds: ['loc-008'],
    eventIds: ['event-017']
  },
  {
    id: 'doc-025',
    documentType: 'social_post',
    url: 'https://reddit.com/r/minnesota/comments/abc123',
    publishedDate: '2026-01-17T20:00:00Z',
    publisherId: 'pub-reddit',
    author: {
      username: 'u/mpls_witness_2026',
      displayName: 'mpls_witness_2026',
      avatarUrl: 'img/placeholders/avatar-default.svg'
    },
    content: '**[AMA] I was at the Minneapolis ICE protest when federal agents used pepper spray on peaceful demonstrators. Ask me anything.**\n\nI\'ve been protesting for three days now. What I\'ve seen is terrifying. Federal agents in unmarked vehicles, people being grabbed off the street, pepper spray used on people who were just standing there with signs.\n\nI have video. I have photos. I\'m willing to share what I witnessed.\n\nProof sent to mods.\n\n**Edit:** Wow this blew up. I\'ll try to answer as many questions as I can. To those asking - yes, I\'m safe. For now.\n\n**Edit 2:** For everyone asking about legal resources, check the pinned comment.',
    engagement: {
      replies: 8234,
      likes: 24891,
      reblogs: 1247
    },
    narrativeIds: ['narr-006'],
    subNarrativeIds: ['sub-013'],
    personIds: [],
    organizationIds: ['org-011'],
    locationIds: ['loc-002'],
    eventIds: []
  }
];
