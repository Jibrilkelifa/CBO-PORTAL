import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AnnualPlanService } from 'src/app/modules/ams/services/annual-plan/annual-plan.service';
import { AnnualPlanDTO } from 'src/app/modules/ams/models/annualPlan';
import { Subscription } from 'rxjs';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


import { Router } from '@angular/router';


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
export class ReportDisplay {

  exportColumns!: ExportColumn[];
  cols!: Column[];

  private subscriptions: Subscription[] = [];



  constructor(

    private router:Router
  ) {}

  ngOnInit() {
    if (localStorage.getItem("currentEngagement")) {
     

    }  
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



  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }



}
