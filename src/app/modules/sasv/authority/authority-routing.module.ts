import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewAuthorityComponent } from './new-authority/new-authority.component';
import { AuthorityTableComponent } from './authority-table/authority-table.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'SASV',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'authorityTable',
      },
      {
        path: 'newAuthority',
        component: NewAuthorityComponent,
        data: {
          title: 'New Authority',
        },
      },
      {
        path: 'authorityTable',
        component: AuthorityTableComponent,
        data: {
          title: 'Authority Table',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorityRoutingModule { }

