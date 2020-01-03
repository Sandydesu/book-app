import { Component, OnInit } from '@angular/core';
import { StoreFacade } from '@book-store/store-management';
@Component({
  selector: 'book-store-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  booksList = new Array();
  constructor(private storeFacade: StoreFacade) { }

  ngOnInit() {
    this.storeFacade.allStore$.subscribe((res) => {
      this.booksList = res;
    });
  }

  changeText(value) {
    this.storeFacade.loadAll(value);
  }

}
