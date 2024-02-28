import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Step} from '../models/Step'
import { CobIssueDTO } from '../models/cobIssueDTO';

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
  public addCobDTO(CobIssueDTO :CobIssueDTO):Observable<CobIssueDTO>{

    
    return this.http.post<CobIssueDTO>(`${this.baseUrl}/register`,CobIssueDTO);


  }
 
  public listCopiedSteps():Observable<any>{
   
    return this.http.get<any>(`${this.stepUrl}/getAll`);


  }

  public copyRecord(step :Step):Observable<any>{
  
    
   return this.http.post<any>(`${this.stepUrl}/recorder`,step);


  }



}
