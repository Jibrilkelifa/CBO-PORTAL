import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuditStaffDTO } from '../../models/auditStaff';
import { access } from 'fs';
import { loadTranslations } from '@angular/localize';
@Injectable({
  providedIn: 'root',
})
export class AuditStaffService {
  private httpOptions: any;
  private apiServiceUrl: any;

  private init(access?:string) {
    let token = ''
    if(access){
         token = access
    } else{
      token = localStorage.getItem("access_token")
    }
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
    //prodip
    this.apiServiceUrl = 'http://10.1.125.58:8099';
  // this.apiServiceUrl = localStorage.getItem('ams_ip');
  }

  constructor(private http: HttpClient) { }

  public getAllAuditStaff(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/ams/auditStaff/listAll`,
      this.httpOptions
    );
  }

  public getActiveAuditStaff(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/ams/auditStaff/listActive`,
      this.httpOptions
    );
  }

  public getAuditStaffByEmployeeId(employeeId: string,access_token?:string): Observable<any> {
    this.init(access_token);
    return this.http.get<any>(
      `${this.apiServiceUrl}/ams/auditStaff/findByUserId/${employeeId}`, this.httpOptions
    );
  }

  public registerAuditStaff(auditStaff: AuditStaffDTO): Observable<any> {
    this.init();
    return this.http.post<any>(
      `${this.apiServiceUrl}/ams/auditStaff/register`,auditStaff,
      this.httpOptions
    );
  }

  public updateAuditStaff(auditStaff: AuditStaffDTO): Observable<any> {
    this.init();
    return this.http.post<any>(
      `${this.apiServiceUrl}/ams/auditStaff/update`,auditStaff,
      this.httpOptions
    );
  }

  public deleteAuditStaff(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/ams/auditStaff/remove`,
      this.httpOptions
    );
  }


  public getAuditType(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/ams/auditStaff/byAuditType`,
      this.httpOptions
    );
  }

}
