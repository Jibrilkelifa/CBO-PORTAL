import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './modules/sso/login/login.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },

  {
    path: '',
    component: DefaultLayoutComponent, canActivate: [AuthGuard],
    data: { title: 'Home' },

    children: [
      {
        path: 'default_dashboard',
        loadChildren: () =>
          import('./containers/default-layout/default-dashboard/default-dashboard.module').then((m) => m.DefaultDashboardModule)
      },
      {
        path: 'cc_dashboard',
        loadChildren: () =>
          import('./modules/cc/dashboard/dashboard.module').then((m) => m.CCDashboardModule)
      },
      {
        path: 'icms_dashboard',
        loadChildren: () =>
          import('./modules/icms/dashboard/dashboard.module').then((m) => m.ICMSDashboardModule)
      },
      {
        path: 'cms_dashboard',
        loadChildren: () =>
          import('./modules/cms/dashboard/dashboard.module').then((m) => m.COBDashboardModule)
      },
      {
        path: 'sms_dashboard',
        loadChildren: () =>
          import('./modules/sms/sms.module').then((m) => m.SmsModule)
      },
      {
        path: 'cc_dashboard',
        loadChildren: () =>
          import('./modules/cc/dashboard/dashboard.module').then((m) => m.CCDashboardModule)
      },
      {
        path: 'icms_dashboard',
        loadChildren: () =>
          import('./modules/icms/dashboard/dashboard.module').then((m) => m.ICMSDashboardModule)
      },
      {
        path: 'cms_dashboard',
        loadChildren: () =>
          import('./modules/cms/dashboard/dashboard.module').then((m) => m.COBDashboardModule)
      },
      {
        path: 'sms_dashboard',
        loadChildren: () =>
          import('./modules/sms/sms.module').then((m) => m.SmsModule)
      },
      {
        path: 'CMS',
        loadChildren: () =>
          import('./modules/cms/cms.module').then((m) => m.CMSModule)
      },
      {
        path: 'ems',
        loadChildren: () =>
          import('./modules/ems/ems.module').then((m) => m.EMSModule)
      },
      {
        path: 'sms',
        loadChildren: () =>
          import('./modules/sms/sms.module').then((m) => m.SmsModule)
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./modules/sso/user/user.module').then((m) => m.UserModule)
      },
      {
        path: 'module',
        loadChildren: () =>
          import('./modules/sso/module/module.module').then((m) => m.ModuleModule)
      },
      {
        path: 'sasv',
        loadChildren: () =>
          import('./modules/sasv/sasv.module').then((m) => m.SASVModule),
      },
      {
        path: 'ams',
        loadChildren: () =>
          import('./modules/ams/ams.module').then((m) => m.AmsModule),
      },
      {
        path: 'cit',
        loadChildren: () =>
          import('./modules/cit/cit.module').then((m) => m.CitModule),
      },
      {
        path: 'ICMS/CIPM',
        loadChildren: () =>
          import('./modules/icms/cipm/cipm.module').then((m) => m.CIPMModule)
      },
      {
        path: 'ICMS/DACGM',
        loadChildren: () =>
          import('./modules/icms/dacgm/dacgm.module').then((m) => m.DACGMModule)
      },
      {
        path: 'ICMS/IFB',
        loadChildren: () =>
          import('./modules/icms/ifb/ifb.module').then((m) => m.IFBModule)
      },
      {
        path: 'ICMS/Share',
        loadChildren: () =>
          import('./modules/icms/share_/share.module').then((m) => m.ShareModule)
      },
      {
        path: 'ICMS/Finance',
        loadChildren: () =>
          import('./modules/icms/finance/finance.module').then((m) => m.FinanceModule)
      },
      {
        path: 'ICMS/Trade',
        loadChildren: () =>
          import('./modules/icms/trade/trade.module').then((m) => m.TradeModule)
      },
      {
        path: 'ICMS/Procurement',
        loadChildren: () =>
          import('./modules/icms/procurement/procurement.module').then((m) => m.ProcurementModule)
      },
      {
        path: 'ICMS/FireExtinguisher',
        loadChildren: () =>
          import('./modules/icms/fire extinguisher/fire-extinguisher.module').then((m) => m.FireExtinguisherModule)
      },
      {
        path: 'ICMS/DCQ',
        loadChildren: () =>
          import('./modules/icms/dcq/dcq.module').then((m) => m.DCQModule)
      },
      {
        path: 'ICMS/Fraud',
        loadChildren: () =>
          import('./modules/icms/ifr/ifr.module').then((m) => m.FraudModule)
      },
      {
        path: 'CC',
        loadChildren: () =>
          import('./modules/cc/cc.module').then((m) => m.CCModule)
      },

      {
        path: 'ecx/account',
        loadChildren: () =>
          import('./modules/ecx/accounts/account.module').then((m) => m.AccountModule)
      },
      {
        path: 'cao/checklists',
        loadChildren: () =>
          import('./modules/cadcl/cadcl.module').then((m) => m.CadclModule)
      },
      {
        path: 'ecx',
        loadChildren: () =>
          import('./modules/ecx/ecx.module').then((m) => m.ECXModule)
      },
      {
        path: 'Memo',
        loadChildren: () =>
          import('./modules/memo/memo.module').then((m) => m.MemoModule)
      },
    ]
  },
  {
    path: '**', redirectTo: 'login', pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
