import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { NewAuditEngagementComponent } from '../new-audit-engagement/newAuditEngagement.component';
import { NewAuditProgramComponent } from '../../audit-program/new-audit-program/new-audit-program.component';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import * as FileSaver from 'file-saver';
import { AnnualPlanDTO } from '../../../models/annualPlan';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { AuditEngagementService } from '../../../services/audit-engagement/audit-engagement.service';
import { AuditEngagementDTO } from '../../../models/audit-engagement';
import { AuditProgramDTO } from '../../../models/audit program';
import { AuditScheduleDTO } from '../../../models/auditSchedule';

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
  selector: 'audit-engagement-detail-table',
  templateUrl: './audit-engagement-detail.component.html',
  styleUrls: ['./audit-engagement-detail.component.scss'],
})
export class AuditEngagementDetailComponent implements OnDestroy {
  public annualPlans: AnnualPlanDTO[] = [];
  public auditEngagements: AuditEngagementDTO[] = [];


  public auditEngagementDisplay: any[] = [];

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

    this.auditEngagements[0] = this.auditEngagementService.selectedAuditEngagement;
    console.log(this.auditEngagementService.selectedAuditEngagement);
  }



  // updateAuditSchedule(id: number): void {
  //   const auditSchedule = this.auditEngagements.find(
  //     (schedule) => schedule.id === id
  //   );
  //   const ref = this.dialogService.open(NewAuditEngagementComponent, {
  //     header: 'Update audit schedule',
  //     width: '50%',
  //     data: { auditSchedule },
  //     contentStyle: { 'min-height': 'auto', overflow: 'auto' },
  //     baseZIndex: 10000,
  //   });

  //   ref.onClose.subscribe((response: any) => {
  //     if (response.status) {
  //       this.getAllEngagementOfCurrentYear();
  //       this.messageService.add({
  //         severity: 'success',
  //         summary: 'Success',
  //         detail: response.message,
  //       });
  //     } else {
  //       this.messageService.add({
  //         severity: 'error',
  //         summary: 'Failed',
  //         detail: response.message,
  //       });
  //     }

  //   });
  // }

  // addToProgram(auditSchedule: AuditScheduleDTO): void {
  //   console.log(auditSchedule);
  //   const ref = this.dialogService.open(NewAuditProgramComponent, {
  //     header: 'Create a new program',
  //     draggable: true,
  //     width: '50%',
  //     data: { auditSchedule },
  //     contentStyle: { 'min-height': 'auto', overflow: 'auto' },
  //     baseZIndex: 10000,
  //   });
  //   ref.onClose.subscribe((response: any) => {
  //     if (response.status) {
  //       this.getAllEngagementOfCurrentYear();
  //       this.messageService.add({
  //         severity: 'success',
  //         summary: 'Success',
  //         detail: response.message,
  //       });
  //     } else {
  //       this.messageService.add({
  //         severity: 'error',
  //         summary: 'Failed',
  //         detail: response.message,
  //       });
  //     }
  //   });
  // }










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








}
