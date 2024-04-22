import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementDonutChartComponent } from './procurementDonutChart.component';

describe('ProcurementDonutChartComponent', () => {
  let component: ProcurementDonutChartComponent;
  let fixture: ComponentFixture<ProcurementDonutChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcurementDonutChartComponent]
    });
    fixture = TestBed.createComponent(ProcurementDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
