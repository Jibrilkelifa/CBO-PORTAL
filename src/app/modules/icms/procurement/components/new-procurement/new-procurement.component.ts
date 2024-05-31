import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService, ConfirmationService, Message } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

import { TimeService } from '../../../../../services/sso-services/time.service';
import { ProcurementModel } from "../../models/procurement-model";
import { ProcurementService } from "../../service/procurement-services.service";
import { AllCategoryService } from 'src/app/services/icms-services/all-category.service';
import { AllSubCategoryService } from 'src/app/services/icms-services/all-sub-category.service';
import { HttpErrorResponse } from '@angular/common/http';
import { StatusService } from 'src/app/services/icms-services/cipm-services/status.service';
import { Status } from 'src/app/models/icms-models/cipm-models/status';
import { ProcurementStatusModel } from '../../models/procurement-status-model';
import { AllIrregularity } from 'src/app/models/icms-models/all-irregularity';
import { AllCategory } from 'src/app/models/icms-models/all-category';
import { AllSubCategory } from 'src/app/models/icms-models/all-sub-category';
import { AllIrregularityService } from 'src/app/services/icms-services/all-irregularity.service';

@Component({
  selector: 'new-procurement',
  templateUrl: './new-procurement.component.html',
  styleUrls: ['./new-procurement.component.scss'],
  providers: [MessageService, ConfirmationService]
})

export class NewProcurementComponent implements OnInit {
  public Procurement: ProcurementModel = new ProcurementModel();
  public categories: any[] = [];
  public procurementTypes: any[] = [];
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


  public selectedSubCategory: AllSubCategory;
  public selectedBranch;
  public selectedTeam;
  public selectedSubProcess;




  constructor(
    private timeService: TimeService,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private procurementService: ProcurementService,
    private categoryService: AllCategoryService,

    private subCategoryService: AllSubCategoryService,
    private activatedRoute: ActivatedRoute,
    private allIrregularityService: AllIrregularityService,
    private confirmationService: ConfirmationService,
    private statusService: StatusService,
    private router: Router) { }

  ngOnInit() {
    this.Procurement.procurementDate = new Date();
    this.primengConfig.ripple = true;
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.getProcurement(id);
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

  }


  generateCaseId(): void {
    this.timeService.getDate().subscribe(
      (response: any) => {
        const dateParts = response.time.split('/');
        const year = dateParts[2];
        const month = dateParts[0].padStart(2, "0");
        const day = dateParts[1].padStart(2, "0");
        this.procurementService.getSize().subscribe(
          (response: any) => {
            if (response == 0) {
              this.caseId = "0001/" + month + "/" + day + "/" + year;
              console.log(this.caseId);
            }
            else {
              this.procurementService.findProcurementById(response).subscribe(
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


  getProcurement(id: number) {
    this.procurementService.findProcurementById(id).subscribe(
      (response: ProcurementModel) => {
        response.procurementDate = new Date(response.procurementDate);
        this.Procurement = response;
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
    this.procurementService.getStatuses().subscribe(
      (response: ProcurementStatusModel[]) => {
        this.statuses = response;
        this.selectedstatus = this.statuses.find(status => status.name === "Open");
      },
      (error: HttpErrorResponse) => {
        // Handle error
      }
    );
  }

  onIrregularityChange(event: any) {
    this.isOtherIrregularitySelected = (event.value.name === 'Other');
  }

  getCategories() {
    this.categoryService.getAllCategoriesBySubModuleName("PFPIC").subscribe(
      (response: any[]) => {
        this.categories = response;
        this.subCategories = response;
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
    this.subCategoryService.getAllSubCategoriesBySubModuleNameAndCategoryName("PFPIC", event.value.name).subscribe(
      (response: any[]) => {
        this.categoryName = event.value.name;
        this.subCategories = response;
      },
      (error: HttpErrorResponse) => {

      }
    )
  }


  submitProcurement(form: NgForm) {
    if (form.valid) {
      let formValueWithDate = {
        ...form.value,
        procurementDate: this.formatDate(this.Procurement.procurementDate), // Convert date to string
        procurementStatus: this.selectedstatus,// Attach the status
        team: this.selectedTeam
      };

      if (this.update) {
        let updatedValue = {
          ...this.Procurement,
          procurementDate: this.formatDate(this.Procurement.procurementDate), // Convert date to string
          procurementStatus: this.selectedstatus, // Attach the status
          team: this.selectedTeam
        }
        this.procurementService.updateProcurement(updatedValue).subscribe(
          response => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: "Procurement updated Successfully!"
            });
            setTimeout(() => {
              this.router.navigate(['ICMS/Procurement/viewProcurement']);
            }, 1500);
            // handle response
          },
          error => {
            // handle error
          }
        );
      } else {
        this.procurementService.addProcurement(formValueWithDate).subscribe(
          response => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: "Procurement created Successfully!"
            });
            setTimeout(() => {
              this.router.navigate(['ICMS/Procurement/viewProcurement']);
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
