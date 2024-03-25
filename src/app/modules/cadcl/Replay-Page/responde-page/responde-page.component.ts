import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { CADailyCheckList } from 'src/app/models/cadcl-models/ca-daily-checklist';
import { ChecklistService } from 'src/app/services/cadcl-services/checklist.service';
import { CAReplayCheckList } from 'src/app/models/cadcl-models/ca-replay-checklist';
import { CaResponseService } from 'src/app/services/cadcl-services/ca-response.service';
import { CusInfo } from 'src/app/models/cadcl-models/cus-info';
interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-responde-page',
  templateUrl: './responde-page.component.html',
  styleUrls: ['./responde-page.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class RespondePageComponent {
  @ViewChild('scrollTraget') private scrollTraget: ElementRef;

  actionTaken = [
    { label: 'Account Blocked', value: 'Account Blocked' },
    { label: 'Amount Blocked', value: 'Amount Blocked' },
    { label: 'Debit Freez', value: 'Debit Freez' },
    { label: 'Other', value: 'other' },
  ];

  selectedAction = "";
  newDiv: boolean = true;
  showForm = false;
  showFilepop = false;
  other: boolean = false;
  buttonLabel = 'Replay';
  selectedFile: any;
  imageURL: string;
  fileLinks: String[];
  replayFileLinks: String[];
  cusInfos: CusInfo[] = [];
  cusInfo: CusInfo = new CusInfo();
  constructor( private activatedRoute: ActivatedRoute,
    private caChecklistService: ChecklistService,
    private caResponseService: CaResponseService,
    private router:Router,
    private messageService: MessageService){
    
  }
  
  private subscriptions: Subscription[] = [];
  objectId: number;
  caChecklist: CADailyCheckList;
  public replayChecklist: CAReplayCheckList = new CAReplayCheckList();
  ngOnInit(){
    var x = this.activatedRoute.snapshot.paramMap.get("id");
    this.objectId = +x;
    if(this.objectId){
      this.getcaChecklist(this.objectId);
    }
  }


  getcaChecklist(id: number): void {
    var branch = localStorage.getItem('branchId');
    console.log('branchId ',branch);

    this.subscriptions.push(
      this.caResponseService.getBranchCaDailyChecklistById(id,branch).subscribe(
        (response: any) => {
          this.caChecklist = response;
          this.replayChecklist = this.caChecklist?.replyCheckLists[0];
          console.log(response);
          if(this.caChecklist?.replyCheckLists[0].replayed){
            this.newDiv = false;
            this.cusInfos = this.caChecklist?.replyCheckLists[0].cusInfoRes;
            this.replayFileLinks = this.caChecklist?.replyCheckLists[0].attachments.split(";").filter((atach) => atach);
            this.selectedAction = this.caChecklist?.replyCheckLists[0].activityPerformed.toString();
          }
          
          this.fileLinks = this.caChecklist.attachments.split(";").filter((atach) => atach);
          console.log(this.fileLinks);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }
  public replay(updateDivForm: NgForm): void{
    if (this.newDiv) {
      this.replayAChecklist(updateDivForm);
    }else{
      this.updateReplayAChecklist(updateDivForm);
    }
  }

  public replayAChecklist(updateDivForm: NgForm): void {
    this.addCusInfo();
    const formData = new FormData();
    formData.append('id', this.replayChecklist.id.toString());
    formData.append('description', updateDivForm.value.description);
    formData.append('justification', updateDivForm.value.justification);
    formData.append('checklistId', this.objectId.toString());
    formData.append('replayedUser',localStorage.getItem('name'));
    formData.append('userPosition', localStorage.getItem('title'))
    formData.append('cusResps', JSON.stringify(this.cusInfos));
    
    if (this.other) {
      formData.append('activityPerformed', updateDivForm.value.otherActivityPerformed)
    }else{
      formData.append('activityPerformed', updateDivForm.value.activityPerformed.value)
    }

    for (let index = 0; index < this.uploadedFiles.length; index++) {
      console.log(`file${index + 1}`, this.uploadedFiles[index]);
      
      formData.append(`file${index + 1}`, this.uploadedFiles[index]);
    }
    this.subscriptions.push(
      this.caChecklistService
        .replayCaDailyChecklist(formData)
        .subscribe((response: any) => {
          console.log(response);
          if (response.status) {
            this.showForm = false;
            this.toggleForm();
            this.getcaChecklist(this.objectId);
            this.messageService.add({
              severity: 'Thank You!',
              summary: 'Your response has been received.',
              detail: response.message,
            });
          } else {
            this.messageService.add({
              severity: 'Error',
              summary: 'Failed to save response',
              detail: response.message,
            });
          }
          
        })
    );
  }

  public updateReplayAChecklist(updateDivForm: NgForm): void {
    this.addCusInfo();
    const formData = new FormData();
    formData.append('id', this.replayChecklist.id.toString())
    formData.append('description', updateDivForm.value.description);
    formData.append('justification', updateDivForm.value.justification);
    formData.append('checklistId', this.objectId.toString());
    formData.append('replayedUser',localStorage.getItem('name'));
    formData.append('userPosition', localStorage.getItem('title'))
    formData.append('cusResps', JSON.stringify(this.cusInfos));
    
    if (this.other) {
      formData.append('activityPerformed', updateDivForm.value.otherActivityPerformed)
    }else{
      formData.append('activityPerformed', updateDivForm.value.activityPerformed.value)
    }

    for (let index = 0; index < this.uploadedFiles.length; index++) {
      console.log(`file${index + 1}`, this.uploadedFiles[index]);
      
      formData.append(`file${index + 1}`, this.uploadedFiles[index]);
    }

    this.subscriptions.push(
      this.caChecklistService
        .updateReplayCaDailyChecklist(formData)
        .subscribe((response: any) => {
          console.log(response);
          if (response.status) {
            this.showForm = false;
            this.toggleForm();
            this.getcaChecklist(this.objectId);
            this.messageService.add({
              severity: 'Thank you!',
              summary: 'Your response has been updated.',
              detail: response.message,
            });
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Failed',
              detail: response.message,
            });
          }
        })
    );
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
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }
      console.log(this.uploadedFiles);
      
      //this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }



  toggleForm() {
    this.showForm = !this.showForm;
    this.buttonLabel = this.showForm ? 'Cancel' : 'Replay';
}

  escalate(){
    this.backToList();
  }

  getFile(link: String){
    this.caChecklistService.getFile(link).subscribe((response: any)  => {
      console.log(response);
      
      const blob = new Blob([response], { type: response.type });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = "ecx_updated";
      link.click();
      window.URL.revokeObjectURL(url);
    })
  }

  scrollToBottom(){
    this.scrollTraget.nativeElement.scrollIntoView({ behavior: 'smooth'})
  }

  backToList() {
    this.router.navigate(['cao/checklists/checklist']);
  }

  addCusInfo(){
    console.log(this.cusInfo);
    
    if (this.cusInfo.accountNumber) {
        this.cusInfos.push(this.cusInfo);
        this.cusInfo = new CusInfo();
    }
  }
  removeCusInfo(index: number){
    this.cusInfos.splice(index, 1);
  }

removeCheckListFile(filelink: String) {
  this.caChecklistService
      .deleteReplyCheklistFile(this.replayChecklist.id, filelink)
      .subscribe((response: any) => {
        console.log(response);
        if (response.status) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: response.message,
          });
          this.getcaChecklist(this.objectId);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Failed',
            detail: response.message,
          });
        }
        this.closeDialog();
      });
}

closeDialog() {
  this.showFilepop = false;
}

showFileDialog() {
    this.showFilepop = true;
}

onFileUpload(event: any) {

  var formData = new FormData();
    
    formData.append(`file`, event.files[0]);

    this.caChecklistService
        .addReplyCheklistFile(this.replayChecklist.id, formData)
        .subscribe((response: any) => {
          console.log(response);
          if (response.status) {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: response.message,
            });
            this.getcaChecklist(this.objectId);
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Failed',
              detail: response.message,
            });
          }
          this.closeDialog();
        });
  }

  onCategoryChange() {
    this.other = false;
    if(this.replayChecklist.activityPerformed["value"] == 'other'){
      this.other = true;
    }
  }

}