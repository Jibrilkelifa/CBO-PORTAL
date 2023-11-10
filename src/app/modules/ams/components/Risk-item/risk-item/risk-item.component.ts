import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import * as FileSaver from 'file-saver';
import { AuditStaffDTO } from '../../../models/auditStaff';
import { NewRiskItemComponent } from '../new-risk-item/newRiskItem.component';
import { RiskItemService } from '../../../services/risk-item/risk-item.service';
import { RiskItemDTO } from '../../../models/riskItemDTO';

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
  selector: 'risk-item-table',
  templateUrl: './risk-item.component.html',
  styleUrls: ['./risk-item.component.scss'],
})
export class RiskItemComponent implements OnDestroy {
  public riskItems: RiskItemDTO[] = [];

  public staffInfo: AuditStaffDTO;

  exportColumns!: ExportColumn[];
  cols!: Column[];

  private subscriptions: Subscription[] = [];

  constructor(
    private riskItemService: RiskItemService,
    private dialogService: DialogService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getRiskItems();
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Risk Item' },
      { field: 'riskType', header: 'Risk type' },
    ];

    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));
  }

  getRiskItems(): void {
    this.subscriptions.push(
      this.riskItemService.getRiskItems().subscribe(
        (response: any) => {
          this.riskItems = response.result;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  createNewRiskItem(): void {
    const ref = this.dialogService.open(NewRiskItemComponent, {
      header: 'Create a new risk item',
      draggable: true,
      width: '55%',
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe((response: any) => {
      if (response.status) {
        this.getRiskItems();
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

  updateRiskItem(id: number): void {
    const riskItem = this.riskItems.find(
      (riskItem) => riskItem.id === id
    );
    const ref = this.dialogService.open(NewRiskItemComponent, {
      header: 'Update risk item',
      draggable: true,
      width: '55%',
      data: { riskItem },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe((response: any) => {
      if (response) {
        this.riskItems = this.riskItems.map((auditType) =>
          auditType.id === response.id ? response : auditType
        );
        if (response.status) {
          this.getRiskItems();
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

  deleteRiskItem(id?: number): void {
    let riskType = new RiskItemDTO();
    riskType.id = id as number;
    this.subscriptions.push(
      this.riskItemService.deleteRiskItem(riskType).subscribe(
        (response: any) => {
          this.getRiskItems()
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
        const modifiedAnnualPlanDisplay = this.riskItems.map((risk, index) => ({
          ...risk,
          id: index + 1,
        }));
        (doc as any).autoTable(this.exportColumns,modifiedAnnualPlanDisplay);
        doc.save('Risk Item.pdf');
      });
    });
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const data = this.riskItems.map((auditType,index) => ({
        Id: index + 1,
        'Risk Item': auditType.name,
        'Risk Type': auditType.riskType,
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
      this.saveAsExcelFile(dataBlob, 'Risk Item');
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
