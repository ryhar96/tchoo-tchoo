import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from '../components/app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent
  ],

  providers: [
  ],

  bootstrap: [ AppComponent ]
})

export class AppModule { }
