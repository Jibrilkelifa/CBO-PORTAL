import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { AllTradeType } from '../../models/icms-models/all-trade-type';

@Injectable({
  providedIn: 'root'
})
export class AllTradeTypeService {

  private httpOptions;
  private apiServiceUrl;
  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };
    
    //this.apiServiceUrl = localStorage.getItem('url_4');
    this.apiServiceUrl = 'http://10.1.125.58:8084';
    
    //this.apiServiceUrl = 'http://localhost:8084';

    
  }

  constructor(private http: HttpClient) { }

  public getAllTradeTypesBySubModuleName(subModuleName: string): Observable<any> {
    this.init();
    const body = {
      "subModuleName" : subModuleName
    }
    return this.http.post<any>(`${this.apiServiceUrl}/allTradeType/getAllTradeType`, body , this.httpOptions)
  }

  public getAllTradeType(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/allCategory/find/${id}`, this.httpOptions)
  }

  public addAllTradeType(allCategory: NgForm): Observable<any> {
    this.init();
    return this.http.post<any>(`${this.apiServiceUrl}/allCategory/add`, allCategory, this.httpOptions)
  }

  public updateAllTradeType(allCategory: AllTradeType): Observable<any> {
    this.init();
    return this.http.put<AllTradeType>(`${this.apiServiceUrl}/allCategory/update`, allCategory, this.httpOptions)
  }

  public deleteAllTradeType(allCategoryId: number): Observable<any> {
    this.init();
    return this.http.delete<void>(`${this.apiServiceUrl}/allCategory/delete/${allCategoryId}`, this.httpOptions)
  }
}
