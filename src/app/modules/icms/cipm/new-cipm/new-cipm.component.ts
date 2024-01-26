import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CIPMService } from '../../../../services/icms-services/cipm-services/cipm.service';
import { CollateralTypeService } from '../../../../services/icms-services/cipm-services/ct.service';
import { OrganizationalUnitService } from '../../../../services/sso-services/organizational-unit.service';
import { IPCTService } from '../../../../services/icms-services/cipm-services/ipct.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, FilterService, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { CIPM } from "../../../../models/icms-models/cipm-models/cipm";
import { CollateralType } from '../../../../models/icms-models/cipm-models/collatoral-type';
import { IPCT } from '../../../../models/icms-models/cipm-models/ipct';
import { Branch } from 'src/app/models/sso-models/branch';
import {Status} from '../../../../models/icms-models/cipm-models/status';
import {StatusService} from '../../../../services/icms-services/cipm-services/status.service'

@Component({
  selector: 'app-accordions',
  templateUrl: './new-cipm.component.html',
  styleUrls: ['./new-cipm.component.scss'],
  providers: [MessageService, ConfirmationService]
})

export class NewCIPMComponent implements OnInit {
  public cipms: CIPM[] = [];
  public cipm: CIPM;
  // public selectedBranch: Branch;
  public selectedBranch;
  public selectedSubProcess;
  public statuses: Status[] = [];
  selectedstatus: Status;
  public cipmR: CIPM[] = [];
  selectedCIMP: CIPM;
  public collatoralTypes: CollateralType[] = [];
  selectedcollatoralType: CollateralType;
  public IPCTs: IPCT[] = [];
  selectedIPCT: IPCT;
  update: boolean = false;
  newDiv: boolean = true;
  public idY: number;
  msgs: Message[] = [];
  value: string;
  branchId: number = Number(localStorage.getItem('branchId'));
  
  subProcessId: number = Number(localStorage.getItem('subProcessId'));
  authorizedBy: string = "Not Authorized"
  preparedBy: string = localStorage.getItem('name');
  authorizationTimeStamp: string = "Not Authorized"
  isOtherCollateralTypeSelected: boolean = false;
  isOtherIPCTSelected: boolean = false;
  insuranceExpireDate: Date;

  constructor(private filterService: FilterService, private primengConfig: PrimeNGConfig, private messageService: MessageService, private cipmService: CIPMService,private statusService :StatusService, private collatoralTypeService: CollateralTypeService, private organizationalUnitService: OrganizationalUnitService, private ipctService: IPCTService, private activatedRoute: ActivatedRoute, private confirmationService: ConfirmationService, private router: Router) { }

  ngOnInit() {
    this.getCIPMs(this.branchId);
    this.getCollatoralTypes();
    this.getIPCTs();
    this.getStatus();
    // alert(this.subProcessId);
    
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


    if (this.idY) {
      this.getCIPM(this.idY);
      this.update = true;
      this.newDiv = false;
    }
  }

  onIPCTChange(event: any) {
    this.isOtherIPCTSelected = (event.value.name === 'Other');
  }

  onCollateralTypeChange(event: any) {
    this.isOtherCollateralTypeSelected = (event.value.name === 'Other');
  }

  public getCIPMs(branchId: number): void {
    this.cipmService.getCIPMForBranch(branchId).subscribe(
      (response: CIPM[]) => {
        this.cipms = response;
      },
      (error: HttpErrorResponse) => {

      }
    );
  }

  public getCollatoralTypes(): void {
    this.collatoralTypeService.getCollatoralTypes().subscribe(
      (response: CollateralType[]) => {
        this.collatoralTypes = response;
      },
      (error: HttpErrorResponse) => {

      }
    );
  }

  public getIPCTs(): void {
    this.ipctService.getIPCTs().subscribe(
      (response: IPCT[]) => {
        this.IPCTs = response;
      },
      (error: HttpErrorResponse) => {

      }
    );
  }
  // public getStatus(): void {
  //   this.statusService.getStatuses().subscribe(
  //     (response: Status[]) => {
  //       this.statuses = response;
  //     },
  //     (error: HttpErrorResponse) => {

  //     }
  //   );
  // }
  // public selectedActivityStatus: ActivityStatus; // Declare the selectedActivityStatus property

public getStatus(): void {
  this.statusService.getStatuses().subscribe(
    (response: Status[]) => {
      this.statuses = response;
      // Set the initial selectedActivityStatus to "Open" when adding data
      this.selectedstatus = this.statuses.find(status => status.name === "Active");
    },
    (error: HttpErrorResponse) => {
      // Handle error
    }
  );
}

public populateSelectedStatus(existingStatus: Status): void {
  this.selectedstatus = existingStatus;
}

  public getCIPM(id: number): CIPM {
    this.cipmService.getCIPM(id).subscribe(
      (response: CIPM) => {
        this.cipm = response;
      },
      (error: HttpErrorResponse) => {

      }
    );
    return this.cipm;
  }

  public addCIPM(addCIPMForm: NgForm): void {
    this.cipmService.addCIPM(addCIPMForm.value).subscribe(
      (response: any) => {
        this.getCIPMs(this.branchId);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: "Collateral Insurance Policy Monitoring added Successfully!"
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);

      },
      (error: HttpErrorResponse) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Failed',
          detail: "Failed to create"
        });
        setTimeout(() => {
        }, 1000);

      }
    );
  }

  public updateCIPM(updateCIPM: NgForm): void {
    // if (updateCIPM.value.otherInsuranceCoverageType == undefined) {
    //   updateCIPM.value.otherInsuranceCoverageType = "";
    // }
    this.cipmService.updateCIPM(updateCIPM.value).subscribe(
      (response: CIPM) => {
        this.cipm = response;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: "Collateral Insurance Policy Monitoring updated Successfully!"
        });
        setTimeout(() => {
          this.router.navigate(['ICMS/CIPM/viewCIPM']);
        }, 1500);
        this.getCIPMs(this.branchId);
      },
      (error: HttpErrorResponse) => {

      }
    );
  }
}



