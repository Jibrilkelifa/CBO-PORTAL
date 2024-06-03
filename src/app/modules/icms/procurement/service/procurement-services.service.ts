import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProcurementModel } from '../models/procurement-model';

@Injectable({
  providedIn: 'root',
})
export class ProcurementService {
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

  public addProcurement(procurementModel: ProcurementModel): Observable<any> {
    this.init();
    return this.http.post(
      `${this.apiServiceUrl}/Procurement/add`,
      procurementModel,
      this.httpOptions
    );
  }
  public getSize(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/Procurement/getSize`, this.httpOptions)
  }

  
  public getAllProcurement(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/Procurement/getAll`,
      this.httpOptions
    );
  }

  public getProcurementForBranch(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/Procurement/findByOrganizationalUnitId/${id}`, this.httpOptions)
  }

  public getProcurementForICMSPROCUREMENTIC(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/Procurement/findBySubProcessId/${id}`, this.httpOptions)
  }

  public updateProcurement(procurementModel: any): Observable<any> {
    this.init();
    return this.http.put(
      `${this.apiServiceUrl}/Procurement/update`,
      procurementModel,
      this.httpOptions
    );
  }

  public deleteProcurement(id: number): Observable<any> {
    this.init();
    return this.http.delete(
      `${this.apiServiceUrl}/Procurement/delete/${id}`,
      this.httpOptions
    );
  }

  public findProcurementById(id: number): Observable<any> {
    this.init();
    console.log(id);
    return this.http.get<any>(
      `${this.apiServiceUrl}/Procurement/find/${id}`,
      this.httpOptions
    );
  }

  public getStatuses(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/ProcurementStatus/getAll`, this.httpOptions)
  }

  public findAllProcurementBYBranch(branchId: number): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/Procurement/branch/${branchId}`,
      this.httpOptions
    );
  }

  public approveActionPlanDate(procurement: ProcurementModel): Observable<any> {
    this.init();
    console.log(procurement )
    const body = {
      procurement: procurement
    };
    return this.http.patch<any>(`${this.apiServiceUrl}/Procurement/approveActionPlan/${procurement?.id}`, procurement, this.httpOptions)
  }

  public findAllProcurementSubProcess(subProcessId: number): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/Procurement/subProcess/${subProcessId}`,
      this.httpOptions
    );
  }





}
