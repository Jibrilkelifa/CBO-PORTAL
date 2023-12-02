import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { NewAuditProgramComponent } from '../new-audit-program/new-audit-program.component';
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
import { AuditProgramService } from '../../../services/auidit-program/audit-program.service';

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
  selector: 'audit-program-detail-table',
  templateUrl: './audit-program-detail.component.html',
  styleUrls: ['./audit-program-detail.component.scss'],
})
export class AuditProgramDetailComponent implements OnDestroy {
  public annualPlans: AnnualPlanDTO[] = [];
  public auditEngagements: AuditEngagementDTO[] = [];
  public auditPrograms: AuditProgramDTO[] = [];

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
    private auditProgramService: AuditProgramService,
    private dialogService: DialogService,
    private messageService: MessageService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.auditEngagements[0] = this.auditEngagementService.selectedAuditEngagement;
    this.auditPrograms[0] = this.auditProgramService.selectedAuditProgram;
    console.log(this.auditPrograms[0]);
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
