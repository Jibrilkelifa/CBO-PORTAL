import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BranchDashboardComponent } from './branchDashboard.component';


describe('BranchDashboardComponent', () => {
  let component: BranchDashboardComponent;
  let fixture: ComponentFixture<BranchDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BranchDashboardComponent]
    });
    fixture = TestBed.createComponent(BranchDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
