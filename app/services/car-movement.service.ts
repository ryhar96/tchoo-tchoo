import { Injectable, OnInit } from '@angular/core';
import { Car } from '../classes/car';

import { DisplayComponent } from '../components/display.component';
import { MapService } from '../services/map.service';

@Injectable()
export class CarMovementService implements OnInit {

    constructor(
        public mapService: MapService
    ) { }

    ngOnInit() {

    }

    public longitude: number;
    public latitude: number;
    public position: number[];
    //public directionService: AgmCoreModule;

//    public directionsService = new this.displayComponent.map.DirectionsService;
  //  public directionsDisplay = new this.displayComponent.map.DirectionsRenderer;
    
    private car: Car;

    public setCar(car: Car): void {
        this.car = car;
        //this.directionService = ;
    //    this.displayComponent.map;
    }
    public moveTo(destLon: number, destLat: number) {
        
    }
/*
    public getRoute(destLon: number, destLat: number): void {
        var positionOrigin: number[] = [this.longitude, this.latitude];
        var positionEnd: number[] = [destLon, destLat];
        var display = this.directionsDisplay;
        
        this.directionsService.route(
            {
                origin: positionOrigin,
                destination: positionEnd,
                travelMode: google.maps.TravelMode.DRIVING
            },
            function(response: any, status: any, display: any) {
                if (status === google.maps.DirectionsStatus.OK) {
                    display.setDirections(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                 }
            }
        );
    }*/
}