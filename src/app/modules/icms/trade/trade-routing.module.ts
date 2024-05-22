import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTradeComponent } from './components/new-trade/new-trade.component';
import { TradeTableComponent } from './components/trade-table/trade-table.component';
import { TradeActionPlanComponent } from './components/trade-Plan/trade-action.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Trade',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'View Trade',
      },
      {
        path: 'addTrade',
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
        path: 'updateTrade/:id',
        component: NewTradeComponent,
        data: {
          title: 'Update',
        },
      },

      {
        path: 'viewTrade',
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

