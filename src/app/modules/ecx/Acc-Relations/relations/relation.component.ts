import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AccountRelation } from "../../../../models/ecx-models/account-relation";
import { AccountRelationService } from "../../../../services/ecx-services/account-relation.service";
import { NewRelationComponent } from '../new-relations/newRelation.component';


interface ExportColumn {
  title: string;
  dataKey: string;
}

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

@Component({
  selector: 'accountRelation-table',
  templateUrl: './relation.component.html',
  styleUrls: ['./relation.component.scss'],
})
export class RelationComponent implements OnDestroy {
  public accountRelations: AccountRelation[] = [];

  public accountRelationDisplay: any[] = [];

  private subscriptions: Subscription[] = [];

  exportColumns!: ExportColumn[];
  cols!: Column[];

  constructor(
    private accountRelationService: AccountRelationService,
    private dialogService: DialogService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getaccountRelations();
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'description', header: 'Description' },
      { field: 'auditableAreaName', header: 'Auditable area' },
    ];

    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));
  }

  getaccountRelations(): void {
    this.subscriptions.push(
      this.accountRelationService.getAccounts().subscribe(
        (response: any) => {
          this.accountRelations = response.result;
          this.accountRelationDisplay = this.accountRelations.map((obj: any) => ({
            ...obj,
            auditableAreaName: obj.auditableArea
              ? obj.auditableArea.name
              : null,
          }));
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  createNewaccountRelation(): void {
    const ref = this.dialogService.open(NewRelationComponent, {
      header: 'Create a new accountRelation',
      width: '40%',
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe((response: any) => {
      if (response.status) {
        this.getaccountRelations();
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

  updateaccountRelation(id: number): void {
    const accountRelation = this.accountRelations.find((check) => check.id === id);
    console.log("relation", accountRelation);
    const ref = this.dialogService.open(NewRelationComponent, {
      header: 'Update auditable area',
      width: '40%',
      data: { accountRelation },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });
    ref.onClose.subscribe((response: any) => {
      if (response) {
        this.accountRelations = this.accountRelations.map((check) =>
          check.id === response.id ? response : check
        );
        if (response.status) {
          this.getaccountRelations();
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

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
