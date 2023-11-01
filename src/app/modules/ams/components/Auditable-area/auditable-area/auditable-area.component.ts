import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AuditableAreasService } from 'src/app/modules/ams/services/auditableArea/auditableArea.service';
import { AuditableAreasDTO } from 'src/app/modules/ams/models/auditableAreas';
import { NewAuditableAreaComponent } from '../new-auditable-area/newAuditableArea.component';
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
  selector: 'audit-area-table',
  templateUrl: './auditable-area.component.html',
  styleUrls: ['./auditable-area.component.scss'],
  providers: [MessageService],
})
export class AuditableAreaComponent implements OnDestroy {
  public auditableArea: AuditableAreasDTO[] = [];
  public auditableAreaDisplay: any[] = [];

  public auditableAreaR: AuditableAreasDTO[] = [];
  public auditableAreaInfo: AuditableAreasDTO;
  selectedAuditableAreaInfo: AuditableAreasDTO;

  exportColumns!: ExportColumn[];
  cols!: Column[];

  private subscriptions: Subscription[] = [];

  constructor(
    private auditableAreaService: AuditableAreasService,
    private dialogService: DialogService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getAuditableAreas();

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'auditaObjectName', header: 'Auditable Object' },
      { field: 'description', header: 'Description' },
    ];

    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));
  }

  getAuditableAreas(): void {
    this.subscriptions.push(
      this.auditableAreaService.getAuditableAreas().subscribe(
        (response: any) => {
          this.auditableArea = response.result;
          this.auditableAreaDisplay = this.auditableArea.map((obj: any) => ({
            ...obj,
            auditaObjectName: obj.auditObject ? obj.auditObject.name : null,
          }));
          
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  createNewAuditableArea(): void {
    const ref = this.dialogService.open(NewAuditableAreaComponent, {
      header: 'Create a new auditable area',
      width: '50%',
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe((response: any) => {
      this.getAuditableAreas();
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

  updateAuditableObject(id: number): void {
    const auditableArea = this.auditableArea.find((area) => area.id === id);
    console.log("vvvvvvvvv", auditableArea);
    const ref = this.dialogService.open(NewAuditableAreaComponent, {
      header: 'Update auditable area',
      width: '50%',
      data: { auditableArea },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe((response: any) => {
      if (response) {
        this.auditableArea = this.auditableArea.map((area) =>
          area.id === response.id ? response : area
        );
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
        (doc as any).autoTable(this.exportColumns, this.auditableAreaDisplay);
        doc.save('auditable-area.pdf');
      });
    });
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.auditableAreaDisplay);
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
