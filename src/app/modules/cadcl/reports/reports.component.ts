import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import {ReportsService} from 'src/app/services/cadcl-services/reports.service';
import { CaReports } from 'src/app/models/cadcl-models/ca-reports';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {

  reportTypes = [
    { label: 'Team', value: 'Team' },
    { label: 'Inquiry Type', value: 'Inquiry Type' }
  ];
  teamsList = [
    {label:"ABEBA GELETA KITATA", value:"ABEBA GELETA KITATA"},
    {label: "ABRAHAM SHELEME HAILE", value:"ABRAHAM SHELEME HAILE"},
    {label: "ASANTI EDOSA KENO", value:"ASANTI EDOSA KENO"},
    {label: "CHALA AMANU MIJENA", value:"CHALA AMANU MIJENA"},
    {label: "GEMECHIS MOSISA NEFABASA", value:"GEMECHIS MOSISA NEFABASA"},
    {label: "LELISE DABA KELBESSA", value: "LELISE DABA KELBESSA"},
    {label: "MEKONNEN LEGESSE ALEMU", value: "MEKONNEN LEGESSE ALEMU"},
    {label: "SELAMAWIT KENO GELETA", value:"SELAMAWIT KENO GELETA"},
    {label: "TAMIRAT FAYE KEBEDE", value:"TAMIRAT FAYE KEBEDE"},
    {label: "YIHUN HAILEGIORGIS HAILE", value: "YIHUN HAILEGIORGIS HAILE"},
    {label: "ASEGEDECH BACHA DADI", value: "ASEGEDECH BACHA DADI"}
  ]
  
  inquryTypes = [
    { label: 'Court', value: 'Court' },
    { label: 'Ministry of Justice', value: 'Ministry of Justice' },
    { label: 'NBE', value: 'NBE' },
    { label: 'FIS', value: 'FIS' },
    { label: 'ERCA', value: 'ERCA' },
    { label: 'Police', value: 'Police' },
    { label: 'All', value: 'All' },
    { label: 'Other', value: 'other' },
  ];

  ownerSelected: boolean = false;
  iquirySelected: boolean = false;

  caReport: CaReports = new CaReports();
  xmlFile: any;
  loading: boolean;
  progress: number;
  display: boolean;

  updated: boolean = false;
  newDiv: boolean = true;
  msgs: Message[] = [];
  value: string;
  branchId : number = Number(localStorage.getItem('branchId'));
  selectedFiles1?: File;
  uploadedFiles: any[] = [];
  fileReady: string = '';

  constructor(private reportsService: ReportsService, private confirmationService: ConfirmationService, private activatedRoute: ActivatedRoute, private router: Router, private http: HttpClient, private messageService: MessageService) {}

  ngOnInit(): void {
      
  }

  public getReport(ngForm: NgForm): void{
    let inquiryType = '';
    let caseOwner = '';
    let fileName = "Report-";
    if(ngForm.value.caseOwner){
      caseOwner = ngForm.value.caseOwner.value;
      fileName += caseOwner;
    }
    if(ngForm.value.inquiryType){
      inquiryType = ngForm.value.inquiryType.value;
      fileName += inquiryType;
    }
    this.loading = true;
      this.reportsService.getReport(ngForm.value, caseOwner, inquiryType).subscribe(
        (response: any) => {
          const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = fileName; 
          link.click();
          window.URL.revokeObjectURL(url); 
          this.loading = false;
          this.updated = true;
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'XLSX file generated'
          });

          this.updated = true
          this.display = true
        },
        (error: HttpErrorResponse) =>{
          console.log(error);
          
          this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Xml file generation failed'
        });
        }
        );
  }

  onTypeChange() {
    
    if(this.caReport.reportFor["value"] == 'Inquiry Type'){
      this.iquirySelected = true;
      this.ownerSelected = false;
    }
    if(this.caReport.reportFor["value"] == 'Team'){
      this.iquirySelected = false;
      this.ownerSelected = true;
    }
  }

}
