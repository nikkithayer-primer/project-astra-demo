/**
 * Timeline.js
 * Event timeline visualization with zoom support
 */

import { BaseComponent } from './BaseComponent.js';
import { formatDateTime, getTimeFormatter } from '../utils/formatters.js';

export class Timeline extends BaseComponent {
  constructor(containerId, options = {}) {
    super(containerId, {
      height: 280,
      margin: { top: 60, right: 30, bottom: 60, left: 30 },
      minZoom: 0.5,
      maxZoom: 50,
      ...options
    });
    this.currentTransform = d3.zoomIdentity;
  }

  render() {
    if (!this.data || !this.data.events || !this.data.events.length) {
      this.showEmptyState('No events to display');
      return;
    }

    const { width, margin, minZoom, maxZoom } = this.options;
    const events = [...this.data.events].sort((a, b) =>
      new Date(a.date) - new Date(b.date)
    );

    // Store events for re-rendering on zoom
    this.events = events;

    // Calculate height based on number of events
    const height = Math.max(280, Math.min(events.length * 80, 500));
    this.options.height = height;

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    this.innerWidth = innerWidth;
    this.innerHeight = innerHeight;

    // Create container with zoom controls
    this.clear();
    
    // Add zoom controls
    const controlsDiv = document.createElement('div');
    controlsDiv.className = 'timeline-controls';
    controlsDiv.innerHTML = `
      <button class="timeline-zoom-btn" data-action="in" title="Zoom In">+</button>
      <button class="timeline-zoom-btn" data-action="out" title="Zoom Out">−</button>
      <button class="timeline-zoom-btn" data-action="reset" title="Reset Zoom">⟲</button>
    `;
    this.container.appendChild(controlsDiv);

    // Create SVG
    const svg = d3.select(this.container)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('class', 'timeline-svg');

    this.svg = svg;

    // Create a clip path to hide content outside the visible area
    svg.append('defs')
      .append('clipPath')
      .attr('id', `timeline-clip-${this.containerId}`)
      .append('rect')
      .attr('x', margin.left)
      .attr('y', 0)
      .attr('width', innerWidth)
      .attr('height', height);

    // Main group for content
    const g = svg.append('g')
      .attr('class', 'timeline-content')
      .attr('clip-path', `url(#timeline-clip-${this.containerId})`);

    this.contentGroup = g;

    // Time scale
    const timeExtent = d3.extent(events, d => new Date(d.date));
    // Add some padding to the time extent
    const timePadding = (timeExtent[1] - timeExtent[0]) * 0.05;
    const paddedExtent = [
      new Date(timeExtent[0].getTime() - timePadding),
      new Date(timeExtent[1].getTime() + timePadding)
    ];

    this.xScale = d3.scaleTime()
      .domain(paddedExtent)
      .range([margin.left + 50, width - margin.right - 50]);

    this.xScaleOriginal = this.xScale.copy();

    // Create zoom behavior
    this.zoom = d3.zoom()
      .scaleExtent([minZoom, maxZoom])
      .translateExtent([[margin.left, 0], [width - margin.right, height]])
      .extent([[margin.left, 0], [width - margin.right, height]])
      .on('zoom', (event) => this.handleZoom(event));

    // Apply zoom to SVG
    svg.call(this.zoom);

    // Create axis group (outside clip path so it's always visible)
    this.axisGroup = svg.append('g')
      .attr('class', 'timeline-axis-group')
      .attr('transform', `translate(0, ${margin.top + innerHeight / 2 + 30})`);

    // Initial render
    this.renderTimeline();

    // Attach control handlers
    controlsDiv.querySelectorAll('.timeline-zoom-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const action = e.target.dataset.action;
        this.handleZoomControl(action);
      });
    });
  }

  handleZoom(event) {
    this.currentTransform = event.transform;
    this.xScale = event.transform.rescaleX(this.xScaleOriginal);
    this.renderTimeline();
  }

  handleZoomControl(action) {
    const svg = this.svg;
    const duration = 300;

    switch (action) {
      case 'in':
        svg.transition().duration(duration)
          .call(this.zoom.scaleBy, 1.5);
        break;
      case 'out':
        svg.transition().duration(duration)
          .call(this.zoom.scaleBy, 0.67);
        break;
      case 'reset':
        svg.transition().duration(duration)
          .call(this.zoom.transform, d3.zoomIdentity);
        break;
    }
  }

  renderTimeline() {
    const { margin } = this.options;
    const { innerWidth, innerHeight, events, xScale, contentGroup, axisGroup } = this;
    const axisY = margin.top + innerHeight / 2;

    // Clear existing content
    contentGroup.selectAll('*').remove();

    // Main timeline axis line
    contentGroup.append('line')
      .attr('class', 'timeline-axis-line')
      .attr('x1', margin.left)
      .attr('x2', margin.left + innerWidth)
      .attr('y1', axisY)
      .attr('y2', axisY)
      .attr('stroke', 'var(--border-color)')
      .attr('stroke-width', 2);

    // Update time axis
    axisGroup.selectAll('*').remove();
    axisGroup.call(d3.axisBottom(xScale)
      .ticks(Math.min(events.length, 8))
      .tickFormat(getTimeFormatter('%b %d')))
      .selectAll('text')
      .attr('fill', 'var(--text-muted)')
      .attr('font-size', '10px')
      .attr('font-family', 'var(--font-sans)');

    axisGroup.select('.domain').attr('stroke', 'var(--border-color)');
    axisGroup.selectAll('.tick line').attr('stroke', 'var(--border-color)');

    // Draw events
    events.forEach((event, i) => {
      const xPos = xScale(new Date(event.date));
      
      // Skip events outside visible range
      if (xPos < margin.left - 100 || xPos > margin.left + innerWidth + 100) {
        return;
      }

      const isTop = i % 2 === 0;
      const yOffset = isTop ? -50 : 50;
      const isSubEvent = event.parentEventId != null;

      const eventGroup = contentGroup.append('g')
        .attr('class', `timeline-event ${isSubEvent ? 'sub-event' : 'main-event'}`)
        .attr('transform', `translate(${xPos}, ${axisY})`)
        .style('cursor', 'pointer');

      // Connector line
      eventGroup.append('line')
        .attr('class', 'event-connector')
        .attr('x1', 0)
        .attr('x2', 0)
        .attr('y1', 0)
        .attr('y2', yOffset)
        .attr('stroke', 'var(--border-color)')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', isSubEvent ? '3,3' : 'none');

      // Event dot
      eventGroup.append('circle')
        .attr('class', 'event-dot')
        .attr('cy', 0)
        .attr('r', isSubEvent ? 6 : 10)
        .attr('fill', isSubEvent ? 'var(--accent-warning)' : 'var(--accent-primary)')
        .attr('stroke', 'var(--bg-secondary)')
        .attr('stroke-width', 2);

      // Event card - dynamic height based on text
      const cardWidth = 160;
      const cardPadding = 8;
      const dateHeight = 16;
      const minCardHeight = 50;
      
      // Calculate text height based on content
      const textLines = this.wrapText(event.text, cardWidth - cardPadding * 2, 11);
      const textHeight = textLines.length * 14;
      const cardHeight = Math.max(minCardHeight, textHeight + dateHeight + cardPadding * 2);
      
      const cardY = isTop ? yOffset - cardHeight - 5 : yOffset + 5;
      const cardX = -cardWidth / 2;

      const card = eventGroup.append('g')
        .attr('transform', `translate(${cardX}, ${cardY})`);

      card.append('rect')
        .attr('class', 'event-card')
        .attr('width', cardWidth)
        .attr('height', cardHeight)
        .attr('rx', 6)
        .attr('fill', 'var(--bg-primary)')
        .attr('stroke', 'var(--border-color)')
        .attr('filter', 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.08))');

      // Event text with wrapping using foreignObject
      card.append('foreignObject')
        .attr('x', cardPadding)
        .attr('y', cardPadding)
        .attr('width', cardWidth - cardPadding * 2)
        .attr('height', cardHeight - dateHeight - cardPadding)
        .append('xhtml:div')
        .attr('class', 'event-text-wrap')
        .style('font-size', '11px')
        .style('line-height', '1.3')
        .style('color', 'var(--text-primary)')
        .style('overflow', 'hidden')
        .style('text-overflow', 'ellipsis')
        .style('display', '-webkit-box')
        .style('-webkit-line-clamp', '3')
        .style('-webkit-box-orient', 'vertical')
        .style('word-wrap', 'break-word')
        .text(event.text);

      // Event date
      card.append('text')
        .attr('class', 'event-date')
        .attr('x', cardWidth / 2)
        .attr('y', cardHeight - cardPadding)
        .attr('text-anchor', 'middle')
        .attr('fill', 'var(--text-muted)')
        .attr('font-size', '10px')
        .attr('font-family', 'var(--font-mono)')
        .text(formatDateTime(event.date));

      // Hover effects
      eventGroup
        .on('mouseover', function() {
          d3.select(this).select('.event-dot')
            .attr('r', isSubEvent ? 8 : 12)
            .attr('filter', 'brightness(1.2)');
          d3.select(this).select('.event-card')
            .attr('stroke', 'var(--accent-primary)');
        })
        .on('mouseout', function() {
          d3.select(this).select('.event-dot')
            .attr('r', isSubEvent ? 6 : 10)
            .attr('filter', null);
          d3.select(this).select('.event-card')
            .attr('stroke', 'var(--border-color)');
        })
        .on('click', () => {
          if (this.options.onEventClick) {
            this.options.onEventClick(event);
          }
        });
    });
  }

  // Helper method to estimate text wrapping
  wrapText(text, maxWidth, fontSize) {
    // Approximate characters per line based on font size and width
    const avgCharWidth = fontSize * 0.55;
    const charsPerLine = Math.floor(maxWidth / avgCharWidth);
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    words.forEach(word => {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      if (testLine.length <= charsPerLine) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    });
    if (currentLine) lines.push(currentLine);

    // Limit to 3 lines max
    return lines.slice(0, 3);
  }

  // Method to programmatically zoom to a specific event
  zoomToEvent(eventId) {
    const event = this.events.find(e => e.id === eventId);
    if (!event) return;

    const eventDate = new Date(event.date);
    const svg = this.svg;
    const { margin } = this.options;

    // Calculate the transform needed to center on this event
    const targetX = this.xScaleOriginal(eventDate);
    const centerX = margin.left + this.innerWidth / 2;
    const translateX = centerX - targetX * 2;

    svg.transition().duration(500)
      .call(this.zoom.transform, d3.zoomIdentity.translate(translateX, 0).scale(2));
  }

  destroy() {
    if (this.svg) {
      this.svg.on('.zoom', null);
    }
    super.destroy();
  }
}

export default Timeline;
