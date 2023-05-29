import { Component, Input, Output, ChangeDetectionStrategy, OnChanges, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-fluxograma-visualizer',
  templateUrl: './fluxograma-visualizer.component.html',
  styleUrls: ['./fluxograma-visualizer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FluxogramaVisualizerComponent implements OnChanges{
  @Input() data!: XMLDocument;
  @Output() viewMovimentoDetails = new EventEmitter<string>();

  @ViewChild('frame') frame!: ElementRef<HTMLObjectElement>;

  ngOnChanges() {
    if (this.data && this.frame) {
      this.frame.nativeElement.append(this.data.documentElement);
      const svg = d3.select('svg');

      this.initializeSvg(svg);
    }
  }

  initializeSvg(svg: d3.Selection<d3.BaseType, unknown, HTMLElement, any>) {
    const context = this;
    const nodes = svg.selectAll('.node').select('a');
    nodes.each(function(datum, index, group) { 
      const node = d3.select(this);

      const id = node.attr('xlink:title')
      const xText = parseInt(node.select('text').attr('x'));
      const yText = parseInt(node.select('text').attr('y'));

      const xCorrection = -62;
      const yCorrection = -7;
      
      node.append('image')
        .attr('xlink:href', 'http://localhost:4200/assets/info.svg/')
        .attr('x', (xText + xCorrection))
        .attr('y', (yText + yCorrection))
        .attr('width', 20)
        .attr('height', 20)
        .style('cursor', 'pointer')
        .on('click', () => {
          context.openMovimentoDetails(id);
        });
     })
  }

  openMovimentoDetails(id: string) {
    this.viewMovimentoDetails.emit(id);
  }
}
