import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CIPM } from '../../../models/icms-models/cipm-models/cipm';
import { NgForm } from '@angular/forms';
import { Branch } from 'src/app/modules/sasv/models/branch';
import { brandSet } from '@coreui/icons';

@Injectable({
  providedIn: 'root'
})
export class CIPMService {
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

  public getCIPMs(): Observable<any> {
    this.init();

    return this.http.get<any>(`${this.apiServiceUrl}/CIPM/getAll`, this.httpOptions);
  }
  public geExpiringWithIn30DaysCIPMs(): Observable<any> {
    this.init();

    return this.http.get<any>(`${this.apiServiceUrl}/CIPM/expiring-within-thirty-days-list`, this.httpOptions);
  }
  public getExpired(): Observable<any> {
    this.init();

    return this.http.get<any>(`${this.apiServiceUrl}/CIPM/ExpiredPolicies`, this.httpOptions);
  }
  public getCIPM(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/CIPM/find/${id}`, this.httpOptions)
  }
  public getCIPMForBranch(id: number): Observable<any> {
    this.init();

    return this.http.get<any>(`${this.apiServiceUrl}/CIPM/findByOrganizationalUnitId/${id}`, this.httpOptions)
  }
  public getCIPMForDistrict(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/CIPM/findBySubProcessId/${id}`, this.httpOptions)
  }
  public addCIPM(cipm: CIPM): Observable<any> {
    this.init();
    let branch = new Branch();
  

    console.log("cipmadd",cipm)

    return this.http.post<any>(`${this.apiServiceUrl}/CIPM/add`, cipm, this.httpOptions)
  }
  public updateCIPM(cipm: CIPM): Observable<any>{
    this.init();
    return this.http.put<CIPM>(`${this.apiServiceUrl}/CIPM/update`, cipm, this.httpOptions)
  }

  public authorizeCIPM(id: number): Observable<any> {
    this.init();
    const body = {
      "authorizer": localStorage.getItem('name')
    }
    return this.http.patch<any>(`${this.apiServiceUrl}/CIPM/authorize/${id}`, body, this.httpOptions)
  }

  public deleteCIPM(cipmId: number): Observable<any> {
    this.init();
    return this.http.delete<void>(`${this.apiServiceUrl}/CIPM/delete/${cipmId}`, this.httpOptions)
  }
}
