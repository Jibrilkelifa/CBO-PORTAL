import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { TradeService } from '../../service/trade-services.service';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { TradeModel } from '../../models/trade-model';
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
  selector: 'Trade-table',
  templateUrl: './trade-table.component.html',
  styleUrls: ['./trade-table.component.scss'],
})
export class TradeTableComponent implements OnDestroy {
  public TradeList: TradeModel[] = [];
  public tradeListDisplay: any[] = [];
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
    private tradeService: TradeService,
    private messageService: MessageService,
    private timeService: TimeService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.populateRoles();
    this.getCurrentDate();
    this.getTradeList(this.roles);
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



  // public getTradeList(roles: string[]): void {

  //   if (roles.indexOf("ROLE_ICMS_ADMIN") !== -1) {
  //     this.tradeService.getAllTrade().subscribe(
  //       (response: TradeModel[]) => {
  //         console.log(";;;",response);
  //         //this.TradeList = response;
  //         this.TradeList = response.map(trade => ({
  //           ...trade,
  //           daysPastDue: this.daysPastDue(trade.actionPlanDueDate)
  //         }));          
  //       },
  //       (error: HttpErrorResponse) => {
  //         // Handle error
  //       }
  //     );
  //   }
  //   else if (roles.indexOf("ROLE_ICMS_TRADE_IC") !== -1) {
  //     this.tradeService.getTradeForDistrict(this.subProcessId).subscribe(
  //       (response: TradeModel[]) => {  
  //         console.log("PPP",response);

  //         //this.TradeList = response;
                                               
  //         this.TradeList = response.map(trade => ({
  //           ...trade,
  //           daysPastDue: this.daysPastDue(trade.actionPlanDueDate)
  //         }));
  //       },
  //       (error: HttpErrorResponse) => {
  //         // Handle error
  //       }
  //     );
  //   }
    

  // }


  public getTradeList(roles: string[]): void {
    let tradeObservable;

    if (roles.includes("ROLE_ICMS_ADMIN")) {
      tradeObservable = this.tradeService.getAllTrade();
    } else if (roles.includes("ROLE_ICMS_TRADE_IC")) {
      tradeObservable = this.tradeService.getTradeForICMSTRADEIC(this.subProcessId);
    } else if (roles.includes("ROLE_ICMS_TRADE_OWNER")) {
      tradeObservable = this.tradeService.getTradeForICMSTRADEIC(this.subProcessId);
    }

    if (tradeObservable) {
      tradeObservable.subscribe(
        (response: TradeModel[]) => {
          this.TradeList = response.map(trade => ({
            ...trade,
            daysPastDue: this.daysPastDue(trade.actionPlanDueDate)
          }));
          this.tradeListDisplay = this.TradeList.map(this.formatTradeData.bind(this));
        },
        (error: HttpErrorResponse) => {
          console.error(error);
        }
      );
    }
  }


  private formatTradeData(obj: any): any {
    let tradeDate = obj.tradeDate ? new Date(obj.tradeDate) : null;
    let formattedTradeDate = tradeDate ? this.formatDate(tradeDate) : null;

    let actionPlanDueDate = obj.actionPlanDueDate ? new Date(obj.actionPlanDueDate) : null;
    let formattedActionPlanDueDate = actionPlanDueDate ? this.formatDate(actionPlanDueDate) : null;

    return {
      tradeDate: formattedTradeDate,
      caseId: obj.caseId,
      referenceNumber:obj.referenceNumber,
      customerName: obj.customerName,
      'allSubCategory.allcategory.name': obj.allSubCategory && obj.allSubCategory.allcategory ? obj.allSubCategory.allcategory.name : null,
      'allSubCategory.name': obj.allSubCategory ? obj.allSubCategory.name : null,
      'tradeType.name': obj.tradeType ? obj.tradeType.name : null,
      otherIrregularity: obj.otherIrregularity,              
      'irregularity.name': obj.irregularity ? obj.irregularity.name : null,
      amount: parseFloat(obj.amount) || 0,
      responsiblePerson: obj.responsiblePerson,
      actionPlanDueDate: formattedActionPlanDueDate,
      'tradeStatus.name': obj.tradeStatus ? obj.tradeStatus.name : null,
    };
  }

  private formatDate(date: Date): string {
    return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
  }

  updateTrade(id: number): void {
    this.router.navigate(['ICMS/Trade/updateTrade', id]); 
  }

  approveActionPlan(trade: TradeModel): void {    
    this.router.navigate(['ICMS/Trade/approveActionPlan', { trade: JSON.stringify(trade) }]);
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
      const data = this.tradeListDisplay.map((plan, index) => (
        {

        'Trade date': plan.tradeDate,
        'Case ID': plan.caseId,
        'Reference Number':plan.referenceNumber,
        'Customer Name': plan.customerName,
        Category: plan['allSubCategory.allcategory.name'],
        'Trade Type': plan['tradeType.name'],
        'Sub Category': plan['allSubCategory.name'],
        Irregularity: plan['irregularity.name'] === 'Other' ? plan['otherIrregularity'] : plan['irregularity.name'],        
        'Responsible Person': plan.responsiblePerson,
        'Action Plan Due Date': plan.actionPlanDueDate,
        'Status': plan['tradeStatus.name'],
        

      }));
      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'Trade Service');
    }
  );
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    const url = window.URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('Trade', fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

 
}
