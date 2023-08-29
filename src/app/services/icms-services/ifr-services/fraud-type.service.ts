import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { FraudType } from '../../../models/icms-models/ifr-models/fraud-type';

@Injectable({
  providedIn: 'root'
})
export class FraudTypeService {

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

  public getFraudTypes(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/fraudType/getAll`, this.httpOptions)
  }
  public getFraudType(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/fraudType/find/${id}`, this.httpOptions)
  }
  public getFraudTypeForBranch(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/fraudType/findByBranchId/${id}`, this.httpOptions)
  }
  public getFraudTypeForDistrict(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/fraudType/findByDistrictId/${id}`, this.httpOptions)
  }
  public addFraudType(fraudType: NgForm): Observable<any> {
    this.init();
    return this.http.post<any>(`${this.apiServiceUrl}/fraudType/add`, fraudType, this.httpOptions)
  }
  public updateFraudType(fraudType: FraudType): Observable<any> {
    this.init();
    return this.http.put<FraudType>(`${this.apiServiceUrl}/fraudType/update`, fraudType, this.httpOptions)
  }
  public deleteFraudType(fraudTypeId: number): Observable<any> {
    this.init();
    return this.http.delete<void>(`${this.apiServiceUrl}/fraudType/delete/${fraudTypeId}`, this.httpOptions)
  }
}
