import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReusableModule } from '@book-store/util/reusable';
import { DashboardComponent } from './dashboard.component';
import { ListComponent } from './list/list.component';
export const dashboardRoutes: Route[] = [
  {
    path: 'store',
    component: DashboardComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      }]
  },
  { path: '', pathMatch: "full", redirectTo: '/store/list' }
];

@NgModule({
  imports: [
    CommonModule,
    ReusableModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [DashboardComponent, ListComponent],
  exports: [DashboardComponent, ListComponent],
  entryComponents: [DashboardComponent, ListComponent]
})
export class DashboardModule { }
