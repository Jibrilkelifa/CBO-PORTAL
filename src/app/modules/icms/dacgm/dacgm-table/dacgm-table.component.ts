import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, FilterService, Message, MessageService, PrimeNGConfig, SortEvent } from 'primeng/api';
import { DACGM } from '../../../../models/icms-models/dacgm-models/dacgm';
import { DACGMService } from '../../../../services/icms-services/dacgm-services/dacgm.service';
import { OrganizationalUnitService } from '../../../../services/sso-services/organizational-unit.service';
import { TimeService } from '../../../../services/sso-services/time.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-accordions',
  templateUrl: './dacgm-table.component.html',
  styleUrls: ['./dacgm-table.component.scss']
})
export class DACGMTableComponent {
  public dacgms: DACGM[] = [];
  public dacgmR: DACGM[] = [];
  selectedDACGM: DACGM;
  deleteId: number = 0;
  buttonClicked = false;
  msgs: Message[] = [];
  position: string;
  districtId: number;
  escalatedByManager: boolean = false;
  actionTaken: boolean = false;
  escalatedMap: { [dacgmId: string]: boolean } = {};
  actionTakenMap: { [dacgmId: string]: boolean } = {};
  searchParameter: any[] =
    [
      { name: 'District Name', value: 'subProcess.name' },
      { name: 'Branch Name', value: 'branch.name' },
      { name: 'Date', value: 'date' },
      { name: 'Case ID', value: 'caseId' },
      { name: 'Category', value: 'irregularity.subCategory.category.name' },
      { name: 'Sub Category', value: 'irregularity.subCategory.name' },
      { name: 'Irregularity', value: 'irregularity.name' },
      { name: 'Amount Involved', value: 'amountInvolved' },
      { name: 'Responsible Person', value: 'responsiblePerson' },
      { name: 'Status', value: 'activityStatus.name' },
      { name: 'Action Plan Due Date', value: 'actionPlanDueDate' }
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
    XLSX.writeFile(wb, 'DACGM.xlsx');

  }

  minDate: Date;
  maxDate: Date;
  currentDate: Date;
  roles: string[] = [];

  ngOnInit() {
    this.populateRoles();
    this.getCurrentDate();
    this.getDACGMs(this.roles);
    this.primengConfig.ripple = true;

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
    dataTable.filter([this.minDate, this.maxDate], 'actionPlanDueDate', 'dateRange');
  }

  getCurrentDate() {
    this.timeService.getDate().subscribe(
      (response: any) => {

        this.currentDate = new Date(response.time);

      }
    );
  }

  calculatePastDue(expiryDate: string): number {
    let date = new Date(expiryDate);
    let daysLeftToExpire = (date.getTime() - this.currentDate.getTime()) / (1000 * 3600 * 24);
    return Math.ceil(daysLeftToExpire);
  }

  millisFromNowTo(expiryDate: string): string {
    return (this.calculatePastDue(expiryDate)).toString();
  }

  customSort(event: SortEvent) {
    // event.field is the field name to sort by // event.order is 1 for ascending and -1 for descending
    // this.dacgms is your data array

    this.dacgms.sort((a, b) => {
      // check which field to sort by
      if (event.field === "actionPlanDueDate") {
        // convert strings to dates
        let dateA = new Date(a[event.field]);
        let dateB = new Date(b[event.field]);
        // compare dates
        return (dateA.getTime() - dateB.getTime()) * event.order;
      } else if (event.field === "pastDue") {
        // get days difference using absoluteValue and calculateDaysLeftToExpire
        let diffA = (this.calculatePastDue(a["actionPlanDueDate"]));
        let diffB = (this.calculatePastDue(b["actionPlanDueDate"]));
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

  constructor(private filterService: FilterService, private dacgmService: DACGMService, private organizationalUnitService: OrganizationalUnitService, private router: Router, private confirmationService: ConfirmationService,
    private messageService: MessageService, private primengConfig: PrimeNGConfig, private timeService: TimeService) { }

  updateDACGMs(id: number): void {
    this.getDACGM(id);
    this.router.navigate(['updateDACGM', id]);
  }

  // approveDACGM(id: number): void {
  //   this.dacgmService.approveDACGM(id).subscribe(
  //     (response: any) => {
  //       this.getDACGMs(this.roles);
  //     }
  //   );
  // }

  escalateDACGM(id: number): void {
    this.dacgmService.escalateDACGM(id).subscribe(
      (response: any) => {
        this.escalatedByManager = true;
        console.log('escalatedByManager:', this.escalatedByManager);
        this.getDACGMs(this.roles);
  
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: "This Daily Activity Gap monitoring Escalated successfully!"
        });
  
        setTimeout(() => {
          // Clear the success message after 5 seconds
          this.clearSuccessMessage();
        }, 5000); // 5000 milliseconds = 5 seconds
      },
      (error: HttpErrorResponse) => {
        this.getDACGMs(this.roles);
      }
    );
  }
  
  clearSuccessMessage(): void {
    // Clear the success message
    this.messageService.clear();
  }

  deleteBox(id: number): void {
    this.deleteId = id;
    this.dacgmService.deleteDACGM(this.deleteId).subscribe(
      (response: void) => {
        this.getDACGMs(this.roles);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: "Collateral Insurance Policy Monitoring deleted Successfully!"
        });
        setTimeout(() => {
        }, 1000);
      },
      (error: HttpErrorResponse) => {

        this.getDACGMs(this.roles);
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

  public getDACGMs(roles: string[]): void {
    if (roles.indexOf("ROLE_ICMS_ADMIN") !== -1) {
      this.dacgmService.getDACGMs().subscribe(
        (response: DACGM[]) => {
          this.dacgms = response;
        },
        (error: HttpErrorResponse) => {

        }
      );
    }
    else if (roles.indexOf("ROLE_ICMS_BRANCH_IC") !== -1 || roles.indexOf("ROLE_ICMS_BRANCH_MANAGER") !== -1) {
      this.dacgmService.getDACGMForBranch(this.branchId).subscribe(
        (response: DACGM[]) => {
          this.dacgms = response;
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
        this.dacgmService.getDACGMForDistrict(this.subProcessId).subscribe(
          (response: DACGM[]) => {
            this.dacgms = response;
          },
          (error: HttpErrorResponse) => {

          }
        );
      

    }
  }

  public deleteDACGM(): void {
    this.dacgmService.deleteDACGM(this.deleteId).subscribe(
      (response: void) => {
        this.getDACGMs(this.roles);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: "Collateral Insurance Policy Monitoring deleted Successfully!"
        });
        setTimeout(() => {
        }, 1000);
      },
      (error: HttpErrorResponse) => {

        this.getDACGMs(this.roles);
      }
    );
  }
  approveActionPlan(id: number): void {
    this.router.navigate(['ICMS/DACGM/approveActionPlan', id]);
  }



// Function to handle the escalate action

  public getDACGM(id: number): DACGM[] {
    this.dacgmService.getDACGM(id).subscribe(
      (response: DACGM) => {
        this.dacgmR = [response];
      },
      (error: HttpErrorResponse) => {

      }
    );
    return this.dacgmR;
  }
}


