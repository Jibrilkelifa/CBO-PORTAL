import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaResponseService {

  private httpOptions;
  private apiServiceUrl;
  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };

    this.apiServiceUrl = 'http://10.1.125.58:8103';//localStorage.getItem('url_7');
  }

  constructor(private http: HttpClient){}
  public getCaDailyChecklistsOfBranch(branchId: String): Observable<any>{
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/api/v1/checklists/branch/${branchId}`, this.httpOptions)
  }

  public getBranchCaDailyChecklistById(checkListId: number, branchId: String): Observable<any>{
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/api/v1/checklists/${branchId}/${checkListId}`, this.httpOptions)
  }
}
