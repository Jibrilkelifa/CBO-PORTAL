import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { IFRService } from '../../../../services/icms-services/ifr-services/ifr.service';
import { CaseStatusService } from '../../../../services/icms-services/ifr-services/case-status.service';
import { AllCategoryService } from '../../../../services/icms-services/all-category.service';
import { FraudTypeService } from '../../../../services/icms-services/ifr-services/fraud-type.service';
import { SuspectedFraudsterProfessionService } from '../../../../services/icms-services/ifr-services/suspectedFraudsterProfession.service';
import { OrganizationalUnitService } from '../../../../services/sso-services/organizational-unit.service';
import { TimeService } from '../../../../services/sso-services/time.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { IFR } from "../../../../models/icms-models/ifr-models/ifr";
import { CaseStatus } from '../../../../models/icms-models/ifr-models/case-status';
import { AllCategory } from '../../../../models/icms-models/all-category';
import { FraudType } from '../../../../models/icms-models/ifr-models/fraud-type';
import { FileUploadModule } from 'primeng/fileupload';
import { SuspectedFraudsterProfession } from '../../../../models/icms-models/ifr-models/suspected-fraudster-profession';


@Component({
  selector: 'app-accordions',
  templateUrl: './new-ifr.component.html',
  styleUrls: ['./new-ifr.component.scss'],
  providers: [MessageService, ConfirmationService]
})

export class NewFraudComponent implements OnInit {

  form01: FormGroup;
  fileSelected = false


  recoveredAmountError: string;
  public selectedFiles1: File;
  maxDate: Date;
  uploadedFiles: any[] = [];
  myDate = new Date();
  isButtonDisabled: boolean;
  isFileSelected:boolean
  public frauds: IFR[] = [];
  public fraud: IFR;
  public rolesStr: string[] = [];
  public fraudR: IFR[] = [];
  selectedFraud: IFR;
  isWrittenOff: boolean = false;
  public caseStatuses: CaseStatus[] = [];
  selectedCaseStatus: CaseStatus;
  public fraudCategories: AllCategory[] = [];
  selectedFraudCategory: AllCategory;
  public fraudTypes: FraudType[] = [];
  selectedFraudType: FraudType;
  public suspectedFraudsterProfessions: SuspectedFraudsterProfession[] = [];
  selectedSuspectedFraudsterProfession: SuspectedFraudsterProfession;
  public selectedBranch;
  public selectedTeam;
  public selectedSubProcess;
  branchId: number = Number(localStorage.getItem('branchId'));
  subProcessId: number = Number(localStorage.getItem('subProcessId'));
  fraudOccurrenceDate: Date;
  fraudDetectionDate: Date = new Date();
  update: boolean = false;
  newDiv: boolean = true;
  public idY: number;
  msgs: Message[] = [];
  value: string;
  datePresented: string;
  

  isOtherFraudCategorySelected: boolean = false;
  isClosedOrWrittenOffSelected: boolean = false;
  isOtherFraudTypeSelected: boolean = false;
  isOtherSuspectedFraudsterProfessionSelected: boolean = false;
  preparedBy: string = localStorage.getItem('name');
  authorizedBy: string = "Not Authorized";
  authorizationTimeStamp: string = "Not Authorized";
  currentDate: Date;
  caseId: string;

