import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuditStaffDTO } from '../../models/auditStaff';
@Injectable({
  providedIn: 'root',
})
export class AuditStaffService {
  private httpOptions: any;
  private apiServiceUrl: any;

  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }),
    };
    this.apiServiceUrl = 'http://localhost:8099';
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

  public getAuditStaffByEmployeeId(employeeId: string): Observable<any> {
    this.init();
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
