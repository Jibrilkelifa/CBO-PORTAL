import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { EmployeeService } from 'src/app/services/sso-services/employee.service';
import { EMSService } from 'src/app/services/ems-services/ems-services.service';
import {SingleService} from '../../services/single-message/single.service'
import { Message } from '../../models/message';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-memo',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})

export class SingleComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";
  public Editor = ClassicEditor;

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)
  public employees: any[] = [];
  ldivision: string;
  selectedEmployee: any;
  phoneNumber: string;
  messageContent: string;






  postMemo = {} as  any;
  employeesOfSelectedGroups: any[];
  ngOnInit() {

    this.ldivision = localStorage.getItem('division');

    // this.getAllSubProcess();
  }
  constructor( private router: Router, private http: HttpClient,private messageService: SingleService, private messagService:MessageService){
    
    super();
  };
  // , private classToggler: ClassToggleService
  // private templates: any, private employeeService: any, private memoService: any,
  subprocesslist: any[] = [];

  selectedSubprocess: any;
  
  ckeditorContent: string;
  body:string;

  public date: Date;
  public values = [];
  msgs: Message[] = [];
  public nvalues = [];
  public config = {
    dataProcessor: {
      toDataView: (editorData) => editorData,
      toModel: (viewData) => viewData
    }
  };
  public dateTime = new Date();

  value;
  selectedGroups: any[] = [];
  //Array of all available templates
  // tempArray = this.template.templateArray;
  addTemp(val: string) {
    this.ckeditorContent = val;
  }
  message: Message = {
    phoneNumber: '',
    messageContent: '',
    cost:undefined,
    messageBatchDate: undefined,
    id: 0,
    Batch: undefined,
    userName: '',
    user: undefined,
    status: 0,
    sender:localStorage.getItem('name')
  };

  // Rest of your code...

  addMemo(data: any) {
    this.message.phoneNumber = this.phoneNumber;
    this.message.messageContent = this.messageContent;
  
  
    this.messageService.sendMessage(this.message).subscribe(
      (response: any) => {
        const batchId = response.id;
        this.messageService.sendMessageByBatch(batchId).subscribe(
          (response: any) => {
            this.messagService.add({
              severity: 'success',
              summary: 'Success',
              detail: "Message Sent Successfully!"
            });
            setTimeout(() => {
              window.location.reload();
            }, 2000);
    
          },
          (error: any) => {
            this.messagService.add({
              severity: 'error',
              summary: 'Failed',
              detail: "Failed to send Message"
            });
            setTimeout(() => {
            }, 1000);
    
          
            // Handle any errors that occur during message sending
            console.error('Error sending message:', error);
            // You can also access the error response from the server
            console.error('Error response:', error.response);
          }
        );
      },
      (error: any) => {
        // Handle any errors that occur during message sending
        console.error('Error sending message:', error);
      }
    );
  }
  


}






