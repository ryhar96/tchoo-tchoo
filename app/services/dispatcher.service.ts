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

const N_CARS = 0;

@Injectable()
export class DispatcherService {

    public cars: Car[];
    public requests: Request[];
    public displayComponent: DisplayComponent;
    public requestGenerator: RequestGeneratorService;
    //public distance: number;
    
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
 
    public checkRequest(): void {
        for(let request of this.requests) {
            if (request.isBeingProcessed === false) {
                let car = this.findNearestAvailable(request.srcLon, request.srcLat);
                if (car != undefined) {
                    request.isBeingProcessed = true;
                    this.displayComponent.updateRequests();
                    car.assignRequest(request);
                }
            }
        }
    }

    public findNearestAvailable(lon: number, lat: number): Car { 

        let minDistance = 10000000; 
        let bestCar: Car = undefined; 
        for(let i = 0; i < this.cars.length; i++) { 
            if(this.cars[i].isAvailable == true) { 
               let dist = this.findDistance( 
                    this.cars[i].currentLon, 
                    this.cars[i].currentLat, 
                    lon, 
                    lat 
                ); 
                if(minDistance > dist) { 
                    minDistance = dist; 
                    bestCar = this.cars[i]; 
                } 
            } 
        } 
        return bestCar;
    }

    public findDistance(currLng: number, currLat: number, lng: number, lat: number): number {
        /*
        var dirDisplay = this.mapService.google.maps.DirectionsRenderer;
        var dirService = new this.mapService.google.maps.DirectionsService;

        let positionOrigin = {lat:  currLat, lng: currLng};
        
        let positionEnd = {lat: lat, lng: lng};

        let dist;

       // var waypts: number[];

        dirService.route({
          origin: positionOrigin,
          destination: positionEnd,
          optimizeWaypoints: true,
          travelMode: 'DRIVING'
        }, (response: any, status: any) => {
          if (status === 'OK') {
            //console.log(response);
            dist = response.routes[0].legs[0].distance.value; //distance en metre 
            //this.res = response;
            console.log(dist);//this.distance);
          } else {
            window.alert('Directions request failed due to ' + status);
            console.log('514436');
          }
        });
        return dist;
        */
        return  Math.sqrt(Math.pow((lng - currLng),2) + Math.pow((lat - currLat),2))

    }

    public createCars(n: number) {
        for(let i = 0; i < n; i++) {
            let srcLon : number = Number((Math.random() * (LON_MAX - LON_MIN) + LON_MIN).toFixed(6));
            let srcLat : number = Number((Math.random() * (LAT_MAX - LAT_MIN) + LAT_MIN).toFixed(6));
            this.cars.push(new Car(srcLon, srcLat, this.mapService));
            this.cars[this.cars.length-1].setDispatcher(this);
            this.cars[this.cars.length-1].request = new Request(srcLon,srcLat,-73.561264,45.504078);
            this.cars[this.cars.length-1].moveCarTo(this.cars[this.cars.length-1].request.destLon, this.cars[this.cars.length-1].request.destLat);
        }
    }

    public setComponent(displayComponent: DisplayComponent) {
        this.displayComponent = displayComponent;
    }

    private updateCars() {
        Observable.interval(300).subscribe(x => {
            this.displayComponent.updateCars();
        });
    }

    public addRequest(request: Request): void {
        this.requests.push(request);
        this.checkRequest(); // AVANT ?
        //this.checkRequest();
        
        this.displayComponent.updateRequests();
    }

}