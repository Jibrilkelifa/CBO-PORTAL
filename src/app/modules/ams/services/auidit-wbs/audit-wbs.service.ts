import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WBS_DTO } from '../../models/WBS';

@Injectable({
  providedIn: 'root',
})

export class AuditWBSService {
  private httpOptions: any;
  private apiServiceUrl: any;
  // selectedAuditProgram: AuditProgramDTO;

  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }),
    };
    //prodip
    // this.apiServiceUrl = 'http://localhost:8099';
  this.apiServiceUrl = localStorage.getItem('ams_ip');
  }

  constructor(private http: HttpClient) {}

  public getAuditWBSByProgramId(id:number): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/ams/auditProgram/wbs/findById/${id}`,
      this.httpOptions
    );
  }



  public addAuditWBS(wbs: WBS_DTO): Observable<any> {
    this.init();
    return this.http.post(
      `${this.apiServiceUrl}/ams/auditProgram/wbs/register`,
      wbs,
      this.httpOptions
    );
  }


}