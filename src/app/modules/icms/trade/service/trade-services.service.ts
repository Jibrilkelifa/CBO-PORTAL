import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TradeModel } from '../models/trade-model';

@Injectable({
  providedIn: 'root',
})
export class TradeService {
  private httpOptions: any;
  private apiServiceUrl: any;

  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }),
    };
    this.apiServiceUrl = 'http://localhost:8084';
    // this.apiServiceUrl = 'http://10.1.125.58:8084';

  }

  constructor(private http: HttpClient) { }

  public addTrade(tradeModel: TradeModel): Observable<any> {
    this.init();
    return this.http.post(
      `${this.apiServiceUrl}/Trade/add`,
      tradeModel,
      this.httpOptions
    );
  }
  public getSize(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/Trade/getSize`, this.httpOptions)
  }

  public getAllTradeType(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/Trade/getAllTradeType`,
      this.httpOptions
    );
  }
  
  public getAllTrade(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/Trade/getAll`,
      this.httpOptions
    );
  }

  public getTradeForBranch(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/Trade/findByOrganizationalUnitId/${id}`, this.httpOptions)
  }

  public getTradeForDistrict(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/Trade/findBySubProcessId/${id}`, this.httpOptions)
  }

  public updateTrade(tradeModel: any): Observable<any> {
    this.init();
    return this.http.put(
      `${this.apiServiceUrl}/Trade/update`,
      tradeModel,
      this.httpOptions
    );
  }

  public deleteTrade(id: number): Observable<any> {
    this.init();
    return this.http.delete(
      `${this.apiServiceUrl}/Trade/delete/${id}`,
      this.httpOptions
    );
  }

  public findTradeById(id: number): Observable<any> {
    this.init();
    console.log(id);
    return this.http.get<any>(
      `${this.apiServiceUrl}/Trade/find/${id}`,
      this.httpOptions
    );
  }

  public getStatuses(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/Trade/getAll`, this.httpOptions)
  }

  public findAllTradeBYBranch(branchId: number): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/Trade/branch/${branchId}`,
      this.httpOptions
    );
  }

  public approveActionPlanDate(trade: TradeModel): Observable<any> {
    this.init();
    const body = {
      trade: trade
    };
    return this.http.patch<any>(`${this.apiServiceUrl}/Trade/approveActionPlan/${trade?.id}`, trade, this.httpOptions)
  }

  public findAllTradeSubProcess(subProcessId: number): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/Trade/subProcess/${subProcessId}`,
      this.httpOptions
    );
  }





}
