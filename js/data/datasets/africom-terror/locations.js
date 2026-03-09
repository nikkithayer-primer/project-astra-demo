/**
 * Locations for AFRICOM Threat Analysis dataset
 */

export const locations = [
  // --- East Africa / Horn ---
  {
    id: 'loc-001',
    name: 'Mogadishu, Somalia',
    description: 'Capital of Somalia and primary target of Al-Shabaab complex attacks including VBIEDs, mortar fire, and siege operations. Seat of the Federal Government and ATMIS headquarters. The October 2022 twin bombing killed over 100 people, making it the deadliest attack in the city\'s recent history.',
    coordinates: { lat: 2.0469, lng: 45.3182 },
    type: 'city',
    tagIds: ['tag-004', 'tag-region-east'],
    documentIds: ['doc-001', 'doc-003', 'doc-015', 'doc-025']
  },
  {
    id: 'loc-002',
    name: 'Nairobi, Kenya',
    description: 'Kenya\'s capital and a key node in Al-Shabaab recruitment networks targeting diaspora communities. The Eastleigh neighborhood hosts a large Somali population and has been identified as a recruitment corridor. Also the site of the 2019 DusitD2 hotel attack and the 2013 Westgate mall siege.',
    coordinates: { lat: -1.2921, lng: 36.8219 },
    type: 'city',
    tagIds: ['tag-005', 'tag-region-east'],
    documentIds: ['doc-012', 'doc-020', 'doc-030']
  },
  {
    id: 'loc-003',
    name: 'Lower Shabelle, Somalia',
    description: 'Strategically vital region south of Mogadishu that serves as Al-Shabaab\'s primary operational staging ground. ATMIS Sector 1 conducts ongoing operations here. The region\'s agricultural output is heavily taxed by Al-Shabaab to fund operations.',
    coordinates: { lat: 1.8764, lng: 44.2480 },
    type: 'region',
    tagIds: ['tag-004', 'tag-region-east'],
    documentIds: ['doc-001', 'doc-003', 'doc-005', 'doc-015']
  },
  {
    id: 'loc-004',
    name: 'Dadaab Refugee Complex, Kenya',
    description: 'One of the world\'s largest refugee camp complexes in northeastern Kenya, hosting over 200,000 Somali refugees. Intelligence reporting indicates Al-Shabaab maintains recruitment networks within the camps, exploiting grievances among displaced populations.',
    coordinates: { lat: 0.0619, lng: 40.3127 },
    type: 'facility',
    tagIds: ['tag-005', 'tag-region-east'],
    documentIds: ['doc-012', 'doc-030']
  },
  // --- West Africa / Lake Chad ---
  {
    id: 'loc-005',
    name: 'Maiduguri, Nigeria',
    description: 'Capital of Borno State and the epicenter of the Boko Haram insurgency. Heavily fortified government garrison city that has withstood repeated ISWAP and Boko Haram assaults. Hosts MNJTF coordination headquarters and major IDP camps.',
    coordinates: { lat: 11.8311, lng: 13.1510 },
    type: 'city',
    tagIds: ['tag-004', 'tag-region-west'],
    documentIds: ['doc-002', 'doc-006', 'doc-016', 'doc-026']
  },
  {
    id: 'loc-006',
    name: 'Lake Chad Basin',
    description: 'Transnational region spanning Nigeria, Niger, Chad, and Cameroon. ISWAP controls numerous islands and fishing communities, using the lake\'s waterways for logistics and taxation of fishing trade. The shrinking lake has exacerbated resource competition that VEOs exploit for recruitment.',
    coordinates: { lat: 13.0000, lng: 14.0000 },
    type: 'region',
    tagIds: ['tag-004', 'tag-region-west'],
    documentIds: ['doc-002', 'doc-006', 'doc-016']
  },
  {
    id: 'loc-007',
    name: 'Gao, Mali',
    description: 'Northern Mali city and former JNIM operational zone. Previously hosted French Operation Barkhane forces and MINUSMA peacekeepers, both now withdrawn. JNIM and ISCGS contest control of surrounding areas, with FAMa and Wagner conducting clearing operations.',
    coordinates: { lat: 16.2666, lng: -0.0400 },
    type: 'city',
    tagIds: ['tag-004', 'tag-region-sahel'],
    documentIds: ['doc-004', 'doc-007', 'doc-017', 'doc-022']
  },
  {
    id: 'loc-008',
    name: 'Liptako-Gourma (Tri-Border Area)',
    description: 'The tri-border zone where Mali, Burkina Faso, and Niger meet — the most active jihadist conflict zone in the Sahel. Both JNIM and ISCGS operate here, conducting ambushes, IED attacks, and raids on military posts. Artisanal gold mining sites in this zone generate significant revenue for JNIM.',
    coordinates: { lat: 14.5000, lng: 0.5000 },
    type: 'region',
    tagIds: ['tag-004', 'tag-region-sahel'],
    documentIds: ['doc-004', 'doc-010', 'doc-019', 'doc-027', 'doc-029']
  },
  {
    id: 'loc-009',
    name: 'Ouagadougou, Burkina Faso',
    description: 'Capital of Burkina Faso, which has experienced a dramatic deterioration in security. JNIM attacks have pushed within 100km of the capital. The junta government under Traoré operates from here while large portions of the country remain under insurgent control.',
    coordinates: { lat: 12.3714, lng: -1.5197 },
    type: 'city',
    tagIds: ['tag-004', 'tag-region-sahel'],
    documentIds: ['doc-004', 'doc-022', 'doc-023']
  },
  // --- Southern Africa ---
  {
    id: 'loc-010',
    name: 'Cabo Delgado Province, Mozambique',
    description: 'Northern Mozambique province and the epicenter of the ISIS-Mozambique insurgency since 2017. Rich in natural gas reserves with TotalEnergies\' $20B LNG project suspended due to security concerns. SADC and Rwandan forces deployed to stabilize the region.',
    coordinates: { lat: -12.3335, lng: 40.5586 },
    type: 'region',
    tagIds: ['tag-004', 'tag-region-south'],
    documentIds: ['doc-008', 'doc-009', 'doc-018', 'doc-028']
  },
  {
    id: 'loc-011',
    name: 'Palma, Mozambique',
    description: 'Coastal town in Cabo Delgado near the Afungi LNG site. Scene of a devastating ISIS-Mozambique attack in March 2021 that killed dozens and triggered TotalEnergies\' force majeure declaration. A key indicator location for assessing insurgent capability and intent.',
    coordinates: { lat: -10.7754, lng: 40.4575 },
    type: 'city',
    tagIds: ['tag-004', 'tag-region-south'],
    documentIds: ['doc-009', 'doc-018']
  },
  // --- US / Coalition Bases ---
  {
    id: 'loc-012',
    name: 'Camp Lemonnier, Djibouti',
    description: 'AFRICOM\'s primary forward operating base in Africa, hosting approximately 4,500 US personnel. Serves as the hub for counterterrorism operations in East Africa and the Arabian Peninsula. Co-located with Djibouti–Ambouli International Airport.',
    coordinates: { lat: 11.5469, lng: 43.1562 },
    type: 'facility',
    tagIds: ['tag-006'],
    documentIds: ['doc-013', 'doc-014', 'doc-021']
  },
  {
    id: 'loc-013',
    name: 'Baledogle Airfield, Somalia',
    description: 'Somali military airfield that hosts US military advisors and serves as a base for drone operations and training of Somali special forces (Danab). Key facility for US strike operations against Al-Shabaab high-value targets.',
    coordinates: { lat: 2.3550, lng: 45.2050 },
    type: 'facility',
    tagIds: ['tag-005', 'tag-region-east'],
    documentIds: ['doc-005', 'doc-013']
  },
  {
    id: 'loc-014',
    name: 'Niamey, Niger',
    description: 'Capital of Niger and formerly a key hub for US drone operations in the Sahel. Following the July 2023 coup, Niger\'s junta demanded US forces withdraw from Air Base 201, significantly constraining US ISR capability in the region.',
    coordinates: { lat: 13.5137, lng: 2.1098 },
    type: 'city',
    tagIds: ['tag-004', 'tag-region-sahel'],
    documentIds: ['doc-022', 'doc-023', 'doc-024']
  },
  {
    id: 'loc-015',
    name: 'Sambisa Forest, Nigeria',
    description: 'Dense forest reserve in Borno State, Nigeria, that has served as Boko Haram\'s primary stronghold since 2013. Nigerian military operations have repeatedly targeted the forest, but the terrain makes permanent clearance extremely difficult.',
    coordinates: { lat: 11.0000, lng: 13.5000 },
    type: 'region',
    tagIds: ['tag-005', 'tag-region-west'],
    documentIds: ['doc-006', 'doc-026']
  }
];
