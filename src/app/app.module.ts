import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ButtonComponentComponent } from './components/button-component/button-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ButtonComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
