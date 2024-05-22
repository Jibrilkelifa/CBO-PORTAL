import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';
 import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { EmployeeService } from 'src/app/services/sso-services/employee.service';
import { EMSService } from 'src/app/services/ems-services/ems-services.service';
import {Msg_to_sent} from '../../models/msg_to_sent';
import { SingleService } from '../../services/single-message/single.service';
import { log } from 'console';
import{Category} from '../../models/category'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-memo',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent extends HeaderComponent {
  isAuthorized: boolean = false;

  @Input() sidebarId: string = "sidebar";

  groupOptions: Category []= [];
  selectedCategories: any[] = [];
  processId: number;
  subProcessId: number;
  employeeId: number;
  postMemo = {} as  any;
  employeesOfSelectedGroups: any[];
  ngOnInit() {
    this.fetchCategories();
  }
  fetchCategories() {
    this.singleService.fetchCategories().subscribe(
      (response: any) => {
        this.groupOptions = response; 
        
      },
      (error) => {
        console.error('Error fetching categories:', error);
        
      }
    );
  }
  constructor( private router: Router, private http: HttpClient, private singleService: SingleService){
    
    
    super();
    this.processId = Number(localStorage.getItem('processId'));
    this.subProcessId = Number(localStorage.getItem('subProcessId'));
    this.employeeId = Number(localStorage.getItem('id'));

  };
  subprocesslist: any[] = [];

  selectedSubprocess: any;
  
  ckeditorContent: string;
  public Editor = ClassicEditor;
  public date: Date;
  public values = [];
  public nvalues = [];
  public dateTime = new Date();
  selectedGroups: any[] = [];

  
  
  
  addTemp(val: string) {
    this.ckeditorContent = val;
  }

  addMemo(formData: NgForm) {
  
    this.singleService.saveeMessage(formData.value).subscribe(
      (response) => {
      },
      (error) => {
        console.error('Error saving message:', error);
      }
    );
  
  }
  

}



