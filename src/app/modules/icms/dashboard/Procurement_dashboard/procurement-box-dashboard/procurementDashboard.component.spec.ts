import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcurementDashboardComponent } from './procurementDashboard.component';


describe('ProcurementDashboardComponent', () => {
  let component: ProcurementDashboardComponent;
  let fixture: ComponentFixture<ProcurementDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcurementDashboardComponent]
    });
    fixture = TestBed.createComponent(ProcurementDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
