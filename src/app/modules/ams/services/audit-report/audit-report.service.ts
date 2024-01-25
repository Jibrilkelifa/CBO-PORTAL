import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    return this.http.post<any>(
      `${this.apiServiceUrl}/ams/auditSchedule/addToEngagement`, report,
      this.httpOptions
    );
  }




  

}


