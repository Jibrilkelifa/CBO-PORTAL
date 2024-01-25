import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportList } from './report-list.component';

describe('ReportList', () => {
  let component: ReportList;
  let fixture: ComponentFixture<ReportList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportList ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
