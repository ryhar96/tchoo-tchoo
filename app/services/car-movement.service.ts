import { Injectable, OnInit } from '@angular/core';
import { Car } from '../classes/car';

import { DisplayComponent } from '../components/display.component';
import { MapService } from '../services/map.service';

var display: MapService;
var dirDisplay: any;
var res: any;

@Injectable()
export class CarMovementService {

    constructor(
        public mapService: MapService
    ) { }

    public longitude: number;
    public latitude: number;
    public position: number[];
    //public directionService: AgmCoreModule;

//    public directionsService = new this.displayComponent.map.DirectionsService;
  //  public directionsDisplay = new this.displayComponent.map.DirectionsRenderer;
    

    private car: Car;

    public setCar(car: Car): void {
        this.car = car;
        this.latitude = 45.517814;
        this.longitude = -73.645481;
        //this.directionService = ;
    //    this.displayComponent.map;
    }
    public moveTo(destLon: number, destLat: number) {
        
    }
    

    public getRoute(destLon: number, destLat: number): void {
        let positionOrigin: {lat: 45.517814, lng: -73.645481};
        var positionEnd: number[] = [destLat, destLon];
                    

        display = this.mapService;
        dirDisplay = this.mapService.google.maps.DirectionsRenderer;
        var dirService = new this.mapService.google.maps.DirectionsService;

        var waypts: number[];
        
        dirService.route({
          origin: {lat: 45.517814, lng: -73.645481},
          destination: {lat: 45.517814, lng: -63.645481},
          waypoints: waypts,
          optimizeWaypoints: true,
          travelMode: 'DRIVING'
        }, (response: any, status: any) => {
          if (status === 'OK') {
            console.log(response);
            dirDisplay.setDirections(response);
            console.log('fsdfsa');            
          } else {
            window.alert('Directions request failed due to ' + status);
            console.log('514436');
          }
        });
        
    }


   
}
