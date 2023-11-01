import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuditableAreasService } from 'src/app/modules/ams/services/auditableArea/auditableArea.service';
import { AuditableAreasDTO } from 'src/app/modules/ams/models/auditableAreas';
import { Subscription } from 'rxjs';
import { AuditObjectDTO } from 'src/app/modules/ams/models/auditObject';
import { AuditObjectService } from 'src/app/modules/ams/services/auditObject/auditObject.service';

@Component({
  selector: 'newAuditObject',
  templateUrl: './newAuditableArea.component.html',
  styleUrls: ['./newAuditableArea.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class NewAuditableAreaComponent implements OnDestroy {
  public auditObject: AuditObjectDTO;

  public auditObjectR: AuditableAreasDTO[] = [];
  public auditAreaInfo: AuditableAreasDTO = new AuditableAreasDTO();
  selectedAuditObjectInfo: AuditableAreasDTO;

  update: boolean = false;
  newDiv: boolean = true;

  private subscriptions: Subscription[] = [];

  constructor(
    private messageService: MessageService,
    private auditableAreaService: AuditableAreasService,
    private auditObjectService: AuditObjectService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) {}

  ngOnInit() {
    if (this.config.data?.auditableArea) {
      this.auditAreaInfo = this.config.data.auditableArea;
      this.update = true;
      this.newDiv = false;
    }
    if (this.config.data?.auditObject) {
      this.auditObject = this.config.data.auditObject;  
    }
  }

  public submitAuditableArea(auditableAreaForm: NgForm): void {
    if (this.update) {
      this.updateAuditableArea(auditableAreaForm);
    } else {
      this.addAuditableArea(auditableAreaForm);
    }
  }

  addAuditableArea(addDivForm: NgForm): void {
    const auditableArea: AuditableAreasDTO = addDivForm.value;
    auditableArea.auditObject = new AuditObjectDTO();
    auditableArea.auditObject.id = this.auditObject.id;
    this.subscriptions.push(
      this.auditableAreaService
        .addAuditableArea(auditableArea) // Pass the updated auditableArea object
        .subscribe((response: any) => {
          this.messageService.clear();
          this.ref.close(response);
        })
    );
  }
  

  updateAuditableArea(updateDivForm: NgForm): void {
    const auditableArea: AuditableAreasDTO = updateDivForm.value;
    auditableArea.id = this.auditAreaInfo.id;
    this.subscriptions.push(
      this.auditableAreaService
        .updateAuditableAreas(auditableArea)
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
