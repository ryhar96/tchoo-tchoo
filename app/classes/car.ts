import { CarMovement } from '../services/car-movement.service';

export class Car {
    public number: number;
    private currentLon: number;
    private currentLat: number;
    private carMovement: CarMovement;

    constructor() {    
        this.carMovement = new CarMovement();
    }

    public moveCarTo(lon: number, lat: number): void {
        this.carMovement.moveTo(lon, lat);
    }

    public setPosition(lon: number, lat: number): void {
        this.currentLon = lon;
        this.currentLat = lat;
    }

    public getCurrentLon(lon: number): number {
        return this.currentLon;
    }
    
    public getCurrentLat(lat: number): number {
        return this.currentLat;
    }
}


//srcLon
//srcLat
//destLon  
//destLat