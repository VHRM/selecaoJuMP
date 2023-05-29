import { TestBed } from '@angular/core/testing';

import { FluxogramaApi } from './fluxograma.api';

describe('AnalysisApiService', () => {
  let service: FluxogramaApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FluxogramaApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
