import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { IPCT } from '../../../models/icms-models/cipm-models/ipct';

@Injectable({
  providedIn: 'root'
})
export class IPCTService {
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

  public getIPCTs(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/insuranceCoverageType/all`, this.httpOptions)
  }
  public getIPCT(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/insuranceCoverageType/find/${id}`, this.httpOptions)
  }
  public addIPCT(ipct: NgForm): Observable<any> {
    this.init();
    return this.http.post<any>(`${this.apiServiceUrl}/insuranceCoverageType/add`, ipct, this.httpOptions)
  }
  public updateIPCT(ipct: IPCT): Observable<any> {
    this.init();
    return this.http.put<IPCT>(`${this.apiServiceUrl}/insuranceCoverageType/update`, ipct, this.httpOptions)
  }
  public deleteIPCT(ctId: number): Observable<any> {
    this.init();
    return this.http.delete<void>(`${this.apiServiceUrl}/insuranceCoverageType/delete/${ctId}`, this.httpOptions)
  }

}
