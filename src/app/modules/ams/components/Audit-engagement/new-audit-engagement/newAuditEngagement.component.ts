import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { AuditEngagementService } from 'src/app/modules/ams/services/audit-engagement/audit-engagement.service';
import { AuditEngagementDTO } from 'src/app/modules/ams/models/audit-engagement';
import { AuditScheduleDTO } from 'src/app/modules/ams/models/auditSchedule';
import { EwsSimpleMessage } from 'src/app/models/ews-models/ews_simple_message';
import { Ews } from 'src/app/services/sso-services/ews.service';

@Component({
  selector: 'newAuditEngagement',
  templateUrl: './newAuditEngagement.component.html',
  styleUrls: ['./newAuditEngagement.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class NewAuditEngagementComponent implements OnDestroy {

  public auditEngagementInfo: AuditEngagementDTO = new AuditEngagementDTO();
  public auditScheduleInfo: AuditScheduleDTO = new AuditScheduleDTO();

  private subscriptions: Subscription[] = [];
  public selectedDropdown: string;

  update: boolean = false;
  newDiv: boolean = true;

  private outlookMessage: EwsSimpleMessage  = {
    email: [], 
    subject: '',
    body: '',
    shortCircuit: true
  };

  auditSchedule: AuditScheduleDTO;
  myAuditSchedule: AuditEngagementDTO;


  constructor(
    private messageService: MessageService,
    private auditEngagementService: AuditEngagementService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    public dialogService: DialogService,
    private datePipe: DatePipe,
    private ews:Ews
  ) { }

  ngOnInit() {
    if (this.config.data?.auditSchedule) {
      this.auditScheduleInfo = {
        ...this.config.data.auditSchedule,
        startOn: this.datePipe.transform(this.config.data.auditSchedule.startOn, 'MM/dd/yyyy'),
        endOn: this.datePipe.transform(this.config.data.auditSchedule.endOn, 'MM/dd/yyyy')
      };

      this.myAuditSchedule = this.config.data.auditSchedule;
    }
    
    this.auditEngagementInfo.refNum = (Math.floor(Math.random() * 9000) + 1000).toString();
  }
  
  submitAuditSchedule(auditableAreaForm: NgForm): void {
    if (this.update) {
      this.updateAuditEngagement(auditableAreaForm);

    } else {
      
      this.addAuditEngagement(auditableAreaForm);
    }
  }

  addAuditEngagement(addDivForm: NgForm): void {
    const auditEngagement: AuditEngagementDTO = { ...addDivForm.value, auditSchedule: this.auditScheduleInfo };
    const employeeIds: string[] = [];
  
  

     auditEngagement.auditSchedule.teamMembers.forEach(member => {
      const employeeId = member.auditStaffDTO.employeeId;
      employeeIds.push(employeeId);
    });


     

 
     this.outlookMessage.email = this.outlookMessage.email.concat(employeeIds);
  
     this.outlookMessage.body = "Engagement " + auditEngagement.auditSchedule.annualPlan.auditObject.name + " started";
     this.outlookMessage.subject = "Notifying engagment start";
     this.outlookMessage.shortCircuit = true;
     auditEngagement.createdUser = localStorage.getItem('id')
   


    this.subscriptions.push(
      this.auditEngagementService.addToEngagement(auditEngagement).subscribe(
        (response: any) => {
          // this.ews.sendEmail(this.outlookMessage).subscribe(
          //   (response: any) => {
          //     this.ref.close(response);
          //   },
          //   (error: HttpErrorResponse) => {
          //     console.log(error);
          //   }
          // )
          this.ref.close(response);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  updateAuditEngagement(updateDivForm: NgForm): void {
    let auditEngagement: AuditEngagementDTO = { ...this.auditEngagementInfo };
    auditEngagement = { ...auditEngagement, ...updateDivForm.value, auditSchedule: this.auditScheduleInfo };
    auditEngagement.modifiedUser = localStorage.getItem('id')
    this.subscriptions.push(
        this.auditEngagementService.addToEngagement(auditEngagement).subscribe((response: any) => {
        this.messageService.clear();
        this.ref.close(response);
      })
    );
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
