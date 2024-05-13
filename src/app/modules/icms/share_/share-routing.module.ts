import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewShareComponent } from './components/new-share/new-share.component';
import { ShareTableComponent } from './components/share-table/share-table.component';
import { ShareActionPlanComponent } from './components/share-Plan/share-action.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Finance',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'View Finance',
      },
      {
        path: 'addShare',
        component: NewShareComponent,
        data: {
          title: 'Add',
        },
      },
      {
        path: 'approveActionPlan',
        component: ShareActionPlanComponent,
        data: {
          title: 'Approve action plan due date',
        },
      },      
  
      {
        path: 'updateShare/:id',
        component: NewShareComponent,
        data: {
          title: 'Update',
        },
      },

      {
        path: 'viewShare',
        component: ShareTableComponent,
        data: {
          title: 'View',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShareRoutingModule {}

