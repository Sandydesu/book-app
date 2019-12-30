import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'book-store-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() items;
  constructor() { }

  ngOnInit() {
  }
  
}
