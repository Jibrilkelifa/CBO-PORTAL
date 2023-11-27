import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AuthorityDTO } from '../../models/authority';
import { AuthorityService } from '../../services/authority-service/authority.service';
import { ShowComponent } from '../show/show.component';


@Component({
  selector: 'userView-table',
  templateUrl: './userView-table.component.html',
  styleUrls: ['./userView-table.component.scss'],
})
export class UserViewTableComponent implements OnDestroy {
  public authorityList: AuthorityDTO[] = [];

  public signatureInfo: AuthorityDTO;
  selectedSignatureInfo: AuthorityDTO;

  private subscriptions: Subscription[] = [];

  constructor(
    private authorityService: AuthorityService,
    private dialogService: DialogService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getSignatures();
  }

  getSignatures(): void {
    this.subscriptions.push(
      this.authorityService.getActiveAuthority().subscribe(
        (response: any) => {
          this.authorityList = response.result;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  show(id: number) {
    const data = this.authorityList.find((authority) => authority.id === id);
    const title = 'authority';

    const ref = this.dialogService.open(ShowComponent, {
      header: 'Signature and Stamp Image',
      draggable: true,
      width: '50%',
      data: { data, title },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
