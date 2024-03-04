import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FireExtinguisherModel } from '../models/fireExtinguisher-model';

@Injectable({
  providedIn: 'root',
})
export class FireExtinguisherService {
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
  }

  constructor(private http: HttpClient) {}

  public addFireExtinguisher(fireExtinguisherModel: FireExtinguisherModel): Observable<any> {
    this.init();    
    return this.http.post(
      `${this.apiServiceUrl}/FireExtinguisher/add`,
      fireExtinguisherModel,
      this.httpOptions
    );
  }
  public getSize(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/FireExtinguisher/getSize`, this.httpOptions)
  }

  public getAllFireExtinguisher(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/FireExtinguisher/getAll`,
      this.httpOptions
    );
  }

  public updateFireExtinguisher(financeModel: any): Observable<any> {
    this.init();
    return this.http.put(
      `${this.apiServiceUrl}/FireExtinguisher/update`,
      financeModel,
      this.httpOptions
    );
  }

  public deleteFireExtinguisher(id: number): Observable<any> {
    this.init();
    return this.http.delete(
      `${this.apiServiceUrl}/FireExtinguisher/delete/${id}`,
      this.httpOptions
    );
  }

  public findFireExtinguisherById(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/FireExtinguisher/find/${id}`,
      this.httpOptions
    );
  }

  public findAllFireExtinguisherBYBranch(branchId: number): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/FireExtinguisher/branch/${branchId}`,
      this.httpOptions
    );
  }

  public findAllFireExtinguisherSubProcess(subProcessId: number): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/FireExtinguisher/subProcess/${subProcessId}`,
      this.httpOptions
    );
  }

}
