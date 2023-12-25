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
  auditPrograms: AuditProgramDTO[] = [];
  auditFinding: FindingDTO[] = [];
  exportColumns!: ExportColumn[];
  cols!: Column[];
  public Editor = ClassicEditor;
  private subscriptions: Subscription[] = [];
  finding: any;

  constructor(
    private auditProgramService: AuditProgramService,
    private auditFindingService: AuditFindingService,
    private router:Router
  ) {}

  ngOnInit() {
    if (localStorage.getItem("currentEngagement")) {
      this.auditEngagements[0]  =  JSON.parse(localStorage.getItem("currentEngagement"));
      this.getAuditProgram(this.auditEngagements[0].id);
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

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }



}
