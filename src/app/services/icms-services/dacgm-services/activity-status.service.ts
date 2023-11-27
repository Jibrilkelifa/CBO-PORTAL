import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityStatus } from '../../../models/icms-models/dacgm-models/activity-status';

@Injectable({
  providedIn: 'root'
})
export class ActivityStatusService {
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

  public getActivityStatuses(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/ActivityStatus/getAll`, this.httpOptions)
  }
  public getActivityStatus(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/ActivityStatus/find/${id}`, this.httpOptions)
  }
}
