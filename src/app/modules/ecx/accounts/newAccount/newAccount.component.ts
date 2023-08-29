import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AccountInfo } from '../../../../models/ecx-models/account-info';
import { AccountInfoService } from '../../../../services/ecx-services/account-info.service';


@Component({
  selector: 'app-form-controls',
  templateUrl: './newAccount.component.html',
  styleUrls: ['./newAccount.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class NewAccountComponent {

  public accounts: AccountInfo[] = [];
  public accountR: AccountInfo[] = [];
  public accountInfo: AccountInfo;
  selectedAccountInfo: AccountInfo;
  selectedState: string;
  states: any[] = [
    {name: 'Active', value: 'Active'},
    {name: "Inactive", value: "Inactive"}
  ];
  route?:ActivatedRoute;
  update: Boolean = false;
  newDiv: Boolean = true;
  checkedAccount: AccountInfo;
  public idY:number;
  uploadedFiles: any[] = [];

  created: boolean = false;

  checking: boolean = false;

  constructor( private messageService: MessageService, private accountService: AccountInfoService, private activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(){
    this.getAccountInfos();
    let x = this.activatedRoute.snapshot.paramMap.get("id");
    this.idY = +x;
    if(this.idY){
      this.getAccountInfo(this.idY);
      this.update = true;
      this.newDiv = false;
    }
  }

  public addAccountInfo(addDivForm: NgForm): void {

    this.accountService.addAccount(addDivForm.value).subscribe(
      (response: any) => {
        console.log(response)
        this.getAccountInfos();
        if(response.status){

          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: response.message2
          });
          setTimeout(() => {
          }, 1000);
          this.router.navigate(['ecx/account/accountTable']);
          this.created = true;
        }else{

          this.messageService.add({
            severity: 'error',
            summary: 'Faild',
            detail: response.message2
          });
          setTimeout(() => {
          }, 1000);
        }
      },
      (error: any) =>{

      }
      );
  }

  public addAnother(){
    this.created = false;
  }

  public cancelChecked(){
    this.checkedAccount = null;
  }

  public updateAccountInfo(updateDivForm: NgForm): void {

      this.accountService.updateAccount(updateDivForm.value).subscribe(
        (response: any) => {
          console.log(response.result)
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Account updated Successfully'
          });
          setTimeout(() => {
          }, 1000);
          this.router.navigate(['ecx/account/accountTable']);
          this.getAccountInfos();
        },
        (error: HttpErrorResponse) =>{
          this.messageService.add({
            severity: 'error',
            summary: 'Faild',
            detail: 'Account update faild'
          });
          setTimeout(() => {
          }, 1000);
        }
        );
  }
  public getAccountInfo(id: number): AccountInfo[] {
    let sendAcc = new AccountInfo();
    sendAcc.id = id
    this.accountService.getAccount(sendAcc).subscribe(
      (response: any) => {
        this.accountR = [response.result];
        this.accountInfo = response.result;
        console.log(this.accountInfo)
        this.selectedAccountInfo = this.accountInfo;
      },
      (error: HttpErrorResponse) =>{
        this.messageService.add({
          severity: 'error',
          summary: 'Faild',
          detail: error.message
        });
        setTimeout(() => {
        }, 1000);

      }
      );
      return this.accountR;
  }


  public getAccountInfos(): void {
    this.accountService.getAccounts().subscribe(
      (response: AccountInfo[]) => {
        this.accounts = response;
        console.log(this.accounts)

      },
      (error: HttpErrorResponse) =>{
        this.messageService.add({
          severity: 'error',
          summary: 'Faild',
          detail: error.message
        });
        setTimeout(() => {
        }, 1000);

      }
      );
  }


  public checkAccount(accountNumber: NgForm): void{
    this.checking = true;
    this.accountService.checkAccount(accountNumber.value.accountNumber).subscribe(
      (response: AccountInfo) =>{
        this.checkedAccount = response;
        if( this.checkedAccount != null){

          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Account verified'
          });
          setTimeout(() => {
          }, 1000);

        }else{

          this.messageService.add({
            severity: 'error',
            summary: 'Faild',
            detail: 'Account not found'
          });
          setTimeout(() => {
          }, 1000);
        }
        this.checking = false;
      },
      (error: HttpErrorResponse) =>{
        console.log(error.message);

        this.messageService.add({
          severity: 'error',
          summary: 'Faild',
          detail: 'Connection failed'
        });
        this.checking = false;
      }
    );
  }

}
