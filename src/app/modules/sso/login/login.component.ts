import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JwtResponse } from '../../../models/sso-models/Jwt-response';
import { AuthService } from '../../../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  submitted: any;
  value: string;
  errorMessage: string; // Add a new errorMessage property

  constructor(private authService: AuthService,   private router: Router,) { }

  ngOnInit() {
    this.authService.logout();
  }

  login() {
    this.model.action = 'login';
 


      
      
      this.authService.loginForm(this.model).subscribe(
        (response: JwtResponse) => {
          this.authService.setUser(response);
        },
        (error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.errorMessage = 'Username or password is incorrect.'; // Set the error message
  
          } else {
            this.errorMessage = 'An error occurred. Check your username or password .'; // Set a generic error message
          }
       //
       
        }
      );
    
  }
}