  generateCaseId(): void {
    this.timeService.getDate().subscribe(
      (response: any) => {
        const dateParts = response.time.split('/'); // split the date string by '/'
        const year = dateParts[2];
        const month = dateParts[0].padStart(2, "0");
        const day = dateParts[1].padStart(2, "0");
        this.fraudService.getSize().subscribe(
          (response: any) => {
            if (response == 0) {
              this.caseId = "0001/" + month + "/" + day + "/" + year;
            }
            else {
              this.fraudService.getFraud(response).subscribe(
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

  onFraudCategoryChange(event: any) {
    this.isOtherFraudCategorySelected = (event.value.name === 'Other');
  }
  onFraudTypeChange(event: any) {
    this.isOtherFraudTypeSelected = (event.value.name === 'Other');
  }
  onCaseStatusSelected() {
    if (this.selectedCaseStatus && this.selectedCaseStatus.name === "Written Off") {
      this.isWrittenOff = true;
    } else {
      this.isWrittenOff = false;
    }
  }
  onSelect1(event: any) {
    this.fileSelected = true
    this.selectedFiles1 = event.files[0];
    this.fileSelected = event.files.length > 0;
  }

  onSuspectedFraudsterProfessionChange(event: any) {
    this.isOtherSuspectedFraudsterProfessionSelected = (event.value.name === 'Other');
  }
  // onCaseStatusesChange(event: any) {
  //   this.isClosedOrWrittenOffSelected = (event.value.name === 'Closed'||  event.value.name === 'Written off' );
  // }

  constructor(
    private timeService: TimeService,
    private activatedRoute: ActivatedRoute,
    private fraudService: IFRService,
    private caseStatusService: CaseStatusService,
    private fraudCategoryService: AllCategoryService,
    private fraudTypeService: FraudTypeService,
    private suspectedFraudsterProfessionService: SuspectedFraudsterProfessionService,
    private messageService: MessageService,
    private router: Router,
    private organizationalUnitService: OrganizationalUnitService,
    private fb: FormBuilder
  ) { 
    // this.form01 = this.fb.group({
    //   signatureImage: ['', Validators.required]
    // });
  }


  ngOnInit() {
    this.populateRoles();
    if (this.checkRole("ROLE_ICMS_PROVISION")) {
      this.selectedCaseStatus.id = 3;
      this.selectedCaseStatus.name = "Written Off";
    }
    this.getFrauds(this.branchId);
    this.getCaseStatuses();
    this.getFraudCategories();
    this.getFraudTypes();
    this.getSuspectedFraudesterProfessions();
    this.getCurrentDate();
    this.generateCaseId();
    // this.getOrganizationalUnit(this.branchId);

    let x = this.activatedRoute.snapshot.paramMap.get("id");
    this.idY = +x;

    if (this.idY) {
      this.getFraud(this.idY);
      this.update = true;
      this.newDiv = false;
    }
  
    this.selectedBranch = JSON.parse(localStorage.getItem("branch"));
    this.selectedTeam = JSON.parse(localStorage.getItem("team"));
    this.selectedSubProcess =JSON.parse(localStorage.getItem("subProcess"));
  }

  checkRole(roleName: string): boolean {
    let result: boolean = false; // declare a variable to store the result
    this.rolesStr.forEach(role => {
      if (role.indexOf(roleName) !== -1) {
        result = true; // assign true to the result if the role matches
      }
    });
    return result; // return the result at the end of the function
  }
  

  populateRoles(): void {
    let index = 0;
    let cond = localStorage.getItem('role_' + index);
    while (cond) {

      this.rolesStr.push(cond);
      index++;
      cond = localStorage.getItem('role_' + index);
    }
  }

  // getOrganizationalUnit(branchId: number): void {
  //   this.organizationalUnitService.getOrganizationalUnit(branchId).subscribe(
  //     (response: any) => {
  //       this.selectedBranch = response;
  //     }
  //   );
  // }
  

  getCurrentDate(): void {
    this.timeService.getDate().subscribe(
      (response: any) => {
        this.currentDate = new Date(response.time);

        // this.datePresented = (this.currentDate.getMonth() + 1).toString().padStart(2, '0') + "/" + this.currentDate.getDate().toString().padStart(2, '0') + "/" + this.currentDate.getFullYear().toString();
        this.datePresented = this.currentDate.getFullYear().toString();
      }
    );
  }
  public populateSelectedCaseStatus(existingCaseStatus: CaseStatus): void {
    this.selectedCaseStatus = existingCaseStatus;
  }

  public getFrauds(branchId: number): void {
    this.fraudService.getFraudForBranch(branchId).subscribe(
      (response: IFR[]) => {
        this.frauds = response;

      },
      (error: HttpErrorResponse) => {

      }
    );
  }

  public getCaseStatuses(): void {
    this.caseStatusService.getCaseStatuses().subscribe(
      (response: CaseStatus[]) => {
        this.caseStatuses = response;

      },
      (error: HttpErrorResponse) => {

      }
    );
  }

  public getFraudCategories(): void {
    this.fraudCategoryService.getAllCategoriesBySubModuleName("IFR").subscribe(
      (response: AllCategory[]) => {
        this.fraudCategories = response;

      },
      (error: HttpErrorResponse) => {

      }
    );
  }

  public getFraudTypes(): void {
    this.fraudTypeService.getFraudTypes().subscribe(
      (response: FraudType[]) => {
        this.fraudTypes = response;

      },
      (error: HttpErrorResponse) => {

      }
    );
  }

  public getSuspectedFraudesterProfessions(): void {
    this.suspectedFraudsterProfessionService.getSuspectedFraudsterProfessions().subscribe(
      (response: SuspectedFraudsterProfession[]) => {
        this.suspectedFraudsterProfessions = response;

      },
      (error: HttpErrorResponse) => {

      }
    );
  }

  public getFraud(id: number): IFR {
    this.fraudService.getFraud(id).subscribe(
      (response: IFR) => {
        this.fraud = response;

      },
      (error: HttpErrorResponse) => {

      }
    );
    return this.fraud;
  }




  public addFraud(addFraudForm: NgForm): void {
    console.log(addFraudForm.value);
      const formData = new FormData();
      formData.append('incidentOrFraud', JSON.stringify(addFraudForm.value));
      formData.append('file', this.selectedFiles1);
      formData.append('caseId', addFraudForm.value.caseId);
      formData.append('caseStatus', JSON.stringify(addFraudForm.value.caseStatus));
      formData.append('preparedBy', addFraudForm.value.preparedBy);
      formData.append('authorizedBy', addFraudForm.value.authorizedBy);
      formData.append('authorizationTimeStamp', addFraudForm.value.authorizationTimeStamp);
      formData.append('fraudCause', addFraudForm.value.fraudCause);
      formData.append('fraudAmount', addFraudForm.value.fraudAmount);
      formData.append('allCategory', JSON.stringify(addFraudForm.value.allCategory));
      formData.append('otherFraudCategory', addFraudForm.value.otherFraudCategory);
      formData.append('fraudType', JSON.stringify(addFraudForm.value.fraudType));
      formData.append('otherFraudType', addFraudForm.value.otherFraudType);
      formData.append('fraudOccurrenceDate', addFraudForm.value.fraudOccurrenceDate);
      formData.append('fraudDetectionDate', addFraudForm.value.fraudDetectionDate);
      formData.append('fraudOccurrencePlace', addFraudForm.value.fraudOccurrencePlace);
      formData.append('fraudCommittingTechnique', addFraudForm.value.fraudCommittingTechnique);
      formData.append('reasonForDelay', addFraudForm.value.reasonForDelay);
      formData.append('reasonForFailedFraudAttempt', addFraudForm.value.reasonForFailedFraudAttempt);
      formData.append('amountRecovered', addFraudForm.value.amountRecovered);
      formData.append('provisionHeld', addFraudForm.value.provisionHeld);
      formData.append('actionTaken', addFraudForm.value.actionTaken);
      formData.append('suspectedFraudsterAddress', addFraudForm.value.suspectedFraudsterAddress);
      formData.append('suspectedFraudsterName', addFraudForm.value.suspectedFraudsterName);
      formData.append('suspectedFraudsterProfession', JSON.stringify(addFraudForm.value.suspectedFraudsterProfession));
      formData.append('otherSuspectedFraudsterProfession', addFraudForm.value.otherSuspectedFraudsterProfession);
      formData.append('otherComment', addFraudForm.value.otherComment);
      formData.append('team', JSON.stringify(addFraudForm.value.team));
       formData.append('branch', JSON.stringify(addFraudForm.value.branch));
      // formData.append('isWrittenOff', addFraudForm.value.isWrittenOff.toString());
      // formData.append('isAuthorized', addFraudForm.value.isAuthorized.toString());
      formData.append('inCaseOfClosedOrWrittenOff', addFraudForm.value.inCaseOfClosedOrWrittenOff);
      formData.append('subProcess', JSON.stringify(addFraudForm.value.subProcess));
    
      
    const recoveredAmount = addFraudForm.value.amountRecovered;
  const actualAmount = addFraudForm.value.fraudAmount;
  if (recoveredAmount > actualAmount) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Recovered amount cannot be greater than  actual amount.'
    });
  
    setTimeout(() => {
      this.messageService.clear(); 
    }, 5000); 
  
    return;
  }
    this.timeService.getDate().subscribe(
      (response: any) => {
        const dateParts = response.time.split('/'); // 
        const year = dateParts[2];
        const month = dateParts[0].padStart(2, "0");
        const day = dateParts[1].padStart(2, "0");
        const datePresented = `${month}/${day}/${year}`; 
        this.fraudService.getSize().subscribe(
          (response: any) => {
            if (response == 0) {
              addFraudForm.value.caseId = "0001/" + datePresented;
            }
            else {
              this.fraudService.getFraud(response).subscribe(
                (response: any) => {
                  if (response.caseId.slice(-4) === year) {
                    const lastCaseId = parseInt(response.caseId.slice(0, 4));
                    const nextCaseId = (lastCaseId + 1).toString().padStart(4, "0");
                    addFraudForm.value.caseId = nextCaseId + "/" + datePresented;
                  } else {
                    addFraudForm.value.caseId = "0001/" + datePresented;
                  }
                }
              )
            }
            this.fraudService.addFraud(formData).subscribe(
              (response: any) => {
                this.messageService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: "Incident/Fraud Added Successfully"
                });
                setTimeout(() => {
                }, 100000);
                this.getFrauds(this.branchId);
                  window.location.reload();
              },
              (error: HttpErrorResponse) => {

              }
            );
          }
        )
      }
    )
  }

  // public updateFraud(updateFraud: NgForm): void {
  //   const recoveredAmount: number = parseFloat(updateFraud.value.amountRecovered);
  //   const actualAmount: number = parseFloat(this.fraud.fraudAmount);
  // if (recoveredAmount > actualAmount) {
  //   this.messageService.add({
  //     severity: 'error',
  //     summary: 'Error',
  //     detail: 'Recovered amount cannot be greater than actual amount.'
  //   });
  
  //   setTimeout(() => {
  //     this.messageService.clear(); 
  //   }, 5000); 
  
  //   return;
  // }
  //   this.fraudService.updateFraud(updateFraud.value).subscribe(
  //     (response: IFR) =>
  //      {
  //       this.getFrauds(this.branchId);
       
  //       this.messageService.add({
  //         severity: 'success',
  //         summary: 'Success',
  //         detail: "Incident/Fraud updated Successfully!"
  //       });
  //       setTimeout(() => {
  //         this.router.navigate(['ICMS/Fraud/viewFraud']);
  //       }, 1500);
  //     },
  //     (error: HttpErrorResponse) => {

  //     }
  //   );
  // }

  public updateFraud(updateFraud: NgForm): void {
    const recoveredAmount: number = parseFloat(updateFraud.value.amountRecovered);
    const actualAmount: number = parseFloat(this.fraud.fraudAmount);
    
    if (recoveredAmount > actualAmount) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Recovered amount cannot be greater than actual amount.'
      });
  
      setTimeout(() => {
        this.messageService.clear(); 
      }, 5000);
  
      return;
    }
  
