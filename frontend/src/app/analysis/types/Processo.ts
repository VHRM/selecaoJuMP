export interface Processo {
    NPU: string;
    pinnedMovimentosCount?: number;
    duration: number;
    movimentosCount: number;
}

export interface ProcessoByName {
    cases: Processo[];
}