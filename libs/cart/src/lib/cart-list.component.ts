import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreFacade } from '@book-store/store-management';
import { CartItems } from '@book-store/util/reusable';
@Component({
  selector: 'cart-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {
  list: CartItems[];
  amount: number = 0;
  cartList;
  constructor(private facade: StoreFacade) { }

  ngOnInit() {
    this.cartList = this.facade.cartList$.subscribe((items) => {
      if (items) {
        const keys = Object.keys(items);
        this.list = keys.map(key => items[key]);
        this.list.forEach((item) => {
          this.amount = this.amount + (item.count * item.amount);
        })
        console.log(this.amount);
      }
    });
  }

  ngOnDestroy(){
    this.cartList.unsubscribe();
  }
}
