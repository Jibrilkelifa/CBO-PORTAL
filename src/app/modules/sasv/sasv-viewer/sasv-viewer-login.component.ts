import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { AuthorityDTO } from '../../../models/sasv-models/authorityDTO';
import { AuthorityC } from '../../../models/sasv-models/authorityC';
import { AuthorityService } from '../../../services/sasv-services/authority.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-accordions',
  templateUrl: './sasv-viewer-login.component.html',
  styleUrls: ['./sasv-viewer-login.component.scss']
})
export class sasvViewerLoginComponent extends HeaderComponent {

  public authorityR: AuthorityDTO[] = [];
  public authorities: AuthorityDTO[] = [];
  deleteId: number = 0;
  sidebarId: string;
  bluredimage1: boolean = false;
  bluredimage2: boolean = false;
  dbStampImage: any;
  dbSignImage: any;
  postResponse: any;
  detail: boolean = false;
  displayBasic: boolean;


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

  showBasicDialog() {
    this.displayBasic = true;
  }

  showDetail(id: number): void {
    this.detail = true;
    this.showBasicDialog();
  }

  constructor(private classToggler: ClassToggleService, private authorityService: AuthorityService, private router: Router) { super(); }


  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  public getAuthImage(id: number) {
    this.authorityService.getAuthImage(id).subscribe(
      (response: AuthorityC) => {
        this.postResponse = response;


        this.dbStampImage = 'data:image/jpeg;base64,' + this.postResponse.stamp;
        this.dbSignImage = 'data:image/jpeg;base64,' + this.postResponse.signature;

      },
      (error: HttpErrorResponse) => {

      }
    );
  }

  updateAuthoritys(id: number): void {
    this.getAuthority(id);
  }

  public getAuthority(id: number): void {
    this.authorityService.getAuthority(id).subscribe(
      (response: AuthorityDTO) => {
        this.authorityR = [response];
      },
      (error: HttpErrorResponse) => {

      }
    );
  }

  public updatedAuthority(updateAuthForm: NgForm): void {

    this.authorityService.updateAuthority(updateAuthForm.value).subscribe(
      (response: AuthorityDTO) => {
        this.getAuthorities();
      },
      (error: HttpErrorResponse) => {

      }
    );
  }

  public getAuthorities(): void {
    this.authorityService.getActiveAuthoritys().subscribe(
      (response: AuthorityDTO[]) => {
        this.authorities = response;
      },
      (error: HttpErrorResponse) => {

      }
    );
  }
}

