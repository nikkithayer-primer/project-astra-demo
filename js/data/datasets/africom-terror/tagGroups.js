/**
 * Tag Groups for the AFRICOM Threat Analysis dataset
 */

export const tagGroups = [
  {
    id: 'tag-group-status',
    name: 'Status',
    description: 'Workflow status for tracking review progress',
    exclusive: true,
    color: '#3b82f6',
    sortOrder: 0
  },
  {
    id: 'tag-group-threat',
    name: 'Threat Level',
    description: 'Assessed threat level for prioritization',
    exclusive: true,
    color: '#ef4444',
    sortOrder: 1
  },
  {
    id: 'tag-group-region',
    name: 'Region',
    description: 'AFRICOM regional focus area',
    exclusive: false,
    color: '#10b981',
    sortOrder: 2
  },
  {
    id: 'tag-group-mission',
    name: 'Mission',
    description: 'Standing intelligence requirements',
    exclusive: true,
    color: '#8b5cf6',
    sortOrder: 3
  }
];
