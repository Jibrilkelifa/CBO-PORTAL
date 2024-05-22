import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTradeComponent } from './components/new-trade/new-trade.component';
import { TradeTableComponent } from './components/trade-table/trade-table.component';
import { TradeActionPlanComponent } from './components/trade-Plan/trade-action.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Share',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'View Share',
      },
      {
        path: 'addShare',
        component: NewTradeComponent,
        data: {
          title: 'Add',
        },
      },
      {
        path: 'approveActionPlan',
        component: TradeActionPlanComponent,
        data: {
          title: 'Approve action plan due date',
        },
      },      
  
      {
        path: 'updateShare/:id',
        component: NewTradeComponent,
        data: {
          title: 'Update',
        },
      },

      {
        path: 'viewShare',
        component: TradeTableComponent,
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
export class TradeRoutingModule {}

