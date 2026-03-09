/**
 * Extracted entities for the AFRICOM Threat Analysis dataset.
 *
 * Covers 18 entity types from EntityRegistry. This dataset has rich coverage
 * of weapons, military vehicles, communication devices, currencies, and facilities.
 */

// ---------------------------------------------------------------------------
// Empty – not relevant to this dataset
// ---------------------------------------------------------------------------
const animals = [];
const fungi = [];
const microbes = [];
const plants = [];
const diseases = [];

// ---------------------------------------------------------------------------
// Weapons
// ---------------------------------------------------------------------------
const weapons = [
  {
    id: 'weapon-001',
    name: 'Vehicle-Borne IED (VBIED)',
    description: 'Al-Shabaab\'s primary weapon for complex attacks. The Afgooye corridor VBIED used approximately 200kg of homemade explosives packed into a Toyota Land Cruiser. VBIEDs are also the opening phase of hotel siege attacks in Mogadishu.',
    type: 'explosive',
    documentIds: ['doc-001', 'doc-003', 'doc-015'],
    tagIds: ['tag-004', 'tag-region-east'],
  },
  {
    id: 'weapon-002',
    name: 'AK-47 / AK-variant Rifle',
    description: 'Standard infantry weapon for all VEOs in the AFRICOM AOR. Widely available through illicit arms markets, captured military stockpiles, and cross-border trafficking. Featured in ISWAP propaganda video from Kirta Wulgo.',
    type: 'firearm',
    documentIds: ['doc-001', 'doc-002', 'doc-004', 'doc-006', 'doc-008', 'doc-016'],
    tagIds: ['tag-005'],
  },
  {
    id: 'weapon-003',
    name: 'RPG-7 Launcher',
    description: 'Soviet-era rocket-propelled grenade launcher used extensively by ISWAP, JNIM, and Al-Shabaab against military vehicles and positions. ISWAP captured additional RPG-7s during the Kirta Wulgo assault.',
    type: 'heavy_weapon',
    documentIds: ['doc-002', 'doc-004', 'doc-006', 'doc-016'],
    tagIds: ['tag-005'],
  },
  {
    id: 'weapon-004',
    name: 'PKM Machine Gun',
    description: 'Belt-fed general-purpose machine gun captured by ISWAP from the MNJTF position at Kirta Wulgo. Commonly mounted on technical vehicles by all Sahelian and East African VEOs.',
    type: 'firearm',
    documentIds: ['doc-002', 'doc-006', 'doc-016'],
    tagIds: ['tag-005', 'tag-region-west'],
  },
  {
    id: 'weapon-005',
    name: 'Command-Detonated IED',
    description: 'Primary ambush weapon employed by JNIM in the Sahel. The Liptako-Gourma convoy ambush used at least two command-detonated IEDs to initiate the engagement, destroying armored vehicles before small-arms fire.',
    type: 'explosive',
    documentIds: ['doc-004'],
    tagIds: ['tag-004', 'tag-region-sahel'],
  },
  {
    id: 'weapon-006',
    name: 'Mortar (60mm/82mm)',
    description: 'Used by Al-Shabaab for indirect fire attacks against AMISOM/ATMIS bases and SNA positions. Mortars provide stand-off capability that allows attacks without direct engagement.',
    type: 'heavy_weapon',
    documentIds: ['doc-001', 'doc-015'],
    tagIds: ['tag-005', 'tag-region-east'],
  }
];

// ---------------------------------------------------------------------------
// Military Vehicles
// ---------------------------------------------------------------------------
const militaryVehicles = [
  {
    id: 'milveh-001',
    name: 'Technical (Toyota Hilux w/ mounted weapon)',
    description: 'Ubiquitous insurgent platform across the Sahel and East Africa — civilian pickup trucks modified with mounted heavy weapons. Used by JNIM, ISWAP, and Al-Shabaab for mobile operations. Also used as VBIED platforms.',
    type: 'light_armored',
    documentIds: ['doc-001', 'doc-004', 'doc-008'],
    tagIds: ['tag-005'],
  },
  {
    id: 'milveh-002',
    name: 'BTR-80 APC',
    description: 'Russian-manufactured armored personnel carrier supplied to the Mali Armed Forces. Two BTR-80s were destroyed in the JNIM ambush on the Gao-Ménaka convoy, demonstrating JNIM\'s anti-armor capability.',
    type: 'armored_vehicle',
    documentIds: ['doc-004', 'doc-022'],
    tagIds: ['tag-004', 'tag-region-sahel'],
  },
  {
    id: 'milveh-003',
    name: 'T-72 Main Battle Tank',
    description: 'Russian main battle tank operated by Wagner/Africa Corps forces in Mali. Satellite imagery confirmed T-72s at the new Wagner encampment in the Ménaka region.',
    type: 'tank',
    documentIds: ['doc-007', 'doc-022'],
    tagIds: ['tag-005', 'tag-region-sahel'],
  },
  {
    id: 'milveh-004',
    name: 'MQ-9 Reaper (Drone)',
    description: 'US unmanned aerial vehicle used for ISR and precision strike operations against Al-Shabaab in Somalia. Previously operated from Air Base 201 in Niger for Sahel coverage; that capability was lost with the US withdrawal.',
    type: 'uav',
    documentIds: ['doc-005', 'doc-013', 'doc-024'],
    tagIds: ['tag-005'],
  },
  {
    id: 'milveh-005',
    name: 'Assault Boats / Motorized Canoes',
    description: 'Watercraft used by ISWAP for amphibious operations on Lake Chad. The Kirta Wulgo assault employed a mix of motorized boats and traditional canoes to transport approximately 200 fighters.',
    type: 'watercraft',
    documentIds: ['doc-002', 'doc-006'],
    tagIds: ['tag-005', 'tag-region-west'],
  }
];

