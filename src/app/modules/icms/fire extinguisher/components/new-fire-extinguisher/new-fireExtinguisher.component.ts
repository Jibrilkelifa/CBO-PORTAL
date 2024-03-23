import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService, ConfirmationService, Message } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

import { TimeService } from '../../../../../services/sso-services/time.service';
import { FireExtinguisherModel } from "../../models/fireExtinguisher-model";
import { FireExtinguisherService } from "../../service/fireExtinguisher-services.service";
import { AllCategoryService } from 'src/app/services/icms-services/all-category.service';
import { AllSubCategoryService } from 'src/app/services/icms-services/all-sub-category.service';
import { HttpErrorResponse } from '@angular/common/http';
import { StatusService } from 'src/app/services/icms-services/cipm-services/status.service';
import { Status } from 'src/app/models/icms-models/cipm-models/status';

@Component({
  selector: 'new-finance',
  templateUrl: './new-fireExtinguisher.component.html',
  styleUrls: ['./new-fireExtinguisher.component.scss'],
  providers: [MessageService, ConfirmationService]
})

export class NewFireExtinguisherComponent implements OnInit {
  public FireExtinguisher: FireExtinguisherModel = new FireExtinguisherModel();
  public categories: any[] = [];
  public subCategories: any[] = [];
  public update: boolean = false;
  public idY: number;
  selectedstatus: Status;
  msgs: Message[] = [];
  branchId: number = Number(localStorage.getItem('branchId'));
  subProcessId: number = Number(localStorage.getItem('subProcessId'));
  public statuses: any[];
  categoryName: string;
  public showOtherProductTypes: boolean = false;
  caseId: string;


  constructor(
    private timeService: TimeService,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private fireExtinguisherService: FireExtinguisherService,
    private categoryService: AllCategoryService,
    private subCategoryService: AllSubCategoryService,
    private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private statusService :StatusService,
    private router: Router) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.getFireExtinguisherService(id);
        this.update = true;
      } else {
        this.selectedstatus = this.statuses.find(status => status.name === 'Active');
      }
    });

    this.getCategories();
    this.getStatus();

  }

  getFireExtinguisherService(id: number) {
    this.fireExtinguisherService.findFireExtinguisherById(id).subscribe(
      (response: FireExtinguisherModel) => {
        this.FireExtinguisher = response;
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
    this.statusService.getStatuses().subscribe(
      (response: Status[]) => {
        this.statuses = response;
        this.selectedstatus = this.statuses.find(status => status.name === "Active");
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

  submitFireExtinguisher(form: NgForm) {    
    if (form.valid) {
      let formValueWithDate = {
        ...form.value,
        inspectionDate: this.formatDate(this.FireExtinguisher.inspectionDate), // Convert date to string
        nextInspectionDate: this.formatDate(this.FireExtinguisher.nextInspectionDate), // Convert date to string
        status: this.selectedstatus // Attach the status
      };
      if (this.update) {
        let updatedValue = {
          ...this.FireExtinguisher, 
          inspectionDate: this.formatDate(this.FireExtinguisher.inspectionDate),
          nextInspectionDate: this.formatDate(this.FireExtinguisher.nextInspectionDate), 
          status: this.selectedstatus // Attach the status
        }        
        this.fireExtinguisherService.updateFireExtinguisher(updatedValue).subscribe(
          response => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: "Fire extinguisher updated Successfully!"
            });
            setTimeout(() => {
              this.router.navigate(['ICMS/FireExtinguisher/viewFireExtinguisher']);
            }, 1500);
            // handle response
          },
          error => {
            // handle error
          }
        );
      } else {
        this.fireExtinguisherService.addFireExtinguisher(formValueWithDate).subscribe(
          response => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: "Fire extinguisher created Successfully!"
            });
            setTimeout(() => {
              this.router.navigate(['ICMS/FireExtinguisher/viewFireExtinguisher']);
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
