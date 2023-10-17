import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StampService {
  private httpOptions: any;
  private formDataOptions: any;
  private apiServiceUrl: any;

  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }),
    };
    this.formDataOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }),
    };
    this.apiServiceUrl = 'http://10.1.125.58:8085';
  }

  constructor(private http: HttpClient) {}

  public createStamp(stamp: FormData): Observable<any> {
    this.init();
    return this.http.post<any>(
      `${this.apiServiceUrl}/sasv/authority/stamp`,stamp,
      this.formDataOptions
    );
  }

  public getStampImage(id : number): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/sasv/authority/images/stamp/${id}`,
      this.httpOptions
    );
  }
  public getStampList(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/sasv/authority/stamp/all`,
      this.httpOptions
    );
  }
}


