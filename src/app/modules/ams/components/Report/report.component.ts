import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AnnualPlanService } from 'src/app/modules/ams/services/annual-plan/annual-plan.service';
import { AnnualPlanDTO } from 'src/app/modules/ams/models/annualPlan';
import { Subscription } from 'rxjs';
import * as FileSaver from 'file-saver';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AuditEngagementDTO } from '../../models/audit-engagement';
import { AuditProgramService } from '../../services/auidit-program/audit-program.service';
import { AuditProgramDTO } from '../../models/audit program'
import { AuditFindingService } from '../../services/auidit-finding/audit-finding.service';
import { AuditReportService } from '../../services/audit-report/audit-report.service';
import { FindingDTO } from '../../models/finding';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}
interface ExportColumn {
  title: string;
  dataKey: string;
}

@Component({
  selector: 'annual-plan-table',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class Report {
  auditEngagements:AuditEngagementDTO[] = [];
  thebigjson:any;
  thebigjsonForEditing:any;
  auditPrograms: AuditProgramDTO[] = [];
  auditFinding: FindingDTO[] = [];
  selectedFindings: FindingDTO[] = [];
  exportColumns!: ExportColumn[];
  cols!: Column[];
  public Editor = ClassicEditor;
  private subscriptions: Subscription[] = [];
  checkedIds: number[] = [];
  introInput: string;
  summaryInput: string;
  public date: Date;
  editMode:Boolean = false;



  constructor(
    private auditProgramService: AuditProgramService,
    private auditFindingService: AuditFindingService,
    private auditReportService: AuditReportService,
    private router:Router
  ) {}

  ngOnInit() {
    if (localStorage.getItem("currentEngagement")) {
      this.auditEngagements[0]  =  JSON.parse(localStorage.getItem("currentEngagement"));
      this.getAuditProgram(this.auditEngagements[0].id);
    }  

    if (localStorage.getItem("editTheBigJson")) {
      this.thebigjsonForEditing  =  JSON.parse(localStorage.getItem("editTheBigJson"));
      this.introInput = this.thebigjsonForEditing.introduction;
      this.summaryInput = this.thebigjsonForEditing.summary;
      this.date = this.thebigjsonForEditing.dateGenerated;
      console.log(this.thebigjsonForEditing, " check me i am the bigjson for editing");
      this.selectedFindings = this.thebigjsonForEditing.findings;

    
   
      this.editMode = true;
    }  


  }

  getAuditProgram(id:number): void {
    this.subscriptions.push(
      this.auditProgramService.getAuditProgramByEngagementId(id).subscribe(
        (response: any) => {
          this.auditPrograms[0]= response.result[0];
          this.getFinding(this.auditPrograms[0].id)
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }
  onSubmit():void {

  if(this.editMode){
       
    this.thebigjsonForEditing.findings = this.selectedFindings;
    this.thebigjsonForEditing.introduction = this.introInput;
    this.thebigjsonForEditing.summary = this.summaryInput;
    this.thebigjsonForEditing.dateGenerated = this.date;

         console.log(this.thebigjsonForEditing.findings, " edited teh bigson data");
       

       this.auditReportService.registerReport(this.thebigjsonForEditing).subscribe(
        (response: any) => {
           console.log(response);
           this.router.navigate(['ams/report-list']);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
       
  } else {
    if (localStorage.getItem("thebigjson")) {
      this.thebigjson  =  JSON.parse(localStorage.getItem("thebigjson"));
      console.log(this.thebigjson,"hey yall this is the big json");
    } else{
      console.log("i didn't get the bigjson from localstorage")
    }

    this.thebigjson.result.findings = this.selectedFindings;
    this.thebigjson.result.introduction = this.introInput;
    this.thebigjson.result.summary = this.summaryInput;
    this.thebigjson.result.dateGenerated = this.date;

 
   console.log("sending the big json finding" , this.thebigjson.result.findings);

   this.auditReportService.registerReport(this.thebigjson.result).subscribe(
    (response: any) => {
       console.log(response);
       this.router.navigate(['ams/report-list']);
    },
    (error: HttpErrorResponse) => {
      console.log(error);
    }
  )
  }
 


    

  
  };


  getFinding(id:number): void {
    this.subscriptions.push(
      this.auditFindingService.getAuditFindingByProgramId(id).subscribe(
        (response: any) => {
          this.auditFinding = response.result;
     
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  goToDetails(auditFinding: FindingDTO): void {
    
    
    localStorage.setItem('currentFinding', JSON.stringify(auditFinding));
    this.router.navigate(['ams/audit-findings-details']);

  }

  onCheck(e, id) {
    const finding = this.auditFinding.find(f => f.id === id);
  
    if (e.target.checked) {
      // Add finding to selectedFindings array
      if (finding && !this.selectedFindings.includes(finding)) {
        this.selectedFindings.push(finding);
      }
    } else {
      // Remove finding from selectedFindings array
      this.selectedFindings = this.selectedFindings.filter(f => f.id !== id);
    }
  }
  
  isFindingSelected(id: number): boolean {
    return this.selectedFindings.some(finding => finding.id === id);
  }
  


  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }



}
