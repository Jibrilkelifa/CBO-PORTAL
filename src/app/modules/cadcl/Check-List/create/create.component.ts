import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { CADailyCheckList } from 'src/app/models/cadcl-models/ca-daily-checklist'
import { ChecklistService } from 'src/app/services/cadcl-services/checklist.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Branch } from 'src/app/modules/sasv/models/branch';
import { BranchService } from 'src/app/modules/sasv/services/branch-service/branch.service';
import { HttpErrorResponse } from '@angular/common/http';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class CreateComponent {

  categories = [
    { label: 'Order given', value: 'order' },
    { label: 'Activities', value: 'activities' },
  ];

  orderItems = [
    { label: 'Blocking Account', value: 'Blocking Account' },
    { label: 'Post no Debit', value: 'Post no Debit' },
    { label: 'Release', value: 'Release' },
    { label: 'Payment', value: 'Payment' },
    { label: 'Information Request', value: 'Information Request' },
    { label: 'Other if any specify', value: 'other' },
  ];

  activitieItems = [
    { label: 'Account Opening', value: 'Account Opening' },
    { label: 'Signatory Change', value: 'Signatory Change' },
    { label: 'Balance Confirmation', value: 'Balance Confirmation' },
    { label: 'Insufficient Fund check/NSF', value: 'Insufficient Fund check/NSF' },
    { label: 'Disseminating  Information', value: 'Disseminating  Information' },
    { label: 'Other if any specify', value: 'other' },
  ];

  inquryTypes = [
    { label: 'Court', value: 'Court' },
    { label: 'Ministry of Justice', value: 'Ministry of Justice' },
    { label: 'NBE', value: 'NBE' },
    { label: 'FIS', value: 'FIS' },
    { label: 'ERCA', value: 'ERCA' },
    { label: 'Police', value: 'Police' },
    { label: 'Other', value: 'other' },
  ];

  selectedCategory: string;
  selectedCatItem: string;
  selectedCatItems: { label: string; value: string; }[];
  public cDDailyCheckList: CADailyCheckList = new CADailyCheckList();

  selectedDDDailyCheckList: CADailyCheckList;
  cDDailyCheckListR: CADailyCheckList[] = [];

  update: boolean = false;
  newDiv: boolean = true;
  other: boolean = false;
  otherType: boolean = false;
  selectedFile: any;
  imageURL: string;
  public branchList: Branch[] = [];
  public selectedDropdown: string;
  public selectedBranches: string[] = [];
  private subscriptions: Subscription[] = [];

  todayDate: Date = new Date();
  constructor(
    private messageService: MessageService,
    private checklistService: ChecklistService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private branchService: BranchService,
  ) {
    this.cDDailyCheckList.branches = [];
  }

  ngOnInit() {
    this.getBranchList();
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

  getBranchList(): void {
    this.branchService.getBranchList().subscribe(
      (response: any) => {
        this.branchList = response.result;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  public addcAChecklist(addDivForm: NgForm): void {
    const formData = new FormData();
    formData.append('referenceNum', addDivForm?.value.referenceNum);
    formData.append('inquiryReceived', addDivForm?.value.inquiryReceived);
    formData.append('deadline', addDivForm?.value.deadline);
    formData.append('requestedOrgan', addDivForm?.value.requestedOrgan);
    formData.append('numAccountSearched', addDivForm?.value.numAccountSearched);
    formData.append('numRequestedOrgans', addDivForm?.value.requestedOrgans);
    formData.append('numPersonSearched', addDivForm?.value.numPersonSearched)
    formData.append('description', addDivForm?.value.description);
    formData.append('caseOwner', localStorage.getItem('name'));
    formData.append('position', localStorage.getItem('name'));
    if(this.other){
      formData.append('category', addDivForm?.value.category);
    }else{
      formData.append('category', addDivForm?.value.category.value);
    }

    if (this.otherType) {
      formData.append('inquiryType', addDivForm?.value.otherInquiryType)
    }else{
      formData.append('inquiryType', addDivForm?.value.inquiryType.value)
    }

    console.log(this.uploadedFiles);

    for (let index = 0; index < this.uploadedFiles.length; index++) {
      console.log(`file${index + 1}`, this.uploadedFiles[index]);

      formData.append(`file${index + 1}`, this.uploadedFiles[index]);
    }
    console.log(addDivForm.value.branches);

    var branches = '';
    for (let index = 0; index < addDivForm.value.branches.length; index++) {
      branches += `${addDivForm.value.branches[index].id}:${addDivForm.value.branches[index].name},`;
    }

    formData.append('branchIds', branches);

    formData.forEach(function (value, key) {
      console.log(key + ": " + value);
    });
    this.subscriptions.push(
      this.checklistService
        .addCaDailyChecklist(formData)
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

  uploadedFiles: any[] = [];

  onUpload(event: UploadEvent) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
    console.log(this.uploadedFiles);
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  public closeDialog(): void {
    this.ref.close();
  }

  onCategoryChange() {
    this.selectedCatItems = [];
    if (this.cDDailyCheckList.catagoryMain['value'] == 'order') {
      this.selectedCatItems = this.orderItems;
      this.other = false;
      if(this.cDDailyCheckList.category["value"] == 'other'){
        this.cDDailyCheckList.category = '';
        this.other = true;
      }
    } else {
      this.selectedCatItems = this.activitieItems;
      this.other = false;
      if(this.cDDailyCheckList.category["value"] == 'other'){
        this.cDDailyCheckList.category = '';
        this.other = true;
      }
    }
  }

  onTypeChange() {
    this.otherType = false;
    if(this.cDDailyCheckList.inquiryType["value"] == 'other'){
      this.otherType = true;
    }
  }
}
