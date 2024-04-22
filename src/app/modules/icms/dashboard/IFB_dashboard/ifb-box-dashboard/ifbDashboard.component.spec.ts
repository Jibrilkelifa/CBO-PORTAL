import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IFBDashboardComponent } from './ifbDashboard.component';


describe('IFBDashboardComponent', () => {
  let component: IFBDashboardComponent;
  let fixture: ComponentFixture<IFBDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IFBDashboardComponent]
    });
    fixture = TestBed.createComponent(IFBDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
