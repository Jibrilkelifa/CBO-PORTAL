
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AuditProgramService } from 'src/app/modules/ams/services/auidit-program/audit-program.service';
import { AuditProgramDTO } from 'src/app/modules/ams/models/audit program';
import { NewAuditProgramComponent } from '../new-audit-program/new-audit-program.component';
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
  selector: 'app-audit-program',
  templateUrl: './audit-program.component.html',
  styleUrls: ['./audit-program.component.scss']
})
export class AuditProgramComponent  implements OnDestroy {
  public auditProgram: AuditProgramDTO[] = [];
  public auditProgramDisplay: any[] = [];

  public programInfo: AuditProgramDTO;
  selectedProgramInfo: AuditProgramDTO;

  approved: false;

  exportColumns!: ExportColumn[];
  cols!: Column[];

  private subscriptions: Subscription[] = [];

  constructor(
    private auditProgramService: AuditProgramService,
    private dialogService: DialogService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getAuditPrograms();
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'annualPlan', header: 'Annual Plan' },
      { field: 'name', header: 'Audit Object' }, // Add this line
      { field: 'auditType', header: 'Auditable Type' },
      { field: 'status', header: 'Status' },
    ];
    
    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));

  }

  getAuditPrograms(): void {
    this.subscriptions.push(
      this.auditProgramService.getAuditPrograms().subscribe(
        (response: any) => {
          this.auditProgram = response.result;
          console.log(this.auditProgram);
      
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }



  createNewAuditProgram(): void {
    const ref = this.dialogService.open(NewAuditProgramComponent, {
      header: 'Create a new audit program',
      draggable: true,
      width: '50%',
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe((response: any) => {
      if (response.status) {
        this.getAuditPrograms();
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

  updateAuditProgram(id: number): void {
    const auditProgram = this.auditProgram.find(
      (program) => program.id === id
    );
    const ref = this.dialogService.open(NewAuditProgramComponent, {
      header: 'Update audit universe',
      draggable: true,
      width: '50%',
      data: { auditProgram },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe((response: any) => {
      if (response) {
        this.auditProgram = this.auditProgram.map((program) =>
          program.id === response.id ? response : program
        );
        if (response.status) {
          this.getAuditPrograms();
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


  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  exportPdf() {
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
        const doc = new jsPDF.default('p', 'px', 'a4');
        const data = this.auditProgram.map((universe, index) => ({
          id: index + 1,
          Name: " audit program",
          'Audit Object': universe.auditObject,
          'Audit Type': universe.auditType,
          status: universe.status,
        }));
        
        (doc as any).autoTable(this.exportColumns, data);
        doc.save('Audit universe.pdf');
      });
    });
  }
  

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      const data = this.auditProgram.map((universe, index) => ({
        Id: index + 1,
        Name: 'universe',
        'Audit Object': universe.auditObject || 'N/A',
        'Audit Type': universe.auditType,
        Status: universe.status,
      }));
      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      const dataBlob = new Blob([excelBuffer], { type: EXCEL_TYPE });
      this.saveAsExcelFile(dataBlob, 'Audit universe');
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
