/**
 * American Politics dataset
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
import { topics } from './topics.js';
import { monitors, alerts } from './monitors.js';

// Workspaces - saved search results with document collections
export const workspaces = [
  {
    id: 'workspace-001',
    name: 'Election Integrity 2024',
    query: 'election fraud voting security',
    description: 'Tracking narratives around election security and voter fraud claims',
    documentIds: ['doc-001', 'doc-002', 'doc-003', 'doc-004', 'doc-005'],
    filters: {},
    status: 'active',
    createdAt: '2026-01-08T10:00:00Z',
    updatedAt: '2026-01-26T09:00:00Z'
  },
  {
    id: 'workspace-002',
    name: 'Immigration Policy Debate',
    query: 'immigration border policy reform',
    description: 'Coverage of immigration policy discussions and border security',
    documentIds: ['doc-006', 'doc-007', 'doc-008'],
    filters: {},
    status: 'active',
    createdAt: '2026-01-14T11:00:00Z',
    updatedAt: '2026-01-23T15:00:00Z'
  },
  {
    id: 'workspace-003',
    name: 'Economic Policy Analysis',
    query: 'economy inflation jobs policy',
    description: 'Archived research on economic narratives',
    documentIds: ['doc-009', 'doc-010'],
    filters: {},
    status: 'archived',
    createdAt: '2026-01-02T08:00:00Z',
    updatedAt: '2026-01-10T12:00:00Z'
  }
];

export const datasetId = 'american-politics';
export const datasetName = 'American Politics';

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
  topics,
  monitors,
  alerts,
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
