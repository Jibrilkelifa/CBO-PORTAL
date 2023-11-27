import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';

import { SasvRoutingModule } from './sasv-routing.module';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  CardModule,
  CollapseModule,
  GridModule,
  UtilitiesModule,
  SharedModule,
  ListGroupModule,
  PlaceholderModule,
  ProgressModule,
  SpinnerModule,
  TabsModule,
  NavModule,
  CarouselModule,
  FormModule,
  PaginationModule,
  PopoverModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

import { NgApexchartsModule } from 'ng-apexcharts';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SignatureTableComponent } from "../sasv/components/Signature/signature-table/signature-table.component";
import { NewSignatureComponent } from './components/Signature/new-signature/newSignature.component';
import { NewStampComponent } from './components/Stamp/new-stamp/newStamp.component';
import { StampTableComponent } from './components/Stamp/stamp-table/stamp-table.component';
import { AuthorityTableComponent } from './components/Authority/authority-table/authority-table.component';
import { NewAuthorityComponent } from './components/Authority/new-authority/newAuthority.component';
import { ShowComponent } from './components/show/show.component';
import { UserViewTableComponent } from './components/userView-table/userView-table.component';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  declarations: [
    SignatureTableComponent,
    NewSignatureComponent,
    NewStampComponent,
    StampTableComponent,
    AuthorityTableComponent,
    NewAuthorityComponent,
    ShowComponent,
    UserViewTableComponent
  ],
  imports: [
    NgApexchartsModule,
    DynamicDialogModule,
    CommonModule,
    SasvRoutingModule,
    ButtonModule,
    TableModule,
    FormsModule,
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
    AutoCompleteModule
  ],
  providers: [
    ConfirmationService, 
    MessageService, 
    DialogService, 
    DatePipe,
  ]
    
})
export class SASVModule {}
