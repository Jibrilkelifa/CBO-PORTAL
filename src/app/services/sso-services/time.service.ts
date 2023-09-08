import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  constructor(private http: HttpClient) { }
  private httpOptions;
  private apiServiceUrl;

  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };
    this.apiServiceUrl = localStorage.getItem("url_1");
  }

  public getDate(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/getDate`, this.httpOptions)
  }

  public getDateTime(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/getDateTime`, this.httpOptions)
  }
}
