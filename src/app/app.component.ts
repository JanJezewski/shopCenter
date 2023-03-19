import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
showOkazje() {
throw new Error('Method not implemented.');
}
  title = 'shop-web';
  config: { title: string; footer: string; date: string; };

  constructor() {
    this.config = {
      title: 'ShopWeb',
      footer: '© Strona sklepu w Angularze.',
      date: new Date().toDateString(),
    };
  }

  onClick() {
    alert("Kliknięto przycisk!");
  }
}