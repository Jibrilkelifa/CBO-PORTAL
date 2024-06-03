import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,NgForm, Validators } from '@angular/forms';
// import { User } from '../../../../models/sso-models/user';
// import { Role } from "../../../../models/role";
// import { UserService } from '../../../../services/sso-services/user.service';
// import { Employee } from '../../../../models/sso-models/employee';
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
import { Process } from 'src/app/models/sso-models/process';
import { Employee } from '../../ams/models/employee';


@Component({
  selector: 'app-accordions',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUser implements OnInit {
  addUserForm: FormGroup;
  searchedJob: any;
  selectedJob:any;
  // public users: User[] = [];
  // public user: User;
  // public roles: Role[] = [];
  public rolesStr: string[] = [];
  public modules: Module[] = [];
  // public employeeR: Employee[] = [];
  // public employees: Employee[] = [];
  update: boolean = false;
  newDiv: boolean = true;
  public idY: number;
  msgs: Message[] = [];
  value: string;
  selectedModules: Module[];
  selectedEmployee: any;
  // selectedRole: Role[];
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
  // public employee: Employee;
  selectedFiles1?: File;
  selectedFiles2?: File;
  selectedDivision: any;
  gender: string;
  maxDate: Date;



  uploadedFiles: any[] = [];
  myDate = new Date();

  
  allProcess: Process[] = [];
  searchedSubProcess: any;
  stateOptions: any[] = [{ label: 'Branch', value: 'branch' }, { label: 'Team', value: 'team' }];
  prompt: String;
  field: String;
  searchedOrganizationalUnit: any;
  sex: any[] = [
    { name: 'Male', key: 'M' },
    { name: 'Female', key: 'F' },
];

  constructor(
    private timeService: TimeService,
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private moduleService: ModuleService,
    private roleService: RoleService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.populateRoles();
    this.getAllProcess();
    this.getModules();
    // this.getRoles();
    let x = this.activatedRoute.snapshot.paramMap.get("id");
    this.idY = +x;

    if (this.idY) {
      // this.getUser(this.idY);
      this.update = true;
      this.newDiv = false;
    }
    this.maxDate = this.myDate;
    this.prompt = "Enter Branch Code or Name"
    this.field = "name"

    this.addUserForm = this.fb.group({
      employeeId: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      employeeFullName: ['', [Validators.pattern('[a-zA-Z\\s]*')]],
      job: ['', [Validators.required]],
      supervisor: ['', [Validators.required]],
      process: [''],
      subProcess: [''],
      companyEntryDate: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
    

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
  removeDuplicateSupervisors(employees: any[]): any[] {
    const uniqueSupervisors = new Set();
    return employees.filter(employee => {
      const isDuplicate = uniqueSupervisors.has(employee.supervisorFullName);
      uniqueSupervisors.add(employee.supervisorFullName);
      return !isDuplicate;
    });
  }


  getSupervisorData(event: any) {

    const searchTerm = event.query;
    if (searchTerm.length == 0) {
      this.previousTerm = "";
    }
    if (searchTerm.length >= 3) { // Store search results locally for all search terms longer than or equal to 3 letters
      this.employeeService.getSupervisorsByName(searchTerm).subscribe(
        (response: any) => {
          this.searchedEmployees = response;
          this.searchedEmployees = this.removeDuplicateSupervisors(this.searchedEmployees);



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

  // public searchEmployees(searchedEmployee: any) {
  //   if (searchedEmployee == "") {
  //     this.searchedEmployees = []
  //   }
  //   else {
  //     this.employeeService.getEmployeesByName(searchedEmployee).subscribe(
  //       (response: any) => {
  //         this.searchedEmployees = response;
  //         this.selectedEmployee = this.searchedEmployees[0];
  //         console.log(this.selectedEmployee.organizationalUnit)
  //         this.populateEmployeeData();
  //       },
  //       (error: HttpErrorResponse) => {

  //       }
  //     )
  //   }
  // }

  // public searchUsernameFromAD(usernametosearch: string): Promise<void> {
  //   return new Promise((resolve, reject) => {
  //     this.adUserService.checkIfUserExistsOnAD(usernametosearch).subscribe(
  //       (response: any) => {
  //         this.userExists = (this.username == response[0]?.username) || false;
  //         const dnPattern = /CN=([^,]+)/;
  //         const matches = response[0].dn.match(dnPattern);
  //         const name = matches ? matches[1] : '';
  //         if (this.userExists) this.searchEmployees(name);
  //         this.fullName = name;
  //         resolve();  // Resolve the promise
  //       },
  //       (error: HttpErrorResponse) => {
  //         reject(error);  // Reject the promise
  //       }
  //     )
  //   });
  // }


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



  async startAdding(): Promise<void> {
    if (this.addUserForm.valid){
      if(this.selectedOrganizationalUnit && this.value.includes("branch")){
        this.addUserForm.value.branch  = this.selectedOrganizationalUnit;
      }

      if(this.selectedOrganizationalUnit && this.value.includes("team")){
        this.addUserForm.value.team = this.selectedOrganizationalUnit;
      }


      this.addUserForm.value.supervisorId =this.selectedEmployee.supervisorId;
      this.addUserForm.value.supervisorFullName = this.selectedEmployee.employeeFullName;
      this.addUser();

    }
    
 
 
  }

  public addUser(): void {
    this.employeeService.addEmployee(this.addUserForm.value).subscribe(
      (response: any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: "Employee Added Successfully!"
        });
        setTimeout(() => {
          this.router.navigate(['ems/addEmployee']);
        }, 1500);

        // handle response


        // this.searchedJob = response;

      }
    )
    // let time: string;
    // let roles: any[];
    // this.timeService.getDateTime().toPromise().then((dateTime) => {
    //   time = dateTime;
    //   return this.roleService.getRolesForModules(addUserForm.value.modules).toPromise();
    // }).then((moduleRoles) => {
    //   roles = moduleRoles;
    //   const filteredRoles = roles.filter(role => role.name.includes("ADMIN"));
    //   const formData = new FormData();

    //   formData.append('username', addUserForm.value.adUserName);
    //   formData.append('active', 'true');
    //   formData.append('createdAt', time);
    //   formData.append('updatedAt', time);
    //   formData.append('id', addUserForm.value.employeeId);

    //   if (this.selectedFiles1) {
    //     formData.append('employeeImage', this.selectedFiles1);
    //     this.selectedFiles1 = undefined;
    //   }

    //   if (this.selectedFiles2) {
    //     formData.append('signatureImage', this.selectedFiles2);
    //     this.selectedFiles2 = undefined;
    //   }
      

    //   // formData.append('roles', new Blob([JSON.stringify(this.selectedRole)], { type: 'application/json' }));
   
    //   // return this.userService.addUser(formData).toPromise();
    // }).then((response: any) => {
    //   this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User is created.' });
    //   // setTimeout(() => { this.router.navigate(['viewAdmins']); }, 1000);
    // }).catch((errors: HttpErrorResponse) => {
    //   this.messageService.add({ severity: 'error', summary: 'Error', detail: errors.error.message });
    // });
  }

  

  getJob(event: any) {

    const searchTerm = event.query;
    if (searchTerm.length == 0) {
      this.previousTerm = "";
    }
    if (searchTerm.length >= 5) {
      this.employeeService.getJobByTitle(searchTerm.toUpperCase()).subscribe(
        (response: any) => {
          this.searchedJob = response;

        }
      )
    }



  }

  getAllProcess() {


    this.employeeService.getAllProcess().subscribe(
      (response: any) => {
        this.allProcess = response;


      }
    )




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

  onValueChange(event) {
    this.value = event.value
    if (event.value.includes("branch")) {
      this.prompt = "Enter Branch Code or Name"
      this.field = "name"
    } else {
      this.prompt = "Search Team By Name"
      this.field = "externalName"
    }

  }

  getData(event: any) {


    if (this.value.includes("branch")) {
      const searchTerm = event.query;
      if (searchTerm.length == 0) {
        this.previousTerm = "";
      }
      if (searchTerm.length >= 3) { // Store search results locally for all search terms longer than or equal to 3 letters
        this.employeeService.getBranchByName(searchTerm.toUpperCase()).subscribe(
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

  // In your component.ts file
onSelectEmployee(selectedItem: any) {
  this.selectedEmployee = selectedItem; // Assign the selected item to selectedEmployee
}
  // In your component.ts file
  onSelectOU(selectedItem: any) {
    this.selectedOrganizationalUnit = selectedItem; // Assign the selected item to selectedEmployee
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
