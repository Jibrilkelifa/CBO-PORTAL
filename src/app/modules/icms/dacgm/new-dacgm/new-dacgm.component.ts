import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DACGMService } from '../../../../services/icms-services/dacgm-services/dacgm.service';
import { OrganizationalUnitService } from '../../../../services/sso-services/organizational-unit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, FilterService, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { DACGM } from "../../../../models/icms-models/dacgm-models/dacgm";
import { Branch } from 'src/app/models/sso-models/branch';
import { AllCategory } from 'src/app/models/icms-models/all-category';
import { AllSubCategory } from 'src/app/models/icms-models/all-sub-category';
import { AllIrregularity } from 'src/app/models/icms-models/all-irregularity';
import { AllCategoryService } from 'src/app/services/icms-services/all-category.service';
import { AllSubCategoryService } from 'src/app/services/icms-services/all-sub-category.service';
import { AllIrregularityService } from 'src/app/services/icms-services/all-irregularity.service';
import { ActivityStatusService } from 'src/app/services/icms-services/dacgm-services/activity-status.service'
import { ActivityStatus } from 'src/app/models/icms-models/dacgm-models/activity-status';
import { TimeService } from '../../../../services/sso-services/time.service';

@Component({
  selector: 'app-accordions',
  templateUrl: './new-dacgm.component.html',
  styleUrls: ['./new-dacgm.component.scss'],
  providers: [MessageService, ConfirmationService]
})

export class NewDACGMComponent implements OnInit {
  public dacgms: DACGM[] = [];
  public dacgm: DACGM;
  public selectedBranch;
  public selectedSubProcess;
  public selectedCategory: AllCategory;
  public selectedSubCategory: AllSubCategory;
  public activityStatuses: ActivityStatus[] = [];
  selectedActivityStatus: ActivityStatus;

  public selectedIrregularity: AllIrregularity;
  // public selectedActivityStatus: ActivityStatus;
  public dacgmR: DACGM[] = [];
  public selectedDACGM: DACGM;
  
  update: boolean = false;
  newDiv: boolean = true;
  public idY: number;
  msgs: Message[] = [];
  value: string;
  branchId: number = Number(localStorage.getItem('branchId'));
  subProcessId: number = Number(localStorage.getItem('subProcessId'));
  isOtherIrregularitySelected: boolean = false;
  isOtherIPCTSelected: boolean = false;
  insuranceExpireDate: Date;
  caseId: string;

