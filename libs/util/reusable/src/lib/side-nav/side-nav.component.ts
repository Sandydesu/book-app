import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'book-store-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnChanges {
  @Input() isNavOpen;
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
  }

}
