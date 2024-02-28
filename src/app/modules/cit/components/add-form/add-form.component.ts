import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CitIntegrationService } from '../../services/cit.integration.service'
import { DetailViewComponent } from '../detail-view/detail-view.component';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService, TranslationKeys } from 'primeng/api';
import { CobIssueDTO } from '../../models/CobIssueDTO';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent {
  closeDialog(): void {
    this.ref.close();
  }

  constructor(private datePipe: DatePipe,private router: Router, private service: CitIntegrationService, private dialogService: DialogService ,private ref:DynamicDialogRef, private messageService: MessageService,) { }

 




  CobDTOList: any=[];
  CobDTOList20: any=[];
  flag = ""
  CobDTOStage: any = [];

  public addCobDTO(addForm: NgForm) {
    const formattedDate = this.datePipe.transform(addForm.value.date, 'yyyy-MM-ddTHH:mm:ss');
    addForm.value.data = formattedDate;
    this.service.addCobDTO(addForm.value).subscribe(
      (response: any) => {
this.ref.close(response);
        // this.entryAdded.emit(response.result);
        if (response.message != "success") {
          alert(response.message)
         

        }
        else {
          
          this.flag = response.message;
      
          
        }

      },
      (error: HttpErrorResponse) => { alert(error.message); }






    );




  }







}