import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmEventType, ConfirmationService, FilterService, Message, MessageService } from 'primeng/api';
import { DCQService } from '../../../../services/icms-services/dcq-services/dcq.service';
import { OrganizationalUnitService } from '../../../../services/sso-services/organizational-unit.service';
import { TimeService } from '../../../../services/sso-services/time.service';
import { DCQ } from '../../../../models/icms-models/dcq-models/dcq';
import * as XLSX from 'xlsx';


interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}
interface ExportColumn {
  title: string;
  dataKey: string;
}


@Component({
  selector: 'app-accordions',
  templateUrl: './dcq-table.component.html',
  styleUrls: ['./dcq-table.component.scss']
})
export class DCQTableComponent {
  public DCQs: DCQ[] = [];
  public DCQR: DCQ[] = [];
  selectedDCQ: DCQ;
  deleteId: number = 0;
  msgs: Message[] = [];
  position: string;
  currentDate: Date;
  exportColumns!: ExportColumn[];
  cols!: Column[];

  primengConfig: any;

  public dcqDisplay: any[] = [];

  minDate: Date;
  maxDate: Date;

  ngOnInit() {
    this.populateRoles();
    this.getDCQs(this.roles);
    this.getCurrentDate();

    this.cols = [
      { field: 'datePresented', header: 'Date presented' },
      { field: 'subprocess.name', header: 'Sub process' },
      { field: 'branch.name', header: 'Branch' },
      { field: 'fullNameOfDrawer', header: 'Full name of drawer' },
      { field: 'accountNumber', header: 'Account number' },
      { field: 'tin', header: 'Tin number' },
      { field: 'drawerAddress', header: 'Drawer address' },
      { field: 'amountInBirr', header: 'Amount in bumber' },
      { field: 'chequeNumber', header: 'Cheque Number' },
      { field: 'chequeType.name', header: 'Cheque type' },
      { field: 'nameOfBeneficiary', header: 'Name of beneficiary' },
      { field: 'frequency', header: 'Frequency' },
      { field: 'actionTaken.name', header: 'Action taken' },
    ];


    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));

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
  branchId: string = localStorage.getItem('branchId');
  // branchId: number = Number(localStorage.getItem('branchId'));
  subProcessId: number = Number(localStorage.getItem('subProcessId'));
  roles: string[] = [];

  constructor(private filterService: FilterService, private DCQService: DCQService, private router: Router, private confirmationService: ConfirmationService,
    private messageService: MessageService, private timeService: TimeService) { }

  updateDCQs(id: number): void {
    this.getDCQ(id);
    this.router.navigate(['updateDCQ', id]);
  }
  deleteDCQss(id: number): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this record?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.DCQService.deleteDCQ(id).subscribe(
          (response: void) => {
            this.getDCQs(this.roles);
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: "Deleted dishonoured cheque successfully"
            });
            setTimeout(() => {
              window.location.reload();
            }, 2000);
    
          },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
        );
      },
      reject: (type: ConfirmEventType) => {
        if (type === ConfirmEventType.REJECT) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'You have rejected'
          });
        }
      }
    });
  }

 
 
 
  

  // confirmPosition(position: string, id: number) {
  //   this.position = position;
  //   this.confirmationService.confirm({
  //     message: 'Do you want to delete this record?',
  //     header: 'Delete Confirmation',
  //     icon: 'pi pi-info-circle',
  //     accept: () => {
  //       this.deleteDCQ(id);
  //       this.msgs = [{ severity: 'success', summary: 'Confirmed', detail: 'Record deleted' }];
  //     },
  //     reject: () => {
  //       this.msgs = [{ severity: 'error', summary: 'Rejected', detail: 'Record not deleted' }];
  //     },
  //     key: "positionDialog"
  //   });
  // }

  public getDCQs(roles: string[]): void {
    if (roles.indexOf("ROLE_ICMS_ADMIN") !== -1 || roles.indexOf("ROLE_ICMS_BANKING_OPERATION") !== -1) {
      this.DCQService.getDCQs().subscribe(
        (response: DCQ[]) => {
          this.DCQs = response;
          this.dcqDisplay = this.DCQs.map((obj: any) => {
            let date = new Date(obj.date);
            let datePresented = obj.datePresented ? new Date(obj.datePresented) : null;
            let formattedDatePresented = datePresented ? (datePresented.getMonth() + 1).toString().padStart(2, '0') + '/' + datePresented.getDate().toString().padStart(2, '0') + '/' + datePresented.getFullYear() : null;

            return {
              'Date presented': formattedDatePresented,
              'subprocess.name': obj.subProcess ? obj.subProcess.name : null,
              'branch.name': obj.branch ? obj.branch.name : null,
              fullNameOfDrawer: obj.fullNameOfDrawer,
              accountNumber: obj.accountNumber,
              tin: obj.tin,
              drawerAddress: obj.drawerAddress,
              amountInBirr: parseFloat(obj.amountInBirr) || 0,
              chequeNumber: obj.chequeNumber,
              'chequeType.name': obj.chequeType ? obj.chequeType.name : null,
              nameOfBeneficiary: obj.nameOfBeneficiary,
              frequency: obj.frequency,
              'actionTaken.name': obj.actionTaken ? obj.actionTaken.name : null,
            };
          });
        },
        (error: HttpErrorResponse) => {

        }
      );
    }
    else if (roles.indexOf("ROLE_ICMS_BRANCH_IC") !== -1 || roles.indexOf("ROLE_ICMS_BRANCH_MANAGER") !== -1) {
      this.DCQService.getDCQForBranch(this.branchId).subscribe(
        (response: DCQ[]) => {
          this.DCQs = response;
          this.dcqDisplay = this.DCQs.map((obj: any) => {
            let date = new Date(obj.date);
            let datePresented = obj.datePresented ? new Date(obj.datePresented) : null;
            let formattedDatePresented = datePresented ? (datePresented.getMonth() + 1).toString().padStart(2, '0') + '/' + datePresented.getDate().toString().padStart(2, '0') + '/' + datePresented.getFullYear() : null;

            return {
              'Date presented': formattedDatePresented,
              'subprocess.name': obj.subProcess ? obj.subProcess.name : null,
              'branch.name': obj.branch ? obj.branch.name : null,
              fullNameOfDrawer: obj.fullNameOfDrawer,
              accountNumber: obj.accountNumber,
              tin: obj.tin,
              drawerAddress: obj.drawerAddress,
              amountInBirr: parseFloat(obj.amountInBirr) || 0,
              chequeNumber: obj.chequeNumber,
              'chequeType.name': obj.chequeType ? obj.chequeType.name : null,
              nameOfBeneficiary: obj.nameOfBeneficiary,
              frequency: obj.frequency,
              'actionTaken.name': obj.actionTaken ? obj.actionTaken.name : null,
            };
          });
        },
        (error: HttpErrorResponse) => {


        }
      );
    }
    else if (roles.indexOf("ROLE_ICMS_DISTRICT_IC") !== -1 || roles.indexOf("ROLE_ICMS_DISTRICT_DIRECTOR") !== -1) {
      // this.organizationalUnitService.getOrganizationalUnit(this.branchId).subscribe(branchId => {
      //   this.districtId = branchId?.subProcess?.id
      // });
      this.DCQService.getDCQForDistrict(this.subProcessId).subscribe(
        (response: DCQ[]) => {
          this.DCQs = response;
          this.dcqDisplay = this.DCQs.map((obj: any) => {
            let date = new Date(obj.date);
            let datePresented = obj.datePresented ? new Date(obj.datePresented) : null;
            let formattedDatePresented = datePresented ? (datePresented.getMonth() + 1).toString().padStart(2, '0') + '/' + datePresented.getDate().toString().padStart(2, '0') + '/' + datePresented.getFullYear() : null;

            return {
              'Date presented': formattedDatePresented,
              'subprocess.name': obj.subProcess ? obj.subProcess.name : null,
              'branch.name': obj.branch ? obj.branch.name : null,
              fullNameOfDrawer: obj.fullNameOfDrawer,
              accountNumber: obj.accountNumber,
              tin: obj.tin,
              drawerAddress: obj.drawerAddress,
              amountInBirr: parseFloat(obj.amountInBirr) || 0,
              chequeNumber: obj.chequeNumber,
              'chequeType.name': obj.chequeType ? obj.chequeType.name : null,
              nameOfBeneficiary: obj.nameOfBeneficiary,
              frequency: obj.frequency,
              'actionTaken.name': obj.actionTaken ? obj.actionTaken.name : null,
            };
          });

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


  exportExcel() {
    import('xlsx').then((xlsx) => {
      const data = this.dcqDisplay.map((plan, index) => ({
        // Add the rest of the fields here
        'Date presented': plan['Date presented'],
        'Sub Process': plan['subprocess.name'],
        'Branch Name': plan['branch.name'],
        'Full name of drawer': plan.fullNameOfDrawer,
        'Account Number': plan.accountNumber,
        'Tin': plan.tin,
        'Drawer address': plan.drawerAddress,
        'Amount in birr': plan.amountInBirr !== null ? plan.amountInBirr : null,
        'Cheque number': plan.chequeNumber,
        'Check type': plan['chequeType.name'],
        'Name of beneficiary': plan.nameOfBeneficiary,
        'Frequency': plan.frequency,
        'Action taken': plan['actionTaken.name'],
      }));
      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'Dishounered cheque');
    });
  }


  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    const url = window.URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('Daily_activity_gap', fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}


