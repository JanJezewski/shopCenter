import { Component } from '@angular/core';
import {content} from './okazje.component.html'

@Component({
  selector: 'app-okazje',
  templateUrl: './okazje.component.html',
  styleUrls: ['./okazje.component.css']
})
export class OkazjeComponent {

  showOkazje() {
    const content = document.querySelector('#content');
    content.innerHTML = '<h2>Okazje</h2><p>Tutaj wyświetlamy listę okazji.</p>';
  }
}