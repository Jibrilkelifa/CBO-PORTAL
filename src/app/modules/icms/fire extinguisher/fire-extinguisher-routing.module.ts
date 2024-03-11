import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewFireExtinguisherComponent } from './components/new-fire-extinguisher/new-fireExtinguisher.component';
import { FireExtinguisherTableComponent } from './components/fire-extinguisher-table/fireExtinguisher-table.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Fire Extinguisher',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'View Fire Extinguisher',
      },
      {
        path: 'addFireExtinguisher',
        component: NewFireExtinguisherComponent,
        data: {
          title: 'Add',
        },
      },
  
      {
        path: 'updateFireExtinguisher/:id',
        component: NewFireExtinguisherComponent,
        data: {
          title: 'Update',
        },
      },

      {
        path: 'viewFireExtinguisher',
        component: FireExtinguisherTableComponent,
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
export class FinanceRoutingModule {}

