import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Subscription, audit } from 'rxjs';
import { AuditObjectService } from 'src/app/modules/ams/services/auditObject/auditObject.service';
import { AuditObjectDTO } from 'src/app/modules/ams/models/auditObject';
import { NewAuditObjectComponent } from '../new-audit-object/newAuditObject.component';
import * as FileSaver from 'file-saver';
import { Router } from '@angular/router';

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
  selector: 'audit-universe-table',
  templateUrl: './audit-object.component.html',
  styleUrls: ['./audit-object.component.scss'],
})
export class AuditObjectComponent {
  public auditObject: AuditObjectDTO[] = [];

  public auditObjectInfo: AuditObjectDTO;
  selectedAuditObjectInfo: AuditObjectDTO;

  exportColumns!: ExportColumn[];
  cols!: Column[];

  private subscriptions: Subscription[] = [];

  constructor(
    private auditObjectService: AuditObjectService,
    private dialogService: DialogService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAuditObjects();
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'description', header: 'Description' },
      { field: 'auditType', header: 'Audit Type' },
    ];

    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));
  }

  getAuditObjects(): void {
    this.subscriptions.push(
      this.auditObjectService.getAuditObjects().subscribe(
        (response: any) => {
          this.auditObject = response.result;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  createAuditObject(): void {
    const ref = this.dialogService.open(NewAuditObjectComponent, {
      header: 'Create a new audit object',
      draggable: true,
      width: '55%',
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe((response: any) => {
      if (response.status) {
        this.getAuditObjects();
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

  updateAuditObject(id: number): void {
    const auditObject = this.auditObject.find((auditObj) => auditObj.id === id);
    const ref = this.dialogService.open(NewAuditObjectComponent, {
      header: 'Update audit object',
      width: '55%',
      data: { auditObject },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });
    ref.onClose.subscribe((response: any) => {
      if (response) {
        this.auditObject = this.auditObject.map((auditObj) =>
          auditObj.id === response.id ? response : auditObj
        );
        if (response.status) {
          this.getAuditObjects();
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

  detailAuditObject(auditObject: AuditObjectDTO) {
    if (auditObject && auditObject.id !== undefined) {
      this.auditObjectService.changeAuditObject(auditObject);
      this.router.navigate(['ams/audit-object-detail']);
    } else {
      console.error('Audit object or id is undefined:', auditObject);
    }
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
        const modifiedAuditObjectDisplay = this.auditObject.map((auditObject, index) => ({
          ...auditObject,
          id: index + 1, 
        }));
        (doc as any).autoTable(this.exportColumns, modifiedAuditObjectDisplay);
        doc.save('Audit object.pdf');
      });
    });
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const data = this.auditObject.map((object,index) => ({
        id: index + 1,
        Name: object.name,
        Description: object.description,
        AuditType: object.auditType,
      }));
      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      const EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      const dataBlob = new Blob([excelBuffer], { type: EXCEL_TYPE });
      this.saveAsExcelFile(dataBlob, 'Audit object');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_EXTENSION = '.xlsx';
    FileSaver.saveAs(
      buffer,
      fileName + EXCEL_EXTENSION
    );
  }
}
