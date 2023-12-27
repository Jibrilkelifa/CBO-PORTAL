import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditFindingsDetailComponent } from './audit-findings-detail.component';

describe('AuditFindingsDetailComponent', () => {
  let component: AuditFindingsDetailComponent;
  let fixture: ComponentFixture<AuditFindingsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuditFindingsDetailComponent]
    });
    fixture = TestBed.createComponent(AuditFindingsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
