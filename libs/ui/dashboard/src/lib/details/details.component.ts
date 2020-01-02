import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreFacade } from '@book-store/store-management';
@Component({
  selector: 'book-store-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  selectedItem
  constructor(private facade: StoreFacade, private route: Router) { }

  ngOnInit() {
    this.facade.selectedItem$.subscribe((value) => {
      this.selectedItem = value;
    });
  }

  buyNow() {
    this.facade.addItemToCart(this.selectedItem);
    this.route.navigate(['/myCart']);
  }

  addToCart() {
    this.facade.addItemToCart(this.selectedItem);
  }

}
