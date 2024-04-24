import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShareManagementDashboardComponent } from './shareManagementDashboard.component';


describe('ShareManagementDashboardComponent', () => {
  let component: ShareManagementDashboardComponent;
  let fixture: ComponentFixture<ShareManagementDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareManagementDashboardComponent]
    });
    fixture = TestBed.createComponent(ShareManagementDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
