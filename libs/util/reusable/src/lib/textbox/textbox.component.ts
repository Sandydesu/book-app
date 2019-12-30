import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'book-store-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {
  @Output() changeText = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  textChanged(value) {
    this.changeText.emit(value);
  }

}
