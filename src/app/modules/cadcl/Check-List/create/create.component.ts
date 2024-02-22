import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { CADailyCheckList } from 'src/app/models/cadcl-models/ca-daily-checklist'
import { ChecklistService } from 'src/app/services/cadcl-services/checklist.service';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class CreateComponent {
  public cDDailyCheckList:  CADailyCheckList = new CADailyCheckList();

  selectedDDDailyCheckList: CADailyCheckList;
  cDDailyCheckListR: CADailyCheckList[] = [];

  update: boolean = false;
  newDiv: boolean = true;
  selectedFile: any;
  imageURL: string;

  private subscriptions: Subscription[] = [];

  constructor(
    private messageService: MessageService,
    private checklistService: ChecklistService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) {
    this.cDDailyCheckList.emails = [];
  }

  ngOnInit() {
    if (this.config.data?.cAChecklist) {
      this.cDDailyCheckList = this.config.data.cAChecklist;
      this.update = true;
      this.newDiv = false;
    }
    if (this.config.data?.cAChecklist) {
      this.cDDailyCheckList = this.config.data.cAChecklist;
    }
  }

  public submitcAChecklist(cAChecklistForm: NgForm): void {
    if (this.update) {
      this.updatecAChecklist(cAChecklistForm);
    } else {
      this.addcAChecklist(cAChecklistForm);
    }
  }



  public addcAChecklist(addDivForm: NgForm): void {
    const formData = new FormData();
    formData.append('inquiryType', addDivForm?.value.inquiryType);
    if (this.selectedFile) {
      formData.append('attachement', this.selectedFile);
    }

    this.subscriptions.push(
      this.checklistService
        .addCaDailyChecklist(addDivForm.value)
        .subscribe((response: any) => {
          this.messageService.clear();
          this.ref.close(response);
        })
    );
  }

  public updatecAChecklist(updateDivForm: NgForm): void {
    const cAChecklist: CADailyCheckList = updateDivForm.value;
    cAChecklist.id = this.cDDailyCheckList.id;
    this.subscriptions.push(
      this.checklistService
        .updateCaDailyChecklist(cAChecklist)
        .subscribe((response: any) => {
          this.messageService.clear();
          this.ref.close(response);
        })
    );
  }

  public getcDDailyCheckList(id: number): CADailyCheckList[] {
    let sendAcc = new CADailyCheckList();
    sendAcc.id = id;
    this.subscriptions.push(
      this.checklistService
        .getCaDailyChecklist(sendAcc.id)
        .subscribe((response: any) => {
          this.cDDailyCheckListR = [response.result];
          this.cDDailyCheckList = response.result;
          this.selectedDDDailyCheckList = this.cDDailyCheckList;
        })
    );
    return this.cDDailyCheckListR;
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e) => (this.imageURL = reader.result as string);

      reader.readAsDataURL(file);
    }
  }

  email = '';

  addEmail() {
    if (this.email && !this.cDDailyCheckList.emails.includes(this.email)) {
        this.cDDailyCheckList.emails.push(this.email);
        this.email = '';
    }
    console.log(this.cDDailyCheckList.emails);
    
  }

  removeEmail(index: number) {
      this.cDDailyCheckList.emails.splice(index, 1);
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
