/**
 * Publishers and publisher categories for AFRICOM Threat Analysis dataset
 */

export const publishers = [
  // Social Media
  { id: 'pub-telegram', name: 'Telegram', type: 'social', color: '#0088CC' },
  { id: 'pub-x', name: 'X', type: 'social', color: '#000000' },
  { id: 'pub-facebook', name: 'Facebook', type: 'social', color: '#1877F2' },
  { id: 'pub-whatsapp', name: 'WhatsApp', type: 'social', color: '#25D366' },

  // International News
  { id: 'pub-int-bbc-africa', name: 'BBC Africa', type: 'international_news', parent: 'international_news', color: '#BB1919' },
  { id: 'pub-int-aljazeera', name: 'Al Jazeera', type: 'international_news', parent: 'international_news', color: '#D2A44D' },
  { id: 'pub-int-reuters', name: 'Reuters Africa', type: 'international_news', parent: 'international_news', color: '#FF8000' },
  { id: 'pub-int-france24', name: 'France 24', type: 'international_news', parent: 'international_news', color: '#0055A4' },
  { id: 'pub-int-ap', name: 'AP News', type: 'international_news', parent: 'international_news', color: '#EE1C25' },

  // Regional/Local News
  { id: 'pub-reg-nation', name: 'Daily Nation', type: 'regional_news', parent: 'regional_news', color: '#1B5E20' },
  { id: 'pub-reg-vanguard', name: 'Vanguard Nigeria', type: 'regional_news', parent: 'regional_news', color: '#FF6F00' },
  { id: 'pub-reg-premium', name: 'Premium Times', type: 'regional_news', parent: 'regional_news', color: '#283593' },
  { id: 'pub-reg-garowe', name: 'Garowe Online', type: 'regional_news', parent: 'regional_news', color: '#4CAF50' },
  { id: 'pub-reg-zitamar', name: 'Zitamar News', type: 'regional_news', parent: 'regional_news', color: '#00838F' },

  // Internal/IC Sources
  { id: 'pub-africom-j2', name: 'AFRICOM J2', type: 'internal', color: null },
  { id: 'pub-dia', name: 'DIA Africa Desk', type: 'internal', color: null },
  { id: 'pub-cia-da', name: 'CIA Directorate of Analysis', type: 'internal', color: null },
  { id: 'pub-nsa-sigint', name: 'NSA SIGINT Division', type: 'internal', color: null },
  { id: 'pub-humint', name: 'HUMINT Reports', type: 'internal', color: null },
  { id: 'pub-fusion', name: 'Interagency Fusion Cell', type: 'internal', color: null },
  { id: 'pub-analyst', name: 'Analyst Input', type: 'internal', color: null },

  // Structured Data / OSINT Organizations
  { id: 'pub-acled', name: 'ACLED', type: 'osint_structured', color: '#7C3AED' },
  { id: 'pub-un-panel', name: 'UN Panel of Experts', type: 'osint_structured', color: '#1565C0' },
  { id: 'pub-fatf', name: 'FATF', type: 'osint_structured', color: '#B91C1C' },
  { id: 'pub-ofac', name: 'OFAC', type: 'osint_structured', color: '#DC2626' },
  { id: 'pub-un-sanc', name: 'UN Sanctions Committee', type: 'osint_structured', color: '#0D47A1' }
];

export const publisherCategories = [
  { id: 'social', name: 'Social Media', color: '#B07AA1' },
  { id: 'international_news', name: 'International News', color: '#4E79A7' },
  { id: 'regional_news', name: 'Regional News', color: '#59A14F' },
  { id: 'internal', name: 'Internal / IC', color: '#6b7280' },
  { id: 'osint_structured', name: 'OSINT / Structured Data', color: '#8B5CF6' }
];
