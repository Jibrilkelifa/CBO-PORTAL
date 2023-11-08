import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { DACGM } from '../../../models/icms-models/dacgm-models/dacgm';

@Injectable({
  providedIn: 'root'
})
export class DACGMService {
  private httpOptions;
  private apiServiceUrl;
  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };
    this.apiServiceUrl = localStorage.getItem('url_4');
  }

  constructor(private http: HttpClient) { }
  public getSize(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/DACGM/getSize`, this.httpOptions)
  }
  

  public getDACGMs(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/DACGM/getAll`, this.httpOptions)
  }
  public getDACGM(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/DACGM/find/${id}`, this.httpOptions)
  }
  public getDACGMForBranch(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/DACGM/findByOrganizationalUnitId/${id}`, this.httpOptions)
  }
  public getDACGMForDistrict(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/DACGM/findBySubProcessId/${id}`, this.httpOptions)
  }
  public addDACGM(dacgm: NgForm): Observable<any> {
    this.init();
    return this.http.post<any>(`${this.apiServiceUrl}/DACGM/add`, dacgm, this.httpOptions)
  }
  // public updateDACGM(dacgm: DACGM): Observable<any> {
  //   this.init();
  //   return this.http.put<DACGM>(`${this.apiServiceUrl}/DACGM/update`, 
  //   {id: dacgm.id,
  //   accountName: dacgm.accountName,
  //   accountNumber: dacgm.accountNumber,
  //   amountInvolved:dacgm.amountInvolved,
  //   actionPlanDuedate:dacgm.actionPlanDueDate,
  //   caseId:dacgm.caseId,
  //   date:dacgm.date,
  //   activityStatus: {
  //     id: dacgm.activityStatus.id
  //   },
  //   // category: {
  //   //   id: dacgm.category.id
  //   // },
  //   // subCategory: {
  //   //   id: dacgm.subCayegory.id
  //   // },
  //   otherIrregularity: (dacgm.otherIrregularity == undefined) ? "" : dacgm.otherIrregularity,
  
  //  responsiblePerson:dacgm.responsiblePerson,
  //   branch: {
  //     id: dacgm.branch.id
  //   },
  //   subProcess: {
  //     id: dacgm.subProcess.id
  //   }
  // }, this.httpOptions)

  // }
  // public approveDACGM(id: number): Observable<any> {
  //   this.init();
  //   return this.http.put<DACGM>(`${this.apiServiceUrl}/DACGM/approve/${id}`, this.httpOptions)
  // }
  public updateDACGM(dacgm: DACGM): Observable<any>{
    this.init();
    return this.http.put<DACGM>(`${this.apiServiceUrl}/DACGM/update`,dacgm , this.httpOptions)
  }
  public escalateDACGM(id: number): Observable<any> {
    this.init();
    return this.http.patch<DACGM>(`${this.apiServiceUrl}/DACGM/escalate/${id}`, {}, this.httpOptions);
  }
  public deleteDACGM(dacgmId: number): Observable<any> {
    this.init();
    return this.http.delete<void>(`${this.apiServiceUrl}/DACGM/delete/${dacgmId}`, this.httpOptions)
  }
  public approveActionPlanDate(id: number, actionPlanDueDate: string): Observable<any> {
    this.init();
    const body = {
      actionPlanDueDate: actionPlanDueDate
    };
    return  this.http.patch<any>(`${this.apiServiceUrl}/DACGM/approveActionPlan/${id}`, body, this.httpOptions)
  }
}
