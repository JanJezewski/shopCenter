import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OkazjeComponent } from './okazje/okazje.component';
import { HitComponent } from './hit/hit.component';
import { PolecaneComponent } from './polecane/polecane.component';
import { ButyComponent } from './buty/buty.component';
import { RolinyComponent } from './roliny/roliny.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CardComponent } from './card/card.component';
import { ErroComponent } from './erro/erro.component';
import { MebleComponent } from './meble/meble.component';




@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
  NavbarComponent,
  OkazjeComponent,
  HitComponent,
  PolecaneComponent,
  ButyComponent,
  RolinyComponent,
  PaginationComponent,
  CardComponent,
  ErroComponent,
  MebleComponent,


  
 

  
],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
