import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChecklistComponent } from './view-checklist.component';

describe('ViewChecklistComponent', () => {
  let component: ViewChecklistComponent;
  let fixture: ComponentFixture<ViewChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChecklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
