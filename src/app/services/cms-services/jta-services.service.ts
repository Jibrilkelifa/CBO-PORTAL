import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JTAService {
  private httpOptions;
  private httpOptions2;
  private apiServiceUrl;
  private uploadedBy;
  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'multipart/form-data',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };
    alert(localStorage.getItem('access_token'));
    this.httpOptions2 = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }) 
    };
    this.apiServiceUrl = 'http://10.1.125.58:8088';//localStorage.getItem('url_8');
    this.uploadedBy = localStorage.getItem('name');
  }
  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    this.init();
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.apiServiceUrl}/CMS/JT/upload/${this.uploadedBy}`, formData, this.httpOptions);
  }

  getAllMajorJobs(utcDate: string): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/CMS/JT/getAllMajorJobs/${utcDate}`, this.httpOptions2);
  }

  getLatestUTCDate(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/CMS/JT/getLatestUTCDate`, this.httpOptions2);
  }
}
