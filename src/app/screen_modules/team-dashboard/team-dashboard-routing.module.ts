import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardViewComponent} from './dashboard-view/dashboard-view.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardViewComponent,
    children: [
      { path: 'dashboardView', component: DashboardViewComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamDashboardRoutingModule {
  static components = [DashboardViewComponent];

}
