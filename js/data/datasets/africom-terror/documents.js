/**
 * Documents for AFRICOM Threat Analysis dataset
 * Includes intelligence reports, news articles, social media, and structured data
 */

export const documents = [
  // --- doc-001: SITREP on Al-Shabaab VBIED attack ---
  {
    id: 'doc-001',
    documentType: 'intelligence_report',
    repositoryId: 'repo-edl',
    classification: 'S',
    title: 'SITREP: Al-Shabaab VBIED Attack, Afgooye Corridor, Lower Shabelle – 28 JAN 2026',
    url: null,
    publishedDate: '2026-01-28T10:00:00Z',
    publisherId: 'pub-africom-j2',
    author: 'AFRICOM J2 – East Africa Division',
    excerpt: 'At approximately 0630L on 28 JAN, Al-Shabaab detonated a VBIED at an SNA checkpoint on the Afgooye-Mogadishu road. 14 SNA KIA, 3 civilian KIA. ATMIS QRF responded within 45 minutes.',
    headerImage: null,
    contentBlocks: [
      { type: 'heading', content: 'SITUATION', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'paragraph', content: 'At approximately 0630 local time on 28 January 2026, Al-Shabaab conducted a vehicle-borne improvised explosive device (VBIED) attack against a Somali National Army (SNA) checkpoint on the main supply route between Afgooye and Mogadishu in the Lower Shabelle region.', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'paragraph', content: 'The attack consisted of a VBIED (assessed as a Toyota Land Cruiser laden with approximately 200kg of homemade explosives) that approached the checkpoint before detonating. A follow-on assault by an estimated 15-20 Al-Shabaab fighters was repelled by ATMIS Sector 1 quick-reaction forces that arrived approximately 45 minutes after the initial blast.', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'heading', content: 'CASUALTIES AND DAMAGE', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'SNA: 14 killed in action, 8 wounded in action. Civilian: 3 killed, 5 wounded. Enemy: Estimated 4-6 fighters killed during the follow-on assault. The checkpoint was rendered non-functional. Two SNA technical vehicles destroyed.', portionMark: { classification: 'S', handling: '' } },
      { type: 'heading', content: 'ASSESSMENT', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'paragraph', content: 'This attack is consistent with Al-Shabaab\'s pattern of targeting SNA positions along the Afgooye corridor to disrupt the government\'s supply lines to Lower Shabelle. The sophistication of the VBIED and the coordinated follow-on assault indicate this was an Amniyat-planned operation. Despite recent territorial losses, Al-Shabaab retains the capability to produce complex explosive devices and conduct multi-phase attacks.', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'paragraph', content: 'SIGINT collected in the 48 hours prior to the attack (ref: NSA SIGINT Report 2026-EA-0042) indicated increased Al-Shabaab communications activity in the Afgooye area but did not provide sufficient specificity for a tactical warning.', portionMark: { classification: 'S//NF', handling: '' } }
    ],
    narrativeIds: ['narr-001'],
    themeIds: ['sub-001'],
    topicIds: ['topic-001'],
    personIds: ['person-001', 'person-011'],
    organizationIds: ['org-001', 'org-009', 'org-010'],
    locationIds: ['loc-001', 'loc-003'],
    eventIds: ['event-001'],
    tagIds: ['tag-004', 'tag-region-east'],
    quotes: [],
    activities: [
      { id: 'activity-001-01', actorId: 'org-001', actorType: 'organization', action: 'attacked', targetId: 'org-010', targetType: 'organization', targetText: 'SNA checkpoint on Afgooye corridor' }
    ],
    factionMentions: {
      'faction-001': { stance: -0.85 },
      'faction-003': { stance: 0.40 }
    }
  },

  // --- doc-002: ISWAP attack intelligence report ---
  {
    id: 'doc-002',
    documentType: 'intelligence_report',
    repositoryId: 'repo-edl',
    classification: 'S',
    title: 'Intelligence Assessment: ISWAP Amphibious Assault on MNJTF Position, Lake Chad – 02 FEB 2026',
    url: null,
    publishedDate: '2026-02-03T08:00:00Z',
    publisherId: 'pub-dia',
    author: 'DIA Africa Desk',
    excerpt: 'ISWAP executed a large-scale amphibious assault on a MNJTF outpost on Kirta Wulgo island, deploying approximately 200 fighters. Assessment: ISWAP conventional military capability continues to grow.',
    headerImage: null,
    contentBlocks: [
      { type: 'heading', content: 'KEY JUDGMENTS', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'ISWAP\'s assault on the MNJTF position at Kirta Wulgo island represents a significant escalation in the group\'s conventional military capability. The ability to coordinate approximately 200 fighters across multiple waterborne assault elements demonstrates planning sophistication that exceeds typical insurgent operations.', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'We assess with moderate confidence that ISWAP has absorbed a significant number of former Boko Haram fighters since Shekau\'s death in May 2021, bolstering its manpower and contributing to increased operational ambition. The capture of military-grade weapons and communications equipment will further enhance ISWAP capabilities.', portionMark: { classification: 'S', handling: '' } },
      { type: 'heading', content: 'INCIDENT DETAILS', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'On 02 FEB 2026 at approximately 0500L, ISWAP fighters launched a coordinated assault on a Nigerian-sector MNJTF outpost on Kirta Wulgo island in Lake Chad. The attackers approached from multiple directions using motorized boats and traditional canoes, achieving tactical surprise. Eight MNJTF soldiers were killed and the position was overrun within approximately 2 hours. ISWAP seized PKM machine guns, RPG launchers, AK-47 rifles, ammunition, and military communications equipment before withdrawing.', portionMark: { classification: 'S', handling: '' } },
      { type: 'heading', content: 'OUTLOOK', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'ISWAP is likely to publicize this operation through ISIS central media channels to boost recruitment and demonstrate vitality. The captured communications equipment poses an OPSEC risk for MNJTF command and control. We assess ISWAP will attempt similar operations against isolated island positions in the coming months.', portionMark: { classification: 'S', handling: '' } }
    ],
    narrativeIds: ['narr-002'],
    themeIds: ['sub-004'],
    topicIds: ['topic-002'],
    personIds: ['person-002'],
    organizationIds: ['org-002', 'org-011'],
    locationIds: ['loc-005', 'loc-006'],
    eventIds: ['event-003'],
    tagIds: ['tag-004', 'tag-region-west'],
    quotes: [],
    activities: [
      { id: 'activity-002-01', actorId: 'org-002', actorType: 'organization', action: 'attacked', targetId: 'org-011', targetType: 'organization', targetText: 'MNJTF outpost on Kirta Wulgo island' }
    ],
    factionMentions: {
      'faction-002': { stance: -0.78 },
      'faction-003': { stance: 0.35 }
    }
  },

  // --- doc-003: BBC report on Mogadishu hotel attack ---
  {
    id: 'doc-003',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Al-Shabaab hotel siege in Mogadishu leaves 22 dead after 12-hour standoff',
    url: 'https://bbc.com/news/world-africa-mogadishu-hotel-siege-2026',
    publishedDate: '2026-02-11T06:00:00Z',
    publisherId: 'pub-int-bbc-africa',
    author: 'Mary Harper',
    excerpt: 'At least 22 people were killed when Al-Shabaab gunmen stormed a hotel in central Mogadishu, beginning a siege that lasted 12 hours before Somali special forces ended the attack.',
    headerImage: { url: 'http://static.photos/cityscape/640x360/3', caption: 'Somali security forces at the scene of the hotel attack in Mogadishu. Photo: AFP' },
    contentBlocks: [
      { type: 'paragraph', content: 'At least 22 people were killed when Al-Shabaab militants stormed a popular hotel in Mogadishu\'s Hamarweyne district on Monday evening, beginning a siege that lasted more than 12 hours before Somali special forces brought it to an end.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The attack began at approximately 7:45 PM local time when a vehicle packed with explosives detonated at the hotel\'s entrance gate. At least six armed gunmen then entered the compound and opened fire on guests and staff.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Among the dead were three government officials who had been attending a meeting at the hotel. Dozens more were injured, with hospitals across the capital reporting they were overwhelmed with casualties.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Somalia\'s US-trained Danab special forces led the response operation. "Our forces ended the siege and eliminated all the attackers," a military spokesman said.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'President Hassan Sheikh Mohamud condemned the attack and vowed to intensify the military offensive against Al-Shabaab. "These cowardly acts only strengthen our resolve," he said in a statement.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Al-Shabaab claimed responsibility for the attack through its media arm, calling it "a message to the apostate government and its Western backers."', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-001'],
    themeIds: ['sub-003'],
    topicIds: ['topic-001'],
    personIds: ['person-001', 'person-007', 'person-014'],
    organizationIds: ['org-001', 'org-010', 'org-015'],
    locationIds: ['loc-001'],
    eventIds: ['event-005'],
    tagIds: ['tag-004', 'tag-region-east'],
    quotes: [
      { id: 'quote-003-01', speakerId: 'person-014', speakerType: 'person', text: 'These cowardly acts only strengthen our resolve.' }
    ],
    activities: [
      { id: 'activity-003-01', actorId: 'org-001', actorType: 'organization', action: 'attacked', targetId: null, targetType: null, targetText: 'Hotel in Mogadishu\'s Hamarweyne district' }
    ],
    factionMentions: {
      'faction-001': { stance: -0.88 },
      'faction-003': { stance: 0.45 }
    }
  },

  // --- doc-004: JNIM ambush report ---
  {
    id: 'doc-004',
    documentType: 'intelligence_report',
    repositoryId: 'repo-edl',
    classification: 'S',
    title: 'SITREP: JNIM Complex Ambush on FAMa Convoy, Liptako-Gourma – 05 FEB 2026',
    url: null,
    publishedDate: '2026-02-05T18:00:00Z',
    publisherId: 'pub-africom-j2',
    author: 'AFRICOM J2 – West Africa / Sahel Division',
    excerpt: 'JNIM conducted a complex IED-and-small-arms ambush on a FAMa logistics convoy between Gao and Ménaka. 11 FAMa KIA, 6 vehicles destroyed. Attack occurred in area where Wagner/Africa Corps forces are reportedly deploying.',
    headerImage: null,
    contentBlocks: [
      { type: 'heading', content: 'SITUATION', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'paragraph', content: 'On 05 FEB 2026 at approximately 1100L, JNIM fighters conducted a complex ambush against a Mali Armed Forces (FAMa) logistics convoy traveling the Gao-Ménaka road in the Liptako-Gourma region. The attack employed at least two command-detonated IEDs followed by sustained small-arms and RPG fire from concealed positions on both sides of the road.', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'paragraph', content: 'FAMa casualties: 11 killed in action, 9 wounded. Six vehicles destroyed, including 2 BTR-80 armored personnel carriers (assessed to be Russian-supplied). The convoy was transporting ammunition and supplies to a forward operating base in Ménaka.', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'heading', content: 'SIGNIFICANCE', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'paragraph', content: 'This attack is notable for several reasons: (1) it occurred along a route that French Operation Barkhane forces previously secured, demonstrating JNIM\'s expansion into formerly denied terrain; (2) the destruction of Russian-supplied APCs indicates JNIM possesses effective anti-armor capability; (3) the ambush site is approximately 40km from the area where commercial satellite imagery has identified a new Wagner/Africa Corps encampment.', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'paragraph', content: 'JNIM claimed the attack through its media channel, explicitly referencing the "Russian mercenaries" and warning that "all crusader forces" will face the same fate.', portionMark: { classification: 'S//NF', handling: '' } }
    ],
    narrativeIds: ['narr-003'],
    themeIds: ['sub-007'],
    topicIds: ['topic-003'],
    personIds: ['person-003', 'person-012'],
    organizationIds: ['org-003', 'org-012'],
    locationIds: ['loc-007', 'loc-008'],
    eventIds: ['event-004'],
    tagIds: ['tag-004', 'tag-region-sahel'],
    quotes: [],
    activities: [
      { id: 'activity-004-01', actorId: 'org-003', actorType: 'organization', action: 'attacked', targetId: 'org-012', targetType: 'organization', targetText: 'FAMa logistics convoy on Gao-Ménaka road' }
    ],
    factionMentions: {
      'faction-001': { stance: -0.82 },
      'faction-004': { stance: -0.40 }
    }
  },

  // --- doc-005: US airstrike report ---
  {
    id: 'doc-005',
    documentType: 'intelligence_report',
    repositoryId: 'repo-edl',
    classification: 'S',
    title: 'Battle Damage Assessment: US Airstrike on Al-Shabaab Command Node, Jilib Vicinity – 30 JAN 2026',
    url: null,
    publishedDate: '2026-01-30T12:00:00Z',
    publisherId: 'pub-africom-j2',
    author: 'AFRICOM J2 – Targeting',
    excerpt: 'Precision airstrike conducted against Al-Shabaab C2 node 15km north of Jilib. BDA confirms elimination of senior operational planner. No civilian casualties assessed.',
    headerImage: null,
    contentBlocks: [
      { type: 'heading', content: 'STRIKE SUMMARY', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'paragraph', content: 'On 30 JAN 2026 at 0215L, US forces conducted a precision airstrike against an Al-Shabaab command and control node located approximately 15km north of Jilib in the Middle Juba region of Somalia. The strike was conducted in coordination with the Federal Government of Somalia and pursuant to existing authorities for collective self-defense of partner forces.', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'heading', content: 'BATTLE DAMAGE ASSESSMENT', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'paragraph', content: 'Post-strike assessment confirms the elimination of a senior Al-Shabaab operational planner assessed to be responsible for coordinating attacks in the Lower Shabelle region. Two additional Al-Shabaab fighters were killed. The targeted compound was destroyed. No civilian casualties have been assessed at this time.', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'paragraph', content: 'The strike is assessed to have disrupted near-term planning for additional attacks along the Afgooye corridor and degraded Al-Shabaab\'s command and control in the Middle Juba operational zone.', portionMark: { classification: 'S//NF', handling: '' } }
    ],
    narrativeIds: ['narr-001'],
    themeIds: ['sub-002'],
    topicIds: ['topic-001'],
    personIds: ['person-001', 'person-009'],
    organizationIds: ['org-001', 'org-008'],
    locationIds: ['loc-003', 'loc-013'],
    eventIds: ['event-002'],
    tagIds: ['tag-002', 'tag-region-east'],
    quotes: [],
    activities: [
      { id: 'activity-005-01', actorId: 'org-008', actorType: 'organization', action: 'struck', targetId: 'org-001', targetType: 'organization', targetText: 'Al-Shabaab command node near Jilib' }
    ],
    factionMentions: {
      'faction-001': { stance: -0.75 },
      'faction-003': { stance: 0.65 }
    }
  },

  // --- doc-006: Vanguard Nigeria report on ISWAP ---
  {
    id: 'doc-006',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'ISWAP overruns military outpost on Lake Chad, eight soldiers killed',
    url: 'https://vanguardngr.com/iswap-lake-chad-attack-2026',
    publishedDate: '2026-02-02T14:00:00Z',
    publisherId: 'pub-reg-vanguard',
    author: 'Ndahi Marama',
    excerpt: 'Fighters from the Islamic State West Africa Province overran a multinational military position on a Lake Chad island, killing eight soldiers and seizing weapons in a dawn raid that security experts say demonstrates the group\'s growing capability.',
    headerImage: { url: 'http://static.photos/landscape/640x360/1', caption: 'Nigerian military vehicles patrolling near Maiduguri. Photo: AFP' },
    contentBlocks: [
      { type: 'paragraph', content: 'Fighters from the Islamic State West Africa Province (ISWAP) overran a multinational military position on Kirta Wulgo island in Lake Chad early Sunday morning, killing eight soldiers and seizing a cache of weapons and equipment.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Military sources said approximately 200 ISWAP fighters launched the assault from multiple directions using boats, overwhelming the outpost\'s defenses within hours.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"This was not a typical hit-and-run. This was a coordinated military operation," said Bulama Bukarti, an analyst at the Tony Blair Institute for Global Change. "ISWAP is becoming increasingly confident in its ability to take on conventional military forces."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The Multinational Joint Task Force confirmed the attack in a brief statement, saying reinforcements have been deployed to the area. Security sources say ISWAP continues to control numerous islands in the Nigerian and Nigerien sectors of Lake Chad.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-002'],
    themeIds: ['sub-004'],
    topicIds: ['topic-002'],
    personIds: ['person-002'],
    organizationIds: ['org-002', 'org-004', 'org-011'],
    locationIds: ['loc-005', 'loc-006'],
    eventIds: ['event-003'],
    tagIds: ['tag-004', 'tag-region-west'],
    quotes: [],
    activities: [],
    factionMentions: {
      'faction-002': { stance: -0.72 },
      'faction-003': { stance: 0.30 }
    }
  },

  // --- doc-007: France 24 report on Wagner in Sahel ---
  {
    id: 'doc-007',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Russian mercenaries deepen Sahel presence as jihadist attacks surge',
    url: 'https://france24.com/en/africa/russian-mercenaries-sahel-expansion-2026',
    publishedDate: '2026-02-09T10:00:00Z',
    publisherId: 'pub-int-france24',
    author: 'Cyril Payen',
    excerpt: 'Russia\'s Africa Corps has expanded its deployment into northeastern Mali as jihadist attacks in the region reach their highest levels in years, raising questions about the effectiveness of the Russian military partnership.',
    headerImage: { url: 'http://static.photos/landscape/640x360/2', caption: 'Malian soldiers on patrol near Gao. Photo: AFP' },
    contentBlocks: [
      { type: 'paragraph', content: 'Russia\'s Africa Corps — the successor to the Wagner Group\'s African operations — has expanded its deployment into northeastern Mali\'s Ménaka region, according to satellite imagery analysis and multiple security sources, even as jihadist attacks in the Sahel have reached their highest levels since 2019.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The deployment follows a deadly ambush by JNIM fighters on a Malian military convoy that killed 11 soldiers and destroyed six vehicles, including Russian-supplied armored personnel carriers.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"The Russian presence has not reduced attacks — if anything, it has emboldened jihadist groups who now frame their fight as resistance against another foreign occupier," said Héni Nsaibia, a senior researcher at ACLED.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Mali\'s junta government expelled French Operation Barkhane forces in 2022 and asked the UN\'s MINUSMA peacekeeping mission to leave in 2023. Since then, JNIM has expanded its presence across much of central and northern Mali, establishing local governance in areas where the state has no presence.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'Human rights organizations have documented numerous allegations of abuses by Russian-backed forces against civilians, including extrajudicial killings in the Mopti region that are assessed to be driving recruitment to jihadist groups.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-003', 'narr-007'],
    themeIds: ['sub-007', 'sub-015'],
    topicIds: ['topic-003', 'topic-004'],
    personIds: ['person-003', 'person-012'],
    organizationIds: ['org-003', 'org-012', 'org-016'],
    locationIds: ['loc-007', 'loc-008'],
    eventIds: ['event-004', 'event-007'],
    tagIds: ['tag-004', 'tag-region-sahel'],
    quotes: [],
    activities: [],
    factionMentions: {
      'faction-001': { stance: -0.70 },
      'faction-004': { stance: -0.45 },
      'faction-005': { stance: -0.55 }
    }
  },

  // --- doc-008: ISIS-Mozambique village raids ---
  {
    id: 'doc-008',
    documentType: 'intelligence_report',
    repositoryId: 'repo-edl',
    classification: 'S',
    title: 'SITREP: ISIS-Mozambique Coordinated Village Raids, Macomia District – 12 FEB 2026',
    url: null,
    publishedDate: '2026-02-12T16:00:00Z',
    publisherId: 'pub-africom-j2',
    author: 'AFRICOM J2 – Southern Africa',
    excerpt: 'ISIS-Mozambique conducted coordinated dawn raids on three villages in Macomia district. 9 civilians killed. SADC forces responded 4 hours after attack initiated. Assessment: insurgent operational capability persists despite international deployments.',
    headerImage: null,
    contentBlocks: [
      { type: 'heading', content: 'SITUATION', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'On 12 FEB 2026 at approximately 0430L, an estimated 50 ISIS-Mozambique fighters conducted coordinated raids on three villages in Macomia district, Cabo Delgado Province: Litamanda, Chai, and Naunde.', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'The attackers burned homes, looted food stores and supplies, and killed at least 9 civilians. An undetermined number of women and children were abducted. SADC Mission in Mozambique (SAMIM) forces deployed from their base in Mueda but did not arrive at the affected villages until approximately 4 hours after the attacks began. By that time, the insurgents had withdrawn into the surrounding bush.', portionMark: { classification: 'S', handling: '' } },
      { type: 'heading', content: 'ASSESSMENT', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'The coordinated nature of the attacks — hitting three villages simultaneously — indicates continued command-and-control capability despite the degradation of ISIS-Mozambique\'s senior leadership. The 4-hour SADC response time highlights the challenge of securing the vast rural areas of Cabo Delgado with limited forces. These raids are consistent with ISIS-Mozambique\'s adaptive strategy of avoiding hardened positions in favor of soft targets in rural areas.', portionMark: { classification: 'S', handling: '' } }
    ],
    narrativeIds: ['narr-005'],
    themeIds: ['sub-011'],
    topicIds: ['topic-005'],
    personIds: ['person-004'],
    organizationIds: ['org-006', 'org-017'],
    locationIds: ['loc-010'],
    eventIds: ['event-008'],
    tagIds: ['tag-004', 'tag-region-south'],
    quotes: [],
    activities: [
      { id: 'activity-008-01', actorId: 'org-006', actorType: 'organization', action: 'raided', targetId: null, targetType: null, targetText: 'Three villages in Macomia district, Cabo Delgado' }
    ],
    factionMentions: {
      'faction-002': { stance: -0.80 },
      'faction-003': { stance: 0.25 }
    }
  },

  // --- doc-009: Reuters on TotalEnergies force majeure ---
  {
    id: 'doc-009',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'TotalEnergies keeps Mozambique LNG on hold as insurgent attacks continue',
    url: 'https://reuters.com/business/energy/totalenergies-mozambique-lng-force-majeure-2026',
    publishedDate: '2026-02-15T12:00:00Z',
    publisherId: 'pub-int-reuters',
    author: 'Manuel Mucari',
    excerpt: 'TotalEnergies said on Friday it will maintain force majeure on its $20 billion Mozambique LNG project, citing recent insurgent raids in Cabo Delgado Province that show the security situation has not sufficiently improved.',
    headerImage: { url: 'http://static.photos/landscape/640x360/3', caption: 'The Afungi LNG site in Cabo Delgado, Mozambique. Photo: TotalEnergies' },
    contentBlocks: [
      { type: 'paragraph', content: 'French energy giant TotalEnergies said on Friday it will maintain force majeure on its $20 billion Mozambique LNG project, citing recent insurgent raids in the northern Cabo Delgado Province that demonstrate the security situation has not sufficiently improved to resume construction.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: '"The recent attacks on villages near Macomia show that the insurgency remains active and capable of conducting coordinated operations," TotalEnergies CEO Patrick Pouyanné said at an investor briefing. "We cannot put our workers at risk."', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'TotalEnergies declared force majeure on the project in April 2021 following a devastating attack on the town of Palma, near the Afungi LNG site. Despite deployments of SADC and Rwandan forces, the company has repeatedly said conditions for resuming work have not been met.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The continued suspension has significant implications for Mozambique, which had been counting on LNG revenues to drive economic development. Analysts estimate the country is losing approximately $2 billion per year in potential revenue.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-005'],
    themeIds: ['sub-012'],
    topicIds: ['topic-005'],
    personIds: [],
    organizationIds: ['org-018', 'org-006'],
    locationIds: ['loc-010', 'loc-011'],
    eventIds: ['event-009'],
    tagIds: ['tag-005', 'tag-region-south'],
    quotes: [
      { id: 'quote-009-01', speakerId: 'org-018', speakerType: 'organization', text: 'The recent attacks on villages near Macomia show that the insurgency remains active and capable of conducting coordinated operations. We cannot put our workers at risk.' }
    ],
    activities: [],
    factionMentions: {
      'faction-002': { stance: -0.60 }
    }
  },

  // --- doc-010: UN Panel report on JNIM financing ---
  {
    id: 'doc-010',
    documentType: 'internal_report',
    repositoryId: 'repo-struct',
    classification: 'U',
    title: 'UN Panel of Experts: JNIM Financing Networks in the Sahel – February 2026',
    url: null,
    publishedDate: '2026-02-18T09:00:00Z',
    publisherId: 'pub-un-panel',
    author: 'UN Panel of Experts on Mali',
    excerpt: 'Panel investigation documents JNIM revenue streams including artisanal gold mining ($10-20M annually), kidnapping for ransom ($5-8M), and trade route taxation. Identifies key financial facilitator Sidan ag Hitta.',
    headerImage: null,
    contentBlocks: [
      { type: 'heading', content: 'EXECUTIVE SUMMARY', portionMark: { classification: 'U//FOUO', handling: '' } },
      { type: 'paragraph', content: 'This report presents the findings of the Panel\'s investigation into the financing mechanisms of Jama\'at Nusrat al-Islam wal-Muslimin (JNIM) operating across Mali, Burkina Faso, and Niger. The investigation identified three primary revenue streams that collectively generate an estimated $15-28 million annually.', portionMark: { classification: 'U//FOUO', handling: '' } },
      { type: 'heading', content: 'KEY FINDINGS', portionMark: { classification: 'U//FOUO', handling: '' } },
      { type: 'paragraph', content: '1. ARTISANAL GOLD MINING: JNIM controls or taxes an estimated 40-60 artisanal gold mining sites in Burkina Faso\'s Sahel and Est regions, generating $10-20 million annually. The group controls supply chains for mercury and mining equipment, and sells extracted gold through intermediary traders in Bamako and Ouagadougou.', portionMark: { classification: 'U//FOUO', handling: '' } },
      { type: 'paragraph', content: '2. KIDNAPPING FOR RANSOM: JNIM has conducted at least 12 kidnapping-for-ransom operations in the reporting period, targeting Western nationals and local businesspeople. Estimated revenue: $5-8 million. Ransom negotiations are typically conducted through tribal intermediaries.', portionMark: { classification: 'U//FOUO', handling: '' } },
      { type: 'paragraph', content: '3. TRADE TAXATION: JNIM levies taxes on trade routes, livestock markets, and agricultural production in areas under its control. Revenue is difficult to estimate but is assessed at $2-5 million annually.', portionMark: { classification: 'U//FOUO', handling: '' } },
      { type: 'paragraph', content: 'The Panel identified Sidan ag Hitta as a key financial facilitator managing revenue collection and disbursement through hawala networks. Ag Hitta operates across the Mali-Burkina Faso border region and is connected to Gulf-based donors through transfer corridors running through East Africa.', portionMark: { classification: 'U//FOUO', handling: '' } }
    ],
    narrativeIds: ['narr-004'],
    themeIds: ['sub-009'],
    topicIds: ['topic-006'],
    personIds: ['person-003', 'person-006'],
    organizationIds: ['org-003'],
    locationIds: ['loc-008', 'loc-009'],
    eventIds: ['event-010'],
    tagIds: ['tag-004', 'tag-region-sahel'],
    quotes: [],
    activities: [],
    factionMentions: {
      'faction-001': { stance: -0.75 }
    }
  },

  // --- doc-011: OFAC sanctions designation ---
  {
    id: 'doc-011',
    documentType: 'internal_report',
    repositoryId: 'repo-struct',
    classification: 'U',
    title: 'OFAC Sanctions Designation: Al-Shabaab Financial Network Facilitators – 20 FEB 2026',
    url: null,
    publishedDate: '2026-02-20T15:00:00Z',
    publisherId: 'pub-ofac',
    author: 'US Treasury – OFAC',
    excerpt: 'Three individuals designated as SDGTs for roles in Al-Shabaab financial facilitation: a Mogadishu-based hawala operator, a Kismayo charcoal exporter, and a Dubai-based remittance coordinator.',
    headerImage: null,
    contentBlocks: [
      { type: 'paragraph', content: 'The Department of the Treasury\'s Office of Foreign Assets Control (OFAC) today designated three individuals as Specially Designated Global Terrorists (SDGTs) pursuant to Executive Order 13224 for their roles as financial facilitators for the terrorist organization al-Shabaab.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The designated individuals operate a financial network that generates and transfers funds to al-Shabaab through the illicit charcoal trade, hawala money transfer services, and international remittance channels. The network is estimated to transfer approximately $5 million annually to al-Shabaab operations.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'As a result of today\'s action, all property and interests in property of the designated individuals that are in the United States or in the possession or control of U.S. persons are blocked.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-004'],
    themeIds: ['sub-010'],
    topicIds: ['topic-006'],
    personIds: ['person-007'],
    organizationIds: ['org-001'],
    locationIds: ['loc-001'],
    eventIds: ['event-011'],
    tagIds: ['tag-004', 'tag-region-east'],
    quotes: [],
    activities: [],
    factionMentions: {
      'faction-001': { stance: -0.70 },
      'faction-003': { stance: 0.55 }
    }
  },

  // --- doc-012: Al-Shabaab recruitment video analysis ---
  {
    id: 'doc-012',
    documentType: 'intelligence_report',
    repositoryId: 'repo-osint',
    classification: 'S',
    title: 'OSINT Analysis: Al-Shabaab Swahili-Language Recruitment Video Targeting Kenyan Youth – 22 FEB 2026',
    url: null,
    publishedDate: '2026-02-22T16:00:00Z',
    publisherId: 'pub-nsa-sigint',
    author: 'NSA SIGINT Division – East Africa',
    excerpt: 'Analysis of professionally produced Al-Shabaab recruitment video distributed via Telegram targeting Kenyan youth. Video features Kenyan fighters, exploits economic grievances, and is linked to recruitment coordinator Abu Zinira.',
    headerImage: null,
    contentBlocks: [
      { type: 'heading', content: 'SUMMARY', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'On 22 FEB 2026, Al-Shabaab\'s media arm distributed a professionally produced 8-minute Swahili-language recruitment video across multiple Telegram channels. The video specifically targets Kenyan youth and represents a significant escalation in the group\'s online recruitment efforts in East Africa.', portionMark: { classification: 'S', handling: '' } },
      { type: 'heading', content: 'CONTENT ANALYSIS', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'The video features testimonials from at least four individuals identified as Kenyan nationals who joined Al-Shabaab. They describe finding "purpose and brotherhood" and contrast their current situation with unemployment and police harassment in Nairobi. The video includes footage of training activities and community services provided by Al-Shabaab in areas under its control.', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'SIGINT analysis links the video\'s distribution network to Abdallah Osman (Abu Zinira), a known Al-Shabaab recruitment coordinator operating in the Nairobi-Eastleigh area. Osman manages a network of at least 8-12 recruiters across Kenya and in refugee camps.', portionMark: { classification: 'S', handling: '' } }
    ],
    narrativeIds: ['narr-006'],
    themeIds: ['sub-013'],
    topicIds: ['topic-007'],
    personIds: ['person-008'],
    organizationIds: ['org-001'],
    locationIds: ['loc-002', 'loc-004'],
    eventIds: ['event-012'],
    tagIds: ['tag-004', 'tag-region-east'],
    quotes: [],
    activities: [
      { id: 'activity-012-01', actorId: 'person-008', actorType: 'person', action: 'distributed', targetId: null, targetType: null, targetText: 'Al-Shabaab recruitment video on Telegram' }
    ],
    factionMentions: {
      'faction-001': { stance: -0.82 }
    }
  },

  // --- doc-013: AFRICOM posture assessment ---
  {
    id: 'doc-013',
    documentType: 'internal_report',
    repositoryId: 'repo-edl',
    classification: 'S',
    title: 'AFRICOM Counterterrorism Posture Assessment – Q1 2026',
    url: null,
    publishedDate: '2026-02-01T08:00:00Z',
    publisherId: 'pub-africom-j2',
    author: 'AFRICOM J2 – Counterterrorism Division',
    excerpt: 'Quarterly assessment of AFRICOM CT posture across the AOR. Key findings: Somalia operations effective but resource-constrained; Sahel ISR gap critical after Niger withdrawal; Mozambique threat persists below threshold for direct US action.',
    headerImage: null,
    contentBlocks: [
      { type: 'heading', content: 'EXECUTIVE SUMMARY', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'paragraph', content: 'This assessment covers AFRICOM counterterrorism operations and posture across the Africa AOR for Q1 2026. The command faces a complex and evolving threat environment characterized by resilient VEO networks in East Africa, an expanding insurgency in the Sahel compounded by the loss of US basing in Niger, and a persistent low-level insurgency in Mozambique.', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'heading', content: 'EAST AFRICA', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'paragraph', content: 'US strike operations against Al-Shabaab continue to degrade the group\'s mid-level leadership. The recent airstrike near Jilib successfully eliminated a senior operational planner. However, Al-Shabaab\'s decentralized structure and the Amniyat\'s operational security limit the strategic impact of individual strikes. The SNA offensive has produced territorial gains but the government lacks the capacity to hold and administer recovered areas.', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'heading', content: 'SAHEL', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'paragraph', content: 'The loss of Air Base 201 in Niger represents the most significant degradation of US ISR capability in the AOR. AFRICOM is exploring alternative ISR platforms and partnerships to partially mitigate the gap, but near-term coverage of JNIM and ISCGS activity in the central Sahel will remain limited. The Wagner/Africa Corps presence has not reduced jihadist attacks and complicates potential future US engagement.', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'heading', content: 'SOUTHERN AFRICA', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'paragraph', content: 'ISIS-Mozambique remains active in Cabo Delgado but its capability has been degraded by SADC and Rwandan interventions. The threat level currently falls below the threshold for direct US military action. AFRICOM continues to provide intelligence support and training assistance to Mozambican forces.', portionMark: { classification: 'S//NF', handling: '' } }
    ],
    narrativeIds: ['narr-001'],
    themeIds: ['sub-002'],
    topicIds: [],
    personIds: ['person-009'],
    organizationIds: ['org-008'],
    locationIds: ['loc-012', 'loc-013'],
    eventIds: ['event-002'],
    tagIds: ['tag-002'],
    quotes: [],
    activities: [],
    factionMentions: {
      'faction-001': { stance: -0.65 },
      'faction-002': { stance: -0.55 },
      'faction-003': { stance: 0.60 }
    }
  },

  // --- doc-014: State Department coordination memo ---
  {
    id: 'doc-014',
    documentType: 'memo',
    repositoryId: 'repo-edl',
    classification: 'S',
    title: 'Interagency Coordination Memo: CT Strategy for East Africa – January 2026',
    url: null,
    publishedDate: '2026-01-25T14:00:00Z',
    publisherId: 'pub-fusion',
    author: 'Interagency Fusion Cell',
    excerpt: 'Memo coordinating AFRICOM, State Department, and IC approaches to East Africa CT strategy. Recommends integrated military-diplomatic approach balancing strikes with governance support.',
    headerImage: null,
    contentBlocks: [
      { type: 'paragraph', content: 'This memorandum outlines the interagency approach to counterterrorism strategy in East Africa for Q1-Q2 2026. The recommended strategy integrates AFRICOM military operations with State Department diplomatic engagement and USAID development programs to address both the immediate security threat and the underlying conditions that enable VEO recruitment.', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'Key recommendations: (1) Continue precision strike operations against Al-Shabaab leadership targets while expanding partner force training; (2) Increase diplomatic pressure on regional governments to address corruption and governance failures; (3) Expand CT financing disruption efforts in coordination with Treasury; (4) Support Somali government\'s reconciliation efforts with recovered communities.', portionMark: { classification: 'S', handling: '' } }
    ],
    narrativeIds: ['narr-001'],
    themeIds: [],
    topicIds: [],
    personIds: ['person-009', 'person-010'],
    organizationIds: ['org-008', 'org-014'],
    locationIds: ['loc-012'],
    eventIds: [],
    tagIds: ['tag-002'],
    quotes: [],
    activities: [],
    factionMentions: {
      'faction-001': { stance: -0.60 },
      'faction-003': { stance: 0.70 }
    }
  },

  // --- doc-015 through doc-030: Additional documents ---
  {
    id: 'doc-015',
    documentType: 'intelligence_report',
    repositoryId: 'repo-edl',
    classification: 'S',
    title: 'Weekly Intelligence Summary: Somalia – 20-27 JAN 2026',
    url: null,
    publishedDate: '2026-01-27T08:00:00Z',
    publisherId: 'pub-africom-j2',
    author: 'AFRICOM J2 – East Africa Division',
    excerpt: 'Weekly INTSUM covering Al-Shabaab operational activity in Lower Shabelle and Mogadishu. SNA offensive progress assessed as moderate. ATMIS drawdown concerns.',
    headerImage: null,
    contentBlocks: [
      { type: 'paragraph', content: 'This weekly intelligence summary covers significant developments in Somalia from 20-27 January 2026. Al-Shabaab continued to conduct attacks against SNA positions in Lower Shabelle while simultaneously preparing complex operations in Mogadishu. The SNA offensive has produced moderate territorial gains but the government continues to struggle with holding and administering recovered areas. ATMIS drawdown timeline remains a concern as Somali forces are not yet assessed to be capable of independent sustained operations.', portionMark: { classification: 'S', handling: '' } }
    ],
    narrativeIds: ['narr-001'],
    themeIds: ['sub-001', 'sub-003'],
    topicIds: ['topic-001'],
    personIds: ['person-001', 'person-011', 'person-014'],
    organizationIds: ['org-001', 'org-009', 'org-010', 'org-015'],
    locationIds: ['loc-001', 'loc-003'],
    eventIds: ['event-001', 'event-005'],
    tagIds: ['tag-002', 'tag-region-east'],
    quotes: [],
    activities: [],
    factionMentions: {
      'faction-001': { stance: -0.78 },
      'faction-003': { stance: 0.42 }
    }
  },
  {
    id: 'doc-016',
    documentType: 'social_post',
    repositoryId: 'repo-osint',
    classification: 'U',
    title: 'ISWAP propaganda video: Kirta Wulgo operation and weapons display',
    url: 'https://t.me/channel/iswap_media_archived',
    publishedDate: '2026-02-04T14:00:00Z',
    publisherId: 'pub-telegram',
    author: null,
    excerpt: 'ISWAP media wing released 12-minute video showing captured weapons from Kirta Wulgo attack. Video includes statement from masked commander calling for recruits.',
    headerImage: null,
    contentBlocks: [
      { type: 'paragraph', content: '[ARCHIVED TELEGRAM POST] ISWAP\'s Amaq-affiliated media wing released a 12-minute propaganda video documenting the Kirta Wulgo island assault. The video shows fighters in boats, the overrun military position, and a display of captured weapons including PKM machine guns, RPG-7 launchers, AK-47 rifles, and military radio equipment. A masked commander delivers a statement in Hausa pledging continued attacks against "crusader-backed forces" and calling on Muslims in the Lake Chad region to join the fight.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-002'],
    themeIds: ['sub-004', 'sub-005'],
    topicIds: ['topic-002'],
    personIds: ['person-002'],
    organizationIds: ['org-002'],
    locationIds: ['loc-006'],
    eventIds: ['event-006'],
    tagIds: ['tag-004', 'tag-region-west'],
    quotes: [],
    activities: [],
    factionMentions: {
      'faction-002': { stance: -0.88 }
    }
  },
  {
    id: 'doc-017',
    documentType: 'intelligence_report',
    repositoryId: 'repo-edl',
    classification: 'S',
    title: 'Threat Assessment: JNIM Organizational Structure and Expansion – FEB 2026',
    url: null,
    publishedDate: '2026-02-10T08:00:00Z',
    publisherId: 'pub-cia-da',
    author: 'CIA Directorate of Analysis – Africa',
    excerpt: 'Comprehensive assessment of JNIM organizational structure under Iyad ag Ghali. Analyzes component groups, territorial expansion, and relationship with AQIM remnants and ISCGS.',
    headerImage: null,
    contentBlocks: [
      { type: 'paragraph', content: 'JNIM remains the most potent jihadist organization in the Sahel under the continued leadership of Iyad ag Ghali. The organization\'s federated structure — incorporating Ansar Dine, the Macina Liberation Front, AQIM\'s Saharan branch, and Al-Mourabitoun — has proven resilient to leadership attrition and provides operational flexibility across diverse terrain and ethnic groups.', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'paragraph', content: 'Since the withdrawal of French and UN forces, JNIM has expanded its operational footprint significantly, establishing governance structures in areas of Mali and Burkina Faso where state presence has collapsed. The relationship with AQIM remnants has evolved into effective absorption, with former AQIM cadres now operating under JNIM command. The competitive dynamic with ISCGS continues but has not escalated to sustained inter-group conflict.', portionMark: { classification: 'S//NF', handling: '' } }
    ],
    narrativeIds: ['narr-003'],
    themeIds: ['sub-006'],
    topicIds: ['topic-003'],
    personIds: ['person-003', 'person-005'],
    organizationIds: ['org-003', 'org-005', 'org-007'],
    locationIds: ['loc-007', 'loc-008'],
    eventIds: [],
    tagIds: ['tag-001', 'tag-region-sahel'],
    quotes: [],
    activities: [],
    factionMentions: {
      'faction-001': { stance: -0.80 }
    }
  },
  {
    id: 'doc-018',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Mozambique LNG dreams fade as insurgency grinds on in Cabo Delgado',
    url: 'https://zitamar.com/mozambique-lng-insurgency-cabo-delgado-2026',
    publishedDate: '2026-02-16T08:00:00Z',
    publisherId: 'pub-reg-zitamar',
    author: 'Joseph Hanlon',
    excerpt: 'Five years after declaring force majeure, TotalEnergies shows no signs of resuming its Mozambique LNG project. Local communities continue to bear the brunt of the insurgency while the economic promise of natural gas remains unfulfilled.',
    headerImage: null,
    contentBlocks: [
      { type: 'paragraph', content: 'Five years after insurgents attacked the town of Palma and forced TotalEnergies to suspend its $20 billion LNG project, the security situation in Cabo Delgado remains too fragile for construction to resume. Recent coordinated village raids in Macomia district underline the insurgents\' continued ability to strike with impunity in rural areas.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'For the people of Cabo Delgado, the human cost dwarfs the economic calculations. More than 800,000 people have been displaced since the insurgency began in 2017, and thousands have been killed. The promised wealth from natural gas remains a distant dream.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-005'],
    themeIds: ['sub-012'],
    topicIds: ['topic-005'],
    personIds: ['person-004'],
    organizationIds: ['org-006', 'org-018'],
    locationIds: ['loc-010', 'loc-011'],
    eventIds: ['event-008', 'event-009'],
    tagIds: ['tag-005', 'tag-region-south'],
    quotes: [],
    activities: [],
    factionMentions: {
      'faction-002': { stance: -0.58 }
    }
  },
  {
    id: 'doc-019',
    documentType: 'intelligence_report',
    repositoryId: 'repo-edl',
    classification: 'S',
    title: 'FININT Report: JNIM Gold Mining Revenue Streams in Burkina Faso',
    url: null,
    publishedDate: '2026-02-15T08:00:00Z',
    publisherId: 'pub-dia',
    author: 'DIA – Financial Intelligence Division',
    excerpt: 'Analysis of JNIM revenue extraction from artisanal gold mining sites in Burkina Faso. Maps key mining locations, intermediary traders, and estimated annual revenue of $10-20M.',
    headerImage: null,
    contentBlocks: [
      { type: 'paragraph', content: 'This report assesses JNIM\'s exploitation of artisanal gold mining (orpaillage) as a primary financing mechanism. Analysis of HUMINT reporting, commercial satellite imagery of mining sites, and financial transaction monitoring identifies at least 40 mining sites in Burkina Faso\'s Sahel and Est regions where JNIM exercises direct control or taxation authority. Annual revenue is estimated at $10-20 million based on gold production estimates and known pricing.', portionMark: { classification: 'S', handling: '' } }
    ],
    narrativeIds: ['narr-004'],
    themeIds: ['sub-009'],
    topicIds: ['topic-006'],
    personIds: ['person-006'],
    organizationIds: ['org-003'],
    locationIds: ['loc-008'],
    eventIds: ['event-010'],
    tagIds: ['tag-004', 'tag-region-sahel'],
    quotes: [],
    activities: [],
    factionMentions: {
      'faction-001': { stance: -0.72 }
    }
  },
  {
    id: 'doc-020',
    documentType: 'intelligence_report',
    repositoryId: 'repo-edl',
    classification: 'S',
    title: 'HUMINT Report: Al-Shabaab Recruitment and Financial Networks – East Africa',
    url: null,
    publishedDate: '2026-02-20T08:00:00Z',
    publisherId: 'pub-humint',
    author: 'HUMINT Reports',
    excerpt: 'Source reporting on Al-Shabaab recruitment networks in Kenya and financial facilitation through charcoal exports and hawala transfers. Corroborates OFAC designation targets.',
    headerImage: null,
    contentBlocks: [
      { type: 'paragraph', content: 'Source with direct access reports that Al-Shabaab maintains an active recruitment network in Nairobi\'s Eastleigh district managed by Abdallah Osman (Abu Zinira). The network operates through a chain of approximately 8-12 recruiters who target unemployed youth, primarily from Somali diaspora communities. Recruiters offer financial incentives ($200-500) and transportation to training camps in southern Somalia. Source estimates the network has facilitated the travel of 30-50 recruits in the past 6 months.', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'paragraph', content: 'Separately, source reporting corroborates the financial facilitation activities of individuals recently designated by OFAC. The Mogadishu-based hawala operator processes an estimated $400,000 monthly in transfers linked to Al-Shabaab operations, with funds originating from charcoal exports through Kismayo and remittances routed through Dubai.', portionMark: { classification: 'S//NF', handling: '' } }
    ],
    narrativeIds: ['narr-004', 'narr-006'],
    themeIds: ['sub-010', 'sub-014'],
    topicIds: ['topic-006', 'topic-007'],
    personIds: ['person-007', 'person-008'],
    organizationIds: ['org-001'],
    locationIds: ['loc-001', 'loc-002'],
    eventIds: ['event-011', 'event-012'],
    tagIds: ['tag-004', 'tag-region-east'],
    quotes: [],
    activities: [],
    factionMentions: {
      'faction-001': { stance: -0.78 }
    }
  },
  {
    id: 'doc-021',
    documentType: 'memo',
    repositoryId: 'repo-edl',
    classification: 'S',
    title: 'Policy Briefing: AFRICOM Commander\'s Congressional Testimony Preparation – March 2026',
    url: null,
    publishedDate: '2026-02-25T10:00:00Z',
    publisherId: 'pub-africom-j2',
    author: 'AFRICOM J2 – Policy Division',
    excerpt: 'Preparation briefing for Gen. Langley\'s congressional testimony on Africa CT posture. Key talking points: Somalia progress, Sahel ISR gap, partner capacity building.',
    headerImage: null,
    contentBlocks: [
      { type: 'paragraph', content: 'This briefing prepares key themes for the AFRICOM Commander\'s upcoming testimony before the Senate Armed Services Committee. Recommended talking points address the current threat environment, operational successes in Somalia, the ISR capability gap following the Niger withdrawal, and the importance of sustained investment in partner nation capacity building.', portionMark: { classification: 'S', handling: '' } }
    ],
    narrativeIds: ['narr-001'],
    themeIds: [],
    topicIds: [],
    personIds: ['person-009', 'person-010'],
    organizationIds: ['org-008', 'org-014'],
    locationIds: ['loc-012'],
    eventIds: [],
    tagIds: ['tag-002'],
    quotes: [],
    activities: [],
    factionMentions: {
      'faction-001': { stance: -0.55 },
      'faction-003': { stance: 0.65 }
    }
  },
  {
    id: 'doc-022',
    documentType: 'intelligence_report',
    repositoryId: 'repo-edl',
    classification: 'S',
    title: 'Assessment: Russian PMC Operations in the Sahel – Impact on CT Cooperation',
    url: null,
    publishedDate: '2026-02-08T08:00:00Z',
    publisherId: 'pub-cia-da',
    author: 'CIA Directorate of Analysis – Russia/Africa',
    excerpt: 'Assessment of Wagner/Africa Corps operations in Mali and Burkina Faso. Russian PMC presence has not reduced jihadist attacks; human rights abuses documented; impact on US CT partnerships assessed as severe.',
    headerImage: null,
    contentBlocks: [
      { type: 'paragraph', content: 'Russian private military forces operating under the Africa Corps banner (successor to Wagner Group) have expanded their footprint in the Sahel, with confirmed deployments in Mali and Burkina Faso and advisory presence in Niger following the July 2023 coup. This assessment evaluates the impact of Russian PMC operations on the jihadist threat environment and on US counterterrorism partnerships in the region.', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'paragraph', content: 'KEY JUDGMENT: Russian PMC operations have not reduced the tempo of jihadist attacks in areas where they operate. ACLED data shows attack frequency in Mali increased 28% in the 12 months following the French withdrawal, and has continued to rise. In Burkina Faso, JNIM now controls or contests an estimated 40% of national territory, up from 25% before the Russian deployment.', portionMark: { classification: 'S//NF', handling: '' } },
      { type: 'paragraph', content: 'Multiple credible sources document systematic human rights abuses by Russian-backed forces, including extrajudicial killings of civilians in Mopti and Ménaka regions. These abuses are assessed with high confidence to be driving recruitment to JNIM and ISCGS, as communities seek protection from both jihadists and government-aligned forces.', portionMark: { classification: 'S//NF', handling: '' } }
    ],
    narrativeIds: ['narr-007'],
    themeIds: ['sub-015', 'sub-016'],
    topicIds: ['topic-004'],
    personIds: ['person-012', 'person-013', 'person-015'],
    organizationIds: ['org-012', 'org-013', 'org-016'],
    locationIds: ['loc-007', 'loc-008', 'loc-009'],
    eventIds: ['event-007'],
    tagIds: ['tag-004', 'tag-region-sahel'],
    quotes: [],
    activities: [],
    factionMentions: {
      'faction-004': { stance: -0.50 },
      'faction-005': { stance: -0.62 }
    }
  },
  {
    id: 'doc-023',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Sahel juntas double down on Russia as security deteriorates',
    url: 'https://aljazeera.com/features/sahel-juntas-russia-security-2026',
    publishedDate: '2026-02-12T10:00:00Z',
    publisherId: 'pub-int-aljazeera',
    author: 'Nicolas Haque',
    excerpt: 'Mali, Burkina Faso, and Niger have formed an alliance rejecting Western partnerships in favor of Russian military support, even as jihadist violence reaches record levels across the Sahel.',
    headerImage: { url: 'http://static.photos/landscape/640x360/4', caption: 'Burkinabè soldiers at a checkpoint outside Ouagadougou. Photo: AFP' },
    contentBlocks: [
      { type: 'paragraph', content: 'The three Sahel nations governed by military juntas — Mali, Burkina Faso, and Niger — have deepened their alliance with Russia even as security conditions across the region continue to deteriorate. The countries formed the Alliance of Sahel States in 2023, explicitly rejecting Western military partnerships and ECOWAS membership.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'In Mali, Russian Africa Corps soldiers operate alongside the national army in operations against JNIM, but attacks have only increased. "The situation has not improved — it has gotten worse," said Ibrahim Maïga, a Bamako-based security analyst.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'In Burkina Faso, nearly half the country is now outside government control. Captain Traoré\'s government has armed civilian militias and invited more Russian military advisors, but JNIM\'s expansion continues unchecked in the east and north.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-003', 'narr-007'],
    themeIds: ['sub-015', 'sub-016'],
    topicIds: ['topic-004'],
    personIds: ['person-012', 'person-013', 'person-015'],
    organizationIds: ['org-012', 'org-013', 'org-016'],
    locationIds: ['loc-007', 'loc-008', 'loc-009'],
    eventIds: [],
    tagIds: ['tag-004', 'tag-region-sahel'],
    quotes: [],
    activities: [],
    factionMentions: {
      'faction-004': { stance: -0.48 },
      'faction-005': { stance: -0.55 }
    }
  },
  {
    id: 'doc-024',
    documentType: 'internal_report',
    repositoryId: 'repo-edl',
    classification: 'S',
    title: 'Impact Assessment: Loss of US Basing in Niger on Sahel ISR Coverage',
    url: null,
    publishedDate: '2026-01-20T08:00:00Z',
    publisherId: 'pub-africom-j2',
    author: 'AFRICOM J2 – ISR Division',
    excerpt: 'Assessment of intelligence collection gap created by forced withdrawal from Air Base 201, Niger. ISR coverage of central Sahel reduced by estimated 60%. Alternative platforms under evaluation.',
    headerImage: null,
    contentBlocks: [
      { type: 'paragraph', content: 'The termination of US basing rights in Niger has resulted in the loss of Air Base 201 — AFRICOM\'s primary MQ-9 Reaper drone operating location for the central Sahel. This assessment quantifies the resulting intelligence, surveillance, and reconnaissance (ISR) capability gap and evaluates mitigation options.', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'ISR coverage of the Liptako-Gourma tri-border area has been reduced by an estimated 60%. Persistent surveillance of key JNIM and ISCGS operational areas that was previously available 18-20 hours per day is now limited to intermittent satellite passes and partner-provided intelligence. This gap directly impacts the ability to provide actionable tactical intelligence to remaining partner forces and to track high-value targets.', portionMark: { classification: 'S', handling: '' } }
    ],
    narrativeIds: ['narr-003', 'narr-007'],
    themeIds: ['sub-008', 'sub-016'],
    topicIds: ['topic-004'],
    personIds: ['person-009'],
    organizationIds: ['org-008'],
    locationIds: ['loc-014'],
    eventIds: ['event-013'],
    tagIds: ['tag-004', 'tag-region-sahel'],
    quotes: [],
    activities: [],
    factionMentions: {
      'faction-003': { stance: 0.50 },
      'faction-004': { stance: -0.45 }
    }
  },
  {
    id: 'doc-025',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Somalia\'s war against Al-Shabaab: gains and setbacks',
    url: 'https://bbc.com/news/world-africa-somalia-shabaab-war-2026',
    publishedDate: '2026-02-14T06:00:00Z',
    publisherId: 'pub-int-bbc-africa',
    author: 'Harun Maruf',
    excerpt: 'Somalia\'s offensive against Al-Shabaab has produced significant territorial gains, but recent attacks in Mogadishu and Lower Shabelle show the militant group retains the ability to strike at the heart of the government.',
    headerImage: null,
    contentBlocks: [
      { type: 'paragraph', content: 'Two years into what President Hassan Sheikh Mohamud has called an "all-out war" against Al-Shabaab, Somalia\'s military offensive has produced mixed results. The Somali National Army, backed by clan militias and ATMIS forces, has recaptured dozens of towns in central and southern Somalia. But Al-Shabaab\'s devastating hotel siege in Mogadishu and continued VBIED attacks on military positions demonstrate the group\'s resilient operational capability.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-001'],
    themeIds: ['sub-001', 'sub-003'],
    topicIds: ['topic-001'],
    personIds: ['person-001', 'person-014'],
    organizationIds: ['org-001', 'org-010', 'org-015'],
    locationIds: ['loc-001', 'loc-003'],
    eventIds: ['event-001', 'event-005'],
    tagIds: ['tag-002', 'tag-region-east'],
    quotes: [],
    activities: [],
    factionMentions: {
      'faction-001': { stance: -0.72 },
      'faction-003': { stance: 0.38 }
    }
  },
  {
    id: 'doc-026',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Boko Haram remnants fade as ISWAP absorbs fighters in Lake Chad',
    url: 'https://premiumtimesng.com/boko-haram-iswap-absorption-2026',
    publishedDate: '2026-02-08T10:00:00Z',
    publisherId: 'pub-reg-premium',
    author: 'Sani Tukur',
    excerpt: 'Security analysts say what remains of Abubakar Shekau\'s Boko Haram faction continues to disintegrate, with fighters defecting to the more organized ISWAP or surrendering to Nigerian forces.',
    headerImage: null,
    contentBlocks: [
      { type: 'paragraph', content: 'Nearly five years after the death of Abubakar Shekau, what remains of his Boko Haram faction — officially known as Jama\'atu Ahlis Sunna Lidda\'awati wal-Jihad — continues to disintegrate. Security analysts tracking the group say fighters are either defecting to the better-organized ISWAP or surrendering to Nigerian military forces through government deradicalization programs.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'ISWAP, which split from Boko Haram in 2016, has emerged as the dominant jihadist force in the Lake Chad Basin, adopting a more strategic approach that avoids mass civilian casualties in favor of military targets. The recent Lake Chad island assault demonstrates how ISWAP is consolidating power.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-002'],
    themeIds: ['sub-005'],
    topicIds: ['topic-002'],
    personIds: ['person-002'],
    organizationIds: ['org-002', 'org-004'],
    locationIds: ['loc-005', 'loc-006', 'loc-015'],
    eventIds: ['event-003'],
    tagIds: ['tag-005', 'tag-region-west'],
    quotes: [],
    activities: [],
    factionMentions: {
      'faction-002': { stance: -0.65 }
    }
  },
  {
    id: 'doc-027',
    documentType: 'intelligence_report',
    repositoryId: 'repo-edl',
    classification: 'S',
    title: 'Analytical Note: JNIM Governance Expansion in Northern Mali and Burkina Faso',
    url: null,
    publishedDate: '2026-02-12T08:00:00Z',
    publisherId: 'pub-dia',
    author: 'DIA Africa Desk',
    excerpt: 'Assessment of JNIM\'s expanding governance activities including qadi courts, taxation, and local dispute resolution in areas vacated by French and UN forces.',
    headerImage: null,
    contentBlocks: [
      { type: 'paragraph', content: 'HUMINT and OSINT reporting indicates JNIM has established functioning governance structures in significant portions of northern Mali and eastern Burkina Faso. In areas where the Malian and Burkinabè states have no presence, JNIM operates qadi (Islamic law) courts for dispute resolution, collects regular taxes from markets and trade routes, and provides basic security through local militias loyal to the organization.', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'This governance model appears to be winning local acceptance in many communities that previously had no access to formal justice systems. The contrast with Wagner/Africa Corps operations — which are associated with civilian abuses — further enhances JNIM\'s relative standing among local populations.', portionMark: { classification: 'S', handling: '' } }
    ],
    narrativeIds: ['narr-003'],
    themeIds: ['sub-006'],
    topicIds: ['topic-003'],
    personIds: ['person-003'],
    organizationIds: ['org-003'],
    locationIds: ['loc-007', 'loc-008'],
    eventIds: [],
    tagIds: ['tag-004', 'tag-region-sahel'],
    quotes: [],
    activities: [],
    factionMentions: {
      'faction-001': { stance: -0.76 }
    }
  },
  {
    id: 'doc-028',
    documentType: 'news_article',
    repositoryId: 'repo-news',
    classification: 'U',
    title: 'Mozambique insurgents raid three villages in Cabo Delgado, killing nine',
    url: 'https://apnews.com/article/mozambique-cabo-delgado-isis-attack-2026',
    publishedDate: '2026-02-12T18:00:00Z',
    publisherId: 'pub-int-ap',
    author: 'Mogomotsi Magome',
    excerpt: 'Islamic State-linked insurgents raided three villages in Mozambique\'s Cabo Delgado Province at dawn, killing at least nine civilians and burning homes before security forces could respond.',
    headerImage: null,
    contentBlocks: [
      { type: 'paragraph', content: 'Islamic State-linked insurgents raided three villages in northern Mozambique\'s Cabo Delgado Province at dawn on Wednesday, killing at least nine civilians and burning dozens of homes before withdrawing ahead of the arrival of regional security forces.', portionMark: { classification: 'U', handling: '' } },
      { type: 'paragraph', content: 'The coordinated raids on the villages of Litamanda, Chai, and Naunde in Macomia district mark the most significant attack in the area in months, signaling a possible resurgence of insurgent activity despite the deployment of SADC and Rwandan forces.', portionMark: { classification: 'U', handling: '' } }
    ],
    narrativeIds: ['narr-005'],
    themeIds: ['sub-011'],
    topicIds: ['topic-005'],
    personIds: ['person-004'],
    organizationIds: ['org-006', 'org-017'],
    locationIds: ['loc-010'],
    eventIds: ['event-008'],
    tagIds: ['tag-004', 'tag-region-south'],
    quotes: [],
    activities: [],
    factionMentions: {
      'faction-002': { stance: -0.75 },
      'faction-003': { stance: 0.28 }
    }
  },
  {
    id: 'doc-029',
    documentType: 'intelligence_report',
    repositoryId: 'repo-edl',
    classification: 'S',
    title: 'FININT Report: Hawala Transfer Networks Supporting Sahel VEOs',
    url: null,
    publishedDate: '2026-02-19T08:00:00Z',
    publisherId: 'pub-cia-da',
    author: 'CIA Directorate of Analysis – FININT',
    excerpt: 'Mapping of hawala networks transferring funds from Gulf donors through East Africa to Sahelian VEOs. Identifies key transfer corridors and facilitators.',
    headerImage: null,
    contentBlocks: [
      { type: 'paragraph', content: 'This report maps the hawala transfer networks that channel funds from Gulf-based donors to violent extremist organizations operating in the Sahel. Analysis of financial intelligence, HUMINT, and SIGINT identifies primary transfer corridors running from UAE and Qatar through Somalia, Kenya, and Sudan before reaching intermediaries in Bamako, Ouagadougou, and Niamey.', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'Key facilitator Sidan ag Hitta manages the final distribution node, allocating incoming funds to JNIM operational commanders across the tri-border area. Monthly transfer volumes are estimated at $1-2 million through this corridor alone. Disruption opportunities exist at several intermediate nodes but would require coordination with Somali and Kenyan financial intelligence units.', portionMark: { classification: 'S', handling: '' } }
    ],
    narrativeIds: ['narr-004'],
    themeIds: ['sub-009', 'sub-010'],
    topicIds: ['topic-006'],
    personIds: ['person-006'],
    organizationIds: ['org-003'],
    locationIds: ['loc-008'],
    eventIds: ['event-010'],
    tagIds: ['tag-004', 'tag-region-sahel'],
    quotes: [],
    activities: [],
    factionMentions: {
      'faction-001': { stance: -0.74 }
    }
  },
  {
    id: 'doc-030',
    documentType: 'intelligence_report',
    repositoryId: 'repo-osint',
    classification: 'S',
    title: 'OSINT/HUMINT Fusion: Al-Shabaab Recruitment Pipeline – Kenya to Somalia',
    url: null,
    publishedDate: '2026-02-24T08:00:00Z',
    publisherId: 'pub-humint',
    author: 'HUMINT Reports / NSA SIGINT Division',
    excerpt: 'Fused OSINT and HUMINT assessment of Al-Shabaab recruitment pipeline from Kenya. Maps recruiter network, transit routes through refugee camps, and integration into Al-Shabaab training system.',
    headerImage: null,
    contentBlocks: [
      { type: 'paragraph', content: 'This fused intelligence product combines OSINT analysis of Al-Shabaab social media recruitment activity with HUMINT source reporting on the physical recruitment and transit pipeline operating from Kenya to Al-Shabaab training camps in southern Somalia. The pipeline operates through three phases: online radicalization and initial contact (primarily Telegram), in-person recruitment in Nairobi and refugee camps, and transit via established routes through the Kenya-Somalia border region.', portionMark: { classification: 'S', handling: '' } },
      { type: 'paragraph', content: 'The Dadaab refugee complex has been identified as a key waypoint in the transit pipeline, where recruits are housed and prepared for the border crossing. An estimated 30-50 individuals have been processed through this pipeline in the past 6 months.', portionMark: { classification: 'S', handling: '' } }
    ],
    narrativeIds: ['narr-006'],
    themeIds: ['sub-013', 'sub-014'],
    topicIds: ['topic-007'],
    personIds: ['person-008'],
    organizationIds: ['org-001'],
    locationIds: ['loc-002', 'loc-004'],
    eventIds: ['event-012'],
    tagIds: ['tag-004', 'tag-region-east'],
    quotes: [],
    activities: [],
    factionMentions: {
      'faction-001': { stance: -0.80 }
    }
  }
];
