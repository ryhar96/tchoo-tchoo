import { CarMovementService } from '../services/car-movement.service';
import { Request } from './request';

export class Car {
    public number: number;
    public currentLon: number;
    public currentLat: number;
    public carMovement: CarMovementService;
    public isAvailable: boolean;

    constructor() {    
        this.carMovement = new CarMovementService();
        this.carMovement.setCar(this);
    }

    public moveCarTo(lon: number, lat: number): void {
        this.carMovement.moveTo(lon, lat);
    }

    public assignRequest(request: Request): void {
        this.moveCarTo(request.srcLon, request.srcLat);
        this.moveCarTo(request.destLon, request.destLat);
    }
}


//srcLon
//srcLat
//destLon  
//destLat