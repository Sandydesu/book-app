import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule, MatIconModule, MatSidenavModule } from '@angular/material';
import { SideNavComponent } from './side-nav/side-nav.component';
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
  ],
  declarations: [HeaderComponent, SideNavComponent],
  exports: [HeaderComponent, SideNavComponent],
  entryComponents: [HeaderComponent, SideNavComponent]
})
export class ReusableModule { }
