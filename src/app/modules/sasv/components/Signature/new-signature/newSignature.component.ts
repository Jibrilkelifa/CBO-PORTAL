import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { SignatureService } from '../../../services/signature-service/signature.service';
import { SignatureDTO } from '../../../models/signature';
import { Employee } from '../../../models/employee';
import { Process } from '../../../models/process';
import { SubProcess } from '../../../models/subProcess';
import { EmployeeService } from '../../../services/employee-service/employee.service';

@Component({
  selector: 'newSignature',
  templateUrl: './newSignature.component.html',
  styleUrls: ['./newSignature.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class NewSignatureComponent implements OnDestroy {
  public employeeslist: Employee[] = [];
  public processList: Process[] = [];
  public subProcessList: SubProcess[] = [];

  public signatureInfo: SignatureDTO = new SignatureDTO();
  selectedUniverseInfo: SignatureDTO;

  public dropdownOptions = ['Sub Process', 'Process'];
  public selectedDropdown: string;

  public processSelected: boolean;
  public subProcessSelected: boolean;

  selectedFile: any;
  imageURL: string;

  private subscriptions: Subscription[] = [];

  constructor(
    private messageService: MessageService,
    private signatureService: SignatureService,
    private employeeService: EmployeeService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) { }

  ngOnInit() {
    if (this.config.data?.auditUniverse) {
      this.signatureInfo = this.config.data.auditUniverse;
    }
  }
  
  onSearch(event: any) {
    if (event.query.length >= 3) {
      let query = event.query.toUpperCase();
      this.employeeService.getEmployees(query)
        .subscribe((response: any) => {          
          this.employeeslist = response.result; 
        });
    }
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
