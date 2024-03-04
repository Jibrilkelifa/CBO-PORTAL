import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NewAuditProgramComponent } from '../../audit-program/new-audit-program/new-audit-program.component';
import { Message, MessageService } from 'primeng/api';
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
// import { NewAuditFindingsComponent } from '../new-audit-findings/new-audit-findings.component';
import { FindingDTO } from '../../../models/finding';

import { AuditFindingService } from '../../../services/auidit-finding/audit-finding.service';
// import { NewAuditFindingsCommentComponent } from '../new-audit-findings-comment/new-audit-findings-comment.component';




interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

@Component({
  selector: 'audit-findings-detail-table',
  templateUrl: './audit-findings-detail.component.html',
  styleUrls: ['./audit-findings-detail.component.scss'],
})
export class AuditFindingsDetailComponent implements OnDestroy {



  public auditFinding: FindingDTO[] = [];
  public ammendment: any[] = [];
  public comment: AuditCommentDTO[] = [];
  loading: boolean = false;
  private subscriptions: Subscription[] = [];
  cols!: Column[];
  file_type:string = ".pdf";

  back_end_url:string = "http://192.168.137.224:8099";
  upload_url: string;
  constructor(
    private auditProgramService: AuditProgramService,
    private dialogService: DialogService,
    private messageService: MessageService,
    private auditWBSService: AuditWBSService,
    private auditFindingService: AuditFindingService,
  ) { }

  ngOnInit() {
    if (localStorage.getItem("currentFinding")) {
      this.auditFinding[0]  =  JSON.parse(localStorage.getItem("currentFinding"));
      console.log(this.auditFinding[0],"we are workign with")
      this.getFindingAmmandement(this.auditFinding[0].id);
      this.getFindingComment(this.auditFinding[0].id);
      this.upload_url = this.back_end_url + `/ams/auditProgram/finding/attachEvidence/${this.auditFinding[0].id}`;
    }  
  }

  
  public onBeforeUpload() {
    this.loading = true;
  }

  public messages: Message[] = [];

  public onUpload() {
    this.loading = false;
    this.messages = [{ severity: 'success', summary: 'File Uploaded', detail: 'File has been uploaded successfully' ,life: 5000}];

  }

  public onUploadError() {
    this.loading = false;
    this.messages = [{ severity: 'error', summary: 'File Upload Error', detail: 'An error occurred while uploading the file' ,life:5000}];
  }

  
  getFindingAmmandement(id:number): void {
    this.subscriptions.push(
      this.auditFindingService.getAmmendmentByFindingId(id).subscribe(
        (response: any) => {
          this.ammendment= response.result;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  getFindingComment(id:number): void {
    this.subscriptions.push(
      this.auditFindingService.getCommentByFindingId(id).subscribe(
        (response: any) => {
          this.comment= response.result;
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
