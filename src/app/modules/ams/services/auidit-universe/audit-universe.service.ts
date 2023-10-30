import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuditUniverseDTO } from 'src/app/modules/ams/models/auditUniverse';
@Injectable({
  providedIn: 'root',
})
export class AuditUniverseService {
  private httpOptions: any;
  private apiServiceUrl: any;

  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }),
    };
    this.apiServiceUrl = 'http://10.1.125.58:8099';
  }

  constructor(private http: HttpClient) {}

  public getAnnualPlans(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/employee/all`,
      this.httpOptions
    );
  }

  public getAuditUniverse(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/ams/auditUniverse/listAll`,
      this.httpOptions
    );
  }


  public addAuditUniverse(auditUniverse: AuditUniverseDTO): Observable<any> {
    this.init();
    return this.http.post(
      `${this.apiServiceUrl}/ams/auditUniverse/register`,
      auditUniverse,
      this.httpOptions
    );
  }

  public updateAuditUniverse(auditUniverse: AuditUniverseDTO): Observable<any>{
    this.init();
    return this.http.post(`${this.apiServiceUrl}/ams/auditUniverse/update`, auditUniverse, this.httpOptions)
  }

  public approveAuditUniverse(auditUniverse: AuditUniverseDTO): Observable<any>{
    this.init();
    return this.http.post(`${this.apiServiceUrl}/ams/auditUniverse/approve`, auditUniverse, this.httpOptions)
  }
}