import { Component, OnInit } from '@angular/core';
import { StoreFacade } from '@book-store/store-management';
import { timingSafeEqual } from 'crypto';
@Component({
  selector: 'cart-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  list;
  amout: number = 0;
  constructor(private facade: StoreFacade) { }

  ngOnInit() {
    this.facade.cartList$.subscribe((items) => {
      this.list = items;
    });
  }

}
