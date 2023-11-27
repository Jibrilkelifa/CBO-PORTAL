import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountRelation } from '../../models/ecx-models/account-relation';

@Injectable({
  providedIn: 'root'
})
export class AccountRelationService {

  private httpOptions;
  private apiServiceUrl;
  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };

    this.apiServiceUrl = 'http://10.1.125.58:8087';//localStorage.getItem('url_7');
  }

  constructor(private http: HttpClient){}
  public getAccounts(): Observable<any>{
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/ecx/relations/all`, this.httpOptions)
  }
  public getAccount(accountInfo: AccountRelation): Observable<any>{
    this.init();
    return this.http.post<any>(`${this.apiServiceUrl}/ecx/relations/retrieveById`,accountInfo, this.httpOptions)
  }

  public addAccount(account: AccountRelation): Observable<any>{
    this.init();
    return this.http.post(`${this.apiServiceUrl}/ecx/relations/create`, account, this.httpOptions)
  }
  public updateAccount(account: AccountRelation): Observable<any>{
    this.init();
    return this.http.post(`${this.apiServiceUrl}/ecx/relations/update`, account, this.httpOptions)
  }

}
