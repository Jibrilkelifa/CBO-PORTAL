import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuditEngagementDTO } from './../../models/audit-engagement';
@Injectable({
  providedIn: 'root',
})
export class AuditEngagementService {
  private httpOptions: any;
  private apiServiceUrl: any;
  public selectedAuditEngagement: AuditEngagementDTO;

  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }),
    };
    // production
    // this.apiServiceUrl = 'http://10.1.125.58:8099';
    // test
    this.apiServiceUrl = 'http://localhost:8099';
  }

  constructor(private http: HttpClient) { }

  public getAllEngagementOfCurrentYear(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/ams/auditSchedule/listAllEngagement`,
      this.httpOptions
    );
  }

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

  public getEngagementByStatus(status: string): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/ams/auditSchedule/getByStatus/${status}`,
    );
  }

  public getEngagementByQuarter(quarter: string): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/ams/auditSchedule/getByQuarter/${quarter}`,
      this.httpOptions
    );
  }

  public getEngagementByYear(year: string): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/ams/auditSchedule/getEngagementByYear`,
      { params: new HttpParams().set('year', year), headers: this.httpOptions.headers }
    );
  }
  

}


