import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondePageComponent } from './responde-page.component';

describe('RespondePageComponent', () => {
  let component: RespondePageComponent;
  let fixture: ComponentFixture<RespondePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespondePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespondePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
