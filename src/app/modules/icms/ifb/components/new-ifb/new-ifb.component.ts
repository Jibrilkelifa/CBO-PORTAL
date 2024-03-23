import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService, ConfirmationService, Message } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

import { TimeService } from '../../../../../services/sso-services/time.service';
import { IFB } from "../../models/ifb";
import { IFBService } from "./../../service/IFB-services.service";
import { AllCategoryService } from 'src/app/services/icms-services/all-category.service';
import { AllSubCategoryService } from 'src/app/services/icms-services/all-sub-category.service';
import { ProductTypeService } from 'src/app/services/icms-services/cipm-services/pt.service';
import { HttpErrorResponse } from '@angular/common/http';
import { StatusService } from 'src/app/services/icms-services/cipm-services/status.service';
import { Status } from 'src/app/models/icms-models/cipm-models/status';

@Component({
  selector: 'new-ifb',
  templateUrl: './new-ifb.component.html',
  styleUrls: ['./new-ifb.component.scss'],
  providers: [MessageService, ConfirmationService]
})

export class NewIFBComponent implements OnInit {
  public IFB: IFB = new IFB();
  public categories: any[] = [];
  public subCategories: any[] = [];
  public productTypes: any[] = [];
  public otherProductTypes: any[] = [];
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

  generateCaseId(): void {
    this.timeService.getDate().subscribe(
      (response: any) => {
        const dateParts = response.time.split('/');
        const year = dateParts[2];
        const month = dateParts[0].padStart(2, "0");
        const day = dateParts[1].padStart(2, "0");
        this.IFBService.getSize().subscribe(
          (response: any) => {
            if (response == 0) {
              this.caseId = "0001/" + month + "/" + day + "/" + year;
            }
            else {
              this.IFBService.findIFBById(response).subscribe(
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
    private IFBService: IFBService,
    private categoryService: AllCategoryService,
    private subCategoryService: AllSubCategoryService,
    private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private productTypeService: ProductTypeService,
    private statusService :StatusService,
    private router: Router) { }

  ngOnInit() {
    this.IFB.ifbDate = new Date();
    this.primengConfig.ripple = true;
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.getIFB(id);
        this.update = true;
      } else {
        this.selectedstatus = this.statuses.find(status => status.name === 'Active');
      }
    });

    this.getCategories();
    this.getProductTypes();
    this.generateCaseId();
    this.getStatus();

  }

  getIFB(id: number) {
    this.IFBService.findIFBById(id).subscribe(
      (response: IFB) => {
        response.ifbDate = new Date(response.ifbDate); 
        this.IFB = response;
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

  public getProductTypes(): void {
    this.productTypeService.getProductTypes().subscribe(
      (response: any[]) => {
        this.productTypes = response;        
      },
      (error: HttpErrorResponse) => {

      }
    );
  }

  getCategories() {
    this.categoryService.getAllCategoriesBySubModuleName("IFBPIC").subscribe(
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
    this.subCategoryService.getAllSubCategoriesBySubModuleNameAndCategoryName("IFBPIC", event.value.name).subscribe(
      (response: any[]) => {
        this.categoryName = event.value.name;
        this.subCategories = response;
      },
      (error: HttpErrorResponse) => {

      }
    )
  }

  submitIFB(form: NgForm) {
    console.log("rrrr", form.value);
    
    if (form.valid) {
      let formValueWithDate = {
        ...form.value,
        ifbDate: this.formatDate(this.IFB.ifbDate), // Convert date to string
        status: this.selectedstatus // Attach the status
      };
      if (this.update) {
        let updatedValue = {
          ...this.IFB, 
          ifbDate: this.formatDate(this.IFB.ifbDate), // Convert date to string
          status: this.selectedstatus // Attach the status
        }        
        this.IFBService.updateIFB(updatedValue).subscribe(
          response => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: "IFB updated Successfully!"
            });
            setTimeout(() => {
              this.router.navigate(['ICMS/IFB/viewIFB']);
            }, 1500);
            // handle response
          },
          error => {
            // handle error
          }
        );
      } else {
        this.IFBService.addIFB(formValueWithDate).subscribe(
          response => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: "IFB created Successfully!"
            });
            setTimeout(() => {
              this.router.navigate(['ICMS/IFB/viewIFB']);
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
