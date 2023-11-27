import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { UserTableComponent } from './user-table/user-table.component';
import { NewAdminComponent } from './new-admin/new-admin.component';
import { AdminTableComponent } from './admin-table/admin-table.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'User',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'viewUsers',
      },
      {
        path: 'addAdmin',
        component: NewAdminComponent,
        data: {
          title: 'New Admin',
        },
      },
      {
        path: 'addUser',
        component: NewUserComponent,
        data: {
          title: 'New User',
        },
      },
      {
        path: 'viewAdmins',
        component: AdminTableComponent,
        data: {
          title: 'Admin Table',
        },
      },
      {
        path: 'viewUsers',
        component: UserTableComponent,
        data: {
          title: 'User Table',
        },
      },
      {
        path: 'updateUser/:id',
        component: NewUserComponent,
        data: {
          title: 'User / Update User'
        }
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }

