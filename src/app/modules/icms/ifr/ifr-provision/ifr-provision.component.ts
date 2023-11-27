import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IFRService } from '../../../../services/icms-services/ifr-services/ifr.service';
import { OrganizationalUnitService } from '../../../../services/sso-services/organizational-unit.service';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { IFR } from "../../../../models/icms-models/ifr-models/ifr";
import { CaseStatus } from '../../../../models/icms-models/ifr-models/case-status';
import { AllCategory } from '../../../../models/icms-models/all-category';
import { FraudType } from '../../../../models/icms-models/ifr-models/fraud-type';
import { SuspectedFraudsterProfession } from '../../../../models/icms-models/ifr-models/suspected-fraudster-profession';
import { Branch } from 'src/app/models/sso-models/branch';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accordions',
  templateUrl: './ifr-provision.component.html',
  styleUrls: ['./ifr-provision.component.scss'],
  providers: [MessageService, ConfirmationService]
})

export class IFRProvisionComponent implements OnInit {
  public caseId: string;
  public fraud: IFR;
  public rolesStr: string[] = [];
  public fraudR: IFR[] = [];
  public caseStatuses: CaseStatus[] = [];
  public fraudCategories: AllCategory[] = [];
  public fraudTypes: FraudType[] = [];
  public suspectedFraudsterProfessions: SuspectedFraudsterProfession[] = [];
  public datePresented: string;
  public fraudOccurrenceDate: Date;
  public fraudDetectionDate: string;

  public selectedCaseId: string;
  public selectedReasonForTheDelay: string;
  public selectedSuspectedFraudsterName: string;
  public selectedFraudOccurrencePlace: string;
  public selectedSuspectedFraudsterAddress: string;
  public selectedOtherFraudCategory: string;
  public selectedFraudType: string;
  public selectedFraudCommittingTechnique: string;
  public selectedOtherFraudType: string;
  public selectedActionTaken: string;
  public selectedFraudCause: string;
  public selectedAmountRecovered: string;
  public selectedSuspectedFraudsterProfession: string;
  public selectedReasonForFailedFraudAttempt: string;
  public selectedFraudAmount: string;
  public selectedOtherComment: string;
  public selectedFraudOccurrenceDate: string;
  public selectedCaseStatus: string;
  public selectedFraudDetectionDate: string;
  public selectedOtherSuspectedFraudsterProfession: string;
  public selectedFraudCategory: string;
  public selectedProvisionHeld: string;

  public selectedFraud: IFR;
  public selectedBranch;
  public selectedSubProcess;

  msgs: Message[] = [];
  value: string;

  branchId: number = Number(localStorage.getItem('branchId'));
  subProcessId: number = Number(localStorage.getItem('subProcessId'));

  preparedBy: string = localStorage.getItem('name');
  authorizedBy: string = "Not Authorized";
  daysAfterDetection: string;

  isOtherFraudCategorySelected: boolean = false;
  isOtherFraudTypeSelected: boolean = false;
  isOtherSuspectedFraudsterProfessionSelected: boolean = false;

