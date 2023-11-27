import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DCQService } from '../../../../services/icms-services/dcq-services/dcq.service';
import { ChequeTypeService } from '../../../../services/icms-services/dcq-services/cheque-type.service';
import { ActionTakenService } from '../../../../services/icms-services/dcq-services/action-taken.service';
import { OrganizationalUnitService } from '../../../../services/sso-services/organizational-unit.service';
import { TimeService } from '../../../../services/sso-services/time.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { DCQ } from "../../../../models/icms-models/dcq-models/dcq";
import { ChequeType } from '../../../../models/icms-models/dcq-models/cheque-type';
import { ActionTaken } from 'src/app/models/icms-models/dcq-models/action-taken';
import {Branch } from 'src/app/models/sso-models/branch';


@Component({
  selector: 'app-accordions',
  templateUrl: './new-dcq.component.html',
  styleUrls: ['./new-dcq.component.scss'],
  providers: [MessageService, ConfirmationService]
})

export class NewDCQComponent implements OnInit {
  public DCQs: DCQ[] = [];
  public DCQ: DCQ;

  public DCQR: DCQ[] = [];
  selectedDCQ: DCQ;
  public chequeTypes: ChequeType[] = [];
  selecteDCQType: ChequeType;
  public actionsTaken: ActionTaken[] = [];
  selectedActionTaken: ActionTaken;
  public selectedBranch;
  public selectedSubProcess;
  update: boolean = false;
  newDiv: boolean = true;
  public idY: number;
  msgs: Message[] = [];
  value: string;
  branchId: number = Number(localStorage.getItem('branchId'));
  subProcessId: number = Number(localStorage.getItem('subProcessId'));

  chequeNumber: string;
  currentDate: Date;
  datePresented: string;
  frequency: number = 1;
  accountNumber: string;
  alreadyClosed: string = 'Account already closed!'
  constructor(private router: Router, private messageService: MessageService, private DCQService: DCQService, private organizationalUnitService: OrganizationalUnitService, private timeService: TimeService, private activatedRoute: ActivatedRoute, private actionTakenService: ActionTakenService, private chequeTypeService: ChequeTypeService) { }

  ngOnInit() {
    
    this.getDCQs(this.branchId);
    this.getChequeTypes();
    this.getActionsTaken();
    this.getCurrentDate();
    let x = this.activatedRoute.snapshot.paramMap.get("id");
    this.idY = +x;
    this.selectedBranch = JSON.parse(localStorage.getItem("branch"));
    this.selectedSubProcess =JSON.parse(localStorage.getItem("subProcess"))
    

    if (this.idY) {
      this.getDCQ(this.idY);
      this.update = true;
      this.newDiv = false;
    }
  }
  

  searchFrequency(accountNumber: string): void {
    if (accountNumber.length === 13) {
      // call the service to get the frequency
      this.DCQService.getFrequency(accountNumber).subscribe(
        // handle the success response
        (response: any) => {
          // store the frequency in the component property
          this.frequency = response.count + 1;
          // do something else with the frequency if needed
        },
        // handle the error response
        error => {
          // display an error message or handle it in some other way
          console.error(error);
        }
      );
    }
    else {
      this.frequency = 1;
    }
  }

  // getOrganizationalUnit(branchId: number): void {
  //   this.organizationalUnitService.getOrganizationalUnit(branchId).subscribe(
  //     (response: any) => {
  //       this.selectedBranch = response;
  //       console.log("org. unit: "+ this.selectedBranch)
  //     }
  //   );
  // }

  getCurrentDate(): void {
    this.timeService.getDate().subscribe(
      (response: any) => {
        this.currentDate = new Date(response.time);

        this.datePresented = (this.currentDate.getMonth() + 1).toString() + "/" + this.currentDate.getDate().toString() + "/" + this.currentDate.getFullYear().toString();

      }
    );
  }

  public getDCQs(branchId: number): void {
    this.DCQService.getDCQForBranch(branchId).subscribe(
      (response: DCQ[]) => {
        this.DCQs = response;

      },
      (error: HttpErrorResponse) => {

      }
    );
  }

  public getChequeTypes(): void {
    this.chequeTypeService.getChequeTypes().subscribe(
      (response: ChequeType[]) => {
        this.chequeTypes = response;

      },
      (error: HttpErrorResponse) => {

      }
    );
  }

  public getActionsTaken(): void {
    this.actionTakenService.getActionsTaken().subscribe(
      (response: ActionTaken[]) => {
        this.actionsTaken = response;
      },
      (error: HttpErrorResponse) => {

      }
    );
  }

  public getDCQ(id: number): DCQ {
    this.DCQService.getDCQ(id).subscribe(
      (response: DCQ) => {
        this.DCQ = response;

      },
      (error: HttpErrorResponse) => {

      }
    );
    return this.DCQ;
  }

  public addDCQ(addDCQForm: NgForm): void {
    this.DCQService.addDCQ(addDCQForm.value).subscribe(
      (response: any) => {
        this.getDCQs(this.branchId);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: "Dishonored Cheque Added Successfully!"
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);

      },
      (error: HttpErrorResponse) => {


      }
    );
  }

  public updateDCQ(updateDCQ: NgForm): void {
    if (updateDCQ.value.otherInsuranceCoverageType == undefined) {
      updateDCQ.value.otherInsuranceCoverageType = "";
    }
    this.DCQService.updateDCQ(updateDCQ.value).subscribe(
      (response: DCQ) => {
        this.DCQ = response;
        this.getDCQs(this.branchId);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: "Dishonored Cheque updated Successfully!"
        });
        setTimeout(() => {
          this.router.navigate(['ICMS/DCQ/viewDCQ']);
        }, 1500);
        this.getDCQs(this.branchId);
      },
      (error: HttpErrorResponse) => {

      }
    );
  }
}
