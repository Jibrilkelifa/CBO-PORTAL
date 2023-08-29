import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewModuleComponent } from './new-module/new-module.component';
import { ModuleTableComponent } from './module-table/module-table.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Module'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'viewModule'
      },
      {
        path: 'addModule',
        component: NewModuleComponent,
        data: {
          title: 'New Module'
        }
      },
      {
        path: 'viewModule',
        component: ModuleTableComponent,
        data: {
          title: 'Module Table'
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule {
}
