import { Component } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './noPageFound.component.html',
  styleUrls: [ './noPageFound.component.css' ]
})

export class NoPageFoundComponent {

  year = new Date().getFullYear();

}
