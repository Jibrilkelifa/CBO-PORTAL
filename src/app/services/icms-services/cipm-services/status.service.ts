import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Status } from '../../../models/icms-models/cipm-models/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
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

  public getStatuses(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/Status/all`, this.httpOptions)
  }
  public getStatus(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/Status/find/${id}`, this.httpOptions)

  }
  public addStatus(ct: NgForm): Observable<any> {
    this.init();
    return this.http.post<any>(`${this.apiServiceUrl}/Status/add`, ct, this.httpOptions)
  }
  public updateStatus(ct: Status): Observable<any> {
    this.init();

    return this.http.put<Status>(`${this.apiServiceUrl}/Status/update`, ct, this.httpOptions)
  }
  public deleteStatus(ctId: number): Observable<any> {
    this.init();
    return this.http.delete<void>(`${this.apiServiceUrl}/Status/delete/${ctId}`, this.httpOptions)
  }
}
