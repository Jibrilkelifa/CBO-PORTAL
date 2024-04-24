import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeServiceDonutChartComponent } from './tradeServiceDonutChart.component';

describe('TradeServiceDonutChartComponent', () => {
  let component: TradeServiceDonutChartComponent;
  let fixture: ComponentFixture<TradeServiceDonutChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradeServiceDonutChartComponent]
    });
    fixture = TestBed.createComponent(TradeServiceDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
