import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentMessagesComponent } from './sent-messages.component';

describe('AllMessagesComponent', () => {
  let component: SentMessagesComponent;
  let fixture: ComponentFixture<SentMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentMessagesComponent]
    });
    fixture = TestBed.createComponent(SentMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
