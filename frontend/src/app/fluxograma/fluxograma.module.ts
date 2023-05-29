import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluxogramaComponent } from '../fluxograma/pages/fluxograma/fluxograma.component';
import { FluxogramaRoutingModule } from './fluxograma-routing.module';
import { FluxogramaStatisticsComponent } from '../fluxograma/components/fluxograma-statistics/fluxograma-statistics.component';
import { FluxogramaState } from './state/fluxograma.state';
import { FluxogramaApi } from './api/fluxograma.api';
import { FluxogramaFacade } from './fluxograma.facade';
import { FluxogramaVisualizerComponent } from './components/fluxograma-visualizer/fluxograma-visualizer.component';
import { fluxogramaInitializerProvider } from './fluxograma.initializer';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  providers: [
    FluxogramaState,
    FluxogramaApi,
    FluxogramaFacade,
    fluxogramaInitializerProvider
  ],
  declarations: [
    FluxogramaComponent,
    FluxogramaStatisticsComponent,
    FluxogramaVisualizerComponent
  ],
  imports: [
    CommonModule,
    FluxogramaRoutingModule,
    MatIconModule,
    SharedModule
  ]
})
export class FluxogramaModule { }
