import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxogramaStatisticsComponent } from './fluxograma-statistics.component';

describe('FluxogramaStatisticsComponent', () => {
  let component: FluxogramaStatisticsComponent;
  let fixture: ComponentFixture<FluxogramaStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxogramaStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluxogramaStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
