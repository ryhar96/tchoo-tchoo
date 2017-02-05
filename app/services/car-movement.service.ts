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
    public moveTo(destLon: number, destLat: number) {
        let i = 0;
        var obs = Observable.interval(500).subscribe(x => {
             //coordonnees de lq voiture = wayPoints[i].coordinnes
             this.car.currentLon = this.wayPoints[i].lng();
             this.car.currentLat = this.wayPoints[i].lat();
             i++;
             if (i == this.wayPoints.length) {
                this.car.endMove();
             }
             //this.car.moveEnd()
             obs.unsubscribe();
            //
        });
    }
    

    public getRoute(srcLon:number, srcLat: number, destLon: number, destLat: number): any {

        let positionOrigin = {lat:  srcLat, lng: srcLon};
        let positionEnd = {lat: destLat, lng: destLon};
        console.log(positionEnd);
        console.log(positionOrigin);
        var qgfq;
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
            qgfq= response.routes[0].overview_path[0].lat();
            this.wayPoints = response.routes[0].overview_path;
            //this.res = response;
          } else {
            window.alert('Directions request failed due to ' + status);
            console.log('514436');
          }
        });
        return qgfq;
    }
  
}
