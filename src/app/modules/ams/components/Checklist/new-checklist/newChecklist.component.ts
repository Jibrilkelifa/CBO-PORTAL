import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { CheckListService } from 'src/app/modules/ams/services/check-list/check-list.service';
import { AuditableAreasDTO } from 'src/app/modules/ams/models/auditableAreas';
import { CkeckListItemDTO } from 'src/app/modules/ams/models/checkListItem';

@Component({
  selector: 'newChecklist',
  templateUrl: './newChecklist.component.html',
  styleUrls: ['./newChecklist.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class NewCheckListComponent implements OnDestroy {
  public auditableArea: AuditableAreasDTO;

  public checklistR: CkeckListItemDTO[] = [];
  public checklistInfo: CkeckListItemDTO = new CkeckListItemDTO();

  selectedAuditableArea: AuditableAreasDTO;
  selectedChecklist: CkeckListItemDTO;

  update: boolean = false;
  newDiv: boolean = true;

  private subscriptions: Subscription[] = [];

  constructor(
    private messageService: MessageService,
    private checkListService: CheckListService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) {}

  ngOnInit() {
    if (this.config.data?.checklist) {
      this.checklistInfo = this.config.data.checklist;
      this.update = true;
      this.newDiv = false;
    }

    if (this.config.data?.auditableArea) {
      this.auditableArea = this.config.data.auditableArea;     
   
    }
  }

  public submitChecklist(checklistForm: NgForm): void {
    if (this.update) {
      this.updateChecklist(checklistForm);
    } else {
      this.addChecklist(checklistForm);
    }
  }

  public addChecklist(addDivForm: NgForm): void {
    let checkList: CkeckListItemDTO = addDivForm.value;
    checkList.auditableArea = new AuditableAreasDTO();
    checkList.auditableArea.id = this.auditableArea.id;
    this.subscriptions.push(
      this.checkListService
        .addCheckList(checkList)
        .subscribe((response: any) => {          
          this.messageService.clear();
          this.ref.close(response);
        })
    );
  }
  

  public updateChecklist(updateDivForm: NgForm): void {
    const checkList: CkeckListItemDTO = updateDivForm.value;
    checkList.id = this.checklistInfo.id;
    this.subscriptions.push(
      this.checkListService
        .updateCheckList(checkList)
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

  public closeDialog(): void {
    this.ref.close();
  }
}
