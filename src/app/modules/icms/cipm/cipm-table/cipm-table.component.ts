import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, FilterService, Message, MessageService, PrimeNGConfig, SortEvent } from 'primeng/api';
import { CIPM } from '../../../../models/icms-models/cipm-models/cipm';
import { CIPMService } from '../../../../services/icms-services/cipm-services/cipm.service';
import { OrganizationalUnitService } from '../../../../services/sso-services/organizational-unit.service';
import { TimeService } from '../../../../services/sso-services/time.service';
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
 
  exportColumns!: ExportColumn[];
  cols!: Column[];
  public cipmDisplay: any[] = [];

  
  minDate: Date;
  maxDate: Date;
  currentDate: Date;
  roles: string[] = [];

  ngOnInit() {
    this.populateRoles();
    this.getCurrentDate();
    this.getCIPMs(this.roles);
    this.primengConfig.ripple = true;
    
    this.cols = [
      { field: 'subprocess.name', header: 'Sub process' },
      { field: 'branch.name', header: 'Branch' },
      { field: 'borrowerName', header: 'Borrower Name' },
      { field: 'loanAccount', header: 'Loan Account' },
      { field: 'loanType', header: 'Loan Type' },
      { field: 'collateralType.name', header: 'Collateral Type' },
      { field: 'mortgagorName', header: 'Mortgagor Name' },
      { field: 'insuranceCoverageType.name', header: 'Insurance Policy Coverage Type' },
      { field: 'mortgagorName', header: 'Mortgagor Name' },
      { field: 'collateralEstimationValue', header: 'Mortgagor Name' },
      { field: 'mortgagorName', header: 'Mortgagor Name' },
      { field: 'insuredName', header: 'Cheque type' },
      { field: 'status.name', header: 'Status' },
      { field: 'insuranceExpireDate', header: 'Insurance expiry date' },
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
 
  branchId: string = localStorage.getItem('branchId');
  subProcessId: number = Number(localStorage.getItem('subProcessId'));

  constructor(private filterService: FilterService, private cipmService: CIPMService, private organizationalUnitService: OrganizationalUnitService, private router: Router, private confirmationService: ConfirmationService,
    private messageService: MessageService, private primengConfig: PrimeNGConfig, private timeService: TimeService) { }

  updateCIPMs(id: number): void {
    this.getCIPM(id);
    this.router.navigate(['updateCIPM', id]);
  }

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
          this.cipmDisplay = this.cipms.map((obj: any) => {
            let date = new Date(obj.date);
            let datePresented = obj.datePresented ? new Date(obj.datePresented) : null;
            let formattedDatePresented = datePresented ? (datePresented.getMonth() + 1).toString().padStart(2, '0') + '/' + datePresented.getDate().toString().padStart(2, '0') + '/' + datePresented.getFullYear() : null;
            console.log("ttt", formattedDatePresented);

            return {
              'Date presented': formattedDatePresented,
              'subprocess.name': obj.subProcess ? obj.subProcess.name : null,
              'branch.name': obj.branch ? obj.branch.name : null,
              fullNameOfDrawer: obj.fullNameOfDrawer,
              accountNumber: obj.accountNumber,
              tin: obj.tin,
              drawerAddress: obj.drawerAddress,
              amountInBirr: obj.amountInBirr,
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
      this.cipmService.getCIPMForBranch(this.branchId).subscribe(
        (response: CIPM[]) => {
          this.cipms = response;
        //      alert(this.subProcessId);
        },
        (error: HttpErrorResponse) => {

        }
      );
    }
    else if (roles.indexOf("ROLE_ICMS_DISTRICT_IC") !== -1 || roles.indexOf("ROLE_ICMS_DISTRICT_DIRECTOR" ) || roles.indexOf("ROLE_ICMS_IFB") !==-1) {
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

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const data = this.cipmDisplay.map((plan, index) => ({
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


