/**
 * VennDiagram.js
 * Faction overlap visualization using venn.js
 */

import { BaseComponent } from './BaseComponent.js';

export class VennDiagram extends BaseComponent {
  constructor(containerId, options = {}) {
    super(containerId, {
      height: 350,
      margin: { top: 10, right: 10, bottom: 10, left: 10 },
      ...options
    });
  }

  /**
   * Override resize to update both dimensions and recenter
   */
  resize() {
    if (this.container) {
      this.options.width = this.container.clientWidth;
      const newHeight = this.container.clientHeight;
      if (newHeight > 0) {
        this.options.height = newHeight;
      }
      if (this.data) {
        this.render();
      }
    }
    return this;
  }

  render() {
    if (!this.data || !this.data.sets || !this.data.sets.length) {
      this.showEmptyState('No faction overlap data');
      return;
    }

    const { width, height } = this.options;
    const { sets, overlaps } = this.data;

    this.clear();

    // Create container div for venn.js with centering
    const container = d3.select(this.container)
      .append('div')
      .attr('class', 'venn-container')
      .style('width', width + 'px')
      .style('height', height + 'px')
      .style('display', 'flex')
      .style('justify-content', 'center')
      .style('align-items', 'center');

    // Format data for venn.js
    // Single sets: { sets: ['A'], size: 10, label: 'Name' }
    // Overlaps: { sets: ['A', 'B'], size: 2 }
    const vennSets = sets.map(s => ({
      sets: [s.id],
      size: s.size || s.memberCount || 1000,
      label: s.name
    }));

    // Add intersections
    (overlaps || []).forEach(overlap => {
      vennSets.push({
        sets: overlap.factionIds,
        size: overlap.overlapSize || 100
      });
    });

    // Create color map
    const colorMap = {};
    sets.forEach(s => {
      colorMap[s.id] = s.color || 'var(--accent-primary)';
    });

    try {
      // Create venn diagram
      const chart = venn.VennDiagram()
        .width(width - 20)
        .height(height - 20);

      const vennDiv = container.datum(vennSets).call(chart);

      // Style circles
      vennDiv.selectAll('.venn-circle path')
        .style('fill-opacity', 0.4)
        .style('stroke-width', 2)
        .style('stroke', 'rgba(255, 255, 255, 0.3)')
        .each(function(d) {
          if (d.sets.length === 1) {
            d3.select(this).style('fill', colorMap[d.sets[0]] || 'var(--accent-primary)');
          }
        });

      // Style labels
      vennDiv.selectAll('.venn-circle text')
        .style('fill', 'var(--text-primary)')
        .style('font-size', '12px')
        .style('font-weight', '500')
        .style('font-family', 'var(--font-sans)');

      // Intersection labels
      vennDiv.selectAll('.venn-intersection text')
        .style('fill', 'var(--text-primary)')
        .style('font-size', '10px')
        .style('font-family', 'var(--font-mono)');

      // Hover effects
      vennDiv.selectAll('g')
        .on('mouseover', function(event, d) {
          const selection = d3.select(this);
          selection.select('path')
            .style('fill-opacity', 0.7);
        })
        .on('mouseout', function(event, d) {
          const selection = d3.select(this);
          selection.select('path')
            .style('fill-opacity', 0.4);
        })
        .on('click', (event, d) => {
          if (d.sets.length === 1 && this.options.onFactionClick) {
            const factionId = d.sets[0];
            const faction = sets.find(s => s.id === factionId);
            this.options.onFactionClick(faction || { id: factionId });
          }
        });

    } catch (e) {
      console.error('Venn diagram error:', e);
      this.showEmptyState('Unable to render faction overlaps');
    }
  }
}

export default VennDiagram;
