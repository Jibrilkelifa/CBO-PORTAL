import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamMemberDTO } from 'src/app/modules/ams/models/team-member';
@Injectable({
  providedIn: 'root',
})
export class AMSUsersService {
  private httpOptions: any;
  private apiServiceUrl: any;

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

  public getAMSUsers(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/ams/users`,
      this.httpOptions
    );
  }


}
