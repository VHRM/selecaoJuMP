import { Injectable } from "@angular/core";
import { ProcessoTotal } from "../types/ProcessoTotal";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { env } from "src/environment/environment";

@Injectable()
export class FluxogramaApi {

    constructor(private readonly http: HttpClient) { }
    
    /**
     * getResumoProcessos
     */
    public getResumoProcessos() {
        return this.http.get<ProcessoTotal[]>(`${env.apiUrl}/api/processos/stats/`);
    }

    public getVisualization() {
        const headers = new HttpHeaders();
        headers.set('Accept', 'image/svg+xml');
        return this.http.get(`${env.apiUrl}/api/visualization/image/`, {headers, responseType: 'text'});
    }
}