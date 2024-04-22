import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IFBDonutChartComponent } from './ifbDonutChart.component';

describe('IFBDonutChartComponent', () => {
  let component: IFBDonutChartComponent;
  let fixture: ComponentFixture<IFBDonutChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IFBDonutChartComponent]
    });
    fixture = TestBed.createComponent(IFBDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
