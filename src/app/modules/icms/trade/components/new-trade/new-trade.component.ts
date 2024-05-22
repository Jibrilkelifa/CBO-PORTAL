import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService, ConfirmationService, Message } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

import { TimeService } from '../../../../../services/sso-services/time.service';
import { TradeModel } from "../../models/trade-model";
import { TradeService } from "../../service/trade-services.service";
import { AllCategoryService } from 'src/app/services/icms-services/all-category.service';
import { AllTradeTypeService } from 'src/app/services/icms-services/all-trade-type.service';
import { AllSubCategoryService } from 'src/app/services/icms-services/all-sub-category.service';
import { HttpErrorResponse } from '@angular/common/http';
import { StatusService } from 'src/app/services/icms-services/cipm-services/status.service';
import { Status } from 'src/app/models/icms-models/cipm-models/status';
import { TradeStatusModel } from '../../models/trade-status-model';
import { AllIrregularity } from 'src/app/models/icms-models/all-irregularity';
import { AllCategory } from 'src/app/models/icms-models/all-category';
import { AllTradeType } from 'src/app/models/icms-models/all-trade-type';
import { AllSubCategory } from 'src/app/models/icms-models/all-sub-category';
import { AllIrregularityService } from 'src/app/services/icms-services/all-irregularity.service';

@Component({
  selector: 'new-trade',
  templateUrl: './new-trade.component.html',
  styleUrls: ['./new-trade.component.scss'],
  providers: [MessageService, ConfirmationService]
})

export class NewTradeComponent implements OnInit {
  public Trade: TradeModel = new TradeModel();
  public categories: any[] = [];
  public tradeTypes: any[] = [];
  public subCategories: any[] = [];
  irregularities: AllIrregularity[];
  public update: boolean = false;
  public idY: number;
  selectedstatus: Status;
  msgs: Message[] = [];
  branchId: number = Number(localStorage.getItem('branchId'));
  subProcessId: number = Number(localStorage.getItem('subProcessId'));
  statuses: Status[] = [
    { id: 1, name: 'Open' },
    { id: 2, name: 'Closed' }
  ]; 
  isOtherIrregularitySelected: boolean = false;
  categoryName: string;
  public showOtherProductTypes: boolean = false;
  caseId: string;
  public selectedIrregularity: AllIrregularity;
  public selectedCategory: AllCategory;
  public selectedTradeType: AllTradeType;

  public selectedSubCategory: AllSubCategory;
  public selectedBranch;
  public selectedTeam;
  public selectedSubProcess;




  constructor(
    private timeService: TimeService,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private tradeService: TradeService,
    private categoryService: AllCategoryService,
    private tradeTypeService: AllTradeTypeService,

    private subCategoryService: AllSubCategoryService,
    private activatedRoute: ActivatedRoute,
    private allIrregularityService: AllIrregularityService,
    private confirmationService: ConfirmationService,
    private statusService: StatusService,
    private router: Router) { }

