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

  //abdydidit
  all_un_individual!: UNindividual_[];
  all_un_entities!: UNentity_[];
  all_eu_sanction!: EU_[];
  all_uk_sanction!: UK_[];
  all_nbe_sanction!: NbeBlackList[];
  all_pep_sanction!: PepResponseDetail[];
  all_adverser_sanction!: AdverserResponseDetail[];
  all_ofac_sanction!: OFAC_[];
  all_deliquent_sanction!: Deliquent_[];

  //asro stands for all search results of
  asro_all_un_individual: Array<UNindividual_> = [];
  asro_all_un_entities!: Array<UNentity_>;
  asro_all_eu_sanction!: Array<EU_>;
  asro_all_uk_sanction!: Array<UK_>;
  asro_all_nbe_sanction!: Array<NbeBlackList>;
  asro_all_pep_sanction!: Array<PepResponseDetail>
  asro_all_adverser_sanction!: Array<AdverserResponseDetail>;
  asro_all_ofac_sanction!: Array<OFAC_>;
  asro_all_deliquent_sanction!: Array<Deliquent_>;
  //first two name second sr search result
  uisr: Array<Uisr> = [];
  uesr!: Array<any>;
  eusr!: Array<any>;
  uksr!: Array<any>;
  nbesr!: Array<any>;
  pesr!: Array<any>;
  adsr!: Array<any>;
  ofsr!: Array<any>;
  desr!: Array<any>;

  //socres for each asros
  aaui_score;
  aaue_score;
  aaes_score;
  aaus_score;
  aans_score;
  aaps_score;
  aaas_score;
  aaos_score;
  aads_score;






  allUnIndividual: UNindividual_[] = [];

  // for modal purpose
  displayDialog = false;
  selectedData: any;


  private client: Client;
  message: string;
  unsubscribe$: any;

  private stompClient: Stomp.Client;

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
  //abdydiditends

  fullName: string = '';
  nameList: Name[];
  len: number;
  detailRetrieved: boolean = false;
  responseDetail: ResponseDetail;
  nameAliasList!: NameAlias[];
  visible: boolean;
  loadingunindividual = true;
  loadingunentity = true;
  loadingeusanction = true;
  loadinguksanction = true;
  loadingnbe = true;
  loadingpep = true;
  loadingadverser = true;
  loadingofac = true;
  loadingde = true;

  // private listener: Listener;

  constructor(private router: Router, public modalService: ModalService, private sanctionListService: SanctionListService, private primengConfig: PrimeNGConfig, private dbService: NgxIndexedDBService, private indexedDBService: NgxIndexedDBService) {

  }



  sendMessage(): void {
    this.client.publish({ destination: '/app/message', body: this.message });
    this.message = '';
  }
  ngOnInit(): void {

    this.primengConfig.ripple = true;
    //abdydiditstarts
    this.loadingunindividual = true;
    this.loadingunentity = true;
    this.loadingeusanction = true;
    this.loadinguksanction = true;
    this.loadingnbe = true;
    this.loadingpep = true;
    this.loadingadverser = true;
    this.loadingofac = true;
    this.loadingde = true;

    this.fetchUnIndividual()
    this.fetchUnEntity()
    this.fetchEuSanction()
    this.fetchUkSanction()
    this.fetchNbeSanction()
    this.fetchPepSanction()
    this.fetchAdverserSanction()
    this.fetchOfacSanction()
    this.fetchDeSanction()
    //abdydiditends
  }



  //abdydiditstarts
  fetchUnIndividual() {

    //unindividual
    this.dbService.count('un-individual').subscribe(
      count => {
        if (count === 0) {
          // Object store is empty, add data


          this.sanctionListService.getAllUnIndividual().subscribe(data => {
            this.all_un_individual = data; // assign the data returned by the API to a local variable
            this.loadingunindividual = false;

            this.dbService.bulkAdd('un-individual', this.all_un_individual).subscribe(
              () => {


              },
              error => {

              }
            );
          });
        } else {
          // Object store is not empty

          this.loadingunindividual = false;

          this.dbService.getAll('un-individual').subscribe(
            (data: UNindividual_[]) => {
              this.all_un_individual = data;

            },
            error => {


            }
          );
        }
      },
      error => {


      }
    );
    //unindividual

  }
  fetchUnEntity() {

    //unentity
    this.dbService.count('un-entity').subscribe(
      count => {
        if (count === 0) {
          // Object store is empty, add data


          this.sanctionListService.getAllUnEntity().subscribe(data => {
            this.all_un_entities = data; // assign the data returned by the API to a local variable
            this.loadingunentity = false;

            this.dbService.bulkAdd('un-entity', this.all_un_entities).subscribe(
              () => {


              },
              error => {

              }
            );
          });
        } else {
          // Object store is not empty
          this.loadingunentity = false;

          this.dbService.getAll('un-entity').subscribe(
            (data: UNentity_[]) => {
              this.all_un_entities = data;

            },
            error => {


            }
          );
        }
      },
      error => {


      }
    );
    //unentity

  }
  fetchEuSanction() {

    //eusanction
    this.dbService.count('eu-sanction').subscribe(
      count => {
        if (count === 0) {
          // Object store is empty, add data


          this.sanctionListService.getAllEu().subscribe(data => {
            this.all_eu_sanction = data;
            this.loadingeusanction = false;


            this.dbService.bulkAdd('eu-sanction', this.all_eu_sanction).subscribe(
              () => {

              },
              error => {
                console.log("Error:", error);

              }
            );
          });

                                 //get version of eu and add it to eu check
                                 this.sanctionListService.checkEuUpdateF().subscribe(
                                  datad => {
                                    console.log(datad + " eu  check from db");
                                    this.dbService.getByID('eu-check', 1).subscribe(
                                      (existingData: any) => {
                                        if (existingData) {
                                          existingData.value = datad;
                                          this.dbService.update('eu-check', existingData).subscribe(
                                            () => {
                                              console.log("updated eu check ");
                                            },
                                            error => {
                                              console.error(error);
                                            }
                                          );
                                        } else {
                                          this.dbService.add('eu-check', { id: 1, name: 'updateCheck', value: datad }).subscribe(
                                            () => {
                                              console.log(" added  'eu-check' ");
                                            },
                                            error => {
                                              console.error(error);
                                            }
                                          );
                                        }
                                      },
                                      error => {
                                        console.error(error);
                                      }
                                    );
                                  },
                                  error => {
                                    console.error(error);
                                  }
                                );



        } else {
          // Object store is not empty
          this.loadingeusanction = false;

          this.dbService.getAll('eu-sanction').subscribe(
            (data: EU_[]) => {
              this.all_eu_sanction = data;

            },
            error => {
              console.log("Error:", error);


            }
          );
        }
      },
      error => {
        console.log("Error:", error);

      }
    );
    //eusanction

  }
  fetchUkSanction() {

    //uksanction
    this.dbService.count('uk-sanction').subscribe(
      count => {
        if (count === 0) {
          // Object store is empty, add data


          this.sanctionListService.getAllUk().subscribe(data => {
            this.all_uk_sanction = data;
            this.loadinguksanction = false;


            this.dbService.bulkAdd('uk-sanction', this.all_uk_sanction).subscribe(
              () => {

                window.onerror = function (message, source, lineno, colno, error) {

                }

              },
              error => {


              }
            );
          });
                              //get version of uk and add it to uk check
                              this.sanctionListService.checkUkUpdateF().subscribe(
                                datad => {
                                  console.log(datad + " uk  check from db");
                                  this.dbService.getByID('uk-check', 1).subscribe(
                                    (existingData: any) => {
                                      if (existingData) {
                                        existingData.value = datad;
                                        this.dbService.update('uk-check', existingData).subscribe(
                                          () => {
                                            console.log("updated uk check ");
                                          },
                                          error => {
                                            console.error(error);
                                          }
                                        );
                                      } else {
                                        this.dbService.add('uk-check', { id: 1, name: 'updateCheck', value: datad }).subscribe(
                                          () => {
                                            console.log(" added  'uk-check' ");
                                          },
                                          error => {
                                            console.error(error);
                                          }
                                        );
                                      }
                                    },
                                    error => {
                                      console.error(error);
                                    }
                                  );
                                },
                                error => {
                                  console.error(error);
                                }
                              );
        } else {
          // Object store is not empty
          this.loadinguksanction = false;

          this.dbService.getAll('uk-sanction').subscribe(
            (data: UK_[]) => {
              this.all_uk_sanction = data;

            },
            error => {


            }
          );
        }
      },
      error => {


      }
    );
    //uksanction


  }
  fetchNbeSanction() {

    //nbesanction
    this.dbService.count('nbe-sanction').subscribe(
      count => {
        if (count === 0) {
          // Object store is empty, add data



          this.sanctionListService.getAllNbe().subscribe(data => {
            this.all_nbe_sanction = data;
            this.loadingnbe = false;



            this.dbService.bulkAdd('nbe-sanction', this.all_nbe_sanction).subscribe(
              () => {


              },
              error => {

              }
            );
          });

                    //get version of bc and add it to bc check
                    this.sanctionListService.checkBusinessContinuityUpdateF().subscribe(
                      datad => {
                        console.log(datad + " bc Update check from db");
                        this.dbService.getByID('bc-check', 1).subscribe(
                          (existingData: any) => {
                            if (existingData) {
                              existingData.value = datad;
                              this.dbService.update('bc-check', existingData).subscribe(
                                () => {
                                  console.log("updated bc ");
                                },
                                error => {
                                  console.error(error);
                                }
                              );
                            } else {
                              this.dbService.add('bc-check', { id: 1, name: 'updateCheck', value: datad }).subscribe(
                                () => {
                                  console.log(" added  'bc-check' ");
                                },
                                error => {
                                  console.error(error);
                                }
                              );
                            }
                          },
                          error => {
                            console.error(error);
                          }
                        );
                      },
                      error => {
                        console.error(error);
                      }
                    );
        } else {
          // Object store is not empty
          this.loadingnbe = false;


          this.dbService.getAll('nbe-sanction').subscribe(
            (data: NbeBlackList[]) => {
              this.all_nbe_sanction = data;

            },
            error => {


            }
          );
        }
      },
      error => {


      }
    );
    //nbesanction

  }
  fetchPepSanction() {

    //pepsanction
    this.dbService.count('pep-sanction').subscribe(
      count => {
        if (count === 0) {
          // Object store is empty, add data


          this.sanctionListService.getAllPep().subscribe(data => {
            this.all_pep_sanction = data;
            this.loadingpep = false;

            this.dbService.bulkAdd('pep-sanction', this.all_pep_sanction).subscribe(
              () => {

              },
              error => {

              }
            );
          });
             //get version of pep and add it to pep check
             this.sanctionListService.checkPepUpdateF().subscribe(
              datad => {
                console.log(datad + " pep Update check from db");
                this.dbService.getByID('pep-check', 1).subscribe(
                  (existingData: any) => {
                    if (existingData) {
                      existingData.value = datad;
                      this.dbService.update('pep-check', existingData).subscribe(
                        () => {
                          console.log("updated pep");
                        },
                        error => {
                          console.error(error);
                        }
                      );
                    } else {
                      this.dbService.add('pep-check', { id: 1, name: 'updateCheck', value: datad }).subscribe(
                        () => {
                          console.log(" added  'pep-check' ");
                        },
                        error => {
                          console.error(error);
                        }
                      );
                    }
                  },
                  error => {
                    console.error(error);
                  }
                );
              },
              error => {
                console.error(error);
              }
            );


        } else {
          // Object store is not empty
          this.loadingpep = false;

          this.dbService.getAll('pep-sanction').subscribe(
            (data: PepResponseDetail[]) => {
              this.all_pep_sanction = data;

            },
            error => {


            }
          );
        }
      },
      error => {


      }
    );
    //pepsanction

  }
  fetchAdverserSanction() {


    //adversersanction
    this.dbService.count('adverser-sanction').subscribe(
      count => {
        if (count === 0) {
          // Object store is empty, add data


          this.sanctionListService.getAllAdverser().subscribe(data => {
            this.all_adverser_sanction = data;
            this.loadingadverser = false;



            this.dbService.bulkAdd('adverser-sanction', this.all_adverser_sanction).subscribe(
              () => {

              },
              error => {

              }
            );
          });

//get version of bc and add it to bc check
this.sanctionListService.checkAdverserUpdateF().subscribe(
  datad => {
    console.log(datad + " adverser Update check from db");
    this.dbService.getByID('adverser-check', 1).subscribe(
      (existingData: any) => {
        if (existingData) {
          existingData.value = datad;
          this.dbService.update('adverser-check', existingData).subscribe(
            () => {
              console.log("updated adverser ");
            },
            error => {
              console.error(error);
            }
          );
        } else {
          this.dbService.add('adverser-check', { id: 1, name: 'updateCheck', value: datad }).subscribe(
            () => {
              console.log(" added  'adverser-check' ");
            },
            error => {
              console.error(error);
            }
          );
        }
      },
      error => {
        console.error(error);
      }
    );
  },
  error => {
    console.error(error);
  }
);

        } else {
          // Object store is not empty
          this.loadingadverser = false;




          this.dbService.getAll('adverser-sanction').subscribe(
            (data: AdverserResponseDetail[]) => {
              this.all_adverser_sanction = data;

            },
            error => {


            }
          );
        }
      },
      error => {


      }
    );
    //sanction

  }
  fetchOfacSanction() {

    //ofacsanction
    this.dbService.count('ofac-sanction').subscribe(
      count => {
        if (count === 0) {
          // Object store is empty, add data


          this.sanctionListService.getAllOfac().subscribe(data => {
            this.all_ofac_sanction = data;
            this.loadingofac = false;

            this.dbService.bulkAdd('ofac-sanction', this.all_ofac_sanction).subscribe(
              () => {

              },
              error => {

              }
            );
          });
        } else {
          // Object store is not empty
          this.loadingofac = false;

          this.dbService.getAll('ofac-sanction').subscribe(
            (data: OFAC_[]) => {
              this.all_ofac_sanction = data;

            },
            error => {


            }
          );
        }
      },
      error => {


      }
    );
    //ofacsanction

  }
  fetchDeSanction() {
    this.dbService.count('de-sanction').subscribe(
      count => {
        if (count === 0) {
          // deliquent list is empty, add data


          this.sanctionListService.getAllDe().subscribe(
            data => {
              this.all_deliquent_sanction = data;
              this.loadingde = false;


              this.dbService.bulkAdd('de-sanction', this.all_deliquent_sanction).subscribe(
                () => {

                },
                error => {
                  console.error(error);
                }
              );
            },
            error => {
              console.error(error);
            }
          );

          //get version of deliquent from db and add it to deliquent check
          this.sanctionListService.checkDeliquentUpdateF().subscribe(
            datad => {
              console.log(datad + " Deliquent Update Check from DB");
              this.dbService.getByID('deliquent-check', 1).subscribe(
                (existingData: any) => {
                  if (existingData) {
                    existingData.value = datad;
                    this.dbService.update('deliquent-check', existingData).subscribe(
                      () => {
                        console.log(" updated deliquent-check.");
                      },
                      error => {
                        console.error(error);
                      }
                    );
                  } else {
                    this.dbService.add('deliquent-check', { id: 1, name: 'updateCheck', value: datad }).subscribe(
                      () => {
                        console.log(" added  'deliquent-check' o");
                      },
                      error => {
                        console.error(error);
                      }
                    );
                  }
                },
                error => {
                  console.error(error);
                }
              );
            },
            error => {
              console.error(error);
            }
          );

        } else {
          // Object store is not empty
          this.loadingde = false;

          this.dbService.getAll('de-sanction').subscribe(
            (data: Deliquent_[]) => {
              this.all_deliquent_sanction = data;

            },
            error => {


            }
          );
        }
      },
      error => {


      }
    );
    //deliquentsanction

  }

  //abdydiditends

  title = 'rms';

  public logout() {

    this.router.navigate(['/'])

  }
  reset() { /* TODO document why this method 'reset' is empty */ }
  dataset: [];
  public sanctionData = [];
  searchValue: string = '';
  names: Name[];
  dataUkChecker: number = -1;
  dataEuChecker: number = -1;
  dataModel: DataModel;
  unSanction: UNSanction;
  dataModelList: DataModel[];
  unSanctionList: UNSanction[];

  dataPepChecker: number = -1;
  dataUnIndividualChecker: number = -1;
  dataUnSanctionChecker: number = -1;
  pepResponseDetailList: PepResponseDetail[];
  pepResponseDetails: PepResponseDetail[];
  pepData: any[];
  unIndividualResponseDetailList: UnIndividualResponseDetail[];
  unIndividualResponses: UnIndividualResponseDetail[];
  dataAdverserChecker: number = -1
  adverserResponseDetailList: AdverserResponseDetail[];
  adverserResponses: AdverserResponseDetail[];
  dataNbeChecker: number = -1;
  nbeBlackListList: NbeBlackList[];

  //abdydiditstarts



  public getSearchResult(searchResult: string) {



      const uioptions = {
        keys: ["firstName"],
        includeScore: true,
        threshold: 0.4,
        getFn: (obj, path) => {
          // concatenate the values of the keys into a single string
          return obj.firstName + " " + obj.secondName + " " + obj.thirdName + " " + obj.fourthName;
        }
      };
      const ueoptions = {
        keys: ["firstName"],
        includeScore: true,
        threshold: 0.4,
        getFn: (obj, path) => {
          // concatenate the values of the keys into a single string
          return obj.firstName + " " + obj.secondName + " " + obj.thirdName;
        }
      }; 
      const euoptions = {
        keys: ["wholeNames"],
        includeScore: true,
        threshold: 0.4,
        getFn: (obj, path) => {
          // check if nameAlias is defined
          if (obj.nameAlias) {
            // concatenate the values of the wholeName property into a single string
            return obj.nameAlias.map(alias => alias.wholeName).join(" ");
          } else {
            return "";
          }
        }
      };
      const ukoptions = {
        keys: ["wholeNames"],
        includeScore: true,
        threshold: 0.4,
        getFn: (obj, path) => {
          // check if names is defined
          if (obj.names) {
            if (obj.names.nameList) {
              // concatenate the values of the name1, name2, name3, name4, name5, and name6 properties into a single string
              return obj.names.nameList
                .map(
                  alias =>
                    [alias.name1, alias.name2, alias.name3, alias.name4, alias.name5, alias.name6]
                      .filter(name => name) // remove undefined or null values
                      .join(" ")
                )
                .join(" ");
            }
          } else {
            return "";
          }
        }
      };
      const nbeoptions = {
        keys: ["name"],
        includeScore: true,
        threshold: 0.4,
      };
      const bcoptions = {
        keys: ["customer_name"],
        includeScore: true,
        threshold: 0.4,
      };
      const pepoptions = {
        keys: ["nameInEng"],
        includeScore: true,
        threshold: 0.4,
      };
      const deoptions = {
        keys: ["customer_name","tin_Account"],
        includeScore: true,
        threshold: 0.2,
      };
  
      function search(arrayOfObjects: readonly any[], typeofarray: string) {
        // Define the options for Fuse
        // Define the options for Fuse.js
  
  
  
        const fuse = new Fuse(arrayOfObjects, uioptions);
        const fuse1 = new Fuse(arrayOfObjects, ueoptions);
        const fuse2 = new Fuse(arrayOfObjects, euoptions);
        const fuse3 = new Fuse(arrayOfObjects, ukoptions);
        const fuse4 = new Fuse(arrayOfObjects, nbeoptions);//works adverser and ofac
        const fuse5 = new Fuse(arrayOfObjects, pepoptions);
        const fuse6 = new Fuse(arrayOfObjects, deoptions);
        const fuse7 = new Fuse(arrayOfObjects, bcoptions);
  
  
  
  
  
  
        if (!arrayOfObjects) {
  
          return [];
        }
        if (searchResult === '') {
          return [];
        }
        if (typeofarray == 'all_un_individual') {
          return fuse.search(searchResult);
        } else if (typeofarray == 'all_un_entities') {
          return fuse1.search(searchResult);
        } else if (typeofarray == 'all_eu_sanction') {
          return fuse2.search(searchResult);
        } else if (typeofarray == 'all_uk_sanction') {
          return fuse3.search(searchResult);
        } else if (typeofarray == 'all_nbe_sanction') {
          return fuse7.search(searchResult);
        } else if (typeofarray == 'all_pep_sanction') {
          return fuse5.search(searchResult);
        } else if (typeofarray == 'all_adverser_sanction') {
          return fuse4.search(searchResult);
        } else if (typeofarray == 'all_ofac_sanction') {
          return fuse4.search(searchResult);
        } else if (typeofarray == 'all_deliquent_sanction') {
          return fuse6.search(searchResult);
        } else {
          return [];
        }
      }


    
  
    
 
   
   
  

      if (this.loadingunindividual){

        
        this.sanctionListService.getAllUnIndividualByName(searchResult).subscribe(data => {
          this.asro_all_un_individual = data; // assign the data returned by the API to a local variable
    
        });

    
      }else{
           //un individual
            const aui = search(this.all_un_individual, 'all_un_individual');

            // Map the aui array to a new array that contains only the item values
            const auiitems = aui.map(result => result.item);
  
            // Assign the auiitems array to asro_all_un_individual
            this.asro_all_un_individual = auiitems;
  
             const auiscores = aui.map(result => result.score.toFixed(1));
  
             // Assign the scores array to aaui_score
             this.aaui_score = auiscores;
      }

      if(this.loadingunentity){

      }else{
       //un entity
      const aue = search(this.all_un_entities, 'all_un_entities');
  
      // Map the aui array to a new array that contains only the item values
      const aueitems = aue.map(result => result.item);
  
      // Assign the items array to asro_all_un_individual
      this.asro_all_un_entities = aueitems;
  
      const auescores = aue.map(result => result.score.toFixed(1));
  
      // Assign the scores array to aaui_score
      this.aaue_score = auescores;
      }

      if(this.loadingeusanction){

      }else{
           //eu sanction
      const aes = search(this.all_eu_sanction, 'all_eu_sanction');
  
      // Map the aes array to a new array that contains only the item values
      const aesitems = aes.map(result => result.item);
  
      // Assign the items array to asro_all_un_individual
      this.asro_all_eu_sanction = aesitems;
  
      const aesscores = aes.map(result => result.score.toFixed(1));
  
      // Assign the scores array to aaui_score
      this.aaes_score = aesscores;
        
      }

      if(this.loadinguksanction){

      } else{

          
      //uk sanction
      const aus = search(this.all_uk_sanction, 'all_uk_sanction');
  
      // Map the aes array to a new array that contains only the item values
      const ausitems = aus.map(result => result.item);
  
      // Assign the items array to asro_all_un_individual
      this.asro_all_uk_sanction = ausitems;
  
      const ausscores = aus.map(result => result.score.toFixed(1));
  
      // Assign the scores array to aaui_score
      this.aaus_score = ausscores;

      }

      if(this.loadingnbe){

      }else{
            //nbe sanction
      const ans = search(this.all_nbe_sanction, "all_nbe_sanction");
  
      // Map the aes array to a new array that contains only the item values
      const ansitems = ans.map(result => result.item);
  
      // Assign the items array to asro_all_un_individual
      this.asro_all_nbe_sanction = ansitems;
  
      const ansscore = ans.map(result => result.score.toFixed(1));
  
      // Assign the scores array to aaui_score
      this.aans_score = ansscore;
      }

      if(this.loadingpep){

      } else{
           
      //pep sanction
      const aps = search(this.all_pep_sanction, 'all_pep_sanction');
  
      // Map the aes array to a new array that contains only the item values
      const apsitems = aps.map(result => result.item);
  
      // Assign the items array to asro_all_un_individual
      this.asro_all_pep_sanction = apsitems;
  
      const apsscore = aps.map(result => result.score.toFixed(1));
  
      // Assign the scores array to aaui_score
      this.aaps_score = apsscore;
      }

      if(this.loadingadverser){

      }else{
             //adverser sanction
      const aas = search(this.all_adverser_sanction, 'all_adverser_sanction');
  
      // Map the aes array to a new array that contains only the item values
      const aasitems = aas.map(result => result.item);
  
      // Assign the items array to asro_all_un_individual
      this.asro_all_adverser_sanction = aasitems;
  
      const aasscore = aas.map(result => result.score.toFixed(1));
  
      // Assign the scores array to aaui_score
      this.aaas_score = aasscore;
      }

      if(this.loadingofac){

      }else{
              //ofac sanction
  
  
      const aos = search(this.all_ofac_sanction, 'all_ofac_sanction');
  
      // Map the aes array to a new array that contains only the item values
      const aositems = aos.map(result => result.item);
  
      // Assign the items array to asro_all_un_individual
  
      this.asro_all_ofac_sanction = aositems;
  
      const aosscore = aos.map(result => result.score.toFixed(1));
  
      // Assign the scores array to aaui_score
      this.aaos_score = aosscore;
  
      //deliquent sanction
      }

      if(this.loadingde){

      } else {
        const ads = search(this.all_deliquent_sanction, 'all_deliquent_sanction');
  
  
  
        // Map the aes array to a new array that contains only the item values
        const adsitems = ads.map(result => result.item);
    
    
        this.asro_all_deliquent_sanction = adsitems;
        const adsscore = ads.map(result => result.score.toFixed(1));
    
        // Assign the scores array to aaui_score
        this.aads_score = adsscore;
      }

 

  }

  public checkUpdate() {
   
    let updateCheckIndexDeliquent: number;
    let updateCheckServerDeliquent: number;
    let updateCheckIndexBc: number;
    let updateCheckServerBc: number;
    let updateCheckIndexUk:number;
    let updateCheckServerUk: number;
    let updateCheckIndexEu:number;
    let updateCheckServerEu: number;
    let updateCheckIndexPep:number;
    let updateCheckServerPep: number;
    let updateCheckIndexAdverser:number;
    let updateCheckServerAdverser: number;


  //check deliquent
    this.dbService.count('deliquent-check').subscribe(
      count => {
        if (count === 0) {
          // deliquent check is empty, add data
          // so delete all deliquent data and fetch it again

          this.indexedDBService.clear('de-sanction').subscribe(() => {
            // Perform any additional actions after deleting the data
            console.log("delete deliquent");
            //now try to fetch again
            this.loadingde = true;
            this.fetchDeSanction();

          });
        } else {
          // Object store is not empty
          //so do the checking
          //first get deliquent update check from deliquent check
          this.dbService.getByID('deliquent-check', 1).subscribe(
            (datac: any) => {
              if (datac) {
                updateCheckIndexDeliquent = datac.value;
                console.log("deliquent check is from index  ", updateCheckIndexDeliquent);
              } else {
                console.log("No data found in 'deliquent-check' ");
              }
          //then get deliquent update check from database
              this.sanctionListService.checkDeliquentUpdateF().subscribe(
                datad => {
                  updateCheckServerDeliquent = datad;

                  if (updateCheckIndexDeliquent == updateCheckServerDeliquent) {
                    console.log("deliquent up to date");
                  } else{
                    this.indexedDBService.clear('de-sanction').subscribe(() => {
                      // Perform any additional actions after deleting the data
                      console.log("not uptodate so delete deliquent");
                      this.loadingde = true;
                      //now try to fetch again
                      this.fetchDeSanction();
          
                    });
                  }
                },
                error => {
                  console.error(error);
                }
              );

            },
            error => {
              console.error(error);
            }
          );
        }
      },
      error => {
      }
    );

  //check bc
  this.dbService.count('bc-check').subscribe(
          count => {
            if (count === 0) {
              // Object store is empty, add data
              //now since bc check is empty i have to delete all business continuity data and fetch it again
    
              this.indexedDBService.clear('nbe-sanction').subscribe(() => {
                // Perform any additional actions after deleting the data
                console.log("deleted bc'");
                //now try to fetch again
                this.loadingnbe = true;
                this.fetchNbeSanction();
    
              });
            } else {
              // Object store is not empty
              this.dbService.getByID('bc-check', 1).subscribe(
                (datac: any) => {
                  if (datac) {
                    updateCheckIndexBc = datac.value;
                    console.log("bc check index:", updateCheckIndexBc);
                  } else {
                    console.log("No data found for ID 1 in the 'deliquent-check' object store.");
                  }
                  //get version of deliquent
                  this.sanctionListService.checkBusinessContinuityUpdateF().subscribe(
                    datad => {
                      updateCheckServerBc = datad;
    
                      if (updateCheckIndexBc == updateCheckServerBc) {
                        console.log("bc up to date ");
                      } else{
                        this.indexedDBService.clear('nbe-sanction').subscribe(() => {
                          // Perform any additional actions after deleting the data
                          console.log("not upto date deleted from 'bc sanction' .");
                          //now try to fetch again
                          this.loadingnbe = true;
                          this.fetchNbeSanction();
              
                        });
                      }
                    },
                    error => {
                      console.error(error);
                    }
                  );
    
                },
                error => {
                  console.error(error);
                }
              );
            }
          },
          error => {
          }
        );
  //check uk
  this.dbService.count('uk-check').subscribe(
    count => {
      if (count === 0) {
        // Object store is empty, add data
        //now since uk check is empty i have to delete all data and fetch it again

        this.indexedDBService.clear('uk-sanction').subscribe(() => {
       
          console.log("deleted uk'");
          //now try to fetch again
          this.loadinguksanction = true;
          this.fetchUkSanction();
   


        });
      } else {
        // Object store is not empty
        this.dbService.getByID('uk-check', 1).subscribe(
          (datac: any) => {
            if (datac) {
              updateCheckIndexUk = datac.value;
              console.log("uk index:", updateCheckIndexUk);
            } else {
              console.log("No data found for ID 1 in the 'deliquent-check' object store.");
            }
            //get version of deliquent
            this.sanctionListService.checkUkUpdateF().subscribe(
              datad => {
                updateCheckServerUk = datad;
                console.log("uk db:", updateCheckServerUk)

                if (updateCheckIndexUk == updateCheckServerUk) {
                  console.log("uk up to date");
                } else{
                  this.indexedDBService.clear('uk-sanction').subscribe(() => {
                    // Perform any additional actions after deleting the data
                    console.log("not upto date deleted from 'uk sanction' .");
                    //now try to fetch again
                    this.loadinguksanction = true;
                    this.fetchUkSanction();
        
                  });
                }
              },
              error => {
                console.error(error);
              }
            );

          },
          error => {
            console.error(error);
          }
        );
      }
    },
    error => {
    }
  );

    //check eu
    this.dbService.count('eu-check').subscribe(
      count => {
        if (count === 0) {
          // Object store is empty, add data
          //now since eu check is empty i have to delete all data and fetch it again
  
          this.indexedDBService.clear('eu-sanction').subscribe(() => {
         
            console.log("deleted eu'");
            //now try to fetch again
            this.loadingeusanction = true;
            this.fetchEuSanction();
       
  
  
          });
        } else {
          // Object store is not empty
          this.dbService.getByID('eu-check', 1).subscribe(
            (datac: any) => {
              if (datac) {
                updateCheckIndexEu = datac.value;
                console.log("eu index:", updateCheckIndexEu);
              } else {
                console.log("No data found for ID 1 in the 'eu-check' object store.");
              }
              //get version of deliquent
              this.sanctionListService.checkEuUpdateF().subscribe(
                datad => {
                  updateCheckServerEu = datad;
                  console.log("eu db:", updateCheckServerEu)
  
                  if (updateCheckIndexEu == updateCheckServerEu) {
                    console.log("eu up to date");
                  } else{
                    this.indexedDBService.clear('eu-sanction').subscribe(() => {
                      // Perform any additional actions after deleting the data
                      console.log("not upto date deleted from 'eu sanction' .");
                      //now try to fetch again
                      this.loadingeusanction = true;
                      this.fetchEuSanction();
          
                    });
                  }
                },
                error => {
                  console.error(error);
                }
              );
  
            },
            error => {
              console.error(error);
            }
          );
        }
      },
      error => {
      }
    );

       //check pep
       this.dbService.count('pep-check').subscribe(
        count => {
          if (count === 0) {
            // Object store is empty, add data
            //now since eu check is empty i have to delete all data and fetch it again
    
            this.indexedDBService.clear('pep-sanction').subscribe(() => {
           
              console.log("deleted pep'");
              //now try to fetch again
              this.loadingpep = true;
              this.fetchPepSanction();
              //flaghere
    
    
            });
          } else {
            // Object store is not empty
            this.dbService.getByID('pep-check', 1).subscribe(
              (datac: any) => {
                if (datac) {
                  updateCheckIndexPep = datac.value;
                  console.log("pep index:", updateCheckIndexPep);
                } else {
                  console.log("No data found for ID 1 in the 'pep-check' object store.");
                }
                //get version of deliquent
                this.sanctionListService.checkPepUpdateF().subscribe(
                  datad => {
                    updateCheckServerPep = datad;
                    console.log("pep db:", updateCheckServerPep)
    
                    if (updateCheckIndexPep == updateCheckServerPep) {
                      console.log("pep up to date");
                    } else{
                      this.indexedDBService.clear('pep-sanction').subscribe(() => {
                        // Perform any additional actions after deleting the data
                        console.log("not upto date deleted from 'pep sanction' .");
                        //now try to fetch again
                        this.loadingpep = true;
                        this.fetchPepSanction();
            
                      });
                    }
                  },
                  error => {
                    console.error(error);
                  }
                );
    
              },
              error => {
                console.error(error);
              }
            );
          }
        },
        error => {
        }
      );

             //check pep
             this.dbService.count('adverser-check').subscribe(
              count => {
                if (count === 0) {
                  // Object store is empty, add data
                  //now since pep check is empty i have to delete all data and fetch it again
          
                  this.indexedDBService.clear('adverser-sanction').subscribe(() => {
                 
                    console.log("deleted adverser'");
                    //now try to fetch again
                    this.loadingadverser = true;
                    this.fetchAdverserSanction();
                    //flaghere
          
          
                  });
                } else {
                  // Object store is not empty
                  this.dbService.getByID('adverser-check', 1).subscribe(
                    (datac: any) => {
                      if (datac) {
                        updateCheckIndexAdverser = datac.value;
                        console.log("adverser index:", updateCheckIndexAdverser);
                      } else {
                        console.log("No data found for ID 1 in the 'adverser-check' object store.");
                      }
                      //get version of adverser
                      this.sanctionListService.checkAdverserUpdateF().subscribe(
                        datad => {
                          updateCheckServerAdverser = datad;
                          console.log("adverser db:", updateCheckServerAdverser)
          
                          if (updateCheckIndexAdverser == updateCheckServerAdverser) {
                            console.log("adverser up to date");
                          } else{
                            this.indexedDBService.clear('adverser-sanction').subscribe(() => {
                              // Perform any additional actions after deleting the data
                              console.log("not upto date deleted from 'adverser sanction' .");
                              //now try to fetch again
                              this.loadingadverser = true;
                              this.fetchAdverserSanction();
                  
                            });
                          }
                        },
                        error => {
                          console.error(error);
                        }
                      );
          
                    },
                    error => {
                      console.error(error);
                    }
                  );
                }
              },
              error => {
              }
            );
  


  }

  //abdydiditends
}


