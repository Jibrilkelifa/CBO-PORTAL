import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private httpOptions: any;
  private apiServiceUrl: any;

  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }),
    };
    this.apiServiceUrl = 'http://10.1.125.58:8099';
  }

  constructor(private http: HttpClient) {}

  public getEmployeeById(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/sasv/authority/employees/{employeeId}`,
      this.httpOptions
    );
  }

  public getEmployeesList(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/sasv/authority/employees`,
      this.httpOptions
    );
  }
  
  public getEmployeesByProcess(processId: number): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}sasv/authority/processes/${processId}/employees`,
      this.httpOptions
    );
  }
}


