import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { AccountInfo } from 'src/app/models/ecx-models/account-info';
import { AccountInfoService } from 'src/app/services/ecx-services/account-info.service';

@Component({
  selector: 'app-select',
  templateUrl: './accountTable.component.html',
  styleUrls: ['./accountTable.component.scss']
})
export class AccountTableComponent {

  public accounts: AccountInfo[] = [];
  public accountR: AccountInfo[] = [];
  public accountInfo: AccountInfo;
  selectedAccountInfo: AccountInfo;
  deleteId: number = 0;
  position: string;
  msgs: Message[] = [];

  constructor(private accountService: AccountInfoService,private router:Router,private confirmationService: ConfirmationService,
    private messageService: MessageService,private primengConfig: PrimeNGConfig) { }

  ngOnInit(){
    this.getAccountInfos();
    this.primengConfig.ripple = true;
  }
  updateAccountInfos(id: number): void{
    this.getAccountInfo(id);
    this.router.navigate(['updateAccount',id]);
  }

  deleteBox(id: number):void{
    this.deleteId = id;
    this.accountService.deleteAccount(this.deleteId).subscribe(
      (response: void) => {
        this.getAccountInfos();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message)
        this.getAccountInfos();
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


  public getAccountInfos(): void {
    this.accountService.getAccounts().subscribe(
      (response: any) => {
        this.accounts = response.result;
        console.log(this.accounts)
      },
      (error: HttpErrorResponse) =>{
        alert(error.message)
      }
      );
  }



  public deleteAccountInfo(): void{
    this.accountInfo.id = this.deleteId;
    this.accountService.getAccount(this.accountInfo).subscribe(
      (response: void) => {
        this.getAccountInfos();
      },
      (error: HttpErrorResponse) =>{
        this.getAccountInfos();
      }
      );
  }



  public getAccountInfo(id: number): AccountInfo[] {
    let sendAcc = new AccountInfo();
    sendAcc.id = id
    this.accountService.getAccount(sendAcc).subscribe(
      (response: AccountInfo) => {
        this.accountR = [response];
        console.log(this.accountR)
      },
      (error: HttpErrorResponse) =>{
        alert(error.message)
      }
      );
      return this.accountR;
  }

}
