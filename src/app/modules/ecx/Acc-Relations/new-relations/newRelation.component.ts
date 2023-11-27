import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { AccountRelation } from "../../../../models/ecx-models/account-relation";
import { AccountRelationService } from "../../../../services/ecx-services/account-relation.service";

@Component({
  selector: 'newRelation',
  templateUrl: './newRelation.component.html',
  styleUrls: ['./newRelation.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class NewRelationComponent implements OnDestroy {

  public accountRelationInfo: AccountRelation = new AccountRelation();

  selectedaccountRelation: AccountRelation;
  accountRelationR: AccountRelation[] = [];

  update: boolean = false;
  newDiv: boolean = true;

  private subscriptions: Subscription[] = [];

  constructor(
    private messageService: MessageService,
    private accountRelationService: AccountRelationService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) {}

  ngOnInit() {

    if (this.config.data?.accountRelation) {
      this.accountRelationInfo = this.config.data.accountRelation;
      this.update = true;
      this.newDiv = false;
    }
    if (this.config.data?.accountRelation) {
      this.accountRelationInfo = this.config.data.accountRelation;
    }
  }

  public submitaccountRelation(accountRelationForm: NgForm): void {
    if (this.update) {
      this.updateaccountRelation(accountRelationForm);
    } else {
      this.addaccountRelation(accountRelationForm);
    }
  }



  public addaccountRelation(addDivForm: NgForm): void {
    this.subscriptions.push(
      this.accountRelationService
        .addAccount(addDivForm.value)
        .subscribe((response: any) => {
          this.messageService.clear();
          this.ref.close(response);
        })
    );
  }

  public updateaccountRelation(updateDivForm: NgForm): void {
    const accountRelation: AccountRelation = updateDivForm.value;
    accountRelation.id = this.accountRelationInfo.id;
    this.subscriptions.push(
      this.accountRelationService
        .updateAccount(accountRelation)
        .subscribe((response: any) => {
          this.messageService.clear();
          this.ref.close(response);
        })
    );
  }

  public getaccountRelationInfo(id: number): AccountRelation[] {
    let sendAcc = new AccountRelation();
    sendAcc.id = id;
    this.subscriptions.push(
      this.accountRelationService
        .getAccount(sendAcc)
        .subscribe((response: any) => {
          this.accountRelationR = [response.result];
          this.accountRelationInfo = response.result;
          this.selectedaccountRelation = this.accountRelationInfo;
        })
    );
    return this.accountRelationR;
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  public closeDialog(): void {
    this.ref.close();
  }
}
