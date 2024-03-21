import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuditProgramDTO } from '../../models/audit program';

@Injectable({
  providedIn: 'root',
})

export class AuditProgramService {
  private httpOptions: any;
  private apiServiceUrl: any;
  selectedAuditProgram: AuditProgramDTO;

  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }),
    };
    this.apiServiceUrl = localStorage.getItem('url_9');
  }

  constructor(private http: HttpClient) {}

  public getAuditPrograms(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/ams/auditProgram/listAll`,
      this.httpOptions
    );
  }

  public getAuditProgramByEngagementId(id:number): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/ams/auditProgram/byEngagementId/findById/${id}`,
      this.httpOptions
    );
  }

  public addAuditProgram(auditProgram: AuditProgramDTO): Observable<any> {
    this.init();
    return this.http.post(
      `${this.apiServiceUrl}/ams/auditProgram/register`,
      auditProgram,
      this.httpOptions
    );
  }

  public loadAuditProgram(id: number): Observable<any> {
    const url = `${this.apiServiceUrl}/ams/auditProgram/changeStatus/findById/${id}`;
    return this.http.post(url, {}, this.httpOptions);
  }
}

