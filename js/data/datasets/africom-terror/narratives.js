/**
 * Narratives for AFRICOM Threat Analysis dataset
 */

export const narratives = [
  {
    id: 'narr-001',
    text: 'Al-Shabaab escalating operational tempo in southern Somalia despite SNA offensive',
    description: 'Despite the Somali government\'s declared "all-out war" and significant territorial gains by the SNA and clan militias, Al-Shabaab has demonstrated resilient operational capability through complex attacks in Mogadishu and ambushes of military convoys in Lower Shabelle. The group appears to be trading territory for concentrated urban warfare capacity. AFRICOM airstrikes have degraded senior leadership but the Amniyat security apparatus remains intact.',
    missionId: 'mission-001',
    stance: -0.72,
    themeIds: ['sub-001', 'sub-002', 'sub-003'],
    tagIds: ['tag-001', 'tag-region-east'],
    publisherVolumes: {
      'pub-africom-j2': { volume: 45, stance: -0.75 },
      'pub-dia': { volume: 28, stance: -0.70 },
      'pub-int-bbc-africa': { volume: 32, stance: -0.55 },
      'pub-int-reuters': { volume: 25, stance: -0.45 },
      'pub-telegram': { volume: 85, stance: -0.90 },
      'pub-reg-garowe': { volume: 18, stance: -0.60 }
    },
    personIds: ['person-001', 'person-007', 'person-009', 'person-011', 'person-014'],
    organizationIds: ['org-001', 'org-008', 'org-009', 'org-010'],
    locationIds: ['loc-001', 'loc-003', 'loc-013'],
    eventIds: ['event-001', 'event-002', 'event-005'],
    volumeOverTime: [
      { date: '2026-01-20', publisherVolumes: { 'pub-africom-j2': 4, 'pub-dia': 2, 'pub-int-bbc-africa': 3, 'pub-telegram': 8 } },
      { date: '2026-01-25', publisherVolumes: { 'pub-africom-j2': 5, 'pub-dia': 3, 'pub-int-reuters': 4, 'pub-telegram': 12 } },
      { date: '2026-01-28', publisherVolumes: { 'pub-africom-j2': 8, 'pub-dia': 5, 'pub-int-bbc-africa': 6, 'pub-int-reuters': 5, 'pub-telegram': 18 } },
      { date: '2026-02-01', publisherVolumes: { 'pub-africom-j2': 6, 'pub-dia': 4, 'pub-int-bbc-africa': 5, 'pub-telegram': 14 } },
      { date: '2026-02-05', publisherVolumes: { 'pub-africom-j2': 5, 'pub-dia': 3, 'pub-int-reuters': 3, 'pub-telegram': 10 } },
      { date: '2026-02-10', publisherVolumes: { 'pub-africom-j2': 10, 'pub-dia': 6, 'pub-int-bbc-africa': 8, 'pub-int-reuters': 6, 'pub-telegram': 22, 'pub-reg-garowe': 5 } },
      { date: '2026-02-15', publisherVolumes: { 'pub-africom-j2': 7, 'pub-dia': 5, 'pub-int-bbc-africa': 5, 'pub-telegram': 12 } }
    ],
    documentIds: ['doc-001', 'doc-003', 'doc-005', 'doc-013', 'doc-015', 'doc-025'],
    createdAt: '2026-01-20T00:00:00Z'
  },
  {
    id: 'narr-002',
    text: 'ISWAP supplanting Boko Haram as dominant force in Lake Chad Basin',
    description: 'ISWAP continues to consolidate control in the Lake Chad Basin following the 2021 death of Boko Haram leader Shekau. ISWAP\'s more disciplined approach—targeting military rather than civilian targets and providing basic governance—has won local support and attracted former Boko Haram fighters. The group\'s ability to conduct large-scale amphibious assaults on MNJTF positions demonstrates growing conventional military capability.',
    missionId: 'mission-001',
    stance: -0.65,
    themeIds: ['sub-004', 'sub-005'],
    tagIds: ['tag-002', 'tag-region-west'],
    publisherVolumes: {
      'pub-africom-j2': { volume: 22, stance: -0.68 },
      'pub-dia': { volume: 18, stance: -0.62 },
      'pub-int-bbc-africa': { volume: 15, stance: -0.50 },
      'pub-reg-vanguard': { volume: 20, stance: -0.55 },
      'pub-reg-premium': { volume: 12, stance: -0.48 },
      'pub-telegram': { volume: 45, stance: -0.85 }
    },
    personIds: ['person-002'],
    organizationIds: ['org-002', 'org-004', 'org-011'],
    locationIds: ['loc-005', 'loc-006', 'loc-015'],
    eventIds: ['event-003', 'event-006'],
    volumeOverTime: [
      { date: '2026-01-20', publisherVolumes: { 'pub-africom-j2': 2, 'pub-reg-vanguard': 3, 'pub-telegram': 5 } },
      { date: '2026-01-27', publisherVolumes: { 'pub-africom-j2': 3, 'pub-dia': 2, 'pub-reg-premium': 2, 'pub-telegram': 6 } },
      { date: '2026-02-02', publisherVolumes: { 'pub-africom-j2': 5, 'pub-dia': 4, 'pub-int-bbc-africa': 4, 'pub-reg-vanguard': 5, 'pub-telegram': 12 } },
      { date: '2026-02-04', publisherVolumes: { 'pub-africom-j2': 4, 'pub-dia': 3, 'pub-reg-vanguard': 4, 'pub-telegram': 10 } },
      { date: '2026-02-10', publisherVolumes: { 'pub-africom-j2': 3, 'pub-dia': 2, 'pub-reg-premium': 3, 'pub-telegram': 7 } },
      { date: '2026-02-18', publisherVolumes: { 'pub-africom-j2': 3, 'pub-reg-vanguard': 3, 'pub-telegram': 5 } }
    ],
    documentIds: ['doc-002', 'doc-006', 'doc-016', 'doc-026'],
    createdAt: '2026-01-20T00:00:00Z'
  },
  {
    id: 'narr-003',
    text: 'JNIM exploiting post-Barkhane security vacuum in Sahel to expand territorial control',
    description: 'The withdrawal of French Operation Barkhane forces and UN MINUSMA peacekeepers from Mali has created a security vacuum that JNIM is rapidly filling. The group has expanded from its traditional strongholds into previously contested areas, established governance structures, and increased revenue from gold mining and trade taxation. Russian PMC deployment has not compensated for the loss of French ISR and special operations capability.',
    missionId: 'mission-002',
    stance: -0.78,
    themeIds: ['sub-006', 'sub-007', 'sub-008'],
    tagIds: ['tag-001', 'tag-region-sahel'],
    publisherVolumes: {
      'pub-africom-j2': { volume: 35, stance: -0.80 },
      'pub-dia': { volume: 25, stance: -0.75 },
      'pub-cia-da': { volume: 15, stance: -0.82 },
      'pub-int-france24': { volume: 28, stance: -0.65 },
      'pub-int-aljazeera': { volume: 22, stance: -0.58 },
      'pub-int-reuters': { volume: 18, stance: -0.50 },
      'pub-acled': { volume: 12, stance: -0.70 }
    },
    personIds: ['person-003', 'person-012', 'person-013'],
    organizationIds: ['org-003', 'org-005', 'org-012', 'org-013', 'org-016'],
    locationIds: ['loc-007', 'loc-008', 'loc-009', 'loc-014'],
    eventIds: ['event-004', 'event-007', 'event-013'],
    volumeOverTime: [
      { date: '2026-01-15', publisherVolumes: { 'pub-africom-j2': 3, 'pub-dia': 2, 'pub-int-france24': 4 } },
      { date: '2026-01-22', publisherVolumes: { 'pub-africom-j2': 4, 'pub-cia-da': 2, 'pub-int-aljazeera': 3, 'pub-int-reuters': 2 } },
      { date: '2026-01-29', publisherVolumes: { 'pub-africom-j2': 4, 'pub-dia': 3, 'pub-int-france24': 3, 'pub-acled': 2 } },
      { date: '2026-02-05', publisherVolumes: { 'pub-africom-j2': 7, 'pub-dia': 5, 'pub-cia-da': 3, 'pub-int-france24': 6, 'pub-int-aljazeera': 5, 'pub-int-reuters': 4, 'pub-acled': 3 } },
      { date: '2026-02-08', publisherVolumes: { 'pub-africom-j2': 6, 'pub-dia': 4, 'pub-int-france24': 5, 'pub-int-reuters': 3 } },
      { date: '2026-02-15', publisherVolumes: { 'pub-africom-j2': 5, 'pub-dia': 3, 'pub-int-aljazeera': 3, 'pub-acled': 2 } },
      { date: '2026-02-18', publisherVolumes: { 'pub-africom-j2': 6, 'pub-dia': 5, 'pub-cia-da': 4, 'pub-int-france24': 5, 'pub-int-reuters': 4, 'pub-acled': 3 } }
    ],
    documentIds: ['doc-004', 'doc-007', 'doc-017', 'doc-022', 'doc-023', 'doc-024', 'doc-027'],
    createdAt: '2026-01-15T00:00:00Z'
  },
  {
    id: 'narr-004',
    text: 'Terror financing networks exploiting artisanal gold mining and hawala systems across Sahel',
    description: 'UN and US intelligence investigations have mapped extensive financing networks supporting Sahelian VEOs. JNIM generates an estimated $10-20M annually from artisanal gold mining in Burkina Faso, supplemented by kidnapping ransoms and trade route taxation. Funds move through hawala networks linking Gulf donors to Sahel operations, with key nodes identified in Dubai, Bamako, and Ouagadougou. OFAC and UN sanctions have targeted individual facilitators but the networks remain resilient.',
    missionId: 'mission-002',
    stance: -0.70,
    themeIds: ['sub-009', 'sub-010'],
    tagIds: ['tag-001', 'tag-region-sahel'],
    publisherVolumes: {
      'pub-dia': { volume: 20, stance: -0.72 },
      'pub-cia-da': { volume: 18, stance: -0.75 },
      'pub-un-panel': { volume: 12, stance: -0.65 },
      'pub-fatf': { volume: 8, stance: -0.60 },
      'pub-ofac': { volume: 6, stance: -0.68 },
      'pub-int-reuters': { volume: 10, stance: -0.48 }
    },
    personIds: ['person-003', 'person-006', 'person-007'],
    organizationIds: ['org-001', 'org-003'],
    locationIds: ['loc-008', 'loc-009'],
    eventIds: ['event-010', 'event-011'],
    volumeOverTime: [
      { date: '2026-01-25', publisherVolumes: { 'pub-dia': 2, 'pub-cia-da': 2, 'pub-int-reuters': 1 } },
      { date: '2026-02-01', publisherVolumes: { 'pub-dia': 3, 'pub-cia-da': 2, 'pub-un-panel': 1, 'pub-int-reuters': 2 } },
      { date: '2026-02-10', publisherVolumes: { 'pub-dia': 3, 'pub-cia-da': 3, 'pub-fatf': 2, 'pub-ofac': 1 } },
      { date: '2026-02-18', publisherVolumes: { 'pub-dia': 5, 'pub-cia-da': 4, 'pub-un-panel': 5, 'pub-fatf': 3, 'pub-ofac': 2, 'pub-int-reuters': 4 } },
      { date: '2026-02-20', publisherVolumes: { 'pub-dia': 4, 'pub-cia-da': 3, 'pub-ofac': 3, 'pub-int-reuters': 2 } },
      { date: '2026-02-25', publisherVolumes: { 'pub-dia': 3, 'pub-cia-da': 2, 'pub-un-panel': 2, 'pub-int-reuters': 1 } }
    ],
    documentIds: ['doc-010', 'doc-011', 'doc-019', 'doc-020', 'doc-029'],
    createdAt: '2026-01-25T00:00:00Z'
  },
  {
    id: 'narr-005',
    text: 'ISIS-Mozambique insurgency threatening Cabo Delgado LNG infrastructure and regional stability',
    description: 'Despite SADC and Rwandan military deployments, ISIS-Mozambique continues to demonstrate operational resilience in Cabo Delgado Province. Coordinated village raids show the group retains capability for offensive action even as it has been pushed from major urban centers. TotalEnergies\' continued force majeure on its $20B LNG project reflects the persistent security threat, with significant economic implications for Mozambique and regional energy markets.',
    missionId: 'mission-003',
    stance: -0.62,
    themeIds: ['sub-011', 'sub-012'],
    tagIds: ['tag-002', 'tag-region-south'],
    publisherVolumes: {
      'pub-africom-j2': { volume: 18, stance: -0.65 },
      'pub-dia': { volume: 12, stance: -0.60 },
      'pub-int-bbc-africa': { volume: 14, stance: -0.48 },
      'pub-int-reuters': { volume: 10, stance: -0.42 },
      'pub-reg-zitamar': { volume: 16, stance: -0.55 },
      'pub-int-france24': { volume: 8, stance: -0.50 }
    },
    personIds: ['person-004'],
    organizationIds: ['org-006', 'org-017', 'org-018'],
    locationIds: ['loc-010', 'loc-011'],
    eventIds: ['event-008', 'event-009'],
    volumeOverTime: [
      { date: '2026-01-20', publisherVolumes: { 'pub-africom-j2': 2, 'pub-reg-zitamar': 2, 'pub-int-bbc-africa': 1 } },
      { date: '2026-02-01', publisherVolumes: { 'pub-africom-j2': 2, 'pub-dia': 1, 'pub-reg-zitamar': 3 } },
      { date: '2026-02-12', publisherVolumes: { 'pub-africom-j2': 4, 'pub-dia': 3, 'pub-int-bbc-africa': 4, 'pub-int-reuters': 3, 'pub-reg-zitamar': 5, 'pub-int-france24': 2 } },
      { date: '2026-02-15', publisherVolumes: { 'pub-africom-j2': 3, 'pub-dia': 2, 'pub-int-bbc-africa': 3, 'pub-int-reuters': 3, 'pub-reg-zitamar': 4, 'pub-int-france24': 3 } },
      { date: '2026-02-20', publisherVolumes: { 'pub-africom-j2': 3, 'pub-dia': 2, 'pub-reg-zitamar': 3, 'pub-int-reuters': 1 } },
      { date: '2026-02-25', publisherVolumes: { 'pub-africom-j2': 2, 'pub-reg-zitamar': 2 } }
    ],
    documentIds: ['doc-008', 'doc-009', 'doc-018', 'doc-028'],
    createdAt: '2026-01-20T00:00:00Z'
  },
  {
    id: 'narr-006',
    text: 'Al-Shabaab social media recruitment campaigns targeting Kenyan and diaspora youth',
    description: 'Al-Shabaab has intensified social media recruitment efforts, particularly on Telegram and WhatsApp, targeting Kenyan youth and Somali diaspora communities. Professionally produced Swahili-language videos exploit economic grievances, police brutality, and ethnic marginalization. SIGINT intercepts reveal a coordinated network of recruiters operating in Nairobi\'s Eastleigh district and refugee camps, managed by Abu Zinira (Abdallah Osman).',
    missionId: 'mission-001',
    stance: -0.68,
    themeIds: ['sub-013', 'sub-014'],
    tagIds: ['tag-002', 'tag-region-east'],
    publisherVolumes: {
      'pub-nsa-sigint': { volume: 15, stance: -0.72 },
      'pub-humint': { volume: 10, stance: -0.70 },
      'pub-telegram': { volume: 65, stance: -0.88 },
      'pub-whatsapp': { volume: 30, stance: -0.82 },
      'pub-reg-nation': { volume: 12, stance: -0.55 },
      'pub-int-bbc-africa': { volume: 8, stance: -0.50 }
    },
    personIds: ['person-008'],
    organizationIds: ['org-001'],
    locationIds: ['loc-002', 'loc-004'],
    eventIds: ['event-012'],
    volumeOverTime: [
      { date: '2026-01-25', publisherVolumes: { 'pub-nsa-sigint': 2, 'pub-telegram': 8, 'pub-whatsapp': 4 } },
      { date: '2026-02-01', publisherVolumes: { 'pub-nsa-sigint': 2, 'pub-humint': 1, 'pub-telegram': 10, 'pub-whatsapp': 5 } },
      { date: '2026-02-10', publisherVolumes: { 'pub-nsa-sigint': 3, 'pub-humint': 2, 'pub-telegram': 12, 'pub-whatsapp': 6 } },
      { date: '2026-02-18', publisherVolumes: { 'pub-nsa-sigint': 2, 'pub-telegram': 8, 'pub-whatsapp': 4, 'pub-reg-nation': 3 } },
      { date: '2026-02-22', publisherVolumes: { 'pub-nsa-sigint': 4, 'pub-humint': 3, 'pub-telegram': 18, 'pub-whatsapp': 8, 'pub-reg-nation': 5, 'pub-int-bbc-africa': 4 } },
      { date: '2026-02-25', publisherVolumes: { 'pub-nsa-sigint': 2, 'pub-telegram': 10, 'pub-whatsapp': 4, 'pub-reg-nation': 3 } }
    ],
    documentIds: ['doc-012', 'doc-020', 'doc-030'],
    createdAt: '2026-01-25T00:00:00Z'
  },
  {
    id: 'narr-007',
    text: 'Russian PMC operations undermining Western counterterrorism partnerships in Sahel',
    description: 'The deployment of Wagner/Africa Corps forces to Mali and Burkina Faso, invited by coup-installed juntas that expelled French and UN forces, has fundamentally reshaped the Sahel security landscape. Russian PMCs have not reduced jihadist attacks but have complicated AFRICOM intelligence collection after the loss of US basing in Niger. Human rights abuses by Russian-backed forces risk further alienating civilian populations and feeding VEO recruitment.',
    missionId: 'mission-002',
    stance: -0.58,
    themeIds: ['sub-015', 'sub-016'],
    tagIds: ['tag-002', 'tag-region-sahel'],
    publisherVolumes: {
      'pub-africom-j2': { volume: 20, stance: -0.60 },
      'pub-cia-da': { volume: 15, stance: -0.65 },
      'pub-dia': { volume: 12, stance: -0.58 },
      'pub-int-france24': { volume: 18, stance: -0.72 },
      'pub-int-aljazeera': { volume: 14, stance: -0.45 },
      'pub-int-ap': { volume: 10, stance: -0.50 },
      'pub-acled': { volume: 8, stance: -0.55 }
    },
    personIds: ['person-012', 'person-013', 'person-015'],
    organizationIds: ['org-012', 'org-013', 'org-016'],
    locationIds: ['loc-007', 'loc-008', 'loc-009', 'loc-014'],
    eventIds: ['event-007', 'event-013'],
    volumeOverTime: [
      { date: '2026-01-15', publisherVolumes: { 'pub-africom-j2': 3, 'pub-cia-da': 2, 'pub-int-france24': 3 } },
      { date: '2026-01-25', publisherVolumes: { 'pub-africom-j2': 2, 'pub-dia': 2, 'pub-int-aljazeera': 2, 'pub-int-ap': 1 } },
      { date: '2026-02-05', publisherVolumes: { 'pub-africom-j2': 3, 'pub-cia-da': 2, 'pub-int-france24': 3, 'pub-acled': 2 } },
      { date: '2026-02-08', publisherVolumes: { 'pub-africom-j2': 5, 'pub-cia-da': 4, 'pub-dia': 3, 'pub-int-france24': 5, 'pub-int-aljazeera': 4, 'pub-int-ap': 3, 'pub-acled': 3 } },
      { date: '2026-02-15', publisherVolumes: { 'pub-africom-j2': 4, 'pub-cia-da': 3, 'pub-int-france24': 3, 'pub-int-ap': 2 } },
      { date: '2026-02-22', publisherVolumes: { 'pub-africom-j2': 3, 'pub-dia': 2, 'pub-int-aljazeera': 2, 'pub-acled': 2 } }
    ],
    documentIds: ['doc-007', 'doc-022', 'doc-023', 'doc-024'],
    createdAt: '2026-01-15T00:00:00Z'
  }
];
