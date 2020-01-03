import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'book-store-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  @Input() items;
  constructor() { }

  ngOnInit() {
  }

  unselectForBuy(item) {
    console.log(item);
  }
}
