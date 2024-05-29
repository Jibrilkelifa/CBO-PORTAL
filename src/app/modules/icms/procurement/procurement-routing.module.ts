import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProcurementComponent } from './components/new-procurement/new-procurement.component';
import { ProcurementTableComponent } from './components/procurement-table/procurement-table.component';
import { ProcurementActionPlanComponent } from './components/procurement-Plan/procurement-action.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'procurement',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'View Procurement',
      },
      {
        path: 'addProcurement',
        component: NewProcurementComponent,
        data: {
          title: 'Add',
        },
      },
      {
        path: 'approveActionPlan',
        component: ProcurementActionPlanComponent,
        data: {
          title: 'Approve action plan due date',
        },
      },      
  
      {
        path: 'updateProcurement/:id',
        component: NewProcurementComponent,
        data: {
          title: 'Update',
        },
      },

      {
        path: 'viewProcurement',
        component: ProcurementTableComponent,
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
export class ProcurementRoutingModule {}

