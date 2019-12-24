import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'book-store-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() openOrClose = new EventEmitter();
  isOpend: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  openOrCloseSideNav() {
    this.isOpend = !this.isOpend;
    this.openOrClose.emit(this.isOpend);
  }

}
