import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorityDTO } from '../../models/authority';
@Injectable({
  providedIn: 'root',
})
export class AuthorityService {
  private httpOptions: any;
  private apiServiceUrl: any;

  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }),
    };
    this.apiServiceUrl = 'http://10.1.125.58:8085';
  }

  constructor(private http: HttpClient) {}

  public createAuthority(authority:AuthorityDTO): Observable<any> {
    this.init();
    return this.http.post<any>(
      `${this.apiServiceUrl}/sasv/authority/register`,authority,
      this.httpOptions
    );
  }

  public updateAuthority(authority:AuthorityDTO): Observable<any> {
    this.init();
    return this.http.post<any>(
      `${this.apiServiceUrl}/sasv/authority/update`,authority,
      this.httpOptions
    );
  }

  public getActiveAuthority(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/sasv/authority/listActive`,
      this.httpOptions
    );
  }

  public getAuthorityImage(id : number): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/sasv/authority/images/${id}`,
      this.httpOptions
    );
  }

  public getAuthorityList(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/sasv/authority/listAll`,
      this.httpOptions
    );
  }
}

