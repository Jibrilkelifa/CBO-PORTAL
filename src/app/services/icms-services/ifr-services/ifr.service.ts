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
        caseStatus: {
          id: fraud.caseStatus.id
        },
        preparedBy: fraud.preparedBy,
        authorizedBy: fraud.authorizedBy,
        fraudCause: fraud.fraudCause,
        fraudAmount: fraud.fraudAmount,
        fraudCategory: {
          id: fraud.fraudCategory.id
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
        organizationalUnit: {
          id: fraud.organizationalUnit.id
        },
      }, this.httpOptions)
  }
  public deleteFraud(fraudId: number): Observable<any> {
    this.init();
    return this.http.delete<void>(`${this.apiServiceUrl}/incidentFraudReport/delete/${fraudId}`, this.httpOptions)
  }
}