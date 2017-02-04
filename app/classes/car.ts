import { CarMovementService } from '../services/car-movement.service';

export class Car {
    public number: number;
    private currentLon: number;
    private currentLat: number;
    private carMovement: CarMovementService;
    private isAvailable: boolean;

    constructor() {    
        this.carMovement = new CarMovementService();
        this.carMovement.setCar(this);
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

    public getAvailability(): boolean {
        return this.isAvailable;
    }
}


//srcLon
//srcLat
//destLon  
//destLat