  ngOnInit() {
    this.Trade.tradeDate = new Date();
    this.primengConfig.ripple = true;
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.getTrade(id);
        this.update = true;
      } else {
        this.selectedstatus = this.statuses.find(status => status.name === 'Open');
      }
    });

    this.selectedBranch = JSON.parse(localStorage.getItem("branch"));
    this.selectedTeam = JSON.parse(localStorage.getItem("team"));
    this.selectedSubProcess = JSON.parse(localStorage.getItem("subProcess"))

    this.generateCaseId();
    this.getCategories();
    this.getStatus();
    this.getTradeTypes();

  }


  generateCaseId(): void {
    this.timeService.getDate().subscribe(
      (response: any) => {
        const dateParts = response.time.split('/');
        const year = dateParts[2];
        const month = dateParts[0].padStart(2, "0");
        const day = dateParts[1].padStart(2, "0");
        this.tradeService.getSize().subscribe(
          (response: any) => {
            if (response == 0) {
              this.caseId = "0001/" + month + "/" + day + "/" + year;
              console.log(this.caseId);
            }
            else {
              this.tradeService.findTradeById(response).subscribe(
                (response: any) => {
                  if (response.caseId.slice(-4) === year) {
                    const lastCaseId = parseInt(response.caseId.slice(0, 4));
                    const nextCaseId = (lastCaseId + 1).toString().padStart(4, "0");
                    this.caseId = nextCaseId + "/" + month + "/" + day + "/" + year;
                  } else {
                    this.caseId = "0001/" + month + "/" + day + "/" + year;
                  }
                  console.log(response.caseId);
                }
              )
            }
          }
        )
      }
    )
  }


  getTrade(id: number) {
    this.tradeService.findTradeById(id).subscribe(
      (response: TradeModel) => {
        response.tradeDate = new Date(response.tradeDate);
        this.Trade = response;
      },
      error => {
        // handle error
      }
    );
  }

  limitInput(event) {
    const input = event.target.value;
    if (input.length >= 13) {
      event.preventDefault();
    }
  }



  public getStatus(): void {
    this.tradeService.getStatuses().subscribe(
      (response: TradeStatusModel[]) => {
        this.statuses = response;
        console.log("eee", response);
        
        this.selectedstatus = this.statuses.find(status => status.name === "Open");
      },
      (error: HttpErrorResponse) => {
        // Handle error
      }
    );
  }

  onProductTypeChange(event: any) {
    this.showOtherProductTypes = event.value === 'Other';
  }

  onIrregularityChange(event: any) {
    this.isOtherIrregularitySelected = (event.value.name === 'Other');
  }

  getCategories() {
    this.categoryService.getAllCategoriesBySubModuleName("TSIPM").subscribe(
      (response: any[]) => {
        this.categories = response;
      },
      error => {
      }
    );
  }
  getTradeTypes() {
    this.tradeTypeService.getAllTradeTypesBySubModuleName("TSIPM").subscribe(
      (response: any[]) => {
        this.tradeTypes = response;
        if (this.Trade.tradeStatus) {
          this.selectedstatus = this.statuses.find(status => status.name === this.Trade.tradeStatus.name);

        } else {
          console.error("Status is undefined in the response");
        }
      },
      error => {
      }
    );
  }

  onSubCategoryChange(event: any) {
    this.allIrregularityService.getAllIrregularitiesByCategoryNameAndSubCategoryName(this.categoryName, event.value.name).subscribe(
      (response: any[]) => {
        this.irregularities = response;
      },
      (error: HttpErrorResponse) => {

      }
    )
  }

  public populateSelectedStatus(existingStatus: Status): void {
    this.selectedstatus = existingStatus;
  }

  onCategoryChange(event: any) {
    this.subCategoryService.getAllSubCategoriesBySubModuleNameAndCategoryName("TSIPM", event.value.name).subscribe(
      (response: any[]) => {
        this.categoryName = event.value.name;
        this.subCategories = response;

      },
      (error: HttpErrorResponse) => {

      }
    )
  }


  submitTrade(form: NgForm) {
    if (form.valid) {
      let formValueWithDate = {
        ...form.value,
        tradeDate: this.formatDate(this.Trade.tradeDate), // Convert date to string
        tradeStatus: this.selectedstatus,// Attach the status
        team: this.selectedTeam
      };

      console.log("rrrr", formValueWithDate);
      

      if (this.update) {
        let updatedValue = {
          ...this.Trade,
          tradeDate: this.formatDate(this.Trade.tradeDate), // Convert date to string
          tradeStatus: this.selectedstatus, // Attach the status
          team: this.selectedTeam
        }
        this.tradeService.updateTrade(updatedValue).subscribe(
          response => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: "Trade updated Successfully!"
            });
            setTimeout(() => {
              this.router.navigate(['ICMS/Trade/viewTrade']);
            }, 1500);
            // handle response
          },
          error => {
            // handle error
          }
        );
      } else {
        this.tradeService.addTrade(formValueWithDate).subscribe(
          response => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: "Trade created Successfully!"
            });
            setTimeout(() => {
              this.router.navigate(['ICMS/Trade/viewTrade']);
            }, 1500);

            // handle response
          },
          error => {
            // handle error
          }
        );
      }
    }
  }


  formatDate(date: Date): string {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
  }

}
