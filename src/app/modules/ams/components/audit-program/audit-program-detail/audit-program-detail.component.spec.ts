import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditProgramDetailComponent } from './audit-program-detail.component';

describe('AuditProgramDetailComponent', () => {
  let component: AuditProgramDetailComponent;
  let fixture: ComponentFixture<AuditProgramDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuditProgramDetailComponent]
    });
    fixture = TestBed.createComponent(AuditProgramDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
