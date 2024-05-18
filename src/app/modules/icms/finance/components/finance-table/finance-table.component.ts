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
    
            return {
              financeDate: formattedFinanceDate,
              caseId: obj.caseId,
              accountNumber: obj.accountNumber,
              'irregularity.allSubCategory.allcategory.name': obj.irregularity && obj.irregularity.allSubCategory && obj.irregularity.allSubCategory.allcategory ? obj.irregularity.allSubCategory.allcategory.name : null,
              'irregularity.allSubCategory.name': obj.irregularity && obj.irregularity.allSubCategory ? obj.irregularity.allSubCategory.name : null,
              'irregularity': obj.irregularity,
              amountInvolved: parseFloat(obj.amountInvolved) || 0,

              extinguisherSerialNumber: obj.extinguisherSerialNumber,
              size: obj.size,
              // nextInspectionDate: formattedNextInspectionDate,
              // daysLeftForInspection: obj.nextInspectionDate ? this.calculateDaysLeftToExpire(obj.nextInspectionDate) : null, // Added this line
              // status: obj.status,
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
        'Extinguisher serial number': plan.extinguisherSerialNumber,
        'Size': plan.size,
        'Next inpection date': plan.nextInspectionDate,
        'Days left for inspection': plan.daysLeftForInspection, // This line will add 'Days left for inspection' to the Excel sheet
        'Status': plan.status,
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
