import { Component } from '@angular/core';
import { JTAService } from '../../../../services/cms-services/jta-services.service';
import { Message } from 'primeng/api';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './jta.component.html',
  styleUrls: ['./jta.component.scss']
})
export class JTAComponent {
  selectedFile: File | null = null;
  cobSummaryDetail: string = ""
//'content-type': 'multipart/form-data',
  
    httpHeaders = new HttpHeaders({
      
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    })

  constructor(private jtaService: JTAService) { }

  // public cms_url: string = localStorage.getItem('url_8') + `/CMS/JT/upload/${localStorage.getItem('name')}`
  public cms_url: string =  `http://10.1.125.58:8088/CMS/JT/upload/${localStorage.getItem('name')}`
  public messages: Message[] = [];
  closeTimeout = 5000; // 5 seconds
  public loading: boolean = false;

  public onBeforeUpload() {
    this.loading = true;
  }

  public onUpload() {
    this.loading = false;
    this.cobSummaryDetail = "";
    this.messages = [{ severity: 'success', summary: 'File Uploaded', detail: 'JT File has been uploaded successfully!', life: this.closeTimeout }];
  }

  public onUploadError(error: any) {
    this.loading = false;
    console.log(error.error.error); // Log the error object to the console

    if (typeof error.error.error == 'string') {
      if (error.error) {
        this.messages = [{ severity: 'error', summary: 'File Upload Error', detail: error.error.error, life: this.closeTimeout }];
      } else {
        this.messages = [{ severity: 'error', summary: 'File Upload Error', detail: 'An error occurred while uploading the file', life: this.closeTimeout }];
      }
    } else if (error.error.error.text) {
      this.cobSummaryDetail = error.error.error.text.replace(/\$/g, '\n');
      this.messages = [{ severity: 'success', summary: 'File Uploaded', detail: "File uploaded successfully!", life: this.closeTimeout}];
    }
  }

 
}

