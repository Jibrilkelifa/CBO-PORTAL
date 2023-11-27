import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../../../services/employee-service/employee.service';
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
import { TeamService } from '../../../services/team-service/team.service';
import { Team } from 'src/app/models/sso-models/team';

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
  public teamList: Team[] = [];

  public authorityInfo: AuthorityDTO = new AuthorityDTO();
  selectedAuthorityInfo: SignatureDTO;

  public subProcessSelected: boolean;

  public update: boolean = false;

  public dropdownOptions = ['Process', 'Sub Process', 'District', 'Branch', 'Team'];
  public selectedDropdown: string;
  public processSelected: boolean;


  private subscriptions: Subscription[] = [];

  constructor(
    private messageService: MessageService,
    private authorityService: AuthorityService,
    private subProcessService: SubProcessService,
    private processService: ProcessService,
    private employeeService: EmployeeService,
    private branchService: BranchService,
    private districtService: DistrictService,
    private teamService: TeamService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) { }

  ngOnInit() {
    this.getProcessList();
    this.getSubProcessList();
    this.getDistrictList();
    this.getBranchList();
    this.getTeamList();
    if (this.config.data?.authority) {
      this.authorityInfo = this.config.data.authority;
      this.update = true;
    }
    this.identifyUpdateDropdown(this.authorityInfo);
  }

  onSearch(event: any) {
    if (event.query.length >= 3) {
      let query = event.query.toUpperCase();
      this.employeeService.getEmployees(query)
        .subscribe((response: any) => {
          this.employeeslist = response.result;
        });
    }
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

  getTeamList(): void {
    this.teamService.getTeamList().subscribe(
      (response: any) => {
        this.teamList = response.result;
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
    else if (authorityData.branch) {
      this.selectedDropdown = "Branch";
    }
    else if (authorityData.team) {
      this.selectedDropdown = "Team";
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
