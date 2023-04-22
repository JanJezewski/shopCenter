import { Component } from '@angular/core';

@Component({
  selector: 'app-roliny',
  templateUrl: './roliny.component.html',
  styleUrls: ['./roliny.component.css']
})
export class RolinyComponent {
  displayAloes = '';


  showAloes(){
    this.displayAloes = 'Ciekawostką o aloesie jest to, że jest to roślina o wielu zastosowaniach leczniczych i kosmetycznych, która była używana przez wiele kultur na całym świecie od tysięcy lat. Jednakże, aby zwiększyć swoją odporność na suche i trudne warunki klimatyczne, aloes jest w stanie "zamknąć" swoje pory, utrzymując wodę w liściach, co skutkuje ich charakterystycznym wyglądem i twardej, grubej skórze.';
  }


}
