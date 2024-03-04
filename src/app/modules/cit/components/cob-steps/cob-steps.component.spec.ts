import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobStepsComponent } from './cob-steps.component';

describe('CobStepsComponent', () => {
  let component: CobStepsComponent;
  let fixture: ComponentFixture<CobStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CobStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
