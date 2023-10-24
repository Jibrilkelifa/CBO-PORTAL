import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

import { NewCIPMComponent } from './new-cipm/new-cipm.component';
import { NewCTComponent } from './new-ct/new-ct.component';
import { CIPMTableComponent } from './cipm-table/cipm-table.component';
import {CIPMExpiringComponent} from './cipm-expiring/cipm-expiring.component';
import {CIPMExpiredComponent} from './cipm-expired/cipm-expired.component';
import { CIPMRoutingModule } from './cipm-routing.module';
import { IconModule } from '@coreui/icons-angular';

import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from "primeng/api";
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AnimateModule } from 'primeng/animate';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';


// CoreUI Modules


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CIPMRoutingModule,
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
    MessageModule
  ],
  declarations: [
    NewCIPMComponent,
    CIPMTableComponent,
    NewCTComponent,
    CIPMExpiringComponent,
    CIPMExpiredComponent,
  ],
  providers: [ConfirmationService, MessageService]
})
export class CIPMModule { }
