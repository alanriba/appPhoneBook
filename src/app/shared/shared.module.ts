import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { AlertPopupComponent } from './alert-popup/alert-popup.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AlertPopupComponent
  ],
  exports: [
    HeaderComponent,
    AlertPopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule { }
