import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllIrregularityService {

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

  public getAllIrregularitiesByCategoryNameAndSubCategoryName(categoryName: string, subCategoryName: string): Observable<any> {
    this.init();
    const body = {
      "categoryName" : categoryName,
      "subCategoryName": subCategoryName
    }
    return this.http.post<any>(`${this.apiServiceUrl}/allIrregularity/getAllIrregularity`, body , this.httpOptions)
  }
}
