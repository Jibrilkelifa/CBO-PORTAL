import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EMSService {
  private httpOptions;
  private httpOptions2;
  private apiServiceUrl;
  
  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'multipart/form-data',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };
    this.httpOptions2 = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };
    this.apiServiceUrl = localStorage.getItem('url_2');
  }
  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    this.init();
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.apiServiceUrl}/EMS/uploadEmployeeData`, formData, this.httpOptions);
  }
}
