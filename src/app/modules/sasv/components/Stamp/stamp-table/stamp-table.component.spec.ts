import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StampTableComponent } from './stamp-table.component';

describe('StampTableComponent', () => {
  let component: StampTableComponent;
  let fixture: ComponentFixture<StampTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StampTableComponent]
    });
    fixture = TestBed.createComponent(StampTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
