import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyElpasedTimeComponent } from './weeklyElpasedTime.component';

describe('WeeklyElpasedTimeComponent', () => {
  let component: WeeklyElpasedTimeComponent;
  let fixture: ComponentFixture<WeeklyElpasedTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeeklyElpasedTimeComponent]
    });
    fixture = TestBed.createComponent(WeeklyElpasedTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
