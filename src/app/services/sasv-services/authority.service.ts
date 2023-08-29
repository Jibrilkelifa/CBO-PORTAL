import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorityDTO } from '../../models/sasv-models/authorityDTO';

//'content-type': 'multipart/form-data; boundary=wL36Yn8afVp8Ag7AmP8qZ0SA4n1v9T'
@Injectable({
  providedIn: 'root'
})
export class AuthorityService {

  private httpOptions;
  private apiServiceUrl;
  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };
    this.apiServiceUrl = localStorage.getItem('url_5');
  }

  constructor(private http: HttpClient) { }

  public getAllAuthoritys(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/sasv/authority/listAll`, this.httpOptions)
  }
  public getActiveAuthoritys(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/sasv/authority/listActive`, this.httpOptions)
  }
  public getAuthority(id: number): Observable<any> {
    this.init();
    let authority = new AuthorityDTO();
    authority.id = id;
    return this.http.post<any>(`${this.apiServiceUrl}/sasv/authority/byId`, authority, this.httpOptions)
  }
  public addAuthority(authority: FormData): Observable<any> {
    this.init();
    return this.http.post(`${this.apiServiceUrl}/sasv/authority/add`, authority, this.httpOptions)
  }
  public updateAuthority(authority: AuthorityDTO): Observable<any> {
    this.init();
    return this.http.post<any>(`${this.apiServiceUrl}/sasv/authority/update`, authority, this.httpOptions)
  }
  public deleteAuthority(authorityId: number): Observable<any> {
    this.init();
    return this.http.delete<void>(`${this.apiServiceUrl}/sasv/authority/delete/${authorityId}`, this.httpOptions)
  }

  public getAuthImage(id: number): Observable<any> {
    this.init();
    let authority = new AuthorityDTO();
    authority.id = id;
    return this.http.post<any>(`${this.apiServiceUrl}/sasv/authority/images`, authority, this.httpOptions)
  }

  public getDashboardData(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/authority/dashboard`, this.httpOptions)
  }
}
