import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewFinanceComponent } from './components/new-finance/new-finance.component';
import { FinanceTableComponent } from './components/finance-table/finance-table.component';
import { FinanceActionPlanComponent } from './components/finance-Plan/finance-action.component';



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
        path: 'addFinance',
        component: NewFinanceComponent,
        data: {
          title: 'Add',
        },
      },
      {
        path: 'approveActionPlan',
        component: FinanceActionPlanComponent,
        data: {
          title: 'Approve action plan due date',
        },
      },      
  
      {
        path: 'updateFinance/:id',
        component: NewFinanceComponent,
        data: {
          title: 'Update',
        },
      },

      {
        path: 'viewFinance',
        component: FinanceTableComponent,
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

