import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllSubCategoryService {

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

  public getAllSubCategoriesBySubModuleNameAndCategoryName(subModuleName: string, categoryName: string): Observable<any> {
    this.init();
    const body = {
      "subModuleName" : subModuleName,
      "categoryName": categoryName
    }
    return this.http.post<any>(`${this.apiServiceUrl}/allSubCategory/getAllSubCategory`, body , this.httpOptions)
  }

}
