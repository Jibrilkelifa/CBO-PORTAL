import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TradeServiceDashboardComponent } from './tradeServiceDashboard.component';


describe('TradeServiceDashboardComponent', () => {
  let component: TradeServiceDashboardComponent;
  let fixture: ComponentFixture<TradeServiceDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradeServiceDashboardComponent]
    });
    fixture = TestBed.createComponent(TradeServiceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
