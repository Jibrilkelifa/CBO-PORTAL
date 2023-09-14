import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DACGMService } from '../../../../services/icms-services/dacgm-services/dacgm.service';
import { OrganizationalUnitService } from '../../../../services/sso-services/organizational-unit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, FilterService, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { DACGM } from "../../../../models/icms-models/dacgm-models/dacgm";
// import { OrganizationalUnit } from 'src/app/models/sso-models/organizational-unit';
import { AllCategory } from 'src/app/models/icms-models/all-category';
import { AllSubCategory } from 'src/app/models/icms-models/all-sub-category';
import { AllIrregularity } from 'src/app/models/icms-models/all-irregularity';
import { AllCategoryService } from 'src/app/services/icms-services/all-category.service';
import { AllSubCategoryService } from 'src/app/services/icms-services/all-sub-category.service';
import { AllIrregularityService } from 'src/app/services/icms-services/all-irregularity.service';
import { ActivityStatusService } from 'src/app/services/icms-services/dacgm-services/activity-status.service'
import { ActivityStatus } from 'src/app/models/icms-models/dacgm-models/activity-status';

@Component({
  selector: 'app-accordions',
  templateUrl: './new-dacgm.component.html',
  styleUrls: ['./new-dacgm.component.scss'],
  providers: [MessageService, ConfirmationService]
})

export class NewDACGMComponent implements OnInit {
  public dacgms: DACGM[] = [];
  public dacgm: DACGM;
  public selectedOrganizationalUnit: any;
  public selectedCategory: AllCategory;
  public selectedSubCategory: AllSubCategory;
  public selectedIrregularity: AllIrregularity;
  public selectedActivityStatus: ActivityStatus;
  public dacgmR: DACGM[] = [];
  public selectedDACGM: DACGM;
  update: boolean = false;
  newDiv: boolean = true;
  public idY: number;
  msgs: Message[] = [];
  value: string;
  organizationalUnitId: number = Number(localStorage.getItem('organizationalUnitId'));
  isOtherIrregularitySelected: boolean = false;
  isOtherIPCTSelected: boolean = false;
  insuranceExpireDate: Date;

  categoryName: string;
  categories: AllCategory[];
  subCategories: AllSubCategory[];
  irregularities: AllIrregularity[];

  constructor(
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
    this.getDACGMs(this.organizationalUnitId);
    this.primengConfig.ripple = true;
    let x = this.activatedRoute.snapshot.paramMap.get("id");
    this.idY = +x;
    this.organizationalUnitService.getOrganizationalUnit(this.organizationalUnitId).subscribe(
      (response: any) => {
        this.selectedOrganizationalUnit = response;
      },
      (error: HttpErrorResponse) => {

      }
    );
    this.activityStatusService.getActivityStatus(1).subscribe(
      (response: any) => {
        this.selectedActivityStatus = response;
      },
      (error: HttpErrorResponse) => {

      }
    );
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

  public getDACGMs(organizationalUnitId: number): void {
    this.dacgmService.getDACGMForBranch(organizationalUnitId).subscribe(
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
    this.dacgmService.addDACGM(addDACGMForm.value).subscribe(
      (response: any) => {
        this.getDACGMs(this.organizationalUnitId);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: "Daily Activity Gap added Successfully!"
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);

      },
      (error: HttpErrorResponse) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Failed',
          detail: "Faled to create"
        });
        setTimeout(() => {
        }, 1000);

      }
    );
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
        this.getDACGMs(this.organizationalUnitId);
      },
      (error: HttpErrorResponse) => {

      }
    );
  }
}
