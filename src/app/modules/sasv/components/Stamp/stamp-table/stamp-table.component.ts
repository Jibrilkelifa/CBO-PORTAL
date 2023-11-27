import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { SignatureDTO } from '../../../models/signature';
import { NewStampComponent } from '../new-stamp/newStamp.component';
import { StampService } from '../../../services/stamp-service/stamp.service';
import { StampDTO } from '../../../models/stamp';
import { ShowComponent } from '../../show/show.component';

@Component({
  selector: 'stamp-table',
  templateUrl: './stamp-table.component.html',
  styleUrls: ['./stamp-table.component.scss'],
})
export class StampTableComponent implements OnDestroy {
  public stampList: StampDTO[] = [];

  public signatureInfo: SignatureDTO;
  selectedSignatureInfo: SignatureDTO;

  private subscriptions: Subscription[] = [];

  constructor(
    private stampService: StampService,
    private dialogService: DialogService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getStamps();
  }

  getStamps(): void {
    this.subscriptions.push(
      this.stampService.getStampList().subscribe(
        (response: any) => {
          this.stampList = response.result;
          console.log(response);
          
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  show(id: number) {
    const data = this.stampList.find((stamp) => stamp.id === id);
    const title = 'stamp';
    const ref = this.dialogService.open(ShowComponent, {
      header: 'Stamp image',
      draggable: true,
      width: '50%',
      data: { data, title },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });
  }

  createSignature(): void {
    const ref = this.dialogService.open(NewStampComponent, {
      header: 'Create a new stamp',
      draggable: true,
      width: '50%',
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe((response: any) => {
      if (response.status) {
        this.getStamps();
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

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
