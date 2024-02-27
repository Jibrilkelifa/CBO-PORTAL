import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { SecurityServiceService } from '../../services/security-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-copied-step-detail',
  templateUrl: './copied-step-detail.component.html',
  styleUrls: ['./copied-step-detail.component.scss']
})
export class CopiedStepDetailComponent {
  constructor(private securityService:SecurityServiceService,private router:Router,private config: DynamicDialogConfig,private ref:DynamicDialogRef

    ) { }
  
  
  
    private subscriptions: Subscription[] = [];
  
    cobStepCopied: any;
    ngOnInit() {
    
   
        if(this.securityService.hasRole("ROLE_CIST_ADMIN")){}
        else{
         this.router.navigate(['login']);
        }
      if (this.config.data && this.config.data.step) {
        this.cobStepCopied = this.config.data.step;
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
