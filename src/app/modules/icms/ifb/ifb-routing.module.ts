import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewIFBComponent } from './components/new-ifb/new-ifb.component';
import { IFBTableComponent } from './components/ifb-table/ifb-table.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'IFB',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'View IFB',
      },
      {
        path: 'addIFB',
        component: NewIFBComponent,
        data: {
          title: 'Add',
        },
      },

      {
        path: 'updateIFB/:id',
        component: NewIFBComponent,
        data: {
          title: 'Update',
        },
      },
  
      {
        path: 'viewIFB',
        component: IFBTableComponent,
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
export class IFBRoutingModule {}

