import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { AuditFindingService } from 'src/app/modules/ams/services/auidit-finding/audit-finding.service';
import { AuditProgramDTO } from 'src/app/modules/ams/models/audit program';
import { FindingDTO } from '../../../models/finding';
import { AuditCommentDTO } from '../../../models/comment';
import { AuditableAreasDTO } from '../../../models/auditableAreas';
import { AuditableAreasService } from '../../../services/auditableArea/auditableArea.service';
import { AuditObjectDTO } from '../../../models/auditObject';

@Component({
  selector: 'app-new-audit-findings-comment',
  templateUrl: './new-audit-findings-response.component.html',
  styleUrls: ['./new-audit-findings-response.component.scss'],
  providers: [MessageService, ConfirmationService],
})

export class NewAuditFindingsResponseComponent implements OnDestroy {

  public auditableArea: AuditableAreasDTO[] = [];
  public findingInfo: FindingDTO = new FindingDTO();
  public commentInfo: AuditCommentDTO = new AuditCommentDTO();

  private subscriptions: Subscription[] = [];
  public auditProgram: AuditProgramDTO[] = [];
  datePipe: any;
  public programInfo: AuditProgramDTO = new AuditProgramDTO();
  response:String;
  

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private auditFindingService: AuditFindingService,
    private auditableAreaService: AuditableAreasService
  ) { }

  ngOnInit() {
    if (this.config.data?.auditFinding) {
      this.findingInfo = this.config.data.auditFinding;
    }
  }

  
  addResponse(addDivForm: NgForm): void {
     console.log(this.findingInfo);
    this.findingInfo.auditeesResponse = addDivForm.form.value.response;
 
    this.subscriptions.push(
      this.auditFindingService.addResponse(this.findingInfo).subscribe(
        (response: any) => {
          this.ref.close(response);
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

  closeDialog(): void {
    this.ref.close();
  }
}
