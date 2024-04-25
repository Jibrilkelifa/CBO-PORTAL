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
      { field: 'collateralEstimationValue', header: 'Collateral Estimation Value' },
      { field: 'sumInsured', header: 'Sum insured' },
      { field: 'policyNumber', header: 'Policy number' },
      { field: 'referenceNumber', header: 'Reference number' },
      { field: 'insuredName', header: 'Insured name' },
      { field: 'status.name', header: 'Status' },
      { field: 'insuranceExpireDate', header: 'Insurance expire date' },
      { field: 'daysLeftToExpire', header: 'Days left to expire' },
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
            let insuranceExpireDate = obj.insuranceExpireDate ? new Date(obj.insuranceExpireDate) : null;
            let formattedInsuranceExpireDate = insuranceExpireDate ? (insuranceExpireDate.getMonth() + 1).toString().padStart(2, '0') + '/' + insuranceExpireDate.getDate().toString().padStart(2, '0') + '/' + insuranceExpireDate.getFullYear() : null;
          
            return {
              'subprocess.name': obj.subProcess ? obj.subProcess.name : null,
              'branch.name': obj.branch ? obj.branch.name : null,
              borrowerName: obj.borrowerName,
              loanAccount: obj.loanAccount,
              loanType: obj.loanType,
              'collateralType.name': obj.collateralType ? obj.collateralType.name : null,
              mortgagorName: obj.mortgagorName,
              'insuranceCoverageType.name': obj.insuranceCoverageType ? obj.insuranceCoverageType.name : null,
              collateralEstimationValue: parseFloat(obj.collateralEstimationValue) || 0, // Changed to number format
              sumInsured: parseFloat(obj.sumInsured) || 0, // Changed to number format
              policyNumber: obj.policyNumber,
              referenceNumber: obj.referenceNumber,
              insuredName: obj.insuredName,
              'status.name': obj.status ? obj.status.name : null,
              insuranceExpireDate: formattedInsuranceExpireDate,
              daysLeftToExpire: this.calculateDaysLeftToExpire(obj.insuranceExpireDate), // Added this line
            };
          });
          
        },
        (error: HttpErrorResponse) => {
          console.log(error);
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
        'Sub Process': plan['subprocess.name'],
        'Branch Name': plan['branch.name'],
        'Borrower Name': plan.borrowerName,
        'Loan Account': plan.loanAccount,
        'Loan Type': plan.loanType,
        'Collateral Type': plan['collateralType.name'],
        'Mortgagor Name': plan.mortgagorName,
        'Insurance Policy Coverage Type': plan['insuranceCoverageType.name'],
        'Collateral Estimation Value': plan.collateralEstimationValue,
        'Sum insured': plan.sumInsured,
        'Policy number': plan.policyNumber,
        'Reference number': plan.referenceNumber,
        'Insured name': plan.insuredName,
        'Status': plan['status.name'],
        'Insurance expire date': plan.insuranceExpireDate,
        'Days left to expire': plan.daysLeftToExpire, // This line will add 'Days left to expire' to the Excel sheet
      }));
      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'Insurance Policy');
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


