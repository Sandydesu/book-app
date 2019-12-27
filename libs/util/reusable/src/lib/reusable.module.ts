import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

import { CardListComponent } from './card-list/card-list.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  declarations: [CardListComponent, HeaderComponent, SideNavComponent],
  exports: [CardListComponent, HeaderComponent, SideNavComponent],
  entryComponents: [CardListComponent, HeaderComponent, SideNavComponent]
})
export class ReusableModule { }
