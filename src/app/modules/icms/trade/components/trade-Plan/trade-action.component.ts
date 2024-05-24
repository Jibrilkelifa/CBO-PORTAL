import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { TradeModel } from '../../models/trade-model';
import { TradeService } from '../../service/trade-services.service';

@Component({
  selector: 'share-action',
  templateUrl: './trade-action.component.html',
  styleUrls: ['./trade-action.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class TradeActionPlanComponent implements OnInit {
  public trade: TradeModel;
  msgs: Message[] = [];
  public selectedDate: any;

  constructor(
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private tradeService: TradeService,
    private router: Router) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    let trade = this.activatedRoute.snapshot.paramMap.get("trade");
    this.trade = trade ? JSON.parse(trade) : new TradeModel();
  }

  public approveActionPlan(approveActionPlanForm: NgForm): void {
    if (this.trade) {
      let formattedDate = this.selectedDate.getFullYear() + '-' + (this.selectedDate.getMonth() + 1).toString().padStart(2, '0') + '-' + this.selectedDate.getDate().toString().padStart(2, '0');
  
      let tradeData = {
        ...this.trade,
        actionPlanDueDate: formattedDate
      };
    
      this.tradeService.approveActionPlanDate(tradeData).subscribe(
        (response: any) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: "Action plan approved successfully!"
          });
          setTimeout(() => {
            this.router.navigate(['ICMS/Trade/viewTrade']);
          }, 1000);
        },
        (error: HttpErrorResponse) => {
          // Handle error
        }
      );
    } else {
      console.error('Trade object is not initialized');
    }
  }


}
