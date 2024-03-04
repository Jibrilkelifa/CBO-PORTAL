import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CitIntegrationService } from '../../services/cit.integration.service';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { Step } from '../../models/Step';
import { CopiedStepDetailComponent } from '../copied-step-detail/copied-step-detail.component';
import { SecurityServiceService } from '../../services/security-service.service';

@Component({
  selector: 'app-list-cop-steps-copied',
  templateUrl: './list-cop-steps-copied.component.html',
  styleUrls: ['./list-cop-steps-copied.component.scss']
})
export class ListCopStepsCopiedComponent {
  constructor(private securityService:SecurityServiceService,private router: Router, private service: CitIntegrationService, private dialogService: DialogService, private messageService: MessageService,) { }

  ngOnInit(): void {
   
    if(this.securityService.hasRole("ROLE_CIST_ADMIN")){ this.getCopiedStepsList();}
    else{
     this.router.navigate(['login']);
    }
   

  }

  cobStepsCopiedList: any;

  public getCopiedStepsList(): void {
    this.service.listCopiedSteps().subscribe(
      (response) => {

        this.cobStepsCopiedList = response.result.reverse();
        console.log(this.cobStepsCopiedList);

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  detailView(step: Step): void {
    const ref = this.dialogService.open(CopiedStepDetailComponent, {
      header: 'COB Steps Copied',
      draggable: true,
      width: '90%',
      data: { step },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 20000,
    });
    ref.onClose.subscribe((response: any) => {
      if (response.status) {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.message,
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Failed',
          detail: response.message,
        });
      }
  
    });
  }


}
