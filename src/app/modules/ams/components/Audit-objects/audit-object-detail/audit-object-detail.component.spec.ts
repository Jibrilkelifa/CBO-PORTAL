import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditObjectDetailComponent } from './audit-object-detail.component';

describe('AuditObjectDetailComponent', () => {
  let component: AuditObjectDetailComponent;
  let fixture: ComponentFixture<AuditObjectDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuditObjectDetailComponent]
    });
    fixture = TestBed.createComponent(AuditObjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
