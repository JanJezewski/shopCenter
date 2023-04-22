import { Component } from '@angular/core';


@Component({
  selector: 'app-buty',
  templateUrl: './buty.component.html',
  styleUrls: ['./buty.component.css']
})
export class ButyComponent {
  displayShoe = '';
  

  showShoes(){
    this.displayShoe = 'Zapewne doskonale zdajesz sobie sprawę, jak ważne są dobre buty. W końcu to one wpływają na Twoje samopoczucie i wygodę, nie tylko podczas długich spacerów czy wycieczek, ale również w codziennym życiu. Dlatego też, chcielibyśmy zaproponować Ci naszą najnowszą kolekcję butów, które pozwolą Ci poczuć się wyjątkowo i stylowo, bez rezygnacji z wygody.';
  }
  


}
  
