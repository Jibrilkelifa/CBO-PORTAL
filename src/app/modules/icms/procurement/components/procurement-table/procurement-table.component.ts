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
    if (roles.indexOf("ROLE_ICMS_ADMIN") !== -1) {
      this.procurementService.getAllProcurement().subscribe(
        (response: ProcurementModel[]) => {
          this.ProcurementList = response.map(procurement => ({
            ...procurement,
            daysPastDue: this.daysPastDue(procurement.actionPlanDueDate)
          }));
        },
        (error: HttpErrorResponse) => {
          // Handle error
        }
      );
    }
    else if (roles.indexOf("ROLE_ICMS_PROCUREMENT_IC") !== -1) {
      this.procurementService.getProcurementForICMSPROCUREMENTIC(this.subProcessId).subscribe(
        (response: ProcurementModel[]) => {
          this.ProcurementList = response.map(procurement => ({
            ...procurement,
            daysPastDue: this.daysPastDue(procurement.actionPlanDueDate)
          }));
        },
        (error: HttpErrorResponse) => {
          // Handle error
        }
      );
    }
    else if (roles.indexOf("ROLE_ICMS_PROCUREMENT_OWNER") !== -1) {
      this.procurementService.getProcurementForICMSPROCUREMENTIC(this.subProcessId).subscribe(
        (response: ProcurementModel[]) => {
          this.ProcurementList = response.map(finance => ({
            ...finance,
            daysPastDue: this.daysPastDue(finance.actionPlanDueDate)
          }));
        },
        (error: HttpErrorResponse) => {
          // Handle error
        }
      );
    }

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


}
