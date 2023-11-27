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
import { NewDCQComponent } from '../dcq/new-dcq/new-dcq.component';
import { DCQTableComponent } from './dcq-table/dcq-table.component';
import { DCQWeekComponent } from './dcq-week/dcq-week.component';
import { DCQRoutingModule } from './dcq-routing.module';
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
import { CalendarModule } from 'primeng/calendar';



// CoreUI Modules


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DCQRoutingModule,
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
    MessagesModule
  ],
  declarations: [
    NewDCQComponent,
    DCQTableComponent,
    DCQWeekComponent
  ],
  providers: [ConfirmationService, MessageService]
})
export class DCQModule { }
