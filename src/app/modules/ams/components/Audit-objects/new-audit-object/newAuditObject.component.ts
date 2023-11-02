import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuditObjectService } from 'src/app/modules/ams/services/auditObject/auditObject.service';
import { AuditPlanService } from 'src/app/modules/ams/services/audit-type/audit-type.service';
import { AuditObjectDTO } from 'src/app/modules/ams/models/auditObject';
import { AuditType } from 'src/app/modules/ams/models/auditType';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'newAuditObject',
  templateUrl: './newAuditObject.component.html',
  styleUrls: ['./newAuditObject.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class NewAuditObjectComponent implements OnDestroy {
  public auditTypes: AuditType[] = [];
  public auditType: AuditType;

  public auditObjectR: AuditObjectDTO[] = [];
  public auditObjectInfo: AuditObjectDTO = new AuditObjectDTO();

  private subscriptions: Subscription[] = [];

  update: boolean = false;
  newDiv: boolean = true;

  constructor(
    private messageService: MessageService,
    private auditObjectService: AuditObjectService,
    private auditTypeService: AuditPlanService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) { }

  ngOnInit() {
    this.getAuditTypes();
    if (this.config.data?.auditObject) {
      this.auditObjectInfo = this.config.data.auditObject;   
      this.update = true;
      this.newDiv = false;
    }
  }

  getAuditTypes(): void {
    this.auditTypeService.getAuditTypes().subscribe(
      (response: any) => {        
        this.auditTypes = response.result.map(
          (auditType: AuditType) => auditType.name
        );        
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  submitAuditObject(checklistForm: NgForm): void {
    if (this.update) {
      this.updateAuditObjects(checklistForm);
    } else {
      this.addAuditObject(checklistForm);
    }
  }

  addAuditObject(addDivForm: NgForm): void {
    this.auditObjectService
      .addAuditObject(addDivForm.value)
      .subscribe((response: any) => {
        this.messageService.clear();
        this.ref.close(response);
      });
  }

  updateAuditObjects(addDivForm: NgForm): void {
    const auditObject: AuditObjectDTO = addDivForm.value;
    auditObject.id = this.auditObjectInfo.id;
    this.subscriptions.push(
      this.auditObjectService
        .updateAuditObject(auditObject)
        .subscribe((response: any) => {
          this.messageService.clear();
          this.ref.close(response);
        })
    );
  }

  closeDialog(): void {
    this.ref.close();
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
