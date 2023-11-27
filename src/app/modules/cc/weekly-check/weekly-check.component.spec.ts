import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyCheckComponent } from './weekly-check.component';

describe('WeeklyCheckComponent', () => {
  let component: WeeklyCheckComponent;
  let fixture: ComponentFixture<WeeklyCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeeklyCheckComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WeeklyCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
