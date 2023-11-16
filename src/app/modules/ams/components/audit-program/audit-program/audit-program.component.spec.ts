import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditProgramComponent } from './audit-program.component';

describe('AuditProgramComponent', () => {
  let component: AuditProgramComponent;
  let fixture: ComponentFixture<AuditProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
