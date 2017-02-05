import { Injectable, OnInit } from '@angular/core';
import { Car } from '../classes/car';

import { DisplayComponent } from '../components/display.component';
import { MapService } from '../services/map.service';
import { Observable } from 'rxjs/Rx';

var dirDisplay: any;


@Injectable()
export class CarMovementService {

    constructor(
        public mapService: MapService
    ) {}
    public longitude: number;
    public latitude: number;
    public position: number[];

    private car: Car;

    public wayPoints: any[];
    //public res: any;

    public setCar(car: Car): void {
        this.car = car;
        
        //this.directionService = ;
    //    this.displayComponent.map;
}

public i = 0;

    public moveTo(destLon: number, destLat: number) {
        this.i = 0;
        var obs = Observable.interval(5000).subscribe(x => {
             //coordonnees de lq voiture = wayPoints[i].coordinnes
             console.log(this.car.currentLon);
             this.car.currentLon = this.wayPoints[this.i].lng();
             console.log(this.car.currentLon);
             this.car.currentLat = this.wayPoints[this.i].lat();
             this.i++;
             console.log(this.i);
             if (this.i == this.wayPoints.length) {
                this.car.endMove();
             }
             //this.car.moveEnd()
             obs.unsubscribe();
            //
        });
    }
    

    public getRoute(srcLon:number, srcLat: number, destLon: number, destLat: number){

        let positionOrigin = {lat:  srcLat, lng: srcLon};
        let positionEnd = {lat: destLat, lng: destLon};
        
        var dirService = new this.mapService.google.maps.DirectionsService;

        dirDisplay = this.mapService.google.maps.DirectionsRenderer;
        var dirService = new this.mapService.google.maps.DirectionsService;

        var waypts: number[];
        
        dirService.route({
          origin: positionOrigin,
          destination: positionEnd,
         //waypoints: waypts,
          optimizeWaypoints: true,
          travelMode: 'DRIVING'
        }, (response: any, status: any) => {
          if (status === 'OK') {
            //console.log(response);
            this.wayPoints = response.routes[0].overview_path;
            //this.res = response;
          } else {
            window.alert('Directions request failed due to ' + status);
            console.log('514436');
          }
        });
    
    }
  
}
