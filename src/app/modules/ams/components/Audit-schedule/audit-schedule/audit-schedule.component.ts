import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { NewAuditScheduleComponent } from '../new-audit-schedule/newAuditSchedule.component';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import * as FileSaver from 'file-saver';
import { AuditScheduleService } from 'src/app/modules/ams/services/audit-schedule/audit-schedule.service';
import { AnnualPlanService } from 'src/app/modules/ams/services/annual-plan/annual-plan.service';
import { AnnualPlanDTO } from 'src/app/modules/ams/models/annualPlan';
import { AuditScheduleDTO } from 'src/app/modules/ams/models/auditSchedule';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';

interface ExportColumn {
  title: string;
  dataKey: string;
}

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

@Component({
  selector: 'audit-universe-table',
  templateUrl: './audit-schedule.component.html',
  styleUrls: ['./audit-schedule.component.scss'],
})
export class AuditScheduleComponent implements OnDestroy {
  public annualPlans: AnnualPlanDTO[] = [];
  public auditSchedules: AuditScheduleDTO[] = [];

  public auditUniverseDisplay: any[] = [];

  exportColumns!: ExportColumn[];
  cols!: Column[];

  public dropdownOptions = ['1', '2', '3', '4'];
  public selectedDropdown: string;

  private subscriptions: Subscription[] = [];

  constructor(
    private auditPlanService: AnnualPlanService,
    private auditScheduleService: AuditScheduleService,
    private dialogService: DialogService,
    private messageService: MessageService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.getAuditSchedules();
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'startOn', header: 'Start on' },
      { field: 'endOn', header: 'End on' },
      { field: 'status', header: 'Status' },
      { field: 'auditEngagementName', header: 'Auditable engagement' },
      { field: 'teamMembersName', header: 'Team members' },
      { field: 'annualPlanName', header: 'Annual plan' },
    ];

    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));
  }

  getAuditSchedules(): void {
    this.subscriptions.push(
      this.auditScheduleService.getAuditSchedules().subscribe(
        (response: any) => {
          console.log("2222" , response);
          this.auditSchedules = response.result.map(
            (schedule: AuditScheduleDTO) => ({
              ...schedule,
              startOn: this.datePipe.transform(schedule.startOn, 'MMMM d, y'),
              endOn: this.datePipe.transform(schedule.endOn, 'MMMM d, y'),
            })
          );
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  getAnnualPlans(): void {
    this.subscriptions.push(
      this.auditPlanService.getAnnualPlans().subscribe(
        (response: any) => {
          this.annualPlans = response.result;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  updateAuditSchedule(id: number): void {
    const auditSchedule = this.auditSchedules.find(
      (schedule) => schedule.id === id
    );
    console.log("1111" , auditSchedule);
    
    const ref = this.dialogService.open(NewAuditScheduleComponent, {
      header: 'Update audit schedule',
      width: '50%',
      data: { auditSchedule },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe((response: any) => {
        if (response.status) {
          this.getAuditSchedules();
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

  submitAuditScheduleQuarter(addDivForm: NgForm): void {
    const auditSchedule = new AuditScheduleDTO();
    auditSchedule.quarter = addDivForm.value.selectedDropdown;
    this.subscriptions.push(
      this.auditScheduleService
        .getAuditSchedulesByQuarter(auditSchedule)
        .subscribe(
          (response: any) => {
            if (response.result) {
              this.auditSchedules = response.result.map(
                (schedule: AuditScheduleDTO) => ({
                  ...schedule,
                  startOn: this.datePipe.transform(schedule.startOn, 'MMMM d, y'),
                  endOn: this.datePipe.transform(schedule.endOn, 'MMMM d, y'),
                })
              );
            }
            else {
              this.auditSchedules = [];
            }
          },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
        )
    );
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
        (doc as any).autoTable(this.exportColumns, this.auditSchedules);
        doc.save('audit-universe.pdf');
      });
    });
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.auditSchedules);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'products');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }
}
