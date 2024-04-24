import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchDonutChartComponent } from './financeDonutChart.component';

describe('BranchDonutChartComponent', () => {
  let component: BranchDonutChartComponent;
  let fixture: ComponentFixture<BranchDonutChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BranchDonutChartComponent]
    });
    fixture = TestBed.createComponent(BranchDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
