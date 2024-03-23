import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFB } from '../models/ifb';

@Injectable({
  providedIn: 'root',
})
export class IFBService {
  private httpOptions: any;
  private apiServiceUrl: any;

  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }),
    };
    this.apiServiceUrl = 'http://localhost:8084';
  }

  constructor(private http: HttpClient) {}

  public addIFB(ifb: IFB): Observable<any> {
    this.init();    
    return this.http.post(
      `${this.apiServiceUrl}/IFB/add`,
      ifb,
      this.httpOptions
    );
  }
  public getSize(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/IFB/getSize`, this.httpOptions)
  }

  public getAllIFB(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/IFB/getAll`,
      this.httpOptions
    );
  }

  public updateIFB(ifb: any): Observable<any> {
    this.init();
    return this.http.put(
      `${this.apiServiceUrl}/IFB/update`,
      ifb,
      this.httpOptions
    );
  }

  public deleteIFB(id: number): Observable<any> {
    this.init();
    return this.http.delete(
      `${this.apiServiceUrl}/IFB/delete/${id}`,
      this.httpOptions
    );
  }

  public findIFBById(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/IFB/find/${id}`,
      this.httpOptions
    );
  }

  public findAllIFBBYBranch(branchId: number): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/IFB/branch/${branchId}`,
      this.httpOptions
    );
  }

  public findAllIFBSubProcess(subProcessId: number): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/IFB/subProcess/${subProcessId}`,
      this.httpOptions
    );
  }

  public authorizeIFR(id: number, caseAuthorizer: string): Observable<any> {
    this.init();
    return this.http.put(
      `${this.apiServiceUrl}/IFB/authorize/${id}`,
      { caseAuthorizer },
      this.httpOptions
    );
  }
}
