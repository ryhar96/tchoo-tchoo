import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { CarMovement } from '../services/car-movement.service';

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
    CarMovement
  ],

  bootstrap: [ AppComponent ]
})

export class AppModule { }
