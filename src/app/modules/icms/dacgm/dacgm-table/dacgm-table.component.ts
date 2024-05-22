import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmEventType, ConfirmationService, FilterService, Message, MessageService, PrimeNGConfig, SortEvent } from 'primeng/api';
import { DACGM } from '../../../../models/icms-models/dacgm-models/dacgm';
import { DACGMService } from '../../../../services/icms-services/dacgm-services/dacgm.service';
import { OrganizationalUnitService } from '../../../../services/sso-services/organizational-unit.service';
import { TimeService } from '../../../../services/sso-services/time.service';
import * as FileSaver from 'file-saver';


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

  minDate: Date;
  maxDate: Date;
  currentDate: Date;
  roles: string[] = [];
  exportColumns!: ExportColumn[];
  cols!: Column[];
  public dacgmDisplay: any[] = [];




  ngOnInit() {
    this.populateRoles();
    this.getCurrentDate();
    this.getDACGMs(this.roles);
    this.primengConfig.ripple = true;

    this.cols = [
      { field: 'subprocess.name', header: 'Sub process' },
      { field: 'branch.name', header: 'Branch' },
      { field: 'date', header: 'Date' },
      { field: 'caseId', header: 'Case ID' },
      { field: 'irregularity.allSubCategory.allcategory.name', header: 'Category' },
      { field: 'irregularity.allSubCategory.name', header: 'Sub category' },
      { field: 'irregularity.name', header: 'Irregularity' },
      { field: 'amountInvolved', header: 'Amount involved' },
      { field: 'accountName', header: 'Account name' },
      { field: 'accountNumber', header: 'Account number' },
      { field: 'responsiblePerson', header: 'Responsible person' },
      { field: 'activityStatus.name', header: 'Activity status' },
      { field: 'actionPlanDueDate', header: 'Action plan due date' },
    ];


    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field.replace(/\?/g, ''),
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


  convertToLocalString(expiryDate: string): string {
    let date = new Date(expiryDate);

    return date.toLocaleDateString();
  }

  absoluteValue(number: number): number {
    return Math.abs(number);
  }
  branchId: string = localStorage.getItem('branchId');
  subProcessId: number = Number(localStorage.getItem('subProcessId'));

  constructor(private filterService: FilterService, private dacgmService: DACGMService, private organizationalUnitService: OrganizationalUnitService, private router: Router, private confirmationService: ConfirmationService,
    private messageService: MessageService, private primengConfig: PrimeNGConfig, private timeService: TimeService) { }

  updateDACGMs(id: number): void {
    this.getDACGM(id);
    this.router.navigate(['updateDACGM', id]);
  }


  escalateDACGM(id: number): void {
    this.dacgmService.escalateDACGM(id).subscribe(
      (response: any) => {
        this.escalatedByManager = true;
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
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this record?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.dacgmService.deleteDACGM(id).subscribe(
          (response: void) => {
            this.getDACGMs(this.roles);
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: "Deleted DACGM successfully"
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

  public getDACGMs(roles: string[]): void {
    if (roles.indexOf("ROLE_ICMS_ADMIN") !== -1) {
      this.dacgmService.getDACGMs().subscribe(
        (response: any) => {
          this.dacgms = response;
          this.dacgmDisplay = this.dacgms.map((obj: any) => {
            let date = new Date(obj.date);
            let formattedDate = (date.getMonth() + 1).toString().padStart(2, '0') + '/' + date.getDate().toString().padStart(2, '0') + '/' + date.getFullYear();

            let actionPlanDueDate = obj.actionPlanDueDate ? new Date(obj.actionPlanDueDate) : null;
            let formattedActionPlanDueDate = actionPlanDueDate ? (actionPlanDueDate.getMonth() + 1).toString().padStart(2, '0') + '/' + actionPlanDueDate.getDate().toString().padStart(2, '0') + '/' + actionPlanDueDate.getFullYear() : null;

            return {
              'subprocess.name': obj.subProcess ? obj.subProcess.name : null,
              'branch.name': obj.branch ? obj.branch.name : null,
              date: formattedDate,
              caseId: obj.caseId,
              'irregularity.allSubCategory.allcategory.name': obj.irregularity && obj.irregularity.allSubCategory && obj.irregularity.allSubCategory.allcategory ? obj.irregularity.allSubCategory.allcategory.name : null,
              'irregularity.allSubCategory.name': obj.irregularity && obj.irregularity.allSubCategory ? obj.irregularity.allSubCategory.name : null,
              'irregularity.name': obj.irregularity ? obj.irregularity.name : null,
              'otherIrregularity': obj.otherIrregularity,
              amountInvolved: parseFloat(obj.amountInvolved) || 0,
              accountName: obj.accountName,
              accountNumber: obj.accountNumber,
              responsiblePerson: obj.responsiblePerson,
              'activityStatus.name': obj.activityStatus ? obj.activityStatus.name : null,
              actionPlanDueDate: formattedActionPlanDueDate
            };
          });
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    }
    else if (roles.indexOf("ROLE_ICMS_BRANCH_IC") !== -1 || roles.indexOf("ROLE_ICMS_BRANCH_MANAGER") !== -1) {
      this.dacgmService.getDACGMForBranch(this.branchId).subscribe(
        (response: DACGM[]) => {

          this.dacgms = response;
          this.dacgmDisplay = this.dacgms.map((obj: any) => {
            let date = new Date(obj.date);
            let formattedDate = (date.getMonth() + 1).toString().padStart(2, '0') + '/' + date.getDate().toString().padStart(2, '0') + '/' + date.getFullYear();

            let actionPlanDueDate = obj.actionPlanDueDate ? new Date(obj.actionPlanDueDate) : null;
            let formattedActionPlanDueDate = actionPlanDueDate ? (actionPlanDueDate.getMonth() + 1).toString().padStart(2, '0') + '/' + actionPlanDueDate.getDate().toString().padStart(2, '0') + '/' + actionPlanDueDate.getFullYear() : null;

            return {
              'subprocess.name': obj.subProcess ? obj.subProcess.name : null,
              'branch.name': obj.branch ? obj.branch.name : null,
              date: formattedDate,
              caseId: obj.caseId,
              'irregularity.allSubCategory.allcategory.name': obj.irregularity && obj.irregularity.allSubCategory && obj.irregularity.allSubCategory.allcategory ? obj.irregularity.allSubCategory.allcategory.name : null,
              'irregularity.allSubCategory.name': obj.irregularity && obj.irregularity.allSubCategory ? obj.irregularity.allSubCategory.name : null,
              'irregularity.name': obj.irregularity ? obj.irregularity.name : null,
              'otherIrregularity': obj.otherIrregularity,
              amountInvolved: parseFloat(obj.amountInvolved) || 0,
              accountName: obj.accountName,
              accountNumber: obj.accountNumber,
              responsiblePerson: obj.responsiblePerson,
              'activityStatus.name': obj.activityStatus ? obj.activityStatus.name : null,
              actionPlanDueDate: formattedActionPlanDueDate
            };
          });
        },
        (error: HttpErrorResponse) => {

        }
      );
    }
    else if (roles.indexOf("ROLE_ICMS_DISTRICT_IC") !== -1 || roles.indexOf("ROLE_ICMS_DISTRICT_DIRECTOR") !== -1) {
      this.dacgmService.getDACGMForDistrict(this.subProcessId).subscribe(
        (response: DACGM[]) => {
          this.dacgms = response;
          this.dacgmDisplay = this.dacgms.map((obj: any) => {
            let date = new Date(obj.date);
            let formattedDate = (date.getMonth() + 1).toString().padStart(2, '0') + '/' + date.getDate().toString().padStart(2, '0') + '/' + date.getFullYear();

            let actionPlanDueDate = obj.actionPlanDueDate ? new Date(obj.actionPlanDueDate) : null;
            let formattedActionPlanDueDate = actionPlanDueDate ? (actionPlanDueDate.getMonth() + 1).toString().padStart(2, '0') + '/' + actionPlanDueDate.getDate().toString().padStart(2, '0') + '/' + actionPlanDueDate.getFullYear() : null;

            return {
              'subprocess.name': obj.subProcess ? obj.subProcess.name : null,
              'branch.name': obj.branch ? obj.branch.name : null,
              date: formattedDate,
              caseId: obj.caseId,
              'irregularity.allSubCategory.allcategory.name': obj.irregularity && obj.irregularity.allSubCategory && obj.irregularity.allSubCategory.allcategory ? obj.irregularity.allSubCategory.allcategory.name : null,
              'irregularity.allSubCategory.name': obj.irregularity && obj.irregularity.allSubCategory ? obj.irregularity.allSubCategory.name : null,
              'irregularity.name': obj.irregularity ? obj.irregularity.name : null,
              'otherIrregularity': obj.otherIrregularity,
              amountInvolved: parseFloat(obj.amountInvolved) || 0,
              accountName: obj.accountName,
              accountNumber: obj.accountNumber,
              responsiblePerson: obj.responsiblePerson,
              'activityStatus.name': obj.activityStatus ? obj.activityStatus.name : null,
              actionPlanDueDate: formattedActionPlanDueDate
            };
          });
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

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const data = this.dacgmDisplay.map((plan, index) => ({
        // Add the rest of the fields here
        'Sub Process': plan['subprocess.name'],
        'Branch Name': plan['branch.name'],
        'Date': plan.date,
        'Case ID': plan.caseId,
        Category: plan['irregularity.allSubCategory.allcategory.name'],
        'Sub Category': plan['irregularity.allSubCategory.name'],
        Irregularity: plan['irregularity.name'] === 'Other' ? plan['otherIrregularity'] : plan['irregularity.name'],        
        'Amount Involved': plan.amountInvolved !== null ? plan.amountInvolved : null,
        'Account Name': plan.accountName,
        'Account Number': plan.accountNumber,
        'Responsible Person': plan.responsiblePerson,
        'Activity Status': plan['activityStatus.name'],
        'Action Plan Due Date': plan.actionPlanDueDate
      }));
      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'Daily activity gap');
    });
  }
  


  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    const url = window.URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('DACGM', fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


}


