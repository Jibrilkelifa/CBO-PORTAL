import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorityTableComponent } from './authority-table.component';

describe('AuthorityTableComponent', () => {
  let component: AuthorityTableComponent;
  let fixture: ComponentFixture<AuthorityTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorityTableComponent]
    });
    fixture = TestBed.createComponent(AuthorityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
