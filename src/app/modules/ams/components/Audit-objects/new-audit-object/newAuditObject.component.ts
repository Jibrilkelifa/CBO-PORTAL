import { HttpErrorResponse } from '@angular/common/http';
import { Component, LOCALE_ID, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuditObjectService } from 'src/app/modules/ams/services/auditObject/auditObject.service';
import { AuditTypeService } from 'src/app/modules/ams/services/audit-type/audit-type.service';
import { AuditObjectDTO } from 'src/app/modules/ams/models/auditObject';
import { AuditType } from 'src/app/modules/ams/models/auditType';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { NewAuditTypeComponent } from '../../Audit-type/new-audit-type/newAuditType.component';
import { AuditUniverseDTO } from '../../../models/auditUniverse';
import { AuditUniverseService } from '../../../services/auidit-universe/audit-universe.service';

@Component({
  selector: 'newAuditObject',
  templateUrl: './newAuditObject.component.html',
  styleUrls: ['./newAuditObject.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class NewAuditObjectComponent implements OnDestroy {
  // public auditTypes: AuditType[] = [];
  public auditType: AuditType;
  public auditObjectInfo: AuditObjectDTO = new AuditObjectDTO();
  public auditUniverse: AuditUniverseDTO[] = []
  public universeInfo: AuditUniverseDTO = new AuditUniverseDTO();
  private subscriptions: Subscription[] = [];

  update: boolean = false;
  newDiv: boolean = true;

  constructor(
    private messageService: MessageService,
    private auditObjectService: AuditObjectService,
    private auditUniverseService:AuditUniverseService,
    private auditTypeService: AuditTypeService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private dialogService: DialogService,
  ) { }

  ngOnInit() {
    // this.getAuditTypes();
    this.getAuditUniverse();
    if (this.config.data?.auditObject) {
      this.auditObjectInfo = this.config.data.auditObject;
      this.update = true;
      this.newDiv = false;
    }
  }

  // getAuditTypes(): void {
  //   this.subscriptions.push(
  //     this.auditTypeService.getAuditTypes().subscribe(
  //       (response: any) => {
  //         this.auditTypes = response.result.map(
  //           (auditType: AuditType) => auditType.name
  //         );
  //       },
  //       (error: HttpErrorResponse) => {
  //         console.log(error);
  //       }
  //     ));
  // }

  // createAuditType(): void {
  //   const ref = this.dialogService.open(NewAuditTypeComponent, {
  //     header: 'Create a new audit type',
  //     draggable: true,
  //     width: '45%',
  //     contentStyle: { 'min-height': 'auto', overflow: 'auto' },
  //     baseZIndex: 10000,
  //   });

  //   ref.onClose.subscribe((response: any) => {
  //     if (response.status) {
  //       this.getAuditTypes();
  //       this.messageService.add({
  //         severity: 'success',
  //         summary: 'Success',
  //         detail: response.message,
  //       });
  //     } else {
  //       this.messageService.add({
  //         severity: 'error',
  //         summary: 'Failed',
  //         detail: response.message,
  //       });
  //     }
  //   });
  // }

  submitAuditObject(objectForm: NgForm): void {
    console.log(JSON.parse(localStorage.getItem("auditStaff")))
    objectForm.value.auditType = JSON.parse(localStorage.getItem("auditStaff")).auditType
    if (this.update) {
      // console.log(objectForm.value)
      this.updateAuditObjects(objectForm);
    } else {
      // console.log(objectForm.value)
      this.addAuditObject(objectForm);
    }
  }

  addAuditObject(addDivForm: NgForm): void {

    addDivForm.value.createdUser = localStorage.getItem('id')
    this.subscriptions.push(this.auditObjectService
      .addAuditObject(addDivForm.value)
      .subscribe((response: any) => {
        this.messageService.clear();
        this.ref.close(response);
      }));
  }
    getAuditUniverse(): void {
    this.subscriptions.push(
      this.auditUniverseService.getAuditUniverse().subscribe(
      (response: any) => {
        this.auditUniverse = response.result;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    ));
  }

  updateAuditObjects(addDivForm: NgForm): void {
    addDivForm.value.modifiedUser = localStorage.getItem('id')


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
