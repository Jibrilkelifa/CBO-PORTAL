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
    //this.apiServiceUrl = 'http://localhost:8084';
    this.apiServiceUrl = 'http://10.1.125.58:8084';

  }

  constructor(private http: HttpClient) { }

  public addShare(shareModel: TradeModel): Observable<any> {
    this.init();
    return this.http.post(
      `${this.apiServiceUrl}/Share/add`,
      shareModel,
      this.httpOptions
    );
  }
  public getSize(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/Share/getSize`, this.httpOptions)
  }

  public getAllShare(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/Share/getAll`,
      this.httpOptions
    );
  }

  public getShareForBranch(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/Share/findByOrganizationalUnitId/${id}`, this.httpOptions)
  }

  public getShareForDistrict(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/Share/findBySubProcessId/${id}`, this.httpOptions)
  }

  public updateShare(shareModel: any): Observable<any> {
    this.init();
    return this.http.put(
      `${this.apiServiceUrl}/Share/update`,
      shareModel,
      this.httpOptions
    );
  }

  public deleteShare(id: number): Observable<any> {
    this.init();
    return this.http.delete(
      `${this.apiServiceUrl}/Share/delete/${id}`,
      this.httpOptions
    );
  }

  public findShareById(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/Share/find/${id}`,
      this.httpOptions
    );
  }

  public getStatuses(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/ShareStatus/getAll`, this.httpOptions)
  }

  public findAllShareBYBranch(branchId: number): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/Share/branch/${branchId}`,
      this.httpOptions
    );
  }

  public approveActionPlanDate(share: TradeModel): Observable<any> {
    this.init();
    const body = {
      share: share
    };
    return this.http.patch<any>(`${this.apiServiceUrl}/Share/approveActionPlan/${share?.id}`, share, this.httpOptions)
  }

  public findAllShareSubProcess(subProcessId: number): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/Share/subProcess/${subProcessId}`,
      this.httpOptions
    );
  }

}
