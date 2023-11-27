import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { CollateralType } from '../../../models/icms-models/cipm-models/collatoral-type';

@Injectable({
  providedIn: 'root'
})
export class CollateralTypeService {
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

  public getCollatoralTypes(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/CollateralType/all`, this.httpOptions)
  }
  public getCollatoralType(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/CollateralType/find/${id}`, this.httpOptions)

  }
  public addCollatoralType(ct: NgForm): Observable<any> {
    this.init();
    return this.http.post<any>(`${this.apiServiceUrl}/CollateralType/add`, ct, this.httpOptions)
  }
  public updateCollatoralType(ct: CollateralType): Observable<any> {
    this.init();

    return this.http.put<CollateralType>(`${this.apiServiceUrl}/CollateralType/update`, ct, this.httpOptions)
  }
  public deleteCollatoralType(ctId: number): Observable<any> {
    this.init();
    return this.http.delete<void>(`${this.apiServiceUrl}/CT/delete/${ctId}`, this.httpOptions)
  }
}
