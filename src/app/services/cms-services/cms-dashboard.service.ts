import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeeklyDTO } from 'src/app/models/cms-models/weekly-report';
import { SpecificDay } from 'src/app/models/cms-models/specific-day';
import { SpecificJob } from 'src/app/models/cms-models/specific-job';
@Injectable({
  providedIn: 'root',
})
export class CMSDashboardService {
  private httpOptions: any;
  private apiServiceUrl: any;

  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }),
    };
    // this.apiServiceUrl = localStorage.getItem('url_8');
    this.apiServiceUrl = 'http://10.1.125.58:8088';
    // this.apiServiceUrl = 'http://10.1.125.58:8088';
  }

  constructor(private http: HttpClient) {}

  public getAllJTSummary(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/CMS/JT/getAllJTSummary`,
      this.httpOptions
    );
  }

  public getDailyHistory(weeklyReport: WeeklyDTO): Observable<any> {
    this.init();
    return this.http.post<any>(
      `${this.apiServiceUrl}/CMS/JT/getDailyJTSummaryForSpecificWeek`, weeklyReport,
      this.httpOptions
    );
  }

  public getDailyStageHistory(specificDay: SpecificDay): Observable<any> {
    this.init();
    return this.http.post<any>(
      `${this.apiServiceUrl}/CMS/JT/getStageJTSummaryForSpecificDay`, specificDay,
      this.httpOptions
    );
  }

  public getCOBHistory(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/CMS/JT/getCOBHistory`,
      this.httpOptions
    );
  }

  public getTopJobHistoryWithAverageJobTime(specificDay: SpecificDay): Observable<any> {
    this.init();
    return this.http.post<any>(
      `${this.apiServiceUrl}/CMS/JT/getTopJobsForSpecificDay`, specificDay,
      this.httpOptions
    );
  }

  public getJobDetailForSpecificJob(specificJob: SpecificJob): Observable<any> {
    this.init();
    return this.http.post<any>(
      `${this.apiServiceUrl}/CMS/JT/getJobDetailForSpecificJob`, specificJob,
      this.httpOptions
    );
  }

  public getTopJobsForlatestMonth(): Observable<any> {
    this.init();
    return this.http.post<any>(
      `${this.apiServiceUrl}/CMS/JT/getTopJobsForLatestMonth`,
      this.httpOptions
    );
  }
}


