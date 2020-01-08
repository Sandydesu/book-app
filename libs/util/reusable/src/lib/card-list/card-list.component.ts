import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StoreFacade, Item } from '@book-store/store-management';
@Component({
  selector: 'book-store-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() items;
  constructor(private route: Router, private facade: StoreFacade) { }

  ngOnInit() {
  }

  showDetails(item: Item) {
    this.facade.getSelectedItem(item);
    this.route.navigate(['/store/details'], { queryParams: { id: item.id } })
  }

  addToCart(event, item: Item) {
    event.stopPropagation();
    const cartItem = {
      id: item.id,
      title: item.title,
      authors: item.authors,
      image: item.image,
      amount: item.mrpAmount,
      count: 1
    }
    this.facade.addItemToCart(cartItem);
  }

  buyNow(event, item: Item) {
    event.stopPropagation();
    const cartItem = {
      id: item.id,
      title: item.title,
      authors: item.authors,
      image: item.image,
      amount: item.mrpAmount,
      count: 1
    }
    this.facade.addItemToCart(cartItem);
    this.route.navigate(['/myCart']);
  }

}
