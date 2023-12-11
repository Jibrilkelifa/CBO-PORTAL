import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditEngagementComponent } from './audit-engagement.component';

describe('AuditEngagementComponent', () => {
  let component: AuditEngagementComponent;
  let fixture: ComponentFixture<AuditEngagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuditEngagementComponent]
    });
    fixture = TestBed.createComponent(AuditEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
