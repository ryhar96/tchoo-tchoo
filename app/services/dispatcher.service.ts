import { Injectable, Inject } from '@angular/core';

import { Request } from '../classes/request';
import { Car } from '../classes/car';
import { RequestGeneratorService } from './request-generator.service';
import { DisplayComponent } from '../components/display.component';

import { MapService } from './map.service';
import { Observable } from 'rxjs/Rx';

const LAT_MAX = 45.548669;
const LAT_MIN = 45.450963;

const LON_MIN = -73.754601;
const LON_MAX = -73.532482;

const N_CARS = 20;

@Injectable()
export class DispatcherService {

    public cars: Car[];
    public requests: Request[];
    public displayComponent: DisplayComponent;
    public requestGenerator: RequestGeneratorService;
    
    constructor(
        public mapService: MapService
    ) {
        this.cars = [];
        this.requests = [];
        this.requestGenerator = new RequestGeneratorService();
        this.requestGenerator.addDispatcher(this);
        this.createCars(N_CARS);
        this.updateCars();
    }

    public assignRequest(request: Request) { 
        let car = this.findNearestAvailable(request.srcLon, request.srcLat); 
        request.isBeingProcessed = true;
        this.displayComponent.updateRequests();
        car.assignRequest(request);
    } 
 
    public findNearestAvailable(lon: number, lat: number): Car { 
        /*let minDistance = 10000000; 
        let bestCar: Car = undefined; 
        for(let i = 0; i < cars.length; i++) { 
            if(cars[i].isAvailable == true) { 
                let distance = findDistance( 
                    cars[i].srcLon, 
                    cars[i].srcLat, 
                    lon, 
                    lat 
                ); 
                if(minDistance > distance) { 
                    minDistance = distance; 
                    bestCar = cars[i]; 
                } 
            } 
        } 
        return bestCar;  */return new Car(0, 0, this.mapService);
    }

    private createCars(n: number) {
        for(let i = 0; i < n; i++) {
            let srcLon : number = Number((Math.random() * (LON_MAX - LON_MIN) + LON_MIN).toFixed(6));
            let srcLat : number = Number((Math.random() * (LAT_MAX - LAT_MIN) + LAT_MIN).toFixed(6));
            this.cars.push(new Car(srcLon, srcLat, this.mapService));
        }
    }

    public setComponent(displayComponent: DisplayComponent) {
        this.displayComponent = displayComponent;
    }

    private updateCars() {
        Observable.interval(50).subscribe(x => {
            this.displayComponent.updateCars();
        });
    }

    public addRequest(request: Request): void {
        this.requests.push(request);
        this.displayComponent.updateRequests();
    }

}