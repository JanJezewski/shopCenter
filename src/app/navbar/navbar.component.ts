import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showComponent = false;
  showComponent2 = false;
  showComponent3 = false;
  showComponent4 = false;
  showComponent5 = false;
  showComponent6 = false;
  showComponent7 = false;
  showComponent8 = false;
  showComponent9 = false;
  showComponent10 = false;

  constructor(private router: Router) { }

  showContent() {
    this.showComponent = true;
    this.refreshPage();
  }
  
  showContent2() {
    this.showComponent2 = true;
    this.refreshPage();
  }

  showContent3() {
    this.showComponent3 = true;
    this.refreshPage();
  }

  showContent4() {
    this.showComponent4 = true;
    this.refreshPage();
  }

  showContent5() {
    this.showComponent5 = true;
    this.refreshPage();
  }
  showContent6() {
    this.showComponent6 = true;
    this.refreshPage();
  }
  showContent7() {
    this.showComponent7 = true;
    this.refreshPage();
  }
  showContent8() {
    this.showComponent8 = true;
    this.refreshPage();
  }
  showContent9() {
    this.showComponent9 = true;
    this.refreshPage();
  }
  showContent10() {
    this.showComponent10 = true;
    this.refreshPage();
  }

  private refreshPage() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}