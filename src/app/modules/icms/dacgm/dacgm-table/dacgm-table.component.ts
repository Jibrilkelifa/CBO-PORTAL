import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, FilterService, Message, MessageService, PrimeNGConfig, SortEvent } from 'primeng/api';
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

    this.filterService.register('dateRange', (value: any, filter: any): boolean => {
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

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'branch?.name', header: 'Branch' },
      { field: 'subprocess?.name', header: 'Sub process' },
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
  branchId: string = localStorage.getItem('branchId');
  // branchId: number = Number(localStorage.getItem('branchId'));
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
        (response: any) => {
          this.dacgms = response;
          this.dacgmDisplay = this.dacgms.map((obj: any) => ({
            id: obj.id,
            'branch.name': obj.branch ? obj.branch.name : null,
            'subprocess.name': obj.subProcess ? obj.subProcess.name : null,
            date: obj.date,
            caseId: obj.caseId,
            'irregularity.allSubCategory.allcategory.name': obj.irregularity && obj.irregularity.allSubCategory && obj.irregularity.allSubCategory.allcategory ? obj.irregularity.allSubCategory.allcategory.name : null,
            'irregularity.allSubCategory.name': obj.irregularity && obj.irregularity.allSubCategory ? obj.irregularity.allSubCategory.name : null,
            'irregularity.name': obj.irregularity ? obj.irregularity.name : null,
            amountInvolved: parseFloat(obj.amountInvolved) || 0,
            accountName: obj.accountName,
            accountNumber: obj.accountNumber,
            responsiblePerson: obj.responsiblePerson,
            'activityStatus.name': obj.activityStatus ? obj.activityStatus.name : null,
            actionPlanDueDate: obj.actionPlanDueDate
          }));
          console.log("aaaa", response);
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
        },
        (error: HttpErrorResponse) => {

        }
      );
    }
    else if (roles.indexOf("ROLE_ICMS_DISTRICT_IC") !== -1 || roles.indexOf("ROLE_ICMS_DISTRICT_DIRECTOR") !== -1) {
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



  exportPdf() {
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then(() => {
        const doc = new jsPDF.default('l', 'pt', 'a4'); // 'l' for landscape orientation, 'pt' for points unit, 'a4' for A4 page size
        doc.setFontSize(6); // set the font size to 6 points
        (doc as any).autoTable({
          body: this.dacgmDisplay.map((row, index) => ({
            Id: index + 1,
            'Branch Name': row.branch ? row.branch.name : '',
            'Sub Process': row.subProcess ? row.subProcess.name : '',
            'Case ID': row.caseId,
            'Date': row.date,
            Category: row.irregularity && row.irregularity.allSubCategory && row.irregularity.allSubCategory.allcategory ? row.irregularity.allSubCategory.allcategory.name : '',
            'Sub Category': row.irregularity && row.irregularity.allSubCategory ? row.irregularity.allSubCategory.name : '',
            Irregularity: row.irregularity ? row.irregularity.name : '',
            'Amount Involved': row.amountInvolved,
            'Account Name': row.accountName,
            'Account Number': row.accountNumber,
            'Responsible Person': row.responsiblePerson,
            'Activity Status': row.activityStatus ? row.activityStatus.name : '',
            'Action Plan Due Date': row.actionPlanDueDate
          })),
          columns: this.exportColumns,
          styles: { fontSize: 6, cellWidth: 'wrap' }, // set the font size and cell width for the table
          didDrawCell: (data) => {
            if (data.column.index === 0 && data.cell.section === 'body') {
              doc.setFontSize(6);
            }
          },
        });
        doc.save('Daily activity gap.pdf');
      });
    });
  }


  exportExcel() {
    import('xlsx').then((xlsx) => {
      const data = this.dacgmDisplay.map((plan, index) => ({
        Id: index + 1,
        // Add the rest of the fields here
        'Branch Name': plan['branch.name'],
        'Sub Process': plan['subprocess.name'],
        'Date': plan.date,
        'Case ID': plan.caseId,
        Category: plan['irregularity.allSubCategory.allcategory.name'],
        'Sub Category': plan['irregularity.allSubCategory.name'],
        Irregularity: plan['irregularity.name'],
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
    link.setAttribute('download', fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


}


