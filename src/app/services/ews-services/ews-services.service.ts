import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EwsSimpleMessage } from 'src/app/models/ews-models/ews_simple_message';



@Injectable({
  providedIn: 'root'
})
export class EWSService {
  private httpOptions;
  private httpOptions2;
  private apiServiceUrl;
  
  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };
    // for production
    // this.apiServiceUrl = localStorage.getItem('url_1');
    // for test
    this.apiServiceUrl ="http://localhost:9081";
  }
  constructor(private http: HttpClient) { }

  sendThis(pleaseSendMe:EwsSimpleMessage): Observable<any> {
    this.init();

    return this.http.post<any>(`${this.apiServiceUrl}/send-to`, pleaseSendMe, this.httpOptions);
  }



}
