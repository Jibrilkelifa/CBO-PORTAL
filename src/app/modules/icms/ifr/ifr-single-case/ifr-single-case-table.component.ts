import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { IFRService } from '../../../../services/icms-services/ifr-services/ifr.service';
import { EmployeeService } from '../../../../services/sso-services/employee.service';
import { IFR } from 'src/app/models/icms-models/ifr-models/ifr';
import jsPDF from 'jspdf';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import html2canvas from 'html2canvas';
import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-accordions',
  templateUrl: './ifr-single-case-table.component.html',
  styleUrls: ['./ifr-single-case-table.component.scss']
})
export class SingleFraudCaseTableComponent {

  public caseId: number;
  public caseIdentifier: string;
  public preparedDate: string;
  public preparedBy: string = localStorage.getItem('name');
  public authorizedDate: string = "Not Authorized";
  public authorizedBy: string = "Not Authorized";
  public caseName: string = "non";
  public date = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  });
  public preparerImageData: any;
  public authorizerImageData: any;

  public items: any[] = [
    {
      id: 1,
      name: 'Name and Complete Address of the suspected fraudster',
      description: "",
      remark: ""
    },
    {
      id: 2,
      name: 'Description or type of fraud (embezzlement, cheating, forgery using fake instrument or other)',
      description: "",
      remark: ""
    },
    {
      id: 3,
      name: 'Cause of the Fraud',
      description: "",
      remark: ""
    },
    {
      id: 4,
      name: 'Status or profession of the suspected fraudster (director, employee, customer or other party)',
      description: "",
      remark: ""
    },
    {
      id: 5,
      name: 'Amount of actual or estimated Fraud',
      description: "",
      remark: ""
    },
    {
      id: 6,
      name: 'Date of occurrence of fraud',
      description: "",
      remark: ""
    },
    {
      id: 7,
      name: 'Date of detection of fraud an reason for the delay to detect (If any)',
      description: "",
      remark: ""
    },
    {
      id: 8,
      name: 'Place and area of operation where the fraud has occured',
      description: "",
      remark: ""
    },
    {
      id: 9,
      name: 'Technique and/or Technology used to commit the fraud',
      description: "",
      remark: ""
    },
    {
      id: 10,
      name: 'Action Taken or proposed to be taken to avoid such incidents',
      description: "",
      remark: ""
    },
    {
      id: 11,
      name: 'Amount Recovered (If any)',
      description: "",
      remark: ""
    },
    {
      id: 12,
      name: 'In case of attempted fraud, state the reason for the failure of the fraud action',
      description: "",
      remark: ""
    },
    {
      id: 13,
      name: 'Any other relevant information',
      description: "",
      remark: ""
    }
  ];

  ngOnInit() {
    this.getSingleFraudCase(this.config.data.id);
    this.primengConfig.ripple = true;
  }

  getSingleFraudCase(caseId: number) {
    this.fraudService.getFraud(caseId).subscribe(
      (response: IFR) => {
        this.items[0].description = response.suspectedFraudsterName + ", " + response.suspectedFraudsterAddress;
        this.items[0].remark = "";

        this.items[1].description = response.fraudType.name;
        this.items[1].remark = response.otherFraudType;

        this.items[2].description = response.fraudCause;
        this.items[2].remark = "";

        this.items[3].description = response.suspectedFraudsterProfession.name;
        this.items[3].remark = response.otherSuspectedFraudsterProfession;

        this.items[4].description = this.formatAmount(response.fraudAmount) + " Birr";
        this.items[4].remark = "";

        this.items[5].description = this.datePipe.transform(response.fraudOccurrenceDate, 'MMM dd, yyyy');
        this.items[5].remark = "";

        this.items[6].description = this.datePipe.transform(response.fraudDetectionDate, 'MMM dd, yyyy');
        this.items[6].remark = "";

        this.items[7].description = response.fraudOccurrencePlace;
        this.items[7].remark = "";

        this.items[8].description = response.fraudCommittingTechnique;
        this.items[8].remark = "";

        this.items[9].description = response.actionTaken;
        this.items[9].remark = "";

        this.items[10].description = this.formatAmount(response.amountRecovered) + " Birr";
        this.items[10].remark = "";

        this.items[11].description = response.reasonForFailedFraudAttempt;
        this.items[11].remark = "";

        this.items[12].description = response.otherComment;
        this.items[12].remark = "";

         this.caseName = response.branch.name +  "COOPERATIVE BANK OF OROMIA";
        //  ", " + response.branch.district+ ", " +
        this.caseIdentifier = response.caseId;
        const dateObj = new Date(this.caseIdentifier.substring(5));
        this.preparedDate = dateObj.toLocaleDateString('en-US', {
          month: 'short',
          day: '2-digit',
          year: 'numeric'
        });
        this.preparedBy = response.preparedBy;
        this.authorizedDate = response.authorizationTimeStamp;
        this.authorizedBy = response.authorizedBy;
        this.getSignatures();
      }
    )
  }

  downloadPDF() {
    const pdfContent = document.getElementById('pdf-content');
    if (pdfContent && pdfContent.innerHTML.trim() !== '') {
      const pdf = new jsPDF('l', 'mm', 'a4');
      html2canvas(pdfContent, {
        scale: 4
      }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'JPEG', pdf.internal.pageSize.width * 0.086, pdf.internal.pageSize.height * 0.1, pdf.internal.pageSize.width * 0.86, pdf.internal.pageSize.height * 0.86, '', 'FAST');
        pdf.save('report-' + this.caseIdentifier.replace(/\//g, '-') + '.pdf');
      });
    } else {
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.save('report-' + this.caseIdentifier.replace(/\//g, '-') + '.pdf');
    }
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

  getSignatures() {
    this.employeeService.getEmployeeByFullNameFromDB(this.preparedBy).subscribe(
      (response1: any) => {
        console.log(`Fetching signature image for employee ${response1.id}...`);

        this.employeeService.getSignatureImage(response1.id).subscribe(
          (response2: any) => {
            console.log(`Fetching signature image: ${JSON.stringify(response2)}`);
            const blob = new Blob([response2], { type: 'image/jpeg' });
            const url = URL.createObjectURL(blob);
            this.preparerImageData = this.sanitizer.bypassSecurityTrustUrl(url);
          },
          (error: HttpErrorResponse) => {
            console.log(`Error fetching avatar image for employee ${response1.id}: ${JSON.stringify(error)}`);
            if (error) {
              // default signature
            }
          }
        );
      },
      (error: HttpErrorResponse) => {
        console.log(`No employee found by the name ${this.preparedBy}`);
      }
    );
    this.employeeService.getEmployeeByFullNameFromDB(this.authorizedBy).subscribe(
      (response1: any) => {
        console.log(`Fetching signature image for employee ${response1.id}...`);

        this.employeeService.getSignatureImage(response1.id).subscribe(
          (response2: any) => {
            console.log(`Fetching signature image: ${JSON.stringify(response2)}`);
            const blob = new Blob([response2], { type: 'image/jpeg' });
            const url = URL.createObjectURL(blob);
            this.authorizerImageData = this.sanitizer.bypassSecurityTrustUrl(url);
          },
          (error: HttpErrorResponse) => {
            console.log(`Error fetching avatar image for employee ${response1.id}: ${JSON.stringify(error)}`);
            if (error) {
              // default signature
            }
          }
        );
      },
      (error: HttpErrorResponse) => {
        console.log(`No employee found by the name ${this.preparedBy}`);
      }

    );
  }

  constructor(
    private fraudService: IFRService,
    private primengConfig: PrimeNGConfig,
    private config: DynamicDialogConfig,
    private datePipe: DatePipe,
    private employeeService: EmployeeService,
    private sanitizer: DomSanitizer) {
    this.employeeService = employeeService;
    this.caseId = this.config.data?.id;
  }
}


