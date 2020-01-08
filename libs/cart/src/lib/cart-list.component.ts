import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreFacade,CartItems } from '@book-store/store-management';
import { Router } from '@angular/router';

@Component({
  selector: 'book-store-cart-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {
  list: CartItems[];
  amount = 0;
  items = 0;
  cartList;
  constructor(private facade: StoreFacade, private route:Router) { }

  ngOnInit() {
    this.cartList = this.facade.cartList$.subscribe((items) => {
      if (items) {
        const keys = Object.keys(items);
        this.list = keys.map(key => items[key]);
        this.list.forEach((item) => {
          const bookAmount = item.count * item.amount;
          this.amount = Math.round(this.amount + bookAmount);
          this.items += item.count;
        });
      }
    });
  }

  addToMyCollection() {
    this.facade.updateCart(null);
    this.facade.addCollections(this.list);
    this.route.navigate(['/']);
  }

  ngOnDestroy() {
    this.cartList.unsubscribe();
    this.cartList = null;
  }

}
