import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EMSComponent } from './ems.component';


const routes: Routes = [
  {
    path: '',
    component: EMSComponent,
    data: {
      title: 'Employee Management System'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EMSRoutingModule {
}
