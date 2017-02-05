import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { CarMovementService } from '../services/car-movement.service';

import { AppComponent } from '../components/app.component';
import { DisplayComponent } from '../components/display.component';
import { RequestGeneratorService } from '../services/request-generator.service';
import { DispatcherService } from '../services/dispatcher.service';
import { MapService } from '../services/map.service';

import { AgmCoreModule } from 'angular2-google-maps/core';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
   /* AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCPlNzk9f2_878Znc35mstxjSTf56nFLz8'
    })*/
  ],

  declarations: [
    AppComponent,
    DisplayComponent
  ],

  providers: [
    RequestGeneratorService,
    DispatcherService,
    CarMovementService,
    MapService
  ],

  bootstrap: [ AppComponent ]
})

export class AppModule { }
