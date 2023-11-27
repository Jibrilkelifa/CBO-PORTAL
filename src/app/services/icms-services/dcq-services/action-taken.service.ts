import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ActionTaken } from '../../../models/icms-models/dcq-models/action-taken';

@Injectable({
  providedIn: 'root'
})
export class ActionTakenService {
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

  public getActionsTaken(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/actionTaken/all`, this.httpOptions)
  }
  public getActionTaken(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/actionTaken/find/${id}`, this.httpOptions)
  }
  public addActionTaken(at: NgForm): Observable<any> {
    this.init();
    return this.http.post<any>(`${this.apiServiceUrl}/actionTaken/add`, at, this.httpOptions)
  }
  public updateActionTaken(at: ActionTaken): Observable<any> {
    this.init();
    return this.http.put<ActionTaken>(`${this.apiServiceUrl}/actionTaken/update`, at, this.httpOptions)
  }
  public deleteActionTaken(atId: number): Observable<any> {
    this.init();
    return this.http.delete<void>(`${this.apiServiceUrl}/actionTaken/delete/${atId}`, this.httpOptions)
  }
}
