import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { MemoService } from 'src/app/services/memo-services/memo.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SignatureService } from 'src/app/modules/sasv/services/signature-service/signature.service';
import { SignatureDTO } from 'src/app/modules/sasv/models/signature';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent {
  dbSignImage: any;
  postResponse: any;

  constructor(private memoService: MemoService,private http: HttpClient,private signatureService: SignatureService,) { };
  refno: number;
  curdate: Date ;
  sendate: Date ;
  to: string ;
  from: string ;
  cc: string ;
  subject: string ;
  body: string;
  id:number ;
  ngOnInit(): void {

    this.refno = this.memoService.memos.refnom;
    this.curdate = this.memoService.memos.curdate;
    this.sendate = this.memoService.memos.sendate;
    this.to= this.memoService.memos.toTo;
    this.from= this.memoService.memos.fromFrom;
    this.cc = this.memoService.memos.carbonCopy;
    this.subject= this.memoService.memos.subject;
    this.body = this.memoService.memos.body;
    this.id = this.memoService.memos.senderId;
      
      this.getSignatureImage( this.id);
    
  }
  public getSignatureImage(id: number) {
    this.signatureService.getSignatureImageByEmployee(id).subscribe(
      (response: SignatureDTO) => {
        this.postResponse = response;
        this.dbSignImage =
          'data:image/jpeg;base64,' + this.postResponse.signature;
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching signature image:', error);
      }
    );
  }

  



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
    // content.classList.remove('bring-to-front');

  }
}
