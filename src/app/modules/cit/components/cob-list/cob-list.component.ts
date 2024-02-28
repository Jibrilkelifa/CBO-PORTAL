import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CitIntegrationService} from '../../services/cit.integration.service';
import {SecurityServiceService} from '../../services/security-service.service';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { DetailViewComponent } from '../detail-view/detail-view.component';
import { NgForm } from '@angular/forms';
import { AddFormComponent } from '../add-form/add-form.component';
import { CobIssueDTO } from '../../models/cobIssueDTO';

@Component({
  selector: 'app-cob-list',
  templateUrl: './cob-list.component.html',
  styleUrls: ['./cob-list.component.scss']
})
export class CobListComponent {

  constructor(private securityService:SecurityServiceService,private router: Router, private service: CitIntegrationService, private dialogService: DialogService, private messageService: MessageService,) { }

  detailView(cob: CobIssueDTO): void {
    const ref = this.dialogService.open(DetailViewComponent, {
      header: 'COB Issue Detail',
      draggable: true,
      width: '90%',
      data: { cob },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 20000,
    });
    ref.onClose.subscribe((response: any) => {
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
      this.getCobDTOList();
    });
  }


  addForm(): void {
    const ref = this.dialogService.open(AddFormComponent, {
      header: 'Add COB Issue',
      draggable: true,
      width: '65%',
      data: {  },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 20000,
    });
    ref.onClose.subscribe((response: any) => {

      if (response.status) {
        this.messageService.add({
          severity: 'COB Issue successfully Added',
          summary: 'Success',
          detail: response.message,
          
        }
        );
        this.getCobDTOList();
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Failed',
          detail: response.message,
        });
      }

     
    });
  }

  cobDTOList: any;
  flag = ""
  CobDTOStage: any = [];
  ngOnInit(): void {
    


   
   if(this.securityService.hasRole("ROLE_CIST_ADMIN")){this.getCobDTOList();}
   else{
    this.router.navigate(['login']);
   }

  }



  public getCobDTOList(): void {
    this.service.getListCobDTO().subscribe(
      (response) => {

        this.cobDTOList = response.result.reverse();
        console.log(this.cobDTOList);

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public addCobDTO(addForm: NgForm) {

    this.service.addCobDTO(addForm.value).subscribe(
      (response: any) => {

        // this.entryAdded.emit(response.result);
        if (response.message != "success") {
          alert(response.message)
        }
        else {
          this.flag = response.message;
          this.getCobDTOList();
      
        }

      },
      (error: HttpErrorResponse) => { alert(error.message); }






    );




  }






}
