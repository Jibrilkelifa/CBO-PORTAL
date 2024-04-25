import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FireExtinguisherService } from '../../service/fireExtinguisher-services.service';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { TimeService } from 'src/app/services/sso-services/time.service';

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
  currentDate: Date;


  private subscriptions: Subscription[] = [];
  roles: string[] = [];
  branchId: string = localStorage.getItem('branchId');
  subProcessId: number = Number(localStorage.getItem('subProcessId'));
  constructor(
    private fireExtinguisherService: FireExtinguisherService,
    private messageService: MessageService,
    private router: Router,
    private timeService: TimeService
  ) { }



  ngOnInit() {
    this.populateRoles();
    this.getCurrentDate();
    this.getFireExtinguisherList(this.roles);
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

  public getFireExtinguisherList(roles: string[]): void {
    if (roles.indexOf("ROLE_ICMS_ADMIN") !== -1) {
      this.fireExtinguisherService.getAllFireExtinguisher().subscribe(
        (response: any[]) => {
          this.fireExtinguisherList = response;
        },
        (error: HttpErrorResponse) => {

        }
      );
    }
    else if (roles.indexOf("ROLE_ICMS_BRANCH_IC") !== -1 || roles.indexOf("ROLE_ICMS_BRANCH_MANAGER") !== -1) {
      this.fireExtinguisherService.findAllFireExtinguisherBYBranch(this.branchId).subscribe(
        (response: any[]) => {
          this.fireExtinguisherList = response;
        },
        (error: HttpErrorResponse) => {

        }
      );
    }
    else if (roles.indexOf("ROLE_ICMS_DISTRICT_IC") !== -1 || roles.indexOf("ROLE_ICMS_DISTRICT_DIRECTOR") !== -1) {
      this.fireExtinguisherService.findAllFireExtinguisherSubProcess(this.subProcessId).subscribe(
        (response: any[]) => {
          this.fireExtinguisherList = response;
        },
        (error: HttpErrorResponse) => {

        }
      );


    }
  }

  updateFireExtinguisher(id: number): void {
    this.router.navigate(['ICMS/FireExtinguisher/updateFireExtinguisher', id]);
  }

  calculateDaysLeft(expiryDate: string): number {
    let date = new Date(expiryDate);
    date.setUTCHours(0, 0, 0, 0); // Set time to start of the day for expiryDate in UTC
  
    let currentDate = new Date();
    currentDate.setUTCHours(0, 0, 0, 0); // Set time to start of the day for currentDate in UTC
  
    let daysLeftToExpire = (date.getTime() - currentDate.getTime()) / (1000 * 3600 * 24);
    return Math.floor(daysLeftToExpire);
  }
  
  

  getCurrentDate() {
    this.timeService.getDate().subscribe(
      (response: any) => {

        this.currentDate = new Date(response.time);

      }
    );
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  deleteFireExtinguisher(id: number): void {
    this.fireExtinguisherService.deleteFireExtinguisher(id).subscribe(
      (response: void) => {
        this.getFireExtinguisherList(this.roles);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: "Deleted Fire Extinguisher successfully"
        });
        setTimeout(() => {
        }, 1000);
      },
      (error: HttpErrorResponse) => {

      }
    );

  }


}
