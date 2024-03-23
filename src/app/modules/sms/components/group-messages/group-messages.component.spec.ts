import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMessagesComponent } from './group-messages.component';

describe('AllMessagesComponent', () => {
  let component: GroupMessagesComponent;
  let fixture: ComponentFixture<GroupMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupMessagesComponent]
    });
    fixture = TestBed.createComponent(GroupMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
