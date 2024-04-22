import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RCMPDonutChartComponent } from './rcmpDonutChart.component';

describe('RCMPDonutChartComponent', () => {
  let component: RCMPDonutChartComponent;
  let fixture: ComponentFixture<RCMPDonutChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RCMPDonutChartComponent]
    });
    fixture = TestBed.createComponent(RCMPDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
