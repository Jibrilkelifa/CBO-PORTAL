import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { ShareModel } from '../../models/share-model';
import { ShareService } from '../../service/share-services.service';

@Component({
  selector: 'share-action',
  templateUrl: './share-action.component.html',
  styleUrls: ['./share-action.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ShareActionPlanComponent implements OnInit {
  public share: ShareModel;
  msgs: Message[] = [];
  public selectedDate: any;

  constructor(
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private shareService: ShareService,
    private router: Router) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    let share = this.activatedRoute.snapshot.paramMap.get("share");
    this.share = share ? JSON.parse(share) : new ShareModel();
  }

  public approveActionPlan(approveActionPlanForm: NgForm): void {
    if (this.share) {
      let formattedDate = this.selectedDate.getFullYear() + '-' + (this.selectedDate.getMonth() + 1).toString().padStart(2, '0') + '-' + this.selectedDate.getDate().toString().padStart(2, '0');
  
      let shareData = {
        ...this.share,
        actionPlanDueDate: formattedDate
      };
    
      this.shareService.approveActionPlanDate(shareData).subscribe(
        (response: any) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: "Action plan approved successfully!"
          });
          setTimeout(() => {
            this.router.navigate(['ICMS/Share/viewShare']);
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
