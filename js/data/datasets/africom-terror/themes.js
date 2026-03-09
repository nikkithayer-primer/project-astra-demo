/**
 * Themes for AFRICOM Threat Analysis dataset
 * Note: volumeOverTime is computed from documentIds via DataService
 */

export const themes = [
  // --- Narrative 1: Al-Shabaab operational tempo ---
  {
    id: 'sub-001',
    text: 'Al-Shabaab VBIED attacks targeting SNA and ATMIS forces in Lower Shabelle',
    description: 'Al-Shabaab continues to employ vehicle-borne IEDs against military checkpoints and convoys in the Lower Shabelle region, demonstrating sustained capability to produce and deploy complex explosive devices despite SNA offensive operations.',
    parentNarrativeId: 'narr-001',
    stance: -0.75,
    tagIds: ['tag-004', 'tag-region-east'],
    personIds: ['person-001', 'person-011'],
    organizationIds: ['org-001', 'org-010'],
    locationIds: ['loc-003'],
    eventIds: ['event-001'],
    documentIds: ['doc-001', 'doc-015']
  },
  {
    id: 'sub-002',
    text: 'AFRICOM precision strikes degrading Al-Shabaab leadership but command structure adapts',
    description: 'US airstrikes have successfully eliminated several mid-level Al-Shabaab commanders, but the group\'s decentralized command structure and the Amniyat\'s operational security have limited the strategic impact. Al-Shabaab continues to regenerate leadership cadre from its pool of experienced fighters.',
    parentNarrativeId: 'narr-001',
    stance: -0.55,
    tagIds: ['tag-002', 'tag-region-east'],
    personIds: ['person-009'],
    organizationIds: ['org-001', 'org-008'],
    locationIds: ['loc-013'],
    eventIds: ['event-002'],
    documentIds: ['doc-005', 'doc-013']
  },
  {
    id: 'sub-003',
    text: 'Al-Shabaab\'s Amniyat orchestrating complex urban attacks in Mogadishu',
    description: 'The Amniyat, Al-Shabaab\'s intelligence and security wing under Mahad Karate, continues to plan and execute complex multi-phase attacks in Mogadishu, including hotel sieges and coordinated VBIED assaults targeting government and civilian infrastructure.',
    parentNarrativeId: 'narr-001',
    stance: -0.82,
    tagIds: ['tag-004', 'tag-region-east'],
    personIds: ['person-007', 'person-014'],
    organizationIds: ['org-001', 'org-015'],
    locationIds: ['loc-001'],
    eventIds: ['event-005'],
    documentIds: ['doc-003', 'doc-025']
  },
  // --- Narrative 2: ISWAP vs Boko Haram ---
  {
    id: 'sub-004',
    text: 'ISWAP demonstrating growing conventional military capability in Lake Chad amphibious operations',
    description: 'ISWAP\'s ability to mass 200+ fighters for coordinated amphibious assaults on MNJTF positions represents a significant increase in conventional military capability, moving beyond typical hit-and-run insurgent tactics.',
    parentNarrativeId: 'narr-002',
    stance: -0.70,
    tagIds: ['tag-004', 'tag-region-west'],
    personIds: ['person-002'],
    organizationIds: ['org-002', 'org-011'],
    locationIds: ['loc-006'],
    eventIds: ['event-003'],
    documentIds: ['doc-002', 'doc-006']
  },
  {
    id: 'sub-005',
    text: 'Former Boko Haram fighters defecting to ISWAP following Shekau\'s death',
    description: 'Intelligence indicates continued absorption of former Boko Haram (JAS) fighters into ISWAP ranks. Shekau\'s death in 2021 removed the primary obstacle to unification, and ISWAP\'s less-extreme approach to civilian populations makes it an attractive alternative for fighters seeking organizational stability.',
    parentNarrativeId: 'narr-002',
    stance: -0.58,
    tagIds: ['tag-005', 'tag-region-west'],
    personIds: ['person-002'],
    organizationIds: ['org-002', 'org-004'],
    locationIds: ['loc-005', 'loc-015'],
    eventIds: [],
    documentIds: ['doc-016', 'doc-026']
  },
  // --- Narrative 3: Sahel post-Barkhane vacuum ---
  {
    id: 'sub-006',
    text: 'JNIM establishing de facto governance in areas vacated by French and UN forces',
    description: 'JNIM has rapidly moved to fill the security vacuum left by the withdrawal of Operation Barkhane and MINUSMA, establishing dispute resolution courts (qadi courts), collecting taxes, and providing basic security in areas of Mali and Burkina Faso where state presence has collapsed.',
    parentNarrativeId: 'narr-003',
    stance: -0.80,
    tagIds: ['tag-004', 'tag-region-sahel'],
    personIds: ['person-003'],
    organizationIds: ['org-003'],
    locationIds: ['loc-007', 'loc-008'],
    eventIds: [],
    documentIds: ['doc-017', 'doc-027']
  },
  {
    id: 'sub-007',
    text: 'FAMa-Wagner joint operations failing to contain JNIM expansion',
    description: 'Despite Russian PMC reinforcement, the Mali Armed Forces have been unable to halt JNIM\'s territorial expansion. The JNIM convoy ambush in Liptako-Gourma demonstrates the group\'s ability to strike military targets even in areas where Wagner forces operate.',
    parentNarrativeId: 'narr-003',
    stance: -0.75,
    tagIds: ['tag-004', 'tag-region-sahel'],
    personIds: ['person-003', 'person-012'],
    organizationIds: ['org-003', 'org-012', 'org-016'],
    locationIds: ['loc-007', 'loc-008'],
    eventIds: ['event-004', 'event-007'],
    documentIds: ['doc-004', 'doc-007', 'doc-022']
  },
  {
    id: 'sub-008',
    text: 'Loss of US ISR capability in Sahel after Niger base withdrawal',
    description: 'The forced withdrawal from Air Base 201 in Niger has eliminated the primary US drone surveillance platform covering the central Sahel, significantly degrading AFRICOM\'s ability to monitor JNIM and ISCGS movements and support partner force operations.',
    parentNarrativeId: 'narr-003',
    stance: -0.72,
    tagIds: ['tag-004', 'tag-region-sahel'],
    personIds: ['person-009'],
    organizationIds: ['org-008'],
    locationIds: ['loc-014'],
    eventIds: ['event-013'],
    documentIds: ['doc-023', 'doc-024']
  },
  // --- Narrative 4: Terror financing ---
  {
    id: 'sub-009',
    text: 'JNIM generating $10-20M annually from artisanal gold mining in Burkina Faso',
    description: 'UN Panel of Experts investigation documented JNIM\'s systematic extraction of revenue from artisanal gold mining sites in Burkina Faso\'s Sahel region. The group taxes miners, controls supply chains for mercury and equipment, and sells gold through intermediaries in Bamako and Ouagadougou.',
    parentNarrativeId: 'narr-004',
    stance: -0.72,
    tagIds: ['tag-004', 'tag-region-sahel'],
    personIds: ['person-006'],
    organizationIds: ['org-003'],
    locationIds: ['loc-008', 'loc-009'],
    eventIds: ['event-010'],
    documentIds: ['doc-010', 'doc-019', 'doc-029']
  },
  {
    id: 'sub-010',
    text: 'Hawala networks linking Gulf donors to Sahel militant operations',
    description: 'Financial intelligence identifies hawala transfer corridors running from UAE/Gulf states through East Africa to Sahel VEOs. OFAC designations and UN sanctions have targeted individual facilitators but the decentralized nature of the hawala system makes comprehensive disruption difficult.',
    parentNarrativeId: 'narr-004',
    stance: -0.68,
    tagIds: ['tag-004'],
    personIds: ['person-006', 'person-007'],
    organizationIds: ['org-001', 'org-003'],
    locationIds: [],
    eventIds: ['event-011'],
    documentIds: ['doc-011', 'doc-020']
  },
  // --- Narrative 5: Mozambique insurgency ---
  {
    id: 'sub-011',
    text: 'ISIS-Mozambique conducting village raids despite SADC/Rwandan deployment',
    description: 'Coordinated attacks on three villages in Macomia district demonstrate ISIS-Mozambique\'s continued operational capability in rural Cabo Delgado, even as international forces have secured major towns. The pattern of dawn raids, looting, and withdrawal suggests adaptive tactics designed to avoid confrontation with superior forces.',
    parentNarrativeId: 'narr-005',
    stance: -0.65,
    tagIds: ['tag-004', 'tag-region-south'],
    personIds: ['person-004'],
    organizationIds: ['org-006', 'org-017'],
    locationIds: ['loc-010'],
    eventIds: ['event-008'],
    documentIds: ['doc-008', 'doc-028']
  },
  {
    id: 'sub-012',
    text: 'TotalEnergies LNG project suspension reflecting persistent security concerns',
    description: 'TotalEnergies\' continued force majeure on its $20B Mozambique LNG project is the most significant economic consequence of the Cabo Delgado insurgency. The company has cited ongoing village raids as evidence that the security environment remains inadequate for construction to resume.',
    parentNarrativeId: 'narr-005',
    stance: -0.55,
    tagIds: ['tag-005', 'tag-region-south'],
    personIds: [],
    organizationIds: ['org-018', 'org-006'],
    locationIds: ['loc-010', 'loc-011'],
    eventIds: ['event-009'],
    documentIds: ['doc-009', 'doc-018']
  },
  // --- Narrative 6: Recruitment ---
  {
    id: 'sub-013',
    text: 'Telegram channels serving as primary Al-Shabaab recruitment platform for East Africa',
    description: 'Al-Shabaab\'s media wing operates a network of Telegram channels distributing propaganda and recruitment content in Somali, Swahili, and English. The channels feature professionally produced videos, success stories from fighters, and real-time operational updates designed to attract recruits.',
    parentNarrativeId: 'narr-006',
    stance: -0.72,
    tagIds: ['tag-004', 'tag-region-east'],
    personIds: ['person-008'],
    organizationIds: ['org-001'],
    locationIds: ['loc-002'],
    eventIds: ['event-012'],
    documentIds: ['doc-012', 'doc-030']
  },
  {
    id: 'sub-014',
    text: 'Al-Shabaab exploiting Kenyan youth economic grievances for recruitment',
    description: 'Recruitment messaging specifically targets economic marginalization and unemployment among Kenyan youth, particularly in Somali diaspora communities. Recruiters offer financial incentives and a sense of belonging, exploiting the same socioeconomic conditions that drive gang recruitment in Nairobi.',
    parentNarrativeId: 'narr-006',
    stance: -0.65,
    tagIds: ['tag-005', 'tag-region-east'],
    personIds: ['person-008'],
    organizationIds: ['org-001'],
    locationIds: ['loc-002', 'loc-004'],
    eventIds: [],
    documentIds: ['doc-020', 'doc-030']
  },
  // --- Narrative 7: Russian PMC impact ---
  {
    id: 'sub-015',
    text: 'Wagner/Africa Corps human rights abuses fueling VEO recruitment in Sahel',
    description: 'Reports from ACLED, HRW, and HUMINT sources document widespread civilian abuses by Wagner/Africa Corps forces operating alongside Malian and Burkinabè militaries, including extrajudicial killings and destruction of villages. These abuses are assessed to be driving recruitment to JNIM and ISCGS.',
    parentNarrativeId: 'narr-007',
    stance: -0.70,
    tagIds: ['tag-004', 'tag-region-sahel'],
    personIds: ['person-012', 'person-013'],
    organizationIds: ['org-016', 'org-012', 'org-013'],
    locationIds: ['loc-007', 'loc-008'],
    eventIds: [],
    documentIds: ['doc-022', 'doc-023']
  },
  {
    id: 'sub-016',
    text: 'Sahel junta governments prioritizing Russia partnerships over Western CT cooperation',
    description: 'Mali, Burkina Faso, and Niger have all expelled French forces and curtailed Western military cooperation in favor of Russian partnerships. This geopolitical shift has significantly constrained AFRICOM\'s ability to conduct counterterrorism operations and support partner forces in the Sahel.',
    parentNarrativeId: 'narr-007',
    stance: -0.55,
    tagIds: ['tag-005', 'tag-region-sahel'],
    personIds: ['person-012', 'person-013'],
    organizationIds: ['org-012', 'org-013', 'org-016'],
    locationIds: ['loc-007', 'loc-009', 'loc-014'],
    eventIds: ['event-007', 'event-013'],
    documentIds: ['doc-007', 'doc-024']
  }
];
