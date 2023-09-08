import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultDashboardComponent } from './default-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultDashboardComponent,
    data: {
      title: $localize`Dashboard`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultDashboardRoutingModule {
}
