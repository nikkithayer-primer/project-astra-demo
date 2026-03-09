/**
 * AFRICOM Threat Analysis dataset
 * Assembles all entity files and exports the complete mockData object
 */

import { publishers, publisherCategories } from './publishers.js';
import { repositories } from './repositories.js';
import { users } from './users.js';
import { missions } from './missions.js';
import { narratives } from './narratives.js';
import { themes } from './themes.js';
import { persons, organizations } from './entities.js';
import { locations } from './locations.js';
import { events } from './events.js';
import { documents } from './documents.js';
import { topics } from './topics.js';
import { monitors, alerts } from './monitors.js';
import { searchFilters } from './searchFilters.js';
import { relationshipTypes, relationships } from './relationshipTypes.js';
import { tagGroups } from './tagGroups.js';
import { tags } from './tags.js';
import {
  animals, currencies, civilianVehicles, communicationDevices,
  diseases, dateTimeMentions, facilities, fungi, microbes,
  miscellaneous, militaryVehicles, namedEvents, plants,
  roles, substances, unidentifiedEquipment, unnamedEvents, weapons
} from './extractedEntities.js';

export const workspaces = [
  {
    id: 'workspace-001',
    name: 'East Africa Threat Picture',
    query: 'Al-Shabaab Somalia Kenya attack',
    description: 'Tracking Al-Shabaab operational activity, attack patterns, and recruitment networks across East Africa',
    documentIds: ['doc-001', 'doc-003', 'doc-005', 'doc-012', 'doc-015', 'doc-020', 'doc-025', 'doc-030'],
    filters: {},
    status: 'active',
    createdAt: '2026-01-10T10:00:00Z',
    updatedAt: '2026-02-25T09:00:00Z'
  },
  {
    id: 'workspace-002',
    name: 'Sahel Security Deterioration',
    query: 'JNIM ISCGS Mali Burkina Faso Wagner',
    description: 'Monitoring JNIM expansion, Russian PMC impact, and evolving security dynamics in the Sahel',
    documentIds: ['doc-004', 'doc-007', 'doc-017', 'doc-022', 'doc-023', 'doc-024', 'doc-027'],
    filters: {},
    status: 'active',
    createdAt: '2026-01-15T11:00:00Z',
    updatedAt: '2026-02-20T15:00:00Z'
  },
  {
    id: 'workspace-003',
    name: 'VEO Financing Networks',
    query: 'financing hawala gold mining ransom OFAC',
    description: 'Tracking terror financing mechanisms across the AFRICOM AOR including mining, ransoms, and hawala transfers',
    documentIds: ['doc-010', 'doc-011', 'doc-019', 'doc-020', 'doc-029'],
    filters: {},
    status: 'active',
    createdAt: '2026-02-01T08:00:00Z',
    updatedAt: '2026-02-22T12:00:00Z'
  }
];

export const projects = [
  {
    id: 'project-001',
    name: 'Congressional Testimony Prep – March 2026',
    description: 'Documents supporting AFRICOM Commander\'s testimony before SASC on Africa CT posture',
    documentIds: ['doc-001', 'doc-002', 'doc-004', 'doc-005', 'doc-008', 'doc-013', 'doc-014', 'doc-021', 'doc-024'],
    status: 'active',
    createdAt: '2026-02-15T09:00:00Z',
    updatedAt: '2026-02-25T14:30:00Z'
  },
  {
    id: 'project-002',
    name: 'JNIM Financing Assessment',
    description: 'Compiled intelligence on JNIM revenue streams for interagency CT finance working group',
    documentIds: ['doc-010', 'doc-011', 'doc-019', 'doc-029'],
    status: 'active',
    createdAt: '2026-02-18T08:00:00Z',
    updatedAt: '2026-02-22T11:00:00Z'
  },
  {
    id: 'project-003',
    name: 'Cabo Delgado LNG Threat Assessment',
    description: 'Background research on ISIS-Mozambique threat to LNG infrastructure for policy briefing',
    documentIds: ['doc-008', 'doc-009', 'doc-018', 'doc-028'],
    status: 'active',
    createdAt: '2026-02-12T10:00:00Z',
    updatedAt: '2026-02-18T16:00:00Z'
  },
  {
    id: 'project-004',
    name: 'Unsorted',
    description: 'Incoming documents pending review and classification',
    documentIds: ['doc-006', 'doc-016', 'doc-026'],
    status: 'active',
    createdAt: '2026-02-01T12:00:00Z',
    updatedAt: '2026-02-24T09:00:00Z'
  }
];

export const visualizations = [
  {
    id: 'viz-001',
    type: 'network_graph',
    title: 'VEO Command & Financing Network',
    parentType: 'workspace',
    parentId: 'workspace-003',
    sortOrder: 0,
    dataConfig: { entityTypes: ['person', 'organization'] },
    displayConfig: { edgeType: 'relationship', showLabels: true },
    createdAt: '2026-02-05T10:00:00Z',
    updatedAt: '2026-02-05T10:00:00Z'
  },
  {
    id: 'viz-002',
    type: 'map',
    title: 'AFRICOM AOR Threat Map',
    parentType: 'workspace',
    parentId: 'workspace-001',
    sortOrder: 0,
    dataConfig: { entityTypes: ['location', 'event'] },
    displayConfig: { clusterMarkers: true },
    createdAt: '2026-01-15T11:00:00Z',
    updatedAt: '2026-01-15T11:00:00Z'
  },
  {
    id: 'viz-003',
    type: 'timeline',
    title: 'Attack Timeline',
    parentType: 'project',
    parentId: 'project-001',
    sortOrder: 0,
    dataConfig: { entityTypes: ['event'] },
    displayConfig: { showVolume: true },
    createdAt: '2026-02-15T09:00:00Z',
    updatedAt: '2026-02-15T09:00:00Z'
  }
];

export const datasetId = 'africom-terror';
export const datasetName = 'AFRICOM Threat Analysis';

export const defaultSettings = {
  situationalPictureEnabled: true,
  defaultStartPage: 'situational-picture',
  defaultViewTab: 'dashboard',
  showClassification: true
};

export const mockData = {
  publishers,
  publisherCategories,
  repositories,
  users,
  missions,
  narratives,
  themes,
  locations,
  events,
  persons,
  organizations,
  documents,
  topics,
  monitors,
  alerts,
  workspaces,
  projects,
  visualizations,
  searchFilters,
  relationshipTypes,
  relationships,
  tagGroups,
  tags,
  animals,
  currencies,
  civilianVehicles,
  communicationDevices,
  diseases,
  dateTimeMentions,
  facilities,
  fungi,
  microbes,
  miscellaneous,
  militaryVehicles,
  namedEvents,
  plants,
  roles,
  substances,
  unidentifiedEquipment,
  unnamedEvents,
  weapons
};

export default mockData;
