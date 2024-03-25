import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Memo } from '../../../services/memo-services/memo';
import { MemoService } from '../../../services/memo-services/memo.service';
import { Templates } from '../../../services/memo-services/Templates';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { EmployeeService } from '../../../services/sso-services/employee.service';
import { Employee } from '../../../models/sso-models/employee';
import { SubProcess } from '../../../models/sasv-models/subProcess';
import {EWSService} from '../../../services/ews-services/ews-services.service'
import { EwsSimpleMessage } from 'src/app/models/ews-models/ews_simple_message';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})

export class MemoComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)
  public employees: Employee[] = [];
  ldivision: string;
  selectedEmployee: Employee;
  private sendMeIgo: EwsSimpleMessage  = {
    email: [], // Initialize email as an empty array
    subject: '',
    body: ''
  };



  postMemo = {} as Memo;
  ngOnInit() {

    this.ldivision = localStorage.getItem('division');
    this.getAllSubProcess();
  }
  constructor(private templates: Templates, 
    private employeeService: EmployeeService, 
    private memoService: MemoService, 
    private router: Router, 
    private template: Templates, 
    private classToggler: ClassToggleService,
    private ewsService: EWSService) { super() };

  subprocesslist: SubProcess[] = [];

  selectedSubprocess: SubProcess;
  
  ckeditorContent: string;
  public Editor = ClassicEditor;
  public date: Date;
  public values = [];
  public nvalues = [];
  public dateTime = new Date();

  value;
  //Array of all available templates
  tempArray = this.template.templateArray;
  addTemp(val: string) {
    this.ckeditorContent = val;
  }
  public getEmplloyees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (errors: HttpErrorResponse) => {

      }
    );
  }
  public getAllSubProcess(): void {
    this.employeeService.getAllSubProcess().subscribe(
      (response: SubProcess[]) => {
        this.subprocesslist = response;
      },
      (errors: HttpErrorResponse) => {

      }
    );
  }

  addMemo(data: any) {
  
    const now = new Date();
    data.value.sendate = now;
    data.value.toTo = data.value.toTo.name;
    data.value.fromFrom = localStorage.getItem("name");
    data.value.senderId =  localStorage.getItem('id');

    let carbonCopies: string = "";
    for (const element of data.value.ncarbonCopy) {
      carbonCopies += element.name + " , ";
    }

    carbonCopies = carbonCopies.substring(0, carbonCopies.lastIndexOf(',')) + "" + carbonCopies.substring(carbonCopies.lastIndexOf(',') + 1);
    data.value.carbonCopy = carbonCopies;
    console.log(data.value);
   
    this.sendMeIgo.email.push(data.value.outlook)
    this.sendMeIgo.subject = data.value.subject;
    this.sendMeIgo.body = data.value.body;
    console.log("sending" , this.sendMeIgo);
    this.ewsService.sendThis(this.sendMeIgo).subscribe(
      (response : any) => {
        alert("sent successifully");
        this.memoService.addMemos(data.value).subscribe(
          (response: Memo) => {
            this.memoService.getMemos();
            this.memoService.memos = response;
            this.router.navigate(['Memo/letter'],{state:{response}});
          },
          (error: HttpErrorResponse) => {
          
          }
        );
      },
      (error:HttpErrorResponse) => {
        alert("Technical Difficulty occured to send Email");  
      }
    )


  }
}
