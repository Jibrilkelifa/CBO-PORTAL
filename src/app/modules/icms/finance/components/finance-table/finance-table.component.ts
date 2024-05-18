import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FinanceService } from '../../service/finance-services.service';
import { MessageService } from 'primeng/api';
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
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.populateRoles();
    this.getCurrentDate();
    this.getFinanceList(this.roles);

    this.cols = [
      { field: 'financeDate', header: 'Date' },
      { field: 'caseId', header: 'Case ID' },
      { field: 'accountNumber', header: 'Account number' },
      { field: 'irregularity.allSubCategory.allcategory.name', header: 'Category' },
      { field: 'irregularity.allSubCategory.name', header: 'Sub category' },
      { field: 'irregularity.name', header: 'Irregularity' },
      { field: 'amount', header: 'Amount' },
      { field: 'responsiblePerson', header: 'Responsible person' },
      { field: 'actionPlanDueDate', header: 'Action plan due date' },
      { field: 'activityStatus.name', header: 'Activity status' },
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



  public getFinanceList(roles: string[]): void {
    if (roles.indexOf("ROLE_ICMS_ADMIN") !== -1) {
      this.financeService.getAllFinance().subscribe(
        (response: FinanceModel[]) => {
          this.FinanceList = response.map(finance => ({
            ...finance,
            daysPastDue: this.daysPastDue(finance.actionPlanDueDate)
          }));    
          this.financeListDisplay = this.FinanceList.map((obj: any) => {
            let financeDate = obj.financeDate ? new Date(obj.financeDate) : null;
            let formattedFinanceDate = financeDate ? (financeDate.getMonth() + 1).toString().padStart(2, '0') + '/' + financeDate.getDate().toString().padStart(2, '0') + '/' + financeDate.getFullYear() : null;
    
            let actionPlanDueDate = obj.actionPlanDueDate ? new Date(obj.actionPlanDueDate) : null;
            let formattedActionPlanDueDate = actionPlanDueDate ? (actionPlanDueDate.getMonth() + 1).toString().padStart(2, '0') + '/' + actionPlanDueDate.getDate().toString().padStart(2, '0') + '/' + actionPlanDueDate.getFullYear() : null;

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
          });      
        },
        (error: HttpErrorResponse) => {
          // Handle error
        }
      );
    }
    else if (roles.indexOf("ROLE_ICMS_FINANCE_IC") !== -1) {
      this.financeService.getFinanceForICMSFINANCEIC(this.subProcessId).subscribe(
        (response: FinanceModel[]) => {                                   
          this.FinanceList = response.map(finance => ({
            ...finance,
            daysPastDue: this.daysPastDue(finance.actionPlanDueDate)
          }));
          this.financeListDisplay = this.FinanceList.map((obj: any) => {
            let financeDate = obj.financeDate ? new Date(obj.financeDate) : null;
            let formattedFinanceDate = financeDate ? (financeDate.getMonth() + 1).toString().padStart(2, '0') + '/' + financeDate.getDate().toString().padStart(2, '0') + '/' + financeDate.getFullYear() : null;
    
            let actionPlanDueDate = obj.actionPlanDueDate ? new Date(obj.actionPlanDueDate) : null;
            let formattedActionPlanDueDate = actionPlanDueDate ? (actionPlanDueDate.getMonth() + 1).toString().padStart(2, '0') + '/' + actionPlanDueDate.getDate().toString().padStart(2, '0') + '/' + actionPlanDueDate.getFullYear() : null;

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
          });  
        },
        (error: HttpErrorResponse) => {
          // Handle error
        }
      );
    }

    else if (roles.indexOf("ROLE_ICMS_FINANCE_OWNER") !== -1) {
      this.financeService.getFinanceForICMSFINANCEIC(this.subProcessId).subscribe(
        (response: FinanceModel[]) => {                                      
          this.FinanceList = response.map(finance => ({
            ...finance,
            daysPastDue: this.daysPastDue(finance.actionPlanDueDate)
          }));
          this.financeListDisplay = this.FinanceList.map((obj: any) => {
            let financeDate = obj.financeDate ? new Date(obj.financeDate) : null;
            let formattedFinanceDate = financeDate ? (financeDate.getMonth() + 1).toString().padStart(2, '0') + '/' + financeDate.getDate().toString().padStart(2, '0') + '/' + financeDate.getFullYear() : null;
    
            let actionPlanDueDate = obj.actionPlanDueDate ? new Date(obj.actionPlanDueDate) : null;
            let formattedActionPlanDueDate = actionPlanDueDate ? (actionPlanDueDate.getMonth() + 1).toString().padStart(2, '0') + '/' + actionPlanDueDate.getDate().toString().padStart(2, '0') + '/' + actionPlanDueDate.getFullYear() : null;

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
          });  
        },
        (error: HttpErrorResponse) => {
          // Handle error
        }
      );
    }

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
