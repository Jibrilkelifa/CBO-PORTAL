import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Name } from '../../../models/sanction-models/uk/Name';
import { ResponseDetail } from '../../../models/sanction-models/uk/ResponseDetail';
import { NameAlias } from '../../../models/sanction-models/eu/NameAlias';
import { ModalService } from '../../../services/cc-services/modal.service';
import { SanctionListService } from '../../../services/cc-services/sanction-list.service';
import { DataModel } from '../../../models/sanction-models/DataModel';
import { UNSanction } from '../../../models/sanction-models/UNSaction';
import { PepResponseDetail } from '../../../models/sanction-models/pep/PepResponseDetail';
import { UnIndividualResponseDetail } from '../../../models/sanction-models/un/UnIndividualResponse';
import { AdverserResponseDetail } from '../../../models/sanction-models/adverser/AdverserResponseDetail';
import { NbeBlackList } from '../../../models/sanction-models/nbeblacklist/NbeBlackList';
import { UNindividual_ } from 'src/app/models/sanction-models/UNindividual_';
import { UNentity_ } from 'src/app/models/sanction-models/UNentity_';
import { EU_ } from 'src/app/models/sanction-models/EU_';
import { UK_ } from 'src/app/models/sanction-models/UK_';
import { OFAC_ } from 'src/app/models/sanction-models/OFAC_';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import Fuse from 'fuse.js'
import { Uisr } from '../../../models/sanction-models/Uisr';
import { Deliquent_ } from 'src/app/models/sanction-models/Deliquent_';
import { Dutch } from 'src/app/models/sanction-models/Dutch'
// import { Listener } from '../../../services/cc-services/Listener';
import { Client } from '@stomp/stompjs';

import { interval } from 'rxjs';
import { repeat } from 'rxjs/operators';
import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';


@Component({
  selector: 'app-accordions',
  templateUrl: './sanction-table.component.html',
  styleUrls: ['./sanction-table.component.scss']
})
export class SanctionTableComponent implements OnInit {



  //asro stands for all search results of
  asro_all_un_individual: any[] = [];
  asro_all_un_entities: any[] = [];
  asro_all_eu_sanction: any[] = [];
  asro_all_uk_sanction: any[] = [];
  asro_all_nbe_sanction: any[] = [];
  asro_all_pep_sanction: any[] = [];
  asro_all_adverser_sanction: any[] = [];
  asro_all_ofac_sanction: any[] = [];
  asro_all_deliquent_sanction: any[] = [];
  asro_all_dutch_sanction: any[] = [];











  // for modal purpose
  displayDialog = false;
  selectedData: any;


  private client: Client;
  message: string;
  unsubscribe$: any;

  private stompClient: Stomp.Client;
Math: any;

  showDialog(data: any) {
    this.selectedData = data;
    this.displayDialog = true;
  }

  get selectedDataProperties() {
    if (!this.selectedData) {
      return [];
    }
    return Object.entries(this.selectedData).map(([property, value]) => ({ property, value }));
  }

  isObject(value: any) {
    return typeof value === 'object' && value !== null;
  }


  fullName: string = '';
  nameList: Name[];
  len: number;
  detailRetrieved: boolean = false;
  responseDetail: ResponseDetail;
  nameAliasList!: NameAlias[];
  visible: boolean;


  // private listener: Listener;

  constructor(private router: Router, public modalService: ModalService, private sanctionListService: SanctionListService, private primengConfig: PrimeNGConfig, private dbService: NgxIndexedDBService, private indexedDBService: NgxIndexedDBService) {

  }



  sendMessage(): void {
    this.client.publish({ destination: '/app/message', body: this.message });
    this.message = '';
  }
  ngOnInit(): void {

    this.primengConfig.ripple = true;



  }









  title = 'rms';

  public logout() {

    this.router.navigate(['/'])

  }
  reset() { /* TODO document why this method 'reset' is empty */ }
  dataset: [];
  public sanctionData = [];
  searchValue: string = '';
  names: Name[];
  dataModel: DataModel;
  dataModelList: DataModel[];






  getSearchResult(fullName: string) {
    console.log("here i am to wor "+fullName)
    if (fullName) {
      this.sanctionListService.searchUnIndividual(fullName).subscribe(
        data => this.asro_all_un_individual = data,
        error => console.error('Error fetching UN Individual results:', error)
      );

      this.sanctionListService.searchUnEntity(fullName).subscribe(
        data => this.asro_all_un_entities = data,
        error => console.error('Error fetching UN Entities results:', error)
      );

      this.sanctionListService.searchUk(fullName).subscribe(
        data => this.asro_all_uk_sanction = data,
        error => console.error('Error fetching Dutch results:', error)
      );

      this.sanctionListService.searchEu(fullName).subscribe(
        data => this.asro_all_eu_sanction = data,
        error => console.error('Error fetching Deliquent results:', error)
      );

      this.sanctionListService.searchBc(fullName).subscribe(
        data => this.asro_all_nbe_sanction = data,
        error => console.error('Error fetching PEP results:', error)
      );

      this.sanctionListService.searchPep(fullName).subscribe(
        data => this.asro_all_pep_sanction = data,
        error => console.error('Error fetching Adverser results:', error)
      );

      this.sanctionListService.searchAdverser(fullName).subscribe(
        data => this.asro_all_adverser_sanction = data,
        error => console.error('Error fetching Business Continuity results:', error)
      );
      this.sanctionListService.searchOfac(fullName).subscribe(
        data => this.asro_all_ofac_sanction = data,
        error => console.error('Error fetching Business Continuity results:', error)
      );
      this.sanctionListService.searchDeliquent(fullName).subscribe(
        data => this.asro_all_deliquent_sanction = data,
        error => console.error('Error fetching Business Continuity results:', error)
      );
      this.sanctionListService.searchDutch(fullName).subscribe(
        data => this.asro_all_dutch_sanction = data,
        error => console.error('Error fetching Business Continuity results:', error)
      );
    }
  }





}







