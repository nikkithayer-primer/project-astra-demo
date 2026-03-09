/**
 * Repositories for document storage
 * Consistent across all datasets
 */

export const repositories = [
  {
    id: 'repo-news',
    code: 'NEWS',
    name: 'News',
    description: 'News articles from international and regional media sources',
    color: '#4E79A7'
  },
  {
    id: 'repo-osint',
    code: 'OSINT',
    name: 'OSINT',
    description: 'Social media posts, propaganda channels, and open-source intelligence',
    color: '#E15759'
  },
  {
    id: 'repo-edl',
    code: 'EDL',
    name: 'EDL',
    description: 'Classified intelligence reports, SITREPs, and analytical products',
    color: '#59A14F'
  },
  {
    id: 'repo-struct',
    code: 'STRUCT',
    name: 'Structured Data',
    description: 'ACLED event data, OFAC designations, UN sanctions lists, FATF reports',
    color: '#8B5CF6'
  }
];
