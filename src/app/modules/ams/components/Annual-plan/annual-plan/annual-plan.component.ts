import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AnnualPlanService } from 'src/app/modules/ams/services/annual-plan/annual-plan.service';
import { AnnualPlanDTO } from 'src/app/modules/ams/models/annualPlan';
import { NewAnnualPlanComponent } from '../new-annual-plan/newAnnualPlan.component';
import { Subscription } from 'rxjs';
import * as FileSaver from 'file-saver';
import { AutoGenerateAnnualPlanComponent } from 'src/app/modules/ams/components/Annual-plan/auto-geneerate-annualPlan/auto-generate-annualPlan.component';
import { NewAuditScheduleComponent } from '../../Audit-schedule/new-audit-schedule/newAuditSchedule.component';

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
  templateUrl: './annual-plan.component.html',
  styleUrls: ['./annual-plan.component.scss'],
})
export class AnnualPlanComponent {
  public annualPlans: AnnualPlanDTO[] = [];
  public risk: AnnualPlanDTO[] = [];

  public annualPlanDisplay: any[] = [];

  public annualPlanR: AnnualPlanDTO[] = [];
  public annualInfo: AnnualPlanDTO;
  selectedAnnualInfo: AnnualPlanDTO;

  exportColumns!: ExportColumn[];
  cols!: Column[];

  private subscriptions: Subscription[] = [];

  constructor(
    private annualPlanService: AnnualPlanService,
    private dialogService: DialogService,
    private messageService: MessageService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getAnnualPlans();
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'description', header: 'Description' },
      { field: 'year', header: 'Year' },
      { field: 'auditaUniverseName', header: 'Audit Universe' },
      { field: 'riskScore', header: 'Risk score' },
      { field: 'riskLevel', header: 'Risk Level' },
      { field: 'status', header: 'Status' },
    ];

    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));
  }

  generateAnnualPlan(): void {
    const ref = this.dialogService.open(AutoGenerateAnnualPlanComponent, {
      header: 'Generate Annual Plan',
      width: '50%',
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe((response: any) => {
      if (response.status) {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.message,
        });
        this.annualPlans = response.result;
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Failed',
          detail: response.message,
        });
      }
    });
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

  addToAuditSchedule(annualPlan: AnnualPlanDTO): void {
    const ref = this.dialogService.open(NewAuditScheduleComponent, {
      header: 'Create a new audit schedule',
      draggable: true,
      width: '50%',
      data: { annualPlan },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });
    ref.onClose.subscribe((response: any) => {
      if (response.status) {
        this.getAnnualPlans();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.message,
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Failed',
          detail: response.message,
        });
      }
    });
  }

  createNewAnnualPlan(): void {
    const ref = this.dialogService.open(NewAnnualPlanComponent, {
      header: 'Create a new audit plan',
      width: '50%',
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe((response: any) => {
      if (response.status) {
        this.getAnnualPlans();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.message,
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Failed',
          detail: response.message,
        });
      }
    });
  }

  updateAnnualPlan(id: number): void {
    const annualPlan = this.annualPlans.find((plan) => plan.id === id);
    const ref = this.dialogService.open(NewAnnualPlanComponent, {
      header: 'Update annual plan',
      width: '50%',
      data: { annualPlan },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe((response: any) => {
      if (response) {
        this.annualPlans = this.annualPlans.map((plan) =>
          plan.id === response.id ? response : plan
        );
        if (response.status) {
          this.getAnnualPlans();
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: response.message,
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Failed',
            detail: response.message,
          });
        }
        this.cd.detectChanges();
      }
    });
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
        (doc as any).autoTable(this.exportColumns, this.annualPlanDisplay);
        doc.save('Annual plan.pdf');
      });
    });
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const data = this.annualPlanDisplay.map(plan => ({
        id: plan.id,
        name: plan.name,
        description: plan.description,
        year: plan.year,
        auditaUniverseName: plan.auditaUniverseName,
        riskScore: plan.riskScore,
        riskLevel: plan.riskLevel,
        status: plan.status
      }));
      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      const EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      const dataBlob = new Blob([excelBuffer], {type: EXCEL_TYPE});
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
