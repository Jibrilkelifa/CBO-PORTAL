import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, FilterService, Message, MessageService } from 'primeng/api';
import { DCQService } from '../../../../services/icms-services/dcq-services/dcq.service';
import { OrganizationalUnitService } from '../../../../services/sso-services/organizational-unit.service';
import { TimeService } from '../../../../services/sso-services/time.service';
import { DCQ } from '../../../../models/icms-models/dcq-models/dcq';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-accordions',
  templateUrl: './dcq-week.component.html',
  styleUrls: ['./dcq-week.component.scss']
})
export class DCQWeekComponent {
  public DCQs: DCQ[] = [];
  public DCQw: DCQ[] = [];
  public DCQR: DCQ[] = []
  selectedDCQ: DCQ;
  deleteId: number = 0;
  msgs: Message[] = [];
  position: string;
  districtId: number;
  currentDate: Date;
  searchParameter: any[] =
    [
      { name: 'Date Presented', value: 'datePresented' },
      { name: 'Branch Name', value: 'branch.name' },
      { name: 'District Name', value: 'subProcess.name' },
      { name: 'Full Name of Drawer', value: 'fullNameOfDrawer' },
      { name: 'Account Number', value: 'accountNumber' },
      { name: 'TIN Number', value: 'tin' },
      { name: 'Drawer Address', value: 'drawerAddress' },
      { name: 'Amount in Birr', value: 'amountInBirr' },
      { name: 'Cheque Number', value: 'chequeNumber' },
      { name: 'Cheque Type', value: 'chequeType' },
      { name: 'Name of Beneficiary', value: 'nameOfBeneficiary' },
      { name: 'Frequency', value: 'frequency' }
    ];
  selectedSearchParameter: any;
  primengConfig: any;
  filterTable(target: any, dataTable: any) {
    if (this.selectedSearchParameter) {
      dataTable.filter(target?.value, this.selectedSearchParameter.value, 'contains');
    }
  }
  downloadExcel(tableID: string) {

    let table = document.getElementById(tableID);

    // converts a DOM TABLE element to a worksheet
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table, { raw: true });

    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // save to file
    XLSX.writeFile(wb, 'DCQs.xlsx');

  }

  minDate: Date;
  maxDate: Date;

  ngOnInit() {
    this.populateRoles();
    this.getDCQs(this.roles);
    this.getCurrentDate();
    this.weekDCQ();
  }

  populateRoles(): void {
    let index = 0;
    let cond = localStorage.getItem('role_' + index);
    while (cond) {

      this.roles.push(cond);
      index++;
      cond = localStorage.getItem('role_' + index);
    }
  }

  filterByDate(dataTable: any) {
    dataTable.filter([this.minDate, this.maxDate], 'insuranceExpireDate', 'dateRange');
  }

  getCurrentDate(): void {
    this.timeService.getDate().subscribe(
      (response: any) => {
        this.currentDate = new Date(response.time);
      }
    );
  }

  calculateDaysLeftToExpire(expiryDate: string): number {
    let date = new Date(expiryDate);
    let daysLeftToExpire = (date.getTime() - this.currentDate.getTime()) / (1000 * 3600 * 24);
    return Math.ceil(daysLeftToExpire);
  }

  millisFromNowTo(expiryDate: string): string {
    return (this.calculateDaysLeftToExpire(expiryDate)).toString();
  }

  absoluteValue(number: number): number {
    return Math.abs(number);
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

  branchId: number = Number(localStorage.getItem('branchId'));
  subProcessId: number = Number(localStorage.getItem('subProcessId'));
  roles: string[] = [];

  constructor(private filterService: FilterService, private DCQService: DCQService, private organizationalUnitService: OrganizationalUnitService, private router: Router, private confirmationService: ConfirmationService,
    private messageService: MessageService, private timeService: TimeService) { }

  updateDCQs(id: number): void {
    this.getDCQ(id);
    this.router.navigate(['updateDCQ', id]);
  }


  deleteBox(id: number): void {
    this.deleteId = id;

    this.DCQService.deleteDCQ(this.deleteId).subscribe(
      (response: void) => {
        this.getDCQs(this.roles);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: "Success"
        });
        setTimeout(() => {
        }, 1000);
      },
      (error: HttpErrorResponse) => {

        this.getDCQs(this.roles);
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

  public getDCQs(roles: string[]): void {
    if (roles.indexOf("ROLE_ICMS_ADMIN") !== -1) {
      this.DCQService.getDCQs().subscribe(
        (response: DCQ[]) => {
          this.DCQs = response;
        },
        (error: HttpErrorResponse) => {


        }
      );
    }
    else if (roles.indexOf("ROLE_ICMS_BRANCH_IC") !== -1 || roles.indexOf("ROLE_ICMS_BRANCH_MANAGER") !== -1) {
      this.DCQService.getDCQForBranch(this.branchId).subscribe(
        (response: DCQ[]) => {
          this.DCQs = response;
        },
        (error: HttpErrorResponse) => {


        }
      );
    }
    else if (roles.indexOf("ROLE_ICMS_DISTRICT_IC") !== -1) {
      // this.organizationalUnitService.getOrganizationalUnit(this.branchId).subscribe(branchId => {
      //   this.districtId = branchId?.subProcess?.id
      // });
      this.DCQService.getDCQForDistrict(this.subProcessId).subscribe(
        (response: DCQ[]) => {
          this.DCQs = response;

        },
        (error: HttpErrorResponse) => {


        }
      );
    }
  }

  public deleteDCQ(): void {
    this.DCQService.deleteDCQ(this.deleteId).subscribe(
      (response: void) => {
        this.getDCQs(this.roles);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: "Success"
        });
        setTimeout(() => {
        }, 1000);
      },
      (error: HttpErrorResponse) => {

        this.getDCQs(this.roles);
      }
    );
  }
  weekDCQ(): void {
    this.DCQService.getWeekDCQ().subscribe(
      (response: DCQ[]) => {
        this.DCQw = response;
      },
      (error: any) => {
        // Handle error
      }
    );
  }
  public getDCQ(id: number): DCQ[] {
    this.DCQService.getDCQ(id).subscribe(
      (response: DCQ) => {
        this.DCQR = [response];

      },
      (error: HttpErrorResponse) => {

      }
    );
    return this.DCQR;
  }
}


