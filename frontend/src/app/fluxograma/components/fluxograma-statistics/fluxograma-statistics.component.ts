import { Input, Component, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { ProcessoTotal } from '../../types/ProcessoTotal';
import * as d3 from 'd3';

@Component({
  selector: 'app-fluxograma-statistics',
  templateUrl: './fluxograma-statistics.component.html',
  styleUrls: ['./fluxograma-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FluxogramaStatisticsComponent implements OnChanges{
  @Input() data!: ProcessoTotal;

  ngOnChanges() {
  }
}
