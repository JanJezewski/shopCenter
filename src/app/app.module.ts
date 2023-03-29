import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OkazjeComponent } from './okazje/okazje.component';
import { ActiveButtonComponent } from './active-button/active-button.component';
import { HitComponent } from './hit/hit.component';
import { PolecaneComponent } from './polecane/polecane.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
  NavbarComponent,
  OkazjeComponent,
  ActiveButtonComponent,
  HitComponent,
  PolecaneComponent
  
],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
