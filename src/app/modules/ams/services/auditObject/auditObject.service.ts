import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuditObjectDTO } from 'src/app/modules/ams/models/auditObject';
@Injectable({
  providedIn: 'root',
})
export class AuditObjectService {
  private httpOptions: any;
  private apiServiceUrl: any;

  private auditObjectSource = new BehaviorSubject<AuditObjectDTO | null>(null);
  currentAuditObject = this.auditObjectSource.asObservable();

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

  public changeAuditObject(auditObject: AuditObjectDTO) {
    this.auditObjectSource.next(auditObject);
  }

  public getAuditObjects(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/ams/auditObject/listAll`,
      this.httpOptions
    );
  }


  public getAuditObjectInfo(auditObject: AuditObjectDTO): Observable<any>{
    this.init();
    return this.http.post<any>(`${this.apiServiceUrl}/ams/auditObject/findById`,auditObject, this.httpOptions)
  }

  public addAuditObject(auditObject: AuditObjectDTO): Observable<any> {
    this.init();
    return this.http.post(
      `${this.apiServiceUrl}/ams/auditObject/register`,
      auditObject,
      this.httpOptions
    );
  }

  public updateAuditObject(auditObject: AuditObjectDTO): Observable<any>{
    this.init();
    return this.http.post(`${this.apiServiceUrl}/ams/auditObject/update`, auditObject, this.httpOptions)
  }
}
