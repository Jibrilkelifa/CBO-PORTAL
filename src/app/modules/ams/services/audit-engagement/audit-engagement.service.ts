import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuditEngagementDTO } from './../../models/audit-engagement';
@Injectable({
  providedIn: 'root',
})
export class AuditEngagementService {
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

  constructor(private http: HttpClient) { }

  public addToEngagement(engagement: AuditEngagementDTO): Observable<any> {
    this.init();
    return this.http.post<any>(
      `${this.apiServiceUrl}/ams/auditSchedule/addToEngagement`, engagement,
      this.httpOptions
    );
  }

  public getEngagementBySchedule(engagement: AuditEngagementDTO): Observable<any> {
    this.init();
    return this.http.post<any>(
      `${this.apiServiceUrl}/ams/auditSchedule/getEngagementBySchedule`, engagement,
      this.httpOptions
    );
  }

}


