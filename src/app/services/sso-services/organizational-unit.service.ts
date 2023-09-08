import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OrganizationalUnitService {
  private httpOptions;
  private apiServiceUrl;
  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };
    this.apiServiceUrl = localStorage.getItem('url_1');
  }
  constructor(private http: HttpClient){}

  public getOrganizationalUnit(id: number): Observable<any>{
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/organizationalUnit/find/${id}`, this.httpOptions)
  }
}
