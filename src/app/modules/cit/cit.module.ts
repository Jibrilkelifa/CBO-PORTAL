import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';



import {CalendarModule} from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';
import { CitRoutingModule } from './cit-routing.module';
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
import { AccordionModule,BadgeModule,BreadcrumbModule,CardModule,CollapseModule,GridModule,UtilitiesModule,SharedModule,ListGroupModule,PlaceholderModule,ProgressModule,SpinnerModule,TabsModule,NavModule, CarouselModule,FormModule,PaginationModule,PopoverModule} from '@coreui/angular';
import { AddFormComponent } from './components/add-form/add-form.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { CobStepsComponent } from './components/cob-steps/cob-steps.component';
import { CobListComponent } from './components/cob-list/cob-list.component';
import { ListCopStepsCopiedComponent } from './components/list-cop-steps-copied/list-cop-steps-copied.component';
import { CopiedStepDetailComponent } from './components/copied-step-detail/copied-step-detail.component';



@NgModule({
  declarations: [
    AddFormComponent,
    DetailViewComponent,
    CobStepsComponent,
    CobListComponent,
    ListCopStepsCopiedComponent,
    CopiedStepDetailComponent
  ],
  imports: [
    NgApexchartsModule,
    DynamicDialogModule,
    CommonModule,
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
    CheckboxModule,
    CKEditorModule,
    CitRoutingModule
  ],
  providers: [ConfirmationService, MessageService, DialogService,DatePipe,DatePipe],
})
export class CitModule {}