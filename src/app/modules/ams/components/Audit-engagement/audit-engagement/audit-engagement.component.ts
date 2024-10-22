import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { NewAuditEngagementComponent } from '../new-audit-engagement/newAuditEngagement.component';
import { AuditEngagementDetailComponent } from '../audit-engagement-detail/audit-engagement-detail.component';
import { NewAuditProgramComponent } from '../../audit-program/new-audit-program/new-audit-program.component';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import * as FileSaver from 'file-saver';
import { AnnualPlanDTO } from 'src/app/modules/ams/models/annualPlan';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { AuditEngagementService } from '../../../services/audit-engagement/audit-engagement.service';
import { AuditEngagementDTO } from '../../../models/audit-engagement';
import { AuditProgramDTO } from '../../../models/audit program';
import { AuditScheduleDTO } from '../../../models/auditSchedule';
import { Router } from '@angular/router';
import { AuditStaffService } from '../../../services/audit-staff/audit-staff.service';

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

  public auditEngagementDisplay: any[] = [];

  public selectedOption: string;
  public dropdownOptions = [];
  public isManager: boolean;
  public isTeamLeader: boolean;
  public isAuditee: boolean;
  public isMember: boolean;


  exportColumns!: ExportColumn[];
  cols!: Column[];

  leaderSearchTerm: string = '';
  memberSearchTerm: string = '';

  public selectedDropdown: string;
  public staffId: number;

  private subscriptions: Subscription[] = [];

  private roles = JSON.parse(localStorage.getItem("allRoles"));
  private subProcess = JSON.parse(localStorage.getItem("subProcess")).id;



  constructor(
    private auditEngagementService: AuditEngagementService,
    private dialogService: DialogService,
    private messageService: MessageService,
    private datePipe: DatePipe,
    private router: Router,
    private auditStaffService: AuditStaffService
  ) { }

  ngOnInit() {

    this.isManager = this.roles.some(obj => obj.name === "ROLE_AMS_MANAGER");
    // this.isTeamLeader = this.roles.some(obj => obj.name === "ROLE_AMS_TEAM_LEADER");

    this.isAuditee = this.roles.some(obj => obj.name === "ROLE_AMS_AUDITEE");
    // this.isMember = this.roles.some(obj => obj.name === "ROLE_AMS_MEMBER")

    this.getAuditStaffId(localStorage.getItem("id"));
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
          //if auditee filter by organization 
          if (this.isAuditee) {
            const targetSubProcess = this.subProcess.toString().trim();
            response.result = response.result.filter((item) => {
              return item.auditSchedule.auditeesOrganID === targetSubProcess;
            });


          } else {

            const targetEmployeeId = localStorage.getItem("id").toString().trim();
            response.result = response.result.filter((item) => {
              return item.auditSchedule.teamMembers.some(member => member.auditStaffDTO.employeeId === targetEmployeeId);
            });

          }



          // response.result = response.result.filter(item => item.auditeesOrganID === this.subProcess); 
          // response.result = response.result.filter(item => item.auditSchedule.auditeesOrganID === this.subProcess);
          this.auditEngagements = response.result.map((auditEngagement: AuditEngagementDTO) => {
            const leader = auditEngagement.auditSchedule.teamMembers.find(member => member.teamRole === 'Leader');
            const members = auditEngagement.auditSchedule.teamMembers.filter(member => member.teamRole === 'Member');
            return {
              ...auditEngagement,
              startOn: this.datePipe.transform(auditEngagement.auditSchedule.startOn, 'MMMM d, y'),
              endOn: this.datePipe.transform(auditEngagement.auditSchedule.endOn, 'MMMM d, y'),
              leaderName: leader?.auditStaffDTO?.fullName || '',
              status: auditEngagement.auditSchedule.status,
              memberNames: members.map(member => member.auditStaffDTO?.fullName).join(', ') || ''
            };
          });
          this.auditEngagementDisplay = this.auditEngagements.map((obj: any) => ({
            ...obj,
            annualPlanName: obj.auditSchedule.annualPlan.name
              ? obj.auditSchedule.annualPlan.name
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
  addToProgram(auditEngagement: AuditEngagementDTO): void {

    const ref = this.dialogService.open(NewAuditProgramComponent, {
      header: 'Create a new program',
      draggable: true,
      width: '50%',
      data: { auditEngagement },
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

  goToDetails(auditEngagement: AuditEngagementDTO): void {

    localStorage.setItem('currentEngagement', JSON.stringify(auditEngagement));
    this.router.navigate(['ams/audit-engagement-details']);

  }

  findAuditEngagementByStatus(addDivForm: NgForm): void {
    this.subscriptions.push(
      this.auditEngagementService
        .getEngagementByStatus(addDivForm.value.selectedDropdown)
        .subscribe(
          (response: any) => {
            if (response.result) {
              if (this.isAuditee) {
                const targetSubProcess = this.subProcess.toString().trim();
                response.result = response.result.filter((item) => {
                  return item.auditSchedule.auditeesOrganID === targetSubProcess;
                });
    
    
              }else{
    
                const targetEmployeeId = localStorage.getItem("id").toString().trim();
                response.result = response.result.filter((item) => {
                  return item.auditSchedule.teamMembers.some(member => member.auditStaffDTO.employeeId === targetEmployeeId);
                });
     
              }

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
              if (this.isAuditee) {
                const targetSubProcess = this.subProcess.toString().trim();
                response.result = response.result.filter((item) => {
                  return item.auditSchedule.auditeesOrganID === targetSubProcess;
                });
    
    
              }else{
    
                const targetEmployeeId = localStorage.getItem("id").toString().trim();
                response.result = response.result.filter((item) => {
                  return item.auditSchedule.teamMembers.some(member => member.auditStaffDTO.employeeId === targetEmployeeId);
                });
     
              }

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
              if (this.isAuditee) {
                const targetSubProcess = this.subProcess.toString().trim();
                response.result = response.result.filter((item) => {
                  return item.auditSchedule.auditeesOrganID === targetSubProcess;
                });
    
    
              }else{
    
                const targetEmployeeId = localStorage.getItem("id").toString().trim();
                response.result = response.result.filter((item) => {
                  return item.auditSchedule.teamMembers.some(member => member.auditStaffDTO.employeeId === targetEmployeeId);
                });
     
              }

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
    const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => `${startYear + i}/${startYear + i + 1}`);
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
    return leader?.auditStaffDTO?.fullName || '';
  }

  getMemberNames(auditEngagement: AuditEngagementDTO): string {
    const members = auditEngagement.auditSchedule?.teamMembers
      .filter(member => member.teamRole === 'Member')
      .map(member => member.auditStaffDTO?.fullName);
    return members?.join('\n') || '';
  }

  getAuditStaffId(employeeId: string) {

    this.auditStaffService.getAuditStaffByEmployeeId(employeeId).subscribe(
      (response: any) => {
        localStorage.setItem("auditStaffId", response);
        this.staffId = response;
        this.getAllEngagementOfCurrentYear();

      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )

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
        const modifiedAuditEngagementDisplay = this.auditEngagementDisplay.map((engagement, index) => ({
          ...engagement,
          id: index + 1,
        }));
        (doc as any).autoTable(this.exportColumns, modifiedAuditEngagementDisplay);
        doc.save('Audit Engagement.pdf');
      });
    });
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const data = this.auditEngagementDisplay.map((engagement, index) => ({
        id: index + 1,
        'Start on': engagement.auditSchedule.startOn,
        'End on': engagement.auditSchedule.endOn,
        Status: engagement.auditSchedule.status,
        'Annual plan': engagement.auditSchedule.annualPlan.name,
      }));
      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'Audit Engagement');
    });
  }

  exportCsv() {
    const header = ['Id', 'Start on', 'End on', 'Status', 'Annual plan'];

    const data = this.auditEngagementDisplay.map((engagement, index) => ({
      Id: index + 1,
      'Start on': engagement.auditSchedule.startOn,
      'End on': engagement.auditSchedule.endOn,
      Status: engagement.auditSchedule.status,
      'Annual plan': engagement.auditSchedule.annualPlan.name,
    }));

    const csvContent = this.convertArrayOfObjectsToCSV(data, header);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    FileSaver.saveAs(blob, 'Audit engagement.csv');
  }

  convertArrayOfObjectsToCSV(data, header) {
    const csv = data.map((row) => {
      return header.map((fieldName) => {
        const value = row[fieldName];
        return this.escapeCSV(value);
      }).join(',');
    });

    return [header.join(','), ...csv].join('\n');
  }

  escapeCSV(value) {
    if (typeof value === 'string') {
      return `"${value.replace(/"/g, '""')}"`;
    }
    return value;
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
