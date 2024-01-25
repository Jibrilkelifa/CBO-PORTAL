import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';
import { SmsRoutingModule } from './sms-routing.module';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AccordionModule, BadgeModule, BreadcrumbModule, CardModule, CollapseModule, GridModule, UtilitiesModule, SharedModule, ListGroupModule, PlaceholderModule, ProgressModule, SpinnerModule, TabsModule, NavModule, CarouselModule, FormModule, PaginationModule, PopoverModule } from '@coreui/angular';
import { AllMessagesComponent } from './components/all-messages/all-messages.component';
import { AnimateModule } from 'primeng/animate';
import { SentMessagesComponent } from './components/sent-messages/sent-messages.component';
import { MultiSelectModule as MultiSElectModule1, MultiSelectModule } from 'primeng/multiselect';

import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { TagModule } from 'primeng/tag';
import { CustomerService } from './services/all-messages/customerservice';
import { SentMessageService } from './services/sent-messages/sentMessageService';
import { SingleComponent } from './components/send-single/single.component';
import { BulkComponent } from './components/send-bulk/bulk.component';
import { FileUploadModule } from 'primeng/fileupload';
import { DividerModule } from 'primeng/divider';



@NgModule({
  declarations: [
    AllMessagesComponent,
    SentMessagesComponent,
    SingleComponent,
    BulkComponent
  ],
  imports: [
    NgApexchartsModule,
    BlockUIModule,
    FileUploadModule,
    MultiSelectModule,
    ProgressSpinnerModule,
    AnimateModule,
    DynamicDialogModule,
    StyleClassModule,
    RippleModule,
    CommonModule,
    SmsRoutingModule,
    ButtonModule,
    TableModule,
    TagModule,
    CommonModule,
    FormsModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
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
    MessagesModule,
    ToastModule,
    CalendarModule,
    CheckboxModule,
    CKEditorModule
  ],
  providers: [ConfirmationService, MessageService, DialogService, DatePipe, CustomerService, SentMessageService],
})
export class SmsModule { }
