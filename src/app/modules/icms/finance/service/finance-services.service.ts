import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FinanceModel } from '../models/finance-model';

@Injectable({
  providedIn: 'root',
})
export class FinanceService {
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
    //this.apiServiceUrl = 'http://10.1.125.58:8084';

  }

  constructor(private http: HttpClient) { }

  public addFinance(financeModel: FinanceModel): Observable<any> {
    this.init();
    return this.http.post(
      `${this.apiServiceUrl}/Finance/add`,
      financeModel,
      this.httpOptions
    );
  }
  public getSize(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/Finance/getSize`, this.httpOptions)
  }

  public getAllFinance(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/Finance/getAll`,
      this.httpOptions
    );
  }

  // public getFinanceForBranch(id: number): Observable<any> {
  //   this.init();
  //   return this.http.get<any>(`${this.apiServiceUrl}/Finance/findByOrganizationalUnitId/${id}`, this.httpOptions)
  // }

  public getFinanceForICMSFINANCEIC(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/Finance/findBySubProcessId/${id}`, this.httpOptions)
  }

  public updateFinance(financeModel: any): Observable<any> {
    this.init();
    return this.http.put(
      `${this.apiServiceUrl}/Finance/update`,
      financeModel,
      this.httpOptions
    );
  }

  public deleteFinance(id: number): Observable<any> {
    this.init();
    return this.http.delete(
      `${this.apiServiceUrl}/Finance/delete/${id}`,
      this.httpOptions
    );
  }

  public findFinanceById(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/Finance/find/${id}`,
      this.httpOptions
    );
  }

  public getStatuses(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/FinanceStatus/getAll`, this.httpOptions)
  }

  public findAllFinanceBYBranch(branchId: number): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/Finance/branch/${branchId}`,
      this.httpOptions
    );
  }

  public approveActionPlanDate(finance: FinanceModel): Observable<any> {
    this.init();
    const body = {
      finance: finance
    };
    return this.http.patch<any>(`${this.apiServiceUrl}/Finance/approveActionPlan/${finance?.id}`, finance, this.httpOptions)
  }

  public findAllFinanceSubProcess(subProcessId: number): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/Finance/subProcess/${subProcessId}`,
      this.httpOptions
    );
  }

}
