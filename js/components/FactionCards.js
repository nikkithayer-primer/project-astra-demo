/**
 * FactionCards.js
 * Display factions as clickable cards
 */

import { BaseComponent } from './BaseComponent.js';

export class FactionCards extends BaseComponent {
  constructor(containerId, options = {}) {
    super(containerId, {
      showCount: true,
      ...options
    });
  }

  render() {
    this.clear();

    if (!this.data || !this.data.factions || !this.data.factions.length) {
      this.showEmptyState('No factions to display');
      return;
    }

    const container = document.createElement('div');
    container.className = 'faction-cards';

    this.data.factions.forEach(faction => {
      const card = document.createElement('div');
      card.className = 'faction-card';
      card.dataset.id = faction.id;

      card.innerHTML = `
        <div class="faction-color" style="background: ${faction.color || 'var(--accent-primary)'}"></div>
        <span class="faction-name">${faction.name}</span>
        ${this.options.showCount && faction.memberCount ? `
          <span class="faction-count">${this.formatNumber(faction.memberCount)}</span>
        ` : ''}
      `;

      card.addEventListener('click', () => {
        if (this.options.onFactionClick) {
          this.options.onFactionClick(faction);
        }
      });

      container.appendChild(card);
    });

    this.container.appendChild(container);
  }
}

export default FactionCards;
