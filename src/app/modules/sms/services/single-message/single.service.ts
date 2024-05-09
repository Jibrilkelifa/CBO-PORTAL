import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Message } from '../../models/message';
import { Msg_to_sent } from '../../models/msg_to_sent';


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
     this.apiServiceUrl = 'http://10.1.11.145:8092/api/v1';
    //this.baseUrl = 'http://localhost:8088/messages';
  }

  constructor(private http: HttpClient) {
    this.init();
   }

   sendMessage(message: any) {
    return this.http.post<any>(`${this.apiServiceUrl}/messages/addSingleMessage`, message,this.httpOptions);
  }

  sendMessageByBatch(batchId: number) {
    return this.http.get<any>(`${this.apiServiceUrl}/messages/batch_id?id=${batchId}`,this.httpOptions);
  }
  fetchCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiServiceUrl}/message_to_sents/get_categories`);
  }

  saveeMessage(msg_to_sent: any): Observable<any> {
    return this.http.post<any>(`${this.apiServiceUrl}/message_to_sents/message_to_sent`, msg_to_sent, this.httpOptions);
  }


}
