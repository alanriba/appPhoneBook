import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { AlertPopupComponent } from './alert-popup/alert-popup.component';
import { PopUpDetailsComponent } from './popup-details/popup-details.component';
import { HttpErrorService } from '../services/http-error.service';

@NgModule({
  declarations: [
    HeaderComponent,
    AlertPopupComponent,
    PopUpDetailsComponent,
  ],
  exports: [
    HeaderComponent,
    AlertPopupComponent,
    PopUpDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ], providers: [
    HttpErrorService
  ]
})
export class SharedModule { }
