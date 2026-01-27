/**
 * China Semiconductor dataset
 * Assembles all entity files and exports the complete mockData object
 */

import { publishers, publisherCategories } from './publishers.js';
import { repositories } from './repositories.js';
import { users } from './users.js';
import { missions } from './missions.js';
import { narratives } from './narratives.js';
import { themes } from './themes.js';
import { factions, factionOverlaps } from './factions.js';
import { persons, organizations } from './entities.js';
import { locations } from './locations.js';
import { events } from './events.js';
import { documents } from './documents.js';
import { monitors, alerts } from './monitors.js';
import { topics } from './topics.js';

// Workspaces - saved search results with document collections
export const workspaces = [
  {
    id: 'workspace-001',
    name: 'SMIC Export Controls',
    query: 'SMIC export controls sanctions',
    description: 'Tracking coverage of export restrictions on Chinese semiconductor manufacturers',
    documentIds: ['doc-001', 'doc-002', 'doc-003', 'doc-004'],
    filters: {},
    status: 'active',
    createdAt: '2026-01-10T08:00:00Z',
    updatedAt: '2026-01-25T16:00:00Z'
  },
  {
    id: 'workspace-002',
    name: 'Chip Technology Race',
    query: 'chip technology advancement domestic production',
    description: 'Analysis of China domestic chip capabilities vs foreign technology',
    documentIds: ['doc-005', 'doc-006', 'doc-007'],
    filters: {},
    status: 'active',
    createdAt: '2026-01-12T10:00:00Z',
    updatedAt: '2026-01-24T14:30:00Z'
  },
  {
    id: 'workspace-003',
    name: 'Taiwan Tensions',
    query: 'Taiwan TSMC supply chain risk',
    description: 'Archived research on Taiwan semiconductor supply chain risks',
    documentIds: ['doc-008', 'doc-009'],
    filters: {},
    status: 'archived',
    createdAt: '2026-01-05T09:00:00Z',
    updatedAt: '2026-01-15T11:00:00Z'
  }
];

export const datasetId = 'china-semiconductor';
export const datasetName = 'China Semiconductor';

export const mockData = {
  publishers,
  publisherCategories,
  repositories,
  users,
  missions,
  narratives,
  themes,
  factions,
  factionOverlaps,
  locations,
  events,
  persons,
  organizations,
  documents,
  monitors,
  alerts,
  topics,
  workspaces
};

/**
 * Initialize the data store with mock data
 */
export function initializeMockData(dataStore) {
  dataStore.data = { ...mockData };
  dataStore.save();
}

export default mockData;
