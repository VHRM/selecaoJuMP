import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FluxogramaComponent } from './pages/fluxograma/fluxograma.component';

const routes: Routes = [
  {
    path: 'fluxograma',
    component: FluxogramaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FluxogramaRoutingModule { }
