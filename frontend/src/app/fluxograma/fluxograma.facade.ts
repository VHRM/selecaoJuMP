import { Injectable } from "@angular/core";
import { FluxogramaApi } from "./api/fluxograma.api";
import { FluxogramaState } from "./state/fluxograma.state"
import { AnalysisFacade } from "../analysis/analysis.facade";

@Injectable()
export class FluxogramaFacade {
    constructor (
        private readonly api: FluxogramaApi,
        private readonly state: FluxogramaState,
        private readonly analysisFacade: AnalysisFacade
    ) {}

    /**
     * getResumoProcessosObservable
     * @returns Observable of resumoProcessos
     */
    public getResumoProcessosObservable() {
        return this.state.getResumoProcessos();
    }

    /**
     * getResumoProcessos
     */
    public getResumoProcessos() {
        this.api.getResumoProcessos().subscribe((response) => {
            this.state.setResumoProcessos(response[0]);
        });
    }

    /**
     * getVisualizacaoObservable
     * @returns Observable of visualizacao
     */

    public getVisualizacaoObservable() {
        return this.state.getVisualizacao();
    }

    /**
     * getVisualizacao
     */
    public getVisualizacao() {
        this.api.getVisualization().subscribe((response) => {
            this.state.setVisualizacao(response)
        })
    }

    /**
     * 
     * @param value id of movimento as `string`
     */
    public getMovimentoData(value: string) {
        this.analysisFacade.fetchProcessoDataByName(value);
    }

}