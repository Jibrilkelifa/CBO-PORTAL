import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditScheduleComponent } from './audit-engagement.component';

describe('AuditScheduleComponent', () => {
  let component: AuditScheduleComponent;
  let fixture: ComponentFixture<AuditScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuditScheduleComponent]
    });
    fixture = TestBed.createComponent(AuditScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
