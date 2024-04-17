import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NewAuditProgramComponent } from '../../audit-program/new-audit-program/new-audit-program.component';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { AuditEngagementService } from '../../../services/audit-engagement/audit-engagement.service';
import { AuditEngagementDTO } from '../../../models/audit-engagement';
import { AuditCommentDTO } from '../../../models/comment';
import { AuditProgramDTO } from '../../../models/audit program';
import { AuditProgramService } from '../../../services/auidit-program/audit-program.service';
import { NewWBSComponent } from '../../audit-program/new-wbs/new-wbs.component';
import { WBS_DTO } from '../../../models/WBS';
import { AuditWBSService } from 'src/app/modules/ams/services/auidit-wbs/audit-wbs.service';
import { NewAuditFindingsComponent } from '../../audit-findings/new-audit-findings/new-audit-findings.component';
import { FindingDTO } from '../../../models/finding';
import { AuditFindingService } from '../../../services/auidit-finding/audit-finding.service';
import { NewAuditFindingsCommentComponent } from '../../audit-findings/new-audit-findings-comment/new-audit-findings-comment.component';
import { Router } from '@angular/router';
import { AuditReportService } from '../../../services/audit-report/audit-report.service';
import { NewAuditFindingsResponseComponent } from '../../audit-findings/new-audit-findings-response/new-audit-findings-response.component';
import { EMSService } from 'src/app/services/ems-services/ems-services.service';
import { EWSService } from 'src/app/services/ews-services/ews-services.service';
import { error } from 'console';
import { EwsSimpleMessage } from 'src/app/models/ews-models/ews_simple_message';





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




  public auditEngagements: AuditEngagementDTO[] = [];
  public auditPrograms: AuditProgramDTO[] = [];
  public auditWBS: WBS_DTO[] = [];
  public auditFinding: FindingDTO[] = [];
  public recipents:string[] = [];
  public members:string[] = [];
  public isManager: boolean;
  public isDirector:boolean;
  public isLeader: boolean;
  public isAuditee: boolean;

  private roles = JSON.parse(localStorage.getItem("allRoles"));

  private sendMeIgo: EwsSimpleMessage  = {
    email: [], // Initialize email as an empty array
    subject: '',
    body: '',
    shortCircuit: true
  };


  public dropdownOptions = [];

  cols!: Column[];





  private subscriptions: Subscription[] = [];


  constructor(
    private auditProgramService: AuditProgramService,
    private dialogService: DialogService,
    private messageService: MessageService,
    private auditWBSService: AuditWBSService,
    private auditFindingService: AuditFindingService,
    private router: Router,
    private auditReportService: AuditReportService,
    private employeeService:EMSService,
    private ewsService:EWSService
  
  ) { }

  ngOnInit() {
    if (localStorage.getItem("currentEngagement")) {
      this.auditEngagements[0] = JSON.parse(localStorage.getItem("currentEngagement"));
      this.getAuditProgram(this.auditEngagements[0].id);
  
    }
    this.isManager = this.roles.some(obj => obj.name === "ROLE_AMS_MANAGER");
    this.isLeader = this.roles.some(obj => obj.name === "ROLE_AMS_TEAM_LEADER");
    this.isAuditee = this.roles.some(obj => obj.name === "ROLE_AMS_AUDITEE");
    this.isDirector = this.roles.some(obj => obj.name === "ROLE_AMS_DIRECTOR");

   

  }


  getAuditProgram(id: number): void {
    console.log("getting audit program by " , id);
    this.subscriptions.push(
      this.auditProgramService.getAuditProgramByEngagementId(id).subscribe(
        (response: any) => {
          console.log("to this ");
          console.log(response);
          this.auditPrograms[0] = response.result[0];
          console.log(this.auditPrograms[0], " here ");
          this.getAuditWBS(this.auditPrograms[0].id);
          this.getFinding(this.auditPrograms[0].id)
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }


  getAuditWBS(id: number): void {
    this.subscriptions.push(
      this.auditWBSService.getAuditWBSByProgramId(id).subscribe(
        (response: any) => {
          this.auditWBS = response.result;
          console.log(this.auditWBS);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  getFinding(id: number): void {
    this.subscriptions.push(
      this.auditFindingService.getAuditFindingByProgramId(id).subscribe(
        (response: any) => {
          this.auditFinding = response.result;
          console.log(this.auditFinding, "this is audit finding");
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
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

      this.getAuditProgram(this.auditEngagements[0].id);
    });





  }

  addToComment(auditFinding: AuditCommentDTO): void {
    console.log(auditFinding);
    const ref = this.dialogService.open(NewAuditFindingsCommentComponent, {
      header: 'Add new comment ',
      draggable: true,
      width: '50%',
      data: { auditFinding },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });
    ref.onClose.subscribe((response: any) => {
      if (response.status) {

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

      this.getAuditProgram(this.auditEngagements[0].id);
    });
  }

  addResponse(auditFinding: AuditCommentDTO): void {
    console.log(auditFinding);
    const ref = this.dialogService.open(NewAuditFindingsResponseComponent, {
      header: 'Add new comment ',
      draggable: true,
      width: '50%',
      data: { auditFinding },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });
    ref.onClose.subscribe((response: any) => {
      if (response.status) {

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

      this.getAuditProgram(this.auditEngagements[0].id);
    });
  }


  ApproveProgram(ap:AuditProgramDTO): void {

    this.sendEmail();
    //we can't send to team members because team  members is not included in engagement. 




    this.auditProgramService.loadAuditProgram(ap.id).subscribe(data => {
      console.log(data);
      this.getAuditProgram(this.auditEngagements[0].id);
    }, error => {
      console.error(error);
    });
  }

  sendEmail(){
    this.recipents.push(localStorage.getItem("id"));
   
  
    this.auditEngagements[0].auditSchedule.teamMembers.forEach(member => {
      this.recipents.push(member.auditStaffDTO.employeeId);
    }); 

    this.auditEngagements[0].auditSchedule.teamMembers.forEach(member => {
      this.members.push(member.auditStaffDTO.fullName);
    }); 

    console.log(this.recipents);

    console.log(this.recipents);
    this.sendMeIgo.email = this.recipents;

    this.sendMeIgo.body =`
    This is to inform you that we have scheduled to undertake IT audit IT Auditors, ${this.members.map(member => member).join(', ')}, will come to your office for auditing purpose. Thus, we kindly request your office cooperate to provide them all necessary documents and necessary assistance pertaining their work and make the required interview for audit purpose.
    `;
    this.sendMeIgo.shortCircuit = true;
    this.sendMeIgo.subject = "Engagement Letter";
    
       this.employeeService.getDirectorBySubProcessId(JSON.parse(localStorage.getItem("subProcess")).id).subscribe(data => {
      //  this.recipents.push(data.employeeId.toString()); //to send to actual director
          this.ewsService.sendThis(this.sendMeIgo).subscribe(data1 => {
            console.log("email sent");
          },
          error => {
            console.log("something error");
          } )
       
    }, error => {
      console.error(error);
    });
  }

  addWBS(auditProgram: AuditProgramDTO): void {

    const ref = this.dialogService.open(NewWBSComponent, {
      header: 'Add WBS',
      draggable: true,
      width: '50%',
      data: { auditProgram },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });
    ref.onClose.subscribe((response: any) => {
      if (response.status) {
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
      this.getAuditProgram(this.auditEngagements[0].id);
    });


  }

  addFinding(auditProgram: AuditProgramDTO): void {

    const ref = this.dialogService.open(NewAuditFindingsComponent, {
      header: 'Add Finding',
      draggable: true,
      width: '50%',
      data: { auditProgram },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });
    ref.onClose.subscribe((response: any) => {
      if (response.status) {
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
      this.getAuditProgram(this.auditEngagements[0].id);
    });

  }

  updateFinding(auditFinding: FindingDTO): void {

    const ref = this.dialogService.open(NewAuditFindingsComponent, {
      header: 'Update Finding',
      draggable: true,
      width: '50%',
      data: { auditFinding },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });
    ref.onClose.subscribe((response: any) => {
      if (response.status) {
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
      this.getAuditProgram(this.auditEngagements[0].id);
    });

  }


  goToDetails(auditFinding: FindingDTO): void {


    localStorage.setItem('currentFinding', JSON.stringify(auditFinding));
    this.router.navigate(['ams/audit-findings-details']);

  }

  goToGenerateReport(auditEngagement: AuditEngagementDTO) {
    console.log(auditEngagement, "for");
    this.auditReportService.generateReport1(auditEngagement?.auditSchedule?.id).subscribe(data => {
      console.log(data)
      localStorage.setItem('thebigjson', JSON.stringify(data));
     
    }, error => {
      console.error(error);
    });

    localStorage.setItem('currentAuditEngagement', JSON.stringify(auditEngagement));
    this.router.navigate(['ams/report']);
  }
  addAttachement(auditFinding: any) {


    this.subscriptions.push(
      this.auditFindingService.addAttachement(auditFinding).subscribe(
        (response: any) => {
          console.log("Successifully Added Attachement");
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  public makeVisible(auditFinding: any) {
    this.subscriptions.push(
      this.auditFindingService.makeVisible(auditFinding.id).subscribe(
        (response: any) => {
      
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








}
