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
    this.storeFacade.loadAll();
    this.storeFacade.allStore$.subscribe((res) => {
      if (res && res['items']) {
        this.booksList = res['items'];
      }
    });
  }

}
