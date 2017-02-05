import { CarMovementService } from '../services/car-movement.service';
import { Request } from './request';

import { MapService } from '../services/map.service';


export class Car {
    public number: number;
    public currentLon: number;
    public currentLat: number;
    public carMovement: CarMovementService;
    public isAvailable: boolean;
    public step: string;
    public request: Request;

    public marker: any;
    
    constructor(lon: number, lat: number, map: MapService) {    
        this.carMovement = new CarMovementService(map);
        this.carMovement.setCar(this);
        this.currentLon = lon;
        this.currentLat = lat;
        this.isAvailable = true;
        this.step = "0";
        //this.map = map;
    }

    public moveCarTo(lon: number, lat: number): void {
        
        this.carMovement.moveTo(lon, lat);
    }

    public assignRequest(request: Request): void {
        this.isAvailable = false;
        this.request = request;
        this.step = "first";
        this.moveCarTo(request.srcLon, request.srcLat);
    }

    public endMove() {
        if(this.step == "first") {
            this.moveCarTo(this.request.destLon, this.request.destLat);
            this.step = "second";
        } else if(this.step == "second") {
            this.step = "0";
            this.isAvailable = true;
        } else {
            //on a pas encore codé la partie réarrangement
        }
    }
}