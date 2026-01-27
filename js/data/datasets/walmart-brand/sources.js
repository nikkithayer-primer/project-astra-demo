/**
 * Sources and source categories for Walmart Brand dataset
 */

export const sources = [
  // Consumer Review Platforms
  { id: 'src-trustpilot', name: 'Trustpilot', type: 'consumer_review', color: '#00B67A' },
  { id: 'src-bbb', name: 'Better Business Bureau', type: 'consumer_review', color: '#005A8C' },
  { id: 'src-yelp', name: 'Yelp', type: 'consumer_review', color: '#D32323' },
  { id: 'src-consumeraffairs', name: 'ConsumerAffairs', type: 'consumer_review', color: '#1E88E5' },
  { id: 'src-googlereviews', name: 'Google Reviews', type: 'consumer_review', color: '#4285F4' },
  
  // News Outlets
  { id: 'src-reuters', name: 'Reuters', type: 'news', parent: 'news', color: '#FF8000' },
  { id: 'src-ap', name: 'Associated Press', type: 'news', parent: 'news', color: '#E32636' },
  { id: 'src-usatoday', name: 'USA Today', type: 'news', parent: 'news', color: '#009BFF' },
  { id: 'src-localnews', name: 'Local News Affiliates', type: 'news', parent: 'news', color: '#6B7280' },
  
  // Business News
  { id: 'src-wsj', name: 'Wall Street Journal', type: 'business_news', parent: 'business_news', color: '#1A1A1A' },
  { id: 'src-bloomberg', name: 'Bloomberg', type: 'business_news', parent: 'business_news', color: '#000000' },
  { id: 'src-retaildive', name: 'Retail Dive', type: 'business_news', parent: 'business_news', color: '#0066CC' },
  { id: 'src-modernretail', name: 'Modern Retail', type: 'business_news', parent: 'business_news', color: '#FF6B35' },
  
  // Social Media
  { id: 'src-x', name: 'X', type: 'social', color: '#000000' },
  { id: 'src-tiktok', name: 'TikTok', type: 'social', color: '#00F2EA' },
  { id: 'src-reddit', name: 'Reddit', type: 'social', color: '#FF4500' },
  { id: 'src-facebook', name: 'Facebook', type: 'social', color: '#1877F2' },
  { id: 'src-instagram', name: 'Instagram', type: 'social', color: '#E4405F' }
];

export const sourceCategories = [
  { id: 'consumer_review', name: 'Consumer Reviews', color: '#59A14F' },
  { id: 'news', name: 'News', color: '#E15759' },
  { id: 'business_news', name: 'Business News', color: '#76B7B2' },
  { id: 'social', name: 'Social Media', color: '#B07AA1' }
];
