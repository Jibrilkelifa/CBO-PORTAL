import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/models/cas-models/user';
import { UserService } from 'src/app/services/cas-services/user.service';

@Component({
  selector: 'app-form-controls',
  templateUrl: './change-otp.component.html',
  styleUrls: ['./change-otp.component.scss'],
  providers: [MessageService]
})

export class ChangeOTPComponent {
  public user: User;
  public newPassword: string;
  public confirmNewPassword: string;

  constructor(private router: Router, private messageService: MessageService, private userService: UserService) {
  }

  ngOnInit() {
    this.getUser(Number(localStorage.getItem('userId')));
  }

  public getUser(id: number): User {
    this.userService.getUser(id).subscribe(
      (response: User) => {
        this.user = response;
      },
      (error: HttpErrorResponse) => {

      }
    );
    return this.user;
  }

  public changeOTP(changeOTPForm: any): void {
    console.log(changeOTPForm)
    this.userService.changeOTP(this.user.id, changeOTPForm.value).subscribe(
      (response: any) => {
        localStorage.setItem('otp', 'false');
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'OTP changed Successfully!' });
        setTimeout(() => { this.router.navigate(['dashboard']); }, 3000);
      },
      (errors: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: errors.error.message });
      }
    );
  }
}
