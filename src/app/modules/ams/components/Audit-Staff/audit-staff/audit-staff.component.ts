import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { NewAuditStaffComponent } from '../new-audit-staff/newAuditStaff.component';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import * as FileSaver from 'file-saver';
import { AuditStaffDTO } from '../../../models/auditStaff';
import { AuditStaffService } from '../../../services/audit-staff/audit-staff.service';

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
  selector: 'audit-staff-table',
  templateUrl: './audit-staff.component.html',
  styleUrls: ['./audit-staff.component.scss'],
})
export class AuditStaffComponent implements OnDestroy {
  public auditStaff: AuditStaffDTO[] = [];

  public staffInfo: AuditStaffDTO;

  exportColumns!: ExportColumn[];
  cols!: Column[];

  private subscriptions: Subscription[] = [];

  constructor(
    private auditStaffService: AuditStaffService,
    private dialogService: DialogService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getAuditStaffs();
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'fullName', header: 'Name' },
      { field: 'name', header: 'Auditable Type' },
      { field: 'status', header: 'Status' },
    ];

    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));
  }

  getAuditStaffs(): void {
    this.subscriptions.push(
      this.auditStaffService.getAllAuditStaff().subscribe(
        (response: any) => {
          this.auditStaff = response.result;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  createNewAuditStaff(): void {
    const ref = this.dialogService.open(NewAuditStaffComponent, {
      header: 'Create a new auditor',
      draggable: true,
      width: '55%',
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe((response: any) => {
      if (response.status) {
        this.getAuditStaffs();
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

  updateAuditStaff(id: number): void {
    const auditStaff = this.auditStaff.find(
      (auditStaff) => auditStaff.id === id
    );
    const ref = this.dialogService.open(NewAuditStaffComponent, {
      header: 'Update auditor',
      draggable: true,
      width: '55%',
      data: { auditStaff },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe((response: any) => {
      if (response) {
        this.auditStaff = this.auditStaff.map((auditStaff) =>
          auditStaff.id === response.id ? response : auditStaff
        );
        if (response.status) {
          this.getAuditStaffs();
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
        const data = this.auditStaff.map((staff, index) => ({
          ID: index + 1,
          Name: staff.user.employee.fullName,
          'Audit Type': staff.auditType.name,
          Status: staff.status,
        }));

        const columns = [
          { title: 'ID', dataKey: 'ID' },
          { title: 'Name', dataKey: 'Name' },
          { title: 'Audit Type', dataKey: 'Audit Type' },
          { title: 'Status', dataKey: 'Status' },
        ];

        (doc as any).autoTable(columns, data);
        doc.save('Auditors.pdf');
      });
    });
  }

  exportCsv() {
    const header = ['ID', 'Name', 'Audit Type', 'Status'];

    const data = this.auditStaff.map((staff, index) => ({
      ID: index + 1,
      Name: staff.user.employee.fullName,
      'Audit Type': staff.auditType.name,
      Status: staff.status,
    }));

    const csvContent = this.convertArrayOfObjectsToCSV(data, header);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    FileSaver.saveAs(blob, 'Auditors.csv');
  }

  convertArrayOfObjectsToCSV(data, header) {
    const csv = data.map((row) => {
      return header.map((fieldName) => {
        const value = row[fieldName];
        return this.escapeCSV(value);
      }).join(',');
    });

    return [header.join(','), ...csv].join('\n');
  }

  escapeCSV(value) {
    if (typeof value === 'string') {
      return `"${value.replace(/"/g, '""')}"`;
    }
    return value;
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      const data = this.auditStaff.map((staff, index) => ({
        Id: index + 1,
        'Employee Name': staff.user.employee.fullName,
        Name: staff.auditType.name,
        Status: staff.status
      }));
      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      const dataBlob = new Blob([excelBuffer], { type: EXCEL_TYPE });
      this.saveAsExcelFile(dataBlob, 'Auditors');
    });
  }


  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_EXTENSION = '.xlsx';
    FileSaver.saveAs(
      buffer,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }
}
