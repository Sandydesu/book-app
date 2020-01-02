import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'book-store-custon-button',
  templateUrl: './custon-button.component.html',
  styleUrls: ['./custon-button.component.scss']
})
export class CustonButtonComponent implements OnInit {
  @Input() theme;
  @Input() value;
  @Output() buttonClick = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

  click(event) {
    event.stopPropagation();
    this.buttonClick.emit();
  }

}
