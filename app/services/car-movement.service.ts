import { Injectable, OnInit } from '@angular/core';
import { Car } from '../classes/car';

import { DisplayComponent } from '../components/display.component';
import { MapService } from '../services/map.service';

var display: MapService;
var dirDisplay: any;
//var res: any;

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

//    public directionsService = new this.displayComponent.map.DirectionsService;
  //  public directionsDisplay = new this.displayComponent.map.DirectionsRenderer;
    

    private car: Car;

    public res: any;

    public setCar(car: Car): void {
        this.car = car;
        
        //this.directionService = ;
    //    this.displayComponent.map;
    }
    public moveTo(destLon: number, destLat: number) {
        
    }
    

    public getRoute(destLon: number, destLat: number): void {
        let positionOrigin = {lat:  this.latitude, lng: this.longitude};
        
        let positionEnd = {lat: destLat, lng: destLon};
        console.log(positionEnd);

        display = this.mapService;
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
            console.log(response);
            this.res = response;
          } else {
            window.alert('Directions request failed due to ' + status);
            console.log('514436');
          }
        });
        
    }


   
}
