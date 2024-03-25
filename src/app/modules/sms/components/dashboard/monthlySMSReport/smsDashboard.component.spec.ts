import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsDashboardComponent } from './smsDashboard.component';

describe('SmsDashboardComponent', () => {
  let component: SmsDashboardComponent;
  let fixture: ComponentFixture<SmsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmsDashboardComponent]
    });
    fixture = TestBed.createComponent(SmsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
