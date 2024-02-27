import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AnnualPlanService } from 'src/app/modules/ams/services/annual-plan/annual-plan.service';
import { AnnualPlanDTO } from 'src/app/modules/ams/models/annualPlan';
import { Subscription } from 'rxjs';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { TDocumentDefinitions } from 'pdfmake/interfaces';





import { Router } from '@angular/router';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { AuditFindingService } from '../../../services/auidit-finding/audit-finding.service';
import { FindingDTO } from '../../../models/finding';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

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
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class ReportDisplay implements OnInit {

  introduction:String;
  auditReport:any[] = [];
  fileName:String;

  exportColumns!: ExportColumn[];
  cols!: Column[];

  private subscriptions: Subscription[] = [];
  pdfBlobUrl: string;
   year;
   monthName;
  



  constructor(
    private router:Router,
    private auditFindingService: AuditFindingService
  ) {}

  ngOnInit() {

    if (localStorage.getItem("currentReport")) {
      this.auditReport[0]  =  JSON.parse(localStorage.getItem("currentReport"));
      this.introduction = this.auditReport[0].introduction.split(/\.|\?|!/)[0].trim();
         console.log(this.auditReport,"we are working with this");
    }   

    
    const dateArray = this.auditReport[0].dateGenerated;
    const dateObject = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
    
     this.year = dateObject.getFullYear();
     this.monthName = dateObject.toLocaleDateString('en-US', { month: 'long' });
    

  }

 
  createPdf() {
    let docDefinition: TDocumentDefinitions = {
      content: [
        {
          text: 'Baankii Hojii Gamtaa Oromiyaa (W.A)',
          style: 'companyName'
        },
        {
          text: 'Cooperative Bank of Oromia (S.C)',
          style: 'companyName'
        },
        {
          text: 'INTERNAL AUDIT PROCESS',
          style: 'mainTitle'
        },
        {
          text: this.auditReport[0].auditSchedule.annualPlan.auditUniverse.auditObject.auditType + " Report on " + this.auditReport[0].auditSchedule.annualPlan.name,
          style: 'mainText'
        },
        {
          text: this.monthName + " " + this.year,
          style: 'date'
        },
        // Page break to start the next page
        { text: '', pageBreak: 'after' },
        {
          text: 'Introduction',
          style: 'title',
          pageOrientation: 'landscape'
        },
        {
          text: this.parseHtml(this.auditReport[0].introduction),
          style: 'text_body'
        },
        {
          text: 'Executive Summary',
          style: 'title'
        },
        {
          text: this.parseHtml(this.auditReport[0].summary),
          style: 'text_body'
        },
        {
          text: 'Methodology',
          style: 'title'
        },
        {
          text: this.parseHtml(this.auditReport[0].methodology),
          style: 'text_body'
        },
        {
          text: 'Audit Findings, Recommendations and Response Summary',
          style: 'title'
        },
        {
          table: {
            headerRows: 1,
            widths: ['auto', 'auto', 'auto', 'auto', 'auto' , 'auto', 'auto'], // Adjust column widths as needed
            body: [
              // Header row with numbering
              [
                { text: 'No.', style: 'tableHeader' },
                { text: 'Finding', style: 'tableHeader' }, 
                { text: 'Criteria', style: 'tableHeader' }, 
                { text: 'Impact', style: 'tableHeader' }, 
                { text: 'Recomendation', style: 'tableHeader' },
                { text: 'Auditees Response' , style: 'tableHeader'},
                { text: 'Response Justification' , style: 'tableHeader'}
              ],
              // Data rows with numbers
              ...this.auditReport[0].findings.map((finding, index) => [
                { text: (index + 1).toString(), style: 'tableCell' }, // Display numbers
                { text: finding.finding || '', style: 'tableCell' },
                { text: finding.criteria || '', style: 'tableCell' },
                { text: finding.impact || '', style: 'tableCell' },
                { text: finding.recommendations || '', style: 'tableCell' },
                { text: finding.auditeesResponse || '', style: 'tableCell' },
                { text: finding.justifications || '', style: 'tableCell' }
              ]),
            ]
          }
        },
        
        
      ],
      styles: {
        companyName: {
          fontSize: 18,
          bold: true,
          color: '#00AEEF',
          alignment: 'center',
          margin: [0, 10, 0, 10]
        },
        title: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
          color:  '#00AEEF',
          margin: [0, 5, 0, 5]
        },
        title2: {
          color: '#00AEEF'
        },
        mainTitle: {
          fontSize: 20,
          bold: true,
          color: '#00AEEF',
          alignment: 'center',
          margin: [0, 200, 0, 10],
          
        },
        mainText: {
          fontSize: 16,
          alignment: 'center',
          color: '#00AEEF',
          margin: [0, 10, 0, 20]
        },
        secondPageText: {
          fontSize: 18,
          alignment: 'center',
          margin: [0, 20, 0, 20]
        },
        date: {
          fontSize: 12,
          color: '#333',
          alignment: 'right',
          margin: [0, 300, 20, 20]
        },
        text_body: {
          fontSize: 12,
          margin: [0, 0, 0, 10],
          bold:false,
          lineHeight: 1.5
        },
        tableHeader: {
          fillColor: '#00AEEF', 
          color: '#FFFFFF',    
          bold: true,
          alignment: 'center',
          margin: [0, 5, 0, 5]
        },
        
      }
    };
  
    pdfMake.createPdf(docDefinition).open();
  }
  

  parseHtml(html: string): any[] {
    // Use a library or function to parse HTML to PDFMake-compatible format
    // Here's a simple example, you may need to use a more robust library for complex HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const body = doc.body.textContent || '';
    return [{ text: body }];
  }
  

  
  public downloadPDF() {
    const pages = document.querySelectorAll('.page');
    const pdf = new jsPDF('p', 'mm', 'a4');

    let currentPage = 0;
    const processPage = () => {
      if (currentPage >= pages.length) {
        pdf.save('user manual.pdf');
        return;
      }

      html2canvas(pages[currentPage] as HTMLElement).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 190;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        if (currentPage > 0) {
          pdf.addPage();
        }
        pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);

        currentPage++;
        processPage();
      });
    };
    processPage();
  }

  goToDetails(auditFinding: any): void {
   
    localStorage.setItem('currentFinding', JSON.stringify(auditFinding));
    this.router.navigate(['ams/audit-findings-details']);

  }

  goToGenerateReport() {
    localStorage.setItem('currentAuditEngagement', JSON.stringify(this.auditReport[0].auditEngagement));
    localStorage.setItem('editTheBigJson', JSON.stringify(this.auditReport[0]));
    this.router.navigate(['ams/report']);
  }

  getIsmage(auditFinding:any): void {
    // alert();
    // this.subscriptions.push(
    //   this.auditFindingService.getAuditFindingEvidenceNameById(auditFinding.id).subscribe(
    //     (response: any) => {
          
    //       console.log(response,"ATTENTION PLEASE");      
    //     },
    //     (error: HttpErrorResponse) => {
    //       console.log(error);
    //     }
    //   )
    // );
  }
  
  getImage(auditFinding:any): void {
    this.auditFindingService.getPdf(auditFinding.findingEvidenceFileUploadedToSupplementTheFindingsPath).subscribe(
      (pdfBlob: Blob) => {
        // Create a blob URL for the Blob object
        const blobUrl = URL.createObjectURL(pdfBlob);

        // Create an anchor element
        const link = document.createElement('a');

        // Set the href attribute to the blob URL
        link.href = blobUrl;

        // Set the download attribute with the desired file name
        link.download = `${auditFinding.findingEvidenceFileUploadedToSupplementTheFindingsPath}.pdf`;

        // Append the link to the document
        document.body.appendChild(link);

        // Programmatically trigger a click event on the link
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);

        // Revoke the blob URL to free up resources
        URL.revokeObjectURL(blobUrl);
      },
      (error) => {
        console.error('Error downloading PDF:', error);
        // Handle error appropriately, e.g., show an error message to the user
      }
    );
  }




  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }



}
