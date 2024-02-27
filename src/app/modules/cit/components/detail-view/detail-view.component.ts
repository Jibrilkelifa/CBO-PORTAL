import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api/confirmationservice';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],

})
export class DetailViewComponent {

  constructor(private config: DynamicDialogConfig,private ref:DynamicDialogRef

  ) { }



  private subscriptions: Subscription[] = [];

  cobInfo: any;
  ngOnInit() {
    if (this.config.data && this.config.data.cob) {
      this.cobInfo = this.config.data.cob;
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





