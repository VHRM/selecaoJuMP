import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Processo, ProcessoByName } from '../types/Processo';
import { of } from 'rxjs';
import { env } from 'src/environment/environment';

@Injectable()
export class AnalysisApi {

  constructor(private readonly http: HttpClient) { }

  public fetchProcessosData() {
    return of([
      {
        NPU: '0000000-00.0000.0.00.0000',
        movimentosCount: 1,
        duration: 10,
      },
      {
        NPU: '0000000-00.0000.0.00.0001',
        movimentosCount: 2,
        duration: 20,
      },
      {
        NPU: '0000000-00.0000.0.00.0002',
        movimentosCount: 3,
        duration: 30,
      },
      {
        NPU: '0000000-00.0000.0.00.0003',
        movimentosCount: 4,
        duration: 40,
      },
      {
        NPU: '0000000-00.0000.0.00.0004',
        movimentosCount: 5,
        duration: 50,
      },
      {
        NPU: '0000000-00.0000.0.00.0005',
        movimentosCount: 6,
        duration: 60,
      },
      {
        NPU: '0000000-00.0000.0.00.0006',
        movimentosCount: 6,
        duration: 60,
      },
      {
        NPU: '0000000-00.0000.0.00.0007',
        movimentosCount: 6,
        duration: 60,
      },
      {
        NPU: '0000000-00.0000.0.00.0008',
        movimentosCount: 6,
        duration: 60,
      },
      {
        NPU: '0000000-00.0000.0.00.0009',
        movimentosCount: 6,
        duration: 60,
      },
      {
        NPU: '0000000-00.0000.0.00.0010',
        movimentosCount: 6,
        duration: 60,
      },
      {
        NPU: '0000000-00.0000.0.00.0011',
        movimentosCount: 6,
        duration: 60,
      },
      {
        NPU: '0000000-00.0000.0.00.0012',
        movimentosCount: 6,
        duration: 60,
      },
    ] as Processo[])
  }

  public fetchProcessosDataByName(name: string) {
    return this.http.post<ProcessoByName>(`${env.apiUrl}/api/processos/`, {
      "movimento": name
    });
  }
}
