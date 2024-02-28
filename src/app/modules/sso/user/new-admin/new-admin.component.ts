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
import { Message, MessageService, ConfirmationService, ConfirmEventType } from 'primeng/api';
import { Module } from 'src/app/models/sso-models/module';
import { RoleService } from 'src/app/services/sso-services/role.service';
import { TimeService } from 'src/app/services/sso-services/time.service';
import { ADUserService } from 'src/app/services/sso-services/ad-user.service';
import Fuse from 'fuse.js'


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

  public divisions: any[] = [];
  public employee: Employee;
  selectedFiles1?: File;
  selectedFiles2?: File;
  selectedDivision: any;
  gender: string;
  maxDate: Date;



  uploadedFiles: any[] = [];
  myDate = new Date();
  constructor(
    private router: Router,
    private timeService: TimeService,
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private userService: UserService,
    private moduleService: ModuleService,
    private organizationalUnitService: OrganizationalUnitService,
    private roleService: RoleService,
    private adUserService: ADUserService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.populateRoles();
    this.getModules();
    this.getRoles();
    let x = this.activatedRoute.snapshot.paramMap.get("id");
    this.idY = +x;

    if (this.idY) {
      this.getUser(this.idY);
      this.update = true;
      this.newDiv = false;
    }
    this.maxDate = this.myDate;
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
    if (searchTerm.length > 3) {
      if (this.previousTerm.length > searchTerm.length) {
        this.searchedEmployees = this.baseVariable;
      }
      this.searchedEmployees = this.searchedEmployees.filter(searchedEmployee => searchedEmployee.fullName.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    this.previousTerm = searchTerm;
  }


  public changeStatus() {
    this.isClicked = !this.isClicked;
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

  public searchUsernameFromAD(usernametosearch: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.adUserService.checkIfUserExistsOnAD(usernametosearch).subscribe(
        (response: any) => {
          this.userExists = (this.username == response[0]?.username) || false;
          const dnPattern = /CN=([^,]+)/;
          const matches = response[0].dn.match(dnPattern);
          const name = matches ? matches[1] : '';
          if (this.userExists) this.searchEmployees(name);
          this.fullName = name;
          resolve();  // Resolve the promise
        },
        (error: HttpErrorResponse) => {
          reject(error);  // Reject the promise
        }
      )
    });
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

  public getRoles(): void {
    this.roleService.getEveryRole().subscribe(
      (response: Role[]) => {
        this.roles = response;
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

  async startAdding(addUserForm: NgForm): Promise<void> {
    try {
      await this.searchUsernameFromAD(addUserForm.value.adUserName);
      let fromAd = [{name:this.fullName.toUpperCase()}];

          // Fuse.js options
    const options = {
      includeScore: true,
      findAllMatches: true,
      threshold: 0.5, // This is your 50% likelihood
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["name"]
    };
    
      let fuse = new Fuse(fromAd, options);
      let match = fuse.search(this.selectedFullName);
      // console.log(match);
      let percentage = (1-match[0].score)*100;
      let messageIfOk = " From AD:  " + this.fullName.toUpperCase() + "  ,From Employee Management System:  " + this.selectedFullName +  "  with similiarity of  " + percentage.toFixed(1) +"%";
      let messageIfNotOk = "User doesn't match";
      

      
      this.confirmationService.confirm({
        message: (percentage < 50)? messageIfNotOk:messageIfOk,
        header: 'Confirm that these users are the same',
        icon: 'pi pi-info-circle',
        acceptLabel: " Yes",
        rejectLabel: " No",
        acceptVisible: percentage > 50,
        accept: () => {
          this.addUser(addUserForm);
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record Created', life: 5000 });
        },
        reject: (type: ConfirmEventType) => {
          switch (type) {
            case ConfirmEventType.REJECT:
              this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 5000 });
              break;
            case ConfirmEventType.CANCEL:
              this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled', life: 5000 });
              break;
          }
        },
        key: 'positionDialog'
      });
    } catch (error) {
      console.error(error);
    }
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

      formData.append('username', addUserForm.value.adUserName);
      formData.append('active', 'true');
      formData.append('createdAt', time);
      formData.append('updatedAt', time);
      formData.append('id', addUserForm.value.employeeId);

      if (this.selectedFiles1) {
        formData.append('employeeImage', this.selectedFiles1);
        this.selectedFiles1 = undefined;
      }

      if (this.selectedFiles2) {
        formData.append('signatureImage', this.selectedFiles2);
        this.selectedFiles2 = undefined;
      }
      
      console.log(filteredRoles);
      console.log(roles);

      formData.append('roles', new Blob([JSON.stringify(this.selectedRole)], { type: 'application/json' }));
   
      return this.userService.addUser(formData).toPromise();
    }).then((response: any) => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User is created.' });
      // setTimeout(() => { this.router.navigate(['viewAdmins']); }, 1000);
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
