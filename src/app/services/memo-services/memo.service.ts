import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Memo } from './memo';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class MemoService {

  private apiServerUrl = localStorage.getItem("url_6");;

  memos: Memo;

  constructor(private http: HttpClient) { }

  public getMemos(): Observable<Memo[]> {
    return this.http.get<Memo[]>(`${this.apiServerUrl}/api/memos`, httpOptions);
  }
  public getMemosById(memoId: number): Observable<any> {
    
    return this.http.get<any>(`${this.apiServerUrl}/api/memos/${memoId}`, httpOptions);
  }

  public addMemos(memo: Memo): Observable<Memo> {

    return this.http.post<Memo>(`${this.apiServerUrl}/api/memos`, memo, httpOptions);
  }

  public updateMemos(memoId: number, memo: Memo): Observable<void> {
    return this.http.put<void>(`${this.apiServerUrl}/api/memos/${memoId}`, memo, httpOptions);
  }
  public deleteOne(memoId: number, memo: Memo): Observable<Memo> {
    return this.http.post<Memo>(`${this.apiServerUrl}/api/memos/${memoId}`, memo, httpOptions);
  }
  public deleteMemos(memo: Memo): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/memos`, httpOptions);
  }

}
