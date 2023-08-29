import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { MemoService } from 'src/app/services/memo-services/memo.service';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent {

  constructor(private memoService: MemoService) { };

  refno: number = this.memoService.memos.refnom;
  curdate: Date = this.memoService.memos.curdate;
  sendate: Date = this.memoService.memos.sendate;
  to: string = this.memoService.memos.toTo;
  from: string = this.memoService.memos.fromFrom;
  cc: string = this.memoService.memos.carbonCopy;
  subject: string = this.memoService.memos.subject;
  body: string = this.memoService.memos.body;

  @ViewChild('content', { static: false }) el!: ElementRef



  public async Download() {
    window.print();
  }

  downloadPDF() {

    // Add the bring-to-front class to the element
    const content = document.getElementById('content');



    const data = document.getElementById('content');
    html2canvas(data).then(canvas => {
      const imgWidth = 208;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('test.pdf');
    });
    content.classList.remove('bring-to-front');

  }
}