    const formData = new FormData();
    formData.append('incidentOrFraud', JSON.stringify(updateFraud.value));
    formData.append('file', this.selectedFiles1);
    formData.append('caseId', updateFraud.value.caseId);
    formData.append('caseStatus', JSON.stringify(updateFraud.value.caseStatus));
    formData.append('preparedBy', updateFraud.value.preparedBy);
    formData.append('authorizedBy', updateFraud.value.authorizedBy);
    formData.append('authorizationTimeStamp', updateFraud.value.authorizationTimeStamp);
    formData.append('fraudCause', updateFraud.value.fraudCause);
    formData.append('fraudAmount', updateFraud.value.fraudAmount);
    formData.append('allCategory', JSON.stringify(updateFraud.value.allCategory));
    formData.append('otherFraudCategory', updateFraud.value.otherFraudCategory);
    formData.append('fraudType', JSON.stringify(updateFraud.value.fraudType));
    formData.append('otherFraudType', updateFraud.value.otherFraudType);
    formData.append('fraudOccurrenceDate', updateFraud.value.fraudOccurrenceDate);
    formData.append('fraudDetectionDate', updateFraud.value.fraudDetectionDate);
    formData.append('fraudOccurrencePlace', updateFraud.value.fraudOccurrencePlace);
    formData.append('fraudCommittingTechnique', updateFraud.value.fraudCommittingTechnique);
    formData.append('reasonForDelay', updateFraud.value.reasonForDelay);
    formData.append('reasonForFailedFraudAttempt', updateFraud.value.reasonForFailedFraudAttempt);
    formData.append('amountRecovered', updateFraud.value.amountRecovered);
    formData.append('provisionHeld', updateFraud.value.provisionHeld);
    formData.append('actionTaken', updateFraud.value.actionTaken);
    formData.append('suspectedFraudsterAddress', updateFraud.value.suspectedFraudsterAddress);
    formData.append('suspectedFraudsterName', updateFraud.value.suspectedFraudsterName);
    formData.append('suspectedFraudsterProfession', JSON.stringify(updateFraud.value.suspectedFraudsterProfession));
    formData.append('otherSuspectedFraudsterProfession', updateFraud.value.otherSuspectedFraudsterProfession);
    formData.append('otherComment', updateFraud.value.otherComment);
    formData.append('team', JSON.stringify(updateFraud.value.team));
    formData.append('branch', JSON.stringify(updateFraud.value.branch));
    formData.append('inCaseOfClosedOrWrittenOff', updateFraud.value.inCaseOfClosedOrWrittenOff);
    formData.append('subProcess', JSON.stringify(updateFraud.value.subProcess));
  
    this.fraudService.updateFraud(formData).subscribe(
      (response: IFR) => {
        this.getFrauds(this.branchId);
  
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: "Incident/Fraud updated Successfully!"
        });
  
        setTimeout(() => {
          this.router.navigate(['ICMS/Fraud/viewFraud']);
        }, 1500);
      },
      (error: HttpErrorResponse) => {
  
      }
    );
  }
}
