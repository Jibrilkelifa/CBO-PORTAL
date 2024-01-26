import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { PepResponseDetail } from '../../models/sanction-models/pep/PepResponseDetail';
import { AdverserResponseDetail } from '../../models/sanction-models/adverser/AdverserResponseDetail';
import { NbeBlackList } from '../../models/sanction-models/nbeblacklist/NbeBlackList';
import { UNindividual_ } from '../../models/sanction-models/UNindividual_';
import { UNentity_ } from 'src/app/models/sanction-models/UNentity_';
import { EU_ } from 'src/app/models/sanction-models/EU_';
import { UK_ } from 'src/app/models/sanction-models/UK_';
import { OFAC_ } from 'src/app/models/sanction-models/OFAC_';
import { unWeeklyIntersection } from 'src/app/models/sanction-models/unWeeklyIntersection';
import { Deliquent_ } from 'src/app/models/sanction-models/Deliquent_';


@Injectable({
  providedIn: 'root'
})
export class SanctionListService {
  private httpOptions;
  private apiServiceUrl;
  private BUI;
  private BUE;
  private BEU;
  private BUK;
  private BNBE;
  private BPEP;
  private BA;
  private BOFAC;
  private BW;
  private DE;
  private AddDeliquentURL;
  private DeleteDeliquentURL;
  private DeleteDeliquentURLByTin;
  private GetDeliquentById;
  private GetDeliquentByTin;
  private AddBusinessContinuityURL;
  private GetBusinessContinuityById;
  private DeleteBusinessContinuityURL;
  private checkDeliquentUpdate;
  private checkBusinessContinuityUpdate;
  private checkUkUpdate;
  private checkEuUpdate;
  private checkPepUpdate;
  private checkAdverserUpdate;
  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };


   this.apiServiceUrl = localStorage.getItem("url_3");
  

    this.BUI = this.apiServiceUrl + "/api/v1/un_all_individuals_optimized"

    this.BUE = this.apiServiceUrl + "/api/v1/un_all_entities_optimized"
    this.BEU = this.apiServiceUrl + "/api/v1/eu_all_optimized"
    this.BUK = this.apiServiceUrl + "/api/v1/uk_all_optimized"
    this.BNBE = this.apiServiceUrl + "/api/v1/business_continuity_list_all_from_db_optimized"
    this.BPEP = this.apiServiceUrl + "/api/v1/pep_all_optimized"
    this.BA = this.apiServiceUrl + "/api/v1/adverser_all_optimized"
    this.BOFAC = this.apiServiceUrl + "/api/v1/ofac_all_optimized"
    this.BW = this.apiServiceUrl + "/api/v1/check"
    this.DE = this.apiServiceUrl + "/api/v1/deliquent_list_all_from_db_optimized"
    this.AddDeliquentURL =this.apiServiceUrl + "/api/v1/create_deliquent_user"
    this.DeleteDeliquentURL = this.apiServiceUrl + "/api/v1/delete_deliquent_user"
    this.DeleteDeliquentURLByTin = this.apiServiceUrl + "/api/v1/delete_deliquent_user_by_tin"
    this.GetDeliquentById = this.apiServiceUrl + "/api/v1/get_deliquent_by_id"
    this.GetDeliquentByTin = this.apiServiceUrl + "/api/v1/get_deliquent_by_tin"
    this.AddBusinessContinuityURL = this.apiServiceUrl + "/api/v1/create_business_continuity_user"
    this.GetBusinessContinuityById = this.apiServiceUrl + "/api/v1/get_business_continuity_by_id"
    this.DeleteBusinessContinuityURL = this.apiServiceUrl + "/api/v1/delete_businessc_user"
    this.checkDeliquentUpdate = this.apiServiceUrl + "/api/v1/checkDeliquentUpdate"
    this.checkBusinessContinuityUpdate = this.apiServiceUrl + "/api/v1/checkBusinessContinuityUpdate"
    this.checkUkUpdate = this.apiServiceUrl + "/api/v1/checkUkUpdate"
    this.checkEuUpdate = this.apiServiceUrl + "/api/v1/checkEuUpdate"
    this.checkPepUpdate = this.apiServiceUrl + "/api/v1/checkPepUpdate"
    this.checkAdverserUpdate = this.apiServiceUrl + "/api/v1/checkAdverserUpdate"
  }

  constructor(private httpClient: HttpClient) {
    

   }

  //abdydidit
  //get all UN individuals
  getAllUnIndividual(): Observable<UNindividual_[]> {
    this.init();
    return this.httpClient.get<UNindividual_[]>(this.BUI);
  }

  getAllUnIndividualByName(searchResult:String): Observable<UNindividual_[]> {
    this.init();
    const url = `http://localhost:8083/api/v1/getUnIndividualByName/${searchResult}`;
    return this.httpClient.get<UNindividual_[]>(url);
  }

  getAllUnEntity(): Observable<UNentity_[]> {
    this.init();
    return this.httpClient.get<UNentity_[]>(this.BUE);
  }
  getAllEu(): Observable<EU_[]> {
    this.init();
    return this.httpClient.get<EU_[]>(this.BEU);
  }

  getAllUk(): Observable<UK_[]> {
    this.init();
    return this.httpClient.get<UK_[]>(this.BUK);
  }

  getAllNbe(): Observable<NbeBlackList[]> {
    this.init();
    return this.httpClient.get<NbeBlackList[]>(this.BNBE);
  }

  getAllPep(): Observable<PepResponseDetail[]> {
    this.init();
    return this.httpClient.get<PepResponseDetail[]>(this.BPEP);
  }
  getAllAdverser(): Observable<AdverserResponseDetail[]> {
    this.init();
    return this.httpClient.get<AdverserResponseDetail[]>(this.BA);
  }
  getAllOfac(): Observable<OFAC_[]> {
    this.init();
    return this.httpClient.get<OFAC_[]>(this.BOFAC);
  }
  getAllDe(): Observable<Deliquent_[]> {
    console.log(this.apiServiceUrl);
    this.init();
    return this.httpClient.get<Deliquent_[]>(this.DE);
  
  }
  getUnWeeklyIntersection(): Observable<unWeeklyIntersection[]> {
    this.init();
    return this.httpClient.get<unWeeklyIntersection[]>(this.BW);
  }
  postDeliquentCustomer(deliquent:Deliquent_): Observable<any>{
    this.init();
    return this.httpClient.post<Deliquent_>(this.AddDeliquentURL,deliquent,this.httpOptions)

  }

  postBusinessContinuityCustomer(nbeblacklist:NbeBlackList): Observable<any>{
    this.init();
    return this.httpClient.post<NbeBlackList>(this.AddBusinessContinuityURL,nbeblacklist,this.httpOptions)

  }
  
  public deleteDeliquentCustomer(customerId: number): Observable<any> {
    this.init();
    return this.httpClient.delete<void>(this.DeleteDeliquentURL+"/"+ customerId, this.httpOptions)
  }
  public deleteDeliquentCustomerByTin(tin: string): Observable<any> {
    this.init();
    return this.httpClient.delete<void>(this.DeleteDeliquentURLByTin+"/"+ tin, this.httpOptions)
  }
  public deleteBusinessContinuityCustomer(customerId: number): Observable<any> {
    this.init();
    return this.httpClient.delete<void>(this.DeleteBusinessContinuityURL+"/"+ customerId, this.httpOptions)
  }


  public getDeliquentCustomerById(id: number): Observable<string> {
    this.init();
    return this.httpClient.get(this.GetDeliquentById + "/" + id, { responseType: 'text' });
}
public getDeliquentCustomerByTin(tin: string): Observable<string> {
  this.init();
  return this.httpClient.get(this.GetDeliquentByTin + "/" + tin, { responseType: 'text' });
}
public getBusinessContinuityById(id: number): Observable<string> {
  this.init();
  return this.httpClient.get(this.GetBusinessContinuityById + "/" + id, { responseType: 'text' });
}
public checkDeliquentUpdateF(): Observable<any> {
  this.init();
  return this.httpClient.get(this.checkDeliquentUpdate);
}
public checkBusinessContinuityUpdateF(): Observable<any> {
  this.init();
  return this.httpClient.get(this.checkBusinessContinuityUpdate);
}
public checkUkUpdateF(): Observable<any> {
  this.init();
  return this.httpClient.get(this.checkUkUpdate);
}

public checkEuUpdateF(): Observable<any> {
  this.init();
  return this.httpClient.get(this.checkEuUpdate);
}

public checkPepUpdateF(): Observable<any> {
  this.init();
  return this.httpClient.get(this.checkPepUpdate);
}
public checkAdverserUpdateF(): Observable<any> {
  this.init();
  return this.httpClient.get(this.checkAdverserUpdate);
}







}
