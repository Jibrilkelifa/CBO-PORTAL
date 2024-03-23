import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { CADailyCheckList } from 'src/app/models/cadcl-models/ca-daily-checklist';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {


  private httpOptions;
  private apiServiceUrl;
  private formDataOptions;
  private blobOptions;
  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };

    this.formDataOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }),
    };

    this.apiServiceUrl = 'http://10.1.125.58:8103';//localStorage.getItem('url_7');

    this.blobOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }),
      responseType: 'blob'
    };
  }


  constructor(private http: HttpClient){}
  public getCaDailyChecklists(): Observable<any>{
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/api/v1/checklists`, this.httpOptions)
  }

  public getCaDailyChecklist(id: number): Observable<any>{
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/api/v1/checklists/${id}`, this.httpOptions)
  }

  public closeCaDailyChecklist(id: number): Observable<any>{
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/api/v1/checklists/close/${id}`, this.httpOptions)
  }

  public addCaDailyChecklist(checkList: FormData): Observable<any>{
    this.init();
    return this.http.post(`${this.apiServiceUrl}/api/v1/checklists`, checkList, this.formDataOptions)
  }
  public updateCaDailyChecklist(account: CADailyCheckList): Observable<any>{
    this.init();
    return this.http.put(`${this.apiServiceUrl}/api/v1/checklists`, account, this.httpOptions)
  }

  public replayCaDailyChecklist(replayCL: FormData): Observable<any>{
    this.init();
    return this.http.post(`${this.apiServiceUrl}/api/v1/checklists/reply`, replayCL, this.formDataOptions)
  }

  public rejectBranchRespose(id: number, rejectionReason: String): Observable<any>{
    this.init();
    const formData = new FormData();
    formData.append("rejectionReason", rejectionReason.toString())
    return this.http.post(`${this.apiServiceUrl}/api/v1/checklists/reply/reject/${id}`,formData, this.formDataOptions)
  }

  public addBranchToCheklist(id: number, branchId: String): Observable<any>{
    this.init();
    return this.http.get(`${this.apiServiceUrl}/api/v1/checklists/reply/add-branch/${id}?branchId=${branchId}`, this.httpOptions)
  }

  public removeBranchRequest(id: number): Observable<any>{
    this.init();
    return this.http.post(`${this.apiServiceUrl}/api/v1/checklists/reply/remove/${id}`, this.httpOptions)
  }

  public deleteCheklistFile(id: number, fileLink: String): Observable<any>{
    this.init();
    return this.http.get(`${this.apiServiceUrl}/api/v1/checklists/file/remove/${id}?fileLink=${fileLink}`, this.httpOptions)
  }

  public addCheklistFile(id: number, file: FormData): Observable<any>{
    this.init();
    return this.http.post(`${this.apiServiceUrl}/api/v1/checklists/file/add/${id}`, file, this.formDataOptions)
  }

  public deleteReplyCheklistFile(id: number, fileLink: String): Observable<any>{
    this.init();
    return this.http.get(`${this.apiServiceUrl}/api/v1/checklists/reply/file/remove/${id}?fileLink=${fileLink}`, this.httpOptions)
  }

  public addReplyCheklistFile(id: number, file: FormData): Observable<any>{
    this.init();
    return this.http.post(`${this.apiServiceUrl}/api/v1/checklists/reply/file/add/${id}`, file, this.formDataOptions)
  }

  public acceptBranchRespose(id: number): Observable<any>{
    this.init();
    return this.http.get(`${this.apiServiceUrl}/api/v1/checklists/reply/accept/${id}`, this.httpOptions)
  }

  public updateReplayCaDailyChecklist(replayCL: FormData): Observable<any>{
    this.init();
    return this.http.post(`${this.apiServiceUrl}/api/v1/checklists/reply/update`, replayCL, this.formDataOptions)
  }

  public getFile(link: String): Observable<any> {
    this.init();
    return this.http.get(`${this.apiServiceUrl}/api/v1/checklists/files?link=${link}`, this.blobOptions)
  }
}