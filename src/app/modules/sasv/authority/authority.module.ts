import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';

import {
  FormModule,
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  CardModule,
  CarouselModule,
  CollapseModule,
  DropdownModule,
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
import { NewAuthorityComponent } from './new-authority/new-authority.component';
import { AuthorityTableComponent } from './authority-table/authority-table.component';
import { AuthorityRoutingModule } from './authority-routing.module';
import { IconModule } from '@coreui/icons-angular';
import {DialogModule} from 'primeng/dialog';
import { ShowComponent } from './show/show.component';
import { MessagesModule } from 'primeng/messages';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthorityRoutingModule,
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
    DialogModule,
    MessagesModule
  ],
  declarations: [
    NewAuthorityComponent,
    AuthorityTableComponent,
    ShowComponent
  ],
})
export class AuthorityModule {}
