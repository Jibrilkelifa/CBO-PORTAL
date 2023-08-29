import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../../models/cas-models/user';
import { Role } from "../../../../models/role";
import { UserService } from '../../../../services/cas-services/user.service';
import { Employee } from '../../../../models/cas-models/employee';
import { EmployeeService } from 'src/app/services/cas-services/employee.service';
import { ModuleService } from 'src/app/services/cas-services/module.service';
import { OrganizationalUnitService } from 'src/app/services/cas-services/organizational-unit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { Module } from 'src/app/models/cas-models/module';
import { RoleService } from 'src/app/services/cas-services/role.service';
import { TimeService } from 'src/app/services/cas-services/time.service';


@Component({
  selector: 'app-accordions',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.scss']
})

export class NewAdminComponent implements OnInit {
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
  value: string;
  selectedModules: Module[];
  selectedEmployee: any;
  selectedState: boolean;
  project: any = {};
  isClicked: boolean = false;
  states: any[] = [
    { name: 'Active', value: true },
    { name: "Inactive", value: false }
  ];
  active: boolean;

  selectedTab1: boolean = true;
  selectedTab2: boolean = false;
  selectedTab3: boolean = false;
  searchTerm: string;
  searchedEmployees: any;
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
  selectedCompanyEmail: string;
  selectedDateOfBirth: string;
  selectedGender: boolean;
  username: string;
  password: string;

  public divisions: any[] = [];
  public employee: Employee;
  selectedFiles1?: File;
  selectedFiles2?: File;
  selectedDivision: any;
  gender: string;
  maxDate: Date;

  uploadedFiles: any[] = [];
  myDate = new Date();
  constructor(private router: Router, private timeService: TimeService, private employeeService: EmployeeService, private activatedRoute: ActivatedRoute, private messageService: MessageService, private userService: UserService, private moduleService: ModuleService, private organizationalUnitService: OrganizationalUnitService, private roleService: RoleService) { }

  ngOnInit() {
    this.populateRoles();
    this.getModules();
    let x = this.activatedRoute.snapshot.paramMap.get("id");
    this.idY = +x;

    if (this.idY) {
      this.getUser(this.idY);
      this.update = true;
      this.newDiv = false;
    }
    this.maxDate = this.myDate;
  }

  onEmployeeSelect(event: any) {
    this.searchTerm = event.value.fullName;
    this.selectedEmployee = event.value;
  }

