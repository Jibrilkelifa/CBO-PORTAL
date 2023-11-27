import { Component } from '@angular/core';
import { EMSService } from '../../../services/ems-services/ems-services.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-upload',
  templateUrl: './ems-upload.component.html',
  styleUrls: ['./ems-upload.component.scss']
})
export class EMSComponent {
  selectedFile: File | null = null;
  cobSummaryDetail: string = ""

  constructor(private emsService: EMSService) { }

  public ems_employee_url: string = localStorage.getItem('url_2') + `/EMS/uploadEmployeeData`
  public messages: Message[] = [];
  closeTimeout = 5000; // 5 seconds
  public loading: boolean = false;

  public onBeforeUpload() {
    this.loading = true;
  }

  public onUpload() {
    this.loading = false;
    this.cobSummaryDetail = "";
    this.messages = [{ severity: 'success', summary: 'File Uploaded', detail: 'File has been uploaded successfully!', life: this.closeTimeout }];
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

