import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './components/add-form/add-form.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { CobStepsComponent } from './components/cob-steps/cob-steps.component';
import { CobListComponent } from './components/cob-list/cob-list.component';
import { ListCopStepsCopiedComponent } from './components/list-cop-steps-copied/list-cop-steps-copied.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'CIST',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'authorityTable',
      },
      {
        path: 'addForm',
        component: AddFormComponent,
        data: {
          title: 'Add Form',
        },
      },
      {
        path: 'detailView',
        component: DetailViewComponent,
        data: {
          title: 'Detail View',
        },
        
      },
      {
        path: 'cobIssuesList',
        component: CobListComponent,
        data: {
          title: 'List Of COB Issue logs',
        },
        
      },
      {
        path: 'cobSteps',
        component: CobStepsComponent,
        data: {
          title: 'Copy COB Steps',
        },
        
      },
      {
        path: 'cobStepsCopiedList',
        component: ListCopStepsCopiedComponent,
        data: {
          title: 'Copid COB Steps List',
        },
        
      },
   
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitRoutingModule { }
