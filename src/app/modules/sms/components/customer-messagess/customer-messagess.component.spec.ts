import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMessagessComponent } from './customer-messages.component';

describe('AllMessagesComponent', () => {
  let component: CustomerMessagessComponent;
  let fixture: ComponentFixture<CustomerMessagessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerMessagessComponent]
    });
    fixture = TestBed.createComponent(CustomerMessagessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
