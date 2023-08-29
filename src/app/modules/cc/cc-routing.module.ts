import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanctionTableComponent } from './sanction-table/sanction-table.component';
import { WeeklyCheckComponent } from './weekly-check/weekly-check.component';
import { UploadComponent } from './upload/upload.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Search',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'View ',
      },
      {
        path: 'viewSanction',
        component: SanctionTableComponent,
        data: {
          title: 'View',
        },
      },
      {
        path: 'weeklyCheck',
        component: WeeklyCheckComponent,
        data: {
          title: 'Check'
        }
      },
      {
        path: 'upload',
        component: UploadComponent,
        data: {
          title: 'Upload'
        }
      },
      {
        path: 'upload/:type',
        component: UploadComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CCRoutingModule { }

