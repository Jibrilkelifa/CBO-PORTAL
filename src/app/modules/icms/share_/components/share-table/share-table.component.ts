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
          console.log(";;;",response);
          //this.ShareList = response;
          this.ShareList = response.map(share => ({
            ...share,
            daysPastDue: this.daysPastDue(share.actionPlanDueDate)
          }));          
        },
        (error: HttpErrorResponse) => {
          // Handle error
        }
      );
    }
    else if (roles.indexOf("ROLE_ICMS_SHARE_IC") !== -1) {
      this.shareService.getShareForDistrict(this.subProcessId).subscribe(
        (response: ShareModel[]) => {  
          console.log("PPP",response);

          //this.ShareList = response;
                                               
          this.ShareList = response.map(share => ({
            ...share,
            daysPastDue: this.daysPastDue(share.actionPlanDueDate)
          }));
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

 
}
