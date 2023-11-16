import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { AuditObjectDTO } from 'src/app/modules/ams/models/auditObject';
import { AuditType } from 'src/app/modules/ams/models/auditType';
import { AuditTypeService } from '../../../services/audit-type/audit-type.service';

@Component({
  selector: 'newAuditType',
  templateUrl: './newAuditType.component.html',
  styleUrls: ['./newAuditType.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class NewAuditTypeComponent implements OnDestroy {
  public auditTypes: AuditType[] = [];
  public auditObjects: AuditObjectDTO[] = [];
  statusOptions: any;

  public auditTypeInfo: AuditType = new AuditType();

  private subscriptions: Subscription[] = [];

  update: boolean = false;
  newDiv: boolean = true;

  constructor(
    private messageService: MessageService,
    private auditTypeService: AuditTypeService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
  ) { }

  ngOnInit() {
    if (this.config.data?.auditType) {
      this.auditTypeInfo = this.config.data.auditType;
      this.update = true;
      this.newDiv = false;
    }
  }

  submitAuditableArea(auditUniverseForm: NgForm): void {
    if (this.update) {
      this.updateAuditType(auditUniverseForm);
    } else {
      this.addAuditType(auditUniverseForm);
    }
  }

  addAuditType(addDivForm: NgForm): void {
    this.subscriptions.push(
      this.auditTypeService
        .addAuditType(addDivForm.value)
        .subscribe((response: any) => {
          this.messageService.clear();
          this.ref.close(response);
        })
    );
  }

  updateAuditType(addDivForm: NgForm): void {
    let auditType: AuditType = { ...this.auditTypeInfo };
    auditType = { ...auditType, ...addDivForm.value };

    this.subscriptions.push(
      this.auditTypeService
        .updateAuditType(auditType)
        .subscribe((response: any) => {
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
