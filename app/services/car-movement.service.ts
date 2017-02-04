import { Injectable } from '@angular/core';
import { Car } from '../classes/car';

@Injectable()
export class CarMovementService {

    public longitude: number;
    public latitude: number;

    private car: Car;

    public setCar(car: Car): void {
        this.car = car;
    }
    public moveTo(destLon: number, destLat: number) {
        
    }
}