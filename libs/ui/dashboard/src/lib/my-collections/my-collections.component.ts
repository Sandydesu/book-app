import { Component, OnInit } from '@angular/core';
import { StoreFacade } from '@book-store/store-management';
@Component({
  selector: 'book-store-my-collections',
  templateUrl: './my-collections.component.html',
  styleUrls: ['./my-collections.component.scss']
})
export class MyCollectionsComponent implements OnInit {
  list = this.facade.myCollections$;
  constructor(private facade: StoreFacade) { }

  ngOnInit() {
  }

}
