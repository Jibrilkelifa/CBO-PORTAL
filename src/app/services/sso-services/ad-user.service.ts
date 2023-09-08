import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/sso-models/user';
import { RoleService } from './role.service';
import { TimeService } from './time.service';

@Injectable({
  providedIn: 'root'
})

export class ADUserService {

  private httpOptions;
  private apiServiceUrl;
  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };
    this.apiServiceUrl = localStorage.getItem('url_1');
  }

  constructor(private http: HttpClient) { }

  public checkIfUserExistsOnAD(username): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/ADUser/search/${username}`, this.httpOptions)
  }
}
