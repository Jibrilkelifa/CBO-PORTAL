import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListComponent } from './checkList.component';

describe('CheckListComponent', () => {
  let component: CheckListComponent;
  let fixture: ComponentFixture<CheckListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckListComponent]
    });
    fixture = TestBed.createComponent(CheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
