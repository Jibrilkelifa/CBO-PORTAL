import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { JwtResponse } from '../models/sso-models/Jwt-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // API path

  ssoBathPath = 'http://10.1.11.44:8081';
  // ssoBathPath = 'http://10.1.125.58:9081';
  emsBasePath = 'http://10.1.125.58:8082';
  // emsBasePath = 'http://10.1.125.58:9082';


  constructor(
    private router: Router,
    private http: HttpClient
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


  // Verify user credentials on server to get token
  loginForm(data: any): Observable<JwtResponse> {
    localStorage.clear();
    return this.http
      .post<JwtResponse>(this.ssoBathPath + `/login?username=${data.username}&password=${data.password}`, null, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // After login save token and other values(if any) in localStorage
  setUser(resp: JwtResponse) {
    const role = resp?.user?.roles[0]?.name;

    if (role) {
        if (this.checkModule(resp?.user, "CC")) {
          this.router.navigate(['cc_dashboard']);
        } else if (this.checkModule(resp?.user, "ICMS")) {
          this.router.navigate(['icms_dashboard']);
        } else if (this.checkModule(resp?.user, "CMS")) {
          this.router.navigate(['cms_dashboard']);
        } else {
          this.router.navigate(['default_dashboard']); // changed later
        }
    }
    localStorage.clear();
    localStorage.setItem('userId', resp?.user?.id.toString())
    localStorage.setItem('employeeId', resp?.user?.employee.id.toString())
    localStorage.setItem('gender', resp?.user?.employee?.gender)
    localStorage.setItem('resp', JSON.stringify(resp))
    localStorage.setItem('email', resp?.user?.employee?.companyEmail);
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
      } else if (i == 2 && this.checkIfUserIsAdmin(resp?.user)) {
        localStorage.setItem('url_2', this.emsBasePath);
      }
      else if (i >= 3) {
        localStorage.setItem('url_' + (resp?.user?.roles[i - 3].module.id), resp?.user?.roles[i - 3].module.url);
      }
    }
    localStorage.setItem('name', resp?.user?.employee?.fullName);
    localStorage.setItem('organizationalUnitId', resp?.user?.employee?.organizationalUnit?.id.toString());  //need to change
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
