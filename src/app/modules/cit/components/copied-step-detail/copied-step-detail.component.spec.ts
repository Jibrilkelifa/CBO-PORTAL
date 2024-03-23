import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopiedStepDetailComponent } from './copied-step-detail.component';

describe('CopiedStepDetailComponent', () => {
  let component: CopiedStepDetailComponent;
  let fixture: ComponentFixture<CopiedStepDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopiedStepDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopiedStepDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
