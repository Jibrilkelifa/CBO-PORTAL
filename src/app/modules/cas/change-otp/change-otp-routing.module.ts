import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeOTPComponent } from './change-otp.component';


const routes: Routes = [
  {
    path: '',
    component: ChangeOTPComponent,
    data: {
      title: 'Change One-Time Password (OTP)'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeOTPRoutingModule {
}
