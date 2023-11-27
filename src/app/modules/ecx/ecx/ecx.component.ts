import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { ECXServiceService } from '../../../services/ecx-services/ecx-service.service';
import { UpdateHistory } from 'src/app/models/ecx-models/update-history';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accordions',
  templateUrl: './ecx.component.html',
  styleUrls: ['./ecx.component.scss'],
  providers: [MessageService, ConfirmationService]
})

export class ECXComponent implements OnInit{
  xmlFile: any;
  loading: boolean;
  progress: number;
  display: boolean;

  updated: boolean = false;
  newDiv: boolean = true;
  msgs: Message[] = [];
  value: string;
  branchId : number = Number(localStorage.getItem('branchId'));
  selectedFiles1?: File;
  updateHistory: UpdateHistory[]=[];
  uploadedFiles: any[] = [];
  fileReady: string = '';

  constructor(private confirmationService: ConfirmationService, private activatedRoute: ActivatedRoute, private ecxService: ECXServiceService, private router: Router, private http: HttpClient, private messageService: MessageService) {}

  ngOnInit(): void {
      
  }

  generateXml() {
    this.loading = true;
    this.progress = 0;
    this.http.get('http://localhost:8080/xml').subscribe(
      data => {
        this.xmlFile = data;
        // do something with the xml file data
        this.loading = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Xml file generated'
        });
        this.display = true; // show the dialog
      },
      error => {
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Xml file generation failed'
        });
      }
    );
    // simulate progress
    setTimeout(() => {
      this.progress = 50;
    }, 1000);
    setTimeout(() => {
      this.progress = 100;
    }, 2000);
  }

  viewHistory() {
    this.router.navigate(['ecx/balance/filehistory']);
  }
  public downloadUpdatedXml(): void{

    this.loading = true;
      this.ecxService.updateFile().subscribe(
        (response: any) => {

          const blob = new Blob([response], { type: 'application/xml' });
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = "ecx_updated";
          link.click();
          this.loading = false;
          this.updated = true;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Xml file generated'
        });
          this.updated = true
          this.display = true
          this.fileReady = "Your file is with updated account balance is downloaded automatically. Plaase refer to your download dir and check the updae history"
        },
        (error: HttpErrorResponse) =>{
          this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Xml file generation failed'
        });
        }
        );
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to generate an updated xml file?',
      accept: () => {
        this.downloadUpdatedXml();
      }
    });
  }
  onSelect1(event: any) {
    this.selectedFiles1 = event.files[0];
    for (let file of event.files) {
      this.selectedFiles1 = file
    }
  }
}
