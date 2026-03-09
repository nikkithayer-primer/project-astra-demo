/**
 * Tags for the AFRICOM Threat Analysis dataset
 */

export const tags = [
  // Status tags (exclusive group)
  {
    id: 'tag-001',
    groupId: 'tag-group-status',
    name: 'Needs Review',
    description: 'Item requires initial review and assessment by an analyst',
    color: '#f59e0b',
    sortOrder: 0
  },
  {
    id: 'tag-002',
    groupId: 'tag-group-status',
    name: 'In Review',
    description: 'Item is currently being reviewed and analyzed by the team',
    color: '#3b82f6',
    sortOrder: 1
  },
  {
    id: 'tag-003',
    groupId: 'tag-group-status',
    name: 'Completed',
    description: 'Review and analysis has been completed for this item',
    color: '#8b5cf6',
    sortOrder: 2
  },
  // Threat level tags (exclusive group)
  {
    id: 'tag-004',
    groupId: 'tag-group-threat',
    name: 'Critical',
    description: 'Immediate threat requiring urgent attention and command notification',
    color: '#dc2626',
    sortOrder: 0
  },
  {
    id: 'tag-005',
    groupId: 'tag-group-threat',
    name: 'High',
    description: 'Significant threat requiring priority analysis and monitoring',
    color: '#f97316',
    sortOrder: 1
  },
  {
    id: 'tag-006',
    groupId: 'tag-group-threat',
    name: 'Moderate',
    description: 'Notable activity requiring routine monitoring',
    color: '#eab308',
    sortOrder: 2
  },
  // Region tags (non-exclusive)
  {
    id: 'tag-region-east',
    groupId: 'tag-group-region',
    name: 'East Africa',
    description: 'Somalia, Kenya, Ethiopia, Djibouti, and the Horn of Africa',
    color: '#3b82f6',
    sortOrder: 0
  },
  {
    id: 'tag-region-west',
    groupId: 'tag-group-region',
    name: 'West Africa',
    description: 'Nigeria, Niger, Chad, Cameroon, and the Lake Chad Basin',
    color: '#10b981',
    sortOrder: 1
  },
  {
    id: 'tag-region-sahel',
    groupId: 'tag-group-region',
    name: 'Sahel',
    description: 'Mali, Burkina Faso, Niger, and the tri-border Liptako-Gourma area',
    color: '#f59e0b',
    sortOrder: 2
  },
  {
    id: 'tag-region-south',
    groupId: 'tag-group-region',
    name: 'Southern Africa',
    description: 'Mozambique, DRC, and southern African states',
    color: '#8b5cf6',
    sortOrder: 3
  },
  // Mission tags (exclusive group)
  {
    id: 'tag-mission-001',
    groupId: 'tag-group-mission',
    name: 'Assess East Africa VEO threat posture',
    description: 'Track Al-Shabaab and affiliated VEO activities across Somalia, Kenya, and the Horn',
    color: '#4E79A7',
    sortOrder: 0
  },
  {
    id: 'tag-mission-002',
    groupId: 'tag-group-mission',
    name: 'Map West Africa / Sahel terror financing',
    description: 'Identify and track financing networks supporting JNIM, ISWAP, and Boko Haram',
    color: '#E15759',
    sortOrder: 1
  },
  {
    id: 'tag-mission-003',
    groupId: 'tag-group-mission',
    name: 'Monitor Southern Africa insurgency expansion',
    description: 'Track ISIS-Mozambique and assess threat to regional infrastructure',
    color: '#59A14F',
    sortOrder: 2
  }
];
