import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Message } from '../../models/message';


@Injectable({
  providedIn: 'root'
})
export class SingleService {

  private httpOptions;
  private apiServiceUrl;
  private httpOpForm;
   baseUrl: any;
  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };
    this.httpOpForm = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };
    // this.apiServiceUrl = localStorage.getItem('url_4');
     this.apiServiceUrl = 'http://10.1.11.145:8080/api/v1/messages';
    //this.baseUrl = 'http://localhost:8088/messages';
  }

  constructor(private http: HttpClient) {
    this.init();
   }

   sendMessage(message: any) {
    return this.http.post<any>(`${this.apiServiceUrl}/addSingleMessage`, message,this.httpOptions);
  }

  sendMessageByBatch(batchId: number) {
    return this.http.get<any>(`${this.apiServiceUrl}/batch_id?id=${batchId}`,this.httpOptions);
  }

}
