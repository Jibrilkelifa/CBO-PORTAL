import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskItemComponent } from './risk-item.component';

describe('RiskItemComponent', () => {
  let component: RiskItemComponent;
  let fixture: ComponentFixture<RiskItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiskItemComponent]
    });
    fixture = TestBed.createComponent(RiskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
