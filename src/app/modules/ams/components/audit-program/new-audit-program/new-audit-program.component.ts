import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { AuditScheduleService } from 'src/app/modules/ams/services/audit-schedule/audit-schedule.service';
import { AuditProgramService } from 'src/app/modules/ams/services/auidit-program/audit-program.service';
import { AuditScheduleDTO } from 'src/app/modules/ams/models/auditSchedule';
import { AuditProgramDTO } from 'src/app/modules/ams/models/audit program';
import { NewAuditObjectComponent } from '../../Audit-objects/new-audit-object/newAuditObject.component';
import { NewAuditTypeComponent } from '../../Audit-type/new-audit-type/newAuditType.component';
import { AuditEngagementDTO } from '../../../models/audit-engagement';

@Component({
  selector: 'newAuditUniverse',
  templateUrl: './new-audit-program.component.html',
  styleUrls: ['./new-audit-program.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class NewAuditProgramComponent implements OnDestroy {
  public auditSchedules: AuditScheduleDTO[] = [];
  
  statusOptions: any;

  public programInfo: AuditProgramDTO = new AuditProgramDTO();
  public engagementInfo: AuditScheduleDTO = new AuditScheduleDTO();
  
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
  ) { }

  ngOnInit() {
    this.getAuditSchedule();
    if (this.config.data?.auditEngagement) {
      this.engagementInfo = this.config.data.auditEngagement;
      // this.update = true;
      this.newDiv = false;
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

  submitAuditProgram(auditProgramForm: NgForm): void {
    // this.auditSchedule.id = auditProgramForm.form.value.auditSchedule;
    // auditProgramForm.form.value.auditSchedule = this.auditSchedule;
    
    

    // submitAuditableArea(auditProgramForm: NgForm): void {
    // if (this.update) {
      // this.updateAuditPrograms(auditProgramForm);
    // } else {
      this.addAuditProgram(auditProgramForm);
    // }
  }
  

  // addAuditProgram(addDivForm: NgForm): void {
  //   this.subscriptions.push(
  //     this.auditProgramService
  //       .addAuditProgram(addDivForm.value)
  //       .subscribe((response: any) => {
  //         this.messageService.clear();
  //         this.ref.close(response);
  //       })
  //   );
  // }
  addAuditProgram(addDivForm: NgForm): void {
    const auditProgram: AuditProgramDTO = { ...addDivForm.value, engagementDTO: this.engagementInfo };
    console.log(auditProgram);
    this.subscriptions.push(
      this.auditProgramService.addAuditProgram(auditProgram).subscribe(
        (response: any) => {
          this.ref.close(response);
     
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  // updateAuditPrograms(addDivForm: NgForm): void {
  //   let auditProgram: AuditProgramDTO = addDivForm.value;
  //   auditProgram = this.programInfo;
  //   auditProgram.auditObject = this.programInfo.auditObject;
  //   this.subscriptions.push(
  //     this.auditProgramService
  //       .updateAuditUniverse(auditUniverse)
  //       .subscribe((response: any) => {
  //         this.messageService.clear();
  //         this.ref.close(response);
  //       })
  //   );
  // }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  closeDialog(): void {
    this.ref.close();
  }
}
