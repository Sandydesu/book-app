import { Component, OnInit } from '@angular/core';
import { StoreFacade } from '@book-store/store-management';
@Component({
  selector: 'book-store-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private facade: StoreFacade) { }

  ngOnInit() {
    this.facade.selectedItem$.subscribe((value) => {
      console.log(value);
    })
  }

}
