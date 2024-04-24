import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingOperationBarChartComponent } from './bankingOperationBarChart.component';

describe('BankingOperationBarChartComponent', () => {
  let component: BankingOperationBarChartComponent;
  let fixture: ComponentFixture<BankingOperationBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankingOperationBarChartComponent]
    });
    fixture = TestBed.createComponent(BankingOperationBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
