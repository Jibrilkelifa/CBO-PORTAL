import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobMonthlyElpasedTimeComponent } from './jobGraph.component';

describe('JobMonthlyElpasedTimeComponent', () => {
  let component: JobMonthlyElpasedTimeComponent;
  let fixture: ComponentFixture<JobMonthlyElpasedTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobMonthlyElpasedTimeComponent]
    });
    fixture = TestBed.createComponent(JobMonthlyElpasedTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
