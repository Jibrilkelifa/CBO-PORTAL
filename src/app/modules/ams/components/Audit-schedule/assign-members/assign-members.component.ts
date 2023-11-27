import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { TeamMemberDTO } from 'src/app/modules/ams/models/team-member';
import { AuditStaffDTO } from '../../../models/auditStaff';
import { AuditStaffService } from '../../../services/audit-staff/audit-staff.service';

@Component({
  selector: 'assign-members',
  templateUrl: './assign-members.component.html',
  styleUrls: ['./assign-members.component.scss'],
})
export class AssignMembersComponent {
  savedAssignmembers: TeamMemberDTO[] = [];
  annualPlanInfo: any;
  auditScheduleInfo: any;

  public teamInfo: TeamMemberDTO = new TeamMemberDTO();
  public auditStafflist: AuditStaffDTO[] = [];
  private subscriptions: Subscription[] = [];

  @Output() onSave = new EventEmitter<TeamMemberDTO[]>();
  rows: TeamMemberDTO[] = [new TeamMemberDTO()];

  constructor(
    private auditStaffService: AuditStaffService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
  ) {
    this.annualPlanInfo = this.config.data?.annualPlanInfo;
    this.auditScheduleInfo = this.config.data?.scheduleInfo;
    console.log("kkkk", this.auditScheduleInfo);

    if (this.config.data?.savedAssignmembers) {
      this.rows = [...this.config.data.savedAssignmembers];
    } else {
      this.rows = [new TeamMemberDTO()];
    }
  }

  ngOnInit() {
    this.getActiveAuditStaffs();
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  addRow() {
    const lastRow = this.rows[this.rows.length - 1];
    if (!lastRow || (lastRow.auditStaffDTO && lastRow.auditStaffDTO.user && lastRow.teamRole)) {
      this.rows.push(new TeamMemberDTO());
    }
  }

  deleteRow(index: number) {
    if (index > -1 && index < this.rows.length) {
      this.rows.splice(index, 1);
    }
  }

  areAllRowsFilled(): boolean {
    return this.rows.every(row => row.auditStaffDTO && row.auditStaffDTO.user && row.teamRole);
  }

  getActiveAuditStaffs(): void {
    this.subscriptions.push(
      this.auditStaffService.getActiveAuditStaff().subscribe(
        (response: any) => {
          this.auditStafflist = response.result;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  saveAssignedRolesAndMembers() {
    this.savedAssignmembers = [];
    for (let row of this.rows) {
      if (row.auditStaffDTO.user && row.teamRole) {
        row.auditScheduleId = this.auditScheduleInfo.id;
        row.perdium = 1;
        this.savedAssignmembers.push(row);
      }
    }
    this.ref.close(this.savedAssignmembers);
  }
  
  
}
