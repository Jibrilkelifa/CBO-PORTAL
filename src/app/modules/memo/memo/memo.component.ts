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



  postMemo = {} as Memo;
  ngOnInit() {
    this.ldivision = localStorage.getItem('division');
  }
  constructor(private templates: Templates, private employeeService: EmployeeService, private memoService: MemoService, private router: Router, private template: Templates, private classToggler: ClassToggleService) { super() };

  ckeditorContent: string;
  public Editor = ClassicEditor;
  public date: Date;
  public values = [];
  public nvalues = [];
  public dateTime = new Date();
  public sendTo = [
    { name: "HTML" },
    { name: "ReactJS" },
    { name: "Angular" },
    { name: "Bootstrap" },
    { name: "PrimeNG" },
  ];
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

  addMemo(data: any) {

    const now = new Date();
    data.value.sendate = now;
    data.value.toTo = data.value.toTo.name;
    data.value.fromFrom = localStorage.getItem("name");

    let carbonCopies: string = "";
    for (const element of data.value.ncarbonCopy) {
      carbonCopies += element.name + " , ";
    }

    carbonCopies = carbonCopies.substring(0, carbonCopies.lastIndexOf(',')) + "" + carbonCopies.substring(carbonCopies.lastIndexOf(',') + 1);
    data.value.carbonCopy = carbonCopies;

    this.memoService.addMemos(data.value).subscribe(
      (response: Memo) => {
        this.memoService.getMemos();
        this.memoService.memos = response;
        this.router.navigate(['Memo/letter']);
      },
      (error: HttpErrorResponse) => {

      }
    );
  }
}
