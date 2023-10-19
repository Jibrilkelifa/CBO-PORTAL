import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ECXComponent } from './ecx/ecx.component';
import { UpdateHistoryComponent } from './ecx-history/update-history.component';
import { UpdateFileHistoryComponent } from './ecx-file-history/update-file-history.component';
import { RelationComponent } from "../../modules/ecx/Acc-Relations/relations/relation.component";


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Ethiopian Commodity Exchange',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'View Ethiopian Commodity Exchange Update History',
      },
      {
        path: 'balance/update',
        component: ECXComponent,
        data: {
          title: 'Upload',
        },
      },
      {
        path: 'balance/updateHistory',
        component: UpdateHistoryComponent,
        data: {
          title: 'History',
        },
      },
      {
        path: 'balance/filehistory',
        component: UpdateFileHistoryComponent,
        data: {
          title: 'File History',
        },
      },
  
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ECXRoutingModule {}

