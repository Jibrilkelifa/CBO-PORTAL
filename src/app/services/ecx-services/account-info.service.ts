import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountInfo } from '../../models/ecx-models/account-info';

@Injectable({
  providedIn: 'root'
})
export class AccountInfoService {

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
    return this.http.get<any>(`${this.apiServiceUrl}/ecx/account/listAccounts`, this.httpOptions)
  }
  public getAccount(accountInfo: AccountInfo): Observable<any>{
    this.init();
    return this.http.post<any>(`${this.apiServiceUrl}/ecx/account/retrieveAccountById`,accountInfo, this.httpOptions)
  }



  public checkAccount(accountNumber: string): Observable<any>{
    this.init();
    let accountInfo = new AccountInfo();
    accountInfo.accountNumber = accountNumber;
    return this.http.post<any>(`${this.apiServiceUrl}/ecx/account/checkAccount`,accountInfo, this.httpOptions)
  }

  public addAccount(account: AccountInfo): Observable<any>{
    this.init();
    return this.http.post(`${this.apiServiceUrl}/ecx/account/createAccount`, account, this.httpOptions)
  }
  public updateAccount(account: AccountInfo): Observable<any>{
    this.init();
    return this.http.post(`${this.apiServiceUrl}/ecx/account/updateAccount`, account, this.httpOptions)
  }
  public deleteAccount(accountId: number): Observable<any>{
    this.init();
    return this.http.delete<void>(`${this.apiServiceUrl}/ecx/account/delete`, this.httpOptions)
  }
}
