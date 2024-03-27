import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SMSHistoryComponent } from './smsHistory.component';


describe('SMSHistoryComponent', () => {
  let component: SMSHistoryComponent;
  let fixture: ComponentFixture<SMSHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SMSHistoryComponent]
    });
    fixture = TestBed.createComponent(SMSHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
