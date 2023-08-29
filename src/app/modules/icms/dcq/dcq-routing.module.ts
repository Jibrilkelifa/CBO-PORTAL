import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewDCQComponent } from '../dcq/new-dcq/new-dcq.component';
import { DCQTableComponent } from './dcq-table/dcq-table.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dishonored Cheque',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'viewDCQ',
      },
      {
        path: 'addDCQ',
        component: NewDCQComponent,
        data: {
          title: 'New Dishonoured Cheque',
        },
      },
      {
        path: 'viewDCQ',
        component: DCQTableComponent,
        data: {
          title: 'Dishonoured Cheque Table',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DCQRoutingModule { }

