import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { Memo } from '../../../services/memo-services/memo';
// import { MemoService } from '../../../services/memo-services/memo.service';
// import { Templates } from '../../../services/memo-services/Templates';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';
 import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { EmployeeService } from '../../../services/sso-services/employee.service';
// import { Employee } from '../../../models/sso-models/employee';
// import { SubProcess } from '../../../models/sasv-models/subProcess'

import {BulkService } from '../../services/bulk-message/bulk.service'
import { Message } from 'primeng/api/message';


@Component({

  templateUrl: './bulk.component.html',
  styleUrls: ['./bulk.component.css']
})

export class BulkComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)
  public employees: any[] = [];
  public selectedFiles1: File;
  isFileSelected:boolean
  uploadedFiles: any[] = [];
  ldivision: string;
  selectedEmployee: any;
  public messages: Message[] = [];
  closeTimeout = 5000; // 5 seconds
  public loading: boolean = false;



  postMemo = {} as  any;
  fileSelected: boolean;
  sendError: string;
  uploadError: string;
  ngOnInit() {

    // this.user = localStorage.getItem('name');
    this.ldivision = localStorage.getItem('division');
    // this.getAllSubProcess();
  }
  constructor(private bulkService: BulkService, private router: Router){
    
    super();
  };

  subprocesslist: any[] = [];

  selectedSubprocess: any;
  
  ckeditorContent: string;
  public Editor = ClassicEditor;
  public date: Date;
  public values = [];
  public nvalues = [];
  public dateTime = new Date();
  

  value;
  addTemp(val: string) {
    this.ckeditorContent = val;
  }

  onSelect1(event: any) {
    this.fileSelected = true
    this.selectedFiles1 = event.files[0];
    this.uploadedFiles = [this.selectedFiles1];
    this.fileSelected = event.files.length > 0;
    
  }

 
  sendSMS( ) {
    console.log('DAMAMA:', "dsdgsgdhsgdhs");
    const formData = new FormData();
    console.log("file ",this.uploadedFiles[0])
    formData.append('file', this.uploadedFiles[0]);
    const accessToken = localStorage.getItem('access_token');
  console.log('Access token:', accessToken);
    this.bulkService.uploadFile(formData).subscribe(
      response => {
        console.log('responsssssssssssss', response)
        const batchId = response.id;
        console.log('BatchId:', batchId);
        this.bulkService.sendMessageByBatch(batchId).subscribe(
          response => {
            // Handle the response from the send message request
            // This could include displaying a success message, updating the UI, etc.
          },
          error => {
               // Handle any errors that occur during message sending
               console.error('Error sending message:', error);
               // You can also access the error response from the server
               console.error('Error response:', error.response);
          }
        );
      },
      error => {
        console.error('Error uploading file:', error);
        // You can also access the error response from the server
        console.error('Error response:', error.response);
      }
    );
    
  }
  
 

  public onBeforeUpload() {
    this.loading = true;
  }

  // public onUpload() {
  //   this.loading = false;
   
  //   this.messages = [{ severity: 'success', summary: 'File Uploaded', detail: 'JT File has been uploaded successfully!', life: this.closeTimeout }];

  // }

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
     
      this.messages = [{ severity: 'success', summary: 'File Uploaded', detail: "File uploaded successfully!", life: this.closeTimeout}];
    }
  }


}
