import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/services/cas-services/user.service';

@Component({
  selector: 'app-form-controls',
  templateUrl: './ems.component.html',
  styleUrls: ['./ems.component.scss'],
  providers: [MessageService]
})

export class EMSComponent {


  constructor(private router: Router, private messageService: MessageService, private userService: UserService) {
  }

  ngOnInit() {

  }
  uploadEmployeeList(form: NgForm) {

  }


}
