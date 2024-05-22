import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import {CaReports} from 'src/app/models/cadcl-models/ca-reports'
@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  private httpOptions;
  private blobOptions;
  private apiServiceUrl;
  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };

    this.blobOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }),
      responseType: 'blob'
    };

    this.apiServiceUrl = 'http://192.168.137.241:8095';//localStorage.getItem('url_7');

  }
  
  constructor(private http: HttpClient){}

  public getReport(reports: CaReports, owner: String, inquiryType: String): Observable<any>{
    console.log(reports);
    
    const startDates = reports.startDate.split("/")
    const endDates = reports.endDate.split("/")
    reports.startDate = startDates[2] +"-"+startDates[0] +"-"+startDates[1]+"T00:00:00.876Z";
    reports.endDate =endDates[2] +"-"+endDates[0] +"-"+endDates[1]+"T23:59:50.765Z";
    reports.caseOwner = owner;
    reports.inquiryType = inquiryType;
    
    this.init();
    return this.http.post(`${this.apiServiceUrl}/api/v1/checklists/export`, reports, this.blobOptions);
  }
}
