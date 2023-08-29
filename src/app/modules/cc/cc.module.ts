import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from "primeng/fileupload";

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
import { SanctionTableComponent } from './sanction-table/sanction-table.component';
import { CCRoutingModule } from './cc-routing.module';
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
import { DialogModule } from 'primeng/dialog';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { TabViewModule } from 'primeng/tabview';
import { ProgressBarModule } from 'primeng/progressbar';
import { WeeklyCheckComponent } from './weekly-check/weekly-check.component';
import { UploadComponent } from './upload/upload.component';
import { PanelModule } from 'primeng/panel';
import { SelectButtonModule } from 'primeng/selectbutton';



// CoreUI Modules

const dbConfig = {
  name: 'MyDb',
  version: 8,
  objectStoresMeta: [
    {
      store: 'un-individual',
      storeConfig: { keyPath: 'dataaid', autoIncrement: true },
      storeSchema: []
    },
    {
      store: 'un-entity',
      storeConfig: { keyPath: 'dataaid', autoIncrement: true },
      storeSchema: []
    },
    {
      store: 'eu-sanction',
      storeConfig: { keyPath: 'dataaid', autoIncrement: true },
      storeSchema: []
    },
    {
      store: 'uk-sanction',
      storeConfig: { keyPath: 'dataaid', autoIncrement: true },
      storeSchema: []
    },
    {
      store: 'nbe-sanction',
      storeConfig: { keyPath: 'dataaid', autoIncrement: true },
      storeSchema: []
    },
    {
      store: 'pep-sanction',
      storeConfig: { keyPath: 'dataaid', autoIncrement: true },
      storeSchema: []
    },

    {
      store: 'adverser-sanction',
      storeConfig: { keyPath: 'dataaid', autoIncrement: true },
      storeSchema: []
    },
    {
      store: 'ofac-sanction',
      storeConfig: { keyPath: 'dataaid', autoIncrement: true },
      storeSchema: []
    },
    {
      store: 'de-sanction',
      storeConfig: { keyPath: 'dataaid', autoIncrement: true},
      storeSchema: []
    },
    {
      store: 'deliquent-check',
      storeConfig: { keyPath: 'id', autoIncrement: true},
      storeSchema: []
    },
    {
      store: 'bc-check',
      storeConfig: { keyPath: 'id', autoIncrement: true},
      storeSchema: []
    },
    {
      store: 'uk-check',
      storeConfig: { keyPath: 'id', autoIncrement: true},
      storeSchema: []
    },
    {
      store: 'eu-check',
      storeConfig: { keyPath: 'id', autoIncrement: true},
      storeSchema: []
    },
    {
      store: 'pep-check',
      storeConfig: { keyPath: 'id', autoIncrement: true},
      storeSchema: []
    },
    {
      store: 'adverser-check',
      storeConfig: { keyPath: 'id', autoIncrement: true},
      storeSchema: []
    }
  ]
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CCRoutingModule,
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
    DialogModule,
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
    InputTextModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    TabViewModule,
    ProgressBarModule,
    FileUploadModule,
    PanelModule,
    SelectButtonModule
    
  ],
  declarations: [
    SanctionTableComponent,
    WeeklyCheckComponent,
    UploadComponent
  ],
  providers: [ConfirmationService, MessageService]
})
export class CCModule { }
