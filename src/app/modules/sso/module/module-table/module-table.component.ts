import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Module } from '../../../../models/sso-models/module';
import { ModuleService } from '../../../../services/sso-services/module.service';
import { Router } from '@angular/router';
import { ConfirmationService, Message, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-select',
  templateUrl: './module-table.component.html',
  styleUrls: ['./module-table.component.scss']
})
export class ModuleTableComponent {

  public moduleR: Module[] = [];
  public modules: Module[] = [];
  selectedCustomer1: Module;
  deleteId: number = 0;
  position: string;
  msgs: Message[] = [];
  updatedModules: Module[];

  constructor(private moduleService: ModuleService,private router:Router,private confirmationService: ConfirmationService,
    private messageService: MessageService,private primengConfig: PrimeNGConfig) { }

  ngOnInit(){
    this.getModules();
    this.primengConfig.ripple = true;
  }
  updateModules(id: number): void{
    this.getModule(id);
    this.router.navigate(['updateModule',id]);
  }

  deleteBox(id: number):void{
    this.deleteId = id;
    this.moduleService.deleteModule(this.deleteId).subscribe(
      (response: void) => {
        this.getModules();
      },
      (error: HttpErrorResponse) =>{

        this.getModules();
      }
      );
  }

  confirmPosition(position: string, id: number) {
    this.position = position;
    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.deleteBox(id);
            this.msgs = [{severity:'success', summary:'Confirmed', detail:'Record deleted'}];
        },
        reject: () => {
            this.msgs = [{severity:'error', summary:'Rejected', detail:'Record not deleted'}];
        },
        key: "positionDialog"
    });
}

checkStatus(index: any) {
//   let output: string;
//   await Promise.all(
//     this.modules.map(module =>
//       this.moduleService.checkApi(this.modules[index].url).toPromise().then(response => {
//         if (response.status === 401 || response.status === 403) {
//           output = 'Online';
//         } else {
//           output = 'Offline';
//         }
//       })
//     )
//   );
//   return output;
}


  public getModules(): void {
    this.moduleService.getModules().subscribe(
      (response: Module[]) => {
        this.modules = response;
      },
      (error: HttpErrorResponse) =>{

      }
      );
  }



  public deleteModule(): void{
    this.moduleService.deleteModule(this.deleteId).subscribe(
      (response: void) => {
        this.getModules();
      },
      (error: HttpErrorResponse) =>{
        this.getModules();
      }
      );
  }



  public getModule(id: number): Module[] {
    this.moduleService.getModule(id).subscribe(
      (response: Module) => {
        this.moduleR = [response];

      },
      (error: HttpErrorResponse) =>{

      }
      );
      return this.moduleR;
  }

}
