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
  roles: string[] = [];
  branchId: string = localStorage.getItem('branchId');
  subProcessId: number = Number(localStorage.getItem('subProcessId'));
  constructor(
    private fireExtinguisherService: FireExtinguisherService,
    private messageService: MessageService,
    private router: Router
  ) { }



  ngOnInit() {
    this.populateRoles();
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

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

 
}
