import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictDonutChartComponent } from './districtDonutChart.component';

describe('DistrictDonutChartComponent', () => {
  let component: DistrictDonutChartComponent;
  let fixture: ComponentFixture<DistrictDonutChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistrictDonutChartComponent]
    });
    fixture = TestBed.createComponent(DistrictDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
