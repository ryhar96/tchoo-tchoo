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
    ) {
        this.latitude = 45.517814;
        this.longitude = -73.645481;
        
     }

    public longitude: number;
    public latitude: number;
    public position: number[];
    //public directionService: AgmCoreModule;
    //public directionsService = new this.mapService.google.maps.DirectionsService;
    //public directionsDisplay = new this.mapService.google.maps.DirectionsRenderer;
    

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
        //var obs = Observable.interval(100).subscribe(x => {
             //coordonnees de lq voiture = wayPoints[i].coordinnes
             //this.car.currentLon = this.wayPoints[i].lng;
             //i++
             //if i == array.length
             //this.car.moveEnd()
            // obs.unsubscribe();
            //
        //});
    }
    

    public getRoute(destLon: number, destLat: number): void {

        let positionOrigin = {lat:  this.latitude, lng: this.longitude};
        
        let positionEnd = {lat: destLat, lng: destLon};
        //console.log(positionEnd);


      dirDisplay = this.mapService.google.maps.DirectionsRenderer;
      var dirService = new this.mapService.google.maps.DirectionsService;

        var waypts: number[];
        
        dirService.route({
          origin: positionOrigin,
          destination: positionEnd,
          waypoints: waypts,
          optimizeWaypoints: true,
          travelMode: 'DRIVING'
        }, (response: any, status: any) => {
          if (status === 'OK') {
            //console.log(response);
            this.wayPoints = response.routes[0].overview_path;
            //this.res = response;
            console.log(this.wayPoints[0].lat());
          } else {
            window.alert('Directions request failed due to ' + status);
            console.log('514436');
          }
        });
        
    }
  
}
