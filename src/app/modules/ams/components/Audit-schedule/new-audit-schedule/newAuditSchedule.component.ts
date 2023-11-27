import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { AuditScheduleService } from 'src/app/modules/ams/services/audit-schedule/audit-schedule.service';
import { AnnualPlanDTO } from 'src/app/modules/ams/models/annualPlan';
import { AuditScheduleDTO } from 'src/app/modules/ams/models/auditSchedule';
import { TeamMemberDTO } from 'src/app/modules/ams/models/team-member';
import { AssignMembersComponent } from './../assign-members/assign-members.component';

@Component({
  selector: 'newAuditSchedule',
  templateUrl: './newAuditSchedule.component.html',
  styleUrls: ['./newAuditSchedule.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class NewAuditScheduleComponent implements OnDestroy {
  public annualPlans: AnnualPlanDTO[] = [];

  assignMembersDialogRef: DynamicDialogRef;
  teamMembers: TeamMemberDTO[] = [];
  savedAssignmembers: TeamMemberDTO[] = [];


  public scheduleInfo: AuditScheduleDTO = new AuditScheduleDTO();

  private subscriptions: Subscription[] = [];
  public dropdownOptions = ['1', '2', '3', '4'];
  public selectedDropdown: string;

  update: boolean = false;
  newDiv: boolean = true;

  startOn: Date;
  endOn: Date;

  annualPlan: AnnualPlanDTO;
  auditSchedule: AuditScheduleDTO;

  constructor(
    private messageService: MessageService,
    private auditScheduleService: AuditScheduleService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    public dialogService: DialogService,
    private datePipe: DatePipe,
    private cdref: ChangeDetectorRef

  ) { }

  ngOnInit() {
    if (this.config.data?.annualPlan) {
      this.annualPlan = this.config.data.annualPlan;
      this.update = false;
  
      let year = this.annualPlan.year;
      let startYear = parseInt(year.split("/")[0]);
      let endYear = parseInt(year.split("/")[1]);
  
      this.startOn = new Date(startYear, 0, 1); 
      this.endOn = new Date(endYear, 11, 31); 
    }
    if (this.config.data?.auditSchedule) {
      this.scheduleInfo = {
        ...this.config.data.auditSchedule,
        startOn: this.datePipe.transform(this.config.data.auditSchedule.startOn, 'MM/dd/yyyy'),
        endOn: this.datePipe.transform(this.config.data.auditSchedule.endOn, 'MM/dd/yyyy')
      };
      this.selectedDropdown = this.config.data.auditSchedule.quarter.toString();
      this.savedAssignmembers = this.config.data.auditSchedule.teamMembers;
      this.update = true;
      this.newDiv = false;
    }
  }
  

  submitAuditSchedule(auditableAreaForm: NgForm): void {
    if (this.update) {
      this.updateAuditSchedule(auditableAreaForm);
    } else {
      this.addAuditSchedule(auditableAreaForm);
    }
  }

  addAuditSchedule(addDivForm: NgForm): void {
    const auditSchedule: AuditScheduleDTO = addDivForm.value;
    auditSchedule.annualPlan = this.annualPlan;
    this.subscriptions.push(
      this.auditScheduleService.addAuditSchedule(auditSchedule).subscribe(
        (response: any) => {
          this.ref.close(response);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  updateAuditSchedule(updateDivForm: NgForm): void {
    let auditSchedule: AuditScheduleDTO = { ...this.scheduleInfo };
    auditSchedule = { ...auditSchedule, ...updateDivForm.value };
    auditSchedule.teamMembers = this.savedAssignmembers;
    this.subscriptions.push(
      this.auditScheduleService
        .updateAuditSchedule(auditSchedule)
        .subscribe((response: any) => {
          this.messageService.clear();
          this.ref.close(response);
        })
    );
  }

  AssignMembers() {
    this.assignMembersDialogRef = this.dialogService.open(AssignMembersComponent, {
      header: 'Assign members and their roles',
      width: '60%',
      data: { scheduleInfo: this.scheduleInfo, savedAssignmembers: this.savedAssignmembers },
    });
    this.assignMembersDialogRef.onClose.subscribe((teamMembers) => {
      if (teamMembers) {
        this.savedAssignmembers = teamMembers;
        this.cdref.detectChanges();
      }
    });
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  closeDialog(): void {
    this.ref.close();
  }
}
