import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { IFBService } from './../../service/IFB-services.service';
import { AuditUniverseDTO } from 'src/app/modules/ams/models/auditUniverse';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
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
  selector: 'ifb-table',
  templateUrl: './ifb-table.component.html',
  styleUrls: ['./ifb-table.component.scss'],
})
export class IFBTableComponent implements OnDestroy {
  public IFBList: any[] = [];


  public universeInfo: AuditUniverseDTO;
  selectedUniverseInfo: AuditUniverseDTO;

  approved: false;

  exportColumns!: ExportColumn[];
  cols!: Column[];

  private subscriptions: Subscription[] = [];

  constructor(
    private ifbService: IFBService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getIFBList();
  }

  getIFBList(): void {
    this.subscriptions.push(
      this.ifbService.getAllIFB().subscribe(
        (response: any) => {
          this.IFBList = response;          
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }


  updateIFB(id: number): void {
    this.router.navigate(['ICMS/IFB/updateIFB', id]);
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

 
}
