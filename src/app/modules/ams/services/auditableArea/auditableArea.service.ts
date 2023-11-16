import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuditObjectDTO } from 'src/app/modules/ams/models/auditObject';
import { AuditableAreasDTO } from 'src/app/modules/ams/models/auditableAreas';

@Injectable({
  providedIn: 'root',
})
export class AuditableAreasService {
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

  public getAuditableAreas(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/ams/auditableArea/listAll`,
      this.httpOptions
    );
  }

  public getAuditableAreasById(auditObject?: AuditObjectDTO): Observable<any> {
    this.init();
    return this.http.post<any>(
      `${this.apiServiceUrl}/ams/auditableArea/findByObj`, auditObject,
      this.httpOptions
    );
  }

  public getAuditableAreaInfo(auditableAreas: AuditableAreasDTO): Observable<any>{
    this.init();
    return this.http.post<any>(`${this.apiServiceUrl}/ams/auditableArea/findById`,auditableAreas, this.httpOptions)
  }

  public addAuditableArea(auditableAreas: AuditableAreasDTO): Observable<any> {
    this.init();
    return this.http.post(
      `${this.apiServiceUrl}/ams/auditableArea/register`,
      auditableAreas,
      this.httpOptions
    );
  }

  public updateAuditableAreas(auditableAreas: AuditableAreasDTO): Observable<any>{
    this.init();
    return this.http.post(`${this.apiServiceUrl}/ams/auditableArea/update`, auditableAreas, this.httpOptions)
  }

  public deleteAuditableAreas(auditableAreas: AuditableAreasDTO): Observable<any>{
    this.init();
    return this.http.post(`${this.apiServiceUrl}/ams/auditableArea/delete`, auditableAreas, this.httpOptions)
  }
}
