import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FinanceService } from '../../service/finance-services.service';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FinanceModel } from '../../models/finance-model';
import { TimeService } from 'src/app/services/sso-services/time.service';
import { ChangeDetectorRef } from '@angular/core';

interface ExportColumn {
  title: string;
  dataKey: string;
}

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

@Component({
  selector: 'finance-table',
  templateUrl: './finance-table.component.html',
  styleUrls: ['./finance-table.component.scss'],
})
export class FinanceTableComponent implements OnDestroy {
  public FinanceList: FinanceModel[] = [];
  public financeListDisplay: any[] = [];

  approved: false;

  exportColumns!: ExportColumn[];
  cols!: Column[];
  roles: string[] = [];
  escalatedByManager: boolean = false;
  branchId: number = Number(localStorage.getItem('branchId'));
  subProcessId: number = Number(localStorage.getItem('subProcessId'));
  //teamId: number = JSON.parse(localStorage.getItem("team")).id;

  currentDate: Date;

  private subscriptions: Subscription[] = [];

  constructor(
    private financeService: FinanceService,
    private messageService: MessageService,
    private timeService: TimeService,
    private router: Router,
    private confirmationService: ConfirmationService
    ,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.populateRoles();
    this.getCurrentDate();
    this.getFinanceList(this.roles);
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



  public getFinanceList(roles: string[]): void {
    let financeObservable;

    if (roles.includes("ROLE_ICMS_ADMIN")) {
      financeObservable = this.financeService.getAllFinance();
    } else if (roles.includes("ROLE_ICMS_FINANCE_IC")) {
      financeObservable = this.financeService.getFinanceForICMSFINANCEIC(this.subProcessId);
    } else if (roles.includes("ROLE_ICMS_FINANCE_OWNER")) {
      financeObservable = this.financeService.getFinanceForICMSFINANCEIC(this.subProcessId);
    }

    if (financeObservable) {
      financeObservable.subscribe(
        (response: FinanceModel[]) => {
          this.FinanceList = response.map(finance => ({
            ...finance,
            daysPastDue: this.daysPastDue(finance.actionPlanDueDate)
          }));
          this.financeListDisplay = this.FinanceList.map(this.formatFinanceData.bind(this));
        },
        (error: HttpErrorResponse) => {
          console.error(error);
        }
      );
    }
  }

  private formatFinanceData(obj: any): any {
    let financeDate = obj.financeDate ? new Date(obj.financeDate) : null;
    let formattedFinanceDate = financeDate ? this.formatDate(financeDate) : null;

    let actionPlanDueDate = obj.actionPlanDueDate ? new Date(obj.actionPlanDueDate) : null;
    let formattedActionPlanDueDate = actionPlanDueDate ? this.formatDate(actionPlanDueDate) : null;

    return {
      financeDate: formattedFinanceDate,
      caseId: obj.caseId,
      accountNumber: obj.accountNumber,
      'allSubCategory.allcategory.name': obj.allSubCategory && obj.allSubCategory.allcategory ? obj.allSubCategory.allcategory.name : null,
      'allSubCategory.name': obj.allSubCategory ? obj.allSubCategory.name : null,
      irregularity: obj.irregularity,
      amount: parseFloat(obj.amount) || 0,
      responsiblePerson: obj.responsiblePerson,
      actionPlanDueDate: formattedActionPlanDueDate,
      'financeStatus.name': obj.financeStatus ? obj.financeStatus.name : null,
    };
  }

  private formatDate(date: Date): string {
    return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
  }



  updateFinace(id: number): void {
    this.router.navigate(['ICMS/Finance/updateFinance', id]);
  }

  approveActionPlan(finance: FinanceModel): void {
    this.router.navigate(['ICMS/Finance/approveActionPlan', { finance: JSON.stringify(finance) }]);
  }

  public daysPastDue(dateString: string): number {
    let dueDate = new Date(dateString);
    let today = new Date();
    let differenceInTime = dueDate.getTime() - today.getTime();
    let differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  }


  getCurrentDate() {
    this.timeService.getDate().subscribe(
      (response: any) => {

        this.currentDate = new Date(response.time);

      }
    );
  }

  convertToLocalString(expiryDate: string): string {
    let date = new Date(expiryDate);

    return date.toLocaleDateString();
  }

  absoluteValue(number: number): number {
    return Math.abs(number);
  }

  deleteFinance(id: number): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this record?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.financeService.deleteFinance(id).subscribe(
          (response: void) => {
            this.getFinanceList(this.roles);
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: "Deleted Finance successfully"
            });
            setTimeout(() => {
            }, 1000);
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



  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const data = this.financeListDisplay.map((plan, index) => ({
        'Finance date': plan.financeDate,
        'Case ID': plan.caseId,
        'Account Number': plan.accountNumber,
        Category: plan['allSubCategory.allcategory.name'],
        'Sub Category': plan['allSubCategory.name'],
        Irregularity: plan['irregularity'],
        'Amount ': plan.amount !== null ? plan.amount : null,
        'Responsible Person': plan.responsiblePerson,
        'Action Plan Due Date': plan.actionPlanDueDate,
        'Status': plan['financeStatus.name'],

      }));
      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'Extinguisher Inspection');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    const url = window.URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('Finance', fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


}
