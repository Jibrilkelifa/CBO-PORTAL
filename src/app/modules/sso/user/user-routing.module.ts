import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { UserTableComponent } from './user-table/user-table.component';
import { NewAdminComponent } from './new-admin/new-admin.component';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { AssignRole } from './assign-role/assign-role.component';
import { UpdateUserComponent } from './update-user/update-user.component';

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
        path: 'assignRole',
        component: AssignRole,
        data: {
          title: 'Assign Role',
        },
      },
      {
        path: 'updateUser',
        component: UpdateUserComponent,
        data: {
          title: 'Update User',
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

