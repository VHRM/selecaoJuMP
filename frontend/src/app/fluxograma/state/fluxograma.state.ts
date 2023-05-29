import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { ProcessoTotal } from "../types/ProcessoTotal";

@Injectable()
export class FluxogramaState {
    private readonly resumoState = new BehaviorSubject({} as ProcessoTotal)
    private readonly visualizacaoState = new BehaviorSubject(null as any)

    /**
     * getResumoProcessos
     * @returns observable resumoState
     */
    public getResumoProcessos() {
        return this.resumoState.asObservable();
    }
    
    /**
     * setResumoProcesso
     * @param value
     * @emits value
     */
    public setResumoProcessos(value: ProcessoTotal) {
        this.resumoState.next(value);
    }

    /**
     * getVisualizacao
     * @returns observable visualizacaoState
     */
    public getVisualizacao() {
        return this.visualizacaoState.asObservable();
    }

    /**
     * setVisualizacao
     * @param value
     * @emits value
     */
    public setVisualizacao(value: string) {
        this.visualizacaoState.next(value);
    }

        
}