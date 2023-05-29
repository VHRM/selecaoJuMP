import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxogramaVisualizerComponent } from './fluxograma-visualizer.component';

describe('FluxogramaVisualizerComponent', () => {
  let component: FluxogramaVisualizerComponent;
  let fixture: ComponentFixture<FluxogramaVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxogramaVisualizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluxogramaVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
