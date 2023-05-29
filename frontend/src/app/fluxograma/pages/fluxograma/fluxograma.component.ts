import { Component, OnInit } from '@angular/core';
import { FluxogramaFacade } from '../../fluxograma.facade';
import { ProcessoTotal } from '../../types/ProcessoTotal';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fluxograma',
  templateUrl: './fluxograma.component.html',
  styleUrls: ['./fluxograma.component.scss']
})
export class FluxogramaComponent implements OnInit{
  resumo!: ProcessoTotal;
  visualizacao: any = null;
  dimensions: string[] = [];

  constructor(private readonly facade: FluxogramaFacade, private readonly sanitizer: DomSanitizer, private readonly router: Router) {}

  ngOnInit(): void {
    this.getResumoProcessos();
    this.getVisualizacao();
  }

  getResumoProcessos() {
    this.facade.getResumoProcessosObservable().subscribe((resumo) => {
      this.resumo = resumo;
    })
    this.facade.getResumoProcessos();
  }

  getVisualizacao() {
    this.facade.getVisualizacaoObservable().subscribe((visualizacao) => {
      if (visualizacao) {
        const parser = new DOMParser();
        const svg = parser.parseFromString(visualizacao, 'application/xml');
        this.visualizacao = svg;
        this.dimensions = [svg.documentElement.attributes.getNamedItem('width')?.nodeValue as string, svg.documentElement.attributes.getNamedItem('height')?.nodeValue as string]
      }
    })
    this.facade.getVisualizacao();
  }

  viewMovimentoDetailsHandler(event: string) {
    this.facade.getMovimentoData(event);
    this.router.navigate(['/analysis/'])
  }
}
