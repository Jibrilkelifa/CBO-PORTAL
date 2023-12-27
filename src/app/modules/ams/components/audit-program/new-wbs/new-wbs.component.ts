import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { AuditScheduleService } from 'src/app/modules/ams/services/audit-schedule/audit-schedule.service';
import { AuditProgramService } from 'src/app/modules/ams/services/auidit-program/audit-program.service';
import { AuditWBSService } from 'src/app/modules/ams/services/auidit-wbs/audit-wbs.service';
import { AuditScheduleDTO } from 'src/app/modules/ams/models/auditSchedule';
import { AuditProgramDTO } from 'src/app/modules/ams/models/audit program';
import { NewAuditObjectComponent } from '../../Audit-objects/new-audit-object/newAuditObject.component';
import { NewAuditTypeComponent } from '../../Audit-type/new-audit-type/newAuditType.component';
import { AuditEngagementDTO } from '../../../models/audit-engagement';
import { WBS_DTO } from '../../../models/WBS';

@Component({
  selector: 'newAuditUniverse',
  templateUrl: './new-wbs.component.html',
  styleUrls: ['./new-wbs.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class NewWBSComponent implements OnDestroy {
  public auditSchedules: AuditScheduleDTO[] = [];
  
  statusOptions: any;

  public programInfo: AuditProgramDTO = new AuditProgramDTO();
  public wbsInfo: WBS_DTO = new WBS_DTO();

  
  selectedProgramInfo: AuditProgramDTO;
  public selectedAuditType: any;
  public auditSchedule: AuditScheduleDTO;

  private subscriptions: Subscription[] = [];

  update: boolean = false;
  newDiv: boolean = true;

  constructor(
    private messageService: MessageService,
    private auditProgramService: AuditProgramService,
    private auditScheduleService: AuditScheduleService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private dialogService: DialogService,
    private auditWbsService: AuditWBSService
  ) { }

  ngOnInit() {
    this.getAuditSchedule();
    if (this.config.data?.auditProgram) {
      this.programInfo = this.config.data.auditProgram;
   
    }
 

  }

  getAuditSchedule(): void {
    this.subscriptions.push(
      this.auditScheduleService.getAuditSchedules().subscribe(
        (response: any) => {
          this.auditSchedules = response.result.map(
            (auditSchedule: AuditScheduleDTO) => auditSchedule
          );
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      ));
  }


  addAuditWbs(addDivForm: NgForm): void {
    const wbs: WBS_DTO = { ...addDivForm.value, auditProgram: this.programInfo };
    console.log(wbs);
    this.subscriptions.push(
      this.auditWbsService.addAuditWBS(wbs).subscribe(
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
