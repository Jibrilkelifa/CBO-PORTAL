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
    private auditReportService: AuditReportService
  ) { }

  ngOnInit() {
    if (localStorage.getItem("currentEngagement")) {
      this.auditEngagements[0]  =  JSON.parse(localStorage.getItem("currentEngagement"));
      this.getAuditProgram(this.auditEngagements[0].id);
    }  
  }
  getAuditProgram(id:number): void {
    this.subscriptions.push(
      this.auditProgramService.getAuditProgramByEngagementId(id).subscribe(
        (response: any) => {
          this.auditPrograms[0]= response.result[0];
          this.getAuditWBS(this.auditPrograms[0].id);
          this.getFinding(this.auditPrograms[0].id)
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }


  getAuditWBS(id:number): void {
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

  getFinding(id:number): void {
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

  ApproveProgram(id: number): void {
    this.auditProgramService.loadAuditProgram(id).subscribe(data => {
      console.log(data);
      this.getAuditProgram(this.auditEngagements[0].id);
    }, error => {
      console.error(error);
    });
  }

  addWBS(auditProgram:AuditProgramDTO): void {

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
  
  addFinding(auditProgram:AuditProgramDTO): void {

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

  updateFinding(auditFinding:FindingDTO): void {

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
    
    this.auditReportService.generateReport1(auditEngagement?.auditSchedule?.id).subscribe(data => {
      
      localStorage.setItem('thebigjson', JSON.stringify(data));
    
    }, error => {
      console.error(error);
    });
     
    localStorage.setItem('currentAuditEngagement', JSON.stringify(auditEngagement));
    this.router.navigate(['ams/report']);
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }








}
