import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { FinanceModel } from '../../models/finance-model';
import { FinanceService } from '../../service/finance-services.service';

@Component({
  selector: 'finance-action',
  templateUrl: './finance-action.component.html',
  styleUrls: ['./finance-action.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class FinanceActionPlanComponent implements OnInit {
  public finance: FinanceModel;
  msgs: Message[] = [];
  public selectedDate: any;

  constructor(
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private financeService: FinanceService,
    private router: Router) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    let finance = this.activatedRoute.snapshot.paramMap.get("finance");
    this.finance = finance ? JSON.parse(finance) : new FinanceModel();
  }

  public approveActionPlan(approveActionPlanForm: NgForm): void {
    if (this.finance) {
      let formattedDate = this.selectedDate.getFullYear() + '-' + (this.selectedDate.getMonth() + 1).toString().padStart(2, '0') + '-' + this.selectedDate.getDate().toString().padStart(2, '0');
  
      let financeData = {
        ...this.finance,
        actionPlanDueDate: formattedDate
      };
    
      this.financeService.approveActionPlanDate(financeData).subscribe(
        (response: any) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: "Action plan approved successfully!"
          });
          setTimeout(() => {
            this.router.navigate(['ICMS/Finance/viewFinance']);
          }, 1000);
        },
        (error: HttpErrorResponse) => {
          // Handle error
        }
      );
    } else {
      console.error('Finance object is not initialized');
    }
  }


}
