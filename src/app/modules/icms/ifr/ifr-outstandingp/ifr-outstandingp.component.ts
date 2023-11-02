import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, FilterService, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { IFRService } from '../../../../services/icms-services/ifr-services/ifr.service';
import { TimeService } from '../../../../services/sso-services/time.service';
import { OrganizationalUnitService } from '../../../../services/sso-services/organizational-unit.service'
import { IFR } from 'src/app/models/icms-models/ifr-models/ifr';
import * as XLSX from 'xlsx';
import { DialogService } from 'primeng/dynamicdialog';
import { SingleFraudCaseTableComponent } from '../ifr-single-case/ifr-single-case-table.component';

@Component({
  selector: 'app-accordions',
  templateUrl: './ifr-outstandingp.component.html',
  styleUrls: ['./ifr-outstandingp.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class FraudOutstandingpComponent {

  constructor( private filterService: FilterService, private dialogService: DialogService, private fraudService: IFRService, private router: Router, private confirmationService: ConfirmationService,
    private messageService: MessageService, private primengConfig: PrimeNGConfig, private timeService: TimeService, private organizationalUnitService: OrganizationalUnitService) { }

  downloadExcel(tableID: string) {

    let table = document.getElementById(tableID);

    // converts a DOM TABLE element to a worksheet
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(table, {raw:true});

    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // save to file
    XLSX.writeFile(wb, 'IncidentFraudReport.xlsx');

  }
  daysSinceFraudDetection: number;
  public frauds: IFR[] = [];
  public fraudR: IFR[] = [];
  public fraudc :IFR[] = [];
  public fraudo :IFR[] = [];
  public fraudp :IFR[] = [];
  public fraudn :IFR[] = [];
  public fraud: IFR;
  selectedFraud: IFR;
  deleteId: number = 0;
  msgs: Message[] = [];
  position: string;
  districtId: number;
  currentDate: Date;
 
  searchParameter: any[] =
    [
      { name: 'Case ID', value: 'caseId' },
      { name: 'Case Status', value: 'caseStatus.name' },
      { name: 'Fraud Cause', value: 'fraudCause' },
      { name: 'Fraud Amount', value: 'fraudAmount' },
      { name: 'Fraud Category', value: 'fraudCategory.name' },
      { name: 'Other Fraud Category', value: 'otherFraudCategory' },
      { name: 'Fraud Type', value: 'fraudType.name' },
      { name: 'Other Fraud Type', value: 'otherFraudType' },
      { name: 'Fraud Occurance Date', value: 'fraudOccurrenceDate' },
      { name: 'Fraud Detection Date', value: 'fraudDetectionDate' },
      { name: 'Fraud Occurance Place', value: 'fraudOccurrencePlace' },
      { name: 'Fraud Commting Technique', value: 'fraudCommittingTechnique' },
      { name: 'Delay Reason', value: 'reasonForDelay' },
      { name: 'Failed Attempt Reason', value: 'reasonForFailedFraudAttempt' },
      { name: 'Amount Recovered', value: 'amountRecovered' },
      { name: 'Action Taken', value: 'actionTaken' },
      { name: 'Fraudster Address', value: 'suspectedFraudsterAddress' },
      { name: 'Fraudster Name', value: 'suspectedFraudsterName' },
      { name: 'Fraudster Profession', value: 'suspectedFraudsterProfession.name' },
      { name: 'Other Fraudster Profession', value: 'otherSuspectedFraudsterProfession' },
      { name: 'Other Information', value: 'otherComment' },
      { name: 'incaseOfClosedOrWrittenOff', value: 'incaseOfClosedOrWrittenOff' },
      { name: 'Branch Name', value: 'branch.name' }
    ];
  selectedSearchParameter: any;
  filterTable(target: any, dataTable: any) {
    if (this.selectedSearchParameter) {
      dataTable.filter(target?.value, this.selectedSearchParameter.value, 'contains');
    }
  }

  minDate: Date;
  maxDate: Date;

  ngOnInit() {
    this.populateRoles();
    this.getFrauds(this.roles);

    this.getCurrentDate();
    this.outstandingp();
    this.primengConfig.ripple = true;
  }

  populateRoles(): void {
    let index = 0;
    let cond = localStorage.getItem('role_'+index);
    while(cond) {

      this.roles.push(cond);
      index++;
      cond = localStorage.getItem('role_'+index);
    }
  }

  filterByDate(dataTable: any) {
    dataTable.filter([this.minDate, this.maxDate], 'insuranceExpireDate', 'dateRange');
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

  getCurrentDate(): void {
    this.timeService.getDate().subscribe(
      (response: any) => {
        this.currentDate = new Date(response.time);
      }
    );
  }

  calculateDaysSinceFraudDetection(fraudDetectionDate: string): number {
    let date = new Date(fraudDetectionDate);
    let daysSinceFraudDetection= (this.currentDate.getTime() - date.getTime() ) / (1000 * 3600 * 24);
    return Math.ceil(daysSinceFraudDetection);
  }

  millisFromNowTo(fraudDetectionDate: string): string {

    return (this.calculateDaysSinceFraudDetection(fraudDetectionDate)).toString();
  }


  branchId: number = Number(localStorage.getItem('branchId'));
  roles: string[] = [];

  updateFrauds(id: number): void {
    this.getFraud(id);
    this.router.navigate(['updateFraud', id]);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: "Incident Fraud Updated Successfully"
    });
  }
  outstandingp(): void {
    this.fraudService.getOutstandingp().subscribe(
      (response: IFR[]) => {
        this.fraudp = response;
      },
      (error: any) => {
        // Handle error
      }
    );
  }
  authorizeFrauds(id: number): void {
    this.fraudService.authorizeFraud(id).subscribe(
      (response: IFR) => {
        this.getFrauds(this.roles);
      }
    );
  }

  calculateProvision(id: number): void {
    this.router.navigate(['ICMS/Fraud/calculateProvision', id]);
  }
  absoluteValue(number: number): number {
    return Math.abs(number);
  }

  deleteBox(id: number): void {
    this.deleteId = id;

    this.fraudService.deleteFraud(this.deleteId).subscribe(
      (response: void) => {
        this.getFrauds(this.roles);
      },
      (error: HttpErrorResponse) => {

        this.getFrauds(this.roles);
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
        this.msgs = [{ severity: 'success', summary: 'Confirmed', detail: 'Record deleted' }];
      },
      reject: () => {
        this.msgs = [{ severity: 'error', summary: 'Rejected', detail: 'Record not deleted' }];
      },
      key: "positionDialog"
    });
  }

  public getFrauds(roles: string[]): void {
    if (roles.includes("ROLE_ICMS_ADMIN") || roles.includes("ROLE_ICMS_PROVISION")) {
      this.fraudService.getFrauds().subscribe(
        (response: IFR[]) => {
          this.frauds = response;
        },
        (error: HttpErrorResponse) => {


        }
      );
    }
    else if (roles.includes("ROLE_ICMS_BRANCH_IC") || roles.includes("ROLE_ICMS_BRANCH_MANAGER")) {
      this.fraudService.getFraudForBranch(this.branchId).subscribe(
        (response: IFR[]) => {
          this.frauds = response;
        },
        (error: HttpErrorResponse) => {


        }
      );
    }
    else if (roles.includes("ROLE_ICMS_DISTRICT_IC")) {
      this.organizationalUnitService.getOrganizationalUnit(this.branchId).subscribe(branch=> {
        this.districtId = branch?.subProcess?.id
      });
      this.fraudService.getFraudForDistrict(this.districtId).subscribe(
        (response: IFR[]) => {
          this.frauds = response;
        },
        (error: HttpErrorResponse) => {

        }
      );
    }
  }

  public deleteFraud(): void {
    this.fraudService.deleteFraud(this.deleteId).subscribe(
      (response: void) => {
        this.getFrauds(this.roles);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: "Incident Fraud Updated Successfully"
        });
      },
      (error: HttpErrorResponse) => {

        this.getFrauds(this.roles);
      }
    );
  }

  public getFraud(id: number): IFR[] {
    this.fraudService.getFraud(id).subscribe(
      (response: IFR) => {
        this.fraudR = [response];

      },
      (error: HttpErrorResponse) => {

      }
    );
    return this.fraudR;
  }

  public openInModal(caseId: number) {
    this.dialogService.open(SingleFraudCaseTableComponent,
      {
        header: '',
        width: '70%',
        data: {
          id: caseId
        }
      });
  }
}


