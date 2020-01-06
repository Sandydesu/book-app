import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'book-store-price-details-card',
  templateUrl: './price-details-card.component.html',
  styleUrls: ['./price-details-card.component.scss']
})
export class PriceDetailsCardComponent implements OnInit {
  @Input() items;
  @Input() amount;
  constructor() { }

  ngOnInit() {
  }

}
