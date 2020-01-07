import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReusableModule } from '@book-store/util/reusable';
import { DashboardComponent } from './dashboard.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { MyCollectionsComponent } from './my-collections/my-collections.component';

export const dashboardRoutes: Route[] = [
  {
    path: 'store',
    component: DashboardComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'details',
        component: DetailsComponent
      },
      {
        path: 'my-collections',
        component: MyCollectionsComponent
      }
    ]
  },
  { path: '', pathMatch: "full", redirectTo: '/store/list' }
];

@NgModule({
  imports: [
    CommonModule,
    ReusableModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [DashboardComponent, ListComponent, DetailsComponent, MyCollectionsComponent],
  exports: [DashboardComponent, ListComponent, DetailsComponent, MyCollectionsComponent],
  entryComponents: [DashboardComponent, ListComponent, DetailsComponent, MyCollectionsComponent]
})
export class DashboardModule { }
