import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, FilterService, Message, MessageService, PrimeNGConfig, SortEvent } from 'primeng/api';
import { CIPM } from '../../../../models/icms-models/cipm-models/cipm';
import { CIPMService } from '../../../../services/icms-services/cipm-services/cipm.service';
import { OrganizationalUnitService } from '../../../../services/sso-services/organizational-unit.service';
import { TimeService } from '../../../../services/sso-services/time.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-accordions',
  templateUrl: './cipm-table.component.html',
  styleUrls: ['./cipm-table.component.scss']
})
export class CIPMTableComponent {
  public cipms: CIPM[] = [];
  public cipme: CIPM[] = [];
  public cipmR: CIPM[] = [];
  
  selectedCIPM: CIPM;
  deleteId: number = 0;
  msgs: Message[] = [];
  position: string;
  districtId: number;
  searchParameter: any[] =
    [
      { name: 'District Name', value: 'subProcess.name' },
      { name: 'Branch Name', value: 'branch.name' },
      { name: 'Borrower Name', value: 'borrowerName' },
      { name: 'Loan Account', value: 'loanAccount' },
      { name: 'Loan Type', value: 'loanType' },
      { name: 'Collateral Type', value: 'collateralType.name' },
      { name: 'Mortgagor Name', value: 'mortgagorName' },
      { name: 'Other Collateral Type', value: 'otherCollateralType' },
      { name: 'Insurance Policy Coverage Type', value: 'insuranceCoverageType.name' },
      { name: 'Other Insurance Policy Coverage Type', value: 'otherInsuranceCoverageType' },
      { name: 'Collateral Estimation Value', value: 'collateralEstimationValue' },
      { name: 'sum Insured', value: 'sumInsured' },
      { name: 'policy number', value: 'policy number' },
      { name: 'reference number', value: 'reference number' },
      { name: 'Insured Name', value: 'insuredName' },
      { name: 'Status', value: 'status.name' },
      { name: 'Insurance Expiry Date', value: 'insuranceExpireDate' },
    ];
  selectedSearchParameter: any;
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
    XLSX.writeFile(wb, 'CIPM.xlsx');

  }

  minDate: Date;
  maxDate: Date;
  currentDate: Date;
  roles: string[] = [];

  ngOnInit() {
    this.populateRoles();
    this.getCurrentDate();
    this.getCIPMs(this.roles);
    this.primengConfig.ripple = true;
    // this.getCIPMsExpiringWithin30Days();

    this.filterService.register('dateRange', (value: any, filter: any): boolean => {
      // convert value and filter to date objects
      let dateValue = new Date(value);
      let minFilter = new Date(filter[0]);
      let maxFilter = new Date(filter[1]);
      if (this.minDate == undefined && this.maxDate == undefined) {
        return true;
      }
      // if both min and max dates are specified, check if value is between them
      if (filter[0] && filter[1]) {
        return dateValue >= minFilter && dateValue <= maxFilter;
      }

      // if only min date is specified, check if value is greater than or equal to it
      if (filter[0] && !filter[1]) {
        return dateValue >= minFilter;
      }

      // if only max date is specified, check if value is less than or equal to it
      if (!filter[0] && filter[1]) {
        return dateValue <= maxFilter;
      }

      // if no dates are specified, return true for all values
      return true;
    });
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

  getCurrentDate() {
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

  customSort(event: SortEvent) {
    // event.field is the field name to sort by // event.order is 1 for ascending and -1 for descending
    // this.cipms is your data array

    this.cipms.sort((a, b) => {
      // check which field to sort by
      if (event.field === "insuranceExpireDate") {
        // convert strings to dates
        let dateA = new Date(a[event.field]);
        let dateB = new Date(b[event.field]);
        // compare dates
        return (dateA.getTime() - dateB.getTime()) * event.order;
      } else if (event.field === "daysLeftToExpire") {
        // get days difference using absoluteValue and calculateDaysLeftToExpire
        let diffA = (this.calculateDaysLeftToExpire(a["insuranceExpireDate"]));
        let diffB = (this.calculateDaysLeftToExpire(b["insuranceExpireDate"]));
        // compare differences
        return (diffA - diffB) * event.order;
      } else {
        // use default sorting logic
        let valueA = a[event.field];
        let valueB = b[event.field];
        return (valueA < valueB ? -1 : valueA > valueB ? 1 : 0) * event.order;
      }
    });

  }

  convertToLocalString(expiryDate: string): string {
    let date = new Date(expiryDate);


    return date.toLocaleDateString();
  }

  absoluteValue(number: number): number {
    return Math.abs(number);
  }
 
  branchId: number = Number(localStorage.getItem('branchId'));
  subProcessId: number = Number(localStorage.getItem('subProcessId'));

  constructor(private filterService: FilterService, private cipmService: CIPMService, private organizationalUnitService: OrganizationalUnitService, private router: Router, private confirmationService: ConfirmationService,
    private messageService: MessageService, private primengConfig: PrimeNGConfig, private timeService: TimeService) { }

  updateCIPMs(id: number): void {
    this.getCIPM(id);
    this.router.navigate(['updateCIPM', id]);
  }
  // getCIPMsExpiringWithin30Days(): void {
  //   this.cipmService.geExpiringWithIn30DaysCIPMs().subscribe(
  //     (response: CIPM[]) => {
  //       this.cipme = response;
  //     },
  //     (error: any) => {
  //       // Handle error
  //     }
  //   );
  // }

  authorizeCIPM(id: number): void {
    this.cipmService.authorizeCIPM(id).subscribe(
      (response: any) => {
        this.getCIPMs(this.roles);
      }
    );
  }

  deleteBox(id: number): void {
    this.deleteId = id;
    this.cipmService.deleteCIPM(this.deleteId).subscribe(
      (response: void) => {
        this.getCIPMs(this.roles);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: "Collateral Insurance Policy Monitoring deleted Successfully!"
        });
        setTimeout(() => {
        }, 1000);
      },
      (error: HttpErrorResponse) => {

        this.getCIPMs(this.roles);
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

  public getCIPMs(roles: string[]): void {
    if (roles.indexOf("ROLE_ICMS_ADMIN") !== -1) {
      this.cipmService.getCIPMs().subscribe(
        (response: CIPM[]) => {
          this.cipms = response;
        },
        (error: HttpErrorResponse) => {

        }
      );
    }
    else if (roles.indexOf("ROLE_ICMS_BRANCH_IC") !== -1 || roles.indexOf("ROLE_ICMS_BRANCH_MANAGER") !== -1) {
      this.cipmService.getCIPMForBranch(this.branchId).subscribe(
        (response: CIPM[]) => {
          this.cipms = response;
        //      alert(this.subProcessId);
        },
        (error: HttpErrorResponse) => {

        }
      );
    }
    else if (roles.indexOf("ROLE_ICMS_DISTRICT_IC") !== -1 || roles.indexOf("ROLE_ICMS_DISTRICT_DIRECTOR") !== -1) {
      // this.organizationalUnitService.getOrganizationalUnit(this.branchId).subscribe(branch => {
      //   console.log("branchId = " + this.branchId)
      //   this.districtId = branch?.subProcess?.id
      //   console.log("district = " + this.districtId)
        this.cipmService.getCIPMForDistrict(this.subProcessId).subscribe(
          
          (response: CIPM[]) => {
            this.cipms = response;
          },
          (error: HttpErrorResponse) => {

          }
        );

    }
  }

  public deleteCIPM(): void {
    this.cipmService.deleteCIPM(this.deleteId).subscribe(
      (response: void) => {
        this.getCIPMs(this.roles);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: "Collateral Insurance Policy Monitoring deleted Successfully!"
        });
        setTimeout(() => {
        }, 1000);
      },
      (error: HttpErrorResponse) => {

        this.getCIPMs(this.roles);
      }
    );
  }

  public getCIPM(id: number): CIPM[] {
    this.cipmService.getCIPM(id).subscribe(
      (response: CIPM) => {
        this.cipmR = [response];
      },
      (error: HttpErrorResponse) => {

      }
    );
    return this.cipmR;
  }
}