  currentDate: Date;
  idY: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fraudService: IFRService,
    private messageService: MessageService,
    // private organizationalUnitService: OrganizationalUnitService
  ) { }

  ngOnInit() {
    this.populateRoles();
    // this.getOrganizationalUnit(this.branchId);
    let x = this.activatedRoute.snapshot.paramMap.get("id");
    this.idY = +x;
    this.getFraud(this.idY);
    this.selectedBranch = JSON.parse(localStorage.getItem("branch"));
    this.selectedSubProcess =JSON.parse(localStorage.getItem("subProcess"))
  }

  updateDaysAfterDetection() {
    this.daysAfterDetection = this.calculateDaysAfterDetection(this.selectedFraudDetectionDate).toString();
  }

  calculateDaysAfterDetection(detectionDate) {
    const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
    const currentDate = new Date().getTime();
    console.log("currentDate = " + currentDate)
    const year = parseInt(detectionDate.substr(0, 4));
    const month = parseInt(detectionDate.substr(5, 2)) - 1; // month is zero-indexed
    const day = parseInt(detectionDate.substr(8, 2));
    const hours = parseInt(detectionDate.substr(11, 2));
    const minutes = parseInt(detectionDate.substr(14, 2));
    const seconds = parseInt(detectionDate.substr(17, 2));
    const milliseconds = parseInt(detectionDate.substr(20, 3));
    const detectionDateObj = new Date(year, month, day, hours, minutes, seconds, milliseconds).getTime();
    console.log("detectionDate = " + detectionDateObj)
    const diffDays = Math.round(Math.abs((currentDate - detectionDateObj) / oneDay));
    return diffDays;
  }

  checkRole(roleName: string): boolean {
    let result: boolean = false; // declare a variable to store the result
    this.rolesStr.forEach(role => {
      if (role.indexOf(roleName) !== -1) {
        result = true; // assign true to the result if the role matches
      }
    });
    return result; // return the result at the end of the function
  }

  populateRoles(): void {
    let index = 0;
    let cond = localStorage.getItem('role_' + index);
    while (cond) {

      this.rolesStr.push(cond);
      index++;
      cond = localStorage.getItem('role_' + index);
    }
  }

  // getOrganizationalUnit(branchId: number): void {
  //   this.organizationalUnitService.getOrganizationalUnit(branchId).subscribe(
  //     (response: any) => {
  //       this.selectedBranch = response;
  //     }
  //   );
  // }
  

  public getFraud(id: number): IFR {
    this.fraudService.getFraud(id).subscribe(
      (response: IFR) => {
        this.fraud = response;
        console.log(this.fraud)
        this.selectedCaseId = this.fraud.caseId;
        this.selectedReasonForTheDelay = this.fraud.reasonForDelay;
        this.selectedSuspectedFraudsterName = this.fraud.suspectedFraudsterName;
        this.selectedFraudOccurrencePlace = this.fraud.fraudOccurrencePlace;
        this.selectedSuspectedFraudsterAddress = this.fraud.suspectedFraudsterAddress;
        this.selectedOtherFraudCategory = this.fraud.otherFraudCategory;
        this.selectedFraudType = this.fraud.fraudType.name;
        this.selectedFraudCommittingTechnique = this.fraud.fraudCommittingTechnique;
        this.selectedOtherFraudType = this.fraud.otherFraudType;
        this.selectedActionTaken = this.fraud.actionTaken;
        this.selectedFraudCause = this.fraud.fraudCause;
        this.selectedAmountRecovered = this.formatAmount(this.fraud.amountRecovered);
        this.selectedSuspectedFraudsterProfession = this.fraud.suspectedFraudsterProfession.name;
        this.selectedReasonForFailedFraudAttempt = this.fraud.reasonForFailedFraudAttempt;
        this.selectedFraudAmount = this.formatAmount(this.fraud.fraudAmount);
        this.selectedOtherComment = this.fraud.otherComment;
        this.selectedFraudOccurrenceDate = this.fraud.fraudOccurrenceDate;
        this.selectedCaseStatus = this.fraud.caseStatus.name;
        this.selectedFraudDetectionDate = this.fraud.fraudDetectionDate;
        this.selectedOtherSuspectedFraudsterProfession = this.fraud.otherSuspectedFraudsterProfession;
        this.selectedFraudCategory = this.fraud.allCategory.name;
        this.selectedProvisionHeld = this.fraud.provisionHeld;
        this.updateDaysAfterDetection();
      },
      (error: HttpErrorResponse) => {

      }
    );
    return this.fraud;
  }


  formatAmount(amount: string): string {
    // Convert the amount to a number and round it to two decimal places
    const roundedAmount = Number(this.addTrailingZeros(amount).replace(/,/g, '')).toFixed(2);

    // Split the amount into whole and decimal parts
    const [whole, decimal] = roundedAmount.split('.');

    // Format the whole part with commas between every three digits
    const formattedWhole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Return the formatted amount with the decimal part
    return `${formattedWhole}.${decimal}`;
  }

  addTrailingZeros(str: string): string {
    const decimalIndex = str.indexOf('.');
    if (decimalIndex === -1) {
      return `${str}.00`;
    }
    const decimalPlaces = str.length - decimalIndex - 1;
    if (decimalPlaces === 0) {
      return `${str}00`;
    } else if (decimalPlaces === 1) {
      return `${str}0`;
    } else if (decimalPlaces > 2) {
      return str.slice(0, decimalIndex + 3);
    }
    return str;
  }

  public calculateProvision(calculateProvisionForm: NgForm): void {
    this.fraudService.calculateProvision(calculateProvisionForm.value.id, calculateProvisionForm.value.provisionHeld).subscribe(
      (response: any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: "Provision Calculation Added Successfully!"
        });
        setTimeout(() => {
        }, 1000);
        this.getFraud(this.idY);
        this.router.navigate(['ICMS/Fraud/viewFraud']);
      },
      (error: HttpErrorResponse) => {

      }
    );
  }
}
