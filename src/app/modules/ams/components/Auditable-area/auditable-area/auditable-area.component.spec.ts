import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditableAreaComponent } from './auditable-area.component';

describe('AuditableAreaComponent', () => {
  let component: AuditableAreaComponent;
  let fixture: ComponentFixture<AuditableAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuditableAreaComponent]
    });
    fixture = TestBed.createComponent(AuditableAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
