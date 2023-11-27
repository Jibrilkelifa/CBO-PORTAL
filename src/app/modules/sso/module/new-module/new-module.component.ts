import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Module } from '../../../../models/sso-models/module';
import { ModuleService } from '../../../../services/sso-services/module.service';

@Component({
  selector: 'app-form-controls',
  templateUrl: './new-module.component.html',
  styleUrls: ['./new-module.component.scss'],
  providers: [MessageService]
})
export class NewModuleComponent {

  public modules: Module[] = [];
  public moduleR: Module[] = [];
  public module: Module;
  selectedModule: Module;
  selectedFiles1?: File;
  currentFile1?: File;
  route?: ActivatedRoute;
  update: boolean = false;
  newMod: boolean = true;
  router: Router;
  public idY: number;
  uploadedFiles: any[] = [];


  constructor(private messageService: MessageService, private moduleService: ModuleService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getModules();
    let x = this.activatedRoute.snapshot.paramMap.get("id");
    this.idY = + x;
    if (this.idY) {
      this.getModule(this.idY);
      this.update = true;
      this.newMod = false;
    }
  }

  newItem = '';
  items = [];
  selectedItem = '';
  isAdmin = false;

  addItem() {
    let newItem = 'ROLE_' + this.newItem;
    if (this.isAdmin) {
      newItem += '_ADMIN';
    }
    this.items.push(newItem);
    this.newItem = '';
  }

  public addModule(addDivForm: NgForm): void {


    this.moduleService.addModule(addDivForm.value).subscribe(
      (response: Module) => {

        this.getModules();
        window.location.reload();
      },
      (error: HttpErrorResponse) => {

      }
    );
  }

  public updateModule(updateModForm: NgForm): void {


    this.moduleService.updateModule(updateModForm.value).subscribe(
      (response: Module) => {

        this.getModules();
      },
      (error: HttpErrorResponse) => {

      }
    );
  }
  public getModule(id: number): Module[] {
    this.moduleService.getModule(id).subscribe(
      (response: Module) => {
        this.moduleR = [response];
        this.module = response;

        this.selectedModule = this.module;
      },
      (error: HttpErrorResponse) => {

      }
    );
    return this.moduleR;
  }


  public getModules(): void {
    this.moduleService.getModules().subscribe(
      (response: Module[]) => {
        this.modules = response;


      },
      (error: HttpErrorResponse) => {

      }
    );
  }

}
