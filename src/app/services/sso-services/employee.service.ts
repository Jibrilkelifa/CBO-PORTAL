import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private options;
  private httpOptions;
  private formDataOptions;
  private apiServiceUrl;
  private emsAPIBaseUrl;
  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };
    this.options = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    this.formDataOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    }

    this.apiServiceUrl = localStorage.getItem('url_1');
    this.emsAPIBaseUrl = localStorage.getItem('url_2');
  }

  constructor(private http: HttpClient){}

  public getEmployeeByName(searchTerm: string): Observable<any>{
    this.init();
   
    return this.http.get<any>(`${this.emsAPIBaseUrl}/ems/api/getEmployeeByName/${searchTerm}`, this.httpOptions)
  }
  
  getAllEmployees(): Observable<any>{
    this.init();
    return this.http.get<any>(`${this.emsAPIBaseUrl}/getAllEmployeeList`, this.httpOptions)
  }

  getEmployeesByName(name: string): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.emsAPIBaseUrl}/ems/api/getEmployeeByName/${name}`, this.httpOptions)
  }

  getAvatarImage(id: number): Observable<any> {
    this.init();
    return this.http.get(`${this.apiServiceUrl}/employee/avatarImagePath/${id}`, { responseType: 'blob' })
  }

  // getSignatureImage(id: number): Observable<any> {
  //   this.init();
  //   console.log(`${this.apiServiceUrl}/employee/signatureImagePath/${id}`)
  //   return this.http.get(`${this.apiServiceUrl}/user/signatureImagePath/${id}`, { responseType: 'blob' })
  // }

  getSignatureImage(id: number): Observable<any> {
    this.init();
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',   
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };
    
    console.log(`${this.apiServiceUrl}/employee/signatureImagePath/${id}`);
    return this.http.get(`${this.apiServiceUrl}/user/signatureImagePath/${id}`, { responseType: 'blob', ...httpOptions });
  }
  public getEmployeeByFullNameFromDB(fullname: string): Observable<any>{
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/employee/getEmployeeByFullName/${fullname}`, this.httpOptions)
  }
  
  public getEmployees(): Observable<any>{
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/employee/all`, this.httpOptions)
  }
  public getEmployee(id: number): Observable<any>{
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/employee/find/${id}`, this.httpOptions)
  }
  public getPositions(): Observable<any>{
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/employee/positions`, this.httpOptions)
  }
  public addEmployee(employee: FormData): Observable<any>{
    this.init();
    return this.http.post<any>(`${this.apiServiceUrl}/employee/add`, employee, this.formDataOptions)
  }
  public updateEmployee(employee: FormData): Observable<any>{
    this.init();
    return this.http.put(`${this.apiServiceUrl}/employee/update`,employee, this.formDataOptions)
  }
  public deleteEmployee(employeeId: number): Observable<any>{
    this.init();
    return this.http.delete<void>(`${this.apiServiceUrl}/employee/delete/${employeeId}`, this.httpOptions)
  }
  getAllSubProcess(): Observable<any>{
    this.init();
    return this.http.get<any>(`${this.emsAPIBaseUrl}/ems/api/getAllSubProcessList`, this.httpOptions)
  }
}
