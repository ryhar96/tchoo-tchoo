import { Injectable } from '@angular/core';
import { Car } from '../classes/car';

let car: Car = new Car();

@Injectable()
export class CarMovement {

    public longitude: number;
    public latitude: number;

    moveTo(destLon: number, destLat: number) {
        
    }
}