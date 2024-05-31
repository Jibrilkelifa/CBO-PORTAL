import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CADailyCheckList } from 'src/app/models/cadcl-models/ca-daily-checklist';
import { ChecklistService } from 'src/app/services/cadcl-services/checklist.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BranchService } from 'src/app/modules/sasv/services/branch-service/branch.service';
import { Branch } from 'src/app/modules/sasv/models/branch';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [MessageService, ConfirmationService, ConfirmDialogModule]
})
export class DetailComponent {

  constructor( private activatedRoute: ActivatedRoute,
    private caChecklistService: ChecklistService,
    private router:Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private branchService: BranchService){
    
  }
  
  private subscriptions: Subscription[] = [];
  objectId: number;
  caChecklist: CADailyCheckList;
  fileLinks: String[];
  replayFileLinks: String[];
  public selectedBranche: string[] = [];
  public branchList: Branch[] = [];
  selectedFile: any;
  file: File = null;
  rejectId: number;

  ngOnInit(){
    var x = this.activatedRoute.snapshot.paramMap.get("id");
    this.objectId = +x;
    if(this.objectId){
      this.getcaChecklist(this.objectId);
    }
  }

  visible: boolean = false;
  rejectVisible:boolean = false;
  showFilepop: boolean = false;

  showDialog() {
    this.getBranchList();

      this.visible = true;
  }

  rejectDialog(idNumber: number) {
    this.rejectId = idNumber;
    this.rejectVisible =  !this.rejectVisible;
  }

  showFileDialog(){
    this.showFilepop = true;
  }

  closeDialog() {
      this.visible = false;
      this.showFilepop = false;
  }


  getcaChecklist(id: number): void {
    this.subscriptions.push(
      this.caChecklistService.getCaDailyChecklist(id).subscribe(
        (response: any) => {
          this.caChecklist = response;
          this.fileLinks = this.caChecklist.attachments.split(";").filter((atach) => atach);
          
          this.caChecklist.replyCheckLists = this.caChecklist.replyCheckLists.map(item => {
            return {
              ...item,
              replayFileLinks: item.attachments ? item.attachments.split(";").filter((atach) => atach) : []
            };

          });
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  getFile(path: String){
    this.caChecklistService.getFile(path).subscribe((response: any)  => {
      
      const blob = new Blob([response], { type: response.type });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = path.split("/")[3];
      link.click();
      window.URL.revokeObjectURL(url);
    })
  }

  getFileCl(path: String){
    this.caChecklistService.getFile(path).subscribe((response: any)  => {
      
      const blob = new Blob([response], { type: response.type });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = path.split("/")[4];
      link.click();
      window.URL.revokeObjectURL(url);
    })
  }

  closeChecklist(){
    this.backToList();
    this.caChecklistService
        .closeCaDailyChecklist(this.objectId)
        .subscribe((response: any) => {
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

  backToList() {
    this.router.navigate(['cao/checklists/checklist']);
  }

  rejectResponse(rejectForm: NgForm) {
    
    this.caChecklistService
        .rejectBranchRespose(this.rejectId, rejectForm.value.rejectionReason)
        .subscribe((response: any) => {
          this.rejectDialog(null);
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
        });
  }

  acceptResponse(id: number) {
    this.caChecklistService
    .acceptBranchRespose(id)
    .subscribe((response: any) => {
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
    });
  }

  removeBranch(id: number) {
    this.caChecklistService
        .removeBranchRequest(id)
        .subscribe((response: any) => {
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
        });
  }

  addBranch(addBranchForm: NgForm) {
    var branch = `${addBranchForm.value.branch.id}:${addBranchForm.value.branch.name}`;

    this.caChecklistService
        .addBranchToCheklist(this.objectId, branch)
        .subscribe((response: any) => {
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

  removeCheckListFile(filelink: String) {

    this.caChecklistService
        .deleteCheklistFile(this.objectId, filelink)
        .subscribe((response: any) => {
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


  addCheckListFile(event: any) {

    
    var formData = new FormData();
    this.selectedFile = event.files[0];
    formData.append(`file`, this.selectedFile);

    this.caChecklistService
        .addCheklistFile(this.objectId, formData)
        .subscribe((response: any) => {
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


  confirm1(event: Event, id: number) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure that you want to accept?',
        header: 'Accept Confirmation',
        icon: 'pi pi-exclamation-triangle',
        acceptIcon:"none",
        rejectIcon:"none",
        rejectButtonStyleClass:"p-button-text",
        accept: () => {
            this.acceptResponse(id);
            this.getcaChecklist(this.objectId);
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Reject', detail: 'Action Cancelled', life: 3000 });
        }
    });
}

confirmClose(event: Event) {
  this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you certain you want to close the checklist? Please note that this action cannot be undone?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon:"none",
      rejectIcon:"none",
      rejectButtonStyleClass:"p-button-text",
      accept: () => {
          this.closeChecklist();
      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Reject', detail: 'Action Cancelled', life: 3000 });
      }
  });
}

confirmBranchRemove(event: Event, id: number) {
  this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to remove this branch?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon:"none",
      rejectIcon:"none",
      rejectButtonStyleClass:"p-button-text",
      accept: () => {
          this.removeBranch(id);
          this.getcaChecklist(this.objectId);
      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Cancelled', life: 3000 });
      }
  });
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
onFileChange(event: any){
  this.file = event.files[0];
}
onUpload(event: any) {
  var formData = new FormData();
    
    formData.append(`file`, event.files[0]);

    this.caChecklistService
        .addCheklistFile(this.objectId, formData)
        .subscribe((response: any) => {
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

removeFile(fileLink: String){
  alert(fileLink);
}
}
