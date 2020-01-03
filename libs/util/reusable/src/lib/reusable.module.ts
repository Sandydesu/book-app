import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

import { CardListComponent } from './card-list/card-list.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TextboxComponent } from './textbox/textbox.component';
import { CustonButtonComponent } from './custon-button/custon-button.component';
import { CartListComponent } from './cart-list/cart-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule
  ],
  declarations: [CardListComponent, HeaderComponent, SideNavComponent, TextboxComponent, CustonButtonComponent, CartListComponent],
  exports: [CardListComponent, HeaderComponent, SideNavComponent, TextboxComponent, CustonButtonComponent, CartListComponent],
  entryComponents: [CardListComponent, HeaderComponent, SideNavComponent, TextboxComponent, CustonButtonComponent, CartListComponent]
})
export class ReusableModule { }
