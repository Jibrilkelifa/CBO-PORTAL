import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AuthorityDTO } from '../../../models/authority';
import { NewAuthorityComponent } from '../new-authority/newAuthority.component';
import { AuthorityService } from '../../../services/authority-service/authority.service';
import { ShowComponent } from '../../show/show.component';


@Component({
  selector: 'authority-table',
  templateUrl: './authority-table.component.html',
  styleUrls: ['./authority-table.component.scss'],
})
export class AuthorityTableComponent implements OnDestroy {
  public authorityList: AuthorityDTO[] = [];

  public signatureInfo: AuthorityDTO;
  selectedSignatureInfo: AuthorityDTO;

  private subscriptions: Subscription[] = [];

  constructor(
    private authorityService: AuthorityService,
    private dialogService: DialogService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getSignaturesAndStamp();
  }

  getSignaturesAndStamp(): void {
    this.subscriptions.push(
      this.authorityService.getAuthorityList().subscribe(
        (response: any) => {
          this.authorityList = response.result;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  createSignature(): void {
    const ref = this.dialogService.open(NewAuthorityComponent, {
      header: 'Create a new authority',
      draggable: true,
      width: '50%',
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe((response: any) => {
      if (response.status) {
        this.getSignaturesAndStamp();
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

  updateAuthority(id: number): void {
    const authority = this.authorityList.find(
      (authority) => authority.id === id
    );
    const ref = this.dialogService.open(NewAuthorityComponent, {
      header: 'Update authority',
      draggable: true,
      width: '50%',
      data: { authority },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe((response: any) => {
      if (response) {
        this.authorityList = this.authorityList.map((authority) =>
          authority.id === response.id ? response : authority
        );
        if (response.status) {
          this.getSignaturesAndStamp();
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
      }
    });
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
