import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CartListComponent } from './cart-list.component';
import { BuyNowComponent } from './buy-now.component';

export const cartRoutes: Route[] = [
  {
    path: 'myCart', component: CartListComponent
  },
  { path: 'payment', component: BuyNowComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(cartRoutes)],
  declarations: [CartListComponent, BuyNowComponent],
  exports: [CartListComponent, BuyNowComponent],
  entryComponents: [CartListComponent, BuyNowComponent]
})
export class CartModule { }
