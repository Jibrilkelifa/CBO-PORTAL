import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewChecklistComponent } from './Check-List/view-checklist/view-checklist.component';
import { CreateComponent } from './Check-List/create/create.component';
import { CADCLRoutingModule } from './cadcl-routing.module'
import { MessagesModule } from 'primeng/messages';
import { BadgeModule, BreadcrumbModule, ButtonModule, CardModule, CarouselModule, CollapseModule, FormModule, GridModule, ListGroupModule, NavModule, PaginationModule, PlaceholderModule, PopoverModule, ProgressModule, SpinnerModule, TabsModule, UtilitiesModule } from '@coreui/angular';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService, SharedModule } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from '../ecx/accounts/account-routing.module';
import { IconModule } from '@coreui/icons-angular';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { BlockUIModule } from 'primeng/blockui';
import { AnimateModule } from 'primeng/animate';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import { DetailComponent } from './Details-Page/detail/detail.component';
import { ChecklistsComponent } from './Replay-Page/checklists/checklists.component';
import { RespondePageComponent } from './Replay-Page/responde-page/responde-page.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { AccordionModule } from 'primeng/accordion';
import { TooltipModule } from 'primeng/tooltip';
import { ReportsComponent } from './reports/reports.component';
@NgModule({
  declarations: [
    ViewChecklistComponent,
    CreateComponent,
    DetailComponent,
    ChecklistsComponent,
    RespondePageComponent,
    ReportsComponent,
  ],
  imports: [
    CommonModule,
    CADCLRoutingModule,
    InputTextareaModule,
    MessagesModule,
    ToastModule,
    ProgressSpinnerModule,
    ConfirmDialogModule,
    MultiSelectModule,
    CommonModule,
    FormsModule,
    AccordionModule,
    BadgeModule,
    ButtonModule,
    GridModule,
    ListGroupModule,
    TabsModule,
    NavModule,
    TooltipModule,
    FormModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    BadgeModule,
    BreadcrumbModule,
    AccountRoutingModule,
    CardModule,
    CollapseModule,
    UtilitiesModule,
    SharedModule,
    IconModule,
    PlaceholderModule,
    ProgressModule,
    SpinnerModule,
    CarouselModule,
    DropdownModule,
    PaginationModule,
    PopoverModule,
    TableModule,
    InputTextModule,
    ConfirmPopupModule,
    CommonModule,
    FormsModule,
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
    ConfirmDialogModule,
    MessagesModule,
    PasswordModule,
    DividerModule,
    CardModule,
    BlockUIModule,
    ProgressSpinnerModule,
    AnimateModule,
    CalendarModule,
    FileUploadModule,
    MenuModule,
    DialogModule
  ],providers: [ConfirmationService, MessageService, DialogService]
})
export class CadclModule { }
