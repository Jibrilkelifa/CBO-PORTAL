import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BankingOperationDashboardComponent } from './bankingOperation.component';


describe('BankingOperationDashboardComponent', () => {
  let component: BankingOperationDashboardComponent;
  let fixture: ComponentFixture<BankingOperationDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankingOperationDashboardComponent]
    });
    fixture = TestBed.createComponent(BankingOperationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