  categoryName: string;
  categories: AllCategory[];
  subCategories: AllSubCategory[];
  irregularities: AllIrregularity[];
  generateCaseId(): void {
    this.timeService.getDate().subscribe(
      (response: any) => {
        const dateParts = response.time.split('/'); // split the date string by '/'
        const year = dateParts[2];
        const month = dateParts[0].padStart(2, "0");
        const day = dateParts[1].padStart(2, "0");
        this.dacgmService.getSize().subscribe(
          (response: any) => {
            if (response == 0) {
              this.caseId = "0001/" + month + "/" + day + "/" + year;
            }
            else {
              this.dacgmService.getDACGM(response).subscribe(
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

  constructor(
    private timeService: TimeService,
    private filterService: FilterService,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private dacgmService: DACGMService,
    private allCategoryService: AllCategoryService,
    private allSubCategoryService: AllSubCategoryService,
    private allIrregularityService: AllIrregularityService,
    private organizationalUnitService: OrganizationalUnitService,
    private activityStatusService: ActivityStatusService,
    private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private router: Router) { }
    

  ngOnInit() {
    this.getDACGMCategories();
    this.getActivityStatus();
    this.generateCaseId();
    this.getDACGMs(this.branchId);
    // alert(this.branchId);
    this.primengConfig.ripple = true;
    let x = this.activatedRoute.snapshot.paramMap.get("id");
    this.idY = +x;
    // this.organizationalUnitService.getOrganizationalUnit(this.branchId).subscribe(
    //   (response: any) => {
    //     this.selectedBranch = response;
    //   },
    //   (error: HttpErrorResponse) => {

    //   }
    // );
    this.selectedBranch = JSON.parse(localStorage.getItem("branch"));
    this.selectedSubProcess =JSON.parse(localStorage.getItem("subProcess"))
    // this.activityStatusService.getActivityStatus(1).subscribe(
    //   (response: any) => {
    //     this.selectedActivityStatus = response;
    //   },
    //   (error: HttpErrorResponse) => {

    //   }
    // );
    
    if (this.idY) {
      this.getDACGM(this.idY);
      this.update = true;
      this.newDiv = false;
    }

    
  }
  
  getDACGMCategories() {
    this.allCategoryService.getAllCategoriesBySubModuleName("DACGM").subscribe(
      (response: any[]) => {
        this.categories = response;
        this.categories.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        console.log("this.categories = "+JSON.stringify(this.categories))
      },
      (error: HttpErrorResponse) => {

      }
    )
  }
  public getActivityStatus(): void {
    this.activityStatusService.getActivityStatuses().subscribe(
      (response: ActivityStatus[]) => {
        this.activityStatuses = response;
        // Set the initial selectedActivityStatus to "Open" when adding data
        this.selectedActivityStatus = this.activityStatuses.find(status => status.name === "Open");
      },
      (error: HttpErrorResponse) => {
        // Handle error
      }
    );
  }
  
  public populateSelectedActivityStatus(existingActivityStatus: ActivityStatus): void {
    this.selectedActivityStatus = existingActivityStatus;
  }


  

  onCategoryChange(event: any) {
    this.allSubCategoryService.getAllSubCategoriesBySubModuleNameAndCategoryName("DACGM", event.value.name).subscribe(
      (response: any[]) => {
        this.categoryName = event.value.name;
        this.subCategories = response;
      },
      (error: HttpErrorResponse) => {

      }
    )
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

  onIrregularityChange(event: any) {
    this.isOtherIrregularitySelected = (event.value.name === 'Other');
  }

  public getDACGMs(branchId: number): void {
    this.dacgmService.getDACGMForBranch(branchId).subscribe(
      (response: DACGM[]) => {
        this.dacgms = response;
      },
      (error: HttpErrorResponse) => {

      }
    );
  }

  public getDACGM(id: number): DACGM {
    this.dacgmService.getDACGM(id).subscribe(
      (response: DACGM) => {
        this.dacgm = response;
      },
      (error: HttpErrorResponse) => {

      }
    );
    return this.dacgm;
  }

  public addDACGM(addDACGMForm: NgForm): void {
    this.timeService.getDate().subscribe(
      (response: any) => {
        const dateParts = response.time.split('/'); // split the date string by '/'
        const year = dateParts[2];
        const month = dateParts[0].padStart(2, "0");
        const day = dateParts[1].padStart(2, "0");
        const DatePresented = `${month}/${day}/${year}`; // format date as a string in MM/DD/YYYY format
        this.dacgmService.getSize().subscribe(
          (response: any) => {
            if (response == 0) {
              addDACGMForm.value.caseId = "0001/" + DatePresented;
            }
            else {
              this.dacgmService.getDACGM(response).subscribe(
                (response: any) => {
                  if (response.caseId.slice(-4) === year) {
                    const lastCaseId = parseInt(response.caseId.slice(0, 4));
                    const nextCaseId = (lastCaseId + 1).toString().padStart(4, "0");
                    addDACGMForm.value.caseId = nextCaseId + "/";
                  } else {
                    addDACGMForm.value.caseId = "0001/"+ DatePresented;
                  }
                }
              )
            }
            this.dacgmService.addDACGM(addDACGMForm.value).subscribe(
              (response: any) => {
                this.messageService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: "Daily Activity Gap added Successfully!"
                });
                setTimeout(() => {
                }, 1000);
                this.getDACGMs(this.branchId);
                window.location.reload();
              },
              (error: HttpErrorResponse) => {

              }
            );
          }
        )
      }
    )
    
    // this.dacgmService.addDACGM(addDACGMForm.value).subscribe(
    //   (response: any) => {
    //     this.getDACGMs(this.organizationalUnitId);
    //     this.messageService.add({
    //       severity: 'success',
    //       summary: 'Success',
    //       detail: "Daily Activity Gap added Successfully!"
    //     });
    //     setTimeout(() => {
    //       window.location.reload();
    //     }, 2000);

    //   },
    //   (error: HttpErrorResponse) => {
    //     this.messageService.add({
    //       severity: 'error',
    //       summary: 'Failed',
    //       detail: "Faled to create"
    //     });
    //     setTimeout(() => {
    //     }, 1000);

    //   }
    // );
  }

  public updateDACGM(updateDACGM: NgForm): void {
    if (updateDACGM.value.otherInsuranceCoverageType == undefined) {
      updateDACGM.value.otherInsuranceCoverageType = "";
    }
    this.dacgmService.updateDACGM(updateDACGM.value).subscribe(
      (response: DACGM) => {
        this.dacgm = response;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: "Daily activity gap data updated Successfully!"
        });
        setTimeout(() => {
          this.router.navigate(['ICMS/DACGM/viewDACGM']);
        }, 1500);
        this.getDACGMs(this.branchId);
      },
      (error: HttpErrorResponse) => {

      }
    );
  }
}
