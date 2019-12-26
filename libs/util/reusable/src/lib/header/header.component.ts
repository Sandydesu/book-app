import { Component, OnInit } from '@angular/core';
import { ToggleService } from '@book-store/services';
@Component({
  selector: 'book-store-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpend: boolean = false;
  constructor(private toggleService: ToggleService) { }

  ngOnInit() {
  }

  openOrCloseSideNav() {
    this.toggleService.toggleOnOffClick();
  }

}
