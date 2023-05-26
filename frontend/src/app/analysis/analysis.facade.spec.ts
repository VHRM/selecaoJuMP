import { TestBed } from '@angular/core/testing';
import { AnalysisFacade } from './analysis.facade';

describe('AnalysisFacade', () => {
  let facade: AnalysisFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    facade = TestBed.inject(AnalysisFacade)
  })
  it('should create an instance', () => {
    expect(facade).toBeTruthy();
  });
});
