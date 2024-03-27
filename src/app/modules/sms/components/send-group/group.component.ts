import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { Memo } from '../../../services/memo-services/memo';
// import { MemoService } from '../../../services/memo-services/memo.service';
// import { Templates } from '../../../services/memo-services/Templates';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';
 import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { EmployeeService } from 'src/app/services/sso-services/employee.service';
import { EMSService } from 'src/app/services/ems-services/ems-services.service';
// import { EmployeeService } from '../../../services/sso-services/employee.service';
// import { Employee } from '../../../models/sso-models/employee';
// import { SubProcess } from '../../../models/sasv-models/subProcess';

@Component({
  selector: 'app-memo',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})

export class GroupComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)
  public employees: any[] = [];
  ldivision: string;
 
  selectedEmployee: any;
  phoneNumbers: string[] = [];
  groupOptions: any[] = [
    { name: 'HO Managers', value: 'ho-managers' },
    { name: 'Vice Presidents', value: 'vice-presidents' },
    { name: 'District Directors', value: 'district-directors' },
    { name: 'Branch Managers', value: 'branch-managers' },
    { name: 'HO Directors', value: 'ho-directors' }
  ];





  postMemo = {} as  any;
  employeesOfSelectedGroups: any[];
  ngOnInit() {

    this.ldivision = localStorage.getItem('division');
    this.getEmployeesOfVicePresidents();
    this.getEmployeesOfBranchManagers();
    this.getEmployeesOfDistrictDirectors();
    this.getEmployeesOfHoDirectors();
    this.getEmployeesOfHoManagers();
    // this.getAllSubProcess();
  }
  constructor( private router: Router, private http: HttpClient,private emsService: EMSService){
    
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
  employeesOfVicePresidents: any[] = [];
  employeesOfHoDirectors: any[] = [];
  employeesOfDistrictDirectors: any[] = [];
  employeesOfHoManagers: any[] = [];
  employeesOfBranchManagers: any[] = [];
  value;
  selectedGroups: any[] = [];
  //Array of all available templates
  // tempArray = this.template.templateArray;
  addTemp(val: string) {
    this.ckeditorContent = val;
  }
  fetchEmployeesByGroups(): void {
    // Clear the existing employees list
    this.employeesOfSelectedGroups = [];
  
    // Iterate over the selected groups
    for (const group of this.selectedGroups) {
      // Call the corresponding service method based on the selected group
      switch (group.value) {
        case 'ho-managers':
          this.getEmployeesOfHoManagers();
          break;
        case 'vice-presidents':
          this.getEmployeesOfVicePresidents();
          break;
        case 'district-directors':
          this.getEmployeesOfDistrictDirectors();
          break;
        case 'branch-managers':
          this.getEmployeesOfBranchManagers();
          break;
        case 'ho-directors':
          this.getEmployeesOfHoDirectors();
          break;
        default:
          // Handle unsupported group selection
          console.error('Unsupported group:', group);
      }
    }
  }
  
  getEmployeesOfBranchManagers(): void {
    this.emsService.getEmployeesOfBranchManagers().subscribe(
      (response: any[]) => {
        this.employeesOfSelectedGroups = response;
        console.log('Employees of Branch managers:', this.employeesOfSelectedGroups);
      },
      (error: HttpErrorResponse) => {
        // Handle any errors
        console.error('Error:', error);
      }
    );
  }
  
  getEmployeesOfHoManagers(): void {
    this.emsService.getEmployeesOfHoManagers().subscribe(
      (response: any[]) => {
        this.employeesOfSelectedGroups = response;
        console.log('Employees of HO managers:', this.employeesOfSelectedGroups);
      },
      (error: HttpErrorResponse) => {
        // Handle any errors
        console.error('Error:', error);
      }
    );
  }
  
  getEmployeesOfDistrictDirectors(): void {
    this.emsService.getEmployeesOfDistrictDirectors().subscribe(
      (response: any[]) => {
        this.employeesOfSelectedGroups = response;
        console.log('Employees of District Directors:', this.employeesOfSelectedGroups);
      },
      (error: HttpErrorResponse) => {
        // Handle any errors
        console.error('Error:', error);
      }
    );
  }
  
  getEmployeesOfVicePresidents(): void {
    this.emsService.getEmployeesOfVicePresidents().subscribe(
      (response: any[]) => {
        this.employeesOfSelectedGroups = response;
        console.log('Employees of Vice President:', this.employeesOfSelectedGroups);
      },
      (error: HttpErrorResponse) => {
        // Handle any errors
        console.error('Error:', error);
      }
    );
  }
  
  getEmployeesOfHoDirectors(): void {
    this.emsService.getEmployeesOfHoDirectors().subscribe(
      (response: any[]) => {
        this.employeesOfSelectedGroups = response;
        console.log('Employees of HO Directors:', this.employeesOfSelectedGroups);
      },
      (error: HttpErrorResponse) => {
        // Handle any errors
        console.error('Error:', error);
      }
    );
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






