import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAccountComponent } from './newAccount/newAccount.component';
import { AccountTableComponent } from './accountTable/accountTable.component';
import { RelationComponent } from '../Acc-Relations/relations/relation.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Account'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'accountTable'
      },
      {
        path: 'newAccount',
        component: NewAccountComponent,
        data: {
          title: 'New Account'
        }
      },
      {
        path: 'accountTable',
        component: AccountTableComponent,
        data: {
          title: 'Account Table'
        },
      },
      {
        path: 'relation',
        component: RelationComponent,
        data: {
          title: 'Relations',
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
