import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StoreFacade } from '@book-store/store-management';
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

  showDetails(event, item) {
    this.facade.getSelectedItem(item);
    this.route.navigate(['/store/details'], { queryParams: { id: item.id } })
  }

  addToCart(event, item) {
    event.stopPropagation();
    console.log(event, 'addtocart');
  }

  buyNow(event, item) {
    event.stopPropagation();
    this.route.navigate(['/myCart']);
  }

}
