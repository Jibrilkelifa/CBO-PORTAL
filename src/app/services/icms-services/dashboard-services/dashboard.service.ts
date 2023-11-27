import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { count, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private httpOptions;
  private apiServiceUrl;
  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };
    this.apiServiceUrl = localStorage.getItem('url_4');
  }
  constructor(private http: HttpClient) { }

  public getTotalNumberOfPolicies(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/CIPM/getTotalNumberOfPolicies`, this.httpOptions);
  }
  public getNumberOfExpiredPolicies(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/CIPM/TotalNumberOfExpiredPolicies`, this.httpOptions);
  }
  public getExpiringWithinThirtydays(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/CIPM/expiring-within-thirty-days`, this.httpOptions);
  }


  public getTotalDishonouredChequeCount(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/DCQ/getTotalDishonouredChequeCount`, this.httpOptions);
  }
  public getThreeTimesInLastWeek(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/DCQ/three-times-in-last-week/count`, this.httpOptions);
  }
  public getLastWeekCasesCount(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/incidentFraudReport/getLastWeekCasesCount`, this.httpOptions);
  }
  public getOutstandingCasesDuringQuarter(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/incidentFraudReport/getOutstandingCasesDuringQuarter`, this.httpOptions);
  }
  public getClosedCasesDuringQuarter(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/incidentFraudReport/getClosedAndWrittenOffCasesDuringQuarter`, this.httpOptions);
  }
  public getOutstandingCasesInPreviousQuarter(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/incidentFraudReport/getOutstandingCasesInPreviousQuarter`, this.httpOptions);
  }
  public getNewCasesDuringQuarter(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/incidentFraudReport/getNewCasesDuringQuarter`, this.httpOptions);
  }
  public getOutstandingCasesAmountDuringQuarter(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/incidentFraudReport/getOutstandingCasesAmountDuringQuarter`, this.httpOptions);
  }
  public getLastWeekCasesByFraudType(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/incidentFraudReport/getLastWeekCasesByFraudType`, this.httpOptions);
  }
  public getExpiredPoliciesCountByDistrict(expirationDate: string): Observable<any[][]> {
    this.init();
    return this.http.get<any[][]>(`${this.apiServiceUrl}/CIPM/perDistrict/expired?expirationDate=${expirationDate}`, this.httpOptions)
    .pipe(
      map((response: HttpResponse<any[][]>): any[][] => {
        return response.body;
      })
    );
  }
  public getExpiredPoliciesTodayCountByDistrict(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/CIPM/perDistrict/expiredToday`, this.httpOptions);
  }
}
