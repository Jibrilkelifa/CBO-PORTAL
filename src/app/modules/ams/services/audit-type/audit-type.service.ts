import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuditType } from '../../models/auditType';
@Injectable({
  providedIn: 'root',
})
export class AuditTypeService {
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

  public getAuditTypes(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/ams/auditType/listAll`,
      this.httpOptions
    );
  }

  public addAuditType(auditType: AuditType): Observable<any> {
    this.init();
    return this.http.post<any>(
      `${this.apiServiceUrl}/ams/auditType/register`,auditType,
      this.httpOptions
    );
  }

  public updateAuditType(auditType: AuditType): Observable<any> {
    this.init();
    return this.http.post<any>(
      `${this.apiServiceUrl}/ams/auditType/update`,auditType,
      this.httpOptions
    );
  }

  public deleteAuditType(auditType: AuditType): Observable<any> {
    this.init();
    return this.http.post<any>(
      `${this.apiServiceUrl}/ams/auditType/delete`,auditType,
      this.httpOptions
    );
  }
}
