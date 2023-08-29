import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import { AvatarModule, BreadcrumbModule, DropdownModule, FooterModule, FormModule, HeaderModule, NavModule, SidebarModule } from '@coreui/angular';
import { sasvViewerLoginComponent } from './sasv-viewer-login.component';
import { IconModule } from '@coreui/icons-angular';
import { GridModule } from '@coreui/angular';
import {DialogModule} from 'primeng/dialog';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    IconModule,
    FormModule,
    ReactiveFormsModule,
    TableModule,
    InputTextModule,
    AvatarModule,
    NavModule,
    HeaderModule,
    BreadcrumbModule,
    SidebarModule,
    DropdownModule,
    GridModule,
    FooterModule,
    DialogModule

  ],
  declarations: [
    sasvViewerLoginComponent
  ],

})
export class sasvViewerLoginModule {}
