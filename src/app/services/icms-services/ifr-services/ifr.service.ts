import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { IFR } from '../../../models/icms-models/ifr-models/ifr';
import { NewFraudComponent } from 'src/app/modules/icms/ifr/new-ifr/new-ifr.component';

@Injectable({
  providedIn: 'root'
})
export class IFRService {

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

  public getFrauds(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/incidentFraudReport/getAll`, this.httpOptions)
  }
  public getSize(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/incidentFraudReport/getSize`, this.httpOptions)
  }
  public getFraud(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/incidentFraudReport/find/${id}`, this.httpOptions)
  }
  public getFraudForBranch(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/incidentFraudReport/findByOrganizationalUnitId/${id}`, this.httpOptions)
  }
  public getFraudForDistrict(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/incidentFraudReport/findBySubProcessId/${id}`, this.httpOptions)
  }
  public getClosed(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/incidentFraudReport/getClosedAndWrittenOffCasesDuringQuarter-list`, this.httpOptions)
  }
  public getNew(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/incidentFraudReport/getNewCasesDuringQuarter-list`, this.httpOptions)
  }
  public getOutstanding(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/incidentFraudReport/getOutstandingCasesDuringQuarter-list`, this.httpOptions)
  }
  public getOutstandingp(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/incidentFraudReport/getOutstandingCasesInPreviousQuarter-list`, this.httpOptions)
  }
  public addFraud(fraud: NgForm): Observable<any> {
    this.init();
    return this.http.post<any>(`${this.apiServiceUrl}/incidentFraudReport/add`, fraud, this.httpOptions)
  }

  public authorizeFraud(id: number): Observable<any> {
    this.init();
    const body = {
      "authorizer": localStorage.getItem('name')
    }
    return this.http.patch<any>(`${this.apiServiceUrl}/incidentFraudReport/authorize/${id}`, body, this.httpOptions)
  }

  public calculateProvision(id: number, provisionHeld: string): Observable<any> {
    this.init();
    const body = {
      provisionHeld: provisionHeld
    };
    return  this.http.patch<any>(`${this.apiServiceUrl}/incidentFraudReport/calculateProvision/${id}`, body, this.httpOptions)
  }

  public updateFraud(fraud: any): Observable<any> {
    this.init();

    return this.http.put<IFR>(`${this.apiServiceUrl}/incidentFraudReport/update`,
     
    {
       
        id: fraud.id,
        caseId: fraud.caseId,
        // provisionHeld: fraud.provisionHeld,
        caseStatus: {
          id: fraud.caseStatus.id
        },
        inCaseOfClosedOrWrittenOff: (fraud.inCaseOfClosedOrWrittenOff == undefined) ? "" : fraud.inCaseOfClosedOrWrittenOff,
        preparedBy: fraud.preparedBy,
        authorizedBy: fraud.authorizedBy,
        fraudCause: fraud.fraudCause,
        fraudAmount: fraud.fraudAmount,
        allCategory: {
          id: fraud.allCategory.id
        },
        otherFraudCategory: fraud.otherFraudCategory,
        fraudType: {
          id: fraud.fraudType.id
        },
        otherFraudType: fraud.otherFraudType,
        fraudOccurrenceDate: fraud.fraudOccurrenceDate,
        fraudDetectionDate: fraud.fraudDetectionDate,
        fraudOccurrencePlace: fraud.fraudOccurrencePlace,
        fraudCommittingTechnique: fraud.fraudCommittingTechnique,
        reasonForDelay: fraud.reasonForDelay,
        reasonForFailedFraudAttempt: fraud.reasonForFailedFraudAttempt,
        amountRecovered: fraud.amountRecovered,
        actionTaken: fraud.actionTaken,
        suspectedFraudsterAddress: fraud.suspectedFraudsterAddress,
        suspectedFraudsterName: fraud.suspectedFraudsterName,
        suspectedFraudsterProfession: {
          id: fraud.suspectedFraudsterProfession.id
        },
        otherSuspectedFraudsterProfession: fraud.otherSuspectedFraudsterProfession,
        otherComment: fraud.otherComment,
        branch: {
          id: fraud.branch.id
        },
        subProcess: {
          id: fraud.subProcess.id
        },
      }, this.httpOptions)
  }
  public deleteFraud(fraudId: number): Observable<any> {
    this.init();
    return this.http.delete<void>(`${this.apiServiceUrl}/incidentFraudReport/delete/${fraudId}`, this.httpOptions)
  }
}
