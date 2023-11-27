import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Module } from '../../../models/sso-models/module';
import { ModuleService } from '../../../services/sso-services/module.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { ECXServiceService } from '../../../services/ecx-services/ecx-service.service';
import { UpdateHistory } from '../../../models/ecx-models/update-history';

@Component({
  selector: 'app-select',
  templateUrl: './update-history.component.html',
  styleUrls: ['./update-history.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class UpdateHistoryComponent {

  public moduleR: Module[] = [];
  public modules: Module[] = [];
  selectedCustomer1: Module;
  deleteId: number = 0;
  position: string;
  msgs: Message[] = [];
  updateHistory: UpdateHistory[]=[];
  failed: number = 0;
  success: number = 0;
  flag: string;
  batchNumber: number;
  constructor(private ecxService: ECXServiceService,private router:Router,private confirmationService: ConfirmationService,
    private messageService: MessageService,private primengConfig: PrimeNGConfig,  private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    var x = this.activatedRoute.snapshot.paramMap.get("batchNumber");
    this.batchNumber = +x;
    if(this.batchNumber){
      this.getHistory(this.batchNumber);
    }
    this.primengConfig.ripple = true;
  }


  public getHistory(batchNumber: number): void{
    this.ecxService.getHistory(batchNumber).subscribe(
      (response: any) => {
        this.updateHistory = response.result;
        console.log(this.updateHistory)
        for (let j = 0; j < this.updateHistory.length; j++) {
          this.flag = this.updateHistory[j].successFlg
          if(this.flag == 'N'){
            this.failed = this.failed + 1
          }
        }
        this.success = Number(this.updateHistory.length - this.failed)
      },
      (errors: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: errors.error.message });
      }
    );
  }


}
