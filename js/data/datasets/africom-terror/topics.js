/**
 * Topics for AFRICOM Threat Analysis dataset
 */

export const topics = [
  {
    id: 'topic-001',
    headline: 'Al-Shabaab Demonstrates Resilient Attack Capability Despite SNA Offensive',
    description: 'Al-Shabaab has conducted multiple complex attacks in Somalia including a VBIED on an SNA checkpoint and a 12-hour hotel siege in Mogadishu, demonstrating that the group retains significant operational capability even as the Somali government\'s military offensive produces territorial gains.',
    bulletPoints: [
      'Al-Shabaab detonated a VBIED at an SNA checkpoint on the Afgooye corridor, killing 14 soldiers and 3 civilians, followed by a ground assault repelled by ATMIS forces.',
      'A 12-hour hotel siege in Mogadishu\'s Hamarweyne district killed 22 people including 3 government officials, planned by Al-Shabaab\'s Amniyat intelligence wing.',
      'AFRICOM conducted a precision airstrike near Jilib that eliminated a senior Al-Shabaab operational planner, but the group\'s decentralized structure limits strategic impact.',
      'The SNA offensive has produced territorial gains but the government lacks capacity to hold and administer recovered areas, allowing Al-Shabaab to recontest lost ground.'
    ],
    documentIds: ['doc-001', 'doc-003', 'doc-005', 'doc-015', 'doc-025'],
    tagIds: ['tag-001', 'tag-region-east'],
    startDate: '2026-01-28',
    endDate: null,
    volumeOverTime: [
      { date: '2026-01-28', volume: 185 },
      { date: '2026-01-30', volume: 142 },
      { date: '2026-02-05', volume: 98 },
      { date: '2026-02-10', volume: 320 },
      { date: '2026-02-14', volume: 195 },
      { date: '2026-02-20', volume: 125 }
    ],
    createdAt: '2026-01-28T10:00:00Z'
  },
  {
    id: 'topic-002',
    headline: 'ISWAP Growing Into Conventional Military Threat in Lake Chad Basin',
    description: 'ISWAP executed a large-scale amphibious assault on an MNJTF position using 200+ fighters, signaling a shift from insurgent tactics to conventional military capability. The group continues to absorb former Boko Haram fighters and expand territorial control across Lake Chad.',
    bulletPoints: [
      'Approximately 200 ISWAP fighters overran an MNJTF outpost on Kirta Wulgo island using coordinated amphibious assault, killing 8 soldiers and seizing weapons.',
      'ISWAP released a professional propaganda video on Telegram showcasing captured weapons including PKM machine guns and RPGs, calling for new recruits.',
      'Former Boko Haram fighters continue to defect to ISWAP following Shekau\'s 2021 death, bolstering the group\'s manpower and operational ambition.',
      'ISWAP\'s governance approach — targeting military over civilian targets — has won local support in Lake Chad communities, complicating counterinsurgency efforts.'
    ],
    documentIds: ['doc-002', 'doc-006', 'doc-016', 'doc-026'],
    tagIds: ['tag-002', 'tag-region-west'],
    startDate: '2026-02-02',
    endDate: null,
    volumeOverTime: [
      { date: '2026-02-02', volume: 210 },
      { date: '2026-02-04', volume: 165 },
      { date: '2026-02-08', volume: 120 },
      { date: '2026-02-15', volume: 85 }
    ],
    createdAt: '2026-02-02T08:00:00Z'
  },
  {
    id: 'topic-003',
    headline: 'JNIM Expanding Across Sahel as French and UN Forces Withdraw',
    description: 'JNIM has rapidly filled the security vacuum created by the departure of French Operation Barkhane and UN MINUSMA forces from Mali, expanding governance and operations even as Russian private military contractors deploy to the region.',
    bulletPoints: [
      'JNIM ambushed a FAMa convoy between Gao and Ménaka, killing 11 soldiers and destroying 6 vehicles including Russian-supplied APCs, demonstrating capability in formerly French-secured areas.',
      'JNIM has established governance structures including qadi courts and taxation in areas of Mali and Burkina Faso where state presence has collapsed.',
      'Wagner/Africa Corps deployed approximately 150 troops to the Ménaka region but ACLED data shows attacks have increased 28% since the French withdrawal.',
      'CIA assessment characterizes JNIM as the most potent jihadist organization in the Sahel, with a federated structure that provides resilience and operational flexibility.'
    ],
    documentIds: ['doc-004', 'doc-007', 'doc-017', 'doc-027'],
    tagIds: ['tag-001', 'tag-region-sahel'],
    startDate: '2026-02-05',
    endDate: null,
    volumeOverTime: [
      { date: '2026-02-05', volume: 245 },
      { date: '2026-02-08', volume: 310 },
      { date: '2026-02-12', volume: 195 },
      { date: '2026-02-18', volume: 220 },
      { date: '2026-02-25', volume: 145 }
    ],
    createdAt: '2026-02-05T18:00:00Z'
  },
  {
    id: 'topic-004',
    headline: 'Russian PMC Expansion Complicates Sahel Counterterrorism',
    description: 'Wagner/Africa Corps operations in Mali, Burkina Faso, and Niger have failed to reduce jihadist attacks while documented human rights abuses are driving VEO recruitment, and the loss of US basing in Niger has created a critical ISR gap.',
    bulletPoints: [
      'Russian PMC deployment to northeastern Mali\'s Ménaka region confirmed by satellite imagery, representing their deepest penetration into JNIM-contested territory.',
      'Human rights organizations document systematic civilian abuses by Russian-backed forces in Mopti and Ménaka, assessed with high confidence to drive JNIM/ISCGS recruitment.',
      'Niger junta formally revoked US military basing agreement, forcing withdrawal from Air Base 201 and reducing Sahel ISR coverage by an estimated 60%.',
      'Sahel juntas (Mali, Burkina Faso, Niger) formed Alliance of Sahel States, explicitly rejecting Western partnerships in favor of Russian military cooperation.'
    ],
    documentIds: ['doc-022', 'doc-023', 'doc-024'],
    tagIds: ['tag-002', 'tag-region-sahel'],
    startDate: '2026-01-15',
    endDate: null,
    volumeOverTime: [
      { date: '2026-01-15', volume: 95 },
      { date: '2026-02-01', volume: 120 },
      { date: '2026-02-08', volume: 275 },
      { date: '2026-02-12', volume: 185 },
      { date: '2026-02-20', volume: 130 }
    ],
    createdAt: '2026-01-15T08:00:00Z'
  },
  {
    id: 'topic-005',
    headline: 'ISIS-Mozambique Resurgence Threatens Cabo Delgado LNG Investment',
    description: 'Coordinated village raids in Macomia district signal a resurgence of ISIS-Mozambique capability despite international military deployments, prompting TotalEnergies to maintain force majeure on its $20B LNG project.',
    bulletPoints: [
      'Approximately 50 ISIS-Mozambique fighters conducted coordinated dawn raids on three villages in Macomia district, killing 9 civilians and abducting an unknown number of women and children.',
      'SADC forces took 4 hours to respond to the attacks, highlighting the challenge of securing Cabo Delgado\'s vast rural areas with limited forces.',
      'TotalEnergies announced continued force majeure on the Mozambique LNG project, citing the Macomia raids as evidence that security conditions remain inadequate.',
      'Mozambique is estimated to lose approximately $2 billion per year in potential revenue from the suspended LNG project, with significant implications for national development.'
    ],
    documentIds: ['doc-008', 'doc-009', 'doc-018', 'doc-028'],
    tagIds: ['tag-002', 'tag-region-south'],
    startDate: '2026-02-12',
    endDate: null,
    volumeOverTime: [
      { date: '2026-02-12', volume: 165 },
      { date: '2026-02-15', volume: 245 },
      { date: '2026-02-18', volume: 180 },
      { date: '2026-02-22', volume: 110 }
    ],
    createdAt: '2026-02-12T16:00:00Z'
  },
  {
    id: 'topic-006',
    headline: 'VEO Financing Networks Mapped by UN and US Intelligence',
    description: 'A UN Panel of Experts report and coordinated US sanctions actions have exposed the financing networks supporting Sahel and East Africa VEOs, identifying key facilitators and revenue streams.',
    bulletPoints: [
      'UN Panel documented JNIM generating $10-20M annually from artisanal gold mining, $5-8M from kidnapping ransoms, and $2-5M from trade taxation in Burkina Faso and Mali.',
      'OFAC designated three Al-Shabaab financial facilitators managing hawala and charcoal export networks transferring approximately $5M annually.',
      'Key JNIM financier Sidan ag Hitta identified as managing fund distribution from Gulf donors through hawala corridors running through East Africa.',
      'Despite sanctions and designation actions, the decentralized nature of hawala networks makes comprehensive disruption extremely difficult.'
    ],
    documentIds: ['doc-010', 'doc-011', 'doc-019', 'doc-020', 'doc-029'],
    tagIds: ['tag-001', 'tag-region-sahel'],
    startDate: '2026-02-18',
    endDate: null,
    volumeOverTime: [
      { date: '2026-02-18', volume: 135 },
      { date: '2026-02-20', volume: 185 },
      { date: '2026-02-22', volume: 150 },
      { date: '2026-02-25', volume: 95 }
    ],
    createdAt: '2026-02-18T09:00:00Z'
  },
  {
    id: 'topic-007',
    headline: 'Al-Shabaab Intensifies Social Media Recruitment Targeting East African Youth',
    description: 'Al-Shabaab has launched a coordinated social media recruitment campaign targeting Kenyan and diaspora youth through professionally produced Telegram content, managed by an identified recruitment coordinator.',
    bulletPoints: [
      'Al-Shabaab\'s media arm released a professionally produced Swahili-language recruitment video on Telegram featuring testimonials from Kenyan fighters.',
      'SIGINT analysis links the distribution network to Abu Zinira (Abdallah Osman), managing 8-12 recruiters in Nairobi\'s Eastleigh district and refugee camps.',
      'Recruitment messaging exploits economic marginalization, unemployment, and police brutality — the same grievances driving urban gang recruitment.',
      'An estimated 30-50 individuals have been processed through the Kenya-to-Somalia recruitment pipeline in the past 6 months, transiting through Dadaab refugee camp.'
    ],
    documentIds: ['doc-012', 'doc-020', 'doc-030'],
    tagIds: ['tag-002', 'tag-region-east'],
    startDate: '2026-02-22',
    endDate: null,
    volumeOverTime: [
      { date: '2026-02-22', volume: 95 },
      { date: '2026-02-24', volume: 145 },
      { date: '2026-02-26', volume: 110 }
    ],
    createdAt: '2026-02-22T16:00:00Z'
  }
];
