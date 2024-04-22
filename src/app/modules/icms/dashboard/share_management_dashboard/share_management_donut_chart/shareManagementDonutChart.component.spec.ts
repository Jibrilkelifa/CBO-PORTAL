import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareManagementDonutChartComponent } from './shareManagementDonutChart.component';

describe('ShareManagementDonutChartComponent', () => {
  let component: ShareManagementDonutChartComponent;
  let fixture: ComponentFixture<ShareManagementDonutChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareManagementDonutChartComponent]
    });
    fixture = TestBed.createComponent(ShareManagementDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
