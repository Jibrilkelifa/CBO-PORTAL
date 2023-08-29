import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorityDTO } from 'src/app/models/sasv-models/authorityDTO';
import { AuthorityC } from 'src/app/models/sasv-models/authorityC';
import { AuthorityService } from '../../../../services/sasv-services/authority.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-accordions',
  templateUrl: './authority-table.component.html',
  styleUrls: ['./authority-table.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class AuthorityTableComponent {

  public authorityR: AuthorityDTO[] = [];
  public authorities: AuthorityDTO[] = [];
  selectedCustomer1: AuthorityDTO;
  bluredimage1: boolean = false;
  bluredimage2: boolean = false;
  dbStampImage: any;
  dbSignImage: any;
  postResponse: any;
  detail: boolean = false;
  deleteId: number = 0;
  displayBasic: boolean;
  displayModal: boolean;

  constructor(private messageService: MessageService, private authorityService: AuthorityService, private router: Router) { }

  ngOnInit() {
    this.getAuthorities();
  }

  showBasicDialog() {
    this.displayBasic = true;
  }

  showBlurred1(): void {
    this.bluredimage1 = !this.bluredimage1;
  }

  deleteBlurred1(): void {
    this.bluredimage1 = !this.bluredimage1;
  }

  showBlurred2(): void {
    this.bluredimage2 = !this.bluredimage2;
  }

  deleteBlurred2(): void {
    this.bluredimage2 = !this.bluredimage2;
  }

  updateAuthoritys(id: number): void {
    this.getAuthority(id);
  }

  showDetail(id: number): void {
    this.detail = true;
    this.getAuthority(id);
    this.getAuthImage(id);
  }


  public getAuthImage(id: number) {
    this.authorityService.getAuthImage(id).subscribe(
      (response: AuthorityC) => {
        this.postResponse = response;


        this.dbStampImage = 'data:image/jpeg;base64,' + this.postResponse.stamp;
        this.dbSignImage = 'data:image/jpeg;base64,' + this.postResponse.signature;

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
          this.authorityR = [response];

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

      }
    );
  }

  public updatedAuthority(updateAuthForm: NgForm): void {

    this.authorityService.updateAuthority(updateAuthForm.value).subscribe(
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

      }
    );
  }

  public getAuthorities(): void {
    this.authorityService.getActiveAuthoritys().subscribe(
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
            summary: 'Faild',
            detail: response.message
          });
          setTimeout(() => {
          }, 1000);
        }
      },
      (error: HttpErrorResponse) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Faild',
          detail: error.message
        });
        setTimeout(() => {
        }, 1000);
      }
    );
  }

  public getAllAuthorities(): void {
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
            summary: 'Faild',
            detail: response.message
          });
          setTimeout(() => {
          }, 1000);
        }
      },
      (error: HttpErrorResponse) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Faild',
          detail: error.message
        });
        setTimeout(() => {
        }, 1000);
      }
    );
  }
}

