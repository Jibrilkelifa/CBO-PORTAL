import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCopStepsCopiedComponent } from './list-cop-steps-copied.component';

describe('ListCopStepsCopiedComponent', () => {
  let component: ListCopStepsCopiedComponent;
  let fixture: ComponentFixture<ListCopStepsCopiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCopStepsCopiedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCopStepsCopiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
