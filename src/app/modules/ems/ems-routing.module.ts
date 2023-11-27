import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EMSComponent } from './upload-employee-data/ems-upload.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Employee Management System',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '',
      },
      {
        path: 'uploadEmployeeData',
        component: EMSComponent,
        data: {
          title: 'Upload Employee Data',
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EMSRoutingModule {
}
