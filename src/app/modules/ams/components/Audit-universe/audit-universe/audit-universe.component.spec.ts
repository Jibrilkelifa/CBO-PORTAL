import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditUniverseComponent } from './audit-universe.component';

describe('AuditUniverseComponent', () => {
  let component: AuditUniverseComponent;
  let fixture: ComponentFixture<AuditUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuditUniverseComponent]
    });
    fixture = TestBed.createComponent(AuditUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
