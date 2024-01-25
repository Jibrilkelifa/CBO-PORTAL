import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDisplay } from './display.component';

describe('ReportDisplay', () => {
  let component: ReportDisplay;
  let fixture: ComponentFixture<ReportDisplay>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportDisplay]
    });
    fixture = TestBed.createComponent(ReportDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
