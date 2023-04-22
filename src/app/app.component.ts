import { Component, Input, NgModule } from '@angular/core';
import { ButyComponent } from './buty/buty.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {


inputValue = 'Example Text';
title = 'shop-web';
  config: { title: string; footer: string; date: string; };


  constructor() {
    this.config = {
      title: 'ShopWeb',
      

      footer: '© Strona sklepu w Angularze.',
      date: new Date().toDateString(),
    };
  }


}