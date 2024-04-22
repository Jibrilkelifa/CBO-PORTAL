import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DistrictDashboardComponent } from './districtDashboard.component';


describe('DistrictDashboardComponent', () => {
  let component: DistrictDashboardComponent;
  let fixture: ComponentFixture<DistrictDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistrictDashboardComponent]
    });
    fixture = TestBed.createComponent(DistrictDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
