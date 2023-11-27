import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { NewSignatureComponent } from '../new-signature/newSignature.component';
import { SignatureService } from '../../../services/signature-service/signature.service';
import { SignatureDTO } from '../../../models/signature';
import { ShowComponent } from '../../show/show.component';

@Component({
  selector: 'signature-table',
  templateUrl: './signature-table.component.html',
  styleUrls: ['./signature-table.component.scss'],
})
export class SignatureTableComponent implements OnInit, OnDestroy {
  public signatureList: SignatureDTO[] = [];
  public signatureInfo: SignatureDTO;
  selectedSignatureInfo: SignatureDTO;

  private subscriptions: Subscription[] = [];

  constructor(
    private signatureService: SignatureService,
    private dialogService: DialogService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getSignatures();
  }

  getSignatures(): void {
    this.subscriptions.push(
      this.signatureService.getSignatureList().subscribe(
        (response: any) => {
          this.signatureList = response.result;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  createSignature(): void {
    const ref = this.dialogService.open(NewSignatureComponent, {
      header: 'Create a new signature',
      draggable: true,
      width: '50%',
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe((response: any) => {
      if (response.status) {
        this.getSignatures();
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

  show(id: number) {
    const data = this.signatureList.find(
      (signature) => signature.id === id
    );
    const title = 'signature';

    const ref = this.dialogService.open(ShowComponent, {
      header: 'Signature image',
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