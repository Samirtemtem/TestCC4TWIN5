import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponentComponent,
    FooterComponentComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
