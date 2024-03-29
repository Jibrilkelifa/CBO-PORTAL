import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/sso-models/user';
import { RoleService } from './role.service';
import { TimeService } from './time.service';
import { EwsSimpleMessage } from 'src/app/models/ews-models/ews_simple_message';

@Injectable({
  providedIn: 'root'
})

export class Ews {

  private httpOptions;
  private apiServiceUrl;
  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };
    // this.apiServiceUrl = localStorage.getItem('url_1');
    // testip
     this.apiServiceUrl = 'http://localhost:9081';
  }

  constructor(private http: HttpClient) { }
 


  public sendEmail(body:EwsSimpleMessage): Observable<any> {
    this.init();
    return this.http.post<any>(`${this.apiServiceUrl}/send-to`, body, this.httpOptions)
  }


}
