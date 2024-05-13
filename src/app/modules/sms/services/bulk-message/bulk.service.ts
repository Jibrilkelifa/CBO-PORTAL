import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Message } from '../../models/message';
import{Summary} from '../../models/summary';
import { Msg_to_sent } from '../../models/msg_to_sent';


@Injectable({
  providedIn: 'root'
})
export class BulkService {

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
     //this.apiServiceUrl = 'http://localhost:8088/messages';
     this.apiServiceUrl = 'http://10.1.11.145:8092/api/v1';

  }

  constructor(private http: HttpClient) {
    this.init();
   }


   uploadFile(formData: FormData, sender: string): Observable<any> {
    formData.append('sender', sender);
  
    return this.http.post<any>(`${this.apiServiceUrl}/uploadfile`, formData, this.httpOpForm);
  }

  //sendMessageByBatch(batchId: number): Observable<Message> {
  //   const params = { id: String(batchId) }; 
  //   return this.http.get<Message>(`${this.apiServiceUrl}/batch_id`, { params });
  // }
  
  sendMessageByBatch(batchId: number): Observable<Message> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    });
  
    const params = { id: String(batchId) };
  
    return this.http.get<Message>(`${this.apiServiceUrl}/messages/batch_id`, { headers, params });
  }
  getAllMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiServiceUrl}/messages/getAllMessages`, this.httpOptions)
      .pipe(
        map((response: any) => response as Message[])
      );
  }
  getCustomerMessages(): Observable<Msg_to_sent[]> {
    return this.http.get<Message[]>(`${this.apiServiceUrl}/message_to_sents/get_message_to_sent`, this.httpOptions)
      .pipe(
        map((response: any) => response as Msg_to_sent[])
      );
  }
  authorizeMessage(messageId: number): Observable<any> {

    return this.http.post<any>(`${this.apiServiceUrl}/message_to_sents/auth_message_to_sent`, messageId ,this.httpOptions) 
  }
  
  getSummary(): Observable<Summary> {

    return this.http.get<Summary>(`${this.apiServiceUrl}/messages/summary`, this.httpOptions)
    .pipe(
      map((response: any) => response as Summary)
    );
  }
  getGroupMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiServiceUrl}/messages/getGroupMessages`, this.httpOptions)
      .pipe(
        map((response: any) => response as Message[])
      );
  }
  getSingleMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiServiceUrl}/messages/getSingleMessages`, this.httpOptions)
      .pipe(
        map((response: any) => response as Message[])
      );
  }
  getExcelMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiServiceUrl}/messages/getExcelMessages`, this.httpOptions)
      .pipe(
        map((response: any) => response as Message[])
      );
  }

}
