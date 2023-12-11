import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';


import {
  FormModule,
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  CarouselModule,
  CollapseModule,
  GridModule,
  ListGroupModule,
  NavModule,
  PaginationModule,
  PlaceholderModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  SpinnerModule,
  TabsModule,
  TooltipModule,
  UtilitiesModule
} from '@coreui/angular';
import { NewFraudComponent } from './new-ifr/new-ifr.component';
import { ShowIFRComponent } from './show/show-ifr.component';
import { FraudTableComponent } from './ifr-table/ifr-table.component';
import { FraudClosedComponent } from './ifr-closed/ifr-closed.component';
import{ FraudOutstandingComponent} from './ifr-outstanding/ifr-outstanding.component';
import{ FraudOutstandingpComponent} from './ifr-outstandingp/ifr-outstandingp.component';
import { FraudNewComponent } from './ifr-new/ifr-new.component';
import { FraudNBETableComponent } from './ifr-nbe-table/ifr-nbe-table.component';
import { FraudRoutingModule } from './ifr-routing.module';
import { IconModule } from '@coreui/icons-angular';

import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from "primeng/api";
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AnimateModule } from 'primeng/animate';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { CalendarModule } from 'primeng/calendar';
import { SingleFraudCaseTableComponent } from './ifr-single-case/ifr-single-case-table.component';
import { IFRProvisionComponent } from './ifr-provision/ifr-provision.component';
import { DialogService } from 'primeng/dynamicdialog';


// CoreUI Modules

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FraudRoutingModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CollapseModule,
    GridModule,
    UtilitiesModule,
    SharedModule,
    ListGroupModule,
    IconModule,
    ListGroupModule,
    FileUploadModule,
    PlaceholderModule,
    ProgressModule,
    SpinnerModule,
    TabsModule,
    NavModule,
    TooltipModule,
    CarouselModule,
    FormModule,
    ReactiveFormsModule,
    DropdownModule,
    PaginationModule,
    PopoverModule,
    TableModule,
    InputTextModule,
    ConfirmPopupModule,
    ToastModule,
    ConfirmDialogModule,
    MessagesModule,
    PasswordModule,
    DividerModule,
    CardModule,
    BlockUIModule,
    ProgressSpinnerModule,
    AnimateModule,
    CalendarModule,
    MessagesModule
  ],
  declarations: [
    NewFraudComponent,
    FraudTableComponent,
    FraudNBETableComponent,
    SingleFraudCaseTableComponent,
    IFRProvisionComponent,
    FraudClosedComponent,
    FraudNewComponent,
    FraudOutstandingComponent,
    FraudOutstandingpComponent,
    ShowIFRComponent
  ],
  providers: [ConfirmationService, MessageService, DialogService, DatePipe]
})
export class FraudModule { }
