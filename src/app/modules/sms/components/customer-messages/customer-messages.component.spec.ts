import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMessagesComponent } from './customer-messages.component';

describe('AllMessagesComponent', () => {
  let component: CustomerMessagesComponent;
  let fixture: ComponentFixture<CustomerMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerMessagesComponent]
    });
    fixture = TestBed.createComponent(CustomerMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
