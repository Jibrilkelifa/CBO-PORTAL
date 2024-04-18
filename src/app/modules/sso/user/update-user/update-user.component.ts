import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../../models/sso-models/user';
import { Role } from "../../../../models/role";
import { UserService } from '../../../../services/sso-services/user.service';
import { Employee } from '../../../../models/sso-models/employee';
import { EmployeeService } from 'src/app/services/sso-services/employee.service';
import { ModuleService } from 'src/app/services/sso-services/module.service';
import { OrganizationalUnitService } from 'src/app/services/sso-services/organizational-unit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Message, MessageService, ConfirmationService } from 'primeng/api';
import { Module } from 'src/app/models/sso-models/module';
import { RoleService } from 'src/app/services/sso-services/role.service';
import { TimeService } from 'src/app/services/sso-services/time.service';
import { ADUserService } from 'src/app/services/sso-services/ad-user.service';





@Component({
  selector: 'app-accordions',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})

export class UpdateUserComponent implements OnInit {
  public users: User[] = [];
  public user: User;
  public roles: Role[] = [];
  public rolesStr: string[] = [];
  public modules: Module[] = [];
  public employeeR: Employee[] = [];
  public employees: Employee[] = [];
  update: boolean = false;
  newDiv: boolean = true;
  public idY: number;
  msgs: Message[] = [];
  selectedModules: Module[];
  selectedEmployee: any;
  selectedRole: Role[];
  selectedState: boolean;
  project: any = {};
  isClicked: boolean = false;
  states: any[] = [
    { name: 'Active', value: true },
    { name: "Inactive", value: false }
  ];
  active: boolean;
  searchTerm: string;
  searchedEmployees: any;
  searchedOrganizationalUnit: any;
  searchedSubProcess: any;
  selectedBranch: any;
  baseVariable: any;
  previousTerm: string = "";
  selectedEmployeeId: number;
  selectedFullName: string;
  selectedJobTitle: string;
  selectedOrganizationalUnit: string;
  selectedSubProcess: string;
  selectedProcess: string;
  selectedWorkCenter: string;
  selectedPhoneNumber: string;
  selectedPersonalEmail: string;
  selectedAdUser: string;
  fullName: string;
  selectedCompanyEmail: string;
  selectedDateOfBirth: string;
  selectedGender: boolean;
  username: string;
  userExists: boolean = false;
  selectedTab1: boolean = true;
  selectedTab2: boolean = false;
  prompt: String;
  field: String;
  public divisions: any[] = [];
  public employee: Employee;
  selectedFiles1?: File;
  selectedFiles2?: File;
  selectedDivision: any;
  gender: string;
  maxDate: Date;
  stateOptions: any[] = [{ label: 'Branch', value: 'branch' }, { label: 'Team', value: 'team' }];

  value: string = 'branch';



