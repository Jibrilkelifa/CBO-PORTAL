import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService, ConfirmationService, Message } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

import { TimeService } from '../../../../../services/sso-services/time.service';
import { FinanceModel } from "../../models/finance-model";
import { FinanceService } from "../../service/finance-services.service";
import { AllCategoryService } from 'src/app/services/icms-services/all-category.service';
import { AllSubCategoryService } from 'src/app/services/icms-services/all-sub-category.service';
import { HttpErrorResponse } from '@angular/common/http';
import { StatusService } from 'src/app/services/icms-services/cipm-services/status.service';
import { Status } from 'src/app/models/icms-models/cipm-models/status';
import { FinanceStatusModel } from '../../models/finance-status-model';

@Component({
  selector: 'new-finance',
  templateUrl: './new-finance.component.html',
  styleUrls: ['./new-finance.component.scss'],
  providers: [MessageService, ConfirmationService]
})

export class NewFinanceComponent implements OnInit {
  public Finance: FinanceModel = new FinanceModel();
  public categories: any[] = [];
  public subCategories: any[] = [];
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
  categoryName: string;
  public showOtherProductTypes: boolean = false;
  caseId: string;

  public selectedBranch;
  public selectedTeam;
  public selectedSubProcess;

  constructor(
    private timeService: TimeService,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private financeService: FinanceService,
    private categoryService: AllCategoryService,
    private subCategoryService: AllSubCategoryService,
    private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private statusService: StatusService,
    private router: Router) { }

  ngOnInit() {
    this.Finance.financeDate = new Date();
    this.primengConfig.ripple = true;
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.getFinance(id);
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

  }

  generateCaseId(): void {
    this.timeService.getDate().subscribe(
      (response: any) => {
        const dateParts = response.time.split('/');
        const year = dateParts[2];
        const month = dateParts[0].padStart(2, "0");
        const day = dateParts[1].padStart(2, "0");
        this.financeService.getSize().subscribe(
          (response: any) => {
            if (response == 0) {
              this.caseId = "0001/" + month + "/" + day + "/" + year;
            }
            else {
              this.financeService.findFinanceById(response).subscribe(
                (response: any) => {
                  if (response.caseId.slice(-4) === year) {
                    const lastCaseId = parseInt(response.caseId.slice(0, 4));
                    const nextCaseId = (lastCaseId + 1).toString().padStart(4, "0");
                    this.caseId = nextCaseId + "/" + month + "/" + day + "/" + year;
                  } else {
                    this.caseId = "0001/" + month + "/" + day + "/" + year;
                  }
                }
              )
            }
          }
        )
      }
    )
  }

  getFinance(id: number) {
    this.financeService.findFinanceById(id).subscribe(
      (response: FinanceModel) => {

        this.Finance = response;
        if (this.Finance.financeStatus) {
          this.selectedstatus = this.statuses.find(status => status.name === this.Finance.financeStatus.name);

        } else {
          console.error("Status is undefined in the response");
        }
        response.financeDate = new Date(response.financeDate);
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



  onProductTypeChange(event: any) {
    this.showOtherProductTypes = event.value === 'Other';
  }

  getCategories() {
    this.categoryService.getAllCategoriesBySubModuleName("FPIC").subscribe(
      (response: any[]) => {
        this.categories = response;
      },
      error => {
      }
    );
  }

  onCategoryChange(event: any) {
    this.subCategoryService.getAllSubCategoriesBySubModuleNameAndCategoryName("FPIC", event.value.name).subscribe(
      (response: any[]) => {
        this.categoryName = event.value.name;

        this.subCategories = response;

      },
      (error: HttpErrorResponse) => {

      }
    )
  }


  submitFinance(form: NgForm) {
    if (form.valid) {
      let formValueWithDate = {
        ...form.value,
        financeDate: this.formatDate(this.Finance.financeDate), // Convert date to string
        financeStatus: this.selectedstatus,// Attach the status
        subProcess: this.selectedSubProcess
      };

      if (this.update) {
        let updatedValue = {
          ...this.Finance,
          financeDate: this.formatDate(this.Finance.financeDate), // Convert date to string
          financeStatus: this.selectedstatus, // Attach the status
          subProcess: this.selectedSubProcess
        }
        this.financeService.updateFinance(updatedValue).subscribe(
          response => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: "Finance updated Successfully!"
            });
            setTimeout(() => {
              this.router.navigate(['ICMS/Finance/viewFinance']);
            }, 1500);
            // handle response
          },
          error => {
            // handle error
          }
        );
      } else {
        this.financeService.addFinance(formValueWithDate).subscribe(
          response => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: "Finance created Successfully!"
            });
            setTimeout(() => {
              this.router.navigate(['ICMS/Finance/viewFinance']);
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
