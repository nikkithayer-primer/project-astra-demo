/**
 * China Semiconductor dataset
 * Assembles all entity files and exports the complete mockData object
 */

import { sources, sourceCategories } from './sources.js';
import { users } from './users.js';
import { missions } from './missions.js';
import { narratives } from './narratives.js';
import { subNarratives } from './subNarratives.js';
import { factions, factionOverlaps } from './factions.js';
import { persons, organizations } from './entities.js';
import { locations } from './locations.js';
import { events } from './events.js';
import { documents } from './documents.js';
import { monitors, alerts } from './monitors.js';

export const datasetId = 'china-semiconductor';
export const datasetName = 'China Semiconductor';

export const mockData = {
  sources,
  sourceCategories,
  users,
  missions,
  narratives,
  subNarratives,
  factions,
  factionOverlaps,
  locations,
  events,
  persons,
  organizations,
  documents,
  monitors,
  alerts
};

/**
 * Initialize the data store with mock data
 */
export function initializeMockData(dataStore) {
  dataStore.data = { ...mockData };
  dataStore.save();
}

export default mockData;
