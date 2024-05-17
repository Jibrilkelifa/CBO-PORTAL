import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { JwtResponse } from '../models/sso-models/Jwt-response';
import { Employee } from '../models/sso-models/employee';
import { BehaviorSubject } from 'rxjs';
import { EMSService } from '../services/ems-services/ems-services.service';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // API path
  //prodip
  // ssoBathPath = 'http://localhost:9081';
  ssoBathPath = 'http://10.1.125.58:9081';

  //    //emsBasePath = 'http://localhost:8082';
  //    emsBasePath = 'http://10.1.125.58:8082';

  // emsBasePath = 'http://10.1.11.48:9082';
  // test jenkins
  emsBasePath = 'http://10.1.125.58:8082';




  constructor(
    private router: Router,
    private http: HttpClient,
    private emsService: EMSService
  ) { }



  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Handle errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }




  loginForm(data: any): Observable<JwtResponse> {
    localStorage.clear();
    const body = new HttpParams()
      .set('username', data.username)
      .set('password', data.password);

    localStorage.setItem("un", data.username);
    localStorage.setItem("ps", data.password);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    return this.http
      .post<JwtResponse>(this.ssoBathPath + '/login', body.toString(), httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

 roleRouteMapping = {
    "ROLE_SUPER_ADMIN": 'default_dashboard',
    "ROLE_EMS_ADMIN": 'default_dashboard',
    "ROLE_EMS_USER": 'cc_dashboard',
    "ROLE_ICMS_ADMIN": 'icms_dashboard',
    "ROLE_ICMS_DISTRICT_IC": 'icms_dashboard/district',
    "ROLE_ICMS_BRANCH_IC": 'icms_dashboard/branch',
    "ROLE_ICMS_IFB": 'default_dashboard',
    "ROLE_SMS_ADMIN": 'sms_dashboard',
    "ROLE_ICMS_PROVISION": 'default_dashboard',
    "ROLE_ICMS_BRANCH_MANAGER": 'default_dashboard',
    "ROLE_ICMS_BANKING_OPERATION": 'default_dashboard',
    "ROLE_ICMS_FINANCE_IC": 'default_dashboard',
    "ROLE_ICMS_FINANCE_OWNER": 'default_dashboard',
    "ROLE_ICMS_SHARE_IC": 'default_dashboard',
    "ROLE_ICMS_SHARE_OWNER": 'default_dashboard',
    "ROLE_ICMS_DISTRICT_DIRECTOR": 'icms_dashboard/district',
    "ROLE_SASV_ADMIN": 'default_dashboard',
    "ROLE_MEMO_ADMIN": 'default_dashboard',
    "ROLE_MEMO_USER": 'default_dashboard',
    "ROLE_ECX_ADMIN": 'default_dashboard',
    "ROLE_ECX_USER": 'default_dashboard',
    "ROLE_CAO_ADMIN": 'default_dashboard',
    "ROLE_CAO_USER": 'default_dashboard',
    "ROLE_CMS_ADMIN": 'cms_dashboard',
    "ROLE_CMS_USER": 'default_dashboard',
    "ROLE_AMS_ADMIN": 'default_dashboard',
    "ROLE_AMS_DIRECTOR": 'default_dashboard',
    "ROLE_AMS_AUDITOR": 'default_dashboard',
    "ROLE_AMS_DIRECTOR_AUDITEE": 'default_dashboard',
    "ROLE_AMS_MANAGER": 'default_dashboard',
    "ROLE_AMS_TEAM_LEADER": 'default_dashboard',
    "ROLE_AMS_MEMBER": 'default_dashboard',
    "ROLE_AMS_AUDITEE": 'default_dashboard',
    "ROLE_CIST_ADMIN": 'default_dashboard',
    // Add more roles and routes as needed
  };




  userData = new BehaviorSubject<any>(null);
  // After login save token and other values(if any) in localStorage
  async setUser(resp: JwtResponse) {



    const employee = await this.emsService.getEmployeeById(resp?.user?.id).toPromise();


    localStorage.setItem("ams_ip", "http://10.1.125.58:8099")
    

    localStorage.setItem('gender', employee?.gender);
    localStorage.setItem('name', employee?.employeeFullName);
    localStorage.setItem('id', employee?.id);

    localStorage.setItem('team', JSON.stringify(employee?.team));
    localStorage.setItem('supervisor', employee?.supervisor);
    localStorage.setItem('title', employee?.jobObject.title);
    localStorage.setItem('subordinates', JSON.stringify(employee?.subordinateIds));
    localStorage.setItem('branch', JSON.stringify(employee?.branch));
    localStorage.setItem('subProcess', JSON.stringify(employee?.subProcess));
    localStorage.setItem('district', JSON.stringify(employee?.subProcess));
    localStorage.setItem('process', JSON.stringify(employee?.process));
    localStorage.setItem('userId', resp?.user?.id.toString());
    localStorage.setItem('resp', JSON.stringify(resp))
    localStorage.setItem('access_token', resp?.accessToken);
    localStorage.setItem('moduleId', resp?.user?.roles[0]?.module.id.toString())    ////////need to change
    localStorage.setItem('moduleName', resp?.user?.roles[0]?.module.name)           ////////need to change
    localStorage.setItem('username', resp?.user?.username)
    for (let i = 0; i < resp?.user?.roles.length; i++) {
      localStorage.setItem('role_' + i, resp?.user?.roles[i]?.name);
    }
    localStorage.setItem('number_of_roles', resp?.user?.roles.length.toString())
    localStorage.setItem('number_of_modules', resp?.user?.roles.length.toString())
    for (let i = 0; i < resp?.user?.roles.length; i++) {
      localStorage.setItem('module_' + i, resp?.user?.roles[i]?.module.status.toString());
    }
    localStorage.setItem('allRoles', JSON.stringify(resp?.user?.roles));
    for (let i = 1; i <= resp?.user.roles.length + 2; i++) {
      if (i == 1) {
        localStorage.setItem('url_1', this.ssoBathPath);
      } else if (i == 2) {
        localStorage.setItem('url_2', this.emsBasePath);
      }
      else if (i >= 3) {
        localStorage.setItem('url_' + (resp?.user?.roles[i - 3].module.id), resp?.user?.roles[i - 3].module.url);
      }
    }

    localStorage.setItem('subProcessId', employee?.subProcess.id.toString());
    localStorage.setItem('processId', employee?.process.id.toString());
    console.log()
    let branchId = 'default';
    if (employee?.branch != null) {
      branchId = employee.branch.id.toString();
    } else if (employee?.team != null) {
      branchId = employee.team.id.toString();
    }
    localStorage.setItem('branchId', branchId);

   const role = resp?.user?.roles[0]?.name;

  if (role) {
    // Check if the user's role is in the mapping
    if (this.checkModule(resp?.user, role.split("_")[1]) && role in this.roleRouteMapping) {
      // If it is, navigate to the corresponding route
      await this.router.navigate([this.roleRouteMapping[role]]);
    } else {
      // If it's not, navigate to the default dashboard
      await this.router.navigate(['default_dashboard']);
    }
  }
  }




  checkIfUserIsAdmin(user: any): boolean {
    if (user?.roles?.length > 0) {
      for (const role of user.roles) {
        if (role.name.includes('ADMIN')) {
          return true;
        }
      }
    }
    return false;
  }

  checkModule(user: any, moduleCode: string): boolean {
    if (user?.roles?.length > 0) {
      for (const role of user.roles) {
        if (role.name.split("_")[1] == moduleCode && role.name.includes("ADMIN")) {
          return true;
        }
      }
    }
    return false;
  }

  // Checking if token is set
  isLoggedIn() {
    return localStorage.getItem('access_token') != null;
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  // After clearing localStorage redirect to login screen
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
