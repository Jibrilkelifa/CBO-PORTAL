import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnusualChartComponents } from './unusualJobs.component';


describe('UnusualChartComponents', () => {
  let component: UnusualChartComponents;
  let fixture: ComponentFixture<UnusualChartComponents>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnusualChartComponents]
    });
    fixture = TestBed.createComponent(UnusualChartComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
