/**
 * TimelineVolumeComposite.js
 * Combined visualization showing volume over time with event timeline
 * Allows correlation between volume spikes and events
 */

import { BaseComponent } from './BaseComponent.js';
import { formatDate, formatDateLong, formatDateTimeLong, getTimeFormatter } from '../utils/formatters.js';

export class TimelineVolumeComposite extends BaseComponent {
  constructor(containerId, options = {}) {
    super(containerId, {
      height: 450,
      volumeHeight: 180,
      timelineHeight: 180,
      axisHeight: 40,
      legendHeight: 50,
      margin: { top: 20, right: 30, bottom: 10, left: 50 },
      minZoom: 0.5,
      maxZoom: 50,
      showViewToggle: options.showViewToggle !== false,
      ...options
    });
    this.currentTransform = d3.zoomIdentity;
    this.currentView = 'factions'; // 'factions' or 'publishers'
  }

  render() {
    const { volumeData, events } = this.data || {};
    
    // Need at least volume data or events to render
    if ((!volumeData || !volumeData.dates || !volumeData.dates.length) && 
        (!events || !events.length)) {
      this.showEmptyState('No data to display');
      return;
    }

    const { width, margin, volumeHeight, timelineHeight, axisHeight, legendHeight, minZoom, maxZoom } = this.options;
    const totalHeight = margin.top + volumeHeight + timelineHeight + axisHeight + legendHeight + margin.bottom;
    this.options.height = totalHeight;

    const innerWidth = width - margin.left - margin.right;

    // Store dimensions
    this.innerWidth = innerWidth;
    this.volumeHeight = volumeHeight;
    this.timelineHeight = timelineHeight;

    // Calculate time extent from both data sources
    const timeExtent = this.calculateTimeExtent(volumeData, events);
    if (!timeExtent) {
      this.showEmptyState('No valid time data');
      return;
    }

    // Add padding to time extent
    const timePadding = (timeExtent[1] - timeExtent[0]) * 0.05;
    const paddedExtent = [
      new Date(timeExtent[0].getTime() - timePadding),
      new Date(timeExtent[1].getTime() + timePadding)
    ];

    // Create shared time scale
    this.xScale = d3.scaleTime()
      .domain(paddedExtent)
      .range([0, innerWidth]);
    this.xScaleOriginal = this.xScale.copy();

    // Clear and create container
    this.clear();

    // Add controls
    const controlsDiv = document.createElement('div');
    controlsDiv.className = 'composite-controls';
    
    // Determine if we should show view toggle
    const hasPublisherData = this.data.publisherData && this.data.publisherData.dates && this.data.publisherData.dates.length > 0;
    const hasFactionData = volumeData && volumeData.dates && volumeData.dates.length > 0;
    const showToggle = this.options.showViewToggle && hasPublisherData && hasFactionData;
    
    controlsDiv.innerHTML = `
      ${showToggle ? `
        <div class="view-toggle">
          <button class="view-toggle-btn ${this.currentView === 'factions' ? 'active' : ''}" data-view="factions">By Faction</button>
          <button class="view-toggle-btn ${this.currentView === 'publishers' ? 'active' : ''}" data-view="publishers">By Publisher</button>
        </div>
      ` : ''}
      <div class="zoom-controls">
        <button class="timeline-zoom-btn" data-action="in" title="Zoom In">+</button>
        <button class="timeline-zoom-btn" data-action="out" title="Zoom Out">−</button>
        <button class="timeline-zoom-btn" data-action="reset" title="Reset Zoom">⟲</button>
      </div>
    `;
    this.container.appendChild(controlsDiv);

    // Create SVG
    const svg = d3.select(this.container)
      .append('svg')
      .attr('width', width)
      .attr('height', totalHeight)
      .attr('class', 'composite-svg');

    this.svg = svg;

    // Create clip path for content
    svg.append('defs')
      .append('clipPath')
      .attr('id', `composite-clip-${this.containerId}`)
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', innerWidth)
      .attr('height', volumeHeight + timelineHeight);

    // Create main content group
    const mainGroup = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Volume chart group
    this.volumeGroup = mainGroup.append('g')
      .attr('class', 'volume-group')
      .attr('clip-path', `url(#composite-clip-${this.containerId})`);

    // Divider line between charts
    mainGroup.append('line')
      .attr('class', 'chart-divider')
      .attr('x1', 0)
      .attr('x2', innerWidth)
      .attr('y1', volumeHeight)
      .attr('y2', volumeHeight)
      .attr('stroke', 'var(--border-color)')
      .attr('stroke-width', 1);

    // Timeline group
    this.timelineGroup = mainGroup.append('g')
      .attr('class', 'timeline-group')
      .attr('transform', `translate(0, ${volumeHeight})`)
      .attr('clip-path', `url(#composite-clip-${this.containerId})`);

    // Shared axis group
    this.axisGroup = mainGroup.append('g')
      .attr('class', 'shared-axis')
      .attr('transform', `translate(0, ${volumeHeight + timelineHeight})`);

    // Create zoom behavior
    this.zoom = d3.zoom()
      .scaleExtent([minZoom, maxZoom])
      .translateExtent([[0, 0], [innerWidth, totalHeight]])
      .extent([[0, 0], [innerWidth, totalHeight]])
      .on('zoom', (event) => this.handleZoom(event));

    // Apply zoom to SVG
    svg.call(this.zoom);

    // Legend group (below the axis)
    this.legendGroup = mainGroup.append('g')
      .attr('class', 'legend-group')
      .attr('transform', `translate(0, ${volumeHeight + timelineHeight + axisHeight + 10})`);

    // Render components
    this.renderVolumeArea(volumeData);
    this.renderTimelineArea(events);
    this.renderSharedAxis();
    this.renderEventMarkers(events);
    this.renderLegend();

    // Setup tooltip
    this.setupTooltip();

    // Attach control handlers
    controlsDiv.querySelectorAll('.timeline-zoom-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const action = e.target.dataset.action;
        this.handleZoomControl(action);
      });
    });

    // Attach view toggle handlers
    controlsDiv.querySelectorAll('.view-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const view = e.target.dataset.view;
        if (view !== this.currentView) {
          this.currentView = view;
          this.render();
        }
      });
    });
  }

  calculateTimeExtent(volumeData, events) {
    const dates = [];

    if (volumeData && volumeData.dates) {
      volumeData.dates.forEach(d => dates.push(new Date(d)));
    }

    if (events && events.length) {
      events.forEach(e => dates.push(new Date(e.date)));
    }

    if (dates.length === 0) return null;

    return d3.extent(dates);
  }

  renderVolumeArea(volumeData) {
    // Determine which data to use based on current view
    const { publisherData } = this.data || {};
    const dataToUse = this.currentView === 'publishers' && publisherData 
      ? publisherData 
      : volumeData;

    if (!dataToUse || !dataToUse.dates || !dataToUse.dates.length) {
      // Show placeholder if no volume data
      this.volumeGroup.append('text')
        .attr('x', this.innerWidth / 2)
        .attr('y', this.volumeHeight / 2)
        .attr('text-anchor', 'middle')
        .attr('fill', 'var(--text-muted)')
        .attr('font-size', '12px')
        .attr('font-family', 'var(--font-sans)')
        .text('No volume data available');
      return;
    }

    // Extract the data arrays (factions or publishers)
    const { dates, series } = dataToUse;
    const items = this.currentView === 'publishers' 
      ? dataToUse.publishers 
      : dataToUse.factions;

    if (!items || items.length === 0) {
      this.volumeGroup.append('text')
        .attr('x', this.innerWidth / 2)
        .attr('y', this.volumeHeight / 2)
        .attr('text-anchor', 'middle')
        .attr('fill', 'var(--text-muted)')
        .attr('font-size', '12px')
        .attr('font-family', 'var(--font-sans)')
        .text(`No ${this.currentView} data available`);
      return;
    }

    const innerWidth = this.innerWidth;
    const height = this.volumeHeight - 20; // Leave space for labels

    // Store for later use
    this.volumeData = volumeData;
    this.currentDataItems = items;

    // Prepare data for stacking
    const stackData = dates.map((date, i) => {
      const point = { date: new Date(date) };
      items.forEach((item, fi) => {
        point[item.id] = series[fi] ? series[fi][i] : 0;
      });
      return point;
    });
    this.stackData = stackData;

    // Stack generator
    const stack = d3.stack()
      .keys(items.map(item => item.id))
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);

    const stackedData = stack(stackData);
    this.stackedData = stackedData;

    // Y scale for volume
    const maxY = d3.max(stackedData, layer => d3.max(layer, d => d[1])) || 1;
    this.yScale = d3.scaleLinear()
      .domain([0, maxY * 1.1])
      .range([height, 0]);

    // Color scale
    this.colorScale = d3.scaleOrdinal()
      .domain(items.map(item => item.id))
      .range(items.map(item => item.color));

    // Gridlines
    this.volumeGroup.append('g')
      .attr('class', 'volume-grid')
      .call(d3.axisLeft(this.yScale)
        .ticks(4)
        .tickSize(-innerWidth)
        .tickFormat(''))
      .selectAll('line')
      .attr('stroke', 'var(--border-color)')
      .attr('stroke-opacity', 0.3);

    this.volumeGroup.select('.volume-grid path').remove();

    // Y axis
    this.volumeGroup.append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(this.yScale)
        .ticks(4)
        .tickFormat(d => this.formatNumber(d)))
      .selectAll('text')
      .attr('fill', 'var(--text-muted)')
      .attr('font-size', '10px')
      .attr('font-family', 'var(--font-sans)');

    this.volumeGroup.selectAll('.y-axis path').attr('stroke', 'var(--border-color)');
    this.volumeGroup.selectAll('.y-axis line').attr('stroke', 'var(--border-color)');

    // Area generator
    this.areaGenerator = d3.area()
      .x(d => this.xScale(d.data.date))
      .y0(d => this.yScale(d[0]))
      .y1(d => this.yScale(d[1]))
      .curve(d3.curveMonotoneX);

    // Draw areas
    this.volumeLayers = this.volumeGroup.selectAll('.volume-layer')
      .data(stackedData)
      .join('path')
      .attr('class', d => `volume-layer volume-layer-${d.key}`)
      .attr('fill', d => this.colorScale(d.key))
      .attr('fill-opacity', 0.8)
      .attr('d', this.areaGenerator);
  }

  renderTimelineArea(events) {
    if (!events || !events.length) {
      this.timelineGroup.append('text')
        .attr('x', this.innerWidth / 2)
        .attr('y', this.timelineHeight / 2)
        .attr('text-anchor', 'middle')
        .attr('fill', 'var(--text-muted)')
        .attr('font-size', '12px')
        .attr('font-family', 'var(--font-sans)')
        .text('No events available');
      return;
    }

    // Sort events by date
    this.events = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
    const height = this.timelineHeight;
    const axisY = height / 2;

    // Main timeline axis line
    this.timelineGroup.append('line')
      .attr('class', 'timeline-axis-line')
      .attr('x1', 0)
      .attr('x2', this.innerWidth)
      .attr('y1', axisY)
      .attr('y2', axisY)
      .attr('stroke', 'var(--border-color)')
      .attr('stroke-width', 2);

    // Draw events
    this.eventGroups = this.timelineGroup.selectAll('.timeline-event')
      .data(this.events)
      .join('g')
      .attr('class', d => `timeline-event ${d.parentEventId ? 'sub-event' : 'main-event'}`)
      .attr('transform', d => `translate(${this.xScale(new Date(d.date))}, ${axisY})`)
      .style('cursor', 'pointer');

    // Event connectors and dots
    this.eventGroups.each((d, i, nodes) => {
      const g = d3.select(nodes[i]);
      const isTop = i % 2 === 0;
      const yOffset = isTop ? -40 : 40;
      const isSubEvent = d.parentEventId != null;

      // Connector line
      g.append('line')
        .attr('class', 'event-connector')
        .attr('x1', 0)
        .attr('x2', 0)
        .attr('y1', 0)
        .attr('y2', yOffset)
        .attr('stroke', 'var(--border-color)')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', isSubEvent ? '3,3' : 'none');

      // Event dot
      g.append('circle')
        .attr('class', 'event-dot')
        .attr('cy', 0)
        .attr('r', isSubEvent ? 5 : 8)
        .attr('fill', isSubEvent ? 'var(--accent-warning)' : 'var(--accent-primary)')
        .attr('stroke', 'var(--bg-primary)')
        .attr('stroke-width', 2);

      // Event label with background
      const label = g.append('g')
        .attr('class', 'event-label')
        .attr('transform', `translate(0, ${yOffset + (isTop ? -5 : 5)})`);

      // Truncate text
      const displayText = d.text.length > 25 ? d.text.slice(0, 22) + '...' : d.text;
      const dateText = formatDate(d.date);

      // Calculate approximate text width for background
      const textWidth = Math.max(displayText.length * 5.5, 60);
      const bgPadding = 4;
      const bgHeight = 28;
      const bgY = isTop ? -12 : 0;

      // Background rect
      label.append('rect')
        .attr('class', 'event-label-bg')
        .attr('x', -textWidth / 2 - bgPadding)
        .attr('y', bgY)
        .attr('width', textWidth + bgPadding * 2)
        .attr('height', bgHeight)
        .attr('rx', 3)
        .attr('fill', 'var(--bg-secondary)')
        .attr('stroke', 'var(--border-color)')
        .attr('stroke-width', 1);

      label.append('text')
        .attr('text-anchor', 'middle')
        .attr('y', isTop ? 0 : 12)
        .attr('font-size', '10px')
        .attr('fill', 'var(--text-primary)')
        .attr('font-family', 'var(--font-sans)')
        .text(displayText);

      label.append('text')
        .attr('text-anchor', 'middle')
        .attr('y', isTop ? 12 : 24)
        .attr('font-size', '9px')
        .attr('fill', 'var(--text-muted)')
        .attr('font-family', 'var(--font-mono)')
        .text(dateText);
    });

    // Hover effects
    this.eventGroups
      .on('mouseover', (event, d) => {
        const g = d3.select(event.currentTarget);
        const isSubEvent = d.parentEventId != null;
        
        // Raise this event to top (highest z-index in SVG)
        g.raise();
        
        g.select('.event-dot')
          .attr('r', isSubEvent ? 7 : 10)
          .attr('filter', 'brightness(1.2)');
        
        // Highlight the label background
        g.select('.event-label-bg')
          .attr('stroke', 'var(--accent-primary)')
          .attr('stroke-width', 2)
          .attr('fill', 'var(--bg-tertiary)');
        
        // Highlight corresponding marker in volume chart
        this.highlightEventMarker(d.id, true);
        
        this.showEventTooltip(event, d);
      })
      .on('mouseout', (event, d) => {
        const g = d3.select(event.currentTarget);
        const isSubEvent = d.parentEventId != null;
        
        g.select('.event-dot')
          .attr('r', isSubEvent ? 5 : 8)
          .attr('filter', null);
        
        // Reset label background
        g.select('.event-label-bg')
          .attr('stroke', 'var(--border-color)')
          .attr('stroke-width', 1)
          .attr('fill', 'var(--bg-secondary)');
        
        this.highlightEventMarker(d.id, false);
        this.hideTooltip();
      })
      .on('click', (event, d) => {
        if (this.options.onEventClick) {
          this.options.onEventClick(d);
        }
      });
  }

  renderEventMarkers(events) {
    if (!events || !events.length || !this.volumeData) return;

    const height = this.volumeHeight - 20;

    // Create markers group
    this.markersGroup = this.volumeGroup.append('g')
      .attr('class', 'event-markers');

    // Draw vertical lines for each event
    this.eventMarkers = this.markersGroup.selectAll('.event-marker')
      .data(events)
      .join('g')
      .attr('class', 'event-marker')
      .attr('data-event-id', d => d.id);

    this.eventMarkers.append('line')
      .attr('x1', d => this.xScale(new Date(d.date)))
      .attr('x2', d => this.xScale(new Date(d.date)))
      .attr('y1', 0)
      .attr('y2', height)
      .attr('stroke', 'var(--accent-primary)')
      .attr('stroke-width', 1)
      .attr('stroke-dasharray', '4,4')
      .attr('opacity', 0.5);

    // Small diamond marker at top
    this.eventMarkers.append('path')
      .attr('d', d3.symbol().type(d3.symbolDiamond).size(30))
      .attr('transform', d => `translate(${this.xScale(new Date(d.date))}, 8)`)
      .attr('fill', 'var(--accent-primary)')
      .attr('opacity', 0.7);

    // Hover behavior for markers
    this.eventMarkers
      .style('cursor', 'pointer')
      .on('mouseover', (event, d) => {
        this.highlightEventMarker(d.id, true);
        this.highlightTimelineEvent(d.id, true);
        this.showEventTooltip(event, d);
      })
      .on('mouseout', (event, d) => {
        this.highlightEventMarker(d.id, false);
        this.highlightTimelineEvent(d.id, false);
        this.hideTooltip();
      })
      .on('click', (event, d) => {
        if (this.options.onEventClick) {
          this.options.onEventClick(d);
        }
      });
  }

  renderSharedAxis() {
    this.axisGroup.selectAll('*').remove();
    
    this.axisGroup.call(d3.axisBottom(this.xScale)
      .ticks(Math.min(10, Math.max(5, this.innerWidth / 80)))
      .tickFormat(getTimeFormatter('%b %d')))
      .selectAll('text')
      .attr('fill', 'var(--text-muted)')
      .attr('font-size', '10px')
      .attr('font-family', 'var(--font-sans)');

    this.axisGroup.select('.domain').attr('stroke', 'var(--border-color)');
    this.axisGroup.selectAll('.tick line').attr('stroke', 'var(--border-color)');
  }

  renderLegend() {
    if (!this.currentDataItems || this.currentDataItems.length === 0) return;

    const items = this.currentDataItems;
    const innerWidth = this.innerWidth;
    const isFactionView = this.currentView === 'factions';

    // Calculate item width for horizontal layout
    const maxItems = Math.min(items.length, 8);
    const legendItemWidth = Math.min(140, innerWidth / maxItems);

    items.slice(0, maxItems).forEach((item, i) => {
      const legendItem = this.legendGroup.append('g')
        .attr('class', 'legend-item')
        .attr('transform', `translate(${i * legendItemWidth}, 0)`)
        .style('cursor', 'pointer');

      legendItem.append('rect')
        .attr('width', 12)
        .attr('height', 12)
        .attr('rx', 2)
        .attr('fill', item.color);

      legendItem.append('text')
        .attr('x', 18)
        .attr('y', 10)
        .text(item.name.length > 15 ? item.name.slice(0, 13) + '...' : item.name)
        .attr('class', 'legend-label')
        .attr('fill', 'var(--text-secondary)')
        .attr('font-size', '11px')
        .attr('font-family', 'var(--font-sans)')
        .append('title')
        .text(item.name);

      // Add click handler for faction navigation
      if (isFactionView && this.options.onFactionClick) {
        legendItem.on('click', () => {
          this.options.onFactionClick(item);
        });
      }

      // Add hover effect to highlight corresponding area
      const self = this;
      legendItem
        .on('mouseover', function() {
          d3.select(this).select('text').attr('fill', 'var(--accent-primary)');
          // Highlight the corresponding area, dim others
          if (self.volumeLayers) {
            self.volumeLayers
              .attr('fill-opacity', d => d.key === item.id ? 1 : 0.4)
              .attr('stroke', d => d.key === item.id ? item.color : 'none')
              .attr('stroke-width', d => d.key === item.id ? 2 : 0);
          }
        })
        .on('mouseout', function() {
          d3.select(this).select('text').attr('fill', 'var(--text-secondary)');
          // Restore all areas to normal opacity
          if (self.volumeLayers) {
            self.volumeLayers
              .attr('fill-opacity', 0.8)
              .attr('stroke', 'none')
              .attr('stroke-width', 0);
          }
        });
    });

    // Show "+N more" if there are more items
    if (items.length > maxItems) {
      this.legendGroup.append('text')
        .attr('x', maxItems * legendItemWidth)
        .attr('y', 10)
        .attr('font-size', '11px')
        .attr('fill', 'var(--text-muted)')
        .attr('font-family', 'var(--font-sans)')
        .text(`+${items.length - maxItems} more`);
    }
  }

  setupTooltip() {
    this.tooltip = d3.select(this.container)
      .append('div')
      .attr('class', 'composite-tooltip')
      .style('opacity', 0)
      .style('position', 'absolute')
      .style('pointer-events', 'none');

    // Setup interactive hover for volume chart with crosshair
    this.setupVolumeHover();
  }

  setupVolumeHover() {
    if (!this.stackData || !this.currentDataItems) return;

    const { margin } = this.options;
    const totalChartHeight = this.volumeHeight + this.timelineHeight;

    // Create a group for hover elements that spans both charts
    const mainGroup = this.svg.select('g');
    
    // Full-height hover line (spans volume + timeline)
    this.hoverLine = mainGroup.append('line')
      .attr('class', 'hover-line')
      .attr('y1', 0)
      .attr('y2', totalChartHeight)
      .attr('stroke', 'var(--text-secondary)')
      .attr('stroke-width', 1)
      .attr('stroke-dasharray', '4,4')
      .attr('opacity', 0)
      .attr('pointer-events', 'none');

    // Hover dots for each faction/publisher
    this.hoverDots = mainGroup.append('g')
      .attr('class', 'hover-dots')
      .attr('opacity', 0)
      .attr('pointer-events', 'none');

    this.currentDataItems.forEach(item => {
      this.hoverDots.append('circle')
        .attr('class', `hover-dot-${item.id}`)
        .attr('r', 4)
        .attr('fill', item.color)
        .attr('stroke', 'var(--bg-primary)')
        .attr('stroke-width', 2);
    });

    // Invisible overlay for mouse events on volume area
    const overlay = this.volumeGroup.append('rect')
      .attr('class', 'volume-overlay')
      .attr('width', this.innerWidth)
      .attr('height', this.volumeHeight - 20)
      .attr('fill', 'transparent')
      .attr('cursor', 'crosshair');

    // Bisector for finding closest data point
    const bisect = d3.bisector(d => d.date).left;

    overlay
      .on('mousemove', (event) => {
        const [mouseX] = d3.pointer(event);
        const x0 = this.xScale.invert(mouseX);
        const i = bisect(this.stackData, x0, 1);
        const d0 = this.stackData[i - 1];
        const d1 = this.stackData[i];
        
        // Find closest data point
        const d = !d1 ? d0 : !d0 ? d1 : (x0 - d0.date > d1.date - x0 ? d1 : d0);
        
        if (!d) return;

        const xPos = this.xScale(d.date);

        // Update hover line
        this.hoverLine
          .attr('x1', xPos)
          .attr('x2', xPos)
          .attr('opacity', 1);

        // Update hover dots
        this.hoverDots.attr('opacity', 1);
        
        // Calculate cumulative values for dot positioning
        let cumulative = 0;
        this.currentDataItems.forEach(item => {
          const value = d[item.id] || 0;
          cumulative += value;
          this.hoverDots.select(`.hover-dot-${item.id}`)
            .attr('cx', xPos)
            .attr('cy', this.yScale(cumulative));
        });

        // Find events near this date
        const nearbyEvents = this.findNearbyEvents(d.date);

        // Show volume tooltip
        this.showVolumeTooltip(event, d, nearbyEvents);
      })
      .on('mouseenter', () => {
        this.hoverLine.attr('opacity', 1);
        this.hoverDots.attr('opacity', 1);
        if (this.volumeLayers) {
          this.volumeLayers.attr('fill-opacity', 0.6);
        }
      })
      .on('mouseleave', () => {
        this.hoverLine.attr('opacity', 0);
        this.hoverDots.attr('opacity', 0);
        this.hideTooltip();
        if (this.volumeLayers) {
          this.volumeLayers.attr('fill-opacity', 0.8);
        }
      });
  }

  findNearbyEvents(date) {
    if (!this.events) return [];
    
    // Find events within 1 day of the hovered date
    const targetTime = date.getTime();
    const dayMs = 24 * 60 * 60 * 1000;
    
    return this.events.filter(e => {
      const eventTime = new Date(e.date).getTime();
      return Math.abs(eventTime - targetTime) < dayMs;
    });
  }

  showVolumeTooltip(event, d, nearbyEvents = []) {
    const items = this.currentDataItems;
    const viewType = this.currentView === 'publishers' ? 'Publisher' : 'Faction';
    
    // Calculate total volume
    const total = items.reduce((sum, item) => sum + (d[item.id] || 0), 0);

    // Build tooltip content
    let tooltipContent = `
      <div class="tooltip-header">
        <span class="tooltip-date">${formatDateLong(d.date)}</span>
        <span class="tooltip-total">${this.formatNumber(total)} total</span>
      </div>
      <div class="tooltip-body">
        ${items.map(item => {
          const value = d[item.id] || 0;
          const percent = total > 0 ? Math.round((value / total) * 100) : 0;
          return `
            <div class="tooltip-row">
              <span class="tooltip-color" style="background: ${item.color}"></span>
              <span class="tooltip-faction">${item.name}</span>
              <span class="tooltip-value">${this.formatNumber(value)}</span>
              <span class="tooltip-percent">(${percent}%)</span>
            </div>
          `;
        }).join('')}
      </div>
    `;

    // Add nearby events section if any
    if (nearbyEvents.length > 0) {
      tooltipContent += `
        <div class="tooltip-events">
          <div class="tooltip-events-header">Events</div>
          ${nearbyEvents.map(e => `
            <div class="tooltip-event-row">
              <span class="tooltip-event-dot ${e.parentEventId ? 'sub-event' : ''}"></span>
              <span class="tooltip-event-text">${e.text.length > 30 ? e.text.slice(0, 28) + '...' : e.text}</span>
            </div>
          `).join('')}
        </div>
      `;
    }

    const containerRect = this.container.getBoundingClientRect();
    const tooltipX = event.clientX - containerRect.left;
    const tooltipY = event.clientY - containerRect.top;

    // Determine if tooltip should be on left or right of line
    const tooltipOnLeft = tooltipX > this.innerWidth / 2;

    this.tooltip
      .html(tooltipContent)
      .style('opacity', 1)
      .style('left', tooltipOnLeft ? `${tooltipX - 200}px` : `${tooltipX + 15}px`)
      .style('top', `${Math.max(10, tooltipY - 50)}px`);
  }

  showEventTooltip(event, d) {
    const content = `
      <div class="tooltip-header">
        <span class="tooltip-title">${d.text}</span>
      </div>
      <div class="tooltip-body">
        <div class="tooltip-row">
          <span class="tooltip-label">Date:</span>
          <span class="tooltip-value">${formatDateTimeLong(d.date)}</span>
        </div>
        ${d.parentEventId ? '<div class="tooltip-row"><span class="tooltip-label">Type:</span><span class="tooltip-value">Sub-event</span></div>' : ''}
      </div>
    `;

    const containerRect = this.container.getBoundingClientRect();
    const tooltipX = event.clientX - containerRect.left;
    const tooltipY = event.clientY - containerRect.top;

    this.tooltip
      .html(content)
      .style('opacity', 1)
      .style('left', `${tooltipX + 15}px`)
      .style('top', `${tooltipY - 10}px`);
  }

  hideTooltip() {
    if (this.tooltip) {
      this.tooltip.style('opacity', 0);
    }
  }

  highlightEventMarker(eventId, highlight) {
    if (!this.markersGroup) return;

    const marker = this.markersGroup.select(`[data-event-id="${eventId}"]`);
    if (marker.empty()) return;

    marker.select('line')
      .attr('stroke-width', highlight ? 2 : 1)
      .attr('opacity', highlight ? 1 : 0.5);

    marker.select('path')
      .attr('opacity', highlight ? 1 : 0.7)
      .attr('transform', d => {
        const x = this.xScale(new Date(d.date));
        const size = highlight ? 50 : 30;
        return `translate(${x}, 8) scale(${highlight ? 1.3 : 1})`;
      });
  }

  highlightTimelineEvent(eventId, highlight) {
    if (!this.eventGroups) return;

    this.eventGroups.each((d, i, nodes) => {
      if (d.id === eventId) {
        const g = d3.select(nodes[i]);
        const isSubEvent = d.parentEventId != null;
        
        g.select('.event-dot')
          .attr('r', highlight ? (isSubEvent ? 7 : 10) : (isSubEvent ? 5 : 8))
          .attr('filter', highlight ? 'brightness(1.2)' : null);
      }
    });
  }

  handleZoom(event) {
    this.currentTransform = event.transform;
    this.xScale = event.transform.rescaleX(this.xScaleOriginal);
    this.updateVisualization();
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

  updateVisualization() {
    // Update volume chart
    if (this.volumeLayers && this.areaGenerator) {
      this.areaGenerator.x(d => this.xScale(d.data.date));
      this.volumeLayers.attr('d', this.areaGenerator);
    }

    // Update event markers
    if (this.eventMarkers) {
      this.eventMarkers.select('line')
        .attr('x1', d => this.xScale(new Date(d.date)))
        .attr('x2', d => this.xScale(new Date(d.date)));

      this.eventMarkers.select('path')
        .attr('transform', d => `translate(${this.xScale(new Date(d.date))}, 8)`);
    }

    // Update timeline events
    if (this.eventGroups) {
      this.eventGroups.attr('transform', d => 
        `translate(${this.xScale(new Date(d.date))}, ${this.timelineHeight / 2})`
      );
    }

    // Update shared axis
    this.renderSharedAxis();
  }

  // Public method to highlight an event programmatically
  highlightEvent(eventId) {
    this.highlightEventMarker(eventId, true);
    this.highlightTimelineEvent(eventId, true);
    
    // Auto-reset after delay
    setTimeout(() => {
      this.highlightEventMarker(eventId, false);
      this.highlightTimelineEvent(eventId, false);
    }, 2000);
  }

  // Public method to zoom to a specific time range
  zoomToTimeRange(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const x0 = this.xScaleOriginal(start);
    const x1 = this.xScaleOriginal(end);
    const width = this.innerWidth;
    
    const scale = width / (x1 - x0);
    const translateX = -x0 * scale;
    
    this.svg.transition().duration(500)
      .call(this.zoom.transform, d3.zoomIdentity.translate(translateX, 0).scale(scale));
  }

  destroy() {
    if (this.svg) {
      this.svg.on('.zoom', null);
    }
    if (this.tooltip) {
      this.tooltip.remove();
    }
    super.destroy();
  }
}

export default TimelineVolumeComposite;
