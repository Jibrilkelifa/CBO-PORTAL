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
import { SubProcess } from 'src/app/modules/sasv/models/subProcess';

@Component({
  selector: 'app-accordions',
  templateUrl: './dacgm-action.component.html',
  styleUrls: ['./dacgm-action.component.scss'],
  providers: [MessageService, ConfirmationService]
})

export class DACGMPlanComponent implements OnInit {
  public dacgms: DACGM[] = [];
  public dacgm: DACGM;
  public selectedBranch;
  public selectedSubProcess;
  // public selectedSubprocess: SubProcess;
  public selectedCategory: AllCategory;
  public selectedSubCategory: AllSubCategory;
  public selectedIrregularity: String;
  public selectedActivityStatus: String;
  public dacgmR: DACGM[] = [];
  public selectedDACGM: DACGM;
  
  update: boolean = false;
  newDiv: boolean = true;
  public idY: number;
  msgs: Message[] = [];
  value: string;
  branchId: number = Number(localStorage.getItem('branchId'));
  isOtherIrregularitySelected: boolean = false;
  isOtherIPCTSelected: boolean = false;
  insuranceExpireDate: Date;
  caseId: string;

  categoryName: string;
  categories: AllCategory[];
  subCategories: AllSubCategory[];
  irregularities: AllIrregularity[];
  selectedDate: string;
  selectedAccountNumber: string;
  selectedAmountInvolved: string;
  selectedOtherIrregularity: string;
  selectedActionPlanDueDate: string;
  selectedAccountName: string;
  selectedResponsiblePerson:string;
  selectedCaseId:String;
  

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


  public getDACGM(id: number): DACGM {
    this.dacgmService.getDACGM(id).subscribe(
      (response: DACGM) => {
        this.dacgm = response;
        console.log(this.dacgm)
        this.selectedCaseId = this.dacgm.caseId;
       this.selectedBranch = this.dacgm.branch;
       this.selectedSubProcess =this.dacgm.subProcess;
        this.selectedDate = this.dacgm.date;
        this.selectedActivityStatus= this.dacgm.activityStatus.name;
        this.selectedIrregularity =this.dacgm.irregularity.name;
        this.selectedResponsiblePerson=this.dacgm.responsiblePerson;
        this.selectedAccountNumber = this.dacgm.accountNumber;
        this.selectedAccountName = this.dacgm.accountName;
        this.selectedAmountInvolved = this.dacgm.amountInvolved;
        this.selectedOtherIrregularity = this.dacgm.otherIrregularity;
        this.selectedActionPlanDueDate = this.dacgm.actionPlanDueDate;
     
     
      },
      (error: HttpErrorResponse) => {

      }
    );
    return this.dacgm;
   
  }

  
    
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
    public approveActionPlan(approveActionPlanForm: NgForm): void {
      this.dacgmService.approveActionPlanDate(approveActionPlanForm.value.id, approveActionPlanForm.value.actionPlanDueDate).subscribe(
        (response: any) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: "Action plan Added approved Successfully!"
          });
          setTimeout(() => {
          }, 1000);
          this.getDACGM(this.idY);
          this.router.navigate(['ICMS/DACGM/viewDACGM']);
        },
        (error: HttpErrorResponse) => {
  
        }
      );
    }  
}
