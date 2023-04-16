import { Component } from '@angular/core';

@Component({
  selector: 'app-meble',
  templateUrl: './meble.component.html',
  styleUrls: ['./meble.component.css']
})
export class MebleComponent {
  showComponent = false;

showContent() {
  this.showComponent = true;
}
}
