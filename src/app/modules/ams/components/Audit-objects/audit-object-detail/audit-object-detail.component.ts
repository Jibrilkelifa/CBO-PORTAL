import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuditableAreasDTO } from 'src/app/modules/ams/models/auditableAreas';
import { AuditableAreasService } from 'src/app/modules/ams/services/auditableArea/auditableArea.service';
import { CkeckListItemDTO } from 'src/app/modules/ams/models/checkListItem';
import { CheckListService } from 'src/app/modules/ams/services/check-list/check-list.service';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { NewAuditableAreaComponent } from '../../Auditable-area/new-auditable-area/newAuditableArea.component';
import { NewCheckListComponent } from '../../Checklist/new-checklist/newChecklist.component';
import { AuditObjectDTO } from 'src/app/modules/ams/models/auditObject';
import { AuditObjectService } from 'src/app/modules/ams/services/auditObject/auditObject.service';

@Component({
  selector: 'audit-object-detail',
  templateUrl: './audit-object-detail.component.html',
  styleUrls: ['./audit-object-detail.component.scss'],
})
export class AuditObjectDetailComponent {
  public auditableArea: AuditableAreasDTO[] = [];
  public checklist: CkeckListItemDTO[] = [];

  public auditObject: AuditObjectDTO;
  selectedArea: AuditableAreasDTO;

  private subscriptions: Subscription[] = [];

  constructor(
    private auditableAreaService: AuditableAreasService,
    private checkListService: CheckListService,
    private auditObjectService: AuditObjectService,
    private dialogService: DialogService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.auditObjectService.currentAuditObject.subscribe(auditObject => {
      if (auditObject) {
        this.auditObject = auditObject;
        const id = this.auditObject.id;
        this.getAuditableAreas(id);
      }
    });
  }

  getAuditableAreas(id?: number): void {
    let auditObject = new AuditObjectDTO();
    auditObject.id = id as number;
    this.subscriptions.push(
      this.auditableAreaService.getAuditableAreasById(auditObject).subscribe(
        (response: any) => {
          this.auditableArea = response.result;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  getCheckLists(id?: number): void {
    let auditableArea = new AuditableAreasDTO();
    auditableArea.id = id as number;
    this.subscriptions.push(
      this.checkListService.getChecklistsById(auditableArea).subscribe(
        (response: any) => {
          this.checklist = response.result;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  onAuditableAreaSelect($event) {
    if ($event.data) {
      const auditableArea: AuditableAreasDTO =
        $event.data as unknown as AuditableAreasDTO;
        this.selectedArea = auditableArea;
      this.getCheckLists(auditableArea.id);
    }
  }

  deleteAuditableArea(id?: number): void {
    let auditableArea = new AuditableAreasDTO();
    auditableArea.id = id as number;
    this.subscriptions.push(
      this.auditableAreaService.deleteAuditableAreas(auditableArea).subscribe(
        (response: any) => {
          this.getAuditableAreas(this.auditObject.id)
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  deleteCheckList(id?: number): void {
    let checkList = new CkeckListItemDTO();
    checkList.id = id as number;
    this.subscriptions.push(
      this.checkListService.deleteCheckList(checkList).subscribe(
        (response: any) => {
          this.getCheckLists(this.selectedArea.id);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  createNewAuditableArea(): void {
    const ref = this.dialogService.open(NewAuditableAreaComponent, {
      header: 'Create a new auditable area',
      width: '50%',
      data: { auditObject: this.auditObject },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });
    ref.onClose.subscribe((response: any) => {
      this.getAuditableAreas(this.auditObject.id);
      if (response.status) {
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

  createNewChecklist(): void {
    const ref = this.dialogService.open(NewCheckListComponent, {
      header: 'Create a new checklist',
      width: '50%',
      data: { auditableArea: this.selectedArea },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });
    
    ref.onClose.subscribe((response: any) => {
      if (response.status) {
        this.getCheckLists(this.selectedArea.id);
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

  updateAuditableArea(id: number): void {
    const auditableArea = this.auditableArea.find((area) => area.id === id);
    const ref = this.dialogService.open(NewAuditableAreaComponent, {
      header: 'Update auditable area',
      width: '50%',
      data: { auditableArea },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe((response: any) => {
      if (response) {
        this.getAuditableAreas(this.auditObject.id)
        this.auditableArea = this.auditableArea.map((area) =>
          area.id === response.id ? response : area
        );
        if (response.status) {
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
      }
    });
  }

  updateChecklist(id: number): void {
    const checklist = this.checklist.find((check) => check.id === id);
    const ref = this.dialogService.open(NewCheckListComponent, {
      header: 'Update checklist',
      width: '50%',
      data: { checklist },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });
    ref.onClose.subscribe((response: any) => {
      if (response) {
        this.checklist = this.checklist.map((check) =>
          check.id === response.id ? response : check
        );
        if (response.status) {
          this.getCheckLists(this.selectedArea.id);
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
      }
    });
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
