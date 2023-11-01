import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { CheckListService } from 'src/app/modules/ams/services/check-list/check-list.service';
import { CkeckListItemDTO } from 'src/app/modules/ams/models/checkListItem';
import { NewCheckListComponent } from '../new-checklist/newChecklist.component';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import * as FileSaver from 'file-saver';

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
  selector: 'checkList-table',
  templateUrl: './checkList.component.html',
  styleUrls: ['./checkList.component.scss'],
})
export class CheckListComponent implements OnDestroy {
  public checklist: CkeckListItemDTO[] = [];

  public auditableAreaR: CkeckListItemDTO[] = [];
  public auditableAreaInfo: CkeckListItemDTO;
  selectedAuditableAreaInfo: CkeckListItemDTO;

  public checklistDisplay: any[] = [];

  private subscriptions: Subscription[] = [];

  exportColumns!: ExportColumn[];
  cols!: Column[];

  constructor(
    private checkListService: CheckListService,
    private dialogService: DialogService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getCheckLists();
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

  getCheckLists(): void {
    this.subscriptions.push(
      this.checkListService.getChecklists().subscribe(
        (response: any) => {
          this.checklist = response.result;
          this.checklistDisplay = this.checklist.map((obj: any) => ({
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

  createNewChecklist(): void {
    const ref = this.dialogService.open(NewCheckListComponent, {
      header: 'Create a new checklist',
      width: '50%',
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe((response: any) => {
      if (response.status) {
        this.getCheckLists();
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

  updateChecklist(id: number): void {
    const checklist = this.checklist.find((check) => check.id === id);
    console.log("check", checklist);
    const ref = this.dialogService.open(NewCheckListComponent, {
      header: 'Update auditable area',
      width: '50%',
      data: { checklist },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });
    ref.onClose.subscribe((response: any) => {
      if (response) {
        this.checklist = this.checklist.map((check) =>
          check.id === response.id ? response : check
        );
        if (response.status) {
          this.getCheckLists();
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

  exportPdf() {
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
        const doc = new jsPDF.default('p', 'px', 'a4');
        (doc as any).autoTable(this.exportColumns, this.checklistDisplay);
        doc.save('checklist.pdf');
      });
    });
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.checklistDisplay);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'products');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }
}
