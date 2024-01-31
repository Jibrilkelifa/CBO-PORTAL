import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuditEngagementDTO } from '../../models/audit-engagement';
@Injectable({
  providedIn: 'root',
})
export class AuditReportService {
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
    this.apiServiceUrl = 'http://10.1.125.58:8099';
  }

  constructor(private http: HttpClient) { }



  public generateReport(report: any): Observable<any> {
    this.init();
    console.log("i generated" + report);
    const url = `${this.apiServiceUrl}/ams/report/register/byAuditSchedule`;
    return this.http.post(url, report, this.httpOptions);
  }

  public generateReport1(id: number): Observable<any> {
    this.init();
    const url = `${this.apiServiceUrl}/ams/report/generateByAuditSchedule`;
    const requestBody = { id };

    return this.http.post<any>(url, requestBody);
  }
  
  public registerReport(theBigJson: any): Observable<any> {
    this.init();
    const url = `http://10.1.125.58:8099/ams/report/register/byAuditSchedule`;
    return this.http.post(url, theBigJson);
  }

  public getAuditReports(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/listAllReports`,
      this.httpOptions
    );
  }  

}


