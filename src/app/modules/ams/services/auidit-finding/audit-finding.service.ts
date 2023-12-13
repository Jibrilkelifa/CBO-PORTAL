import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FindingDTO } from '../../models/finding';
import { AuditCommentDTO } from '../../models/comment';

@Injectable({
  providedIn: 'root',
})

export class AuditFindingService {

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

  public getAuditFindingByProgramId(id:number): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/ams/auditProgram/finding/findById/${id}`,
      this.httpOptions
    );
  }



  public addAuditFinding(finding: FindingDTO): Observable<any> {
    this.init();
    return this.http.post(
      `${this.apiServiceUrl}/ams/auditProgram/finding/register`,
      finding,
      this.httpOptions
    );
  }

  public updateAuditFinding(finding: FindingDTO): Observable<any> {
    this.init();
    return this.http.post(
      `${this.apiServiceUrl}/ams/auditProgram/finding/update`,
      finding,
      this.httpOptions
    );
  }



  public addComment(comment: AuditCommentDTO): Observable<any> {
    this.init();
    return this.http.post(
      `${this.apiServiceUrl}/ams/auditProgram/finding/comment/register`,
      comment,
      this.httpOptions
    );
  }
}