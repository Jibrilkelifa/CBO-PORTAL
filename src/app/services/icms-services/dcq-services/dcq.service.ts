import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { DCQ } from '../../../models/icms-models/dcq-models/dcq';

@Injectable({
  providedIn: 'root'
})
export class DCQService {

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
    console.log("this.apiServiceUrl = " + this.apiServiceUrl)
  }

  constructor(private http: HttpClient){}

  public getDCQs(): Observable<any>{
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/DCQ/getAll`, this.httpOptions)
  }
  public getWeekDCQ(): Observable<any> {
    this.init();

    return this.http.get<any>(`${this.apiServiceUrl}/DCQ/three-times-in-last-week-list`, this.httpOptions);
  }
  public getDCQ(id: number): Observable<any>{
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/DCQ/find/${id}`, this.httpOptions)
  }
  public getDCQForBranch(id: number): Observable<any>{
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/DCQ/findByOrganizationalUnitId/${id}`, this.httpOptions)
  }
  public getDCQForDistrict(id: number): Observable<any>{
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/DCQ/findBySubProcessId/${id}`, this.httpOptions)
  }
  public getFrequency(accountNumber: string): Observable<any>{
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/DCQ/getFrequencyForAccountNumber/${accountNumber}`, this.httpOptions)
  }
  public addDCQ(DCQ: NgForm): Observable<any>{
    this.init();
    return this.http.post<any>(`${this.apiServiceUrl}/DCQ/add`, DCQ , this.httpOptions)
  }
  public updateDCQ(DCQ: DCQ): Observable<any>{
    this.init();
    return this.http.put<DCQ>(`${this.apiServiceUrl}/DCQ/update`, DCQ, this.httpOptions)
  }
  public deleteDCQ(DCQId: number): Observable<any>{
    this.init();
    return this.http.delete<void>(`${this.apiServiceUrl}/DCQ/delete/${DCQId}`, this.httpOptions)
  }
}
