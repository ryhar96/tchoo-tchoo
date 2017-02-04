import { Injectable } from '@angular/core';
import { Car } from '../classes/car';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { DisplayComponent } from '../components/display.component';

declare var google:any;


@Injectable()
export class CarMovementService {

    public longitude: number;
    public latitude: number;
    //public directionService: AgmCoreModule;

    public displayComponent: DisplayComponent;

    public directionsDisplay = new this.displayComponent.map.DirectionsRenderer;
    
    private car: Car;

    public setCar(car: Car): void {
        this.car = car;
        //this.directionService = ;
        this.displayComponent.map;
    }
    public moveTo(destLon: number, destLat: number) {
        
    }

    public getRoute(destLon: number, destLat: number): void {

    }
}