  uploadedFiles: any[] = [];
  myDate = new Date();
  constructor(
    private timeService: TimeService,
    private employeeService: EmployeeService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {

    this.prompt = "Enter Branch Code"
    this.field = "name"


  }

  onValueChange(event) {
    this.value = event.value
    if (event.value.includes("branch")) {
      this.prompt = "Enter Branch Code"
      this.field = "name"
    } else {
      this.prompt = "Search Team By Name"
      this.field = "externalName"
    }

  }

  populateEmployeeData() {

    this.selectedTab1 = false;
    this.selectedTab2 = true;
    this.selectedEmployeeId = this.selectedEmployee.employeeId;
    this.selectedFullName = this.selectedEmployee.employeeFullName;
    this.selectedJobTitle = this.selectedEmployee.job.title;
    this.selectedGender = this.selectedEmployee.gender;

    this.selectedSubProcess = this.selectedEmployee.subProcess.name;
    this.selectedProcess = this.selectedEmployee.process.name;

    this.selectedWorkCenter = this.selectedEmployee.branch == null ? "HO" : "DISTRICT";
    this.selectedOrganizationalUnit = this.selectedEmployee.branch?.name ?? this.selectedEmployee.team?.externalName ?? "Elite";

  }


  getEmployeeData(event: any) {

    const searchTerm = event.query;
    if (searchTerm.length == 0) {
      this.previousTerm = "";
    }
    if (searchTerm.length >= 3) { // Store search results locally for all search terms longer than or equal to 3 letters
      this.employeeService.getEmployeesByName(searchTerm).subscribe(
        (response: any) => {
          this.searchedEmployees = response;
          this.baseVariable = this.searchedEmployees;



        }
      )
    }
    if (searchTerm.length > 8) {
      if (this.previousTerm.length > searchTerm.length) {
        this.searchedEmployees = this.baseVariable;
      }
      this.searchedEmployees = this.searchedEmployees.filter(searchedEmployee => searchedEmployee.fullName.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    this.previousTerm = searchTerm;
  }

  getData(event: any) {


    if (this.value.includes("branch")) {
      const searchTerm = event.query;
      if (searchTerm.length == 0) {
        this.previousTerm = "";
      }
      if (searchTerm.length >= 8) { // Store search results locally for all search terms longer than or equal to 3 letters
        this.employeeService.getBranchByName(searchTerm).subscribe(
          (response: any) => {
            this.searchedOrganizationalUnit = response;

          }
        )
      }
    } else {
      const searchTerm = event.query;
      if (searchTerm.length == 0) {
        this.previousTerm = "";
      }
      if (searchTerm.length >= 8) { // Store search results locally for all search terms longer than or equal to 3 letters
        this.employeeService.getTeamByName(searchTerm.toUpperCase()).subscribe(
          (response: any) => {
            this.searchedOrganizationalUnit = response;
            console.log(this.searchedOrganizationalUnit);
          }
        )
      }
    }


  }

  getSubProcess(event: any) {



    const searchTerm = event.query;
    if (searchTerm.length == 0) {
      this.previousTerm = "";
    }
    if (searchTerm.length >= 3) { 
      this.employeeService.getSubProcessByName(searchTerm.toUpperCase()).subscribe(
        (response: any) => {
          this.searchedSubProcess = response;

        }
      )
    }



  }




  public searchEmployees(searchedEmployee: any) {
    if (searchedEmployee == "") {
      this.searchedEmployees = []
    }
    else {
      this.employeeService.getEmployeesByName(searchedEmployee).subscribe(
        (response: any) => {
          this.searchedEmployees = response;
          this.selectedEmployee = this.searchedEmployees[0];
          console.log(this.selectedEmployee.organizationalUnit)
          this.populateEmployeeData();
        },
        (error: HttpErrorResponse) => {

        }
      )
    }
  }


  public updateUser(addUserForm: NgForm): void {
    this.timeService.getDateTime().toPromise().then((response) => {
      let dataTosend: any = {};
      // dataTosend.updatedAt = response.time;  send other request to change updatedAt to sso
      dataTosend.employeeId = addUserForm.value.employeeId;
      dataTosend.branch = this.selectedBranch;

      console.log(dataTosend);
      return this.employeeService.updateEmployee(dataTosend).toPromise();
    })
      .then((response: any) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User updated.' });
        setTimeout(() => { window.location.reload() }, 1000);
      })
      .catch((errors: HttpErrorResponse) => {
        const errorMessage = errors.error && errors.error.message ? errors.error.message : 'An unexpected error occurred';
        this.messageService.add({ severity: 'error', summary: 'Error', detail: errorMessage });
      });

  }





  onSelect1(event: any) {
    this.selectedFiles1 = event.files[0];

    for (let file of event.files) {
      this.selectedFiles1 = file
    }
  }

  onSelect2(event: any) {
    this.selectedFiles2 = event.files[0];

    for (let file of event.files) {
      this.selectedFiles2 = file
    }
  }
}
