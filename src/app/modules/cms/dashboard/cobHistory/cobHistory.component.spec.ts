import { ComponentFixture, TestBed } from '@angular/core/testing';
import { COBHistoryComponent } from './cobHistory.component';


describe('COBHistoryComponent', () => {
  let component: COBHistoryComponent;
  let fixture: ComponentFixture<COBHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [COBHistoryComponent]
    });
    fixture = TestBed.createComponent(COBHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
