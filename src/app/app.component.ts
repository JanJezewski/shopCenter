import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  displayprize = '';
  displayprize2 = '';
  displayprize3 = '';
  displayAloes = '';
  displayShoe = '';

  showOkazje() {
throw new Error('Method not implemented.');
}
showGel(){
  this.displayprize = '21.37zł';
}
  
showLed(){
  this.displayprize2 = '2.37zł';
}
showGel2(){
  this.displayprize3 = '11.37zł';
}
showAloes(){
  this.displayAloes = 'Ciekawostką o aloesie jest to, że jest to roślina o wielu zastosowaniach leczniczych i kosmetycznych, która była używana przez wiele kultur na całym świecie od tysięcy lat. Jednakże, aby zwiększyć swoją odporność na suche i trudne warunki klimatyczne, aloes jest w stanie "zamknąć" swoje pory, utrzymując wodę w liściach, co skutkuje ich charakterystycznym wyglądem i twardej, grubej skórze.';
}
showShoes(){
  this.displayShoe = 'Zapewne doskonale zdajesz sobie sprawę, jak ważne są dobre buty. W końcu to one wpływają na Twoje samopoczucie i wygodę, nie tylko podczas długich spacerów czy wycieczek, ale również w codziennym życiu. Dlatego też, chcielibyśmy zaproponować Ci naszą najnowszą kolekcję butów, które pozwolą Ci poczuć się wyjątkowo i stylowo, bez rezygnacji z wygody.';
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


}