// ---------------------------------------------------------------------------
// Civilian Vehicles
// ---------------------------------------------------------------------------
const civilianVehicles = [
  {
    id: 'civveh-001',
    name: 'Toyota Land Cruiser',
    description: 'Used as both a transport vehicle and VBIED platform by Al-Shabaab. The Afgooye checkpoint VBIED was assessed to be a Toyota Land Cruiser laden with explosives.',
    type: 'suv',
    documentIds: ['doc-001'],
    tagIds: ['tag-005', 'tag-region-east'],
  },
  {
    id: 'civveh-002',
    name: 'Motorcycles',
    description: 'Primary mobility platform for JNIM and ISCGS fighters in the Sahel. Used for reconnaissance, hit-and-run attacks, and rapid movement across terrain impassable to larger vehicles.',
    type: 'motorcycle',
    documentIds: ['doc-004', 'doc-017'],
    tagIds: ['tag-005', 'tag-region-sahel'],
  }
];

// ---------------------------------------------------------------------------
// Communication Devices
// ---------------------------------------------------------------------------
const communicationDevices = [
  {
    id: 'comms-001',
    name: 'Thuraya Satellite Phone',
    description: 'Primary long-range communication device for VEO leadership in remote areas of the Sahel and southern Somalia. SIGINT collection against Thuraya networks provides key intelligence on VEO command and control.',
    type: 'satellite_phone',
    documentIds: ['doc-001', 'doc-004', 'doc-017'],
    tagIds: ['tag-005'],
  },
  {
    id: 'comms-002',
    name: 'Baofeng Radio',
    description: 'Inexpensive Chinese-manufactured handheld radio used extensively by VEO tactical units for short-range communication. ISWAP captured military radios during the Kirta Wulgo assault that pose an OPSEC risk to MNJTF.',
    type: 'radio',
    documentIds: ['doc-002', 'doc-006'],
    tagIds: ['tag-005'],
  },
  {
    id: 'comms-003',
    name: 'Telegram (Encrypted Messaging)',
    description: 'Primary platform for VEO propaganda distribution and recruitment. Al-Shabaab and ISWAP both maintain media channels on Telegram for claiming attacks and distributing recruitment content.',
    type: 'messaging_app',
    documentIds: ['doc-012', 'doc-016', 'doc-030'],
    tagIds: ['tag-004'],
  },
  {
    id: 'comms-004',
    name: 'WhatsApp (Encrypted Messaging)',
    description: 'Used by Al-Shabaab recruiters for person-to-person communication with potential recruits. WhatsApp groups serve as initial contact points before recruits are directed to in-person meetings.',
    type: 'messaging_app',
    documentIds: ['doc-012', 'doc-030'],
    tagIds: ['tag-005', 'tag-region-east'],
  }
];

