import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RCMPDashboardComponent } from './rcmpDashboard.component';


describe('RCMPDashboardComponent', () => {
  let component: RCMPDashboardComponent;
  let fixture: ComponentFixture<RCMPDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RCMPDashboardComponent]
    });
    fixture = TestBed.createComponent(RCMPDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
