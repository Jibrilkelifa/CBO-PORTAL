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
  public auditWBS: WBS_DTO[] = [];

  private subscriptions: Subscription[] = [];
  cols!: Column[];

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
      this.getAuditWBS(this.auditFinding[0].id);
    }  
  }
  // getAuditProgram(id:number): void {
  //   this.subscriptions.push(
  //     this.auditProgramService.getAuditProgramByEngagementId(id).subscribe(
  //       (response: any) => {
  //         this.auditPrograms[0]= response.result[0];
  //         this.getAuditWBS(this.auditPrograms[0].id);
  //         this.getFinding(this.auditPrograms[0].id)
  //       },
  //       (error: HttpErrorResponse) => {
  //         console.log(error);
  //       }
  //     )
  //   );
  // }


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
          console.log(this.auditFinding);
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
