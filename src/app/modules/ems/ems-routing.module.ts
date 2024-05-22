import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUser } from './add-user/add-user.component';


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
        path: 'addEmployee',
        component: AddUser,
        data: {
          title: 'Register Employee',
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
