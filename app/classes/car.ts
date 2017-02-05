import { CarMovementService } from '../services/car-movement.service';
import { Request } from './request';

import { MapService } from '../services/map.service';

import { DispatcherService } from '../services/dispatcher.service';

export class Car {
    public number: number;
    public currentLon: number;
    public currentLat: number;
    public carMovement: CarMovementService;
    public isAvailable: boolean;
    public step: string;
    public request: Request;
    public dispatcher: DispatcherService;
    public marker: any;
    public casseToi: boolean;
    public map: any;
    constructor(lon: number, lat: number, map: MapService) {    
        this.carMovement = new CarMovementService(map);
        this.carMovement.setCar(this);
        this.currentLon = lon;
        this.currentLat = lat;
        this.isAvailable = true;
        this.step = "0";
        this.casseToi = false;
        this.map = map;
    }

    public moveCarTo(lon: number, lat: number): void {
        this.carMovement.getRoute(this.currentLon, this.currentLat, lon, lat);
        this.carMovement.moveTo(lon, lat);
    }

    public setDispatcher(dispatcher: DispatcherService): void {
        this.dispatcher = dispatcher;
    }
    
    public assignRequest(request: Request): void {
        if(this.request != undefined) {
            this.casseToi = true;
        }
        this.isAvailable = false;
        this.request = request;
        this.step = "first";
        this.marker.setIcon('../../assets/yellow.png');
        console.log(this);
        this.moveCarTo(request.srcLon, request.srcLat);
    }

    public endMove() {
        if(this.step == "first") {
            this.moveCarTo(this.request.destLon, this.request.destLat);
            this.step = "second";
            this.marker.setIcon('../../assets/red.png');
            this.request.people = true;
        } else if(this.step == "second") {
        this.carMovement = new CarMovementService(this.map);
        this.carMovement.setCar(this);
            this.request.people = false;
            this.step = "0";
            this.isAvailable = true;
            var index = this.dispatcher.requests.indexOf(this.request, 0);
            if (index > -1) {
                this.dispatcher.requests.splice(index, 1);
            }
            this.request = undefined;
            this.marker.setIcon('../../assets/green.png');

            this.request = new Request(this.currentLon,this.currentLat,Number((Math.random() * (-73.560731 + 73.579064) - 73.578064).toFixed(6)),Number((Math.random() * (45.505234 - 45.505234) + 45.505234).toFixed(6)));
            this.moveCarTo(this.request.destLon, this.request.destLat);
            this.dispatcher.checkRequest();

        } else { //step == 0
            this.request = undefined;
        }
        
    }
}