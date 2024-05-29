import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { ProcurementModel } from '../../models/procurement-model';
import { ProcurementService } from '../../service/procurement-services.service';

@Component({
  selector: 'share-action',
  templateUrl: './procurement-action.component.html',
  styleUrls: ['./procurement-action.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ProcurementActionPlanComponent implements OnInit {
  public procurement: ProcurementModel;
  msgs: Message[] = [];
  public selectedDate: any;

  constructor(
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private procurementService: ProcurementService,
    private router: Router) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    let procurement = this.activatedRoute.snapshot.paramMap.get("procurement");
    this.procurement = procurement ? JSON.parse(procurement) : new ProcurementModel();
  }

  public approveActionPlan(approveActionPlanForm: NgForm): void {
    if (this.procurement) {
      let formattedDate = this.selectedDate.getFullYear() + '-' + (this.selectedDate.getMonth() + 1).toString().padStart(2, '0') + '-' + this.selectedDate.getDate().toString().padStart(2, '0');
  
      let procurementData = {
        ...this.procurement,
        actionPlanDueDate: formattedDate
      };
    
      this.procurementService.approveActionPlanDate(procurementData).subscribe(
        (response: any) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: "Action plan approved successfully!"
          });
          setTimeout(() => {
            this.router.navigate(['ICMS/Procurement/viewProcurement']);
          }, 1000);
        },
        (error: HttpErrorResponse) => {
          // Handle error
        }
      );
    } else {
      console.error('Procurement object is not initialized');
    }
  }


}
