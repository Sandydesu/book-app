import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  declarations: [CardListComponent, HeaderComponent, SideNavComponent, TextboxComponent],
  exports: [CardListComponent, HeaderComponent, SideNavComponent, TextboxComponent],
  entryComponents: [CardListComponent, HeaderComponent, SideNavComponent, TextboxComponent]
})
export class ReusableModule { }
