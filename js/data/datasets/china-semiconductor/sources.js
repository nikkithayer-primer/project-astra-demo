/**
 * Sources and source categories for China Semiconductor dataset
 */

export const sources = [
  // Tech News
  { id: 'src-semiengi', name: 'Semiconductor Engineering', type: 'tech_news', color: '#1565C0' },
  { id: 'src-eetimes', name: 'EE Times', type: 'tech_news', color: '#0D47A1' },
  { id: 'src-theregister', name: 'The Register', type: 'tech_news', color: '#B71C1C' },
  { id: 'src-anandtech', name: 'AnandTech', type: 'tech_news', color: '#E65100' },
  { id: 'src-tomshardware', name: 'Tom\'s Hardware', type: 'tech_news', color: '#D32F2F' },
  
  // Chinese News
  { id: 'src-xinhua', name: 'Xinhua', type: 'chinese_news', parent: 'chinese_news', color: '#C62828' },
  { id: 'src-cgtn', name: 'CGTN', type: 'chinese_news', parent: 'chinese_news', color: '#AD1457' },
  { id: 'src-scmp', name: 'South China Morning Post', type: 'chinese_news', parent: 'chinese_news', color: '#FF6F00' },
  { id: 'src-caixin', name: 'Caixin', type: 'chinese_news', parent: 'chinese_news', color: '#00695C' },
  { id: 'src-globaltimes', name: 'Global Times', type: 'chinese_news', parent: 'chinese_news', color: '#C62828' },
  
  // International Business News
  { id: 'src-bloomberg', name: 'Bloomberg', type: 'business_news', parent: 'business_news', color: '#000000' },
  { id: 'src-reuters', name: 'Reuters', type: 'business_news', parent: 'business_news', color: '#FF8000' },
  { id: 'src-wsj', name: 'Wall Street Journal', type: 'business_news', parent: 'business_news', color: '#1A1A1A' },
  { id: 'src-ft', name: 'Financial Times', type: 'business_news', parent: 'business_news', color: '#FFF1E0' },
  { id: 'src-nikkei', name: 'Nikkei Asia', type: 'business_news', parent: 'business_news', color: '#003D7A' },
  
  // Social Media
  { id: 'src-x', name: 'X', type: 'social', color: '#000000' },
  { id: 'src-linkedin', name: 'LinkedIn', type: 'social', color: '#0A66C2' },
  { id: 'src-weibo', name: 'Weibo', type: 'social', color: '#E6162D' },
  { id: 'src-reddit', name: 'Reddit', type: 'social', color: '#FF4500' }
];

export const sourceCategories = [
  { id: 'tech_news', name: 'Tech News', color: '#4E79A7' },
  { id: 'chinese_news', name: 'Chinese News', color: '#E15759' },
  { id: 'business_news', name: 'Business News', color: '#59A14F' },
  { id: 'social', name: 'Social Media', color: '#B07AA1' }
];
