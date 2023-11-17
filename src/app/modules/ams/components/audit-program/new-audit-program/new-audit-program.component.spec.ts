import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAuditProgramComponent } from './new-audit-program.component';

describe('NewAuditProgramComponent', () => {
  let component: NewAuditProgramComponent;
  let fixture: ComponentFixture<NewAuditProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAuditProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAuditProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
