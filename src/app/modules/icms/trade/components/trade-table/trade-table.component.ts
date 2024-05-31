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



  public getTradeList(roles: string[]): void {

    if (roles.indexOf("ROLE_ICMS_ADMIN") !== -1) {
      this.tradeService.getAllTrade().subscribe(
        (response: TradeModel[]) => {
          console.log(";;;",response);
          //this.TradeList = response;
          this.TradeList = response.map(trade => ({
            ...trade,
            daysPastDue: this.daysPastDue(trade.actionPlanDueDate)
          }));          
        },
        (error: HttpErrorResponse) => {
          // Handle error
        }
      );
    }
    else if (roles.indexOf("ROLE_ICMS_TRADE_IC") !== -1) {
      this.tradeService.getTradeForDistrict(this.subProcessId).subscribe(
        (response: TradeModel[]) => {  
          console.log("PPP",response);

          //this.TradeList = response;
                                               
          this.TradeList = response.map(trade => ({
            ...trade,
            daysPastDue: this.daysPastDue(trade.actionPlanDueDate)
          }));
        },
        (error: HttpErrorResponse) => {
          // Handle error
        }
      );
    }

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

 
}
