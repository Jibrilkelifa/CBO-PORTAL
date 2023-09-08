import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorityDTO } from 'src/app/models/sasv-models/authorityDTO';
import { Employee } from 'src/app/models/sso-models/employee';
import { AuthorityService } from 'src/app/services/sasv-services/authority.service';
import { EmployeeService } from 'src/app/services/sso-services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-accordions',
  templateUrl: './new-authority.component.html',
  styleUrls: ['./new-authority.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class NewAuthorityComponent {

  public authorities: AuthorityDTO[] = [];
  public employees: Employee[] = [];
  public authorityR: AuthorityDTO[] = [];
  update: boolean = false;
  newDiv: boolean = true;


  constructor(private messageService: MessageService, private authorityService: AuthorityService, private activatedRoute: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmplloyees();
    this.getAuthorities();
    let x = this.activatedRoute.snapshot.paramMap.get("id");
    let y: number = +x;
    if (y) {
      this.getAuthority(y);
      this.update = true;
      this.newDiv = false;
    }

  }

  public getEmplloyees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;

      },
      (error: HttpErrorResponse) => {

      }
    );
  }

  public addAuthority(addAuthForm: NgForm): void {
    const formData = new FormData();

    formData.append("divisionId", addAuthForm.value.divisionId)
    formData.append("employeeId", addAuthForm.value.employeeId)

    this.authorityService.addAuthority(formData).subscribe(
      (response: any) => {
        if (response.status) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: response.message
          });
          setTimeout(() => {
          }, 1000);
          this.getAuthorities();
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: response.message
          });
          setTimeout(() => {
          }, 1000);
        }
      },
      (error: HttpErrorResponse) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error.message
        });
        setTimeout(() => {
        }, 1000);

      }
    );


  }

  public getAuthorities(): void {
    this.authorityService.getAllAuthoritys().subscribe(
      (response: any) => {
        if (response.status) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: response.message
          });
          setTimeout(() => {
          }, 1000);
          this.authorities = response.result;

        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: response.message
          });
          setTimeout(() => {
          }, 1000);
        }
      },
      (error: HttpErrorResponse) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error.message
        });
        setTimeout(() => {
        }, 1000);
      }
    );
  }

  public getAuthority(id: number): void {
    this.authorityService.getAuthority(id).subscribe(
      (response: any) => {

        if (response.status) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: response.message
          });
          setTimeout(() => {
          }, 1000);
          this.authorityR = response.result;
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: response.message
          });
          setTimeout(() => {
          }, 1000);
        }
        this.authorityR = [response];

      },
      (error: HttpErrorResponse) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error.message
        });
        setTimeout(() => {
        }, 1000);

      }
    );
  }
}
