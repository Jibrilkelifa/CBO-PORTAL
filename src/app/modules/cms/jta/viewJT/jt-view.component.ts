import { Component } from '@angular/core';
import { JTAService } from '../../../../services/cms-services/jta-services.service';
import { Message, MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './jt-view.component.html',
  styleUrls: ['./jt-view.component.scss']
})
export class JTViewComponent {
  public jobs: any[] = [];
  msgs: Message[];
  utcDate: string;

  constructor(private messageService: MessageService, private jtaService: JTAService) { }

  ngOnInit() {
    this.getInitialUTCDate();
  }
  public getJobs(): void {
    this.jtaService.getAllMajorJobs(this.utcDate).subscribe(
      (response: any[]) => {
        this.jobs = response;
      },
      (error: HttpErrorResponse) => {

      }
    );
  }

  public getInitialUTCDate(): void {
    this.jtaService.getLatestUTCDate().subscribe(
      (response: any) => {
        this.utcDate = response;
        this.getJobs();
      },
      (error: HttpErrorResponse) => {

      }
    );
  }
}

