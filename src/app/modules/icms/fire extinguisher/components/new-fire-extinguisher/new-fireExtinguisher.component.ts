import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService, ConfirmationService, Message } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

import { TimeService } from '../../../../../services/sso-services/time.service';
import { FireExtinguisherModel } from "../../models/fireExtinguisher-model";
import { FireExtinguisherService } from "../../service/fireExtinguisher-services.service";
import { Status } from 'src/app/models/icms-models/cipm-models/status';
import { log } from 'console';

@Component({
  selector: 'new-fireExtinguisher',
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
  public statuses: Status[];
  categoryName: string;
  public showOtherProductTypes: boolean = false;
  caseId: string;
  

  constructor(
    private timeService: TimeService,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private fireExtinguisherService: FireExtinguisherService,
    private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private router: Router) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.getFireExtinguisherService(id);
        this.update = true;
      } else {
        this.selectedstatus = this.statuses.find(status => status.name === 'Working');
      }
     
    });

    this.FireExtinguisher.subProcess = JSON.parse(localStorage.getItem('subProcess'));
    // this.FireExtinguisher.branch = JSON.parse(localStorage.getItem('branch'))?.name;
    this.FireExtinguisher.branch = {id: 1, name: "Finfinee branch"};
  }

  getFireExtinguisherService(id: number) {
    this.fireExtinguisherService.findFireExtinguisherById(id).subscribe(
      (response: FireExtinguisherModel) => {
        this.FireExtinguisher = response;
        this.selectedstatus = { id: response.status.id, name: response.status.name };             
      },
      error => {
        // handle error
      }
    );
  }
  
  

  compareStatus(s1: any, s2: any) {
    return s1 && s2 ? s1.name === s2.name : s1 === s2;
  }
  

  calculateDaysLeft() {
    if (this.FireExtinguisher.nextInspectionDate) {
        const today = new Date();
        const nextInspectionDate = new Date(this.FireExtinguisher.nextInspectionDate);
        const diffInMilliseconds = nextInspectionDate.getTime() - today.getTime();
        const diffInDays = diffInMilliseconds / (1000 * 3600 * 24);
        this.FireExtinguisher.daysLeftForInspection = Math.round(diffInDays);
    }
}


  submitFireExtinguisher(form: NgForm) {    
    if (form.valid) {
      if (this.update) {
        let updatedValue = {
          ...this.FireExtinguisher, 
          status: this.selectedstatus.name,
          subProcess: this.FireExtinguisher.subProcess,
          branch: this.FireExtinguisher.branch
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
        let formattedValue = {
          ...this.FireExtinguisher, 
          inspectionDate: this.formatDate(this.FireExtinguisher.inspectionDate),
          nextInspectionDate: this.formatDate(this.FireExtinguisher.nextInspectionDate), 
          status: this.selectedstatus.name,
          subProcess: this.FireExtinguisher.subProcess,
          branch: this.FireExtinguisher.branch
        }  
        
        this.fireExtinguisherService.addFireExtinguisher(formattedValue).subscribe(
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