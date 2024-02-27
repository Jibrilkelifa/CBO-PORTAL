import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CobDTO} from '../models/CobIssueDTO';
import {Step} from '../models/stepDTO'

@Injectable({
  providedIn: 'root'
})
export class CitIntegrationService {


  private baseUrl="http://10.1.125.58:8102/cobIssue";
  private stepUrl="http://10.1.125.58:8102/cobSteps";
  constructor(private http:HttpClient) { }
  public getListCobDTO():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/getAll`);

  }
  public addCobDTO(cobDTO :CobDTO):Observable<CobDTO>{

    
    return this.http.post<CobDTO>(`${this.baseUrl}/register`,cobDTO);


  }
  public updateEmployee(CobDTO :CobDTO):Observable<CobDTO>{
    return this.http.put<CobDTO>(`${this.baseUrl}/update`,CobDTO);


  }
  public listCopiedSteps():Observable<any>{
    return this.http.get<any>(`${this.stepUrl}/getAll`);


  }
  public findEmployee(id:number):Observable<CobDTO>{
    return this.http.get<CobDTO>(`${this.baseUrl}/find${id}`);


  }
  public copyRecord(step :Step):Observable<any>{
  
    
   return this.http.post<any>(`${this.stepUrl}/recorder`,step);


  }



}
