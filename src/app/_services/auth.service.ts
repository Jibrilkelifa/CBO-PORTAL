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

  ssoBathPath = 'http://localhost:9081';
  //  ssoBathPath = 'http://10.1.125.58:9081';
  // emsBasePath = 'http://10.1.11.48:9082';
  // jenkis testgisa
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

  userData = new BehaviorSubject<any>(null);
  // After login save token and other values(if any) in localStorage
  async setUser(resp: JwtResponse) {


    localStorage.clear();

    // Get employee by ID
    //  const employee = await this.emsService.getEmployeeById(resp?.user?.id).toPromise();
    const employee = await this.emsService.getEmployeeById(resp?.user?.id).toPromise();



    localStorage.setItem('gender', employee?.gender);
    localStorage.setItem('name', employee?.employeeFullName);
    localStorage.setItem('id', employee?.id);
    localStorage.setItem('team', JSON.stringify(employee?.team));
    localStorage.setItem('supervisor', employee?.supervisor);
    localStorage.setItem('subordinates', JSON.stringify(employee?.subordinateIds));
    localStorage.setItem('branch', JSON.stringify(employee?.branch));
    //  localStorage.setItem('branch', JSON.stringify(employee?.branch));
    // localStorage.setItem('bto', JSON.stringify(employee?.branch ?? employee?.team));
    localStorage.setItem('subProcess', JSON.stringify(employee?.subProcess));
    localStorage.setItem('district', JSON.stringify(employee?.subProcess));
    localStorage.setItem('userId', resp?.user?.id.toString());
    localStorage.setItem('resp', JSON.stringify(resp))
    // localStorage.setItem('email', resp?.user?.employee?.companyEmail);
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
    //  localStorage.setItem('branchId', employee?.branch != null ? employee?.branch.id.toString() : employee?.team.id.toString());
    let branchId = 'default';
    if (employee?.branch != null) {
      branchId = employee.branch.id.toString();
    } else if (employee?.team != null) {
      branchId = employee.team.id.toString();
    }
    localStorage.setItem('branchId', branchId);
    // localStorage.setItem('sub_process_Id',  employee?.subProcess.id.toString());

    //  localStorage.setItem('branchId',  resp?.user?.employee?.branch != null ? resp?.user?.employee?.branch?.id.toString() : resp?.user?.employee?.team?.externalName);  //need to change

    const role = resp?.user?.roles[0]?.name;

    if (role) {
      if (this.checkModule(resp?.user, "CC")) {
        await this.router.navigate(['cc_dashboard']);
      } else if (this.checkModule(resp?.user, "ICMS")) {
        await this.router.navigate(['icms_dashboard']);
      } else if (this.checkModule(resp?.user, "CMS")) {
        await this.router.navigate(['cms_dashboard']);
      } else {
        await this.router.navigate(['default_dashboard']); // changed later
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
