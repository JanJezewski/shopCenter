import { Component } from '@angular/core';

@Component({
  selector: 'app-polecane',
  templateUrl: './polecane.component.html',
  styleUrls: ['./polecane.component.css']
})
export class PolecaneComponent {
  displayprize = '';
  displayprize2 = '';
  displayprize3 = '';
  

  showPrize() {
    this.displayprize = '24zł'
  }
  showPrize2() {
    this.displayprize2 = '25zł'
  }
  showPrize3() {
    this.displayprize3 = '26zł'
  }
}
