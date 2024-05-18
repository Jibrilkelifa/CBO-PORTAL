import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { ShareService } from '../../service/share-services.service';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ShareModel } from '../../models/share-model';
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
  selector: 'share-table',
  templateUrl: './share-table.component.html',
  styleUrls: ['./share-table.component.scss'],
})
export class ShareTableComponent implements OnDestroy {
  public ShareList: ShareModel[] = [];
  public shareListDisplay: any[] = [];

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
    private shareService: ShareService,
    private messageService: MessageService,
    private timeService: TimeService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.populateRoles();
    this.getCurrentDate();
    this.getShareList(this.roles);
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



  public getShareList(roles: string[]): void {
    if (roles.indexOf("ROLE_ICMS_ADMIN") !== -1) {
      this.shareService.getAllShare().subscribe(
        (response: ShareModel[]) => {

          this.ShareList = response.map(share => ({
            ...share,
            daysPastDue: this.daysPastDue(share.actionPlanDueDate)
          }));   
          this.shareListDisplay = this.ShareList.map((obj: any) => {
            let shareDate = obj.shareDate ? new Date(obj.shareDate) : null;
            let formattedShareDate = shareDate ? (shareDate.getMonth() + 1).toString().padStart(2, '0') + '/' + shareDate.getDate().toString().padStart(2, '0') + '/' + shareDate.getFullYear() : null;
    
            let actionPlanDueDate = obj.actionPlanDueDate ? new Date(obj.actionPlanDueDate) : null;
            let formattedActionPlanDueDate = actionPlanDueDate ? (actionPlanDueDate.getMonth() + 1).toString().padStart(2, '0') + '/' + actionPlanDueDate.getDate().toString().padStart(2, '0') + '/' + actionPlanDueDate.getFullYear() : null;

            return {
              shareDate: formattedShareDate,
              caseId: obj.caseId,
              shareNumber: obj.shareNumber,
              shareHoldersName: obj.shareHoldersName,
              'allSubCategory.allcategory.name': obj.allSubCategory && obj.allSubCategory.allcategory ? obj.allSubCategory.allcategory.name : null,
              'allSubCategory.name': obj.allSubCategory ? obj.allSubCategory.name : null,
              'irregularity.name': obj.irregularity ? obj.irregularity.name : null,
              amountInvolved: parseFloat(obj.amountInvolved) || 0,
              responsiblePerson: obj.responsiblePerson,
              actionPlanDueDate: formattedActionPlanDueDate,
              'shareStatus.name': obj.shareStatus ? obj.shareStatus.name : null,
            };
          });           
        },
        (error: HttpErrorResponse) => {
          // Handle error
        }
      );
    }
    else if (roles.indexOf("ROLE_ICMS_SHARE_IC") !== -1) {
      this.shareService.getShareForDistrict(this.subProcessId).subscribe(
        (response: ShareModel[]) => { 
             
          this.ShareList = response.map(share => ({
            ...share,
            daysPastDue: this.daysPastDue(share.actionPlanDueDate)
          }));
          this.shareListDisplay = this.ShareList.map((obj: any) => {
            let shareDate = obj.shareDate ? new Date(obj.shareDate) : null;
            let formattedShareDate = shareDate ? (shareDate.getMonth() + 1).toString().padStart(2, '0') + '/' + shareDate.getDate().toString().padStart(2, '0') + '/' + shareDate.getFullYear() : null;
    
            let actionPlanDueDate = obj.actionPlanDueDate ? new Date(obj.actionPlanDueDate) : null;
            let formattedActionPlanDueDate = actionPlanDueDate ? (actionPlanDueDate.getMonth() + 1).toString().padStart(2, '0') + '/' + actionPlanDueDate.getDate().toString().padStart(2, '0') + '/' + actionPlanDueDate.getFullYear() : null;

            return {
              shareDate: formattedShareDate,
              caseId: obj.caseId,
              shareNumber: obj.shareNumber,
              shareHoldersName: obj.shareHoldersName,
              'allSubCategory.allcategory.name': obj.allSubCategory && obj.allSubCategory.allcategory ? obj.allSubCategory.allcategory.name : null,
              'allSubCategory.name': obj.allSubCategory ? obj.allSubCategory.name : null,
              'irregularity.name': obj.irregularity ? obj.irregularity.name : null,
              amountInvolved: parseFloat(obj.amountInvolved) || 0,
              responsiblePerson: obj.responsiblePerson,
              actionPlanDueDate: formattedActionPlanDueDate,
              'shareStatus.name': obj.shareStatus ? obj.shareStatus.name : null,
            };
          });   
        },
        (error: HttpErrorResponse) => {
          // Handle error
        }
      );
    }

    else if (roles.indexOf("ROLE_ICMS_SHARE_OWNER") !== -1) {
      this.shareService.getShareForDistrict(this.subProcessId).subscribe(
        (response: ShareModel[]) => { 
          
                                               
          this.ShareList = response.map(share => ({
            ...share,
            daysPastDue: this.daysPastDue(share.actionPlanDueDate)
          }));
          this.shareListDisplay = this.ShareList.map((obj: any) => {
            let shareDate = obj.shareDate ? new Date(obj.shareDate) : null;
            let formattedShareDate = shareDate ? (shareDate.getMonth() + 1).toString().padStart(2, '0') + '/' + shareDate.getDate().toString().padStart(2, '0') + '/' + shareDate.getFullYear() : null;
    
            let actionPlanDueDate = obj.actionPlanDueDate ? new Date(obj.actionPlanDueDate) : null;
            let formattedActionPlanDueDate = actionPlanDueDate ? (actionPlanDueDate.getMonth() + 1).toString().padStart(2, '0') + '/' + actionPlanDueDate.getDate().toString().padStart(2, '0') + '/' + actionPlanDueDate.getFullYear() : null;

            return {
              shareDate: formattedShareDate,
              caseId: obj.caseId,
              shareNumber: obj.shareNumber,
              shareHoldersName: obj.shareHoldersName,
              'allSubCategory.allcategory.name': obj.allSubCategory && obj.allSubCategory.allcategory ? obj.allSubCategory.allcategory.name : null,
              'allSubCategory.name': obj.allSubCategory ? obj.allSubCategory.name : null,
              'irregularity.name': obj.irregularity ? obj.irregularity.name : null,
              amountInvolved: parseFloat(obj.amountInvolved) || 0,
              responsiblePerson: obj.responsiblePerson,
              actionPlanDueDate: formattedActionPlanDueDate,
              'shareStatus.name': obj.shareStatus ? obj.shareStatus.name : null,
            };
          });   
        },
        (error: HttpErrorResponse) => {
          // Handle error
        }
      );
    }

  }
  

  updateShare(id: number): void {
    this.router.navigate(['ICMS/Share/updateShare', id]); 
  }

  approveActionPlan(share: ShareModel): void {    
    this.router.navigate(['ICMS/Share/approveActionPlan', { share: JSON.stringify(share) }]);
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
      const data = this.shareListDisplay.map((plan, index) => ({
        'Share date': plan.shareDate,
        'Case ID': plan.caseId,
        'Share Number': plan.shareNumber,
        'Share Holders Name': plan.shareHoldersName,
        Category: plan['allSubCategory.allcategory.name'],
        'Sub Category': plan['allSubCategory.name'],        
        Irregularity: plan['irregularity.name'],        
        'Amount Involved': plan.amountInvolved !== null ? plan.amountInvolved : null,
        'Responsible Person': plan.responsiblePerson,
        'Action Plan Due Date': plan.actionPlanDueDate,
        'Status': plan['shareStatus.name'],

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
