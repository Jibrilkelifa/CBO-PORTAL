import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Message } from '../../models/message';
import{Summary} from '../../models/summary';


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
     this.apiServiceUrl = 'http://10.1.11.145:8080/api/v1/messages';

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
  
    return this.http.get<Message>(`${this.apiServiceUrl}/batch_id`, { headers, params });
  }
  getAllMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiServiceUrl}/getAllMessages`, this.httpOptions)
      .pipe(
        map((response: any) => response as Message[])
      );
  }
  getSummary(): Observable<Summary> {

    return this.http.get<Summary>(`${this.apiServiceUrl}/summary`, this.httpOptions)
    .pipe(
      map((response: any) => response as Summary)
    );
  }
  getGroupMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiServiceUrl}/getGroupMessages`, this.httpOptions)
      .pipe(
        map((response: any) => response as Message[])
      );
  }
  getSingleMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiServiceUrl}/getSingleMessages`, this.httpOptions)
      .pipe(
        map((response: any) => response as Message[])
      );
  }
  getExcelMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiServiceUrl}/getExcelMessages`, this.httpOptions)
      .pipe(
        map((response: any) => response as Message[])
      );
  }

}
