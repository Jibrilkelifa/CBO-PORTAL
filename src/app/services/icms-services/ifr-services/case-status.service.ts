import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { CaseStatus } from '../../../models/icms-models/ifr-models/case-status';

@Injectable({
  providedIn: 'root'
})
export class CaseStatusService {

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

  public getCaseStatuses(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/caseStatus/getAll`, this.httpOptions)
  }
  public getCaseStatus(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/caseStatus/find/${id}`, this.httpOptions)
  }
  public getCaseStatusForBranch(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/caseStatus/findByBranchId/${id}`, this.httpOptions)
  }
  public getCaseStatusForDistrict(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/caseStatus/findByDistrictId/${id}`, this.httpOptions)
  }
  public addCaseStatus(caseStatus: NgForm): Observable<any> {
    this.init();
    return this.http.post<any>(`${this.apiServiceUrl}/caseStatus/add`, caseStatus, this.httpOptions)
  }
  public updateCaseStatus(caseStatus: CaseStatus): Observable<any> {
    this.init();
    return this.http.put<CaseStatus>(`${this.apiServiceUrl}/caseStatus/update`, caseStatus, this.httpOptions)
  }
  public deleteCaseStatus(caseStatusId: number): Observable<any> {
    this.init();
    return this.http.delete<void>(`${this.apiServiceUrl}/caseStatus/delete/${caseStatusId}`, this.httpOptions)
  }
}
