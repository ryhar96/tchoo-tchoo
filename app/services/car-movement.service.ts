import { Injectable } from '@angular/core';
import { Car } from '../classes/car';
//import { AgmCoreModule } from 'angular2-google-maps/core';



@Injectable()
export class CarMovementService {

    public longitude: number;
    public latitude: number;
    //public directionService: AgmCoreModule;

    private car: Car;

    public setCar(car: Car): void {
        this.car = car;
        //this.directionService = ;
    }
    public moveTo(destLon: number, destLat: number) {
        
    }

    public getRoute(destLon: number, destLat: number): void {

    }
}