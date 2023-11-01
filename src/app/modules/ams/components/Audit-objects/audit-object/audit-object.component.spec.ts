import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditObjectComponent } from './audit-object.component';

describe('AuditObjectComponent', () => {
  let component: AuditObjectComponent;
  let fixture: ComponentFixture<AuditObjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuditObjectComponent]
    });
    fixture = TestBed.createComponent(AuditObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
