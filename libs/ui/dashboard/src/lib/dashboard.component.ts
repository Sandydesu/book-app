import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book-store-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isNavOpen: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  isOpen(value) {
    this.isNavOpen = value;
  }
}
