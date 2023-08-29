import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { AllCategory } from '../../models/icms-models/all-category';

@Injectable({
  providedIn: 'root'
})
export class AllCategoryService {

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

  public getAllCategoriesBySubModuleName(subModuleName: string): Observable<any> {
    this.init();
    const body = {
      "subModuleName" : subModuleName
    }
    return this.http.post<any>(`${this.apiServiceUrl}/allCategory/getAllCategory`, body , this.httpOptions)
  }

  public getAllCategory(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/allCategory/find/${id}`, this.httpOptions)
  }

  public addAllCategory(allCategory: NgForm): Observable<any> {
    this.init();
    return this.http.post<any>(`${this.apiServiceUrl}/allCategory/add`, allCategory, this.httpOptions)
  }

  public updateAllCategory(allCategory: AllCategory): Observable<any> {
    this.init();
    return this.http.put<AllCategory>(`${this.apiServiceUrl}/allCategory/update`, allCategory, this.httpOptions)
  }

  public deleteAllCategory(allCategoryId: number): Observable<any> {
    this.init();
    return this.http.delete<void>(`${this.apiServiceUrl}/allCategory/delete/${allCategoryId}`, this.httpOptions)
  }
}
