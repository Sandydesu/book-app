import { Component, OnInit } from '@angular/core';
import { StoreFacade } from '@book-store/store-management';
@Component({
  selector: 'book-store-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private storeFacade: StoreFacade) { }

  ngOnInit() {
    this.storeFacade.loadAll();
    this.storeFacade.allStore$.subscribe((res) => {
      console.log(res);
    });
  }

}
