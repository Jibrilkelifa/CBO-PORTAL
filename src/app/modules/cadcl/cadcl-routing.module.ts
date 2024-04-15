import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewChecklistComponent } from "./Check-List/view-checklist/view-checklist.component";
import { CreateComponent } from "./Check-List/create/create.component";
import { ChecklistsComponent } from "./Replay-Page/checklists/checklists.component";


const routes: Routes = [
    {
      path: '',
      data: {
        title: 'Checklist'
      },
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'accountTable'
        },
        {
          path: 'newAccount',
          component: CreateComponent,
          data: {
            title: 'New Checklist'
          }
        },
        {
          path: 'my-checklists',
          component: ChecklistsComponent,
          data: {
            title: 'Checklist Table'
          },
        },
        {
          path: 'checklist',
          component: ViewChecklistComponent,
          data: {
            title: 'Daily Checklist',
          },
        },
      ]
    }
  ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CADCLRoutingModule {}

