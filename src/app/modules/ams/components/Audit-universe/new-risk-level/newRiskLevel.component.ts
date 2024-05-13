import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { AuditTypeService } from 'src/app/modules/ams/services/audit-type/audit-type.service';
import { AuditObjectService } from 'src/app/modules/ams/services/auditObject/auditObject.service';
import { AuditUniverseService } from 'src/app/modules/ams/services/auidit-universe/audit-universe.service';
import { AuditObjectDTO } from 'src/app/modules/ams/models/auditObject';
import { AuditType } from 'src/app/modules/ams/models/auditType';
import { AuditUniverseDTO } from 'src/app/modules/ams/models/auditUniverse';
import { NewAuditObjectComponent } from '../../Audit-objects/new-audit-object/newAuditObject.component';
import { NewAuditTypeComponent } from '../../Audit-type/new-audit-type/newAuditType.component';
import { RiskLevelDTO } from '../../../models/RiskLevel';

@Component({
  selector: 'newRiskLevel',
  templateUrl: './newRiskLevel.component.html',
  styleUrls: ['./newRiskLevel.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class NewRiskLevel implements OnDestroy {
  public auditTypes: AuditType[] = [];
  public auditObjects: AuditObjectDTO[] = [];
  statusOptions: any;

  public riskLevelInfo: RiskLevelDTO = new RiskLevelDTO();
 
  public selectedAuditType: any;

  private subscriptions: Subscription[] = [];

  update: boolean = false;
  newDiv: boolean = true;

  constructor(
    private messageService: MessageService,
    private auditUniverseService: AuditUniverseService,
    private auditTypeService: AuditTypeService,
    private auditObjectService: AuditObjectService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private dialogService: DialogService,
  ) { }

  ngOnInit() {


    if (this.config.data?.riskLevel) {
      this.riskLevelInfo = this.config.data.riskLevel;
      this.update = true;
      this.newDiv = false;

    }


  }



  submitRiskLevel(auditUniverseForm: NgForm): void {
    if (this.update) {
      this.updateRiskLevel(auditUniverseForm);
    } else {
      this.addRiskLevel(auditUniverseForm);
    }
  }

  addRiskLevel(addDivForm: NgForm): void {
    addDivForm.value.createdUser = localStorage.getItem('id')
    this.subscriptions.push(
      this.auditUniverseService
        .addRiskLevel(addDivForm.value)
        .subscribe((response: any) => {
          this.messageService.clear();
          this.ref.close(response);
        })
    );
  }

  updateRiskLevel(addDivForm: NgForm): void {
    let riskLevel: RiskLevelDTO = addDivForm.value;
    riskLevel.modifiedUser = localStorage.getItem('id');
    riskLevel.id = this.riskLevelInfo.id;
    console.log(riskLevel)
    this.subscriptions.push(
      this.auditUniverseService
        .updateRiskLevel(riskLevel)
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
