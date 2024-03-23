import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/sso-models/employee';

@Injectable({
  providedIn: 'root'
})
export class EMSService {
  private httpOptions;
  private httpOptions2;
  private apiServiceUrl;
  
  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'multipart/form-data',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };
    this.httpOptions2 = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };
    this.apiServiceUrl = localStorage.getItem('url_2');
  }
  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    this.init();
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.apiServiceUrl}/EMS/uploadEmployeeData`, formData, this.httpOptions);
  }

  getEmployeeById(id: number): Observable<any> {
    this.init();
    return this.http.get<Employee>(`http://10.1.125.58:8082/ems/api/getEmployeeById/${id}`, this.httpOptions2)

  }
  getEmployeeByIdForStaff(id: string): Observable<any> {
    this.init();
    return this.http.get<Employee>(`http://10.1.125.58:8082/ems/api/getEmployeeById/${id}`, this.httpOptions2)

  }
  public getEmployeeByFullNameFromDB(fullname: string): Observable<any>{
    this.init();
    // return this.http.get<any>(`http://localhost:8082/ems/api/getEmployeeByName/${fullname}`, this.httpOptions2)
    return this.http.get<any>(`http://10.1.125.58:8082/ems/api/getEmployeeByName/${fullname}`, this.httpOptions2)

  }
}
