import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReusableModule } from '@book-store/util/reusable';
import { DashboardComponent } from './dashboard.component';
export const dashboardRoutes: Route[] = [
  { path: '', pathMatch: "full", component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReusableModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  entryComponents: [DashboardComponent]
})
export class DashboardModule { }
