import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JTAComponent } from './jta/uploadJT/jta.component';
import { JTViewComponent } from './jta/viewJT/jt-view.component'


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'COB Monitoring System',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '',
      },
      {
        path: 'viewJT',
        component: JTViewComponent,
        data: {
          title: 'View Job Time',
        },
      },
      {
        path: 'uploadJT',
        component: JTAComponent,
        data: {
          title: 'Upload Job Time',
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CMSRoutingModule {
}
