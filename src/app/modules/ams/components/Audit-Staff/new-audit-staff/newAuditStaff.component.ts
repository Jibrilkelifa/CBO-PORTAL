import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { AuditStaffService } from 'src/app/modules/ams/services/audit-staff/audit-staff.service';
import { AuditType } from 'src/app/modules/ams/models/auditType';
import { AuditStaffDTO } from '../../../models/auditStaff';
import { UserDTO } from '../../../models/userDTO';
import { AMSUsersService } from '../../../services/ams-users/ams-users.service';
import { AuditTypeService } from '../../../services/audit-type/audit-type.service';
import { NewAuditTypeComponent } from '../../Audit-type/new-audit-type/newAuditType.component';

@Component({
  selector: 'newAuditStaff',
  templateUrl: './newAuditStaff.component.html',
  styleUrls: ['./newAuditStaff.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class NewAuditStaffComponent implements OnDestroy {
  public auditTypes: AuditType[] = [];
  public AMSUsers: AuditStaffDTO[] = [];
  statusOptions: any;

  public auditStaffInfo: AuditStaffDTO = new AuditStaffDTO();
  selectedUserInfo: UserDTO;
  public selectedAuditType: any;

  private subscriptions: Subscription[] = [];

  update: boolean = false;
  newDiv: boolean = true;

  constructor(
    private messageService: MessageService,
    private auditStaffService: AuditStaffService,
    private amsUsersService: AMSUsersService,
    private auditTypeService: AuditTypeService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private dialogService: DialogService,
  ) { }

  ngOnInit() {
    this.getAuditTypes();
    this.getAMSUsers();
    if (this.config.data?.auditStaff) {
      this.auditStaffInfo = this.config.data.auditStaff;
      this.update = true;
      this.newDiv = false;
    }
  }

  getAuditTypes(): void {
    this.subscriptions.push(
      this.auditTypeService.
        getAuditTypes().subscribe(
          (response: any) => {
            this.auditTypes = response.result;
          },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
        ));
  }

  getAMSUsers(): void {
    this.subscriptions.push(
      this.amsUsersService.
        getAMSUsers().subscribe(
          (response: any) => {
            this.AMSUsers = response.result;
          },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
        ));
  }


  submitAuditStaff(auditStaffForm: NgForm): void {
    if (this.update) {
      this.updateAMSStaff(auditStaffForm);
    } else {
      this.addAMSStaff(auditStaffForm);
    }
  }

  addAMSStaff(auditStaffForm: NgForm): void {
    this.subscriptions.push(
      this.auditStaffService
        .registerAuditStaff(auditStaffForm.value)
        .subscribe((response: any) => {
          this.messageService.clear();
          this.ref.close(response);
        })
    );
  }

  updateAMSStaff(addDivForm: NgForm): void {
    let auditStaff: AuditStaffDTO = { ...this.auditStaffInfo, ...addDivForm.value };
    this.subscriptions.push(
      this.auditStaffService
        .updateAuditStaff(auditStaff)
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
