import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditStaffComponent } from './audit-staff.component';

describe('AuditStaffComponent', () => {
  let component: AuditStaffComponent;
  let fixture: ComponentFixture<AuditStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuditStaffComponent]
    });
    fixture = TestBed.createComponent(AuditStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
