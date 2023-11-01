import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/modules/sasv/models/employee';
import { AuditScheduleService } from 'src/app/modules/ams/services/audit-schedule/audit-schedule.service';
import { TeamMemberDTO } from 'src/app/modules/ams/models/team-member';

@Component({
  selector: 'assign-members',
  templateUrl: './assign-members.component.html',
  styleUrls: ['./assign-members.component.scss'],
})
export class AssignMembersComponent {
  savedAssignmembers: TeamMemberDTO[] = [];
  annualPlanInfo: any;

  public teamInfo: TeamMemberDTO = new TeamMemberDTO();
  public employeeslist: Employee[] = [];
  private subscriptions: Subscription[] = [];

  @Output() onSave = new EventEmitter<TeamMemberDTO[]>();
  rows: TeamMemberDTO[] = [new TeamMemberDTO()];

  constructor(
    private auditScheduleService: AuditScheduleService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
  ) {
    this.annualPlanInfo = this.config.data?.annualPlanInfo;
    if (this.config.data?.savedAssignmembers) {
      this.rows = [...this.config.data.savedAssignmembers];
    } else {
      this.rows = [new TeamMemberDTO()];
    }
  }

  ngOnInit() {
    this.getAuditUsers();
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  addRow() {
    const lastRow = this.rows[this.rows.length - 1];
    if (!lastRow || (lastRow.user && lastRow.teamType)) {
      this.rows.push(new TeamMemberDTO());
    }
  }

  deleteRow(index: number) {
    this.rows.splice(index, 1);
  }

  areAllRowsFilled(): boolean {
    return this.rows.every(row => row.user && row.teamType);
  }

  getAuditUsers(): void {
    this.subscriptions.push(
      this.auditScheduleService.getAuditUsers().subscribe(
        (response: any) => {
          this.employeeslist = response.result;
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
      if (row.user && row.teamType) {
        this.savedAssignmembers.push(row);
      }
    }
    this.ref.close(this.savedAssignmembers);
  }
}
