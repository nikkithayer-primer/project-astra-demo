/**
 * llmParser.js
 * LLM-based entity extraction with OpenAI integration and regex fallback
 */

export class LLMParser {
  constructor() {
    this.apiKey = localStorage.getItem('openai_api_key') || null;
    this.endpoint = 'https://api.openai.com/v1/chat/completions';
    this.model = 'gpt-4o-mini';
  }

  /**
   * Set API key
   */
  setApiKey(key) {
    this.apiKey = key;
    if (key) {
      localStorage.setItem('openai_api_key', key);
    } else {
      localStorage.removeItem('openai_api_key');
    }
  }

  /**
   * Get current API key
   */
  getApiKey() {
    return this.apiKey;
  }

  /**
   * Check if API key is set
   */
  hasApiKey() {
    return !!this.apiKey;
  }

  /**
   * Parse narrative text to extract entities
   */
  async parseNarrativeText(text) {
    if (!this.apiKey) {
      console.warn('No API key set, using fallback extraction');
      return this.fallbackExtraction(text);
    }

    const systemPrompt = `You are an entity extraction system for a narrative intelligence platform. Given a narrative text, extract:

1. **People mentioned** - with type (politician, military, civilian, journalist, activist, etc.)
2. **Organizations mentioned** - with type (political, military, government, platform, company, media, etc.)
3. **Locations mentioned** - with approximate coordinates if you know them (for well-known places)
4. **Events mentioned** - specific incidents or occurrences, with approximate dates if inferrable
5. **Suggested factions** - groups that might discuss this narrative, with their likely sentiment

Return JSON in this exact format:
{
  "persons": [{ "name": "Full Name", "type": "politician" }],
  "organizations": [{ "name": "Organization Name", "type": "political" }],
  "locations": [{ "name": "Location Name", "coordinates": { "lat": 0.0, "lng": 0.0 } }],
  "events": [{ "text": "Event description", "date": "YYYY-MM-DD or null" }],
  "suggestedFactions": [{ "name": "Faction Name", "sentiment": "positive|neutral|negative" }]
}

Rules:
- Be conservative - only extract entities clearly mentioned or strongly implied
- For coordinates, use null if unknown
- For dates, use null if not inferrable
- For factions, think about which groups would care about this narrative and how they'd feel`;

    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: this.model,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: `Extract entities from this narrative:\n\n"${text}"` }
          ],
          temperature: 0.3,
          response_format: { type: 'json_object' }
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || `API request failed: ${response.status}`);
      }

      const data = await response.json();
      const content = data.choices[0].message.content;
      return JSON.parse(content);
    } catch (error) {
      console.error('LLM parsing failed:', error);
      throw error;
    }
  }

  /**
   * Fallback extraction using pattern matching
   */
  fallbackExtraction(text) {
    const result = {
      persons: [],
      organizations: [],
      locations: [],
      events: [],
      suggestedFactions: []
    };

    // Known political figures
    const knownPoliticians = {
      'Joe Biden': 'politician',
      'Biden': 'politician',
      'Donald Trump': 'politician',
      'Trump': 'politician',
      'Barack Obama': 'politician',
      'Obama': 'politician',
      'Nancy Pelosi': 'politician',
      'Pelosi': 'politician',
      'Mitch McConnell': 'politician',
      'McConnell': 'politician',
      'Bernie Sanders': 'politician',
      'Sanders': 'politician',
      'AOC': 'politician',
      'Alexandria Ocasio-Cortez': 'politician'
    };

    // Check for known politicians
    Object.entries(knownPoliticians).forEach(([name, type]) => {
      if (text.includes(name)) {
        // Use full name if available
        const fullName = name.length > 6 ? name : 
          Object.keys(knownPoliticians).find(n => n.includes(name) && n.length > name.length) || name;
        if (!result.persons.find(p => p.name === fullName)) {
          result.persons.push({ name: fullName, type });
        }
      }
    });

    // Generic person pattern (titles followed by names)
    const personPatterns = [
      /(?:President|Senator|Rep\.|Dr\.|Mr\.|Mrs\.|Ms\.|Gen\.|Col\.)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/g,
      /([A-Z][a-z]+\s+[A-Z][a-z]+)(?:\s+(?:said|stated|announced|claimed|argued))/g
    ];

    personPatterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(text)) !== null) {
        const name = match[1];
        if (!result.persons.find(p => p.name === name) && name.length > 3) {
          result.persons.push({ name, type: 'person' });
        }
      }
    });

    // Organization patterns
    const knownOrgs = {
      'National Guard': { name: 'National Guard', type: 'military' },
      'Democratic Party': { name: 'Democratic Party', type: 'political' },
      'Republican Party': { name: 'Republican Party', type: 'political' },
      'Democrats': { name: 'Democratic Party', type: 'political' },
      'Republicans': { name: 'Republican Party', type: 'political' },
      'FBI': { name: 'FBI', type: 'government' },
      'CIA': { name: 'CIA', type: 'government' },
      'FDA': { name: 'FDA', type: 'government' },
      'CDC': { name: 'CDC', type: 'government' },
      'WHO': { name: 'WHO', type: 'international' },
      'TikTok': { name: 'TikTok', type: 'platform' },
      'Twitter': { name: 'Twitter', type: 'platform' },
      'Facebook': { name: 'Facebook', type: 'platform' },
      'Meta': { name: 'Meta', type: 'platform' },
      'Congress': { name: 'US Congress', type: 'government' },
      'Senate': { name: 'US Senate', type: 'government' },
      'White House': { name: 'White House', type: 'government' },
      'Pentagon': { name: 'Pentagon', type: 'military' },
      'NATO': { name: 'NATO', type: 'military' },
      'UN': { name: 'United Nations', type: 'international' },
      'United Nations': { name: 'United Nations', type: 'international' }
    };

    Object.entries(knownOrgs).forEach(([keyword, org]) => {
      if (text.includes(keyword)) {
        if (!result.organizations.find(o => o.name === org.name)) {
          result.organizations.push(org);
        }
      }
    });

    // Location patterns with known coordinates
    const knownLocations = {
      'washington': { name: 'Washington D.C.', coordinates: { lat: 38.8977, lng: -77.0365 } },
      'white house': { name: 'White House, Washington D.C.', coordinates: { lat: 38.8977, lng: -77.0365 } },
      'minneapolis': { name: 'Minneapolis, Minnesota', coordinates: { lat: 44.9778, lng: -93.2650 } },
      'new york': { name: 'New York City', coordinates: { lat: 40.7128, lng: -74.0060 } },
      'los angeles': { name: 'Los Angeles, California', coordinates: { lat: 34.0522, lng: -118.2437 } },
      'chicago': { name: 'Chicago, Illinois', coordinates: { lat: 41.8781, lng: -87.6298 } },
      'capitol': { name: 'US Capitol, Washington D.C.', coordinates: { lat: 38.8899, lng: -77.0091 } },
      'syria': { name: 'Syria', coordinates: { lat: 34.8021, lng: 38.9968 } },
      'damascus': { name: 'Damascus, Syria', coordinates: { lat: 33.5138, lng: 36.2765 } },
      'ukraine': { name: 'Ukraine', coordinates: { lat: 48.3794, lng: 31.1656 } },
      'kyiv': { name: 'Kyiv, Ukraine', coordinates: { lat: 50.4501, lng: 30.5234 } }
    };

    const lowerText = text.toLowerCase();
    Object.entries(knownLocations).forEach(([keyword, loc]) => {
      if (lowerText.includes(keyword)) {
        if (!result.locations.find(l => l.name === loc.name)) {
          result.locations.push(loc);
        }
      }
    });

    // Street intersection pattern (common in news)
    const intersectionPattern = /(\d+(?:st|nd|rd|th)?\s+(?:and|&)\s+[A-Z][a-z]+)(?:\s+in\s+([A-Z][a-z]+))?/gi;
    let match;
    while ((match = intersectionPattern.exec(text)) !== null) {
      const name = match[2] ? `${match[1]}, ${match[2]}` : match[1];
      if (!result.locations.find(l => l.name === name)) {
        result.locations.push({ name, coordinates: null });
      }
    }

    // Event extraction (action verbs with context)
    const eventPatterns = [
      /([A-Z][^.]*(?:shot|killed|attacked|arrested|announced|issued|clashed|protested|rioted)[^.]*)/g,
      /([A-Z][^.]*(?:shooting|killing|attack|arrest|announcement|clash|protest|riot)[^.]*)/g
    ];

    eventPatterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(text)) !== null) {
        const eventText = match[1].trim();
        if (eventText.length > 20 && eventText.length < 150) {
          if (!result.events.find(e => e.text === eventText)) {
            result.events.push({ text: eventText, date: null });
          }
        }
      }
    });

    // Faction suggestions based on content
    const factionIndicators = [
      { keywords: ['right wing', 'conservative', 'republican', 'trump'], faction: { name: 'American Right Wing', sentiment: 'neutral' } },
      { keywords: ['left wing', 'liberal', 'progressive', 'democrat'], faction: { name: 'Progressive Left', sentiment: 'neutral' } },
      { keywords: ['blm', 'black lives matter', 'racial justice'], faction: { name: 'BLM Supporters', sentiment: 'neutral' } },
      { keywords: ['police', 'law enforcement', 'blue lives'], faction: { name: 'Law Enforcement Supporters', sentiment: 'neutral' } },
      { keywords: ['military', 'troops', 'veterans', 'armed forces'], faction: { name: 'Military Supporters', sentiment: 'neutral' } },
      { keywords: ['vegan', 'plant-based', 'animal rights'], faction: { name: 'Vegans', sentiment: 'neutral' } },
      { keywords: ['health', 'organic', 'natural', 'wellness'], faction: { name: 'Health Activists', sentiment: 'neutral' } },
      { keywords: ['socialist', 'dsa', 'bernie'], faction: { name: 'Democratic Socialists', sentiment: 'neutral' } }
    ];

    factionIndicators.forEach(({ keywords, faction }) => {
      if (keywords.some(kw => lowerText.includes(kw))) {
        if (!result.suggestedFactions.find(f => f.name === faction.name)) {
          // Try to guess sentiment based on context
          const isNegative = lowerText.includes('against') || 
                           lowerText.includes('oppose') || 
                           lowerText.includes('criticism') ||
                           lowerText.includes('attack');
          result.suggestedFactions.push({
            ...faction,
            sentiment: isNegative ? 'negative' : 'neutral'
          });
        }
      }
    });

    return result;
  }

  /**
   * Validate API key by making a test request
   */
  async validateApiKey(key) {
    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${key}`
        },
        body: JSON.stringify({
          model: this.model,
          messages: [{ role: 'user', content: 'test' }],
          max_tokens: 5
        })
      });

      return response.ok;
    } catch (error) {
      return false;
    }
  }
}

// Export singleton instance
export const llmParser = new LLMParser();
export default LLMParser;
