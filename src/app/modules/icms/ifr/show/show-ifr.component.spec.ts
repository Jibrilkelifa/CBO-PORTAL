import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIFRComponent } from './show-ifr.component';

describe('ShowIFRComponent', () => {
  let component: ShowIFRComponent;
  let fixture: ComponentFixture<ShowIFRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowIFRComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ShowIFRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