  populateRoles(): void {
    let index = 0;
    let cond = localStorage.getItem('role_' + index);
    while (cond) {

      this.rolesStr.push(cond);
      index++;
      cond = localStorage.getItem('role_' + index);
    }
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
    if (searchTerm.length > 3) {
      if (this.previousTerm.length > searchTerm.length) {
        this.searchedEmployees = this.baseVariable;
      }
      this.searchedEmployees = this.searchedEmployees.filter(searchedEmployee => searchedEmployee.fullName.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    this.previousTerm = searchTerm;
  }


  populateEmployeeData() {
    this.selectedTab1 = false;
    this.selectedTab2 = true;
    this.selectedTab3 = false;
    this.selectedEmployeeId = this.selectedEmployee.employeeId;
    this.selectedFullName = this.selectedEmployee.fullName;
    this.selectedJobTitle = this.selectedEmployee.jobTitle.name;
    this.selectedOrganizationalUnit = this.selectedEmployee.organizationalUnit.name;
    this.selectedSubProcess = this.selectedEmployee.organizationalUnit.subProcess.name;
    this.selectedProcess = this.selectedEmployee.organizationalUnit.subProcess.process.name;
    this.selectedWorkCenter = this.selectedEmployee.organizationalUnit.subProcess.workCenter.name;
  }

  public countUser(username: string): number {
    let temp;
    this.userService.countUser(username).subscribe(
      (response: number) => {
        temp = response;
      },
      (error: HttpErrorResponse) => {

      }
    );
    return temp;
  }

  generateUsername(): string {
    // Generate a username with the pattern "user" + some 4 to 6 digit string

    let nameParts = this.selectedFullName.split(" ");
    let firstName = nameParts[0];
    let secondNameInitial = nameParts[1].charAt(0);
    let username = (firstName + secondNameInitial).toLowerCase();
    const count = this.countUser(username);
    if (count) {
      username = username + count;
    }


    return username;
  }


  generatePassword(): string {
    // Generate a random password with at least one lowercase, one uppercase, one numeric, and minimum 8 characters
    const passwordLength = 8;
    const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericCharacters = '0123456789';
    let password = '';
    password += lowerCaseCharacters.charAt(Math.floor(Math.random() * lowerCaseCharacters.length));
    password += upperCaseCharacters.charAt(Math.floor(Math.random() * upperCaseCharacters.length));
    password += numericCharacters.charAt(Math.floor(Math.random() * numericCharacters.length));
    for (let i = password.length; i < passwordLength; i++) {
      password += lowerCaseCharacters.charAt(Math.floor(Math.random() * lowerCaseCharacters.length));
    }
    return password;
  }

  generateCredentials(): void {
    this.selectedTab1 = false;
    this.selectedTab2 = true;
    this.selectedTab3 = true;
    this.username = this.generateUsername();
    this.password = this.generatePassword();
  }

  public changeStatus() {
    this.isClicked = !this.isClicked;
  }

  public searchEmployees(searchedEmployee: any) {

    if (searchedEmployee == "") {
      this.searchedEmployees = []
    }
    else {
      this.employeeService.getEmployeeByName(searchedEmployee).subscribe(
        (response: any) => {
          this.searchedEmployees = response;
        },
        (error: HttpErrorResponse) => {

        }
      )
    }

  }

  public getModules(): void {
    this.moduleService.getModules().subscribe(
      (response: Module[]) => {
        this.modules = response.filter(module => module.id !== 1);
      },
      (error: HttpErrorResponse) => {

      }
    );
  }


  checkRole(roleName: string): boolean {
    let result: boolean = false; // declare a variable to store the result
    this.rolesStr.forEach(role => {
      if (role.indexOf(roleName) !== -1) {
        result = true; // assign true to the result if the role matches
      }
    });
    return result; // return the result at the end of the function
  }

  public addUser(addUserForm: NgForm): void {
    let time: string;
    let roles: any[];
    this.timeService.getDateTime().toPromise().then((dateTime) => {
      time = dateTime;
      return this.roleService.getRolesForModules(addUserForm.value.modules).toPromise();
    }).then((moduleRoles) => {
      roles = moduleRoles;
      const filteredRoles = roles.filter(role => role.name.includes("ADMIN"));


      const formData = new FormData();
      formData.append('username', addUserForm.value.username);
      formData.append('password', addUserForm.value.password);
      formData.append('active', 'true');
      formData.append('createdAt', time);
      formData.append('updatedAt', time);
      formData.append('employeeId', addUserForm.value.employeeId);
      formData.append('fullName', addUserForm.value.fullName);
      formData.append('jobTitle', addUserForm.value.jobTitle);
      formData.append('process', addUserForm.value.process);
      formData.append('subProcess', addUserForm.value.subProcess);
      formData.append('workCenter', addUserForm.value.workCenter);
      if (addUserForm.value.personalEmail) {
        formData.append('personalEmail', addUserForm.value.personalEmail);
      }
      if (addUserForm.value.companyEmail) {
        formData.append('companyEmail', addUserForm.value.companyEmail);
      }
      if (addUserForm.value.gender) {
        formData.append('gender', addUserForm.value.gender);
      }
      if (addUserForm.value.birthDate) {
        formData.append('birthDate', addUserForm.value.birthDate.toISOString());
      }
      if (addUserForm.value.phoneNumber) {
        formData.append('phoneNumber', addUserForm.value.phoneNumber);
      }

      if (this.selectedFiles1) {

        formData.append('employeeImage', this.selectedFiles1);
        this.selectedFiles1 = undefined;
      }

      if (this.selectedFiles2) {
        formData.append('signatureImage', this.selectedFiles2);
        this.selectedFiles2 = undefined;
      }
      formData.append('roles', new Blob([JSON.stringify(filteredRoles)], { type: 'application/json' }));
      formData.append('organizationalUnit', new Blob([JSON.stringify(this.selectedEmployee.organizationalUnit)], { type: 'application/json' }));
      return this.userService.addUser(formData).toPromise();
    }).then((response: any) => {


      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User is created.' });
      setTimeout(() => { this.router.navigate(['viewAdmins']); }, 1000);
    }).catch((errors: HttpErrorResponse) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: errors.error.message });
    });
  }

  public getUser(id: number): User {
    this.userService.getUser(id).subscribe(
      (response: User) => {
        this.user = response;

        this.selectedEmployee = this.user.employee;
        this.selectedState = this.user.active;
      },
      (error: HttpErrorResponse) => {

      }
    );
    return this.user;
  }


  public updateUser(updateUser: NgForm): void {
    this.selectedEmployee = null;
    this.selectedState = null;
    this.userService.updateUser(updateUser.value).subscribe(
      (response: User) => {

      },
      (error: HttpErrorResponse) => {

      }
    );
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
