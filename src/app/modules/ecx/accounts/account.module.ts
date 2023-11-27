import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from "primeng/api";
import {ToastModule} from 'primeng/toast';

import { FormModule } from '@coreui/angular';
import { NewAccountComponent } from './newAccount/newAccount.component';
import { AccountTableComponent } from './accountTable/accountTable.component';
import { AccountRoutingModule } from './account-routing.module';
import { IconModule } from '@coreui/icons-angular';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import {
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  CardModule,
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
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RelationComponent } from '../Acc-Relations/relations/relation.component';
import { DialogService } from 'primeng/dynamicdialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    AccountRoutingModule,
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
    FileUploadModule,
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
    MessagesModule,
    ProgressSpinnerModule,
    ConfirmDialogModule
  ],
  declarations: [
    NewAccountComponent,
    AccountTableComponent,
    RelationComponent
  ],
  providers: [ConfirmationService, MessageService, DialogService]
})
export class AccountModule {}
