import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewDACGMComponent } from './new-dacgm/new-dacgm.component';
import { DACGMTableComponent } from './dacgm-table/dacgm-table.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Daily Activity Gap Control Monitoring',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'View Daily Activity Gap Data',
      },
      {
        path: 'addDACGM',
        component: NewDACGMComponent,
        data: {
          title: 'Add New Daily Activity Gap Data',
        },
      },
      {
        path: 'viewDACGM',
        component: DACGMTableComponent,
        data: {
          title: 'View Daily Activity Gap Data',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DACGMRoutingModule {}

