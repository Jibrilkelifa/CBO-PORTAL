import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinanceDashboardComponent } from './financeDashboard.component';


describe('FinanceDashboardComponent', () => {
  let component: FinanceDashboardComponent;
  let fixture: ComponentFixture<FinanceDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceDashboardComponent]
    });
    fixture = TestBed.createComponent(FinanceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
