import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { SuspectedFraudsterProfession } from '../../../models/icms-models/ifr-models/suspected-fraudster-profession';

@Injectable({
  providedIn: 'root'
})
export class SuspectedFraudsterProfessionService {

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

  public getSuspectedFraudsterProfessions(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/suspectedFraudsterProfession/getAll`, this.httpOptions)
  }
  public getSuspectedFraudsterProfession(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/suspectedFraudsterProfession/find/${id}`, this.httpOptions)
  }
  public getSuspectedFraudsterProfessionForBranch(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/suspectedFraudsterProfession/findByBranchId/${id}`, this.httpOptions)
  }
  public getSuspectedFraudsterProfessionForDistrict(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/suspectedFraudsterProfession/findByDistrictId/${id}`, this.httpOptions)
  }
  public addSuspectedFraudsterProfession(suspectedFraudsterProfession: NgForm): Observable<any> {
    this.init();
    return this.http.post<any>(`${this.apiServiceUrl}/suspectedFraudsterProfession/add`, suspectedFraudsterProfession, this.httpOptions)
  }
  public updateSuspectedFraudsterProfession(suspectedFraudsterProfession: SuspectedFraudsterProfession): Observable<any> {
    this.init();
    return this.http.put<SuspectedFraudsterProfession>(`${this.apiServiceUrl}/suspectedFraudsterProfession/update`, suspectedFraudsterProfession, this.httpOptions)
  }
  public deleteSuspectedFraudsterProfession(suspectedFraudsterProfessionId: number): Observable<any> {
    this.init();
    return this.http.delete<void>(`${this.apiServiceUrl}/suspectedFraudsterProfession/delete/${suspectedFraudsterProfessionId}`, this.httpOptions)
  }
}
