import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdateHistory } from '../../models/ecx-models/update-history'
import { FileUpdateHistory } from '../../models/ecx-models/file-update-history'

@Injectable({
  providedIn: 'root'
})
export class ECXServiceService {


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

    this.apiServiceUrl = 'http://10.1.125.58:8087';//localStorage.getItem('url_7');

  }

  constructor(private http: HttpClient){}

  public updateFile(): Observable<any>{
    this.init();
    return this.http.get(`${this.apiServiceUrl}/ecx/ecxXml/update`, this.blobOptions);
  }
  public getHistory(batchNumber: number): Observable<any>{
    this.init();
    let body = new UpdateHistory();
    body.batchNumber = batchNumber;
    return this.http.post<any>(`${this.apiServiceUrl}/ecx/history/listHistory`,body, this.httpOptions)
  }

  public getFileHistory(): Observable<any>{
    this.init();
    let body = new FileUpdateHistory();
    return this.http.get<any>(`${this.apiServiceUrl}/ecx/history/listFileHistory`,this.httpOptions)
  }

  public getFileBatch(batchNumber: number): Observable<any>{
    this.init();
    return this.http.get(`${this.apiServiceUrl}/ecx/ecxXml/download/${batchNumber}`, this.blobOptions);
  }
}
