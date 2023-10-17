import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../../../services/employee-service/employee.service';
import { SignatureService } from '../../../services/signature-service/signature.service';
import { SignatureDTO } from '../../../models/signature';
import { Employee } from '../../../models/employee';
import { SubProcessService } from '../../../services/subprocess-service/subprocess.service';
import { ProcessService } from '../../../services/process-service/process.service';
import { SubProcess } from '../../../models/subProcess';
import { Process } from '../../../models/process';
import { AuthorityDTO } from '../../../models/authority';
import { AuthorityService } from '../../../services/authority-service/authority.service';
import { Branch } from '../../../models/branch';
import { District } from '../../../models/district';
import { BranchService } from '../../../services/branch-service/branch.service';
import { DistrictService } from '../../../services/district-service/district.service';

@Component({
  selector: 'newAuthority',
  templateUrl: './newAuthority.component.html',
  styleUrls: ['./newAuthority.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class NewAuthorityComponent implements OnDestroy {
  public subProcessList: SubProcess[] = [];
  public processList: Process[] = [];
  public employeeslist: Employee[] = [];
  public branchList: Branch[] = [];
  public districtList: District[] = [];

  public authorityInfo: AuthorityDTO = new AuthorityDTO();
  selectedAuthorityInfo: SignatureDTO;

  public update: boolean = false;

  public dropdownOptions = ['Sub Process', 'Process', 'Branch/Team', 'District'];
  public selectedDropdown: string;

  private subscriptions: Subscription[] = [];

  constructor(
    private messageService: MessageService,
    private authorityService: AuthorityService,
    private subProcessService: SubProcessService,
    private processService: ProcessService,
    private employeeService: EmployeeService,
    private branchService: BranchService,
    private districtService: DistrictService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) { }

  ngOnInit() {
    this.getProcessList();
    this.getSubProcessList();
    this.getEmployeeslist();
    this.getDistrictList();
    this.getBranchList();
    if (this.config.data?.authority) {
      this.authorityInfo = this.config.data.authority;
      this.update = true;
    }
    this.identifyUpdateDropdown(this.authorityInfo);
  }

  getEmployeeslist(): void {
    this.employeeService.getEmployeesList().subscribe(
      (response: any) => {
        this.employeeslist = response.result;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  getProcessList(): void {
    this.processService.getProcessList().subscribe(
      (response: any) => {
        this.processList = response.result;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  getSubProcessList(): void {
    this.subProcessService.getSubProcessList().subscribe(
      (response: any) => {
        this.subProcessList = response.result;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  getDistrictList(): void {
    this.districtService.getDistrictList().subscribe(
      (response: any) => {
        this.districtList = response.result;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  getBranchList(): void {
    this.branchService.getBranchList().subscribe(
      (response: any) => {
        this.branchList = response.result;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  submitAuthority(authorityForm: NgForm): void {
    if (this.update) {
      this.updateAuthority(authorityForm);
    } else {
      this.addAuthority(authorityForm);
    }
  }

  addAuthority(addDivForm: NgForm): void {
    this.subscriptions.push(
      this.authorityService
        .createAuthority(addDivForm.value)
        .subscribe((response: any) => {
          this.messageService.clear();
          this.ref.close(response);
        })
    );
  }

  updateAuthority(addDivForm: NgForm): void {
    const authority: AuthorityDTO = addDivForm.value;
    authority.id = this.authorityInfo.id;
    this.subscriptions.push(
      this.authorityService
        .updateAuthority(authority)
        .subscribe((response: any) => {
          this.messageService.clear();
          this.ref.close(response);
        })
    );
  }

  identifyUpdateDropdown(authorityData: AuthorityDTO) {
    if (authorityData.subProcess) {
      this.selectedDropdown = "Sub Process";
    }
    else if (authorityData.process) {
      this.selectedDropdown = "Process";
    }
    else if (authorityData.branch) {
      this.selectedDropdown = "Branch";
    }
    else if (authorityData.district) {
      this.selectedDropdown = "District";
    }
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  closeDialog(): void {
    this.ref.close();
  }
}
