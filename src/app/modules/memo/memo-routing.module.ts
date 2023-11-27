import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoComponent } from './memo/memo.component'
import { SearchComponent } from './memo/search/search.component'
import { LetterComponent } from './memo/letter/letter.component';


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
        path: 'newMemo',
        component: MemoComponent,
        data: {
          title: 'Add Memo',
        },
      },
      {
        path: 'searchMemo',
        component: SearchComponent,
        data: {
          title: 'Search Memo',
        },
      },
      {
        path: 'letter',
        component: LetterComponent,
        data: {
          title: 'View Letter',
        },
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemoRoutingModule { }

