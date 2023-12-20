import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AnnualPlanService } from 'src/app/modules/ams/services/annual-plan/annual-plan.service';
import { AnnualPlanDTO } from 'src/app/modules/ams/models/annualPlan';
import { Subscription } from 'rxjs';
import * as FileSaver from 'file-saver';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}
interface ExportColumn {
  title: string;
  dataKey: string;
}

@Component({
  selector: 'annual-plan-table',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class Report {
  public annualPlans: AnnualPlanDTO[] = [];
  public risk: AnnualPlanDTO[] = [];

  public annualPlanDisplay: any[] = [];

  public dropdownOptions = this.getYears();
  public selectedDropdown: string;

  public annualInfo: AnnualPlanDTO;
  selectedAnnualInfo: AnnualPlanDTO;

  exportColumns!: ExportColumn[];
  cols!: Column[];


  private subscriptions: Subscription[] = [];

  constructor(
    private annualPlanService: AnnualPlanService,
    private dialogService: DialogService,
    private messageService: MessageService,
    private datePipe: DatePipe,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // if (localStorage.getItem("currentEngagement")) {
    //   this.auditEngagements[0]  =  JSON.parse(localStorage.getItem("currentEngagement"));
    //   this.getAuditProgram(this.auditEngagements[0].id);
    // }  
  }

  getAnnualPlans(): void {
    this.subscriptions.push(
      this.annualPlanService.getAnnualPlans().subscribe(
        (response: any) => {
          this.annualPlans = response.result;
          this.annualPlanDisplay = this.annualPlans.map((obj: any) => ({
            ...obj,
            auditaUniverseName: obj.auditUniverse
              ? obj.auditUniverse.name
              : null,
          }));
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  submitAuditPlanYear(addDivForm: NgForm): void {
    const annualPlan = new AnnualPlanDTO();
    annualPlan.year = addDivForm.value.selectedDropdown;
    this.subscriptions.push(
      this.annualPlanService
        .getAnnualPlansByYear(annualPlan)
        .subscribe(
          (response: any) => {
            if (response.result) {
              this.annualPlans = response.result;
            }
            else {
              this.annualPlans = [];
            }
          },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
        )
    );
  }



  getYears(): string[] {
    const startYear = 2024;
    const endYear = 2050;
    const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => `${startYear + i}/${startYear + i + 1}`);
    return years;
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  exportPdf() {
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
        const doc = new jsPDF.default('p', 'px', 'a4');

        const modifiedAnnualPlanDisplay = this.annualPlanDisplay.map((plan, index) => ({
          ...plan,
          id: index + 1,
        }));

        (doc as any).autoTable(this.exportColumns, modifiedAnnualPlanDisplay);
        doc.save('Annual plan.pdf');
      });
    });
  }



  exportExcel() {
    import('xlsx').then((xlsx) => {
      const data = this.annualPlanDisplay.map((plan, index) => ({
        Id: index + 1,
        Name: plan.name,
        Description: plan.description,
        Year: plan.year,
        'Risk Score': plan.riskScore,
        'Risk Level': plan.riskLevel,
        Status: plan.status
      }));
      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      const EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      const dataBlob = new Blob([excelBuffer], { type: EXCEL_TYPE });
      this.saveAsExcelFile(dataBlob, 'Annual plan');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_EXTENSION = '.xlsx';
    FileSaver.saveAs(
      buffer,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }
}
