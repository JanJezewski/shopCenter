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

  constructor(private router: Router) { }

  showContent() {
    this.showComponent = true;
    this.refreshPage();
  }
  
  showContent2() {
    this.showComponent2 = true;
    this.refreshPage();
  }

  private refreshPage() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}