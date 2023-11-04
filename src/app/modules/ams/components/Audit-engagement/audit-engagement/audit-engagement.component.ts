import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { NewAuditEngagementComponent } from '../new-audit-engagement/newAuditEngagement.component';
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
  selector: 'audit-engagement-table',
  templateUrl: './audit-engagement.component.html',
  styleUrls: ['./audit-engagement.component.scss'],
})
export class AuditEngagementComponent implements OnDestroy {
  public annualPlans: AnnualPlanDTO[] = [];
  public auditSchedules: AuditScheduleDTO[] = [];

  public auditScheduleDisplay: any[] = [];

  exportColumns!: ExportColumn[];
  cols!: Column[];

  leaderSearchTerm: string = '';
  memberSearchTerm: string = '';


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
      { field: 'annualPlanName', header: 'Annual plan' },
      { field: 'leaderName', header: 'Leader' },
      { field: 'memberNames', header: 'Team members' },
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
          this.auditSchedules = response.result.map((schedule: AuditScheduleDTO) => {
            const leader = schedule.teamMembers.find(member => member.teamRole === 'Leader');
            const members = schedule.teamMembers.filter(member => member.teamRole === 'Member');
            return {
              ...schedule,
              startOn: this.datePipe.transform(schedule.startOn, 'MMMM d, y'),
              endOn: this.datePipe.transform(schedule.endOn, 'MMMM d, y'),
              leaderName: leader?.auditStaffDTO?.user?.employee?.fullName || '',
              memberNames: members.map(member => member.auditStaffDTO?.user?.employee?.fullName).join(', ') || ''
            };
          });

          this.auditScheduleDisplay = this.auditSchedules.map((obj: any) => ({
            ...obj,
            annualPlanName: obj.annualPlan.name
              ? obj.annualPlan.name
              : null,
          }));
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
    const ref = this.dialogService.open(NewAuditEngagementComponent, {
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
  getLeaderName(auditSchedule: AuditScheduleDTO): string {
    const leader = auditSchedule?.teamMembers.find(member => member.teamRole === 'Leader');
    return leader?.auditStaffDTO?.user?.employee?.fullName || '';
  }

  getMemberNames(auditSchedule: AuditScheduleDTO): string {
    const members = auditSchedule?.teamMembers
      .filter(member => member.teamRole === 'Member')
      .map(member => member.auditStaffDTO?.user?.employee?.fullName);
    return members?.join('\n') || '';
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
        const modifiedAuditScheduleDisplay = this.auditScheduleDisplay.map((schedule, index) => ({
          ...schedule,
          id: index + 1,
        }));
        (doc as any).autoTable(this.exportColumns, modifiedAuditScheduleDisplay);
        doc.save('Audit Schedule.pdf');
      });
    });
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const data = this.auditScheduleDisplay.map((schedule, index) => ({
        id: index + 1,
        'Start on': schedule.startOn,
        'End on': schedule.endOn,
        Status: schedule.status,
        'Annual plan': schedule.annualPlan.name,
        'Leader': schedule.leaderName,
        'Members': schedule.memberNames,
      }));
      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'Audit Schedule');
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
      fileName + EXCEL_EXTENSION
    );
  }
  
}
