import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService, ConfirmationService, Message } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

import { TimeService } from '../../../../../services/sso-services/time.service';
import { ShareModel } from "../../models/share-model";
import { ShareService } from "../../service/share-services.service";
import { AllCategoryService } from 'src/app/services/icms-services/all-category.service';
import { AllSubCategoryService } from 'src/app/services/icms-services/all-sub-category.service';
import { HttpErrorResponse } from '@angular/common/http';
import { StatusService } from 'src/app/services/icms-services/cipm-services/status.service';
import { Status } from 'src/app/models/icms-models/cipm-models/status';
import { ShareStatusModel } from '../../models/share-status-model';

@Component({
  selector: 'new-share',
  templateUrl: './new-share.component.html',
  styleUrls: ['./new-share.component.scss'],
  providers: [MessageService, ConfirmationService]
})

export class NewShareComponent implements OnInit {
  public Share: ShareModel = new ShareModel();
  public categories: any[] = [];
  public subCategories: any[] = [];
  public update: boolean = false;
  public idY: number;
  selectedstatus: Status;
  msgs: Message[] = [];
  branchId: number = Number(localStorage.getItem('branchId'));
  subProcessId: number = Number(localStorage.getItem('subProcessId'));
  public statuses: ShareStatusModel[];
  categoryName: string;
  public showOtherProductTypes: boolean = false;
  caseId: string;

  public selectedBranch;
  public selectedTeam;
  public selectedSubProcess;


  generateCaseId(): void {
    this.timeService.getDate().subscribe(
      (response: any) => {
        const dateParts = response.time.split('/'); 
        const year = dateParts[2];
        const month = dateParts[0].padStart(2, "0");
        const day = dateParts[1].padStart(2, "0");
        this.shareService.getSize().subscribe(
          (response: any) => {
            if (response == 0) {
              this.caseId = "0001/" + month + "/" + day + "/" + year;
            }
            else {
              this.shareService.findShareById(response).subscribe(
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
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private shareService: ShareService,
    private categoryService: AllCategoryService,
    private subCategoryService: AllSubCategoryService,
    private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private statusService :StatusService,
    private router: Router) { }

  ngOnInit() {
    this.Share.shareDate = new Date();
    this.primengConfig.ripple = true;
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.getShare(id);
        this.update = true;
      } else {
        this.selectedstatus = this.statuses.find(status => status.name === 'Open');
      }
    });

    this.selectedBranch = JSON.parse(localStorage.getItem("branch"));
    this.selectedTeam = JSON.parse(localStorage.getItem("team"));    
    this.selectedSubProcess =JSON.parse(localStorage.getItem("subProcess"))

    this.generateCaseId();
    this.getCategories();
    this.getStatus();

  }

  getShare(id: number) {
    this.shareService.findShareById(id).subscribe(
      (response: ShareModel) => {
        response.shareDate = new Date(response.shareDate); 
        this.Share = response;
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
    this.shareService.getStatuses().subscribe(
      (response: ShareStatusModel[]) => {
        this.statuses = response;        
        this.selectedstatus = this.statuses.find(status => status.name === "Open");
      },
      (error: HttpErrorResponse) => {
        // Handle error
      }
    );
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

  public populateSelectedStatus(existingStatus: Status): void {
    this.selectedstatus = existingStatus;
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


  submitShare(form: NgForm) {        
    if (form.valid) {
      let formValueWithDate = {
        ...form.value,
        shareDate: this.formatDate(this.Share.shareDate), // Convert date to string
        shareStatus: this.selectedstatus ,// Attach the status
        team: this.selectedTeam
      };
      
      if (this.update) {
        let updatedValue = {
          ...this.Share, 
          shareDate: this.formatDate(this.Share.shareDate), // Convert date to string
          shareStatus: this.selectedstatus, // Attach the status
          team: this.selectedTeam
        }        
        this.shareService.updateShare(updatedValue).subscribe(
          response => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: "Share updated Successfully!"
            });
            setTimeout(() => {
              this.router.navigate(['ICMS/Share/viewShare']);
            }, 1500);
            // handle response
          },
          error => {
            // handle error
          }
        );
      } else {
        this.shareService.addShare(formValueWithDate).subscribe(
          response => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: "Share created Successfully!"
            });
            setTimeout(() => {
              this.router.navigate(['ICMS/Share/viewShare']);
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
