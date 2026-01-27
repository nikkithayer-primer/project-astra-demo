/**
 * Walmart Brand dataset
 * Assembles all entity files and exports the complete mockData object
 */

import { publishers, publisherCategories } from './publishers.js';
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
    name: 'Self-Checkout Customer Experience',
    query: 'self checkout detention customer',
    description: 'Tracking viral posts and news about self-checkout issues',
    documentIds: ['doc-001', 'doc-002', 'doc-003', 'doc-004'],
    filters: {},
    status: 'active',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-25T14:30:00Z'
  },
  {
    id: 'workspace-002',
    name: 'Legal & Lawsuit Coverage',
    query: 'lawsuit class action legal',
    description: 'Monitoring legal developments and class action news',
    documentIds: ['doc-003', 'doc-010'],
    filters: {},
    status: 'active',
    createdAt: '2026-01-18T09:00:00Z',
    updatedAt: '2026-01-24T11:00:00Z'
  },
  {
    id: 'workspace-003',
    name: 'Competitor Analysis',
    query: 'target costco amazon grocery',
    description: 'Archived research on competitor mentions',
    documentIds: ['doc-005', 'doc-006'],
    filters: {},
    status: 'archived',
    createdAt: '2026-01-10T08:00:00Z',
    updatedAt: '2026-01-12T16:00:00Z'
  }
];

export const datasetId = 'walmart-brand';
export const datasetName = 'Walmart Brand';

export const mockData = {
  publishers,
  publisherCategories,
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
