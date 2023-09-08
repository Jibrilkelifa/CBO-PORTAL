import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Module } from '../../../models/sso-models/module';
import { ModuleService } from '../../../services/sso-services/module.service';
import { Router } from '@angular/router';
import { ConfirmationService, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { ECXServiceService } from '../../../services/ecx-services/ecx-service.service';
import { FileUpdateHistory } from '../../../models/ecx-models/file-update-history';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-select',
  templateUrl: './update-file-history.component.html',
  styleUrls: ['./update-file-history.component.scss'],
})
export class UpdateFileHistoryComponent {

  public moduleR: Module[] = [];
  public modules: Module[] = [];
  selectedCustomer1: Module;
  deleteId: number = 0;
  position: string;
  msgs: Message[] = [];
  fileUpdateHistory: FileUpdateHistory[]=[];
  failed: number = 0;
  success: number = 0;
  flag: string;
  time: Date;
  formattedDate: string;
  createdTime = new Date(2023, 5, 20, 14, 10, 30, 543990000);
  constructor(private ecxService: ECXServiceService,private router:Router,private confirmationService: ConfirmationService,
    private messageService: MessageService,private primengConfig: PrimeNGConfig) { }


  ngOnInit(){
    this.getFileHistory();
    this.primengConfig.ripple = true;
  }


  public getFileHistory(): void{
    this.ecxService.getFileHistory().subscribe(
      (response: any) => {
        this.fileUpdateHistory = response.result;
        console.log(this.fileUpdateHistory)
      },
      (errors: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: errors.error.message });
      }
    );
  }

  viewHistory(batchNumber: number) {
    this.router.navigate(['ecx/balance/updateHistory', batchNumber]);
  }



  public downloadFile(batchNumber: number): void{

      this.ecxService.getFileBatch(batchNumber).subscribe(
        (response: any) => {
          const blob = new Blob([response], { type: 'application/xml' });
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = "2023-05-02S_Thu";
          link.click();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Xml file downloaded'
        });
        },
        (error: HttpErrorResponse) =>{
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Xml file download failed'
        });
        }
        );
  }
}
