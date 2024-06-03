import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FireExtinguisherService } from '../../service/fireExtinguisher-services.service';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
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
  public fireExtinguisherDisplay: any[] = [];

  private subscriptions: Subscription[] = [];
  roles: string[] = [];
  branchId: string = localStorage.getItem('branchId');
  subProcessId: number = Number(localStorage.getItem('subProcessId'));
  constructor(
    private fireExtinguisherService: FireExtinguisherService,
    private messageService: MessageService,
    private router: Router,
    private timeService: TimeService,
    private confirmationService: ConfirmationService
  
  ) { }





  ngOnInit() {
    this.populateRoles();
    this.getCurrentDate();
    this.getFireExtinguisherList(this.roles);

    this.cols = [
      { field: 'branch.name', header: 'Branch' },
      { field: 'subprocess.name', header: 'Sub process' },
      { field: 'extinguisherSerialNumber', header: 'Extinguisher serial number' },
      { field: 'size', header: 'Size' },
      { field: 'inspectionDate', header: 'Inspection date' },
      { field: 'nextInspectionDate', header: 'Next inpection date' },
      { field: 'daysLeftForInspection', header: 'Days left for inspection' },
      { field: 'status', header: 'Status' },
    ];

    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));

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

  calculateDaysLeftToExpire(expiryDate: string): number {
    if (!expiryDate) return null; // Add this line to handle null or undefined expiryDate
    let date = new Date(expiryDate);
    if (isNaN(date.getTime())) return null; // Add this line to handle invalid dates
    let daysLeftToExpire = (date.getTime() - this.currentDate.getTime()) / (1000 * 3600 * 24);
    return Math.ceil(daysLeftToExpire);
  }
  

  public getFireExtinguisherList(roles: string[]): void {
    let extinguisherObservable;

    if (roles.includes("ROLE_ICMS_ADMIN")) {
        extinguisherObservable = this.fireExtinguisherService.getAllFireExtinguisher();
    } else if (roles.includes("ROLE_ICMS_BRANCH_IC") || roles.includes("ROLE_ICMS_BRANCH_MANAGER")) {
        extinguisherObservable = this.fireExtinguisherService.findAllFireExtinguisherBYBranch(this.branchId);
    } else if (roles.includes("ROLE_ICMS_DISTRICT_IC") || roles.includes("ROLE_ICMS_DISTRICT_DIRECTOR")) {
        extinguisherObservable = this.fireExtinguisherService.findAllFireExtinguisherSubProcess(this.subProcessId);
    }

    if (extinguisherObservable) {
        extinguisherObservable.subscribe(
            (response: any[]) => {
                this.fireExtinguisherList = response;
                this.fireExtinguisherDisplay = this.fireExtinguisherList.map(this.formatFireExtinguisherData.bind(this));
            },
            (error: HttpErrorResponse) => {
                console.error(error);
            }
        );
    }
}

private formatFireExtinguisherData(obj: any): any {
    let inspectionDate = obj.inspectionDate ? new Date(obj.inspectionDate) : null;
    let formattedInspectionDate = inspectionDate ? this.formatDate(inspectionDate) : null;

    let nextInspectionDate = obj.nextInspectionDate ? new Date(obj.nextInspectionDate) : null;
    let formattedNextInspectionDate = nextInspectionDate ? this.formatDate(nextInspectionDate) : null;

    return {
        'branch.name': obj.branch ? obj.branch.name : null,
        'subprocess.name': obj.subProcess ? obj.subProcess.name : null,
        extinguisherSerialNumber: obj.extinguisherSerialNumber,
        size: obj.size,
        inspectionDate: formattedInspectionDate,
        nextInspectionDate: formattedNextInspectionDate,
        daysLeftForInspection: obj.nextInspectionDate ? this.calculateDaysLeftToExpire(obj.nextInspectionDate) : null,
        status: obj.status,
    };
}

private formatDate(date: Date): string {
    return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
}


  updateFireExtinguisher(id: number): void {
    this.router.navigate(['ICMS/FireExtinguisher/updateFireExtinguisher', id]);
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
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this record?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
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
            console.log(error);
          }
        );
      },
      reject: (type: ConfirmEventType) => {
        if (type === ConfirmEventType.REJECT) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'You have rejected'
          });
        }
      }
    });
  }
  
  exportExcel() {
    import('xlsx').then((xlsx) => {
      const data = this.fireExtinguisherDisplay.map((plan, index) => ({
        'Branch': plan['branch.name'],
        'Sub process': plan['subprocess.name'],
        'Extinguisher serial number': plan.extinguisherSerialNumber,
        'Size': plan.size,
        'Inspection date': plan.inspectionDate,
        'Next inpection date': plan.nextInspectionDate,
        'Days left for inspection': plan.daysLeftForInspection, // This line will add 'Days left for inspection' to the Excel sheet
        'Status': plan.status,
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
    link.setAttribute('DACGM', fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


}
