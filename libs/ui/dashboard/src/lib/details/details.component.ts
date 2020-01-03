import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreFacade } from '@book-store/store-management';
import { Item, CartItems } from '@book-store/util/reusable';
@Component({
  selector: 'book-store-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  selectedItem: Item;
  cartItem: CartItems;
  constructor(private facade: StoreFacade, private route: Router) { }

  ngOnInit() {
    this.facade.selectedItem$.subscribe((value: Item) => {
      this.selectedItem = value;
      this.cartItem = {
        id: value.id,
        title: value.title,
        authors: value.authors,
        image: value.image,
        amount: value.mrpAmount,
        count: 1
      }
    });
  }

  buyNow() {
    this.facade.addItemToCart(this.cartItem);
    this.route.navigate(['/myCart']);
  }

  addToCart() {
    this.facade.addItemToCart(this.cartItem);
  }

}
