import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyElpasedTimeComponent } from './monthlyElpasedTime.component';

describe('MonthlyElpasedTimeComponent', () => {
  let component: MonthlyElpasedTimeComponent;
  let fixture: ComponentFixture<MonthlyElpasedTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyElpasedTimeComponent]
    });
    fixture = TestBed.createComponent(MonthlyElpasedTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
