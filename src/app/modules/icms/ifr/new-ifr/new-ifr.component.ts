import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
import { SuspectedFraudsterProfession } from '../../../../models/icms-models/ifr-models/suspected-fraudster-profession';


@Component({
  selector: 'app-accordions',
  templateUrl: './new-ifr.component.html',
  styleUrls: ['./new-ifr.component.scss'],
  providers: [MessageService, ConfirmationService]
})

export class NewFraudComponent implements OnInit {
  public frauds: IFR[] = [];
  public fraud: IFR;
  public rolesStr: string[] = [];
  public fraudR: IFR[] = [];
  selectedFraud: IFR;
  public caseStatuses: CaseStatus[] = [];
  selectedCaseStatus: CaseStatus;
  public fraudCategories: AllCategory[] = [];
  selectedFraudCategory: AllCategory;
  public fraudTypes: FraudType[] = [];
  selectedFraudType: FraudType;
  public suspectedFraudsterProfessions: SuspectedFraudsterProfession[] = [];
  selectedSuspectedFraudsterProfession: SuspectedFraudsterProfession;
  public selectedBranch;
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
    private organizationalUnitService: OrganizationalUnitService
  ) { }

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
    this.selectedSubProcess =JSON.parse(localStorage.getItem("subProcess"))
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
    this.timeService.getDate().subscribe(
      (response: any) => {
        const dateParts = response.time.split('/'); // split the date string by '/'
        const year = dateParts[2];
        const month = dateParts[0].padStart(2, "0");
        const day = dateParts[1].padStart(2, "0");
        const datePresented = `${month}/${day}/${year}`; // format datePresented as a string in MM/DD/YYYY format
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
            this.fraudService.addFraud(addFraudForm.value).subscribe(
              (response: any) => {
                this.messageService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: "Incident/Fraud Added Successfully"
                });
                setTimeout(() => {
                }, 1000);
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

  public updateFraud(updateFraud: NgForm): void {
    this.fraudService.updateFraud(updateFraud.value).subscribe(
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
