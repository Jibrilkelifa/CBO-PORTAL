import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewChecklistComponent } from "./Check-List/view-checklist/view-checklist.component";
import { CreateComponent } from "./Check-List/create/create.component";
import { ChecklistsComponent } from "./Replay-Page/checklists/checklists.component";
import { ReportsComponent } from "./reports/reports.component";
import { DetailComponent } from "./Details-Page/detail/detail.component";
import { RespondePageComponent } from "./Replay-Page/responde-page/responde-page.component";


const routes: Routes = [
    {
      path: '',
      data: {
        title: 'CAO Inquiry/Activity'
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
            title: 'my checklists'
          },
        },
        {
          path: 'update/:id',
          component: DetailComponent,
          data: {
            title: 'Check List / Details'
          },
        },
        {
          path: 'replay/:id',
          component: RespondePageComponent,
          data: {
            title: 'Check List / Details'
          },
        },
        {
          path: 'checklist',
          component: ViewChecklistComponent,
          data: {
            title: 'List',
          },
        },
        {
          path: 'reports',
          component: ReportsComponent,
          data: {
            title: 'Generate Report',
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

