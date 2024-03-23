import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Share } from '../../../models/icms-models/share-models/share';
import { ShareStatus } from 'src/app/models/icms-models/share-models/share-status';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
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
  

  public getShares(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/Share/getAll`, this.httpOptions)
  }
  public getShare(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/Share/find/${id}`, this.httpOptions)
  }
  public getShareForBranch(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/Share/findByOrganizationalUnitId/${id}`, this.httpOptions)
  }
  public getShareForDistrict(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/Share/findBySubProcessId/${id}`, this.httpOptions)
  }
  public addShare(dacgm: NgForm): Observable<any> {
    this.init();
    return this.http.post<any>(`${this.apiServiceUrl}/Share/add`, dacgm, this.httpOptions)
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
  public updateDACGM(dacgm: Share): Observable<any>{
    this.init();
    return this.http.put<Share>(`${this.apiServiceUrl}/Share/update`,dacgm , this.httpOptions)
  }
  public escalateDACGM(id: number): Observable<any> {
    this.init();
    return this.http.patch<Share>(`${this.apiServiceUrl}/Share/escalate/${id}`, {}, this.httpOptions);
  }
  public deleteDACGM(dacgmId: number): Observable<any> {
    this.init();
    return this.http.delete<void>(`${this.apiServiceUrl}/Share/delete/${dacgmId}`, this.httpOptions)
  }
  public approveActionPlanDate(id: number, actionPlanDueDate: string): Observable<any> {
    this.init();
    const body = {
      actionPlanDueDate: actionPlanDueDate
    };
    return  this.http.patch<any>(`${this.apiServiceUrl}/DACGM/approveActionPlan/${id}`, body, this.httpOptions)
  }
}
