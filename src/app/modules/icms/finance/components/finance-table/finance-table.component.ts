import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FinanceService } from '../../service/finance-services.service';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
  public FinanceList: any[] = [];

  approved: false;

  exportColumns!: ExportColumn[];
  cols!: Column[];

  private subscriptions: Subscription[] = [];

  constructor(
    private financeService: FinanceService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getFinanceList();
  }

  getFinanceList(): void {
    this.subscriptions.push(
      this.financeService.getAllFinance().subscribe(
        (response: any) => {
          this.FinanceList = response;          
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  updateFinace(id: number): void {
    this.router.navigate(['ICMS/Finance/updateFinance', id]); 
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

 
}
