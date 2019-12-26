import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ToggleService } from '@book-store/services';
@Component({
  selector: 'book-store-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements AfterViewInit {
  @ViewChild('sidenav', { static: true }) sidenav;
  constructor(private toggleService: ToggleService) { }

  ngAfterViewInit() {
    this.toggleService.toggleOnOffEvent().subscribe(() => {
      this.sidenav.toggle()
    });
  }


}
