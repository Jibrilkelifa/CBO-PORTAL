import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { NewAuditEngagementComponent } from '../new-audit-engagement/newAuditEngagement.component';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import * as FileSaver from 'file-saver';
import { AnnualPlanDTO } from 'src/app/modules/ams/models/annualPlan';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { AuditEngagementService } from '../../../services/audit-engagement/audit-engagement.service';
import { AuditEngagementDTO } from '../../../models/audit-engagement';

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
  public auditEngagements: AuditEngagementDTO[] = [];

  public auditScheduleDisplay: any[] = [];

  public selectedOption: string;
  public dropdownOptions = [];

  exportColumns!: ExportColumn[];
  cols!: Column[];

  leaderSearchTerm: string = '';
  memberSearchTerm: string = '';

  public selectedDropdown: string;

  private subscriptions: Subscription[] = [];

  constructor(
    private auditEngagementService: AuditEngagementService,
    private dialogService: DialogService,
    private messageService: MessageService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.getAllEngagementOfCurrentYear();
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'startOn', header: 'Start on' },
      { field: 'endOn', header: 'End on' },
      { field: 'status', header: 'Status' },
      { field: 'annualPlanName', header: 'Annual plan' },
    ];

    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));
  }

  getAllEngagementOfCurrentYear(): void {
    this.subscriptions.push(
      this.auditEngagementService.getAllEngagementOfCurrentYear().subscribe(
        (response: any) => {
          this.auditEngagements = response.result.map((auditEngagment: AuditEngagementDTO) => {
            const leader = auditEngagment.auditSchedule.teamMembers.find(member => member.teamRole === 'Leader');
            const members = auditEngagment.auditSchedule.teamMembers.filter(member => member.teamRole === 'Member');
            return {
              ...auditEngagment,
              startOn: this.datePipe.transform(auditEngagment.auditSchedule.startOn, 'MMMM d, y'),
              endOn: this.datePipe.transform(auditEngagment.auditSchedule.endOn, 'MMMM d, y'),
              leaderName: leader?.auditStaffDTO?.user?.employee?.fullName || '',
              memberNames: members.map(member => member.auditStaffDTO?.user?.employee?.fullName).join(', ') || ''
            };
          });

          this.auditScheduleDisplay = this.auditEngagements.map((obj: any) => ({
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


  updateAuditSchedule(id: number): void {
    const auditSchedule = this.auditEngagements.find(
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
        this.getAllEngagementOfCurrentYear();
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

  findAuditEngagementByStatus(addDivForm: NgForm): void {
    this.subscriptions.push(
      this.auditEngagementService
        .getEngagementByStatus(addDivForm.value.selectedDropdown)
        .subscribe(
          (response: any) => {
            if (response.result) {
              this.auditEngagements = response.result.map(
                (schedule: AuditEngagementDTO) => ({
                  ...schedule,
                  startOn: this.datePipe.transform(schedule.auditSchedule.startOn, 'MMMM d, y'),
                  endOn: this.datePipe.transform(schedule.auditSchedule.endOn, 'MMMM d, y'),
                })
              );
            }
            else {
              this.auditEngagements = [];
            }
          },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
        )
    );
  }

  findAuditEngagementByYear(addDivForm: NgForm): void {
    this.subscriptions.push(
      this.auditEngagementService
        .getEngagementByYear(addDivForm.value.selectedDropdown)
        .subscribe(
          (response: any) => {
            if (response.result) {
              this.auditEngagements = response.result.map(
                (schedule: AuditEngagementDTO) => ({
                  ...schedule,
                  startOn: this.datePipe.transform(schedule.auditSchedule.startOn, 'MMMM d, y'),
                  endOn: this.datePipe.transform(schedule.auditSchedule.endOn, 'MMMM d, y'),
                })
              );
            }
            else {
              this.auditEngagements = [];
            }
          },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
        )
    );
  }

  findAuditEngagementByQuarter(addDivForm: NgForm): void {
    this.subscriptions.push(
      this.auditEngagementService
        .getEngagementByQuarter(addDivForm.value.selectedDropdown)
        .subscribe(
          (response: any) => {
            if (response.result) {
              this.auditEngagements = response.result.map(
                (schedule: AuditEngagementDTO) => ({
                  ...schedule,
                  startOn: this.datePipe.transform(schedule.auditSchedule.startOn, 'MMMM d, y'),
                  endOn: this.datePipe.transform(schedule.auditSchedule.endOn, 'MMMM d, y'),
                })
              );
            }
            else {
              this.auditEngagements = [];
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
    const years = Array.from({length: endYear - startYear + 1}, (_, i) => `${startYear + i}/${startYear + i + 1}`);
    return years;
  }
  
  onOptionChange(event) {
    switch (event.value) {
      case 'quarter':
        this.dropdownOptions = ['1', '2', '3', '4'];
        break;
      case 'year':
        this.dropdownOptions = this.getYears();
        break;
      case 'status':
        this.dropdownOptions = ['Closed', 'Field work', 'Pree audit', 'Follow up']; 
        break;
    }
  }
  
  

  getPlaceholder(): string {
    switch (this.selectedOption) {
      case 'quarter':
        return 'Select Quarter';
      case 'year':
        return 'Select Year';
      case 'status':
        return 'Select Status';
      default:
        return 'Select Value';
    }
  }
  

  findAuditEngagement(addDivForm: NgForm): void {
    switch (this.selectedOption) {
      case 'quarter':
        this.findAuditEngagementByQuarter(addDivForm);
        break;
      case 'year':
        this.findAuditEngagementByYear(addDivForm);
        break;
      case 'status':
        this.findAuditEngagementByStatus(addDivForm);
        break;
    }
  }
  

  getLeaderName(auditEngagement: AuditEngagementDTO): string {
    const leader = auditEngagement?.auditSchedule.teamMembers.find(member => member.teamRole === 'Leader');
    return leader?.auditStaffDTO?.user?.employee?.fullName || '';
  }

  getMemberNames(auditEngagement: AuditEngagementDTO): string {
    const members = auditEngagement.auditSchedule?.teamMembers
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
