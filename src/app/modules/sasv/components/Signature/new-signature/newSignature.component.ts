import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../../../services/employee-service/employee.service';
import { SignatureService } from '../../../services/signature-service/signature.service';
import { SignatureDTO } from '../../../models/signature';
import { Employee } from '../../../models/employee';
import { ProcessService } from '../../../services/process-service/process.service';
import { Process } from '../../../models/process';

@Component({
  selector: 'newSignature',
  templateUrl: './newSignature.component.html',
  styleUrls: ['./newSignature.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class NewSignatureComponent implements OnDestroy {
  public employeeslist: Employee[] = [];
  public processList: Process[] = [];

  public signatureInfo: SignatureDTO = new SignatureDTO();
  selectedUniverseInfo: SignatureDTO;

  public processSelected: boolean;


  selectedFile: any;
  imageURL: string;

  private subscriptions: Subscription[] = [];

  constructor(
    private messageService: MessageService,
    private signatureService: SignatureService,
    private employeeService: EmployeeService,
    private processService: ProcessService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) {}

  ngOnInit() {
    this.getProcessList();
    if (this.config.data?.auditUniverse) {
      this.signatureInfo = this.config.data.auditUniverse;
    }
  }

  getProcessList(): void {
    this.processService.getProcessList().subscribe(
      (response: any) => {
        this.processList = response.result;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  
  getEmployeeslist(processId: number): void {
    this.employeeService.getEmployeesByProcess(processId).subscribe(
      (response: any) => {
        this.employeeslist = response.result;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  onProcessChange(event: any): void {
    const selectedProcessId = event.value.id;
    this.getEmployeeslist(selectedProcessId);
    this.processSelected = true;
  }

  addSignature(addDivForm: NgForm): void {
    const formData = new FormData();
    formData.append('employeeId', addDivForm?.value.employeeId.id);
    if (this.selectedFile) {
      formData.append('signature', this.selectedFile);
    }
  
    this.subscriptions.push(
      this.signatureService
        .createSignature(formData)
        .subscribe((response: any) => {
          this.messageService.clear();
          this.ref.close(response);
        })
    );
  }
  

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e) => (this.imageURL = reader.result as string);

      reader.readAsDataURL(file);
    }
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  closeDialog(): void {
    this.ref.close();
  }
}
