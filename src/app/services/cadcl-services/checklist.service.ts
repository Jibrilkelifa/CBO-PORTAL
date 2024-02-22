import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CADailyCheckList } from 'src/app/models/cadcl-models/ca-daily-checklist';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {


  private httpOptions;
  private apiServiceUrl;
  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };

    this.apiServiceUrl = 'http://192.168.137.117:8000';//localStorage.getItem('url_7');
  }

  constructor(private http: HttpClient){}
  public getCaDailyChecklists(): Observable<any>{
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/api/v1/checklists`, this.httpOptions)
  }
  public getCaDailyChecklist(id: number): Observable<any>{
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/api/v1/checklists/${id}`, this.httpOptions)
  }

  public addCaDailyChecklist(account: CADailyCheckList): Observable<any>{
    this.init();
    return this.http.post(`${this.apiServiceUrl}/api/v1/checklists`, account, this.httpOptions)
  }
  public updateCaDailyChecklist(account: CADailyCheckList): Observable<any>{
    this.init();
    return this.http.put(`${this.apiServiceUrl}/api/v1/checklists`, account, this.httpOptions)
  }

}