// ---------------------------------------------------------------------------
// Currencies
// ---------------------------------------------------------------------------
const currencies = [
  {
    id: 'currency-001',
    name: 'United States Dollar',
    description: 'Primary denomination for terror financing transactions, ransom payments, and international hawala transfers. OFAC designations target USD-denominated assets of Al-Shabaab financial facilitators.',
    type: 'fiat',
    documentIds: ['doc-010', 'doc-011', 'doc-019', 'doc-020', 'doc-029'],
    tagIds: ['tag-005'],
  },
  {
    id: 'currency-002',
    name: 'CFA Franc',
    description: 'Currency used across francophone West Africa. JNIM taxes trade and markets in CFA Francs in areas under its control in Mali and Burkina Faso.',
    type: 'fiat',
    documentIds: ['doc-010', 'doc-019'],
    tagIds: ['tag-005', 'tag-region-sahel'],
  },
  {
    id: 'currency-003',
    name: 'Somali Shilling',
    description: 'Local currency used by Al-Shabaab for its extortion and taxation networks within Somalia. The group operates a parallel financial system in areas under its control.',
    type: 'fiat',
    documentIds: ['doc-011', 'doc-020'],
    tagIds: ['tag-005', 'tag-region-east'],
  },
  {
    id: 'currency-004',
    name: 'Gold (Artisanal)',
    description: 'JNIM\'s primary revenue commodity, extracted from artisanal mining sites in Burkina Faso. Gold is sold through intermediary traders in Bamako and Ouagadougou for USD or CFA Francs.',
    type: 'commodity',
    documentIds: ['doc-010', 'doc-019', 'doc-029'],
    tagIds: ['tag-004', 'tag-region-sahel'],
  }
];

// ---------------------------------------------------------------------------
// Facilities
// ---------------------------------------------------------------------------
const facilities = [
  {
    id: 'facility-001',
    name: 'Afgooye Corridor SNA Checkpoint',
    description: 'Somali National Army checkpoint on the main supply route between Afgooye and Mogadishu. Target of the Al-Shabaab VBIED attack on 28 JAN 2026.',
    type: 'military_checkpoint',
    documentIds: ['doc-001'],
    tagIds: ['tag-004', 'tag-region-east'],
  },
  {
    id: 'facility-002',
    name: 'Kirta Wulgo Island MNJTF Outpost',
    description: 'Multinational Joint Task Force military outpost on Kirta Wulgo island in the Nigerian sector of Lake Chad. Overrun by ISWAP fighters on 02 FEB 2026.',
    type: 'military_outpost',
    documentIds: ['doc-002', 'doc-006'],
    tagIds: ['tag-004', 'tag-region-west'],
  },
  {
    id: 'facility-003',
    name: 'Hamarweyne District Hotel, Mogadishu',
    description: 'Hotel in Mogadishu\'s Hamarweyne district targeted by Al-Shabaab in a complex VBIED-and-armed-assault siege on 10 FEB 2026. 22 killed.',
    type: 'civilian_infrastructure',
    documentIds: ['doc-003', 'doc-025'],
    tagIds: ['tag-004', 'tag-region-east'],
  },
  {
    id: 'facility-004',
    name: 'Afungi LNG Site, Cabo Delgado',
    description: 'TotalEnergies\' $20 billion Mozambique LNG project site. Under force majeure since April 2021 due to the ISIS-Mozambique insurgency. Located near Palma in northern Cabo Delgado.',
    type: 'industrial',
    documentIds: ['doc-009', 'doc-018'],
    tagIds: ['tag-005', 'tag-region-south'],
  },
  {
    id: 'facility-005',
    name: 'Air Base 201, Agadez, Niger',
    description: 'US drone operating base in Niger constructed at a cost of $110M. Primary MQ-9 Reaper ISR platform for the central Sahel. US forces forced to withdraw following the 2023 Niger coup.',
    type: 'military_airbase',
    documentIds: ['doc-023', 'doc-024'],
    tagIds: ['tag-004', 'tag-region-sahel'],
  }
];

// ---------------------------------------------------------------------------
// Substances
// ---------------------------------------------------------------------------
const substances = [
  {
    id: 'substance-001',
    name: 'Ammonium Nitrate',
    description: 'Primary precursor chemical for homemade explosives (HME) used in IEDs and VBIEDs by Al-Shabaab and JNIM. Sourced from agricultural fertilizer supplies diverted from commercial channels.',
    type: 'explosive_precursor',
    documentIds: ['doc-001', 'doc-004'],
    tagIds: ['tag-005'],
  },
  {
    id: 'substance-002',
    name: 'Mercury',
    description: 'Used in artisanal gold mining (amalgamation process) at JNIM-controlled mining sites in Burkina Faso. JNIM controls mercury supply chains as part of its mining revenue extraction.',
    type: 'industrial_chemical',
    documentIds: ['doc-010', 'doc-019'],
    tagIds: ['tag-005', 'tag-region-sahel'],
  }
];

