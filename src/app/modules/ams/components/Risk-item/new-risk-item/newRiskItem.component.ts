import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { AuditType } from 'src/app/modules/ams/models/auditType';
import { RiskItemService } from '../../../services/risk-item/risk-item.service';
import { RiskItemDTO } from '../../../models/riskItemDTO';
import { AuditTypeService } from '../../../services/audit-type/audit-type.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NewAuditTypeComponent } from '../../Audit-type/new-audit-type/newAuditType.component';

@Component({
  selector: 'newRiskItem',
  templateUrl: './newRiskItem.component.html',
  styleUrls: ['./newRiskItem.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class NewRiskItemComponent implements OnDestroy {
  public auditTypes: AuditType[] = [];
  statusOptions: any;

  public riskItemInfo: RiskItemDTO = new RiskItemDTO();

  private subscriptions: Subscription[] = [];

  update: boolean = false;
  newDiv: boolean = true;

  constructor(
    private messageService: MessageService,
    private riskItemService: RiskItemService,
    private auditTypeService: AuditTypeService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private dialogService: DialogService,
  ) { }

  ngOnInit() {
    this.getAuditTypes();
    if (this.config.data?.riskItem) {
      this.riskItemInfo = this.config.data.riskItem;
      this.update = true;
      this.newDiv = false;
    }
  }

  getAuditTypes(): void {
    this.subscriptions.push(
      this.auditTypeService.getAuditTypes().subscribe(
      (response: any) => {
        this.auditTypes = response.result.map(
          (auditType: AuditType) => auditType.name
        );
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    ));
  }

  submitRiskItem(auditUniverseForm: NgForm): void {
    if (this.update) {
      this.updateRiskItem(auditUniverseForm);
    } else {
      this.addRiskItem(auditUniverseForm);
    }
  }

  addRiskItem(addDivForm: NgForm): void {
    this.subscriptions.push(
      this.riskItemService
        .addRiskItem(addDivForm.value)
        .subscribe((response: any) => {
          this.messageService.clear();
          this.ref.close(response);
        })
    );
  }

  updateRiskItem(addDivForm: NgForm): void {
    let riskItem: RiskItemDTO = { ...this.riskItemInfo };
    riskItem = { ...riskItem, ...addDivForm.value };

    this.subscriptions.push(
      this.riskItemService
        .updateRiskItem(riskItem)
        .subscribe((response: any) => {
          this.messageService.clear();
          this.ref.close(response);
        })
    );
  }

  createAuditType(): void {
    const ref = this.dialogService.open(NewAuditTypeComponent, {
      header: 'Create a new audit type',
      draggable: true,
      width: '45%',
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe((response: any) => {
      if (response.status) {
        this.getAuditTypes();
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
    });
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
