import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CartListComponent } from './cart-list.component';
import { ButNowComponent } from './but-now.component';

export const cartRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(cartRoutes)],
  declarations: [CartListComponent, ButNowComponent],
  exports: [CartListComponent, ButNowComponent],
  entryComponents: [CartListComponent, ButNowComponent]
})
export class CartModule { }
