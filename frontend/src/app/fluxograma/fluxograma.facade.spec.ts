import { TestBed } from '@angular/core/testing';
import { FluxogramaFacade } from './fluxograma.facade';

describe('FluxogramaFacade', () => {
  let facade: FluxogramaFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    facade = TestBed.inject(FluxogramaFacade)
  })
  it('should create an instance', () => {
    expect(facade).toBeTruthy();
  });
});
