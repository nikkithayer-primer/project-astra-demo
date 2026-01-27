/**
 * Sub-narratives for American Politics dataset
 */

export const subNarratives = [
  {
    id: 'sub-006',
    text: 'Vegans gain popularity on TikTok as alternative to processed food',
    description: 'Social media trend where vegan influencers promote plant-based diets as a healthier alternative to processed foods, gaining significant traction among younger demographics.',
    parentNarrativeId: 'narr-003',
    sentiment: 0.58,
    factionMentions: {
      'faction-006': { volume: 250, sentiment: 0.72 }
    },
    personIds: [],
    organizationIds: ['org-004'],
    locationIds: [],
    eventIds: [],
    volumeOverTime: [
      { date: '2024-02-03', factionVolumes: { 'faction-006': 80 } },
      { date: '2024-02-04', factionVolumes: { 'faction-006': 100 } },
      { date: '2024-02-05', factionVolumes: { 'faction-006': 120 } }
    ]
  },
  {
    id: 'sub-007',
    text: 'FDA accused of protecting food industry over public health',
    description: 'Criticism alleging regulatory capture at the FDA, claiming the agency prioritizes food industry interests over consumer safety when approving additives and setting standards.',
    parentNarrativeId: 'narr-003',
    sentiment: -0.71,
    factionMentions: {
      'faction-005': { volume: 180, sentiment: -0.76 }
    },
    personIds: [],
    organizationIds: ['org-003'],
    locationIds: [],
    eventIds: [],
    volumeOverTime: [
      { date: '2024-02-05', factionVolumes: { 'faction-005': 60 } },
      { date: '2024-02-06', factionVolumes: { 'faction-005': 80 } },
      { date: '2024-02-07', factionVolumes: { 'faction-005': 70 } }
    ]
  },
  {
    id: 'sub-009',
    text: 'Macron warns of international law being trampled at Davos',
    description: 'French President Emmanuel Macron delivered a thinly veiled critique of Trump\'s foreign policy at the World Economic Forum in Davos, warning of a world "where international law is trampled under foot" in response to Trump\'s aggressive stance on Greenland acquisition.',
    parentNarrativeId: 'narr-005',
    sentiment: -0.48,
    factionMentions: {
      'faction-001': { volume: 65, sentiment: -0.58 },
      'faction-002': { volume: 55, sentiment: 0.42 }
    },
    personIds: ['person-004', 'person-003'],
    organizationIds: ['org-009'],
    locationIds: ['loc-005'],
    eventIds: ['event-006'],
    volumeOverTime: [
      { date: '2026-01-20', factionVolumes: { 'faction-001': 65, 'faction-002': 55 } }
    ]
  },
  {
    id: 'sub-010',
    text: 'Trump shares private diplomatic messages on social media',
    description: 'President Trump posted private messages from world leaders on social media, including a message from French President Macron reading "I do not understand what you are doing on Greenland," raising concerns about diplomatic protocols and trust between allies.',
    parentNarrativeId: 'narr-005',
    sentiment: -0.61,
    factionMentions: {
      'faction-001': { volume: 70, sentiment: 0.55 },
      'faction-002': { volume: 80, sentiment: -0.72 }
    },
    personIds: ['person-003', 'person-004'],
    organizationIds: [],
    locationIds: ['loc-001'],
    eventIds: ['event-007'],
    volumeOverTime: [
      { date: '2026-01-20', factionVolumes: { 'faction-001': 70, 'faction-002': 80 } }
    ]
  },
  {
    id: 'sub-011',
    text: 'European leaders call for new form of independence from US',
    description: 'In response to Trump\'s Greenland threats and unpredictable foreign policy, European Commission President Ursula von der Leyen stated that "a new form of European independence" is needed to face "geopolitical shocks," while Greenland\'s Prime Minister called for respect of the world order.',
    parentNarrativeId: 'narr-005',
    sentiment: -0.35,
    factionMentions: {
      'faction-001': { volume: 45, sentiment: -0.48 },
      'faction-002': { volume: 60, sentiment: 0.38 }
    },
    personIds: ['person-005', 'person-006'],
    organizationIds: ['org-008'],
    locationIds: ['loc-005', 'loc-006'],
    eventIds: ['event-008', 'event-009'],
    volumeOverTime: [
      { date: '2026-01-20', factionVolumes: { 'faction-001': 45, 'faction-002': 60 } }
    ]
  },
  {
    id: 'sub-012',
    text: 'DOJ plans subpoenas for Minnesota AG, governor, and mayor',
    description: 'The Department of Justice plans to subpoena Minnesota Attorney General Keith Ellison, the state governor, and Minneapolis mayor related to an investigation of possible obstruction of federal officers during recent anti-ICE protests, escalating the confrontation between the Trump administration and Democratic state officials.',
    parentNarrativeId: 'narr-006',
    sentiment: -0.62,
    factionMentions: {
      'faction-001': { volume: 55, sentiment: 0.68 },
      'faction-002': { volume: 70, sentiment: -0.78 },
      'faction-003': { volume: 45, sentiment: -0.72 }
    },
    personIds: ['person-007'],
    organizationIds: ['org-010'],
    locationIds: ['loc-002'],
    eventIds: ['event-010'],
    volumeOverTime: [
      { date: '2026-01-20', factionVolumes: { 'faction-001': 55, 'faction-002': 70, 'faction-003': 45 } }
    ]
  },
  {
    id: 'sub-013',
    text: 'DOJ appeals ruling protecting peaceful protesters from federal agents',
    description: 'The Department of Justice appealed a judge\'s ruling that federal agents in Minnesota cannot arrest or use pepper spray on peaceful protesters or stop people in their cars without cause, seeking to expand federal enforcement powers during the immigration crackdown.',
    parentNarrativeId: 'narr-006',
    sentiment: -0.58,
    factionMentions: {
      'faction-001': { volume: 40, sentiment: 0.72 },
      'faction-002': { volume: 55, sentiment: -0.82 },
      'faction-003': { volume: 65, sentiment: -0.85 },
      'faction-004': { volume: 35, sentiment: 0.62 }
    },
    personIds: [],
    organizationIds: ['org-010', 'org-011'],
    locationIds: ['loc-002'],
    eventIds: ['event-011'],
    volumeOverTime: [
      { date: '2026-01-20', factionVolumes: { 'faction-001': 40, 'faction-002': 55, 'faction-003': 65, 'faction-004': 35 } }
    ]
  },
  {
    id: 'sub-014',
    text: 'DOJ investigates church protest where ICE agent preaches',
    description: 'The Department of Justice launched a separate investigation after demonstrators interrupted Sunday service at a church where an Immigration and Customs Enforcement agent reportedly preaches, expanding the scope of federal scrutiny of anti-ICE activism.',
    parentNarrativeId: 'narr-006',
    sentiment: -0.45,
    factionMentions: {
      'faction-001': { volume: 35, sentiment: 0.58 },
      'faction-002': { volume: 40, sentiment: -0.65 },
      'faction-003': { volume: 30, sentiment: -0.55 }
    },
    personIds: [],
    organizationIds: ['org-010', 'org-011'],
    locationIds: ['loc-002'],
    eventIds: ['event-012'],
    volumeOverTime: [
      { date: '2026-01-19', factionVolumes: { 'faction-001': 35, 'faction-002': 40, 'faction-003': 30 } }
    ]
  },
  {
    id: 'sub-015',
    text: 'FBI investigation pivots from ICE agent to slain protester Renee Good',
    description: 'Critics are denouncing the DOJ\'s handling of the fatal shooting of protester Renee Good in Minneapolis by an ICE agent. While the FBI briefly opened a civil rights investigation into the agent, the probe pivoted to investigating Good and those around her, including her widow, sparking outrage among civil rights advocates.',
    parentNarrativeId: 'narr-006',
    sentiment: -0.82,
    factionMentions: {
      'faction-001': { volume: 30, sentiment: 0.45 },
      'faction-002': { volume: 75, sentiment: -0.88 },
      'faction-003': { volume: 95, sentiment: -0.92 }
    },
    personIds: ['person-008'],
    organizationIds: ['org-011', 'org-012'],
    locationIds: ['loc-002'],
    eventIds: ['event-013', 'event-014'],
    volumeOverTime: [
      { date: '2026-01-15', factionVolumes: { 'faction-001': 10, 'faction-002': 25, 'faction-003': 45 } },
      { date: '2026-01-16', factionVolumes: { 'faction-001': 15, 'faction-002': 35, 'faction-003': 55 } },
      { date: '2026-01-17', factionVolumes: { 'faction-001': 18, 'faction-002': 45, 'faction-003': 65 } },
      { date: '2026-01-18', factionVolumes: { 'faction-001': 25, 'faction-002': 60, 'faction-003': 80 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 28, 'faction-002': 68, 'faction-003': 88 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 30, 'faction-002': 75, 'faction-003': 95 } }
    ]
  },
  {
    id: 'sub-016',
    text: 'Manhunt underway for suspect in Indiana judge shooting',
    description: 'Police are conducting an active investigation involving local, state, and federal agencies to find the person or people responsible for shooting Judge Steven Meyer and his wife at their Lafayette home. No motive or suspect description has been released. Mayor Tony Roswarski assured the community that every available resource is being used to apprehend those responsible for what he called "this senseless unacceptable act of violence."',
    parentNarrativeId: 'narr-007',
    sentiment: -0.65,
    factionMentions: {
      'faction-001': { volume: 25, sentiment: -0.42 },
      'faction-004': { volume: 60, sentiment: -0.55 }
    },
    personIds: ['person-009', 'person-010'],
    organizationIds: ['org-015'],
    locationIds: ['loc-007'],
    eventIds: ['event-015'],
    volumeOverTime: [
      { date: '2026-01-19', factionVolumes: { 'faction-001': 15, 'faction-004': 40 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 25, 'faction-004': 60 } }
    ]
  },
  {
    id: 'sub-017',
    text: 'Indiana Chief Justice warns judges to remain vigilant after shooting',
    description: 'Indiana Supreme Court Chief Justice Loretta H. Rush sent a letter to all state judges following the shooting, urging them to "please remain vigilant in your own security." She wrote, "I worry about the safety of all our judges. Any violence against a judge or a judge\'s family is completely unacceptable," highlighting growing concerns about threats to the judiciary.',
    parentNarrativeId: 'narr-007',
    sentiment: -0.58,
    factionMentions: {
      'faction-001': { volume: 20, sentiment: -0.28 },
      'faction-002': { volume: 18, sentiment: -0.52 },
      'faction-004': { volume: 45, sentiment: -0.48 }
    },
    personIds: ['person-011'],
    organizationIds: ['org-014'],
    locationIds: ['loc-007'],
    eventIds: ['event-016'],
    volumeOverTime: [
      { date: '2026-01-20', factionVolumes: { 'faction-001': 20, 'faction-002': 18, 'faction-004': 45 } }
    ]
  },
  {
    id: 'sub-018',
    text: 'DOJ invokes FACE Act to investigate church protest',
    description: 'Assistant Attorney General Harmeet Dhillon announced a federal investigation into the Cities Church protest within hours, citing the FACE Act which prohibits force or obstruction that interferes with religious worship. AG Pam Bondi declared that "attacks against law enforcement and the intimidation of Christians are being met with the full force of federal law." Deputy AG Todd Blanche said the Civil Rights Division sent experts to Minneapolis, with FBI and DHS also involved.',
    parentNarrativeId: 'narr-008',
    sentiment: -0.52,
    factionMentions: {
      'faction-001': { volume: 85, sentiment: 0.75 },
      'faction-002': { volume: 65, sentiment: -0.78 },
      'faction-003': { volume: 55, sentiment: -0.82 },
      'faction-004': { volume: 48, sentiment: 0.68 }
    },
    personIds: ['person-012', 'person-013'],
    organizationIds: ['org-010', 'org-012', 'org-017'],
    locationIds: ['loc-008', 'loc-001'],
    eventIds: ['event-018'],
    volumeOverTime: [
      { date: '2026-01-19', factionVolumes: { 'faction-001': 35, 'faction-002': 25, 'faction-003': 20, 'faction-004': 18 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 85, 'faction-002': 65, 'faction-003': 55, 'faction-004': 48 } }
    ]
  },
  {
    id: 'sub-019',
    text: 'DOJ threatens charges against journalist Don Lemon',
    description: 'Harmeet Dhillon singled out former CNN anchor Don Lemon, who was present at the protest, saying he is "on notice" and cannot use journalism as a "shield." Lemon responded that he was covering the protest as a journalist, not participating. He noted receiving "violent threats, along with homophobic and racist slurs" from "MAGA supporters." Lemon said it was "telling" that he was "cast as the face of a protest I was covering."',
    parentNarrativeId: 'narr-008',
    sentiment: -0.68,
    factionMentions: {
      'faction-001': { volume: 95, sentiment: 0.62 },
      'faction-002': { volume: 72, sentiment: -0.85 },
      'faction-003': { volume: 58, sentiment: -0.78 }
    },
    personIds: ['person-012', 'person-016'],
    organizationIds: ['org-010'],
    locationIds: ['loc-008'],
    eventIds: ['event-019'],
    volumeOverTime: [
      { date: '2026-01-20', factionVolumes: { 'faction-001': 95, 'faction-002': 72, 'faction-003': 58 } }
    ]
  },
  {
    id: 'sub-020',
    text: 'Trump calls church protesters agitators and insurrectionists',
    description: 'President Trump posted on Truth Social that the protesters were "agitators and insurrectionists" who are "professionals" and "highly trained to scream, rant, and rave, like lunatics." He said they "should be thrown in jail, or thrown out of the Country." DHS official Tricia McLaughlin blamed Minnesota Gov. Tim Walz and Minneapolis Mayor Jacob Frey "for whipping these mobs into a frenzy."',
    parentNarrativeId: 'narr-008',
    sentiment: -0.72,
    factionMentions: {
      'faction-001': { volume: 120, sentiment: 0.78 },
      'faction-002': { volume: 85, sentiment: -0.88 },
      'faction-003': { volume: 95, sentiment: -0.92 }
    },
    personIds: ['person-003', 'person-019', 'person-020'],
    organizationIds: ['org-017'],
    locationIds: ['loc-001'],
    eventIds: ['event-020'],
    volumeOverTime: [
      { date: '2026-01-21', factionVolumes: { 'faction-001': 120, 'faction-002': 85, 'faction-003': 95 } }
    ]
  },
  {
    id: 'sub-021',
    text: 'Protest organizer questions how Christian pastor can lead ICE operations',
    description: 'Nekima Levy Armstrong, former Minneapolis NAACP president and protest organizer, told CNN she doesn\'t "know how anyone who claims to be Christian could condone" Easterwood\'s behavior, calling it "unconscionable and unacceptable for someone to claim to serve as a pastor while also being responsible for a lot of what is happening here." She argued the Trump administration has "rolled back protections" for churches by allowing enforcement in protected spaces.',
    parentNarrativeId: 'narr-008',
    sentiment: -0.45,
    factionMentions: {
      'faction-001': { volume: 35, sentiment: -0.72 },
      'faction-002': { volume: 68, sentiment: 0.58 },
      'faction-003': { volume: 88, sentiment: 0.72 }
    },
    personIds: ['person-015', 'person-014'],
    organizationIds: ['org-018', 'org-016'],
    locationIds: ['loc-008'],
    eventIds: ['event-017'],
    volumeOverTime: [
      { date: '2026-01-19', factionVolumes: { 'faction-001': 15, 'faction-002': 35, 'faction-003': 48 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 35, 'faction-002': 68, 'faction-003': 88 } }
    ]
  },
  {
    id: 'sub-022',
    text: 'Judge allows DHS to block lawmakers from ICE facility inspections',
    description: 'Federal judge Jia Cobb ruled that DHS can continue requiring lawmakers provide a week\'s notice before inspecting immigration facilities, despite blocking an identical policy in December. DHS claimed it was now enforcing the policy using different funding from Trump\'s "big, beautiful bill." Three Minnesota Democrats—Ilhan Omar, Angie Craig, and Kelly Morrison—said they were illegally blocked from inspecting an ICE detention center earlier this month. Congressman Joe Neguse said "no-notice inspections were essential" and the law is "crystal-clear."',
    parentNarrativeId: 'narr-009',
    sentiment: -0.55,
    factionMentions: {
      'faction-001': { volume: 48, sentiment: 0.68 },
      'faction-002': { volume: 72, sentiment: -0.82 },
      'faction-003': { volume: 38, sentiment: -0.72 }
    },
    personIds: ['person-021', 'person-022', 'person-023', 'person-024', 'person-025'],
    organizationIds: ['org-017', 'org-011', 'org-020'],
    locationIds: ['loc-002', 'loc-009'],
    eventIds: ['event-021', 'event-022'],
    volumeOverTime: [
      { date: '2026-01-20', factionVolumes: { 'faction-001': 48, 'faction-002': 72, 'faction-003': 38 } }
    ]
  },
  {
    id: 'sub-023',
    text: 'DOJ calls Minnesota lawsuit against federal immigration surge an absurdity',
    description: 'DOJ lawyers responded to the lawsuit brought by Minnesota, Minneapolis, and St. Paul seeking to end ICE activities, calling it "an absurdity" that would "render the supremacy of federal law an afterthought to local preferences." They argued an injunction would be "unprecedented judicial overreach." AG Keith Ellison said cities were being "terrorized" by federal actions including the shooting death of Renee Good. Judge Katherine Menendez indicated she might hold another hearing.',
    parentNarrativeId: 'narr-009',
    sentiment: -0.62,
    factionMentions: {
      'faction-001': { volume: 55, sentiment: 0.75 },
      'faction-002': { volume: 68, sentiment: -0.85 },
      'faction-003': { volume: 58, sentiment: -0.78 }
    },
    personIds: ['person-007', 'person-017', 'person-008'],
    organizationIds: ['org-010', 'org-011'],
    locationIds: ['loc-002', 'loc-008'],
    eventIds: ['event-023'],
    volumeOverTime: [
      { date: '2026-01-20', factionVolumes: { 'faction-001': 55, 'faction-002': 68, 'faction-003': 58 } }
    ]
  },
  {
    id: 'sub-024',
    text: 'Noem backtracks on pepper spray denial, says it was needed for law and order',
    description: 'DHS Secretary Kristi Noem reversed her earlier insistence that federal agents had not used chemical substances including pepper spray against crowds protesting ICE actions. She now claimed the use of pepper spray was necessary to "establish law and order." The DOJ also announced it was appealing Judge Menendez\'s Friday injunction that curbed aggressive ICE tactics including retaliation against protesters and use of pepper spray.',
    parentNarrativeId: 'narr-009',
    sentiment: -0.58,
    factionMentions: {
      'faction-001': { volume: 42, sentiment: 0.55 },
      'faction-002': { volume: 58, sentiment: -0.82 },
      'faction-003': { volume: 65, sentiment: -0.85 }
    },
    personIds: ['person-018', 'person-017'],
    organizationIds: ['org-017', 'org-010', 'org-021'],
    locationIds: ['loc-001', 'loc-002'],
    eventIds: ['event-024', 'event-025'],
    volumeOverTime: [
      { date: '2026-01-19', factionVolumes: { 'faction-001': 25, 'faction-002': 35, 'faction-003': 42 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 42, 'faction-002': 58, 'faction-003': 65 } }
    ]
  },
  {
    id: 'sub-025',
    text: 'New food pyramid emphasizes meat and ends war on saturated fats',
    description: 'The Trump administration released a new inverted food pyramid emphasizing pictures of steak, poultry, ground beef, and whole milk as the most important foods to eat. RFK Jr declared "Protein and healthy fats are essential and were wrongly discouraged in prior dietary guidelines. We are ending the war on saturated fats." The guidelines are designed to nearly double the amount of protein currently consumed by Americans, dismissing an independent scientific committee\'s advice to emphasize plant-based proteins.',
    parentNarrativeId: 'narr-010',
    sentiment: -0.42,
    factionMentions: {
      'faction-001': { volume: 65, sentiment: 0.72 },
      'faction-005': { volume: 55, sentiment: -0.68 },
      'faction-006': { volume: 72, sentiment: -0.82 }
    },
    personIds: ['person-026'],
    organizationIds: ['org-022'],
    locationIds: ['loc-001'],
    eventIds: ['event-026'],
    volumeOverTime: [
      { date: '2026-01-18', factionVolumes: { 'faction-001': 35, 'faction-005': 28, 'faction-006': 38 } },
      { date: '2026-01-19', factionVolumes: { 'faction-001': 52, 'faction-005': 42, 'faction-006': 58 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 65, 'faction-005': 55, 'faction-006': 72 } }
    ]
  },
  {
    id: 'sub-026',
    text: 'Scientists warn meat guidelines would require 100 million acres of new farmland',
    description: 'The World Resources Institute estimates that even a 25% increase in protein consumption through meat would require about 100 million acres of additional agricultural land each year—an area the size of California—and add hundreds of millions of tons of extra emissions. "We are seeing millions of acres of forest cut down and agricultural expansion is the lead driver of that," said WRI\'s Richard Waite. Researchers note beef requires 20 times more land and emits 20 times more greenhouse gases per gram of protein than plant proteins like beans.',
    parentNarrativeId: 'narr-010',
    sentiment: -0.72,
    factionMentions: {
      'faction-001': { volume: 28, sentiment: -0.35 },
      'faction-005': { volume: 95, sentiment: -0.82 },
      'faction-006': { volume: 68, sentiment: -0.78 }
    },
    personIds: [],
    organizationIds: ['org-023'],
    locationIds: [],
    eventIds: [],
    volumeOverTime: [
      { date: '2026-01-19', factionVolumes: { 'faction-001': 15, 'faction-005': 55, 'faction-006': 42 } },
      { date: '2026-01-20', factionVolumes: { 'faction-001': 28, 'faction-005': 95, 'faction-006': 68 } }
    ]
  },
  {
    id: 'sub-027',
    text: 'RFK Jr\'s past statements on meat industry contradict new guidelines',
    description: 'Critics highlight that RFK Jr\'s new pro-meat guidelines contradict his past environmental activism. In 2004, Kennedy wrote that "the factory meat industry has polluted thousands of miles of America\'s rivers, killed billions of fish, pushed tens of thousands of family farmers off their land, sickened and killed thousands of US citizens." He even said the pork industry was "a bigger threat to the US than Osama bin Laden." HHS dismissed criticism as "radical dogma of the Green New Scam."',
    parentNarrativeId: 'narr-010',
    sentiment: -0.58,
    factionMentions: {
      'faction-001': { volume: 32, sentiment: 0.45 },
      'faction-005': { volume: 78, sentiment: -0.75 },
      'faction-006': { volume: 55, sentiment: -0.72 }
    },
    personIds: ['person-026'],
    organizationIds: ['org-022'],
    locationIds: [],
    eventIds: [],
    volumeOverTime: [
      { date: '2026-01-20', factionVolumes: { 'faction-001': 32, 'faction-005': 78, 'faction-006': 55 } }
    ]
  }
];
