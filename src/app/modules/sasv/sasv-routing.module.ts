import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignatureTableComponent } from './components/Signature/signature-table/signature-table.component';
import { NewSignatureComponent } from './components/Signature/new-signature/newSignature.component';
import { StampTableComponent } from './components/Stamp/stamp-table/stamp-table.component';
import { NewStampComponent } from './components/Stamp/new-stamp/newStamp.component';
import { AuthorityTableComponent } from './components/Authority/authority-table/authority-table.component';
import { NewAuthorityComponent } from './components/Authority/new-authority/newAuthority.component';
import { UserViewTableComponent } from './components/userView-table/userView-table.component';


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
        redirectTo: 'sasvTable',
      },
      {
        path: 'signature-table',
        component: SignatureTableComponent,
        data: {
          title: 'Signature Table',
        },
      },
      {
        path: 'new-signature',
        component: NewSignatureComponent,
        data: {
          title: 'New signature',
        },
      },
      {
        path: 'stamp-table',
        component: StampTableComponent,
        data: {
          title: 'Stamp Table',
        },
      },
      {
        path: 'new-stamp',
        component: NewStampComponent,
        data: {
          title: 'New stamp',
        },
      },
      {
        path: 'authority-table',
        component: AuthorityTableComponent,
        data: {
          title: 'Authority Table',
        },
      },
      {
        path: 'new-authority',
        component: NewAuthorityComponent,
        data: {
          title: 'New authority',
        },
      },
      {
        path: 'user-view',
        component: UserViewTableComponent,
        data: {
          title: 'Signature and Stamp Images',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SasvRoutingModule { }
