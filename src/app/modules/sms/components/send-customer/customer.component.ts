import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';
 import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { EmployeeService } from 'src/app/services/sso-services/employee.service';
import { EMSService } from 'src/app/services/ems-services/ems-services.service';
import {Msg_to_sent} from '../../models/msg_to_sent';
import { SingleService } from '../../services/single-message/single.service';


@Component({
  selector: 'app-memo',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  groupOptions: any[] = [
    { name: 'Current Acct' },
    { name: 'Current Account' },
    { name: 'Foreign Curr' },
    { name: 'ECX-payout Acct' },
    { name: 'ECX-payin Acct' },
    { name: 'Special Curr Ac' },
    { name: 'Retention Ac A' },
    { name: 'Non.Res.Foreign' }
  ];
  





  postMemo = {} as  any;
  employeesOfSelectedGroups: any[];
  ngOnInit() {

  }
  constructor( private router: Router, private http: HttpClient, private singleService: SingleService){
    
    super();
  };
  // , private classToggler: ClassToggleService
  // private templates: any, private employeeService: any, private memoService: any,
  subprocesslist: any[] = [];

  selectedSubprocess: any;
  
  ckeditorContent: string;
  public Editor = ClassicEditor;
  public date: Date;
  public values = [];
  public nvalues = [];
  public dateTime = new Date();
  selectedGroups: any[] = [];

  
  
  addTemp(val: string) {
    this.ckeditorContent = val;
  }

  
  
 
  addMemo(formData: any) {
    const messageData: Msg_to_sent = {
      id: 0, 
      messageContent: formData.value.messageContent,
      expiryDate: formData.value.curdate, 
      listOfCategory: this.selectedGroups, 
      processOfSender: JSON.parse(localStorage.getItem('process')), 
      subProcessOfSender: JSON.parse(localStorage.getItem("subProcess")), 
      employee: localStorage.getItem('id'), 
      isAuthorized: false 
    
    };
    console.log('Message Data:', messageData); 

    formData.resetForm();
//     this.singleService.sendMessage(messageData)
//     .subscribe({
//       next: response => {
//         console.log('Message sent successfully:', response);
//         formData.resetForm();
//       },
//       error: error => {
//         console.error('Error sending message:', error);
//       }
//     });

}

}



