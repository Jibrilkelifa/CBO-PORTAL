import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ProductType } from '../../../models/icms-models/cipm-models/Product-type';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {
  private httpOptions;
  private apiServiceUrl;
  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };
    // this.apiServiceUrl = localStorage.getItem('url_4');
      this.apiServiceUrl = "http://localhost:8084"

  }
  constructor(private http: HttpClient) { }

  public getProductTypes(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/ProductType/all`, this.httpOptions)
  }
  public getProductType(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/ProductType/find/${id}`, this.httpOptions)

  }
  public addProductType(pt: NgForm): Observable<any> {
    this.init();
    return this.http.post<any>(`${this.apiServiceUrl}/ProductType/add`, pt, this.httpOptions)
  }
  public updateProductType(pt: ProductType): Observable<any> {
    this.init();

    return this.http.put<ProductType>(`${this.apiServiceUrl}/ProductType/update`, pt, this.httpOptions)
  }
  public deleteProductType(ptId: number): Observable<any> {
    this.init();
    return this.http.delete<void>(`${this.apiServiceUrl}/PT/delete/${ptId}`, this.httpOptions)
  }
}
