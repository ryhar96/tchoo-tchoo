import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { CarMovement } from '../services/car-movement.service';

import { AppComponent } from '../components/app.component';
import { DisplayComponent } from '../components/display.component';
import { RequestGeneratorService } from '../services/request-generator.service';
import { DispatcherService } from '../services/dispatcher.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    DisplayComponent
  ],

  providers: [
    RequestGeneratorService,
    DispatcherService
    CarMovement
  ],

  bootstrap: [ AppComponent ]
})

export class AppModule { }
