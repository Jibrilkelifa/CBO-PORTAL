import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { NgForm } from '@angular/forms';
import { IFR } from '../../../models/icms-models/ifr-models/ifr';
import { NewFraudComponent } from 'src/app/modules/icms/ifr/new-ifr/new-ifr.component';

@Injectable({
  providedIn: 'root'
})
export class IFRService {

  private httpOptions;
  private apiServiceUrl;
  private formDataOptions;
  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };

    this.formDataOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }),
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
  // public getImage(id: number): Observable<any> {
  //   this.init();
  //   return this.http.get<any>(`${this.apiServiceUrl}/incidentFraudReport/images/${id}`, this.httpOptions)
  // }
  // public getImage(id: number): Observable<Blob> {
  //   this.init();
  //   return this.http.get(`${this.apiServiceUrl}/incidentFraudReport/images/${id}`, {
  //     ...this.httpOptions,
  //     responseType: 'arraybuffer' // Set the response type to 'arraybuffer'
  //   }).pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       console.error('Error occurred while fetching the image:', error);
  //       return throwError('Failed to fetch the image. Please try again later.');
  //     }),
  //     map((response: ArrayBuffer) => {
  //       return new Blob([response], { type: 'image/jpeg' }); // Create a Blob from the ArrayBuffer
  //     })
  //   );
  // }
  public getImage(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/incidentFraudReport/images/${id}`, {
      ...this.httpOptions,
      observe: 'response', // Add this line to observe the full response
      responseType: 'blob' // Set the response type to 'blob'
    }).pipe(
      map((response: HttpResponse<Blob>) => {
        const headers = response.headers;
        const contentType = headers.get('content-type') || '';
        const fileData = response.body;
  
        return {
          contentType,
          fileData
        };
      })
    );
  }

  // Your existing service code




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
  // public addFraud(fraud: FormData): Observable<any> {
  //   this.init();
  //   return this.http.post<any>(`${this.apiServiceUrl}/incidentFraudReport/add`, fraud, this.httpOptions)
  // }
  
  public addFraud(fraud: FormData): Observable<any> {
    this.init();
    return this.http.post<any>(`${this.apiServiceUrl}/incidentFraudReport/add`, fraud, this.formDataOptions);
  }
//   public addFraud(fraud: IFR): Observable<any> {
//   this.init();
//   const formData = new FormData();
//   formData.append('suspectedFraudsterName', fraud.suspectedFraudsterName);
//   formData.append('suspectedFraudsterAddress', fraud.suspectedFraudsterAddress);
//   formData.append('fraudTypeId', fraud.fraudType.id.toString());
//   formData.append('caseStatusId', fraud.caseStatus.id.toString());
//   formData.append('suspectedFraudsterProfessionId', fraud.suspectedFraudsterProfession.id.toString());
//   formData.append('allCategoryId', fraud.allCategory.id.toString());
//   formData.append('fraudCause', fraud.fraudCause);
//   formData.append('caseId', fraud.caseId);
//   formData.append('preparedBy', fraud.preparedBy);
//   formData.append('authorizedBy', fraud.authorizedBy);
//   formData.append('authorizationTimeStamp', fraud.authorizationTimeStamp);
//   formData.append('fraudAmount', fraud.fraudAmount);
//   formData.append('provisionHeld', fraud.provisionHeld);
//   formData.append('fraudOccurrenceDate', fraud.fraudOccurrenceDate);
//   formData.append('fraudDetectionDate', fraud.fraudDetectionDate);
//   formData.append('reasonForDelay', fraud.reasonForDelay);
//   formData.append('fraudOccurrencePlace', fraud.fraudOccurrencePlace);
//   // Append other fields here

//   return this.http.post<any>(`${this.apiServiceUrl}/incidentFraudReport/add`, formData, this.formDataOptions);
// }
  // public addFraud(formData: FormData): Observable<any> {
  //   this.init();
  //   return this.http.post<any>(`${this.apiServiceUrl}/incidentFraudReport/add`, formData, {
  //     headers: this.formDataOptions.headers
  //   });
  // }
  public uploadWrittenOff(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('writtenOff', file, file.name);
    return this.http.post<any>(`${this.apiServiceUrl}/incidentFraudReport/upload`, formData);
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
  public updateFraud(fraud: FormData): Observable<any>{
    this.init();
    return this.http.put<IFR>(`${this.apiServiceUrl}/incidentFraudReport/update`, fraud, this.formDataOptions)
  }
  public deleteFraud(fraudId: number): Observable<any> {
    this.init();
    return this.http.delete<void>(`${this.apiServiceUrl}/incidentFraudReport/delete/${fraudId}`, this.httpOptions)
  }
}
