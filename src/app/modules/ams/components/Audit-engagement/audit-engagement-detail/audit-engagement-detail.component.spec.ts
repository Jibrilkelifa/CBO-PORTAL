import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditEngagementDetailComponent } from './audit-engagement-detail.component';

describe('AuditEngagementDetailComponent', () => {
  let component: AuditEngagementDetailComponent;
  let fixture: ComponentFixture<AuditEngagementDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuditEngagementDetailComponent]
    });
    fixture = TestBed.createComponent(AuditEngagementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
