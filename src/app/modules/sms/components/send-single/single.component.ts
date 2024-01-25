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
// import { SubProcess } from '../../../models/sasv-models/subProcess';

@Component({
  selector: 'app-memo',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})

export class SingleComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)
  public employees: any[] = [];
  ldivision: string;
  selectedEmployee: any;



  postMemo = {} as  any;
  ngOnInit() {

    this.ldivision = localStorage.getItem('division');
    // this.getAllSubProcess();
  }
  constructor( private router: Router){
    
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

  value;
  //Array of all available templates
  // tempArray = this.template.templateArray;
  addTemp(val: string) {
    this.ckeditorContent = val;
  }
  // public getEmplloyees(): void {
  //   this.employeeService.getEmployees().subscribe(
  //     (response: any[]) => {
  //       this.employees = response;
  //     },
  //     (errors: HttpErrorResponse) => {

  //     }
  //   );
  // }
  // public getAllSubProcess(): void {
  //   this.employeeService.getAllSubProcess().subscribe(
  //     (response: any[]) => {
  //       this.subprocesslist = response;
  //     },
  //     (errors: HttpErrorResponse) => {

  //     }
  //   );
  // }

  addMemo(data: any) {

    // const now = new Date();
    // data.value.sendate = now;
    // data.value.toTo = data.value.toTo.name;
    // data.value.fromFrom = localStorage.getItem("name");
    // data.value.senderId =  localStorage.getItem('id');

    // let carbonCopies: string = "";
    // for (const element of data.value.ncarbonCopy) {
    //   carbonCopies += element.name + " , ";
    // }

    // carbonCopies = carbonCopies.substring(0, carbonCopies.lastIndexOf(',')) + "" + carbonCopies.substring(carbonCopies.lastIndexOf(',') + 1);
    // data.value.carbonCopy = carbonCopies;

    // this.memoService.addMemos(data.value).subscribe(
    //   (response: any) => {
    //     this.memoService.getMemos();
    //     this.memoService.memos = response;
    //     this.router.navigate(['Memo/letter'],{state:{response}});
    //   },
    //   (error: HttpErrorResponse) => {

    //   }
    // );
  }
}






