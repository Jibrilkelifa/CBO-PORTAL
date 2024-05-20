import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmEventType, ConfirmationService, FilterService, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { IFRService } from '../../../../services/icms-services/ifr-services/ifr.service';
import { TimeService } from '../../../../services/sso-services/time.service';
import { OrganizationalUnitService } from '../../../../services/sso-services/organizational-unit.service'
import { IFR } from 'src/app/models/icms-models/ifr-models/ifr';
import * as XLSX from 'xlsx';
import { DialogService } from 'primeng/dynamicdialog';
import { SingleFraudCaseTableComponent } from '../ifr-single-case/ifr-single-case-table.component';
import { ShowIFRComponent } from '../show/show-ifr.component';


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
  selector: 'app-accordions',
  templateUrl: './ifr-table.component.html',
  styleUrls: ['./ifr-table.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class FraudTableComponent {

  constructor(private filterService: FilterService, private dialogService: DialogService, private fraudService: IFRService, private router: Router, private confirmationService: ConfirmationService,
    private messageService: MessageService, private primengConfig: PrimeNGConfig, private timeService: TimeService, private organizationalUnitService: OrganizationalUnitService) { }


  daysSinceFraudDetection: number;
  public frauds: IFR[] = [];
  public fraudR: IFR[] = [];
  public fraud: IFR;
  selectedFraud: IFR;
  deleteId: number = 0;
  msgs: Message[] = [];
  position: string;
  districtId: number;
  currentDate: Date;

  exportColumns!: ExportColumn[];
  cols!: Column[];
  public IFRDisplay: any[] = [];


  minDate: Date;
  maxDate: Date;

  ngOnInit() {
    this.populateRoles();
    this.getFrauds(this.roles);

    this.getCurrentDate();
    this.primengConfig.ripple = true;

    this.cols = [
      { field: 'subProcess.name', header: 'Name' },
      { field: 'branch.name', header: 'Name' },
      { field: 'caseId', header: 'CaseId' },
      { field: 'suspectedFraudsterName', header: 'Suspected Fraudster Name' },
      { field: 'suspectedFraudsterAddress', header: 'Suspected Fraudster Address' },
      { field: 'fraudType.name', header: 'Name' },
      { field: 'fraudCause', header: 'Fraud Cause' },
      { field: 'suspectedFraudsterProfession.name', header: 'Name' },
      { field: 'fraudAmount', header: 'Fraud Amount' },
      { field: 'fraudOccurrenceDate', header: 'FraudOccurrence Date' },
      { field: 'fraudDetectionDate', header: 'FraudDetection Date' },
      { field: 'reasonForDelay', header: 'Reason For Delay' },
      { field: 'fraudOccurrencePlace', header: 'Fraud Occurrence Place' },
      { field: 'fraudCommittingTechnique', header: 'Fraud Committing Technique' },
      { field: 'fraudCategory.name', header: 'Name' },
      { field: 'actionTaken', header: 'Action Taken' },
      { field: 'amountRecovered', header: 'Amount Recovered' },
      { field: 'provisionHeld', header: 'Provision Held' },
      { field: 'reasonForFailedFraudAttempt', header: 'Reason For Failed Fraud Attempt' },
      { field: 'otherComment', header: 'Other Comment' },
      { field: 'caseStatus.name', header: 'Name' },
      { field: 'daysSinceFraudDetection', header: 'Days Since Fraud Detection' },
      { field: 'isAuthorized', header: 'Is Authorized' },
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

  filterByDate(dataTable: any) {
    dataTable.filter([this.minDate, this.maxDate], 'insuranceExpireDate', 'dateRange');
  }

  formatAmount(amount: string): string {
    // Convert the amount to a number and round it to two decimal places
    const roundedAmount = Number(this.addTrailingZeros(amount).replace(/,/g, '')).toFixed(2);

    // Split the amount into whole and decimal parts
    const [whole, decimal] = roundedAmount.split('.');

    // Format the whole part with commas between every three digits
    const formattedWhole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Return the formatted amount with the decimal part
    return `${formattedWhole}.${decimal}`;
  }

  addTrailingZeros(str: string): string {
    const decimalIndex = str.indexOf('.');
    if (decimalIndex === -1) {
      return `${str}.00`;
    }
    const decimalPlaces = str.length - decimalIndex - 1;
    if (decimalPlaces === 0) {
      return `${str}00`;
    } else if (decimalPlaces === 1) {
      return `${str}0`;
    } else if (decimalPlaces > 2) {
      return str.slice(0, decimalIndex + 3);
    }
    return str;
  }

  getCurrentDate(): void {
    this.timeService.getDate().subscribe(
      (response: any) => {
        this.currentDate = new Date(response.time);
      }
    );
  }

  calculateDaysSinceFraudDetection(fraudDetectionDate: string): number {
    let date = new Date(fraudDetectionDate);
    let daysSinceFraudDetection = (this.currentDate.getTime() - date.getTime()) / (1000 * 3600 * 24);
    return Math.ceil(daysSinceFraudDetection);
  }

  millisFromNowTo(fraudDetectionDate: string): string {

    return (this.calculateDaysSinceFraudDetection(fraudDetectionDate)).toString();
  }
  branchId: string = localStorage.getItem('branchId');

  // branchId: number = Number(localStorage.getItem('branchId'));
  // teamId: number = Number(localStorage.getItem('teamId'));
  subProcessId: number = Number(localStorage.getItem('subProcessId'));
  roles: string[] = [];

  updateFrauds(id: number): void {
    this.getFraud(id);
    this.router.navigate(['updateFraud', id]);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: "Incident Fraud Updated Successfully"
    });
  }

  authorizeFrauds(id: number): void {
    this.fraudService.authorizeFraud(id).subscribe(
      (response: IFR) => {
        this.getFrauds(this.roles);
      }
    );
  }

  calculateProvision(id: number): void {
    this.router.navigate(['ICMS/Fraud/calculateProvision', id]);
  }
  // showFraud(id: number):void {
  //   this.router.navigate('ICMS/Fraud/showFraud',id)
  // }
  absoluteValue(number: number): number {
    return Math.abs(number);
  }


  public getFrauds(roles: string[]): void {
    if (roles.includes("ROLE_ICMS_ADMIN") || roles.includes("ROLE_ICMS_PROVISION")) {
      this.fraudService.getFrauds().subscribe(
        (response: IFR[]) => {
          this.frauds = response;
          this.IFRDisplay = this.frauds.map((obj: any) => {
            let fraudOccurrenceDate = obj.fraudOccurrenceDate ? new Date(obj.fraudOccurrenceDate) : null;
            let formattedFraudOccurrenceDate = fraudOccurrenceDate ? (fraudOccurrenceDate.getMonth() + 1).toString().padStart(2, '0') + '/' + fraudOccurrenceDate.getDate().toString().padStart(2, '0') + '/' + fraudOccurrenceDate.getFullYear() : null;

            let fraudDetectionDate = obj.fraudDetectionDate ? new Date(obj.fraudDetectionDate) : null;
            let formattedFraudDetectionDate = fraudDetectionDate ? (fraudDetectionDate.getMonth() + 1).toString().padStart(2, '0') + '/' + fraudDetectionDate.getDate().toString().padStart(2, '0') + '/' + fraudDetectionDate.getFullYear() : null;

            return {
              'subProcess.name': obj.subProcess ? obj.subProcess.name : null,
              'branch.name': obj.branch ? obj.branch.name : null,
              'team.externalName': obj.team ? obj.team.externalName : null,
              'caseId': obj.caseId,
              'suspectedFraudsterName': obj.suspectedFraudsterName,
              'suspectedFraudsterAddress': obj.suspectedFraudsterAddress,
              'fraudType.name': obj.fraudType ? obj.fraudType.name : null,
              'otherFraudType': obj.otherFraudType,
              'fraudCause': obj.fraudCause,
              'suspectedFraudsterProfession.name': obj.suspectedFraudsterProfession ? obj.suspectedFraudsterProfession.name : null,
              'otherSuspectedFraudsterProfession': obj.otherSuspectedFraudsterProfession,
              'fraudAmount': parseFloat(obj.fraudAmount) || 0,
              'fraudOccurrenceDate': formattedFraudOccurrenceDate,
              'fraudDetectionDate': formattedFraudDetectionDate,
              'reasonForDelay': obj.reasonForDelay,
              'fraudOccurrencePlace': obj.fraudOccurrencePlace,
              'fraudCommittingTechnique': obj.fraudCommittingTechnique,
              'Fraud Category Name': obj.allCategory && obj.allCategory.name === 'Other' ? obj.otherFraudCategory : obj.allCategory.name, 'otherFraudCategory': obj.otherFraudCategory,
              'actionTaken': obj.actionTaken,
              'amountRecovered': parseFloat(obj.amountRecovered) || 0,
              'provisionHeld': obj.provisionHeld !== null ? obj.provisionHeld : 'Not yet calculated',
              'reasonForFailedFraudAttempt': obj.reasonForFailedFraudAttempt,
              'otherComment': obj.otherComment,
              'caseStatus.name': obj.caseStatus ? obj.caseStatus.name : null,
              // 'daysSinceFraudDetection': obj.daysSinceFraudDetection,
              'daysSinceFraudDetection': obj.formattedFraudDetectionDate ? this.calculateDaysSinceFraudDetection(obj.formattedFraudDetectionDate) : null, // Added this line
              'isAuthorized': obj.isAuthorized,
            };
          });


        },
        (error: HttpErrorResponse) => {


        }
      );
    }
    else if (roles.includes("ROLE_ICMS_BRANCH_IC") || roles.includes("ROLE_ICMS_BRANCH_MANAGER")) {
      this.fraudService.getFraudForBranch(this.branchId).subscribe(
        (response: IFR[]) => {
          this.frauds = response;
          this.IFRDisplay = this.frauds.map((obj: any) => {
            let fraudOccurrenceDate = obj.fraudOccurrenceDate ? new Date(obj.fraudOccurrenceDate) : null;
            let formattedFraudOccurrenceDate = fraudOccurrenceDate ? (fraudOccurrenceDate.getMonth() + 1).toString().padStart(2, '0') + '/' + fraudOccurrenceDate.getDate().toString().padStart(2, '0') + '/' + fraudOccurrenceDate.getFullYear() : null;

            let fraudDetectionDate = obj.fraudDetectionDate ? new Date(obj.fraudDetectionDate) : null;
            let formattedFraudDetectionDate = fraudDetectionDate ? (fraudDetectionDate.getMonth() + 1).toString().padStart(2, '0') + '/' + fraudDetectionDate.getDate().toString().padStart(2, '0') + '/' + fraudDetectionDate.getFullYear() : null;

            return {
              'subProcess.name': obj.subProcess ? obj.subProcess.name : null,
              'branch.name': obj.branch ? obj.branch.name : null,
              'team.externalName': obj.team ? obj.team.externalName : null,
              'caseId': obj.caseId,
              'suspectedFraudsterName': obj.suspectedFraudsterName,
              'suspectedFraudsterAddress': obj.suspectedFraudsterAddress,
              'fraudType.name': obj.fraudType ? obj.fraudType.name : null,
              'otherFraudType': obj.otherFraudType,
              'fraudCause': obj.fraudCause,
              'suspectedFraudsterProfession.name': obj.suspectedFraudsterProfession ? obj.suspectedFraudsterProfession.name : null,
              'otherSuspectedFraudsterProfession': obj.otherSuspectedFraudsterProfession,
              'fraudAmount': parseFloat(obj.fraudAmount) || 0,
              'fraudOccurrenceDate': formattedFraudOccurrenceDate,
              'fraudDetectionDate': formattedFraudDetectionDate,
              'reasonForDelay': obj.reasonForDelay,
              'fraudOccurrencePlace': obj.fraudOccurrencePlace,
              'fraudCommittingTechnique': obj.fraudCommittingTechnique,
              'Fraud Category Name': obj.allCategory && obj.allCategory.name === 'Other' ? obj.otherFraudCategory : obj.allCategory.name, 'otherFraudCategory': obj.otherFraudCategory,
              'actionTaken': obj.actionTaken,
              'amountRecovered': parseFloat(obj.amountRecovered) || 0,
              'provisionHeld': obj.provisionHeld !== null ? obj.provisionHeld : 'Not yet calculated',
              'reasonForFailedFraudAttempt': obj.reasonForFailedFraudAttempt,
              'otherComment': obj.otherComment,
              'caseStatus.name': obj.caseStatus ? obj.caseStatus.name : null,
              'daysSinceFraudDetection': obj.formattedFraudDetectionDate ? this.calculateDaysSinceFraudDetection(obj.formattedFraudDetectionDate) : null, // Added this line
              'isAuthorized': obj.isAuthorized,
            };
          });

        },
        (error: HttpErrorResponse) => {


        }
      );
    }
    else if (roles.includes("ROLE_ICMS_DISTRICT_IC") || roles.includes("ROLE_ICMS_DISTRICT_DIRECTOR")) {
      this.fraudService.getFraudForDistrict(this.subProcessId).subscribe(
        (response: IFR[]) => {
          this.frauds = response;
          this.IFRDisplay = this.frauds.map((obj: any) => {
            let fraudOccurrenceDate = obj.fraudOccurrenceDate ? new Date(obj.fraudOccurrenceDate) : null;
            let formattedFraudOccurrenceDate = fraudOccurrenceDate ? (fraudOccurrenceDate.getMonth() + 1).toString().padStart(2, '0') + '/' + fraudOccurrenceDate.getDate().toString().padStart(2, '0') + '/' + fraudOccurrenceDate.getFullYear() : null;

            let fraudDetectionDate = obj.fraudDetectionDate ? new Date(obj.fraudDetectionDate) : null;
            let formattedFraudDetectionDate = fraudDetectionDate ? (fraudDetectionDate.getMonth() + 1).toString().padStart(2, '0') + '/' + fraudDetectionDate.getDate().toString().padStart(2, '0') + '/' + fraudDetectionDate.getFullYear() : null;

            return {
              'subProcess.name': obj.subProcess ? obj.subProcess.name : null,
              'branch.name': obj.branch ? obj.branch.name : null,
              'team.externalName': obj.team ? obj.team.externalName : null,
              'caseId': obj.caseId,
              'suspectedFraudsterName': obj.suspectedFraudsterName,
              'suspectedFraudsterAddress': obj.suspectedFraudsterAddress,
              'fraudType.name': obj.fraudType ? obj.fraudType.name : null,
              'otherFraudType': obj.otherFraudType,
              'fraudCause': obj.fraudCause,
              'suspectedFraudsterProfession.name': obj.suspectedFraudsterProfession ? obj.suspectedFraudsterProfession.name : null,
              'otherSuspectedFraudsterProfession': obj.otherSuspectedFraudsterProfession,
              'fraudAmount': parseFloat(obj.fraudAmount) || 0,
              'fraudOccurrenceDate': formattedFraudOccurrenceDate,
              'fraudDetectionDate': formattedFraudDetectionDate,
              'reasonForDelay': obj.reasonForDelay,
              'fraudOccurrencePlace': obj.fraudOccurrencePlace,
              'fraudCommittingTechnique': obj.fraudCommittingTechnique,
              'Fraud Category Name': obj.allCategory && obj.allCategory.name === 'Other' ? obj.otherFraudCategory : obj.allCategory.name, 'otherFraudCategory': obj.otherFraudCategory,
              'actionTaken': obj.actionTaken,
              'amountRecovered': parseFloat(obj.amountRecovered) || 0,
              'provisionHeld': obj.provisionHeld !== null ? obj.provisionHeld : 'Not yet calculated',
              'reasonForFailedFraudAttempt': obj.reasonForFailedFraudAttempt,
              'otherComment': obj.otherComment,
              'caseStatus.name': obj.caseStatus ? obj.caseStatus.name : null,
              'daysSinceFraudDetection': obj.formattedFraudDetectionDate ? this.calculateDaysSinceFraudDetection(obj.formattedFraudDetectionDate) : null, // Added this line
              'isAuthorized': obj.isAuthorized,
            };
          });

        },
        (error: HttpErrorResponse) => {

        }
      );
    }
  }
  deleteFrauds(id: number): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this record?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.fraudService.deleteFraud(id).subscribe(
          (response: void) => {
            this.getFrauds(this.roles);
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: "Deleted Fraud successfully"
            });
            setTimeout(() => {
              window.location.reload();
            }, 2000);
    
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


  public getFraud(id: number): IFR[] {
    this.fraudService.getFraud(id).subscribe(
      (response: IFR) => {
        this.fraudR = [response];

      },
      (error: HttpErrorResponse) => {

      }
    );
    return this.fraudR;
  }

  public openInModal(caseId: number) {
    this.dialogService.open(SingleFraudCaseTableComponent,
      {
        header: '',
        width: '70%',
        data: {
          id: caseId
        }
      });
  }

  show(id: number) {
    const data = this.frauds.find(
      (fraud) => fraud.id === id
    );
    const title = 'Fraud image';

    const ref = this.dialogService.open(ShowIFRComponent, {
      header: 'Fraud image',
      draggable: true,
      width: '50%',
      data: { data, title },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const data = this.IFRDisplay.map((plan, index) => ({
        'Sub Process Name': plan['subProcess.name'],
        'Branch/Team Name': plan['team.externalName'] ? plan['team.externalName'] : plan['branch.name'],
        'Case Id': plan.caseId,
        'Suspected Fraudster Name': plan.suspectedFraudsterName,
        'Suspected Fraudster Address': plan.suspectedFraudsterAddress,
        'Fraud Type Name': plan['fraudType.name'] === 'Other' ? plan['otherFraudType'] : plan['fraudType.name'],
        'Fraud Cause': plan.fraudCause,
        'Suspected Fraudster Profession Name': plan['suspectedFraudsterProfession.name'] === 'Other' ? plan['otherSuspectedFraudsterProfession'] : plan['suspectedFraudsterProfession.name'],
        'Fraud Amount': plan.fraudAmount,
        'Fraud Occurrence Date': plan.fraudOccurrenceDate,
        'Fraud Detection Date': plan.fraudDetectionDate,
        'Reason For Delay': plan.reasonForDelay,
        'Fraud Occurrence Place': plan.fraudOccurrencePlace,
        'Fraud Committing Technique': plan.fraudCommittingTechnique,
        'Fraud Category Name': plan['Fraud Category Name'],
        'Action Taken': plan.actionTaken,
        'Amount Recovered': plan.amountRecovered,
        'Provision Held': plan.provisionHeld,
        'Reason For Failed Fraud Attempt': plan.reasonForFailedFraudAttempt,
        'Other Comment': plan.otherComment,
        'Case Status Name': plan['caseStatus.name'],
        'Days Since Fraud Detection': plan.fraudDetectionDate ? this.calculateDaysSinceFraudDetection(plan.fraudDetectionDate) : null,
        'Is Authorized': plan.isAuthorized,
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


