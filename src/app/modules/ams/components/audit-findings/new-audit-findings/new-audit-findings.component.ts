import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { AuditScheduleService } from 'src/app/modules/ams/services/audit-schedule/audit-schedule.service';
import { AuditProgramService } from 'src/app/modules/ams/services/auidit-program/audit-program.service';
import { AuditFindingService } from 'src/app/modules/ams/services/auidit-finding/audit-finding.service';
import { AuditScheduleDTO } from 'src/app/modules/ams/models/auditSchedule';
import { AuditProgramDTO } from 'src/app/modules/ams/models/audit program';
import { NewAuditObjectComponent } from '../../Audit-objects/new-audit-object/newAuditObject.component';
import { NewAuditTypeComponent } from '../../Audit-type/new-audit-type/newAuditType.component';
import { AuditEngagementDTO } from '../../../models/audit-engagement';
import { FindingDTO } from '../../../models/finding';
import { AuditableAreasDTO } from '../../../models/auditableAreas';
import { AuditableAreasService } from '../../../services/auditableArea/auditableArea.service';
import { AuditObjectDTO } from '../../../models/auditObject';

@Component({
  selector: 'app-new-audit-findings',
  templateUrl: './new-audit-findings.component.html',
  styleUrls: ['./new-audit-findings.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class NewAuditFindingsComponent implements OnDestroy {
  public auditableArea: AuditableAreasDTO[] = [];
  public findingInfo: FindingDTO = new FindingDTO();
  private subscriptions: Subscription[] = [];
  public auditProgram: AuditProgramDTO[] = [];
  datePipe: any;

  public programInfo: AuditProgramDTO = new AuditProgramDTO();
  

  constructor(
    private messageService: MessageService,
    private auditProgramService: AuditProgramService,
    private auditScheduleService: AuditScheduleService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private dialogService: DialogService,
    private auditFindingService: AuditFindingService,
    private auditableAreaService: AuditableAreasService
  ) { }

  ngOnInit() {
    if (this.config.data?.auditProgram) {
      this.programInfo = this.config.data.auditProgram;
      this.getAuditableAreas(this.config.data.auditProgram.engagementInfo.auditSchedule.annualPlan.auditUniverse.auditObject.id);
    }
  }

  
  addFinding(addDivForm: NgForm): void {
    const finding: FindingDTO = { ...addDivForm.value, auditProgram: this.programInfo };
    console.log(finding);
    this.subscriptions.push(
      this.auditFindingService.addAuditFinding(finding).subscribe(
        (response: any) => {
          this.ref.close(response);
     
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }


  getAuditableAreas(id?: number): void {
    let auditObject = new AuditObjectDTO();
    auditObject.id = id as number;
    this.subscriptions.push(
      this.auditableAreaService.getAuditableAreasById(auditObject).subscribe(
        (response: any) => {
          this.auditableArea = response.result;
          console.log(this.auditableArea, " is auditable area");
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
