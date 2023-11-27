import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeeklyElpasedTimeComponent } from './weeklyElpasedTime/weeklyElpasedTime.component';

const routes: Routes = [
  {
    path: '',
    component: WeeklyElpasedTimeComponent,
    data: {
      title: $localize`Dashboard`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CMSDashboardRoutingModule {
}
