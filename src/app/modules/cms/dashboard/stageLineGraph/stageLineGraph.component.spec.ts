import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StageLineGraphComponent } from './stageLineGraph.component';


describe('StageLineGraphComponent', () => {
  let component: StageLineGraphComponent;
  let fixture: ComponentFixture<StageLineGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StageLineGraphComponent]
    });
    fixture = TestBed.createComponent(StageLineGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