// ---------------------------------------------------------------------------
// Roles
// ---------------------------------------------------------------------------
const roles = [
  {
    id: 'role-001',
    name: 'Emir',
    description: 'Supreme leader of a jihadist organization. Ahmed Diriye (Abu Ubaidah) serves as Emir of Al-Shabaab; Iyad ag Ghali as de facto Emir of JNIM.',
    documentIds: ['doc-001', 'doc-017'],
    tagIds: ['tag-005'],
  },
  {
    id: 'role-002',
    name: 'Wali (Governor)',
    description: 'ISIS-appointed provincial governor. ISCGS and ISIS-Mozambique leaders serve as walis under the broader ISIS organizational structure.',
    documentIds: ['doc-008', 'doc-017'],
    tagIds: ['tag-005'],
  },
  {
    id: 'role-003',
    name: 'Amniyat Chief',
    description: 'Head of Al-Shabaab\'s internal security and intelligence apparatus. Mahad Karate leads the Amniyat, responsible for complex attack planning, counterintelligence, and enforcement of organizational discipline.',
    documentIds: ['doc-003', 'doc-005'],
    tagIds: ['tag-004', 'tag-region-east'],
  },
  {
    id: 'role-004',
    name: 'Financier',
    description: 'Individual responsible for managing revenue generation, fund transfers, and financial logistics for VEO operations. Sidan ag Hitta serves as JNIM\'s primary financier.',
    documentIds: ['doc-010', 'doc-011', 'doc-019', 'doc-029'],
    tagIds: ['tag-004'],
  },
  {
    id: 'role-005',
    name: 'Qadi (Islamic Judge)',
    description: 'Judge operating JNIM\'s sharia-based dispute resolution courts in areas under the group\'s governance. Qadi courts have become a key element of JNIM\'s local legitimacy strategy.',
    documentIds: ['doc-017', 'doc-027'],
    tagIds: ['tag-005', 'tag-region-sahel'],
  }
];

// ---------------------------------------------------------------------------
// Named Events
// ---------------------------------------------------------------------------
const namedEvents = [
  {
    id: 'named-event-001',
    name: 'Operation Barkhane',
    description: 'French military counter-terrorism operation in the Sahel (2014-2022). Succeeded Operation Serval. France withdrew forces from Mali in 2022 under junta pressure, creating the security vacuum JNIM has exploited.',
    documentIds: ['doc-004', 'doc-007', 'doc-022', 'doc-024'],
    tagIds: ['tag-005', 'tag-region-sahel'],
  },
  {
    id: 'named-event-002',
    name: 'AMISOM/ATMIS Transition',
    description: 'The transition from AMISOM to ATMIS (African Union Transition Mission in Somalia) in April 2022, with a mandate to progressively hand over security responsibility to Somali forces. Drawdown timeline is a key concern for CT operations.',
    documentIds: ['doc-001', 'doc-013', 'doc-015'],
    tagIds: ['tag-005', 'tag-region-east'],
  },
  {
    id: 'named-event-003',
    name: 'Niger Coup (July 2023)',
    description: 'Military coup that overthrew Niger\'s elected government, leading to the expulsion of French and eventually US military forces. Resulted in loss of Air Base 201, AFRICOM\'s primary Sahel ISR platform.',
    documentIds: ['doc-022', 'doc-023', 'doc-024'],
    tagIds: ['tag-004', 'tag-region-sahel'],
  },
  {
    id: 'named-event-004',
    name: 'Palma Attack (March 2021)',
    description: 'ISIS-Mozambique assault on the town of Palma near TotalEnergies\' LNG site that killed dozens and triggered the force majeure declaration. A pivotal event that drew international military intervention.',
    documentIds: ['doc-009', 'doc-018'],
    tagIds: ['tag-004', 'tag-region-south'],
  }
];

// ---------------------------------------------------------------------------
// Miscellaneous
// ---------------------------------------------------------------------------
const miscellaneous = [
  {
    id: 'misc-001',
    name: 'Charcoal (Illicit Export)',
    description: 'Al-Shabaab generates significant revenue from the illicit charcoal trade through the port of Kismayo. Despite UN bans on Somali charcoal exports, the trade continues through intermediaries to Gulf states.',
    documentIds: ['doc-011', 'doc-020'],
    tagIds: ['tag-004', 'tag-region-east'],
  },
  {
    id: 'misc-002',
    name: 'Hawala Transfer System',
    description: 'Informal value transfer system used extensively for moving funds to VEOs. Operates through trusted intermediaries without formal banking records, making detection and disruption difficult.',
    documentIds: ['doc-010', 'doc-011', 'doc-020', 'doc-029'],
    tagIds: ['tag-004'],
  }
];

// ---------------------------------------------------------------------------
// Not applicable to this dataset
// ---------------------------------------------------------------------------
const unidentifiedEquipment = [];
const unnamedEvents = [];
const dateTimeMentions = [];

export {
  animals, currencies, civilianVehicles, communicationDevices,
  diseases, dateTimeMentions, facilities, fungi, microbes,
  miscellaneous, militaryVehicles, namedEvents, plants,
  roles, substances, unidentifiedEquipment, unnamedEvents, weapons
};
