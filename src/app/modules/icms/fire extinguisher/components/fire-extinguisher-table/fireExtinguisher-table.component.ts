import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FireExtinguisherService } from '../../service/fireExtinguisher-services.service';
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
  selector: 'fireExtinguisher-table',
  templateUrl: './fireExtinguisher-table.component.html',
  styleUrls: ['./fireExtinguisher-table.component.scss'],
})
export class FireExtinguisherTableComponent implements OnDestroy {
  public fireExtinguisherList: any[] = [];

  approved: false;

  exportColumns!: ExportColumn[];
  cols!: Column[];

  private subscriptions: Subscription[] = [];

  constructor(
    private fireExtinguisherService: FireExtinguisherService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getFinanceList();
  }

  getFinanceList(): void {
    this.subscriptions.push(
      this.fireExtinguisherService.getAllFireExtinguisher().subscribe(
        (response: any) => {
          this.fireExtinguisherList = response;          
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
