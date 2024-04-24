import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingOperationDonutChartComponent } from './bankingOperationDonutChart.component';

describe('BankingOperationDonutChartComponent', () => {
  let component: BankingOperationDonutChartComponent;
  let fixture: ComponentFixture<BankingOperationDonutChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankingOperationDonutChartComponent]
    });
    fixture = TestBed.createComponent(BankingOperationDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
