import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableReportComponents } from './tableReport.component';


describe('TableReportComponents', () => {
  let component: TableReportComponents;
  let fixture: ComponentFixture<TableReportComponents>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableReportComponents]
    });
    fixture = TestBed.createComponent(TableReportComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
