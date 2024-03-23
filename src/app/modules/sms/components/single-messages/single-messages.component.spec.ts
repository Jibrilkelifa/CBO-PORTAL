import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMessagesComponent } from './single-messages.component';

describe('AllMessagesComponent', () => {
  let component: SingleMessagesComponent;
  let fixture: ComponentFixture<SingleMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleMessagesComponent]
    });
    fixture = TestBed.createComponent(SingleMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
