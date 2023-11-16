import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import * as FileSaver from 'file-saver';
import { AuditStaffDTO } from '../../../models/auditStaff';
import { NewAuditStaffComponent } from '../../Audit-Staff/new-audit-staff/newAuditStaff.component';
import { AuditTypeService } from '../../../services/audit-type/audit-type.service';
import { AuditType } from '../../../models/auditType';
import { NewAuditTypeComponent } from '../new-audit-type/newAuditType.component';
import { AuditableAreasDTO } from '../../../models/auditableAreas';

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
  selector: 'audit-type-table',
  templateUrl: './audit-type.component.html',
  styleUrls: ['./audit-type.component.scss'],
})
export class AuditTypeComponent implements OnDestroy {
  public auditTypes: AuditType[] = [];

  public staffInfo: AuditStaffDTO;

  exportColumns!: ExportColumn[];
  cols!: Column[];

  private subscriptions: Subscription[] = [];

  constructor(
    private auditTypeService: AuditTypeService,
    private dialogService: DialogService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getAuditTypes();
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Auditable Type' },
      { field: 'description', header: 'Description' },
    ];

    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));
  }

  getAuditTypes(): void {
    this.subscriptions.push(
      this.auditTypeService.getAuditTypes().subscribe(
        (response: any) => {
          this.auditTypes = response.result;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  createNewAuditType(): void {
    const ref = this.dialogService.open(NewAuditTypeComponent, {
      header: 'Create a new audit team',
      draggable: true,
      width: '55%',
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe((response: any) => {
      if (response.status) {
        this.getAuditTypes();
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

  updateAuditType(id: number): void {
    const auditType = this.auditTypes.find(
      (auditype) => auditype.id === id
    );
    const ref = this.dialogService.open(NewAuditTypeComponent, {
      header: 'Update audit team',
      draggable: true,
      width: '55%',
      data: { auditType },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe((response: any) => {
      if (response) {
        this.auditTypes = this.auditTypes.map((auditType) =>
          auditType.id === response.id ? response : auditType
        );
        if (response.status) {
          this.getAuditTypes();
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

  deleteAuditType(id?: number): void {
    let auditableType = new AuditableAreasDTO();
    auditableType.id = id as number;
    this.subscriptions.push(
      this.auditTypeService.deleteAuditType(auditableType).subscribe(
        (response: any) => {
          this.getAuditTypes()
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
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
        (doc as any).autoTable(this.exportColumns, this.auditTypes);
        doc.save('Audit type.pdf');
      });
    });
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const data = this.auditTypes.map((auditType,index) => ({
        Id: index + 1,
        Name: auditType.name,
        Description: auditType.description,
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
      this.saveAsExcelFile(dataBlob, 'Audit Type');
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
