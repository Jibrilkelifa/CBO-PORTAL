import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { ProcurementService } from '../../service/procurement-services.service';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ProcurementModel } from '../../models/procurement-model';
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
  selector: 'procurement-table',
  templateUrl: './procurement-table.component.html',
  styleUrls: ['./procurement-table.component.scss'],
})
export class ProcurementTableComponent implements OnDestroy {
  public ProcurementList: ProcurementModel[] = [];
  public procurementListDisplay: any[] = [];

  approved: false;

  exportColumns!: ExportColumn[];
  cols!: Column[];
  roles: string[] = [];
  escalatedByManager: boolean = false;
  branchId: number = Number(localStorage.getItem('branchId'));
  subProcessId: number = Number(localStorage.getItem('subProcessId'));
  teamId: number = JSON.parse(localStorage.getItem("team")).id;

  currentDate: Date;

  private subscriptions: Subscription[] = [];

  constructor(
    private procurementService: ProcurementService,
    private messageService: MessageService,
    private timeService: TimeService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.populateRoles();
    this.getCurrentDate();
    this.getProcurementList(this.roles);
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



  public getProcurementList(roles: string[]): void {
    let procurementObservable;

    if (roles.includes("ROLE_ICMS_ADMIN")) {
        procurementObservable = this.procurementService.getAllProcurement();
    } else if (roles.includes("ROLE_ICMS_PROCUREMENT_IC")) {
        procurementObservable = this.procurementService.getProcurementForICMSPROCUREMENTIC(this.subProcessId);
    } else if (roles.includes("ROLE_ICMS_PROCUREMENT_OWNER")) {
        procurementObservable = this.procurementService.getProcurementForICMSPROCUREMENTIC(this.subProcessId);
    }

    if (procurementObservable) {
        procurementObservable.subscribe(
            (response: ProcurementModel[]) => {
                this.ProcurementList = response.map(procurement => ({
                    ...procurement,
                    daysPastDue: this.daysPastDue(procurement.actionPlanDueDate)
                }));
                this.procurementListDisplay = this.ProcurementList.map(this.formatProcurementData.bind(this));
            },
            (error: HttpErrorResponse) => {
                console.error(error);
            }
        );
    }
}

private formatProcurementData(obj: ProcurementModel): any {
    let procurementDate = obj.procurementDate ? new Date(obj.procurementDate) : null;
    let formattedProcurementDate = procurementDate ? this.formatDate(procurementDate) : null;

    let actionPlanDueDate = obj.actionPlanDueDate ? new Date(obj.actionPlanDueDate) : null;
    let formattedActionPlanDueDate = actionPlanDueDate ? this.formatDate(actionPlanDueDate) : null;

    return {
        procurementDate: formattedProcurementDate,
        caseId: obj.caseId,
        referenceNumber: obj.referenceNumber,
        'allCategory.name': obj.allCategory ? obj.allCategory.name : null,
        'allSubCategory.name': obj.allSubCategory ? obj.allSubCategory.name : null,
        'irregularity.name': obj.irregularity?.name || null,
        otherIrregularity: obj.otherIrregularity,
        amountInvolved: parseFloat(obj.amountInvolved) || 0,
        responsiblePerson: obj.responsiblePerson,
        actionPlanDueDate: formattedActionPlanDueDate,
        'procurementStatus.name': obj.procurementStatus ? obj.procurementStatus.name : null,
    };
}

private formatDate(date: Date): string {
    return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
}



  updateProcurement(id: number): void {
    this.router.navigate(['ICMS/Procurement/updateProcurement', id]);
  }

  approveActionPlan(procurement: ProcurementModel): void {
    this.router.navigate(['ICMS/Procurement/approveActionPlan', { procurement: JSON.stringify(procurement) }]);
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
        const data = this.procurementListDisplay.map((item, index) => ({
            'Procurement Date': item.procurementDate,
            'Case ID': item.caseId,
            'Reference Number': item.referenceNumber,
            'Category': item['allCategory.name'],
            'Sub Category': item['allSubCategory.name'],
            Irregularity: item['irregularity.name'] === 'Other' ? item['otherIrregularity'] : item['irregularity.name'],        
            'Amount Involved': item.amountInvolved !== null ? item.amountInvolved : null,
            'Responsible Person': item.responsiblePerson,
            'Action Plan Due Date': item.actionPlanDueDate,
            'Status': item['procurementStatus.name'],
        }));
        const worksheet = xlsx.utils.json_to_sheet(data);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, 'Procurement List');
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
